module.exports = [
"[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/tiptap-ocrlqn2l.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$",
    ()=>Pi,
    "A",
    ()=>Ei,
    "B",
    ()=>Qo,
    "C",
    ()=>oi,
    "D",
    ()=>Ai,
    "E",
    ()=>Yo,
    "F",
    ()=>ai,
    "G",
    ()=>wi,
    "H",
    ()=>li,
    "I",
    ()=>ni,
    "J",
    ()=>Fe,
    "K",
    ()=>ft,
    "L",
    ()=>yi,
    "M",
    ()=>Oi,
    "N",
    ()=>ti,
    "O",
    ()=>hi,
    "P",
    ()=>Ci,
    "Q",
    ()=>Li,
    "R",
    ()=>ei,
    "S",
    ()=>si,
    "T",
    ()=>ci,
    "U",
    ()=>ri,
    "V",
    ()=>$o,
    "W",
    ()=>ho,
    "X",
    ()=>_i,
    "Y",
    ()=>Ri,
    "Z",
    ()=>Hi,
    "_",
    ()=>Ii,
    "a",
    ()=>L,
    "a0",
    ()=>$i,
    "b",
    ()=>is,
    "c",
    ()=>Jo,
    "d",
    ()=>Zo,
    "e",
    ()=>ii,
    "f",
    ()=>Go,
    "g",
    ()=>_,
    "h",
    ()=>di,
    "i",
    ()=>ae,
    "j",
    ()=>ui,
    "k",
    ()=>pi,
    "l",
    ()=>mi,
    "m",
    ()=>x,
    "n",
    ()=>$e,
    "o",
    ()=>fi,
    "p",
    ()=>gi,
    "q",
    ()=>Kt,
    "r",
    ()=>bi,
    "s",
    ()=>vi,
    "t",
    ()=>Gt,
    "u",
    ()=>Xo,
    "v",
    ()=>ki,
    "w",
    ()=>xi,
    "x",
    ()=>Si,
    "y",
    ()=>Mi,
    "z",
    ()=>Ti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/tippy.js/dist/tippy.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/vendor-DqXtrdHd.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
;
;
;
;
function mt(e) {
    const { state: t, transaction: n } = e;
    let { selection: r } = n, { doc: s } = n, { storedMarks: o } = n;
    return {
        ...t,
        apply: t.apply.bind(t),
        applyTransaction: t.applyTransaction.bind(t),
        plugins: t.plugins,
        schema: t.schema,
        reconfigure: t.reconfigure.bind(t),
        toJSON: t.toJSON.bind(t),
        get storedMarks () {
            return o;
        },
        get selection () {
            return r;
        },
        get doc () {
            return s;
        },
        get tr () {
            return r = n.selection, s = n.doc, o = n.storedMarks, n;
        }
    };
}
class gt {
    constructor(t){
        this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
    }
    get hasCustomState() {
        return !!this.customState;
    }
    get state() {
        return this.customState || this.editor.state;
    }
    get commands() {
        const { rawCommands: t, editor: n, state: r } = this, { view: s } = n, { tr: o } = r, i = this.buildProps(o);
        return Object.fromEntries(Object.entries(t).map(([a, l])=>[
                a,
                (...u)=>{
                    const d = l(...u)(i);
                    return !o.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(o), d;
                }
            ]));
    }
    get chain() {
        return ()=>this.createChain();
    }
    get can() {
        return ()=>this.createCan();
    }
    createChain(t, n = !0) {
        const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = [], l = !!t, c = t || o.tr, u = ()=>(!l && n && !c.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(c), a.every((p)=>p === !0)), d = {
            ...Object.fromEntries(Object.entries(r).map(([p, h])=>[
                    p,
                    (...m)=>{
                        const y = this.buildProps(c, n), g = h(...m)(y);
                        return a.push(g), d;
                    }
                ])),
            run: u
        };
        return d;
    }
    createCan(t) {
        const { rawCommands: n, state: r } = this, s = !1, o = t || r.tr, i = this.buildProps(o, s);
        return {
            ...Object.fromEntries(Object.entries(n).map(([l, c])=>[
                    l,
                    (...u)=>c(...u)({
                            ...i,
                            dispatch: void 0
                        })
                ])),
            chain: ()=>this.createChain(o, s)
        };
    }
    buildProps(t, n = !0) {
        const { rawCommands: r, editor: s, state: o } = this, { view: i } = s, a = {
            tr: t,
            editor: s,
            view: i,
            state: mt({
                state: o,
                transaction: t
            }),
            dispatch: n ? ()=>{} : void 0,
            chain: ()=>this.createChain(t, n),
            can: ()=>this.createCan(t),
            get commands () {
                return Object.fromEntries(Object.entries(r).map(([l, c])=>[
                        l,
                        (...u)=>c(...u)(a)
                    ]));
            }
        };
        return a;
    }
}
class Kn {
    constructor(){
        this.callbacks = {};
    }
    on(t, n) {
        return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(n), this;
    }
    emit(t, ...n) {
        const r = this.callbacks[t];
        return r && r.forEach((s)=>s.apply(this, n)), this;
    }
    off(t, n) {
        const r = this.callbacks[t];
        return r && (n ? this.callbacks[t] = r.filter((s)=>s !== n) : delete this.callbacks[t]), this;
    }
    removeAllListeners() {
        this.callbacks = {};
    }
}
function v(e, t, n) {
    return e.config[t] === void 0 && e.parent ? v(e.parent, t, n) : typeof e.config[t] == "function" ? e.config[t].bind({
        ...n,
        parent: e.parent ? v(e.parent, t, n) : null
    }) : e.config[t];
}
function yt(e) {
    const t = e.filter((s)=>s.type === "extension"), n = e.filter((s)=>s.type === "node"), r = e.filter((s)=>s.type === "mark");
    return {
        baseExtensions: t,
        nodeExtensions: n,
        markExtensions: r
    };
}
function Ce(e) {
    const t = [], { nodeExtensions: n, markExtensions: r } = yt(e), s = [
        ...n,
        ...r
    ], o = {
        default: null,
        rendered: !0,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: !0,
        isRequired: !1
    };
    return e.forEach((i)=>{
        const a = {
            name: i.name,
            options: i.options,
            storage: i.storage,
            extensions: s
        }, l = v(i, "addGlobalAttributes", a);
        if (!l) return;
        l().forEach((u)=>{
            u.types.forEach((d)=>{
                Object.entries(u.attributes).forEach(([p, h])=>{
                    t.push({
                        type: d,
                        name: p,
                        attribute: {
                            ...o,
                            ...h
                        }
                    });
                });
            });
        });
    }), s.forEach((i)=>{
        const a = {
            name: i.name,
            options: i.options,
            storage: i.storage
        }, l = v(i, "addAttributes", a);
        if (!l) return;
        const c = l();
        Object.entries(c).forEach(([u, d])=>{
            const p = {
                ...o,
                ...d
            };
            typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, t.push({
                type: i.name,
                name: u,
                attribute: p
            });
        });
    }), t;
}
function R(e, t) {
    if (typeof e == "string") {
        if (!t.nodes[e]) throw Error(`There is no node type named '${e}'. Maybe you forgot to add the extension?`);
        return t.nodes[e];
    }
    return e;
}
function x(...e) {
    return e.filter((t)=>!!t).reduce((t, n)=>{
        const r = {
            ...t
        };
        return Object.entries(n).forEach(([s, o])=>{
            if (!r[s]) {
                r[s] = o;
                return;
            }
            if (s === "class") {
                const a = o ? o.split(" ") : [], l = r[s] ? r[s].split(" ") : [], c = a.filter((u)=>!l.includes(u));
                r[s] = [
                    ...l,
                    ...c
                ].join(" ");
            } else if (s === "style") {
                const a = o ? o.split(";").map((u)=>u.trim()).filter(Boolean) : [], l = r[s] ? r[s].split(";").map((u)=>u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
                l.forEach((u)=>{
                    const [d, p] = u.split(":").map((h)=>h.trim());
                    c.set(d, p);
                }), a.forEach((u)=>{
                    const [d, p] = u.split(":").map((h)=>h.trim());
                    c.set(d, p);
                }), r[s] = Array.from(c.entries()).map(([u, d])=>`${u}: ${d}`).join("; ");
            } else r[s] = o;
        }), r;
    }, {});
}
function ut(e, t) {
    return t.filter((n)=>n.type === e.type.name).filter((n)=>n.attribute.rendered).map((n)=>n.attribute.renderHTML ? n.attribute.renderHTML(e.attrs) || {} : {
            [n.name]: e.attrs[n.name]
        }).reduce((n, r)=>x(n, r), {});
}
function xe(e) {
    return typeof e == "function";
}
function E(e, t = void 0, ...n) {
    return xe(e) ? t ? e.bind(t)(...n) : e(...n) : e;
}
function Un(e = {}) {
    return Object.keys(e).length === 0 && e.constructor === Object;
}
function qn(e) {
    return typeof e != "string" ? e : e.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(e) : e === "true" ? !0 : e === "false" ? !1 : e;
}
function re(e, t) {
    return "style" in e ? e : {
        ...e,
        getAttrs: (n)=>{
            const r = e.getAttrs ? e.getAttrs(n) : e.attrs;
            if (r === !1) return !1;
            const s = t.reduce((o, i)=>{
                const a = i.attribute.parseHTML ? i.attribute.parseHTML(n) : qn(n.getAttribute(i.name));
                return a == null ? o : {
                    ...o,
                    [i.name]: a
                };
            }, {});
            return {
                ...r,
                ...s
            };
        }
    };
}
function se(e) {
    return Object.fromEntries(// @ts-ignore
    Object.entries(e).filter(([t, n])=>t === "attrs" && Un(n) ? !1 : n != null));
}
function Gn(e, t) {
    var n;
    const r = Ce(e), { nodeExtensions: s, markExtensions: o } = yt(e), i = (n = s.find((c)=>v(c, "topNode"))) === null || n === void 0 ? void 0 : n.name, a = Object.fromEntries(s.map((c)=>{
        const u = r.filter((g)=>g.type === c.name), d = {
            name: c.name,
            options: c.options,
            storage: c.storage,
            editor: t
        }, p = e.reduce((g, k)=>{
            const b = v(k, "extendNodeSchema", d);
            return {
                ...g,
                ...b ? b(c) : {}
            };
        }, {}), h = se({
            ...p,
            content: E(v(c, "content", d)),
            marks: E(v(c, "marks", d)),
            group: E(v(c, "group", d)),
            inline: E(v(c, "inline", d)),
            atom: E(v(c, "atom", d)),
            selectable: E(v(c, "selectable", d)),
            draggable: E(v(c, "draggable", d)),
            code: E(v(c, "code", d)),
            whitespace: E(v(c, "whitespace", d)),
            defining: E(v(c, "defining", d)),
            isolating: E(v(c, "isolating", d)),
            attrs: Object.fromEntries(u.map((g)=>{
                var k;
                return [
                    g.name,
                    {
                        default: (k = g == null ? void 0 : g.attribute) === null || k === void 0 ? void 0 : k.default
                    }
                ];
            }))
        }), f = E(v(c, "parseHTML", d));
        f && (h.parseDOM = f.map((g)=>re(g, u)));
        const m = v(c, "renderHTML", d);
        m && (h.toDOM = (g)=>m({
                node: g,
                HTMLAttributes: ut(g, u)
            }));
        const y = v(c, "renderText", d);
        return y && (h.toText = y), [
            c.name,
            h
        ];
    })), l = Object.fromEntries(o.map((c)=>{
        const u = r.filter((y)=>y.type === c.name), d = {
            name: c.name,
            options: c.options,
            storage: c.storage,
            editor: t
        }, p = e.reduce((y, g)=>{
            const k = v(g, "extendMarkSchema", d);
            return {
                ...y,
                ...k ? k(c) : {}
            };
        }, {}), h = se({
            ...p,
            inclusive: E(v(c, "inclusive", d)),
            excludes: E(v(c, "excludes", d)),
            group: E(v(c, "group", d)),
            spanning: E(v(c, "spanning", d)),
            code: E(v(c, "code", d)),
            attrs: Object.fromEntries(u.map((y)=>{
                var g;
                return [
                    y.name,
                    {
                        default: (g = y == null ? void 0 : y.attribute) === null || g === void 0 ? void 0 : g.default
                    }
                ];
            }))
        }), f = E(v(c, "parseHTML", d));
        f && (h.parseDOM = f.map((y)=>re(y, u)));
        const m = v(c, "renderHTML", d);
        return m && (h.toDOM = (y)=>m({
                mark: y,
                HTMLAttributes: ut(y, u)
            })), [
            c.name,
            h
        ];
    }));
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]({
        topNode: i,
        nodes: a,
        marks: l
    });
}
function Ct(e, t) {
    return t.nodes[e] || t.marks[e] || null;
}
function oe(e, t) {
    return Array.isArray(t) ? t.some((n)=>(typeof n == "string" ? n : n.name) === e.name) : t;
}
const Jn = (e, t = 500)=>{
    let n = "";
    const r = e.parentOffset;
    return e.parent.nodesBetween(Math.max(0, r - t), r, (s, o, i, a)=>{
        var l, c;
        const u = ((c = (l = s.type.spec).toText) === null || c === void 0 ? void 0 : c.call(l, {
            node: s,
            pos: o,
            parent: i,
            index: a
        })) || s.textContent || "%leaf%";
        n += s.isAtom && !s.isText ? u : u.slice(0, Math.max(0, r - o));
    }), n;
};
function Wt(e) {
    return Object.prototype.toString.call(e) === "[object RegExp]";
}
class bt {
    constructor(t){
        this.find = t.find, this.handler = t.handler;
    }
}
const Yn = (e, t)=>{
    if (Wt(t)) return t.exec(e);
    const n = t(e);
    if (!n) return null;
    const r = [
        n.text
    ];
    return r.index = n.index, r.input = e, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function rt(e) {
    var t;
    const { editor: n, from: r, to: s, text: o, rules: i, plugin: a } = e, { view: l } = n;
    if (l.composing) return !1;
    const c = l.state.doc.resolve(r);
    if (// check for code node
    c.parent.type.spec.code || !((t = c.nodeBefore || c.nodeAfter) === null || t === void 0) && t.marks.find((p)=>p.type.spec.code)) return !1;
    let u = !1;
    const d = Jn(c) + o;
    return i.forEach((p)=>{
        if (u) return;
        const h = Yn(d, p.find);
        if (!h) return;
        const f = l.state.tr, m = mt({
            state: l.state,
            transaction: f
        }), y = {
            from: r - (h[0].length - o.length),
            to: s
        }, { commands: g, chain: k, can: b } = new gt({
            editor: n,
            state: m
        });
        p.handler({
            state: m,
            range: y,
            match: h,
            commands: g,
            chain: k,
            can: b
        }) === null || !f.steps.length || (f.setMeta(a, {
            transform: f,
            from: r,
            to: s,
            text: o
        }), l.dispatch(f), u = !0);
    }), u;
}
function Xn(e) {
    const { editor: t, rules: n } = e, r = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        state: {
            init () {
                return null;
            },
            apply (s, o) {
                const i = s.getMeta(r);
                if (i) return i;
                const a = s.getMeta("applyInputRules");
                return !!a && setTimeout(()=>{
                    const { from: c, text: u } = a, d = c + u.length;
                    rt({
                        editor: t,
                        from: c,
                        to: d,
                        text: u,
                        rules: n,
                        plugin: r
                    });
                }), s.selectionSet || s.docChanged ? null : o;
            }
        },
        props: {
            handleTextInput (s, o, i, a) {
                return rt({
                    editor: t,
                    from: o,
                    to: i,
                    text: a,
                    rules: n,
                    plugin: r
                });
            },
            handleDOMEvents: {
                compositionend: (s)=>(setTimeout(()=>{
                        const { $cursor: o } = s.state.selection;
                        o && rt({
                            editor: t,
                            from: o.pos,
                            to: o.pos,
                            text: "",
                            rules: n,
                            plugin: r
                        });
                    }), !1)
            },
            // add support for input rules to trigger on enter
            // this is useful for example for code blocks
            handleKeyDown (s, o) {
                if (o.key !== "Enter") return !1;
                const { $cursor: i } = s.state.selection;
                return i ? rt({
                    editor: t,
                    from: i.pos,
                    to: i.pos,
                    text: `
`,
                    rules: n,
                    plugin: r
                }) : !1;
            }
        },
        // @ts-ignore
        isInputRules: !0
    });
    return r;
}
function Qn(e) {
    return Object.prototype.toString.call(e).slice(8, -1);
}
function st(e) {
    return Qn(e) !== "Object" ? !1 : e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype;
}
function vt(e, t) {
    const n = {
        ...e
    };
    return st(e) && st(t) && Object.keys(t).forEach((r)=>{
        st(t[r]) && st(e[r]) ? n[r] = vt(e[r], t[r]) : n[r] = t[r];
    }), n;
}
class D {
    constructor(t = {}){
        this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
            name: this.name,
            defaultOptions: {}
        }, this.config = {
            ...this.config,
            ...t
        }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(v(this, "addOptions", {
            name: this.name
        }))), this.storage = E(v(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(t = {}) {
        return new D(t);
    }
    configure(t = {}) {
        const n = this.extend({
            ...this.config,
            addOptions: ()=>vt(this.options, t)
        });
        return n.name = this.name, n.parent = this.parent, n;
    }
    extend(t = {}) {
        const n = new D(t);
        return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(v(n, "addOptions", {
            name: n.name
        })), n.storage = E(v(n, "addStorage", {
            name: n.name,
            options: n.options
        })), n;
    }
    static handleExit({ editor: t, mark: n }) {
        const { tr: r } = t.state, s = t.state.selection.$from;
        if (s.pos === s.end()) {
            const i = s.marks();
            if (!!!i.find((c)=>(c == null ? void 0 : c.type.name) === n.name)) return !1;
            const l = i.find((c)=>(c == null ? void 0 : c.type.name) === n.name);
            return l && r.removeStoredMark(l), r.insertText(" ", s.pos), t.view.dispatch(r), !0;
        }
        return !1;
    }
}
function Zn(e) {
    return typeof e == "number";
}
class tr {
    constructor(t){
        this.find = t.find, this.handler = t.handler;
    }
}
const er = (e, t, n)=>{
    if (Wt(t)) return [
        ...e.matchAll(t)
    ];
    const r = t(e, n);
    return r ? r.map((s)=>{
        const o = [
            s.text
        ];
        return o.index = s.index, o.input = e, o.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(s.replaceWith)), o;
    }) : [];
};
function nr(e) {
    const { editor: t, state: n, from: r, to: s, rule: o, pasteEvent: i, dropEvent: a } = e, { commands: l, chain: c, can: u } = new gt({
        editor: t,
        state: n
    }), d = [];
    return n.doc.nodesBetween(r, s, (h, f)=>{
        if (!h.isTextblock || h.type.spec.code) return;
        const m = Math.max(r, f), y = Math.min(s, f + h.content.size), g = h.textBetween(m - f, y - f, void 0, "￼");
        er(g, o.find, i).forEach((b)=>{
            if (b.index === void 0) return;
            const M = m + b.index + 1, w = M + b[0].length, S = {
                from: n.tr.mapping.map(M),
                to: n.tr.mapping.map(w)
            }, C = o.handler({
                state: n,
                range: S,
                match: b,
                commands: l,
                chain: c,
                can: u,
                pasteEvent: i,
                dropEvent: a
            });
            d.push(C);
        });
    }), d.every((h)=>h !== null);
}
const rr = (e)=>{
    var t;
    const n = new ClipboardEvent("paste", {
        clipboardData: new DataTransfer()
    });
    return (t = n.clipboardData) === null || t === void 0 || t.setData("text/html", e), n;
};
function sr(e) {
    const { editor: t, rules: n } = e;
    let r = null, s = !1, o = !1, i = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, a = typeof DragEvent < "u" ? new DragEvent("drop") : null;
    const l = ({ state: u, from: d, to: p, rule: h, pasteEvt: f })=>{
        const m = u.tr, y = mt({
            state: u,
            transaction: m
        });
        if (!(!nr({
            editor: t,
            state: y,
            from: Math.max(d - 1, 0),
            to: p.b - 1,
            rule: h,
            pasteEvent: f,
            dropEvent: a
        }) || !m.steps.length)) return a = typeof DragEvent < "u" ? new DragEvent("drop") : null, i = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    };
    return n.map((u)=>new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
            // we register a global drag handler to track the current drag source element
            view (d) {
                const p = (h)=>{
                    var f;
                    r = !((f = d.dom.parentElement) === null || f === void 0) && f.contains(h.target) ? d.dom.parentElement : null;
                };
                return window.addEventListener("dragstart", p), {
                    destroy () {
                        window.removeEventListener("dragstart", p);
                    }
                };
            },
            props: {
                handleDOMEvents: {
                    drop: (d, p)=>(o = r === d.dom.parentElement, a = p, !1),
                    paste: (d, p)=>{
                        var h;
                        const f = (h = p.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
                        return i = p, s = !!(f != null && f.includes("data-pm-slice")), !1;
                    }
                }
            },
            appendTransaction: (d, p, h)=>{
                const f = d[0], m = f.getMeta("uiEvent") === "paste" && !s, y = f.getMeta("uiEvent") === "drop" && !o, g = f.getMeta("applyPasteRules"), k = !!g;
                if (!m && !y && !k) return;
                if (k) {
                    const { from: w, text: S } = g, C = w + S.length, A = rr(S);
                    return l({
                        rule: u,
                        state: h,
                        from: w,
                        to: {
                            b: C
                        },
                        pasteEvt: A
                    });
                }
                const b = p.doc.content.findDiffStart(h.doc.content), M = p.doc.content.findDiffEnd(h.doc.content);
                if (!(!Zn(b) || !M || b === M.b)) return l({
                    rule: u,
                    state: h,
                    from: b,
                    to: M,
                    pasteEvt: i
                });
            }
        }));
}
function or(e) {
    const t = e.filter((n, r)=>e.indexOf(n) !== r);
    return Array.from(new Set(t));
}
class Q {
    constructor(t, n){
        this.splittableMarks = [], this.editor = n, this.extensions = Q.resolve(t), this.schema = Gn(this.extensions, n), this.setupExtensions();
    }
    /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */ static resolve(t) {
        const n = Q.sort(Q.flatten(t)), r = or(n.map((s)=>s.name));
        return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((s)=>`'${s}'`).join(", ")}]. This can lead to issues.`), n;
    }
    /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */ static flatten(t) {
        return t.map((n)=>{
            const r = {
                name: n.name,
                options: n.options,
                storage: n.storage
            }, s = v(n, "addExtensions", r);
            return s ? [
                n,
                ...this.flatten(s())
            ] : n;
        }).flat(10);
    }
    /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */ static sort(t) {
        return t.sort((r, s)=>{
            const o = v(r, "priority") || 100, i = v(s, "priority") || 100;
            return o > i ? -1 : o < i ? 1 : 0;
        });
    }
    /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */ get commands() {
        return this.extensions.reduce((t, n)=>{
            const r = {
                name: n.name,
                options: n.options,
                storage: n.storage,
                editor: this.editor,
                type: Ct(n.name, this.schema)
            }, s = v(n, "addCommands", r);
            return s ? {
                ...t,
                ...s()
            } : t;
        }, {});
    }
    /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */ get plugins() {
        const { editor: t } = this, n = Q.sort([
            ...this.extensions
        ].reverse()), r = [], s = [], o = n.map((i)=>{
            const a = {
                name: i.name,
                options: i.options,
                storage: i.storage,
                editor: t,
                type: Ct(i.name, this.schema)
            }, l = [], c = v(i, "addKeyboardShortcuts", a);
            let u = {};
            if (i.type === "mark" && v(i, "exitable", a) && (u.ArrowRight = ()=>D.handleExit({
                    editor: t,
                    mark: i
                })), c) {
                const m = Object.fromEntries(Object.entries(c()).map(([y, g])=>[
                        y,
                        ()=>g({
                                editor: t
                            })
                    ]));
                u = {
                    ...u,
                    ...m
                };
            }
            const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["H"])(u);
            l.push(d);
            const p = v(i, "addInputRules", a);
            oe(i, t.options.enableInputRules) && p && r.push(...p());
            const h = v(i, "addPasteRules", a);
            oe(i, t.options.enablePasteRules) && h && s.push(...h());
            const f = v(i, "addProseMirrorPlugins", a);
            if (f) {
                const m = f();
                l.push(...m);
            }
            return l;
        }).flat();
        return [
            Xn({
                editor: t,
                rules: r
            }),
            ...sr({
                editor: t,
                rules: s
            }),
            ...o
        ];
    }
    /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */ get attributes() {
        return Ce(this.extensions);
    }
    /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */ get nodeViews() {
        const { editor: t } = this, { nodeExtensions: n } = yt(this.extensions);
        return Object.fromEntries(n.filter((r)=>!!v(r, "addNodeView")).map((r)=>{
            const s = this.attributes.filter((l)=>l.type === r.name), o = {
                name: r.name,
                options: r.options,
                storage: r.storage,
                editor: t,
                type: R(r.name, this.schema)
            }, i = v(r, "addNodeView", o);
            if (!i) return [];
            const a = (l, c, u, d, p)=>{
                const h = ut(l, s);
                return i()({
                    // pass-through
                    node: l,
                    view: c,
                    getPos: u,
                    decorations: d,
                    innerDecorations: p,
                    // tiptap-specific
                    editor: t,
                    extension: r,
                    HTMLAttributes: h
                });
            };
            return [
                r.name,
                a
            ];
        }));
    }
    /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */ setupExtensions() {
        this.extensions.forEach((t)=>{
            var n;
            this.editor.extensionStorage[t.name] = t.storage;
            const r = {
                name: t.name,
                options: t.options,
                storage: t.storage,
                editor: this.editor,
                type: Ct(t.name, this.schema)
            };
            t.type === "mark" && (!((n = E(v(t, "keepOnSplit", r))) !== null && n !== void 0) || n) && this.splittableMarks.push(t.name);
            const s = v(t, "onBeforeCreate", r), o = v(t, "onCreate", r), i = v(t, "onUpdate", r), a = v(t, "onSelectionUpdate", r), l = v(t, "onTransaction", r), c = v(t, "onFocus", r), u = v(t, "onBlur", r), d = v(t, "onDestroy", r);
            s && this.editor.on("beforeCreate", s), o && this.editor.on("create", o), i && this.editor.on("update", i), a && this.editor.on("selectionUpdate", a), l && this.editor.on("transaction", l), c && this.editor.on("focus", c), u && this.editor.on("blur", u), d && this.editor.on("destroy", d);
        });
    }
}
class _ {
    constructor(t = {}){
        this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
            name: this.name,
            defaultOptions: {}
        }, this.config = {
            ...this.config,
            ...t
        }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(v(this, "addOptions", {
            name: this.name
        }))), this.storage = E(v(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(t = {}) {
        return new _(t);
    }
    configure(t = {}) {
        const n = this.extend({
            ...this.config,
            addOptions: ()=>vt(this.options, t)
        });
        return n.name = this.name, n.parent = this.parent, n;
    }
    extend(t = {}) {
        const n = new _({
            ...this.config,
            ...t
        });
        return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(v(n, "addOptions", {
            name: n.name
        })), n.storage = E(v(n, "addStorage", {
            name: n.name,
            options: n.options
        })), n;
    }
}
function Ae(e, t, n) {
    const { from: r, to: s } = t, { blockSeparator: o = `

