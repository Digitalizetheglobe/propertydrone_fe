module.exports = [
"[project]/propertydrone/propertydrone_fe/utils/serverSeo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateMetadata",
    ()=>generateMetadata
]);
const SEO_CONFIG = {
    compareproperties: {
        title: "Compare Properties | Top Real Estate Agency Pune",
        description: "Compare multiple properties side by side to find your perfect home. View detailed specifications, prices, and features of luxury properties in Pune.",
        keywords: [
            "compare properties Pune",
            "property comparison",
            "real estate comparison",
            "luxury homes comparison Pune"
        ]
    }
};
async function generateMetadata(page) {
    return SEO_CONFIG[page] || {
        title: "Top Real Estate Agency Pune",
        description: "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties."
    };
}
}),
"[project]/propertydrone/propertydrone_fe/app/compareproperties/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ComparePropertiesLayout,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$utils$2f$serverSeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/utils/serverSeo.ts [app-rsc] (ecmascript)");
;
;
async function generateMetadata() {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$utils$2f$serverSeo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])("compareproperties");
}
function ComparePropertiesLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=propertydrone_propertydrone_fe_2ae9ad6d._.js.map