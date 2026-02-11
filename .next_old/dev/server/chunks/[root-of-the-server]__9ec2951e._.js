module.exports = [
    "[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

        module.exports = mod;
    }),
    "[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

        module.exports = mod;
    }),
    "[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

        module.exports = mod;
    }),
    "[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

        module.exports = mod;
    }),
    "[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

        module.exports = mod;
    }),
    "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

        const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

        module.exports = mod;
    }),
    "[project]/propertydrone/propertydrone_fe/app/api/youtube-videos/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
        "use strict";

        // Proxy route for /api/youtube-videos
        __turbopack_context__.s([
            "GET",
            () => GET
        ]);
        async function GET(req) {
            try {
                const res = await fetch('http://localhost:5000/youtube-videos');
                if (!res.ok) {
                    // Log the error status and text for debugging
                    const errorText = await res.text();
                    console.error('External API error:', res.status, errorText);
                    return new Response(JSON.stringify({
                        error: 'Failed to fetch from external API',
                        details: errorText
                    }), {
                        status: res.status
                    });
                }
                const data = await res.json();
                return new Response(JSON.stringify(data), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } catch (error) {
                // Log the error for debugging
                console.error('Proxy error:', error);
                return new Response(JSON.stringify({
                    error: 'Proxy error',
                    details: error.message
                }), {
                    status: 500
                });
            }
        }
    }),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ec2951e._.js.map