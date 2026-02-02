


const http = require('http');

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

            console.log(JSON.stringify(targets.map(p => ({
                id: p.id,
                name: p.propertyName,
                multipleImages: p.multipleImages
            })), null, 2));

            // Also list first 3 properties generally to see generic structure
            console.log('--- Generic Sample ---');
            console.log(JSON.stringify(properties.slice(0, 3).map(p => ({
                name: p.propertyName,
                multipleImages: p.multipleImages
            })), null, 2));

        } catch (e) {
            console.error(e.message);
        }
    });
}).on("error", (err) => {
    console.log("Error: " + err.message);
});