`, textSerializers: i = {} } = n || {};
    let a = "";
    return e.nodesBetween(r, s, (l, c, u, d)=>{
        var p;
        l.isBlock && c > r && (a += o);
        const h = i == null ? void 0 : i[l.type.name];
        if (h) return u && (a += h({
            node: l,
            pos: c,
            parent: u,
            index: d,
            range: t
        })), !1;
        l.isText && (a += (p = l == null ? void 0 : l.text) === null || p === void 0 ? void 0 : p.slice(Math.max(r, c) - c, s - c));
    }), a;
}
function Oe(e) {
    return Object.fromEntries(Object.entries(e.nodes).filter(([, t])=>t.spec.toText).map(([t, n])=>[
            t,
            n.spec.toText
        ]));
}
const ir = _.create({
    name: "clipboardTextSerializer",
    addOptions () {
        return {
            blockSeparator: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("clipboardTextSerializer"),
                props: {
                    clipboardTextSerializer: ()=>{
                        const { editor: e } = this, { state: t, schema: n } = e, { doc: r, selection: s } = t, { ranges: o } = s, i = Math.min(...o.map((u)=>u.$from.pos)), a = Math.max(...o.map((u)=>u.$to.pos)), l = Oe(n);
                        return Ae(r, {
                            from: i,
                            to: a
                        }, {
                            ...this.options.blockSeparator !== void 0 ? {
                                blockSeparator: this.options.blockSeparator
                            } : {},
                            textSerializers: l
                        });
                    }
                }
            })
        ];
    }
}), ar = ()=>({ editor: e, view: t })=>(requestAnimationFrame(()=>{
            var n;
            e.isDestroyed || (t.dom.blur(), (n = window == null ? void 0 : window.getSelection()) === null || n === void 0 || n.removeAllRanges());
        }), !0), lr = (e = !1)=>({ commands: t })=>t.setContent("", e), cr = ()=>({ state: e, tr: t, dispatch: n })=>{
        const { selection: r } = t, { ranges: s } = r;
        return n && s.forEach(({ $from: o, $to: i })=>{
            e.doc.nodesBetween(o.pos, i.pos, (a, l)=>{
                if (a.type.isText) return;
                const { doc: c, mapping: u } = t, d = c.resolve(u.map(l)), p = c.resolve(u.map(l + a.nodeSize)), h = d.blockRange(p);
                if (!h) return;
                const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(h);
                if (a.type.isTextblock) {
                    const { defaultType: m } = d.parent.contentMatchAt(d.index());
                    t.setNodeMarkup(h.start, m);
                }
                (f || f === 0) && t.lift(h, f);
            });
        }), !0;
    }, dr = (e)=>(t)=>e(t), ur = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["b"])(e, t), pr = (e, t)=>({ editor: n, tr: r })=>{
        const { state: s } = n, o = s.doc.slice(e.from, e.to);
        r.deleteRange(e.from, e.to);
        const i = r.mapping.map(t);
        return r.insert(i, o.content), r.setSelection(new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"](r.doc.resolve(i - 1))), !0;
    }, hr = ()=>({ tr: e, dispatch: t })=>{
        const { selection: n } = e, r = n.$anchor.node();
        if (r.content.size > 0) return !1;
        const s = e.selection.$anchor;
        for(let o = s.depth; o > 0; o -= 1)if (s.node(o).type === r.type) {
            if (t) {
                const a = s.before(o), l = s.after(o);
                e.delete(a, l).scrollIntoView();
            }
            return !0;
        }
        return !1;
    }, fr = (e)=>({ tr: t, state: n, dispatch: r })=>{
        const s = R(e, n.schema), o = t.selection.$anchor;
        for(let i = o.depth; i > 0; i -= 1)if (o.node(i).type === s) {
            if (r) {
                const l = o.before(i), c = o.after(i);
                t.delete(l, c).scrollIntoView();
            }
            return !0;
        }
        return !1;
    }, mr = (e)=>({ tr: t, dispatch: n })=>{
        const { from: r, to: s } = e;
        return n && t.delete(r, s), !0;
    }, gr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"])(e, t), yr = ()=>({ commands: e })=>e.keyboardShortcut("Enter"), br = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(e, t);
function pt(e, t, n = {
    strict: !0
}) {
    const r = Object.keys(t);
    return r.length ? r.every((s)=>n.strict ? t[s] === e[s] : Wt(t[s]) ? t[s].test(e[s]) : t[s] === e[s]) : !0;
}
function Rt(e, t, n = {}) {
    return e.find((r)=>r.type === t && pt(r.attrs, n));
}
function vr(e, t, n = {}) {
    return !!Rt(e, t, n);
}
function Kt(e, t, n = {}) {
    if (!e || !t) return;
    let r = e.parent.childAfter(e.parentOffset);
    if (e.parentOffset === r.offset && r.offset !== 0 && (r = e.parent.childBefore(e.parentOffset)), !r.node) return;
    const s = Rt([
        ...r.node.marks
    ], t, n);
    if (!s) return;
    let o = r.index, i = e.start() + r.offset, a = o + 1, l = i + r.node.nodeSize;
    for(Rt([
        ...r.node.marks
    ], t, n); o > 0 && s.isInSet(e.parent.child(o - 1).marks);)o -= 1, i -= e.parent.child(o).nodeSize;
    for(; a < e.parent.childCount && vr([
        ...e.parent.child(a).marks
    ], t, n);)l += e.parent.child(a).nodeSize, a += 1;
    return {
        from: i,
        to: l
    };
}
function V(e, t) {
    if (typeof e == "string") {
        if (!t.marks[e]) throw Error(`There is no mark type named '${e}'. Maybe you forgot to add the extension?`);
        return t.marks[e];
    }
    return e;
}
const Mr = (e, t = {})=>({ tr: n, state: r, dispatch: s })=>{
        const o = V(e, r.schema), { doc: i, selection: a } = n, { $from: l, from: c, to: u } = a;
        if (s) {
            const d = Kt(l, o, t);
            if (d && d.from <= c && d.to >= u) {
                const p = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(i, d.from, d.to);
                n.setSelection(p);
            }
        }
        return !0;
    }, Sr = (e)=>(t)=>{
        const n = typeof e == "function" ? e(t) : e;
        for(let r = 0; r < n.length; r += 1)if (n[r](t)) return !0;
        return !1;
    };
function Ut(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"];
}
function B(e = 0, t = 0, n = 0) {
    return Math.min(Math.max(e, t), n);
}
function Le(e, t = null) {
    if (!t) return null;
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].atStart(e), r = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].atEnd(e);
    if (t === "start" || t === !0) return n;
    if (t === "end") return r;
    const s = n.from, o = r.to;
    return t === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(e, B(0, s, o), B(e.content.size, s, o)) : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(e, B(t, s, o), B(t, s, o));
}
function Mt() {
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const kr = (e = null, t = {})=>({ editor: n, view: r, tr: s, dispatch: o })=>{
        t = {
            scrollIntoView: !0,
            ...t
        };
        const i = ()=>{
            Mt() && r.dom.focus(), requestAnimationFrame(()=>{
                n.isDestroyed || (r.focus(), t != null && t.scrollIntoView && n.commands.scrollIntoView());
            });
        };
        if (r.hasFocus() && e === null || e === !1) return !0;
        if (o && e === null && !Ut(n.state.selection)) return i(), !0;
        const a = Le(s.doc, e) || n.state.selection, l = n.state.selection.eq(a);
        return o && (l || s.setSelection(a), l && s.storedMarks && s.setStoredMarks(s.storedMarks), i()), !0;
    }, wr = (e, t)=>(n)=>e.every((r, s)=>t(r, {
                ...n,
                index: s
            })), Er = (e, t)=>({ tr: n, commands: r })=>r.insertContentAt({
            from: n.selection.from,
            to: n.selection.to
        }, e, t), _e = (e)=>{
    const t = e.childNodes;
    for(let n = t.length - 1; n >= 0; n -= 1){
        const r = t[n];
        r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? e.removeChild(r) : r.nodeType === 1 && _e(r);
    }
    return e;
};
function ot(e) {
    const t = `<body>${e}</body>`, n = new window.DOMParser().parseFromString(t, "text/html").body;
    return _e(n);
}
function ht(e, t, n) {
    n = {
        slice: !0,
        parseOptions: {},
        ...n
    };
    const r = typeof e == "object" && e !== null, s = typeof e == "string";
    if (r) try {
        if (Array.isArray(e) && e.length > 0) return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F"].fromArray(e.map((a)=>t.nodeFromJSON(a)));
        const i = t.nodeFromJSON(e);
        return n.errorOnInvalidContent && i.check(), i;
    } catch (o) {
        if (n.errorOnInvalidContent) throw new Error("[tiptap error]: Invalid JSON content", {
            cause: o
        });
        return console.warn("[tiptap warn]: Invalid content.", "Passed value:", e, "Error:", o), ht("", t, n);
    }
    if (s) {
        if (n.errorOnInvalidContent) {
            let i = !1, a = "";
            const l = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["I"]({
                topNode: t.spec.topNode,
                marks: t.spec.marks,
                // Prosemirror's schemas are executed such that: the last to execute, matches last
                // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
                nodes: t.spec.nodes.append({
                    __tiptap__private__unknown__catch__all__node: {
                        content: "inline*",
                        group: "block",
                        parseDOM: [
                            {
                                tag: "*",
                                getAttrs: (c)=>(i = !0, a = typeof c == "string" ? c : c.outerHTML, null)
                            }
                        ]
                    }
                })
            });
            if (n.slice ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"].fromSchema(l).parseSlice(ot(e), n.parseOptions) : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"].fromSchema(l).parse(ot(e), n.parseOptions), n.errorOnInvalidContent && i) throw new Error("[tiptap error]: Invalid HTML content", {
                cause: new Error(`Invalid element found: ${a}`)
            });
        }
        const o = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["J"].fromSchema(t);
        return n.slice ? o.parseSlice(ot(e), n.parseOptions).content : o.parse(ot(e), n.parseOptions);
    }
    return ht("", t, n);
}
function Tr(e, t, n) {
    const r = e.steps.length - 1;
    if (r < t) return;
    const s = e.steps[r];
    if (!(s instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["R"] || s instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["K"])) return;
    const o = e.mapping.maps[r];
    let i = 0;
    o.forEach((a, l, c, u)=>{
        i === 0 && (i = u);
    }), e.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].near(e.doc.resolve(i), n));
}
const Cr = (e)=>!("type" in e), xr = (e, t, n)=>({ tr: r, dispatch: s, editor: o })=>{
        var i;
        if (s) {
            n = {
                parseOptions: {},
                updateSelection: !0,
                applyInputRules: !1,
                applyPasteRules: !1,
                ...n
            };
            let a;
            try {
                a = ht(t, o.schema, {
                    parseOptions: {
                        preserveWhitespace: "full",
                        ...n.parseOptions
                    },
                    errorOnInvalidContent: (i = n.errorOnInvalidContent) !== null && i !== void 0 ? i : o.options.enableContentCheck
                });
            } catch (f) {
                return o.emit("contentError", {
                    editor: o,
                    error: f,
                    disableCollaboration: ()=>{
                        console.error("[tiptap error]: Unable to disable collaboration at this point in time");
                    }
                }), !1;
            }
            let { from: l, to: c } = typeof e == "number" ? {
                from: e,
                to: e
            } : {
                from: e.from,
                to: e.to
            }, u = !0, d = !0;
            if ((Cr(a) ? a : [
                a
            ]).forEach((f)=>{
                f.check(), u = u ? f.isText && f.marks.length === 0 : !1, d = d ? f.isBlock : !1;
            }), l === c && d) {
                const { parent: f } = r.doc.resolve(l);
                f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1, c += 1);
            }
            let h;
            u ? (Array.isArray(t) ? h = t.map((f)=>f.text || "").join("") : typeof t == "object" && t && t.text ? h = t.text : h = t, r.insertText(h, l, c)) : (h = a, r.replaceWith(l, c, h)), n.updateSelection && Tr(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", {
                from: l,
                text: h
            }), n.applyPasteRules && r.setMeta("applyPasteRules", {
                from: l,
                text: h
            });
        }
        return !0;
    }, Ar = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["j"])(e, t), Or = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["h"])(e, t), Lr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["i"])(e, t), _r = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["k"])(e, t), Hr = ()=>({ state: e, dispatch: t, tr: n })=>{
        try {
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(e.doc, e.selection.$from.pos, -1);
            return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
        } catch  {
            return !1;
        }
    }, Rr = ()=>({ state: e, dispatch: t, tr: n })=>{
        try {
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["m"])(e.doc, e.selection.$from.pos, 1);
            return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
        } catch  {
            return !1;
        }
    }, Pr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["n"])(e, t), Ir = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["o"])(e, t);
function He() {
    return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function $r(e) {
    const t = e.split(/-(?!$)/);
    let n = t[t.length - 1];
    n === "Space" && (n = " ");
    let r, s, o, i;
    for(let a = 0; a < t.length - 1; a += 1){
        const l = t[a];
        if (/^(cmd|meta|m)$/i.test(l)) i = !0;
        else if (/^a(lt)?$/i.test(l)) r = !0;
        else if (/^(c|ctrl|control)$/i.test(l)) s = !0;
        else if (/^s(hift)?$/i.test(l)) o = !0;
        else if (/^mod$/i.test(l)) Mt() || He() ? i = !0 : s = !0;
        else throw new Error(`Unrecognized modifier name: ${l}`);
    }
    return r && (n = `Alt-${n}`), s && (n = `Ctrl-${n}`), i && (n = `Meta-${n}`), o && (n = `Shift-${n}`), n;
}
const Dr = (e)=>({ editor: t, view: n, tr: r, dispatch: s })=>{
        const o = $r(e).split(/-(?!$)/), i = o.find((c)=>![
                "Alt",
                "Ctrl",
                "Meta",
                "Shift"
            ].includes(c)), a = new KeyboardEvent("keydown", {
            key: i === "Space" ? " " : i,
            altKey: o.includes("Alt"),
            ctrlKey: o.includes("Ctrl"),
            metaKey: o.includes("Meta"),
            shiftKey: o.includes("Shift"),
            bubbles: !0,
            cancelable: !0
        }), l = t.captureTransaction(()=>{
            n.someProp("handleKeyDown", (c)=>c(n, a));
        });
        return l == null || l.steps.forEach((c)=>{
            const u = c.map(r.mapping);
            u && s && r.maybeStep(u);
        }), !0;
    };
function nt(e, t, n = {}) {
    const { from: r, to: s, empty: o } = e.selection, i = t ? R(t, e.schema) : null, a = [];
    e.doc.nodesBetween(r, s, (d, p)=>{
        if (d.isText) return;
        const h = Math.max(r, p), f = Math.min(s, p + d.nodeSize);
        a.push({
            node: d,
            from: h,
            to: f
        });
    });
    const l = s - r, c = a.filter((d)=>i ? i.name === d.node.type.name : !0).filter((d)=>pt(d.node.attrs, n, {
            strict: !1
        }));
    return o ? !!c.length : c.reduce((d, p)=>d + p.to - p.from, 0) >= l;
}
const Nr = (e, t = {})=>({ state: n, dispatch: r })=>{
        const s = R(e, n.schema);
        return nt(n, s, t) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["p"])(n, r) : !1;
    }, Br = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["q"])(e, t), jr = (e)=>({ state: t, dispatch: n })=>{
        const r = R(e, t.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["r"])(r)(t, n);
    }, Fr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["s"])(e, t);
function St(e, t) {
    return t.nodes[e] ? "node" : t.marks[e] ? "mark" : null;
}
function ie(e, t) {
    const n = typeof t == "string" ? [
        t
    ] : t;
    return Object.keys(e).reduce((r, s)=>(n.includes(s) || (r[s] = e[s]), r), {});
}
const zr = (e, t)=>({ tr: n, state: r, dispatch: s })=>{
        let o = null, i = null;
        const a = St(typeof e == "string" ? e : e.name, r.schema);
        return a ? (a === "node" && (o = R(e, r.schema)), a === "mark" && (i = V(e, r.schema)), s && n.selection.ranges.forEach((l)=>{
            r.doc.nodesBetween(l.$from.pos, l.$to.pos, (c, u)=>{
                o && o === c.type && n.setNodeMarkup(u, void 0, ie(c.attrs, t)), i && c.marks.length && c.marks.forEach((d)=>{
                    i === d.type && n.addMark(u, u + c.nodeSize, i.create(ie(d.attrs, t)));
                });
            });
        }), !0) : !1;
    }, Vr = ()=>({ tr: e, dispatch: t })=>(t && e.scrollIntoView(), !0), Wr = ()=>({ tr: e, commands: t })=>t.setTextSelection({
            from: 0,
            to: e.doc.content.size
        }), Kr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["t"])(e, t), Ur = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["u"])(e, t), qr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["v"])(e, t), Gr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["w"])(e, t), Jr = ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["x"])(e, t);
function Pt(e, t, n = {}, r = {}) {
    return ht(e, t, {
        slice: !1,
        parseOptions: n,
        errorOnInvalidContent: r.errorOnInvalidContent
    });
}
const Yr = (e, t = !1, n = {}, r = {})=>({ editor: s, tr: o, dispatch: i, commands: a })=>{
        var l, c;
        const { doc: u } = o;
        if (n.preserveWhitespace !== "full") {
            const d = Pt(e, s.schema, n, {
                errorOnInvalidContent: (l = r.errorOnInvalidContent) !== null && l !== void 0 ? l : s.options.enableContentCheck
            });
            return i && o.replaceWith(0, u.content.size, d).setMeta("preventUpdate", !t), !0;
        }
        return i && o.setMeta("preventUpdate", !t), a.insertContentAt({
            from: 0,
            to: u.content.size
        }, e, {
            parseOptions: n,
            errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : s.options.enableContentCheck
        });
    };
function qt(e, t) {
    const n = V(t, e.schema), { from: r, to: s, empty: o } = e.selection, i = [];
    o ? (e.storedMarks && i.push(...e.storedMarks), i.push(...e.selection.$head.marks())) : e.doc.nodesBetween(r, s, (l)=>{
        i.push(...l.marks);
    });
    const a = i.find((l)=>l.type.name === n.name);
    return a ? {
        ...a.attrs
    } : {};
}
function Xr(e, t) {
    const n = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["T"](e);
    return t.forEach((r)=>{
        r.steps.forEach((s)=>{
            n.step(s);
        });
    }), n;
}
function Qr(e) {
    for(let t = 0; t < e.edgeCount; t += 1){
        const { type: n } = e.edge(t);
        if (n.isTextblock && !n.hasRequiredAttrs()) return n;
    }
    return null;
}
function Go(e, t) {
    const n = [];
    return e.descendants((r, s)=>{
        t(r) && n.push({
            node: r,
            pos: s
        });
    }), n;
}
function Zr(e, t, n) {
    const r = [];
    return e.nodesBetween(t.from, t.to, (s, o)=>{
        n(s) && r.push({
            node: s,
            pos: o
        });
    }), r;
}
function Re(e, t) {
    for(let n = e.depth; n > 0; n -= 1){
        const r = e.node(n);
        if (t(r)) return {
            pos: n > 0 ? e.before(n) : 0,
            start: e.start(n),
            depth: n,
            node: r
        };
    }
}
function Gt(e) {
    return (t)=>Re(t.$from, e);
}
function ts(e, t) {
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["L"].fromSchema(t).serializeFragment(e), s = document.implementation.createHTMLDocument().createElement("div");
    return s.appendChild(n), s.innerHTML;
}
function es(e, t) {
    const n = {
        from: 0,
        to: e.content.size
    };
    return Ae(e, n, t);
}
function ns(e, t) {
    const n = R(t, e.schema), { from: r, to: s } = e.selection, o = [];
    e.doc.nodesBetween(r, s, (a)=>{
        o.push(a);
    });
    const i = o.reverse().find((a)=>a.type.name === n.name);
    return i ? {
        ...i.attrs
    } : {};
}
function Pe(e, t) {
    const n = St(typeof t == "string" ? t : t.name, e.schema);
    return n === "node" ? ns(e, t) : n === "mark" ? qt(e, t) : {};
}
function rs(e, t = JSON.stringify) {
    const n = {};
    return e.filter((r)=>{
        const s = t(r);
        return Object.prototype.hasOwnProperty.call(n, s) ? !1 : n[s] = !0;
    });
}
function ss(e) {
    const t = rs(e);
    return t.length === 1 ? t : t.filter((n, r)=>!t.filter((o, i)=>i !== r).some((o)=>n.oldRange.from >= o.oldRange.from && n.oldRange.to <= o.oldRange.to && n.newRange.from >= o.newRange.from && n.newRange.to <= o.newRange.to));
}
function os(e) {
    const { mapping: t, steps: n } = e, r = [];
    return t.maps.forEach((s, o)=>{
        const i = [];
        if (s.ranges.length) s.forEach((a, l)=>{
            i.push({
                from: a,
                to: l
            });
        });
        else {
            const { from: a, to: l } = n[o];
            if (a === void 0 || l === void 0) return;
            i.push({
                from: a,
                to: l
            });
        }
        i.forEach(({ from: a, to: l })=>{
            const c = t.slice(o).map(a, -1), u = t.slice(o).map(l), d = t.invert().map(c, -1), p = t.invert().map(u);
            r.push({
                oldRange: {
                    from: d,
                    to: p
                },
                newRange: {
                    from: c,
                    to: u
                }
            });
        });
    }), ss(r);
}
function Jt(e, t, n) {
    const r = [];
    return e === t ? n.resolve(e).marks().forEach((s)=>{
        const o = n.resolve(e), i = Kt(o, s.type);
        i && r.push({
            mark: s,
            ...i
        });
    }) : n.nodesBetween(e, t, (s, o)=>{
        !s || (s == null ? void 0 : s.nodeSize) === void 0 || r.push(...s.marks.map((i)=>({
                from: o,
                to: o + s.nodeSize,
                mark: i
            })));
    }), r;
}
function ct(e, t, n) {
    return Object.fromEntries(Object.entries(n).filter(([r])=>{
        const s = e.find((o)=>o.type === t && o.name === r);
        return s ? s.attribute.keepOnSplit : !1;
    }));
}
function It(e, t, n = {}) {
    const { empty: r, ranges: s } = e.selection, o = t ? V(t, e.schema) : null;
    if (r) return !!(e.storedMarks || e.selection.$from.marks()).filter((d)=>o ? o.name === d.type.name : !0).find((d)=>pt(d.attrs, n, {
            strict: !1
        }));
    let i = 0;
    const a = [];
    if (s.forEach(({ $from: d, $to: p })=>{
        const h = d.pos, f = p.pos;
        e.doc.nodesBetween(h, f, (m, y)=>{
            if (!m.isText && !m.marks.length) return;
            const g = Math.max(h, y), k = Math.min(f, y + m.nodeSize), b = k - g;
            i += b, a.push(...m.marks.map((M)=>({
                    mark: M,
                    from: g,
                    to: k
                })));
        });
    }), i === 0) return !1;
    const l = a.filter((d)=>o ? o.name === d.mark.type.name : !0).filter((d)=>pt(d.mark.attrs, n, {
            strict: !1
        })).reduce((d, p)=>d + p.to - p.from, 0), c = a.filter((d)=>o ? d.mark.type !== o && d.mark.type.excludes(o) : !0).reduce((d, p)=>d + p.to - p.from, 0);
    return (l > 0 ? l + c : l) >= i;
}
function is(e, t, n = {}) {
    if (!t) return nt(e, null, n) || It(e, null, n);
    const r = St(t, e.schema);
    return r === "node" ? nt(e, t, n) : r === "mark" ? It(e, t, n) : !1;
}
function ae(e, t) {
    const { nodeExtensions: n } = yt(t), r = n.find((i)=>i.name === e);
    if (!r) return !1;
    const s = {
        name: r.name,
        options: r.options,
        storage: r.storage
    }, o = E(v(r, "group", s));
    return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function kt(e, { checkChildren: t = !0, ignoreWhitespace: n = !1 } = {}) {
    var r;
    if (n) {
        if (e.type.name === "hardBreak") return !0;
        if (e.isText) return /^\s*$/m.test((r = e.text) !== null && r !== void 0 ? r : "");
    }
    if (e.isText) return !e.text;
    if (e.isAtom || e.isLeaf) return !1;
    if (e.content.childCount === 0) return !0;
    if (t) {
        let s = !0;
        return e.content.forEach((o)=>{
            s !== !1 && (kt(o, {
                ignoreWhitespace: n,
                checkChildren: t
            }) || (s = !1));
        }), s;
    }
    return !1;
}
function Ie(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"];
}
function as(e, t, n) {
    const s = e.state.doc.content.size, o = B(t, 0, s), i = B(n, 0, s), a = e.coordsAtPos(o), l = e.coordsAtPos(i, -1), c = Math.min(a.top, l.top), u = Math.max(a.bottom, l.bottom), d = Math.min(a.left, l.left), p = Math.max(a.right, l.right), h = p - d, f = u - c, g = {
        top: c,
        bottom: u,
        left: d,
        right: p,
        width: h,
        height: f,
        x: d,
        y: c
    };
    return {
        ...g,
        toJSON: ()=>g
    };
}
function ls(e, t, n) {
    var r;
    const { selection: s } = t;
    let o = null;
    if (Ut(s) && (o = s.$cursor), o) {
        const a = (r = e.storedMarks) !== null && r !== void 0 ? r : o.marks();
        return !!n.isInSet(a) || !a.some((l)=>l.type.excludes(n));
    }
    const { ranges: i } = s;
    return i.some(({ $from: a, $to: l })=>{
        let c = a.depth === 0 ? e.doc.inlineContent && e.doc.type.allowsMarkType(n) : !1;
        return e.doc.nodesBetween(a.pos, l.pos, (u, d, p)=>{
            if (c) return !1;
            if (u.isInline) {
                const h = !p || p.type.allowsMarkType(n), f = !!n.isInSet(u.marks) || !u.marks.some((m)=>m.type.excludes(n));
                c = h && f;
            }
            return !c;
        }), c;
    });
}
const cs = (e, t = {})=>({ tr: n, state: r, dispatch: s })=>{
        const { selection: o } = n, { empty: i, ranges: a } = o, l = V(e, r.schema);
        if (s) if (i) {
            const c = qt(r, l);
            n.addStoredMark(l.create({
                ...c,
                ...t
            }));
        } else a.forEach((c)=>{
            const u = c.$from.pos, d = c.$to.pos;
            r.doc.nodesBetween(u, d, (p, h)=>{
                const f = Math.max(h, u), m = Math.min(h + p.nodeSize, d);
                p.marks.find((g)=>g.type === l) ? p.marks.forEach((g)=>{
                    l === g.type && n.addMark(f, m, l.create({
                        ...g.attrs,
                        ...t
                    }));
                }) : n.addMark(f, m, l.create(t));
            });
        });
        return ls(r, n, l);
    }, ds = (e, t)=>({ tr: n })=>(n.setMeta(e, t), !0), us = (e, t = {})=>({ state: n, dispatch: r, chain: s })=>{
        const o = R(e, n.schema);
        return o.isTextblock ? s().command(({ commands: i })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"])(o, t)(n) ? !0 : i.clearNodes()).command(({ state: i })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["y"])(o, t)(i, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
    }, ps = (e)=>({ tr: t, dispatch: n })=>{
        if (n) {
            const { doc: r } = t, s = B(e, 0, r.content.size), o = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"].create(r, s);
            t.setSelection(o);
        }
        return !0;
    }, hs = (e)=>({ tr: t, dispatch: n })=>{
        if (n) {
            const { doc: r } = t, { from: s, to: o } = typeof e == "number" ? {
                from: e,
                to: e
            } : e, i = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].atStart(r).from, a = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].atEnd(r).to, l = B(s, i, a), c = B(o, i, a), u = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(r, l, c);
            t.setSelection(u);
        }
        return !0;
    }, fs = (e)=>({ state: t, dispatch: n })=>{
        const r = R(e, t.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"])(r)(t, n);
    };
function le(e, t) {
    const n = e.storedMarks || e.selection.$to.parentOffset && e.selection.$from.marks();
    if (n) {
        const r = n.filter((s)=>t == null ? void 0 : t.includes(s.type.name));
        e.tr.ensureMarks(r);
    }
}
const ms = ({ keepMarks: e = !0 } = {})=>({ tr: t, state: n, dispatch: r, editor: s })=>{
        const { selection: o, doc: i } = t, { $from: a, $to: l } = o, c = s.extensionManager.attributes, u = ct(c, a.node().type.name, a.node().attrs);
        if (o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"] && o.node.isBlock) return !a.parentOffset || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(i, a.pos) ? !1 : (r && (e && le(n, s.extensionManager.splittableMarks), t.split(a.pos).scrollIntoView()), !0);
        if (!a.parent.isBlock) return !1;
        const d = l.parentOffset === l.parent.content.size, p = a.depth === 0 ? void 0 : Qr(a.node(-1).contentMatchAt(a.indexAfter(-1)));
        let h = d && p ? [
            {
                type: p,
                attrs: u
            }
        ] : void 0, f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(t.doc, t.mapping.map(a.pos), 1, h);
        if (!h && !f && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(t.doc, t.mapping.map(a.pos), 1, p ? [
            {
                type: p
            }
        ] : void 0) && (f = !0, h = p ? [
            {
                type: p,
                attrs: u
            }
        ] : void 0), r) {
            if (f && (o instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"] && t.deleteSelection(), t.split(t.mapping.map(a.pos), 1, h), p && !d && !a.parentOffset && a.parent.type !== p)) {
                const m = t.mapping.map(a.before()), y = t.doc.resolve(m);
                a.node(-1).canReplaceWith(y.index(), y.index() + 1, p) && t.setNodeMarkup(t.mapping.map(a.before()), p);
            }
            e && le(n, s.extensionManager.splittableMarks), t.scrollIntoView();
        }
        return f;
    }, gs = (e, t = {})=>({ tr: n, state: r, dispatch: s, editor: o })=>{
        var i;
        const a = R(e, r.schema), { $from: l, $to: c } = r.selection, u = r.selection.node;
        if (u && u.isBlock || l.depth < 2 || !l.sameParent(c)) return !1;
        const d = l.node(-1);
        if (d.type !== a) return !1;
        const p = o.extensionManager.attributes;
        if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
            if (l.depth === 2 || l.node(-3).type !== a || l.index(-2) !== l.node(-2).childCount - 1) return !1;
            if (s) {
                let g = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F"].empty;
                const k = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
                for(let A = l.depth - k; A >= l.depth - 3; A -= 1)g = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F"].from(l.node(A).copy(g));
                const b = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, M = {
                    ...ct(p, l.node().type.name, l.node().attrs),
                    ...t
                }, w = ((i = a.contentMatch.defaultType) === null || i === void 0 ? void 0 : i.createAndFill(M)) || void 0;
                g = g.append(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F"].from(a.createAndFill(null, w) || void 0));
                const S = l.before(l.depth - (k - 1));
                n.replace(S, l.after(-b), new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["B"](g, 4 - k, 0));
                let C = -1;
                n.doc.nodesBetween(S, n.doc.content.size, (A, T)=>{
                    if (C > -1) return !1;
                    A.isTextblock && A.content.size === 0 && (C = T + 1);
                }), C > -1 && n.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].near(n.doc.resolve(C))), n.scrollIntoView();
            }
            return !0;
        }
        const h = c.pos === l.end() ? d.contentMatchAt(0).defaultType : null, f = {
            ...ct(p, d.type.name, d.attrs),
            ...t
        }, m = {
            ...ct(p, l.node().type.name, l.node().attrs),
            ...t
        };
        n.delete(l.pos, c.pos);
        const y = h ? [
            {
                type: a,
                attrs: f
            },
            {
                type: h,
                attrs: m
            }
        ] : [
            {
                type: a,
                attrs: f
            }
        ];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["A"])(n.doc, l.pos, 2)) return !1;
        if (s) {
            const { selection: g, storedMarks: k } = r, { splittableMarks: b } = o.extensionManager, M = k || g.$to.parentOffset && g.$from.marks();
            if (n.split(l.pos, 2, y).scrollIntoView(), !M || !s) return !0;
            const w = M.filter((S)=>b.includes(S.type.name));
            n.ensureMarks(w);
        }
        return !0;
    }, xt = (e, t)=>{
    const n = Gt((i)=>i.type === t)(e.selection);
    if (!n) return !0;
    const r = e.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
    if (r === void 0) return !0;
    const s = e.doc.nodeAt(r);
    return n.node.type === (s == null ? void 0 : s.type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(e.doc, n.pos) && e.join(n.pos), !0;
}, At = (e, t)=>{
    const n = Gt((i)=>i.type === t)(e.selection);
    if (!n) return !0;
    const r = e.doc.resolve(n.start).after(n.depth);
    if (r === void 0) return !0;
    const s = e.doc.nodeAt(r);
    return n.node.type === (s == null ? void 0 : s.type) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(e.doc, r) && e.join(r), !0;
}, ys = (e, t, n, r = {})=>({ editor: s, tr: o, state: i, dispatch: a, chain: l, commands: c, can: u })=>{
        const { extensions: d, splittableMarks: p } = s.extensionManager, h = R(e, i.schema), f = R(t, i.schema), { selection: m, storedMarks: y } = i, { $from: g, $to: k } = m, b = g.blockRange(k), M = y || m.$to.parentOffset && m.$from.marks();
        if (!b) return !1;
        const w = Gt((S)=>ae(S.type.name, d))(m);
        if (b.depth >= 1 && w && b.depth - w.depth <= 1) {
            if (w.node.type === h) return c.liftListItem(f);
            if (ae(w.node.type.name, d) && h.validContent(w.node.content) && a) return l().command(()=>(o.setNodeMarkup(w.pos, h), !0)).command(()=>xt(o, h)).command(()=>At(o, h)).run();
        }
        return !n || !M || !a ? l().command(()=>u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(()=>xt(o, h)).command(()=>At(o, h)).run() : l().command(()=>{
            const S = u().wrapInList(h, r), C = M.filter((A)=>p.includes(A.type.name));
            return o.ensureMarks(C), S ? !0 : c.clearNodes();
        }).wrapInList(h, r).command(()=>xt(o, h)).command(()=>At(o, h)).run();
    }, bs = (e, t = {}, n = {})=>({ state: r, commands: s })=>{
        const { extendEmptyMarkRange: o = !1 } = n, i = V(e, r.schema);
        return It(r, i, t) ? s.unsetMark(i, {
            extendEmptyMarkRange: o
        }) : s.setMark(i, t);
    }, vs = (e, t, n = {})=>({ state: r, commands: s })=>{
        const o = R(e, r.schema), i = R(t, r.schema), a = nt(r, o, n);
        let l;
        return r.selection.$anchor.sameParent(r.selection.$head) && (l = r.selection.$anchor.parent.attrs), a ? s.setNode(i, l) : s.setNode(o, {
            ...l,
            ...n
        });
    }, Ms = (e, t = {})=>({ state: n, commands: r })=>{
        const s = R(e, n.schema);
        return nt(n, s, t) ? r.lift(s) : r.wrapIn(s, t);
    }, Ss = ()=>({ state: e, dispatch: t })=>{
        const n = e.plugins;
        for(let r = 0; r < n.length; r += 1){
            const s = n[r];
            let o;
            if (s.spec.isInputRules && (o = s.getState(e))) {
                if (t) {
                    const i = e.tr, a = o.transform;
                    for(let l = a.steps.length - 1; l >= 0; l -= 1)i.step(a.steps[l].invert(a.docs[l]));
                    if (o.text) {
                        const l = i.doc.resolve(o.from).marks();
                        i.replaceWith(o.from, o.to, e.schema.text(o.text, l));
                    } else i.delete(o.from, o.to);
                }
                return !0;
            }
        }
        return !1;
    }, ks = ()=>({ tr: e, dispatch: t })=>{
        const { selection: n } = e, { empty: r, ranges: s } = n;
        return r || t && s.forEach((o)=>{
            e.removeMark(o.$from.pos, o.$to.pos);
        }), !0;
    }, ws = (e, t = {})=>({ tr: n, state: r, dispatch: s })=>{
        var o;
        const { extendEmptyMarkRange: i = !1 } = t, { selection: a } = n, l = V(e, r.schema), { $from: c, empty: u, ranges: d } = a;
        if (!s) return !0;
        if (u && i) {
            let { from: p, to: h } = a;
            const f = (o = c.marks().find((y)=>y.type === l)) === null || o === void 0 ? void 0 : o.attrs, m = Kt(c, l, f);
            m && (p = m.from, h = m.to), n.removeMark(p, h, l);
        } else d.forEach((p)=>{
            n.removeMark(p.$from.pos, p.$to.pos, l);
        });
        return n.removeStoredMark(l), !0;
    }, Es = (e, t = {})=>({ tr: n, state: r, dispatch: s })=>{
        let o = null, i = null;
        const a = St(typeof e == "string" ? e : e.name, r.schema);
        return a ? (a === "node" && (o = R(e, r.schema)), a === "mark" && (i = V(e, r.schema)), s && n.selection.ranges.forEach((l)=>{
            const c = l.$from.pos, u = l.$to.pos;
            r.doc.nodesBetween(c, u, (d, p)=>{
                o && o === d.type && n.setNodeMarkup(p, void 0, {
                    ...d.attrs,
                    ...t
                }), i && d.marks.length && d.marks.forEach((h)=>{
                    if (i === h.type) {
                        const f = Math.max(p, c), m = Math.min(p + d.nodeSize, u);
                        n.addMark(f, m, i.create({
                            ...h.attrs,
                            ...t
                        }));
                    }
                });
            });
        }), !0) : !1;
    }, Ts = (e, t = {})=>({ state: n, dispatch: r })=>{
        const s = R(e, n.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["C"])(s, t)(n, r);
    }, Cs = (e, t = {})=>({ state: n, dispatch: r })=>{
        const s = R(e, n.schema);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["D"])(s, t)(n, r);
    };
var xs = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    blur: ar,
    clearContent: lr,
    clearNodes: cr,
    command: dr,
    createParagraphNear: ur,
    cut: pr,
    deleteCurrentNode: hr,
    deleteNode: fr,
    deleteRange: mr,
    deleteSelection: gr,
    enter: yr,
    exitCode: br,
    extendMarkRange: Mr,
    first: Sr,
    focus: kr,
    forEach: wr,
    insertContent: Er,
    insertContentAt: xr,
    joinBackward: Lr,
    joinDown: Or,
    joinForward: _r,
    joinItemBackward: Hr,
    joinItemForward: Rr,
    joinTextblockBackward: Pr,
    joinTextblockForward: Ir,
    joinUp: Ar,
    keyboardShortcut: Dr,
    lift: Nr,
    liftEmptyBlock: Br,
    liftListItem: jr,
    newlineInCode: Fr,
    resetAttributes: zr,
    scrollIntoView: Vr,
    selectAll: Wr,
    selectNodeBackward: Kr,
    selectNodeForward: Ur,
    selectParentNode: qr,
    selectTextblockEnd: Gr,
    selectTextblockStart: Jr,
    setContent: Yr,
    setMark: cs,
    setMeta: ds,
    setNode: us,
    setNodeSelection: ps,
    setTextSelection: hs,
    sinkListItem: fs,
    splitBlock: ms,
    splitListItem: gs,
    toggleList: ys,
    toggleMark: bs,
    toggleNode: vs,
    toggleWrap: Ms,
    undoInputRule: Ss,
    unsetAllMarks: ks,
    unsetMark: ws,
    updateAttributes: Es,
    wrapIn: Ts,
    wrapInList: Cs
});
const As = _.create({
    name: "commands",
    addCommands () {
        return {
            ...xs
        };
    }
}), Os = _.create({
    name: "drop",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("tiptapDrop"),
                props: {
                    handleDrop: (e, t, n, r)=>{
                        this.editor.emit("drop", {
                            editor: this.editor,
                            event: t,
                            slice: n,
                            moved: r
                        });
                    }
                }
            })
        ];
    }
}), Ls = _.create({
    name: "editable",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("editable"),
                props: {
                    editable: ()=>this.editor.options.editable
                }
            })
        ];
    }
}), _s = _.create({
    name: "focusEvents",
    addProseMirrorPlugins () {
        const { editor: e } = this;
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("focusEvents"),
                props: {
                    handleDOMEvents: {
                        focus: (t, n)=>{
                            e.isFocused = !0;
                            const r = e.state.tr.setMeta("focus", {
                                event: n
                            }).setMeta("addToHistory", !1);
                            return t.dispatch(r), !1;
                        },
                        blur: (t, n)=>{
                            e.isFocused = !1;
                            const r = e.state.tr.setMeta("blur", {
                                event: n
                            }).setMeta("addToHistory", !1);
                            return t.dispatch(r), !1;
                        }
                    }
                }
            })
        ];
    }
}), Hs = _.create({
    name: "keymap",
    addKeyboardShortcuts () {
        const e = ()=>this.editor.commands.first(({ commands: i })=>[
                    ()=>i.undoInputRule(),
                    // maybe convert first text block node to default node
                    ()=>i.command(({ tr: a })=>{
                            const { selection: l, doc: c } = a, { empty: u, $anchor: d } = l, { pos: p, parent: h } = d, f = d.parent.isTextblock && p > 0 ? a.doc.resolve(p - 1) : d, m = f.parent.type.spec.isolating, y = d.pos - d.parentOffset, g = m && f.parent.childCount === 1 ? y === d.pos : __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].atStart(c).from === p;
                            return !u || !h.type.isTextblock || h.textContent.length || !g || g && d.parent.type.name === "paragraph" ? !1 : i.clearNodes();
                        }),
                    ()=>i.deleteSelection(),
                    ()=>i.joinBackward(),
                    ()=>i.selectNodeBackward()
                ]), t = ()=>this.editor.commands.first(({ commands: i })=>[
                    ()=>i.deleteSelection(),
                    ()=>i.deleteCurrentNode(),
                    ()=>i.joinForward(),
                    ()=>i.selectNodeForward()
                ]), r = {
            Enter: ()=>this.editor.commands.first(({ commands: i })=>[
                        ()=>i.newlineInCode(),
                        ()=>i.createParagraphNear(),
                        ()=>i.liftEmptyBlock(),
                        ()=>i.splitBlock()
                    ]),
            "Mod-Enter": ()=>this.editor.commands.exitCode(),
            Backspace: e,
            "Mod-Backspace": e,
            "Shift-Backspace": e,
            Delete: t,
            "Mod-Delete": t,
            "Mod-a": ()=>this.editor.commands.selectAll()
        }, s = {
            ...r
        }, o = {
            ...r,
            "Ctrl-h": e,
            "Alt-Backspace": e,
            "Ctrl-d": t,
            "Ctrl-Alt-Backspace": t,
            "Alt-Delete": t,
            "Alt-d": t,
            "Ctrl-a": ()=>this.editor.commands.selectTextblockStart(),
            "Ctrl-e": ()=>this.editor.commands.selectTextblockEnd()
        };
        return Mt() || He() ? o : s;
    },
    addProseMirrorPlugins () {
        return [
            // With this plugin we check if the whole document was selected and deleted.
            // In this case we will additionally call `clearNodes()` to convert e.g. a heading
            // to a paragraph if necessary.
            // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
            // with many other commands.
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("clearDocument"),
                appendTransaction: (e, t, n)=>{
                    const r = e.some((m)=>m.docChanged) && !t.doc.eq(n.doc), s = e.some((m)=>m.getMeta("preventClearDocument"));
                    if (!r || s) return;
                    const { empty: o, from: i, to: a } = t.selection, l = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].atStart(t.doc).from, c = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].atEnd(t.doc).to;
                    if (o || !(i === l && a === c) || !kt(n.doc)) return;
                    const p = n.tr, h = mt({
                        state: n,
                        transaction: p
                    }), { commands: f } = new gt({
                        editor: this.editor,
                        state: h
                    });
                    if (f.clearNodes(), !!p.steps.length) return p;
                }
            })
        ];
    }
}), Rs = _.create({
    name: "paste",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("tiptapPaste"),
                props: {
                    handlePaste: (e, t, n)=>{
                        this.editor.emit("paste", {
                            editor: this.editor,
                            event: t,
                            slice: n
                        });
                    }
                }
            })
        ];
    }
}), Ps = _.create({
    name: "tabindex",
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("tabindex"),
                props: {
                    attributes: ()=>this.editor.isEditable ? {
                            tabindex: "0"
                        } : {}
                }
            })
        ];
    }
});
class q {
    get name() {
        return this.node.type.name;
    }
    constructor(t, n, r = !1, s = null){
        this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = t, this.editor = n, this.currentNode = s;
    }
    get node() {
        return this.currentNode || this.resolvedPos.node();
    }
    get element() {
        return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
        var t;
        return (t = this.actualDepth) !== null && t !== void 0 ? t : this.resolvedPos.depth;
    }
    get pos() {
        return this.resolvedPos.pos;
    }
    get content() {
        return this.node.content;
    }
    set content(t) {
        let n = this.from, r = this.to;
        if (this.isBlock) {
            if (this.content.size === 0) {
                console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                return;
            }
            n = this.from + 1, r = this.to - 1;
        }
        this.editor.commands.insertContentAt({
            from: n,
            to: r
        }, t);
    }
    get attributes() {
        return this.node.attrs;
    }
    get textContent() {
        return this.node.textContent;
    }
    get size() {
        return this.node.nodeSize;
    }
    get from() {
        return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
        return {
            from: this.from,
            to: this.to
        };
    }
    get to() {
        return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
    }
    get parent() {
        if (this.depth === 0) return null;
        const t = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(t);
        return new q(n, this.editor);
    }
    get before() {
        let t = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
        return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.from - 3)), new q(t, this.editor);
    }
    get after() {
        let t = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
        return t.depth !== this.depth && (t = this.resolvedPos.doc.resolve(this.to + 3)), new q(t, this.editor);
    }
    get children() {
        const t = [];
        return this.node.content.forEach((n, r)=>{
            const s = n.isBlock && !n.isTextblock, o = this.pos + r + 1, i = this.resolvedPos.doc.resolve(o);
            if (!s && i.depth <= this.depth) return;
            const a = new q(i, this.editor, s, s ? n : null);
            s && (a.actualDepth = this.depth + 1), t.push(new q(i, this.editor, s, s ? n : null));
        }), t;
    }
    get firstChild() {
        return this.children[0] || null;
    }
    get lastChild() {
        const t = this.children;
        return t[t.length - 1] || null;
    }
    closest(t, n = {}) {
        let r = null, s = this.parent;
        for(; s && !r;){
            if (s.node.type.name === t) if (Object.keys(n).length > 0) {
                const o = s.node.attrs, i = Object.keys(n);
                for(let a = 0; a < i.length; a += 1){
                    const l = i[a];
                    if (o[l] !== n[l]) break;
                }
            } else r = s;
            s = s.parent;
        }
        return r;
    }
    querySelector(t, n = {}) {
        return this.querySelectorAll(t, n, !0)[0] || null;
    }
    querySelectorAll(t, n = {}, r = !1) {
        let s = [];
        if (!this.children || this.children.length === 0) return s;
        const o = Object.keys(n);
        return this.children.forEach((i)=>{
            r && s.length > 0 || (i.node.type.name === t && o.every((l)=>n[l] === i.node.attrs[l]) && s.push(i), !(r && s.length > 0) && (s = s.concat(i.querySelectorAll(t, n, r))));
        }), s;
    }
    setAttribute(t) {
        const n = this.editor.state.selection;
        this.editor.chain().setTextSelection(this.from).updateAttributes(this.node.type.name, t).setTextSelection(n.from).run();
    }
}
const Is = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function $s(e, t, n) {
    const r = document.querySelector("style[data-tiptap-style]");
    if (r !== null) return r;
    const s = document.createElement("style");
    return t && s.setAttribute("nonce", t), s.setAttribute("data-tiptap-style", ""), s.innerHTML = e, document.getElementsByTagName("head")[0].appendChild(s), s;
}
class Ds extends Kn {
    constructor(t = {}){
        super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
            element: document.createElement("div"),
            content: "",
            injectCSS: !0,
            injectNonce: void 0,
            extensions: [],
            autofocus: !1,
            editable: !0,
            editorProps: {},
            parseOptions: {},
            coreExtensionOptions: {},
            enableInputRules: !0,
            enablePasteRules: !0,
            enableCoreExtensions: !0,
            enableContentCheck: !1,
            onBeforeCreate: ()=>null,
            onCreate: ()=>null,
            onUpdate: ()=>null,
            onSelectionUpdate: ()=>null,
            onTransaction: ()=>null,
            onFocus: ()=>null,
            onBlur: ()=>null,
            onDestroy: ()=>null,
            onContentError: ({ error: n })=>{
                throw n;
            },
            onPaste: ()=>null,
            onDrop: ()=>null
        }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(t), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", {
            editor: this
        }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: n, slice: r, moved: s })=>this.options.onDrop(n, r, s)), this.on("paste", ({ event: n, slice: r })=>this.options.onPaste(n, r)), window.setTimeout(()=>{
            this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", {
                editor: this
            }), this.isInitialized = !0);
        }, 0);
    }
    /**
   * Returns the editor storage.
   */ get storage() {
        return this.extensionStorage;
    }
    /**
   * An object of all registered commands.
   */ get commands() {
        return this.commandManager.commands;
    }
    /**
   * Create a command chain to call multiple commands at once.
   */ chain() {
        return this.commandManager.chain();
    }
    /**
   * Check if a command or a command chain can be executed. Without executing it.
   */ can() {
        return this.commandManager.can();
    }
    /**
   * Inject CSS styles.
   */ injectCSS() {
        this.options.injectCSS && document && (this.css = $s(Is, this.options.injectNonce));
    }
    /**
   * Update editor options.
   *
   * @param options A list of options
   */ setOptions(t = {}) {
        this.options = {
            ...this.options,
            ...t
        }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
    }
    /**
   * Update editable state of the editor.
   */ setEditable(t, n = !0) {
        this.setOptions({
            editable: t
        }), n && this.emit("update", {
            editor: this,
            transaction: this.state.tr
        });
    }
    /**
   * Returns whether the editor is editable.
   */ get isEditable() {
        return this.options.editable && this.view && this.view.editable;
    }
    /**
   * Returns the editor state.
   */ get state() {
        return this.view.state;
    }
    /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */ registerPlugin(t, n) {
        const r = xe(n) ? n(t, [
            ...this.state.plugins
        ]) : [
            ...this.state.plugins,
            t
        ], s = this.state.reconfigure({
            plugins: r
        });
        return this.view.updateState(s), s;
    }
    /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */ unregisterPlugin(t) {
        if (this.isDestroyed) return;
        const n = typeof t == "string" ? `${t}$` : t.key, r = this.state.reconfigure({
            // @ts-ignore
            plugins: this.state.plugins.filter((s)=>!s.key.startsWith(n))
        });
        return this.view.updateState(r), r;
    }
    /**
   * Creates an extension manager.
   */ createExtensionManager() {
        var t, n;
        const s = [
            ...this.options.enableCoreExtensions ? [
                Ls,
                ir.configure({
                    blockSeparator: (n = (t = this.options.coreExtensionOptions) === null || t === void 0 ? void 0 : t.clipboardTextSerializer) === null || n === void 0 ? void 0 : n.blockSeparator
                }),
                As,
                _s,
                Hs,
                Ps,
                Os,
                Rs
            ].filter((o)=>typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [],
            ...this.options.extensions
        ].filter((o)=>[
                "extension",
                "node",
                "mark"
            ].includes(o == null ? void 0 : o.type));
        this.extensionManager = new Q(s, this);
    }
    /**
   * Creates an command manager.
   */ createCommandManager() {
        this.commandManager = new gt({
            editor: this
        });
    }
    /**
   * Creates a ProseMirror schema.
   */ createSchema() {
        this.schema = this.extensionManager.schema;
    }
    /**
   * Creates a ProseMirror view.
   */ createView() {
        let t;
        try {
            t = Pt(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: this.options.enableContentCheck
            });
        } catch (o) {
            if (!(o instanceof Error) || ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content"
            ].includes(o.message)) throw o;
            this.emit("contentError", {
                editor: this,
                error: o,
                disableCollaboration: ()=>{
                    this.options.extensions = this.options.extensions.filter((i)=>i.name !== "collaboration"), this.createExtensionManager();
                }
            }), t = Pt(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: !1
            });
        }
        const n = Le(t, this.options.autofocus);
        this.view = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["E"](this.options.element, {
            ...this.options.editorProps,
            dispatchTransaction: this.dispatchTransaction.bind(this),
            state: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["G"].create({
                doc: t,
                selection: n || void 0
            })
        });
        const r = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(r), this.createNodeViews(), this.prependClass();
        const s = this.view.dom;
        s.editor = this;
    }
    /**
   * Creates all node views.
   */ createNodeViews() {
        this.view.isDestroyed || this.view.setProps({
            nodeViews: this.extensionManager.nodeViews
        });
    }
    /**
   * Prepend class name to element.
   */ prependClass() {
        this.view.dom.className = `tiptap ${this.view.dom.className}`;
    }
    captureTransaction(t) {
        this.isCapturingTransaction = !0, t(), this.isCapturingTransaction = !1;
        const n = this.capturedTransaction;
        return this.capturedTransaction = null, n;
    }
    /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */ dispatchTransaction(t) {
        if (this.view.isDestroyed) return;
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = t;
                return;
            }
            t.steps.forEach((i)=>{
                var a;
                return (a = this.capturedTransaction) === null || a === void 0 ? void 0 : a.step(i);
            });
            return;
        }
        const n = this.state.apply(t), r = !this.state.selection.eq(n.selection);
        this.emit("beforeTransaction", {
            editor: this,
            transaction: t,
            nextState: n
        }), this.view.updateState(n), this.emit("transaction", {
            editor: this,
            transaction: t
        }), r && this.emit("selectionUpdate", {
            editor: this,
            transaction: t
        });
        const s = t.getMeta("focus"), o = t.getMeta("blur");
        s && this.emit("focus", {
            editor: this,
            event: s.event,
            transaction: t
        }), o && this.emit("blur", {
            editor: this,
            event: o.event,
            transaction: t
        }), !(!t.docChanged || t.getMeta("preventUpdate")) && this.emit("update", {
            editor: this,
            transaction: t
        });
    }
    /**
   * Get attributes of the currently selected node or mark.
   */ getAttributes(t) {
        return Pe(this.state, t);
    }
    isActive(t, n) {
        const r = typeof t == "string" ? t : null, s = typeof t == "string" ? n : t;
        return is(this.state, r, s);
    }
    /**
   * Get the document as JSON.
   */ getJSON() {
        return this.state.doc.toJSON();
    }
    /**
   * Get the document as HTML.
   */ getHTML() {
        return ts(this.state.doc.content, this.schema);
    }
    /**
   * Get the document as text.
   */ getText(t) {
        const { blockSeparator: n = `

