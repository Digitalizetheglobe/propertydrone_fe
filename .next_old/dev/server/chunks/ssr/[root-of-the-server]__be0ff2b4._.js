module.exports = [
"[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedLetters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: className,
        style: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        children: letters.map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main1.c3968c25.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main1.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/final-bg.163cd30a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 104.a7313219.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 105.d4afc2f0.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 106.c4bf26bf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 107.b27601cf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 109.a460ef8e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 110.3248ed4e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 111.e9a69aea.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 112.0d63dbf3.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 113.b9c14735.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 114.b61ff7ce.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 115.ebc2eb0b.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 116.8b790f9c.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 117.15f1d846.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/7578550-uhd_3840_2160_30fps 1.7f48b5d2.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main2.4316a375.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main2.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/buliding.efb46373.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/buliding.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 1 (2).7f853063.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 2 (1).4d5668d3.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 3 (1).0871e76a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 4 (3).ed205743.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 5.183be7ed.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 6 (1).7d6f4338.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 7 (3).e39d8d84.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 8.7e05caed.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 9.c5791955.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 10.e7390d9a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 11.7b96d28e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 12.4546affa.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 13 (1).70acc720.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 14 (2).68a0882e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 15 (2).42309e23.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 16.e75e9681.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 17.f19dccbf.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 18.b94f2b77.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 19.2a871afd.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Group 20.8e68b687.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/app/images/PropertyDrone-Logo.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/app/images/PropertyDrone-Logo.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
const PropertyPopup = ({ onClose, onSubmitSuccess })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if popup has been closed previously
        const isClosed = localStorage.getItem('propertyPopupClosed');
        if (isClosed) return;
        const timer = setTimeout(()=>{
            setIsVisible(true);
        }, 180000);
        return ()=>clearTimeout(timer);
    }, []);
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: closePopup,
                className: "jsx-d963a95a2bed2c6f" + " " + "fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center p-4 animate-fade-in",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (e)=>e.stopPropagation(),
                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-scale-up transform transition-all duration-300 hover:scale-105 border border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closePopup,
                            "aria-label": "Close popup",
                            className: "jsx-d963a95a2bed2c6f" + " " + "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200 hover:rotate-90 transform",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d963a95a2bed2c6f" + " " + "p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "text-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$images$2f$PropertyDrone$2d$Logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "text-2xl font-bold text-gray-800 text-center mb-6 hover:text-blue-600 transition-colors duration-300",
                                    children: "Fill The Form, We Care For You!"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4 text-center",
                                    children: success
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d963a95a2bed2c6f" + " " + "bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "jsx-d963a95a2bed2c6f" + " " + "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-d963a95a2bed2c6f" + " " + "mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone",
                                                    className: "jsx-d963a95a2bed2c6f" + " " + "block font-lato text-sm mb-1",
                                                    children: "Phone No"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d963a95a2bed2c6f",
                children: "@keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes scale-up{0%{opacity:0;transform:scale(.8)translateY(20px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes fade-in-delayed{0%,50%{opacity:0}to{opacity:1}}.animate-fade-in.jsx-d963a95a2bed2c6f{animation:.3s ease-out fade-in}.animate-scale-up.jsx-d963a95a2bed2c6f{animation:.4s ease-out scale-up}.animate-fade-in-delayed.jsx-d963a95a2bed2c6f{animation:2s ease-out fade-in-delayed}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = PropertyPopup;
}),
"[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const BottomPropertyDetails = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Properties & Flats for Sale");
    const [tabData, setTabData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProperties = async ()=>{
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
                Object.keys(newTabData).forEach((k)=>locationMap[k] = new Set());
                properties.forEach((p)=>{
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
                });
                // Convert Map to TabData
                Object.keys(locationMap).forEach((tabKey)=>{
                    const locations = Array.from(locationMap[tabKey]).sort();
                    locations.forEach((location)=>{
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
                    });
                });
                setTabData(newTabData);
            } catch (err) {
                console.error("Error loading property details for footer:", err);
                setTabData(getDefaultData());
            } finally{
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-transparent text-[#172747] py-8 text-xs font-sans border-t border-[#172747]/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-transparent overflow-x-auto border-b border-[#172747]/20 no-scrollbar",
                    children: Object.keys(tabData).filter((key)=>tabData[key].length > 0).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveTab(tab),
                            className: `px-4 py-3 whitespace-nowrap font-semibold border-b-2 transition-colors duration-200 text-[11px] sm:text-[12px] uppercase tracking-wide
                                ${activeTab === tab ? 'border-[#172747] text-[#172747] bg-transparent' : 'border-transparent text-[#172747] hover:text-[#172747] hover:bg-[#172747]/5'}`,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 min-h-[200px]",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-32 text-[#172747]",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                        lineNumber: 158,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : currentTabContent.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8",
                        children: currentTabContent.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-[#172747] text-[13px] mb-1",
                                        children: section.title
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx",
                                        lineNumber: 165,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-1.5",
                                        children: section.links.map((link, linkIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.url,
                                                    className: "text-[#172747] hover:text-[#172747]/80 hover:underline transition-colors duration-200 block leading-tight text-[11px]",
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
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = BottomPropertyDetails;
}),
"[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyPropertyDrone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function WhyPropertyDrone() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto py-16 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row mb-[25px] w-full justify-between items-start gap-6 sm:gap-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full sm:w-1/2 pr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl sm:text-2xl lg:text-4xl font-bold text-[#172747] uppercase tracking-wider mb-2",
                                        style: {
                                            fontFamily: 'Lato, sans-serif'
                                        },
                                        children: "Why Property Drone?"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 10,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl sm:text-2xl lg:text-4xl font-[300] text-[#172747]",
                                        style: {
                                            fontFamily: 'Ivy Mode, sans-serif'
                                        },
                                        children: "Built on trust. Designed for ease."
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                        lineNumber: 13,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 9,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "w-full sm:w-1/2 text-lg text-[#172747] opacity-80",
                                style: {
                                    fontFamily: 'Lato, sans-serif'
                                },
                                children: "Explore the most sought-after localities with detailed insights into available properties. Compare listings by neighborhood, evaluate your options, and find a location that aligns perfectly with your lifestyle and preferences."
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                        lineNumber: 8,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 32 32",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 28,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 27,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Verified Listings"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 42,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "Every property is vetted for accuracy and authenticity."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 45,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 682.667 682.667",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                            id: "a",
                                                            clipPathUnits: "userSpaceOnUse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M0 512h512V0H0Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        fill: "none",
                                                        stroke: "#172747",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeMiterlimit: 10,
                                                        strokeWidth: 40,
                                                        clipPath: "url(#a)",
                                                        transform: "matrix(1.33 0 0 -1.33 0 682.667)",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M178 271.894 233.894 216 334 316.105"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 55,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 54,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Trusted Developers"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 85,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "Partnered with renowned builders and real estate brands."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 111,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 98,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 97,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Smart Search Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 117,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "Easily narrow down results to fit your exact needs."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 512.001 512.001",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 130,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 129,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Expert Assistance"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 141,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "Personalized support to help you at every step."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 142,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 128,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 504.69 504.69",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M252.343 262.673c-49.32 0-89.447-40.127-89.447-89.447s40.127-89.447 89.447-89.447 89.447 40.127 89.447 89.447-40.121 89.447-89.447 89.447zm0-158.235c-37.926 0-68.787 30.861-68.787 68.787s30.861 68.787 68.787 68.787 68.787-30.861 68.787-68.787-30.855-68.787-68.787-68.787z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M391.787 405.309c-5.645 0-10.253-4.54-10.325-10.201-.883-70.306-58.819-127.503-129.15-127.503-49.264 0-93.543 27.405-115.561 71.52-8.724 17.473-13.269 36.31-13.517 55.988-.072 5.702-4.757 10.273-10.459 10.201s-10.273-4.757-10.201-10.459c.289-22.814 5.568-44.667 15.691-64.955 25.541-51.164 76.907-82.95 134.047-82.95 81.581 0 148.788 66.349 149.81 147.905.072 5.702-4.494 10.392-10.201 10.459-.046-.005-.087-.005-.134-.005z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M252.343 463.751c-116.569 0-211.408-94.834-211.408-211.408 0-116.569 94.839-211.408 211.408-211.408 116.574 0 211.408 94.839 211.408 211.408 0 116.574-94.834 211.408-211.408 211.408zm0-402.156c-105.18 0-190.748 85.568-190.748 190.748s85.568 190.748 190.748 190.748 190.748-85.568 190.748-190.748S357.523 61.595 252.343 61.595zM71.827 90.07 14.356 32.599c-4.034-4.034-4.034-10.573 0-14.607 4.029-4.034 10.573-4.034 14.607 0l57.466 57.471c4.034 4.034 3.951 10.49 0 14.607-3.792 3.951-11.039 3.698-14.602 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14.717 92.254a10.332 10.332 0 0 1-10.299-9.653L.023 15.751a10.317 10.317 0 0 1 2.929-7.908 10.2 10.2 0 0 1 7.851-3.089L77.56 7.796c5.697.258 10.108 5.093 9.85 10.79s-5.041 10.154-10.79 9.85l-55.224-2.521 3.641 55.327c.377 5.692-3.936 10.614-9.628 10.986a7.745 7.745 0 0 1-.692.026zm403.541-2.184c-4.256-3.796-4.034-10.573 0-14.607l58.116-58.116c4.034-4.034 10.573-4.034 14.607 0s4.034 10.573 0 14.607L432.864 90.07c-4.085 3.951-9.338 4.7-14.606 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M489.974 92.254a9.85 9.85 0 0 1-.687-.021c-5.697-.372-10.01-5.294-9.633-10.986l3.641-55.327-55.224 2.515c-5.511.238-10.526-4.147-10.79-9.85-.258-5.702 4.153-10.531 9.85-10.79l66.757-3.042c2.934-.134 5.79.992 7.851 3.089s3.12 4.974 2.929 7.908l-4.401 66.85c-.361 5.465-4.896 9.654-10.293 9.654zM11.711 489.339c-3.791-4.266-4.034-10.573 0-14.607l60.115-60.11c4.029-4.034 10.578-4.034 14.607 0 4.034 4.034 4.034 10.573 0 14.607l-60.115 60.11c-3.827 3.884-11.156 3.884-14.607 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M10.327 499.947a10.33 10.33 0 0 1-7.376-3.104 10.312 10.312 0 0 1-2.929-7.902l4.401-66.85c.372-5.697 5.191-10.036 10.986-9.633 5.692.377 10.005 5.294 9.628 10.986l-3.641 55.332 55.224-2.515c5.645-.191 10.531 4.153 10.79 9.85.258 5.697-4.153 10.526-9.85 10.79l-66.763 3.037c-.155.004-.31.009-.47.009zm465.639-13.01-57.708-57.708c-4.034-4.034-4.034-10.573 0-14.607s10.573-4.034 14.607 0l57.708 57.708c4.034 4.034 3.962 10.5 0 14.607-3.817 3.951-10.062 3.951-14.607 0z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M494.359 499.947c-.155 0-.315-.005-.47-.01l-66.757-3.042c-5.702-.263-10.108-5.088-9.85-10.79.263-5.702 5.113-9.984 10.79-9.85l55.219 2.515-3.641-55.332c-.372-5.692 3.941-10.609 9.633-10.986 5.625-.398 10.609 3.946 10.986 9.633l4.401 66.85a10.33 10.33 0 0 1-2.929 7.902 10.323 10.323 0 0 1-7.382 3.11z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Transparent Information"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 181,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "No hidden details — just honest, clear property data."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 184,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 150,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-out group cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "#172747",
                                                className: "w-10 h-10 mb-6 transition-colors duration-300",
                                                viewBox: "0 0 682.667 682.667",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                            id: "a",
                                                            clipPathUnits: "userSpaceOnUse",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M0 512h512V0H0Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                        fill: "none",
                                                        stroke: "#172747",
                                                        strokeMiterlimit: 10,
                                                        strokeWidth: 30,
                                                        clipPath: "url(#a)",
                                                        transform: "matrix(1.33 0 0 -1.33 0 682.667)",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M226 15v60c0 16.568-13.432 30-30 30H76c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45ZM466 15v60c0 16.568-13.432 30-30 30H316c-16.568 0-30-13.432-30-30V15Zm-45 165c0-24.853-20.147-45-45-45s-45 20.147-45 45 20.147 45 45 45 45-20.147 45-45Zm-75 167v-50.294L286 347h-60.002L166 296.706V347h-15c-41.421 0-75 33.579-75 75s33.579 75 75 75h210c41.421 0 75-33.579 75-75s-33.579-75-75-75Zm-105 75h30m-90 0h30m90 0h30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                                lineNumber: 194,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 193,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[#172747] text-lg font-semibold mb-3 group-hover:text-[#172747]",
                                            style: {
                                                fontFamily: 'Lato, sans-serif'
                                            },
                                            children: "Diverse Inventory"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 219,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-sm font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity",
                                            children: "From cozy apartments to sprawling commercial spaces — all in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                            lineNumber: 222,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                    lineNumber: 192,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                                lineNumber: 191,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
                lineNumber: 6,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/OIP (1).a3f99bf7.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/OIP (8).b4fed3bb.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/today8.488e9edc.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/today8.jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
;
;
;
function HomePageBlogs() {
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const defaultImages = [
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('http://localhost:5000/blogs').then((res)=>res.json()).then((data)=>{
            const mapped = data.map((post, idx)=>({
                    id: post.id,
                    slug: post.slug,
                    // Always use only the default images, cycling through them
                    image: defaultImages[idx % 3],
                    title: post.blogTitle,
                    date: new Date(post.createdAt).toLocaleDateString()
                }));
            setBlogPosts(mapped);
        }).catch((err)=>console.error("Failed to fetch blogs:", err));
    }, []);
    const lastThreePosts = blogPosts.slice(-3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto max-w-6xl px-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "uppercase test-[16px] sm:text-[18px]  text-[#172747] leading-[100%] tracking-normal mb-2",
                                style: {
                                    fontFamily: 'Lato'
                                },
                                children: "INSIGHTS & UPDATES"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "'Ivy Mode'",
                                    fontWeight: 300,
                                    lineHeight: '140%',
                                    letterSpacing: '0'
                                },
                                className: "text-[#172747] mb-0  text-[32px] sm:text-[50px]",
                                children: "Make smarter decisions with expert-written blogs."
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "items-baseline ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "items-center mt-0 md:mt-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#172747]",
                                    children: "Get the latest on market trends, property tips, and expert insights. Our blog brings you quick, valuable reads to guide your real estate journey with confidence."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/blog",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-[#172747] cursor-pointer text-white border border-[#172747] mt-4 px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition",
                                        children: "Read Our Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                        lineNumber: 94,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-4 gap-8 pb-10",
                children: lastThreePosts.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.slug}`,
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-60 overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: post.image,
                                        alt: post.title,
                                        fill: true,
                                        className: "object-cover transform transition-transform duration-700 group-hover:scale-110",
                                        sizes: "(max-width: 768px) 100vw, 33vw"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                        lineNumber: 111,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 flex flex-col flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-md",
                                                    children: "Blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 font-medium",
                                                    children: post.date
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold text-[#172747] mb-4 line-clamp-2 leading-snug group-hover:text-blue-800 transition-colors",
                                            children: post.title
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                            lineNumber: 124,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto flex items-center text-sm font-bold text-[#172747] group-hover:text-blue-600 transition-colors",
                                            children: [
                                                "Read Article ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16,
                                                    className: "ml-2 transition-transform group-hover:translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 50
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                            lineNumber: 127,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                            lineNumber: 109,
                            columnNumber: 25
                        }, this)
                    }, post.id, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx",
        lineNumber: 69,
        columnNumber: 9
    }, this);
}
}),
"[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const testimonials = [
    {
        id: 1,
        name: "Paresh Bansod",
        text: "I am really glad that I came across PropertyDrone Realty. Nikhil along with his colleagues Vishal and Akshay were with me throughout the entire process. They understood my requirements really well and suggested the best suitable projects. They answered my each and every query. And once I finalised the project, they also helped in the negotiation. I would totally recommend them if you are buying a flat in Pune.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 2,
        name: "Subhamoy Saha",
        text: "Being NRIs we were looking to settle down in Pune in near future. We came to know about Nikhil and through his YouTube Videos. His videos were concise, compact, and informative in describing a property so we decided to reach out to him. We started to narrow down our requirements and location with him around Nov 2021 and within a year we had found a place.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 3,
        name: "Vicky Kothawade",
        text: "I had a great experience while buying a new Flat in Pune West location and I'd like to specifically mention Ashitosh for his professionalism and support throughout the process. He provided detailed insights and guided me efficiently, making the entire journey smooth and hassle-free. His expertise in real estate and commitment to customer satisfaction is truly commendable.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 4,
        name: "Bhagyashri Shingadi",
        text: "We had a good experience from start to end while looking for a new house.Vishal Pandey is such an amazing person who explained us everything before hand and made our life easier to short list the property and then finalize it.We all need a trustworthy person in such processes and I think Vishal is one of those honest guy I had ever met.Proffesional and hardworking. We are greatful and thankful to him.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 5,
        name: "Rashmi Chhetri",
        text: "My experience with Property drone was really amazing. I can say that this is where I experienced Professionalism at its peak! They really walked the talk of 'Customer is King'. I started my hunt in 2023 with very limited time in Pune. When i restarted in May this year, I was amazed to see the same zeal and dedication the 2nd time around!",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 6,
        name: "ketan Upadhyay",
        text: "I wanted to take a moment to express my sincere gratitude to Vishal Pandey for the exceptional service provided during our recent purchase of plot in the Vaarivana project. Vishal's teams dedication and professionalism truly made our experience remarkable.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 7,
        name: "Ujjwal Rai",
        text: "We came to know about vishal & his team as a channel partner. This was our first property we purchased and we were very new to this field. The way Nikhil and Vishal guided us throughout the journey of hunting the right project, Knowing our requirements first, Showing the A class builders, differentiation and builder history. It was a smooth process & we really enjoyed buying property with them. As we friends booked property in Vaarivana.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 8,
        name: "Radha Rao",
        text: "It is our pleasure to write this letter of recommendation for Nikhil & his team at Property Drone Realty.From our very first interaction, Nikhil, vishal and ikram impressed us with their exceptional professionalism, in-depth knowledge of the local real estate market in Pune, neighbourhood nuances, and property values. Their ability to understand our specific needs and preferences allowed them to curate tailored property options that perfectly aligned with our criteria. They went above and beyond, providing comprehensive property choices and invaluable insights to guide our decision-making process.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    },
    {
        id: 9,
        name: "Surbhi Tadwal",
        text: "We had a good experience while looking for a new house. Vishal Pandey helped us a-lot in finalising our deal. He just didn't help you in finding your dream house but also give you the wise advice and which is really appreciable. Thanks a-lot for helping us.",
        date: "16th April, 2025",
        company: "PropertyDrone Realty",
        rating: 5
    }
];
function HomePageTestimonials() {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);
    const goToNextPage = ()=>{
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const goToPreviousPage = ()=>{
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative z-10 max-w-6xl mx-auto px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                text: "TESTIMONIAL",
                                as: "h2",
                                className: "uppercase text-[#172747] text-[18px] tracking-[1px] leading-[100%] mb-2"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                lineNumber: 102,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[#172747] font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                children: "Your trust is our greatest award"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-6",
                    style: {
                        padding: '20px'
                    },
                    children: visibleTestimonials.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                padding: '20px',
                                color: '#172747',
                                width: '320px',
                                background: 'rgba(23, 39, 71, 0.05)',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                fontFamily: 'Poppins, sans-serif'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontSize: '18px',
                                        marginBottom: '10px'
                                    },
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        marginBottom: '15px',
                                        color: '#f9b31e'
                                    },
                                    children: '★'.repeat(5)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: '#172747',
                                        fontSize: '15px',
                                        lineHeight: '1.6'
                                    },
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 134,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        marginTop: '10px',
                                        color: '#172747',
                                        fontSize: '13px'
                                    },
                                    children: item.date
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 135,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                            lineNumber: 119,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center gap-4 mt-10 font-[Poppins,sans-serif]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#172747] text-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: String(currentPage).padStart(2, '0')
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        " / ",
                                        String(totalPages).padStart(2, '0')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                                    lineNumber: 144,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                            lineNumber: 142,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow h-px bg-[#172747]"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                            lineNumber: 146,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToPreviousPage,
                            disabled: currentPage === 1,
                            className: "w-9 h-9 flex items-center justify-center rounded-full border border-[#172747] bg-white text-[#172747] disabled:opacity-50",
                            children: "‹"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goToNextPage,
                            disabled: currentPage === totalPages,
                            className: "w-9 h-9 flex items-center justify-center rounded-full border border-[#172747] bg-white text-[#172747] disabled:opacity-50",
                            children: "›"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                            lineNumber: 154,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
            lineNumber: 99,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
}),
"[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageNir
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
'use client';
;
;
;
;
const services = [
    {
        title: "Exclusive Property",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 12,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "POA Assistance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 20,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "24/7 Available",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 28,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Easy Loan Assistance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 35,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Virtual Tour",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Dedicated NRI Team",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function HomePageNir() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row gap-16 items-start",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-1/3 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            text: "NRI Corner ",
                            as: "h2",
                            className: "text-[#172747] text-center font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                            lineNumber: 64,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#172747] text-[18px] sm:text-[20px] font-lato leading-none",
                            style: {
                                fontFamily: 'Lato',
                                letterSpacing: '1px',
                                lineHeight: '150%',
                                color: '#2a4073'
                            },
                            children: "Why Invest in India"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#172747] text-[16px] sm:text-[18px] font-lato leading-none",
                            style: {
                                fontFamily: 'Lato',
                                letterSpacing: '1px',
                                lineHeight: '150%',
                                color: '#2a4073'
                            },
                            children: "India is set to remain as one of the world's fastest growing economies. There's never been a better time to invest in real estate in India. Let us help you throughout the pre-and-post purchase processes."
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full lg:w-2/3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                        children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col bg-[#172747] hover:border hover:border-[#172747] group shadow-sm items-center justify-center p-6 sm:p-8 text-center hover:bg-white rounded-lg transition-all duration-300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/nri-corner",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-16 sm:w-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
                                                children: service.icon
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                                                lineNumber: 91,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-white text-[20px] sm:text-[26px] group-hover:text-[#172747] font-medium text-sm leading-tight transition-colors duration-300",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                                            lineNumber: 95,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                                    lineNumber: 89,
                                    columnNumber: 33
                                }, this)
                            }, index, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                                lineNumber: 85,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
            lineNumber: 61,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePageYoutube
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const getYoutubeVideoId = (url)=>{
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
};
function HomePageYoutube() {
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playingVideoId, setPlayingVideoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch all videos
    const fetchVideos = async ()=>{
        try {
            setLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("http://localhost:5000/youtube-videos");
            setVideos(response.data);
            setError("");
        } catch (err) {
            if (err.message === "Network Error") {
                setError("");
                setVideos([
                    {
                        id: 1,
                        title: "Mock Video",
                        description: "",
                        youtube_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        author: "Mock",
                        date: "2024-01-01"
                    }
                ]);
            } else {
                setError("Failed to load videos. Please refresh the page.");
                setVideos([]);
            }
            console.error(err);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchVideos();
    }, []);
    // Auto-slider functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (videos.length > 0 && !isPaused && !playingVideoId) {
            sliderRef.current = setInterval(()=>{
                setCurrentSlide((prev)=>(prev + 1) % Math.ceil(videos.length / 3));
            }, 5000);
        }
        return ()=>{
            if (sliderRef.current) {
                clearInterval(sliderRef.current);
            }
        };
    }, [
        videos.length,
        isPaused,
        playingVideoId
    ]);
    const handlePause = ()=>{
        setIsPaused(true);
    };
    const handleResume = ()=>{
        setIsPaused(false);
    };
    const handleSlideChange = (index)=>{
        setCurrentSlide(index);
    };
    const displayVideos = ()=>{
        const startIndex = currentSlide * 3;
        return videos.slice(startIndex, startIndex + 3);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto max-w-6xl px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        text: "Featured Videos",
                        as: "h2",
                        className: "uppercase text-[#172747] text-[16px] text-center sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[#172747] font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                        children: "Explore insightful YouTube videos handpicked for you"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                lineNumber: 114,
                columnNumber: 17
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 121,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading amazing videos..."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 122,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                lineNumber: 120,
                columnNumber: 17
            }, this) : videos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-16 bg-gray-100 rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fas fa-video text-gray-400 text-4xl mb-4"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-lg",
                        children: "No videos found in the collection"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                lineNumber: 125,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",
                        onMouseEnter: handlePause,
                        onMouseLeave: handleResume,
                        children: displayVideos().map((video)=>{
                            const videoId = getYoutubeVideoId(video.youtube_url);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl border border-gray-200",
                                children: [
                                    videoId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative pb-[56.25%] h-0 bg-black group-video",
                                        children: playingVideoId === video.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            className: "absolute top-0 left-0 w-full h-full",
                                            src: `https://www.youtube.com/embed/${videoId}?autoplay=1`,
                                            title: video.title || "YouTube Video",
                                            frameBorder: "0",
                                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                            allowFullScreen: true
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                            lineNumber: 149,
                                            columnNumber: 49
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 w-full h-full cursor-pointer flex items-center justify-center group-video-hover",
                                            onClick: ()=>{
                                                setPlayingVideoId(video.id);
                                                setIsPaused(true); // Explicitly pause slider
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
                                                    alt: video.title || "Video Thumbnail",
                                                    className: "object-cover opacity-80 group-video-hover:opacity-100 transition-opacity duration-300 w-full h-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 53
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-black/20 group-video-hover:bg-black/0 transition-colors duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 transform group-video-hover:scale-110",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-6 w-6 text-white ml-1",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M8 5v14l11-7z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 65
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 61
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 57
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                            lineNumber: 158,
                                            columnNumber: 49
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                        lineNumber: 147,
                                        columnNumber: 41
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-200 h-48 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500",
                                            children: "Invalid YouTube URL"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                            lineNumber: 187,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                        lineNumber: 186,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-3 line-clamp-2 text-gray-800",
                                            children: video.title || "Untitled"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                            lineNumber: 192,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                        lineNumber: 191,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, video.id, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                lineNumber: 142,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide((prev)=>(prev - 1 + Math.ceil(videos.length / 3)) % Math.ceil(videos.length / 3)),
                                className: " text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                    lineNumber: 211,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: Array.from({
                                    length: Math.ceil(videos.length / 3)
                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSlideChange(index),
                                        className: `w-3 h-3 rounded-full ${currentSlide === index ? "bg-[#172747]" : "bg-gray-300"}`,
                                        "aria-label": `Go to slide ${index + 1}`
                                    }, index, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                        lineNumber: 217,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide((prev)=>(prev + 1) % Math.ceil(videos.length / 3)),
                                className: " text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                    lineNumber: 234,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                                lineNumber: 228,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                        lineNumber: 202,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
                lineNumber: 132,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
}),
"[project]/propertydrone/propertydrone_fe/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/client/components/noop-head.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/AnimatedLetters.tsx [app-ssr] (ecmascript)");
// import logo from "@/app/images/PropertyDrone-Logo.png"; 
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/main1.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/main1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/final-bg.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/final-bg.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 104.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 105.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 106.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 107.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 109.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 110.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 111.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 112.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 113.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 114.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 115.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 116.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 117.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)'); // Adjust the path as necessary
// import main2 from '../public/images/mainvideo.mp4';
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/main2.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/buliding.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// Bank Logo Imports
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 1 (2).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 2 (1).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 3 (1).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 4 (3).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 5.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 6 (1).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 7 (3).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 8.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 9.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 10.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 11.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 12.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 13 (1).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 14 (2).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 15 (2).png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 16.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 17.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 18.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 19.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bank/Group 20.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
// import { useEffect } from 'react';
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$propertypopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$bottompropertydetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$whypropertydrone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/whypropertydrone.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/homepagewhypropertydrone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepageblogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/homepageblogs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepagetestimonials$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/homepagetestimonials.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepagenir$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/homepagenir.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepageyoutube$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/homepageyoutube.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const formatDate = (dateString)=>{
    if (!dateString) return '';
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
// import { ChevronDown, ChevronUp } from 'lucide-react';
// Import a placeholder image
// import placeholderImg from '../public/images/placeholder.png'; // Make sure this exists
const faqData = [
    {
        id: 1,
        question: 'Are all listings verified on PropertyDrone Realty?',
        answer: 'Yes, every listing goes through a strict verification process to ensure accuracy, legality, and transparency.'
    },
    {
        id: 2,
        question: 'Do I have to pay any brokerage fees?',
        answer: 'Our fee structure depends on the type of service you choose. We offer transparent pricing with no hidden costs.'
    },
    {
        id: 3,
        question: 'Can I schedule a site visit through the website?',
        answer: 'Yes, you can easily schedule site visits directly through our website by selecting your preferred date and time.'
    },
    {
        id: 4,
        question: 'How are drone views helpful in property buying?',
        answer: 'Drone views provide a comprehensive perspective of the property and its surroundings, helping you understand the location, neighborhood, and accessibility better.'
    },
    {
        id: 5,
        question: 'What types of properties does Property Drone Realty specialize in?',
        answer: 'Property Drone Realty deals in residential apartments, villas, bungalows, and a wide variety of commercial spaces like offices and shops in Pune and surrounding areas.'
    }
];
const features = [
    {
        id: '01',
        title: 'Verified Listings Only',
        description: 'Every property on our platform is verified for accuracy. Inquiry with confidence knowing whats real—and nothing less.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
    },
    {
        id: '02',
        title: 'Expert Consultation',
        description: 'Our real estate experts guide you through location comparisons, pricing trends, and negotiation tactics to make sure you choose right, not just whats available.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
    },
    {
        id: '03',
        title: 'Trusted Developer',
        description: 'Weve partnered with Indias most reputed developers to bring you projects that are on time, legally clear, and high on return value.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"]
    },
    {
        id: '04',
        title: 'Zero Brokerage',
        description: 'We work directly with top builders, so you get the best deals without any extra commission or brokerage charges.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    }
];
const propertyData = [
    {
        id: 1,
        title: "Prime Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 2,
        title: "Prime Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 3,
        title: "bhavik Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 4,
        title: "Phajhi Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 5,
        title: "abjh Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    },
    {
        id: 6,
        title: "pppp Business Hub",
        location: "Location",
        price: "₹4.53 Cr",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
    }
];
const AnimatedStarButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "group relative overflow-hidden rounded-full p-px cursor-pointer",
            style: {
                backgroundColor: '#172747'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex items-center justify-center gap-1 relative z-[1] rounded-full py-2 px-4 pl-2 w-full",
                style: {
                    backgroundColor: 'rgba(23, 39, 71, 0.95)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative group-hover:scale-105 transition-transform duration-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "opacity-90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z",
                                    fill: "url(#paint0_linear)",
                                    stroke: "url(#paint1_linear)",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint0_linear",
                                            x1: "-0.5",
                                            y1: "9",
                                            x2: "15.5",
                                            y2: "-1.5",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "#FFD700"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0.5",
                                                    stopColor: "#FFA500"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "1",
                                                    stopColor: "#DAA520"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "paint1_linear",
                                            x1: "-0.5",
                                            y1: "9",
                                            x2: "15.5",
                                            y2: "-1.5",
                                            gradientUnits: "userSpaceOnUse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    stopColor: "#FFD700"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0.5",
                                                    stopColor: "#FFA500"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "1",
                                                    stopColor: "#DAA520"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tracking-[2px] ml-1.5 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu cursor-pointer",
                        style: {
                            backgroundImage: 'linear-gradient(to bottom, #FFD700, #DAA520)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            fontWeight: '400',
                            textShadow: '0 0 0.4px #FFD700, 0 0 0.4px #DAA520'
                        },
                        children: "LUXE"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 245,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Add CookieBanner component before the Home component
const CookieBanner = ({ onAccept, onReject })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 left-0 right-0 bg-[#172747] text-white px-4 py-6 shadow-lg z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base",
                        style: {
                            fontSize: '16px',
                            fontFamily: 'Lato, sans-serif',
                            letterSpacing: '0.5px',
                            lineHeight: '1.3'
                        },
                        children: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.'
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 308,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAccept,
                            className: "px-6 py-2 bg-white text-[#172747] rounded hover:bg-gray-100 transition-colors cursor-pointer",
                            children: "Accept"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 320,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReject,
                            className: "px-6 py-2 border border-white text-white rounded hover:bg-white/10 transition-colors cursor-pointer",
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 319,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 307,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 306,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function Home() {
    // ----------- Add Compare State & Logic -------------
    const [comparedIds, setComparedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [compareLoadingId, setCompareLoadingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [comparisonIdMap, setComparisonIdMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const webUserId = 1;
    const fetchComparedIds = async ()=>{
        const res = await fetch("http://localhost:5000/api/property-comparisons");
        if (!res.ok) return;
        const all = await res.json();
        setComparedIds(all.filter((cmp)=>`${cmp.webUserId}` === `${webUserId}`).map((cmp)=>parseInt(cmp.propertyId)));
        const map = {};
        all.forEach((cmp)=>{
            if (`${cmp.webUserId}` === `${webUserId}`) {
                map[parseInt(cmp.propertyId)] = cmp.id;
            }
        });
        setComparisonIdMap(map);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchComparedIds();
    }, []);
    // ---------- End Compare State & Logic --------------
    // Add displayCount state
    const [displayCount, setDisplayCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(3);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setDisplayCount(window.innerWidth >= 1280 ? 10 : 3);
        };
        // Set initial value
        handleResize();
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Cleanup
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const fadeInUp = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: (i)=>({
                opacity: 1,
                y: 0,
                transition: {
                    delay: i * 0.2,
                    duration: 0.6,
                    ease: 'easeOut'
                }
            })
    };
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut'
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // AOS init removed
    }, []);
    const [properties, setProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const locationCounts = useMemo(()=>{
        if (!properties.length) return [];
        const locationMap = new Map();
        properties.forEach((property)=>{
            const location = property.location;
            if (!locationMap.has(location)) {
                locationMap.set(location, {
                    location: location,
                    count: 1,
                    image: property.multipleImages?.[0]?.path ? `http://localhost:5000${property.multipleImages[0].path}` : "/api/placeholder/400/320"
                });
            } else {
                const current = locationMap.get(location);
                locationMap.set(location, {
                    ...current,
                    count: current.count + 1
                });
            }
        });
        return Array.from(locationMap.values());
    }, [
        properties
    ]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleAccordion = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevState)=>({
                ...prevState,
                [name]: value
            }));
    };
    // Removed duplicate handleSubmit function
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalSlides = Math.ceil(propertyData.length / 2);
    const nextSlide = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % totalSlides);
    };
    const prevSlide = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + totalSlides) % totalSlides);
    };
    const images = [
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'anp-corp'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__105$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'majestique-developer'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__106$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'krunal-groups'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__107$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'kasturi'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__110$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'skyi-developers'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__109$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'Solitaire'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__111$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'anp-corp'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__112$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'majestique-developer'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__113$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'krunal-groups'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__114$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'kasturi'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__116$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'skyi-developers'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__115$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'Solitaire'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__117$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'anp-corp'
        },
        {
            img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__104$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
            link: 'majestique-developer'
        }
    ];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/contacts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email || "dummy@example.com",
                    mobile: formData.phone,
                    message: formData.message || "Interested in property consultation" // Added dummy message if not provided
                })
            });
            if (!response.ok) throw new Error("Failed to submit contact form");
            console.log('Form submitted successfully');
            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: '',
        location: '',
        locations: [],
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        search: ''
    });
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('BUY');
    const [transactionType, setTransactionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Buy');
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropdownFilters, setDropdownFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        area: '',
        budget: '',
        possession: ''
    });
    const filterOptions = {
        area: [
            '500+ sq.ft',
            '1000+ sq.ft',
            '1500+ sq.ft',
            '2000+ sq.ft'
        ],
        budget: [
            'Under 50L',
            '50L - 1Cr',
            '1Cr - 2Cr',
            'Above 2Cr'
        ],
        possession: [
            'Ready to Move',
            'In 1 Year',
            'In 2 Years',
            'In 3+ Years'
        ]
    };
    const handleDropdownSelect = (type, value)=>{
        setDropdownFilters((prev)=>({
                ...prev,
                [type]: value
            }));
        setActiveDropdown(null);
    // Here you would optimally trigger the main setFilters too, e.g.:
    // setFilters(prev => ({ ...prev, [type]: value }));
    };
    const [searchSuggestions, setSearchSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const suggestionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // State for properties data from API
    // const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filteredProperties, setFilteredProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [featuredProperties, setFeaturedProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [remainingProperties, setRemainingProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [luxuryProperties, setLuxuryProperties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Fetch data from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProperties = async ()=>{
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/properties');
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                // Sort properties by date - assuming each property has a date field
                // If there's no date field, you might need to modify this logic
                const sortedData = [
                    ...data
                ].sort((a, b)=>{
                    // If using date strings, convert to Date objects
                    const dateA = new Date(a.date || a.createdAt || 0);
                    const dateB = new Date(b.date || b.createdAt || 0);
                    return dateB.getTime() - dateA.getTime(); // Latest first
                });
                setProperties(sortedData);
                setFilteredProperties(sortedData);
                // Filter luxury properties
                const luxuryFiltered = sortedData.filter((property)=>{
                    const propertyType = property.propertyType?.toLowerCase() || '';
                    return [
                        'luxury',
                        'lux',
                        'luxary',
                        'luxury'
                    ].includes(propertyType);
                });
                console.log('Luxury properties found:', luxuryFiltered.length, luxuryFiltered.map((p)=>({
                        name: p.propertyName,
                        type: p.propertyType
                    })));
                setLuxuryProperties(luxuryFiltered);
                // Separate featured and remaining properties
                const featured = sortedData.slice(0, 3); // Get first 3 properties as featured
                const remaining = sortedData.slice(3); // Get the rest for the slider
                setFeaturedProperties(featured);
                setRemainingProperties(remaining);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);
    const useCounter = (end, duration = 2000)=>{
        const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
        const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            const observer = new IntersectionObserver(([entry])=>{
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            }, {
                threshold: 0.1
            });
            if (ref.current) {
                observer.observe(ref.current);
            }
            return ()=>{
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            if (!isVisible) return;
            let startTime;
            let animationFrame;
            const animate = (currentTime)=>{
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            animationFrame = requestAnimationFrame(animate);
            return ()=>{
                cancelAnimationFrame(animationFrame);
            };
        }, [
            end,
            duration,
            isVisible
        ]);
        return {
            count,
            ref
        };
    };
    // Apply filters to properties
    // Apply filters to properties
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!properties.length) return;
        let filtered = [
            ...properties
        ];
        // Search functionality (case insensitive search across multiple fields)
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            filtered = filtered.filter((property)=>property.propertyName?.toLowerCase().includes(searchTerm) || property.location?.toLowerCase().includes(searchTerm) || property.city?.toLowerCase().includes(searchTerm));
        }
        if (filters.locations && filters.locations.length > 0) {
            filtered = filtered.filter((property)=>filters.locations.includes(property.location) || property.city && filters.locations.includes(property.city));
        } else if (filters.location) {
            // Fallback for single location if needed, or migration
            filtered = filtered.filter((property)=>property.location === filters.location);
        }
        if (filters.minPrice) {
            filtered = filtered.filter((property)=>{
                const budget = parseInt(property.tentativeBudget.replace(/[^0-9]/g, ''));
                return budget >= parseInt(filters.minPrice, 10);
            });
        }
        if (filters.maxPrice) {
            filtered = filtered.filter((property)=>{
                const budget = parseInt(property.tentativeBudget.replace(/[^0-9]/g, ''));
                return budget <= parseInt(filters.maxPrice, 10);
            });
        }
        // Update filtered properties and separate featured/remaining
        setFilteredProperties(filtered);
        // Filter luxury properties from the filtered results
        const luxuryFiltered = filtered.filter((property)=>{
            const propertyType = property.propertyType?.toLowerCase() || '';
            return [
                'luxury',
                'lux',
                'luxary',
                'luxury'
            ].includes(propertyType);
        });
        console.log('Filtered luxury properties:', luxuryFiltered.length, luxuryFiltered.map((p)=>({
                name: p.propertyName,
                type: p.propertyType
            })));
        setLuxuryProperties(luxuryFiltered);
        // Update featured and remaining properties from filtered results
        setFeaturedProperties(filtered.slice(0, 3)); // Get first 3 filtered properties as featured
        setRemainingProperties(filtered.slice(3)); // Get the rest for the slider
    }, [
        filters,
        properties
    ]);
    const handleFilterChange = (e)=>{
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
        // Generate suggestions for search field
        if (name === 'search' && value.trim().length > 0) {
            const searchTerm = value.toLowerCase().trim();
            const suggestionsSet = new Set();
            properties.forEach((property)=>{
                // Check property name
                if (property.propertyName?.toLowerCase().includes(searchTerm)) {
                    suggestionsSet.add(property.propertyName);
                }
                // Check location
                if (property.location?.toLowerCase().includes(searchTerm)) {
                    suggestionsSet.add(property.location);
                }
                // Check city
                if (property.city?.toLowerCase().includes(searchTerm)) {
                    suggestionsSet.add(property.city);
                }
            });
            const suggestions = Array.from(suggestionsSet).slice(0, 8); // Limit to 8 suggestions
            setSearchSuggestions(suggestions);
            setShowSuggestions(suggestions.length > 0);
        } else if (name === 'search' && value.trim().length === 0) {
            setSearchSuggestions([]);
            setShowSuggestions(false);
        }
    };
    // Handle suggestion click
    const handleSuggestionClick = (suggestion)=>{
        // Check if the suggestion corresponds to a location or city
        const isLocationOrCity = properties.some((p)=>p.location === suggestion || p.city === suggestion);
        if (isLocationOrCity) {
            // Add to locations if not already present
            if (!filters.locations.includes(suggestion)) {
                setFilters((prev)=>({
                        ...prev,
                        locations: [
                            ...prev.locations,
                            suggestion
                        ],
                        search: '' // Clear search text after selecting location
                    }));
            } else {
                setFilters((prev)=>({
                        ...prev,
                        search: ''
                    }));
            }
        } else {
            // It's likely a property name or general search term
            setFilters((prev)=>({
                    ...prev,
                    search: suggestion
                }));
        }
        setShowSuggestions(false);
    };
    const removeLocationTag = (locToRemove)=>{
        setFilters((prev)=>({
                ...prev,
                locations: prev.locations.filter((loc)=>loc !== locToRemove)
            }));
    };
    // Close suggestions when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (searchInputRef.current && !searchInputRef.current.contains(event.target) && suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const resetFilters = ()=>{
        setFilters({
            type: '',
            bedrooms: '',
            search: '',
            location: '',
            locations: [],
            minPrice: '',
            maxPrice: ''
        });
    };
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const highDemandScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
    // Animation removed
    }, []);
    // Functions for slider control
    // Property card component to avoid repetition
    const PropertyCard = ({ property, delay, comparedIds, setComparedIds, compareLoadingId, setCompareLoadingId, comparisonIdMap, fetchComparedIds })=>{
        const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        // Add console logging to debug image path
        console.log('Property Image Data:', {
            multipleImages: property.multipleImages,
            firstImagePath: property.multipleImages?.[0]?.path,
            fullImagePath: property.multipleImages?.[0]?.path ? `http://localhost:5000${property.multipleImages[0].path}` : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
        });
        // Update image path handling with proper error checking
        const imagePath = property.multipleImages && property.multipleImages.length > 0 && property.multipleImages[0].path ? `http://localhost:5000${property.multipleImages[0].path}` : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/our-properties-in-pune/${property.slug}`,
            passHref: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-md cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-52 w-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: imagePath,
                            alt: property.propertyName || "Property Image",
                            fill: true,
                            className: `z-0 transition-transform duration-700 ease-in-out object-cover ${isHovered ? "scale-110" : "scale-100"}`,
                            onError: (e)=>{
                                console.error('Image load error:', e);
                                const target = e.target;
                                target.src = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src;
                            },
                            priority: true,
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 885,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 884,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-[#00000033]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center  border-r border-[#00000033] py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " text-[#172747] px-3 py-1 rounded-md flex items-center gap-1",
                                    style: {
                                        fontSize: '16px',
                                        fontFamily: 'Lato, sans-serif',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "9 22 9 12 15 12 15 22"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 911,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 909,
                                            columnNumber: 17
                                        }, this),
                                        property.beds || "",
                                        "  Beds"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 902,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center  border-r border-[#00000033] py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " text-[#172747] px-3 py-1 rounded-md flex items-center gap-1",
                                    style: {
                                        fontSize: '16px',
                                        fontFamily: 'Lato, sans-serif',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 924,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 6l-10 7L2 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 925,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 923,
                                            columnNumber: 17
                                        }, this),
                                        property.baths || "",
                                        "  Baths"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 917,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 916,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center justify-center py-2 space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-black",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 944,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#172747] text-lg ",
                                        style: {
                                            fontSize: '16px',
                                            fontFamily: 'Lato, sans-serif',
                                            letterSpacing: '0.5px',
                                            lineHeight: '1.3'
                                        },
                                        children: property.location || "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 951,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 930,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 901,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-1 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: ` ${isHovered ? "text-blue-800" : "text-[#172747]"}`,
                            style: {
                                fontSize: '20px',
                                fontFamily: 'Lato, sans-serif',
                                letterSpacing: '0.5px',
                                lineHeight: '1.3'
                            },
                            children: property.propertyName || "Prime Business Hub"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 963,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 962,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Carpet Area : ",
                                    (()=>{
                                        const words = String(property.carpetArea).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 981,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 979,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 978,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Possession : ",
                                    (()=>{
                                        const words = String(property.possession).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 999,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 997,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 996,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Topology  : ",
                                    (()=>{
                                        const words = String(property.topology).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1017,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1015,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1014,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: comparedIds.includes(property.id),
                                            disabled: compareLoadingId === property.id || !comparedIds.includes(property.id) && comparedIds.length >= 5,
                                            onChange: async (e)=>{
                                                setCompareLoadingId(property.id);
                                                if (e.target.checked) {
                                                    setComparedIds((prev)=>[
                                                            ...prev,
                                                            property.id
                                                        ]);
                                                    const resp = await fetch('http://localhost:5000/api/property-comparisons', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            webUserId: 1,
                                                            propertyId: property.id,
                                                            propertyData: property
                                                        })
                                                    });
                                                    if (!resp.ok) {
                                                        setComparedIds((prev)=>prev.filter((id)=>id !== property.id));
                                                    } else {
                                                        await fetchComparedIds();
                                                    }
                                                } else {
                                                    setComparedIds((prev)=>prev.filter((id)=>id !== property.id));
                                                    const comparisonId = comparisonIdMap[property.id];
                                                    if (!comparisonId) {
                                                        setCompareLoadingId(null);
                                                        return;
                                                    }
                                                    const resp = await fetch(`http://localhost:5000/api/property-comparisons/${comparisonId}`, {
                                                        method: 'DELETE'
                                                    });
                                                    if (!resp.ok) {
                                                        setComparedIds((prev)=>[
                                                                ...prev,
                                                                property.id
                                                            ]);
                                                    } else {
                                                        await fetchComparedIds();
                                                    }
                                                }
                                                setCompareLoadingId(null);
                                            },
                                            className: "form-checkbox h-5 w-5 text-[#172747] rounded focus:ring-[#172747] border-gray-300 transition-all duration-150"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1038,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: comparedIds.includes(property.id) ? 'text-red-600 font-semibold text-xs' : 'text-green-700 font-semibold text-xs',
                                            children: comparedIds.includes(property.id) ? 'Uncompare' : 'Compare'
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1074,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1037,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105 cursor-pointer",
                                    children: "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1036,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1034,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 879,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 878,
            columnNumber: 7
        }, this);
    };
    const PropertyCardLuxe = ({ property, delay, comparedIds, setComparedIds, compareLoadingId, setCompareLoadingId, comparisonIdMap, fetchComparedIds })=>{
        const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
        const baseUrl = "http://localhost:5000";
        const imagePath = property?.multipleImages?.[0]?.path ? `${baseUrl}${property.multipleImages[0].path}` : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: `/luxe-properties/${property.slug}`,
            passHref: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-[4px] cursor-pointer overflow-hidden shadow-sm transition-all duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1",
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-52 w-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: imagePath,
                                alt: property.propertyName || "Property Image",
                                fill: true,
                                className: `z-0 transition-transform duration-700 ease-in-out object-cover ${isHovered ? "scale-110" : "scale-100"}`
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1121,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedStarButton, {}, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1130,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1129,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1128,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-[#00000033]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center  border-r border-[#00000033] py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " text-[#172747] px-3 py-1 rounded-md flex items-center gap-1",
                                    style: {
                                        fontSize: '16px',
                                        fontFamily: 'Lato, sans-serif',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "9 22 9 12 15 12 15 22"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1146,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1144,
                                            columnNumber: 17
                                        }, this),
                                        property.beds || "",
                                        "  Beds"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1138,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center  border-r border-[#00000033] py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: " text-[#172747] px-3 py-1 rounded-md flex items-center gap-1",
                                    style: {
                                        fontSize: '16px',
                                        fontFamily: 'Lato, sans-serif',
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.3'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 6l-10 7L2 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 17
                                        }, this),
                                        property.baths || "",
                                        "  Baths"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1152,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1151,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1/2 flex items-center justify-center py-2 space-x-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-black",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1173,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1166,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#172747] text-lg ",
                                        style: {
                                            fontSize: '16px',
                                            fontFamily: 'Lato, sans-serif',
                                            letterSpacing: '0.5px',
                                            lineHeight: '1.3'
                                        },
                                        children: property.location || "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pt-1 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: ` ${isHovered ? "text-blue-800" : "text-[#172747]"}`,
                            style: {
                                fontSize: '20px',
                                fontFamily: 'Lato, sans-serif',
                                letterSpacing: '0.5px',
                                lineHeight: '1.3'
                            },
                            children: property.propertyName || "Prime Business Hub"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1198,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1197,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Carpet Area : ",
                                    (()=>{
                                        const words = String(property.carpetArea).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1216,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1214,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1213,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Possession : ",
                                    (()=>{
                                        const words = String(property.possession).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1234,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1232,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1231,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "justify-between items-center px-2 pb-2 space-x-2 bg-[#EEF1F5] text-xs text-gray-800  py-1 rounded-[4px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-700 px-2",
                                style: {
                                    fontSize: '14px',
                                    fontFamily: 'Lato',
                                    letterSpacing: '0.5px'
                                },
                                children: [
                                    "Typology : ",
                                    (()=>{
                                        const words = String(property.topology).split(' ');
                                        return words.length > 5 ? words.slice(0, 5).join(' ') + '...' : words.join(' ');
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1252,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1250,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1249,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: comparedIds.includes(property.id),
                                            disabled: compareLoadingId === property.id || !comparedIds.includes(property.id) && comparedIds.length >= 5,
                                            onChange: async (e)=>{
                                                setCompareLoadingId(property.id);
                                                if (e.target.checked) {
                                                    setComparedIds((prev)=>[
                                                            ...prev,
                                                            property.id
                                                        ]);
                                                    const resp = await fetch('http://localhost:5000/api/property-comparisons', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({
                                                            webUserId: 1,
                                                            propertyId: property.id,
                                                            propertyData: property
                                                        })
                                                    });
                                                    if (!resp.ok) {
                                                        setComparedIds((prev)=>prev.filter((id)=>id !== property.id));
                                                    } else {
                                                        await fetchComparedIds();
                                                    }
                                                } else {
                                                    setComparedIds((prev)=>prev.filter((id)=>id !== property.id));
                                                    const comparisonId = comparisonIdMap[property.id];
                                                    if (!comparisonId) {
                                                        setCompareLoadingId(null);
                                                        return;
                                                    }
                                                    const resp = await fetch(`http://localhost:5000/api/property-comparisons/${comparisonId}`, {
                                                        method: 'DELETE'
                                                    });
                                                    if (!resp.ok) {
                                                        setComparedIds((prev)=>[
                                                                ...prev,
                                                                property.id
                                                            ]);
                                                    } else {
                                                        await fetchComparedIds();
                                                    }
                                                }
                                                setCompareLoadingId(null);
                                            },
                                            className: "form-checkbox h-5 w-5 text-[#172747] rounded focus:ring-[#172747] border-gray-300 transition-all duration-150"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1273,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: comparedIds.includes(property.id) ? 'text-red-600 font-semibold text-xs' : 'text-green-700 font-semibold text-xs',
                                            children: comparedIds.includes(property.id) ? 'Uncompare' : 'Compare'
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1309,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1272,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105 cursor-pointer",
                                    children: "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1271,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1269,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1115,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 1114,
            columnNumber: 7
        }, this);
    };
    // Add cookie consent state
    const [showCookieBanner, setShowCookieBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Check if user has already made a choice
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const cookieChoice = localStorage.getItem('cookieChoice');
        if (cookieChoice) {
            setShowCookieBanner(false);
        }
    }, []);
    // Handle cookie acceptance
    const handleAcceptCookies = ()=>{
        localStorage.setItem('cookieChoice', 'accepted');
        setShowCookieBanner(false);
    };
    // Handle cookie rejection
    const handleRejectCookies = ()=>{
        localStorage.setItem('cookieChoice', 'rejected');
        setShowCookieBanner(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Top Real Estate Agency Pune"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1352,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties. Buy your dream home with expert advice and trusted service."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1353,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "real estate agency Pune, luxury homes Pune, premium flats Pune, buy property Pune"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://propertydronerealty.com/"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1355,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1356,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "RealEstateAgent",
                                "name": "Property Drone Realty",
                                "url": "https://propertydronerealty.com/",
                                "description": "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties.",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Pune",
                                    "addressRegion": "MH",
                                    "addressCountry": "IN"
                                },
                                "telephone": "+91 9561477575 ",
                                "email": "info@propertydronerealty.com"
                            })
                        }
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1351,
                columnNumber: 7
            }, this),
            showCookieBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CookieBanner, {
                onAccept: handleAcceptCookies,
                onReject: handleRejectCookies
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1379,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$propertypopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[600px] bg-gray-800 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                className: "absolute inset-0 w-full h-full object-cover",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: "/mainvideo.mp4",
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1398,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1391,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1408,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center pt-20 max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex  w-full  bg-transparent",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-4xl  mx-auto px-4 md:px-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white items-center justify-center rounded-2xl pt-10 pb-4  px-3 md:px-8 shadow-lg  flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-5xl font-bold text-[#191758] text-center w-full mb-4 px-2",
                                            children: "Find Your Dream Property"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-md md:text-lg text-center text-[#191758] w-full mb-4 font-medium px-2",
                                            children: "Search properties for sale across top locations."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1460,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full shadow-2xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: (e)=>{
                                                    e.preventDefault();
                                                // Filtering happens automatically via useEffect when filters.search changes
                                                },
                                                className: "w-full backdrop-blur-lg bg-[#1717B5]/90  rounded-t-2xl  overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: " rounded-t-2xl px-2 py-2 flex items-center justify-center gap-3 md:gap-4 lg:gap-5 border-b border-white/10 overflow-x-auto ",
                                                        children: [
                                                            [
                                                                'Residential',
                                                                'Commercial',
                                                                'Plot'
                                                            ].map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        setFilters({
                                                                            ...filters,
                                                                            type: type
                                                                        });
                                                                    },
                                                                    className: `uppercase text-white font-semibold text-xs sm:text-xs md:text-sm transition-all duration-200  relative whitespace-nowrap ${filters.type === type ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white' : 'hover:opacity-80'}`,
                                                                    children: type
                                                                }, type, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1476,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/40 text-xl font-light px-2 hidden sm:block",
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1490,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-white/80 text-xs sm:text-sm font-medium whitespace-nowrap",
                                                                        children: "Top Locations:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1494,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    (locationCounts.length > 0 ? locationCounts.sort((a, b)=>b.count - a.count).slice(0, 5) : [
                                                                        'Hinjawadi',
                                                                        'Kharadi',
                                                                        'Wakad',
                                                                        'Baner',
                                                                        'Viman Nagar'
                                                                    ].map((loc)=>({
                                                                            location: loc,
                                                                            count: 0,
                                                                            image: ''
                                                                        }))).map((locationData)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>{
                                                                                setFilters({
                                                                                    ...filters,
                                                                                    locations: [
                                                                                        locationData.location
                                                                                    ],
                                                                                    search: ''
                                                                                });
                                                                            },
                                                                            className: "text-white font-medium text-xs sm:text-sm hover:underline hover:text-white/90 transition-colors decoration-white/50 underline-offset-4 whitespace-nowrap",
                                                                            children: locationData.location
                                                                        }, locationData.location, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1499,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1493,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 1474,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "backdrop-blur-md bg-white rounded-t-2xl flex items-center overflow-hidden ",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "pl-4 pr-3 flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                            className: "w-5 h-5 text-gray-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1518,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1517,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 flex items-center flex-wrap gap-2 py-2 px-2",
                                                                        children: [
                                                                            filters.locations.map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-[#172747] text-white text-xs sm:text-sm px-2 py-1 rounded-full flex items-center gap-1 whitespace-nowrap",
                                                                                    children: [
                                                                                        loc,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            onClick: ()=>removeLocationTag(loc),
                                                                                            className: "hover:text-red-300 focus:outline-none",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "sr-only",
                                                                                                    children: [
                                                                                                        "Remove ",
                                                                                                        loc
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                    lineNumber: 1532,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-3 w-3",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        fillRule: "evenodd",
                                                                                                        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                                                                                        clipRule: "evenodd"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                        lineNumber: 1534,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                    lineNumber: 1533,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                            lineNumber: 1527,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                    lineNumber: 1525,
                                                                                    columnNumber: 29
                                                                                }, this)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                ref: searchInputRef,
                                                                                type: "text",
                                                                                name: "search",
                                                                                value: filters.search || '',
                                                                                onChange: handleFilterChange,
                                                                                onFocus: ()=>{
                                                                                    if (searchSuggestions.length > 0) {
                                                                                        setShowSuggestions(true);
                                                                                    }
                                                                                },
                                                                                onKeyDown: (e)=>{
                                                                                    if (e.key === 'Backspace' && filters.search === '' && filters.locations.length > 0) {
                                                                                        // Remove the last tag on backspace if input is empty
                                                                                        const newLocs = [
                                                                                            ...filters.locations
                                                                                        ];
                                                                                        newLocs.pop();
                                                                                        setFilters({
                                                                                            ...filters,
                                                                                            locations: newLocs
                                                                                        });
                                                                                    }
                                                                                },
                                                                                placeholder: filters.locations.length > 0 ? "" : "Search for locality, landmark, project, or builder",
                                                                                className: "flex-1 min-w-[120px] bg-transparent focus:outline-none placeholder-gray-400 text-sm md:text-base font-normal border-none text-gray-900"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 1539,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1523,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "hidden md:flex items-center gap-3 px-4 border-l border-gray-300 h-8 flex-shrink-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 cursor-pointer group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative flex items-center justify-center w-5 h-5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "radio",
                                                                                                name: "transactionType",
                                                                                                value: "Buy",
                                                                                                checked: transactionType === 'Buy',
                                                                                                onChange: (e)=>setTransactionType(e.target.value),
                                                                                                className: "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#6C5DD3] transition-all"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1569,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute w-2.5 h-2.5 bg-[#6C5DD3] rounded-full scale-0 peer-checked:scale-100 transition-transform"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1577,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1568,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${transactionType === 'Buy' ? 'text-[#6C5DD3]' : 'text-gray-600 group-hover:text-gray-800'}`,
                                                                                        children: "Buy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1579,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 1567,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 cursor-pointer group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative flex items-center justify-center w-5 h-5",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                type: "radio",
                                                                                                name: "transactionType",
                                                                                                value: "Lease",
                                                                                                checked: transactionType === 'Lease',
                                                                                                onChange: (e)=>setTransactionType(e.target.value),
                                                                                                className: "peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[#6C5DD3] transition-all"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1584,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute w-2.5 h-2.5 bg-[#6C5DD3] rounded-full scale-0 peer-checked:scale-100 transition-transform"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1592,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1583,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${transactionType === 'Lease' ? 'text-[#6C5DD3]' : 'text-gray-600 group-hover:text-gray-800'}`,
                                                                                        children: "Lease"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1594,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 1582,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1566,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "px-6 py-2 m-2 bg-[#1717B5] rounded-full text-white font-bold uppercase text-xs sm:text-sm md:text-base hover:bg-[#1a2f5a] transition-colors duration-200 flex-shrink-0",
                                                                        children: "Search"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1599,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1515,
                                                                columnNumber: 23
                                                            }, this),
                                                            showSuggestions && searchSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                ref: suggestionsRef,
                                                                className: "absolute top-full left-0 w-full mt-1 bg-white rounded-b-2xl shadow-2xl border border-gray-200 z-50 max-h-64 overflow-y-auto",
                                                                children: searchSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleSuggestionClick(suggestion),
                                                                        className: "w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150 text-gray-900 text-sm md:text-base border-b border-gray-100 last:border-b-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                                    className: "w-4 h-4 text-gray-400 flex-shrink-0"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                    lineNumber: 1621,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: suggestion
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                    lineNumber: 1622,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1620,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, index, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1614,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1609,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1466,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1465,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-4 px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 w-full md:w-auto overflow-visible pb-1 md:pb-0 scrollbar-hide z-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            onMouseEnter: ()=>setActiveDropdown('area'),
                                                            onMouseLeave: ()=>setActiveDropdown(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${dropdownFilters.area ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: dropdownFilters.area || 'Carpet Area'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1646,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'area' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1647,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1642,
                                                                    columnNumber: 23
                                                                }, this),
                                                                activeDropdown === 'area' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-full left-0 mb-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]",
                                                                    children: filterOptions.area.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDropdownSelect('area', opt),
                                                                            className: "w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors",
                                                                            children: opt
                                                                        }, opt, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1652,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1650,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1641,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            onMouseEnter: ()=>setActiveDropdown('budget'),
                                                            onMouseLeave: ()=>setActiveDropdown(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${dropdownFilters.budget ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: dropdownFilters.budget || 'Budget'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1666,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1667,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1662,
                                                                    columnNumber: 23
                                                                }, this),
                                                                activeDropdown === 'budget' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-full left-0 mb-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]",
                                                                    children: filterOptions.budget.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDropdownSelect('budget', opt),
                                                                            className: "w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors",
                                                                            children: opt
                                                                        }, opt, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1672,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1670,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1661,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            onMouseEnter: ()=>setActiveDropdown('possession'),
                                                            onMouseLeave: ()=>setActiveDropdown(null),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: `flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${dropdownFilters.possession ? 'border-[#1717B5] bg-[#1717B5]/10 text-[#1717B5]' : 'border-gray-200 bg-white/90'} text-[10px] sm:text-xs font-medium text-gray-600 hover:border-[#1717B5] hover:text-[#1717B5] transition-colors whitespace-nowrap`,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: dropdownFilters.possession || 'Possession'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1686,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'possession' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1687,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1682,
                                                                    columnNumber: 23
                                                                }, this),
                                                                activeDropdown === 'possession' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-full left-0 mb-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-[100]",
                                                                    children: filterOptions.possession.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleDropdownSelect('possession', opt),
                                                                            className: "w-full text-left px-4 py-2 text-xs hover:bg-gray-50 text-gray-700 transition-colors",
                                                                            children: opt
                                                                        }, opt, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1692,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 1690,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1681,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/post-property",
                                                    className: "flex-shrink-0 inline-flex items-center gap-2 bg-[#1717B5]/95 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-[#191758] transition-all shadow-xl hover:shadow-2xl border border-white/10 group active:scale-95 whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "w-3 h-3 text-yellow-400 fill-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1703,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-[10px] sm:text-xs tracking-wide text-white/90",
                                                            children: "Are you a Property Owner?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1704,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-[10px] sm:text-xs text-white decoration-yellow-400/50 underline underline-offset-2 decoration-2 group-hover:text-yellow-300 transition-colors",
                                                            children: "Sell / Rent for FREE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1705,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 1706,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1456,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1455,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1454,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1412,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes opacityEffect {
            0% { border-right: 1px solid transparent; }
            10%, 80% { border-right: 1px solid #bd9f67; }
            100% { border-right: 1px solid transparent; }
          }
          @keyframes trailEffect {
            0% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
              opacity: 0;
            }
            30%, 70% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 70%, rgb(189, 159, 103) 100%);
              opacity: 1;
            }
            95% {
              background: linear-gradient(90deg, rgba(189, 159, 103, 0) 90%, rgb(189, 159, 103) 100%);
              opacity: 0;
            }
          }
          .why-choose-section,
          .why-choose-section * {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          .why-choose-section::-webkit-scrollbar,
          .why-choose-section *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
        `
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1719,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto px-6 md:px-20 py-8  relative ",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 text-white border-t-2 border-b-2 border-[#172747]"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1853,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 1852,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-red-500 p-4",
                    children: [
                        "Error: ",
                        error,
                        ". Please try again later."
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 1856,
                    columnNumber: 11
                }, this) : luxuryProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No luxury properties found matching your criteria."
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1861,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetFilters,
                            className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer",
                            children: "Reset Filters"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1862,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 1860,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-10 max-w-6xl mx-auto px-4 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                text: "LUXURY PROPERTIES",
                                as: "h2",
                                className: "uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1873,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                children: "Discover our exclusive collection of luxury properties in Pune"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1879,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: luxuryProperties.slice(0, 3).map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertyCardLuxe, {
                                        property: property,
                                        delay: index * 200,
                                        comparedIds: comparedIds,
                                        setComparedIds: setComparedIds,
                                        compareLoadingId: compareLoadingId,
                                        setCompareLoadingId: setCompareLoadingId,
                                        comparisonIdMap: comparisonIdMap,
                                        fetchComparedIds: fetchComparedIds
                                    }, property.id, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1884,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1882,
                                columnNumber: 15
                            }, this),
                            luxuryProperties.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/luxe-properties",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-white text-[#172747] px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 cursor-pointer flex items-center gap-2",
                                        children: [
                                            "View All Luxury Properties",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1904,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1902,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1901,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1900,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1872,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 1870,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1838,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden mt-6",
                id: "filter-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollContainerRef,
                    className: "flex overflow-x-auto scrollbar-hide snap-x",
                    style: {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    },
                    onMouseEnter: ()=>setIsPaused(true),
                    onMouseLeave: ()=>setIsPaused(false),
                    children: images.map((imgObj, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 h-32 mx-2 first:ml-0 mt-10 sm:mt-0 transition-all duration-300 ease-in-out",
                            style: {
                                transform: 'scale(1)',
                                transformOrigin: 'center center'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = 'scale(1.05)';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = 'scale(1)';
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shadow-md flex flex-col items-center justify-center hover:border-blue-500 transition-all duration-300 transform hover:scale-105",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: imgObj.img,
                                    alt: `Card ${index + 1}`,
                                    className: "w-auto cursor-pointerh-22 object-cover transition-all duration-300 sm:h-30"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1937,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1936,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1922,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 1914,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto px-6 md:px-20 py-8 ",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-64",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 text-white border-t-2 border-b-2 border-[#172747]"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1962,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1961,
                        columnNumber: 11
                    }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-red-500 p-4",
                        children: [
                            "Error: ",
                            error,
                            ". Please try again later."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1965,
                        columnNumber: 11
                    }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No properties found matching your criteria."
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1970,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetFilters,
                                className: "mt-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer",
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1971,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1969,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-10 max-w-6xl mx-auto px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "FEATURED PROPERTIES",
                                    as: "h2",
                                    className: "uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1982,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                    children: "Explore top-performing properties with high ROI and verified builder credibility."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1989,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: featuredProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PropertyCard, {
                                            property: property,
                                            delay: index * 200,
                                            comparedIds: comparedIds,
                                            setComparedIds: setComparedIds,
                                            compareLoadingId: compareLoadingId,
                                            setCompareLoadingId: setCompareLoadingId,
                                            comparisonIdMap: comparisonIdMap,
                                            fetchComparedIds: fetchComparedIds
                                        }, property.id, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1994,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1992,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/our-properties-in-pune",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-white text-[#172747] px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 cursor-pointer flex items-center gap-2",
                                            children: [
                                                "View All Properties",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2011,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2009,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2008,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2007,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1981,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1979,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto pb-12 px-4 sm:px-0 mt-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-xl p-8 sm:p-12 flex flex-col lg:flex-row gap-12 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                            children: "We Are India's Leading Home Loan Provider In The Housing Market"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2097,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-[18px] sm:text-[20px] font-lato leading-[150%] tracking-[1px]",
                                            children: "We bring the top banks to you - compare, choose, and get approved in just 48 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2100,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-8 py-3 border border-[#FF3B30] text-[#FF3B30] rounded hover:bg-red-50 transition-colors duration-300 font-medium whitespace-nowrap",
                                                    children: "Enquire Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2104,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "px-8 py-3 bg-[#25D366] text-white rounded hover:bg-[#20bd5a] transition-colors duration-300 font-medium flex items-center justify-center gap-2 whitespace-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            className: "w-6 h-6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2109,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2108,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Chat on WhatsApp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2107,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2096,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-fe666d79e6589880" + " " + "flex-1 w-full relative overflow-hidden h-[340px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            id: "fe666d79e6589880",
                                            children: "@keyframes scroll{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-scroll.jsx-fe666d79e6589880{animation:40s linear infinite scroll}.pause-on-hover.jsx-fe666d79e6589880:hover{animation-play-state:paused}"
                                        }, void 0, false, void 0, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-fe666d79e6589880" + " " + "absolute top-0 left-0 h-full flex items-center animate-scroll pause-on-hover w-[fit-content]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-fe666d79e6589880" + " " + "flex gap-6 px-3",
                                                children: [
                                                    [
                                                        // Triple 1
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        // { top: bank19, mid: bank20, bottom: bank1 }, // Loop a bit if needed or just use what we have. 
                                                        // We have 20 banks. 6 cols * 3 = 18. bank19, bank20 remain. Let's add them.
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        }
                                                    ].map((triple, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-fe666d79e6589880" + " " + "flex flex-col gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.top,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2146,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2145,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.mid,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2149,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2148,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.bottom,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2152,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2151,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2144,
                                                            columnNumber: 21
                                                        }, this)),
                                                    [
                                                        // Triple 1
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__2__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__3__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__4__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__6__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__7__$28$3$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__8$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__9$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__10$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__11$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__12$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__13__$28$1$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__14__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__15__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__16$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__17$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__18$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        },
                                                        {
                                                            top: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__19$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            mid: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__20$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            bottom: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bank$2f$Group__1__$28$2$292e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]
                                                        }
                                                    ].map((triple, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-fe666d79e6589880" + " " + "flex flex-col gap-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.top,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2169,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2168,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.mid,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2172,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2171,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-fe666d79e6589880" + " " + "bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center h-20 w-40 hover:shadow-md transition-shadow duration-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: triple.bottom,
                                                                        alt: "Bank Logo",
                                                                        className: "max-h-12 w-auto object-contain"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2175,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2174,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, `dup-${index}`, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2167,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2131,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2130,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2094,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2093,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1950,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white text-[#172747] py-16  relative z-10 -mt-10",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$final$2d$bg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$whypropertydrone$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomePageWhyPropertyDrone, {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepageyoutube$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepagenir$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepagetestimonials$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$homepageblogs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$bottompropertydetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 1350,
        columnNumber: 5
    }, this);
}
function useMemo(factory, dependencies) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(factory, dependencies);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be0ff2b4._.js.map