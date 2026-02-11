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
"[project]/propertydrone/propertydrone_fe/public/images/main22.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main22.b164d55b.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main22.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main22.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/main22.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3840,
    height: 2160,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAXElEQVR42k2NSRKAMAgE+f9bNZtJWC4jGGN54DDQzdCZGLkwShW0S9CHQsRgZlA1UMov0BYwpoJZcfWVqdSwGbWFLZgOZM9bpKDDioOIPtaRfkB07RHvjOUH+KcbzqCaj9BH3m8AAAAASUVORK5CYII="
};
}),
"[project]/propertydrone/propertydrone_fe/public/images/luxe2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/luxe2.5c47832a.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/luxe2.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/luxe2.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/luxe2.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1560,
    height: 771,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAUklEQVR42m3NOwqAMBCE4dxCURC7JasB14ARLE3cvf+FxrQ+iuk+5ncdK+ZkGIOioe8cb4Z4KEiufxB2g6QCloxhKmjfgNaaiBm+AlpO9P75dAO/pDIIGIgu/wAAAABJRU5ErkJggg=="
};
}),
"[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/bgimage1.954ed70e.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1560,
    height: 657,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAALUlEQVR42oXKKQ4AQAgEQf7/yr0XRYJAD0FgQZTopEnUUKF2GPshrMuY5yM7OaftWnoIrFZeAAAAAElFTkSuQmCC"
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
"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Frame 145.1d4efe00.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/download (1).70dc43b7.webp");}),
"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/developerbgimg.5ce21fff.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/R.5bc2a560.jpg");}),
"[project]/propertydrone/propertydrone_fe/public/images/R.jpg.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
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
        className: "w-full bg-white text-[#424242] py-8 text-xs font-sans border-t border-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1400px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex bg-[#f5f5f5] overflow-x-auto border-b border-gray-200 no-scrollbar",
                    children: Object.keys(tabData).filter((key)=>tabData[key].length > 0).map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 min-h-[200px]",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-32 text-gray-400",
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
                                        className: "font-bold text-gray-800 text-[13px] mb-1",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/main22.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/main22.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/luxe2.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/luxe2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/bgimage1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
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
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/OIP (1).jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/OIP (8).jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/today8.jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/today8.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/banknote.js [app-ssr] (ecmascript) <export default as Banknote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/7578550-uhd_3840_2160_30fps 1.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)'); // Adjust the path as necessary
// import main2 from '../public/images/mainvideo.mp4';
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/main2.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/main2.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/Frame 145.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/buliding.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/buliding.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/download (1).webp.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/download (1).webp (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/developerbgimg.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/propertydrone/propertydrone_fe/public/images/R.jpg.mjs { IMAGE => "[project]/propertydrone/propertydrone_fe/public/images/R.jpg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
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
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/aos/dist/aos.js [app-ssr] (ecmascript)");
// import { useEffect } from 'react';
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$propertypopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/propertypopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$bottompropertydetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/app/components/bottompropertydetails.tsx [app-ssr] (ecmascript)");
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
;
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
const services = [
    {
        title: "Exclusive Property",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "POA Assistance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "24/7 Available",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 130,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Easy Loan Assistance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$banknote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Banknote$3e$__["Banknote"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Virtual Tour",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Dedicated NRI Team",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white group-hover:text-[#172747] transition-colors duration-300",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-14 h-14"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 154,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }
];
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
const AnimatedStarButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-d3d91e032f61744d" + " " + "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "d3d91e032f61744d",
                children: "@keyframes border-glow-translate{0%{transform:translate(-50%)scaleX(1)}to{transform:translate(200%)scaleX(.8)}}@keyframes border-glow-scale{0%{transform:scaleX(1)}to{transform:scaleX(1.2)}}@keyframes star-rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes star-shine{0%{opacity:0;transform:scale(1)}to{opacity:.4;transform:scale(1.5)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                style: {
                    backgroundColor: '#172747'
                },
                className: "jsx-d3d91e032f61744d" + " " + "group relative overflow-hidden rounded-full p-px cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "jsx-d3d91e032f61744d" + " " + "absolute inset-0 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-d3d91e032f61744d" + " " + "inset-0 absolute pointer-events-none select-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)'
                                },
                                className: "jsx-d3d91e032f61744d" + " " + "block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            animation: 'border-glow-translate 10s ease-in-out infinite alternate'
                        },
                        className: "jsx-d3d91e032f61744d" + " " + "inset-0 absolute pointer-events-none select-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                animation: 'border-glow-scale 10s ease-in-out infinite alternate',
                                background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)'
                            },
                            className: "jsx-d3d91e032f61744d" + " " + "block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            backgroundColor: 'rgba(23, 39, 71, 0.95)'
                        },
                        className: "jsx-d3d91e032f61744d" + " " + "flex items-center justify-center gap-1 relative z-[1] rounded-full py-2 px-4 pl-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-d3d91e032f61744d" + " " + "relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        style: {
                                            animation: 'star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate'
                                        },
                                        className: "jsx-d3d91e032f61744d" + " " + "opacity-90",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6482 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z",
                                                fill: "url(#paint0_linear)",
                                                stroke: "url(#paint1_linear)",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                className: "jsx-d3d91e032f61744d"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                className: "jsx-d3d91e032f61744d",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "paint0_linear",
                                                        x1: "-0.5",
                                                        y1: "9",
                                                        x2: "15.5",
                                                        y2: "-1.5",
                                                        gradientUnits: "userSpaceOnUse",
                                                        className: "jsx-d3d91e032f61744d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                stopColor: "#FFD700",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 473,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0.5",
                                                                stopColor: "#FFA500",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 474,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "1",
                                                                stopColor: "#DAA520",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                        id: "paint1_linear",
                                                        x1: "-0.5",
                                                        y1: "9",
                                                        x2: "15.5",
                                                        y2: "-1.5",
                                                        gradientUnits: "userSpaceOnUse",
                                                        className: "jsx-d3d91e032f61744d",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                stopColor: "#FFD700",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 478,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "0.5",
                                                                stopColor: "#FFA500",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 479,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                                offset: "1",
                                                                stopColor: "#DAA520",
                                                                className: "jsx-d3d91e032f61744d"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 19
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 471,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 453,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            animation: 'star-shine 14s ease-in-out infinite alternate',
                                            background: 'linear-gradient(135deg, #FFD700, #FFA500, #DAA520)'
                                        },
                                        className: "jsx-d3d91e032f61744d" + " " + "rounded-full size-11 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 452,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    backgroundImage: 'linear-gradient(to bottom, #FFD700, #DAA520)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    fontWeight: '400',
                                    textShadow: '0 0 0.4px #FFD700, 0 0 0.4px #DAA520'
                                },
                                className: "jsx-d3d91e032f61744d" + " " + "tracking-[2px] ml-1.5 bg-clip-text text-xs text-transparent group-hover:scale-105 transition transform-gpu cursor-pointer",
                                children: "LUXE"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 496,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 378,
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
                        lineNumber: 521,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 520,
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
                            lineNumber: 532,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReject,
                            className: "px-6 py-2 border border-white text-white rounded hover:bg-white/10 transition-colors cursor-pointer",
                            children: "Reject"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 531,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 519,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 518,
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
        const onFocus = ()=>fetchComparedIds();
        window.addEventListener("focus", onFocus);
        return ()=>window.removeEventListener("focus", onFocus);
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
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].init({
            duration: 800,
            once: true
        });
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
        const scrollContainer = scrollContainerRef.current;
        let animationId;
        let startTime = null;
        const scroll = (timestamp)=>{
            if (!startTime) startTime = timestamp;
            const scrollContainer = scrollContainerRef.current;
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += 1;
                // Reset scroll position when reaching the end
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };
        animationId = requestAnimationFrame(scroll);
        return ()=>{
            cancelAnimationFrame(animationId);
        };
    }, [
        isPaused
    ]);
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
                            lineNumber: 1145,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1144,
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
                                                    lineNumber: 1170,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "9 22 9 12 15 12 15 22"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1171,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1169,
                                            columnNumber: 17
                                        }, this),
                                        property.beds || "",
                                        "  Beds"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1163,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1162,
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
                                                    lineNumber: 1184,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 6l-10 7L2 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1183,
                                            columnNumber: 17
                                        }, this),
                                        property.baths || "",
                                        "  Baths"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1176,
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
                                                lineNumber: 1198,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1191,
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
                                        lineNumber: 1211,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1161,
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
                            lineNumber: 1223,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1222,
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
                                lineNumber: 1241,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1239,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1238,
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
                                lineNumber: 1259,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1257,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1256,
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
                                lineNumber: 1277,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1275,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1274,
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
                                            lineNumber: 1298,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: comparedIds.includes(property.id) ? 'text-red-600 font-semibold text-xs' : 'text-green-700 font-semibold text-xs',
                                            children: comparedIds.includes(property.id) ? 'Uncompare' : 'Compare'
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1334,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1297,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105 cursor-pointer",
                                    children: "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1296,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1139,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 1138,
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
                                lineNumber: 1381,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-full flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedStarButton, {}, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1390,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1389,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1388,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1380,
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
                                                    lineNumber: 1405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "9 22 9 12 15 12 15 22"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1404,
                                            columnNumber: 17
                                        }, this),
                                        property.beds || "",
                                        "  Beds"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1398,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1397,
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
                                                    lineNumber: 1419,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22 6l-10 7L2 6"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 1420,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 17
                                        }, this),
                                        property.baths || "",
                                        "  Baths"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1412,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1411,
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
                                                lineNumber: 1433,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1439,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 1426,
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
                                        lineNumber: 1446,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1425,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1396,
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
                            lineNumber: 1458,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1457,
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
                                lineNumber: 1476,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1474,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1473,
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
                                lineNumber: 1494,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1492,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1491,
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
                                lineNumber: 1512,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1510,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1509,
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
                                            lineNumber: 1533,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: comparedIds.includes(property.id) ? 'text-red-600 font-semibold text-xs' : 'text-green-700 font-semibold text-xs',
                                            children: comparedIds.includes(property.id) ? 'Uncompare' : 'Compare'
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1569,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1532,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#172747] text-white text-sm px-4 py-2 rounded hover:bg-white hover:text-[#172747] hover:border hover:border-[#172747] transition-transform transform hover:scale-105 cursor-pointer",
                                    children: "View Details"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1531,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1529,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1375,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
            lineNumber: 1374,
            columnNumber: 7
        }, this);
    };
    const [videos, setVideos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch all videos
    const fetchVideos = async ()=>{
        try {
            setLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('http://localhost:5000/youtube-videos');
            setVideos(response.data);
            setError('');
        } catch (err) {
            // Network error fallback
            if (err.message === 'Network Error') {
                setError(''); // Do not show error to user
                setVideos([
                    {
                        id: 1,
                        title: 'Mock Video',
                        description: '',
                        youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        author: 'Mock',
                        date: '2024-01-01'
                    }
                ]);
            } else {
                setError('Failed to load videos. Please refresh the page.');
                setVideos([]); // Clear videos on error
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
        if (videos.length > 0 && !isPaused) {
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
        isPaused
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
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const defaultImages = [
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$8$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src,
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('http://localhost:5000/blogs').then((res)=>res.json()).then((data)=>{
            console.log('API data:', data); // Debug: log API response
            const mapped = data.map((post, idx)=>({
                    id: post.id,
                    slug: post.slug,
                    // Always use only the default images, cycling through them
                    image: defaultImages[idx % 3],
                    title: post.blogTitle,
                    date: new Date(post.createdAt).toLocaleDateString()
                }));
            setBlogPosts(mapped);
        });
    }, []);
    // In your render, update the blog grid to only show the last 3 posts:
    const lastThreePosts = blogPosts.slice(-3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: "Top Real Estate Agency Pune"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1729,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "Top real estate agency in Pune offering luxury homes, premium flats & exclusive properties. Buy your dream home with expert advice and trusted service."
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "keywords",
                        content: "real estate agency Pune, luxury homes Pune, premium flats Pune, buy property Pune"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1731,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://propertydronerealty.com/"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1732,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "index, follow"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1733,
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
                        lineNumber: 1734,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1728,
                columnNumber: 7
            }, this),
            showCookieBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CookieBanner, {
                onAccept: handleAcceptCookies,
                onReject: handleRejectCookies
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1756,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$propertypopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1762,
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
                                    lineNumber: 1775,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1768,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1785,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1767,
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
                                            lineNumber: 1834,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-md md:text-lg text-center text-[#191758] w-full mb-4 font-medium px-2",
                                            children: "Search properties for sale across top locations."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1837,
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
                                                                    lineNumber: 1853,
                                                                    columnNumber: 25
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white/40 text-xl font-light px-2 hidden sm:block",
                                                                children: "|"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1867,
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
                                                                        lineNumber: 1871,
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
                                                                            lineNumber: 1876,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1870,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 1851,
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
                                                                            lineNumber: 1895,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1894,
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
                                                                                                    lineNumber: 1909,
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
                                                                                                        lineNumber: 1911,
                                                                                                        columnNumber: 35
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                    lineNumber: 1910,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                            lineNumber: 1904,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                    lineNumber: 1902,
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
                                                                                lineNumber: 1916,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1900,
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
                                                                                                lineNumber: 1946,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute w-2.5 h-2.5 bg-[#6C5DD3] rounded-full scale-0 peer-checked:scale-100 transition-transform"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1954,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1945,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${transactionType === 'Buy' ? 'text-[#6C5DD3]' : 'text-gray-600 group-hover:text-gray-800'}`,
                                                                                        children: "Buy"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1956,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 1944,
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
                                                                                                lineNumber: 1961,
                                                                                                columnNumber: 31
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "absolute w-2.5 h-2.5 bg-[#6C5DD3] rounded-full scale-0 peer-checked:scale-100 transition-transform"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                                lineNumber: 1969,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1960,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `font-medium ${transactionType === 'Lease' ? 'text-[#6C5DD3]' : 'text-gray-600 group-hover:text-gray-800'}`,
                                                                                        children: "Lease"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                        lineNumber: 1971,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 1959,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1943,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "px-6 py-2 m-2 bg-[#1717B5] rounded-full text-white font-bold uppercase text-xs sm:text-sm md:text-base hover:bg-[#1a2f5a] transition-colors duration-200 flex-shrink-0",
                                                                        children: "Search"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1976,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1892,
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
                                                                                    lineNumber: 1998,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: suggestion
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                    lineNumber: 1999,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 1997,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, index, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 1991,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 1986,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 1891,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 1843,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 1842,
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
                                                                            lineNumber: 2023,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'area' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 2024,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2019,
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
                                                                            lineNumber: 2029,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2027,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2018,
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
                                                                            lineNumber: 2043,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'budget' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 2044,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2039,
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
                                                                            lineNumber: 2049,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2047,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2038,
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
                                                                            lineNumber: 2063,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                            className: `w-3 h-3 transition-transform ${activeDropdown === 'possession' ? 'rotate-180' : ''}`
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                            lineNumber: 2064,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2059,
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
                                                                            lineNumber: 2069,
                                                                            columnNumber: 29
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2067,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2058,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2016,
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
                                                            lineNumber: 2080,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium text-[10px] sm:text-xs tracking-wide text-white/90",
                                                            children: "Are you a Property Owner?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2081,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-[10px] sm:text-xs text-white decoration-yellow-400/50 underline underline-offset-2 decoration-2 group-hover:text-yellow-300 transition-colors",
                                                            children: "Sell / Rent for FREE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2082,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-3 h-3 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2083,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2079,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2012,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 1833,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 1832,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 1831,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 1789,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 1763,
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
                lineNumber: 2096,
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
                        lineNumber: 2230,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2229,
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
                    lineNumber: 2233,
                    columnNumber: 11
                }, this) : luxuryProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "No luxury properties found matching your criteria."
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2238,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: resetFilters,
                            className: "mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer",
                            children: "Reset Filters"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2239,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2237,
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
                                lineNumber: 2250,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                children: "Discover our exclusive collection of luxury properties in Pune"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2256,
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
                                        lineNumber: 2261,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2259,
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
                                                lineNumber: 2281,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2279,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2278,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2277,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2249,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2247,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2215,
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
                                    lineNumber: 2314,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2313,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2299,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2291,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " mx-auto px-6 md:px-20 py-8 ",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main22$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
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
                            lineNumber: 2339,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2338,
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
                        lineNumber: 2342,
                        columnNumber: 11
                    }, this) : filteredProperties.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500",
                                children: "No properties found matching your criteria."
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: resetFilters,
                                className: "mt-4  bg-blue-500 text-white px-4 py-2 rounded hover:bg-[#172747] transition-colors duration-300 cursor-pointer",
                                children: "Reset Filters"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2348,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2346,
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
                                    lineNumber: 2359,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[#172747] mb-6 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                    children: "Explore top-performing properties with high ROI and verified builder credibility."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2366,
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
                                            lineNumber: 2371,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2369,
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
                                                    lineNumber: 2388,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2386,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2385,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2384,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2358,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2356,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " rounded-lg p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 flex justify-between items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[#172747] mb-4 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                                children: "Our Trusted Developers"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2470,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#172747] text-[18px] sm:text-[20px] font-lato leading-[150%] tracking-[1px]",
                                                children: "Partnering with the best in the industry"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2473,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2469,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2468,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: highDemandScrollRef,
                                            className: "grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory",
                                            style: {
                                                scrollbarWidth: 'none',
                                                msOverflowStyle: 'none'
                                            },
                                            children: [
                                                {
                                                    title: 'ANP Corp',
                                                    builder: 'Premium Developer',
                                                    config: 'Residential & Commercial',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'anp-corp'
                                                },
                                                {
                                                    title: 'Majestique Landmarks',
                                                    builder: 'Majestique Developer',
                                                    config: 'Luxury Living',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'majestique-developer'
                                                },
                                                {
                                                    title: 'Krunal Group',
                                                    builder: 'Krunal Group',
                                                    config: 'Premium Projects',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'krunal-group'
                                                },
                                                {
                                                    title: 'Kasturi Housing',
                                                    builder: 'Kasturi',
                                                    config: 'Ultra Luxury',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'kasturi'
                                                },
                                                {
                                                    title: 'Solitaire',
                                                    builder: 'Solitaire',
                                                    config: 'Integrated Townships',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'solitaire'
                                                },
                                                {
                                                    title: 'Skyi Developers',
                                                    builder: 'Skyi Developers',
                                                    config: 'Sustainable Homes',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'skyi-developers'
                                                },
                                                // Duplicate Data for Scrolling Demo
                                                {
                                                    title: 'ANP Corp',
                                                    builder: 'Premium Developer',
                                                    config: 'Residential & Commercial',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$7578550$2d$uhd_3840_2160_30fps__1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'anp-corp'
                                                },
                                                {
                                                    title: 'Majestique Landmarks',
                                                    builder: 'Majestique Developer',
                                                    config: 'Luxury Living',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$download__$28$1$292e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'majestique-developer'
                                                },
                                                {
                                                    title: 'Krunal Group',
                                                    builder: 'Krunal Group',
                                                    config: 'Premium Projects',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$developerbgimg$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'krunal-group'
                                                },
                                                {
                                                    title: 'Kasturi Housing',
                                                    builder: 'Kasturi',
                                                    config: 'Ultra Luxury',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$OIP__$28$1$292e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'kasturi'
                                                },
                                                {
                                                    title: 'Solitaire',
                                                    builder: 'Solitaire',
                                                    config: 'Integrated Townships',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$today8$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'solitaire'
                                                },
                                                {
                                                    title: 'Skyi Developers',
                                                    builder: 'Skyi Developers',
                                                    config: 'Sustainable Homes',
                                                    location: 'Pune',
                                                    price: 'View Details',
                                                    img: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$R$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                    slug: 'skyi-developers'
                                                }
                                            ].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/estate_developer/${project.slug}`,
                                                    className: "block",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[300px] sm:w-[350px] snap-start bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex overflow-hidden h-[160px] cursor-pointer group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-[120px] sm:w-[140px] relative h-full flex-shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: project.img,
                                                                    alt: project.title,
                                                                    layout: "fill",
                                                                    objectFit: "cover",
                                                                    className: "group-hover:scale-105 transition-transform duration-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2552,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2551,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 p-4 flex flex-col justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-[#172747] text-lg leading-tight line-clamp-1",
                                                                                title: project.title,
                                                                                children: project.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2562,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                children: project.builder
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2565,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2561,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-gray-700 font-medium line-clamp-1",
                                                                                children: project.config
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2568,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-gray-500 line-clamp-1",
                                                                                children: project.location
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2569,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2567,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-semibold text-[#172747] mt-1 flex items-center gap-1 group-hover:text-blue-600 transition-colors",
                                                                        children: [
                                                                            project.price,
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2572,
                                                                                columnNumber: 43
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2571,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2560,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2550,
                                                        columnNumber: 21
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2549,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2481,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                if (highDemandScrollRef.current) {
                                                    const cardWidth = 350; // approximate width of card
                                                    const gap = 24;
                                                    const scrollAmount = (cardWidth + gap) * 2; // Scroll 2 cards worth
                                                    highDemandScrollRef.current.scrollBy({
                                                        left: scrollAmount,
                                                        behavior: 'smooth'
                                                    });
                                                }
                                            },
                                            className: "absolute -right-5 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 z-10 hidden xl:flex items-center justify-center w-12 h-12 cursor-pointer transition-transform duration-300 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 24,
                                                className: "text-gray-600"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2592,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2581,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2480,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2467,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2466,
                        columnNumber: 9
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
                                            lineNumber: 2604,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-[18px] sm:text-[20px] font-lato leading-[150%] tracking-[1px]",
                                            children: "We bring the top banks to you - compare, choose, and get approved in just 48 hours."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2607,
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
                                                    lineNumber: 2611,
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
                                                                lineNumber: 2616,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2615,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Chat on WhatsApp"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2614,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2610,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2603,
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
                                                                        lineNumber: 2653,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2652,
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
                                                                        lineNumber: 2656,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2655,
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
                                                                        lineNumber: 2659,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2658,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2651,
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
                                                                        lineNumber: 2676,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2675,
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
                                                                        lineNumber: 2679,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2678,
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
                                                                        lineNumber: 2682,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                    lineNumber: 2681,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, `dup-${index}`, true, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2674,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2638,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2637,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2624,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2601,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2600,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#EEF1F5] ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "max-w-6xl mx-auto px-4 py-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 animate-fade-in text-justify",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                text: "UPCOMING & LATEST LAUNCHES",
                                as: "h2",
                                className: "uppercase text-[#172747] text-[16px] sm:text-[18px] font-lato tracking-[1px] leading-[100%] mb-2"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2701,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2699,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[#172747] mb-4 font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                            children: " Be the first to discover the hottest launches in Pune."
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2710,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: remainingProperties.slice(currentSlide * 2, currentSlide * 2 + 2).map((property)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/luxe-properties/${property.slug}`,
                                            passHref: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col hover:bg-[#EEF1F5] rounded-[4px] shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out transform hover:-translate-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-64 w-full mb-4 overflow-hidden rounded-t-lg group",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: property.multipleImages?.[0]?.path ? `http://localhost:5000${property.multipleImages[0].path}` : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            alt: property.propertyName,
                                                            fill: true,
                                                            className: "object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2727,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2726,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "px-4 pb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xl font-light",
                                                                children: property.propertyName
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2735,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    property.location,
                                                                    ", ",
                                                                    property.city
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2736,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-2",
                                                                        children: [
                                                                            property.beds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: [
                                                                                    property.beds,
                                                                                    " Beds"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2740,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            property.baths && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: [
                                                                                    property.baths,
                                                                                    " Baths"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2743,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            property.carpetArea && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-gray-600",
                                                                                children: [
                                                                                    property.carpetArea,
                                                                                    " sq.ft"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                                lineNumber: 2746,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2738,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-medium",
                                                                        children: property.tentativeBudget
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                        lineNumber: 2749,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2737,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2734,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, property.id, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2722,
                                                columnNumber: 21
                                            }, this)
                                        }, `property-${property.id}`, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2721,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 flex items-center justify-between w-full relative animate-fade-in",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-medium flex-shrink-0 z-10 pr-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold",
                                                    children: String(currentSlide + 1).padStart(2, '0')
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2760,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[#172747]",
                                                    children: [
                                                        ' ',
                                                        "/ ",
                                                        String(Math.max(1, totalSlides)).padStart(2, '0')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2763,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2759,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-grow h-px bg-[#172747]"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-shrink-0 z-10 pl-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: prevSlide,
                                                    className: "p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer",
                                                    "aria-label": "Previous slide",
                                                    disabled: remainingProperties.length <= 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2780,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2774,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: nextSlide,
                                                    className: "p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer",
                                                    "aria-label": "Next slide",
                                                    disabled: remainingProperties.length <= 2,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2788,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2782,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2773,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2757,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2715,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2698,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2697,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2803,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[#172747]  font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                children: "Explore insightful YouTube videos handpicked for you "
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2810,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2800,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2816,
                        columnNumber: 11
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#172747] mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2823,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-gray-600",
                                children: "Loading amazing videos..."
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2824,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2822,
                        columnNumber: 11
                    }, this) : videos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-16 bg-gray-100 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fas fa-video text-gray-400 text-4xl mb-4"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2828,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-lg",
                                children: "No videos found in the collection"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2829,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2827,
                        columnNumber: 11
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
                                                className: "relative pb-[56.25%] h-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    className: "absolute top-0 left-0 w-full h-full",
                                                    src: `https://www.youtube.com/embed/${videoId}`,
                                                    title: video.title || "YouTube Video",
                                                    frameBorder: "0",
                                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                                    allowFullScreen: true
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2845,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2844,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gray-200 h-48 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: "Invalid YouTube URL"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2856,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2855,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xl font-bold mb-3 line-clamp-2 text-gray-800",
                                                    children: video.title || "Untitled"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2861,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2860,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, video.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2842,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2833,
                                columnNumber: 13
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
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2886,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2882,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: Array.from({
                                            length: Math.ceil(videos.length / 3)
                                        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleSlideChange(index),
                                                className: `w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#172747]' : 'bg-gray-300'}`,
                                                "aria-label": `Go to slide ${index + 1}`
                                            }, index, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2891,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2889,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentSlide((prev)=>(prev + 1) % Math.ceil(videos.length / 3)),
                                        className: " text-[#172747]  w-10 h-10 flex items-center justify-center p-2 border border-[#172747] rounded-full hover:bg-white transition duration-300 hover:shadow cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 2904,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2900,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 2881,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 2832,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2797,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white text-[#172747] py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    text: "WHY CHOOSE US",
                                    as: "h2",
                                    className: "uppercase text-[#172747] text-base sm:text-lg font-lato tracking-[1px] leading-tight mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2916,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[#172747] mb-6 font-light text-2xl sm:text-4xl leading-tight tracking-[1px] font-ivy text-start",
                                    children: "We're redefining how people explore and purchase property."
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 2921,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2915,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-5 gap-2 overflow-visible",
                            children: [
                                (()=>{
                                    const feature = features[0];
                                    const IconComponent = feature.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col bg-gray-200 border-2 border-gray-400 shadow-lg rounded-2xl pt-6 pb-4 px-4 lg:row-span-3 transition-all duration-300 ease-in-out group hover:shadow-xl overflow-visible",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 0,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center group-hover:border-green-500 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        className: "w-8 h-8 text-[#172747] group-hover:text-green-500 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2951,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2950,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2949,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg text-[#172747] font-bold mb-2 text-center font-lato",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2954,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#433f60] text-lg text-center leading-relaxed font-lato",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2955,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, feature.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2943,
                                        columnNumber: 17
                                    }, this);
                                })(),
                                (()=>{
                                    const feature = features[1];
                                    const IconComponent = feature.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col bg-gray-200 border-2 border-gray-400 shadow-lg rounded-2xl pt-6 pb-4 px-4 lg:row-span-3 transition-all duration-300 ease-in-out group hover:shadow-xl overflow-visible",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 100,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center group-hover:border-green-500 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        className: "w-8 h-8 text-[#172747] group-hover:text-green-500 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2973,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 2972,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2971,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg text-[#172747] font-bold mb-2 text-center font-lato",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2976,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#433f60] text-lg text-center leading-relaxed font-lato",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2977,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, feature.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2965,
                                        columnNumber: 17
                                    }, this);
                                })(),
                                (()=>{
                                    const feature = features[3];
                                    const IconComponent = feature.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col justify-between bg-[#172747] shadow-xl rounded-2xl pt-6 pb-4 px-4 lg:row-span-5 transition-all duration-300 ease-in-out overflow-visible",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 200,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                className: "w-8 h-8 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 2996,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 2995,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2994,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg text-white font-bold mb-2 text-center font-lato",
                                                        children: feature.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 2999,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 text-lg text-center leading-relaxed font-lato mb-4",
                                                        children: feature.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3000,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center mb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$buliding$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                                            alt: "Property",
                                                            className: "rounded-lg object-cover w-full max-w-xs h-64"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3002,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3001,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 2993,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 flex justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl",
                                                    children: [
                                                        "Start Free Trial",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3012,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3010,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3009,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, feature.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 2987,
                                        columnNumber: 17
                                    }, this);
                                })(),
                                (()=>{
                                    const feature = features[2];
                                    const IconComponent = feature.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex flex-col bg-gray-200 border-2 border-gray-400 shadow-lg rounded-2xl pt-6 pb-4 px-4 lg:col-span-2 lg:row-span-2 lg:row-start-4 transition-all duration-300 ease-in-out group hover:shadow-xl overflow-visible",
                                        "data-aos": "fade-up",
                                        "data-aos-delay": 300,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                        className: "w-8 h-8 text-[#172747] group-hover:text-green-500 transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3032,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3031,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3030,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg text-[#172747] font-bold mb-2 text-center font-lato",
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3035,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#433f60] text-lg text-center leading-relaxed font-lato",
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3036,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, feature.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3024,
                                        columnNumber: 17
                                    }, this);
                                })()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 2937,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 2914,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 2913,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto px-6 md:px-20 py-8 bg-cover bg-center relative bg-fixed ",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$bgimage1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " py-8 px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3058,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#172747] text-[18px] sm:text-[20px] font-lato leading-none",
                                            style: {
                                                fontFamily: 'Lato',
                                                letterSpacing: '1px',
                                                lineHeight: '150%',
                                                color: '#2a4073'
                                            },
                                            children: "Why Invest in India  "
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3065,
                                            columnNumber: 17
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
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3068,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3057,
                                    columnNumber: 15
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
                                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                                lineNumber: 3086,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3085,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-white text-[20px] sm:text-[26px] group-hover:text-[#172747] font-medium text-sm leading-tight transition-colors duration-300",
                                                            children: service.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3090,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3084,
                                                    columnNumber: 23
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3080,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3078,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3077,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 3055,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3054,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 3053,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3044,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative w-full py-16 md:py-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$Frame__145$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Background",
                            layout: "fill",
                            objectFit: "cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 3107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 container mx-auto max-w-4xl px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Ivy Mode'",
                                            fontWeight: 300,
                                            fontSize: '46px',
                                            lineHeight: '140%',
                                            letterSpacing: '1px'
                                        },
                                        className: "text-[#172747] mb-6 ",
                                        children: [
                                            '"Let the experts help you',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3129,
                                                columnNumber: 40
                                            }, this),
                                            'make the right investment"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[24px] leading-[100%] text-[#172747] tracking-normal",
                                                style: {
                                                    fontFamily: 'Lato',
                                                    letterSpacing: '1px'
                                                },
                                                children: "Mr.Nikhil Mawale"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3134,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-[20px] leading-[100%] text-[#172747] f mb-6 tracking-normal ",
                                                style: {
                                                    fontFamily: 'Lato',
                                                    letterSpacing: '1px'
                                                },
                                                children: "Founder"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3137,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-md shadow-sm p-6 max-w-3xl mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleSubmit,
                                    className: "flex flex-col md:flex-row items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "name",
                                                value: formData.name,
                                                onChange: handleChange,
                                                placeholder: "Name",
                                                className: "w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3148,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                name: "phone",
                                                value: formData.phone,
                                                onChange: handleChange,
                                                onInput: (e)=>{
                                                    const input = e.target;
                                                    input.value = input.value.replace(/\D/g, '');
                                                },
                                                placeholder: "Phone",
                                                className: "w-full px-4 py-3 border-b border-gray-300 focus:border-gray-800 outline-none",
                                                required: true,
                                                pattern: "[0-9]{10}",
                                                maxLength: 10,
                                                minLength: 10,
                                                title: "Please enter a valid 10-digit phone number",
                                                inputMode: "numeric"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3159,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3158,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full cursor-pointer md:w-auto bg-[#172747] hover:bg-white hover:border hover:border-[#172747] hover:text-[#172747] px-6 py-3 bg-navy-800 text-white font-medium rounded flex items-center justify-center ",
                                            children: [
                                                "Get a Consultation",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-5 w-5 ml-2",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3185,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3179,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-fixed bg-center bg-cover bg-no-repeat",
                style: {
                    backgroundImage: `url(${__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$luxe2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"].src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/50 z-0 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative z-10 max-w-6xl mx-auto px-4 py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$AnimatedLetters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            text: "TESTIMONIAL",
                                            as: "h2",
                                            className: "uppercase text-white text-[18px] tracking-[1px] leading-[100%] mb-2"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-[300] text-[32px] sm:text-[50px] leading-[140%] tracking-[1px] font-[Ivy Mode]",
                                            children: "Your trust is our greatest award"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3216,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3210,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex flex-wrap justify-center gap-6",
                                style: {
                                    padding: '20px'
                                },
                                children: visibleTestimonials.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            border: '1px solid #ddd',
                                            borderRadius: '8px',
                                            padding: '20px',
                                            color: '#fff',
                                            width: '320px',
                                            background: 'rgba(255,255,255,0.05)',
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
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3241,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    marginBottom: '15px',
                                                    color: '#f9b31e'
                                                },
                                                children: '★'.repeat(5)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: '#fff',
                                                    fontSize: '15px',
                                                    lineHeight: '1.6'
                                                },
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    marginTop: '10px',
                                                    color: '#fff',
                                                    fontSize: '13px'
                                                },
                                                children: item.date
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3244,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3228,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center items-center gap-4 mt-10 font-[Poppins,sans-serif]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white text-[16px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: String(currentPage).padStart(2, '0')
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3252,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    " / ",
                                                    String(totalPages).padStart(2, '0')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3253,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow h-px bg-white"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToPreviousPage,
                                        disabled: currentPage === 1,
                                        className: "w-9 h-9 flex items-center justify-center rounded-full border border-white bg-white text-black disabled:opacity-50",
                                        children: "‹"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goToNextPage,
                                        disabled: currentPage === totalPages,
                                        className: "w-9 h-9 flex items-center justify-center rounded-full border border-white bg-white text-black disabled:opacity-50",
                                        children: "›"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3263,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-[#172747] text-white py-16 px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mx-auto max-w-6xl px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "uppercase test-[16px] sm:text-[18px]  text-white leading-[100%] tracking-normal mb-2",
                                            style: {
                                                fontFamily: 'Lato'
                                            },
                                            children: "INSIGHTS & UPDATES"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontFamily: "'Ivy Mode'",
                                                fontWeight: 300,
                                                // fontSize: '56px',
                                                lineHeight: '140%',
                                                letterSpacing: '0'
                                            },
                                            className: "text-white mb-0  text-[32px] sm:text-[50px]",
                                            children: "Make smarter decisions with expert-written blogs."
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "items-baseline ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "items-center mt-0 md:mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-300",
                                                children: "Get the latest on market trends, property tips, and expert insights. Our blog brings you quick, valuable reads to guide your real estate journey with confidence."
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-white cursor-pointer text-[#172747] border border-white mt-4 px-4 py-2 rounded hover:bg-[#172747] hover:text-white hover:border hover:border-white transition",
                                                    children: "Read Our Blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3305,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3304,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3300,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3299,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 3281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-4 gap-6",
                            children: lastThreePosts.map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "border border-gray-300 hover:bg-white hover:text-[#172747] hover:border-0 rounded-[4px] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ",
                                    variants: fadeInUp,
                                    initial: "hidden",
                                    whileInView: "visible",
                                    viewport: {
                                        once: true,
                                        amount: 0.2
                                    },
                                    custom: i,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blog/${post.slug}`,
                                        className: "block group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative cursor-pointer h-48 overflow-hidden ",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: post.image,
                                                    alt: post.title,
                                                    fill: true,
                                                    className: "object-cover transform transition-transform duration-300 group-hover:scale-105",
                                                    sizes: "(max-width: 768px) 100vw, 33vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3331,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3330,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-sm mb-2 group-hover:text-[#172747]",
                                                        children: post.date
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3340,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-medium mb-4 group-hover:text-[#172747] transition-colors duration-300",
                                                        children: post.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3341,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "inline-flex items-center text-gray-500 group-hover:text-[#172747] transition-colors duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3345,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3344,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3339,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3329,
                                        columnNumber: 17
                                    }, this)
                                }, post.id, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                    lineNumber: 3320,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                            lineNumber: 3318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 3279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-gray-100 py-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 max-w-6xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "uppercase text-[18px]  text-[#172747] leading-[100%] tracking-normal mb-2",
                                        style: {
                                            fontFamily: 'Lato'
                                        },
                                        children: "FAQ"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "'Ivy Mode'",
                                            fontWeight: 300,
                                            // fontSize: '56px',
                                            lineHeight: '140%',
                                            letterSpacing: '0'
                                        },
                                        className: "text-[#172747] mb-0 sm:mb-6 text-[32px] sm:text-[50px]",
                                        children: [
                                            "Have questions? ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3376,
                                                columnNumber: 32
                                            }, this),
                                            " We've got answers."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 py-4",
                                children: faqData.map((faq, index)=>{
                                    const isOpen = openIndex === index;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `rounded-[4px]  transition-all duration-300 ${isOpen ? 'bg-white shadow-md' : 'bg-[#F1EEFF] shadow-sm'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>toggleAccordion(index),
                                                className: "w-full flex justify-between cursor-pointer items-center px-6 py-5 text-left text-[#1C1C1C]  focus:outline-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sm:text-[16px]",
                                                        style: {
                                                            fontFamily: 'Lato',
                                                            letterSpacing: '1px'
                                                        },
                                                        children: faq.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3394,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `transition-transform cursor-pointer duration-300 ${isOpen ? 'rotate-180' : ''}`,
                                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                            size: 20,
                                                            className: "text-[#6B6B6B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3400,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 20,
                                                            className: "text-[#6B6B6B]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3402,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3398,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3390,
                                                columnNumber: 21
                                            }, this),
                                            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: " px-6 py-4 text-[#4B4B4B] text-sm sm:text-[15px] cursor-pointer bg-white border-t border-[#E0E0E0]   ",
                                                style: {
                                                    fontFamily: 'Lato',
                                                    letterSpacing: '1px',
                                                    lineHeight: '150%'
                                                },
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3408,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, faq.id, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3385,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3380,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3361,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 3360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full py-16 px-4  md:px-8 bg-[#172747]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto gap-4  flex-col md:flex-row flex md:flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 pl-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 w-full md:w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-6 bg-indigo-100 p-3 rounded-full transition-transform duration-300 group-hover:animate-bounce",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            className: "w-6 h-6 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3429,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3428,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { count, ref } = useCounter(5);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            ref: ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-indigo-500 font-[200] tracking-[1px]",
                                                    style: {
                                                        fontSize: '48px',
                                                        fontFamily: 'Ivy Mode',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: [
                                                        count,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3436,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3435,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mt-2",
                                                    style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Ivy Mode',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "In the market"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3438,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3434,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3427,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 w-full md:w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-6 bg-indigo-100 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-6 h-6 flex items-center justify-center text-indigo-500 transition-transform duration-300 group-hover:animate-bounce",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-6 h-6",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3451,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "9",
                                                        cy: "7",
                                                        r: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3452,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 21v-2a4 4 0 0 0-3-3.87"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3453,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 3.13a4 4 0 0 1 0 7.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                        lineNumber: 3454,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                lineNumber: 3450,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3449,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3448,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { count, ref } = useCounter(500);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            ref: ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-indigo-500 font-[200] tracking-[1px]",
                                                    style: {
                                                        fontSize: '48px',
                                                        fontFamily: 'Ivy Mode',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: [
                                                        count,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3463,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3462,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mt-2",
                                                    style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Ivy Mode',
                                                        letterSpacing: '1px'
                                                    },
                                                    children: "Properties Sold"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3465,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3461,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3447,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 w-full md:w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-6 bg-indigo-100 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"], {
                                            className: "w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3476,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3475,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { count, ref } = useCounter(25);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            ref: ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-indigo-500 font-[200]",
                                                    style: {
                                                        fontSize: '48px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: [
                                                        count,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                            lineNumber: 3483,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3482,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mt-2",
                                                    style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: "Industry awards"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3485,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3481,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3474,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 w-full md:w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-6 bg-indigo-100 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            className: "w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3496,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3495,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { count, ref } = useCounter(24);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            ref: ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-indigo-500 font-[200]",
                                                    style: {
                                                        fontSize: '48px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: [
                                                        count,
                                                        " / 7"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3502,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mt-2",
                                                    style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: "Support"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3505,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3501,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3494,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 w-full md:w-[220px] h-[200px] shadow-lg hover:bg-indigo-50 transition-all duration-300 p-6 rounded-[4px] relative hover:shadow-lg transform hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-6 top-6 bg-indigo-100 p-3 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                            className: "w-6 h-6 text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3516,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                        lineNumber: 3515,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { count, ref } = useCounter(9);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8",
                                            ref: ref,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-indigo-500 font-[200]",
                                                    style: {
                                                        fontSize: '48px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: count
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3522,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-700 mt-2",
                                                    style: {
                                                        fontSize: '20px',
                                                        fontFamily: 'Ivy Mode'
                                                    },
                                                    children: "Cities"
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                                    lineNumber: 3525,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                            lineNumber: 3521,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                                lineNumber: 3514,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                        lineNumber: 3425,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                    lineNumber: 3423,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3422,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$app$2f$components$2f$bottompropertydetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
                lineNumber: 3535,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/page.tsx",
        lineNumber: 1727,
        columnNumber: 5
    }, this);
}
function useMemo(factory, dependencies) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(factory, dependencies);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__61ce38a8._.js.map