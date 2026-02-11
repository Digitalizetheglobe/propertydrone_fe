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
"[project]/propertydrone/propertydrone_fe/public/images/main44.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/main44.799f1c79.png");}),
"[project]/propertydrone/propertydrone_fe/public/images/main44.png.mjs { IMAGE => \"[project]/propertydrone/propertydrone_fe/public/images/main44.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main44$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/public/images/main44.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$public$2f$images$2f$main44$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 3840,
    height: 2160,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAATElEQVR42mXMOQ7AIAxEUe5/17AZ8NJM4lBEDsWXpniaZGZQ3fn+l+ZSEAloCBbrAVMuDK80Ru8bBXDlD7QHjBlfXlAqozZBJwcSwA07iZuW3pWRYgAAAABJRU5ErkJggg=="
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
"[project]/propertydrone/propertydrone_fe/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/propertydrone/propertydrone_fe/app/page.tsx'\n\nUnexpected token. Did you mean `{'}'}` or `&rbrace;`?");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__cffad016._.js.map