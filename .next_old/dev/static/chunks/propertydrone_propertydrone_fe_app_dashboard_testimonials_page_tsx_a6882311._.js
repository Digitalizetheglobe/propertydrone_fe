(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TestimonialsPage() {
    _s();
    const [testimonials, setTestimonials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        testimonial: "",
        rating: 0,
        isActive: true
    });
    const [editId, setEditId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialsPage.useEffect": ()=>{
            fetch("http://localhost:5000/api/testimonials").then({
                "TestimonialsPage.useEffect": (res)=>{
                    if (!res.ok) throw new Error("Failed to fetch testimonials");
                    return res.json();
                }
            }["TestimonialsPage.useEffect"]).then({
                "TestimonialsPage.useEffect": (data)=>{
                    setTestimonials(data);
                    setLoading(false);
                }
            }["TestimonialsPage.useEffect"]).catch({
                "TestimonialsPage.useEffect": (err)=>{
                    setError(err.message);
                    setLoading(false);
                }
            }["TestimonialsPage.useEffect"]);
        }
    }["TestimonialsPage.useEffect"], []);
    const handleInputChange = (e)=>{
        const { name, value, type } = e.target;
        const checked = e.target instanceof HTMLInputElement ? e.target.checked : undefined;
        setFormData((prev)=>({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            let res;
            let newTestimonial;
            if (editId !== null) {
                // Update
                res = await fetch(`http://localhost:5000/api/testimonials/${editId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                if (!res.ok) throw new Error("Failed to update testimonial");
                newTestimonial = await res.json();
                setTestimonials((t)=>t.map((test)=>test.id === editId ? newTestimonial : test));
            } else {
                // Create
                res = await fetch("http://localhost:5000/api/testimonials", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                });
                if (!res.ok) throw new Error("Failed to add testimonial");
                newTestimonial = await res.json();
                setTestimonials((t)=>[
                        newTestimonial,
                        ...t
                    ]);
            }
            setShowModal(false);
            setFormData({
                name: "",
                testimonial: "",
                rating: 0,
                isActive: true
            });
            setEditId(null);
        } catch (err) {
            alert(err.message || "Error saving testimonial");
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("Are you sure you want to delete this testimonial?")) return;
        try {
            const res = await fetch(`http://localhost:5000/api/testimonials/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Delete failed");
            setTestimonials((t)=>t.filter((test)=>test.id !== id));
        } catch (err) {
            alert(err.message || "Error deleting testimonial");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-6xl mx-auto p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold",
                        children: "Testimonials"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition",
                        onClick: ()=>{
                            setShowModal(true);
                            setEditId(null);
                            setFormData({
                                name: "",
                                testimonial: "",
                                rating: 0,
                                isActive: true
                            });
                        },
                        children: "+ Add Testimonial"
                    }, void 0, false, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                children: testimonials.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center p-10 border rounded-lg bg-white shadow col-span-3",
                    children: "No testimonials found."
                }, void 0, false, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, this) : testimonials.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-xl shadow p-6 relative flex flex-col gap-2 border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-semibold",
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this),
                                    item.isActive !== false ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-gray-100 text-gray-400 px-3 py-1 rounded-full text-xs",
                                        children: "Inactive"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center mb-2",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl " + (item.rating && item.rating >= star ? "text-yellow-400" : "text-gray-300"),
                                        children: "★"
                                    }, star, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                lineNumber: 118,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 text-gray-700",
                                children: item.testimonial
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                lineNumber: 123,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                className: "my-2"
                            }, void 0, false, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                lineNumber: 124,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mt-1 gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-400",
                                        children: item.createdAt ? new Date(item.createdAt).toLocaleDateString() : new Date().toLocaleDateString()
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 text-gray-500 text-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                title: "Edit",
                                                className: "hover:text-blue-600",
                                                onClick: ()=>{
                                                    setEditId(item.id);
                                                    setFormData({
                                                        name: item.name || "",
                                                        testimonial: item.testimonial || "",
                                                        rating: item.rating || 0,
                                                        isActive: item.isActive !== false
                                                    });
                                                    setShowModal(true);
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12.65 3.35l-10.3 10.3v2h2l10.3-10.3a1.416 1.416 0 00-2-2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 147
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M14.86 5.14a2.001 2.001 0 00-2.83-2.83l-1.13 1.13 2.83 2.83 1.13-1.13z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 223
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                title: "Toggle Active",
                                                className: "hover:text-yellow-500",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: "8",
                                                            cy: "8",
                                                            r: "7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 208
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M8 4v4l3 3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 238
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 85
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                title: "Delete",
                                                className: "hover:text-red-500",
                                                onClick: ()=>handleDelete(item.id),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 6h10M6 6v6m4-6v6M2 6v10a1 1 0 001 1h10a1 1 0 001-1V6M7 2h2a2 2 0 012 2v1H5V4a2 2 0 012-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 236
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 113
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                lineNumber: 139,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                lineNumber: 125,
                                columnNumber: 17
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                        lineNumber: 109,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded shadow-lg w-full max-w-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "Add New Testimonial"
                        }, void 0, false, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleInputChange,
                                        placeholder: "Client Name",
                                        required: true,
                                        className: "border p-2 w-full rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "testimonial",
                                        value: formData.testimonial,
                                        onChange: handleInputChange,
                                        placeholder: "Testimonial Content",
                                        required: true,
                                        className: "border p-2 w-full rounded",
                                        rows: 3
                                    }, void 0, false, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mr-2",
                                            children: "Rating:"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this),
                                        [
                                            1,
                                            2,
                                            3,
                                            4,
                                            5
                                        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                onClick: ()=>setFormData((fd)=>({
                                                            ...fd,
                                                            rating: star
                                                        })),
                                                className: "cursor-pointer text-xl text-yellow-500",
                                                children: formData.rating >= star ? '★' : '☆'
                                            }, star, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "inline-flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "isActive",
                                                checked: formData.isActive,
                                                onChange: (e)=>setFormData((fd)=>({
                                                            ...fd,
                                                            isActive: e.target.checked
                                                        })),
                                                className: "mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 19
                                            }, this),
                                            " Active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowModal(false),
                                            className: "px-4 py-2 rounded bg-gray-200",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "px-4 py-2 rounded bg-blue-500 text-white",
                                            children: "Save Testimonial"
                                        }, void 0, false, {
                                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/propertydrone/propertydrone_fe/app/dashboard/testimonials/page.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(TestimonialsPage, "YPFn1sA9J8S9X2mzLgZHHIJ3xvc=");
_c = TestimonialsPage;
var _c;
__turbopack_context__.k.register(_c, "TestimonialsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=propertydrone_propertydrone_fe_app_dashboard_testimonials_page_tsx_a6882311._.js.map