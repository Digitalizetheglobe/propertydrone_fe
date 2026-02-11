(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AllNews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AllNews() {
    _s();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [editNews, setEditNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedNews, setSelectedNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Fetch all news
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AllNews.useEffect": ()=>{
            fetchNews();
        }
    }["AllNews.useEffect"], []);
    const fetchNews = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:5000/news");
            setNews(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };
    // Delete a news
    const handleDelete = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:5000/news/${id}`);
            setNews(news.filter((item)=>item.id !== id));
            if (selectedNews?.id === id) {
                setSelectedNews(null);
            }
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };
    // Update a news
    const handleUpdate = async ()=>{
        if (!editNews || !editNews.id) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`http://localhost:5000/news/${editNews.id}`, editNews);
            fetchNews(); // Refresh after update
            setEditNews(null);
        } catch (error) {
            console.error("Error updating news:", error);
        }
    };
    // Handle view details
    const handleViewDetails = (newsItem)=>{
        setSelectedNews(newsItem);
    };
    // Close details view
    const closeDetails = ()=>{
        setSelectedNews(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-6",
                    children: "All News"
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                    lineNumber: 74,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-md overflow-hidden border border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2 truncate",
                                        children: item.newsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4 line-clamp-2",
                                        children: item.newsDescription
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-500",
                                                children: [
                                                    "By ",
                                                    item.writer
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded",
                                                children: item.category
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 mb-4",
                                        children: [
                                            "Updated on ",
                                            new Date(item.updatedAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-blue-500 text-white px-3 py-1 rounded text-sm",
                                                onClick: ()=>handleViewDetails(item),
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-yellow-500 text-white px-3 py-1 rounded text-sm mr-2",
                                                        onClick: ()=>setEditNews(item),
                                                        children: "Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-red-500 text-white px-3 py-1 rounded text-sm",
                                                        onClick: ()=>handleDelete(item.id),
                                                        children: "Delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 80,
                                columnNumber: 29
                            }, this)
                        }, item.id, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this),
                editNews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 max-w-md w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-4",
                                children: "Edit News"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border rounded p-2 w-full mb-3",
                                placeholder: "Title",
                                value: editNews.newsTitle || "",
                                onChange: (e)=>setEditNews({
                                        ...editNews,
                                        newsTitle: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 122,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "border rounded p-2 w-full mb-3 h-32",
                                placeholder: "Description",
                                value: editNews.newsDescription || "",
                                onChange: (e)=>setEditNews({
                                        ...editNews,
                                        newsDescription: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border rounded p-2 w-full mb-3",
                                placeholder: "Writer",
                                value: editNews.writer || "",
                                onChange: (e)=>setEditNews({
                                        ...editNews,
                                        writer: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 135,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: "border rounded p-2 w-full mb-4",
                                placeholder: "Category",
                                value: editNews.category || "",
                                onChange: (e)=>setEditNews({
                                        ...editNews,
                                        category: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 142,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-gray-500 text-white px-4 py-2 rounded",
                                        onClick: ()=>setEditNews(null),
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-green-500 text-white px-4 py-2 rounded",
                                        onClick: handleUpdate,
                                        children: "Update"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 149,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                        lineNumber: 120,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                    lineNumber: 119,
                    columnNumber: 21
                }, this),
                selectedNews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg p-6 max-w-2xl w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold",
                                        children: selectedNews.newsTitle
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeDetails,
                                        className: "text-gray-500 hover:text-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-6 w-6",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 171,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 mr-2",
                                                children: [
                                                    "By ",
                                                    selectedNews.writer
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 185,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded",
                                                children: selectedNews.category
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Updated on ",
                                            new Date(selectedNews.updatedAt).toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-b py-4 my-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 whitespace-pre-line",
                                    children: selectedNews.newsDescription
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 193,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-b py-4 my-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-700",
                                    dangerouslySetInnerHTML: {
                                        __html: selectedNews.newsContent
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 196,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-yellow-500 text-white px-3 py-1 rounded",
                                        onClick: ()=>{
                                            setEditNews(selectedNews);
                                            closeDetails();
                                        },
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "bg-red-500 text-white px-3 py-1 rounded",
                                        onClick: ()=>{
                                            handleDelete(selectedNews.id);
                                            closeDetails();
                                        },
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                                lineNumber: 202,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                        lineNumber: 170,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
                    lineNumber: 169,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/allnews/page.tsx",
            lineNumber: 73,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(AllNews, "awOPPQUreSAcphUf3+8L1jee5Tw=");
_c = AllNews;
var _c;
__turbopack_context__.k.register(_c, "AllNews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=propertydrone_propertydrone_fe_app_dashboard_allnews_page_tsx_f1ac1071._.js.map