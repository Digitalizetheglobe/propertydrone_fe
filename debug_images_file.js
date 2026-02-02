
const http = require('http');
const fs = require('fs');

http.get('http://localhost:5000/properties', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        try {
            const properties = JSON.parse(data);
            const targets = properties.filter(p =>
                (p.propertyName && (p.propertyName.toLowerCase().includes('bhavik') || p.propertyName.toLowerCase().includes('rahul') || p.propertyName.toLowerCase().includes('majestique')))
            );

            const output = JSON.stringify(targets.map(p => ({
                id: p.id,
                name: p.propertyName,
                hasMultipleImages: p.multipleImages && p.multipleImages.length > 0,
                firstImage: p.multipleImages && p.multipleImages.length > 0 ? p.multipleImages[0] : null,
                rawImageField: p.image
            })), null, 2);

            fs.writeFileSync('debug_output.json', output);
            console.log("Wrote to debug_output.json");

        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
