(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__default$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export R as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__BaseKit$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export k as BaseKit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__Bold$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export B as Bold>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__BulletList$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export e as BulletList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__H__as__Heading$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export H as Heading>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__Italic$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export I as Italic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__Blockquote$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export h as Blockquote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__Code$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export C as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__Color$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export c as Color>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__FontSize$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export b as FontSize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__History$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export j as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__HorizontalRule$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export i as HorizontalRule>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Iframe$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export y as Iframe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Indent$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export n as Indent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__Link$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export L as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OrderedList$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export O as OrderedList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__SlashCommand$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export p as SlashCommand>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__Strike$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export S as Strike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Table$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export t as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__K__as__Katex$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export K as Katex>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__Underline$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export U as Underline>");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FontFamily$3e$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/utils-Cp07Qhbo.js [app-client] (ecmascript) <export F as FontFamily>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddNews() {
    _s();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        newsTitle: "",
        newsDescription: "",
        newsContent: "",
        newsImage: [],
        writer: "",
        category: "",
        tags: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const event = new CustomEvent("myEvent", {
        detail: {
            data: "something"
        }
    });
    if ("TURBOPACK compile-time truthy", 1) {
        window.dispatchEvent(event);
    }
    const extensions = [
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__k__as__BaseKit$3e$__["BaseKit"].configure({
            placeholder: {
                showOnlyCurrent: true
            },
            characterCount: {
                limit: 50000
            }
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__H__as__Heading$3e$__["Heading"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__I__as__Italic$3e$__["Italic"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__B__as__Bold$3e$__["Bold"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__BulletList$3e$__["BulletList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__h__as__Blockquote$3e$__["Blockquote"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__Code$3e$__["Code"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__c__as__Color$3e$__["Color"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__b__as__FontSize$3e$__["FontSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__j__as__History$3e$__["History"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__i__as__HorizontalRule$3e$__["HorizontalRule"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__y__as__Iframe$3e$__["Iframe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__n__as__Indent$3e$__["Indent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__L__as__Link$3e$__["Link"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__O__as__OrderedList$3e$__["OrderedList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__SlashCommand$3e$__["SlashCommand"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__S__as__Strike$3e$__["Strike"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__t__as__Table$3e$__["Table"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__K__as__Katex$3e$__["Katex"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__U__as__Underline$3e$__["Underline"],
        __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__F__as__FontFamily$3e$__["FontFamily"].configure({
            types: [
                'textStyle'
            ]
        })
    ];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        try {
            const formData = new FormData();
            formData.append('newsTitle', news.newsTitle);
            formData.append('newsDescription', news.newsDescription);
            formData.append('newsContent', news.newsContent || "<p></p>");
            formData.append('writer', news.writer);
            formData.append('category', news.category);
            formData.append('tags', news.tags);
            // Add image if present
            if (news.newsImage) {
                news.newsImage.forEach((file, index)=>{
                    formData.append(`newsImage[${index}]`, file);
                });
            }
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/news", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("News added successfully!");
            // Reset form
            setNews({
                newsTitle: "",
                newsDescription: "",
                newsContent: "",
                newsImage: [],
                writer: "",
                category: "",
                tags: ""
            });
        } catch (error) {
            console.error("Error adding news:", error);
            setError("Failed to add news. Please try again.");
            if (__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
                setError(error.response?.data?.message || "Validation failed");
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Add New News"
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4",
                children: error
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                lineNumber: 137,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "bg-white p-6 rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Title*"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border p-2 w-full rounded",
                                placeholder: "Enter news title",
                                value: news.newsTitle,
                                onChange: (e)=>setNews({
                                        ...news,
                                        newsTitle: e.target.value
                                    }),
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Description*"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "border p-2 w-full rounded",
                                placeholder: "Enter short description",
                                value: news.newsDescription,
                                onChange: (e)=>setNews({
                                        ...news,
                                        newsDescription: e.target.value
                                    }),
                                required: true,
                                rows: 3
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Content*"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border rounded bg-white p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$utils$2d$Cp07Qhbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__R__as__default$3e$__["default"], {
                                    output: "html",
                                    content: news.newsContent,
                                    onChangeContent: (content)=>setNews({
                                            ...news,
                                            newsContent: content
                                        }),
                                    extensions: extensions,
                                    minHeight: "300px",
                                    useEditorOptions: {
                                        editorProps: {
                                            attributes: {
                                                class: 'prose dark:prose-invert max-w-none'
                                            }
                                        }
                                    },
                                    bubbleMenu: {}
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Writer*"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border p-2 w-full rounded",
                                        placeholder: "Writer name",
                                        value: news.writer,
                                        onChange: (e)=>setNews({
                                                ...news,
                                                writer: e.target.value
                                            }),
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium mb-1",
                                        children: "Category*"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border p-2 w-full rounded",
                                        placeholder: "News category",
                                        value: news.category,
                                        onChange: (e)=>setNews({
                                                ...news,
                                                category: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 199,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 187,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Tags*"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border p-2 w-full rounded",
                                placeholder: "News tags",
                                value: news.tags,
                                onChange: (e)=>setNews({
                                        ...news,
                                        tags: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 214,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium mb-1",
                                children: "Featured Image"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                className: "w-full",
                                onChange: (e)=>{
                                    if (e.target.files && e.target.files.length > 0) {
                                        setNews({
                                            ...news,
                                            newsImage: Array.from(e.target.files)
                                        });
                                    }
                                },
                                accept: "image/*"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                                lineNumber: 226,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors disabled:bg-blue-300",
                        disabled: isSubmitting,
                        children: isSubmitting ? "Publishing..." : "Publish News"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                        lineNumber: 238,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/addnews/page.tsx",
        lineNumber: 134,
        columnNumber: 9
    }, this);
}
_s(AddNews, "lO0KXU0lncK8DlbGIJH40j3LI8g=");
_c = AddNews;
var _c;
__turbopack_context__.k.register(_c, "AddNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=propertydrone_propertydrone_fe_app_dashboard_addnews_page_tsx_7057984b._.js.map