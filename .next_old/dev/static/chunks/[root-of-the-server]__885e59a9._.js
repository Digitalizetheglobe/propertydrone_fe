(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedLetters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
// components/AnimatedLetters.tsx
'use client';
;
;
const letterVariant = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.015,
                duration: 0.3
            }
        })
};
function AnimatedLetters({ text, className = '', as: Tag = 'h2' }) {
    const letters = Array.from(text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: className,
        style: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        children: letters.map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                custom: i,
                initial: "hidden",
                whileInView: "visible",
                viewport: {
                    once: true
                },
                variants: letterVariant,
                style: {
                    display: 'inline-block'
                },
                children: char === ' ' ? '\u00A0' : char
            }, i, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = AnimatedLetters;
var _c;
__turbopack_context__.k.register(_c, "AnimatedLetters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main1.c3968c25.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main1.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1920,
    height: 1080,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAASUlEQVR42o2KSwrAIBBD5/7HrGAXbaUfLSSbVCmDO3ERXhKekdQoNiUA/Wjdd6M9mdoO6LqpXKg9QemEysvKKoQVChFa4k/vvj9lCZsI6BAW0QAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/final-bg.163cd30a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 5760,
    height: 14610,
    blurWidth: 3,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAYAAAA870V8AAAAQElEQVR42k2MUQ7AIAhDuf95h1NH6aj6IQlJX/NSezw4v6TOvF2gEJGrMDVvB6Uv6AP0BhpKz3pU2APzDMgdB344+F6oGlsAoQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/finalbg2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/finalbg2.8ab65913.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/finalbg2.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/finalbg2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$finalbg2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/finalbg2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$finalbg2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2880,
    height: 6368,
    blurWidth: 4,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAATElEQVR42k3GsQmAMBQE0BvaFcQJBCewsbeztbZyAQtBDIHwQwghXEh3xYOH77dosbLrx/MWKlx3psJxJipsu1FhWQMVxtlTYZgcVQNKLGx9+DZfUgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 104.a7313219.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVUlEQVR42n3NsQ6AIBADUP7/v5xcdHAyxgFxNUSEg7tQ4w1OhOG1S5OaWgU95ouHPG66kLlAhH86KD5gG0bMy4R9dXDuhLWHdkoRRojAIUJyVs2Lnhcezpuk7YLmoAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 105.d4afc2f0.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAYElEQVR42oXOPQqAMBQD4N7/RgqCJ3AXnbRQUOxQa+3Pa+PD7jp8SyAhohTCF0EUQRSYRwwns6B0v3JOEFof2NSMXQ5YxpY1kHOPdepwGVUXUnTcNIi+ouQ4s8i8LP4+PPH6muFA9XltAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 106.c4bf26bf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAa0lEQVR42oWOOw6DMBBEffbcJYdIldCilBFNPlUiBRAFCK93bcTDiB6K0StmpHlunif24tKUaHuPV0PNsBiRzJC5dq76NJzOJZfHj9v9zbV8UlRfilfNfxCcD0rXj8S8VhVExsxATLZdHDksabaZd2MkOHEAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 107.b27601cf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAdklEQVR42mWMTQqCQABGvVSLrtS6VXQVqWUdoI4QVEI/RAjq3o3gz+jMoONTFBVx8cHH4/Gsuq7oZ9A6RyvBxCqs4WRpxO+2JXA2JHG4FHz3hb1fY+9WeH9nLhhT8nzcuZwOXM9Hvp93x2YFKQuEyNqlKCXHQgMRiZSWEwC/HgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 109.a460ef8e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAUElEQVR42n3NQQ7AIAgEQP//tgZ9QWNjfEKrSHUNHDh6GBIC2Q1r/TgJOpgbev+cCBt7mFOQ842UCDESiC7UWlDKA71Zwhgdrb1Od031ipMNB0abOuur4PIAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 110.3248ed4e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAXElEQVR42oWOOxKAIBBDuf/BtMUWG0ockcIPsgsSAQs7LVJk8pKJyDnhSyIlhrVzUwgn9m0FM5XweoFBSvRdVyCLUSlorTEZ00BRqdp0bgFRgPcHqPgY+Vn4+3AD5wSbATc+LrQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 111.e9a69aea.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVUlEQVR42oWOwQqAIBAF99v7gz5NAs8RnTPQdV1dfIXnyMPchmGod8Mf1CziSg6Bt2/hZg93LPDnCpGEUjJUBVoFZgrSFkYh5h3M6SUiCw/RrIJmDw/1fpsgAd3eOAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 112.0d63dbf3.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAWklEQVR42n3MywqAIBSEYd//vaJW7QtChCIw8gja1ZOTrWzl4pvV8IsYGSXiGw5ncoBIwxiNcG94+MoHuyqMsoXsKqi+xjQ02P2SDyEVnDMgM8Mm3hH4Xyh5AQqYmy9PT5KKAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 113.b9c14735.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAiElEQVR42k2MOwrCQABEczw7u1RqoeCvkOiSIgtB0EbwPlaixYLxQ/AYGhLb7AqSJxsCm+INA/MYr6p+aFPyzjJeDbZrXWI3z0bySOnPBFJuiLd7wvUOldydcFIXBvOQVRAhlhEdf8jheHbCLX3ijxZMRcw4kHR7E9S19WC+mvxTkBcOY3Qt/AG6eISFpX20PAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 114.b61ff7ce.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAYUlEQVR42oWOXQqAIBzD//e/TccIgqITREkQWRqVaX4sFXqthx/bwzZGITh8Qc5e0PsEcy4wB8etRPZWb/BOg5QYMLYFJGuwdiVEX2Ukq2OQg7zVsTkjLaXGq4ngLejvwwPdlJrunZq/PwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 115.ebc2eb0b.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAX0lEQVR42oWOuw5FQBgG97XPm51XcOmQ0CkkemJ3/wtDFEqKyRRf8U04DueNoLszRWPJQk4RkfR4v7YwJ+PXRv7dSFkWtE1DXVUMQ4+7EcSdcTNWUVQzZnoht++Lr4YTpSmaL6mXjEcAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 116.8b790f9c.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAXklEQVR42n2MMQqAIBhGu/8R2sMtHIIu0BlaQ8gUpwjR1F+/wMUmhwdveLyhFEKPoUpOoNsge4sQPFIKIIotyO6BXUbIbQVjEzifofX1O6QXUexw5oRSEkIc9dSCDh+cSZmI6dF+gAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 117.15f1d846.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 232,
    height: 149,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAVElEQVR42oXOMQ6AIBBE0b3/9USIFIYjsEuhwMIoNMZGi9dNfoZ6V3wh1QIRRiknas0vrVWQSIT322TtihB2OGdhzIKUGDSWzBE5H7enMoqz8PfhAvCDmvOjUrsLAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/OIP (1).a3f99bf7.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 474,
    height: 266,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBs2otBE8S21uUWfaAY+3HpVe0knoZ+zjY//9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/OIP (8).b4fed3bb.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 191,
    height: 107,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDml1CU6fnZFuJC52DpU+3nz3uChHksf//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/today8.488e9edc.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 900,
    height: 837,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAHAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDlTY2yIvydeM5NXzMXIj//2Q=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/7578550-uhd_3840_2160_30fps 1.7f48b5d2.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1560,
    height: 878,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAlklEQVR42gWA6w6BUACAz8O4znWumfjhYLkcVsetVlKaaTRj/nn4z8R4cWKpIw7Bk/D6Iryk7I9nHFtjryyEDm54ccr7+yPLPvhBjK09dkqR6AVitvVQB58oueOHEWpjI6cKZyZ5OBJRqLRpmRaTtct842KYEnM4ZmJ0kYMOoljr0hlZNFoG1VoTo9en3aiTz+UoFcv8AXejSyfcO6/MAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main2.4316a375.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main2.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 394,
    height: 263,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAoElEQVR42gVAuwqCUBg+j51LTUWLYjREQ+JWVEO1VIjGMbzhXTKxFLGLLxE/X7BvW6N5Fkh8Gw7XEDoceeIjTwPcEp/Yuy7waUp0bYW2uqMuUnSvGo88RuxyYrFnIrINxI6BxL2gKTPkkY3QMuDyMzHX1ODxExz9gMDSkflXKPMJ5HEf0rBHbKeKtF+MaDMb0FqRyDouaavKpIgCrabC7w+a6IF1OOOAYgAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 145.1d4efe00.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1560,
    height: 661,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAQ0lEQVR42m3KsQqAIBRAUb+5sTHao++qoXhEhaCjICgKOl93cTjbUTFXes555DwIqaBG4b6EfV0wxo6Dfj+2eeJ/hAY/Uld0NMRzegAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/buliding.efb46373.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/buliding.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 744,
    height: 598,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ALPE1v/D0N7/5Orw/9ng6P+Onaj/mKWv/8vT2f/h5+3/AM7Z5P/G0t//2ODp/7fDzv9rgpT/jqGw/4ubpv+LmqT/AMzX4v/R2+X/1t/o/5epuP9he47/j6S1/5ans/+Bkp3/AKu9zf+uvcv/vsrW/4SarP9eeIz/hZyv/3eLnP9vgpH/AHmQnv9feIv/VWp6/0Recv9XcIL/boKS/1Vpd/9SZnX/ADNGNf83TT//MkY8/yxAQv86Tlj/XG5z/1lpaf9YZ2b/riOE/soPeQsAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/download (1).70dc43b7.webp");}),
"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 273,
    height: 180,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/webp;base64,UklGRuoAAABXRUJQVlA4TN0AAAAvBwABAM1VICICHgiACQMAAIBOKQoB4AEOAAAAAAAAAAAAAAAABAAIAAAACOAAAODCPjHuuJeKEAAAgAcCkMIAAABw/uVV5XepIKASAwkUAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAACOKBgJhAAAAAnP9LAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPAma/nesGuJ9Kdpi2Ekh9KpgXC50d2buvXKKd8Y9Z+rL1bNFjt25/2r2QegAH5ciBjIyafMps5veZlink71ESXEenpLkBuK/AM5vE1XAQA="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/developerbgimg.5ce21fff.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1240,
    height: 598,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/ABwtQ/8jPF3/IT1g/xwvQ/8dMET/LUZq/yU9XP8aKTn/AERJW/9YZYv/UGWS/1JfZv9SX2n/UmmZ/1ZkhP9CSlb/ACUrNv9jYnD/aGZ8/3V7lf91fZr/bm2E/2Nhb/8nLjr/ABcdIP89Rln/aWuE/4uFjf+Qi5b/dHWS/0pNY/8aIzP/tYlAKzTTsN0AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/R.5bc2a560.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/R.jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1400,
    height: 800,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC3rep30aLDJdPI08e0nAAGQDwMfhXE6k5T5WzVRSWiP//Z"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 1 (2).7f853063.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAUElEQVR42kXMOwqAMBBF0ex/aVZWFjYWFoKiBD9kYjJzNSn0wakuPCciQVNG74Rl/alSmuPd2vYsTcc1ztU5TMjiS8JJCCH6g7jtmBl8qA8P+Txc+K0YNboAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 2 (1).4d5668d3.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAUUlEQVR42j2MywmAMBAF03852oAINmAFJgc/EA8SNavgjlGMA+8yD8aISCShqpxhJXSWK76K5zN8uGGmalqKsmYafdaYXFjCjus9Nm2Lx1+4Ac8SW+KUPY9YAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 3 (1).0871e76a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaElEQVR42iXJPQtAQACH8fvQymL3CXwBi0WJlLwsNpOXhQVhkIES6a47+jt56jc9hMrY/YCKH5P4uUNI3yPLyaGnE9SwhxJ00KIOhuXDtAMsBwPZjosmzQyvHOHkA/xqgpvViIsWq3wv1+lU+F+5EdQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 4 (3).ed205743.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAXklEQVR42h3MsQqAIBRGYR8+aA56joqCnqOCarahJVKkLtcU/cuGj7Mdcd3E07ohcWwB7xGd+1lmFvthkJcNsqKCrHrYuoVtkg6RCCIdxkVimCUebRCUQjjPrxpMxC/Lw1ccx1k6SwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 5.183be7ed.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAQklEQVR42m3JsQ3AIBBD0dt/swBZIxTQYlMccRCpkLD09AsbAb5jaOO+yjlDKcoxLU+If6+gnG6hVhlao/euE87vA6uRWzBLcyZHAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 6 (1).7d6f4338.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AOPp7/eyyt//r8jd/6nE2/+mwtr/qMPb/6/I3v/i6e/3ANbh6/9rk7H/bZSw/2WOrf9eiqv/ZI6t/2eQsP/U4On/APHy8vfh5eX/3eLi/9/k4//e4uL/3+Pj/9/k5P/w8fH3FuxPsblK2x0AAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 7 (3).e39d8d84.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR42mXMIQ6AMAxG4d0cOdyOU1MEhEMQYCiCAVLVNM3EDwEc4qmXfMFUzacF2rTwMaO4w8ye9H6hrBvOOmGvIo6YMHQ9iAjMDBFBeIX8CfNPuACwrVafytB5XAAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 8.7e05caed.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZklEQVR42h3MMQ5AMACF4d7PxCA2mxERN7C4EnYkWklblTpCtbF2fMrw8k3vJ7fU/uECjh2wTAXVr6UKRlyerFWHOY8wxQWGuMSUtRjTBkNSYal7EMO1d1TAbjK8QmU/4cI+jdD+BeFZTQuWP4YDAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 9.c5791955.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWElEQVR42k2MsQ5AMBQA+49Ws9EskUgkBjH4BksHH2CzMbFTjW+o0duOJogb75JTInJyc9iduayZigpnrFf4pnjYdEsfxXRByNroV6P+hzHNGZIMt5jvcAFSQVRAAp/ChQAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 10.e7390d9a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWklEQVR42h3MQQqAIBBGYe/ejbqCBB0gywhUaNNWwZkRBv6aFm/xNp/rxLxkxt0qmBlEhN47RMSeHenAtHrM14mUEo4YEcKOXApUFa5+hH82hBYgY/yCZZoJL0TLWYHjTH4DAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 11.7b96d28e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAT0lEQVR42jWLUQ6AIAxDd/+7qSeYAh/+qYRAnAukMqJNmrTpK4nIjU+8nmA+/grbyIJqQymKadkxd+f8oNY2IDIqJYHzET5EhO7NXeNg2wvaTFvdhaLvfwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 12.4546affa.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZ0lEQVR42i3MOQ5AQABG4TmgKLUoJQ6iQOEkWoVtkrElIgpLRCISE3ODKX8ZFK98H7n4LcdpR9ksyNiMlE3Iqxm0XXGcQhLKOpiuB83yodvBXwjDiRAnPcjFheyG7T2UoirqBbT5hAeDXEs4JqFPPwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 13 (1).70acc720.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR42jXMwQ2AIBBEUfpvw068GW3Agw0YIYYAu7Ar40bD4WVO810mItaO9uBTjfR/MzG5Iwqm/cZ8NiPYgmL1gsUrrtrhoiUCK5LdhmzFokAqTC/PL1waOZtwAwAAAABJRU5ErkJggg=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 14 (2).68a0882e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42h2MuwqDMAAA8+kdOvcfOnRr6V46OigGcVB0UXTxESSIqMmU03jrHSestUbNO2mlyJuJrFasMsZpjXeCk6jseXwk91fI7RnQvr84Y7xC+GrQG2HR809afrJh6UZw7jocw5BW19T8dlIAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 15 (2).42309e23.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAV0lEQVR42hWLSQ6AIBAE+b0v8UsYLx40MYgb+4BG2qGSSvelBDFgaq2obdn3yzjTBBs0iVgebC5gNQ7Kemj+47GgHzrIS0KEmCjkgqZnW3BThoozdm/oB8vhW10SE5rLAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 16.e75e9681.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAX0lEQVR42iXGSw5AMBRG4e7cAqzH3AIkTJsgHqHSir7S3mLwCwYn52O7ljRZgXRfiCchJPr8Zr0jVtUlsiJHs7bg2wguBnRyRq8WrFqBqUMSFy0cBZjgYaKHjf8Pa+gBNIBZJVInA6EAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 17.f19dccbf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAU0lEQVR42jWMwQqAIBBE/f+v61BCBEaXjmUGyuruTqvQwDsMPJ4rORchgtSKVhvIUJFBsTmKD+7Z4zLOaUHwAe9+IK4bKCW4bkEVyjwqwoL/9/oHzYlcLEK+yygAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 18.b94f2b77.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR42i3HsQpAQBwH4Htlr0AWL2CyyGAis0Eki12hKJxz9D+LuvHnkuEbPvaIQxOXGDfCyBX6lT6D+SJIs7NpkQQpnLCAG1Ww/Bx2WMKLa2R1B/bIU9/HhXlXmH6zuA0FLkm/EXhTRZJIRTEAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 19.2a871afd.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AOru8vfX4+3/1eLs/9jf6f/W3+n/1OHs/9bj7f/s7/L3AMPW5f9ikLb/Yoqv/192mv9ciq//Woux/16Ns//L2ub/AObs8PfM2+j/zs7Z/9HO1//L2+f/y9rn/83c6P/p7fH3l0FQYFqlyRgAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 20.8e68b687.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 857,
    height: 370,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/AN/s5/fw8+7/1ezk/9Hq4//O6eH/yOfe/8jm3v/X6eT3ALDSwP/YwaD/gb6l/3PAqf9lu6D/WbWZ/1u2mv+X0b//AN/s5/fv8On/1Ozk/9Dr4v/O6uH/zurh/87q4f/b6+b3yMJRirnUFFQAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/app/images/PropertyDrone-Logo.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/app/images/PropertyDrone-Logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const PropertyPopup = ({ onClose, onSubmitSuccess })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');
        try {
            const response = await fetch('http://localhost:5000/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.fullName,
                    email: formData.email,
                    mobile: formData.phone,
                    message: 'Popup contact form submission'
                })
            });
            if (!response.ok) throw new Error('Failed to submit form');
            setSuccess('Thank you! We will contact you soon.');
            setFormData({
                fullName: '',
                email: '',
                phone: ''
            });
            localStorage.setItem('propertyPopupClosed', 'true');
            if (onSubmitSuccess) {
                onSubmitSuccess();
            } else {
                setTimeout(()=>setIsVisible(false), 2000);
            }
        } catch (err) {
            setError('Submission failed. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    const closePopup = ()=>{
        localStorage.setItem('propertyPopupClosed', 'true');
        if (onClose) {
            onClose();
        } else {
            setIsVisible(false);
        }
    };
    // Show popup after 3 minutes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyPopup.useEffect": ()=>{
            // Check if popup has been closed previously
            const isClosed = localStorage.getItem('propertyPopupClosed');
            if (isClosed) return;
            const timer = setTimeout({
                "PropertyPopup.useEffect.timer": ()=>{
                    setIsVisible(true);
                }
            }["PropertyPopup.useEffect.timer"], 180000);
            return ({
                "PropertyPopup.useEffect": ()=>clearTimeout(timer)
            })["PropertyPopup.useEffect"];
        }
    }["PropertyPopup.useEffect"], []);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closePopup,
                className: "jsx-d963a95a2bed2c6f" + " " + "fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-scale-up transform transition-all duration-300 hover:scale-105 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closePopup,
                            "aria-label": "Close popup",
                            className: "jsx-d963a95a2bed2c6f" + " " + "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d963a95a2bed2c6f" + " " + "p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "text-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: "Logo",
                                            className: "max-h-12 sm:max-h-none mx-auto"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "text-2xl font-bold text-gray-800 text-center mb-6 hover:text-blue-600 transition-colors duration-300",
                                    children: "Fill The Form, We Care For You!"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center",
                                    children: success
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "jsx-d963a95a2bed2c6f" + " " + "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "fullName",
                                                placeholder: "Full Name",
                                                value: formData.fullName,
                                                onChange: handleInputChange,
                                                required: true,
                                                className: "jsx-d963a95a2bed2c6f" + " " + "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                                lineNumber: 145,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                placeholder: "Email",
                                                value: formData.email,
                                                onChange: handleInputChange,
                                                required: true,
                                                className: "jsx-d963a95a2bed2c6f" + " " + "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    className: "jsx-d963a95a2bed2c6f" + " " + "block font-lato text-sm mb-1",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    id: "phone",
                                                    name: "phone",
                                                    onInput: (e)=>{
                                                        const input = e.target;
                                                        input.value = input.value.replace(/\D/g, '');
                                                    },
                                                    value: formData.phone,
                                                    onChange: handleInputChange,
                                                    pattern: "[0-9]{10}",
                                                    maxLength: 10,
                                                    minLength: 10,
                                                    required: true,
                                                    title: "Please enter a valid 10-digit phone number",
                                                    inputMode: "numeric",
                                                    className: "jsx-d963a95a2bed2c6f" + " " + "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 placeholder-gray-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "jsx-d963a95a2bed2c6f" + " " + "w-full bg-[#172747] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0f1a33] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-60",
                                            children: loading ? 'Submitting...' : 'GET INSTANT CALL BACK'
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "text-center text-gray-600 text-sm mt-4 animate-fade-in-delayed",
                                    children: "We respect your privacy and will never spam you."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d963a95a2bed2c6f",
                children: "@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes scale-up{0%{opacity:0;transform:scale(.8)translateY(20px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes fade-in-delayed{0%,50%{opacity:0}to{opacity:1}}.animate-fade-in.jsx-d963a95a2bed2c6f{animation:.3s ease-out fade-in}.animate-scale-up.jsx-d963a95a2bed2c6f{animation:.4s ease-out scale-up}.animate-fade-in-delayed.jsx-d963a95a2bed2c6f{animation:2s ease-out fade-in-delayed}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(PropertyPopup, "zEw/JDOz4MujflpoTMiowzlrecY=");
_c = PropertyPopup;
const __TURBOPACK__default__export__ = PropertyPopup;
var _c;
__turbopack_context__.k.register(_c, "PropertyPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const BottomPropertyDetails = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Properties & Flats for Sale");
    const [tabData, setTabData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BottomPropertyDetails.useEffect": ()=>{
            const fetchProperties = {
                "BottomPropertyDetails.useEffect.fetchProperties": async ()=>{
                    try {
                        const response = await fetch('http://localhost:5000/properties');
                        if (!response.ok) {
                            console.error('Failed to fetch properties:', response.status);
                            setTabData(getDefaultData()); // Fallback
                            return;
                        }
                        const properties = await response.json();
                        // Initialize Tabs
                        const newTabData = {
                            "Properties & Flats for Sale": [],
                            "Properties & Flats for Rent": [],
                            "New Projects & Plots": [],
                            "Commercial": []
                        };
                        // Group by: Tab -> Location (Area) -> Set of specific property type links if possible, 
                        // or just generic links for that location.
                        const locationMap = {};
                        Object.keys(newTabData).forEach({
                            "BottomPropertyDetails.useEffect.fetchProperties": (k)=>locationMap[k] = new Set()
                        }["BottomPropertyDetails.useEffect.fetchProperties"]);
                        properties.forEach({
                            "BottomPropertyDetails.useEffect.fetchProperties": (p)=>{
                                const type = (p.propertyType || "").toLowerCase();
                                const category = (p.propertyCategory || "").toLowerCase();
                                let tabKey = "Properties & Flats for Sale";
                                if (category.includes("rent") || category.includes("lease")) {
                                    tabKey = "Properties & Flats for Rent";
                                } else if (type.includes("land") || type.includes("plot")) {
                                    tabKey = "New Projects & Plots";
                                } else if (type.includes("commercial") || type.includes("office") || type.includes("retail") || type.includes("shop") || type.includes("showroom")) {
                                    tabKey = "Commercial";
                                }
                                const location = p.location && p.location.trim() ? p.location.trim() : null;
                                if (!location) return;
                                locationMap[tabKey].add(location);
                            }
                        }["BottomPropertyDetails.useEffect.fetchProperties"]);
                        // Convert Map to TabData
                        Object.keys(locationMap).forEach({
                            "BottomPropertyDetails.useEffect.fetchProperties": (tabKey)=>{
                                const locations = Array.from(locationMap[tabKey]).sort();
                                locations.forEach({
                                    "BottomPropertyDetails.useEffect.fetchProperties": (location)=>{
                                        let links = [];
                                        if (tabKey === "Properties & Flats for Sale") {
                                            links = [
                                                {
                                                    name: `Flats for Sale in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}`
                                                },
                                                {
                                                    name: `Properties in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}`
                                                },
                                                {
                                                    name: `Properties for Sale in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}`
                                                }
                                            ];
                                        } else if (tabKey === "Properties & Flats for Rent") {
                                            links = [
                                                {
                                                    name: `Flats for Rent in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=rent`
                                                },
                                                {
                                                    name: `Properties for Rent in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=rent`
                                                }
                                            ];
                                        } else if (tabKey === "Commercial") {
                                            links = [
                                                {
                                                    name: `Offices in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=commercial`
                                                },
                                                {
                                                    name: `Shops in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=commercial`
                                                }
                                            ];
                                        } else {
                                            links = [
                                                {
                                                    name: `Plots in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}&type=plot`
                                                },
                                                {
                                                    name: `New Projects in ${location}`,
                                                    url: `/our-properties-in-pune?location=${encodeURIComponent(location)}`
                                                }
                                            ];
                                        }
                                        newTabData[tabKey].push({
                                            title: `${location}`,
                                            links: links
                                        });
                                    }
                                }["BottomPropertyDetails.useEffect.fetchProperties"]);
                            }
                        }["BottomPropertyDetails.useEffect.fetchProperties"]);
                        setTabData(newTabData);
                    } catch (err) {
                        console.error("Error loading property details for footer:", err);
                        setTabData(getDefaultData());
                    } finally{
                        setLoading(false);
                    }
                }
            }["BottomPropertyDetails.useEffect.fetchProperties"];
            fetchProperties();
        }
    }["BottomPropertyDetails.useEffect"], []);
    // Fallback data if API fails
    const getDefaultData = ()=>({
            "Properties & Flats for Sale": [
                {
                    title: "Baner",
                    links: [
                        {
                            name: "Flats for Sale in Baner",
                            url: "/our-properties-in-pune?location=Baner"
                        }
                    ]
                }
            ]
        });
    const currentTabContent = tabData[activeTab] || [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white text-[#424242] py-8 text-xs font-sans border-t border-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-[#f5f5f5] overflow-x-auto border-b border-gray-200 no-scrollbar",
                    children: Object.keys(tabData).filter((key)=>tabData[key].length > 0).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab),
                            className: `px-4 py-3 whitespace-nowrap font-semibold border-b-2 transition-colors duration-200 text-[11px] sm:text-[12px] uppercase tracking-wide
                                ${activeTab === tab ? 'border-gray-800 text-gray-900 bg-white' : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`,
                            children: tab
                        }, tab, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                            lineNumber: 142,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 min-h-[200px]",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-32 text-gray-400",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                        lineNumber: 158,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : currentTabContent.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8",
                        children: currentTabContent.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-gray-800 text-[13px] mb-1",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                        lineNumber: 165,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5",
                                        children: section.links.map((link, linkIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.url,
                                                    className: "text-gray-500 hover:text-[#172747] hover:underline transition-colors duration-200 block leading-tight text-[11px]",
                                                    children: link.name
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 49
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, linkIdx, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                                lineNumber: 168,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                        lineNumber: 166,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, idx, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                lineNumber: 164,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                        lineNumber: 162,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10 text-gray-400",
                        children: "No properties found."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                        lineNumber: 182,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
            lineNumber: 138,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
        lineNumber: 137,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BottomPropertyDetails, "DIMIcMROKb7czGvtRp2LTMv3a74=");
_c = BottomPropertyDetails;
const __TURBOPACK__default__export__ = BottomPropertyDetails;
var _c;
__turbopack_context__.k.register(_c, "BottomPropertyDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/raleway_359f8b5b.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "raleway_359f8b5b-module__VBlGBG__className",
});
}),
"[next]/internal/font/google/raleway_359f8b5b.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/raleway_359f8b5b.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Raleway', 'Raleway Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyPropertyDrone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/raleway_359f8b5b.js [app-client] (ecmascript)");
;
;
;
function WhyPropertyDrone() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ccc184b24aafd0e1" + " " + `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$raleway_359f8b5b$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].className} `,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ccc184b24aafd0e1" + " " + "max-w-6xl mx-auto py-16 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ccc184b24aafd0e1" + " " + "flex flex-col sm:flex-row mb-[25px] w-full justify-between items-start gap-6 sm:gap-0 opacity-0 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-full sm:w-1/2 pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "jsx-ccc184b24aafd0e1" + " " + "text-xl sm:text-2xl lg:text-4xl font-bold text-black transform translate-y-4 opacity-0 animate-slide-up animation-delay-200",
                                            children: "Why Property Drone ?"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 13,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-ccc184b24aafd0e1" + " " + "text-xl sm:text-2xl lg:text-4xl font-bold text-[#6E6E73] transform translate-y-4 opacity-0 animate-slide-up animation-delay-400",
                                            children: "Built on trust. Designed for ease."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 16,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 12,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-full sm:w-1/2 text-lg text-gray-500 transform translate-y-4 opacity-0 animate-slide-up animation-delay-600",
                                    children: "Explore the most sought-after localities with detailed insights into available properties. Compare listings by neighborhood, evaluate your options, and find a location that aligns perfectly with your lifestyle and preferences."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                            lineNumber: 11,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-ccc184b24aafd0e1" + " " + "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-800 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 32 32",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-blue-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 30,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-blue-600",
                                                children: "Verified Listings"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 47,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "Every property is vetted for accuracy and authenticity."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 29,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-1000 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 682.667 682.667",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-green-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            className: "jsx-ccc184b24aafd0e1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                id: "a",
                                                                clipPathUnits: "userSpaceOnUse",
                                                                className: "jsx-ccc184b24aafd0e1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M0 512h512V0H0Z",
                                                                    "data-original": "#000000",
                                                                    className: "jsx-ccc184b24aafd0e1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeMiterlimit: 10,
                                                            strokeWidth: 40,
                                                            clipPath: "url(#a)",
                                                            transform: "matrix(1.33 0 0 -1.33 0 682.667)",
                                                            className: "jsx-ccc184b24aafd0e1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z",
                                                                    "data-original": "#000000",
                                                                    className: "jsx-ccc184b24aafd0e1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                    lineNumber: 81,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M178 271.894 233.894 216 334 316.105",
                                                                    "data-original": "#000000",
                                                                    className: "jsx-ccc184b24aafd0e1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 59,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-green-600",
                                                children: "Trusted Developers"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 92,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "Partnered with renowned builders and real estate brands."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 95,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 58,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-1200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 24 24",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-purple-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        className: "jsx-ccc184b24aafd0e1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z",
                                                                "data-original": "#000000",
                                                                className: "jsx-ccc184b24aafd0e1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z",
                                                                "data-original": "#000000",
                                                                className: "jsx-ccc184b24aafd0e1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z",
                                                                "data-original": "#000000",
                                                                className: "jsx-ccc184b24aafd0e1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-purple-600",
                                                children: "Smart Search Filters"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 127,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "Easily narrow down results to fit your exact needs."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 130,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 103,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-1400 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 512.001 512.001",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-orange-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z",
                                                        "data-original": "#000000",
                                                        className: "jsx-ccc184b24aafd0e1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 139,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-orange-600",
                                                children: "Expert Assistance"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "Personalized support to help you at every step."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 153,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-1600 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 504.69 504.69",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-teal-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 181,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z",
                                                            "data-original": "#000000",
                                                            className: "jsx-ccc184b24aafd0e1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 162,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-teal-600",
                                                children: "Transparent Information"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "No hidden details — just honest, clear property data."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 161,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 160,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-ccc184b24aafd0e1" + " " + "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-300 transform opacity-0 animate-card-appear animation-delay-1800 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ccc184b24aafd0e1" + " " + "p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "#000",
                                                    viewBox: "0 0 682.667 682.667",
                                                    className: "jsx-ccc184b24aafd0e1" + " " + "w-8 mb-6 transition-colors duration-300 group-hover:fill-indigo-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                            className: "jsx-ccc184b24aafd0e1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                                id: "a",
                                                                clipPathUnits: "userSpaceOnUse",
                                                                className: "jsx-ccc184b24aafd0e1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M0 512h512V0H0Z",
                                                                    "data-original": "#000000",
                                                                    className: "jsx-ccc184b24aafd0e1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                            fill: "none",
                                                            stroke: "#000",
                                                            strokeMiterlimit: 10,
                                                            strokeWidth: 30,
                                                            clipPath: "url(#a)",
                                                            transform: "matrix(1.33 0 0 -1.33 0 682.667)",
                                                            className: "jsx-ccc184b24aafd0e1",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30",
                                                                "data-original": "#000000",
                                                                className: "jsx-ccc184b24aafd0e1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 231,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 211,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-900 text-lg font-semibold mb-3 transition-colors duration-300 group-hover:text-indigo-600",
                                                children: "Diverse Inventory"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 238,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-ccc184b24aafd0e1" + " " + "text-slate-500 text-sm font-medium leading-relaxed transition-all duration-300 group-hover:text-slate-600",
                                                children: "From cozy apartments to sprawling commercial spaces — all in one place."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 241,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 210,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 209,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "ccc184b24aafd0e1",
                children: "@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes slide-up{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes card-appear{0%{opacity:0;transform:translateY(30px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}.animate-fade-in.jsx-ccc184b24aafd0e1{animation:.8s ease-out forwards fade-in}.animate-slide-up.jsx-ccc184b24aafd0e1{animation:.8s ease-out forwards slide-up}.animate-card-appear.jsx-ccc184b24aafd0e1{animation:.8s ease-out forwards card-appear}.animation-delay-200.jsx-ccc184b24aafd0e1{animation-delay:.2s}.animation-delay-400.jsx-ccc184b24aafd0e1{animation-delay:.4s}.animation-delay-600.jsx-ccc184b24aafd0e1{animation-delay:.6s}.animation-delay-800.jsx-ccc184b24aafd0e1{animation-delay:.8s}.animation-delay-1000.jsx-ccc184b24aafd0e1{animation-delay:1s}.animation-delay-1200.jsx-ccc184b24aafd0e1{animation-delay:1.2s}.animation-delay-1400.jsx-ccc184b24aafd0e1{animation-delay:1.4s}.animation-delay-1600.jsx-ccc184b24aafd0e1{animation-delay:1.6s}.animation-delay-1800.jsx-ccc184b24aafd0e1{animation-delay:1.8s}html.jsx-ccc184b24aafd0e1{scroll-behavior:smooth}.group.jsx-ccc184b24aafd0e1:hover{transform:translateY(-8px)scale(1.05);box-shadow:0 25px 50px -12px #00000040,0 0 0 1px #ffffff1a}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_c = WhyPropertyDrone;
var _c;
__turbopack_context__.k.register(_c, "WhyPropertyDrone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/propertydrone/propertydrone_fe/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/propertydrone/propertydrone_fe/app/page.tsx'\n\nExpected ',', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__885e59a9._.js.map