`, textSerializers: r = {} } = t || {};
        return es(this.state.doc, {
            blockSeparator: n,
            textSerializers: {
                ...Oe(this.schema),
                ...r
            }
        });
    }
    /**
   * Check if there is no content.
   */ get isEmpty() {
        return kt(this.state.doc);
    }
    /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */ getCharacterCount() {
        return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
    }
    /**
   * Destroy the editor.
   */ destroy() {
        if (this.emit("destroy"), this.view) {
            const t = this.view.dom;
            t && t.editor && delete t.editor, this.view.destroy();
        }
        this.removeAllListeners();
    }
    /**
   * Check if the editor is already destroyed.
   */ get isDestroyed() {
        var t;
        return !(!((t = this.view) === null || t === void 0) && t.docView);
    }
    $node(t, n) {
        var r;
        return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(t, n)) || null;
    }
    $nodes(t, n) {
        var r;
        return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(t, n)) || null;
    }
    $pos(t) {
        const n = this.state.doc.resolve(t);
        return new q(n, this);
    }
    get $doc() {
        return this.$pos(0);
    }
}
function J(e) {
    return new bt({
        find: e.find,
        handler: ({ state: t, range: n, match: r })=>{
            const s = E(e.getAttributes, void 0, r);
            if (s === !1 || s === null) return null;
            const { tr: o } = t, i = r[r.length - 1], a = r[0];
            if (i) {
                const l = a.search(/\S/), c = n.from + a.indexOf(i), u = c + i.length;
                if (Jt(n.from, n.to, t.doc).filter((h)=>h.mark.type.excluded.find((m)=>m === e.type && m !== h.mark.type)).filter((h)=>h.to > c).length) return null;
                u < n.to && o.delete(u, n.to), c > n.from && o.delete(n.from + l, c);
                const p = n.from + l + i.length;
                o.addMark(n.from + l, p, e.type.create(s || {})), o.removeStoredMark(e.type);
            }
        }
    });
}
function $e(e) {
    return new bt({
        find: e.find,
        handler: ({ state: t, range: n, match: r })=>{
            const s = E(e.getAttributes, void 0, r) || {}, { tr: o } = t, i = n.from;
            let a = n.to;
            const l = e.type.create(s);
            if (r[1]) {
                const c = r[0].lastIndexOf(r[1]);
                let u = i + c;
                u > a ? u = a : a = u + r[1].length;
                const d = r[0][r[0].length - 1];
                o.insertText(d, i + r[0].length - 1), o.replaceWith(u, a, l);
            } else if (r[0]) {
                const c = e.type.isInline ? i : i - 1;
                o.insert(c, e.type.create(s)).delete(o.mapping.map(i), o.mapping.map(a));
            }
            o.scrollIntoView();
        }
    });
}
function $t(e) {
    return new bt({
        find: e.find,
        handler: ({ state: t, range: n, match: r })=>{
            const s = t.doc.resolve(n.from), o = E(e.getAttributes, void 0, r) || {};
            if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), e.type)) return null;
            t.tr.delete(n.from, n.to).setBlockType(n.from, n.from, e.type, o);
        }
    });
}
function tt(e) {
    return new bt({
        find: e.find,
        handler: ({ state: t, range: n, match: r, chain: s })=>{
            const o = E(e.getAttributes, void 0, r) || {}, i = t.tr.delete(n.from, n.to), l = i.doc.resolve(n.from).blockRange(), c = l && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(l, e.type, o);
            if (!c) return null;
            if (i.wrap(l, c), e.keepMarks && e.editor) {
                const { selection: d, storedMarks: p } = t, { splittableMarks: h } = e.editor.extensionManager, f = p || d.$to.parentOffset && d.$from.marks();
                if (f) {
                    const m = f.filter((y)=>h.includes(y.type.name));
                    i.ensureMarks(m);
                }
            }
            if (e.keepAttributes) {
                const d = e.type.name === "bulletList" || e.type.name === "orderedList" ? "listItem" : "taskList";
                s().updateAttributes(d, o).run();
            }
            const u = i.doc.resolve(n.from - 1).nodeBefore;
            u && u.type === e.type && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["c"])(i.doc, n.from - 1) && (!e.joinPredicate || e.joinPredicate(r, u)) && i.join(n.from - 1);
        }
    });
}
class L {
    constructor(t = {}){
        this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
            name: this.name,
            defaultOptions: {}
        }, this.config = {
            ...this.config,
            ...t
        }, this.name = this.config.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = E(v(this, "addOptions", {
            name: this.name
        }))), this.storage = E(v(this, "addStorage", {
            name: this.name,
            options: this.options
        })) || {};
    }
    static create(t = {}) {
        return new L(t);
    }
    configure(t = {}) {
        const n = this.extend({
            ...this.config,
            addOptions: ()=>vt(this.options, t)
        });
        return n.name = this.name, n.parent = this.parent, n;
    }
    extend(t = {}) {
        const n = new L(t);
        return n.parent = this, this.child = n, n.name = t.name ? t.name : n.parent.name, t.defaultOptions && Object.keys(t.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${n.name}".`), n.options = E(v(n, "addOptions", {
            name: n.name
        })), n.storage = E(v(n, "addStorage", {
            name: n.name,
            options: n.options
        })), n;
    }
}
function Ns() {
    return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
class Bs {
    constructor(t, n, r){
        this.isDragging = !1, this.component = t, this.editor = n.editor, this.options = {
            stopEvent: null,
            ignoreMutation: null,
            ...r
        }, this.extension = n.extension, this.node = n.node, this.decorations = n.decorations, this.innerDecorations = n.innerDecorations, this.view = n.view, this.HTMLAttributes = n.HTMLAttributes, this.getPos = n.getPos, this.mount();
    }
    mount() {}
    get dom() {
        return this.editor.view.dom;
    }
    get contentDOM() {
        return null;
    }
    onDragStart(t) {
        var n, r, s, o, i, a, l;
        const { view: c } = this.editor, u = t.target, d = u.nodeType === 3 ? (n = u.parentElement) === null || n === void 0 ? void 0 : n.closest("[data-drag-handle]") : u.closest("[data-drag-handle]");
        if (!this.dom || !((r = this.contentDOM) === null || r === void 0) && r.contains(u) || !d) return;
        let p = 0, h = 0;
        if (this.dom !== d) {
            const g = this.dom.getBoundingClientRect(), k = d.getBoundingClientRect(), b = (s = t.offsetX) !== null && s !== void 0 ? s : (o = t.nativeEvent) === null || o === void 0 ? void 0 : o.offsetX, M = (i = t.offsetY) !== null && i !== void 0 ? i : (a = t.nativeEvent) === null || a === void 0 ? void 0 : a.offsetY;
            p = k.x - g.x + b, h = k.y - g.y + M;
        }
        (l = t.dataTransfer) === null || l === void 0 || l.setDragImage(this.dom, p, h);
        const f = this.getPos();
        if (typeof f != "number") return;
        const m = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"].create(c.state.doc, f), y = c.state.tr.setSelection(m);
        c.dispatch(y);
    }
    stopEvent(t) {
        var n;
        if (!this.dom) return !1;
        if (typeof this.options.stopEvent == "function") return this.options.stopEvent({
            event: t
        });
        const r = t.target;
        if (!(this.dom.contains(r) && !(!((n = this.contentDOM) === null || n === void 0) && n.contains(r)))) return !1;
        const o = t.type.startsWith("drag"), i = t.type === "drop";
        if (([
            "INPUT",
            "BUTTON",
            "SELECT",
            "TEXTAREA"
        ].includes(r.tagName) || r.isContentEditable) && !i && !o) return !0;
        const { isEditable: l } = this.editor, { isDragging: c } = this, u = !!this.node.type.spec.draggable, d = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"].isSelectable(this.node), p = t.type === "copy", h = t.type === "paste", f = t.type === "cut", m = t.type === "mousedown";
        if (!u && d && o && t.preventDefault(), u && o && !c) return t.preventDefault(), !1;
        if (u && l && !c && m) {
            const y = r.closest("[data-drag-handle]");
            y && (this.dom === y || this.dom.contains(y)) && (this.isDragging = !0, document.addEventListener("dragend", ()=>{
                this.isDragging = !1;
            }, {
                once: !0
            }), document.addEventListener("drop", ()=>{
                this.isDragging = !1;
            }, {
                once: !0
            }), document.addEventListener("mouseup", ()=>{
                this.isDragging = !1;
            }, {
                once: !0
            }));
        }
        return !(c || i || p || h || f || m && d);
    }
    /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */ ignoreMutation(t) {
        return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({
            mutation: t
        }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (Mt() || Ns()) && this.editor.isFocused && [
            ...Array.from(t.addedNodes),
            ...Array.from(t.removedNodes)
        ].every((r)=>r.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target);
    }
    /**
   * Update the attributes of the prosemirror node.
   */ updateAttributes(t) {
        this.editor.commands.command(({ tr: n })=>{
            const r = this.getPos();
            return typeof r != "number" ? !1 : (n.setNodeMarkup(r, void 0, {
                ...this.node.attrs,
                ...t
            }), !0);
        });
    }
    /**
   * Delete the node.
   */ deleteNode() {
        const t = this.getPos();
        if (typeof t != "number") return;
        const n = t + this.node.nodeSize;
        this.editor.commands.deleteRange({
            from: t,
            to: n
        });
    }
}
function z(e) {
    return new tr({
        find: e.find,
        handler: ({ state: t, range: n, match: r, pasteEvent: s })=>{
            const o = E(e.getAttributes, void 0, r, s);
            if (o === !1 || o === null) return null;
            const { tr: i } = t, a = r[r.length - 1], l = r[0];
            let c = n.to;
            if (a) {
                const u = l.search(/\S/), d = n.from + l.indexOf(a), p = d + a.length;
                if (Jt(n.from, n.to, t.doc).filter((f)=>f.mark.type.excluded.find((y)=>y === e.type && y !== f.mark.type)).filter((f)=>f.to > d).length) return null;
                p < n.to && i.delete(p, n.to), d > n.from && i.delete(n.from + u, d), c = n.from + u + a.length, i.addMark(n.from + u, c, e.type.create(o || {})), i.removeStoredMark(e.type);
            }
        }
    });
}
function js(e) {
    return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
const Fs = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, zs = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Vs = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Ws = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Jo = D.create({
    name: "bold",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "strong"
            },
            {
                tag: "b",
                getAttrs: (e)=>e.style.fontWeight !== "normal" && null
            },
            {
                style: "font-weight",
                getAttrs: (e)=>/^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "strong",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setBold: ()=>({ commands: e })=>e.setMark(this.name),
            toggleBold: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetBold: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-b": ()=>this.editor.commands.toggleBold(),
            "Mod-B": ()=>this.editor.commands.toggleBold()
        };
    },
    addInputRules () {
        return [
            J({
                find: Fs,
                type: this.type
            }),
            J({
                find: Vs,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            z({
                find: zs,
                type: this.type
            }),
            z({
                find: Ws,
                type: this.type
            })
        ];
    }
});
class Ks {
    constructor({ editor: t, element: n, view: r, tippyOptions: s = {}, updateDelay: o = 250, shouldShow: i }){
        this.preventHide = !1, this.shouldShow = ({ view: a, state: l, from: c, to: u })=>{
            const { doc: d, selection: p } = l, { empty: h } = p, f = !d.textBetween(c, u).length && Ut(l.selection), m = this.element.contains(document.activeElement);
            return !(!(a.hasFocus() || m) || h || f || !this.editor.isEditable);
        }, this.mousedownHandler = ()=>{
            this.preventHide = !0;
        }, this.dragstartHandler = ()=>{
            this.hide();
        }, this.focusHandler = ()=>{
            setTimeout(()=>this.update(this.editor.view));
        }, this.blurHandler = ({ event: a })=>{
            var l;
            if (this.preventHide) {
                this.preventHide = !1;
                return;
            }
            a != null && a.relatedTarget && !((l = this.element.parentNode) === null || l === void 0) && l.contains(a.relatedTarget) || this.hide();
        }, this.tippyBlurHandler = (a)=>{
            this.blurHandler({
                event: a
            });
        }, this.handleDebouncedUpdate = (a, l)=>{
            const c = !(l != null && l.selection.eq(a.state.selection)), u = !(l != null && l.doc.eq(a.state.doc));
            !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(()=>{
                this.updateHandler(a, c, u, l);
            }, this.updateDelay));
        }, this.updateHandler = (a, l, c, u)=>{
            var d, p, h;
            const { state: f, composing: m } = a, { selection: y } = f;
            if (m || !l && !c) return;
            this.createTooltip();
            const { ranges: k } = y, b = Math.min(...k.map((S)=>S.$from.pos)), M = Math.max(...k.map((S)=>S.$to.pos));
            if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
                editor: this.editor,
                view: a,
                state: f,
                oldState: u,
                from: b,
                to: M
            }))) {
                this.hide();
                return;
            }
            (p = this.tippy) === null || p === void 0 || p.setProps({
                getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (()=>{
                    if (Ie(f.selection)) {
                        let S = a.nodeDOM(b);
                        const C = S.dataset.nodeViewWrapper ? S : S.querySelector("[data-node-view-wrapper]");
                        if (C && (S = C.firstChild), S) return S.getBoundingClientRect();
                    }
                    return as(a, b, M);
                })
            }), this.show();
        }, this.editor = t, this.element = n, this.view = r, this.updateDelay = o, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = s, this.element.remove(), this.element.style.visibility = "visible";
    }
    createTooltip() {
        const { element: t } = this.editor.options, n = !!t.parentElement;
        this.tippy || !n || (this.tippy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$tippy$2e$js$2f$dist$2f$tippy$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(t, {
            duration: 0,
            getReferenceClientRect: null,
            content: this.element,
            interactive: !0,
            trigger: "manual",
            placement: "top",
            hideOnClick: "toggle",
            ...this.tippyOptions
        }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
    }
    update(t, n) {
        const { state: r } = t, s = r.selection.from !== r.selection.to;
        if (this.updateDelay > 0 && s) {
            this.handleDebouncedUpdate(t, n);
            return;
        }
        const o = !(n != null && n.selection.eq(t.state.selection)), i = !(n != null && n.doc.eq(t.state.doc));
        this.updateHandler(t, o, i, n);
    }
    show() {
        var t;
        (t = this.tippy) === null || t === void 0 || t.show();
    }
    hide() {
        var t;
        (t = this.tippy) === null || t === void 0 || t.hide();
    }
    destroy() {
        var t, n;
        !((t = this.tippy) === null || t === void 0) && t.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (n = this.tippy) === null || n === void 0 || n.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, {
            capture: !0
        }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
    }
}
const De = (e)=>new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        key: typeof e.pluginKey == "string" ? new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"](e.pluginKey) : e.pluginKey,
        view: (t)=>new Ks({
                view: t,
                ...e
            })
    });
_.create({
    name: "bubbleMenu",
    addOptions () {
        return {
            element: null,
            tippyOptions: {},
            pluginKey: "bubbleMenu",
            updateDelay: void 0,
            shouldShow: null
        };
    },
    addProseMirrorPlugins () {
        return this.options.element ? [
            De({
                pluginKey: this.options.pluginKey,
                editor: this.editor,
                element: this.options.element,
                tippyOptions: this.options.tippyOptions,
                updateDelay: this.options.updateDelay,
                shouldShow: this.options.shouldShow
            })
        ] : [];
    }
});
function Us(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = {
    exports: {}
}, Ot = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ce;
function qs() {
    if (ce) return Ot;
    ce = 1;
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    function t(d, p) {
        return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, s = e.useEffect, o = e.useLayoutEffect, i = e.useDebugValue;
    function a(d, p) {
        var h = p(), f = r({
            inst: {
                value: h,
                getSnapshot: p
            }
        }), m = f[0].inst, y = f[1];
        return o(function() {
            m.value = h, m.getSnapshot = p, l(m) && y({
                inst: m
            });
        }, [
            d,
            h,
            p
        ]), s(function() {
            return l(m) && y({
                inst: m
            }), d(function() {
                l(m) && y({
                    inst: m
                });
            });
        }, [
            d
        ]), i(h), h;
    }
    function l(d) {
        var p = d.getSnapshot;
        d = d.value;
        try {
            var h = p();
            return !n(d, h);
        } catch  {
            return !0;
        }
    }
    function c(d, p) {
        return p();
    }
    var u = ("TURBOPACK compile-time value", "undefined") > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
    return Ot.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ot;
}
var Lt = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var de;
function Gs() {
    return de || (de = 1, ("TURBOPACK compile-time value", "development") !== "production" && function() {
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        var e = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function n(b) {
            {
                for(var M = arguments.length, w = new Array(M > 1 ? M - 1 : 0), S = 1; S < M; S++)w[S - 1] = arguments[S];
                r("error", b, w);
            }
        }
        function r(b, M, w) {
            {
                var S = t.ReactDebugCurrentFrame, C = S.getStackAddendum();
                C !== "" && (M += "%s", w = w.concat([
                    C
                ]));
                var A = w.map(function(T) {
                    return String(T);
                });
                A.unshift("Warning: " + M), Function.prototype.apply.call(console[b], console, A);
            }
        }
        function s(b, M) {
            return b === M && (b !== 0 || 1 / b === 1 / M) || b !== b && M !== M;
        }
        var o = typeof Object.is == "function" ? Object.is : s, i = e.useState, a = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
        function p(b, M, w) {
            u || e.startTransition !== void 0 && (u = !0, n("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
            var S = M();
            if (!d) {
                var C = M();
                o(S, C) || (n("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
            }
            var A = i({
                inst: {
                    value: S,
                    getSnapshot: M
                }
            }), T = A[0].inst, H = A[1];
            return l(function() {
                T.value = S, T.getSnapshot = M, h(T) && H({
                    inst: T
                });
            }, [
                b,
                S,
                M
            ]), a(function() {
                h(T) && H({
                    inst: T
                });
                var N = function() {
                    h(T) && H({
                        inst: T
                    });
                };
                return b(N);
            }, [
                b
            ]), c(S), S;
        }
        function h(b) {
            var M = b.getSnapshot, w = b.value;
            try {
                var S = M();
                return !o(w, S);
            } catch  {
                return !0;
            }
        }
        function f(b, M, w) {
            return M();
        }
        var m = ("TURBOPACK compile-time value", "undefined") < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", y = !m, g = y ? f : p, k = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : g;
        Lt.useSyncExternalStore = k, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }()), Lt;
}
("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Dt.exports = Gs();
var wt = Dt.exports;
const Js = (...e)=>(t)=>{
        e.forEach((n)=>{
            typeof n == "function" ? n(t) : n && (n.current = t);
        });
    }, Ys = ({ contentComponent: e })=>{
    const t = wt.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getServerSnapshot);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, Object.values(t));
};
function Xs() {
    const e = /* @__PURE__ */ new Set();
    let t = {};
    return {
        /**
     * Subscribe to the editor instance's changes.
     */ subscribe (n) {
            return e.add(n), ()=>{
                e.delete(n);
            };
        },
        getSnapshot () {
            return t;
        },
        getServerSnapshot () {
            return t;
        },
        /**
     * Adds a new NodeView Renderer to the editor.
     */ setRenderer (n, r) {
            t = {
                ...t,
                [n]: __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(r.reactElement, r.element, n)
            }, e.forEach((s)=>s());
        },
        /**
     * Removes a NodeView Renderer from the editor.
     */ removeRenderer (n) {
            const r = {
                ...t
            };
            delete r[n], t = r, e.forEach((s)=>s());
        }
    };
}
class Qs extends __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(t){
        var n;
        super(t), this.editorContentRef = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createRef(), this.initialized = !1, this.state = {
            hasContentComponentInitialized: !!(!((n = t.editor) === null || n === void 0) && n.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        const t = this.props.editor;
        if (t && !t.isDestroyed && t.options.element) {
            if (t.contentComponent) return;
            const n = this.editorContentRef.current;
            n.append(...t.options.element.childNodes), t.setOptions({
                element: n
            }), t.contentComponent = Xs(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = t.contentComponent.subscribe(()=>{
                this.setState((r)=>r.hasContentComponentInitialized ? r : {
                        hasContentComponentInitialized: !0
                    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
            })), t.createNodeViews(), this.initialized = !0;
        }
    }
    componentWillUnmount() {
        const t = this.props.editor;
        if (!t || (this.initialized = !1, t.isDestroyed || t.view.setProps({
            nodeViews: {}
        }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), t.contentComponent = null, !t.options.element.firstChild)) return;
        const n = document.createElement("div");
        n.append(...t.options.element.childNodes), t.setOptions({
            element: n
        });
    }
    render() {
        const { editor: t, innerRef: n, ...r } = this.props;
        return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            ref: Js(n, this.editorContentRef),
            ...r
        }), (t == null ? void 0 : t.contentComponent) && __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Ys, {
            contentComponent: t.contentComponent
        }));
    }
}
const Zs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((e, t)=>{
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>Math.floor(Math.random() * 4294967295).toString(), [
        e.editor
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Qs, {
        key: n,
        innerRef: t,
        ...e
    });
}), Yo = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(Zs);
var to = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1;
        var r, s, o;
        if (Array.isArray(t)) {
            if (r = t.length, r != n.length) return !1;
            for(s = r; s-- !== 0;)if (!e(t[s], n[s])) return !1;
            return !0;
        }
        if (t instanceof Map && n instanceof Map) {
            if (t.size !== n.size) return !1;
            for (s of t.entries())if (!n.has(s[0])) return !1;
            for (s of t.entries())if (!e(s[1], n.get(s[0]))) return !1;
            return !0;
        }
        if (t instanceof Set && n instanceof Set) {
            if (t.size !== n.size) return !1;
            for (s of t.entries())if (!n.has(s[0])) return !1;
            return !0;
        }
        if (ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
            if (r = t.length, r != n.length) return !1;
            for(s = r; s-- !== 0;)if (t[s] !== n[s]) return !1;
            return !0;
        }
        if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
        if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
        if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
        if (o = Object.keys(t), r = o.length, r !== Object.keys(n).length) return !1;
        for(s = r; s-- !== 0;)if (!Object.prototype.hasOwnProperty.call(n, o[s])) return !1;
        for(s = r; s-- !== 0;){
            var i = o[s];
            if (!(i === "_owner" && t.$$typeof) && !e(t[i], n[i])) return !1;
        }
        return !0;
    }
    return t !== t && n !== n;
}, eo = /* @__PURE__ */ Us(to), Nt = {
    exports: {}
}, _t = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ue;
function no() {
    if (ue) return _t;
    ue = 1;
    var e = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], t = wt;
    function n(c, u) {
        return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, l = e.useDebugValue;
    return _t.useSyncExternalStoreWithSelector = function(c, u, d, p, h) {
        var f = o(null);
        if (f.current === null) {
            var m = {
                hasValue: !1,
                value: null
            };
            f.current = m;
        } else m = f.current;
        f = a(function() {
            function g(S) {
                if (!k) {
                    if (k = !0, b = S, S = p(S), h !== void 0 && m.hasValue) {
                        var C = m.value;
                        if (h(C, S)) return M = C;
                    }
                    return M = S;
                }
                if (C = M, r(b, S)) return C;
                var A = p(S);
                return h !== void 0 && h(C, A) ? C : (b = S, M = A);
            }
            var k = !1, b, M, w = d === void 0 ? null : d;
            return [
                function() {
                    return g(u());
                },
                w === null ? void 0 : function() {
                    return g(w());
                }
            ];
        }, [
            u,
            d,
            p,
            h
        ]);
        var y = s(c, f[0], f[1]);
        return i(function() {
            m.hasValue = !0, m.value = y;
        }, [
            y
        ]), l(y), y;
    }, _t;
}
var Ht = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pe;
function ro() {
    return pe || (pe = 1, ("TURBOPACK compile-time value", "development") !== "production" && function() {
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        var e = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], t = wt;
        function n(u, d) {
            return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
        }
        var r = typeof Object.is == "function" ? Object.is : n, s = t.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, l = e.useDebugValue;
        function c(u, d, p, h, f) {
            var m = o(null), y;
            m.current === null ? (y = {
                hasValue: !1,
                value: null
            }, m.current = y) : y = m.current;
            var g = a(function() {
                var w = !1, S, C, A = function(j) {
                    if (!w) {
                        w = !0, S = j;
                        var Y = h(j);
                        if (f !== void 0 && y.hasValue) {
                            var W = y.value;
                            if (f(W, Y)) return C = W, W;
                        }
                        return C = Y, Y;
                    }
                    var K = S, F = C;
                    if (r(K, j)) return F;
                    var U = h(j);
                    return f !== void 0 && f(F, U) ? F : (S = j, C = U, U);
                }, T = p === void 0 ? null : p, H = function() {
                    return A(d());
                }, N = T === null ? void 0 : function() {
                    return A(T());
                };
                return [
                    H,
                    N
                ];
            }, [
                d,
                p,
                h,
                f
            ]), k = g[0], b = g[1], M = s(u, k, b);
            return i(function() {
                y.hasValue = !0, y.value = M;
            }, [
                M
            ]), l(M), M;
        }
        Ht.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }()), Ht;
}
("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Nt.exports = ro();
var so = Nt.exports;
class oo {
    constructor(t){
        this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = t, this.lastSnapshot = {
            editor: t,
            transactionNumber: 0
        }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
    }
    /**
   * Get the current editor instance.
   */ getSnapshot() {
        return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
            editor: this.editor,
            transactionNumber: this.transactionNumber
        }, this.lastSnapshot);
    }
    /**
   * Always disable the editor on the server-side.
   */ getServerSnapshot() {
        return {
            editor: null,
            transactionNumber: 0
        };
    }
    /**
   * Subscribe to the editor instance's changes.
   */ subscribe(t) {
        return this.subscribers.add(t), ()=>{
            this.subscribers.delete(t);
        };
    }
    /**
   * Watch the editor instance for changes.
   */ watch(t) {
        if (this.editor = t, this.editor) {
            const n = ()=>{
                this.transactionNumber += 1, this.subscribers.forEach((s)=>s());
            }, r = this.editor;
            return r.on("transaction", n), ()=>{
                r.off("transaction", n);
            };
        }
    }
}
function io(e) {
    var t;
    const [n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new oo(e.editor)), r = so.useSyncExternalStoreWithSelector(n.subscribe, n.getSnapshot, n.getServerSnapshot, e.selector, (t = e.equalityFn) !== null && t !== void 0 ? t : eo);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>n.watch(e.editor), [
        e.editor,
        n
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(r), r;
}
const he = ("TURBOPACK compile-time value", "development") !== "production", Bt = ("TURBOPACK compile-time value", "undefined") > "u", ao = Bt || !!(("TURBOPACK compile-time value", "undefined") < "u" && window.next);
class lo {
    constructor(t){
        this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = t, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
    }
    setEditor(t) {
        this.editor = t, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((n)=>n());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === void 0) return Bt || ao ? (he && console.warn("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."), null) : this.createEditor();
        if (this.options.current.immediatelyRender && Bt && he) throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
        return this.options.current.immediatelyRender ? this.createEditor() : null;
    }
    /**
   * Create a new editor instance. And attach event listeners.
   */ createEditor() {
        const t = {
            ...this.options.current,
            // Always call the most recent version of the callback function by default
            onBeforeCreate: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onBeforeCreate) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onBlur: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onBlur) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onCreate: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onCreate) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onDestroy: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onDestroy) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onFocus: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onFocus) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onSelectionUpdate: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onSelectionUpdate) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onTransaction: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onTransaction) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onUpdate: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onUpdate) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onContentError: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onContentError) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onDrop: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onDrop) === null || o === void 0 ? void 0 : o.call(s, ...r);
            },
            onPaste: (...r)=>{
                var s, o;
                return (o = (s = this.options.current).onPaste) === null || o === void 0 ? void 0 : o.call(s, ...r);
            }
        };
        return new Ds(t);
    }
    /**
   * Get the current editor instance.
   */ getEditor() {
        return this.editor;
    }
    /**
   * Always disable the editor on the server-side.
   */ getServerSnapshot() {
        return null;
    }
    /**
   * Subscribe to the editor instance's changes.
   */ subscribe(t) {
        return this.subscriptions.add(t), ()=>{
            this.subscriptions.delete(t);
        };
    }
    /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */ onRender(t) {
        return ()=>(this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && t.length === 0 ? this.editor.setOptions(this.options.current) : this.refreshEditorInstance(t), ()=>{
                this.isComponentMounted = !1, this.scheduleDestroy();
            });
    }
    /**
   * Recreate the editor instance if the dependencies have changed.
   */ refreshEditorInstance(t) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = t;
                return;
            }
            if (this.previousDeps.length === t.length && this.previousDeps.every((r, s)=>r === t[s])) return;
        }
        this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = t;
    }
    /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */ scheduleDestroy() {
        const t = this.instanceId, n = this.editor;
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === t) {
                n && n.setOptions(this.options.current);
                return;
            }
            n && !n.isDestroyed && (n.destroy(), this.instanceId === t && this.setEditor(null));
        }, 1);
    }
}
function Xo(e = {}, t = []) {
    const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(e);
    n.current = e;
    const [r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new lo(n)), s = wt.useSyncExternalStore(r.subscribe, r.getEditor, r.getServerSnapshot);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(s), (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(r.onRender(t)), io({
        editor: s,
        selector: ({ transactionNumber: o })=>e.shouldRerenderOnTransaction === !1 ? null : e.immediatelyRender && o === 0 ? 0 : o + 1
    }), s;
}
const Ne = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    editor: null
});
Ne.Consumer;
const co = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Ne), Qo = (e)=>{
    const [t, n] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), { editor: r } = co();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var s;
        if (!t || !((s = e.editor) === null || s === void 0) && s.isDestroyed || r != null && r.isDestroyed) return;
        const { pluginKey: o = "bubbleMenu", editor: i, tippyOptions: a = {}, updateDelay: l, shouldShow: c = null } = e, u = i || r;
        if (!u) {
            console.warn("BubbleMenu component is not rendered inside of an editor component or does not have editor prop.");
            return;
        }
        const d = De({
            updateDelay: l,
            editor: u,
            element: t,
            pluginKey: o,
            shouldShow: c,
            tippyOptions: a
        });
        return u.registerPlugin(d), ()=>{
            u.unregisterPlugin(o);
        };
    }, [
        e.editor,
        r,
        t
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: n,
        className: e.className,
        style: {
            visibility: "hidden"
        }
    }, e.children);
}, Be = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    onDragStart: void 0
}), je = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(Be), Zo = (e)=>{
    const t = e.as || "div", { nodeViewContentRef: n } = je();
    return(// @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(t, {
        ...e,
        ref: n,
        "data-node-view-content": "",
        style: {
            whiteSpace: "pre-wrap",
            ...e.style
        }
    }));
}, ti = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef((e, t)=>{
    const { onDragStart: n } = je(), r = e.as || "div";
    return(// @ts-ignore
    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(r, {
        ...e,
        ref: t,
        "data-node-view-wrapper": "",
        onDragStart: n,
        style: {
            whiteSpace: "normal",
            ...e.style
        }
    }));
});
function uo(e) {
    return !!(typeof e == "function" && e.prototype && e.prototype.isReactComponent);
}
function po(e) {
    var t;
    return typeof e == "object" && ((t = e.$$typeof) === null || t === void 0 ? void 0 : t.toString()) === "Symbol(react.forward_ref)";
}
class ho {
    /**
   * Immediately creates element and renders the provided React component.
   */ constructor(t, { editor: n, props: r = {}, as: s = "div", className: o = "" }){
        this.ref = null, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = t, this.editor = n, this.props = r, this.element = document.createElement(s), this.element.classList.add("react-renderer"), o && this.element.classList.add(...o.split(" ")), this.editor.isInitialized ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
            this.render();
        }) : this.render();
    }
    /**
   * Render the React component.
   */ render() {
        var t;
        const n = this.component, r = this.props, s = this.editor;
        (uo(n) || po(n)) && (r.ref = (o)=>{
            this.ref = o;
        }), this.reactElement = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(n, r), (t = s == null ? void 0 : s.contentComponent) === null || t === void 0 || t.setRenderer(this.id, this);
    }
    /**
   * Re-renders the React component with new props.
   */ updateProps(t = {}) {
        this.props = {
            ...this.props,
            ...t
        }, this.render();
    }
    /**
   * Destroy the React component.
   */ destroy() {
        var t;
        const n = this.editor;
        (t = n == null ? void 0 : n.contentComponent) === null || t === void 0 || t.removeRenderer(this.id);
    }
    /**
   * Update the attributes of the element that holds the React component.
   */ updateAttributes(t) {
        Object.keys(t).forEach((n)=>{
            this.element.setAttribute(n, t[n]);
        });
    }
}
class fo extends Bs {
    /**
   * Setup the React component.
   * Called on initialization.
   */ mount() {
        const t = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: !1,
            extension: this.extension,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (c = {})=>this.updateAttributes(c),
            deleteNode: ()=>this.deleteNode()
        };
        if (!this.component.displayName) {
            const c = (u)=>u.charAt(0).toUpperCase() + u.substring(1);
            this.component.displayName = c(this.extension.name);
        }
        const s = {
            onDragStart: this.onDragStart.bind(this),
            nodeViewContentRef: (c)=>{
                c && this.contentDOMElement && c.firstChild !== this.contentDOMElement && c.appendChild(this.contentDOMElement);
            }
        }, o = this.component, i = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo((c)=>__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Be.Provider, {
                value: s
            }, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(o, c)));
        i.displayName = "ReactNodeView", this.node.isLeaf ? this.contentDOMElement = null : this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement && (this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.style.whiteSpace = "inherit");
        let a = this.node.isInline ? "span" : "div";
        this.options.as && (a = this.options.as);
        const { className: l = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.renderer = new ho(i, {
            editor: this.editor,
            props: t,
            as: a,
            className: `node-${this.node.type.name} ${l}`.trim()
        }), this.updateElementAttributes();
    }
    /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */ get dom() {
        var t;
        if (this.renderer.element.firstElementChild && !(!((t = this.renderer.element.firstElementChild) === null || t === void 0) && t.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
        return this.renderer.element;
    }
    /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */ get contentDOM() {
        return this.node.isLeaf ? null : this.contentDOMElement;
    }
    /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */ handleSelectionUpdate() {
        const { from: t, to: n } = this.editor.state.selection, r = this.getPos();
        if (typeof r == "number") if (t <= r && n >= r + this.node.nodeSize) {
            if (this.renderer.props.selected) return;
            this.selectNode();
        } else {
            if (!this.renderer.props.selected) return;
            this.deselectNode();
        }
    }
    /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */ update(t, n, r) {
        const s = (o)=>{
            this.renderer.updateProps(o), typeof this.options.attrs == "function" && this.updateElementAttributes();
        };
        if (t.type !== this.node.type) return !1;
        if (typeof this.options.update == "function") {
            const o = this.node, i = this.decorations, a = this.innerDecorations;
            return this.node = t, this.decorations = n, this.innerDecorations = r, this.options.update({
                oldNode: o,
                oldDecorations: i,
                newNode: t,
                newDecorations: n,
                oldInnerDecorations: a,
                innerDecorations: r,
                updateProps: ()=>s({
                        node: t,
                        decorations: n,
                        innerDecorations: r
                    })
            });
        }
        return t === this.node && this.decorations === n && this.innerDecorations === r || (this.node = t, this.decorations = n, this.innerDecorations = r, s({
            node: t,
            decorations: n,
            innerDecorations: r
        })), !0;
    }
    /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */ selectNode() {
        this.renderer.updateProps({
            selected: !0
        }), this.renderer.element.classList.add("ProseMirror-selectednode");
    }
    /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */ deselectNode() {
        this.renderer.updateProps({
            selected: !1
        }), this.renderer.element.classList.remove("ProseMirror-selectednode");
    }
    /**
   * Destroy the React component instance.
   */ destroy() {
        this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null;
    }
    /**
   * Update the attributes of the top-level element that holds the React component.
   * Applying the attributes defined in the `attrs` option.
   */ updateElementAttributes() {
        if (this.options.attrs) {
            let t = {};
            if (typeof this.options.attrs == "function") {
                const n = this.editor.extensionManager.attributes, r = ut(this.node, n);
                t = this.options.attrs({
                    node: this.node,
                    HTMLAttributes: r
                });
            } else t = this.options.attrs;
            this.renderer.updateAttributes(t);
        }
    }
}
function ei(e, t) {
    return (n)=>n.editor.contentComponent ? new fo(e, n, t) : {};
}
const mo = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, go = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, yo = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, bo = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, ni = D.create({
    name: "italic",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "em"
            },
            {
                tag: "i",
                getAttrs: (e)=>e.style.fontStyle !== "normal" && null
            },
            {
                style: "font-style=italic"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "em",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setItalic: ()=>({ commands: e })=>e.setMark(this.name),
            toggleItalic: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetItalic: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-i": ()=>this.editor.commands.toggleItalic(),
            "Mod-I": ()=>this.editor.commands.toggleItalic()
        };
    },
    addInputRules () {
        return [
            J({
                find: mo,
                type: this.type
            }),
            J({
                find: yo,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            z({
                find: go,
                type: this.type
            }),
            z({
                find: bo,
                type: this.type
            })
        ];
    }
}), ri = D.create({
    name: "underline",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "u"
            },
            {
                style: "text-decoration",
                consuming: !1,
                getAttrs: (e)=>e.includes("underline") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "u",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setUnderline: ()=>({ commands: e })=>e.setMark(this.name),
            toggleUnderline: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetUnderline: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-u": ()=>this.editor.commands.toggleUnderline(),
            "Mod-U": ()=>this.editor.commands.toggleUnderline()
        };
    }
}), vo = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, Mo = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, si = D.create({
    name: "strike",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "s"
            },
            {
                tag: "del"
            },
            {
                tag: "strike"
            },
            {
                style: "text-decoration",
                consuming: !1,
                getAttrs: (e)=>e.includes("line-through") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "s",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setStrike: ()=>({ commands: e })=>e.setMark(this.name),
            toggleStrike: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetStrike: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-s": ()=>this.editor.commands.toggleStrike()
        };
    },
    addInputRules () {
        return [
            J({
                find: vo,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            z({
                find: Mo,
                type: this.type
            })
        ];
    }
}), So = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))$/, ko = /(?:^|\s)(`(?!\s+`)((?:[^`]+))`(?!\s+`))/g, oi = D.create({
    name: "code",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    excludes: "_",
    code: !0,
    exitable: !0,
    parseHTML () {
        return [
            {
                tag: "code"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "code",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setCode: ()=>({ commands: e })=>e.setMark(this.name),
            toggleCode: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetCode: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-e": ()=>this.editor.commands.toggleCode()
        };
    },
    addInputRules () {
        return [
            J({
                find: So,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            z({
                find: ko,
                type: this.type
            })
        ];
    }
}), wo = /^```([a-z]+)?[\s\n]$/, Eo = /^~~~([a-z]+)?[\s\n]$/, ii = L.create({
    name: "codeBlock",
    addOptions () {
        return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: !0,
            exitOnArrowDown: !0,
            defaultLanguage: null,
            HTMLAttributes: {}
        };
    },
    content: "text*",
    marks: "",
    group: "block",
    code: !0,
    defining: !0,
    addAttributes () {
        return {
            language: {
                default: this.options.defaultLanguage,
                parseHTML: (e)=>{
                    var t;
                    const { languageClassPrefix: n } = this.options, o = [
                        ...((t = e.firstElementChild) === null || t === void 0 ? void 0 : t.classList) || []
                    ].filter((i)=>i.startsWith(n)).map((i)=>i.replace(n, ""))[0];
                    return o || null;
                },
                rendered: !1
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "pre",
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "pre",
            x(this.options.HTMLAttributes, t),
            [
                "code",
                {
                    class: e.attrs.language ? this.options.languageClassPrefix + e.attrs.language : null
                },
                0
            ]
        ];
    },
    addCommands () {
        return {
            setCodeBlock: (e)=>({ commands: t })=>t.setNode(this.name, e),
            toggleCodeBlock: (e)=>({ commands: t })=>t.toggleNode(this.name, "paragraph", e)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-c": ()=>this.editor.commands.toggleCodeBlock(),
            // remove code block when at start of document or code block is empty
            Backspace: ()=>{
                const { empty: e, $anchor: t } = this.editor.state.selection, n = t.pos === 1;
                return !e || t.parent.type.name !== this.name ? !1 : n || !t.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
            },
            // exit node on triple enter
            Enter: ({ editor: e })=>{
                if (!this.options.exitOnTripleEnter) return !1;
                const { state: t } = e, { selection: n } = t, { $from: r, empty: s } = n;
                if (!s || r.parent.type !== this.type) return !1;
                const o = r.parentOffset === r.parent.nodeSize - 2, i = r.parent.textContent.endsWith(`

`);
                return !o || !i ? !1 : e.chain().command(({ tr: a })=>(a.delete(r.pos - 2, r.pos), !0)).exitCode().run();
            },
            // exit node on arrow down
            ArrowDown: ({ editor: e })=>{
                if (!this.options.exitOnArrowDown) return !1;
                const { state: t } = e, { selection: n, doc: r } = t, { $from: s, empty: o } = n;
                if (!o || s.parent.type !== this.type || !(s.parentOffset === s.parent.nodeSize - 2)) return !1;
                const a = s.after();
                return a === void 0 ? !1 : r.nodeAt(a) ? e.commands.command(({ tr: c })=>(c.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["S"].near(r.resolve(a))), !0)) : e.commands.exitCode();
            }
        };
    },
    addInputRules () {
        return [
            $t({
                find: wo,
                type: this.type,
                getAttributes: (e)=>({
                        language: e[1]
                    })
            }),
            $t({
                find: Eo,
                type: this.type,
                getAttributes: (e)=>({
                        language: e[1]
                    })
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            // this plugin creates a code block for pasted content from VS Code
            // we can also detect the copied code language
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("codeBlockVSCodeHandler"),
                props: {
                    handlePaste: (e, t)=>{
                        if (!t.clipboardData || this.editor.isActive(this.type.name)) return !1;
                        const n = t.clipboardData.getData("text/plain"), r = t.clipboardData.getData("vscode-editor-data"), s = r ? JSON.parse(r) : void 0, o = s == null ? void 0 : s.mode;
                        if (!n || !o) return !1;
                        const { tr: i, schema: a } = e.state, l = a.text(n.replace(/\r\n?/g, `
`));
                        return i.replaceSelectionWith(this.type.create({
                            language: o
                        }, l)), i.selection.$from.parent.type !== this.type && i.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].near(i.doc.resolve(Math.max(0, i.selection.from - 2)))), i.setMeta("paste", !0), e.dispatch(i), !0;
                    }
                }
            })
        ];
    }
}), ft = D.create({
    name: "textStyle",
    priority: 101,
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "span",
                getAttrs: (e)=>e.hasAttribute("style") ? {} : !1
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "span",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            removeEmptyTextStyle: ()=>({ state: e, commands: t })=>{
                    const n = qt(e, this.type);
                    return Object.entries(n).some(([, s])=>!!s) ? !0 : t.unsetMark(this.name);
                }
        };
    }
}), ai = _.create({
    name: "fontFamily",
    addOptions () {
        return {
            types: [
                "textStyle"
            ]
        };
    },
    addGlobalAttributes () {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontFamily: {
                        default: null,
                        parseHTML: (e)=>{
                            var t;
                            return (t = e.style.fontFamily) === null || t === void 0 ? void 0 : t.replace(/['"]+/g, "");
                        },
                        renderHTML: (e)=>e.fontFamily ? {
                                style: `font-family: ${e.fontFamily}`
                            } : {}
                    }
                }
            }
        ];
    },
    addCommands () {
        return {
            setFontFamily: (e)=>({ chain: t })=>t().setMark("textStyle", {
                        fontFamily: e
                    }).run(),
            unsetFontFamily: ()=>({ chain: e })=>e().setMark("textStyle", {
                        fontFamily: null
                    }).removeEmptyTextStyle().run()
        };
    }
}), li = L.create({
    name: "heading",
    addOptions () {
        return {
            levels: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            HTMLAttributes: {}
        };
    },
    content: "inline*",
    group: "block",
    defining: !0,
    addAttributes () {
        return {
            level: {
                default: 1,
                rendered: !1
            }
        };
    },
    parseHTML () {
        return this.options.levels.map((e)=>({
                tag: `h${e}`,
                attrs: {
                    level: e
                }
            }));
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            `h${this.options.levels.includes(e.attrs.level) ? e.attrs.level : this.options.levels[0]}`,
            x(this.options.HTMLAttributes, t),
            0
        ];
    },
    addCommands () {
        return {
            setHeading: (e)=>({ commands: t })=>this.options.levels.includes(e.level) ? t.setNode(this.name, e) : !1,
            toggleHeading: (e)=>({ commands: t })=>this.options.levels.includes(e.level) ? t.toggleNode(this.name, "paragraph", e) : !1
        };
    },
    addKeyboardShortcuts () {
        return this.options.levels.reduce((e, t)=>({
                ...e,
                [`Mod-Alt-${t}`]: ()=>this.editor.commands.toggleHeading({
                        level: t
                    })
            }), {});
    },
    addInputRules () {
        return this.options.levels.map((e)=>$t({
                find: new RegExp(`^(#{1,${e}})\\s$`),
                type: this.type,
                getAttributes: {
                    level: e
                }
            }));
    }
}), ci = _.create({
    name: "textAlign",
    addOptions () {
        return {
            types: [],
            alignments: [
                "left",
                "center",
                "right",
                "justify"
            ],
            defaultAlignment: "left"
        };
    },
    addGlobalAttributes () {
        return [
            {
                types: this.options.types,
                attributes: {
                    textAlign: {
                        default: this.options.defaultAlignment,
                        parseHTML: (e)=>{
                            const t = e.style.textAlign || this.options.defaultAlignment;
                            return this.options.alignments.includes(t) ? t : this.options.defaultAlignment;
                        },
                        renderHTML: (e)=>e.textAlign === this.options.defaultAlignment ? {} : {
                                style: `text-align: ${e.textAlign}`
                            }
                    }
                }
            }
        ];
    },
    addCommands () {
        return {
            setTextAlign: (e)=>({ commands: t })=>this.options.alignments.includes(e) ? this.options.types.map((n)=>t.updateAttributes(n, {
                            textAlign: e
                        })).every((n)=>n) : !1,
            unsetTextAlign: ()=>({ commands: e })=>this.options.types.map((t)=>e.resetAttributes(t, "textAlign")).every((t)=>t)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-l": ()=>this.editor.commands.setTextAlign("left"),
            "Mod-Shift-e": ()=>this.editor.commands.setTextAlign("center"),
            "Mod-Shift-r": ()=>this.editor.commands.setTextAlign("right"),
            "Mod-Shift-j": ()=>this.editor.commands.setTextAlign("justify")
        };
    }
}), di = _.create({
    name: "color",
    addOptions () {
        return {
            types: [
                "textStyle"
            ]
        };
    },
    addGlobalAttributes () {
        return [
            {
                types: this.options.types,
                attributes: {
                    color: {
                        default: null,
                        parseHTML: (e)=>{
                            var t;
                            return (t = e.style.color) === null || t === void 0 ? void 0 : t.replace(/['"]+/g, "");
                        },
                        renderHTML: (e)=>e.color ? {
                                style: `color: ${e.color}`
                            } : {}
                    }
                }
            }
        ];
    },
    addCommands () {
        return {
            setColor: (e)=>({ chain: t })=>t().setMark("textStyle", {
                        color: e
                    }).run(),
            unsetColor: ()=>({ chain: e })=>e().setMark("textStyle", {
                        color: null
                    }).removeEmptyTextStyle().run()
        };
    }
}), To = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Co = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, ui = D.create({
    name: "highlight",
    addOptions () {
        return {
            multicolor: !1,
            HTMLAttributes: {}
        };
    },
    addAttributes () {
        return this.options.multicolor ? {
            color: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-color") || e.style.backgroundColor,
                renderHTML: (e)=>e.color ? {
                        "data-color": e.color,
                        style: `background-color: ${e.color}; color: inherit`
                    } : {}
            }
        } : {};
    },
    parseHTML () {
        return [
            {
                tag: "mark"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "mark",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setHighlight: (e)=>({ commands: t })=>t.setMark(this.name, e),
            toggleHighlight: (e)=>({ commands: t })=>t.toggleMark(this.name, e),
            unsetHighlight: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-h": ()=>this.editor.commands.toggleHighlight()
        };
    },
    addInputRules () {
        return [
            J({
                find: To,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            z({
                find: Co,
                type: this.type
            })
        ];
    }
}), Fe = L.create({
    name: "listItem",
    addOptions () {
        return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
        };
    },
    content: "paragraph block*",
    defining: !0,
    parseHTML () {
        return [
            {
                tag: "li"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "li",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addKeyboardShortcuts () {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
    }
}), fe = /^\s*([-+*])\s$/, pi = L.create({
    name: "bulletList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: "ul"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "ul",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            toggleBulletList: ()=>({ commands: e, chain: t })=>this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Fe.name, this.editor.getAttributes(ft.name)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-8": ()=>this.editor.commands.toggleBulletList()
        };
    },
    addInputRules () {
        let e = tt({
            find: fe,
            type: this.type
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = tt({
            find: fe,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: ()=>this.editor.getAttributes(ft.name),
            editor: this.editor
        })), [
            e
        ];
    }
}), me = /^(\d+)\.\s$/, hi = L.create({
    name: "orderedList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: !1,
            keepAttributes: !1
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    addAttributes () {
        return {
            start: {
                default: 1,
                parseHTML: (e)=>e.hasAttribute("start") ? parseInt(e.getAttribute("start") || "", 10) : 1
            },
            type: {
                default: void 0,
                parseHTML: (e)=>e.getAttribute("type")
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "ol"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        const { start: t, ...n } = e;
        return t === 1 ? [
            "ol",
            x(this.options.HTMLAttributes, n),
            0
        ] : [
            "ol",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            toggleOrderedList: ()=>({ commands: e, chain: t })=>this.options.keepAttributes ? t().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Fe.name, this.editor.getAttributes(ft.name)).run() : e.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-7": ()=>this.editor.commands.toggleOrderedList()
        };
    },
    addInputRules () {
        let e = tt({
            find: me,
            type: this.type,
            getAttributes: (t)=>({
                    start: +t[1]
                }),
            joinPredicate: (t, n)=>n.childCount + n.attrs.start === +t[1]
        });
        return (this.options.keepMarks || this.options.keepAttributes) && (e = tt({
            find: me,
            type: this.type,
            keepMarks: this.options.keepMarks,
            keepAttributes: this.options.keepAttributes,
            getAttributes: (t)=>({
                    start: +t[1],
                    ...this.editor.getAttributes(ft.name)
                }),
            joinPredicate: (t, n)=>n.childCount + n.attrs.start === +t[1],
            editor: this.editor
        })), [
            e
        ];
    }
}), xo = /^\s*(\[([( |x])?\])\s$/, fi = L.create({
    name: "taskItem",
    addOptions () {
        return {
            nested: !1,
            HTMLAttributes: {},
            taskListTypeName: "taskList"
        };
    },
    content () {
        return this.options.nested ? "paragraph block*" : "paragraph+";
    },
    defining: !0,
    addAttributes () {
        return {
            checked: {
                default: !1,
                keepOnSplit: !1,
                parseHTML: (e)=>{
                    const t = e.getAttribute("data-checked");
                    return t === "" || t === "true";
                },
                renderHTML: (e)=>({
                        "data-checked": e.checked
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `li[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        return [
            "li",
            x(this.options.HTMLAttributes, t, {
                "data-type": this.name
            }),
            [
                "label",
                [
                    "input",
                    {
                        type: "checkbox",
                        checked: e.attrs.checked ? "checked" : null
                    }
                ],
                [
                    "span"
                ]
            ],
            [
                "div",
                0
            ]
        ];
    },
    addKeyboardShortcuts () {
        const e = {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
        return this.options.nested ? {
            ...e,
            Tab: ()=>this.editor.commands.sinkListItem(this.name)
        } : e;
    },
    addNodeView () {
        return ({ node: e, HTMLAttributes: t, getPos: n, editor: r })=>{
            const s = document.createElement("li"), o = document.createElement("label"), i = document.createElement("span"), a = document.createElement("input"), l = document.createElement("div");
            return o.contentEditable = "false", a.type = "checkbox", a.addEventListener("mousedown", (c)=>c.preventDefault()), a.addEventListener("change", (c)=>{
                if (!r.isEditable && !this.options.onReadOnlyChecked) {
                    a.checked = !a.checked;
                    return;
                }
                const { checked: u } = c.target;
                r.isEditable && typeof n == "function" && r.chain().focus(void 0, {
                    scrollIntoView: !1
                }).command(({ tr: d })=>{
                    const p = n();
                    if (typeof p != "number") return !1;
                    const h = d.doc.nodeAt(p);
                    return d.setNodeMarkup(p, void 0, {
                        ...h == null ? void 0 : h.attrs,
                        checked: u
                    }), !0;
                }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(e, u) || (a.checked = !a.checked));
            }), Object.entries(this.options.HTMLAttributes).forEach(([c, u])=>{
                s.setAttribute(c, u);
            }), s.dataset.checked = e.attrs.checked, e.attrs.checked && a.setAttribute("checked", "checked"), o.append(a, i), s.append(o, l), Object.entries(t).forEach(([c, u])=>{
                s.setAttribute(c, u);
            }), {
                dom: s,
                contentDOM: l,
                update: (c)=>c.type !== this.type ? !1 : (s.dataset.checked = c.attrs.checked, c.attrs.checked ? a.setAttribute("checked", "checked") : a.removeAttribute("checked"), !0)
            };
        };
    },
    addInputRules () {
        return [
            tt({
                find: xo,
                type: this.type,
                getAttributes: (e)=>({
                        checked: e[e.length - 1] === "x"
                    })
            })
        ];
    }
}), mi = L.create({
    name: "taskList",
    addOptions () {
        return {
            itemTypeName: "taskItem",
            HTMLAttributes: {}
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: `ul[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "ul",
            x(this.options.HTMLAttributes, e, {
                "data-type": this.name
            }),
            0
        ];
    },
    addCommands () {
        return {
            toggleTaskList: ()=>({ commands: e })=>e.toggleList(this.name, this.options.itemTypeName)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-9": ()=>this.editor.commands.toggleTaskList()
        };
    }
}), Ao = /^\s*>\s$/, gi = L.create({
    name: "blockquote",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    group: "block",
    defining: !0,
    parseHTML () {
        return [
            {
                tag: "blockquote"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "blockquote",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setBlockquote: ()=>({ commands: e })=>e.wrapIn(this.name),
            toggleBlockquote: ()=>({ commands: e })=>e.toggleWrap(this.name),
            unsetBlockquote: ()=>({ commands: e })=>e.lift(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-b": ()=>this.editor.commands.toggleBlockquote()
        };
    },
    addInputRules () {
        return [
            tt({
                find: Ao,
                type: this.type
            })
        ];
    }
});
function Oo(e) {
    return e.length === 1 ? e[0].isLink : e.length === 3 && e[1].isLink ? [
        "()",
        "[]"
    ].includes(e[0].value + e[2].value) : !1;
}
function Lo(e) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("autolink"),
        appendTransaction: (t, n, r)=>{
            const s = t.some((c)=>c.docChanged) && !n.doc.eq(r.doc), o = t.some((c)=>c.getMeta("preventAutolink"));
            if (!s || o) return;
            const { tr: i } = r, a = Xr(n.doc, [
                ...t
            ]);
            if (os(a).forEach(({ newRange: c })=>{
                const u = Zr(r.doc, c, (h)=>h.isTextblock);
                let d, p;
                if (u.length > 1 ? (d = u[0], p = r.doc.textBetween(d.pos, d.pos + d.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (d = u[0], p = r.doc.textBetween(d.pos, c.to, void 0, " ")), d && p) {
                    const h = p.split(" ").filter((g)=>g !== "");
                    if (h.length <= 0) return !1;
                    const f = h[h.length - 1], m = d.pos + p.lastIndexOf(f);
                    if (!f) return !1;
                    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Q"])(f).map((g)=>g.toObject(e.defaultProtocol));
                    if (!Oo(y)) return !1;
                    y.filter((g)=>g.isLink).map((g)=>({
                            ...g,
                            from: m + g.start + 1,
                            to: m + g.end + 1
                        })).filter((g)=>r.schema.marks.code ? !r.doc.rangeHasMark(g.from, g.to, r.schema.marks.code) : !0).filter((g)=>e.validate(g.value)).forEach((g)=>{
                        Jt(g.from, g.to, r.doc).some((k)=>k.mark.type === e.type) || i.addMark(g.from, g.to, e.type.create({
                            href: g.href
                        }));
                    });
                }
            }), !!i.steps.length) return i;
        }
    });
}
function _o(e) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("handleClickLink"),
        props: {
            handleClick: (t, n, r)=>{
                var s, o;
                if (r.button !== 0 || !t.editable) return !1;
                let i = r.target;
                const a = [];
                for(; i.nodeName !== "DIV";)a.push(i), i = i.parentNode;
                if (!a.find((p)=>p.nodeName === "A")) return !1;
                const l = Pe(t.state, e.type.name), c = r.target, u = (s = c == null ? void 0 : c.href) !== null && s !== void 0 ? s : l.href, d = (o = c == null ? void 0 : c.target) !== null && o !== void 0 ? o : l.target;
                return c && u ? (window.open(u, d), !0) : !1;
            }
        }
    });
}
function Ho(e) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("handlePasteLink"),
        props: {
            handlePaste: (t, n, r)=>{
                const { state: s } = t, { selection: o } = s, { empty: i } = o;
                if (i) return !1;
                let a = "";
                r.content.forEach((c)=>{
                    a += c.textContent;
                });
                const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"])(a, {
                    defaultProtocol: e.defaultProtocol
                }).find((c)=>c.isLink && c.value === a);
                return !a || !l ? !1 : (e.editor.commands.setMark(e.type, {
                    href: l.href
                }), !0);
            }
        }
    });
}
const Ro = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function ge(e, t) {
    const n = [
        "http",
        "https",
        "ftp",
        "ftps",
        "mailto",
        "tel",
        "callto",
        "sms",
        "cid",
        "xmpp"
    ];
    return t && t.forEach((r)=>{
        const s = typeof r == "string" ? r : r.scheme;
        s && n.push(s);
    }), !e || e.replace(Ro, "").match(new RegExp(`^(?:(?:${n.join("|")}):|[^a-z]|[a-z+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
const yi = D.create({
    name: "link",
    priority: 1e3,
    keepOnSplit: !1,
    exitable: !0,
    onCreate () {
        this.options.protocols.forEach((e)=>{
            if (typeof e == "string") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["M"])(e);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["M"])(e.scheme, e.optionalSlashes);
        });
    },
    onDestroy () {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["U"])();
    },
    inclusive () {
        return this.options.autolink;
    },
    addOptions () {
        return {
            openOnClick: !0,
            linkOnPaste: !0,
            autolink: !0,
            protocols: [],
            defaultProtocol: "http",
            HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: null
            },
            validate: (e)=>!!e
        };
    },
    addAttributes () {
        return {
            href: {
                default: null,
                parseHTML (e) {
                    return e.getAttribute("href");
                }
            },
            target: {
                default: this.options.HTMLAttributes.target
            },
            rel: {
                default: this.options.HTMLAttributes.rel
            },
            class: {
                default: this.options.HTMLAttributes.class
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "a[href]",
                getAttrs: (e)=>{
                    const t = e.getAttribute("href");
                    return !t || !ge(t, this.options.protocols) ? !1 : null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return ge(e.href, this.options.protocols) ? [
            "a",
            x(this.options.HTMLAttributes, e),
            0
        ] : [
            "a",
            x(this.options.HTMLAttributes, {
                ...e,
                href: ""
            }),
            0
        ];
    },
    addCommands () {
        return {
            setLink: (e)=>({ chain: t })=>t().setMark(this.name, e).setMeta("preventAutolink", !0).run(),
            toggleLink: (e)=>({ chain: t })=>t().toggleMark(this.name, e, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run(),
            unsetLink: ()=>({ chain: e })=>e().unsetMark(this.name, {
                        extendEmptyMarkRange: !0
                    }).setMeta("preventAutolink", !0).run()
        };
    },
    addPasteRules () {
        return [
            z({
                find: (e)=>{
                    const t = [];
                    if (e) {
                        const { validate: n } = this.options, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["O"])(e).filter((s)=>s.isLink && n(s.value));
                        r.length && r.forEach((s)=>t.push({
                                text: s.value,
                                data: {
                                    href: s.href
                                },
                                index: s.start
                            }));
                    }
                    return t;
                },
                type: this.type,
                getAttributes: (e)=>{
                    var t;
                    return {
                        href: (t = e.data) === null || t === void 0 ? void 0 : t.href
                    };
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        const e = [];
        return this.options.autolink && e.push(Lo({
            type: this.type,
            defaultProtocol: this.options.defaultProtocol,
            validate: this.options.validate
        })), this.options.openOnClick === !0 && e.push(_o({
            type: this.type
        })), this.options.linkOnPaste && e.push(Ho({
            editor: this.editor,
            defaultProtocol: this.options.defaultProtocol,
            type: this.type
        })), e;
    }
}), bi = L.create({
    name: "horizontalRule",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    group: "block",
    parseHTML () {
        return [
            {
                tag: "hr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "hr",
            x(this.options.HTMLAttributes, e)
        ];
    },
    addCommands () {
        return {
            setHorizontalRule: ()=>({ chain: e, state: t })=>{
                    const { selection: n } = t, { $from: r, $to: s } = n, o = e();
                    return r.parentOffset === 0 ? o.insertContentAt({
                        from: Math.max(r.pos - 1, 0),
                        to: s.pos
                    }, {
                        type: this.name
                    }) : Ie(n) ? o.insertContentAt(s.pos, {
                        type: this.name
                    }) : o.insertContent({
                        type: this.name
                    }), o.command(({ tr: i, dispatch: a })=>{
                        var l;
                        if (a) {
                            const { $to: c } = i.selection, u = c.end();
                            if (c.nodeAfter) c.nodeAfter.isTextblock ? i.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(i.doc, c.pos + 1)) : c.nodeAfter.isBlock ? i.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["N"].create(i.doc, c.pos)) : i.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(i.doc, c.pos));
                            else {
                                const d = (l = c.parent.type.contentMatch.defaultType) === null || l === void 0 ? void 0 : l.create();
                                d && (i.insert(u, d), i.setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].create(i.doc, u + 1)));
                            }
                            i.scrollIntoView();
                        }
                        return !0;
                    }).run();
                }
        };
    },
    addInputRules () {
        return [
            $e({
                find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                type: this.type
            })
        ];
    }
}), vi = _.create({
    name: "history",
    addOptions () {
        return {
            depth: 100,
            newGroupDelay: 500
        };
    },
    addCommands () {
        return {
            undo: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["V"])(e, t),
            redo: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["W"])(e, t)
        };
    },
    addProseMirrorPlugins () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["X"])(this.options)
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-z": ()=>this.editor.commands.undo(),
            "Shift-Mod-z": ()=>this.editor.commands.redo(),
            "Mod-y": ()=>this.editor.commands.redo(),
            // Russian keyboard layouts
            "Mod-я": ()=>this.editor.commands.undo(),
            "Shift-Mod-я": ()=>this.editor.commands.redo()
        };
    }
}), Mi = _.create({
    name: "characterCount",
    addOptions () {
        return {
            limit: null,
            mode: "textSize",
            textCounter: (e)=>e.length,
            wordCounter: (e)=>e.split(" ").filter((t)=>t !== "").length
        };
    },
    addStorage () {
        return {
            characters: ()=>0,
            words: ()=>0
        };
    },
    onBeforeCreate () {
        this.storage.characters = (e)=>{
            const t = (e == null ? void 0 : e.node) || this.editor.state.doc;
            if (((e == null ? void 0 : e.mode) || this.options.mode) === "textSize") {
                const r = t.textBetween(0, t.content.size, void 0, " ");
                return this.options.textCounter(r);
            }
            return t.nodeSize;
        }, this.storage.words = (e)=>{
            const t = (e == null ? void 0 : e.node) || this.editor.state.doc, n = t.textBetween(0, t.content.size, " ", " ");
            return this.options.wordCounter(n);
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("characterCount"),
                filterTransaction: (e, t)=>{
                    const n = this.options.limit;
                    if (!e.docChanged || n === 0 || n === null || n === void 0) return !0;
                    const r = this.storage.characters({
                        node: t.doc
                    }), s = this.storage.characters({
                        node: e.doc
                    });
                    if (s <= n || r > n && s > n && s <= r) return !0;
                    if (r > n && s > n && s > r || !e.getMeta("paste")) return !1;
                    const i = e.selection.$head.pos, a = s - n, l = i - a, c = i;
                    return e.deleteRange(l, c), !(this.storage.characters({
                        node: e.doc
                    }) > n);
                }
            })
        ];
    }
}), Si = _.create({
    name: "dropCursor",
    addOptions () {
        return {
            color: "currentColor",
            width: 1,
            class: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Y"])(this.options)
        ];
    }
}), ki = _.create({
    name: "focus",
    addOptions () {
        return {
            className: "has-focus",
            mode: "all"
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("focus"),
                props: {
                    decorations: ({ doc: e, selection: t })=>{
                        const { isEditable: n, isFocused: r } = this.editor, { anchor: s } = t, o = [];
                        if (!n || !r) return __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z"].create(e, []);
                        let i = 0;
                        this.options.mode === "deepest" && e.descendants((l, c)=>{
                            if (l.isText) return;
                            if (!(s >= c && s <= c + l.nodeSize - 1)) return !1;
                            i += 1;
                        });
                        let a = 0;
                        return e.descendants((l, c)=>{
                            if (l.isText || !(s >= c && s <= c + l.nodeSize - 1)) return !1;
                            if (a += 1, this.options.mode === "deepest" && i - a > 0 || this.options.mode === "shallowest" && a > 1) return this.options.mode === "deepest";
                            o.push(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"].node(c, c + l.nodeSize, {
                                class: this.options.className
                            }));
                        }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z"].create(e, o);
                    }
                }
            })
        ];
    }
}), wi = _.create({
    name: "gapCursor",
    addProseMirrorPlugins () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$"])()
        ];
    },
    extendNodeSchema (e) {
        var t;
        const n = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            allowGapCursor: (t = E(v(e, "allowGapCursor", n))) !== null && t !== void 0 ? t : null
        };
    }
}), Ei = L.create({
    name: "hardBreak",
    addOptions () {
        return {
            keepMarks: !0,
            HTMLAttributes: {}
        };
    },
    inline: !0,
    group: "inline",
    selectable: !1,
    parseHTML () {
        return [
            {
                tag: "br"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "br",
            x(this.options.HTMLAttributes, e)
        ];
    },
    renderText () {
        return `
`;
    },
    addCommands () {
        return {
            setHardBreak: ()=>({ commands: e, chain: t, state: n, editor: r })=>e.first([
                        ()=>e.exitCode(),
                        ()=>e.command(()=>{
                                const { selection: s, storedMarks: o } = n;
                                if (s.$from.parent.type.spec.isolating) return !1;
                                const { keepMarks: i } = this.options, { splittableMarks: a } = r.extensionManager, l = o || s.$to.parentOffset && s.$from.marks();
                                return t().insertContent({
                                    type: this.name
                                }).command(({ tr: c, dispatch: u })=>{
                                    if (u && l && i) {
                                        const d = l.filter((p)=>a.includes(p.type.name));
                                        c.ensureMarks(d);
                                    }
                                    return !0;
                                }).run();
                            })
                    ])
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Enter": ()=>this.editor.commands.setHardBreak(),
            "Shift-Enter": ()=>this.editor.commands.setHardBreak()
        };
    }
}), Ti = L.create({
    name: "paragraph",
    priority: 1e3,
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    group: "block",
    content: "inline*",
    parseHTML () {
        return [
            {
                tag: "p"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "p",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setParagraph: ()=>({ commands: e })=>e.setNode(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-0": ()=>this.editor.commands.setParagraph()
        };
    }
}), Ci = _.create({
    name: "placeholder",
    addOptions () {
        return {
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            placeholder: "Write something …",
            showOnlyWhenEditable: !0,
            showOnlyCurrent: !0,
            includeChildren: !1
        };
    },
    addProseMirrorPlugins () {
        return [
            new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
                key: new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("placeholder"),
                props: {
                    decorations: ({ doc: e, selection: t })=>{
                        const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = t, s = [];
                        if (!n) return null;
                        const o = this.editor.isEmpty;
                        return e.descendants((i, a)=>{
                            const l = r >= a && r <= a + i.nodeSize, c = !i.isLeaf && kt(i);
                            if ((l || !this.options.showOnlyCurrent) && c) {
                                const u = [
                                    this.options.emptyNodeClass
                                ];
                                o && u.push(this.options.emptyEditorClass);
                                const d = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"].node(a, a + i.nodeSize, {
                                    class: u.join(" "),
                                    "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                                        editor: this.editor,
                                        node: i,
                                        pos: a,
                                        hasAnchor: l
                                    }) : this.options.placeholder
                                });
                                s.push(d);
                            }
                            return this.options.includeChildren;
                        }), __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z"].create(e, s);
                    }
                }
            })
        ];
    }
}), xi = L.create({
    name: "text",
    group: "inline"
}), Ai = L.create({
    name: "doc",
    topNode: !0,
    content: "block+"
}), Oi = D.create({
    name: "subscript",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "sub"
            },
            {
                style: "vertical-align",
                getAttrs (e) {
                    return e !== "sub" ? !1 : null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "sub",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setSubscript: ()=>({ commands: e })=>e.setMark(this.name),
            toggleSubscript: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetSubscript: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-,": ()=>this.editor.commands.toggleSubscript()
        };
    }
}), Li = D.create({
    name: "superscript",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "sup"
            },
            {
                style: "vertical-align",
                getAttrs (e) {
                    return e !== "super" ? !1 : null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "sup",
            x(this.options.HTMLAttributes, e),
            0
        ];
    },
    addCommands () {
        return {
            setSuperscript: ()=>({ commands: e })=>e.setMark(this.name),
            toggleSuperscript: ()=>({ commands: e })=>e.toggleMark(this.name),
            unsetSuperscript: ()=>({ commands: e })=>e.unsetMark(this.name)
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-.": ()=>this.editor.commands.toggleSuperscript()
        };
    }
});
function Po(e) {
    var t;
    const { char: n, allowSpaces: r, allowedPrefixes: s, startOfLine: o, $position: i } = e, a = js(n), l = new RegExp(`\\s${a}$`), c = o ? "^" : "", u = r ? new RegExp(`${c}${a}.*?(?=\\s${a}|$)`, "gm") : new RegExp(`${c}(?:^)?${a}[^\\s${a}]*`, "gm"), d = ((t = i.nodeBefore) === null || t === void 0 ? void 0 : t.isText) && i.nodeBefore.text;
    if (!d) return null;
    const p = i.pos - d.length, h = Array.from(d.matchAll(u)).pop();
    if (!h || h.input === void 0 || h.index === void 0) return null;
    const f = h.input.slice(Math.max(0, h.index - 1), h.index), m = new RegExp(`^[${s == null ? void 0 : s.join("")}\0]?$`).test(f);
    if (s !== null && !m) return null;
    const y = p + h.index;
    let g = y + h[0].length;
    return r && l.test(d.slice(g - 1, g + 1)) && (h[0] += " ", g += 1), y < i.pos && g >= i.pos ? {
        range: {
            from: y,
            to: g
        },
        query: h[0].slice(n.length),
        text: h[0]
    } : null;
}
const Io = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("suggestion");
function $o({ pluginKey: e = Io, editor: t, char: n = "@", allowSpaces: r = !1, allowedPrefixes: s = [
    " "
], startOfLine: o = !1, decorationTag: i = "span", decorationClass: a = "suggestion", command: l = ()=>null, items: c = ()=>[], render: u = ()=>({}), allow: d = ()=>!0, findSuggestionMatch: p = Po }) {
    let h;
    const f = u == null ? void 0 : u(), m = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["P"]({
        key: e,
        view () {
            return {
                update: async (y, g)=>{
                    var k, b, M, w, S, C, A;
                    const T = (k = this.key) === null || k === void 0 ? void 0 : k.getState(g), H = (b = this.key) === null || b === void 0 ? void 0 : b.getState(y.state), N = T.active && H.active && T.range.from !== H.range.from, j = !T.active && H.active, Y = T.active && !H.active, W = !j && !Y && T.query !== H.query, K = j || N && W, F = W || N, U = Y || N && W;
                    if (!K && !F && !U) return;
                    const X = U && !K ? T : H, Yt = y.dom.querySelector(`[data-decoration-id="${X.decorationId}"]`);
                    h = {
                        editor: t,
                        range: X.range,
                        query: X.query,
                        text: X.text,
                        items: [],
                        command: (et)=>l({
                                editor: t,
                                range: X.range,
                                props: et
                            }),
                        decorationNode: Yt,
                        // virtual node for popper.js or tippy.js
                        // this can be used for building popups without a DOM node
                        clientRect: Yt ? ()=>{
                            var et;
                            const { decorationId: ze } = (et = this.key) === null || et === void 0 ? void 0 : et.getState(t.state), Et = y.dom.querySelector(`[data-decoration-id="${ze}"]`);
                            return (Et == null ? void 0 : Et.getBoundingClientRect()) || null;
                        } : null
                    }, K && ((M = f == null ? void 0 : f.onBeforeStart) === null || M === void 0 || M.call(f, h)), F && ((w = f == null ? void 0 : f.onBeforeUpdate) === null || w === void 0 || w.call(f, h)), (F || K) && (h.items = await c({
                        editor: t,
                        query: X.query
                    })), U && ((S = f == null ? void 0 : f.onExit) === null || S === void 0 || S.call(f, h)), F && ((C = f == null ? void 0 : f.onUpdate) === null || C === void 0 || C.call(f, h)), K && ((A = f == null ? void 0 : f.onStart) === null || A === void 0 || A.call(f, h));
                },
                destroy: ()=>{
                    var y;
                    h && ((y = f == null ? void 0 : f.onExit) === null || y === void 0 || y.call(f, h));
                }
            };
        },
        state: {
            // Initialize the plugin's internal state.
            init () {
                return {
                    active: !1,
                    range: {
                        from: 0,
                        to: 0
                    },
                    query: null,
                    text: null,
                    composing: !1
                };
            },
            // Apply changes to the plugin state from a view transaction.
            apply (y, g, k, b) {
                const { isEditable: M } = t, { composing: w } = t.view, { selection: S } = y, { empty: C, from: A } = S, T = {
                    ...g
                };
                if (T.composing = w, M && (C || t.view.composing)) {
                    (A < g.range.from || A > g.range.to) && !w && !g.composing && (T.active = !1);
                    const H = p({
                        char: n,
                        allowSpaces: r,
                        allowedPrefixes: s,
                        startOfLine: o,
                        $position: S.$from
                    }), N = `id_${Math.floor(Math.random() * 4294967295)}`;
                    H && d({
                        editor: t,
                        state: b,
                        range: H.range,
                        isActive: g.active
                    }) ? (T.active = !0, T.decorationId = g.decorationId ? g.decorationId : N, T.range = H.range, T.query = H.query, T.text = H.text) : T.active = !1;
                } else T.active = !1;
                return T.active || (T.decorationId = null, T.range = {
                    from: 0,
                    to: 0
                }, T.query = null, T.text = null), T;
            }
        },
        props: {
            // Call the keydown hook if suggestion is active.
            handleKeyDown (y, g) {
                var k;
                const { active: b, range: M } = m.getState(y.state);
                return b && ((k = f == null ? void 0 : f.onKeyDown) === null || k === void 0 ? void 0 : k.call(f, {
                    view: y,
                    event: g,
                    range: M
                })) || !1;
            },
            // Setup decorator on the currently active suggestion.
            decorations (y) {
                const { active: g, range: k, decorationId: b } = m.getState(y);
                return g ? __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Z"].create(y.doc, [
                    __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"].inline(k.from, k.to, {
                        nodeName: i,
                        class: a,
                        "data-decoration-id": b
                    })
                ]) : null;
            }
        }
    });
    return m;
}
const Do = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, _i = L.create({
    name: "image",
    addOptions () {
        return {
            inline: !1,
            allowBase64: !1,
            HTMLAttributes: {}
        };
    },
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    draggable: !0,
    addAttributes () {
        return {
            src: {
                default: null
            },
            alt: {
                default: null
            },
            title: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "img",
            x(this.options.HTMLAttributes, e)
        ];
    },
    addCommands () {
        return {
            setImage: (e)=>({ commands: t })=>t.insertContent({
                        type: this.name,
                        attrs: e
                    })
        };
    },
    addInputRules () {
        return [
            $e({
                find: Do,
                type: this.type,
                getAttributes: (e)=>{
                    const [, , t, n, r] = e;
                    return {
                        src: n,
                        alt: t,
                        title: r
                    };
                }
            })
        ];
    }
}), Hi = L.create({
    name: "tableRow",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "(tableCell | tableHeader)*",
    tableRole: "row",
    parseHTML () {
        return [
            {
                tag: "tr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "tr",
            x(this.options.HTMLAttributes, e),
            0
        ];
    }
});
function ye(e, t, n, r, s, o) {
    let i = 0, a = !0, l = t.firstChild;
    const c = e.firstChild;
    for(let u = 0, d = 0; u < c.childCount; u += 1){
        const { colspan: p, colwidth: h } = c.child(u).attrs;
        for(let f = 0; f < p; f += 1, d += 1){
            const m = s === d ? o : h && h[f], y = m ? `${m}px` : "";
            i += m || r, m || (a = !1), l ? (l.style.width !== y && (l.style.width = y), l = l.nextSibling) : t.appendChild(document.createElement("col")).style.width = y;
        }
    }
    for(; l;){
        const u = l.nextSibling;
        l.parentNode.removeChild(l), l = u;
    }
    a ? (n.style.width = `${i}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${i}px`);
}
class No {
    constructor(t, n){
        this.node = t, this.cellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), ye(t, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(t) {
        return t.type !== this.node.type ? !1 : (this.node = t, ye(t, this.colgroup, this.table, this.cellMinWidth), !0);
    }
    ignoreMutation(t) {
        return t.type === "attributes" && (t.target === this.table || this.colgroup.contains(t.target));
    }
}
function Bo(e, t, n, r) {
    let s = 0, o = !0;
    const i = [], a = e.firstChild;
    if (!a) return {};
    for(let d = 0, p = 0; d < a.childCount; d += 1){
        const { colspan: h, colwidth: f } = a.child(d).attrs;
        for(let m = 0; m < h; m += 1, p += 1){
            const y = n === p ? r : f && f[m], g = y ? `${y}px` : "";
            s += y || t, y || (o = !1), i.push([
                "col",
                g ? {
                    style: `width: ${g}`
                } : {}
            ]);
        }
    }
    const l = o ? `${s}px` : "", c = o ? "" : `${s}px`;
    return {
        colgroup: [
            "colgroup",
            {},
            ...i
        ],
        tableWidth: l,
        tableMinWidth: c
    };
}
function be(e, t) {
    return e.createAndFill();
}
function jo(e) {
    if (e.cached.tableNodeTypes) return e.cached.tableNodeTypes;
    const t = {};
    return Object.keys(e.nodes).forEach((n)=>{
        const r = e.nodes[n];
        r.spec.tableRole && (t[r.spec.tableRole] = r);
    }), e.cached.tableNodeTypes = t, t;
}
function Fo(e, t, n, r, s) {
    const o = jo(e), i = [], a = [];
    for(let c = 0; c < n; c += 1){
        const u = be(o.cell);
        if (u && a.push(u), r) {
            const d = be(o.header_cell);
            d && i.push(d);
        }
    }
    const l = [];
    for(let c = 0; c < t; c += 1)l.push(o.row.createChecked(null, r && c === 0 ? i : a));
    return o.table.createChecked(null, l);
}
function zo(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ae"];
}
const it = ({ editor: e })=>{
    const { selection: t } = e.state;
    if (!zo(t)) return !1;
    let n = 0;
    const r = Re(t.ranges[0].$from, (o)=>o.type.name === "table");
    return r == null || r.node.descendants((o)=>{
        if (o.type.name === "table") return !1;
        [
            "tableCell",
            "tableHeader"
        ].includes(o.type.name) && (n += 1);
    }), n === t.ranges.length ? (e.commands.deleteTable(), !0) : !1;
}, Ri = L.create({
    name: "table",
    // @ts-ignore
    addOptions () {
        return {
            HTMLAttributes: {},
            resizable: !1,
            handleWidth: 5,
            cellMinWidth: 25,
            // TODO: fix
            View: No,
            lastColumnResizable: !0,
            allowTableNodeSelection: !1
        };
    },
    content: "tableRow+",
    tableRole: "table",
    isolating: !0,
    group: "block",
    parseHTML () {
        return [
            {
                tag: "table"
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        const { colgroup: n, tableWidth: r, tableMinWidth: s } = Bo(e, this.options.cellMinWidth);
        return [
            "table",
            x(this.options.HTMLAttributes, t, {
                style: r ? `width: ${r}` : `min-width: ${s}`
            }),
            n,
            [
                "tbody",
                0
            ]
        ];
    },
    addCommands () {
        return {
            insertTable: ({ rows: e = 3, cols: t = 3, withHeaderRow: n = !0 } = {})=>({ tr: r, dispatch: s, editor: o })=>{
                    const i = Fo(o.schema, e, t, n);
                    if (s) {
                        const a = r.selection.from + 1;
                        r.replaceSelectionWith(i).scrollIntoView().setSelection(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"].near(r.doc.resolve(a)));
                    }
                    return !0;
                },
            addColumnBefore: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a0"])(e, t),
            addColumnAfter: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a1"])(e, t),
            deleteColumn: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a2"])(e, t),
            addRowBefore: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a3"])(e, t),
            addRowAfter: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a4"])(e, t),
            deleteRow: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a5"])(e, t),
            deleteTable: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a6"])(e, t),
            mergeCells: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a7"])(e, t),
            splitCell: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a8"])(e, t),
            toggleHeaderColumn: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a9"])("column")(e, t),
            toggleHeaderRow: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a9"])("row")(e, t),
            toggleHeaderCell: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aa"])(e, t),
            mergeOrSplit: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a7"])(e, t) ? !0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a8"])(e, t),
            setCellAttribute: (e, t)=>({ state: n, dispatch: r })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ab"])(e, t)(n, r),
            goToNextCell: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ac"])(1)(e, t),
            goToPreviousCell: ()=>({ state: e, dispatch: t })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ac"])(-1)(e, t),
            fixTables: ()=>({ state: e, dispatch: t })=>(t && (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ad"])(e), !0),
            setCellSelection: (e)=>({ tr: t, dispatch: n })=>{
                    if (n) {
                        const r = __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ae"].create(t.doc, e.anchorCell, e.headCell);
                        t.setSelection(r);
                    }
                    return !0;
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            Tab: ()=>this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
            "Shift-Tab": ()=>this.editor.commands.goToPreviousCell(),
            Backspace: it,
            "Mod-Backspace": it,
            Delete: it,
            "Mod-Delete": it
        };
    },
    addProseMirrorPlugins () {
        return [
            ...this.options.resizable && this.editor.isEditable ? [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["af"])({
                    handleWidth: this.options.handleWidth,
                    cellMinWidth: this.options.cellMinWidth,
                    View: this.options.View,
                    lastColumnResizable: this.options.lastColumnResizable
                })
            ] : [],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ag"])({
                allowTableNodeSelection: this.options.allowTableNodeSelection
            })
        ];
    },
    extendNodeSchema (e) {
        const t = {
            name: e.name,
            options: e.options,
            storage: e.storage
        };
        return {
            tableRole: E(v(e, "tableRole", t))
        };
    }
}), Pi = L.create({
    name: "tableCell",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (e)=>{
                    const t = e.getAttribute("colwidth");
                    return t ? [
                        parseInt(t, 10)
                    ] : null;
                }
            }
        };
    },
    tableRole: "cell",
    isolating: !0,
    parseHTML () {
        return [
            {
                tag: "td"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "td",
            x(this.options.HTMLAttributes, e),
            0
        ];
    }
}), Ii = L.create({
    name: "tableHeader",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    addAttributes () {
        return {
            colspan: {
                default: 1
            },
            rowspan: {
                default: 1
            },
            colwidth: {
                default: null,
                parseHTML: (e)=>{
                    const t = e.getAttribute("colwidth");
                    return t ? [
                        parseInt(t, 10)
                    ] : null;
                }
            }
        };
    },
    tableRole: "header_cell",
    isolating: !0,
    parseHTML () {
        return [
            {
                tag: "th"
            }
        ];
    },
    renderHTML ({ HTMLAttributes: e }) {
        return [
            "th",
            x(this.options.HTMLAttributes, e),
            0
        ];
    }
}), Vo = new __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$reactjs$2d$tiptap$2d$editor$2f$lib$2f$vendor$2d$DqXtrdHd$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"]("mention"), $i = L.create({
    name: "mention",
    addOptions () {
        return {
            HTMLAttributes: {},
            renderText ({ options: e, node: t }) {
                var n;
                return `${e.suggestion.char}${(n = t.attrs.label) !== null && n !== void 0 ? n : t.attrs.id}`;
            },
            deleteTriggerWithBackspace: !1,
            renderHTML ({ options: e, node: t }) {
                var n;
                return [
                    "span",
                    x(this.HTMLAttributes, e.HTMLAttributes),
                    `${e.suggestion.char}${(n = t.attrs.label) !== null && n !== void 0 ? n : t.attrs.id}`
                ];
            },
            suggestion: {
                char: "@",
                pluginKey: Vo,
                command: ({ editor: e, range: t, props: n })=>{
                    var r, s, o;
                    const i = e.view.state.selection.$to.nodeAfter;
                    ((r = i == null ? void 0 : i.text) === null || r === void 0 ? void 0 : r.startsWith(" ")) && (t.to += 1), e.chain().focus().insertContentAt(t, [
                        {
                            type: this.name,
                            attrs: n
                        },
                        {
                            type: "text",
                            text: " "
                        }
                    ]).run(), (o = (s = e.view.dom.ownerDocument.defaultView) === null || s === void 0 ? void 0 : s.getSelection()) === null || o === void 0 || o.collapseToEnd();
                },
                allow: ({ state: e, range: t })=>{
                    const n = e.doc.resolve(t.from), r = e.schema.nodes[this.name];
                    return !!n.parent.type.contentMatch.matchType(r);
                }
            }
        };
    },
    group: "inline",
    inline: !0,
    selectable: !1,
    atom: !0,
    addAttributes () {
        return {
            id: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-id"),
                renderHTML: (e)=>e.id ? {
                        "data-id": e.id
                    } : {}
            },
            label: {
                default: null,
                parseHTML: (e)=>e.getAttribute("data-label"),
                renderHTML: (e)=>e.label ? {
                        "data-label": e.label
                    } : {}
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `span[data-type="${this.name}"]`
            }
        ];
    },
    renderHTML ({ node: e, HTMLAttributes: t }) {
        if (this.options.renderLabel !== void 0) return console.warn("renderLabel is deprecated use renderText and renderHTML instead"), [
            "span",
            x({
                "data-type": this.name
            }, this.options.HTMLAttributes, t),
            this.options.renderLabel({
                options: this.options,
                node: e
            })
        ];
        const n = {
            ...this.options
        };
        n.HTMLAttributes = x({
            "data-type": this.name
        }, this.options.HTMLAttributes, t);
        const r = this.options.renderHTML({
            options: n,
            node: e
        });
        return typeof r == "string" ? [
            "span",
            x({
                "data-type": this.name
            }, this.options.HTMLAttributes, t),
            r
        ] : r;
    },
    renderText ({ node: e }) {
        return this.options.renderLabel !== void 0 ? (console.warn("renderLabel is deprecated use renderText and renderHTML instead"), this.options.renderLabel({
            options: this.options,
            node: e
        })) : this.options.renderText({
            options: this.options,
            node: e
        });
    },
    addKeyboardShortcuts () {
        return {
            Backspace: ()=>this.editor.commands.command(({ tr: e, state: t })=>{
                    let n = !1;
                    const { selection: r } = t, { empty: s, anchor: o } = r;
                    return s ? (t.doc.nodesBetween(o - 1, o, (i, a)=>{
                        if (i.type.name === this.name) return n = !0, e.insertText(this.options.deleteTriggerWithBackspace ? "" : this.options.suggestion.char || "", a, a + i.nodeSize), !1;
                    }), n) : !1;
                })
        };
    },
    addProseMirrorPlugins () {
        return [
            $o({
                editor: this.editor,
                ...this.options.suggestion
            })
        ];
    }
});
;
}),
];

//# sourceMappingURL=f6976_reactjs-tiptap-editor_lib_tiptap-ocrlqn2l_ecec26c3.js.map