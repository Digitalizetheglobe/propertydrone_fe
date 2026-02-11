(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/propertydrone/propertydrone_fe/node_modules/reactjs-tiptap-editor/lib/vendor-DqXtrdHd.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$",
    ()=>UE,
    "A",
    ()=>Ku,
    "B",
    ()=>w,
    "C",
    ()=>kE,
    "D",
    ()=>EE,
    "E",
    ()=>sE,
    "F",
    ()=>b,
    "G",
    ()=>jn,
    "H",
    ()=>lE,
    "I",
    ()=>oE,
    "J",
    ()=>er,
    "K",
    ()=>le,
    "L",
    ()=>On,
    "M",
    ()=>jE,
    "N",
    ()=>M,
    "O",
    ()=>VE,
    "P",
    ()=>kn,
    "Q",
    ()=>Xk,
    "R",
    ()=>ie,
    "S",
    ()=>R,
    "T",
    ()=>eh,
    "U",
    ()=>_E,
    "V",
    ()=>sA,
    "W",
    ()=>lA,
    "X",
    ()=>WE,
    "Y",
    ()=>HE,
    "Z",
    ()=>J,
    "_",
    ()=>ye,
    "a",
    ()=>mr,
    "a0",
    ()=>JE,
    "a1",
    ()=>qE,
    "a2",
    ()=>GE,
    "a3",
    ()=>YE,
    "a4",
    ()=>XE,
    "a5",
    ()=>QE,
    "a6",
    ()=>iT,
    "a7",
    ()=>ZE,
    "a8",
    ()=>eT,
    "a9",
    ()=>la,
    "aa",
    ()=>nT,
    "ab",
    ()=>tT,
    "ac",
    ()=>rT,
    "ad",
    ()=>MA,
    "ae",
    ()=>H,
    "af",
    ()=>KE,
    "ag",
    ()=>oT,
    "ah",
    ()=>RE,
    "ai",
    ()=>NE,
    "aj",
    ()=>IE,
    "ak",
    ()=>DE,
    "al",
    ()=>PE,
    "am",
    ()=>BE,
    "an",
    ()=>LE,
    "ao",
    ()=>Me,
    "ap",
    ()=>ak,
    "aq",
    ()=>FE,
    "ar",
    ()=>_e,
    "as",
    ()=>zE,
    "at",
    ()=>$E,
    "b",
    ()=>SE,
    "c",
    ()=>pr,
    "d",
    ()=>z,
    "e",
    ()=>aE,
    "f",
    ()=>Uu,
    "g",
    ()=>vE,
    "h",
    ()=>gE,
    "i",
    ()=>cE,
    "j",
    ()=>mE,
    "k",
    ()=>dE,
    "l",
    ()=>dr,
    "m",
    ()=>qu,
    "n",
    ()=>fE,
    "o",
    ()=>uE,
    "p",
    ()=>yE,
    "q",
    ()=>wE,
    "r",
    ()=>TE,
    "s",
    ()=>bE,
    "t",
    ()=>hE,
    "u",
    ()=>pE,
    "v",
    ()=>xE,
    "w",
    ()=>OE,
    "x",
    ()=>CE,
    "y",
    ()=>AE,
    "z",
    ()=>ME
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/propertydrone/propertydrone_fe/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
;
function re(n) {
    this.content = n;
}
re.prototype = {
    constructor: re,
    find: function(n) {
        for(var e = 0; e < this.content.length; e += 2)if (this.content[e] === n) return e;
        return -1;
    },
    // :: (string) → ?any
    // Retrieve the value stored under `key`, or return undefined when
    // no such key exists.
    get: function(n) {
        var e = this.find(n);
        return e == -1 ? void 0 : this.content[e + 1];
    },
    // :: (string, any, ?string) → OrderedMap
    // Create a new map by replacing the value of `key` with a new
    // value, or adding a binding to the end of the map. If `newKey` is
    // given, the key of the binding will be replaced with that key.
    update: function(n, e, t) {
        var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
        return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new re(o);
    },
    // :: (string) → OrderedMap
    // Return a map with the given key removed, if it existed.
    remove: function(n) {
        var e = this.find(n);
        if (e == -1) return this;
        var t = this.content.slice();
        return t.splice(e, 2), new re(t);
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the start of the map.
    addToStart: function(n, e) {
        return new re([
            n,
            e
        ].concat(this.remove(n).content));
    },
    // :: (string, any) → OrderedMap
    // Add a new key to the end of the map.
    addToEnd: function(n, e) {
        var t = this.remove(n).content.slice();
        return t.push(n, e), new re(t);
    },
    // :: (string, string, any) → OrderedMap
    // Add a key after the given key. If `place` is not found, the new
    // key is added to the end.
    addBefore: function(n, e, t) {
        var r = this.remove(e), i = r.content.slice(), o = r.find(n);
        return i.splice(o == -1 ? i.length : o, 0, e, t), new re(i);
    },
    // :: ((key: string, value: any))
    // Call the given function for each key/value pair in the map, in
    // order.
    forEach: function(n) {
        for(var e = 0; e < this.content.length; e += 2)n(this.content[e], this.content[e + 1]);
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by prepending the keys in this map that don't
    // appear in `map` before the keys in `map`.
    prepend: function(n) {
        return n = re.from(n), n.size ? new re(n.content.concat(this.subtract(n).content)) : this;
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a new map by appending the keys in this map that don't
    // appear in `map` after the keys in `map`.
    append: function(n) {
        return n = re.from(n), n.size ? new re(this.subtract(n).content.concat(n.content)) : this;
    },
    // :: (union<Object, OrderedMap>) → OrderedMap
    // Create a map containing all the keys in this map that don't
    // appear in `map`.
    subtract: function(n) {
        var e = this;
        n = re.from(n);
        for(var t = 0; t < n.content.length; t += 2)e = e.remove(n.content[t]);
        return e;
    },
    // :: () → Object
    // Turn ordered map into a plain object.
    toObject: function() {
        var n = {};
        return this.forEach(function(e, t) {
            n[e] = t;
        }), n;
    },
    // :: number
    // The amount of keys in this map.
    get size () {
        return this.content.length >> 1;
    }
};
re.from = function(n) {
    if (n instanceof re) return n;
    var e = [];
    if (n) for(var t in n)e.push(t, n[t]);
    return new re(e);
};
function xu(n, e, t) {
    for(let r = 0;; r++){
        if (r == n.childCount || r == e.childCount) return n.childCount == e.childCount ? null : t;
        let i = n.child(r), o = e.child(r);
        if (i == o) {
            t += i.nodeSize;
            continue;
        }
        if (!i.sameMarkup(o)) return t;
        if (i.isText && i.text != o.text) {
            for(let s = 0; i.text[s] == o.text[s]; s++)t++;
            return t;
        }
        if (i.content.size || o.content.size) {
            let s = xu(i.content, o.content, t + 1);
            if (s != null) return s;
        }
        t += i.nodeSize;
    }
}
function Cu(n, e, t, r) {
    for(let i = n.childCount, o = e.childCount;;){
        if (i == 0 || o == 0) return i == o ? null : {
            a: t,
            b: r
        };
        let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
        if (s == l) {
            t -= a, r -= a;
            continue;
        }
        if (!s.sameMarkup(l)) return {
            a: t,
            b: r
        };
        if (s.isText && s.text != l.text) {
            let c = 0, f = Math.min(s.text.length, l.text.length);
            for(; c < f && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1];)c++, t--, r--;
            return {
                a: t,
                b: r
            };
        }
        if (s.content.size || l.content.size) {
            let c = Cu(s.content, l.content, t - 1, r - 1);
            if (c) return c;
        }
        t -= a, r -= a;
    }
}
class b {
    /**
  @internal
  */ constructor(e, t){
        if (this.content = e, this.size = t || 0, t == null) for(let r = 0; r < e.length; r++)this.size += e[r].nodeSize;
    }
    /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */ nodesBetween(e, t, r, i = 0, o) {
        for(let s = 0, l = 0; l < t; s++){
            let a = this.content[s], c = l + a.nodeSize;
            if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
                let f = l + 1;
                a.nodesBetween(Math.max(0, e - f), Math.min(a.content.size, t - f), r, i + f);
            }
            l = c;
        }
    }
    /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */ descendants(e) {
        this.nodesBetween(0, this.size, e);
    }
    /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */ textBetween(e, t, r, i) {
        let o = "", s = !0;
        return this.nodesBetween(e, t, (l, a)=>{
            let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
            l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
        }, 0), o;
    }
    /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */ append(e) {
        if (!e.size) return this;
        if (!this.size) return e;
        let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
        for(t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)i.push(e.content[o]);
        return new b(i, this.size + e.size);
    }
    /**
  Cut out the sub-fragment between the two given positions.
  */ cut(e, t = this.size) {
        if (e == 0 && t == this.size) return this;
        let r = [], i = 0;
        if (t > e) for(let o = 0, s = 0; s < t; o++){
            let l = this.content[o], a = s + l.nodeSize;
            a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
        }
        return new b(r, i);
    }
    /**
  @internal
  */ cutByIndex(e, t) {
        return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
    }
    /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */ replaceChild(e, t) {
        let r = this.content[e];
        if (r == t) return this;
        let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
        return i[e] = t, new b(i, o);
    }
    /**
  Create a new fragment by prepending the given node to this
  fragment.
  */ addToStart(e) {
        return new b([
            e
        ].concat(this.content), this.size + e.nodeSize);
    }
    /**
  Create a new fragment by appending the given node to this
  fragment.
  */ addToEnd(e) {
        return new b(this.content.concat(e), this.size + e.nodeSize);
    }
    /**
  Compare this fragment to another one.
  */ eq(e) {
        if (this.content.length != e.content.length) return !1;
        for(let t = 0; t < this.content.length; t++)if (!this.content[t].eq(e.content[t])) return !1;
        return !0;
    }
    /**
  The first child of the fragment, or `null` if it is empty.
  */ get firstChild() {
        return this.content.length ? this.content[0] : null;
    }
    /**
  The last child of the fragment, or `null` if it is empty.
  */ get lastChild() {
        return this.content.length ? this.content[this.content.length - 1] : null;
    }
    /**
  The number of child nodes in this fragment.
  */ get childCount() {
        return this.content.length;
    }
    /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */ child(e) {
        let t = this.content[e];
        if (!t) throw new RangeError("Index " + e + " out of range for " + this);
        return t;
    }
    /**
  Get the child node at the given index, if it exists.
  */ maybeChild(e) {
        return this.content[e] || null;
    }
    /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */ forEach(e) {
        for(let t = 0, r = 0; t < this.content.length; t++){
            let i = this.content[t];
            e(i, r, t), r += i.nodeSize;
        }
    }
    /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */ findDiffStart(e, t = 0) {
        return xu(this, e, t);
    }
    /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */ findDiffEnd(e, t = this.size, r = e.size) {
        return Cu(this, e, t, r);
    }
    /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */ findIndex(e, t = -1) {
        if (e == 0) return Sr(0, e);
        if (e == this.size) return Sr(this.content.length, e);
        if (e > this.size || e < 0) throw new RangeError(`Position ${e} outside of fragment (${this})`);
        for(let r = 0, i = 0;; r++){
            let o = this.child(r), s = i + o.nodeSize;
            if (s >= e) return s == e || t > 0 ? Sr(r + 1, s) : Sr(r, i);
            i = s;
        }
    }
    /**
  Return a debugging string that describes this fragment.
  */ toString() {
        return "<" + this.toStringInner() + ">";
    }
    /**
  @internal
  */ toStringInner() {
        return this.content.join(", ");
    }
    /**
  Create a JSON-serializeable representation of this fragment.
  */ toJSON() {
        return this.content.length ? this.content.map((e)=>e.toJSON()) : null;
    }
    /**
  Deserialize a fragment from its JSON representation.
  */ static fromJSON(e, t) {
        if (!t) return b.empty;
        if (!Array.isArray(t)) throw new RangeError("Invalid input for Fragment.fromJSON");
        return new b(t.map(e.nodeFromJSON));
    }
    /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */ static fromArray(e) {
        if (!e.length) return b.empty;
        let t, r = 0;
        for(let i = 0; i < e.length; i++){
            let o = e[i];
            r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
        }
        return new b(t || e, r);
    }
    /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */ static from(e) {
        if (!e) return b.empty;
        if (e instanceof b) return e;
        if (Array.isArray(e)) return this.fromArray(e);
        if (e.attrs) return new b([
            e
        ], e.nodeSize);
        throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
    }
}
b.empty = new b([], 0);
const bo = {
    index: 0,
    offset: 0
};
function Sr(n, e) {
    return bo.index = n, bo.offset = e, bo;
}
function Xr(n, e) {
    if (n === e) return !0;
    if (!(n && typeof n == "object") || !(e && typeof e == "object")) return !1;
    let t = Array.isArray(n);
    if (Array.isArray(e) != t) return !1;
    if (t) {
        if (n.length != e.length) return !1;
        for(let r = 0; r < n.length; r++)if (!Xr(n[r], e[r])) return !1;
    } else {
        for(let r in n)if (!(r in e) || !Xr(n[r], e[r])) return !1;
        for(let r in e)if (!(r in n)) return !1;
    }
    return !0;
}
class _ {
    /**
  @internal
  */ constructor(e, t){
        this.type = e, this.attrs = t;
    }
    /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */ addToSet(e) {
        let t, r = !1;
        for(let i = 0; i < e.length; i++){
            let o = e[i];
            if (this.eq(o)) return e;
            if (this.type.excludes(o.type)) t || (t = e.slice(0, i));
            else {
                if (o.type.excludes(this.type)) return e;
                !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
            }
        }
        return t || (t = e.slice()), r || t.push(this), t;
    }
    /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */ removeFromSet(e) {
        for(let t = 0; t < e.length; t++)if (this.eq(e[t])) return e.slice(0, t).concat(e.slice(t + 1));
        return e;
    }
    /**
  Test whether this mark is in the given set of marks.
  */ isInSet(e) {
        for(let t = 0; t < e.length; t++)if (this.eq(e[t])) return !0;
        return !1;
    }
    /**
  Test whether this mark has the same type and attributes as
  another mark.
  */ eq(e) {
        return this == e || this.type == e.type && Xr(this.attrs, e.attrs);
    }
    /**
  Convert this mark to a JSON-serializeable representation.
  */ toJSON() {
        let e = {
            type: this.type.name
        };
        for(let t in this.attrs){
            e.attrs = this.attrs;
            break;
        }
        return e;
    }
    /**
  Deserialize a mark from JSON.
  */ static fromJSON(e, t) {
        if (!t) throw new RangeError("Invalid input for Mark.fromJSON");
        let r = e.marks[t.type];
        if (!r) throw new RangeError(`There is no mark type ${t.type} in this schema`);
        let i = r.create(t.attrs);
        return r.checkAttrs(i.attrs), i;
    }
    /**
  Test whether two sets of marks are identical.
  */ static sameSet(e, t) {
        if (e == t) return !0;
        if (e.length != t.length) return !1;
        for(let r = 0; r < e.length; r++)if (!e[r].eq(t[r])) return !1;
        return !0;
    }
    /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */ static setFrom(e) {
        if (!e || Array.isArray(e) && e.length == 0) return _.none;
        if (e instanceof _) return [
            e
        ];
        let t = e.slice();
        return t.sort((r, i)=>r.type.rank - i.type.rank), t;
    }
}
_.none = [];
class Qr extends Error {
}
class w {
    /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */ constructor(e, t, r){
        this.content = e, this.openStart = t, this.openEnd = r;
    }
    /**
  The size this slice would add when inserted into a document.
  */ get size() {
        return this.content.size - this.openStart - this.openEnd;
    }
    /**
  @internal
  */ insertAt(e, t) {
        let r = ku(this.content, e + this.openStart, t);
        return r && new w(r, this.openStart, this.openEnd);
    }
    /**
  @internal
  */ removeBetween(e, t) {
        return new w(Ou(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
    }
    /**
  Tests whether this slice is equal to another slice.
  */ eq(e) {
        return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
    }
    /**
  @internal
  */ toString() {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")";
    }
    /**
  Convert a slice to a JSON-serializable representation.
  */ toJSON() {
        if (!this.content.size) return null;
        let e = {
            content: this.content.toJSON()
        };
        return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
    }
    /**
  Deserialize a slice from its JSON representation.
  */ static fromJSON(e, t) {
        if (!t) return w.empty;
        let r = t.openStart || 0, i = t.openEnd || 0;
        if (typeof r != "number" || typeof i != "number") throw new RangeError("Invalid input for Slice.fromJSON");
        return new w(b.fromJSON(e, t.content), r, i);
    }
    /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */ static maxOpen(e, t = !0) {
        let r = 0, i = 0;
        for(let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)r++;
        for(let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)i++;
        return new w(e, r, i);
    }
}
w.empty = new w(b.empty, 0, 0);
function Ou(n, e, t) {
    let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
    if (i == e || o.isText) {
        if (l != t && !n.child(s).isText) throw new RangeError("Removing non-flat range");
        return n.cut(0, e).append(n.cut(t));
    }
    if (r != s) throw new RangeError("Removing non-flat range");
    return n.replaceChild(r, o.copy(Ou(o.content, e - i - 1, t - i - 1)));
}
function ku(n, e, t, r) {
    let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
    if (o == e || s.isText) return n.cut(0, e).append(t).append(n.cut(e));
    let l = ku(s.content, e - o - 1, t);
    return l && n.replaceChild(i, s.copy(l));
}
function Jp(n, e, t) {
    if (t.openStart > n.depth) throw new Qr("Inserted content deeper than insertion position");
    if (n.depth - t.openStart != e.depth - t.openEnd) throw new Qr("Inconsistent open depths");
    return Au(n, e, t, 0);
}
function Au(n, e, t, r) {
    let i = n.index(r), o = n.node(r);
    if (i == e.index(r) && r < n.depth - t.openStart) {
        let s = Au(n, e, t, r + 1);
        return o.copy(o.content.replaceChild(i, s));
    } else if (t.content.size) if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
        let s = n.parent, l = s.content;
        return Lt(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
        let { start: s, end: l } = qp(t, n);
        return Lt(o, Tu(n, s, l, e, r));
    }
    else return Lt(o, Zr(n, e, r));
}
function Eu(n, e) {
    if (!e.type.compatibleContent(n.type)) throw new Qr("Cannot join " + e.type.name + " onto " + n.type.name);
}
function us(n, e, t) {
    let r = n.node(t);
    return Eu(r, e.node(t)), r;
}
function zt(n, e) {
    let t = e.length - 1;
    t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Vn(n, e, t, r) {
    let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
    n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (zt(n.nodeAfter, r), o++));
    for(let l = o; l < s; l++)zt(i.child(l), r);
    e && e.depth == t && e.textOffset && zt(e.nodeBefore, r);
}
function Lt(n, e) {
    return n.type.checkContent(e), n.copy(e);
}
function Tu(n, e, t, r, i) {
    let o = n.depth > i && us(n, e, i + 1), s = r.depth > i && us(t, r, i + 1), l = [];
    return Vn(null, n, i, l), o && s && e.index(i) == t.index(i) ? (Eu(o, s), zt(Lt(o, Tu(n, e, t, r, i + 1)), l)) : (o && zt(Lt(o, Zr(n, e, i + 1)), l), Vn(e, t, i, l), s && zt(Lt(s, Zr(t, r, i + 1)), l)), Vn(r, null, i, l), new b(l);
}
function Zr(n, e, t) {
    let r = [];
    if (Vn(null, n, t, r), n.depth > t) {
        let i = us(n, e, t + 1);
        zt(Lt(i, Zr(n, e, t + 1)), r);
    }
    return Vn(e, null, t, r), new b(r);
}
function qp(n, e) {
    let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
    for(let o = t - 1; o >= 0; o--)i = e.node(o).copy(b.from(i));
    return {
        start: i.resolveNoCache(n.openStart + t),
        end: i.resolveNoCache(i.content.size - n.openEnd - t)
    };
}
class Zn {
    /**
  @internal
  */ constructor(e, t, r){
        this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
    }
    /**
  @internal
  */ resolveDepth(e) {
        return e == null ? this.depth : e < 0 ? this.depth + e : e;
    }
    /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */ get parent() {
        return this.node(this.depth);
    }
    /**
  The root node in which the position was resolved.
  */ get doc() {
        return this.node(0);
    }
    /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */ node(e) {
        return this.path[this.resolveDepth(e) * 3];
    }
    /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */ index(e) {
        return this.path[this.resolveDepth(e) * 3 + 1];
    }
    /**
  The index pointing after this position into the ancestor at the
  given level.
  */ indexAfter(e) {
        return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
    }
    /**
  The (absolute) position at the start of the node at the given
  level.
  */ start(e) {
        return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
    }
    /**
  The (absolute) position at the end of the node at the given
  level.
  */ end(e) {
        return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
    }
    /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */ before(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position before the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
    }
    /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */ after(e) {
        if (e = this.resolveDepth(e), !e) throw new RangeError("There is no position after the top-level node");
        return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
    }
    /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */ get textOffset() {
        return this.pos - this.path[this.path.length - 1];
    }
    /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */ get nodeAfter() {
        let e = this.parent, t = this.index(this.depth);
        if (t == e.childCount) return null;
        let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
        return r ? e.child(t).cut(r) : i;
    }
    /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */ get nodeBefore() {
        let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
        return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
    }
    /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */ posAtIndex(e, t) {
        t = this.resolveDepth(t);
        let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
        for(let o = 0; o < e; o++)i += r.child(o).nodeSize;
        return i;
    }
    /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */ marks() {
        let e = this.parent, t = this.index();
        if (e.content.size == 0) return _.none;
        if (this.textOffset) return e.child(t).marks;
        let r = e.maybeChild(t - 1), i = e.maybeChild(t);
        if (!r) {
            let l = r;
            r = i, i = l;
        }
        let o = r.marks;
        for(var s = 0; s < o.length; s++)o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
        return o;
    }
    /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */ marksAcross(e) {
        let t = this.parent.maybeChild(this.index());
        if (!t || !t.isInline) return null;
        let r = t.marks, i = e.parent.maybeChild(e.index());
        for(var o = 0; o < r.length; o++)r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
        return r;
    }
    /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */ sharedDepth(e) {
        for(let t = this.depth; t > 0; t--)if (this.start(t) <= e && this.end(t) >= e) return t;
        return 0;
    }
    /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */ blockRange(e = this, t) {
        if (e.pos < this.pos) return e.blockRange(this);
        for(let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)if (e.pos <= this.end(r) && (!t || t(this.node(r)))) return new ei(this, e, r);
        return null;
    }
    /**
  Query whether the given position shares the same parent node.
  */ sameParent(e) {
        return this.pos - this.parentOffset == e.pos - e.parentOffset;
    }
    /**
  Return the greater of this and the given position.
  */ max(e) {
        return e.pos > this.pos ? e : this;
    }
    /**
  Return the smaller of this and the given position.
  */ min(e) {
        return e.pos < this.pos ? e : this;
    }
    /**
  @internal
  */ toString() {
        let e = "";
        for(let t = 1; t <= this.depth; t++)e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
        return e + ":" + this.parentOffset;
    }
    /**
  @internal
  */ static resolve(e, t) {
        if (!(t >= 0 && t <= e.content.size)) throw new RangeError("Position " + t + " out of range");
        let r = [], i = 0, o = t;
        for(let s = e;;){
            let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
            if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText)) break;
            o = c - 1, i += a + 1;
        }
        return new Zn(t, r, o);
    }
    /**
  @internal
  */ static resolveCached(e, t) {
        let r = aa.get(e);
        if (r) for(let o = 0; o < r.elts.length; o++){
            let s = r.elts[o];
            if (s.pos == t) return s;
        }
        else aa.set(e, r = new Gp());
        let i = r.elts[r.i] = Zn.resolve(e, t);
        return r.i = (r.i + 1) % Yp, i;
    }
}
class Gp {
    constructor(){
        this.elts = [], this.i = 0;
    }
}
const Yp = 12, aa = /* @__PURE__ */ new WeakMap();
class ei {
    /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */ constructor(e, t, r){
        this.$from = e, this.$to = t, this.depth = r;
    }
    /**
  The position at the start of the range.
  */ get start() {
        return this.$from.before(this.depth + 1);
    }
    /**
  The position at the end of the range.
  */ get end() {
        return this.$to.after(this.depth + 1);
    }
    /**
  The parent node that the range points into.
  */ get parent() {
        return this.$from.node(this.depth);
    }
    /**
  The start index of the range in the parent node.
  */ get startIndex() {
        return this.$from.index(this.depth);
    }
    /**
  The end index of the range in the parent node.
  */ get endIndex() {
        return this.$to.indexAfter(this.depth);
    }
}
const Xp = /* @__PURE__ */ Object.create(null);
class _e {
    /**
  @internal
  */ constructor(e, t, r, i = _.none){
        this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty;
    }
    /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */ get nodeSize() {
        return this.isLeaf ? 1 : 2 + this.content.size;
    }
    /**
  The number of children that the node has.
  */ get childCount() {
        return this.content.childCount;
    }
    /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */ child(e) {
        return this.content.child(e);
    }
    /**
  Get the child node at the given index, if it exists.
  */ maybeChild(e) {
        return this.content.maybeChild(e);
    }
    /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */ forEach(e) {
        this.content.forEach(e);
    }
    /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */ nodesBetween(e, t, r, i = 0) {
        this.content.nodesBetween(e, t, r, i, this);
    }
    /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */ descendants(e) {
        this.nodesBetween(0, this.content.size, e);
    }
    /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */ get textContent() {
        return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
    }
    /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */ textBetween(e, t, r, i) {
        return this.content.textBetween(e, t, r, i);
    }
    /**
  Returns this node's first child, or `null` if there are no
  children.
  */ get firstChild() {
        return this.content.firstChild;
    }
    /**
  Returns this node's last child, or `null` if there are no
  children.
  */ get lastChild() {
        return this.content.lastChild;
    }
    /**
  Test whether two nodes represent the same piece of document.
  */ eq(e) {
        return this == e || this.sameMarkup(e) && this.content.eq(e.content);
    }
    /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */ sameMarkup(e) {
        return this.hasMarkup(e.type, e.attrs, e.marks);
    }
    /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */ hasMarkup(e, t, r) {
        return this.type == e && Xr(this.attrs, t || e.defaultAttrs || Xp) && _.sameSet(this.marks, r || _.none);
    }
    /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */ copy(e = null) {
        return e == this.content ? this : new _e(this.type, this.attrs, e, this.marks);
    }
    /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */ mark(e) {
        return e == this.marks ? this : new _e(this.type, this.attrs, this.content, e);
    }
    /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */ cut(e, t = this.content.size) {
        return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
    }
    /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */ slice(e, t = this.content.size, r = !1) {
        if (e == t) return w.empty;
        let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
        return new w(c, i.depth - s, o.depth - s);
    }
    /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */ replace(e, t, r) {
        return Jp(this.resolve(e), this.resolve(t), r);
    }
    /**
  Find the node directly after the given position.
  */ nodeAt(e) {
        for(let t = this;;){
            let { index: r, offset: i } = t.content.findIndex(e);
            if (t = t.maybeChild(r), !t) return null;
            if (i == e || t.isText) return t;
            e -= i + 1;
        }
    }
    /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */ childAfter(e) {
        let { index: t, offset: r } = this.content.findIndex(e);
        return {
            node: this.content.maybeChild(t),
            index: t,
            offset: r
        };
    }
    /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */ childBefore(e) {
        if (e == 0) return {
            node: null,
            index: 0,
            offset: 0
        };
        let { index: t, offset: r } = this.content.findIndex(e);
        if (r < e) return {
            node: this.content.child(t),
            index: t,
            offset: r
        };
        let i = this.content.child(t - 1);
        return {
            node: i,
            index: t - 1,
            offset: r - i.nodeSize
        };
    }
    /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */ resolve(e) {
        return Zn.resolveCached(this, e);
    }
    /**
  @internal
  */ resolveNoCache(e) {
        return Zn.resolve(this, e);
    }
    /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */ rangeHasMark(e, t, r) {
        let i = !1;
        return t > e && this.nodesBetween(e, t, (o)=>(r.isInSet(o.marks) && (i = !0), !i)), i;
    }
    /**
  True when this is a block (non-inline node)
  */ get isBlock() {
        return this.type.isBlock;
    }
    /**
  True when this is a textblock node, a block node with inline
  content.
  */ get isTextblock() {
        return this.type.isTextblock;
    }
    /**
  True when this node allows inline content.
  */ get inlineContent() {
        return this.type.inlineContent;
    }
    /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */ get isInline() {
        return this.type.isInline;
    }
    /**
  True when this is a text node.
  */ get isText() {
        return this.type.isText;
    }
    /**
  True when this is a leaf node.
  */ get isLeaf() {
        return this.type.isLeaf;
    }
    /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */ get isAtom() {
        return this.type.isAtom;
    }
    /**
  Return a string representation of this node for debugging
  purposes.
  */ toString() {
        if (this.type.spec.toDebugString) return this.type.spec.toDebugString(this);
        let e = this.type.name;
        return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Mu(this.marks, e);
    }
    /**
  Get the content match in this node at the given index.
  */ contentMatchAt(e) {
        let t = this.type.contentMatch.matchFragment(this.content, 0, e);
        if (!t) throw new Error("Called contentMatchAt on a node with invalid content");
        return t;
    }
    /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */ canReplace(e, t, r = b.empty, i = 0, o = r.childCount) {
        let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
        if (!l || !l.validEnd) return !1;
        for(let a = i; a < o; a++)if (!this.type.allowsMarks(r.child(a).marks)) return !1;
        return !0;
    }
    /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */ canReplaceWith(e, t, r, i) {
        if (i && !this.type.allowsMarks(i)) return !1;
        let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
        return s ? s.validEnd : !1;
    }
    /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */ canAppend(e) {
        return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
    }
    /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */ check() {
        this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
        let e = _.none;
        for(let t = 0; t < this.marks.length; t++){
            let r = this.marks[t];
            r.type.checkAttrs(r.attrs), e = r.addToSet(e);
        }
        if (!_.sameSet(e, this.marks)) throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t)=>t.type.name)}`);
        this.content.forEach((t)=>t.check());
    }
    /**
  Return a JSON-serializeable representation of this node.
  */ toJSON() {
        let e = {
            type: this.type.name
        };
        for(let t in this.attrs){
            e.attrs = this.attrs;
            break;
        }
        return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t)=>t.toJSON())), e;
    }
    /**
  Deserialize a node from its JSON representation.
  */ static fromJSON(e, t) {
        if (!t) throw new RangeError("Invalid input for Node.fromJSON");
        let r;
        if (t.marks) {
            if (!Array.isArray(t.marks)) throw new RangeError("Invalid mark data for Node.fromJSON");
            r = t.marks.map(e.markFromJSON);
        }
        if (t.type == "text") {
            if (typeof t.text != "string") throw new RangeError("Invalid text node in JSON");
            return e.text(t.text, r);
        }
        let i = b.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
        return o.type.checkAttrs(o.attrs), o;
    }
}
_e.prototype.text = void 0;
class ti extends _e {
    /**
  @internal
  */ constructor(e, t, r, i){
        if (super(e, t, null, i), !r) throw new RangeError("Empty text nodes are not allowed");
        this.text = r;
    }
    toString() {
        return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Mu(this.marks, JSON.stringify(this.text));
    }
    get textContent() {
        return this.text;
    }
    textBetween(e, t) {
        return this.text.slice(e, t);
    }
    get nodeSize() {
        return this.text.length;
    }
    mark(e) {
        return e == this.marks ? this : new ti(this.type, this.attrs, this.text, e);
    }
    withText(e) {
        return e == this.text ? this : new ti(this.type, this.attrs, e, this.marks);
    }
    cut(e = 0, t = this.text.length) {
        return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
    }
    eq(e) {
        return this.sameMarkup(e) && this.text == e.text;
    }
    toJSON() {
        let e = super.toJSON();
        return e.text = this.text, e;
    }
}
function Mu(n, e) {
    for(let t = n.length - 1; t >= 0; t--)e = n[t].type.name + "(" + e + ")";
    return e;
}
class Ht {
    /**
  @internal
  */ constructor(e){
        this.validEnd = e, this.next = [], this.wrapCache = [];
    }
    /**
  @internal
  */ static parse(e, t) {
        let r = new Qp(e, t);
        if (r.next == null) return Ht.empty;
        let i = Nu(r);
        r.next && r.err("Unexpected trailing text");
        let o = om(im(i));
        return sm(o, r), o;
    }
    /**
  Match a node type, returning a match after that node if
  successful.
  */ matchType(e) {
        for(let t = 0; t < this.next.length; t++)if (this.next[t].type == e) return this.next[t].next;
        return null;
    }
    /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */ matchFragment(e, t = 0, r = e.childCount) {
        let i = this;
        for(let o = t; i && o < r; o++)i = i.matchType(e.child(o).type);
        return i;
    }
    /**
  @internal
  */ get inlineContent() {
        return this.next.length != 0 && this.next[0].type.isInline;
    }
    /**
  Get the first matching node type at this match position that can
  be generated.
  */ get defaultType() {
        for(let e = 0; e < this.next.length; e++){
            let { type: t } = this.next[e];
            if (!(t.isText || t.hasRequiredAttrs())) return t;
        }
        return null;
    }
    /**
  @internal
  */ compatible(e) {
        for(let t = 0; t < this.next.length; t++)for(let r = 0; r < e.next.length; r++)if (this.next[t].type == e.next[r].type) return !0;
        return !1;
    }
    /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */ fillBefore(e, t = !1, r = 0) {
        let i = [
            this
        ];
        function o(s, l) {
            let a = s.matchFragment(e, r);
            if (a && (!t || a.validEnd)) return b.from(l.map((c)=>c.createAndFill()));
            for(let c = 0; c < s.next.length; c++){
                let { type: f, next: u } = s.next[c];
                if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(u) == -1) {
                    i.push(u);
                    let h = o(u, l.concat(f));
                    if (h) return h;
                }
            }
            return null;
        }
        return o(this, []);
    }
    /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */ findWrapping(e) {
        for(let r = 0; r < this.wrapCache.length; r += 2)if (this.wrapCache[r] == e) return this.wrapCache[r + 1];
        let t = this.computeWrapping(e);
        return this.wrapCache.push(e, t), t;
    }
    /**
  @internal
  */ computeWrapping(e) {
        let t = /* @__PURE__ */ Object.create(null), r = [
            {
                match: this,
                type: null,
                via: null
            }
        ];
        for(; r.length;){
            let i = r.shift(), o = i.match;
            if (o.matchType(e)) {
                let s = [];
                for(let l = i; l.type; l = l.via)s.push(l.type);
                return s.reverse();
            }
            for(let s = 0; s < o.next.length; s++){
                let { type: l, next: a } = o.next[s];
                !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({
                    match: l.contentMatch,
                    type: l,
                    via: i
                }), t[l.name] = !0);
            }
        }
        return null;
    }
    /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */ get edgeCount() {
        return this.next.length;
    }
    /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */ edge(e) {
        if (e >= this.next.length) throw new RangeError(`There's no ${e}th edge in this content match`);
        return this.next[e];
    }
    /**
  @internal
  */ toString() {
        let e = [];
        function t(r) {
            e.push(r);
            for(let i = 0; i < r.next.length; i++)e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
        }
        return t(this), e.map((r, i)=>{
            let o = i + (r.validEnd ? "*" : " ") + " ";
            for(let s = 0; s < r.next.length; s++)o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
            return o;
        }).join(`
`);
    }
}
Ht.empty = new Ht(!0);
class Qp {
    constructor(e, t){
        this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
    }
    get next() {
        return this.tokens[this.pos];
    }
    eat(e) {
        return this.next == e && (this.pos++ || !0);
    }
    err(e) {
        throw new SyntaxError(e + " (in content expression '" + this.string + "')");
    }
}
function Nu(n) {
    let e = [];
    do e.push(Zp(n));
    while (n.eat("|"))
    return e.length == 1 ? e[0] : {
        type: "choice",
        exprs: e
    };
}
function Zp(n) {
    let e = [];
    do e.push(em(n));
    while (n.next && n.next != ")" && n.next != "|")
    return e.length == 1 ? e[0] : {
        type: "seq",
        exprs: e
    };
}
function em(n) {
    let e = rm(n);
    for(;;)if (n.eat("+")) e = {
        type: "plus",
        expr: e
    };
    else if (n.eat("*")) e = {
        type: "star",
        expr: e
    };
    else if (n.eat("?")) e = {
        type: "opt",
        expr: e
    };
    else if (n.eat("{")) e = tm(n, e);
    else break;
    return e;
}
function ca(n) {
    /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
    let e = Number(n.next);
    return n.pos++, e;
}
function tm(n, e) {
    let t = ca(n), r = t;
    return n.eat(",") && (n.next != "}" ? r = ca(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), {
        type: "range",
        min: t,
        max: r,
        expr: e
    };
}
function nm(n, e) {
    let t = n.nodeTypes, r = t[e];
    if (r) return [
        r
    ];
    let i = [];
    for(let o in t){
        let s = t[o];
        s.groups.indexOf(e) > -1 && i.push(s);
    }
    return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function rm(n) {
    if (n.eat("(")) {
        let e = Nu(n);
        return n.eat(")") || n.err("Missing closing paren"), e;
    } else if (/\W/.test(n.next)) n.err("Unexpected token '" + n.next + "'");
    else {
        let e = nm(n, n.next).map((t)=>(n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), {
                type: "name",
                value: t
            }));
        return n.pos++, e.length == 1 ? e[0] : {
            type: "choice",
            exprs: e
        };
    }
}
function im(n) {
    let e = [
        []
    ];
    return i(o(n, 0), t()), e;
    //TURBOPACK unreachable
    ;
    function t() {
        return e.push([]) - 1;
    }
    function r(s, l, a) {
        let c = {
            term: a,
            to: l
        };
        return e[s].push(c), c;
    }
    function i(s, l) {
        s.forEach((a)=>a.to = l);
    }
    function o(s, l) {
        if (s.type == "choice") return s.exprs.reduce((a, c)=>a.concat(o(c, l)), []);
        if (s.type == "seq") for(let a = 0;; a++){
            let c = o(s.exprs[a], l);
            if (a == s.exprs.length - 1) return c;
            i(c, l = t());
        }
        else if (s.type == "star") {
            let a = t();
            return r(l, a), i(o(s.expr, a), a), [
                r(a)
            ];
        } else if (s.type == "plus") {
            let a = t();
            return i(o(s.expr, l), a), i(o(s.expr, a), a), [
                r(a)
            ];
        } else {
            if (s.type == "opt") return [
                r(l)
            ].concat(o(s.expr, l));
            if (s.type == "range") {
                let a = l;
                for(let c = 0; c < s.min; c++){
                    let f = t();
                    i(o(s.expr, a), f), a = f;
                }
                if (s.max == -1) i(o(s.expr, a), a);
                else for(let c = s.min; c < s.max; c++){
                    let f = t();
                    r(a, f), i(o(s.expr, a), f), a = f;
                }
                return [
                    r(a)
                ];
            } else {
                if (s.type == "name") return [
                    r(l, void 0, s.value)
                ];
                throw new Error("Unknown expr type");
            }
        }
    }
}
function Ru(n, e) {
    return e - n;
}
function fa(n, e) {
    let t = [];
    return r(e), t.sort(Ru);
    //TURBOPACK unreachable
    ;
    function r(i) {
        let o = n[i];
        if (o.length == 1 && !o[0].term) return r(o[0].to);
        t.push(i);
        for(let s = 0; s < o.length; s++){
            let { term: l, to: a } = o[s];
            !l && t.indexOf(a) == -1 && r(a);
        }
    }
}
function om(n) {
    let e = /* @__PURE__ */ Object.create(null);
    return t(fa(n, 0));
    //TURBOPACK unreachable
    ;
    function t(r) {
        let i = [];
        r.forEach((s)=>{
            n[s].forEach(({ term: l, to: a })=>{
                if (!l) return;
                let c;
                for(let f = 0; f < i.length; f++)i[f][0] == l && (c = i[f][1]);
                fa(n, a).forEach((f)=>{
                    c || i.push([
                        l,
                        c = []
                    ]), c.indexOf(f) == -1 && c.push(f);
                });
            });
        });
        let o = e[r.join(",")] = new Ht(r.indexOf(n.length - 1) > -1);
        for(let s = 0; s < i.length; s++){
            let l = i[s][1].sort(Ru);
            o.next.push({
                type: i[s][0],
                next: e[l.join(",")] || t(l)
            });
        }
        return o;
    }
}
function sm(n, e) {
    for(let t = 0, r = [
        n
    ]; t < r.length; t++){
        let i = r[t], o = !i.validEnd, s = [];
        for(let l = 0; l < i.next.length; l++){
            let { type: a, next: c } = i.next[l];
            s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
        }
        o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
    }
}
function Iu(n) {
    let e = /* @__PURE__ */ Object.create(null);
    for(let t in n){
        let r = n[t];
        if (!r.hasDefault) return null;
        e[t] = r.default;
    }
    return e;
}
function Du(n, e) {
    let t = /* @__PURE__ */ Object.create(null);
    for(let r in n){
        let i = e && e[r];
        if (i === void 0) {
            let o = n[r];
            if (o.hasDefault) i = o.default;
            else throw new RangeError("No value supplied for attribute " + r);
        }
        t[r] = i;
    }
    return t;
}
function Pu(n, e, t, r) {
    for(let i in e)if (!(i in n)) throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
    for(let i in n){
        let o = n[i];
        o.validate && o.validate(e[i]);
    }
}
function $u(n, e) {
    let t = /* @__PURE__ */ Object.create(null);
    if (e) for(let r in e)t[r] = new am(n, r, e[r]);
    return t;
}
let ua = class Bu {
    /**
  @internal
  */ constructor(e, t, r){
        this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = $u(e, r.attrs), this.defaultAttrs = Iu(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
    }
    /**
  True if this is an inline type.
  */ get isInline() {
        return !this.isBlock;
    }
    /**
  True if this is a textblock type, a block that contains inline
  content.
  */ get isTextblock() {
        return this.isBlock && this.inlineContent;
    }
    /**
  True for node types that allow no content.
  */ get isLeaf() {
        return this.contentMatch == Ht.empty;
    }
    /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */ get isAtom() {
        return this.isLeaf || !!this.spec.atom;
    }
    /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */ get whitespace() {
        return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
    }
    /**
  Tells you whether this node type has any required attributes.
  */ hasRequiredAttrs() {
        for(let e in this.attrs)if (this.attrs[e].isRequired) return !0;
        return !1;
    }
    /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */ compatibleContent(e) {
        return this == e || this.contentMatch.compatible(e.contentMatch);
    }
    /**
  @internal
  */ computeAttrs(e) {
        return !e && this.defaultAttrs ? this.defaultAttrs : Du(this.attrs, e);
    }
    /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */ create(e = null, t, r) {
        if (this.isText) throw new Error("NodeType.create can't construct text nodes");
        return new _e(this, this.computeAttrs(e), b.from(t), _.setFrom(r));
    }
    /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */ createChecked(e = null, t, r) {
        return t = b.from(t), this.checkContent(t), new _e(this, this.computeAttrs(e), t, _.setFrom(r));
    }
    /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */ createAndFill(e = null, t, r) {
        if (e = this.computeAttrs(e), t = b.from(t), t.size) {
            let s = this.contentMatch.fillBefore(t);
            if (!s) return null;
            t = s.append(t);
        }
        let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(b.empty, !0);
        return o ? new _e(this, e, t.append(o), _.setFrom(r)) : null;
    }
    /**
  Returns true if the given fragment is valid content for this node
  type.
  */ validContent(e) {
        let t = this.contentMatch.matchFragment(e);
        if (!t || !t.validEnd) return !1;
        for(let r = 0; r < e.childCount; r++)if (!this.allowsMarks(e.child(r).marks)) return !1;
        return !0;
    }
    /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */ checkContent(e) {
        if (!this.validContent(e)) throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
    }
    /**
  @internal
  */ checkAttrs(e) {
        Pu(this.attrs, e, "node", this.name);
    }
    /**
  Check whether the given mark type is allowed in this node.
  */ allowsMarkType(e) {
        return this.markSet == null || this.markSet.indexOf(e) > -1;
    }
    /**
  Test whether the given set of marks are allowed in this node.
  */ allowsMarks(e) {
        if (this.markSet == null) return !0;
        for(let t = 0; t < e.length; t++)if (!this.allowsMarkType(e[t].type)) return !1;
        return !0;
    }
    /**
  Removes the marks that are not allowed in this node from the given set.
  */ allowedMarks(e) {
        if (this.markSet == null) return e;
        let t;
        for(let r = 0; r < e.length; r++)this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
        return t ? t.length ? t : _.none : e;
    }
    /**
  @internal
  */ static compile(e, t) {
        let r = /* @__PURE__ */ Object.create(null);
        e.forEach((o, s)=>r[o] = new Bu(o, t, s));
        let i = t.spec.topNode || "doc";
        if (!r[i]) throw new RangeError("Schema is missing its top node type ('" + i + "')");
        if (!r.text) throw new RangeError("Every schema needs a 'text' type");
        for(let o in r.text.attrs)throw new RangeError("The text node type should not have attributes");
        return r;
    }
};
function lm(n, e, t) {
    let r = t.split("|");
    return (i)=>{
        let o = i === null ? "null" : typeof i;
        if (r.indexOf(o) < 0) throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
    };
}
class am {
    constructor(e, t, r){
        this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? lm(e, t, r.validate) : r.validate;
    }
    get isRequired() {
        return !this.hasDefault;
    }
}
class to {
    /**
  @internal
  */ constructor(e, t, r, i){
        this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = $u(e, i.attrs), this.excluded = null;
        let o = Iu(this.attrs);
        this.instance = o ? new _(this, o) : null;
    }
    /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */ create(e = null) {
        return !e && this.instance ? this.instance : new _(this, Du(this.attrs, e));
    }
    /**
  @internal
  */ static compile(e, t) {
        let r = /* @__PURE__ */ Object.create(null), i = 0;
        return e.forEach((o, s)=>r[o] = new to(o, i++, t, s)), r;
    }
    /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */ removeFromSet(e) {
        for(var t = 0; t < e.length; t++)e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
        return e;
    }
    /**
  Tests whether there is a mark of this type in the given set.
  */ isInSet(e) {
        for(let t = 0; t < e.length; t++)if (e[t].type == this) return e[t];
    }
    /**
  @internal
  */ checkAttrs(e) {
        Pu(this.attrs, e, "mark", this.name);
    }
    /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */ excludes(e) {
        return this.excluded.indexOf(e) > -1;
    }
}
class oE {
    /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */ constructor(e){
        this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
        let t = this.spec = {};
        for(let i in e)t[i] = e[i];
        t.nodes = re.from(e.nodes), t.marks = re.from(e.marks || {}), this.nodes = ua.compile(this.spec.nodes, this), this.marks = to.compile(this.spec.marks, this);
        let r = /* @__PURE__ */ Object.create(null);
        for(let i in this.nodes){
            if (i in this.marks) throw new RangeError(i + " can not be both a node and a mark");
            let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
            if (o.contentMatch = r[s] || (r[s] = Ht.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
                if (this.linebreakReplacement) throw new RangeError("Multiple linebreak nodes defined");
                if (!o.isInline || !o.isLeaf) throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
                this.linebreakReplacement = o;
            }
            o.markSet = l == "_" ? null : l ? ha(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
        }
        for(let i in this.marks){
            let o = this.marks[i], s = o.spec.excludes;
            o.excluded = s == null ? [
                o
            ] : s == "" ? [] : ha(this, s.split(" "));
        }
        this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
    }
    /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */ node(e, t = null, r, i) {
        if (typeof e == "string") e = this.nodeType(e);
        else if (e instanceof ua) {
            if (e.schema != this) throw new RangeError("Node type from different schema used (" + e.name + ")");
        } else throw new RangeError("Invalid node type: " + e);
        return e.createChecked(t, r, i);
    }
    /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */ text(e, t) {
        let r = this.nodes.text;
        return new ti(r, r.defaultAttrs, e, _.setFrom(t));
    }
    /**
  Create a mark with the given type and attributes.
  */ mark(e, t) {
        return typeof e == "string" && (e = this.marks[e]), e.create(t);
    }
    /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */ nodeFromJSON(e) {
        return _e.fromJSON(this, e);
    }
    /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */ markFromJSON(e) {
        return _.fromJSON(this, e);
    }
    /**
  @internal
  */ nodeType(e) {
        let t = this.nodes[e];
        if (!t) throw new RangeError("Unknown node type: " + e);
        return t;
    }
}
function ha(n, e) {
    let t = [];
    for(let r = 0; r < e.length; r++){
        let i = e[r], o = n.marks[i], s = o;
        if (o) t.push(o);
        else for(let l in n.marks){
            let a = n.marks[l];
            (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
        }
        if (!s) throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
    }
    return t;
}
function cm(n) {
    return n.tag != null;
}
function fm(n) {
    return n.style != null;
}
class er {
    /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */ constructor(e, t){
        this.schema = e, this.rules = t, this.tags = [], this.styles = [];
        let r = this.matchedStyles = [];
        t.forEach((i)=>{
            if (cm(i)) this.tags.push(i);
            else if (fm(i)) {
                let o = /[^=]*/.exec(i.style)[0];
                r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
            }
        }), this.normalizeLists = !this.tags.some((i)=>{
            if (!/^(ul|ol)\b/.test(i.tag) || !i.node) return !1;
            let o = e.nodes[i.node];
            return o.contentMatch.matchType(o);
        });
    }
    /**
  Parse a document from the content of a DOM node.
  */ parse(e, t = {}) {
        let r = new pa(this, t, !1);
        return r.addAll(e, _.none, t.from, t.to), r.finish();
    }
    /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */ parseSlice(e, t = {}) {
        let r = new pa(this, t, !0);
        return r.addAll(e, _.none, t.from, t.to), w.maxOpen(r.finish());
    }
    /**
  @internal
  */ matchTag(e, t, r) {
        for(let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++){
            let o = this.tags[i];
            if (dm(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
                if (o.getAttrs) {
                    let s = o.getAttrs(e);
                    if (s === !1) continue;
                    o.attrs = s || void 0;
                }
                return o;
            }
        }
    }
    /**
  @internal
  */ matchStyle(e, t, r, i) {
        for(let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++){
            let s = this.styles[o], l = s.style;
            if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
            // or has an '=' sign after the prop, followed by the given
            // value.
            l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
                if (s.getAttrs) {
                    let a = s.getAttrs(t);
                    if (a === !1) continue;
                    s.attrs = a || void 0;
                }
                return s;
            }
        }
    }
    /**
  @internal
  */ static schemaRules(e) {
        let t = [];
        function r(i) {
            let o = i.priority == null ? 50 : i.priority, s = 0;
            for(; s < t.length; s++){
                let l = t[s];
                if ((l.priority == null ? 50 : l.priority) < o) break;
            }
            t.splice(s, 0, i);
        }
        for(let i in e.marks){
            let o = e.marks[i].spec.parseDOM;
            o && o.forEach((s)=>{
                r(s = ma(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
            });
        }
        for(let i in e.nodes){
            let o = e.nodes[i].spec.parseDOM;
            o && o.forEach((s)=>{
                r(s = ma(s)), s.node || s.ignore || s.mark || (s.node = i);
            });
        }
        return t;
    }
    /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */ static fromSchema(e) {
        return e.cached.domParser || (e.cached.domParser = new er(e, er.schemaRules(e)));
    }
}
const zu = {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    canvas: !0,
    dd: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    figcaption: !0,
    figure: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    li: !0,
    noscript: !0,
    ol: !0,
    output: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    tfoot: !0,
    ul: !0
}, um = {
    head: !0,
    noscript: !0,
    object: !0,
    script: !0,
    style: !0,
    title: !0
}, Lu = {
    ol: !0,
    ul: !0
}, ni = 1, ri = 2, Wn = 4;
function da(n, e, t) {
    return e != null ? (e ? ni : 0) | (e === "full" ? ri : 0) : n && n.whitespace == "pre" ? ni | ri : t & ~Wn;
}
class wr {
    constructor(e, t, r, i, o, s){
        this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = _.none, this.match = o || (s & Wn ? null : e.contentMatch);
    }
    findWrapping(e) {
        if (!this.match) {
            if (!this.type) return [];
            let t = this.type.contentMatch.fillBefore(b.from(e));
            if (t) this.match = this.type.contentMatch.matchFragment(t);
            else {
                let r = this.type.contentMatch, i;
                return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
            }
        }
        return this.match.findWrapping(e.type);
    }
    finish(e) {
        if (!(this.options & ni)) {
            let r = this.content[this.content.length - 1], i;
            if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
                let o = r;
                r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
            }
        }
        let t = b.from(this.content);
        return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
    }
    inlineContext(e) {
        return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !zu.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
    }
}
class pa {
    constructor(e, t, r){
        this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
        let i = t.topNode, o, s = da(null, t.preserveWhitespace, 0) | (r ? Wn : 0);
        i ? o = new wr(i.type, i.attrs, _.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new wr(null, null, _.none, !0, null, s) : o = new wr(e.schema.topNodeType, null, _.none, !0, null, s), this.nodes = [
            o
        ], this.find = t.findPositions, this.needsBlock = !1;
    }
    get top() {
        return this.nodes[this.open];
    }
    // Add a DOM node to the content. Text is inserted as text node,
    // otherwise, the node is passed to `addElement` or, if it has a
    // `style` attribute, `addElementWithStyles`.
    addDOM(e, t) {
        e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
    }
    addTextNode(e, t) {
        let r = e.nodeValue, i = this.top;
        if (i.options & ri || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
            if (i.options & ni) i.options & ri ? r = r.replace(/\r\n?/g, `
`) : r = r.replace(/\r?\n|\r/g, " ");
            else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
                let o = i.content[i.content.length - 1], s = e.previousSibling;
                (!o || s && s.nodeName == "BR" || o.isText && /[ \t\r\n\u000c]$/.test(o.text)) && (r = r.slice(1));
            }
            r && this.insertNode(this.parser.schema.text(r), t), this.findInText(e);
        } else this.findInside(e);
    }
    // Try to find a handler for the given tag and use that to parse. If
    // none is found, the element's content nodes are added directly.
    addElement(e, t, r) {
        let i = e.nodeName.toLowerCase(), o;
        Lu.hasOwnProperty(i) && this.parser.normalizeLists && hm(e);
        let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (o = this.parser.matchTag(e, this, r));
        if (s ? s.ignore : um.hasOwnProperty(i)) this.findInside(e), this.ignoreFallback(e, t);
        else if (!s || s.skip || s.closeParent) {
            s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
            let l, a = this.top, c = this.needsBlock;
            if (zu.hasOwnProperty(i)) a.content.length && a.content[0].isInline && this.open && (this.open--, a = this.top), l = !0, a.type || (this.needsBlock = !0);
            else if (!e.firstChild) {
                this.leafFallback(e, t);
                return;
            }
            let f = s && s.skip ? t : this.readStyles(e, t);
            f && this.addAll(e, f), l && this.sync(a), this.needsBlock = c;
        } else {
            let l = this.readStyles(e, t);
            l && this.addElementByRule(e, s, l, s.consuming === !1 ? o : void 0);
        }
    }
    // Called for leaf DOM nodes that would otherwise be ignored
    leafFallback(e, t) {
        e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
    }
    // Called for ignored nodes
    ignoreFallback(e, t) {
        e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t);
    }
    // Run any style parser associated with the node's styles. Either
    // return an updated array of marks, or null to indicate some of the
    // styles had a rule with `ignore` set.
    readStyles(e, t) {
        let r = e.style;
        if (r && r.length) for(let i = 0; i < this.parser.matchedStyles.length; i++){
            let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
            if (s) for(let l = void 0;;){
                let a = this.parser.matchStyle(o, s, this, l);
                if (!a) break;
                if (a.ignore) return null;
                if (a.clearMark ? t = t.filter((c)=>!a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1) l = a;
                else break;
            }
        }
        return t;
    }
    // Look up a handler for the given node. If none are found, return
    // false. Otherwise, apply it, use its return value to drive the way
    // the node's content is wrapped, and return true.
    addElementByRule(e, t, r, i) {
        let o, s;
        if (t.node) if (s = this.parser.schema.nodes[t.node], s.isLeaf) this.insertNode(s.create(t.attrs), r) || this.leafFallback(e, r);
        else {
            let a = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
            a && (o = !0, r = a);
        }
        else {
            let a = this.parser.schema.marks[t.mark];
            r = r.concat(a.create(t.attrs));
        }
        let l = this.top;
        if (s && s.isLeaf) this.findInside(e);
        else if (i) this.addElement(e, r, i);
        else if (t.getContent) this.findInside(e), t.getContent(e, this.parser.schema).forEach((a)=>this.insertNode(a, r));
        else {
            let a = e;
            typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r);
        }
        o && this.sync(l) && this.open--;
    }
    // Add all child nodes between `startIndex` and `endIndex` (or the
    // whole node, if not given). If `sync` is passed, use it to
    // synchronize after every block element.
    addAll(e, t, r, i) {
        let o = r || 0;
        for(let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)this.findAtPoint(e, o), this.addDOM(s, t);
        this.findAtPoint(e, o);
    }
    // Try to find a way to fit the given node type into the current
    // context. May add intermediate wrappers and/or leave non-solid
    // nodes that we're in.
    findPlace(e, t) {
        let r, i;
        for(let o = this.open; o >= 0; o--){
            let s = this.nodes[o], l = s.findWrapping(e);
            if (l && (!r || r.length > l.length) && (r = l, i = s, !l.length) || s.solid) break;
        }
        if (!r) return null;
        this.sync(i);
        for(let o = 0; o < r.length; o++)t = this.enterInner(r[o], null, t, !1);
        return t;
    }
    // Try to insert the given node, adjusting the context when needed.
    insertNode(e, t) {
        if (e.isInline && this.needsBlock && !this.top.type) {
            let i = this.textblockFromContext();
            i && (t = this.enterInner(i, null, t));
        }
        let r = this.findPlace(e, t);
        if (r) {
            this.closeExtra();
            let i = this.top;
            i.match && (i.match = i.match.matchType(e.type));
            let o = _.none;
            for (let s of r.concat(e.marks))(i.type ? i.type.allowsMarkType(s.type) : ga(s.type, e.type)) && (o = s.addToSet(o));
            return i.content.push(e.mark(o)), !0;
        }
        return !1;
    }
    // Try to start a node of the given type, adjusting the context when
    // necessary.
    enter(e, t, r, i) {
        let o = this.findPlace(e.create(t), r);
        return o && (o = this.enterInner(e, t, r, !0, i)), o;
    }
    // Open a node of the given type
    enterInner(e, t, r, i = !1, o) {
        this.closeExtra();
        let s = this.top;
        s.match = s.match && s.match.matchType(e);
        let l = da(e, o, s.options);
        s.options & Wn && s.content.length == 0 && (l |= Wn);
        let a = _.none;
        return r = r.filter((c)=>(s.type ? s.type.allowsMarkType(c.type) : ga(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new wr(e, t, a, i, null, l)), this.open++, r;
    }
    // Make sure all nodes above this.open are finished and added to
    // their parents
    closeExtra(e = !1) {
        let t = this.nodes.length - 1;
        if (t > this.open) {
            for(; t > this.open; t--)this.nodes[t - 1].content.push(this.nodes[t].finish(e));
            this.nodes.length = this.open + 1;
        }
    }
    finish() {
        return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
    }
    sync(e) {
        for(let t = this.open; t >= 0; t--)if (this.nodes[t] == e) return this.open = t, !0;
        return !1;
    }
    get currentPos() {
        this.closeExtra();
        let e = 0;
        for(let t = this.open; t >= 0; t--){
            let r = this.nodes[t].content;
            for(let i = r.length - 1; i >= 0; i--)e += r[i].nodeSize;
            t && e++;
        }
        return e;
    }
    findAtPoint(e, t) {
        if (this.find) for(let r = 0; r < this.find.length; r++)this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
    }
    findInside(e) {
        if (this.find) for(let t = 0; t < this.find.length; t++)this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
    }
    findAround(e, t, r) {
        if (e != t && this.find) for(let i = 0; i < this.find.length; i++)this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
    }
    findInText(e) {
        if (this.find) for(let t = 0; t < this.find.length; t++)this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
    }
    // Determines whether the given context string matches this context.
    matchesContext(e) {
        if (e.indexOf("|") > -1) return e.split(/\s*\|\s*/).some(this.matchesContext, this);
        let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a)=>{
            for(; l >= 0; l--){
                let c = t[l];
                if (c == "") {
                    if (l == t.length - 1 || l == 0) continue;
                    for(; a >= o; a--)if (s(l - 1, a)) return !0;
                    return !1;
                } else {
                    let f = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
                    if (!f || f.name != c && f.groups.indexOf(c) == -1) return !1;
                    a--;
                }
            }
            return !0;
        };
        return s(t.length - 1, this.open);
    }
    textblockFromContext() {
        let e = this.options.context;
        if (e) for(let t = e.depth; t >= 0; t--){
            let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
            if (r && r.isTextblock && r.defaultAttrs) return r;
        }
        for(let t in this.parser.schema.nodes){
            let r = this.parser.schema.nodes[t];
            if (r.isTextblock && r.defaultAttrs) return r;
        }
    }
}
function hm(n) {
    for(let e = n.firstChild, t = null; e; e = e.nextSibling){
        let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
        r && Lu.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
    }
}
function dm(n, e) {
    return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function ma(n) {
    let e = {};
    for(let t in n)e[t] = n[t];
    return e;
}
function ga(n, e) {
    let t = e.schema.nodes;
    for(let r in t){
        let i = t[r];
        if (!i.allowsMarkType(n)) continue;
        let o = [], s = (l)=>{
            o.push(l);
            for(let a = 0; a < l.edgeCount; a++){
                let { type: c, next: f } = l.edge(a);
                if (c == e || o.indexOf(f) < 0 && s(f)) return !0;
            }
        };
        if (s(i.contentMatch)) return !0;
    }
}
class On {
    /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */ constructor(e, t){
        this.nodes = e, this.marks = t;
    }
    /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */ serializeFragment(e, t = {}, r) {
        r || (r = vo(t).createDocumentFragment());
        let i = r, o = [];
        return e.forEach((s)=>{
            if (o.length || s.marks.length) {
                let l = 0, a = 0;
                for(; l < o.length && a < s.marks.length;){
                    let c = s.marks[a];
                    if (!this.marks[c.type.name]) {
                        a++;
                        continue;
                    }
                    if (!c.eq(o[l][0]) || c.type.spec.spanning === !1) break;
                    l++, a++;
                }
                for(; l < o.length;)i = o.pop()[1];
                for(; a < s.marks.length;){
                    let c = s.marks[a++], f = this.serializeMark(c, s.isInline, t);
                    f && (o.push([
                        c,
                        i
                    ]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
                }
            }
            i.appendChild(this.serializeNodeInner(s, t));
        }), r;
    }
    /**
  @internal
  */ serializeNodeInner(e, t) {
        let { dom: r, contentDOM: i } = $r(vo(t), this.nodes[e.type.name](e), null, e.attrs);
        if (i) {
            if (e.isLeaf) throw new RangeError("Content hole not allowed in a leaf node spec");
            this.serializeFragment(e.content, t, i);
        }
        return r;
    }
    /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */ serializeNode(e, t = {}) {
        let r = this.serializeNodeInner(e, t);
        for(let i = e.marks.length - 1; i >= 0; i--){
            let o = this.serializeMark(e.marks[i], e.isInline, t);
            o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
        }
        return r;
    }
    /**
  @internal
  */ serializeMark(e, t, r = {}) {
        let i = this.marks[e.type.name];
        return i && $r(vo(r), i(e, t), null, e.attrs);
    }
    static renderSpec(e, t, r = null, i) {
        return $r(e, t, r, i);
    }
    /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */ static fromSchema(e) {
        return e.cached.domSerializer || (e.cached.domSerializer = new On(this.nodesFromSchema(e), this.marksFromSchema(e)));
    }
    /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */ static nodesFromSchema(e) {
        let t = ya(e.nodes);
        return t.text || (t.text = (r)=>r.text), t;
    }
    /**
  Gather the serializers in a schema's mark specs into an object.
  */ static marksFromSchema(e) {
        return ya(e.marks);
    }
}
function ya(n) {
    let e = {};
    for(let t in n){
        let r = n[t].spec.toDOM;
        r && (e[t] = r);
    }
    return e;
}
function vo(n) {
    return n.document || window.document;
}
const ba = /* @__PURE__ */ new WeakMap();
function pm(n) {
    let e = ba.get(n);
    return e === void 0 && ba.set(n, e = mm(n)), e;
}
function mm(n) {
    let e = null;
    function t(r) {
        if (r && typeof r == "object") if (Array.isArray(r)) if (typeof r[0] == "string") e || (e = []), e.push(r);
        else for(let i = 0; i < r.length; i++)t(r[i]);
        else for(let i in r)t(r[i]);
    }
    return t(n), e;
}
function $r(n, e, t, r) {
    if (typeof e == "string") return {
        dom: n.createTextNode(e)
    };
    if (e.nodeType != null) return {
        dom: e
    };
    if (e.dom && e.dom.nodeType != null) return e;
    let i = e[0], o;
    if (typeof i != "string") throw new RangeError("Invalid array passed to renderSpec");
    if (r && (o = pm(r)) && o.indexOf(e) > -1) throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
    let s = i.indexOf(" ");
    s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
    let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], f = 1;
    if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
        f = 2;
        for(let u in c)if (c[u] != null) {
            let h = u.indexOf(" ");
            h > 0 ? a.setAttributeNS(u.slice(0, h), u.slice(h + 1), c[u]) : a.setAttribute(u, c[u]);
        }
    }
    for(let u = f; u < e.length; u++){
        let h = e[u];
        if (h === 0) {
            if (u < e.length - 1 || u > f) throw new RangeError("Content hole must be the only child of its parent node");
            return {
                dom: a,
                contentDOM: a
            };
        } else {
            let { dom: p, contentDOM: d } = $r(n, h, t, r);
            if (a.appendChild(p), d) {
                if (l) throw new RangeError("Multiple content holes");
                l = d;
            }
        }
    }
    return {
        dom: a,
        contentDOM: l
    };
}
const Fu = 65535, _u = Math.pow(2, 16);
function gm(n, e) {
    return n + e * _u;
}
function va(n) {
    return n & Fu;
}
function ym(n) {
    return (n - (n & Fu)) / _u;
}
const ju = 1, Vu = 2, Br = 4, Wu = 8;
class hs {
    /**
  @internal
  */ constructor(e, t, r){
        this.pos = e, this.delInfo = t, this.recover = r;
    }
    /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */ get deleted() {
        return (this.delInfo & Wu) > 0;
    }
    /**
  Tells you whether the token before the mapped position was deleted.
  */ get deletedBefore() {
        return (this.delInfo & (ju | Br)) > 0;
    }
    /**
  True when the token after the mapped position was deleted.
  */ get deletedAfter() {
        return (this.delInfo & (Vu | Br)) > 0;
    }
    /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */ get deletedAcross() {
        return (this.delInfo & Br) > 0;
    }
}
class ve {
    /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */ constructor(e, t = !1){
        if (this.ranges = e, this.inverted = t, !e.length && ve.empty) return ve.empty;
    }
    /**
  @internal
  */ recover(e) {
        let t = 0, r = va(e);
        if (!this.inverted) for(let i = 0; i < r; i++)t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
        return this.ranges[r * 3] + t + ym(e);
    }
    mapResult(e, t = 1) {
        return this._map(e, t, !1);
    }
    map(e, t = 1) {
        return this._map(e, t, !0);
    }
    /**
  @internal
  */ _map(e, t, r) {
        let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
        for(let l = 0; l < this.ranges.length; l += 3){
            let a = this.ranges[l] - (this.inverted ? i : 0);
            if (a > e) break;
            let c = this.ranges[l + o], f = this.ranges[l + s], u = a + c;
            if (e <= u) {
                let h = c ? e == a ? -1 : e == u ? 1 : t : t, p = a + i + (h < 0 ? 0 : f);
                if (r) return p;
                let d = e == (t < 0 ? a : u) ? null : gm(l / 3, e - a), m = e == a ? Vu : e == u ? ju : Br;
                return (t < 0 ? e != a : e != u) && (m |= Wu), new hs(p, m, d);
            }
            i += f - c;
        }
        return r ? e + i : new hs(e + i, 0, null);
    }
    /**
  @internal
  */ touches(e, t) {
        let r = 0, i = va(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
        for(let l = 0; l < this.ranges.length; l += 3){
            let a = this.ranges[l] - (this.inverted ? r : 0);
            if (a > e) break;
            let c = this.ranges[l + o], f = a + c;
            if (e <= f && l == i * 3) return !0;
            r += this.ranges[l + s] - c;
        }
        return !1;
    }
    /**
  Calls the given function on each of the changed ranges included in
  this map.
  */ forEach(e) {
        let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
        for(let i = 0, o = 0; i < this.ranges.length; i += 3){
            let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], f = this.ranges[i + r];
            e(l, l + c, a, a + f), o += f - c;
        }
    }
    /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */ invert() {
        return new ve(this.ranges, !this.inverted);
    }
    /**
  @internal
  */ toString() {
        return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
    }
    /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */ static offset(e) {
        return e == 0 ? ve.empty : new ve(e < 0 ? [
            0,
            -e,
            0
        ] : [
            0,
            0,
            e
        ]);
    }
}
ve.empty = new ve([]);
class fn {
    /**
  Create a new mapping with the given position maps.
  */ constructor(e = [], t, r = 0, i = e.length){
        this.maps = e, this.mirror = t, this.from = r, this.to = i;
    }
    /**
  Create a mapping that maps only through a part of this one.
  */ slice(e = 0, t = this.maps.length) {
        return new fn(this.maps, this.mirror, e, t);
    }
    /**
  @internal
  */ copy() {
        return new fn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
    }
    /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */ appendMap(e, t) {
        this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
    }
    /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */ appendMapping(e) {
        for(let t = 0, r = this.maps.length; t < e.maps.length; t++){
            let i = e.getMirror(t);
            this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
        }
    }
    /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */ getMirror(e) {
        if (this.mirror) {
            for(let t = 0; t < this.mirror.length; t++)if (this.mirror[t] == e) return this.mirror[t + (t % 2 ? -1 : 1)];
        }
    }
    /**
  @internal
  */ setMirror(e, t) {
        this.mirror || (this.mirror = []), this.mirror.push(e, t);
    }
    /**
  Append the inverse of the given mapping to this one.
  */ appendMappingInverted(e) {
        for(let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--){
            let i = e.getMirror(t);
            this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
        }
    }
    /**
  Create an inverted version of this mapping.
  */ invert() {
        let e = new fn();
        return e.appendMappingInverted(this), e;
    }
    /**
  Map a position through this mapping.
  */ map(e, t = 1) {
        if (this.mirror) return this._map(e, t, !0);
        for(let r = this.from; r < this.to; r++)e = this.maps[r].map(e, t);
        return e;
    }
    /**
  Map a position through this mapping, returning a mapping
  result.
  */ mapResult(e, t = 1) {
        return this._map(e, t, !1);
    }
    /**
  @internal
  */ _map(e, t, r) {
        let i = 0;
        for(let o = this.from; o < this.to; o++){
            let s = this.maps[o], l = s.mapResult(e, t);
            if (l.recover != null) {
                let a = this.getMirror(o);
                if (a != null && a > o && a < this.to) {
                    o = a, e = this.maps[a].recover(l.recover);
                    continue;
                }
            }
            i |= l.delInfo, e = l.pos;
        }
        return r ? e : new hs(e, i, null);
    }
}
const So = /* @__PURE__ */ Object.create(null);
class he {
    /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */ getMap() {
        return ve.empty;
    }
    /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */ merge(e) {
        return null;
    }
    /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */ static fromJSON(e, t) {
        if (!t || !t.stepType) throw new RangeError("Invalid input for Step.fromJSON");
        let r = So[t.stepType];
        if (!r) throw new RangeError(`No step type ${t.stepType} defined`);
        return r.fromJSON(e, t);
    }
    /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */ static jsonID(e, t) {
        if (e in So) throw new RangeError("Duplicate use of step JSON ID " + e);
        return So[e] = t, t.prototype.jsonID = e, t;
    }
}
class Q {
    /**
  @internal
  */ constructor(e, t){
        this.doc = e, this.failed = t;
    }
    /**
  Create a successful step result.
  */ static ok(e) {
        return new Q(e, null);
    }
    /**
  Create a failed step result.
  */ static fail(e) {
        return new Q(null, e);
    }
    /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */ static fromReplace(e, t, r, i) {
        try {
            return Q.ok(e.replace(t, r, i));
        } catch (o) {
            if (o instanceof Qr) return Q.fail(o.message);
            throw o;
        }
    }
}
function pl(n, e, t) {
    let r = [];
    for(let i = 0; i < n.childCount; i++){
        let o = n.child(i);
        o.content.size && (o = o.copy(pl(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
    }
    return b.fromArray(r);
}
class St extends he {
    /**
  Create a mark step.
  */ constructor(e, t, r){
        super(), this.from = e, this.to = t, this.mark = r;
    }
    apply(e) {
        let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new w(pl(t.content, (s, l)=>!s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
        return Q.fromReplace(e, this.from, this.to, o);
    }
    invert() {
        return new Fe(this.from, this.to, this.mark);
    }
    map(e) {
        let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new St(t.pos, r.pos, this.mark);
    }
    merge(e) {
        return e instanceof St && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new St(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for AddMarkStep.fromJSON");
        return new St(t.from, t.to, e.markFromJSON(t.mark));
    }
}
he.jsonID("addMark", St);
class Fe extends he {
    /**
  Create a mark-removing step.
  */ constructor(e, t, r){
        super(), this.from = e, this.to = t, this.mark = r;
    }
    apply(e) {
        let t = e.slice(this.from, this.to), r = new w(pl(t.content, (i)=>i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
        return Q.fromReplace(e, this.from, this.to, r);
    }
    invert() {
        return new St(this.from, this.to, this.mark);
    }
    map(e) {
        let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
        return t.deleted && r.deleted || t.pos >= r.pos ? null : new Fe(t.pos, r.pos, this.mark);
    }
    merge(e) {
        return e instanceof Fe && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Fe(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
    }
    toJSON() {
        return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
        return new Fe(t.from, t.to, e.markFromJSON(t.mark));
    }
}
he.jsonID("removeMark", Fe);
class wt extends he {
    /**
  Create a node mark step.
  */ constructor(e, t){
        super(), this.pos = e, this.mark = t;
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return Q.fail("No node at mark step's position");
        let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
        return Q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(r), 0, t.isLeaf ? 0 : 1));
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        if (t) {
            let r = this.mark.addToSet(t.marks);
            if (r.length == t.marks.length) {
                for(let i = 0; i < t.marks.length; i++)if (!t.marks[i].isInSet(r)) return new wt(this.pos, t.marks[i]);
                return new wt(this.pos, this.mark);
            }
        }
        return new gn(this.pos, this.mark);
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new wt(t.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "addNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
        return new wt(t.pos, e.markFromJSON(t.mark));
    }
}
he.jsonID("addNodeMark", wt);
class gn extends he {
    /**
  Create a mark-removing step.
  */ constructor(e, t){
        super(), this.pos = e, this.mark = t;
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return Q.fail("No node at mark step's position");
        let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
        return Q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(r), 0, t.isLeaf ? 0 : 1));
    }
    invert(e) {
        let t = e.nodeAt(this.pos);
        return !t || !this.mark.isInSet(t.marks) ? this : new wt(this.pos, this.mark);
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new gn(t.pos, this.mark);
    }
    toJSON() {
        return {
            stepType: "removeNodeMark",
            pos: this.pos,
            mark: this.mark.toJSON()
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
        return new gn(t.pos, e.markFromJSON(t.mark));
    }
}
he.jsonID("removeNodeMark", gn);
class ie extends he {
    /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */ constructor(e, t, r, i = !1){
        super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
    }
    apply(e) {
        return this.structure && ds(e, this.from, this.to) ? Q.fail("Structure replace would overwrite content") : Q.fromReplace(e, this.from, this.to, this.slice);
    }
    getMap() {
        return new ve([
            this.from,
            this.to - this.from,
            this.slice.size
        ]);
    }
    invert(e) {
        return new ie(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
    }
    map(e) {
        let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
        return t.deletedAcross && r.deletedAcross ? null : new ie(t.pos, Math.max(t.pos, r.pos), this.slice);
    }
    merge(e) {
        if (!(e instanceof ie) || e.structure || this.structure) return null;
        if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
            let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
            return new ie(this.from, this.to + (e.to - e.from), t, this.structure);
        } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
            let t = this.slice.size + e.slice.size == 0 ? w.empty : new w(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
            return new ie(e.from, this.to, t, this.structure);
        } else return null;
    }
    toJSON() {
        let e = {
            stepType: "replace",
            from: this.from,
            to: this.to
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number") throw new RangeError("Invalid input for ReplaceStep.fromJSON");
        return new ie(t.from, t.to, w.fromJSON(e, t.slice), !!t.structure);
    }
}
he.jsonID("replace", ie);
class le extends he {
    /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */ constructor(e, t, r, i, o, s, l = !1){
        super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
    }
    apply(e) {
        if (this.structure && (ds(e, this.from, this.gapFrom) || ds(e, this.gapTo, this.to))) return Q.fail("Structure gap-replace would overwrite content");
        let t = e.slice(this.gapFrom, this.gapTo);
        if (t.openStart || t.openEnd) return Q.fail("Gap is not a flat range");
        let r = this.slice.insertAt(this.insert, t.content);
        return r ? Q.fromReplace(e, this.from, this.to, r) : Q.fail("Content does not fit in gap");
    }
    getMap() {
        return new ve([
            this.from,
            this.gapFrom - this.from,
            this.insert,
            this.gapTo,
            this.to - this.gapTo,
            this.slice.size - this.insert
        ]);
    }
    invert(e) {
        let t = this.gapTo - this.gapFrom;
        return new le(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
    }
    map(e) {
        let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
        return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new le(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
    }
    toJSON() {
        let e = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
        };
        return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number") throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
        return new le(t.from, t.to, t.gapFrom, t.gapTo, w.fromJSON(e, t.slice), t.insert, !!t.structure);
    }
}
he.jsonID("replaceAround", le);
function ds(n, e, t) {
    let r = n.resolve(e), i = t - e, o = r.depth;
    for(; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount;)o--, i--;
    if (i > 0) {
        let s = r.node(o).maybeChild(r.indexAfter(o));
        for(; i > 0;){
            if (!s || s.isLeaf) return !0;
            s = s.firstChild, i--;
        }
    }
    return !1;
}
function bm(n, e, t, r) {
    let i = [], o = [], s, l;
    n.doc.nodesBetween(e, t, (a, c, f)=>{
        if (!a.isInline) return;
        let u = a.marks;
        if (!r.isInSet(u) && f.type.allowsMarkType(r.type)) {
            let h = Math.max(c, e), p = Math.min(c + a.nodeSize, t), d = r.addToSet(u);
            for(let m = 0; m < u.length; m++)u[m].isInSet(d) || (s && s.to == h && s.mark.eq(u[m]) ? s.to = p : i.push(s = new Fe(h, p, u[m])));
            l && l.to == h ? l.to = p : o.push(l = new St(h, p, r));
        }
    }), i.forEach((a)=>n.step(a)), o.forEach((a)=>n.step(a));
}
function vm(n, e, t, r) {
    let i = [], o = 0;
    n.doc.nodesBetween(e, t, (s, l)=>{
        if (!s.isInline) return;
        o++;
        let a = null;
        if (r instanceof to) {
            let c = s.marks, f;
            for(; f = r.isInSet(c);)(a || (a = [])).push(f), c = f.removeFromSet(c);
        } else r ? r.isInSet(s.marks) && (a = [
            r
        ]) : a = s.marks;
        if (a && a.length) {
            let c = Math.min(l + s.nodeSize, t);
            for(let f = 0; f < a.length; f++){
                let u = a[f], h;
                for(let p = 0; p < i.length; p++){
                    let d = i[p];
                    d.step == o - 1 && u.eq(i[p].style) && (h = d);
                }
                h ? (h.to = c, h.step = o) : i.push({
                    style: u,
                    from: Math.max(l, e),
                    to: c,
                    step: o
                });
            }
        }
    }), i.forEach((s)=>n.step(new Fe(s.from, s.to, s.style)));
}
function Hu(n, e, t, r = t.contentMatch, i = !0) {
    let o = n.doc.nodeAt(e), s = [], l = e + 1;
    for(let a = 0; a < o.childCount; a++){
        let c = o.child(a), f = l + c.nodeSize, u = r.matchType(c.type);
        if (!u) s.push(new ie(l, f, w.empty));
        else {
            r = u;
            for(let h = 0; h < c.marks.length; h++)t.allowsMarkType(c.marks[h].type) || n.step(new Fe(l, f, c.marks[h]));
            if (i && c.isText && t.whitespace != "pre") {
                let h, p = /\r?\n|\r/g, d;
                for(; h = p.exec(c.text);)d || (d = new w(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new ie(l + h.index, l + h.index + h[0].length, d));
            }
        }
        l = f;
    }
    if (!r.validEnd) {
        let a = r.fillBefore(b.empty, !0);
        n.replace(l, l, new w(a, 0, 0));
    }
    for(let a = s.length - 1; a >= 0; a--)n.step(s[a]);
}
function Sm(n, e, t) {
    return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function dr(n) {
    let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
    for(let r = n.depth;; --r){
        let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
        if (r < n.depth && i.canReplace(o, s, t)) return r;
        if (r == 0 || i.type.spec.isolating || !Sm(i, o, s)) break;
    }
    return null;
}
function wm(n, e, t) {
    let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, f = b.empty, u = 0;
    for(let d = o, m = !1; d > t; d--)m || r.index(d) > 0 ? (m = !0, f = b.from(r.node(d).copy(f)), u++) : a--;
    let h = b.empty, p = 0;
    for(let d = o, m = !1; d > t; d--)m || i.after(d + 1) < i.end(d) ? (m = !0, h = b.from(i.node(d).copy(h)), p++) : c++;
    n.step(new le(a, c, s, l, new w(f.append(h), u, p), f.size - u, !0));
}
function Uu(n, e, t = null, r = n) {
    let i = xm(n, e), o = i && Cm(r, e);
    return o ? i.map(Sa).concat({
        type: e,
        attrs: t
    }).concat(o.map(Sa)) : null;
}
function Sa(n) {
    return {
        type: n,
        attrs: null
    };
}
function xm(n, e) {
    let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
    if (!o) return null;
    let s = o.length ? o[0] : e;
    return t.canReplaceWith(r, i, s) ? o : null;
}
function Cm(n, e) {
    let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
    if (!s) return null;
    let a = (s.length ? s[s.length - 1] : e).contentMatch;
    for(let c = r; a && c < i; c++)a = a.matchType(t.child(c).type);
    return !a || !a.validEnd ? null : s;
}
function Om(n, e, t) {
    let r = b.empty;
    for(let s = t.length - 1; s >= 0; s--){
        if (r.size) {
            let l = t[s].type.contentMatch.matchFragment(r);
            if (!l || !l.validEnd) throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
        }
        r = b.from(t[s].type.create(t[s].attrs, r));
    }
    let i = e.start, o = e.end;
    n.step(new le(i, o, i, o, new w(r, 0, 0), t.length, !0));
}
function km(n, e, t, r, i) {
    if (!r.isTextblock) throw new RangeError("Type given to setBlockType should be a textblock");
    let o = n.steps.length;
    n.doc.nodesBetween(e, t, (s, l)=>{
        let a = typeof i == "function" ? i(s) : i;
        if (s.isTextblock && !s.hasMarkup(r, a) && Tm(n.doc, n.mapping.slice(o).map(l), r)) {
            let c = null;
            if (r.schema.linebreakReplacement) {
                let p = r.whitespace == "pre", d = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
                p && !d ? c = !1 : !p && d && (c = !0);
            }
            c === !1 && Em(n, s, l, o), Hu(n, n.mapping.slice(o).map(l, 1), r, void 0, c === null);
            let f = n.mapping.slice(o), u = f.map(l, 1), h = f.map(l + s.nodeSize, 1);
            return n.step(new le(u, h, u + 1, h - 1, new w(b.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && Am(n, s, l, o), !1;
        }
    });
}
function Am(n, e, t, r) {
    e.forEach((i, o)=>{
        if (i.isText) {
            let s, l = /\r?\n|\r/g;
            for(; s = l.exec(i.text);){
                let a = n.mapping.slice(r).map(t + 1 + o + s.index);
                n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
            }
        }
    });
}
function Em(n, e, t, r) {
    e.forEach((i, o)=>{
        if (i.type == i.type.schema.linebreakReplacement) {
            let s = n.mapping.slice(r).map(t + 1 + o);
            n.replaceWith(s, s + 1, e.type.schema.text(`
`));
        }
    });
}
function Tm(n, e, t) {
    let r = n.resolve(e), i = r.index();
    return r.parent.canReplaceWith(i, i + 1, t);
}
function Mm(n, e, t, r, i) {
    let o = n.doc.nodeAt(e);
    if (!o) throw new RangeError("No node at given position");
    t || (t = o.type);
    let s = t.create(r, null, i || o.marks);
    if (o.isLeaf) return n.replaceWith(e, e + o.nodeSize, s);
    if (!t.validContent(o.content)) throw new RangeError("Invalid content for node type " + t.name);
    n.step(new le(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new w(b.from(s), 0, 0), 1, !0));
}
function Ku(n, e, t = 1, r) {
    let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
    if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount))) return !1;
    for(let c = i.depth - 1, f = t - 2; c > o; c--, f--){
        let u = i.node(c), h = i.index(c);
        if (u.type.spec.isolating) return !1;
        let p = u.content.cutByIndex(h, u.childCount), d = r && r[f + 1];
        d && (p = p.replaceChild(0, d.type.create(d.attrs)));
        let m = r && r[f] || u;
        if (!u.canReplace(h + 1, u.childCount) || !m.type.validContent(p)) return !1;
    }
    let l = i.indexAfter(o), a = r && r[0];
    return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function Nm(n, e, t = 1, r) {
    let i = n.doc.resolve(e), o = b.empty, s = b.empty;
    for(let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--){
        o = b.from(i.node(l).copy(o));
        let f = r && r[c];
        s = b.from(f ? f.type.create(f.attrs, s) : i.node(l).copy(s));
    }
    n.step(new ie(e, e, new w(o.append(s), t, t), !0));
}
function pr(n, e) {
    let t = n.resolve(e), r = t.index();
    return Ju(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Ju(n, e) {
    return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function qu(n, e, t = -1) {
    let r = n.resolve(e);
    for(let i = r.depth;; i--){
        let o, s, l = r.index(i);
        if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && Ju(o, s) && r.node(i).canReplace(l, l + 1)) return e;
        if (i == 0) break;
        e = t < 0 ? r.before(i) : r.after(i);
    }
}
function Rm(n, e, t) {
    let r = new ie(e - t, e + t, w.empty, !0);
    n.step(r);
}
function Im(n, e, t) {
    let r = n.resolve(e);
    if (r.parent.canReplaceWith(r.index(), r.index(), t)) return e;
    if (r.parentOffset == 0) for(let i = r.depth - 1; i >= 0; i--){
        let o = r.index(i);
        if (r.node(i).canReplaceWith(o, o, t)) return r.before(i + 1);
        if (o > 0) return null;
    }
    if (r.parentOffset == r.parent.content.size) for(let i = r.depth - 1; i >= 0; i--){
        let o = r.indexAfter(i);
        if (r.node(i).canReplaceWith(o, o, t)) return r.after(i + 1);
        if (o < r.node(i).childCount) return null;
    }
    return null;
}
function Gu(n, e, t) {
    let r = n.resolve(e);
    if (!t.content.size) return e;
    let i = t.content;
    for(let o = 0; o < t.openStart; o++)i = i.firstChild.content;
    for(let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)for(let s = r.depth; s >= 0; s--){
        let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), f = !1;
        if (o == 1) f = c.canReplace(a, a, i);
        else {
            let u = c.contentMatchAt(a).findWrapping(i.firstChild.type);
            f = u && c.canReplaceWith(a, a, u[0]);
        }
        if (f) return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
    return null;
}
function no(n, e, t = e, r = w.empty) {
    if (e == t && !r.size) return null;
    let i = n.resolve(e), o = n.resolve(t);
    return Yu(i, o, r) ? new ie(e, t, r) : new Dm(i, o, r).fit();
}
function Yu(n, e, t) {
    return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Dm {
    constructor(e, t, r){
        this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
        for(let i = 0; i <= e.depth; i++){
            let o = e.node(i);
            this.frontier.push({
                type: o.type,
                match: o.contentMatchAt(e.indexAfter(i))
            });
        }
        for(let i = e.depth; i > 0; i--)this.placed = b.from(e.node(i).copy(this.placed));
    }
    get depth() {
        return this.frontier.length - 1;
    }
    fit() {
        for(; this.unplaced.size;){
            let c = this.findFittable();
            c ? this.placeNodes(c) : this.openMore() || this.dropNode();
        }
        let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
        if (!i) return null;
        let o = this.placed, s = r.depth, l = i.depth;
        for(; s && l && o.childCount == 1;)o = o.firstChild.content, s--, l--;
        let a = new w(o, s, l);
        return e > -1 ? new le(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ie(r.pos, i.pos, a) : null;
    }
    // Find a position on the start spine of `this.unplaced` that has
    // content that can be moved somewhere on the frontier. Returns two
    // depths, one for the slice and one for the frontier.
    findFittable() {
        let e = this.unplaced.openStart;
        for(let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++){
            let o = t.firstChild;
            if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
                e = r;
                break;
            }
            t = o.content;
        }
        for(let t = 1; t <= 2; t++)for(let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--){
            let i, o = null;
            r ? (o = wo(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
            let s = i.firstChild;
            for(let l = this.depth; l >= 0; l--){
                let { type: a, match: c } = this.frontier[l], f, u = null;
                if (t == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(b.from(s), !1)) : o && a.compatibleContent(o.type))) return {
                    sliceDepth: r,
                    frontierDepth: l,
                    parent: o,
                    inject: u
                };
                if (t == 2 && s && (f = c.findWrapping(s.type))) return {
                    sliceDepth: r,
                    frontierDepth: l,
                    parent: o,
                    wrap: f
                };
                if (o && c.matchType(o.type)) break;
            }
        }
    }
    openMore() {
        let { content: e, openStart: t, openEnd: r } = this.unplaced, i = wo(e, t);
        return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new w(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
    }
    dropNode() {
        let { content: e, openStart: t, openEnd: r } = this.unplaced, i = wo(e, t);
        if (i.childCount <= 1 && t > 0) {
            let o = e.size - t <= t + i.size;
            this.unplaced = new w(Ln(e, t - 1, 1), t - 1, o ? t - 1 : r);
        } else this.unplaced = new w(Ln(e, t, 1), t, r);
    }
    // Move content from the unplaced slice at `sliceDepth` to the
    // frontier node at `frontierDepth`. Close that frontier node when
    // applicable.
    placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
        for(; this.depth > t;)this.closeFrontierNode();
        if (o) for(let m = 0; m < o.length; m++)this.openFrontierNode(o[m]);
        let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, f = [], { match: u, type: h } = this.frontier[t];
        if (i) {
            for(let m = 0; m < i.childCount; m++)f.push(i.child(m));
            u = u.matchFragment(i);
        }
        let p = l.size + e - (s.content.size - s.openEnd);
        for(; c < l.childCount;){
            let m = l.child(c), g = u.matchType(m.type);
            if (!g) break;
            c++, (c > 1 || a == 0 || m.content.size) && (u = g, f.push(Xu(m.mark(h.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)));
        }
        let d = c == l.childCount;
        d || (p = -1), this.placed = Fn(this.placed, t, b.from(f)), this.frontier[t].match = u, d && p < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
        for(let m = 0, g = l; m < p; m++){
            let y = g.lastChild;
            this.frontier.push({
                type: y.type,
                match: y.contentMatchAt(y.childCount)
            }), g = y.content;
        }
        this.unplaced = d ? e == 0 ? w.empty : new w(Ln(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new w(Ln(s.content, e, c), s.openStart, s.openEnd);
    }
    mustMoveInline() {
        if (!this.$to.parent.isTextblock) return -1;
        let e = this.frontier[this.depth], t;
        if (!e.type.isTextblock || !xo(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth) return -1;
        let { depth: r } = this.$to, i = this.$to.after(r);
        for(; r > 1 && i == this.$to.end(--r);)++i;
        return i;
    }
    findCloseLevel(e) {
        e: for(let t = Math.min(this.depth, e.depth); t >= 0; t--){
            let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = xo(e, t, i, r, o);
            if (s) {
                for(let l = t - 1; l >= 0; l--){
                    let { match: a, type: c } = this.frontier[l], f = xo(e, l, c, a, !0);
                    if (!f || f.childCount) continue e;
                }
                return {
                    depth: t,
                    fit: s,
                    move: o ? e.doc.resolve(e.after(t + 1)) : e
                };
            }
        }
    }
    close(e) {
        let t = this.findCloseLevel(e);
        if (!t) return null;
        for(; this.depth > t.depth;)this.closeFrontierNode();
        t.fit.childCount && (this.placed = Fn(this.placed, t.depth, t.fit)), e = t.move;
        for(let r = t.depth + 1; r <= e.depth; r++){
            let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
            this.openFrontierNode(i.type, i.attrs, o);
        }
        return e;
    }
    openFrontierNode(e, t = null, r) {
        let i = this.frontier[this.depth];
        i.match = i.match.matchType(e), this.placed = Fn(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({
            type: e,
            match: e.contentMatch
        });
    }
    closeFrontierNode() {
        let t = this.frontier.pop().match.fillBefore(b.empty, !0);
        t.childCount && (this.placed = Fn(this.placed, this.frontier.length, t));
    }
}
function Ln(n, e, t) {
    return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Ln(n.firstChild.content, e - 1, t)));
}
function Fn(n, e, t) {
    return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Fn(n.lastChild.content, e - 1, t)));
}
function wo(n, e) {
    for(let t = 0; t < e; t++)n = n.firstChild.content;
    return n;
}
function Xu(n, e, t) {
    if (e <= 0) return n;
    let r = n.content;
    return e > 1 && (r = r.replaceChild(0, Xu(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function xo(n, e, t, r, i) {
    let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
    if (s == o.childCount && !t.compatibleContent(o.type)) return null;
    let l = r.fillBefore(o.content, !0, s);
    return l && !Pm(t, o.content, s) ? l : null;
}
function Pm(n, e, t) {
    for(let r = t; r < e.childCount; r++)if (!n.allowsMarks(e.child(r).marks)) return !0;
    return !1;
}
function $m(n) {
    return n.spec.defining || n.spec.definingForContent;
}
function Bm(n, e, t, r) {
    if (!r.size) return n.deleteRange(e, t);
    let i = n.doc.resolve(e), o = n.doc.resolve(t);
    if (Yu(i, o, r)) return n.step(new ie(e, t, r));
    let s = Zu(i, n.doc.resolve(t));
    s[s.length - 1] == 0 && s.pop();
    let l = -(i.depth + 1);
    s.unshift(l);
    for(let h = i.depth, p = i.pos - 1; h > 0; h--, p--){
        let d = i.node(h).type.spec;
        if (d.defining || d.definingAsContext || d.isolating) break;
        s.indexOf(h) > -1 ? l = h : i.before(h) == p && s.splice(1, 0, -h);
    }
    let a = s.indexOf(l), c = [], f = r.openStart;
    for(let h = r.content, p = 0;; p++){
        let d = h.firstChild;
        if (c.push(d), p == r.openStart) break;
        h = d.content;
    }
    for(let h = f - 1; h >= 0; h--){
        let p = c[h], d = $m(p.type);
        if (d && !p.sameMarkup(i.node(Math.abs(l) - 1))) f = h;
        else if (d || !p.type.isTextblock) break;
    }
    for(let h = r.openStart; h >= 0; h--){
        let p = (h + f + 1) % (r.openStart + 1), d = c[p];
        if (d) for(let m = 0; m < s.length; m++){
            let g = s[(m + a) % s.length], y = !0;
            g < 0 && (y = !1, g = -g);
            let C = i.node(g - 1), k = i.index(g - 1);
            if (C.canReplaceWith(k, k, d.type, d.marks)) return n.replace(i.before(g), y ? o.after(g) : t, new w(Qu(r.content, 0, r.openStart, p), p, r.openEnd));
        }
    }
    let u = n.steps.length;
    for(let h = s.length - 1; h >= 0 && (n.replace(e, t, r), !(n.steps.length > u)); h--){
        let p = s[h];
        p < 0 || (e = i.before(p), t = o.after(p));
    }
}
function Qu(n, e, t, r, i) {
    if (e < t) {
        let o = n.firstChild;
        n = n.replaceChild(0, o.copy(Qu(o.content, e + 1, t, r, o)));
    }
    if (e > r) {
        let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
        n = s.append(o.matchFragment(s).fillBefore(b.empty, !0));
    }
    return n;
}
function zm(n, e, t, r) {
    if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
        let i = Im(n.doc, e, r.type);
        i != null && (e = t = i);
    }
    n.replaceRange(e, t, new w(b.from(r), 0, 0));
}
function Lm(n, e, t) {
    let r = n.doc.resolve(e), i = n.doc.resolve(t), o = Zu(r, i);
    for(let s = 0; s < o.length; s++){
        let l = o[s], a = s == o.length - 1;
        if (a && l == 0 || r.node(l).type.contentMatch.validEnd) return n.delete(r.start(l), i.end(l));
        if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1)))) return n.delete(r.before(l), i.after(l));
    }
    for(let s = 1; s <= r.depth && s <= i.depth; s++)if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s) return n.delete(r.before(s), t);
    n.delete(e, t);
}
function Zu(n, e) {
    let t = [], r = Math.min(n.depth, e.depth);
    for(let i = r; i >= 0; i--){
        let o = n.start(i);
        if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating) break;
        (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
    }
    return t;
}
class un extends he {
    /**
  Construct an attribute step.
  */ constructor(e, t, r){
        super(), this.pos = e, this.attr = t, this.value = r;
    }
    apply(e) {
        let t = e.nodeAt(this.pos);
        if (!t) return Q.fail("No node at attribute step's position");
        let r = /* @__PURE__ */ Object.create(null);
        for(let o in t.attrs)r[o] = t.attrs[o];
        r[this.attr] = this.value;
        let i = t.type.create(r, null, t.marks);
        return Q.fromReplace(e, this.pos, this.pos + 1, new w(b.from(i), 0, t.isLeaf ? 0 : 1));
    }
    getMap() {
        return ve.empty;
    }
    invert(e) {
        return new un(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
    }
    map(e) {
        let t = e.mapResult(this.pos, 1);
        return t.deletedAfter ? null : new un(t.pos, this.attr, this.value);
    }
    toJSON() {
        return {
            stepType: "attr",
            pos: this.pos,
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(e, t) {
        if (typeof t.pos != "number" || typeof t.attr != "string") throw new RangeError("Invalid input for AttrStep.fromJSON");
        return new un(t.pos, t.attr, t.value);
    }
}
he.jsonID("attr", un);
class tr extends he {
    /**
  Construct an attribute step.
  */ constructor(e, t){
        super(), this.attr = e, this.value = t;
    }
    apply(e) {
        let t = /* @__PURE__ */ Object.create(null);
        for(let i in e.attrs)t[i] = e.attrs[i];
        t[this.attr] = this.value;
        let r = e.type.create(t, e.content, e.marks);
        return Q.ok(r);
    }
    getMap() {
        return ve.empty;
    }
    invert(e) {
        return new tr(this.attr, e.attrs[this.attr]);
    }
    map(e) {
        return this;
    }
    toJSON() {
        return {
            stepType: "docAttr",
            attr: this.attr,
            value: this.value
        };
    }
    static fromJSON(e, t) {
        if (typeof t.attr != "string") throw new RangeError("Invalid input for DocAttrStep.fromJSON");
        return new tr(t.attr, t.value);
    }
}
he.jsonID("docAttr", tr);
let yn = class extends Error {
};
yn = function n(e) {
    let t = Error.call(this, e);
    return t.__proto__ = n.prototype, t;
};
yn.prototype = Object.create(Error.prototype);
yn.prototype.constructor = yn;
yn.prototype.name = "TransformError";
class eh {
    /**
  Create a transform that starts with the given document.
  */ constructor(e){
        this.doc = e, this.steps = [], this.docs = [], this.mapping = new fn();
    }
    /**
  The starting document.
  */ get before() {
        return this.docs.length ? this.docs[0] : this.doc;
    }
    /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */ step(e) {
        let t = this.maybeStep(e);
        if (t.failed) throw new yn(t.failed);
        return this;
    }
    /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */ maybeStep(e) {
        let t = e.apply(this.doc);
        return t.failed || this.addStep(e, t.doc), t;
    }
    /**
  True when the document has been changed (when there are any
  steps).
  */ get docChanged() {
        return this.steps.length > 0;
    }
    /**
  @internal
  */ addStep(e, t) {
        this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
    }
    /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */ replace(e, t = e, r = w.empty) {
        let i = no(this.doc, e, t, r);
        return i && this.step(i), this;
    }
    /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */ replaceWith(e, t, r) {
        return this.replace(e, t, new w(b.from(r), 0, 0));
    }
    /**
  Delete the content between the given positions.
  */ delete(e, t) {
        return this.replace(e, t, w.empty);
    }
    /**
  Insert the given content at the given position.
  */ insert(e, t) {
        return this.replaceWith(e, e, t);
    }
    /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */ replaceRange(e, t, r) {
        return Bm(this, e, t, r), this;
    }
    /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */ replaceRangeWith(e, t, r) {
        return zm(this, e, t, r), this;
    }
    /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */ deleteRange(e, t) {
        return Lm(this, e, t), this;
    }
    /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */ lift(e, t) {
        return wm(this, e, t), this;
    }
    /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */ join(e, t = 1) {
        return Rm(this, e, t), this;
    }
    /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */ wrap(e, t) {
        return Om(this, e, t), this;
    }
    /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */ setBlockType(e, t = e, r, i = null) {
        return km(this, e, t, r, i), this;
    }
    /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */ setNodeMarkup(e, t, r = null, i) {
        return Mm(this, e, t, r, i), this;
    }
    /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */ setNodeAttribute(e, t, r) {
        return this.step(new un(e, t, r)), this;
    }
    /**
  Set a single attribute on the document to a new value.
  */ setDocAttribute(e, t) {
        return this.step(new tr(e, t)), this;
    }
    /**
  Add a mark to the node at position `pos`.
  */ addNodeMark(e, t) {
        return this.step(new wt(e, t)), this;
    }
    /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */ removeNodeMark(e, t) {
        if (!(t instanceof _)) {
            let r = this.doc.nodeAt(e);
            if (!r) throw new RangeError("No node at position " + e);
            if (t = t.isInSet(r.marks), !t) return this;
        }
        return this.step(new gn(e, t)), this;
    }
    /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */ split(e, t = 1, r) {
        return Nm(this, e, t, r), this;
    }
    /**
  Add the given mark to the inline content between `from` and `to`.
  */ addMark(e, t, r) {
        return bm(this, e, t, r), this;
    }
    /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */ removeMark(e, t, r) {
        return vm(this, e, t, r), this;
    }
    /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */ clearIncompatible(e, t, r) {
        return Hu(this, e, t, r), this;
    }
}
const Co = /* @__PURE__ */ Object.create(null);
class R {
    /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */ constructor(e, t, r){
        this.$anchor = e, this.$head = t, this.ranges = r || [
            new th(e.min(t), e.max(t))
        ];
    }
    /**
  The selection's anchor, as an unresolved position.
  */ get anchor() {
        return this.$anchor.pos;
    }
    /**
  The selection's head.
  */ get head() {
        return this.$head.pos;
    }
    /**
  The lower bound of the selection's main range.
  */ get from() {
        return this.$from.pos;
    }
    /**
  The upper bound of the selection's main range.
  */ get to() {
        return this.$to.pos;
    }
    /**
  The resolved lower  bound of the selection's main range.
  */ get $from() {
        return this.ranges[0].$from;
    }
    /**
  The resolved upper bound of the selection's main range.
  */ get $to() {
        return this.ranges[0].$to;
    }
    /**
  Indicates whether the selection contains any content.
  */ get empty() {
        let e = this.ranges;
        for(let t = 0; t < e.length; t++)if (e[t].$from.pos != e[t].$to.pos) return !1;
        return !0;
    }
    /**
  Get the content of this selection as a slice.
  */ content() {
        return this.$from.doc.slice(this.from, this.to, !0);
    }
    /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */ replace(e, t = w.empty) {
        let r = t.content.lastChild, i = null;
        for(let l = 0; l < t.openEnd; l++)i = r, r = r.lastChild;
        let o = e.steps.length, s = this.ranges;
        for(let l = 0; l < s.length; l++){
            let { $from: a, $to: c } = s[l], f = e.mapping.slice(o);
            e.replaceRange(f.map(a.pos), f.map(c.pos), l ? w.empty : t), l == 0 && Ca(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
        }
    }
    /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */ replaceWith(e, t) {
        let r = e.steps.length, i = this.ranges;
        for(let o = 0; o < i.length; o++){
            let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), f = a.map(l.pos);
            o ? e.deleteRange(c, f) : (e.replaceRangeWith(c, f, t), Ca(e, r, t.isInline ? -1 : 1));
        }
    }
    /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */ static findFrom(e, t, r = !1) {
        let i = e.parent.inlineContent ? new z(e) : on(e.node(0), e.parent, e.pos, e.index(), t, r);
        if (i) return i;
        for(let o = e.depth - 1; o >= 0; o--){
            let s = t < 0 ? on(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : on(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
            if (s) return s;
        }
        return null;
    }
    /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */ static near(e, t = 1) {
        return this.findFrom(e, t) || this.findFrom(e, -t) || new Me(e.node(0));
    }
    /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */ static atStart(e) {
        return on(e, e, 0, 0, 1) || new Me(e);
    }
    /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */ static atEnd(e) {
        return on(e, e, e.content.size, e.childCount, -1) || new Me(e);
    }
    /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */ static fromJSON(e, t) {
        if (!t || !t.type) throw new RangeError("Invalid input for Selection.fromJSON");
        let r = Co[t.type];
        if (!r) throw new RangeError(`No selection type ${t.type} defined`);
        return r.fromJSON(e, t);
    }
    /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */ static jsonID(e, t) {
        if (e in Co) throw new RangeError("Duplicate use of selection JSON ID " + e);
        return Co[e] = t, t.prototype.jsonID = e, t;
    }
    /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */ getBookmark() {
        return z.between(this.$anchor, this.$head).getBookmark();
    }
}
R.prototype.visible = !0;
class th {
    /**
  Create a range.
  */ constructor(e, t){
        this.$from = e, this.$to = t;
    }
}
let wa = !1;
function xa(n) {
    !wa && !n.parent.inlineContent && (wa = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class z extends R {
    /**
  Construct a text selection between the given points.
  */ constructor(e, t = e){
        xa(e), xa(t), super(e, t);
    }
    /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */ get $cursor() {
        return this.$anchor.pos == this.$head.pos ? this.$head : null;
    }
    map(e, t) {
        let r = e.resolve(t.map(this.head));
        if (!r.parent.inlineContent) return R.near(r);
        let i = e.resolve(t.map(this.anchor));
        return new z(i.parent.inlineContent ? i : r, r);
    }
    replace(e, t = w.empty) {
        if (super.replace(e, t), t == w.empty) {
            let r = this.$from.marksAcross(this.$to);
            r && e.ensureMarks(r);
        }
    }
    eq(e) {
        return e instanceof z && e.anchor == this.anchor && e.head == this.head;
    }
    getBookmark() {
        return new ro(this.anchor, this.head);
    }
    toJSON() {
        return {
            type: "text",
            anchor: this.anchor,
            head: this.head
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.anchor != "number" || typeof t.head != "number") throw new RangeError("Invalid input for TextSelection.fromJSON");
        return new z(e.resolve(t.anchor), e.resolve(t.head));
    }
    /**
  Create a text selection from non-resolved positions.
  */ static create(e, t, r = t) {
        let i = e.resolve(t);
        return new this(i, r == t ? i : e.resolve(r));
    }
    /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */ static between(e, t, r) {
        let i = e.pos - t.pos;
        if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
            let o = R.findFrom(t, r, !0) || R.findFrom(t, -r, !0);
            if (o) t = o.$head;
            else return R.near(t, r);
        }
        return e.parent.inlineContent || (i == 0 ? e = t : (e = (R.findFrom(e, -r, !0) || R.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new z(e, t);
    }
}
R.jsonID("text", z);
class ro {
    constructor(e, t){
        this.anchor = e, this.head = t;
    }
    map(e) {
        return new ro(e.map(this.anchor), e.map(this.head));
    }
    resolve(e) {
        return z.between(e.resolve(this.anchor), e.resolve(this.head));
    }
}
class M extends R {
    /**
  Create a node selection. Does not verify the validity of its
  argument.
  */ constructor(e){
        let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
        super(e, r), this.node = t;
    }
    map(e, t) {
        let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
        return r ? R.near(o) : new M(o);
    }
    content() {
        return new w(b.from(this.node), 0, 0);
    }
    eq(e) {
        return e instanceof M && e.anchor == this.anchor;
    }
    toJSON() {
        return {
            type: "node",
            anchor: this.anchor
        };
    }
    getBookmark() {
        return new ml(this.anchor);
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.anchor != "number") throw new RangeError("Invalid input for NodeSelection.fromJSON");
        return new M(e.resolve(t.anchor));
    }
    /**
  Create a node selection from non-resolved positions.
  */ static create(e, t) {
        return new M(e.resolve(t));
    }
    /**
  Determines whether the given node may be selected as a node
  selection.
  */ static isSelectable(e) {
        return !e.isText && e.type.spec.selectable !== !1;
    }
}
M.prototype.visible = !1;
R.jsonID("node", M);
class ml {
    constructor(e){
        this.anchor = e;
    }
    map(e) {
        let { deleted: t, pos: r } = e.mapResult(this.anchor);
        return t ? new ro(r, r) : new ml(r);
    }
    resolve(e) {
        let t = e.resolve(this.anchor), r = t.nodeAfter;
        return r && M.isSelectable(r) ? new M(t) : R.near(t);
    }
}
class Me extends R {
    /**
  Create an all-selection over the given document.
  */ constructor(e){
        super(e.resolve(0), e.resolve(e.content.size));
    }
    replace(e, t = w.empty) {
        if (t == w.empty) {
            e.delete(0, e.doc.content.size);
            let r = R.atStart(e.doc);
            r.eq(e.selection) || e.setSelection(r);
        } else super.replace(e, t);
    }
    toJSON() {
        return {
            type: "all"
        };
    }
    /**
  @internal
  */ static fromJSON(e) {
        return new Me(e);
    }
    map(e) {
        return new Me(e);
    }
    eq(e) {
        return e instanceof Me;
    }
    getBookmark() {
        return Fm;
    }
}
R.jsonID("all", Me);
const Fm = {
    map () {
        return this;
    },
    resolve (n) {
        return new Me(n);
    }
};
function on(n, e, t, r, i, o = !1) {
    if (e.inlineContent) return z.create(n, t);
    for(let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i){
        let l = e.child(s);
        if (l.isAtom) {
            if (!o && M.isSelectable(l)) return M.create(n, t - (i < 0 ? l.nodeSize : 0));
        } else {
            let a = on(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
            if (a) return a;
        }
        t += l.nodeSize * i;
    }
    return null;
}
function Ca(n, e, t) {
    let r = n.steps.length - 1;
    if (r < e) return;
    let i = n.steps[r];
    if (!(i instanceof ie || i instanceof le)) return;
    let o = n.mapping.maps[r], s;
    o.forEach((l, a, c, f)=>{
        s == null && (s = f);
    }), n.setSelection(R.near(n.doc.resolve(s), t));
}
const Oa = 1, xr = 2, ka = 4;
class _m extends eh {
    /**
  @internal
  */ constructor(e){
        super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
    }
    /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */ get selection() {
        return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
    }
    /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */ setSelection(e) {
        if (e.$from.doc != this.doc) throw new RangeError("Selection passed to setSelection must point at the current document");
        return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Oa) & ~xr, this.storedMarks = null, this;
    }
    /**
  Whether the selection was explicitly updated by this transaction.
  */ get selectionSet() {
        return (this.updated & Oa) > 0;
    }
    /**
  Set the current stored marks.
  */ setStoredMarks(e) {
        return this.storedMarks = e, this.updated |= xr, this;
    }
    /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */ ensureMarks(e) {
        return _.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
    }
    /**
  Add a mark to the set of stored marks.
  */ addStoredMark(e) {
        return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
  Remove a mark or mark type from the set of stored marks.
  */ removeStoredMark(e) {
        return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
    }
    /**
  Whether the stored marks were explicitly set for this transaction.
  */ get storedMarksSet() {
        return (this.updated & xr) > 0;
    }
    /**
  @internal
  */ addStep(e, t) {
        super.addStep(e, t), this.updated = this.updated & ~xr, this.storedMarks = null;
    }
    /**
  Update the timestamp for the transaction.
  */ setTime(e) {
        return this.time = e, this;
    }
    /**
  Replace the current selection with the given slice.
  */ replaceSelection(e) {
        return this.selection.replace(this, e), this;
    }
    /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */ replaceSelectionWith(e, t = !0) {
        let r = this.selection;
        return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || _.none))), r.replaceWith(this, e), this;
    }
    /**
  Delete the selection.
  */ deleteSelection() {
        return this.selection.replace(this), this;
    }
    /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */ insertText(e, t, r) {
        let i = this.doc.type.schema;
        if (t == null) return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
        {
            if (r == null && (r = t), r = r ?? t, !e) return this.deleteRange(t, r);
            let o = this.storedMarks;
            if (!o) {
                let s = this.doc.resolve(t);
                o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
            }
            return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(R.near(this.selection.$to)), this;
        }
    }
    /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */ setMeta(e, t) {
        return this.meta[typeof e == "string" ? e : e.key] = t, this;
    }
    /**
  Retrieve a metadata property for a given name or plugin.
  */ getMeta(e) {
        return this.meta[typeof e == "string" ? e : e.key];
    }
    /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */ get isGeneric() {
        for(let e in this.meta)return !1;
        return !0;
    }
    /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */ scrollIntoView() {
        return this.updated |= ka, this;
    }
    /**
  True when this transaction has had `scrollIntoView` called on it.
  */ get scrolledIntoView() {
        return (this.updated & ka) > 0;
    }
}
function Aa(n, e) {
    return !e || !n ? n : n.bind(e);
}
class _n {
    constructor(e, t, r){
        this.name = e, this.init = Aa(t.init, r), this.apply = Aa(t.apply, r);
    }
}
const jm = [
    new _n("doc", {
        init (n) {
            return n.doc || n.schema.topNodeType.createAndFill();
        },
        apply (n) {
            return n.doc;
        }
    }),
    new _n("selection", {
        init (n, e) {
            return n.selection || R.atStart(e.doc);
        },
        apply (n) {
            return n.selection;
        }
    }),
    new _n("storedMarks", {
        init (n) {
            return n.storedMarks || null;
        },
        apply (n, e, t, r) {
            return r.selection.$cursor ? n.storedMarks : null;
        }
    }),
    new _n("scrollToSelection", {
        init () {
            return 0;
        },
        apply (n, e) {
            return n.scrolledIntoView ? e + 1 : e;
        }
    })
];
class Oo {
    constructor(e, t){
        this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = jm.slice(), t && t.forEach((r)=>{
            if (this.pluginsByKey[r.key]) throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
            this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new _n(r.key, r.spec.state, r));
        });
    }
}
class jn {
    /**
  @internal
  */ constructor(e){
        this.config = e;
    }
    /**
  The schema of the state's document.
  */ get schema() {
        return this.config.schema;
    }
    /**
  The plugins that are active in this state.
  */ get plugins() {
        return this.config.plugins;
    }
    /**
  Apply the given transaction to produce a new state.
  */ apply(e) {
        return this.applyTransaction(e).state;
    }
    /**
  @internal
  */ filterTransaction(e, t = -1) {
        for(let r = 0; r < this.config.plugins.length; r++)if (r != t) {
            let i = this.config.plugins[r];
            if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this)) return !1;
        }
        return !0;
    }
    /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */ applyTransaction(e) {
        if (!this.filterTransaction(e)) return {
            state: this,
            transactions: []
        };
        let t = [
            e
        ], r = this.applyInner(e), i = null;
        for(;;){
            let o = !1;
            for(let s = 0; s < this.config.plugins.length; s++){
                let l = this.config.plugins[s];
                if (l.spec.appendTransaction) {
                    let a = i ? i[s].n : 0, c = i ? i[s].state : this, f = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
                    if (f && r.filterTransaction(f, s)) {
                        if (f.setMeta("appendedTransaction", e), !i) {
                            i = [];
                            for(let u = 0; u < this.config.plugins.length; u++)i.push(u < s ? {
                                state: r,
                                n: t.length
                            } : {
                                state: this,
                                n: 0
                            });
                        }
                        t.push(f), r = r.applyInner(f), o = !0;
                    }
                    i && (i[s] = {
                        state: r,
                        n: t.length
                    });
                }
            }
            if (!o) return {
                state: r,
                transactions: t
            };
        }
    }
    /**
  @internal
  */ applyInner(e) {
        if (!e.before.eq(this.doc)) throw new RangeError("Applying a mismatched transaction");
        let t = new jn(this.config), r = this.config.fields;
        for(let i = 0; i < r.length; i++){
            let o = r[i];
            t[o.name] = o.apply(e, this[o.name], this, t);
        }
        return t;
    }
    /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */ get tr() {
        return new _m(this);
    }
    /**
  Create a new state.
  */ static create(e) {
        let t = new Oo(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new jn(t);
        for(let i = 0; i < t.fields.length; i++)r[t.fields[i].name] = t.fields[i].init(e, r);
        return r;
    }
    /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */ reconfigure(e) {
        let t = new Oo(this.schema, e.plugins), r = t.fields, i = new jn(t);
        for(let o = 0; o < r.length; o++){
            let s = r[o].name;
            i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
        }
        return i;
    }
    /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */ toJSON(e) {
        let t = {
            doc: this.doc.toJSON(),
            selection: this.selection.toJSON()
        };
        if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r)=>r.toJSON())), e && typeof e == "object") for(let r in e){
            if (r == "doc" || r == "selection") throw new RangeError("The JSON fields `doc` and `selection` are reserved");
            let i = e[r], o = i.spec.state;
            o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
        }
        return t;
    }
    /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */ static fromJSON(e, t, r) {
        if (!t) throw new RangeError("Invalid input for EditorState.fromJSON");
        if (!e.schema) throw new RangeError("Required config field 'schema' missing");
        let i = new Oo(e.schema, e.plugins), o = new jn(i);
        return i.fields.forEach((s)=>{
            if (s.name == "doc") o.doc = _e.fromJSON(e.schema, t.doc);
            else if (s.name == "selection") o.selection = R.fromJSON(o.doc, t.selection);
            else if (s.name == "storedMarks") t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
            else {
                if (r) for(let l in r){
                    let a = r[l], c = a.spec.state;
                    if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
                        o[s.name] = c.fromJSON.call(a, e, t[l], o);
                        return;
                    }
                }
                o[s.name] = s.init(e, o);
            }
        }), o;
    }
}
function nh(n, e, t) {
    for(let r in n){
        let i = n[r];
        i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = nh(i, e, {})), t[r] = i;
    }
    return t;
}
class kn {
    /**
  Create a plugin.
  */ constructor(e){
        this.spec = e, this.props = {}, e.props && nh(e.props, this, this.props), this.key = e.key ? e.key.key : rh("plugin");
    }
    /**
  Extract the plugin's state field from an editor state.
  */ getState(e) {
        return e[this.key];
    }
}
const ko = /* @__PURE__ */ Object.create(null);
function rh(n) {
    return n in ko ? n + "$" + ++ko[n] : (ko[n] = 0, n + "$");
}
class mr {
    /**
  Create a plugin key.
  */ constructor(e = "key"){
        this.key = rh(e);
    }
    /**
  Get the active plugin with this key, if any, from an editor
  state.
  */ get(e) {
        return e.config.pluginsByKey[this.key];
    }
    /**
  Get the plugin's state from an editor state.
  */ getState(e) {
        return e[this.key];
    }
}
const oe = function(n) {
    for(var e = 0;; e++)if (n = n.previousSibling, !n) return e;
}, nr = function(n) {
    let e = n.assignedSlot || n.parentNode;
    return e && e.nodeType == 11 ? e.host : e;
};
let ps = null;
const tt = function(n, e, t) {
    let r = ps || (ps = document.createRange());
    return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Vm = function() {
    ps = null;
}, Ut = function(n, e, t, r) {
    return t && (Ea(n, e, t, r, -1) || Ea(n, e, t, r, 1));
}, Wm = /^(img|br|input|textarea|hr)$/i;
function Ea(n, e, t, r, i) {
    for(;;){
        if (n == t && e == r) return !0;
        if (e == (i < 0 ? 0 : Le(n))) {
            let o = n.parentNode;
            if (!o || o.nodeType != 1 || gr(n) || Wm.test(n.nodeName) || n.contentEditable == "false") return !1;
            e = oe(n) + (i < 0 ? 0 : 1), n = o;
        } else if (n.nodeType == 1) {
            if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false") return !1;
            e = i < 0 ? Le(n) : 0;
        } else return !1;
    }
}
function Le(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Hm(n, e) {
    for(;;){
        if (n.nodeType == 3 && e) return n;
        if (n.nodeType == 1 && e > 0) {
            if (n.contentEditable == "false") return null;
            n = n.childNodes[e - 1], e = Le(n);
        } else if (n.parentNode && !gr(n)) e = oe(n), n = n.parentNode;
        else return null;
    }
}
function Um(n, e) {
    for(;;){
        if (n.nodeType == 3 && e < n.nodeValue.length) return n;
        if (n.nodeType == 1 && e < n.childNodes.length) {
            if (n.contentEditable == "false") return null;
            n = n.childNodes[e], e = 0;
        } else if (n.parentNode && !gr(n)) e = oe(n) + 1, n = n.parentNode;
        else return null;
    }
}
function Km(n, e, t) {
    for(let r = e == 0, i = e == Le(n); r || i;){
        if (n == t) return !0;
        let o = oe(n);
        if (n = n.parentNode, !n) return !1;
        r = r && o == 0, i = i && o == Le(n);
    }
}
function gr(n) {
    let e;
    for(let t = n; t && !(e = t.pmViewDesc); t = t.parentNode);
    return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const io = function(n) {
    return n.focusNode && Ut(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Dt(n, e) {
    let t = document.createEvent("Event");
    return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Jm(n) {
    let e = n.activeElement;
    for(; e && e.shadowRoot;)e = e.shadowRoot.activeElement;
    return e;
}
function qm(n, e, t) {
    if (n.caretPositionFromPoint) try {
        let r = n.caretPositionFromPoint(e, t);
        if (r) return {
            node: r.offsetNode,
            offset: r.offset
        };
    } catch  {}
    if (n.caretRangeFromPoint) {
        let r = n.caretRangeFromPoint(e, t);
        if (r) return {
            node: r.startContainer,
            offset: r.startOffset
        };
    }
}
const je = typeof navigator < "u" ? navigator : null, Ta = typeof document < "u" ? document : null, Mt = je && je.userAgent || "", ms = /Edge\/(\d+)/.exec(Mt), ih = /MSIE \d/.exec(Mt), gs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Mt), be = !!(ih || gs || ms), Ot = ih ? document.documentMode : gs ? +gs[1] : ms ? +ms[1] : 0, Re = !be && /gecko\/(\d+)/i.test(Mt);
Re && +(/Firefox\/(\d+)/.exec(Mt) || [
    0,
    0
])[1];
const ys = !be && /Chrome\/(\d+)/.exec(Mt), ce = !!ys, oh = ys ? +ys[1] : 0, de = !be && !!je && /Apple Computer/.test(je.vendor), bn = de && (/Mobile\/\w+/.test(Mt) || !!je && je.maxTouchPoints > 2), xe = bn || (je ? /Mac/.test(je.platform) : !1), Gm = je ? /Win/.test(je.platform) : !1, Ee = /Android \d/.test(Mt), yr = !!Ta && "webkitFontSmoothing" in Ta.documentElement.style, Ym = yr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [
    0,
    0
])[1] : 0;
function Xm(n) {
    let e = n.defaultView && n.defaultView.visualViewport;
    return e ? {
        left: 0,
        right: e.width,
        top: 0,
        bottom: e.height
    } : {
        left: 0,
        right: n.documentElement.clientWidth,
        top: 0,
        bottom: n.documentElement.clientHeight
    };
}
function Ye(n, e) {
    return typeof n == "number" ? n : n[e];
}
function Qm(n) {
    let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
    return {
        left: e.left,
        right: e.left + n.clientWidth * t,
        top: e.top,
        bottom: e.top + n.clientHeight * r
    };
}
function Ma(n, e, t) {
    let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
    for(let s = t || n.dom; s; s = nr(s)){
        if (s.nodeType != 1) continue;
        let l = s, a = l == o.body, c = a ? Xm(o) : Qm(l), f = 0, u = 0;
        if (e.top < c.top + Ye(r, "top") ? u = -(c.top - e.top + Ye(i, "top")) : e.bottom > c.bottom - Ye(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + Ye(i, "top") - c.top : e.bottom - c.bottom + Ye(i, "bottom")), e.left < c.left + Ye(r, "left") ? f = -(c.left - e.left + Ye(i, "left")) : e.right > c.right - Ye(r, "right") && (f = e.right - c.right + Ye(i, "right")), f || u) if (a) o.defaultView.scrollBy(f, u);
        else {
            let h = l.scrollLeft, p = l.scrollTop;
            u && (l.scrollTop += u), f && (l.scrollLeft += f);
            let d = l.scrollLeft - h, m = l.scrollTop - p;
            e = {
                left: e.left - d,
                top: e.top - m,
                right: e.right - d,
                bottom: e.bottom - m
            };
        }
        if (a || /^(fixed|sticky)$/.test(getComputedStyle(s).position)) break;
    }
}
function Zm(n) {
    let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
    for(let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5){
        let l = n.root.elementFromPoint(o, s);
        if (!l || l == n.dom || !n.dom.contains(l)) continue;
        let a = l.getBoundingClientRect();
        if (a.top >= t - 20) {
            r = l, i = a.top;
            break;
        }
    }
    return {
        refDOM: r,
        refTop: i,
        stack: sh(n.dom)
    };
}
function sh(n) {
    let e = [], t = n.ownerDocument;
    for(let r = n; r && (e.push({
        dom: r,
        top: r.scrollTop,
        left: r.scrollLeft
    }), n != t); r = nr(r));
    return e;
}
function eg({ refDOM: n, refTop: e, stack: t }) {
    let r = n ? n.getBoundingClientRect().top : 0;
    lh(t, r == 0 ? 0 : r - e);
}
function lh(n, e) {
    for(let t = 0; t < n.length; t++){
        let { dom: r, top: i, left: o } = n[t];
        r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
    }
}
let Zt = null;
function tg(n) {
    if (n.setActive) return n.setActive();
    if (Zt) return n.focus(Zt);
    let e = sh(n);
    n.focus(Zt == null ? {
        get preventScroll () {
            return Zt = {
                preventScroll: !0
            }, !0;
        }
    } : void 0), Zt || (Zt = !1, lh(e, 0));
}
function ah(n, e) {
    let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
    for(let f = n.firstChild, u = 0; f; f = f.nextSibling, u++){
        let h;
        if (f.nodeType == 1) h = f.getClientRects();
        else if (f.nodeType == 3) h = tt(f).getClientRects();
        else continue;
        for(let p = 0; p < h.length; p++){
            let d = h[p];
            if (d.top <= s && d.bottom >= l) {
                s = Math.max(d.bottom, s), l = Math.min(d.top, l);
                let m = d.left > e.left ? d.left - e.left : d.right < e.left ? e.left - d.right : 0;
                if (m < r) {
                    t = f, r = m, i = m && t.nodeType == 3 ? {
                        left: d.right < e.left ? d.right : d.left,
                        top: e.top
                    } : e, f.nodeType == 1 && m && (o = u + (e.left >= (d.left + d.right) / 2 ? 1 : 0));
                    continue;
                }
            } else d.top > e.top && !a && d.left <= e.left && d.right >= e.left && (a = f, c = {
                left: Math.max(d.left, Math.min(d.right, e.left)),
                top: d.top
            });
            !t && (e.left >= d.right && e.top >= d.top || e.left >= d.left && e.top >= d.bottom) && (o = u + 1);
        }
    }
    return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? ng(t, i) : !t || r && t.nodeType == 1 ? {
        node: n,
        offset: o
    } : ah(t, i);
}
function ng(n, e) {
    let t = n.nodeValue.length, r = document.createRange();
    for(let i = 0; i < t; i++){
        r.setEnd(n, i + 1), r.setStart(n, i);
        let o = ut(r, 1);
        if (o.top != o.bottom && gl(e, o)) return {
            node: n,
            offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0)
        };
    }
    return {
        node: n,
        offset: 0
    };
}
function gl(n, e) {
    return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function rg(n, e) {
    let t = n.parentNode;
    return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function ig(n, e, t) {
    let { node: r, offset: i } = ah(e, t), o = -1;
    if (r.nodeType == 1 && !r.firstChild) {
        let s = r.getBoundingClientRect();
        o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
    }
    return n.docView.posFromDOM(r, i, o);
}
function og(n, e, t, r) {
    let i = -1;
    for(let o = e, s = !1; o != n.dom;){
        let l = n.docView.nearestDesc(o, !0);
        if (!l) return null;
        if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
            let a = l.dom.getBoundingClientRect();
            if (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText) return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
        }
        o = l.dom.parentNode;
    }
    return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function ch(n, e, t) {
    let r = n.childNodes.length;
    if (r && t.top < t.bottom) for(let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i;;){
        let s = n.childNodes[o];
        if (s.nodeType == 1) {
            let l = s.getClientRects();
            for(let a = 0; a < l.length; a++){
                let c = l[a];
                if (gl(e, c)) return ch(s, e, c);
            }
        }
        if ((o = (o + 1) % r) == i) break;
    }
    return n;
}
function sg(n, e) {
    let t = n.dom.ownerDocument, r, i = 0, o = qm(t, e.left, e.top);
    o && ({ node: r, offset: i } = o);
    let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
    if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
        let c = n.dom.getBoundingClientRect();
        if (!gl(e, c) || (s = ch(n.dom, e, c), !s)) return null;
    }
    if (de) for(let c = s; r && c; c = nr(c))c.draggable && (r = void 0);
    if (s = rg(s, e), r) {
        if (Re && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
            let f = r.childNodes[i], u;
            f.nodeName == "IMG" && (u = f.getBoundingClientRect()).right <= e.left && u.bottom > e.top && i++;
        }
        let c;
        yr && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = og(n, r, i, e));
    }
    l == null && (l = ig(n, s, e));
    let a = n.docView.nearestDesc(s, !0);
    return {
        pos: l,
        inside: a ? a.posAtStart - a.border : -1
    };
}
function Na(n) {
    return n.top < n.bottom || n.left < n.right;
}
function ut(n, e) {
    let t = n.getClientRects();
    if (t.length) {
        let r = t[e < 0 ? 0 : t.length - 1];
        if (Na(r)) return r;
    }
    return Array.prototype.find.call(t, Na) || n.getBoundingClientRect();
}
const lg = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function fh(n, e, t) {
    let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = yr || Re;
    if (r.nodeType == 3) if (s && (lg.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
        let a = ut(tt(r, i, i), t);
        if (Re && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
            let c = ut(tt(r, i - 1, i - 1), -1);
            if (c.top == a.top) {
                let f = ut(tt(r, i, i + 1), -1);
                if (f.top != a.top) return Rn(f, f.left < c.left);
            }
        }
        return a;
    } else {
        let a = i, c = i, f = t < 0 ? 1 : -1;
        return t < 0 && !i ? (c++, f = -1) : t >= 0 && i == r.nodeValue.length ? (a--, f = 1) : t < 0 ? a-- : c++, Rn(ut(tt(r, a, c), f), f < 0);
    }
    if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
        if (o == null && i && (t < 0 || i == Le(r))) {
            let a = r.childNodes[i - 1];
            if (a.nodeType == 1) return Ao(a.getBoundingClientRect(), !1);
        }
        if (o == null && i < Le(r)) {
            let a = r.childNodes[i];
            if (a.nodeType == 1) return Ao(a.getBoundingClientRect(), !0);
        }
        return Ao(r.getBoundingClientRect(), t >= 0);
    }
    if (o == null && i && (t < 0 || i == Le(r))) {
        let a = r.childNodes[i - 1], c = a.nodeType == 3 ? tt(a, Le(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
        if (c) return Rn(ut(c, 1), !1);
    }
    if (o == null && i < Le(r)) {
        let a = r.childNodes[i];
        for(; a.pmViewDesc && a.pmViewDesc.ignoreForCoords;)a = a.nextSibling;
        let c = a ? a.nodeType == 3 ? tt(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
        if (c) return Rn(ut(c, -1), !0);
    }
    return Rn(ut(r.nodeType == 3 ? tt(r) : r, -t), t >= 0);
}
function Rn(n, e) {
    if (n.width == 0) return n;
    let t = e ? n.left : n.right;
    return {
        top: n.top,
        bottom: n.bottom,
        left: t,
        right: t
    };
}
function Ao(n, e) {
    if (n.height == 0) return n;
    let t = e ? n.top : n.bottom;
    return {
        top: t,
        bottom: t,
        left: n.left,
        right: n.right
    };
}
function uh(n, e, t) {
    let r = n.state, i = n.root.activeElement;
    r != e && n.updateState(e), i != n.dom && n.focus();
    try {
        return t();
    } finally{
        r != e && n.updateState(r), i != n.dom && i && i.focus();
    }
}
function ag(n, e, t) {
    let r = e.selection, i = t == "up" ? r.$from : r.$to;
    return uh(n, e, ()=>{
        let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
        for(;;){
            let l = n.docView.nearestDesc(o, !0);
            if (!l) break;
            if (l.node.isBlock) {
                o = l.contentDOM || l.dom;
                break;
            }
            o = l.dom.parentNode;
        }
        let s = fh(n, i.pos, 1);
        for(let l = o.firstChild; l; l = l.nextSibling){
            let a;
            if (l.nodeType == 1) a = l.getClientRects();
            else if (l.nodeType == 3) a = tt(l, 0, l.nodeValue.length).getClientRects();
            else continue;
            for(let c = 0; c < a.length; c++){
                let f = a[c];
                if (f.bottom > f.top + 1 && (t == "up" ? s.top - f.top > (f.bottom - s.top) * 2 : f.bottom - s.bottom > (s.bottom - f.top) * 2)) return !1;
            }
        }
        return !0;
    });
}
const cg = /[\u0590-\u08ac]/;
function fg(n, e, t) {
    let { $head: r } = e.selection;
    if (!r.parent.isTextblock) return !1;
    let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
    return l ? !cg.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : uh(n, e, ()=>{
        let { focusNode: a, focusOffset: c, anchorNode: f, anchorOffset: u } = n.domSelectionRange(), h = l.caretBidiLevel;
        l.modify("move", t, "character");
        let p = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: d, focusOffset: m } = n.domSelectionRange(), g = d && !p.contains(d.nodeType == 1 ? d : d.parentNode) || a == d && c == m;
        try {
            l.collapse(f, u), a && (a != f || c != u) && l.extend && l.extend(a, c);
        } catch  {}
        return h != null && (l.caretBidiLevel = h), g;
    }) : r.pos == r.start() || r.pos == r.end();
}
let Ra = null, Ia = null, Da = !1;
function ug(n, e, t) {
    return Ra == e && Ia == t ? Da : (Ra = e, Ia = t, Da = t == "up" || t == "down" ? ag(n, e, t) : fg(n, e, t));
}
const Oe = 0, Pa = 1, Pt = 2, Ve = 3;
class br {
    constructor(e, t, r, i){
        this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Oe, r.pmViewDesc = this;
    }
    // Used to check whether a given description corresponds to a
    // widget/mark/node.
    matchesWidget(e) {
        return !1;
    }
    matchesMark(e) {
        return !1;
    }
    matchesNode(e, t, r) {
        return !1;
    }
    matchesHack(e) {
        return !1;
    }
    // When parsing in-editor content (in domchange.js), we allow
    // descriptions to determine the parse rules that should be used to
    // parse them.
    parseRule() {
        return null;
    }
    // Used by the editor's event handler to ignore events that come
    // from certain descs.
    stopEvent(e) {
        return !1;
    }
    // The size of the content represented by this desc.
    get size() {
        let e = 0;
        for(let t = 0; t < this.children.length; t++)e += this.children[t].size;
        return e;
    }
    // For block nodes, this represents the space taken up by their
    // start/end tokens.
    get border() {
        return 0;
    }
    destroy() {
        this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
        for(let e = 0; e < this.children.length; e++)this.children[e].destroy();
    }
    posBeforeChild(e) {
        for(let t = 0, r = this.posAtStart;; t++){
            let i = this.children[t];
            if (i == e) return r;
            r += i.size;
        }
    }
    get posBefore() {
        return this.parent.posBeforeChild(this);
    }
    get posAtStart() {
        return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
    }
    get posAfter() {
        return this.posBefore + this.size;
    }
    get posAtEnd() {
        return this.posAtStart + this.size - 2 * this.border;
    }
    localPosFromDOM(e, t, r) {
        if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)) if (r < 0) {
            let o, s;
            if (e == this.contentDOM) o = e.childNodes[t - 1];
            else {
                for(; e.parentNode != this.contentDOM;)e = e.parentNode;
                o = e.previousSibling;
            }
            for(; o && !((s = o.pmViewDesc) && s.parent == this);)o = o.previousSibling;
            return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
        } else {
            let o, s;
            if (e == this.contentDOM) o = e.childNodes[t];
            else {
                for(; e.parentNode != this.contentDOM;)e = e.parentNode;
                o = e.nextSibling;
            }
            for(; o && !((s = o.pmViewDesc) && s.parent == this);)o = o.nextSibling;
            return o ? this.posBeforeChild(s) : this.posAtEnd;
        }
        let i;
        if (e == this.dom && this.contentDOM) i = t > oe(this.contentDOM);
        else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM)) i = e.compareDocumentPosition(this.contentDOM) & 2;
        else if (this.dom.firstChild) {
            if (t == 0) for(let o = e;; o = o.parentNode){
                if (o == this.dom) {
                    i = !1;
                    break;
                }
                if (o.previousSibling) break;
            }
            if (i == null && t == e.childNodes.length) for(let o = e;; o = o.parentNode){
                if (o == this.dom) {
                    i = !0;
                    break;
                }
                if (o.nextSibling) break;
            }
        }
        return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
    }
    nearestDesc(e, t = !1) {
        for(let r = !0, i = e; i; i = i.parentNode){
            let o = this.getDesc(i), s;
            if (o && (!t || o.node)) if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e)) r = !1;
            else return o;
        }
    }
    getDesc(e) {
        let t = e.pmViewDesc;
        for(let r = t; r; r = r.parent)if (r == this) return t;
    }
    posFromDOM(e, t, r) {
        for(let i = e; i; i = i.parentNode){
            let o = this.getDesc(i);
            if (o) return o.localPosFromDOM(e, t, r);
        }
        return -1;
    }
    // Find the desc for the node after the given pos, if any. (When a
    // parent node overrode rendering, there might not be one.)
    descAt(e) {
        for(let t = 0, r = 0; t < this.children.length; t++){
            let i = this.children[t], o = r + i.size;
            if (r == e && o != r) {
                for(; !i.border && i.children.length;)i = i.children[0];
                return i;
            }
            if (e < o) return i.descAt(e - r - i.border);
            r = o;
        }
    }
    domFromPos(e, t) {
        if (!this.contentDOM) return {
            node: this.dom,
            offset: 0,
            atom: e + 1
        };
        let r = 0, i = 0;
        for(let o = 0; r < this.children.length; r++){
            let s = this.children[r], l = o + s.size;
            if (l > e || s instanceof dh) {
                i = e - o;
                break;
            }
            o = l;
        }
        if (i) return this.children[r].domFromPos(i - this.children[r].border, t);
        for(let o; r && !(o = this.children[r - 1]).size && o instanceof hh && o.side >= 0; r--);
        if (t <= 0) {
            let o, s = !0;
            for(; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1);
            return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : {
                node: this.contentDOM,
                offset: o ? oe(o.dom) + 1 : 0
            };
        } else {
            let o, s = !0;
            for(; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1);
            return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : {
                node: this.contentDOM,
                offset: o ? oe(o.dom) : this.contentDOM.childNodes.length
            };
        }
    }
    // Used to find a DOM range in a single parent for a given changed
    // range.
    parseRange(e, t, r = 0) {
        if (this.children.length == 0) return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: 0,
            toOffset: this.contentDOM.childNodes.length
        };
        let i = -1, o = -1;
        for(let s = r, l = 0;; l++){
            let a = this.children[l], c = s + a.size;
            if (i == -1 && e <= c) {
                let f = s + a.border;
                if (e >= f && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM)) return a.parseRange(e, t, f);
                e = s;
                for(let u = l; u > 0; u--){
                    let h = this.children[u - 1];
                    if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(1)) {
                        i = oe(h.dom) + 1;
                        break;
                    }
                    e -= h.size;
                }
                i == -1 && (i = 0);
            }
            if (i > -1 && (c > t || l == this.children.length - 1)) {
                t = c;
                for(let f = l + 1; f < this.children.length; f++){
                    let u = this.children[f];
                    if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
                        o = oe(u.dom);
                        break;
                    }
                    t += u.size;
                }
                o == -1 && (o = this.contentDOM.childNodes.length);
                break;
            }
            s = c;
        }
        return {
            node: this.contentDOM,
            from: e,
            to: t,
            fromOffset: i,
            toOffset: o
        };
    }
    emptyChildAt(e) {
        if (this.border || !this.contentDOM || !this.children.length) return !1;
        let t = this.children[e < 0 ? 0 : this.children.length - 1];
        return t.size == 0 || t.emptyChildAt(e);
    }
    domAfterPos(e) {
        let { node: t, offset: r } = this.domFromPos(e, 0);
        if (t.nodeType != 1 || r == t.childNodes.length) throw new RangeError("No node after pos " + e);
        return t.childNodes[r];
    }
    // View descs are responsible for setting any selection that falls
    // entirely inside of them, so that custom implementations can do
    // custom things with the selection. Note that this falls apart when
    // a selection starts in such a node and ends in another, in which
    // case we just use whatever domFromPos produces as a best effort.
    setSelection(e, t, r, i = !1) {
        let o = Math.min(e, t), s = Math.max(e, t);
        for(let h = 0, p = 0; h < this.children.length; h++){
            let d = this.children[h], m = p + d.size;
            if (o > p && s < m) return d.setSelection(e - p - d.border, t - p - d.border, r, i);
            p = m;
        }
        let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), f = !1;
        if ((Re || de) && e == t) {
            let { node: h, offset: p } = l;
            if (h.nodeType == 3) {
                if (f = !!(p && h.nodeValue[p - 1] == `
`), f && p == h.nodeValue.length) for(let d = h, m; d; d = d.parentNode){
                    if (m = d.nextSibling) {
                        m.nodeName == "BR" && (l = a = {
                            node: m.parentNode,
                            offset: oe(m) + 1
                        });
                        break;
                    }
                    let g = d.pmViewDesc;
                    if (g && g.node && g.node.isBlock) break;
                }
            } else {
                let d = h.childNodes[p - 1];
                f = d && (d.nodeName == "BR" || d.contentEditable == "false");
            }
        }
        if (Re && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
            let h = c.focusNode.childNodes[c.focusOffset];
            h && h.contentEditable == "false" && (i = !0);
        }
        if (!(i || f && de) && Ut(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ut(a.node, a.offset, c.focusNode, c.focusOffset)) return;
        let u = !1;
        if ((c.extend || e == t) && !f) {
            c.collapse(l.node, l.offset);
            try {
                e != t && c.extend(a.node, a.offset), u = !0;
            } catch  {}
        }
        if (!u) {
            if (e > t) {
                let p = l;
                l = a, a = p;
            }
            let h = document.createRange();
            h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
        }
    }
    ignoreMutation(e) {
        return !this.contentDOM && e.type != "selection";
    }
    get contentLost() {
        return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
    }
    // Remove a subtree of the element tree that has been touched
    // by a DOM change, so that the next update will redraw it.
    markDirty(e, t) {
        for(let r = 0, i = 0; i < this.children.length; i++){
            let o = this.children[i], s = r + o.size;
            if (r == s ? e <= s && t >= r : e < s && t > r) {
                let l = r + o.border, a = s - o.border;
                if (e >= l && t <= a) {
                    this.dirty = e == r || t == s ? Pt : Pa, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = Ve : o.markDirty(e - l, t - l);
                    return;
                } else o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? Pt : Ve;
            }
            r = s;
        }
        this.dirty = Pt;
    }
    markParentsDirty() {
        let e = 1;
        for(let t = this.parent; t; t = t.parent, e++){
            let r = e == 1 ? Pt : Pa;
            t.dirty < r && (t.dirty = r);
        }
    }
    get domAtom() {
        return !1;
    }
    get ignoreForCoords() {
        return !1;
    }
    isText(e) {
        return !1;
    }
}
class hh extends br {
    constructor(e, t, r, i){
        let o, s = t.type.toDOM;
        if (typeof s == "function" && (s = s(r, ()=>{
            if (!o) return i;
            if (o.parent) return o.parent.posBeforeChild(o);
        })), !t.type.spec.raw) {
            if (s.nodeType != 1) {
                let l = document.createElement("span");
                l.appendChild(s), s = l;
            }
            s.contentEditable = "false", s.classList.add("ProseMirror-widget");
        }
        super(e, [], s, null), this.widget = t, this.widget = t, o = this;
    }
    matchesWidget(e) {
        return this.dirty == Oe && e.type.eq(this.widget.type);
    }
    parseRule() {
        return {
            ignore: !0
        };
    }
    stopEvent(e) {
        let t = this.widget.spec.stopEvent;
        return t ? t(e) : !1;
    }
    ignoreMutation(e) {
        return e.type != "selection" || this.widget.spec.ignoreSelection;
    }
    destroy() {
        this.widget.type.destroy(this.dom), super.destroy();
    }
    get domAtom() {
        return !0;
    }
    get side() {
        return this.widget.type.side;
    }
}
class hg extends br {
    constructor(e, t, r, i){
        super(e, [], t, null), this.textDOM = r, this.text = i;
    }
    get size() {
        return this.text.length;
    }
    localPosFromDOM(e, t) {
        return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
    }
    domFromPos(e) {
        return {
            node: this.textDOM,
            offset: e
        };
    }
    ignoreMutation(e) {
        return e.type === "characterData" && e.target.nodeValue == e.oldValue;
    }
}
class Kt extends br {
    constructor(e, t, r, i){
        super(e, [], r, i), this.mark = t;
    }
    static create(e, t, r, i) {
        let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
        return (!s || !s.dom) && (s = On.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Kt(e, t, s.dom, s.contentDOM || s.dom);
    }
    parseRule() {
        return this.dirty & Ve || this.mark.type.spec.reparseInView ? null : {
            mark: this.mark.type.name,
            attrs: this.mark.attrs,
            contentElement: this.contentDOM
        };
    }
    matchesMark(e) {
        return this.dirty != Ve && this.mark.eq(e);
    }
    markDirty(e, t) {
        if (super.markDirty(e, t), this.dirty != Oe) {
            let r = this.parent;
            for(; !r.node;)r = r.parent;
            r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Oe;
        }
    }
    slice(e, t, r) {
        let i = Kt.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
        t < s && (o = Ss(o, t, s, r)), e > 0 && (o = Ss(o, 0, e, r));
        for(let l = 0; l < o.length; l++)o[l].parent = i;
        return i.children = o, i;
    }
}
class kt extends br {
    constructor(e, t, r, i, o, s, l, a, c){
        super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
    }
    // By default, a node is rendered using the `toDOM` method from the
    // node type spec. But client code can use the `nodeViews` spec to
    // supply a custom node view, which can influence various aspects of
    // the way the node works.
    //
    // (Using subclassing for this was intentionally decided against,
    // since it'd require exposing a whole slew of finicky
    // implementation details to the user code that they probably will
    // never need.)
    static create(e, t, r, i, o, s) {
        let l = o.nodeViews[t.type.name], a, c = l && l(t, o, ()=>{
            if (!a) return s;
            if (a.parent) return a.parent.posBeforeChild(a);
        }, r, i), f = c && c.dom, u = c && c.contentDOM;
        if (t.isText) {
            if (!f) f = document.createTextNode(t.text);
            else if (f.nodeType != 3) throw new RangeError("Text must be rendered as a DOM text node");
        } else f || ({ dom: f, contentDOM: u } = On.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
        !u && !t.isText && f.nodeName != "BR" && (f.hasAttribute("contenteditable") || (f.contentEditable = "false"), t.type.spec.draggable && (f.draggable = !0));
        let h = f;
        return f = gh(f, r, t), c ? a = new dg(e, t, r, i, f, u || null, h, c, o, s + 1) : t.isText ? new oo(e, t, r, i, f, h, o) : new kt(e, t, r, i, f, u || null, h, o, s + 1);
    }
    parseRule() {
        if (this.node.type.spec.reparseInView) return null;
        let e = {
            node: this.node.type.name,
            attrs: this.node.attrs
        };
        if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM) e.getContent = ()=>this.node.content;
        else if (!this.contentLost) e.contentElement = this.contentDOM;
        else {
            for(let t = this.children.length - 1; t >= 0; t--){
                let r = this.children[t];
                if (this.dom.contains(r.dom.parentNode)) {
                    e.contentElement = r.dom.parentNode;
                    break;
                }
            }
            e.contentElement || (e.getContent = ()=>b.empty);
        }
        return e;
    }
    matchesNode(e, t, r) {
        return this.dirty == Oe && e.eq(this.node) && vs(t, this.outerDeco) && r.eq(this.innerDeco);
    }
    get size() {
        return this.node.nodeSize;
    }
    get border() {
        return this.node.isLeaf ? 0 : 1;
    }
    // Syncs `this.children` to match `this.node.content` and the local
    // decorations, possibly introducing nesting for marks. Then, in a
    // separate step, syncs the DOM inside `this.contentDOM` to
    // `this.children`.
    updateChildren(e, t) {
        let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new mg(this, s && s.node, e);
        bg(this.node, this.innerDeco, (c, f, u)=>{
            c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(f == this.node.childCount ? _.none : this.node.child(f).marks, r, e), a.placeWidget(c, e, i);
        }, (c, f, u, h)=>{
            a.syncToMarks(c.marks, r, e);
            let p;
            a.findNodeMatch(c, f, u, h) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (p = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, f, u, p, e) || a.updateNextNode(c, f, u, e, h, i) || a.addNode(c, f, u, e, i), i += c.nodeSize;
        }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == Pt) && (s && this.protectLocalComposition(e, s), ph(this.contentDOM, this.children, e), bn && vg(this.dom));
    }
    localCompositionInfo(e, t) {
        let { from: r, to: i } = e.state.selection;
        if (!(e.state.selection instanceof z) || r < t || i > t + this.node.content.size) return null;
        let o = e.input.compositionNode;
        if (!o || !this.dom.contains(o.parentNode)) return null;
        if (this.node.inlineContent) {
            let s = o.nodeValue, l = Sg(this.node.content, s, r - t, i - t);
            return l < 0 ? null : {
                node: o,
                pos: l,
                text: s
            };
        } else return {
            node: o,
            pos: -1,
            text: ""
        };
    }
    protectLocalComposition(e, { node: t, pos: r, text: i }) {
        if (this.getDesc(t)) return;
        let o = t;
        for(; o.parentNode != this.contentDOM; o = o.parentNode){
            for(; o.previousSibling;)o.parentNode.removeChild(o.previousSibling);
            for(; o.nextSibling;)o.parentNode.removeChild(o.nextSibling);
            o.pmViewDesc && (o.pmViewDesc = void 0);
        }
        let s = new hg(this, o, t, i);
        e.input.compositionNodes.push(s), this.children = Ss(this.children, r, r + i.length, e, s);
    }
    // If this desc must be updated to match the given node decoration,
    // do so and return true.
    update(e, t, r, i) {
        return this.dirty == Ve || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
    }
    updateInner(e, t, r, i) {
        this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Oe;
    }
    updateOuterDeco(e) {
        if (vs(e, this.outerDeco)) return;
        let t = this.nodeDOM.nodeType != 1, r = this.dom;
        this.dom = mh(this.dom, this.nodeDOM, bs(this.outerDeco, this.node, t), bs(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
    }
    // Mark this node as being the selected node.
    selectNode() {
        this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
    }
    // Remove selected node marking from this node.
    deselectNode() {
        this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
    }
    get domAtom() {
        return this.node.isAtom;
    }
}
function $a(n, e, t, r, i) {
    gh(r, e, n);
    let o = new kt(void 0, n, e, t, r, r, r, i, 0);
    return o.contentDOM && o.updateChildren(i, 0), o;
}
class oo extends kt {
    constructor(e, t, r, i, o, s, l){
        super(e, t, r, i, o, null, s, l, 0);
    }
    parseRule() {
        let e = this.nodeDOM.parentNode;
        for(; e && e != this.dom && !e.pmIsDeco;)e = e.parentNode;
        return {
            skip: e || !0
        };
    }
    update(e, t, r, i) {
        return this.dirty == Ve || this.dirty != Oe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Oe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Oe, !0);
    }
    inParent() {
        let e = this.parent.contentDOM;
        for(let t = this.nodeDOM; t; t = t.parentNode)if (t == e) return !0;
        return !1;
    }
    domFromPos(e) {
        return {
            node: this.nodeDOM,
            offset: e
        };
    }
    localPosFromDOM(e, t, r) {
        return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
    }
    ignoreMutation(e) {
        return e.type != "characterData" && e.type != "selection";
    }
    slice(e, t, r) {
        let i = this.node.cut(e, t), o = document.createTextNode(i.text);
        return new oo(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
    }
    markDirty(e, t) {
        super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ve);
    }
    get domAtom() {
        return !1;
    }
    isText(e) {
        return this.node.text == e;
    }
}
class dh extends br {
    parseRule() {
        return {
            ignore: !0
        };
    }
    matchesHack(e) {
        return this.dirty == Oe && this.dom.nodeName == e;
    }
    get domAtom() {
        return !0;
    }
    get ignoreForCoords() {
        return this.dom.nodeName == "IMG";
    }
}
class dg extends kt {
    constructor(e, t, r, i, o, s, l, a, c, f){
        super(e, t, r, i, o, s, l, c, f), this.spec = a;
    }
    // A custom `update` method gets to decide whether the update goes
    // through. If it does, and there's a `contentDOM` node, our logic
    // updates the children.
    update(e, t, r, i) {
        if (this.dirty == Ve) return !1;
        if (this.spec.update) {
            let o = this.spec.update(e, t, r);
            return o && this.updateInner(e, t, r, i), o;
        } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
    }
    selectNode() {
        this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
    }
    deselectNode() {
        this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
    }
    setSelection(e, t, r, i) {
        this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
    }
    destroy() {
        this.spec.destroy && this.spec.destroy(), super.destroy();
    }
    stopEvent(e) {
        return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
    }
    ignoreMutation(e) {
        return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
    }
}
function ph(n, e, t) {
    let r = n.firstChild, i = !1;
    for(let o = 0; o < e.length; o++){
        let s = e[o], l = s.dom;
        if (l.parentNode == n) {
            for(; l != r;)r = Ba(r), i = !0;
            r = r.nextSibling;
        } else i = !0, n.insertBefore(l, r);
        if (s instanceof Kt) {
            let a = r ? r.previousSibling : n.lastChild;
            ph(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
        }
    }
    for(; r;)r = Ba(r), i = !0;
    i && t.trackWrites == n && (t.trackWrites = null);
}
const Hn = function(n) {
    n && (this.nodeName = n);
};
Hn.prototype = /* @__PURE__ */ Object.create(null);
const $t = [
    new Hn()
];
function bs(n, e, t) {
    if (n.length == 0) return $t;
    let r = t ? $t[0] : new Hn(), i = [
        r
    ];
    for(let o = 0; o < n.length; o++){
        let s = n[o].type.attrs;
        if (s) {
            s.nodeName && i.push(r = new Hn(s.nodeName));
            for(let l in s){
                let a = s[l];
                a != null && (t && i.length == 1 && i.push(r = new Hn(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
            }
        }
    }
    return i;
}
function mh(n, e, t, r) {
    if (t == $t && r == $t) return e;
    let i = e;
    for(let o = 0; o < r.length; o++){
        let s = r[o], l = t[o];
        if (o) {
            let a;
            l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = $t[0]), i = a;
        }
        pg(i, l || $t[0], s);
    }
    return i;
}
function pg(n, e, t) {
    for(let r in e)r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
    for(let r in t)r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
    if (e.class != t.class) {
        let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
        for(let o = 0; o < r.length; o++)i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
        for(let o = 0; o < i.length; o++)r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
        n.classList.length == 0 && n.removeAttribute("class");
    }
    if (e.style != t.style) {
        if (e.style) {
            let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
            for(; i = r.exec(e.style);)n.style.removeProperty(i[1]);
        }
        t.style && (n.style.cssText += t.style);
    }
}
function gh(n, e, t) {
    return mh(n, n, $t, bs(e, t, n.nodeType != 1));
}
function vs(n, e) {
    if (n.length != e.length) return !1;
    for(let t = 0; t < n.length; t++)if (!n[t].type.eq(e[t].type)) return !1;
    return !0;
}
function Ba(n) {
    let e = n.nextSibling;
    return n.parentNode.removeChild(n), e;
}
class mg {
    constructor(e, t, r){
        this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = gg(e.node.content, e);
    }
    // Destroy and remove the children between the given indices in
    // `this.top`.
    destroyBetween(e, t) {
        if (e != t) {
            for(let r = e; r < t; r++)this.top.children[r].destroy();
            this.top.children.splice(e, t - e), this.changed = !0;
        }
    }
    // Destroy all remaining children in `this.top`.
    destroyRest() {
        this.destroyBetween(this.index, this.top.children.length);
    }
    // Sync the current stack of mark descs with the given array of
    // marks, reusing existing mark descs when possible.
    syncToMarks(e, t, r) {
        let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
        for(; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1;)i++;
        for(; i < o;)this.destroyRest(), this.top.dirty = Oe, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
        for(; o < e.length;){
            this.stack.push(this.top, this.index + 1);
            let l = -1;
            for(let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++){
                let c = this.top.children[a];
                if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
                    l = a;
                    break;
                }
            }
            if (l > -1) l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
            else {
                let a = Kt.create(this.top, e[o], t, r);
                this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
            }
            this.index = 0, o++;
        }
    }
    // Try to find a node desc matching the given data. Skip over it and
    // return true when successful.
    findNodeMatch(e, t, r, i) {
        let o = -1, s;
        if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r)) o = this.top.children.indexOf(s, this.index);
        else for(let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++){
            let c = this.top.children[l];
            if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
                o = l;
                break;
            }
        }
        return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
    }
    updateNodeAt(e, t, r, i, o) {
        let s = this.top.children[i];
        return s.dirty == Ve && s.dom == s.contentDOM && (s.dirty = Pt), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
    }
    findIndexWithChild(e) {
        for(;;){
            let t = e.parentNode;
            if (!t) return -1;
            if (t == this.top.contentDOM) {
                let r = e.pmViewDesc;
                if (r) {
                    for(let i = this.index; i < this.top.children.length; i++)if (this.top.children[i] == r) return i;
                }
                return -1;
            }
            e = t;
        }
    }
    // Try to update the next node, if any, to the given data. Checks
    // pre-matches to avoid overwriting nodes that could still be used.
    updateNextNode(e, t, r, i, o, s) {
        for(let l = this.index; l < this.top.children.length; l++){
            let a = this.top.children[l];
            if (a instanceof kt) {
                let c = this.preMatch.matched.get(a);
                if (c != null && c != o) return !1;
                let f = a.dom, u, h = this.isLocked(f) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Ve && vs(t, a.outerDeco));
                if (!h && a.update(e, t, r, i)) return this.destroyBetween(this.index, l), a.dom != f && (this.changed = !0), this.index++, !0;
                if (!h && (u = this.recreateWrapper(a, e, t, r, i, s))) return this.top.children[this.index] = u, u.contentDOM && (u.dirty = Pt, u.updateChildren(i, s + 1), u.dirty = Oe), this.changed = !0, this.index++, !0;
                break;
            }
        }
        return !1;
    }
    // When a node with content is replaced by a different node with
    // identical content, move over its children.
    recreateWrapper(e, t, r, i, o, s) {
        if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content)) return null;
        let l = kt.create(this.top, t, r, i, o, s);
        if (l.contentDOM) {
            l.children = e.children, e.children = [];
            for (let a of l.children)a.parent = l;
        }
        return e.destroy(), l;
    }
    // Insert the node as a newly created node desc.
    addNode(e, t, r, i, o) {
        let s = kt.create(this.top, e, t, r, i, o);
        s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
    placeWidget(e, t, r) {
        let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
        if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode)) this.index++;
        else {
            let o = new hh(this.top, e, t, r);
            this.top.children.splice(this.index++, 0, o), this.changed = !0;
        }
    }
    // Make sure a textblock looks and behaves correctly in
    // contentEditable.
    addTextblockHacks() {
        let e = this.top.children[this.index - 1], t = this.top;
        for(; e instanceof Kt;)t = e, e = t.children[t.children.length - 1];
        (!e || // Empty textblock
        !(e instanceof oo) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((de || ce) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
    }
    addHackNode(e, t) {
        if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e)) this.index++;
        else {
            let r = document.createElement(e);
            e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
            let i = new dh(this.top, [], r, null);
            t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
        }
    }
    isLocked(e) {
        return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
    }
}
function gg(n, e) {
    let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
    e: for(; i > 0;){
        let l;
        for(;;)if (r) {
            let c = t.children[r - 1];
            if (c instanceof Kt) t = c, r = c.children.length;
            else {
                l = c, r--;
                break;
            }
        } else {
            if (t == e) break e;
            r = t.parent.children.indexOf(t), t = t.parent;
        }
        let a = l.node;
        if (a) {
            if (a != n.child(i - 1)) break;
            --i, o.set(l, i), s.push(l);
        }
    }
    return {
        index: i,
        matched: o,
        matches: s.reverse()
    };
}
function yg(n, e) {
    return n.type.side - e.type.side;
}
function bg(n, e, t, r) {
    let i = e.locals(n), o = 0;
    if (i.length == 0) {
        for(let c = 0; c < n.childCount; c++){
            let f = n.child(c);
            r(f, i, e.forChild(o, f), c), o += f.nodeSize;
        }
        return;
    }
    let s = 0, l = [], a = null;
    for(let c = 0;;){
        let f, u;
        for(; s < i.length && i[s].to == o;){
            let g = i[s++];
            g.widget && (f ? (u || (u = [
                f
            ])).push(g) : f = g);
        }
        if (f) if (u) {
            u.sort(yg);
            for(let g = 0; g < u.length; g++)t(u[g], c, !!a);
        } else t(f, c, !!a);
        let h, p;
        if (a) p = -1, h = a, a = null;
        else if (c < n.childCount) p = c, h = n.child(c++);
        else break;
        for(let g = 0; g < l.length; g++)l[g].to <= o && l.splice(g--, 1);
        for(; s < i.length && i[s].from <= o && i[s].to > o;)l.push(i[s++]);
        let d = o + h.nodeSize;
        if (h.isText) {
            let g = d;
            s < i.length && i[s].from < g && (g = i[s].from);
            for(let y = 0; y < l.length; y++)l[y].to < g && (g = l[y].to);
            g < d && (a = h.cut(g - o), h = h.cut(0, g - o), d = g, p = -1);
        } else for(; s < i.length && i[s].to < d;)s++;
        let m = h.isInline && !h.isLeaf ? l.filter((g)=>!g.inline) : l.slice();
        r(h, m, e.forChild(o, h), p), o = d;
    }
}
function vg(n) {
    if (n.nodeName == "UL" || n.nodeName == "OL") {
        let e = n.style.cssText;
        n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
    }
}
function Sg(n, e, t, r) {
    for(let i = 0, o = 0; i < n.childCount && o <= r;){
        let s = n.child(i++), l = o;
        if (o += s.nodeSize, !s.isText) continue;
        let a = s.text;
        for(; i < n.childCount;){
            let c = n.child(i++);
            if (o += c.nodeSize, !c.isText) break;
            a += c.text;
        }
        if (o >= t) {
            if (o >= r && a.slice(r - e.length - l, r - l) == e) return r - e.length;
            let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
            if (c >= 0 && c + e.length + l >= t) return l + c;
            if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e) return r;
        }
    }
    return -1;
}
function Ss(n, e, t, r, i) {
    let o = [];
    for(let s = 0, l = 0; s < n.length; s++){
        let a = n[s], c = l, f = l += a.size;
        c >= t || f <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), f > t && o.push(a.slice(t - c, a.size, r)));
    }
    return o;
}
function yl(n, e = null) {
    let t = n.domSelectionRange(), r = n.state.doc;
    if (!t.focusNode) return null;
    let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
    if (s < 0) return null;
    let l = r.resolve(s), a, c;
    if (io(t)) {
        for(a = l; i && !i.node;)i = i.parent;
        let f = i.node;
        if (i && f.isAtom && M.isSelectable(f) && i.parent && !(f.isInline && Km(t.focusNode, t.focusOffset, i.dom))) {
            let u = i.posBefore;
            c = new M(s == u ? l : r.resolve(u));
        }
    } else {
        let f = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
        if (f < 0) return null;
        a = r.resolve(f);
    }
    if (!c) {
        let f = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
        c = bl(n, a, l, f);
    }
    return c;
}
function yh(n) {
    return n.editable ? n.hasFocus() : vh(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function nt(n, e = !1) {
    let t = n.state.selection;
    if (bh(n, t), !!yh(n)) {
        if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && ce) {
            let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
            if (r.anchorNode && i.anchorNode && Ut(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
                n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
                return;
            }
        }
        if (n.domObserver.disconnectSelection(), n.cursorWrapper) xg(n);
        else {
            let { anchor: r, head: i } = t, o, s;
            za && !(t instanceof z) && (t.$from.parent.inlineContent || (o = La(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = La(n, t.to))), n.docView.setSelection(r, i, n.root, e), za && (o && Fa(o), s && Fa(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && wg(n));
        }
        n.domObserver.setCurSelection(), n.domObserver.connectSelection();
    }
}
const za = de || ce && oh < 63;
function La(n, e) {
    let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
    if (de && i && i.contentEditable == "false") return Eo(i);
    if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
        if (i) return Eo(i);
        if (o) return Eo(o);
    }
}
function Eo(n) {
    return n.contentEditable = "true", de && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Fa(n) {
    n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function wg(n) {
    let e = n.dom.ownerDocument;
    e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
    let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
    e.addEventListener("selectionchange", n.input.hideSelectionGuard = ()=>{
        (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(()=>{
            (!yh(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
        }, 20));
    });
}
function xg(n) {
    let e = n.domSelection(), t = document.createRange();
    if (!e) return;
    let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
    i ? t.setStart(r.parentNode, oe(r) + 1) : t.setStart(r, 0);
    let o = n.state.selection;
    if (o.empty) t.collapse(!0);
    else {
        let s = n.domAtPos(o.to);
        t.setEnd(s.node, s.offset);
    }
    e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && be && Ot <= 11 && (r.disabled = !0, r.disabled = !1);
}
function bh(n, e) {
    if (e instanceof M) {
        let t = n.docView.descAt(e.from);
        t != n.lastSelectedViewDesc && (_a(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
    } else _a(n);
}
function _a(n) {
    n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function bl(n, e, t, r) {
    return n.someProp("createSelectionBetween", (i)=>i(n, e, t)) || z.between(e, t, r);
}
function ja(n) {
    return n.editable && !n.hasFocus() ? !1 : vh(n);
}
function vh(n) {
    let e = n.domSelectionRange();
    if (!e.anchorNode) return !1;
    try {
        return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
    } catch  {
        return !1;
    }
}
function Cg(n) {
    let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
    return Ut(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function ws(n, e) {
    let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
    return o && R.findFrom(o, e);
}
function ht(n, e) {
    return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Va(n, e, t) {
    let r = n.state.selection;
    if (r instanceof z) if (t.indexOf("s") > -1) {
        let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
        if (!o || o.isText || !o.isLeaf) return !1;
        let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
        return ht(n, new z(r.$anchor, s));
    } else if (r.empty) {
        if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
            let i = ws(n.state, e);
            return i && i instanceof M ? ht(n, i) : !1;
        } else if (!(xe && t.indexOf("m") > -1)) {
            let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
            if (!o || o.isText) return !1;
            let l = e < 0 ? i.pos - o.nodeSize : i.pos;
            return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? M.isSelectable(o) ? ht(n, new M(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : yr ? ht(n, new z(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
        }
    } else return !1;
    else {
        if (r instanceof M && r.node.isInline) return ht(n, new z(e > 0 ? r.$to : r.$from));
        {
            let i = ws(n.state, e);
            return i ? ht(n, i) : !1;
        }
    }
}
function ii(n) {
    return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Un(n, e) {
    let t = n.pmViewDesc;
    return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function en(n, e) {
    return e < 0 ? Og(n) : kg(n);
}
function Og(n) {
    let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
    if (!t) return;
    let i, o, s = !1;
    for(Re && t.nodeType == 1 && r < ii(t) && Un(t.childNodes[r], -1) && (s = !0);;)if (r > 0) {
        if (t.nodeType != 1) break;
        {
            let l = t.childNodes[r - 1];
            if (Un(l, -1)) i = t, o = --r;
            else if (l.nodeType == 3) t = l, r = t.nodeValue.length;
            else break;
        }
    } else {
        if (Sh(t)) break;
        {
            let l = t.previousSibling;
            for(; l && Un(l, -1);)i = t.parentNode, o = oe(l), l = l.previousSibling;
            if (l) t = l, r = ii(t);
            else {
                if (t = t.parentNode, t == n.dom) break;
                r = 0;
            }
        }
    }
    s ? xs(n, t, r) : i && xs(n, i, o);
}
function kg(n) {
    let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
    if (!t) return;
    let i = ii(t), o, s;
    for(;;)if (r < i) {
        if (t.nodeType != 1) break;
        let l = t.childNodes[r];
        if (Un(l, 1)) o = t, s = ++r;
        else break;
    } else {
        if (Sh(t)) break;
        {
            let l = t.nextSibling;
            for(; l && Un(l, 1);)o = l.parentNode, s = oe(l) + 1, l = l.nextSibling;
            if (l) t = l, r = 0, i = ii(t);
            else {
                if (t = t.parentNode, t == n.dom) break;
                r = i = 0;
            }
        }
    }
    o && xs(n, o, s);
}
function Sh(n) {
    let e = n.pmViewDesc;
    return e && e.node && e.node.isBlock;
}
function Ag(n, e) {
    for(; n && e == n.childNodes.length && !gr(n);)e = oe(n) + 1, n = n.parentNode;
    for(; n && e < n.childNodes.length;){
        let t = n.childNodes[e];
        if (t.nodeType == 3) return t;
        if (t.nodeType == 1 && t.contentEditable == "false") break;
        n = t, e = 0;
    }
}
function Eg(n, e) {
    for(; n && !e && !gr(n);)e = oe(n), n = n.parentNode;
    for(; n && e;){
        let t = n.childNodes[e - 1];
        if (t.nodeType == 3) return t;
        if (t.nodeType == 1 && t.contentEditable == "false") break;
        n = t, e = n.childNodes.length;
    }
}
function xs(n, e, t) {
    if (e.nodeType != 3) {
        let o, s;
        (s = Ag(e, t)) ? (e = s, t = 0) : (o = Eg(e, t)) && (e = o, t = o.nodeValue.length);
    }
    let r = n.domSelection();
    if (!r) return;
    if (io(r)) {
        let o = document.createRange();
        o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
    } else r.extend && r.extend(e, t);
    n.domObserver.setCurSelection();
    let { state: i } = n;
    setTimeout(()=>{
        n.state == i && nt(n);
    }, 50);
}
function Wa(n, e) {
    let t = n.state.doc.resolve(e);
    if (!(ce || Gm) && t.parent.inlineContent) {
        let i = n.coordsAtPos(e);
        if (e > t.start()) {
            let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
            if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1) return o.left < i.left ? "ltr" : "rtl";
        }
        if (e < t.end()) {
            let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
            if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1) return o.left > i.left ? "ltr" : "rtl";
        }
    }
    return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Ha(n, e, t) {
    let r = n.state.selection;
    if (r instanceof z && !r.empty || t.indexOf("s") > -1 || xe && t.indexOf("m") > -1) return !1;
    let { $from: i, $to: o } = r;
    if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
        let s = ws(n.state, e);
        if (s && s instanceof M) return ht(n, s);
    }
    if (!i.parent.inlineContent) {
        let s = e < 0 ? i : o, l = r instanceof Me ? R.near(s, e) : R.findFrom(s, e);
        return l ? ht(n, l) : !1;
    }
    return !1;
}
function Ua(n, e) {
    if (!(n.state.selection instanceof z)) return !0;
    let { $head: t, $anchor: r, empty: i } = n.state.selection;
    if (!t.sameParent(r)) return !0;
    if (!i) return !1;
    if (n.endOfTextblock(e > 0 ? "forward" : "backward")) return !0;
    let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
    if (o && !o.isText) {
        let s = n.state.tr;
        return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
    }
    return !1;
}
function Ka(n, e, t) {
    n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Tg(n) {
    if (!de || n.state.selection.$head.parentOffset > 0) return !1;
    let { focusNode: e, focusOffset: t } = n.domSelectionRange();
    if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
        let r = e.firstChild;
        Ka(n, r, "true"), setTimeout(()=>Ka(n, r, "false"), 20);
    }
    return !1;
}
function Mg(n) {
    let e = "";
    return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Ng(n, e) {
    let t = e.keyCode, r = Mg(e);
    if (t == 8 || xe && t == 72 && r == "c") return Ua(n, -1) || en(n, -1);
    if (t == 46 && !e.shiftKey || xe && t == 68 && r == "c") return Ua(n, 1) || en(n, 1);
    if (t == 13 || t == 27) return !0;
    if (t == 37 || xe && t == 66 && r == "c") {
        let i = t == 37 ? Wa(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
        return Va(n, i, r) || en(n, i);
    } else if (t == 39 || xe && t == 70 && r == "c") {
        let i = t == 39 ? Wa(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
        return Va(n, i, r) || en(n, i);
    } else {
        if (t == 38 || xe && t == 80 && r == "c") return Ha(n, -1, r) || en(n, -1);
        if (t == 40 || xe && t == 78 && r == "c") return Tg(n) || Ha(n, 1, r) || en(n, 1);
        if (r == (xe ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90)) return !0;
    }
    return !1;
}
function wh(n, e) {
    n.someProp("transformCopied", (p)=>{
        e = p(e, n);
    });
    let t = [], { content: r, openStart: i, openEnd: o } = e;
    for(; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1;){
        i--, o--;
        let p = r.firstChild;
        t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
    }
    let s = n.someProp("clipboardSerializer") || On.fromSchema(n.state.schema), l = Eh(), a = l.createElement("div");
    a.appendChild(s.serializeFragment(r, {
        document: l
    }));
    let c = a.firstChild, f, u = 0;
    for(; c && c.nodeType == 1 && (f = Ah[c.nodeName.toLowerCase()]);){
        for(let p = f.length - 1; p >= 0; p--){
            let d = l.createElement(f[p]);
            for(; a.firstChild;)d.appendChild(a.firstChild);
            a.appendChild(d), u++;
        }
        c = a.firstChild;
    }
    c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${u ? ` -${u}` : ""} ${JSON.stringify(t)}`);
    let h = n.someProp("clipboardTextSerializer", (p)=>p(e, n)) || e.content.textBetween(0, e.content.size, `

`);
    return {
        dom: a,
        text: h,
        slice: e
    };
}
function xh(n, e, t, r, i) {
    let o = i.parent.type.spec.code, s, l;
    if (!t && !e) return null;
    let a = e && (r || o || !t);
    if (a) {
        if (n.someProp("transformPastedText", (h)=>{
            e = h(e, o || r, n);
        }), o) return e ? new w(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : w.empty;
        let u = n.someProp("clipboardTextParser", (h)=>h(e, i, r, n));
        if (u) l = u;
        else {
            let h = i.marks(), { schema: p } = n.state, d = On.fromSchema(p);
            s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m)=>{
                let g = s.appendChild(document.createElement("p"));
                m && g.appendChild(d.serializeNode(p.text(m, h)));
            });
        }
    } else n.someProp("transformPastedHTML", (u)=>{
        t = u(t, n);
    }), s = Dg(t), yr && Pg(s);
    let c = s && s.querySelector("[data-pm-slice]"), f = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
    if (f && f[3]) for(let u = +f[3]; u > 0; u--){
        let h = s.firstChild;
        for(; h && h.nodeType != 1;)h = h.nextSibling;
        if (!h) break;
        s = h;
    }
    if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || er.fromSchema(n.state.schema)).parseSlice(s, {
        preserveWhitespace: !!(a || f),
        context: i,
        ruleFromNode (h) {
            return h.nodeName == "BR" && !h.nextSibling && h.parentNode && !Rg.test(h.parentNode.nodeName) ? {
                ignore: !0
            } : null;
        }
    })), f) l = $g(Ja(l, +f[1], +f[2]), f[4]);
    else if (l = w.maxOpen(Ig(l.content, i), !0), l.openStart || l.openEnd) {
        let u = 0, h = 0;
        for(let p = l.content.firstChild; u < l.openStart && !p.type.spec.isolating; u++, p = p.firstChild);
        for(let p = l.content.lastChild; h < l.openEnd && !p.type.spec.isolating; h++, p = p.lastChild);
        l = Ja(l, u, h);
    }
    return n.someProp("transformPasted", (u)=>{
        l = u(l, n);
    }), l;
}
const Rg = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Ig(n, e) {
    if (n.childCount < 2) return n;
    for(let t = e.depth; t >= 0; t--){
        let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
        if (n.forEach((l)=>{
            if (!s) return;
            let a = i.findWrapping(l.type), c;
            if (!a) return s = null;
            if (c = s.length && o.length && Oh(a, o, l, s[s.length - 1], 0)) s[s.length - 1] = c;
            else {
                s.length && (s[s.length - 1] = kh(s[s.length - 1], o.length));
                let f = Ch(l, a);
                s.push(f), i = i.matchType(f.type), o = a;
            }
        }), s) return b.from(s);
    }
    return n;
}
function Ch(n, e, t = 0) {
    for(let r = e.length - 1; r >= t; r--)n = e[r].create(null, b.from(n));
    return n;
}
function Oh(n, e, t, r, i) {
    if (i < n.length && i < e.length && n[i] == e[i]) {
        let o = Oh(n, e, t, r.lastChild, i + 1);
        if (o) return r.copy(r.content.replaceChild(r.childCount - 1, o));
        if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1])) return r.copy(r.content.append(b.from(Ch(t, n, i + 1))));
    }
}
function kh(n, e) {
    if (e == 0) return n;
    let t = n.content.replaceChild(n.childCount - 1, kh(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
    return n.copy(t.append(r));
}
function Cs(n, e, t, r, i, o) {
    let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
    return n.childCount > 1 && (o = 0), i < r - 1 && (l = Cs(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function Ja(n, e, t) {
    return e < n.openStart && (n = new w(Cs(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new w(Cs(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Ah = {
    thead: [
        "table"
    ],
    tbody: [
        "table"
    ],
    tfoot: [
        "table"
    ],
    caption: [
        "table"
    ],
    colgroup: [
        "table"
    ],
    col: [
        "table",
        "colgroup"
    ],
    tr: [
        "table",
        "tbody"
    ],
    td: [
        "table",
        "tbody",
        "tr"
    ],
    th: [
        "table",
        "tbody",
        "tr"
    ]
};
let qa = null;
function Eh() {
    return qa || (qa = document.implementation.createHTMLDocument("title"));
}
function Dg(n) {
    let e = /^(\s*<meta [^>]*>)*/.exec(n);
    e && (n = n.slice(e[0].length));
    let t = Eh().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
    if ((i = r && Ah[r[1].toLowerCase()]) && (n = i.map((o)=>"<" + o + ">").join("") + n + i.map((o)=>"</" + o + ">").reverse().join("")), t.innerHTML = n, i) for(let o = 0; o < i.length; o++)t = t.querySelector(i[o]) || t;
    return t;
}
function Pg(n) {
    let e = n.querySelectorAll(ce ? "span:not([class]):not([style])" : "span.Apple-converted-space");
    for(let t = 0; t < e.length; t++){
        let r = e[t];
        r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
    }
}
function $g(n, e) {
    if (!n.size) return n;
    let t = n.content.firstChild.type.schema, r;
    try {
        r = JSON.parse(e);
    } catch  {
        return n;
    }
    let { content: i, openStart: o, openEnd: s } = n;
    for(let l = r.length - 2; l >= 0; l -= 2){
        let a = t.nodes[r[l]];
        if (!a || a.hasRequiredAttrs()) break;
        i = b.from(a.create(r[l + 1], i)), o++, s++;
    }
    return new w(i, o, s);
}
const pe = {}, me = {}, Bg = {
    touchstart: !0,
    touchmove: !0
};
class zg {
    constructor(){
        this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = {
            time: 0,
            x: 0,
            y: 0,
            type: ""
        }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
    }
}
function Lg(n) {
    for(let e in pe){
        let t = pe[e];
        n.dom.addEventListener(e, n.input.eventHandlers[e] = (r)=>{
            _g(n, r) && !vl(n, r) && (n.editable || !(r.type in me)) && t(n, r);
        }, Bg[e] ? {
            passive: !0
        } : void 0);
    }
    de && n.dom.addEventListener("input", ()=>null), Os(n);
}
function xt(n, e) {
    n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Fg(n) {
    n.domObserver.stop();
    for(let e in n.input.eventHandlers)n.dom.removeEventListener(e, n.input.eventHandlers[e]);
    clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Os(n) {
    n.someProp("handleDOMEvents", (e)=>{
        for(let t in e)n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r)=>vl(n, r));
    });
}
function vl(n, e) {
    return n.someProp("handleDOMEvents", (t)=>{
        let r = t[e.type];
        return r ? r(n, e) || e.defaultPrevented : !1;
    });
}
function _g(n, e) {
    if (!e.bubbles) return !0;
    if (e.defaultPrevented) return !1;
    for(let t = e.target; t != n.dom; t = t.parentNode)if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e)) return !1;
    return !0;
}
function jg(n, e) {
    !vl(n, e) && pe[e.type] && (n.editable || !(e.type in me)) && pe[e.type](n, e);
}
me.keydown = (n, e)=>{
    let t = e;
    if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Mh(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Ee && ce && t.keyCode == 13))) if (t.keyCode != 229 && n.domObserver.forceFlush(), bn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
        let r = Date.now();
        n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(()=>{
            n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i)=>i(n, Dt(13, "Enter"))), n.input.lastIOSEnter = 0);
        }, 200);
    } else n.someProp("handleKeyDown", (r)=>r(n, t)) || Ng(n, t) ? t.preventDefault() : xt(n, "key");
};
me.keyup = (n, e)=>{
    e.keyCode == 16 && (n.input.shiftKey = !1);
};
me.keypress = (n, e)=>{
    let t = e;
    if (Mh(n, t) || !t.charCode || t.ctrlKey && !t.altKey || xe && t.metaKey) return;
    if (n.someProp("handleKeyPress", (i)=>i(n, t))) {
        t.preventDefault();
        return;
    }
    let r = n.state.selection;
    if (!(r instanceof z) || !r.$from.sameParent(r.$to)) {
        let i = String.fromCharCode(t.charCode);
        !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o)=>o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
    }
};
function so(n) {
    return {
        left: n.clientX,
        top: n.clientY
    };
}
function Vg(n, e) {
    let t = e.x - n.clientX, r = e.y - n.clientY;
    return t * t + r * r < 100;
}
function Sl(n, e, t, r, i) {
    if (r == -1) return !1;
    let o = n.state.doc.resolve(r);
    for(let s = o.depth + 1; s > 0; s--)if (n.someProp(e, (l)=>s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1))) return !0;
    return !1;
}
function hn(n, e, t) {
    if (n.focused || n.focus(), n.state.selection.eq(e)) return;
    let r = n.state.tr.setSelection(e);
    r.setMeta("pointer", !0), n.dispatch(r);
}
function Wg(n, e) {
    if (e == -1) return !1;
    let t = n.state.doc.resolve(e), r = t.nodeAfter;
    return r && r.isAtom && M.isSelectable(r) ? (hn(n, new M(t)), !0) : !1;
}
function Hg(n, e) {
    if (e == -1) return !1;
    let t = n.state.selection, r, i;
    t instanceof M && (r = t.node);
    let o = n.state.doc.resolve(e);
    for(let s = o.depth + 1; s > 0; s--){
        let l = s > o.depth ? o.nodeAfter : o.node(s);
        if (M.isSelectable(l)) {
            r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
            break;
        }
    }
    return i != null ? (hn(n, M.create(n.state.doc, i)), !0) : !1;
}
function Ug(n, e, t, r, i) {
    return Sl(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o)=>o(n, e, r)) || (i ? Hg(n, t) : Wg(n, t));
}
function Kg(n, e, t, r) {
    return Sl(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i)=>i(n, e, r));
}
function Jg(n, e, t, r) {
    return Sl(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i)=>i(n, e, r)) || qg(n, t, r);
}
function qg(n, e, t) {
    if (t.button != 0) return !1;
    let r = n.state.doc;
    if (e == -1) return r.inlineContent ? (hn(n, z.create(r, 0, r.content.size)), !0) : !1;
    let i = r.resolve(e);
    for(let o = i.depth + 1; o > 0; o--){
        let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
        if (s.inlineContent) hn(n, z.create(r, l + 1, l + 1 + s.content.size));
        else if (M.isSelectable(s)) hn(n, M.create(r, l));
        else continue;
        return !0;
    }
}
function wl(n) {
    return oi(n);
}
const Th = xe ? "metaKey" : "ctrlKey";
pe.mousedown = (n, e)=>{
    let t = e;
    n.input.shiftKey = t.shiftKey;
    let r = wl(n), i = Date.now(), o = "singleClick";
    i - n.input.lastClick.time < 500 && Vg(t, n.input.lastClick) && !t[Th] && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = {
        time: i,
        x: t.clientX,
        y: t.clientY,
        type: o
    };
    let s = n.posAtCoords(so(t));
    s && (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Gg(n, s, t, !!r)) : (o == "doubleClick" ? Kg : Jg)(n, s.pos, s.inside, t) ? t.preventDefault() : xt(n, "pointer"));
};
class Gg {
    constructor(e, t, r, i){
        this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Th], this.allowDefault = r.shiftKey;
        let o, s;
        if (t.inside > -1) o = e.state.doc.nodeAt(t.inside), s = t.inside;
        else {
            let f = e.state.doc.resolve(t.pos);
            o = f.parent, s = f.depth ? f.before() : 0;
        }
        const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
        this.target = a && a.dom.nodeType == 1 ? a.dom : null;
        let { selection: c } = e.state;
        (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof M && c.from <= s && c.to > s) && (this.mightDrag = {
            node: o,
            pos: s,
            addAttr: !!(this.target && !this.target.draggable),
            setUneditable: !!(this.target && Re && !this.target.hasAttribute("contentEditable"))
        }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(()=>{
            this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
        }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), xt(e, "pointer");
    }
    done() {
        this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(()=>nt(this.view)), this.view.input.mouseDown = null;
    }
    up(e) {
        if (this.done(), !this.view.dom.contains(e.target)) return;
        let t = this.pos;
        this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(so(e))), this.updateAllowDefault(e), this.allowDefault || !t ? xt(this.view, "pointer") : Ug(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
        de && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
        // cursor, but still report that the node is selected
        // when asked through getSelection. You'll then get a
        // situation where clicking at the point where that
        // (hidden) cursor is doesn't change the selection, and
        // thus doesn't get a reaction from ProseMirror. This
        // works around that.
        ce && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (hn(this.view, R.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : xt(this.view, "pointer");
    }
    move(e) {
        this.updateAllowDefault(e), xt(this.view, "pointer"), e.buttons == 0 && this.done();
    }
    updateAllowDefault(e) {
        !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
    }
}
pe.touchstart = (n)=>{
    n.input.lastTouch = Date.now(), wl(n), xt(n, "pointer");
};
pe.touchmove = (n)=>{
    n.input.lastTouch = Date.now(), xt(n, "pointer");
};
pe.contextmenu = (n)=>wl(n);
function Mh(n, e) {
    return n.composing ? !0 : de && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Yg = Ee ? 5e3 : -1;
me.compositionstart = me.compositionupdate = (n)=>{
    if (!n.composing) {
        n.domObserver.flush();
        let { state: e } = n, t = e.selection.$to;
        if (e.selection instanceof z && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r)=>r.type.spec.inclusive === !1))) n.markCursor = n.state.storedMarks || t.marks(), oi(n, !0), n.markCursor = null;
        else if (oi(n), Re && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
            let r = n.domSelectionRange();
            for(let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0;){
                let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
                if (!s) break;
                if (s.nodeType == 3) {
                    let l = n.domSelection();
                    l && l.collapse(s, s.nodeValue.length);
                    break;
                } else i = s, o = -1;
            }
        }
        n.input.composing = !0;
    }
    Nh(n, Yg);
};
me.compositionend = (n, e)=>{
    n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(()=>n.domObserver.flush()), n.input.compositionID++, Nh(n, 20));
};
function Nh(n, e) {
    clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(()=>oi(n), e));
}
function Rh(n) {
    for(n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Qg()); n.input.compositionNodes.length > 0;)n.input.compositionNodes.pop().markParentsDirty();
}
function Xg(n) {
    let e = n.domSelectionRange();
    if (!e.focusNode) return null;
    let t = Hm(e.focusNode, e.focusOffset), r = Um(e.focusNode, e.focusOffset);
    if (t && r && t != r) {
        let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
        if (t == o || r == o) return o;
        if (!i || !i.isText(r.nodeValue)) return r;
        if (n.input.compositionNode == r) {
            let s = t.pmViewDesc;
            if (!(!s || !s.isText(t.nodeValue))) return r;
        }
    }
    return t || r;
}
function Qg() {
    let n = document.createEvent("Event");
    return n.initEvent("event", !0, !0), n.timeStamp;
}
function oi(n, e = !1) {
    if (!(Ee && n.domObserver.flushingSoon >= 0)) {
        if (n.domObserver.forceFlush(), Rh(n), e || n.docView && n.docView.dirty) {
            let t = yl(n);
            return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
        }
        return !1;
    }
}
function Zg(n, e) {
    if (!n.dom.parentNode) return;
    let t = n.dom.parentNode.appendChild(document.createElement("div"));
    t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
    let r = getSelection(), i = document.createRange();
    i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(()=>{
        t.parentNode && t.parentNode.removeChild(t), n.focus();
    }, 50);
}
const rr = be && Ot < 15 || bn && Ym < 604;
pe.copy = me.cut = (n, e)=>{
    let t = e, r = n.state.selection, i = t.type == "cut";
    if (r.empty) return;
    let o = rr ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = wh(n, s);
    o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Zg(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function ey(n) {
    return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function ty(n, e) {
    if (!n.dom.parentNode) return;
    let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
    t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
    let i = n.input.shiftKey && n.input.lastKeyCode != 45;
    setTimeout(()=>{
        n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? ir(n, r.value, null, i, e) : ir(n, r.textContent, r.innerHTML, i, e);
    }, 50);
}
function ir(n, e, t, r, i) {
    let o = xh(n, e, t, r, n.state.selection.$from);
    if (n.someProp("handlePaste", (a)=>a(n, i, o || w.empty))) return !0;
    if (!o) return !1;
    let s = ey(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
    return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Ih(n) {
    let e = n.getData("text/plain") || n.getData("Text");
    if (e) return e;
    let t = n.getData("text/uri-list");
    return t ? t.replace(/\r?\n/g, " ") : "";
}
me.paste = (n, e)=>{
    let t = e;
    if (n.composing && !Ee) return;
    let r = rr ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
    r && ir(n, Ih(r), r.getData("text/html"), i, t) ? t.preventDefault() : ty(n, t);
};
class Dh {
    constructor(e, t, r){
        this.slice = e, this.move = t, this.node = r;
    }
}
const Ph = xe ? "altKey" : "ctrlKey";
pe.dragstart = (n, e)=>{
    let t = e, r = n.input.mouseDown;
    if (r && r.done(), !t.dataTransfer) return;
    let i = n.state.selection, o = i.empty ? null : n.posAtCoords(so(t)), s;
    if (!(o && o.pos >= i.from && o.pos <= (i instanceof M ? i.to - 1 : i.to))) {
        if (r && r.mightDrag) s = M.create(n.state.doc, r.mightDrag.pos);
        else if (t.target && t.target.nodeType == 1) {
            let u = n.docView.nearestDesc(t.target, !0);
            u && u.node.type.spec.draggable && u != n.docView && (s = M.create(n.state.doc, u.posBefore));
        }
    }
    let l = (s || n.state.selection).content(), { dom: a, text: c, slice: f } = wh(n, l);
    (!t.dataTransfer.files.length || !ce || oh > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(rr ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", rr || t.dataTransfer.setData("text/plain", c), n.dragging = new Dh(f, !t[Ph], s);
};
pe.dragend = (n)=>{
    let e = n.dragging;
    window.setTimeout(()=>{
        n.dragging == e && (n.dragging = null);
    }, 50);
};
me.dragover = me.dragenter = (n, e)=>e.preventDefault();
me.drop = (n, e)=>{
    let t = e, r = n.dragging;
    if (n.dragging = null, !t.dataTransfer) return;
    let i = n.posAtCoords(so(t));
    if (!i) return;
    let o = n.state.doc.resolve(i.pos), s = r && r.slice;
    s ? n.someProp("transformPasted", (d)=>{
        s = d(s, n);
    }) : s = xh(n, Ih(t.dataTransfer), rr ? null : t.dataTransfer.getData("text/html"), !1, o);
    let l = !!(r && !t[Ph]);
    if (n.someProp("handleDrop", (d)=>d(n, t, s || w.empty, l))) {
        t.preventDefault();
        return;
    }
    if (!s) return;
    t.preventDefault();
    let a = s ? Gu(n.state.doc, o.pos, s) : o.pos;
    a == null && (a = o.pos);
    let c = n.state.tr;
    if (l) {
        let { node: d } = r;
        d ? d.replace(c) : c.deleteSelection();
    }
    let f = c.mapping.map(a), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, h = c.doc;
    if (u ? c.replaceRangeWith(f, f, s.content.firstChild) : c.replaceRange(f, f, s), c.doc.eq(h)) return;
    let p = c.doc.resolve(f);
    if (u && M.isSelectable(s.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(s.content.firstChild)) c.setSelection(new M(p));
    else {
        let d = c.mapping.map(a);
        c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, C)=>d = C), c.setSelection(bl(n, p, c.doc.resolve(d)));
    }
    n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
pe.focus = (n)=>{
    n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(()=>{
        n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && nt(n);
    }, 20));
};
pe.blur = (n, e)=>{
    let t = e;
    n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
pe.beforeinput = (n, e)=>{
    if (ce && Ee && e.inputType == "deleteContentBackward") {
        n.domObserver.flushSoon();
        let { domChangeCount: r } = n.input;
        setTimeout(()=>{
            if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o)=>o(n, Dt(8, "Backspace"))))) return;
            let { $cursor: i } = n.state.selection;
            i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
        }, 50);
    }
};
for(let n in me)pe[n] = me[n];
function or(n, e) {
    if (n == e) return !0;
    for(let t in n)if (n[t] !== e[t]) return !1;
    for(let t in e)if (!(t in n)) return !1;
    return !0;
}
class si {
    constructor(e, t){
        this.toDOM = e, this.spec = t || Ft, this.side = this.spec.side || 0;
    }
    map(e, t, r, i) {
        let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
        return s ? null : new ye(o - r, o - r, this);
    }
    valid() {
        return !0;
    }
    eq(e) {
        return this == e || e instanceof si && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && or(this.spec, e.spec));
    }
    destroy(e) {
        this.spec.destroy && this.spec.destroy(e);
    }
}
class At {
    constructor(e, t){
        this.attrs = e, this.spec = t || Ft;
    }
    map(e, t, r, i) {
        let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
        return o >= s ? null : new ye(o, s, this);
    }
    valid(e, t) {
        return t.from < t.to;
    }
    eq(e) {
        return this == e || e instanceof At && or(this.attrs, e.attrs) && or(this.spec, e.spec);
    }
    static is(e) {
        return e.type instanceof At;
    }
    destroy() {}
}
class xl {
    constructor(e, t){
        this.attrs = e, this.spec = t || Ft;
    }
    map(e, t, r, i) {
        let o = e.mapResult(t.from + i, 1);
        if (o.deleted) return null;
        let s = e.mapResult(t.to + i, -1);
        return s.deleted || s.pos <= o.pos ? null : new ye(o.pos - r, s.pos - r, this);
    }
    valid(e, t) {
        let { index: r, offset: i } = e.content.findIndex(t.from), o;
        return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
    }
    eq(e) {
        return this == e || e instanceof xl && or(this.attrs, e.attrs) && or(this.spec, e.spec);
    }
    destroy() {}
}
class ye {
    /**
  @internal
  */ constructor(e, t, r){
        this.from = e, this.to = t, this.type = r;
    }
    /**
  @internal
  */ copy(e, t) {
        return new ye(e, t, this.type);
    }
    /**
  @internal
  */ eq(e, t = 0) {
        return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
    }
    /**
  @internal
  */ map(e, t, r) {
        return this.type.map(e, this, t, r);
    }
    /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */ static widget(e, t, r) {
        return new ye(e, e, new si(t, r));
    }
    /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */ static inline(e, t, r, i) {
        return new ye(e, t, new At(r, i));
    }
    /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */ static node(e, t, r, i) {
        return new ye(e, t, new xl(r, i));
    }
    /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */ get spec() {
        return this.type.spec;
    }
    /**
  @internal
  */ get inline() {
        return this.type instanceof At;
    }
    /**
  @internal
  */ get widget() {
        return this.type instanceof si;
    }
}
const sn = [], Ft = {};
class J {
    /**
  @internal
  */ constructor(e, t){
        this.local = e.length ? e : sn, this.children = t.length ? t : sn;
    }
    /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */ static create(e, t) {
        return t.length ? li(t, e, 0, Ft) : ae;
    }
    /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */ find(e, t, r) {
        let i = [];
        return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
    }
    findInner(e, t, r, i, o) {
        for(let s = 0; s < this.local.length; s++){
            let l = this.local[s];
            l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
        }
        for(let s = 0; s < this.children.length; s += 3)if (this.children[s] < t && this.children[s + 1] > e) {
            let l = this.children[s] + 1;
            this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
        }
    }
    /**
  Map the set of decorations in response to a change in the
  document.
  */ map(e, t, r) {
        return this == ae || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Ft);
    }
    /**
  @internal
  */ mapInner(e, t, r, i, o) {
        let s;
        for(let l = 0; l < this.local.length; l++){
            let a = this.local[l].map(e, r, i);
            a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
        }
        return this.children.length ? ny(this.children, s || [], e, t, r, i, o) : s ? new J(s.sort(_t), sn) : ae;
    }
    /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */ add(e, t) {
        return t.length ? this == ae ? J.create(e, t) : this.addInner(e, t, 0) : this;
    }
    addInner(e, t, r) {
        let i, o = 0;
        e.forEach((l, a)=>{
            let c = a + r, f;
            if (f = Bh(t, l, c)) {
                for(i || (i = this.children.slice()); o < i.length && i[o] < a;)o += 3;
                i[o] == a ? i[o + 2] = i[o + 2].addInner(l, f, c + 1) : i.splice(o, 0, a, a + l.nodeSize, li(f, l, c + 1, Ft)), o += 3;
            }
        });
        let s = $h(o ? zh(t) : t, -r);
        for(let l = 0; l < s.length; l++)s[l].type.valid(e, s[l]) || s.splice(l--, 1);
        return new J(s.length ? this.local.concat(s).sort(_t) : this.local, i || this.children);
    }
    /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */ remove(e) {
        return e.length == 0 || this == ae ? this : this.removeInner(e, 0);
    }
    removeInner(e, t) {
        let r = this.children, i = this.local;
        for(let o = 0; o < r.length; o += 3){
            let s, l = r[o] + t, a = r[o + 1] + t;
            for(let f = 0, u; f < e.length; f++)(u = e[f]) && u.from > l && u.to < a && (e[f] = null, (s || (s = [])).push(u));
            if (!s) continue;
            r == this.children && (r = this.children.slice());
            let c = r[o + 2].removeInner(s, l + 1);
            c != ae ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
        }
        if (i.length) {
            for(let o = 0, s; o < e.length; o++)if (s = e[o]) for(let l = 0; l < i.length; l++)i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
        }
        return r == this.children && i == this.local ? this : i.length || r.length ? new J(i, r) : ae;
    }
    forChild(e, t) {
        if (this == ae) return this;
        if (t.isLeaf) return J.empty;
        let r, i;
        for(let l = 0; l < this.children.length; l += 3)if (this.children[l] >= e) {
            this.children[l] == e && (r = this.children[l + 2]);
            break;
        }
        let o = e + 1, s = o + t.content.size;
        for(let l = 0; l < this.local.length; l++){
            let a = this.local[l];
            if (a.from < s && a.to > o && a.type instanceof At) {
                let c = Math.max(o, a.from) - o, f = Math.min(s, a.to) - o;
                c < f && (i || (i = [])).push(a.copy(c, f));
            }
        }
        if (i) {
            let l = new J(i.sort(_t), sn);
            return r ? new yt([
                l,
                r
            ]) : l;
        }
        return r || ae;
    }
    /**
  @internal
  */ eq(e) {
        if (this == e) return !0;
        if (!(e instanceof J) || this.local.length != e.local.length || this.children.length != e.children.length) return !1;
        for(let t = 0; t < this.local.length; t++)if (!this.local[t].eq(e.local[t])) return !1;
        for(let t = 0; t < this.children.length; t += 3)if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2])) return !1;
        return !0;
    }
    /**
  @internal
  */ locals(e) {
        return Cl(this.localsInner(e));
    }
    /**
  @internal
  */ localsInner(e) {
        if (this == ae) return sn;
        if (e.inlineContent || !this.local.some(At.is)) return this.local;
        let t = [];
        for(let r = 0; r < this.local.length; r++)this.local[r].type instanceof At || t.push(this.local[r]);
        return t;
    }
}
J.empty = new J([], []);
J.removeOverlap = Cl;
const ae = J.empty;
class yt {
    constructor(e){
        this.members = e;
    }
    map(e, t) {
        const r = this.members.map((i)=>i.map(e, t, Ft));
        return yt.from(r);
    }
    forChild(e, t) {
        if (t.isLeaf) return J.empty;
        let r = [];
        for(let i = 0; i < this.members.length; i++){
            let o = this.members[i].forChild(e, t);
            o != ae && (o instanceof yt ? r = r.concat(o.members) : r.push(o));
        }
        return yt.from(r);
    }
    eq(e) {
        if (!(e instanceof yt) || e.members.length != this.members.length) return !1;
        for(let t = 0; t < this.members.length; t++)if (!this.members[t].eq(e.members[t])) return !1;
        return !0;
    }
    locals(e) {
        let t, r = !0;
        for(let i = 0; i < this.members.length; i++){
            let o = this.members[i].localsInner(e);
            if (o.length) if (!t) t = o;
            else {
                r && (t = t.slice(), r = !1);
                for(let s = 0; s < o.length; s++)t.push(o[s]);
            }
        }
        return t ? Cl(r ? t : t.sort(_t)) : sn;
    }
    // Create a group for the given array of decoration sets, or return
    // a single set when possible.
    static from(e) {
        switch(e.length){
            case 0:
                return ae;
            case 1:
                return e[0];
            default:
                return new yt(e.every((t)=>t instanceof J) ? e : e.reduce((t, r)=>t.concat(r instanceof J ? r : r.members), []));
        }
    }
}
function ny(n, e, t, r, i, o, s) {
    let l = n.slice();
    for(let c = 0, f = o; c < t.maps.length; c++){
        let u = 0;
        t.maps[c].forEach((h, p, d, m)=>{
            let g = m - d - (p - h);
            for(let y = 0; y < l.length; y += 3){
                let C = l[y + 1];
                if (C < 0 || h > C + f - u) continue;
                let k = l[y] + f - u;
                p >= k ? l[y + 1] = h <= k ? -2 : -1 : h >= f && g && (l[y] += g, l[y + 1] += g);
            }
            u += g;
        }), f = t.maps[c].map(f, -1);
    }
    let a = !1;
    for(let c = 0; c < l.length; c += 3)if (l[c + 1] < 0) {
        if (l[c + 1] == -2) {
            a = !0, l[c + 1] = -1;
            continue;
        }
        let f = t.map(n[c] + o), u = f - i;
        if (u < 0 || u >= r.content.size) {
            a = !0;
            continue;
        }
        let h = t.map(n[c + 1] + o, -1), p = h - i, { index: d, offset: m } = r.content.findIndex(u), g = r.maybeChild(d);
        if (g && m == u && m + g.nodeSize == p) {
            let y = l[c + 2].mapInner(t, g, f + 1, n[c] + o + 1, s);
            y != ae ? (l[c] = u, l[c + 1] = p, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
        } else a = !0;
    }
    if (a) {
        let c = ry(l, n, e, t, i, o, s), f = li(c, r, 0, s);
        e = f.local;
        for(let u = 0; u < l.length; u += 3)l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
        for(let u = 0, h = 0; u < f.children.length; u += 3){
            let p = f.children[u];
            for(; h < l.length && l[h] < p;)h += 3;
            l.splice(h, 0, f.children[u], f.children[u + 1], f.children[u + 2]);
        }
    }
    return new J(e.sort(_t), l);
}
function $h(n, e) {
    if (!e || !n.length) return n;
    let t = [];
    for(let r = 0; r < n.length; r++){
        let i = n[r];
        t.push(new ye(i.from + e, i.to + e, i.type));
    }
    return t;
}
function ry(n, e, t, r, i, o, s) {
    function l(a, c) {
        for(let f = 0; f < a.local.length; f++){
            let u = a.local[f].map(r, i, c);
            u ? t.push(u) : s.onRemove && s.onRemove(a.local[f].spec);
        }
        for(let f = 0; f < a.children.length; f += 3)l(a.children[f + 2], a.children[f] + c + 1);
    }
    for(let a = 0; a < n.length; a += 3)n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
    return t;
}
function Bh(n, e, t) {
    if (e.isLeaf) return null;
    let r = t + e.nodeSize, i = null;
    for(let o = 0, s; o < n.length; o++)(s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
    return i;
}
function zh(n) {
    let e = [];
    for(let t = 0; t < n.length; t++)n[t] != null && e.push(n[t]);
    return e;
}
function li(n, e, t, r) {
    let i = [], o = !1;
    e.forEach((l, a)=>{
        let c = Bh(n, l, a + t);
        if (c) {
            o = !0;
            let f = li(c, l, t + a + 1, r);
            f != ae && i.push(a, a + l.nodeSize, f);
        }
    });
    let s = $h(o ? zh(n) : n, -t).sort(_t);
    for(let l = 0; l < s.length; l++)s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
    return s.length || i.length ? new J(s, i) : ae;
}
function _t(n, e) {
    return n.from - e.from || n.to - e.to;
}
function Cl(n) {
    let e = n;
    for(let t = 0; t < e.length - 1; t++){
        let r = e[t];
        if (r.from != r.to) for(let i = t + 1; i < e.length; i++){
            let o = e[i];
            if (o.from == r.from) {
                o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), Ga(e, i + 1, o.copy(r.to, o.to)));
                continue;
            } else {
                o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), Ga(e, i, r.copy(o.from, r.to)));
                break;
            }
        }
    }
    return e;
}
function Ga(n, e, t) {
    for(; e < n.length && _t(t, n[e]) > 0;)e++;
    n.splice(e, 0, t);
}
function To(n) {
    let e = [];
    return n.someProp("decorations", (t)=>{
        let r = t(n.state);
        r && r != ae && e.push(r);
    }), n.cursorWrapper && e.push(J.create(n.state.doc, [
        n.cursorWrapper.deco
    ])), yt.from(e);
}
const iy = {
    childList: !0,
    characterData: !0,
    characterDataOldValue: !0,
    attributes: !0,
    attributeOldValue: !0,
    subtree: !0
}, oy = be && Ot <= 11;
class sy {
    constructor(){
        this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
    }
    set(e) {
        this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
    }
    clear() {
        this.anchorNode = this.focusNode = null;
    }
    eq(e) {
        return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
    }
}
class ly {
    constructor(e, t){
        this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new sy(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r)=>{
            for(let i = 0; i < r.length; i++)this.queue.push(r[i]);
            be && Ot <= 11 && r.some((i)=>i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
        }), oy && (this.onCharData = (r)=>{
            this.queue.push({
                target: r.target,
                type: "characterData",
                oldValue: r.prevValue
            }), this.flushSoon();
        }), this.onSelectionChange = this.onSelectionChange.bind(this);
    }
    flushSoon() {
        this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(()=>{
            this.flushingSoon = -1, this.flush();
        }, 20));
    }
    forceFlush() {
        this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
    }
    start() {
        this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, iy)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
    }
    stop() {
        if (this.observer) {
            let e = this.observer.takeRecords();
            if (e.length) {
                for(let t = 0; t < e.length; t++)this.queue.push(e[t]);
                window.setTimeout(()=>this.flush(), 20);
            }
            this.observer.disconnect();
        }
        this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
    }
    connectSelection() {
        this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
    }
    disconnectSelection() {
        this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
    }
    suppressSelectionUpdates() {
        this.suppressingSelectionUpdates = !0, setTimeout(()=>this.suppressingSelectionUpdates = !1, 50);
    }
    onSelectionChange() {
        if (ja(this.view)) {
            if (this.suppressingSelectionUpdates) return nt(this.view);
            if (be && Ot <= 11 && !this.view.state.selection.empty) {
                let e = this.view.domSelectionRange();
                if (e.focusNode && Ut(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)) return this.flushSoon();
            }
            this.flush();
        }
    }
    setCurSelection() {
        this.currentSelection.set(this.view.domSelectionRange());
    }
    ignoreSelectionChange(e) {
        if (!e.focusNode) return !0;
        let t = /* @__PURE__ */ new Set(), r;
        for(let o = e.focusNode; o; o = nr(o))t.add(o);
        for(let o = e.anchorNode; o; o = nr(o))if (t.has(o)) {
            r = o;
            break;
        }
        let i = r && this.view.docView.nearestDesc(r);
        if (i && i.ignoreMutation({
            type: "selection",
            target: r.nodeType == 3 ? r.parentNode : r
        })) return this.setCurSelection(), !0;
    }
    pendingRecords() {
        if (this.observer) for (let e of this.observer.takeRecords())this.queue.push(e);
        return this.queue;
    }
    flush() {
        let { view: e } = this;
        if (!e.docView || this.flushingSoon > -1) return;
        let t = this.pendingRecords();
        t.length && (this.queue = []);
        let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && ja(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
        if (e.editable) for(let f = 0; f < t.length; f++){
            let u = this.registerMutation(t[f], a);
            u && (o = o < 0 ? u.from : Math.min(u.from, o), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
        }
        if (Re && a.length) {
            let f = a.filter((u)=>u.nodeName == "BR");
            if (f.length == 2) {
                let [u, h] = f;
                u.parentNode && u.parentNode.parentNode == h.parentNode ? h.remove() : u.remove();
            } else {
                let { focusNode: u } = this.currentSelection;
                for (let h of f){
                    let p = h.parentNode;
                    p && p.nodeName == "LI" && (!u || fy(e, u) != p) && h.remove();
                }
            }
        }
        let c = null;
        o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && io(r) && (c = yl(e)) && c.eq(R.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, nt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), ay(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || nt(e), this.currentSelection.set(r));
    }
    registerMutation(e, t) {
        if (t.indexOf(e.target) > -1) return null;
        let r = this.view.docView.nearestDesc(e.target);
        if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
        e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e)) return null;
        if (e.type == "childList") {
            for(let f = 0; f < e.addedNodes.length; f++){
                let u = e.addedNodes[f];
                t.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
            }
            if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target)) return {
                from: r.posBefore,
                to: r.posAfter
            };
            let i = e.previousSibling, o = e.nextSibling;
            if (be && Ot <= 11 && e.addedNodes.length) for(let f = 0; f < e.addedNodes.length; f++){
                let { previousSibling: u, nextSibling: h } = e.addedNodes[f];
                (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (i = u), (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (o = h);
            }
            let s = i && i.parentNode == e.target ? oe(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? oe(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
            return {
                from: l,
                to: c
            };
        } else return e.type == "attributes" ? {
            from: r.posAtStart - r.border,
            to: r.posAtEnd + r.border
        } : (this.lastChangedTextNode = e.target, {
            from: r.posAtStart,
            to: r.posAtEnd,
            // An event was generated for a text change that didn't change
            // any text. Mark the dom change to fall back to assuming the
            // selection was typed over with an identical value if it can't
            // find another change.
            typeOver: e.target.nodeValue == e.oldValue
        });
    }
}
let Ya = /* @__PURE__ */ new WeakMap(), Xa = !1;
function ay(n) {
    if (!Ya.has(n) && (Ya.set(n, null), [
        "normal",
        "nowrap",
        "pre-line"
    ].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
        if (n.requiresGeckoHackNode = Re, Xa) return;
        console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Xa = !0;
    }
}
function Qa(n, e) {
    let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
    return Ut(s.node, s.offset, i, o) && ([t, r, i, o] = [
        i,
        o,
        t,
        r
    ]), {
        anchorNode: t,
        anchorOffset: r,
        focusNode: i,
        focusOffset: o
    };
}
function cy(n, e) {
    if (e.getComposedRanges) {
        let i = e.getComposedRanges(n.root)[0];
        if (i) return Qa(n, i);
    }
    let t;
    function r(i) {
        i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
    }
    return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Qa(n, t) : null;
}
function fy(n, e) {
    for(let t = e.parentNode; t && t != n.dom; t = t.parentNode){
        let r = n.docView.nearestDesc(t, !0);
        if (r && r.node.isBlock) return t;
    }
    return null;
}
function uy(n, e, t) {
    let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, f = a.anchorNode;
    if (f && n.dom.contains(f.nodeType == 1 ? f : f.parentNode) && (c = [
        {
            node: f,
            offset: a.anchorOffset
        }
    ], io(a) || c.push({
        node: a.focusNode,
        offset: a.focusOffset
    })), ce && n.input.lastKeyCode === 8) for(let g = o; g > i; g--){
        let y = r.childNodes[g - 1], C = y.pmViewDesc;
        if (y.nodeName == "BR" && !C) {
            o = g;
            break;
        }
        if (!C || C.size) break;
    }
    let u = n.state.doc, h = n.someProp("domParser") || er.fromSchema(n.state.schema), p = u.resolve(s), d = null, m = h.parse(r, {
        topNode: p.parent,
        topMatch: p.parent.contentMatchAt(p.index()),
        topOpen: !0,
        from: i,
        to: o,
        preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
        findPositions: c,
        ruleFromNode: hy,
        context: p
    });
    if (c && c[0].pos != null) {
        let g = c[0].pos, y = c[1] && c[1].pos;
        y == null && (y = g), d = {
            anchor: g + s,
            head: y + s
        };
    }
    return {
        doc: m,
        sel: d,
        from: s,
        to: l
    };
}
function hy(n) {
    let e = n.pmViewDesc;
    if (e) return e.parseRule();
    if (n.nodeName == "BR" && n.parentNode) {
        if (de && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
            let t = document.createElement("div");
            return t.appendChild(document.createElement("li")), {
                skip: t
            };
        } else if (n.parentNode.lastChild == n || de && /^(tr|table)$/i.test(n.parentNode.nodeName)) return {
            ignore: !0
        };
    } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder")) return {
        ignore: !0
    };
    return null;
}
const dy = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function py(n, e, t, r, i) {
    let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
    if (n.input.compositionPendingChanges = 0, e < 0) {
        let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, Y = yl(n, E);
        if (Y && !n.state.selection.eq(Y)) {
            if (ce && Ee && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (O)=>O(n, Dt(13, "Enter")))) return;
            let A = n.state.tr.setSelection(Y);
            E == "pointer" ? A.setMeta("pointer", !0) : E == "key" && A.scrollIntoView(), o && A.setMeta("composition", o), n.dispatch(A);
        }
        return;
    }
    let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
    e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
    let a = n.state.selection, c = uy(n, e, t), f = n.state.doc, u = f.slice(c.from, c.to), h, p;
    n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (h = n.state.selection.to, p = "end") : (h = n.state.selection.from, p = "start"), n.input.lastKeyCode = null;
    let d = yy(u.content, c.doc.content, c.from, h, p);
    if ((bn && n.input.lastIOSEnter > Date.now() - 225 || Ee) && i.some((E)=>E.nodeType == 1 && !dy.test(E.nodeName)) && (!d || d.endA >= d.endB) && n.someProp("handleKeyDown", (E)=>E(n, Dt(13, "Enter")))) {
        n.input.lastIOSEnter = 0;
        return;
    }
    if (!d) if (r && a instanceof z && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head)) d = {
        start: a.from,
        endA: a.to,
        endB: a.to
    };
    else {
        if (c.sel) {
            let E = Za(n, n.state.doc, c.sel);
            if (E && !E.eq(n.state.selection)) {
                let Y = n.state.tr.setSelection(E);
                o && Y.setMeta("composition", o), n.dispatch(Y);
            }
        }
        return;
    }
    n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && d.start == d.endB && n.state.selection instanceof z && (d.start > n.state.selection.from && d.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? d.start = n.state.selection.from : d.endA < n.state.selection.to && d.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (d.endB += n.state.selection.to - d.endA, d.endA = n.state.selection.to)), be && Ot <= 11 && d.endB == d.start + 1 && d.endA == d.start && d.start > c.from && c.doc.textBetween(d.start - c.from - 1, d.start - c.from + 1) == "  " && (d.start--, d.endA--, d.endB--);
    let m = c.doc.resolveNoCache(d.start - c.from), g = c.doc.resolveNoCache(d.endB - c.from), y = f.resolve(d.start), C = m.sameParent(g) && m.parent.inlineContent && y.end() >= d.endA, k;
    if ((bn && n.input.lastIOSEnter > Date.now() - 225 && (!C || i.some((E)=>E.nodeName == "DIV" || E.nodeName == "P")) || !C && m.pos < c.doc.content.size && !m.sameParent(g) && (k = R.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && k.head == g.pos) && n.someProp("handleKeyDown", (E)=>E(n, Dt(13, "Enter")))) {
        n.input.lastIOSEnter = 0;
        return;
    }
    if (n.state.selection.anchor > d.start && gy(f, d.start, d.endA, m, g) && n.someProp("handleKeyDown", (E)=>E(n, Dt(8, "Backspace")))) {
        Ee && ce && n.domObserver.suppressSelectionUpdates();
        return;
    }
    ce && Ee && d.endB == d.start && (n.input.lastAndroidDelete = Date.now()), Ee && !C && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == d.endA && (d.endB -= 2, g = c.doc.resolveNoCache(d.endB - c.from), setTimeout(()=>{
        n.someProp("handleKeyDown", function(E) {
            return E(n, Dt(13, "Enter"));
        });
    }, 20));
    let N = d.start, T = d.endA, x, I, D;
    if (C) {
        if (m.pos == g.pos) be && Ot <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(()=>nt(n), 20)), x = n.state.tr.delete(N, T), I = f.resolve(d.start).marksAcross(f.resolve(d.endA));
        else if (// Adding or removing a mark
        d.endA == d.endB && (D = my(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, d.endA - y.start())))) x = n.state.tr, D.type == "add" ? x.addMark(N, T, D.mark) : x.removeMark(N, T, D.mark);
        else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
            let E = m.parent.textBetween(m.parentOffset, g.parentOffset);
            if (n.someProp("handleTextInput", (Y)=>Y(n, N, T, E))) return;
            x = n.state.tr.insertText(E, N, T);
        }
    }
    if (x || (x = n.state.tr.replace(N, T, c.doc.slice(d.start - c.from, d.endB - c.from))), c.sel) {
        let E = Za(n, x.doc, c.sel);
        E && !(ce && Ee && n.composing && E.empty && (d.start != d.endB || n.input.lastAndroidDelete < Date.now() - 100) && (E.head == N || E.head == x.mapping.map(T) - 1) || be && E.empty && E.head == N) && x.setSelection(E);
    }
    I && x.ensureMarks(I), o && x.setMeta("composition", o), n.dispatch(x.scrollIntoView());
}
function Za(n, e, t) {
    return Math.max(t.anchor, t.head) > e.content.size ? null : bl(n, e.resolve(t.anchor), e.resolve(t.head));
}
function my(n, e) {
    let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
    for(let f = 0; f < r.length; f++)i = r[f].removeFromSet(i);
    for(let f = 0; f < t.length; f++)o = t[f].removeFromSet(o);
    if (i.length == 1 && o.length == 0) l = i[0], s = "add", a = (f)=>f.mark(l.addToSet(f.marks));
    else if (i.length == 0 && o.length == 1) l = o[0], s = "remove", a = (f)=>f.mark(l.removeFromSet(f.marks));
    else return null;
    let c = [];
    for(let f = 0; f < e.childCount; f++)c.push(a(e.child(f)));
    if (b.from(c).eq(n)) return {
        mark: l,
        type: s
    };
}
function gy(n, e, t, r, i) {
    if (// The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Mo(r, !0, !1) < i.pos) return !1;
    let o = n.resolve(e);
    if (!r.parent.isTextblock) {
        let l = o.nodeAfter;
        return l != null && t == e + l.nodeSize;
    }
    if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock) return !1;
    let s = n.resolve(Mo(o, !0, !0));
    return !s.parent.isTextblock || s.pos > t || Mo(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function Mo(n, e, t) {
    let r = n.depth, i = e ? n.end() : n.pos;
    for(; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount);)r--, i++, e = !1;
    if (t) {
        let o = n.node(r).maybeChild(n.indexAfter(r));
        for(; o && !o.isLeaf;)o = o.firstChild, i++;
    }
    return i;
}
function yy(n, e, t, r, i) {
    let o = n.findDiffStart(e, t);
    if (o == null) return null;
    let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
    if (i == "end") {
        let a = Math.max(0, o - Math.min(s, l));
        r -= s + a - o;
    }
    if (s < o && n.size < e.size) {
        let a = r <= o && r >= s ? o - r : 0;
        o -= a, o && o < e.size && ec(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
    } else if (l < o) {
        let a = r <= o && r >= l ? o - r : 0;
        o -= a, o && o < n.size && ec(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
    }
    return {
        start: o,
        endA: s,
        endB: l
    };
}
function ec(n) {
    if (n.length != 2) return !1;
    let e = n.charCodeAt(0), t = n.charCodeAt(1);
    return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class sE {
    /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */ constructor(e, t){
        this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new zg(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(oc), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = rc(this), nc(this), this.nodeViews = ic(this), this.docView = $a(this.state.doc, tc(this), To(this), this.dom, this), this.domObserver = new ly(this, (r, i, o, s)=>py(this, r, i, o, s)), this.domObserver.start(), Lg(this), this.updatePluginViews();
    }
    /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */ get composing() {
        return this.input.composing;
    }
    /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */ get props() {
        if (this._props.state != this.state) {
            let e = this._props;
            this._props = {};
            for(let t in e)this._props[t] = e[t];
            this._props.state = this.state;
        }
        return this._props;
    }
    /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */ update(e) {
        e.handleDOMEvents != this._props.handleDOMEvents && Os(this);
        let t = this._props;
        this._props = e, e.plugins && (e.plugins.forEach(oc), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
    }
    /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */ setProps(e) {
        let t = {};
        for(let r in this._props)t[r] = this._props[r];
        t.state = this.state;
        for(let r in e)t[r] = e[r];
        this.update(t);
    }
    /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */ updateState(e) {
        this.updateStateInner(e, this._props);
    }
    updateStateInner(e, t) {
        var r;
        let i = this.state, o = !1, s = !1;
        e.storedMarks && this.composing && (Rh(this), s = !0), this.state = e;
        let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
        if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
            let p = ic(this);
            vy(p, this.nodeViews) && (this.nodeViews = p, o = !0);
        }
        (l || t.handleDOMEvents != this._props.handleDOMEvents) && Os(this), this.editable = rc(this), nc(this);
        let a = To(this), c = tc(this), f = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", u = o || !this.docView.matchesNode(e.doc, c, a);
        (u || !e.selection.eq(i.selection)) && (s = !0);
        let h = f == "preserve" && s && this.dom.style.overflowAnchor == null && Zm(this);
        if (s) {
            this.domObserver.stop();
            let p = u && (be || ce) && !this.composing && !i.selection.empty && !e.selection.empty && by(i.selection, e.selection);
            if (u) {
                let d = ce ? this.trackWrites = this.domSelectionRange().focusNode : null;
                this.composing && (this.input.compositionNode = Xg(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = $a(e.doc, c, a, this.dom, this)), d && !this.trackWrites && (p = !0);
            }
            p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Cg(this)) ? nt(this, p) : (bh(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
        }
        this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), f == "reset" ? this.dom.scrollTop = 0 : f == "to selection" ? this.scrollToSelection() : h && eg(h);
    }
    /**
  @internal
  */ scrollToSelection() {
        let e = this.domSelectionRange().focusNode;
        if (!this.someProp("handleScrollToSelection", (t)=>t(this))) if (this.state.selection instanceof M) {
            let t = this.docView.domAfterPos(this.state.selection.from);
            t.nodeType == 1 && Ma(this, t.getBoundingClientRect(), e);
        } else Ma(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
    destroyPluginViews() {
        let e;
        for(; e = this.pluginViews.pop();)e.destroy && e.destroy();
    }
    updatePluginViews(e) {
        if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
            this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
            for(let t = 0; t < this.directPlugins.length; t++){
                let r = this.directPlugins[t];
                r.spec.view && this.pluginViews.push(r.spec.view(this));
            }
            for(let t = 0; t < this.state.plugins.length; t++){
                let r = this.state.plugins[t];
                r.spec.view && this.pluginViews.push(r.spec.view(this));
            }
        } else for(let t = 0; t < this.pluginViews.length; t++){
            let r = this.pluginViews[t];
            r.update && r.update(this, e);
        }
    }
    updateDraggedNode(e, t) {
        let r = e.node, i = -1;
        if (this.state.doc.nodeAt(r.from) == r.node) i = r.from;
        else {
            let o = r.from + (this.state.doc.content.size - t.doc.content.size);
            (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
        }
        this.dragging = new Dh(e.slice, e.move, i < 0 ? void 0 : M.create(this.state.doc, i));
    }
    someProp(e, t) {
        let r = this._props && this._props[e], i;
        if (r != null && (i = t ? t(r) : r)) return i;
        for(let s = 0; s < this.directPlugins.length; s++){
            let l = this.directPlugins[s].props[e];
            if (l != null && (i = t ? t(l) : l)) return i;
        }
        let o = this.state.plugins;
        if (o) for(let s = 0; s < o.length; s++){
            let l = o[s].props[e];
            if (l != null && (i = t ? t(l) : l)) return i;
        }
    }
    /**
  Query whether the view has focus.
  */ hasFocus() {
        if (be) {
            let e = this.root.activeElement;
            if (e == this.dom) return !0;
            if (!e || !this.dom.contains(e)) return !1;
            for(; e && this.dom != e && this.dom.contains(e);){
                if (e.contentEditable == "false") return !1;
                e = e.parentElement;
            }
            return !0;
        }
        return this.root.activeElement == this.dom;
    }
    /**
  Focus the editor.
  */ focus() {
        this.domObserver.stop(), this.editable && tg(this.dom), nt(this), this.domObserver.start();
    }
    /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */ get root() {
        let e = this._root;
        if (e == null) {
            for(let t = this.dom.parentNode; t; t = t.parentNode)if (t.nodeType == 9 || t.nodeType == 11 && t.host) return t.getSelection || (Object.getPrototypeOf(t).getSelection = ()=>t.ownerDocument.getSelection()), this._root = t;
        }
        return e || document;
    }
    /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */ updateRoot() {
        this._root = null;
    }
    /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */ posAtCoords(e) {
        return sg(this, e);
    }
    /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */ coordsAtPos(e, t = 1) {
        return fh(this, e, t);
    }
    /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */ domAtPos(e, t = 0) {
        return this.docView.domFromPos(e, t);
    }
    /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */ nodeDOM(e) {
        let t = this.docView.descAt(e);
        return t ? t.nodeDOM : null;
    }
    /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */ posAtDOM(e, t, r = -1) {
        let i = this.docView.posFromDOM(e, t, r);
        if (i == null) throw new RangeError("DOM position not inside the editor");
        return i;
    }
    /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */ endOfTextblock(e, t) {
        return ug(this, t || this.state, e);
    }
    /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */ pasteHTML(e, t) {
        return ir(this, "", e, !1, t || new ClipboardEvent("paste"));
    }
    /**
  Run the editor's paste logic with the given plain-text input.
  */ pasteText(e, t) {
        return ir(this, e, null, !0, t || new ClipboardEvent("paste"));
    }
    /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */ destroy() {
        this.docView && (Fg(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], To(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Vm());
    }
    /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */ get isDestroyed() {
        return this.docView == null;
    }
    /**
  Used for testing.
  */ dispatchEvent(e) {
        return jg(this, e);
    }
    /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */ dispatch(e) {
        let t = this._props.dispatchTransaction;
        t ? t.call(this, e) : this.updateState(this.state.apply(e));
    }
    /**
  @internal
  */ domSelectionRange() {
        let e = this.domSelection();
        return e ? de && this.root.nodeType === 11 && Jm(this.dom.ownerDocument) == this.dom && cy(this, e) || e : {
            focusNode: null,
            focusOffset: 0,
            anchorNode: null,
            anchorOffset: 0
        };
    }
    /**
  @internal
  */ domSelection() {
        return this.root.getSelection();
    }
}
function tc(n) {
    let e = /* @__PURE__ */ Object.create(null);
    return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t)=>{
        if (typeof t == "function" && (t = t(n.state)), t) for(let r in t)r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
    }), e.translate || (e.translate = "no"), [
        ye.node(0, n.state.doc.content.size, e)
    ];
}
function nc(n) {
    if (n.markCursor) {
        let e = document.createElement("img");
        e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = {
            dom: e,
            deco: ye.widget(n.state.selection.from, e, {
                raw: !0,
                marks: n.markCursor
            })
        };
    } else n.cursorWrapper = null;
}
function rc(n) {
    return !n.someProp("editable", (e)=>e(n.state) === !1);
}
function by(n, e) {
    let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
    return n.$anchor.start(t) != e.$anchor.start(t);
}
function ic(n) {
    let e = /* @__PURE__ */ Object.create(null);
    function t(r) {
        for(let i in r)Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
    }
    return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function vy(n, e) {
    let t = 0, r = 0;
    for(let i in n){
        if (n[i] != e[i]) return !0;
        t++;
    }
    for(let i in e)r++;
    return t != r;
}
function oc(n) {
    if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction) throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Et = {
    8: "Backspace",
    9: "Tab",
    10: "Enter",
    12: "NumLock",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    44: "PrintScreen",
    45: "Insert",
    46: "Delete",
    59: ";",
    61: "=",
    91: "Meta",
    92: "Meta",
    106: "*",
    107: "+",
    108: ",",
    109: "-",
    110: ".",
    111: "/",
    144: "NumLock",
    145: "ScrollLock",
    160: "Shift",
    161: "Shift",
    162: "Control",
    163: "Control",
    164: "Alt",
    165: "Alt",
    173: "-",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "/",
    192: "`",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
}, ai = {
    48: ")",
    49: "!",
    50: "@",
    51: "#",
    52: "$",
    53: "%",
    54: "^",
    55: "&",
    56: "*",
    57: "(",
    59: ":",
    61: "+",
    173: "_",
    186: ":",
    187: "+",
    188: "<",
    189: "_",
    190: ">",
    191: "?",
    192: "~",
    219: "{",
    220: "|",
    221: "}",
    222: '"'
}, Sy = typeof navigator < "u" && /Mac/.test(navigator.platform), wy = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for(var se = 0; se < 10; se++)Et[48 + se] = Et[96 + se] = String(se);
for(var se = 1; se <= 24; se++)Et[se + 111] = "F" + se;
for(var se = 65; se <= 90; se++)Et[se] = String.fromCharCode(se + 32), ai[se] = String.fromCharCode(se);
for(var No in Et)ai.hasOwnProperty(No) || (ai[No] = Et[No]);
function xy(n) {
    var e = Sy && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || wy && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? ai : Et)[n.keyCode] || n.key || "Unidentified";
    return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Cy = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Oy(n) {
    let e = n.split(/-(?!$)/), t = e[e.length - 1];
    t == "Space" && (t = " ");
    let r, i, o, s;
    for(let l = 0; l < e.length - 1; l++){
        let a = e[l];
        if (/^(cmd|meta|m)$/i.test(a)) s = !0;
        else if (/^a(lt)?$/i.test(a)) r = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) i = !0;
        else if (/^s(hift)?$/i.test(a)) o = !0;
        else if (/^mod$/i.test(a)) Cy ? s = !0 : i = !0;
        else throw new Error("Unrecognized modifier name: " + a);
    }
    return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function ky(n) {
    let e = /* @__PURE__ */ Object.create(null);
    for(let t in n)e[Oy(t)] = n[t];
    return e;
}
function Ro(n, e, t = !0) {
    return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function lE(n) {
    return new kn({
        props: {
            handleKeyDown: Ol(n)
        }
    });
}
function Ol(n) {
    let e = ky(n);
    return function(t, r) {
        let i = xy(r), o, s = e[Ro(i, r)];
        if (s && s(t.state, t.dispatch, t)) return !0;
        if (i.length == 1 && i != " ") {
            if (r.shiftKey) {
                let l = e[Ro(i, r, !1)];
                if (l && l(t.state, t.dispatch, t)) return !0;
            }
            if ((r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = Et[r.keyCode]) && o != i) {
                let l = e[Ro(o, r)];
                if (l && l(t.state, t.dispatch, t)) return !0;
            }
        }
        return !1;
    };
}
const aE = (n, e)=>n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Lh(n, e) {
    let { $cursor: t } = n.selection;
    return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const cE = (n, e, t)=>{
    let r = Lh(n, t);
    if (!r) return !1;
    let i = kl(r);
    if (!i) {
        let s = r.blockRange(), l = s && dr(s);
        return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
    }
    let o = i.nodeBefore;
    if (Vh(n, i, e, -1)) return !0;
    if (r.parent.content.size == 0 && (vn(o, "end") || M.isSelectable(o))) for(let s = r.depth;; s--){
        let l = no(n.doc, r.before(s), r.after(s), w.empty);
        if (l && l.slice.size < l.to - l.from) {
            if (e) {
                let a = n.tr.step(l);
                a.setSelection(vn(o, "end") ? R.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : M.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
            }
            return !0;
        }
        if (s == 1 || r.node(s - 1).childCount > 1) break;
    }
    return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, fE = (n, e, t)=>{
    let r = Lh(n, t);
    if (!r) return !1;
    let i = kl(r);
    return i ? Fh(n, i, e) : !1;
}, uE = (n, e, t)=>{
    let r = _h(n, t);
    if (!r) return !1;
    let i = Al(r);
    return i ? Fh(n, i, e) : !1;
};
function Fh(n, e, t) {
    let r = e.nodeBefore, i = r, o = e.pos - 1;
    for(; !i.isTextblock; o--){
        if (i.type.spec.isolating) return !1;
        let f = i.lastChild;
        if (!f) return !1;
        i = f;
    }
    let s = e.nodeAfter, l = s, a = e.pos + 1;
    for(; !l.isTextblock; a++){
        if (l.type.spec.isolating) return !1;
        let f = l.firstChild;
        if (!f) return !1;
        l = f;
    }
    let c = no(n.doc, o, a, w.empty);
    if (!c || c.from != o || c instanceof ie && c.slice.size >= a - o) return !1;
    if (t) {
        let f = n.tr.step(c);
        f.setSelection(z.create(f.doc, o)), t(f.scrollIntoView());
    }
    return !0;
}
function vn(n, e, t = !1) {
    for(let r = n; r; r = e == "start" ? r.firstChild : r.lastChild){
        if (r.isTextblock) return !0;
        if (t && r.childCount != 1) return !1;
    }
    return !1;
}
const hE = (n, e, t)=>{
    let { $head: r, empty: i } = n.selection, o = r;
    if (!i) return !1;
    if (r.parent.isTextblock) {
        if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0) return !1;
        o = kl(r);
    }
    let s = o && o.nodeBefore;
    return !s || !M.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function kl(n) {
    if (!n.parent.type.spec.isolating) for(let e = n.depth - 1; e >= 0; e--){
        if (n.index(e) > 0) return n.doc.resolve(n.before(e + 1));
        if (n.node(e).type.spec.isolating) break;
    }
    return null;
}
function _h(n, e) {
    let { $cursor: t } = n.selection;
    return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const dE = (n, e, t)=>{
    let r = _h(n, t);
    if (!r) return !1;
    let i = Al(r);
    if (!i) return !1;
    let o = i.nodeAfter;
    if (Vh(n, i, e, 1)) return !0;
    if (r.parent.content.size == 0 && (vn(o, "start") || M.isSelectable(o))) {
        let s = no(n.doc, r.before(), r.after(), w.empty);
        if (s && s.slice.size < s.to - s.from) {
            if (e) {
                let l = n.tr.step(s);
                l.setSelection(vn(o, "start") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : M.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
            }
            return !0;
        }
    }
    return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, pE = (n, e, t)=>{
    let { $head: r, empty: i } = n.selection, o = r;
    if (!i) return !1;
    if (r.parent.isTextblock) {
        if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size) return !1;
        o = Al(r);
    }
    let s = o && o.nodeAfter;
    return !s || !M.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(M.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function Al(n) {
    if (!n.parent.type.spec.isolating) for(let e = n.depth - 1; e >= 0; e--){
        let t = n.node(e);
        if (n.index(e) + 1 < t.childCount) return n.doc.resolve(n.after(e + 1));
        if (t.type.spec.isolating) break;
    }
    return null;
}
const mE = (n, e)=>{
    let t = n.selection, r = t instanceof M, i;
    if (r) {
        if (t.node.isTextblock || !pr(n.doc, t.from)) return !1;
        i = t.from;
    } else if (i = qu(n.doc, t.from, -1), i == null) return !1;
    if (e) {
        let o = n.tr.join(i);
        r && o.setSelection(M.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
    }
    return !0;
}, gE = (n, e)=>{
    let t = n.selection, r;
    if (t instanceof M) {
        if (t.node.isTextblock || !pr(n.doc, t.to)) return !1;
        r = t.to;
    } else if (r = qu(n.doc, t.to, 1), r == null) return !1;
    return e && e(n.tr.join(r).scrollIntoView()), !0;
}, yE = (n, e)=>{
    let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && dr(i);
    return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, bE = (n, e)=>{
    let { $head: t, $anchor: r } = n.selection;
    return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function jh(n) {
    for(let e = 0; e < n.edgeCount; e++){
        let { type: t } = n.edge(e);
        if (t.isTextblock && !t.hasRequiredAttrs()) return t;
    }
    return null;
}
const vE = (n, e)=>{
    let { $head: t, $anchor: r } = n.selection;
    if (!t.parent.type.spec.code || !t.sameParent(r)) return !1;
    let i = t.node(-1), o = t.indexAfter(-1), s = jh(i.contentMatchAt(o));
    if (!s || !i.canReplaceWith(o, o, s)) return !1;
    if (e) {
        let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
        a.setSelection(R.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
    }
    return !0;
}, SE = (n, e)=>{
    let t = n.selection, { $from: r, $to: i } = t;
    if (t instanceof Me || r.parent.inlineContent || i.parent.inlineContent) return !1;
    let o = jh(i.parent.contentMatchAt(i.indexAfter()));
    if (!o || !o.isTextblock) return !1;
    if (e) {
        let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
        l.setSelection(z.create(l.doc, s + 1)), e(l.scrollIntoView());
    }
    return !0;
}, wE = (n, e)=>{
    let { $cursor: t } = n.selection;
    if (!t || t.parent.content.size) return !1;
    if (t.depth > 1 && t.after() != t.end(-1)) {
        let o = t.before();
        if (Ku(n.doc, o)) return e && e(n.tr.split(o).scrollIntoView()), !0;
    }
    let r = t.blockRange(), i = r && dr(r);
    return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, xE = (n, e)=>{
    let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
    return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(M.create(n.doc, i))), !0);
};
function Ay(n, e, t) {
    let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
    return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || pr(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function Vh(n, e, t, r) {
    let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
    if (!a && Ay(n, e, t)) return !0;
    let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
    if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
        if (t) {
            let p = e.pos + o.nodeSize, d = b.empty;
            for(let y = s.length - 1; y >= 0; y--)d = b.from(s[y].create(null, d));
            d = b.from(i.copy(d));
            let m = n.tr.step(new le(e.pos - 1, p, e.pos, p, new w(d, 1, 0), s.length, !0)), g = p + 2 * s.length;
            pr(m.doc, g) && m.join(g), t(m.scrollIntoView());
        }
        return !0;
    }
    let f = o.type.spec.isolating || r > 0 && a ? null : R.findFrom(e, 1), u = f && f.$from.blockRange(f.$to), h = u && dr(u);
    if (h != null && h >= e.depth) return t && t(n.tr.lift(u, h).scrollIntoView()), !0;
    if (c && vn(o, "start", !0) && vn(i, "end")) {
        let p = i, d = [];
        for(; d.push(p), !p.isTextblock;)p = p.lastChild;
        let m = o, g = 1;
        for(; !m.isTextblock; m = m.firstChild)g++;
        if (p.canReplace(p.childCount, p.childCount, m.content)) {
            if (t) {
                let y = b.empty;
                for(let k = d.length - 1; k >= 0; k--)y = b.from(d[k].copy(y));
                let C = n.tr.step(new le(e.pos - d.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new w(y, d.length, 0), 0, !0));
                t(C.scrollIntoView());
            }
            return !0;
        }
    }
    return !1;
}
function Wh(n) {
    return function(e, t) {
        let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
        for(; i.node(o).isInline;){
            if (!o) return !1;
            o--;
        }
        return i.node(o).isTextblock ? (t && t(e.tr.setSelection(z.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
    };
}
const CE = Wh(-1), OE = Wh(1);
function kE(n, e = null) {
    return function(t, r) {
        let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && Uu(s, n, e);
        return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
    };
}
function AE(n, e = null) {
    return function(t, r) {
        let i = !1;
        for(let o = 0; o < t.selection.ranges.length && !i; o++){
            let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
            t.doc.nodesBetween(s, l, (a, c)=>{
                if (i) return !1;
                if (!(!a.isTextblock || a.hasMarkup(n, e))) if (a.type == n) i = !0;
                else {
                    let f = t.doc.resolve(c), u = f.index();
                    i = f.parent.canReplaceWith(u, u + 1, n);
                }
            });
        }
        if (!i) return !1;
        if (r) {
            let o = t.tr;
            for(let s = 0; s < t.selection.ranges.length; s++){
                let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
                o.setBlockType(l, a, n, e);
            }
            r(o.scrollIntoView());
        }
        return !0;
    };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function EE(n, e = null) {
    return function(t, r) {
        let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = !1, a = s;
        if (!s) return !1;
        if (s.depth >= 2 && i.node(s.depth - 1).type.compatibleContent(n) && s.startIndex == 0) {
            if (i.index(s.depth - 1) == 0) return !1;
            let f = t.doc.resolve(s.start - 2);
            a = new ei(f, f, s.depth), s.endIndex < s.parent.childCount && (s = new ei(i, t.doc.resolve(o.end(s.depth)), s.depth)), l = !0;
        }
        let c = Uu(a, n, e, s);
        return c ? (r && r(Ey(t.tr, s, c, l, n).scrollIntoView()), !0) : !1;
    };
}
function Ey(n, e, t, r, i) {
    let o = b.empty;
    for(let f = t.length - 1; f >= 0; f--)o = b.from(t[f].type.create(t[f].attrs, o));
    n.step(new le(e.start - (r ? 2 : 0), e.end, e.start, e.end, new w(o, 0, 0), t.length, !0));
    let s = 0;
    for(let f = 0; f < t.length; f++)t[f].type == i && (s = f + 1);
    let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
    for(let f = e.startIndex, u = e.endIndex, h = !0; f < u; f++, h = !1)!h && Ku(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(f).nodeSize;
    return n;
}
function TE(n) {
    return function(e, t) {
        let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s)=>s.childCount > 0 && s.firstChild.type == n);
        return o ? t ? r.node(o.depth - 1).type == n ? Ty(e, t, n, o) : My(e, t, o) : !0 : !1;
    };
}
function Ty(n, e, t, r) {
    let i = n.tr, o = r.end, s = r.$to.end(r.depth);
    o < s && (i.step(new le(o - 1, s, o, s, new w(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new ei(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
    const l = dr(r);
    if (l == null) return !1;
    i.lift(r, l);
    let a = i.mapping.map(o, -1) - 1;
    return pr(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function My(n, e, t) {
    let r = n.tr, i = t.parent;
    for(let p = t.end, d = t.endIndex - 1, m = t.startIndex; d > m; d--)p -= i.child(d).nodeSize, r.delete(p - 1, p + 1);
    let o = r.doc.resolve(t.start), s = o.nodeAfter;
    if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize) return !1;
    let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), f = o.index(-1);
    if (!c.canReplace(f + (l ? 0 : 1), f + 1, s.content.append(a ? b.empty : b.from(i)))) return !1;
    let u = o.pos, h = u + s.nodeSize;
    return r.step(new le(u - (l ? 1 : 0), h + (a ? 1 : 0), u + 1, h - 1, new w((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function ME(n) {
    return function(e, t) {
        let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c)=>c.childCount > 0 && c.firstChild.type == n);
        if (!o) return !1;
        let s = o.startIndex;
        if (s == 0) return !1;
        let l = o.parent, a = l.child(s - 1);
        if (a.type != n) return !1;
        if (t) {
            let c = a.lastChild && a.lastChild.type == l.type, f = b.from(c ? n.create() : null), u = new w(b.from(n.create(null, b.from(l.type.create(null, f)))), c ? 3 : 1, 0), h = o.start, p = o.end;
            t(e.tr.step(new le(h - (c ? 3 : 1), p, h, p, u, 1, !0)).scrollIntoView());
        }
        return !0;
    };
}
function Hh(n) {
    var e, t, r = "";
    if (typeof n == "string" || typeof n == "number") r += n;
    else if (typeof n == "object") if (Array.isArray(n)) {
        var i = n.length;
        for(e = 0; e < i; e++)n[e] && (t = Hh(n[e])) && (r && (r += " "), r += t);
    } else for(t in n)n[t] && (r && (r += " "), r += t);
    return r;
}
function NE() {
    for(var n, e, t = 0, r = "", i = arguments.length; t < i; t++)(n = arguments[t]) && (e = Hh(n)) && (r && (r += " "), r += e);
    return r;
}
const El = "-", Ny = (n)=>{
    const e = Iy(n), { conflictingClassGroups: t, conflictingClassGroupModifiers: r } = n;
    return {
        getClassGroupId: (s)=>{
            const l = s.split(El);
            return l[0] === "" && l.length !== 1 && l.shift(), Uh(l, e) || Ry(s);
        },
        getConflictingClassGroupIds: (s, l)=>{
            const a = t[s] || [];
            return l && r[s] ? [
                ...a,
                ...r[s]
            ] : a;
        }
    };
}, Uh = (n, e)=>{
    var s;
    if (n.length === 0) return e.classGroupId;
    const t = n[0], r = e.nextPart.get(t), i = r ? Uh(n.slice(1), r) : void 0;
    if (i) return i;
    if (e.validators.length === 0) return;
    const o = n.join(El);
    return (s = e.validators.find(({ validator: l })=>l(o))) == null ? void 0 : s.classGroupId;
}, sc = /^\[(.+)\]$/, Ry = (n)=>{
    if (sc.test(n)) {
        const e = sc.exec(n)[1], t = e == null ? void 0 : e.substring(0, e.indexOf(":"));
        if (t) return "arbitrary.." + t;
    }
}, Iy = (n)=>{
    const { theme: e, prefix: t } = n, r = {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
    };
    return Py(Object.entries(n.classGroups), t).forEach(([o, s])=>{
        ks(s, r, o, e);
    }), r;
}, ks = (n, e, t, r)=>{
    n.forEach((i)=>{
        if (typeof i == "string") {
            const o = i === "" ? e : lc(e, i);
            o.classGroupId = t;
            return;
        }
        if (typeof i == "function") {
            if (Dy(i)) {
                ks(i(r), e, t, r);
                return;
            }
            e.validators.push({
                validator: i,
                classGroupId: t
            });
            return;
        }
        Object.entries(i).forEach(([o, s])=>{
            ks(s, lc(e, o), t, r);
        });
    });
}, lc = (n, e)=>{
    let t = n;
    return e.split(El).forEach((r)=>{
        t.nextPart.has(r) || t.nextPart.set(r, {
            nextPart: /* @__PURE__ */ new Map(),
            validators: []
        }), t = t.nextPart.get(r);
    }), t;
}, Dy = (n)=>n.isThemeGetter, Py = (n, e)=>e ? n.map(([t, r])=>{
        const i = r.map((o)=>typeof o == "string" ? e + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([s, l])=>[
                    e + s,
                    l
                ])) : o);
        return [
            t,
            i
        ];
    }) : n, $y = (n)=>{
    if (n < 1) return {
        get: ()=>{},
        set: ()=>{}
    };
    let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    const i = (o, s)=>{
        t.set(o, s), e++, e > n && (e = 0, r = t, t = /* @__PURE__ */ new Map());
    };
    return {
        get (o) {
            let s = t.get(o);
            if (s !== void 0) return s;
            if ((s = r.get(o)) !== void 0) return i(o, s), s;
        },
        set (o, s) {
            t.has(o) ? t.set(o, s) : i(o, s);
        }
    };
}, Kh = "!", By = (n)=>{
    const { separator: e, experimentalParseClassName: t } = n, r = e.length === 1, i = e[0], o = e.length, s = (l)=>{
        const a = [];
        let c = 0, f = 0, u;
        for(let g = 0; g < l.length; g++){
            let y = l[g];
            if (c === 0) {
                if (y === i && (r || l.slice(g, g + o) === e)) {
                    a.push(l.slice(f, g)), f = g + o;
                    continue;
                }
                if (y === "/") {
                    u = g;
                    continue;
                }
            }
            y === "[" ? c++ : y === "]" && c--;
        }
        const h = a.length === 0 ? l : l.substring(f), p = h.startsWith(Kh), d = p ? h.substring(1) : h, m = u && u > f ? u - f : void 0;
        return {
            modifiers: a,
            hasImportantModifier: p,
            baseClassName: d,
            maybePostfixModifierPosition: m
        };
    };
    return t ? (l)=>t({
            className: l,
            parseClassName: s
        }) : s;
}, zy = (n)=>{
    if (n.length <= 1) return n;
    const e = [];
    let t = [];
    return n.forEach((r)=>{
        r[0] === "[" ? (e.push(...t.sort(), r), t = []) : t.push(r);
    }), e.push(...t.sort()), e;
}, Ly = (n)=>({
        cache: $y(n.cacheSize),
        parseClassName: By(n),
        ...Ny(n)
    }), Fy = /\s+/, _y = (n, e)=>{
    const { parseClassName: t, getClassGroupId: r, getConflictingClassGroupIds: i } = e, o = [], s = n.trim().split(Fy);
    let l = "";
    for(let a = s.length - 1; a >= 0; a -= 1){
        const c = s[a], { modifiers: f, hasImportantModifier: u, baseClassName: h, maybePostfixModifierPosition: p } = t(c);
        let d = !!p, m = r(d ? h.substring(0, p) : h);
        if (!m) {
            if (!d) {
                l = c + (l.length > 0 ? " " + l : l);
                continue;
            }
            if (m = r(h), !m) {
                l = c + (l.length > 0 ? " " + l : l);
                continue;
            }
            d = !1;
        }
        const g = zy(f).join(":"), y = u ? g + Kh : g, C = y + m;
        if (o.includes(C)) continue;
        o.push(C);
        const k = i(m, d);
        for(let N = 0; N < k.length; ++N){
            const T = k[N];
            o.push(y + T);
        }
        l = c + (l.length > 0 ? " " + l : l);
    }
    return l;
};
function jy() {
    let n = 0, e, t, r = "";
    for(; n < arguments.length;)(e = arguments[n++]) && (t = Jh(e)) && (r && (r += " "), r += t);
    return r;
}
const Jh = (n)=>{
    if (typeof n == "string") return n;
    let e, t = "";
    for(let r = 0; r < n.length; r++)n[r] && (e = Jh(n[r])) && (t && (t += " "), t += e);
    return t;
};
function Vy(n, ...e) {
    let t, r, i, o = s;
    function s(a) {
        const c = e.reduce((f, u)=>u(f), n());
        return t = Ly(c), r = t.cache.get, i = t.cache.set, o = l, l(a);
    }
    function l(a) {
        const c = r(a);
        if (c) return c;
        const f = _y(a, t);
        return i(a, f), f;
    }
    return function() {
        return o(jy.apply(null, arguments));
    };
}
const V = (n)=>{
    const e = (t)=>t[n] || [];
    return e.isThemeGetter = !0, e;
}, qh = /^\[(?:([a-z-]+):)?(.+)\]$/i, Wy = /^\d+\/\d+$/, Hy = /* @__PURE__ */ new Set([
    "px",
    "full",
    "screen"
]), Uy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ky = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Jy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, qy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Gy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Xe = (n)=>dn(n) || Hy.has(n) || Wy.test(n), at = (n)=>An(n, "length", rb), dn = (n)=>!!n && !Number.isNaN(Number(n)), Io = (n)=>An(n, "number", dn), In = (n)=>!!n && Number.isInteger(Number(n)), Yy = (n)=>n.endsWith("%") && dn(n.slice(0, -1)), P = (n)=>qh.test(n), ct = (n)=>Uy.test(n), Xy = /* @__PURE__ */ new Set([
    "length",
    "size",
    "percentage"
]), Qy = (n)=>An(n, Xy, Gh), Zy = (n)=>An(n, "position", Gh), eb = /* @__PURE__ */ new Set([
    "image",
    "url"
]), tb = (n)=>An(n, eb, ob), nb = (n)=>An(n, "", ib), Dn = ()=>!0, An = (n, e, t)=>{
    const r = qh.exec(n);
    return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : t(r[2]) : !1;
}, rb = (n)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    Ky.test(n) && !Jy.test(n), Gh = ()=>!1, ib = (n)=>qy.test(n), ob = (n)=>Gy.test(n), sb = ()=>{
    const n = V("colors"), e = V("spacing"), t = V("blur"), r = V("brightness"), i = V("borderColor"), o = V("borderRadius"), s = V("borderSpacing"), l = V("borderWidth"), a = V("contrast"), c = V("grayscale"), f = V("hueRotate"), u = V("invert"), h = V("gap"), p = V("gradientColorStops"), d = V("gradientColorStopPositions"), m = V("inset"), g = V("margin"), y = V("opacity"), C = V("padding"), k = V("saturate"), N = V("scale"), T = V("sepia"), x = V("skew"), I = V("space"), D = V("translate"), E = ()=>[
            "auto",
            "contain",
            "none"
        ], Y = ()=>[
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ], A = ()=>[
            "auto",
            P,
            e
        ], O = ()=>[
            P,
            e
        ], B = ()=>[
            "",
            Xe,
            at
        ], v = ()=>[
            "auto",
            dn,
            P
        ], X = ()=>[
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ], F = ()=>[
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ], j = ()=>[
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity"
        ], ne = ()=>[
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ], U = ()=>[
            "",
            "0",
            P
        ], lt = ()=>[
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ], Z = ()=>[
            dn,
            P
        ];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [
                Dn
            ],
            spacing: [
                Xe,
                at
            ],
            blur: [
                "none",
                "",
                ct,
                P
            ],
            brightness: Z(),
            borderColor: [
                n
            ],
            borderRadius: [
                "none",
                "",
                "full",
                ct,
                P
            ],
            borderSpacing: O(),
            borderWidth: B(),
            contrast: Z(),
            grayscale: U(),
            hueRotate: Z(),
            invert: U(),
            gap: O(),
            gradientColorStops: [
                n
            ],
            gradientColorStopPositions: [
                Yy,
                at
            ],
            inset: A(),
            margin: A(),
            opacity: Z(),
            padding: O(),
            saturate: Z(),
            scale: Z(),
            sepia: U(),
            skew: Z(),
            space: O(),
            translate: O()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        P
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                "container"
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        ct
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ "break-after": [
                {
                    "break-after": lt()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ "break-before": [
                {
                    "break-before": lt()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden"
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        "right",
                        "left",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                "isolate",
                "isolation-auto"
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ "object-position": [
                {
                    object: [
                        ...X(),
                        P
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: Y()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-x": [
                {
                    "overflow-x": Y()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-y": [
                {
                    "overflow-y": Y()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: E()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-x": [
                {
                    "overscroll-x": E()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-y": [
                {
                    "overscroll-y": E()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        m
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-x": [
                {
                    "inset-x": [
                        m
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-y": [
                {
                    "inset-y": [
                        m
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        m
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        m
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        m
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        m
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        m
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        m
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        "auto",
                        In,
                        P
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: A()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        P
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: U()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: U()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        In,
                        P
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ "grid-cols": [
                {
                    "grid-cols": [
                        Dn
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                "full",
                                In,
                                P
                            ]
                        },
                        P
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start": [
                {
                    "col-start": v()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-end": [
                {
                    "col-end": v()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ "grid-rows": [
                {
                    "grid-rows": [
                        Dn
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                In,
                                P
                            ]
                        },
                        P
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start": [
                {
                    "row-start": v()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-end": [
                {
                    "row-end": v()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        P
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        P
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        h
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ "gap-x": [
                {
                    "gap-x": [
                        h
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ "gap-y": [
                {
                    "gap-y": [
                        h
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ "justify-content": [
                {
                    justify: [
                        "normal",
                        ...ne()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ "align-content": [
                {
                    content: [
                        "normal",
                        ...ne(),
                        "baseline"
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ "place-content": [
                {
                    "place-content": [
                        ...ne(),
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        C
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        C
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        C
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        C
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        C
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        C
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        C
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        C
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        C
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        g
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        g
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        g
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        g
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        g
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        g
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        g
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        g
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        g
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ "space-x": [
                {
                    "space-x": [
                        I
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-x-reverse": [
                "space-x-reverse"
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ "space-y": [
                {
                    "space-y": [
                        I
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-y-reverse": [
                "space-y-reverse"
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svw",
                        "lvw",
                        "dvw",
                        P,
                        e
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ "min-w": [
                {
                    "min-w": [
                        P,
                        e,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ "max-w": [
                {
                    "max-w": [
                        P,
                        e,
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                ct
                            ]
                        },
                        ct
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        P,
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ "min-h": [
                {
                    "min-h": [
                        P,
                        e,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ "max-h": [
                {
                    "max-h": [
                        P,
                        e,
                        "min",
                        "max",
                        "fit",
                        "svh",
                        "lvh",
                        "dvh"
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        P,
                        e,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ "font-size": [
                {
                    text: [
                        "base",
                        ct,
                        at
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ "font-style": [
                "italic",
                "not-italic"
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ "font-weight": [
                {
                    font: [
                        "thin",
                        "extralight",
                        "light",
                        "normal",
                        "medium",
                        "semibold",
                        "bold",
                        "extrabold",
                        "black",
                        Io
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ "font-family": [
                {
                    font: [
                        Dn
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-normal": [
                "normal-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-ordinal": [
                "ordinal"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-slashed-zero": [
                "slashed-zero"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractons"
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        P
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        dn,
                        Io
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        Xe,
                        P
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ "list-image": [
                {
                    "list-image": [
                        "none",
                        P
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        P
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ "placeholder-color": [
                {
                    placeholder: [
                        n
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ "text-color": [
                {
                    text: [
                        n
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ "text-opacity": [
                {
                    "text-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ "text-decoration-style": [
                {
                    decoration: [
                        ...F(),
                        "wavy"
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        Xe,
                        at
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        Xe,
                        P
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ "text-decoration-color": [
                {
                    decoration: [
                        n
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ "text-wrap": [
                {
                    text: [
                        "wrap",
                        "nowrap",
                        "balance",
                        "pretty"
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: O()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ "vertical-align": [
                {
                    align: [
                        "baseline",
                        "top",
                        "middle",
                        "bottom",
                        "text-top",
                        "text-bottom",
                        "sub",
                        "super",
                        P
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        "none",
                        P
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ "bg-opacity": [
                {
                    "bg-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ "bg-position": [
                {
                    bg: [
                        ...X(),
                        Zy
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        Qy
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        tb
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ "bg-color": [
                {
                    bg: [
                        n
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from-pos": [
                {
                    from: [
                        d
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via-pos": [
                {
                    via: [
                        d
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to-pos": [
                {
                    to: [
                        d
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from": [
                {
                    from: [
                        p
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via": [
                {
                    via: [
                        p
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to": [
                {
                    to: [
                        p
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-s": [
                {
                    "rounded-s": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-e": [
                {
                    "rounded-e": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-t": [
                {
                    "rounded-t": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-r": [
                {
                    "rounded-r": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-b": [
                {
                    "rounded-b": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-l": [
                {
                    "rounded-l": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ss": [
                {
                    "rounded-ss": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-se": [
                {
                    "rounded-se": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ee": [
                {
                    "rounded-ee": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-es": [
                {
                    "rounded-es": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tl": [
                {
                    "rounded-tl": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tr": [
                {
                    "rounded-tr": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-br": [
                {
                    "rounded-br": [
                        o
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-bl": [
                {
                    "rounded-bl": [
                        o
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w": [
                {
                    border: [
                        l
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-x": [
                {
                    "border-x": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-y": [
                {
                    "border-y": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-s": [
                {
                    "border-s": [
                        l
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-e": [
                {
                    "border-e": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-t": [
                {
                    "border-t": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-r": [
                {
                    "border-r": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-b": [
                {
                    "border-b": [
                        l
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-l": [
                {
                    "border-l": [
                        l
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ "border-opacity": [
                {
                    "border-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ "border-style": [
                {
                    border: [
                        ...F(),
                        "hidden"
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x": [
                {
                    "divide-x": [
                        l
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x-reverse": [
                "divide-x-reverse"
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y": [
                {
                    "divide-y": [
                        l
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y-reverse": [
                "divide-y-reverse"
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ "divide-opacity": [
                {
                    "divide-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ "divide-style": [
                {
                    divide: F()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color": [
                {
                    border: [
                        i
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-x": [
                {
                    "border-x": [
                        i
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-y": [
                {
                    "border-y": [
                        i
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-s": [
                {
                    "border-s": [
                        i
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-e": [
                {
                    "border-e": [
                        i
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-t": [
                {
                    "border-t": [
                        i
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-r": [
                {
                    "border-r": [
                        i
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-b": [
                {
                    "border-b": [
                        i
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-l": [
                {
                    "border-l": [
                        i
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ "divide-color": [
                {
                    divide: [
                        i
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ "outline-style": [
                {
                    outline: [
                        "",
                        ...F()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ "outline-offset": [
                {
                    "outline-offset": [
                        Xe,
                        P
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ "outline-w": [
                {
                    outline: [
                        Xe,
                        at
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ "outline-color": [
                {
                    outline: [
                        n
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w": [
                {
                    ring: B()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w-inset": [
                "ring-inset"
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ "ring-color": [
                {
                    ring: [
                        n
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ "ring-opacity": [
                {
                    "ring-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ "ring-offset-w": [
                {
                    "ring-offset": [
                        Xe,
                        at
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ "ring-offset-color": [
                {
                    "ring-offset": [
                        n
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        ct,
                        nb
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ "shadow-color": [
                {
                    shadow: [
                        Dn
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        y
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ "mix-blend": [
                {
                    "mix-blend": [
                        ...j(),
                        "plus-lighter",
                        "plus-darker"
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ "bg-blend": [
                {
                    "bg-blend": j()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        t
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        r
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        a
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        ct,
                        P
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        c
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ "hue-rotate": [
                {
                    "hue-rotate": [
                        f
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        u
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        k
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        T
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ "backdrop-blur": [
                {
                    "backdrop-blur": [
                        t
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        r
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        a
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        c
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        f
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ "backdrop-invert": [
                {
                    "backdrop-invert": [
                        u
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        y
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        k
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        T
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing": [
                {
                    "border-spacing": [
                        s
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-x": [
                {
                    "border-spacing-x": [
                        s
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-y": [
                {
                    "border-spacing-y": [
                        s
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        P
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: Z()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        P
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: Z()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        P
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        N
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ "scale-x": [
                {
                    "scale-x": [
                        N
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ "scale-y": [
                {
                    "scale-y": [
                        N
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        In,
                        P
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ "translate-x": [
                {
                    "translate-x": [
                        D
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ "translate-y": [
                {
                    "translate-y": [
                        D
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ "skew-x": [
                {
                    "skew-x": [
                        x
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ "skew-y": [
                {
                    "skew-y": [
                        x
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ "transform-origin": [
                {
                    origin: [
                        "center",
                        "top",
                        "top-right",
                        "right",
                        "bottom-right",
                        "bottom",
                        "bottom-left",
                        "left",
                        "top-left",
                        P
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        "auto",
                        n
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        "auto",
                        "default",
                        "pointer",
                        "wait",
                        "text",
                        "move",
                        "help",
                        "not-allowed",
                        "none",
                        "context-menu",
                        "progress",
                        "cell",
                        "crosshair",
                        "vertical-text",
                        "alias",
                        "copy",
                        "no-drop",
                        "grab",
                        "grabbing",
                        "all-scroll",
                        "col-resize",
                        "row-resize",
                        "n-resize",
                        "e-resize",
                        "s-resize",
                        "w-resize",
                        "ne-resize",
                        "nw-resize",
                        "se-resize",
                        "sw-resize",
                        "ew-resize",
                        "ns-resize",
                        "nesw-resize",
                        "nwse-resize",
                        "zoom-in",
                        "zoom-out",
                        P
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ "caret-color": [
                {
                    caret: [
                        n
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-m": [
                {
                    "scroll-m": O()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mx": [
                {
                    "scroll-mx": O()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-my": [
                {
                    "scroll-my": O()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ms": [
                {
                    "scroll-ms": O()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-me": [
                {
                    "scroll-me": O()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mt": [
                {
                    "scroll-mt": O()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mr": [
                {
                    "scroll-mr": O()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mb": [
                {
                    "scroll-mb": O()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ml": [
                {
                    "scroll-ml": O()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-p": [
                {
                    "scroll-p": O()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-px": [
                {
                    "scroll-px": O()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-py": [
                {
                    "scroll-py": O()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-ps": [
                {
                    "scroll-ps": O()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pe": [
                {
                    "scroll-pe": O()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pt": [
                {
                    "scroll-pt": O()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pr": [
                {
                    "scroll-pr": O()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pb": [
                {
                    "scroll-pb": O()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pl": [
                {
                    "scroll-pl": O()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "manipulation"
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-x": [
                {
                    "touch-pan": [
                        "x",
                        "left",
                        "right"
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-y": [
                {
                    "touch-pan": [
                        "y",
                        "up",
                        "down"
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ "touch-pz": [
                "touch-pinch-zoom"
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        P
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        n,
                        "none"
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ "stroke-w": [
                {
                    stroke: [
                        Xe,
                        at,
                        Io
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        n,
                        "none"
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                "sr-only",
                "not-sr-only"
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ "forced-color-adjust": [
                {
                    "forced-color-adjust": [
                        "auto",
                        "none"
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            size: [
                "w",
                "h"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
            "line-clamp": [
                "display",
                "overflow"
            ],
            rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ],
            touch: [
                "touch-x",
                "touch-y",
                "touch-pz"
            ],
            "touch-x": [
                "touch"
            ],
            "touch-y": [
                "touch"
            ],
            "touch-pz": [
                "touch"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        }
    };
}, RE = /* @__PURE__ */ Vy(sb);
var sr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : ("TURBOPACK compile-time value", "object") < "u" ? /*TURBOPACK member replacement*/ __turbopack_context__.g : typeof self < "u" ? self : {};
function Yh(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function lb(n) {
    if (n.__esModule) return n;
    var e = n.default;
    if (typeof e == "function") {
        var t = function r() {
            return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
        };
        t.prototype = e.prototype;
    } else t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.keys(n).forEach(function(r) {
        var i = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(t, r, i.get ? i : {
            enumerable: !0,
            get: function() {
                return n[r];
            }
        });
    }), t;
}
var ac = Object.prototype.toString, Xh = function(e) {
    var t = ac.call(e), r = t === "[object Arguments]";
    return r || (r = t !== "[object Array]" && e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && ac.call(e.callee) === "[object Function]"), r;
}, Do, cc;
function ab() {
    if (cc) return Do;
    cc = 1;
    var n;
    if (!Object.keys) {
        var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, r = Xh, i = Object.prototype.propertyIsEnumerable, o = !i.call({
            toString: null
        }, "toString"), s = i.call(function() {}, "prototype"), l = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor"
        ], a = function(h) {
            var p = h.constructor;
            return p && p.prototype === h;
        }, c = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }, f = function() {
            if (typeof window > "u") return !1;
            for(var h in window)try {
                if (!c["$" + h] && e.call(window, h) && window[h] !== null && typeof window[h] == "object") try {
                    a(window[h]);
                } catch  {
                    return !0;
                }
            } catch  {
                return !0;
            }
            return !1;
        }(), u = function(h) {
            if (typeof window > "u" || !f) return a(h);
            try {
                return a(h);
            } catch  {
                return !1;
            }
        };
        n = function(p) {
            var d = p !== null && typeof p == "object", m = t.call(p) === "[object Function]", g = r(p), y = d && t.call(p) === "[object String]", C = [];
            if (!d && !m && !g) throw new TypeError("Object.keys called on a non-object");
            var k = s && m;
            if (y && p.length > 0 && !e.call(p, 0)) for(var N = 0; N < p.length; ++N)C.push(String(N));
            if (g && p.length > 0) for(var T = 0; T < p.length; ++T)C.push(String(T));
            else for(var x in p)!(k && x === "prototype") && e.call(p, x) && C.push(String(x));
            if (o) for(var I = u(p), D = 0; D < l.length; ++D)!(I && l[D] === "constructor") && e.call(p, l[D]) && C.push(l[D]);
            return C;
        };
    }
    return Do = n, Do;
}
var cb = Array.prototype.slice, fb = Xh, fc = Object.keys, zr = fc ? function(e) {
    return fc(e);
} : ab(), uc = Object.keys;
zr.shim = function() {
    if (Object.keys) {
        var e = function() {
            var t = Object.keys(arguments);
            return t && t.length === arguments.length;
        }(1, 2);
        e || (Object.keys = function(r) {
            return fb(r) ? uc(cb.call(r)) : uc(r);
        });
    } else Object.keys = zr;
    return Object.keys || zr;
};
var Tl = zr, ub = Error, hb = EvalError, db = RangeError, pb = ReferenceError, Qh = SyntaxError, Nt = TypeError, mb = URIError, lo = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var e = {}, t = Symbol("test"), r = Object(t);
    if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]") return !1;
    var i = 42;
    e[t] = i;
    for(t in e)return !1;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
        var s = Object.getOwnPropertyDescriptor(e, t);
        if (s.value !== i || s.enumerable !== !0) return !1;
    }
    return !0;
}, hc = typeof Symbol < "u" && Symbol, gb = lo, Ml = function() {
    return typeof hc != "function" || typeof Symbol != "function" || typeof hc("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : gb();
}, Po = {
    __proto__: null,
    foo: {}
}, yb = Object, bb = function() {
    return ({
        __proto__: Po
    }).foo === Po.foo && !(Po instanceof yb);
}, vb = "Function.prototype.bind called on incompatible ", Sb = Object.prototype.toString, wb = Math.max, xb = "[object Function]", dc = function(e, t) {
    for(var r = [], i = 0; i < e.length; i += 1)r[i] = e[i];
    for(var o = 0; o < t.length; o += 1)r[o + e.length] = t[o];
    return r;
}, Cb = function(e, t) {
    for(var r = [], i = t, o = 0; i < e.length; i += 1, o += 1)r[o] = e[i];
    return r;
}, Ob = function(n, e) {
    for(var t = "", r = 0; r < n.length; r += 1)t += n[r], r + 1 < n.length && (t += e);
    return t;
}, kb = function(e) {
    var t = this;
    if (typeof t != "function" || Sb.apply(t) !== xb) throw new TypeError(vb + t);
    for(var r = Cb(arguments, 1), i, o = function() {
        if (this instanceof i) {
            var f = t.apply(this, dc(r, arguments));
            return Object(f) === f ? f : this;
        }
        return t.apply(e, dc(r, arguments));
    }, s = wb(0, t.length - r.length), l = [], a = 0; a < s; a++)l[a] = "$" + a;
    if (i = Function("binder", "return function (" + Ob(l, ",") + "){ return binder.apply(this,arguments); }")(o), t.prototype) {
        var c = function() {};
        c.prototype = t.prototype, i.prototype = new c(), c.prototype = null;
    }
    return i;
}, Ab = kb, Nl = Function.prototype.bind || Ab, Eb = Function.prototype.call, Tb = Object.prototype.hasOwnProperty, Mb = Nl, Zh = Mb.call(Eb, Tb), L, Nb = ub, Rb = hb, Ib = db, Db = pb, Sn = Qh, pn = Nt, Pb = mb, ed = Function, $o = function(n) {
    try {
        return ed('"use strict"; return (' + n + ").constructor;")();
    } catch  {}
}, jt = Object.getOwnPropertyDescriptor;
if (jt) try {
    jt({}, "");
} catch  {
    jt = null;
}
var Bo = function() {
    throw new pn();
}, $b = jt ? function() {
    try {
        return arguments.callee, Bo;
    } catch  {
        try {
            return jt(arguments, "callee").get;
        } catch  {
            return Bo;
        }
    }
}() : Bo, tn = Ml(), Bb = bb(), ee = Object.getPrototypeOf || (Bb ? function(n) {
    return n.__proto__;
} : null), ln = {}, zb = typeof Uint8Array > "u" || !ee ? L : ee(Uint8Array), Vt = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? L : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? L : ArrayBuffer,
    "%ArrayIteratorPrototype%": tn && ee ? ee([][Symbol.iterator]()) : L,
    "%AsyncFromSyncIteratorPrototype%": L,
    "%AsyncFunction%": ln,
    "%AsyncGenerator%": ln,
    "%AsyncGeneratorFunction%": ln,
    "%AsyncIteratorPrototype%": ln,
    "%Atomics%": typeof Atomics > "u" ? L : Atomics,
    "%BigInt%": typeof BigInt > "u" ? L : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? L : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? L : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? L : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Nb,
    "%eval%": eval,
    // eslint-disable-line no-eval
    "%EvalError%": Rb,
    "%Float32Array%": typeof Float32Array > "u" ? L : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? L : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? L : FinalizationRegistry,
    "%Function%": ed,
    "%GeneratorFunction%": ln,
    "%Int8Array%": typeof Int8Array > "u" ? L : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? L : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? L : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": tn && ee ? ee(ee([][Symbol.iterator]())) : L,
    "%JSON%": typeof JSON == "object" ? JSON : L,
    "%Map%": typeof Map > "u" ? L : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !tn || !ee ? L : ee(/* @__PURE__ */ new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? L : Promise,
    "%Proxy%": typeof Proxy > "u" ? L : Proxy,
    "%RangeError%": Ib,
    "%ReferenceError%": Db,
    "%Reflect%": typeof Reflect > "u" ? L : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? L : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !tn || !ee ? L : ee(/* @__PURE__ */ new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? L : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": tn && ee ? ee(""[Symbol.iterator]()) : L,
    "%Symbol%": tn ? Symbol : L,
    "%SyntaxError%": Sn,
    "%ThrowTypeError%": $b,
    "%TypedArray%": zb,
    "%TypeError%": pn,
    "%Uint8Array%": typeof Uint8Array > "u" ? L : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? L : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? L : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? L : Uint32Array,
    "%URIError%": Pb,
    "%WeakMap%": typeof WeakMap > "u" ? L : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? L : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? L : WeakSet
};
if (ee) try {
    null.error;
} catch (n) {
    var Lb = ee(ee(n));
    Vt["%Error.prototype%"] = Lb;
}
var Fb = function n(e) {
    var t;
    if (e === "%AsyncFunction%") t = $o("async function () {}");
    else if (e === "%GeneratorFunction%") t = $o("function* () {}");
    else if (e === "%AsyncGeneratorFunction%") t = $o("async function* () {}");
    else if (e === "%AsyncGenerator%") {
        var r = n("%AsyncGeneratorFunction%");
        r && (t = r.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
        var i = n("%AsyncGenerator%");
        i && ee && (t = ee(i.prototype));
    }
    return Vt[e] = t, t;
}, pc = {
    __proto__: null,
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
}, vr = Nl, ci = Zh, _b = vr.call(Function.call, Array.prototype.concat), jb = vr.call(Function.apply, Array.prototype.splice), mc = vr.call(Function.call, String.prototype.replace), fi = vr.call(Function.call, String.prototype.slice), Vb = vr.call(Function.call, RegExp.prototype.exec), Wb = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Hb = /\\(\\)?/g, Ub = function(e) {
    var t = fi(e, 0, 1), r = fi(e, -1);
    if (t === "%" && r !== "%") throw new Sn("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && t !== "%") throw new Sn("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return mc(e, Wb, function(o, s, l, a) {
        i[i.length] = l ? mc(a, Hb, "$1") : s || o;
    }), i;
}, Kb = function(e, t) {
    var r = e, i;
    if (ci(pc, r) && (i = pc[r], r = "%" + i[0] + "%"), ci(Vt, r)) {
        var o = Vt[r];
        if (o === ln && (o = Fb(r)), typeof o > "u" && !t) throw new pn("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return {
            alias: i,
            name: r,
            value: o
        };
    }
    throw new Sn("intrinsic " + e + " does not exist!");
}, Ue = function(e, t) {
    if (typeof e != "string" || e.length === 0) throw new pn("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof t != "boolean") throw new pn('"allowMissing" argument must be a boolean');
    if (Vb(/^%?[^%]*%?$/, e) === null) throw new Sn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var r = Ub(e), i = r.length > 0 ? r[0] : "", o = Kb("%" + i + "%", t), s = o.name, l = o.value, a = !1, c = o.alias;
    c && (i = c[0], jb(r, _b([
        0,
        1
    ], c)));
    for(var f = 1, u = !0; f < r.length; f += 1){
        var h = r[f], p = fi(h, 0, 1), d = fi(h, -1);
        if ((p === '"' || p === "'" || p === "`" || d === '"' || d === "'" || d === "`") && p !== d) throw new Sn("property names with quotes must have matching quotes");
        if ((h === "constructor" || !u) && (a = !0), i += "." + h, s = "%" + i + "%", ci(Vt, s)) l = Vt[s];
        else if (l != null) {
            if (!(h in l)) {
                if (!t) throw new pn("base intrinsic for " + e + " exists, but the property is not available.");
                return;
            }
            if (jt && f + 1 >= r.length) {
                var m = jt(l, h);
                u = !!m, u && "get" in m && !("originalValue" in m.get) ? l = m.get : l = l[h];
            } else u = ci(l, h), l = l[h];
            u && !a && (Vt[s] = l);
        }
    }
    return l;
}, Jb = Ue, Lr = Jb("%Object.defineProperty%", !0) || !1;
if (Lr) try {
    Lr({}, "a", {
        value: 1
    });
} catch  {
    Lr = !1;
}
var Rl = Lr, qb = Ue, Fr = qb("%Object.getOwnPropertyDescriptor%", !0);
if (Fr) try {
    Fr([], "length");
} catch  {
    Fr = null;
}
var Il = Fr, gc = Rl, Gb = Qh, nn = Nt, yc = Il, Dl = function(e, t, r) {
    if (!e || typeof e != "object" && typeof e != "function") throw new nn("`obj` must be an object or a function`");
    if (typeof t != "string" && typeof t != "symbol") throw new nn("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null) throw new nn("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null) throw new nn("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null) throw new nn("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean") throw new nn("`loose`, if provided, must be a boolean");
    var i = arguments.length > 3 ? arguments[3] : null, o = arguments.length > 4 ? arguments[4] : null, s = arguments.length > 5 ? arguments[5] : null, l = arguments.length > 6 ? arguments[6] : !1, a = !!yc && yc(e, t);
    if (gc) gc(e, t, {
        configurable: s === null && a ? a.configurable : !s,
        enumerable: i === null && a ? a.enumerable : !i,
        value: r,
        writable: o === null && a ? a.writable : !o
    });
    else if (l || !i && !o && !s) e[t] = r;
    else throw new Gb("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, As = Rl, td = function() {
    return !!As;
};
td.hasArrayLengthDefineBug = function() {
    if (!As) return null;
    try {
        return As([], "length", {
            value: 1
        }).length !== 1;
    } catch  {
        return !0;
    }
};
var Pl = td, Yb = Tl, Xb = typeof Symbol == "function" && typeof Symbol("foo") == "symbol", Qb = Object.prototype.toString, Zb = Array.prototype.concat, bc = Dl, e0 = function(n) {
    return typeof n == "function" && Qb.call(n) === "[object Function]";
}, nd = Pl(), t0 = function(n, e, t, r) {
    if (e in n) {
        if (r === !0) {
            if (n[e] === t) return;
        } else if (!e0(r) || !r()) return;
    }
    nd ? bc(n, e, t, !0) : bc(n, e, t);
}, rd = function(n, e) {
    var t = arguments.length > 2 ? arguments[2] : {}, r = Yb(e);
    Xb && (r = Zb.call(r, Object.getOwnPropertySymbols(e)));
    for(var i = 0; i < r.length; i += 1)t0(n, r[i], e[r[i]], t[r[i]]);
};
rd.supportsDescriptors = !!nd;
var Gt = rd, id = {
    exports: {}
}, n0 = Ue, vc = Dl, r0 = Pl(), Sc = Il, wc = Nt, i0 = n0("%Math.floor%"), o0 = function(e, t) {
    if (typeof e != "function") throw new wc("`fn` is not a function");
    if (typeof t != "number" || t < 0 || t > 4294967295 || i0(t) !== t) throw new wc("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2], i = !0, o = !0;
    if ("length" in e && Sc) {
        var s = Sc(e, "length");
        s && !s.configurable && (i = !1), s && !s.writable && (o = !1);
    }
    return (i || o || !r) && (r0 ? vc(/** @type {Parameters<define>[0]} */ e, "length", t, !0, !0) : vc(/** @type {Parameters<define>[0]} */ e, "length", t)), e;
};
(function(n) {
    var e = Nl, t = Ue, r = o0, i = Nt, o = t("%Function.prototype.apply%"), s = t("%Function.prototype.call%"), l = t("%Reflect.apply%", !0) || e.call(s, o), a = Rl, c = t("%Math.max%");
    n.exports = function(h) {
        if (typeof h != "function") throw new i("a function is required");
        var p = l(e, s, arguments);
        return r(p, 1 + c(0, h.length - (arguments.length - 1)), !0);
    };
    var f = function() {
        return l(e, o, arguments);
    };
    a ? a(n.exports, "apply", {
        value: f
    }) : n.exports.apply = f;
})(id);
var En = id.exports, od = Ue, sd = En, s0 = sd(od("String.prototype.indexOf")), ke = function(e, t) {
    var r = od(e, !!t);
    return typeof r == "function" && s0(e, ".prototype.") > -1 ? sd(r) : r;
}, l0 = Tl, ld = lo(), ad = ke, xc = Object, a0 = ad("Array.prototype.push"), Cc = ad("Object.prototype.propertyIsEnumerable"), c0 = ld ? Object.getOwnPropertySymbols : null, cd = function(e, t) {
    if (e == null) throw new TypeError("target must be an object");
    var r = xc(e);
    if (arguments.length === 1) return r;
    for(var i = 1; i < arguments.length; ++i){
        var o = xc(arguments[i]), s = l0(o), l = ld && (Object.getOwnPropertySymbols || c0);
        if (l) for(var a = l(o), c = 0; c < a.length; ++c){
            var f = a[c];
            Cc(o, f) && a0(s, f);
        }
        for(var u = 0; u < s.length; ++u){
            var h = s[u];
            if (Cc(o, h)) {
                var p = o[h];
                r[h] = p;
            }
        }
    }
    return r;
}, zo = cd, f0 = function() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    for(var n = "abcdefghijklmnopqrst", e = n.split(""), t = {}, r = 0; r < e.length; ++r)t[e[r]] = e[r];
    var i = Object.assign({}, t), o = "";
    for(var s in i)o += s;
    return n !== o;
}, u0 = function() {
    if (!Object.assign || !Object.preventExtensions) return !1;
    var n = Object.preventExtensions({
        1: 2
    });
    try {
        Object.assign(n, "xy");
    } catch  {
        return n[1] === "y";
    }
    return !1;
}, fd = function() {
    return !Object.assign || f0() || u0() ? zo : Object.assign;
}, h0 = Gt, d0 = fd, p0 = function() {
    var e = d0();
    return h0(Object, {
        assign: e
    }, {
        assign: function() {
            return Object.assign !== e;
        }
    }), e;
}, m0 = Gt, g0 = En, y0 = cd, ud = fd, b0 = p0, v0 = g0.apply(ud()), hd = function(e, t) {
    return v0(Object, arguments);
};
m0(hd, {
    getPolyfill: ud,
    implementation: y0,
    shim: b0
});
var S0 = hd, lr = function() {
    return typeof (function() {}).name == "string";
}, Kn = Object.getOwnPropertyDescriptor;
if (Kn) try {
    Kn([], "length");
} catch  {
    Kn = null;
}
lr.functionsHaveConfigurableNames = function() {
    if (!lr() || !Kn) return !1;
    var e = Kn(function() {}, "name");
    return !!e && !!e.configurable;
};
var w0 = Function.prototype.bind;
lr.boundFunctionsHaveNames = function() {
    return lr() && typeof w0 == "function" && (function() {}).bind().name !== "";
};
var x0 = lr, Oc = Dl, C0 = Pl(), O0 = x0.functionsHaveConfigurableNames(), k0 = Nt, A0 = function(e, t) {
    if (typeof e != "function") throw new k0("`fn` is not a function");
    var r = arguments.length > 2 && !!arguments[2];
    return (!r || O0) && (C0 ? Oc(/** @type {Parameters<define>[0]} */ e, "name", t, !0, !0) : Oc(/** @type {Parameters<define>[0]} */ e, "name", t)), e;
}, E0 = A0, T0 = Nt, M0 = Object, dd = E0(function() {
    if (this == null || this !== M0(this)) throw new T0("RegExp.prototype.flags getter called on non-object");
    var e = "";
    return this.hasIndices && (e += "d"), this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.dotAll && (e += "s"), this.unicode && (e += "u"), this.unicodeSets && (e += "v"), this.sticky && (e += "y"), e;
}, "get flags", !0), N0 = dd, R0 = Gt.supportsDescriptors, I0 = Object.getOwnPropertyDescriptor, pd = function() {
    if (R0 && /a/mig.flags === "gim") {
        var e = I0(RegExp.prototype, "flags");
        if (e && typeof e.get == "function" && typeof RegExp.prototype.dotAll == "boolean" && typeof RegExp.prototype.hasIndices == "boolean") {
            var t = "", r = {};
            if (Object.defineProperty(r, "hasIndices", {
                get: function() {
                    t += "d";
                }
            }), Object.defineProperty(r, "sticky", {
                get: function() {
                    t += "y";
                }
            }), t === "dy") return e.get;
        }
    }
    return N0;
}, D0 = Gt.supportsDescriptors, P0 = pd, $0 = Object.getOwnPropertyDescriptor, B0 = Object.defineProperty, z0 = TypeError, kc = Object.getPrototypeOf, L0 = /a/, F0 = function() {
    if (!D0 || !kc) throw new z0("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var e = P0(), t = kc(L0), r = $0(t, "flags");
    return (!r || r.get !== e) && B0(t, "flags", {
        configurable: !0,
        enumerable: !1,
        get: e
    }), e;
}, _0 = Gt, j0 = En, V0 = dd, md = pd, W0 = F0, gd = j0(md());
_0(gd, {
    getPolyfill: md,
    implementation: V0,
    shim: W0
});
var H0 = gd, _r = {
    exports: {}
}, U0 = lo, Yt = function() {
    return U0() && !!Symbol.toStringTag;
}, K0 = Yt(), J0 = ke, Es = J0("Object.prototype.toString"), ao = function(e) {
    return K0 && e && typeof e == "object" && Symbol.toStringTag in e ? !1 : Es(e) === "[object Arguments]";
}, yd = function(e) {
    return ao(e) ? !0 : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Es(e) !== "[object Array]" && Es(e.callee) === "[object Function]";
}, q0 = function() {
    return ao(arguments);
}();
ao.isLegacyArguments = yd;
var bd = q0 ? ao : yd;
const G0 = {}, Y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: G0
}, Symbol.toStringTag, {
    value: "Module"
})), X0 = /* @__PURE__ */ lb(Y0);
var $l = typeof Map == "function" && Map.prototype, Lo = Object.getOwnPropertyDescriptor && $l ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, ui = $l && Lo && typeof Lo.get == "function" ? Lo.get : null, Ac = $l && Map.prototype.forEach, Bl = typeof Set == "function" && Set.prototype, Fo = Object.getOwnPropertyDescriptor && Bl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, hi = Bl && Fo && typeof Fo.get == "function" ? Fo.get : null, Ec = Bl && Set.prototype.forEach, Q0 = typeof WeakMap == "function" && WeakMap.prototype, Jn = Q0 ? WeakMap.prototype.has : null, Z0 = typeof WeakSet == "function" && WeakSet.prototype, qn = Z0 ? WeakSet.prototype.has : null, e1 = typeof WeakRef == "function" && WeakRef.prototype, Tc = e1 ? WeakRef.prototype.deref : null, t1 = Boolean.prototype.valueOf, n1 = Object.prototype.toString, r1 = Function.prototype.toString, i1 = String.prototype.match, zl = String.prototype.slice, Ct = String.prototype.replace, o1 = String.prototype.toUpperCase, Mc = String.prototype.toLowerCase, vd = RegExp.prototype.test, Nc = Array.prototype.concat, ze = Array.prototype.join, s1 = Array.prototype.slice, Rc = Math.floor, Ts = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, _o = Object.getOwnPropertySymbols, Ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, wn = typeof Symbol == "function" && typeof Symbol.iterator == "object", fe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === wn || !0) ? Symbol.toStringTag : null, Sd = Object.prototype.propertyIsEnumerable, Ic = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(n) {
    return n.__proto__;
} : null);
function Dc(n, e) {
    if (n === 1 / 0 || n === -1 / 0 || n !== n || n && n > -1e3 && n < 1e3 || vd.call(/e/, e)) return e;
    var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof n == "number") {
        var r = n < 0 ? -Rc(-n) : Rc(n);
        if (r !== n) {
            var i = String(r), o = zl.call(e, i.length + 1);
            return Ct.call(i, t, "$&_") + "." + Ct.call(Ct.call(o, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return Ct.call(e, t, "$&_");
}
var Ns = X0, Pc = Ns.custom, $c = xd(Pc) ? Pc : null, l1 = function n(e, t, r, i) {
    var o = t || {};
    if (dt(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (dt(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var s = dt(o, "customInspect") ? o.customInspect : !0;
    if (typeof s != "boolean" && s !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (dt(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (dt(o, "numericSeparator") && typeof o.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var l = o.numericSeparator;
    if (typeof e > "u") return "undefined";
    if (e === null) return "null";
    if (typeof e == "boolean") return e ? "true" : "false";
    if (typeof e == "string") return Od(e, o);
    if (typeof e == "number") {
        if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
        var a = String(e);
        return l ? Dc(e, a) : a;
    }
    if (typeof e == "bigint") {
        var c = String(e) + "n";
        return l ? Dc(e, c) : c;
    }
    var f = typeof o.depth > "u" ? 5 : o.depth;
    if (typeof r > "u" && (r = 0), r >= f && f > 0 && typeof e == "object") return Rs(e) ? "[Array]" : "[Object]";
    var u = k1(o, r);
    if (typeof i > "u") i = [];
    else if (Cd(i, e) >= 0) return "[Circular]";
    function h(B, v, X) {
        if (v && (i = s1.call(i), i.push(v)), X) {
            var F = {
                depth: o.depth
            };
            return dt(o, "quoteStyle") && (F.quoteStyle = o.quoteStyle), n(B, F, r + 1, i);
        }
        return n(B, o, r + 1, i);
    }
    if (typeof e == "function" && !Bc(e)) {
        var p = g1(e), d = Cr(e, h);
        return "[Function" + (p ? ": " + p : " (anonymous)") + "]" + (d.length > 0 ? " { " + ze.call(d, ", ") + " }" : "");
    }
    if (xd(e)) {
        var m = wn ? Ct.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ms.call(e);
        return typeof e == "object" && !wn ? Pn(m) : m;
    }
    if (x1(e)) {
        for(var g = "<" + Mc.call(String(e.nodeName)), y = e.attributes || [], C = 0; C < y.length; C++)g += " " + y[C].name + "=" + wd(a1(y[C].value), "double", o);
        return g += ">", e.childNodes && e.childNodes.length && (g += "..."), g += "</" + Mc.call(String(e.nodeName)) + ">", g;
    }
    if (Rs(e)) {
        if (e.length === 0) return "[]";
        var k = Cr(e, h);
        return u && !O1(k) ? "[" + Is(k, u) + "]" : "[ " + ze.call(k, ", ") + " ]";
    }
    if (f1(e)) {
        var N = Cr(e, h);
        return !("cause" in Error.prototype) && "cause" in e && !Sd.call(e, "cause") ? "{ [" + String(e) + "] " + ze.call(Nc.call("[cause]: " + h(e.cause), N), ", ") + " }" : N.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + ze.call(N, ", ") + " }";
    }
    if (typeof e == "object" && s) {
        if ($c && typeof e[$c] == "function" && Ns) return Ns(e, {
            depth: f - r
        });
        if (s !== "symbol" && typeof e.inspect == "function") return e.inspect();
    }
    if (y1(e)) {
        var T = [];
        return Ac && Ac.call(e, function(B, v) {
            T.push(h(v, e, !0) + " => " + h(B, e));
        }), zc("Map", ui.call(e), T, u);
    }
    if (S1(e)) {
        var x = [];
        return Ec && Ec.call(e, function(B) {
            x.push(h(B, e));
        }), zc("Set", hi.call(e), x, u);
    }
    if (b1(e)) return jo("WeakMap");
    if (w1(e)) return jo("WeakSet");
    if (v1(e)) return jo("WeakRef");
    if (h1(e)) return Pn(h(Number(e)));
    if (p1(e)) return Pn(h(Ts.call(e)));
    if (d1(e)) return Pn(t1.call(e));
    if (u1(e)) return Pn(h(String(e)));
    if (typeof window < "u" && e === window) return "{ [object Window] }";
    if (typeof globalThis < "u" && e === globalThis || typeof sr < "u" && e === sr) return "{ [object globalThis] }";
    if (!c1(e) && !Bc(e)) {
        var I = Cr(e, h), D = Ic ? Ic(e) === Object.prototype : e instanceof Object || e.constructor === Object, E = e instanceof Object ? "" : "null prototype", Y = !D && fe && Object(e) === e && fe in e ? zl.call(Rt(e), 8, -1) : E ? "Object" : "", A = D || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", O = A + (Y || E ? "[" + ze.call(Nc.call([], Y || [], E || []), ": ") + "] " : "");
        return I.length === 0 ? O + "{}" : u ? O + "{" + Is(I, u) + "}" : O + "{ " + ze.call(I, ", ") + " }";
    }
    return String(e);
};
function wd(n, e, t) {
    var r = (t.quoteStyle || e) === "double" ? '"' : "'";
    return r + n + r;
}
function a1(n) {
    return Ct.call(String(n), /"/g, "&quot;");
}
function Rs(n) {
    return Rt(n) === "[object Array]" && (!fe || !(typeof n == "object" && fe in n));
}
function c1(n) {
    return Rt(n) === "[object Date]" && (!fe || !(typeof n == "object" && fe in n));
}
function Bc(n) {
    return Rt(n) === "[object RegExp]" && (!fe || !(typeof n == "object" && fe in n));
}
function f1(n) {
    return Rt(n) === "[object Error]" && (!fe || !(typeof n == "object" && fe in n));
}
function u1(n) {
    return Rt(n) === "[object String]" && (!fe || !(typeof n == "object" && fe in n));
}
function h1(n) {
    return Rt(n) === "[object Number]" && (!fe || !(typeof n == "object" && fe in n));
}
function d1(n) {
    return Rt(n) === "[object Boolean]" && (!fe || !(typeof n == "object" && fe in n));
}
function xd(n) {
    if (wn) return n && typeof n == "object" && n instanceof Symbol;
    if (typeof n == "symbol") return !0;
    if (!n || typeof n != "object" || !Ms) return !1;
    try {
        return Ms.call(n), !0;
    } catch  {}
    return !1;
}
function p1(n) {
    if (!n || typeof n != "object" || !Ts) return !1;
    try {
        return Ts.call(n), !0;
    } catch  {}
    return !1;
}
var m1 = Object.prototype.hasOwnProperty || function(n) {
    return n in this;
};
function dt(n, e) {
    return m1.call(n, e);
}
function Rt(n) {
    return n1.call(n);
}
function g1(n) {
    if (n.name) return n.name;
    var e = i1.call(r1.call(n), /^function\s*([\w$]+)/);
    return e ? e[1] : null;
}
function Cd(n, e) {
    if (n.indexOf) return n.indexOf(e);
    for(var t = 0, r = n.length; t < r; t++)if (n[t] === e) return t;
    return -1;
}
function y1(n) {
    if (!ui || !n || typeof n != "object") return !1;
    try {
        ui.call(n);
        try {
            hi.call(n);
        } catch  {
            return !0;
        }
        return n instanceof Map;
    } catch  {}
    return !1;
}
function b1(n) {
    if (!Jn || !n || typeof n != "object") return !1;
    try {
        Jn.call(n, Jn);
        try {
            qn.call(n, qn);
        } catch  {
            return !0;
        }
        return n instanceof WeakMap;
    } catch  {}
    return !1;
}
function v1(n) {
    if (!Tc || !n || typeof n != "object") return !1;
    try {
        return Tc.call(n), !0;
    } catch  {}
    return !1;
}
function S1(n) {
    if (!hi || !n || typeof n != "object") return !1;
    try {
        hi.call(n);
        try {
            ui.call(n);
        } catch  {
            return !0;
        }
        return n instanceof Set;
    } catch  {}
    return !1;
}
function w1(n) {
    if (!qn || !n || typeof n != "object") return !1;
    try {
        qn.call(n, qn);
        try {
            Jn.call(n, Jn);
        } catch  {
            return !0;
        }
        return n instanceof WeakSet;
    } catch  {}
    return !1;
}
function x1(n) {
    return !n || typeof n != "object" ? !1 : typeof HTMLElement < "u" && n instanceof HTMLElement ? !0 : typeof n.nodeName == "string" && typeof n.getAttribute == "function";
}
function Od(n, e) {
    if (n.length > e.maxStringLength) {
        var t = n.length - e.maxStringLength, r = "... " + t + " more character" + (t > 1 ? "s" : "");
        return Od(zl.call(n, 0, e.maxStringLength), e) + r;
    }
    var i = Ct.call(Ct.call(n, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, C1);
    return wd(i, "single", e);
}
function C1(n) {
    var e = n.charCodeAt(0), t = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[e];
    return t ? "\\" + t : "\\x" + (e < 16 ? "0" : "") + o1.call(e.toString(16));
}
function Pn(n) {
    return "Object(" + n + ")";
}
function jo(n) {
    return n + " { ? }";
}
function zc(n, e, t, r) {
    var i = r ? Is(t, r) : ze.call(t, ", ");
    return n + " (" + e + ") {" + i + "}";
}
function O1(n) {
    for(var e = 0; e < n.length; e++)if (Cd(n[e], `
`) >= 0) return !1;
    return !0;
}
function k1(n, e) {
    var t;
    if (n.indent === "	") t = "	";
    else if (typeof n.indent == "number" && n.indent > 0) t = ze.call(Array(n.indent + 1), " ");
    else return null;
    return {
        base: t,
        prev: ze.call(Array(e + 1), t)
    };
}
function Is(n, e) {
    if (n.length === 0) return "";
    var t = `
` + e.prev + e.base;
    return t + ze.call(n, "," + t) + `
` + e.prev;
}
function Cr(n, e) {
    var t = Rs(n), r = [];
    if (t) {
        r.length = n.length;
        for(var i = 0; i < n.length; i++)r[i] = dt(n, i) ? e(n[i], n) : "";
    }
    var o = typeof _o == "function" ? _o(n) : [], s;
    if (wn) {
        s = {};
        for(var l = 0; l < o.length; l++)s["$" + o[l]] = o[l];
    }
    for(var a in n)dt(n, a) && (t && String(Number(a)) === a && a < n.length || wn && s["$" + a] instanceof Symbol || (vd.call(/[^\w$]/, a) ? r.push(e(a, n) + ": " + e(n[a], n)) : r.push(a + ": " + e(n[a], n))));
    if (typeof _o == "function") for(var c = 0; c < o.length; c++)Sd.call(n, o[c]) && r.push("[" + e(o[c]) + "]: " + e(n[o[c]], n));
    return r;
}
var kd = Ue, Tn = ke, A1 = l1, E1 = Nt, Or = kd("%WeakMap%", !0), kr = kd("%Map%", !0), T1 = Tn("WeakMap.prototype.get", !0), M1 = Tn("WeakMap.prototype.set", !0), N1 = Tn("WeakMap.prototype.has", !0), R1 = Tn("Map.prototype.get", !0), I1 = Tn("Map.prototype.set", !0), D1 = Tn("Map.prototype.has", !0), Ll = function(n, e) {
    for(var t = n, r; (r = t.next) !== null; t = r)if (r.key === e) return t.next = r.next, r.next = /** @type {NonNullable<typeof list.next>} */ n.next, n.next = r, r;
}, P1 = function(n, e) {
    var t = Ll(n, e);
    return t && t.value;
}, $1 = function(n, e, t) {
    var r = Ll(n, e);
    r ? r.value = t : n.next = /** @type {import('.').ListNode<typeof value>} */ {
        // eslint-disable-line no-param-reassign, no-extra-parens
        key: e,
        next: n.next,
        value: t
    };
}, B1 = function(n, e) {
    return !!Ll(n, e);
}, Ad = function() {
    var e, t, r, i = {
        assert: function(o) {
            if (!i.has(o)) throw new E1("Side channel does not contain " + A1(o));
        },
        get: function(o) {
            if (Or && o && (typeof o == "object" || typeof o == "function")) {
                if (e) return T1(e, o);
            } else if (kr) {
                if (t) return R1(t, o);
            } else if (r) return P1(r, o);
        },
        has: function(o) {
            if (Or && o && (typeof o == "object" || typeof o == "function")) {
                if (e) return N1(e, o);
            } else if (kr) {
                if (t) return D1(t, o);
            } else if (r) return B1(r, o);
            return !1;
        },
        set: function(o, s) {
            Or && o && (typeof o == "object" || typeof o == "function") ? (e || (e = new Or()), M1(e, o, s)) : kr ? (t || (t = new kr()), I1(t, o, s)) : (r || (r = {
                key: {},
                next: null
            }), $1(r, o, s));
        }
    };
    return i;
}, z1 = Zh, $n = Ad(), Qe = Nt, Fl = {
    assert: function(n, e) {
        if (!n || typeof n != "object" && typeof n != "function") throw new Qe("`O` is not an object");
        if (typeof e != "string") throw new Qe("`slot` must be a string");
        if ($n.assert(n), !Fl.has(n, e)) throw new Qe("`" + e + "` is not present on `O`");
    },
    get: function(n, e) {
        if (!n || typeof n != "object" && typeof n != "function") throw new Qe("`O` is not an object");
        if (typeof e != "string") throw new Qe("`slot` must be a string");
        var t = $n.get(n);
        return t && t["$" + e];
    },
    has: function(n, e) {
        if (!n || typeof n != "object" && typeof n != "function") throw new Qe("`O` is not an object");
        if (typeof e != "string") throw new Qe("`slot` must be a string");
        var t = $n.get(n);
        return !!t && z1(t, "$" + e);
    },
    set: function(n, e, t) {
        if (!n || typeof n != "object" && typeof n != "function") throw new Qe("`O` is not an object");
        if (typeof e != "string") throw new Qe("`slot` must be a string");
        var r = $n.get(n);
        r || (r = {}, $n.set(n, r)), r["$" + e] = t;
    }
};
Object.freeze && Object.freeze(Fl);
var L1 = Fl, Bn = L1, F1 = SyntaxError, Lc = typeof StopIteration == "object" ? StopIteration : null, _1 = function(e) {
    if (!Lc) throw new F1("this environment lacks StopIteration");
    Bn.set(e, "[[Done]]", !1);
    var t = {
        next: function() {
            var i = Bn.get(this, "[[Iterator]]"), o = Bn.get(i, "[[Done]]");
            try {
                return {
                    done: o,
                    value: o ? void 0 : i.next()
                };
            } catch (s) {
                if (Bn.set(i, "[[Done]]", !0), s !== Lc) throw s;
                return {
                    done: !0,
                    value: void 0
                };
            }
        }
    };
    return Bn.set(t, "[[Iterator]]", e), t;
}, j1 = {}.toString, Ed = Array.isArray || function(n) {
    return j1.call(n) == "[object Array]";
}, V1 = String.prototype.valueOf, W1 = function(e) {
    try {
        return V1.call(e), !0;
    } catch  {
        return !1;
    }
}, H1 = Object.prototype.toString, U1 = "[object String]", K1 = Yt(), Td = function(e) {
    return typeof e == "string" ? !0 : typeof e != "object" ? !1 : K1 ? W1(e) : H1.call(e) === U1;
}, _l = typeof Map == "function" && Map.prototype ? Map : null, J1 = typeof Set == "function" && Set.prototype ? Set : null, di;
_l || (di = function(e) {
    return !1;
});
var Md = _l ? Map.prototype.has : null, Fc = J1 ? Set.prototype.has : null;
!di && !Md && (di = function(e) {
    return !1;
});
var Nd = di || function(e) {
    if (!e || typeof e != "object") return !1;
    try {
        if (Md.call(e), Fc) try {
            Fc.call(e);
        } catch  {
            return !0;
        }
        return e instanceof _l;
    } catch  {}
    return !1;
}, q1 = typeof Map == "function" && Map.prototype ? Map : null, jl = typeof Set == "function" && Set.prototype ? Set : null, pi;
jl || (pi = function(e) {
    return !1;
});
var _c = q1 ? Map.prototype.has : null, Rd = jl ? Set.prototype.has : null;
!pi && !Rd && (pi = function(e) {
    return !1;
});
var Id = pi || function(e) {
    if (!e || typeof e != "object") return !1;
    try {
        if (Rd.call(e), _c) try {
            _c.call(e);
        } catch  {
            return !0;
        }
        return e instanceof jl;
    } catch  {}
    return !1;
}, jc = bd, Vc = _1;
if (Ml() || lo()) {
    var Vo = Symbol.iterator;
    _r.exports = function(e) {
        if (e != null && typeof e[Vo] < "u") return e[Vo]();
        if (jc(e)) return Array.prototype[Vo].call(e);
    };
} else {
    var G1 = Ed, Y1 = Td, Wc = Ue, X1 = Wc("%Map%", !0), Q1 = Wc("%Set%", !0), Ae = ke, Hc = Ae("Array.prototype.push"), Uc = Ae("String.prototype.charCodeAt"), Z1 = Ae("String.prototype.slice"), ev = function(e, t) {
        var r = e.length;
        if (t + 1 >= r) return t + 1;
        var i = Uc(e, t);
        if (i < 55296 || i > 56319) return t + 1;
        var o = Uc(e, t + 1);
        return o < 56320 || o > 57343 ? t + 1 : t + 2;
    }, Wo = function(e) {
        var t = 0;
        return {
            next: function() {
                var i = t >= e.length, o;
                return i || (o = e[t], t += 1), {
                    done: i,
                    value: o
                };
            }
        };
    }, Kc = function(e, t) {
        if (G1(e) || jc(e)) return Wo(e);
        if (Y1(e)) {
            var r = 0;
            return {
                next: function() {
                    var o = ev(e, r), s = Z1(e, r, o);
                    return r = o, {
                        done: o > e.length,
                        value: s
                    };
                }
            };
        }
        if (t && typeof e["_es6-shim iterator_"] < "u") return e["_es6-shim iterator_"]();
    };
    if (!X1 && !Q1) _r.exports = function(e) {
        if (e != null) return Kc(e, !0);
    };
    else {
        var tv = Nd, nv = Id, Jc = Ae("Map.prototype.forEach", !0), qc = Ae("Set.prototype.forEach", !0);
        if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] > "u" || !__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions || !__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node) var Gc = Ae("Map.prototype.iterator", !0), Yc = Ae("Set.prototype.iterator", !0);
        var Xc = Ae("Map.prototype.@@iterator", !0) || Ae("Map.prototype._es6-shim iterator_", !0), Qc = Ae("Set.prototype.@@iterator", !0) || Ae("Set.prototype._es6-shim iterator_", !0), rv = function(e) {
            if (tv(e)) {
                if (Gc) return Vc(Gc(e));
                if (Xc) return Xc(e);
                if (Jc) {
                    var t = [];
                    return Jc(e, function(i, o) {
                        Hc(t, [
                            o,
                            i
                        ]);
                    }), Wo(t);
                }
            }
            if (nv(e)) {
                if (Yc) return Vc(Yc(e));
                if (Qc) return Qc(e);
                if (qc) {
                    var r = [];
                    return qc(e, function(i) {
                        Hc(r, i);
                    }), Wo(r);
                }
            }
        };
        _r.exports = function(e) {
            return rv(e) || Kc(e);
        };
    }
}
var iv = _r.exports, Zc = function(n) {
    return n !== n;
}, Dd = function(e, t) {
    return e === 0 && t === 0 ? 1 / e === 1 / t : !!(e === t || Zc(e) && Zc(t));
}, ov = Dd, Pd = function() {
    return typeof Object.is == "function" ? Object.is : ov;
}, sv = Pd, lv = Gt, av = function() {
    var e = sv();
    return lv(Object, {
        is: e
    }, {
        is: function() {
            return Object.is !== e;
        }
    }), e;
}, cv = Gt, fv = En, uv = Dd, $d = Pd, hv = av, Bd = fv($d(), Object);
cv(Bd, {
    getPolyfill: $d,
    implementation: uv,
    shim: hv
});
var dv = Bd, pv = En, zd = ke, mv = Ue, Ds = mv("%ArrayBuffer%", !0), jr = zd("ArrayBuffer.prototype.byteLength", !0), gv = zd("Object.prototype.toString"), ef = !!Ds && !jr && new Ds(0).slice, tf = !!ef && pv(ef), Ld = jr || tf ? function(e) {
    if (!e || typeof e != "object") return !1;
    try {
        return jr ? jr(e) : tf(e, 0), !0;
    } catch  {
        return !1;
    }
} : Ds ? function(e) {
    return gv(e) === "[object ArrayBuffer]";
} : function(e) {
    return !1;
}, yv = Date.prototype.getDay, bv = function(e) {
    try {
        return yv.call(e), !0;
    } catch  {
        return !1;
    }
}, vv = Object.prototype.toString, Sv = "[object Date]", wv = Yt(), xv = function(e) {
    return typeof e != "object" || e === null ? !1 : wv ? bv(e) : vv.call(e) === Sv;
}, Ps = ke, Fd = Yt(), _d, jd, $s, Bs;
if (Fd) {
    _d = Ps("Object.prototype.hasOwnProperty"), jd = Ps("RegExp.prototype.exec"), $s = {};
    var Ho = function() {
        throw $s;
    };
    Bs = {
        toString: Ho,
        valueOf: Ho
    }, typeof Symbol.toPrimitive == "symbol" && (Bs[Symbol.toPrimitive] = Ho);
}
var Cv = Ps("Object.prototype.toString"), Ov = Object.getOwnPropertyDescriptor, kv = "[object RegExp]", Av = Fd ? function(e) {
    if (!e || typeof e != "object") return !1;
    var t = Ov(e, "lastIndex"), r = t && _d(t, "value");
    if (!r) return !1;
    try {
        jd(e, Bs);
    } catch (i) {
        return i === $s;
    }
} : function(e) {
    return !e || typeof e != "object" && typeof e != "function" ? !1 : Cv(e) === kv;
}, Ev = ke, nf = Ev("SharedArrayBuffer.prototype.byteLength", !0), Tv = nf ? function(e) {
    if (!e || typeof e != "object") return !1;
    try {
        return nf(e), !0;
    } catch  {
        return !1;
    }
} : function(e) {
    return !1;
}, Mv = Number.prototype.toString, Nv = function(e) {
    try {
        return Mv.call(e), !0;
    } catch  {
        return !1;
    }
}, Rv = Object.prototype.toString, Iv = "[object Number]", Dv = Yt(), Pv = function(e) {
    return typeof e == "number" ? !0 : typeof e != "object" ? !1 : Dv ? Nv(e) : Rv.call(e) === Iv;
}, Vd = ke, $v = Vd("Boolean.prototype.toString"), Bv = Vd("Object.prototype.toString"), zv = function(e) {
    try {
        return $v(e), !0;
    } catch  {
        return !1;
    }
}, Lv = "[object Boolean]", Fv = Yt(), _v = function(e) {
    return typeof e == "boolean" ? !0 : e === null || typeof e != "object" ? !1 : Fv && Symbol.toStringTag in e ? zv(e) : Bv(e) === Lv;
}, zs = {
    exports: {}
}, jv = Object.prototype.toString, Vv = Ml();
if (Vv) {
    var Wv = Symbol.prototype.toString, Hv = /^Symbol\(.*\)$/, Uv = function(e) {
        return typeof e.valueOf() != "symbol" ? !1 : Hv.test(Wv.call(e));
    };
    zs.exports = function(e) {
        if (typeof e == "symbol") return !0;
        if (jv.call(e) !== "[object Symbol]") return !1;
        try {
            return Uv(e);
        } catch  {
            return !1;
        }
    };
} else zs.exports = function(e) {
    return !1;
};
var Kv = zs.exports, Ls = {
    exports: {}
}, rf = typeof BigInt < "u" && BigInt, Jv = function() {
    return typeof rf == "function" && typeof BigInt == "function" && typeof rf(42) == "bigint" && typeof BigInt(42) == "bigint";
}, qv = Jv();
if (qv) {
    var Gv = BigInt.prototype.valueOf, Yv = function(e) {
        try {
            return Gv.call(e), !0;
        } catch  {}
        return !1;
    };
    Ls.exports = function(e) {
        return e === null || typeof e > "u" || typeof e == "boolean" || typeof e == "string" || typeof e == "number" || typeof e == "symbol" || typeof e == "function" ? !1 : typeof e == "bigint" ? !0 : Yv(e);
    };
} else Ls.exports = function(e) {
    return !1;
};
var Xv = Ls.exports, Qv = Td, Zv = Pv, eS = _v, tS = Kv, nS = Xv, rS = function(e) {
    if (e == null || typeof e != "object" && typeof e != "function") return null;
    if (Qv(e)) return "String";
    if (Zv(e)) return "Number";
    if (eS(e)) return "Boolean";
    if (tS(e)) return "Symbol";
    if (nS(e)) return "BigInt";
}, mi = typeof WeakMap == "function" && WeakMap.prototype ? WeakMap : null, of = typeof WeakSet == "function" && WeakSet.prototype ? WeakSet : null, gi;
mi || (gi = function(e) {
    return !1;
});
var Fs = mi ? mi.prototype.has : null, Uo = of ? of.prototype.has : null;
!gi && !Fs && (gi = function(e) {
    return !1;
});
var iS = gi || function(e) {
    if (!e || typeof e != "object") return !1;
    try {
        if (Fs.call(e, Fs), Uo) try {
            Uo.call(e, Uo);
        } catch  {
            return !0;
        }
        return e instanceof mi;
    } catch  {}
    return !1;
}, _s = {
    exports: {}
}, oS = Ue, Wd = ke, sS = oS("%WeakSet%", !0), Ko = Wd("WeakSet.prototype.has", !0);
if (Ko) {
    var Jo = Wd("WeakMap.prototype.has", !0);
    _s.exports = function(e) {
        if (!e || typeof e != "object") return !1;
        try {
            if (Ko(e, Ko), Jo) try {
                Jo(e, Jo);
            } catch  {
                return !0;
            }
            return e instanceof sS;
        } catch  {}
        return !1;
    };
} else _s.exports = function(e) {
    return !1;
};
var lS = _s.exports, aS = Nd, cS = Id, fS = iS, uS = lS, hS = function(e) {
    if (e && typeof e == "object") {
        if (aS(e)) return "Map";
        if (cS(e)) return "Set";
        if (fS(e)) return "WeakMap";
        if (uS(e)) return "WeakSet";
    }
    return !1;
}, Hd = Function.prototype.toString, cn = typeof Reflect == "object" && Reflect !== null && Reflect.apply, js, Vr;
if (typeof cn == "function" && typeof Object.defineProperty == "function") try {
    js = Object.defineProperty({}, "length", {
        get: function() {
            throw Vr;
        }
    }), Vr = {}, cn(function() {
        throw 42;
    }, null, js);
} catch (n) {
    n !== Vr && (cn = null);
}
else cn = null;
var dS = /^\s*class\b/, Vs = function(e) {
    try {
        var t = Hd.call(e);
        return dS.test(t);
    } catch  {
        return !1;
    }
}, qo = function(e) {
    try {
        return Vs(e) ? !1 : (Hd.call(e), !0);
    } catch  {
        return !1;
    }
}, Wr = Object.prototype.toString, pS = "[object Object]", mS = "[object Function]", gS = "[object GeneratorFunction]", yS = "[object HTMLAllCollection]", bS = "[object HTML document.all class]", vS = "[object HTMLCollection]", SS = typeof Symbol == "function" && !!Symbol.toStringTag, wS = !(0 in [
    , 
]), Ws = function() {
    return !1;
};
if (typeof document == "object") {
    var xS = document.all;
    Wr.call(xS) === Wr.call(document.all) && (Ws = function(e) {
        if ((wS || !e) && (typeof e > "u" || typeof e == "object")) try {
            var t = Wr.call(e);
            return (t === yS || t === bS || t === vS || t === pS) && e("") == null;
        } catch  {}
        return !1;
    });
}
var CS = cn ? function(e) {
    if (Ws(e)) return !0;
    if (!e || typeof e != "function" && typeof e != "object") return !1;
    try {
        cn(e, null, js);
    } catch (t) {
        if (t !== Vr) return !1;
    }
    return !Vs(e) && qo(e);
} : function(e) {
    if (Ws(e)) return !0;
    if (!e || typeof e != "function" && typeof e != "object") return !1;
    if (SS) return qo(e);
    if (Vs(e)) return !1;
    var t = Wr.call(e);
    return t !== mS && t !== gS && !/^\[object HTML/.test(t) ? !1 : qo(e);
}, OS = CS, kS = Object.prototype.toString, Ud = Object.prototype.hasOwnProperty, AS = function(e, t, r) {
    for(var i = 0, o = e.length; i < o; i++)Ud.call(e, i) && (r == null ? t(e[i], i, e) : t.call(r, e[i], i, e));
}, ES = function(e, t, r) {
    for(var i = 0, o = e.length; i < o; i++)r == null ? t(e.charAt(i), i, e) : t.call(r, e.charAt(i), i, e);
}, TS = function(e, t, r) {
    for(var i in e)Ud.call(e, i) && (r == null ? t(e[i], i, e) : t.call(r, e[i], i, e));
}, MS = function(e, t, r) {
    if (!OS(t)) throw new TypeError("iterator must be a function");
    var i;
    arguments.length >= 3 && (i = r), kS.call(e) === "[object Array]" ? AS(e, t, i) : typeof e == "string" ? ES(e, t, i) : TS(e, t, i);
}, NS = MS, RS = [
    "Float32Array",
    "Float64Array",
    "Int8Array",
    "Int16Array",
    "Int32Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Uint16Array",
    "Uint32Array",
    "BigInt64Array",
    "BigUint64Array"
], Go = RS, IS = typeof globalThis > "u" ? sr : globalThis, DS = function() {
    for(var e = [], t = 0; t < Go.length; t++)typeof IS[Go[t]] == "function" && (e[e.length] = Go[t]);
    return e;
}, yi = NS, PS = DS, sf = En, Vl = ke, Hr = Il, $S = Vl("Object.prototype.toString"), Kd = Yt(), lf = typeof globalThis > "u" ? sr : globalThis, Hs = PS(), Wl = Vl("String.prototype.slice"), Yo = Object.getPrototypeOf, BS = Vl("Array.prototype.indexOf", !0) || function(e, t) {
    for(var r = 0; r < e.length; r += 1)if (e[r] === t) return r;
    return -1;
}, bi = {
    __proto__: null
};
Kd && Hr && Yo ? yi(Hs, function(n) {
    var e = new lf[n]();
    if (Symbol.toStringTag in e) {
        var t = Yo(e), r = Hr(t, Symbol.toStringTag);
        if (!r) {
            var i = Yo(t);
            r = Hr(i, Symbol.toStringTag);
        }
        bi["$" + n] = sf(r.get);
    }
}) : yi(Hs, function(n) {
    var e = new lf[n](), t = e.slice || e.set;
    t && (bi["$" + n] = sf(t));
});
var zS = function(e) {
    var t = !1;
    return yi(// eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ bi, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */ function(r, i) {
        if (!t) try {
            "$" + r(e) === i && (t = Wl(i, 1));
        } catch  {}
    }), t;
}, LS = function(e) {
    var t = !1;
    return yi(// eslint-disable-next-line no-extra-parens
    /** @type {Record<`\$${TypedArrayName}`, Getter>} */ /** @type {any} */ bi, /** @type {(getter: typeof cache, name: `\$${import('.').TypedArrayName}`) => void} */ function(r, i) {
        if (!t) try {
            r(e), t = Wl(i, 1);
        } catch  {}
    }), t;
}, FS = function(e) {
    if (!e || typeof e != "object") return !1;
    if (!Kd) {
        var t = Wl($S(e), 8, -1);
        return BS(Hs, t) > -1 ? t : t !== "Object" ? !1 : LS(e);
    }
    return Hr ? zS(e) : null;
}, _S = ke, af = _S("ArrayBuffer.prototype.byteLength", !0), jS = Ld, VS = function(e) {
    return jS(e) ? af ? af(e) : e.byteLength : NaN;
}, Jd = S0, Ke = ke, cf = H0, WS = Ue, xn = iv, HS = Ad, ff = dv, uf = bd, hf = Ed, df = Ld, pf = xv, mf = Av, gf = Tv, yf = Tl, bf = rS, vf = hS, Sf = FS, wf = VS, xf = Ke("SharedArrayBuffer.prototype.byteLength", !0), Cf = Ke("Date.prototype.getTime"), Xo = Object.getPrototypeOf, Of = Ke("Object.prototype.toString"), vi = WS("%Set%", !0), Us = Ke("Map.prototype.has", !0), Si = Ke("Map.prototype.get", !0), kf = Ke("Map.prototype.size", !0), wi = Ke("Set.prototype.add", !0), qd = Ke("Set.prototype.delete", !0), xi = Ke("Set.prototype.has", !0), Ur = Ke("Set.prototype.size", !0);
function Af(n, e, t, r) {
    for(var i = xn(n), o; (o = i.next()) && !o.done;)if (Ne(e, o.value, t, r)) return qd(n, o.value), !0;
    return !1;
}
function Gd(n) {
    if (typeof n > "u") return null;
    if (typeof n != "object") return typeof n == "symbol" ? !1 : typeof n == "string" || typeof n == "number" ? +n == +n : !0;
}
function US(n, e, t, r, i, o) {
    var s = Gd(t);
    if (s != null) return s;
    var l = Si(e, s), a = Jd({}, i, {
        strict: !1
    });
    return typeof l > "u" && !Us(e, s) || !Ne(r, l, a, o) ? !1 : !Us(n, s) && Ne(r, l, a, o);
}
function KS(n, e, t) {
    var r = Gd(t);
    return r ?? (xi(e, r) && !xi(n, r));
}
function Ef(n, e, t, r, i, o) {
    for(var s = xn(n), l, a; (l = s.next()) && !l.done;)if (a = l.value, Ne(t, a, i, o) && Ne(r, Si(e, a), i, o)) return qd(n, a), !0;
    return !1;
}
function Ne(n, e, t, r) {
    var i = t || {};
    if (i.strict ? ff(n, e) : n === e) return !0;
    var o = bf(n), s = bf(e);
    if (o !== s) return !1;
    if (!n || !e || typeof n != "object" && typeof e != "object") return i.strict ? ff(n, e) : n == e;
    var l = r.has(n), a = r.has(e), c;
    if (l && a) {
        if (r.get(n) === r.get(e)) return !0;
    } else c = {};
    return l || r.set(n, c), a || r.set(e, c), GS(n, e, i, r);
}
function Tf(n) {
    return !n || typeof n != "object" || typeof n.length != "number" || typeof n.copy != "function" || typeof n.slice != "function" || n.length > 0 && typeof n[0] != "number" ? !1 : !!(n.constructor && n.constructor.isBuffer && n.constructor.isBuffer(n));
}
function JS(n, e, t, r) {
    if (Ur(n) !== Ur(e)) return !1;
    for(var i = xn(n), o = xn(e), s, l, a; (s = i.next()) && !s.done;)if (s.value && typeof s.value == "object") a || (a = new vi()), wi(a, s.value);
    else if (!xi(e, s.value)) {
        if (t.strict || !KS(n, e, s.value)) return !1;
        a || (a = new vi()), wi(a, s.value);
    }
    if (a) {
        for(; (l = o.next()) && !l.done;)if (l.value && typeof l.value == "object") {
            if (!Af(a, l.value, t.strict, r)) return !1;
        } else if (!t.strict && !xi(n, l.value) && !Af(a, l.value, t.strict, r)) return !1;
        return Ur(a) === 0;
    }
    return !0;
}
function qS(n, e, t, r) {
    if (kf(n) !== kf(e)) return !1;
    for(var i = xn(n), o = xn(e), s, l, a, c, f, u; (s = i.next()) && !s.done;)if (c = s.value[0], f = s.value[1], c && typeof c == "object") a || (a = new vi()), wi(a, c);
    else if (u = Si(e, c), typeof u > "u" && !Us(e, c) || !Ne(f, u, t, r)) {
        if (t.strict || !US(n, e, c, f, t, r)) return !1;
        a || (a = new vi()), wi(a, c);
    }
    if (a) {
        for(; (l = o.next()) && !l.done;)if (c = l.value[0], u = l.value[1], c && typeof c == "object") {
            if (!Ef(a, n, c, u, t, r)) return !1;
        } else if (!t.strict && (!n.has(c) || !Ne(Si(n, c), u, t, r)) && !Ef(a, n, c, u, Jd({}, t, {
            strict: !1
        }), r)) return !1;
        return Ur(a) === 0;
    }
    return !0;
}
function GS(n, e, t, r) {
    var i, o;
    if (typeof n != typeof e || n == null || e == null || Of(n) !== Of(e) || uf(n) !== uf(e)) return !1;
    var s = hf(n), l = hf(e);
    if (s !== l) return !1;
    var a = n instanceof Error, c = e instanceof Error;
    if (a !== c || (a || c) && (n.name !== e.name || n.message !== e.message)) return !1;
    var f = mf(n), u = mf(e);
    if (f !== u || (f || u) && (n.source !== e.source || cf(n) !== cf(e))) return !1;
    var h = pf(n), p = pf(e);
    if (h !== p || (h || p) && Cf(n) !== Cf(e) || t.strict && Xo && Xo(n) !== Xo(e)) return !1;
    var d = Sf(n), m = Sf(e);
    if (d !== m) return !1;
    if (d || m) {
        if (n.length !== e.length) return !1;
        for(i = 0; i < n.length; i++)if (n[i] !== e[i]) return !1;
        return !0;
    }
    var g = Tf(n), y = Tf(e);
    if (g !== y) return !1;
    if (g || y) {
        if (n.length !== e.length) return !1;
        for(i = 0; i < n.length; i++)if (n[i] !== e[i]) return !1;
        return !0;
    }
    var C = df(n), k = df(e);
    if (C !== k) return !1;
    if (C || k) return wf(n) !== wf(e) ? !1 : typeof Uint8Array == "function" && Ne(new Uint8Array(n), new Uint8Array(e), t, r);
    var N = gf(n), T = gf(e);
    if (N !== T) return !1;
    if (N || T) return xf(n) !== xf(e) ? !1 : typeof Uint8Array == "function" && Ne(new Uint8Array(n), new Uint8Array(e), t, r);
    if (typeof n != typeof e) return !1;
    var x = yf(n), I = yf(e);
    if (x.length !== I.length) return !1;
    for(x.sort(), I.sort(), i = x.length - 1; i >= 0; i--)if (x[i] != I[i]) return !1;
    for(i = x.length - 1; i >= 0; i--)if (o = x[i], !Ne(n[o], e[o], t, r)) return !1;
    var D = vf(n), E = vf(e);
    return D !== E ? !1 : D === "Set" || E === "Set" ? JS(n, e, t, r) : D === "Map" ? qS(n, e, t, r) : !0;
}
var YS = function(e, t, r) {
    return Ne(e, t, r, HS());
};
const IE = /* @__PURE__ */ Yh(YS);
function Yd(n) {
    var e, t, r = "";
    if (typeof n == "string" || typeof n == "number") r += n;
    else if (typeof n == "object") if (Array.isArray(n)) for(e = 0; e < n.length; e++)n[e] && (t = Yd(n[e])) && (r && (r += " "), r += t);
    else for(e in n)n[e] && (r && (r += " "), r += e);
    return r;
}
function XS() {
    for(var n, e, t = 0, r = ""; t < arguments.length;)(n = arguments[t++]) && (e = Yd(n)) && (r && (r += " "), r += e);
    return r;
}
const Mf = (n)=>typeof n == "boolean" ? "".concat(n) : n === 0 ? "0" : n, Nf = XS, DE = (n, e)=>(t)=>{
        var r;
        if ((e == null ? void 0 : e.variants) == null) return Nf(n, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
        const { variants: i, defaultVariants: o } = e, s = Object.keys(i).map((c)=>{
            const f = t == null ? void 0 : t[c], u = o == null ? void 0 : o[c];
            if (f === null) return null;
            const h = Mf(f) || Mf(u);
            return i[c][h];
        }), l = t && Object.entries(t).reduce((c, f)=>{
            let [u, h] = f;
            return h === void 0 || (c[u] = h), c;
        }, {}), a = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, f)=>{
            let { class: u, className: h, ...p } = f;
            return Object.entries(p).every((d)=>{
                let [m, g] = d;
                return Array.isArray(g) ? g.includes({
                    ...o,
                    ...l
                }[m]) : ({
                    ...o,
                    ...l
                })[m] === g;
            }) ? [
                ...c,
                u,
                h
            ] : c;
        }, []);
        return Nf(n, s, a, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
    };
var Xd = {
    exports: {}
};
(function(n, e) {
    (function(r, i) {
        n.exports = i(__TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$propertydrone$2f$propertydrone_fe$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    })(sr, function(t, r) {
        return /******/ function(i) {
            var o = {};
            function s(l) {
                if (o[l]) return o[l].exports;
                var a = o[l] = {
                    /******/ i: l,
                    /******/ l: !1,
                    /******/ exports: {}
                };
                return i[l].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
            }
            return s.m = i, s.c = o, s.d = function(l, a, c) {
                s.o(l, a) || Object.defineProperty(l, a, {
                    enumerable: !0,
                    get: c
                });
            }, s.r = function(l) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(l, "__esModule", {
                    value: !0
                });
            }, s.t = function(l, a) {
                if (a & 1 && (l = s(l)), a & 8 || a & 4 && typeof l == "object" && l && l.__esModule) return l;
                var c = /* @__PURE__ */ Object.create(null);
                if (s.r(c), Object.defineProperty(c, "default", {
                    enumerable: !0,
                    value: l
                }), a & 2 && typeof l != "string") for(var f in l)s.d(c, f, (function(u) {
                    return l[u];
                }).bind(null, f));
                return c;
            }, s.n = function(l) {
                var a = l && l.__esModule ? /******/ function() {
                    return l.default;
                } : /******/ function() {
                    return l;
                };
                return s.d(a, "a", a), a;
            }, s.o = function(l, a) {
                return Object.prototype.hasOwnProperty.call(l, a);
            }, s.p = "", s(s.s = 4);
        }([
            /* 0 */ /***/ function(i, o, s) {
                i.exports = s(5)();
            },
            /* 1 */ /***/ function(i, o) {
                i.exports = t;
            },
            /* 2 */ /***/ function(i, o) {
                i.exports = r;
            },
            /* 3 */ /***/ function(i, o) {
                i.exports = function(s, l, a) {
                    var c = s.direction, f = s.value;
                    switch(c){
                        case "top":
                            return a.top + f < l.top && a.bottom > l.bottom && a.left < l.left && a.right > l.right;
                        case "left":
                            return a.left + f < l.left && a.bottom > l.bottom && a.top < l.top && a.right > l.right;
                        case "bottom":
                            return a.bottom - f > l.bottom && a.left < l.left && a.right > l.right && a.top < l.top;
                        case "right":
                            return a.right - f > l.right && a.left < l.left && a.top < l.top && a.bottom > l.bottom;
                    }
                };
            },
            /* 4 */ /***/ function(i, o, s) {
                s.r(o), s.d(o, "default", function() {
                    return Y;
                });
                var l = s(1), a = /* @__PURE__ */ s.n(l), c = s(2), f = /* @__PURE__ */ s.n(c), u = s(0), h = /* @__PURE__ */ s.n(u), p = s(3), d = /* @__PURE__ */ s.n(p);
                function m(A) {
                    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? m = function(B) {
                        return typeof B;
                    } : m = function(B) {
                        return B && typeof Symbol == "function" && B.constructor === Symbol && B !== Symbol.prototype ? "symbol" : typeof B;
                    }, m(A);
                }
                function g(A, O) {
                    if (!(A instanceof O)) throw new TypeError("Cannot call a class as a function");
                }
                function y(A, O) {
                    for(var B = 0; B < O.length; B++){
                        var v = O[B];
                        v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(A, v.key, v);
                    }
                }
                function C(A, O, B) {
                    return O && y(A.prototype, O), A;
                }
                function k(A, O) {
                    return O && (m(O) === "object" || typeof O == "function") ? O : T(A);
                }
                function N(A) {
                    return N = Object.setPrototypeOf ? Object.getPrototypeOf : function(B) {
                        return B.__proto__ || Object.getPrototypeOf(B);
                    }, N(A);
                }
                function T(A) {
                    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return A;
                }
                function x(A, O) {
                    if (typeof O != "function" && O !== null) throw new TypeError("Super expression must either be null or a function");
                    A.prototype = Object.create(O && O.prototype, {
                        constructor: {
                            value: A,
                            writable: !0,
                            configurable: !0
                        }
                    }), O && I(A, O);
                }
                function I(A, O) {
                    return I = Object.setPrototypeOf || function(v, X) {
                        return v.__proto__ = X, v;
                    }, I(A, O);
                }
                function D(A, O, B) {
                    return O in A ? Object.defineProperty(A, O, {
                        value: B,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : A[O] = B, A;
                }
                function E(A) {
                    return A.width === void 0 && (A.width = A.right - A.left), A.height === void 0 && (A.height = A.bottom - A.top), A;
                }
                var Y = /* @__PURE__ */ function(A) {
                    x(O, A);
                    function O(B) {
                        var v;
                        return g(this, O), v = k(this, N(O).call(this, B)), D(T(v), "getContainer", function() {
                            return v.props.containment || window;
                        }), D(T(v), "addEventListener", function(X, F, j, ne) {
                            v.debounceCheck || (v.debounceCheck = {});
                            var U, lt, Z = function() {
                                U = null, v.check();
                            };
                            ne > -1 ? lt = function() {
                                U || (U = setTimeout(Z, ne || 0));
                            } : lt = function() {
                                clearTimeout(U), U = setTimeout(Z, j || 0);
                            };
                            var Nn = {
                                target: X,
                                fn: lt,
                                getLastTimeout: function() {
                                    return U;
                                }
                            };
                            X.addEventListener(F, Nn.fn), v.debounceCheck[F] = Nn;
                        }), D(T(v), "startWatching", function() {
                            v.debounceCheck || v.interval || (v.props.intervalCheck && (v.interval = setInterval(v.check, v.props.intervalDelay)), v.props.scrollCheck && v.addEventListener(v.getContainer(), "scroll", v.props.scrollDelay, v.props.scrollThrottle), v.props.resizeCheck && v.addEventListener(window, "resize", v.props.resizeDelay, v.props.resizeThrottle), !v.props.delayedCall && v.check());
                        }), D(T(v), "stopWatching", function() {
                            if (v.debounceCheck) {
                                for(var X in v.debounceCheck)if (v.debounceCheck.hasOwnProperty(X)) {
                                    var F = v.debounceCheck[X];
                                    clearTimeout(F.getLastTimeout()), F.target.removeEventListener(X, F.fn), v.debounceCheck[X] = null;
                                }
                            }
                            v.debounceCheck = null, v.interval && (v.interval = clearInterval(v.interval));
                        }), D(T(v), "check", function() {
                            var X = v.node, F, j;
                            if (!X) return v.state;
                            if (F = E(v.roundRectDown(X.getBoundingClientRect())), v.props.containment) {
                                var ne = v.props.containment.getBoundingClientRect();
                                j = {
                                    top: ne.top,
                                    left: ne.left,
                                    bottom: ne.bottom,
                                    right: ne.right
                                };
                            } else j = {
                                top: 0,
                                left: 0,
                                bottom: window.innerHeight || document.documentElement.clientHeight,
                                right: window.innerWidth || document.documentElement.clientWidth
                            };
                            var U = v.props.offset || {}, lt = m(U) === "object";
                            lt && (j.top += U.top || 0, j.left += U.left || 0, j.bottom -= U.bottom || 0, j.right -= U.right || 0);
                            var Z = {
                                top: F.top >= j.top,
                                left: F.left >= j.left,
                                bottom: F.bottom <= j.bottom,
                                right: F.right <= j.right
                            }, Nn = F.height > 0 && F.width > 0, Ge = Nn && Z.top && Z.left && Z.bottom && Z.right;
                            if (Nn && v.props.partialVisibility) {
                                var go = F.top <= j.bottom && F.bottom >= j.top && F.left <= j.right && F.right >= j.left;
                                typeof v.props.partialVisibility == "string" && (go = Z[v.props.partialVisibility]), Ge = v.props.minTopValue ? go && F.top <= j.bottom - v.props.minTopValue : go;
                            }
                            typeof U.direction == "string" && typeof U.value == "number" && (console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", U.direction, U.value), Ge = d()(U, F, j));
                            var yo = v.state;
                            return v.state.isVisible !== Ge && (yo = {
                                isVisible: Ge,
                                visibilityRect: Z
                            }, v.setState(yo), v.props.onChange && v.props.onChange(Ge)), yo;
                        }), v.state = {
                            isVisible: null,
                            visibilityRect: {}
                        }, v;
                    }
                    return C(O, [
                        {
                            key: "componentDidMount",
                            value: function() {
                                this.node = f.a.findDOMNode(this), this.props.active && this.startWatching();
                            }
                        },
                        {
                            key: "componentWillUnmount",
                            value: function() {
                                this.stopWatching();
                            }
                        },
                        {
                            key: "componentDidUpdate",
                            value: function(v) {
                                this.node = f.a.findDOMNode(this), this.props.active && !v.active ? (this.setState({
                                    isVisible: null,
                                    visibilityRect: {}
                                }), this.startWatching()) : this.props.active || this.stopWatching();
                            }
                        },
                        {
                            key: "roundRectDown",
                            value: function(v) {
                                return {
                                    top: Math.floor(v.top),
                                    left: Math.floor(v.left),
                                    bottom: Math.floor(v.bottom),
                                    right: Math.floor(v.right)
                                };
                            }
                        },
                        {
                            key: "render",
                            value: function() {
                                return this.props.children instanceof Function ? this.props.children({
                                    isVisible: this.state.isVisible,
                                    visibilityRect: this.state.visibilityRect
                                }) : a.a.Children.only(this.props.children);
                            }
                        }
                    ]), O;
                }(a.a.Component);
                D(Y, "defaultProps", {
                    active: !0,
                    partialVisibility: !1,
                    minTopValue: 0,
                    scrollCheck: !1,
                    scrollDelay: 250,
                    scrollThrottle: -1,
                    resizeCheck: !1,
                    resizeDelay: 250,
                    resizeThrottle: -1,
                    intervalCheck: !0,
                    intervalDelay: 100,
                    delayedCall: !1,
                    offset: {},
                    containment: null,
                    children: a.a.createElement("span", null)
                }), D(Y, "propTypes", {
                    onChange: h.a.func,
                    active: h.a.bool,
                    partialVisibility: h.a.oneOfType([
                        h.a.bool,
                        h.a.oneOf([
                            "top",
                            "right",
                            "bottom",
                            "left"
                        ])
                    ]),
                    delayedCall: h.a.bool,
                    offset: h.a.oneOfType([
                        h.a.shape({
                            top: h.a.number,
                            left: h.a.number,
                            bottom: h.a.number,
                            right: h.a.number
                        }),
                        // deprecated offset property
                        h.a.shape({
                            direction: h.a.oneOf([
                                "top",
                                "right",
                                "bottom",
                                "left"
                            ]),
                            value: h.a.number
                        })
                    ]),
                    scrollCheck: h.a.bool,
                    scrollDelay: h.a.number,
                    scrollThrottle: h.a.number,
                    resizeCheck: h.a.bool,
                    resizeDelay: h.a.number,
                    resizeThrottle: h.a.number,
                    intervalCheck: h.a.bool,
                    intervalDelay: h.a.number,
                    containment: typeof window < "u" ? h.a.instanceOf(window.Element) : h.a.any,
                    children: h.a.oneOfType([
                        h.a.element,
                        h.a.func
                    ]),
                    minTopValue: h.a.number
                });
            },
            /* 5 */ /***/ function(i, o, s) {
                var l = s(6);
                function a() {}
                function c() {}
                c.resetWarningCache = a, i.exports = function() {
                    function f(p, d, m, g, y, C) {
                        if (C !== l) {
                            var k = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw k.name = "Invariant Violation", k;
                        }
                    }
                    f.isRequired = f;
                    function u() {
                        return f;
                    }
                    var h = {
                        array: f,
                        bool: f,
                        func: f,
                        number: f,
                        object: f,
                        string: f,
                        symbol: f,
                        any: f,
                        arrayOf: u,
                        element: f,
                        elementType: f,
                        instanceOf: u,
                        node: f,
                        objectOf: u,
                        oneOf: u,
                        oneOfType: u,
                        shape: u,
                        exact: u,
                        checkPropTypes: c,
                        resetWarningCache: a
                    };
                    return h.PropTypes = h, h;
                };
            },
            /* 6 */ /***/ function(i, o, s) {
                var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                i.exports = l;
            }
        ]);
    });
})(Xd);
var QS = Xd.exports;
const PE = /* @__PURE__ */ Yh(QS);
var Qd = ("TURBOPACK compile-time value", "object") == "object" && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.Object === Object && /*TURBOPACK member replacement*/ __turbopack_context__.g, ZS = typeof self == "object" && self && self.Object === Object && self, Je = Qd || ZS || Function("return this")(), We = Je.Symbol, Zd = Object.prototype, ew = Zd.hasOwnProperty, tw = Zd.toString, zn = We ? We.toStringTag : void 0;
function nw(n) {
    var e = ew.call(n, zn), t = n[zn];
    try {
        n[zn] = void 0;
        var r = !0;
    } catch  {}
    var i = tw.call(n);
    return r && (e ? n[zn] = t : delete n[zn]), i;
}
var rw = Object.prototype, iw = rw.toString;
function ow(n) {
    return iw.call(n);
}
var sw = "[object Null]", lw = "[object Undefined]", Rf = We ? We.toStringTag : void 0;
function It(n) {
    return n == null ? n === void 0 ? lw : sw : Rf && Rf in Object(n) ? nw(n) : ow(n);
}
function it(n) {
    return n != null && typeof n == "object";
}
var aw = "[object Symbol]";
function co(n) {
    return typeof n == "symbol" || it(n) && It(n) == aw;
}
function ep(n, e) {
    for(var t = -1, r = n == null ? 0 : n.length, i = Array(r); ++t < r;)i[t] = e(n[t], t, n);
    return i;
}
var He = Array.isArray, cw = 1 / 0, If = We ? We.prototype : void 0, Df = If ? If.toString : void 0;
function Ci(n) {
    if (typeof n == "string") return n;
    if (He(n)) return ep(n, Ci) + "";
    if (co(n)) return Df ? Df.call(n) : "";
    var e = n + "";
    return e == "0" && 1 / n == -cw ? "-0" : e;
}
var fw = /\s/;
function uw(n) {
    for(var e = n.length; e-- && fw.test(n.charAt(e)););
    return e;
}
var hw = /^\s+/;
function dw(n) {
    return n && n.slice(0, uw(n) + 1).replace(hw, "");
}
function Tt(n) {
    var e = typeof n;
    return n != null && (e == "object" || e == "function");
}
var Pf = NaN, pw = /^[-+]0x[0-9a-f]+$/i, mw = /^0b[01]+$/i, gw = /^0o[0-7]+$/i, yw = parseInt;
function mn(n) {
    if (typeof n == "number") return n;
    if (co(n)) return Pf;
    if (Tt(n)) {
        var e = typeof n.valueOf == "function" ? n.valueOf() : n;
        n = Tt(e) ? e + "" : e;
    }
    if (typeof n != "string") return n === 0 ? n : +n;
    n = dw(n);
    var t = mw.test(n);
    return t || gw.test(n) ? yw(n.slice(2), t ? 2 : 8) : pw.test(n) ? Pf : +n;
}
var $f = 1 / 0, bw = 17976931348623157e292;
function vw(n) {
    if (!n) return n === 0 ? n : 0;
    if (n = mn(n), n === $f || n === -$f) {
        var e = n < 0 ? -1 : 1;
        return e * bw;
    }
    return n === n ? n : 0;
}
function Sw(n) {
    var e = vw(n), t = e % 1;
    return e === e ? t ? e - t : e : 0;
}
function Hl(n) {
    return n;
}
var ww = "[object AsyncFunction]", xw = "[object Function]", Cw = "[object GeneratorFunction]", Ow = "[object Proxy]";
function tp(n) {
    if (!Tt(n)) return !1;
    var e = It(n);
    return e == xw || e == Cw || e == ww || e == Ow;
}
var Qo = Je["__core-js_shared__"], Bf = function() {
    var n = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
}();
function kw(n) {
    return !!Bf && Bf in n;
}
var Aw = Function.prototype, Ew = Aw.toString;
function Xt(n) {
    if (n != null) {
        try {
            return Ew.call(n);
        } catch  {}
        try {
            return n + "";
        } catch  {}
    }
    return "";
}
var Tw = /[\\^$.*+?()[\]{}|]/g, Mw = /^\[object .+?Constructor\]$/, Nw = Function.prototype, Rw = Object.prototype, Iw = Nw.toString, Dw = Rw.hasOwnProperty, Pw = RegExp("^" + Iw.call(Dw).replace(Tw, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function $w(n) {
    if (!Tt(n) || kw(n)) return !1;
    var e = tp(n) ? Pw : Mw;
    return e.test(Xt(n));
}
function Bw(n, e) {
    return n == null ? void 0 : n[e];
}
function Qt(n, e) {
    var t = Bw(n, e);
    return $w(t) ? t : void 0;
}
var Ks = Qt(Je, "WeakMap");
function zw(n, e, t) {
    switch(t.length){
        case 0:
            return n.call(e);
        case 1:
            return n.call(e, t[0]);
        case 2:
            return n.call(e, t[0], t[1]);
        case 3:
            return n.call(e, t[0], t[1], t[2]);
    }
    return n.apply(e, t);
}
var Lw = 800, Fw = 16, _w = Date.now;
function jw(n) {
    var e = 0, t = 0;
    return function() {
        var r = _w(), i = Fw - (r - t);
        if (t = r, i > 0) {
            if (++e >= Lw) return arguments[0];
        } else e = 0;
        return n.apply(void 0, arguments);
    };
}
function Vw(n) {
    return function() {
        return n;
    };
}
var zf = function() {
    try {
        var n = Qt(Object, "defineProperty");
        return n({}, "", {}), n;
    } catch  {}
}(), Ww = zf ? function(n, e) {
    return zf(n, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Vw(e),
        writable: !0
    });
} : Hl, Hw = jw(Ww);
function Uw(n, e, t, r) {
    for(var i = n.length, o = t + -1; ++o < i;)if (e(n[o], o, n)) return o;
    return -1;
}
function Kw(n) {
    return n !== n;
}
function Jw(n, e, t) {
    for(var r = t - 1, i = n.length; ++r < i;)if (n[r] === e) return r;
    return -1;
}
function qw(n, e, t) {
    return e === e ? Jw(n, e, t) : Uw(n, Kw, t);
}
function Gw(n, e) {
    var t = n == null ? 0 : n.length;
    return !!t && qw(n, e, 0) > -1;
}
var Yw = 9007199254740991, Xw = /^(?:0|[1-9]\d*)$/;
function np(n, e) {
    var t = typeof n;
    return e = e ?? Yw, !!e && (t == "number" || t != "symbol" && Xw.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
function rp(n, e) {
    return n === e || n !== n && e !== e;
}
var Lf = Math.max;
function Qw(n, e, t) {
    return e = Lf(e === void 0 ? n.length - 1 : e, 0), function() {
        for(var r = arguments, i = -1, o = Lf(r.length - e, 0), s = Array(o); ++i < o;)s[i] = r[e + i];
        i = -1;
        for(var l = Array(e + 1); ++i < e;)l[i] = r[i];
        return l[e] = t(s), zw(n, this, l);
    };
}
function Zw(n, e) {
    return Hw(Qw(n, e, Hl), n + "");
}
var ex = 9007199254740991;
function Ul(n) {
    return typeof n == "number" && n > -1 && n % 1 == 0 && n <= ex;
}
function ip(n) {
    return n != null && Ul(n.length) && !tp(n);
}
var tx = Object.prototype;
function nx(n) {
    var e = n && n.constructor, t = typeof e == "function" && e.prototype || tx;
    return n === t;
}
function rx(n, e) {
    for(var t = -1, r = Array(n); ++t < n;)r[t] = e(t);
    return r;
}
var ix = "[object Arguments]";
function Ff(n) {
    return it(n) && It(n) == ix;
}
var op = Object.prototype, ox = op.hasOwnProperty, sx = op.propertyIsEnumerable, Kl = Ff(/* @__PURE__ */ function() {
    return arguments;
}()) ? Ff : function(n) {
    return it(n) && ox.call(n, "callee") && !sx.call(n, "callee");
};
function lx() {
    return !1;
}
var sp = ("TURBOPACK compile-time value", "undefined") == "object" && exports && !exports.nodeType && exports, _f = sp && ("TURBOPACK compile-time value", "undefined") == "object" && module && !module.nodeType && module, ax = _f && _f.exports === sp, jf = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0, cx = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : void 0, Js = cx || lx, fx = "[object Arguments]", ux = "[object Array]", hx = "[object Boolean]", dx = "[object Date]", px = "[object Error]", mx = "[object Function]", gx = "[object Map]", yx = "[object Number]", bx = "[object Object]", vx = "[object RegExp]", Sx = "[object Set]", wx = "[object String]", xx = "[object WeakMap]", Cx = "[object ArrayBuffer]", Ox = "[object DataView]", kx = "[object Float32Array]", Ax = "[object Float64Array]", Ex = "[object Int8Array]", Tx = "[object Int16Array]", Mx = "[object Int32Array]", Nx = "[object Uint8Array]", Rx = "[object Uint8ClampedArray]", Ix = "[object Uint16Array]", Dx = "[object Uint32Array]", W = {};
W[kx] = W[Ax] = W[Ex] = W[Tx] = W[Mx] = W[Nx] = W[Rx] = W[Ix] = W[Dx] = !0;
W[fx] = W[ux] = W[Cx] = W[hx] = W[Ox] = W[dx] = W[px] = W[mx] = W[gx] = W[yx] = W[bx] = W[vx] = W[Sx] = W[wx] = W[xx] = !1;
function Px(n) {
    return it(n) && Ul(n.length) && !!W[It(n)];
}
function Jl(n) {
    return function(e) {
        return n(e);
    };
}
var lp = ("TURBOPACK compile-time value", "undefined") == "object" && exports && !exports.nodeType && exports, Gn = lp && ("TURBOPACK compile-time value", "undefined") == "object" && module && !module.nodeType && module, $x = Gn && Gn.exports === lp, Zo = $x && Qd.process, Oi = function() {
    try {
        var n = Gn && Gn.require && Gn.require("util").types;
        return n || Zo && Zo.binding && Zo.binding("util");
    } catch  {}
}(), Vf = Oi && Oi.isTypedArray, ap = Vf ? Jl(Vf) : Px, Bx = Object.prototype, zx = Bx.hasOwnProperty;
function Lx(n, e) {
    var t = He(n), r = !t && Kl(n), i = !t && !r && Js(n), o = !t && !r && !i && ap(n), s = t || r || i || o, l = s ? rx(n.length, String) : [], a = l.length;
    for(var c in n)zx.call(n, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    np(c, a))) && l.push(c);
    return l;
}
function Fx(n, e) {
    return function(t) {
        return n(e(t));
    };
}
var _x = Fx(Object.keys, Object), jx = Object.prototype, Vx = jx.hasOwnProperty;
function Wx(n) {
    if (!nx(n)) return _x(n);
    var e = [];
    for(var t in Object(n))Vx.call(n, t) && t != "constructor" && e.push(t);
    return e;
}
function cp(n) {
    return ip(n) ? Lx(n) : Wx(n);
}
var Hx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ux = /^\w*$/;
function ql(n, e) {
    if (He(n)) return !1;
    var t = typeof n;
    return t == "number" || t == "symbol" || t == "boolean" || n == null || co(n) ? !0 : Ux.test(n) || !Hx.test(n) || e != null && n in Object(e);
}
var ar = Qt(Object, "create");
function Kx() {
    this.__data__ = ar ? ar(null) : {}, this.size = 0;
}
function Jx(n) {
    var e = this.has(n) && delete this.__data__[n];
    return this.size -= e ? 1 : 0, e;
}
var qx = "__lodash_hash_undefined__", Gx = Object.prototype, Yx = Gx.hasOwnProperty;
function Xx(n) {
    var e = this.__data__;
    if (ar) {
        var t = e[n];
        return t === qx ? void 0 : t;
    }
    return Yx.call(e, n) ? e[n] : void 0;
}
var Qx = Object.prototype, Zx = Qx.hasOwnProperty;
function eC(n) {
    var e = this.__data__;
    return ar ? e[n] !== void 0 : Zx.call(e, n);
}
var tC = "__lodash_hash_undefined__";
function nC(n, e) {
    var t = this.__data__;
    return this.size += this.has(n) ? 0 : 1, t[n] = ar && e === void 0 ? tC : e, this;
}
function Jt(n) {
    var e = -1, t = n == null ? 0 : n.length;
    for(this.clear(); ++e < t;){
        var r = n[e];
        this.set(r[0], r[1]);
    }
}
Jt.prototype.clear = Kx;
Jt.prototype.delete = Jx;
Jt.prototype.get = Xx;
Jt.prototype.has = eC;
Jt.prototype.set = nC;
function rC() {
    this.__data__ = [], this.size = 0;
}
function fo(n, e) {
    for(var t = n.length; t--;)if (rp(n[t][0], e)) return t;
    return -1;
}
var iC = Array.prototype, oC = iC.splice;
function sC(n) {
    var e = this.__data__, t = fo(e, n);
    if (t < 0) return !1;
    var r = e.length - 1;
    return t == r ? e.pop() : oC.call(e, t, 1), --this.size, !0;
}
function lC(n) {
    var e = this.__data__, t = fo(e, n);
    return t < 0 ? void 0 : e[t][1];
}
function aC(n) {
    return fo(this.__data__, n) > -1;
}
function cC(n, e) {
    var t = this.__data__, r = fo(t, n);
    return r < 0 ? (++this.size, t.push([
        n,
        e
    ])) : t[r][1] = e, this;
}
function ot(n) {
    var e = -1, t = n == null ? 0 : n.length;
    for(this.clear(); ++e < t;){
        var r = n[e];
        this.set(r[0], r[1]);
    }
}
ot.prototype.clear = rC;
ot.prototype.delete = sC;
ot.prototype.get = lC;
ot.prototype.has = aC;
ot.prototype.set = cC;
var cr = Qt(Je, "Map");
function fC() {
    this.size = 0, this.__data__ = {
        hash: new Jt(),
        map: new (cr || ot)(),
        string: new Jt()
    };
}
function uC(n) {
    var e = typeof n;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
}
function uo(n, e) {
    var t = n.__data__;
    return uC(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function hC(n) {
    var e = uo(this, n).delete(n);
    return this.size -= e ? 1 : 0, e;
}
function dC(n) {
    return uo(this, n).get(n);
}
function pC(n) {
    return uo(this, n).has(n);
}
function mC(n, e) {
    var t = uo(this, n), r = t.size;
    return t.set(n, e), this.size += t.size == r ? 0 : 1, this;
}
function st(n) {
    var e = -1, t = n == null ? 0 : n.length;
    for(this.clear(); ++e < t;){
        var r = n[e];
        this.set(r[0], r[1]);
    }
}
st.prototype.clear = fC;
st.prototype.delete = hC;
st.prototype.get = dC;
st.prototype.has = pC;
st.prototype.set = mC;
var gC = "Expected a function";
function Gl(n, e) {
    if (typeof n != "function" || e != null && typeof e != "function") throw new TypeError(gC);
    var t = function() {
        var r = arguments, i = e ? e.apply(this, r) : r[0], o = t.cache;
        if (o.has(i)) return o.get(i);
        var s = n.apply(this, r);
        return t.cache = o.set(i, s) || o, s;
    };
    return t.cache = new (Gl.Cache || st)(), t;
}
Gl.Cache = st;
var yC = 500;
function bC(n) {
    var e = Gl(n, function(r) {
        return t.size === yC && t.clear(), r;
    }), t = e.cache;
    return e;
}
var vC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, SC = /\\(\\)?/g, wC = bC(function(n) {
    var e = [];
    return n.charCodeAt(0) === 46 && e.push(""), n.replace(vC, function(t, r, i, o) {
        e.push(i ? o.replace(SC, "$1") : r || t);
    }), e;
});
function qs(n) {
    return n == null ? "" : Ci(n);
}
function fp(n, e) {
    return He(n) ? n : ql(n, e) ? [
        n
    ] : wC(qs(n));
}
var xC = 1 / 0;
function ho(n) {
    if (typeof n == "string" || co(n)) return n;
    var e = n + "";
    return e == "0" && 1 / n == -xC ? "-0" : e;
}
function up(n, e) {
    e = fp(e, n);
    for(var t = 0, r = e.length; n != null && t < r;)n = n[ho(e[t++])];
    return t && t == r ? n : void 0;
}
function CC(n, e, t) {
    var r = n == null ? void 0 : up(n, e);
    return r === void 0 ? t : r;
}
function hp(n, e) {
    for(var t = -1, r = e.length, i = n.length; ++t < r;)n[i + t] = e[t];
    return n;
}
var Wf = We ? We.isConcatSpreadable : void 0;
function OC(n) {
    return He(n) || Kl(n) || !!(Wf && n && n[Wf]);
}
function kC(n, e, t, r, i) {
    var o = -1, s = n.length;
    for(t || (t = OC), i || (i = []); ++o < s;){
        var l = n[o];
        t(l) && hp(i, l);
    }
    return i;
}
function AC(n, e, t) {
    var r = -1, i = n.length;
    e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
    for(var o = Array(i); ++r < i;)o[r] = n[r + e];
    return o;
}
function EC(n, e, t) {
    var r = n.length;
    return t = t === void 0 ? r : t, !e && t >= r ? n : AC(n, e, t);
}
var TC = "\\ud800-\\udfff", MC = "\\u0300-\\u036f", NC = "\\ufe20-\\ufe2f", RC = "\\u20d0-\\u20ff", IC = MC + NC + RC, DC = "\\ufe0e\\ufe0f", PC = "\\u200d", $C = RegExp("[" + PC + TC + IC + DC + "]");
function Yl(n) {
    return $C.test(n);
}
function BC(n) {
    return n.split("");
}
var dp = "\\ud800-\\udfff", zC = "\\u0300-\\u036f", LC = "\\ufe20-\\ufe2f", FC = "\\u20d0-\\u20ff", _C = zC + LC + FC, jC = "\\ufe0e\\ufe0f", VC = "[" + dp + "]", Gs = "[" + _C + "]", Ys = "\\ud83c[\\udffb-\\udfff]", WC = "(?:" + Gs + "|" + Ys + ")", pp = "[^" + dp + "]", mp = "(?:\\ud83c[\\udde6-\\uddff]){2}", gp = "[\\ud800-\\udbff][\\udc00-\\udfff]", HC = "\\u200d", yp = WC + "?", bp = "[" + jC + "]?", UC = "(?:" + HC + "(?:" + [
    pp,
    mp,
    gp
].join("|") + ")" + bp + yp + ")*", KC = bp + yp + UC, JC = "(?:" + [
    pp + Gs + "?",
    Gs,
    mp,
    gp,
    VC
].join("|") + ")", qC = RegExp(Ys + "(?=" + Ys + ")|" + JC + KC, "g");
function GC(n) {
    return n.match(qC) || [];
}
function YC(n) {
    return Yl(n) ? GC(n) : BC(n);
}
function XC(n, e, t) {
    return n === n && (t !== void 0 && (n = n <= t ? n : t), e !== void 0 && (n = n >= e ? n : e)), n;
}
function $E(n, e, t) {
    return t === void 0 && (t = e, e = void 0), t !== void 0 && (t = mn(t), t = t === t ? t : 0), e !== void 0 && (e = mn(e), e = e === e ? e : 0), XC(mn(n), e, t);
}
function QC() {
    this.__data__ = new ot(), this.size = 0;
}
function ZC(n) {
    var e = this.__data__, t = e.delete(n);
    return this.size = e.size, t;
}
function eO(n) {
    return this.__data__.get(n);
}
function tO(n) {
    return this.__data__.has(n);
}
var nO = 200;
function rO(n, e) {
    var t = this.__data__;
    if (t instanceof ot) {
        var r = t.__data__;
        if (!cr || r.length < nO - 1) return r.push([
            n,
            e
        ]), this.size = ++t.size, this;
        t = this.__data__ = new st(r);
    }
    return t.set(n, e), this.size = t.size, this;
}
function rt(n) {
    var e = this.__data__ = new ot(n);
    this.size = e.size;
}
rt.prototype.clear = QC;
rt.prototype.delete = ZC;
rt.prototype.get = eO;
rt.prototype.has = tO;
rt.prototype.set = rO;
function iO(n, e) {
    for(var t = -1, r = n == null ? 0 : n.length, i = 0, o = []; ++t < r;){
        var s = n[t];
        e(s, t, n) && (o[i++] = s);
    }
    return o;
}
function oO() {
    return [];
}
var sO = Object.prototype, lO = sO.propertyIsEnumerable, Hf = Object.getOwnPropertySymbols, aO = Hf ? function(n) {
    return n == null ? [] : (n = Object(n), iO(Hf(n), function(e) {
        return lO.call(n, e);
    }));
} : oO;
function cO(n, e, t) {
    var r = e(n);
    return He(n) ? r : hp(r, t(n));
}
function Uf(n) {
    return cO(n, cp, aO);
}
var Xs = Qt(Je, "DataView"), Qs = Qt(Je, "Promise"), Zs = Qt(Je, "Set"), Kf = "[object Map]", fO = "[object Object]", Jf = "[object Promise]", qf = "[object Set]", Gf = "[object WeakMap]", Yf = "[object DataView]", uO = Xt(Xs), hO = Xt(cr), dO = Xt(Qs), pO = Xt(Zs), mO = Xt(Ks), pt = It;
(Xs && pt(new Xs(new ArrayBuffer(1))) != Yf || cr && pt(new cr()) != Kf || Qs && pt(Qs.resolve()) != Jf || Zs && pt(new Zs()) != qf || Ks && pt(new Ks()) != Gf) && (pt = function(n) {
    var e = It(n), t = e == fO ? n.constructor : void 0, r = t ? Xt(t) : "";
    if (r) switch(r){
        case uO:
            return Yf;
        case hO:
            return Kf;
        case dO:
            return Jf;
        case pO:
            return qf;
        case mO:
            return Gf;
    }
    return e;
});
var Xf = Je.Uint8Array, gO = "__lodash_hash_undefined__";
function yO(n) {
    return this.__data__.set(n, gO), this;
}
function bO(n) {
    return this.__data__.has(n);
}
function fr(n) {
    var e = -1, t = n == null ? 0 : n.length;
    for(this.__data__ = new st(); ++e < t;)this.add(n[e]);
}
fr.prototype.add = fr.prototype.push = yO;
fr.prototype.has = bO;
function vO(n, e) {
    for(var t = -1, r = n == null ? 0 : n.length; ++t < r;)if (e(n[t], t, n)) return !0;
    return !1;
}
function vp(n, e) {
    return n.has(e);
}
var SO = 1, wO = 2;
function Sp(n, e, t, r, i, o) {
    var s = t & SO, l = n.length, a = e.length;
    if (l != a && !(s && a > l)) return !1;
    var c = o.get(n), f = o.get(e);
    if (c && f) return c == e && f == n;
    var u = -1, h = !0, p = t & wO ? new fr() : void 0;
    for(o.set(n, e), o.set(e, n); ++u < l;){
        var d = n[u], m = e[u];
        if (r) var g = s ? r(m, d, u, e, n, o) : r(d, m, u, n, e, o);
        if (g !== void 0) {
            if (g) continue;
            h = !1;
            break;
        }
        if (p) {
            if (!vO(e, function(y, C) {
                if (!vp(p, C) && (d === y || i(d, y, t, r, o))) return p.push(C);
            })) {
                h = !1;
                break;
            }
        } else if (!(d === m || i(d, m, t, r, o))) {
            h = !1;
            break;
        }
    }
    return o.delete(n), o.delete(e), h;
}
function xO(n) {
    var e = -1, t = Array(n.size);
    return n.forEach(function(r, i) {
        t[++e] = [
            i,
            r
        ];
    }), t;
}
function CO(n) {
    var e = -1, t = Array(n.size);
    return n.forEach(function(r) {
        t[++e] = r;
    }), t;
}
var OO = 1, kO = 2, AO = "[object Boolean]", EO = "[object Date]", TO = "[object Error]", MO = "[object Map]", NO = "[object Number]", RO = "[object RegExp]", IO = "[object Set]", DO = "[object String]", PO = "[object Symbol]", $O = "[object ArrayBuffer]", BO = "[object DataView]", Qf = We ? We.prototype : void 0, es = Qf ? Qf.valueOf : void 0;
function zO(n, e, t, r, i, o, s) {
    switch(t){
        case BO:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset) return !1;
            n = n.buffer, e = e.buffer;
        case $O:
            return !(n.byteLength != e.byteLength || !o(new Xf(n), new Xf(e)));
        case AO:
        case EO:
        case NO:
            return rp(+n, +e);
        case TO:
            return n.name == e.name && n.message == e.message;
        case RO:
        case DO:
            return n == e + "";
        case MO:
            var l = xO;
        case IO:
            var a = r & OO;
            if (l || (l = CO), n.size != e.size && !a) return !1;
            var c = s.get(n);
            if (c) return c == e;
            r |= kO, s.set(n, e);
            var f = Sp(l(n), l(e), r, i, o, s);
            return s.delete(n), f;
        case PO:
            if (es) return es.call(n) == es.call(e);
    }
    return !1;
}
var LO = 1, FO = Object.prototype, _O = FO.hasOwnProperty;
function jO(n, e, t, r, i, o) {
    var s = t & LO, l = Uf(n), a = l.length, c = Uf(e), f = c.length;
    if (a != f && !s) return !1;
    for(var u = a; u--;){
        var h = l[u];
        if (!(s ? h in e : _O.call(e, h))) return !1;
    }
    var p = o.get(n), d = o.get(e);
    if (p && d) return p == e && d == n;
    var m = !0;
    o.set(n, e), o.set(e, n);
    for(var g = s; ++u < a;){
        h = l[u];
        var y = n[h], C = e[h];
        if (r) var k = s ? r(C, y, h, e, n, o) : r(y, C, h, n, e, o);
        if (!(k === void 0 ? y === C || i(y, C, t, r, o) : k)) {
            m = !1;
            break;
        }
        g || (g = h == "constructor");
    }
    if (m && !g) {
        var N = n.constructor, T = e.constructor;
        N != T && "constructor" in n && "constructor" in e && !(typeof N == "function" && N instanceof N && typeof T == "function" && T instanceof T) && (m = !1);
    }
    return o.delete(n), o.delete(e), m;
}
var VO = 1, Zf = "[object Arguments]", eu = "[object Array]", Ar = "[object Object]", WO = Object.prototype, tu = WO.hasOwnProperty;
function HO(n, e, t, r, i, o) {
    var s = He(n), l = He(e), a = s ? eu : pt(n), c = l ? eu : pt(e);
    a = a == Zf ? Ar : a, c = c == Zf ? Ar : c;
    var f = a == Ar, u = c == Ar, h = a == c;
    if (h && Js(n)) //TURBOPACK unreachable
    ;
    if (h && !f) return o || (o = new rt()), s || ap(n) ? Sp(n, e, t, r, i, o) : zO(n, e, a, t, r, i, o);
    if (!(t & VO)) {
        var p = f && tu.call(n, "__wrapped__"), d = u && tu.call(e, "__wrapped__");
        if (p || d) {
            var m = p ? n.value() : n, g = d ? e.value() : e;
            return o || (o = new rt()), i(m, g, t, r, o);
        }
    }
    return h ? (o || (o = new rt()), jO(n, e, t, r, i, o)) : !1;
}
function Xl(n, e, t, r, i) {
    return n === e ? !0 : n == null || e == null || !it(n) && !it(e) ? n !== n && e !== e : HO(n, e, t, r, Xl, i);
}
var UO = 1, KO = 2;
function JO(n, e, t, r) {
    var i = t.length, o = i;
    if (n == null) return !o;
    for(n = Object(n); i--;){
        var s = t[i];
        if (s[2] ? s[1] !== n[s[0]] : !(s[0] in n)) return !1;
    }
    for(; ++i < o;){
        s = t[i];
        var l = s[0], a = n[l], c = s[1];
        if (s[2]) {
            if (a === void 0 && !(l in n)) return !1;
        } else {
            var f = new rt(), u;
            if (!(u === void 0 ? Xl(c, a, UO | KO, r, f) : u)) return !1;
        }
    }
    return !0;
}
function wp(n) {
    return n === n && !Tt(n);
}
function qO(n) {
    for(var e = cp(n), t = e.length; t--;){
        var r = e[t], i = n[r];
        e[t] = [
            r,
            i,
            wp(i)
        ];
    }
    return e;
}
function xp(n, e) {
    return function(t) {
        return t == null ? !1 : t[n] === e && (e !== void 0 || n in Object(t));
    };
}
function GO(n) {
    var e = qO(n);
    return e.length == 1 && e[0][2] ? xp(e[0][0], e[0][1]) : function(t) {
        return t === n || JO(t, n, e);
    };
}
function YO(n, e) {
    return n != null && e in Object(n);
}
function XO(n, e, t) {
    e = fp(e, n);
    for(var r = -1, i = e.length, o = !1; ++r < i;){
        var s = ho(e[r]);
        if (!(o = n != null && t(n, s))) break;
        n = n[s];
    }
    return o || ++r != i ? o : (i = n == null ? 0 : n.length, !!i && Ul(i) && np(s, i) && (He(n) || Kl(n)));
}
function QO(n, e) {
    return n != null && XO(n, e, YO);
}
var ZO = 1, ek = 2;
function tk(n, e) {
    return ql(n) && wp(e) ? xp(ho(n), e) : function(t) {
        var r = CC(t, n);
        return r === void 0 && r === e ? QO(t, n) : Xl(e, r, ZO | ek);
    };
}
function Cp(n) {
    return function(e) {
        return e == null ? void 0 : e[n];
    };
}
function nk(n) {
    return function(e) {
        return up(e, n);
    };
}
function rk(n) {
    return ql(n) ? Cp(ho(n)) : nk(n);
}
function ik(n) {
    return typeof n == "function" ? n : n == null ? Hl : typeof n == "object" ? He(n) ? tk(n[0], n[1]) : GO(n) : rk(n);
}
var ts = function() {
    return Je.Date.now();
}, ok = "Expected a function", sk = Math.max, lk = Math.min;
function ak(n, e, t) {
    var r, i, o, s, l, a, c = 0, f = !1, u = !1, h = !0;
    if (typeof n != "function") throw new TypeError(ok);
    e = mn(e) || 0, Tt(t) && (f = !!t.leading, u = "maxWait" in t, o = u ? sk(mn(t.maxWait) || 0, e) : o, h = "trailing" in t ? !!t.trailing : h);
    function p(x) {
        var I = r, D = i;
        return r = i = void 0, c = x, s = n.apply(D, I), s;
    }
    function d(x) {
        return c = x, l = setTimeout(y, e), f ? p(x) : s;
    }
    function m(x) {
        var I = x - a, D = x - c, E = e - I;
        return u ? lk(E, o - D) : E;
    }
    function g(x) {
        var I = x - a, D = x - c;
        return a === void 0 || I >= e || I < 0 || u && D >= o;
    }
    function y() {
        var x = ts();
        if (g(x)) return C(x);
        l = setTimeout(y, m(x));
    }
    function C(x) {
        return l = void 0, h && r ? p(x) : (r = i = void 0, s);
    }
    function k() {
        l !== void 0 && clearTimeout(l), c = 0, r = a = i = l = void 0;
    }
    function N() {
        return l === void 0 ? s : C(ts());
    }
    function T() {
        var x = ts(), I = g(x);
        if (r = arguments, i = this, a = x, I) {
            if (l === void 0) return d(a);
            if (u) return clearTimeout(l), l = setTimeout(y, e), p(a);
        }
        return l === void 0 && (l = setTimeout(y, e)), s;
    }
    return T.cancel = k, T.flush = N, T;
}
function ns(n) {
    return it(n) && ip(n);
}
var ck = 200;
function fk(n, e, t, r) {
    var i = -1, o = Gw, s = !0, l = n.length, a = [], c = e.length;
    if (!l) return a;
    t && (e = ep(e, Jl(t))), e.length >= ck && (o = vp, s = !1, e = new fr(e));
    e: for(; ++i < l;){
        var f = n[i], u = t == null ? f : t(f);
        if (f = f !== 0 ? f : 0, s && u === u) {
            for(var h = c; h--;)if (e[h] === u) continue e;
            a.push(f);
        } else o(e, u, r) || a.push(f);
    }
    return a;
}
function uk(n) {
    var e = n == null ? 0 : n.length;
    return e ? n[e - 1] : void 0;
}
var BE = Zw(function(n, e) {
    var t = uk(e);
    return ns(t) && (t = void 0), ns(n) ? fk(n, kC(e, 1, ns), ik(t)) : [];
}), hk = "[object Number]";
function zE(n) {
    return typeof n == "number" || it(n) && It(n) == hk;
}
var dk = "[object RegExp]";
function pk(n) {
    return it(n) && It(n) == dk;
}
var nu = Oi && Oi.isRegExp, mk = nu ? Jl(nu) : pk, gk = Cp("length"), Op = "\\ud800-\\udfff", yk = "\\u0300-\\u036f", bk = "\\ufe20-\\ufe2f", vk = "\\u20d0-\\u20ff", Sk = yk + bk + vk, wk = "\\ufe0e\\ufe0f", xk = "[" + Op + "]", el = "[" + Sk + "]", tl = "\\ud83c[\\udffb-\\udfff]", Ck = "(?:" + el + "|" + tl + ")", kp = "[^" + Op + "]", Ap = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ep = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ok = "\\u200d", Tp = Ck + "?", Mp = "[" + wk + "]?", kk = "(?:" + Ok + "(?:" + [
    kp,
    Ap,
    Ep
].join("|") + ")" + Mp + Tp + ")*", Ak = Mp + Tp + kk, Ek = "(?:" + [
    kp + el + "?",
    el,
    Ap,
    Ep,
    xk
].join("|") + ")", ru = RegExp(tl + "(?=" + tl + ")|" + Ek + Ak, "g");
function Tk(n) {
    for(var e = ru.lastIndex = 0; ru.test(n);)++e;
    return e;
}
function Mk(n) {
    return Yl(n) ? Tk(n) : gk(n);
}
var Nk = "Expected a function";
function LE(n, e, t) {
    var r = !0, i = !0;
    if (typeof n != "function") throw new TypeError(Nk);
    return Tt(t) && (r = "leading" in t ? !!t.leading : r, i = "trailing" in t ? !!t.trailing : i), ak(n, e, {
        leading: r,
        maxWait: e,
        trailing: i
    });
}
var Rk = 30, Ik = "...", Dk = /\w*$/;
function FE(n, e) {
    var t = Rk, r = Ik;
    if (Tt(e)) {
        var i = "separator" in e ? e.separator : i;
        t = "length" in e ? Sw(e.length) : t, r = "omission" in e ? Ci(e.omission) : r;
    }
    n = qs(n);
    var o = n.length;
    if (Yl(n)) {
        var s = YC(n);
        o = s.length;
    }
    if (t >= o) return n;
    var l = t - Mk(r);
    if (l < 1) return r;
    var a = s ? EC(s, 0, l).join("") : n.slice(0, l);
    if (i === void 0) return a + r;
    if (s && (l += a.length - l), mk(i)) {
        if (n.slice(l).search(i)) {
            var c, f = a;
            for(i.global || (i = RegExp(i.source, qs(Dk.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(f);)var u = c.index;
            a = a.slice(0, u === void 0 ? l : u);
        }
    } else if (n.indexOf(Ci(i), l) != l) {
        var h = a.lastIndexOf(i);
        h > -1 && (a = a.slice(0, h));
    }
    return a + r;
}
const Pk = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster6d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", $k = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Cn = (n, e)=>{
    for(const t in e)n[t] = e[t];
    return n;
}, nl = "numeric", rl = "ascii", il = "alpha", Kr = "asciinumeric", Er = "alphanumeric", ol = "domain", Np = "emoji", Bk = "scheme", zk = "slashscheme", iu = "whitespace";
function Lk(n, e) {
    return n in e || (e[n] = []), e[n];
}
function Bt(n, e, t) {
    e[nl] && (e[Kr] = !0, e[Er] = !0), e[rl] && (e[Kr] = !0, e[il] = !0), e[Kr] && (e[Er] = !0), e[il] && (e[Er] = !0), e[Er] && (e[ol] = !0), e[Np] && (e[ol] = !0);
    for(const r in e){
        const i = Lk(r, t);
        i.indexOf(n) < 0 && i.push(n);
    }
}
function Fk(n, e) {
    const t = {};
    for(const r in e)e[r].indexOf(n) >= 0 && (t[r] = !0);
    return t;
}
function ge(n) {
    n === void 0 && (n = null), this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
ge.groups = {};
ge.prototype = {
    accepts () {
        return !!this.t;
    },
    /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */ go (n) {
        const e = this, t = e.j[n];
        if (t) return t;
        for(let r = 0; r < e.jr.length; r++){
            const i = e.jr[r][0], o = e.jr[r][1];
            if (o && i.test(n)) return o;
        }
        return e.jd;
    },
    /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */ has (n, e) {
        return e === void 0 && (e = !1), e ? n in this.j : !!this.go(n);
    },
    /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */ ta (n, e, t, r) {
        for(let i = 0; i < n.length; i++)this.tt(n[i], e, t, r);
    },
    /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */ tr (n, e, t, r) {
        r = r || ge.groups;
        let i;
        return e && e.j ? i = e : (i = new ge(e), t && r && Bt(e, t, r)), this.jr.push([
            n,
            i
        ]), i;
    },
    /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */ ts (n, e, t, r) {
        let i = this;
        const o = n.length;
        if (!o) return i;
        for(let s = 0; s < o - 1; s++)i = i.tt(n[s]);
        return i.tt(n[o - 1], e, t, r);
    },
    /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */ tt (n, e, t, r) {
        r = r || ge.groups;
        const i = this;
        if (e && e.j) return i.j[n] = e, e;
        const o = e;
        let s, l = i.go(n);
        if (l ? (s = new ge(), Cn(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new ge(), o) {
            if (r) if (s.t && typeof s.t == "string") {
                const a = Cn(Fk(s.t, r), t);
                Bt(o, a, r);
            } else t && Bt(o, t, r);
            s.t = o;
        }
        return i.j[n] = s, s;
    }
};
const $ = (n, e, t, r, i)=>n.ta(e, t, r, i), Se = (n, e, t, r, i)=>n.tr(e, t, r, i), ou = (n, e, t, r, i)=>n.ts(e, t, r, i), S = (n, e, t, r, i)=>n.tt(e, t, r, i), Ze = "WORD", sl = "UWORD", ur = "LOCALHOST", ll = "TLD", al = "UTLD", Jr = "SCHEME", an = "SLASH_SCHEME", Ql = "NUM", Rp = "WS", Zl = "NL", Yn = "OPENBRACE", Xn = "CLOSEBRACE", ki = "OPENBRACKET", Ai = "CLOSEBRACKET", Ei = "OPENPAREN", Ti = "CLOSEPAREN", Mi = "OPENANGLEBRACKET", Ni = "CLOSEANGLEBRACKET", Ri = "FULLWIDTHLEFTPAREN", Ii = "FULLWIDTHRIGHTPAREN", Di = "LEFTCORNERBRACKET", Pi = "RIGHTCORNERBRACKET", $i = "LEFTWHITECORNERBRACKET", Bi = "RIGHTWHITECORNERBRACKET", zi = "FULLWIDTHLESSTHAN", Li = "FULLWIDTHGREATERTHAN", Fi = "AMPERSAND", _i = "APOSTROPHE", ji = "ASTERISK", mt = "AT", Vi = "BACKSLASH", Wi = "BACKTICK", Hi = "CARET", bt = "COLON", ea = "COMMA", Ui = "DOLLAR", De = "DOT", Ki = "EQUALS", ta = "EXCLAMATION", Pe = "HYPHEN", Ji = "PERCENT", qi = "PIPE", Gi = "PLUS", Yi = "POUND", Xi = "QUERY", na = "QUOTE", ra = "SEMI", $e = "SLASH", Qn = "TILDE", Qi = "UNDERSCORE", Ip = "EMOJI", Zi = "SYM";
var Dp = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    WORD: Ze,
    UWORD: sl,
    LOCALHOST: ur,
    TLD: ll,
    UTLD: al,
    SCHEME: Jr,
    SLASH_SCHEME: an,
    NUM: Ql,
    WS: Rp,
    NL: Zl,
    OPENBRACE: Yn,
    CLOSEBRACE: Xn,
    OPENBRACKET: ki,
    CLOSEBRACKET: Ai,
    OPENPAREN: Ei,
    CLOSEPAREN: Ti,
    OPENANGLEBRACKET: Mi,
    CLOSEANGLEBRACKET: Ni,
    FULLWIDTHLEFTPAREN: Ri,
    FULLWIDTHRIGHTPAREN: Ii,
    LEFTCORNERBRACKET: Di,
    RIGHTCORNERBRACKET: Pi,
    LEFTWHITECORNERBRACKET: $i,
    RIGHTWHITECORNERBRACKET: Bi,
    FULLWIDTHLESSTHAN: zi,
    FULLWIDTHGREATERTHAN: Li,
    AMPERSAND: Fi,
    APOSTROPHE: _i,
    ASTERISK: ji,
    AT: mt,
    BACKSLASH: Vi,
    BACKTICK: Wi,
    CARET: Hi,
    COLON: bt,
    COMMA: ea,
    DOLLAR: Ui,
    DOT: De,
    EQUALS: Ki,
    EXCLAMATION: ta,
    HYPHEN: Pe,
    PERCENT: Ji,
    PIPE: qi,
    PLUS: Gi,
    POUND: Yi,
    QUERY: Xi,
    QUOTE: na,
    SEMI: ra,
    SLASH: $e,
    TILDE: Qn,
    UNDERSCORE: Qi,
    EMOJI: Ip,
    SYM: Zi
});
const rn = /[a-z]/, rs = new RegExp("\\p{L}", "u"), is = new RegExp("\\p{Emoji}", "u"), ss = /\d/, su = /\s/, lu = `
`, _k = "️", jk = "‍";
let Tr = null, Mr = null;
function Vk(n) {
    n === void 0 && (n = []);
    const e = {};
    ge.groups = e;
    const t = new ge();
    Tr == null && (Tr = au(Pk)), Mr == null && (Mr = au($k)), S(t, "'", _i), S(t, "{", Yn), S(t, "}", Xn), S(t, "[", ki), S(t, "]", Ai), S(t, "(", Ei), S(t, ")", Ti), S(t, "<", Mi), S(t, ">", Ni), S(t, "（", Ri), S(t, "）", Ii), S(t, "「", Di), S(t, "」", Pi), S(t, "『", $i), S(t, "』", Bi), S(t, "＜", zi), S(t, "＞", Li), S(t, "&", Fi), S(t, "*", ji), S(t, "@", mt), S(t, "`", Wi), S(t, "^", Hi), S(t, ":", bt), S(t, ",", ea), S(t, "$", Ui), S(t, ".", De), S(t, "=", Ki), S(t, "!", ta), S(t, "-", Pe), S(t, "%", Ji), S(t, "|", qi), S(t, "+", Gi), S(t, "#", Yi), S(t, "?", Xi), S(t, '"', na), S(t, "/", $e), S(t, ";", ra), S(t, "~", Qn), S(t, "_", Qi), S(t, "\\", Vi);
    const r = Se(t, ss, Ql, {
        [nl]: !0
    });
    Se(r, ss, r);
    const i = Se(t, rn, Ze, {
        [rl]: !0
    });
    Se(i, rn, i);
    const o = Se(t, rs, sl, {
        [il]: !0
    });
    Se(o, rn), Se(o, rs, o);
    const s = Se(t, su, Rp, {
        [iu]: !0
    });
    S(t, lu, Zl, {
        [iu]: !0
    }), S(s, lu), Se(s, su, s);
    const l = Se(t, is, Ip, {
        [Np]: !0
    });
    Se(l, is, l), S(l, _k, l);
    const a = S(l, jk);
    Se(a, is, l);
    const c = [
        [
            rn,
            i
        ]
    ], f = [
        [
            rn,
            null
        ],
        [
            rs,
            o
        ]
    ];
    for(let u = 0; u < Tr.length; u++)ft(t, Tr[u], ll, Ze, c);
    for(let u = 0; u < Mr.length; u++)ft(t, Mr[u], al, sl, f);
    Bt(ll, {
        tld: !0,
        ascii: !0
    }, e), Bt(al, {
        utld: !0,
        alpha: !0
    }, e), ft(t, "file", Jr, Ze, c), ft(t, "mailto", Jr, Ze, c), ft(t, "http", an, Ze, c), ft(t, "https", an, Ze, c), ft(t, "ftp", an, Ze, c), ft(t, "ftps", an, Ze, c), Bt(Jr, {
        scheme: !0,
        ascii: !0
    }, e), Bt(an, {
        slashscheme: !0,
        ascii: !0
    }, e), n = n.sort((u, h)=>u[0] > h[0] ? 1 : -1);
    for(let u = 0; u < n.length; u++){
        const h = n[u][0], d = n[u][1] ? {
            [Bk]: !0
        } : {
            [zk]: !0
        };
        h.indexOf("-") >= 0 ? d[ol] = !0 : rn.test(h) ? ss.test(h) ? d[Kr] = !0 : d[rl] = !0 : d[nl] = !0, ou(t, h, h, d);
    }
    return ou(t, "localhost", ur, {
        ascii: !0
    }), t.jd = new ge(Zi), {
        start: t,
        tokens: Cn({
            groups: e
        }, Dp)
    };
}
function Wk(n, e) {
    const t = Hk(e.replace(/[A-Z]/g, (l)=>l.toLowerCase())), r = t.length, i = [];
    let o = 0, s = 0;
    for(; s < r;){
        let l = n, a = null, c = 0, f = null, u = -1, h = -1;
        for(; s < r && (a = l.go(t[s]));)l = a, l.accepts() ? (u = 0, h = 0, f = l) : u >= 0 && (u += t[s].length, h++), c += t[s].length, o += t[s].length, s++;
        o -= u, s -= h, c -= u, i.push({
            t: f.t,
            // token type/name
            v: e.slice(o - c, o),
            // string value
            s: o - c,
            // start index
            e: o
        });
    }
    return i;
}
function Hk(n) {
    const e = [], t = n.length;
    let r = 0;
    for(; r < t;){
        let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
        e.push(s), r += s.length;
    }
    return e;
}
function ft(n, e, t, r, i) {
    let o;
    const s = e.length;
    for(let l = 0; l < s - 1; l++){
        const a = e[l];
        n.j[a] ? o = n.j[a] : (o = new ge(r), o.jr = i.slice(), n.j[a] = o), n = o;
    }
    return o = new ge(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function au(n) {
    const e = [], t = [];
    let r = 0, i = "0123456789";
    for(; r < n.length;){
        let o = 0;
        for(; i.indexOf(n[r + o]) >= 0;)o++;
        if (o > 0) {
            e.push(t.join(""));
            for(let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)t.pop();
            r += o;
        } else t.push(n[r]), r++;
    }
    return e;
}
const hr = {
    defaultProtocol: "http",
    events: null,
    format: cu,
    formatHref: cu,
    nl2br: !1,
    tagName: "a",
    target: null,
    rel: null,
    validate: !0,
    truncate: 1 / 0,
    className: null,
    attributes: null,
    ignoreTags: [],
    render: null
};
function ia(n, e) {
    e === void 0 && (e = null);
    let t = Cn({}, hr);
    n && (t = Cn(t, n instanceof ia ? n.o : n));
    const r = t.ignoreTags, i = [];
    for(let o = 0; o < r.length; o++)i.push(r[o].toUpperCase());
    this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
ia.prototype = {
    o: hr,
    /**
   * @type string[]
   */ ignoreTags: [],
    /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */ defaultRender (n) {
        return n;
    },
    /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */ check (n) {
        return this.get("validate", n.toString(), n);
    },
    // Private methods
    /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */ get (n, e, t) {
        const r = e != null;
        let i = this.o[n];
        return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : hr[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
    },
    /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */ getObj (n, e, t) {
        let r = this.o[n];
        return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
    },
    /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */ render (n) {
        const e = n.render(this);
        return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
    }
};
function cu(n) {
    return n;
}
function Pp(n, e) {
    this.t = "token", this.v = n, this.tk = e;
}
Pp.prototype = {
    isLink: !1,
    /**
   * Return the string this token represents.
   * @return {string}
   */ toString () {
        return this.v;
    },
    /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */ toHref (n) {
        return this.toString();
    },
    /**
   * @param {Options} options Formatting options
   * @returns {string}
   */ toFormattedString (n) {
        const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
        return t && r.length > t ? r.substring(0, t) + "…" : r;
    },
    /**
   *
   * @param {Options} options
   * @returns {string}
   */ toFormattedHref (n) {
        return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
    },
    /**
   * The start index of this token in the original input string
   * @returns {number}
   */ startIndex () {
        return this.tk[0].s;
    },
    /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */ endIndex () {
        return this.tk[this.tk.length - 1].e;
    },
    /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */ toObject (n) {
        return n === void 0 && (n = hr.defaultProtocol), {
            type: this.t,
            value: this.toString(),
            isLink: this.isLink,
            href: this.toHref(n),
            start: this.startIndex(),
            end: this.endIndex()
        };
    },
    /**
   *
   * @param {Options} options Formatting option
   */ toFormattedObject (n) {
        return {
            type: this.t,
            value: this.toFormattedString(n),
            isLink: this.isLink,
            href: this.toFormattedHref(n),
            start: this.startIndex(),
            end: this.endIndex()
        };
    },
    /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */ validate (n) {
        return n.get("validate", this.toString(), this);
    },
    /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */ render (n) {
        const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), f = n.getObj("attributes", t, e), u = n.getObj("events", t, e);
        return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), f && Cn(s, f), {
            tagName: i,
            attributes: s,
            content: o,
            eventListeners: u
        };
    }
};
function po(n, e) {
    class t extends Pp {
        constructor(i, o){
            super(i, o), this.t = n;
        }
    }
    for(const r in e)t.prototype[r] = e[r];
    return t.t = n, t;
}
const fu = po("email", {
    isLink: !0,
    toHref () {
        return "mailto:" + this.toString();
    }
}), uu = po("text"), Uk = po("nl"), Nr = po("url", {
    isLink: !0,
    /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */ toHref (n) {
        return n === void 0 && (n = hr.defaultProtocol), this.hasProtocol() ? this.v : `${n}://${this.v}`;
    },
    /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */ hasProtocol () {
        const n = this.tk;
        return n.length >= 2 && n[0].t !== ur && n[1].t === bt;
    }
}), we = (n)=>new ge(n);
function Kk(n) {
    let { groups: e } = n;
    const t = e.domain.concat([
        Fi,
        ji,
        mt,
        Vi,
        Wi,
        Hi,
        Ui,
        Ki,
        Pe,
        Ql,
        Ji,
        qi,
        Gi,
        Yi,
        $e,
        Zi,
        Qn,
        Qi
    ]), r = [
        _i,
        bt,
        ea,
        De,
        ta,
        Xi,
        na,
        ra,
        Mi,
        Ni,
        Yn,
        Xn,
        Ai,
        ki,
        Ei,
        Ti,
        Ri,
        Ii,
        Di,
        Pi,
        $i,
        Bi,
        zi,
        Li
    ], i = [
        Fi,
        _i,
        ji,
        Vi,
        Wi,
        Hi,
        Ui,
        Ki,
        Pe,
        Yn,
        Xn,
        Ji,
        qi,
        Gi,
        Yi,
        Xi,
        $e,
        Zi,
        Qn,
        Qi
    ], o = we(), s = S(o, Qn);
    $(s, i, s), $(s, e.domain, s);
    const l = we(), a = we(), c = we();
    $(o, e.domain, l), $(o, e.scheme, a), $(o, e.slashscheme, c), $(l, i, s), $(l, e.domain, l);
    const f = S(l, mt);
    S(s, mt, f), S(a, mt, f), S(c, mt, f);
    const u = S(s, De);
    $(u, i, s), $(u, e.domain, s);
    const h = we();
    $(f, e.domain, h), $(h, e.domain, h);
    const p = S(h, De);
    $(p, e.domain, h);
    const d = we(fu);
    $(p, e.tld, d), $(p, e.utld, d), S(f, ur, d);
    const m = S(h, Pe);
    $(m, e.domain, h), $(d, e.domain, h), S(d, De, p), S(d, Pe, m);
    const g = S(d, bt);
    $(g, e.numeric, fu);
    const y = S(l, Pe), C = S(l, De);
    $(y, e.domain, l), $(C, i, s), $(C, e.domain, l);
    const k = we(Nr);
    $(C, e.tld, k), $(C, e.utld, k), $(k, e.domain, l), $(k, i, s), S(k, De, C), S(k, Pe, y), S(k, mt, f);
    const N = S(k, bt), T = we(Nr);
    $(N, e.numeric, T);
    const x = we(Nr), I = we();
    $(x, t, x), $(x, r, I), $(I, t, x), $(I, r, I), S(k, $e, x), S(T, $e, x);
    const D = S(a, bt), E = S(c, bt), Y = S(E, $e), A = S(Y, $e);
    $(a, e.domain, l), S(a, De, C), S(a, Pe, y), $(c, e.domain, l), S(c, De, C), S(c, Pe, y), $(D, e.domain, x), S(D, $e, x), $(A, e.domain, x), $(A, t, x), S(A, $e, x);
    const O = [
        [
            Yn,
            Xn
        ],
        // {}
        [
            ki,
            Ai
        ],
        // []
        [
            Ei,
            Ti
        ],
        // ()
        [
            Mi,
            Ni
        ],
        // <>
        [
            Ri,
            Ii
        ],
        // （）
        [
            Di,
            Pi
        ],
        // 「」
        [
            $i,
            Bi
        ],
        // 『』
        [
            zi,
            Li
        ]
    ];
    for(let B = 0; B < O.length; B++){
        const [v, X] = O[B], F = S(x, v);
        S(I, v, F), S(F, X, x);
        const j = we(Nr);
        $(F, t, j);
        const ne = we();
        $(F, r), $(j, t, j), $(j, r, ne), $(ne, t, j), $(ne, r, ne), S(j, X, x), S(ne, X, x);
    }
    return S(o, ur, k), S(o, Zl, Uk), {
        start: o,
        tokens: Dp
    };
}
function Jk(n, e, t) {
    let r = t.length, i = 0, o = [], s = [];
    for(; i < r;){
        let l = n, a = null, c = null, f = 0, u = null, h = -1;
        for(; i < r && !(a = l.go(t[i].t));)s.push(t[i++]);
        for(; i < r && (c = a || l.go(t[i].t));)a = null, l = c, l.accepts() ? (h = 0, u = l) : h >= 0 && h++, i++, f++;
        if (h < 0) i -= f, i < r && (s.push(t[i]), i++);
        else {
            s.length > 0 && (o.push(ls(uu, e, s)), s = []), i -= h, f -= h;
            const p = u.t, d = t.slice(i - f, i);
            o.push(ls(p, e, d));
        }
    }
    return s.length > 0 && o.push(ls(uu, e, s)), o;
}
function ls(n, e, t) {
    const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
    return new n(o, t);
}
const qk = typeof console < "u" && console && console.warn || (()=>{}), Gk = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", K = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: !1
};
function _E() {
    ge.groups = {}, K.scanner = null, K.parser = null, K.tokenQueue = [], K.pluginQueue = [], K.customSchemes = [], K.initialized = !1;
}
function jE(n, e) {
    if (e === void 0 && (e = !1), K.initialized && qk(`linkifyjs: already initialized - will not register custom scheme "${n}" ${Gk}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n)) throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
    K.customSchemes.push([
        n,
        e
    ]);
}
function Yk() {
    K.scanner = Vk(K.customSchemes);
    for(let n = 0; n < K.tokenQueue.length; n++)K.tokenQueue[n][1]({
        scanner: K.scanner
    });
    K.parser = Kk(K.scanner.tokens);
    for(let n = 0; n < K.pluginQueue.length; n++)K.pluginQueue[n][1]({
        scanner: K.scanner,
        parser: K.parser
    });
    K.initialized = !0;
}
function Xk(n) {
    return K.initialized || Yk(), Jk(K.parser.start, n, Wk(K.scanner.start, n));
}
function VE(n, e, t) {
    if (e === void 0 && (e = null), t === void 0 && (t = null), e && typeof e == "object") {
        if (t) throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
        t = e, e = null;
    }
    const r = new ia(t), i = Xk(n), o = [];
    for(let s = 0; s < i.length; s++){
        const l = i[s];
        l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
    }
    return o;
}
var eo = 200, te = function() {};
te.prototype.append = function(e) {
    return e.length ? (e = te.from(e), !this.length && e || e.length < eo && this.leafAppend(e) || this.length < eo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
te.prototype.prepend = function(e) {
    return e.length ? te.from(e).append(this) : this;
};
te.prototype.appendInner = function(e) {
    return new Qk(this, e);
};
te.prototype.slice = function(e, t) {
    return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? te.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
te.prototype.get = function(e) {
    if (!(e < 0 || e >= this.length)) return this.getInner(e);
};
te.prototype.forEach = function(e, t, r) {
    t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
te.prototype.map = function(e, t, r) {
    t === void 0 && (t = 0), r === void 0 && (r = this.length);
    var i = [];
    return this.forEach(function(o, s) {
        return i.push(e(o, s));
    }, t, r), i;
};
te.from = function(e) {
    return e instanceof te ? e : e && e.length ? new $p(e) : te.empty;
};
var $p = /* @__PURE__ */ function(n) {
    function e(r) {
        n.call(this), this.values = r;
    }
    n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
    var t = {
        length: {
            configurable: !0
        },
        depth: {
            configurable: !0
        }
    };
    return e.prototype.flatten = function() {
        return this.values;
    }, e.prototype.sliceInner = function(i, o) {
        return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
    }, e.prototype.getInner = function(i) {
        return this.values[i];
    }, e.prototype.forEachInner = function(i, o, s, l) {
        for(var a = o; a < s; a++)if (i(this.values[a], l + a) === !1) return !1;
    }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
        for(var a = o - 1; a >= s; a--)if (i(this.values[a], l + a) === !1) return !1;
    }, e.prototype.leafAppend = function(i) {
        if (this.length + i.length <= eo) return new e(this.values.concat(i.flatten()));
    }, e.prototype.leafPrepend = function(i) {
        if (this.length + i.length <= eo) return new e(i.flatten().concat(this.values));
    }, t.length.get = function() {
        return this.values.length;
    }, t.depth.get = function() {
        return 0;
    }, Object.defineProperties(e.prototype, t), e;
}(te);
te.empty = new $p([]);
var Qk = /* @__PURE__ */ function(n) {
    function e(t, r) {
        n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
    }
    return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
        return this.left.flatten().concat(this.right.flatten());
    }, e.prototype.getInner = function(r) {
        return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
    }, e.prototype.forEachInner = function(r, i, o, s) {
        var l = this.left.length;
        if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1) return !1;
    }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
        var l = this.left.length;
        if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1) return !1;
    }, e.prototype.sliceInner = function(r, i) {
        if (r == 0 && i == this.length) return this;
        var o = this.left.length;
        return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
    }, e.prototype.leafAppend = function(r) {
        var i = this.right.leafAppend(r);
        if (i) return new e(this.left, i);
    }, e.prototype.leafPrepend = function(r) {
        var i = this.left.leafPrepend(r);
        if (i) return new e(i, this.right);
    }, e.prototype.appendInner = function(r) {
        return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
    }, e;
}(te);
const Zk = 500;
class Te {
    constructor(e, t){
        this.items = e, this.eventCount = t;
    }
    // Pop the latest event off the branch's history and apply it
    // to a document transform.
    popEvent(e, t) {
        if (this.eventCount == 0) return null;
        let r = this.items.length;
        for(;; r--)if (this.items.get(r - 1).selection) {
            --r;
            break;
        }
        let i, o;
        t && (i = this.remapping(r, this.items.length), o = i.maps.length);
        let s = e.tr, l, a, c = [], f = [];
        return this.items.forEach((u, h)=>{
            if (!u.step) {
                i || (i = this.remapping(r, h + 1), o = i.maps.length), o--, f.push(u);
                return;
            }
            if (i) {
                f.push(new Be(u.map));
                let p = u.step.map(i.slice(o)), d;
                p && s.maybeStep(p).doc && (d = s.mapping.maps[s.mapping.maps.length - 1], c.push(new Be(d, void 0, void 0, c.length + f.length))), o--, d && i.appendMap(d, o);
            } else s.maybeStep(u.step);
            if (u.selection) return l = i ? u.selection.map(i.slice(o)) : u.selection, a = new Te(this.items.slice(0, r).append(f.reverse().concat(c)), this.eventCount - 1), !1;
        }, this.items.length, 0), {
            remaining: a,
            transform: s,
            selection: l
        };
    }
    // Create a new branch with the given transform added.
    addTransform(e, t, r, i) {
        let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
        for(let f = 0; f < e.steps.length; f++){
            let u = e.steps[f].invert(e.docs[f]), h = new Be(e.mapping.maps[f], u, t), p;
            (p = a && a.merge(h)) && (h = p, f ? o.pop() : l = l.slice(0, l.length - 1)), o.push(h), t && (s++, t = void 0), i || (a = h);
        }
        let c = s - r.depth;
        return c > tA && (l = eA(l, c), s -= c), new Te(l.append(o), s);
    }
    remapping(e, t) {
        let r = new fn();
        return this.items.forEach((i, o)=>{
            let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
            r.appendMap(i.map, s);
        }, e, t), r;
    }
    addMaps(e) {
        return this.eventCount == 0 ? this : new Te(this.items.append(e.map((t)=>new Be(t))), this.eventCount);
    }
    // When the collab module receives remote changes, the history has
    // to know about those, so that it can adjust the steps that were
    // rebased on top of the remote changes, and include the position
    // maps for the remote changes in its array of items.
    rebased(e, t) {
        if (!this.eventCount) return this;
        let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
        this.items.forEach((h)=>{
            h.selection && l--;
        }, i);
        let a = t;
        this.items.forEach((h)=>{
            let p = o.getMirror(--a);
            if (p == null) return;
            s = Math.min(s, p);
            let d = o.maps[p];
            if (h.step) {
                let m = e.steps[p].invert(e.docs[p]), g = h.selection && h.selection.map(o.slice(a + 1, p));
                g && l++, r.push(new Be(d, m, g));
            } else r.push(new Be(d));
        }, i);
        let c = [];
        for(let h = t; h < s; h++)c.push(new Be(o.maps[h]));
        let f = this.items.slice(0, i).append(c).append(r), u = new Te(f, l);
        return u.emptyItemCount() > Zk && (u = u.compress(this.items.length - r.length)), u;
    }
    emptyItemCount() {
        let e = 0;
        return this.items.forEach((t)=>{
            t.step || e++;
        }), e;
    }
    // Compressing a branch means rewriting it to push the air (map-only
    // items) out. During collaboration, these naturally accumulate
    // because each remote change adds one. The `upto` argument is used
    // to ensure that only the items below a given level are compressed,
    // because `rebased` relies on a clean, untouched set of items in
    // order to associate old items with rebased steps.
    compress(e = this.items.length) {
        let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
        return this.items.forEach((s, l)=>{
            if (l >= e) i.push(s), s.selection && o++;
            else if (s.step) {
                let a = s.step.map(t.slice(r)), c = a && a.getMap();
                if (r--, c && t.appendMap(c, r), a) {
                    let f = s.selection && s.selection.map(t.slice(r));
                    f && o++;
                    let u = new Be(c.invert(), a, f), h, p = i.length - 1;
                    (h = i.length && i[p].merge(u)) ? i[p] = h : i.push(u);
                }
            } else s.map && r--;
        }, this.items.length, 0), new Te(te.from(i.reverse()), o);
    }
}
Te.empty = new Te(te.empty, 0);
function eA(n, e) {
    let t;
    return n.forEach((r, i)=>{
        if (r.selection && e-- == 0) return t = i, !1;
    }), n.slice(t);
}
class Be {
    constructor(e, t, r, i){
        this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
    }
    merge(e) {
        if (this.step && e.step && !e.selection) {
            let t = e.step.merge(this.step);
            if (t) return new Be(t.getMap().invert(), t, this.selection);
        }
    }
}
class gt {
    constructor(e, t, r, i, o){
        this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
    }
}
const tA = 20;
function nA(n, e, t, r) {
    let i = t.getMeta(Wt), o;
    if (i) return i.historyState;
    t.getMeta(oA) && (n = new gt(n.done, n.undone, null, 0, -1));
    let s = t.getMeta("appendedTransaction");
    if (t.steps.length == 0) return n;
    if (s && s.getMeta(Wt)) return s.getMeta(Wt).redo ? new gt(n.done.addTransform(t, void 0, r, qr(e)), n.undone, hu(t.mapping.maps), n.prevTime, n.prevComposition) : new gt(n.done, n.undone.addTransform(t, void 0, r, qr(e)), null, n.prevTime, n.prevComposition);
    if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
        let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !rA(t, n.prevRanges)), c = s ? as(n.prevRanges, t.mapping) : hu(t.mapping.maps);
        return new gt(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, qr(e)), Te.empty, c, t.time, l ?? n.prevComposition);
    } else return (o = t.getMeta("rebased")) ? new gt(n.done.rebased(t, o), n.undone.rebased(t, o), as(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new gt(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), as(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function rA(n, e) {
    if (!e) return !1;
    if (!n.docChanged) return !0;
    let t = !1;
    return n.mapping.maps[0].forEach((r, i)=>{
        for(let o = 0; o < e.length; o += 2)r <= e[o + 1] && i >= e[o] && (t = !0);
    }), t;
}
function hu(n) {
    let e = [];
    for(let t = n.length - 1; t >= 0 && e.length == 0; t--)n[t].forEach((r, i, o, s)=>e.push(o, s));
    return e;
}
function as(n, e) {
    if (!n) return null;
    let t = [];
    for(let r = 0; r < n.length; r += 2){
        let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
        i <= o && t.push(i, o);
    }
    return t;
}
function iA(n, e, t) {
    let r = qr(e), i = Wt.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
    if (!o) return null;
    let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new gt(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
    return o.transform.setSelection(s).setMeta(Wt, {
        redo: t,
        historyState: a
    });
}
let cs = !1, du = null;
function qr(n) {
    let e = n.plugins;
    if (du != e) {
        cs = !1, du = e;
        for(let t = 0; t < e.length; t++)if (e[t].spec.historyPreserveItems) {
            cs = !0;
            break;
        }
    }
    return cs;
}
const Wt = new mr("history"), oA = new mr("closeHistory");
function WE(n = {}) {
    return n = {
        depth: n.depth || 100,
        newGroupDelay: n.newGroupDelay || 500
    }, new kn({
        key: Wt,
        state: {
            init () {
                return new gt(Te.empty, Te.empty, null, 0, -1);
            },
            apply (e, t, r) {
                return nA(t, r, e, n);
            }
        },
        config: n,
        props: {
            handleDOMEvents: {
                beforeinput (e, t) {
                    let r = t.inputType, i = r == "historyUndo" ? sA : r == "historyRedo" ? lA : null;
                    return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
                }
            }
        }
    });
}
function Bp(n, e) {
    return (t, r)=>{
        let i = Wt.getState(t);
        if (!i || (n ? i.undone : i.done).eventCount == 0) return !1;
        if (r) {
            let o = iA(i, t, n);
            o && r(e ? o.scrollIntoView() : o);
        }
        return !0;
    };
}
const sA = Bp(!1, !0), lA = Bp(!0, !0);
function HE(n = {}) {
    return new kn({
        view (e) {
            return new aA(e, n);
        }
    });
}
class aA {
    constructor(e, t){
        var r;
        this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = [
            "dragover",
            "dragend",
            "drop",
            "dragleave"
        ].map((i)=>{
            let o = (s)=>{
                this[i](s);
            };
            return e.dom.addEventListener(i, o), {
                name: i,
                handler: o
            };
        });
    }
    destroy() {
        this.handlers.forEach(({ name: e, handler: t })=>this.editorView.dom.removeEventListener(e, t));
    }
    update(e, t) {
        this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
    }
    setCursor(e) {
        e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
    }
    updateOverlay() {
        let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r;
        if (t) {
            let l = e.nodeBefore, a = e.nodeAfter;
            if (l || a) {
                let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
                if (c) {
                    let f = c.getBoundingClientRect(), u = l ? f.bottom : f.top;
                    l && a && (u = (u + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = {
                        left: f.left,
                        right: f.right,
                        top: u - this.width / 2,
                        bottom: u + this.width / 2
                    };
                }
            }
        }
        if (!r) {
            let l = this.editorView.coordsAtPos(this.cursorPos);
            r = {
                left: l.left - this.width / 2,
                right: l.left + this.width / 2,
                top: l.top,
                bottom: l.bottom
            };
        }
        let i = this.editorView.dom.offsetParent;
        this.element || (this.element = i.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
        let o, s;
        if (!i || i == document.body && getComputedStyle(i).position == "static") o = -pageXOffset, s = -pageYOffset;
        else {
            let l = i.getBoundingClientRect();
            o = l.left - i.scrollLeft, s = l.top - i.scrollTop;
        }
        this.element.style.left = r.left - o + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
    }
    scheduleRemoval(e) {
        clearTimeout(this.timeout), this.timeout = setTimeout(()=>this.setCursor(null), e);
    }
    dragover(e) {
        if (!this.editorView.editable) return;
        let t = this.editorView.posAtCoords({
            left: e.clientX,
            top: e.clientY
        }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, o = typeof i == "function" ? i(this.editorView, t, e) : i;
        if (t && !o) {
            let s = t.pos;
            if (this.editorView.dragging && this.editorView.dragging.slice) {
                let l = Gu(this.editorView.state.doc, s, this.editorView.dragging.slice);
                l != null && (s = l);
            }
            this.setCursor(s), this.scheduleRemoval(5e3);
        }
    }
    dragend() {
        this.scheduleRemoval(20);
    }
    drop() {
        this.scheduleRemoval(20);
    }
    dragleave(e) {
        (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
    }
}
class q extends R {
    /**
  Create a gap cursor.
  */ constructor(e){
        super(e, e);
    }
    map(e, t) {
        let r = e.resolve(t.map(this.head));
        return q.valid(r) ? new q(r) : R.near(r);
    }
    content() {
        return w.empty;
    }
    eq(e) {
        return e instanceof q && e.head == this.head;
    }
    toJSON() {
        return {
            type: "gapcursor",
            pos: this.head
        };
    }
    /**
  @internal
  */ static fromJSON(e, t) {
        if (typeof t.pos != "number") throw new RangeError("Invalid input for GapCursor.fromJSON");
        return new q(e.resolve(t.pos));
    }
    /**
  @internal
  */ getBookmark() {
        return new oa(this.anchor);
    }
    /**
  @internal
  */ static valid(e) {
        let t = e.parent;
        if (t.isTextblock || !cA(e) || !fA(e)) return !1;
        let r = t.type.spec.allowGapCursor;
        if (r != null) return r;
        let i = t.contentMatchAt(e.index()).defaultType;
        return i && i.isTextblock;
    }
    /**
  @internal
  */ static findGapCursorFrom(e, t, r = !1) {
        e: for(;;){
            if (!r && q.valid(e)) return e;
            let i = e.pos, o = null;
            for(let s = e.depth;; s--){
                let l = e.node(s);
                if (t > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
                    o = l.child(t > 0 ? e.indexAfter(s) : e.index(s) - 1);
                    break;
                } else if (s == 0) return null;
                i += t;
                let a = e.doc.resolve(i);
                if (q.valid(a)) return a;
            }
            for(;;){
                let s = t > 0 ? o.firstChild : o.lastChild;
                if (!s) {
                    if (o.isAtom && !o.isText && !M.isSelectable(o)) {
                        e = e.doc.resolve(i + o.nodeSize * t), r = !1;
                        continue e;
                    }
                    break;
                }
                o = s, i += t;
                let l = e.doc.resolve(i);
                if (q.valid(l)) return l;
            }
            return null;
        }
    }
}
q.prototype.visible = !1;
q.findFrom = q.findGapCursorFrom;
R.jsonID("gapcursor", q);
class oa {
    constructor(e){
        this.pos = e;
    }
    map(e) {
        return new oa(e.map(this.pos));
    }
    resolve(e) {
        let t = e.resolve(this.pos);
        return q.valid(t) ? new q(t) : R.near(t);
    }
}
function cA(n) {
    for(let e = n.depth; e >= 0; e--){
        let t = n.index(e), r = n.node(e);
        if (t == 0) {
            if (r.type.spec.isolating) return !0;
            continue;
        }
        for(let i = r.child(t - 1);; i = i.lastChild){
            if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating) return !0;
            if (i.inlineContent) return !1;
        }
    }
    return !0;
}
function fA(n) {
    for(let e = n.depth; e >= 0; e--){
        let t = n.indexAfter(e), r = n.node(e);
        if (t == r.childCount) {
            if (r.type.spec.isolating) return !0;
            continue;
        }
        for(let i = r.child(t);; i = i.firstChild){
            if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating) return !0;
            if (i.inlineContent) return !1;
        }
    }
    return !0;
}
function UE() {
    return new kn({
        props: {
            decorations: pA,
            createSelectionBetween (n, e, t) {
                return e.pos == t.pos && q.valid(t) ? new q(t) : null;
            },
            handleClick: hA,
            handleKeyDown: uA,
            handleDOMEvents: {
                beforeinput: dA
            }
        }
    });
}
const uA = Ol({
    ArrowLeft: Rr("horiz", -1),
    ArrowRight: Rr("horiz", 1),
    ArrowUp: Rr("vert", -1),
    ArrowDown: Rr("vert", 1)
});
function Rr(n, e) {
    const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
    return function(r, i, o) {
        let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
        if (s instanceof z) {
            if (!o.endOfTextblock(t) || l.depth == 0) return !1;
            a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
        }
        let c = q.findGapCursorFrom(l, e, a);
        return c ? (i && i(r.tr.setSelection(new q(c))), !0) : !1;
    };
}
function hA(n, e, t) {
    if (!n || !n.editable) return !1;
    let r = n.state.doc.resolve(e);
    if (!q.valid(r)) return !1;
    let i = n.posAtCoords({
        left: t.clientX,
        top: t.clientY
    });
    return i && i.inside > -1 && M.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new q(r))), !0);
}
function dA(n, e) {
    if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof q)) return !1;
    let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
    if (!r) return !1;
    let i = b.empty;
    for(let s = r.length - 1; s >= 0; s--)i = b.from(r[s].createAndFill(null, i));
    let o = n.state.tr.replace(t.pos, t.pos, new w(i, 0, 0));
    return o.setSelection(z.near(o.doc.resolve(t.pos + 1))), n.dispatch(o), !1;
}
function pA(n) {
    if (!(n.selection instanceof q)) return null;
    let e = document.createElement("div");
    return e.className = "ProseMirror-gapcursor", J.create(n.doc, [
        ye.widget(n.selection.head, e, {
            key: "gapcursor"
        })
    ]);
}
var cl, fl;
if (typeof WeakMap < "u") {
    let n = /* @__PURE__ */ new WeakMap();
    cl = (e)=>n.get(e), fl = (e, t)=>(n.set(e, t), t);
} else {
    const n = [];
    let t = 0;
    cl = (r)=>{
        for(let i = 0; i < n.length; i += 2)if (n[i] == r) return n[i + 1];
    }, fl = (r, i)=>(t == 10 && (t = 0), n[t++] = r, n[t++] = i);
}
var G = class {
    constructor(n, e, t, r){
        this.width = n, this.height = e, this.map = t, this.problems = r;
    }
    // Find the dimensions of the cell at the given position.
    findCell(n) {
        for(let e = 0; e < this.map.length; e++){
            const t = this.map[e];
            if (t != n) continue;
            const r = e % this.width, i = e / this.width | 0;
            let o = r + 1, s = i + 1;
            for(let l = 1; o < this.width && this.map[e + l] == t; l++)o++;
            for(let l = 1; s < this.height && this.map[e + this.width * l] == t; l++)s++;
            return {
                left: r,
                top: i,
                right: o,
                bottom: s
            };
        }
        throw new RangeError(`No cell with offset ${n} found`);
    }
    // Find the left side of the cell at the given position.
    colCount(n) {
        for(let e = 0; e < this.map.length; e++)if (this.map[e] == n) return e % this.width;
        throw new RangeError(`No cell with offset ${n} found`);
    }
    // Find the next cell in the given direction, starting from the cell
    // at `pos`, if any.
    nextCell(n, e, t) {
        const { left: r, right: i, top: o, bottom: s } = this.findCell(n);
        return e == "horiz" ? (t < 0 ? r == 0 : i == this.width) ? null : this.map[o * this.width + (t < 0 ? r - 1 : i)] : (t < 0 ? o == 0 : s == this.height) ? null : this.map[r + this.width * (t < 0 ? o - 1 : s)];
    }
    // Get the rectangle spanning the two given cells.
    rectBetween(n, e) {
        const { left: t, right: r, top: i, bottom: o } = this.findCell(n), { left: s, right: l, top: a, bottom: c } = this.findCell(e);
        return {
            left: Math.min(t, s),
            top: Math.min(i, a),
            right: Math.max(r, l),
            bottom: Math.max(o, c)
        };
    }
    // Return the position of all cells that have the top left corner in
    // the given rectangle.
    cellsInRect(n) {
        const e = [], t = {};
        for(let r = n.top; r < n.bottom; r++)for(let i = n.left; i < n.right; i++){
            const o = r * this.width + i, s = this.map[o];
            t[s] || (t[s] = !0, !(i == n.left && i && this.map[o - 1] == s || r == n.top && r && this.map[o - this.width] == s) && e.push(s));
        }
        return e;
    }
    // Return the position at which the cell at the given row and column
    // starts, or would start, if a cell started there.
    positionAt(n, e, t) {
        for(let r = 0, i = 0;; r++){
            const o = i + t.child(r).nodeSize;
            if (r == n) {
                let s = e + n * this.width;
                const l = (n + 1) * this.width;
                for(; s < l && this.map[s] < i;)s++;
                return s == l ? o - 1 : this.map[s];
            }
            i = o;
        }
    }
    // Find the table map for the given table node.
    static get(n) {
        return cl(n) || fl(n, mA(n));
    }
};
function mA(n) {
    if (n.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + n.type.name);
    const e = gA(n), t = n.childCount, r = [];
    let i = 0, o = null;
    const s = [];
    for(let c = 0, f = e * t; c < f; c++)r[c] = 0;
    for(let c = 0, f = 0; c < t; c++){
        const u = n.child(c);
        f++;
        for(let d = 0;; d++){
            for(; i < r.length && r[i] != 0;)i++;
            if (d == u.childCount) break;
            const m = u.child(d), { colspan: g, rowspan: y, colwidth: C } = m.attrs;
            for(let k = 0; k < y; k++){
                if (k + c >= t) {
                    (o || (o = [])).push({
                        type: "overlong_rowspan",
                        pos: f,
                        n: y - k
                    });
                    break;
                }
                const N = i + k * e;
                for(let T = 0; T < g; T++){
                    r[N + T] == 0 ? r[N + T] = f : (o || (o = [])).push({
                        type: "collision",
                        row: c,
                        pos: f,
                        n: g - T
                    });
                    const x = C && C[T];
                    if (x) {
                        const I = (N + T) % e * 2, D = s[I];
                        D == null || D != x && s[I + 1] == 1 ? (s[I] = x, s[I + 1] = 1) : D == x && s[I + 1]++;
                    }
                }
            }
            i += g, f += m.nodeSize;
        }
        const h = (c + 1) * e;
        let p = 0;
        for(; i < h;)r[i++] == 0 && p++;
        p && (o || (o = [])).push({
            type: "missing",
            row: c,
            n: p
        }), f++;
    }
    const l = new G(e, t, r, o);
    let a = !1;
    for(let c = 0; !a && c < s.length; c += 2)s[c] != null && s[c + 1] < t && (a = !0);
    return a && yA(l, s, n), l;
}
function gA(n) {
    let e = -1, t = !1;
    for(let r = 0; r < n.childCount; r++){
        const i = n.child(r);
        let o = 0;
        if (t) for(let s = 0; s < r; s++){
            const l = n.child(s);
            for(let a = 0; a < l.childCount; a++){
                const c = l.child(a);
                s + c.attrs.rowspan > r && (o += c.attrs.colspan);
            }
        }
        for(let s = 0; s < i.childCount; s++){
            const l = i.child(s);
            o += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
        }
        e == -1 ? e = o : e != o && (e = Math.max(e, o));
    }
    return e;
}
function yA(n, e, t) {
    n.problems || (n.problems = []);
    const r = {};
    for(let i = 0; i < n.map.length; i++){
        const o = n.map[i];
        if (r[o]) continue;
        r[o] = !0;
        const s = t.nodeAt(o);
        if (!s) throw new RangeError(`No cell with offset ${o} found`);
        let l = null;
        const a = s.attrs;
        for(let c = 0; c < a.colspan; c++){
            const f = (i + c) % n.width, u = e[f * 2];
            u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = bA(a)))[c] = u);
        }
        l && n.problems.unshift({
            type: "colwidth mismatch",
            pos: o,
            colwidth: l
        });
    }
}
function bA(n) {
    if (n.colwidth) return n.colwidth.slice();
    const e = [];
    for(let t = 0; t < n.colspan; t++)e.push(0);
    return e;
}
function ue(n) {
    let e = n.cached.tableNodeTypes;
    if (!e) {
        e = n.cached.tableNodeTypes = {};
        for(const t in n.nodes){
            const r = n.nodes[t], i = r.spec.tableRole;
            i && (e[i] = r);
        }
    }
    return e;
}
var vt = new mr("selectingCells");
function Mn(n) {
    for(let e = n.depth - 1; e > 0; e--)if (n.node(e).type.spec.tableRole == "row") return n.node(0).resolve(n.before(e + 1));
    return null;
}
function vA(n) {
    for(let e = n.depth; e > 0; e--){
        const t = n.node(e).type.spec.tableRole;
        if (t === "cell" || t === "header_cell") return n.node(e);
    }
    return null;
}
function Ie(n) {
    const e = n.selection.$head;
    for(let t = e.depth; t > 0; t--)if (e.node(t).type.spec.tableRole == "row") return !0;
    return !1;
}
function mo(n) {
    const e = n.selection;
    if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
    if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
    const t = Mn(e.$head) || SA(e.$head);
    if (t) return t;
    throw new RangeError(`No cell found around position ${e.head}`);
}
function SA(n) {
    for(let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++){
        const r = e.type.spec.tableRole;
        if (r == "cell" || r == "header_cell") return n.doc.resolve(t);
    }
    for(let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--){
        const r = e.type.spec.tableRole;
        if (r == "cell" || r == "header_cell") return n.doc.resolve(t - e.nodeSize);
    }
}
function ul(n) {
    return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function wA(n) {
    return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function sa(n, e) {
    return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function zp(n, e, t) {
    const r = n.node(-1), i = G.get(r), o = n.start(-1), s = i.nextCell(n.pos - o, e, t);
    return s == null ? null : n.node(0).resolve(o + s);
}
function qt(n, e, t = 1) {
    const r = {
        ...n,
        colspan: n.colspan - t
    };
    return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((i)=>i > 0) || (r.colwidth = null)), r;
}
function Lp(n, e, t = 1) {
    const r = {
        ...n,
        colspan: n.colspan + t
    };
    if (r.colwidth) {
        r.colwidth = r.colwidth.slice();
        for(let i = 0; i < t; i++)r.colwidth.splice(e, 0, 0);
    }
    return r;
}
function xA(n, e, t) {
    const r = ue(e.type.schema).header_cell;
    for(let i = 0; i < n.height; i++)if (e.nodeAt(n.map[t + i * n.width]).type != r) return !1;
    return !0;
}
var H = class et extends R {
    // A table selection is identified by its anchor and head cells. The
    // positions given to this constructor should point _before_ two
    // cells in the same table. They may be the same, to select a single
    // cell.
    constructor(e, t = e){
        const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.rectBetween(e.pos - o, t.pos - o), l = e.node(0), a = i.cellsInRect(s).filter((f)=>f != t.pos - o);
        a.unshift(t.pos - o);
        const c = a.map((f)=>{
            const u = r.nodeAt(f);
            if (!u) throw RangeError(`No cell with offset ${f} found`);
            const h = o + f + 1;
            return new th(l.resolve(h), l.resolve(h + u.content.size));
        });
        super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = t;
    }
    map(e, t) {
        const r = e.resolve(t.map(this.$anchorCell.pos)), i = e.resolve(t.map(this.$headCell.pos));
        if (ul(r) && ul(i) && sa(r, i)) {
            const o = this.$anchorCell.node(-1) != r.node(-1);
            return o && this.isRowSelection() ? et.rowSelection(r, i) : o && this.isColSelection() ? et.colSelection(r, i) : new et(r, i);
        }
        return z.between(r, i);
    }
    // Returns a rectangular slice of table rows containing the selected
    // cells.
    content() {
        const e = this.$anchorCell.node(-1), t = G.get(e), r = this.$anchorCell.start(-1), i = t.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), o = {}, s = [];
        for(let a = i.top; a < i.bottom; a++){
            const c = [];
            for(let f = a * t.width + i.left, u = i.left; u < i.right; u++, f++){
                const h = t.map[f];
                if (o[h]) continue;
                o[h] = !0;
                const p = t.findCell(h);
                let d = e.nodeAt(h);
                if (!d) throw RangeError(`No cell with offset ${h} found`);
                const m = i.left - p.left, g = p.right - i.right;
                if (m > 0 || g > 0) {
                    let y = d.attrs;
                    if (m > 0 && (y = qt(y, 0, m)), g > 0 && (y = qt(y, y.colspan - g, g)), p.left < i.left) {
                        if (d = d.type.createAndFill(y), !d) throw RangeError(`Could not create cell with attrs ${JSON.stringify(y)}`);
                    } else d = d.type.create(y, d.content);
                }
                if (p.top < i.top || p.bottom > i.bottom) {
                    const y = {
                        ...d.attrs,
                        rowspan: Math.min(p.bottom, i.bottom) - Math.max(p.top, i.top)
                    };
                    p.top < i.top ? d = d.type.createAndFill(y) : d = d.type.create(y, d.content);
                }
                c.push(d);
            }
            s.push(e.child(a).copy(b.from(c)));
        }
        const l = this.isColSelection() && this.isRowSelection() ? e : s;
        return new w(b.from(l), 1, 1);
    }
    replace(e, t = w.empty) {
        const r = e.steps.length, i = this.ranges;
        for(let s = 0; s < i.length; s++){
            const { $from: l, $to: a } = i[s], c = e.mapping.slice(r);
            e.replace(c.map(l.pos), c.map(a.pos), s ? w.empty : t);
        }
        const o = R.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
        o && e.setSelection(o);
    }
    replaceWith(e, t) {
        this.replace(e, new w(b.from(t), 0, 0));
    }
    forEachCell(e) {
        const t = this.$anchorCell.node(-1), r = G.get(t), i = this.$anchorCell.start(-1), o = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - i, this.$headCell.pos - i));
        for(let s = 0; s < o.length; s++)e(t.nodeAt(o[s]), i + o[s]);
    }
    // True if this selection goes all the way from the top to the
    // bottom of the table.
    isColSelection() {
        const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
        if (Math.min(e, t) > 0) return !1;
        const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, i = t + this.$headCell.nodeAfter.attrs.rowspan;
        return Math.max(r, i) == this.$headCell.node(-1).childCount;
    }
    // Returns the smallest column selection that covers the given anchor
    // and head cell.
    static colSelection(e, t = e) {
        const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
        return s.top <= l.top ? (s.top > 0 && (e = a.resolve(o + i.map[s.left])), l.bottom < i.height && (t = a.resolve(o + i.map[i.width * (i.height - 1) + l.right - 1]))) : (l.top > 0 && (t = a.resolve(o + i.map[l.left])), s.bottom < i.height && (e = a.resolve(o + i.map[i.width * (i.height - 1) + s.right - 1]))), new et(e, t);
    }
    // True if this selection goes all the way from the left to the
    // right of the table.
    isRowSelection() {
        const e = this.$anchorCell.node(-1), t = G.get(e), r = this.$anchorCell.start(-1), i = t.colCount(this.$anchorCell.pos - r), o = t.colCount(this.$headCell.pos - r);
        if (Math.min(i, o) > 0) return !1;
        const s = i + this.$anchorCell.nodeAfter.attrs.colspan, l = o + this.$headCell.nodeAfter.attrs.colspan;
        return Math.max(s, l) == t.width;
    }
    eq(e) {
        return e instanceof et && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
    }
    // Returns the smallest row selection that covers the given anchor
    // and head cell.
    static rowSelection(e, t = e) {
        const r = e.node(-1), i = G.get(r), o = e.start(-1), s = i.findCell(e.pos - o), l = i.findCell(t.pos - o), a = e.node(0);
        return s.left <= l.left ? (s.left > 0 && (e = a.resolve(o + i.map[s.top * i.width])), l.right < i.width && (t = a.resolve(o + i.map[i.width * (l.top + 1) - 1]))) : (l.left > 0 && (t = a.resolve(o + i.map[l.top * i.width])), s.right < i.width && (e = a.resolve(o + i.map[i.width * (s.top + 1) - 1]))), new et(e, t);
    }
    toJSON() {
        return {
            type: "cell",
            anchor: this.$anchorCell.pos,
            head: this.$headCell.pos
        };
    }
    static fromJSON(e, t) {
        return new et(e.resolve(t.anchor), e.resolve(t.head));
    }
    static create(e, t, r = t) {
        return new et(e.resolve(t), e.resolve(r));
    }
    getBookmark() {
        return new CA(this.$anchorCell.pos, this.$headCell.pos);
    }
};
H.prototype.visible = !1;
R.jsonID("cell", H);
var CA = class Fp {
    constructor(e, t){
        this.anchor = e, this.head = t;
    }
    map(e) {
        return new Fp(e.map(this.anchor), e.map(this.head));
    }
    resolve(e) {
        const t = e.resolve(this.anchor), r = e.resolve(this.head);
        return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && sa(t, r) ? new H(t, r) : R.near(r, 1);
    }
};
function OA(n) {
    if (!(n.selection instanceof H)) return null;
    const e = [];
    return n.selection.forEachCell((t, r)=>{
        e.push(ye.node(r, r + t.nodeSize, {
            class: "selectedCell"
        }));
    }), J.create(n.doc, e);
}
function kA({ $from: n, $to: e }) {
    if (n.pos == e.pos || n.pos < n.pos - 6) return !1;
    let t = n.pos, r = e.pos, i = n.depth;
    for(; i >= 0 && !(n.after(i + 1) < n.end(i)); i--, t++);
    for(let o = e.depth; o >= 0 && !(e.before(o + 1) > e.start(o)); o--, r--);
    return t == r && /row|table/.test(n.node(i).type.spec.tableRole);
}
function AA({ $from: n, $to: e }) {
    let t, r;
    for(let i = n.depth; i > 0; i--){
        const o = n.node(i);
        if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
            t = o;
            break;
        }
    }
    for(let i = e.depth; i > 0; i--){
        const o = e.node(i);
        if (o.type.spec.tableRole === "cell" || o.type.spec.tableRole === "header_cell") {
            r = o;
            break;
        }
    }
    return t !== r && e.parentOffset === 0;
}
function EA(n, e, t) {
    const r = (e || n).selection, i = (e || n).doc;
    let o, s;
    if (r instanceof M && (s = r.node.type.spec.tableRole)) {
        if (s == "cell" || s == "header_cell") o = H.create(i, r.from);
        else if (s == "row") {
            const l = i.resolve(r.from + 1);
            o = H.rowSelection(l, l);
        } else if (!t) {
            const l = G.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
            o = H.create(i, a + 1, c);
        }
    } else r instanceof z && kA(r) ? o = z.create(i, r.from) : r instanceof z && AA(r) && (o = z.create(i, r.$from.start(), r.$from.end()));
    return o && (e || (e = n.tr)).setSelection(o), e;
}
var TA = new mr("fix-tables");
function _p(n, e, t, r) {
    const i = n.childCount, o = e.childCount;
    e: for(let s = 0, l = 0; s < o; s++){
        const a = e.child(s);
        for(let c = l, f = Math.min(i, s + 3); c < f; c++)if (n.child(c) == a) {
            l = c + 1, t += a.nodeSize;
            continue e;
        }
        r(a, t), l < i && n.child(l).sameMarkup(a) ? _p(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
    }
}
function MA(n, e) {
    let t;
    const r = (i, o)=>{
        i.type.spec.tableRole == "table" && (t = NA(n, i, o, t));
    };
    return e ? e.doc != n.doc && _p(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function NA(n, e, t, r) {
    const i = G.get(e);
    if (!i.problems) return r;
    r || (r = n.tr);
    const o = [];
    for(let a = 0; a < i.height; a++)o.push(0);
    for(let a = 0; a < i.problems.length; a++){
        const c = i.problems[a];
        if (c.type == "collision") {
            const f = e.nodeAt(c.pos);
            if (!f) continue;
            const u = f.attrs;
            for(let h = 0; h < u.rowspan; h++)o[c.row + h] += c.n;
            r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, qt(u, u.colspan - c.n, c.n));
        } else if (c.type == "missing") o[c.row] += c.n;
        else if (c.type == "overlong_rowspan") {
            const f = e.nodeAt(c.pos);
            if (!f) continue;
            r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
                ...f.attrs,
                rowspan: f.attrs.rowspan - c.n
            });
        } else if (c.type == "colwidth mismatch") {
            const f = e.nodeAt(c.pos);
            if (!f) continue;
            r.setNodeMarkup(r.mapping.map(t + 1 + c.pos), null, {
                ...f.attrs,
                colwidth: c.colwidth
            });
        }
    }
    let s, l;
    for(let a = 0; a < o.length; a++)o[a] && (s == null && (s = a), l = a);
    for(let a = 0, c = t + 1; a < i.height; a++){
        const f = e.child(a), u = c + f.nodeSize, h = o[a];
        if (h > 0) {
            let p = "cell";
            f.firstChild && (p = f.firstChild.type.spec.tableRole);
            const d = [];
            for(let g = 0; g < h; g++){
                const y = ue(n.schema)[p].createAndFill();
                y && d.push(y);
            }
            const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
            r.insert(r.mapping.map(m), d);
        }
        c = u;
    }
    return r.setMeta(TA, {
        fixTables: !0
    });
}
function RA(n) {
    if (!n.size) return null;
    let { content: e, openStart: t, openEnd: r } = n;
    for(; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table");)t--, r--, e = e.child(0).content;
    const i = e.child(0), o = i.type.spec.tableRole, s = i.type.schema, l = [];
    if (o == "row") for(let a = 0; a < e.childCount; a++){
        let c = e.child(a).content;
        const f = a ? 0 : Math.max(0, t - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
        (f || u) && (c = hl(ue(s).row, new w(c, f, u)).content), l.push(c);
    }
    else if (o == "cell" || o == "header_cell") l.push(t || r ? hl(ue(s).row, new w(e, t, r)).content : e);
    else return null;
    return IA(s, l);
}
function IA(n, e) {
    const t = [];
    for(let i = 0; i < e.length; i++){
        const o = e[i];
        for(let s = o.childCount - 1; s >= 0; s--){
            const { rowspan: l, colspan: a } = o.child(s).attrs;
            for(let c = i; c < i + l; c++)t[c] = (t[c] || 0) + a;
        }
    }
    let r = 0;
    for(let i = 0; i < t.length; i++)r = Math.max(r, t[i]);
    for(let i = 0; i < t.length; i++)if (i >= e.length && e.push(b.empty), t[i] < r) {
        const o = ue(n).cell.createAndFill(), s = [];
        for(let l = t[i]; l < r; l++)s.push(o);
        e[i] = e[i].append(b.from(s));
    }
    return {
        height: e.length,
        width: r,
        rows: e
    };
}
function hl(n, e) {
    const t = n.createAndFill();
    return new eh(t).replace(0, t.content.size, e).doc;
}
function DA({ width: n, height: e, rows: t }, r, i) {
    if (n != r) {
        const o = [], s = [];
        for(let l = 0; l < t.length; l++){
            const a = t[l], c = [];
            for(let f = o[l] || 0, u = 0; f < r; u++){
                let h = a.child(u % a.childCount);
                f + h.attrs.colspan > r && (h = h.type.createChecked(qt(h.attrs, h.attrs.colspan, f + h.attrs.colspan - r), h.content)), c.push(h), f += h.attrs.colspan;
                for(let p = 1; p < h.attrs.rowspan; p++)o[l + p] = (o[l + p] || 0) + h.attrs.colspan;
            }
            s.push(b.from(c));
        }
        t = s, n = r;
    }
    if (e != i) {
        const o = [];
        for(let s = 0, l = 0; s < i; s++, l++){
            const a = [], c = t[l % e];
            for(let f = 0; f < c.childCount; f++){
                let u = c.child(f);
                s + u.attrs.rowspan > i && (u = u.type.create({
                    ...u.attrs,
                    rowspan: Math.max(1, i - u.attrs.rowspan)
                }, u.content)), a.push(u);
            }
            o.push(b.from(a));
        }
        t = o, e = i;
    }
    return {
        width: n,
        height: e,
        rows: t
    };
}
function PA(n, e, t, r, i, o, s) {
    const l = n.doc.type.schema, a = ue(l);
    let c, f;
    if (i > e.width) for(let u = 0, h = 0; u < e.height; u++){
        const p = t.child(u);
        h += p.nodeSize;
        const d = [];
        let m;
        p.lastChild == null || p.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = f || (f = a.header_cell.createAndFill());
        for(let g = e.width; g < i; g++)d.push(m);
        n.insert(n.mapping.slice(s).map(h - 1 + r), d);
    }
    if (o > e.height) {
        const u = [];
        for(let d = 0, m = (e.height - 1) * e.width; d < Math.max(e.width, i); d++){
            const g = d >= e.width ? !1 : t.nodeAt(e.map[m + d]).type == a.header_cell;
            u.push(g ? f || (f = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill()));
        }
        const h = a.row.create(null, b.from(u)), p = [];
        for(let d = e.height; d < o; d++)p.push(h);
        n.insert(n.mapping.slice(s).map(r + t.nodeSize - 2), p);
    }
    return !!(c || f);
}
function pu(n, e, t, r, i, o, s, l) {
    if (s == 0 || s == e.height) return !1;
    let a = !1;
    for(let c = i; c < o; c++){
        const f = s * e.width + c, u = e.map[f];
        if (e.map[f - e.width] == u) {
            a = !0;
            const h = t.nodeAt(u), { top: p, left: d } = e.findCell(u);
            n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
                ...h.attrs,
                rowspan: s - p
            }), n.insert(n.mapping.slice(l).map(e.positionAt(s, d, t)), h.type.createAndFill({
                ...h.attrs,
                rowspan: p + h.attrs.rowspan - s
            })), c += h.attrs.colspan - 1;
        }
    }
    return a;
}
function mu(n, e, t, r, i, o, s, l) {
    if (s == 0 || s == e.width) return !1;
    let a = !1;
    for(let c = i; c < o; c++){
        const f = c * e.width + s, u = e.map[f];
        if (e.map[f - 1] == u) {
            a = !0;
            const h = t.nodeAt(u), p = e.colCount(u), d = n.mapping.slice(l).map(u + r);
            n.setNodeMarkup(d, null, qt(h.attrs, s - p, h.attrs.colspan - (s - p))), n.insert(d + h.nodeSize, h.type.createAndFill(qt(h.attrs, 0, s - p))), c += h.attrs.rowspan - 1;
        }
    }
    return a;
}
function gu(n, e, t, r, i) {
    let o = t ? n.doc.nodeAt(t - 1) : n.doc;
    if (!o) throw new Error("No table found");
    let s = G.get(o);
    const { top: l, left: a } = r, c = a + i.width, f = l + i.height, u = n.tr;
    let h = 0;
    function p() {
        if (o = t ? u.doc.nodeAt(t - 1) : u.doc, !o) throw new Error("No table found");
        s = G.get(o), h = u.mapping.maps.length;
    }
    PA(u, s, o, t, c, f, h) && p(), pu(u, s, o, t, a, c, l, h) && p(), pu(u, s, o, t, a, c, f, h) && p(), mu(u, s, o, t, l, f, a, h) && p(), mu(u, s, o, t, l, f, c, h) && p();
    for(let d = l; d < f; d++){
        const m = s.positionAt(d, a, o), g = s.positionAt(d, c, o);
        u.replace(u.mapping.slice(h).map(m + t), u.mapping.slice(h).map(g + t), new w(i.rows[d - l], 0, 0));
    }
    p(), u.setSelection(new H(u.doc.resolve(t + s.positionAt(l, a, o)), u.doc.resolve(t + s.positionAt(f - 1, c - 1, o)))), e(u);
}
var $A = Ol({
    ArrowLeft: Ir("horiz", -1),
    ArrowRight: Ir("horiz", 1),
    ArrowUp: Ir("vert", -1),
    ArrowDown: Ir("vert", 1),
    "Shift-ArrowLeft": Dr("horiz", -1),
    "Shift-ArrowRight": Dr("horiz", 1),
    "Shift-ArrowUp": Dr("vert", -1),
    "Shift-ArrowDown": Dr("vert", 1),
    Backspace: Pr,
    "Mod-Backspace": Pr,
    Delete: Pr,
    "Mod-Delete": Pr
});
function Gr(n, e, t) {
    return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function Ir(n, e) {
    return (t, r, i)=>{
        if (!i) return !1;
        const o = t.selection;
        if (o instanceof H) return Gr(t, r, R.near(o.$headCell, e));
        if (n != "horiz" && !o.empty) return !1;
        const s = jp(i, n, e);
        if (s == null) return !1;
        if (n == "horiz") return Gr(t, r, R.near(t.doc.resolve(o.head + e), e));
        {
            const l = t.doc.resolve(s), a = zp(l, n, e);
            let c;
            return a ? c = R.near(a, 1) : e < 0 ? c = R.near(t.doc.resolve(l.before(-1)), -1) : c = R.near(t.doc.resolve(l.after(-1)), 1), Gr(t, r, c);
        }
    };
}
function Dr(n, e) {
    return (t, r, i)=>{
        if (!i) return !1;
        const o = t.selection;
        let s;
        if (o instanceof H) s = o;
        else {
            const a = jp(i, n, e);
            if (a == null) return !1;
            s = new H(t.doc.resolve(a));
        }
        const l = zp(s.$headCell, n, e);
        return l ? Gr(t, r, new H(s.$anchorCell, l)) : !1;
    };
}
function Pr(n, e) {
    const t = n.selection;
    if (!(t instanceof H)) return !1;
    if (e) {
        const r = n.tr, i = ue(n.schema).cell.createAndFill().content;
        t.forEachCell((o, s)=>{
            o.content.eq(i) || r.replace(r.mapping.map(s + 1), r.mapping.map(s + o.nodeSize - 1), new w(i, 0, 0));
        }), r.docChanged && e(r);
    }
    return !0;
}
function BA(n, e) {
    const t = n.state.doc, r = Mn(t.resolve(e));
    return r ? (n.dispatch(n.state.tr.setSelection(new H(r))), !0) : !1;
}
function zA(n, e, t) {
    if (!Ie(n.state)) return !1;
    let r = RA(t);
    const i = n.state.selection;
    if (i instanceof H) {
        r || (r = {
            width: 1,
            height: 1,
            rows: [
                b.from(hl(ue(n.state.schema).cell, t))
            ]
        });
        const o = i.$anchorCell.node(-1), s = i.$anchorCell.start(-1), l = G.get(o).rectBetween(i.$anchorCell.pos - s, i.$headCell.pos - s);
        return r = DA(r, l.right - l.left, l.bottom - l.top), gu(n.state, n.dispatch, s, l, r), !0;
    } else if (r) {
        const o = mo(n.state), s = o.start(-1);
        return gu(n.state, n.dispatch, s, G.get(o.node(-1)).findCell(o.pos - s), r), !0;
    } else return !1;
}
function LA(n, e) {
    var t;
    if (e.ctrlKey || e.metaKey) return;
    const r = yu(n, e.target);
    let i;
    if (e.shiftKey && n.state.selection instanceof H) o(n.state.selection.$anchorCell, e), e.preventDefault();
    else if (e.shiftKey && r && (i = Mn(n.state.selection.$anchor)) != null && ((t = fs(n, e)) == null ? void 0 : t.pos) != i.pos) o(i, e), e.preventDefault();
    else if (!r) return;
    function o(a, c) {
        let f = fs(n, c);
        const u = vt.getState(n.state) == null;
        if (!f || !sa(a, f)) if (u) f = a;
        else return;
        const h = new H(a, f);
        if (u || !n.state.selection.eq(h)) {
            const p = n.state.tr.setSelection(h);
            u && p.setMeta(vt, a.pos), n.dispatch(p);
        }
    }
    function s() {
        n.root.removeEventListener("mouseup", s), n.root.removeEventListener("dragstart", s), n.root.removeEventListener("mousemove", l), vt.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(vt, -1));
    }
    function l(a) {
        const c = a, f = vt.getState(n.state);
        let u;
        if (f != null) u = n.state.doc.resolve(f);
        else if (yu(n, c.target) != r && (u = fs(n, e), !u)) return s();
        u && o(u, c);
    }
    n.root.addEventListener("mouseup", s), n.root.addEventListener("dragstart", s), n.root.addEventListener("mousemove", l);
}
function jp(n, e, t) {
    if (!(n.state.selection instanceof z)) return null;
    const { $head: r } = n.state.selection;
    for(let i = r.depth - 1; i >= 0; i--){
        const o = r.node(i);
        if ((t < 0 ? r.index(i) : r.indexAfter(i)) != (t < 0 ? 0 : o.childCount)) return null;
        if (o.type.spec.tableRole == "cell" || o.type.spec.tableRole == "header_cell") {
            const l = r.before(i), a = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
            return n.endOfTextblock(a) ? l : null;
        }
    }
    return null;
}
function yu(n, e) {
    for(; e && e != n.dom; e = e.parentNode)if (e.nodeName == "TD" || e.nodeName == "TH") return e;
    return null;
}
function fs(n, e) {
    const t = n.posAtCoords({
        left: e.clientX,
        top: e.clientY
    });
    return t && t ? Mn(n.state.doc.resolve(t.pos)) : null;
}
var FA = class {
    constructor(n, e){
        this.node = n, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), dl(n, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
    }
    update(n) {
        return n.type != this.node.type ? !1 : (this.node = n, dl(n, this.colgroup, this.table, this.cellMinWidth), !0);
    }
    ignoreMutation(n) {
        return n.type == "attributes" && (n.target == this.table || this.colgroup.contains(n.target));
    }
};
function dl(n, e, t, r, i, o) {
    var s;
    let l = 0, a = !0, c = e.firstChild;
    const f = n.firstChild;
    if (f) {
        for(let u = 0, h = 0; u < f.childCount; u++){
            const { colspan: p, colwidth: d } = f.child(u).attrs;
            for(let m = 0; m < p; m++, h++){
                const g = i == h ? o : d && d[m], y = g ? g + "px" : "";
                l += g || r, g || (a = !1), c ? (c.style.width != y && (c.style.width = y), c = c.nextSibling) : e.appendChild(document.createElement("col")).style.width = y;
            }
        }
        for(; c;){
            const u = c.nextSibling;
            (s = c.parentNode) == null || s.removeChild(c), c = u;
        }
        a ? (t.style.width = l + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = l + "px");
    }
}
var Ce = new mr("tableColumnResizing");
function KE({ handleWidth: n = 5, cellMinWidth: e = 25, View: t = FA, lastColumnResizable: r = !0 } = {}) {
    const i = new kn({
        key: Ce,
        state: {
            init (o, s) {
                var l, a;
                const c = (a = (l = i.spec) == null ? void 0 : l.props) == null ? void 0 : a.nodeViews, f = ue(s.schema).table.name;
                return t && c && (c[f] = (u, h)=>new t(u, e, h)), new _A(-1, !1);
            },
            apply (o, s) {
                return s.apply(o);
            }
        },
        props: {
            attributes: (o)=>{
                const s = Ce.getState(o);
                return s && s.activeHandle > -1 ? {
                    class: "resize-cursor"
                } : {};
            },
            handleDOMEvents: {
                mousemove: (o, s)=>{
                    jA(o, s, n, e, r);
                },
                mouseleave: (o)=>{
                    VA(o);
                },
                mousedown: (o, s)=>{
                    WA(o, s, e);
                }
            },
            decorations: (o)=>{
                const s = Ce.getState(o);
                if (s && s.activeHandle > -1) return GA(o, s.activeHandle);
            },
            nodeViews: {}
        }
    });
    return i;
}
var _A = class Yr {
    constructor(e, t){
        this.activeHandle = e, this.dragging = t;
    }
    apply(e) {
        const t = this, r = e.getMeta(Ce);
        if (r && r.setHandle != null) return new Yr(r.setHandle, !1);
        if (r && r.setDragging !== void 0) return new Yr(t.activeHandle, r.setDragging);
        if (t.activeHandle > -1 && e.docChanged) {
            let i = e.mapping.map(t.activeHandle, -1);
            return ul(e.doc.resolve(i)) || (i = -1), new Yr(i, t.dragging);
        }
        return t;
    }
};
function jA(n, e, t, r, i) {
    const o = Ce.getState(n.state);
    if (o && !o.dragging) {
        const s = UA(e.target);
        let l = -1;
        if (s) {
            const { left: a, right: c } = s.getBoundingClientRect();
            e.clientX - a <= t ? l = bu(n, e, "left", t) : c - e.clientX <= t && (l = bu(n, e, "right", t));
        }
        if (l != o.activeHandle) {
            if (!i && l !== -1) {
                const a = n.state.doc.resolve(l), c = a.node(-1), f = G.get(c), u = a.start(-1);
                if (f.colCount(a.pos - u) + a.nodeAfter.attrs.colspan - 1 == f.width - 1) return;
            }
            Vp(n, l);
        }
    }
}
function VA(n) {
    const e = Ce.getState(n.state);
    e && e.activeHandle > -1 && !e.dragging && Vp(n, -1);
}
function WA(n, e, t) {
    var r;
    const i = (r = n.dom.ownerDocument.defaultView) != null ? r : window, o = Ce.getState(n.state);
    if (!o || o.activeHandle == -1 || o.dragging) return !1;
    const s = n.state.doc.nodeAt(o.activeHandle), l = HA(n, o.activeHandle, s.attrs);
    n.dispatch(n.state.tr.setMeta(Ce, {
        setDragging: {
            startX: e.clientX,
            startWidth: l
        }
    }));
    function a(f) {
        i.removeEventListener("mouseup", a), i.removeEventListener("mousemove", c);
        const u = Ce.getState(n.state);
        u != null && u.dragging && (KA(n, u.activeHandle, vu(u.dragging, f, t)), n.dispatch(n.state.tr.setMeta(Ce, {
            setDragging: null
        })));
    }
    function c(f) {
        if (!f.which) return a(f);
        const u = Ce.getState(n.state);
        if (u && u.dragging) {
            const h = vu(u.dragging, f, t);
            JA(n, u.activeHandle, h, t);
        }
    }
    return i.addEventListener("mouseup", a), i.addEventListener("mousemove", c), e.preventDefault(), !0;
}
function HA(n, e, { colspan: t, colwidth: r }) {
    const i = r && r[r.length - 1];
    if (i) return i;
    const o = n.domAtPos(e);
    let l = o.node.childNodes[o.offset].offsetWidth, a = t;
    if (r) for(let c = 0; c < t; c++)r[c] && (l -= r[c], a--);
    return l / a;
}
function UA(n) {
    for(; n && n.nodeName != "TD" && n.nodeName != "TH";)n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
    return n;
}
function bu(n, e, t, r) {
    const i = t == "right" ? -r : r, o = n.posAtCoords({
        left: e.clientX + i,
        top: e.clientY
    });
    if (!o) return -1;
    const { pos: s } = o, l = Mn(n.state.doc.resolve(s));
    if (!l) return -1;
    if (t == "right") return l.pos;
    const a = G.get(l.node(-1)), c = l.start(-1), f = a.map.indexOf(l.pos - c);
    return f % a.width == 0 ? -1 : c + a.map[f - 1];
}
function vu(n, e, t) {
    const r = e.clientX - n.startX;
    return Math.max(t, n.startWidth + r);
}
function Vp(n, e) {
    n.dispatch(n.state.tr.setMeta(Ce, {
        setHandle: e
    }));
}
function KA(n, e, t) {
    const r = n.state.doc.resolve(e), i = r.node(-1), o = G.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
    for(let c = 0; c < o.height; c++){
        const f = c * o.width + l;
        if (c && o.map[f] == o.map[f - o.width]) continue;
        const u = o.map[f], h = i.nodeAt(u).attrs, p = h.colspan == 1 ? 0 : l - o.colCount(u);
        if (h.colwidth && h.colwidth[p] == t) continue;
        const d = h.colwidth ? h.colwidth.slice() : qA(h.colspan);
        d[p] = t, a.setNodeMarkup(s + u, null, {
            ...h,
            colwidth: d
        });
    }
    a.docChanged && n.dispatch(a);
}
function JA(n, e, t, r) {
    const i = n.state.doc.resolve(e), o = i.node(-1), s = i.start(-1), l = G.get(o).colCount(i.pos - s) + i.nodeAfter.attrs.colspan - 1;
    let a = n.domAtPos(i.start(-1)).node;
    for(; a && a.nodeName != "TABLE";)a = a.parentNode;
    a && dl(o, a.firstChild, a, r, l, t);
}
function qA(n) {
    return Array(n).fill(0);
}
function GA(n, e) {
    const t = [], r = n.doc.resolve(e), i = r.node(-1);
    if (!i) return J.empty;
    const o = G.get(i), s = r.start(-1), l = o.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1;
    for(let a = 0; a < o.height; a++){
        const c = l + a * o.width;
        if ((l == o.width - 1 || o.map[c] != o.map[c + 1]) && (a == 0 || o.map[c] != o.map[c - o.width])) {
            const f = o.map[c], u = s + f + i.nodeAt(f).nodeSize - 1, h = document.createElement("div");
            h.className = "column-resize-handle", t.push(ye.widget(u, h));
        }
    }
    return J.create(n.doc, t);
}
function qe(n) {
    const e = n.selection, t = mo(n), r = t.node(-1), i = t.start(-1), o = G.get(r);
    return {
        ...e instanceof H ? o.rectBetween(e.$anchorCell.pos - i, e.$headCell.pos - i) : o.findCell(t.pos - i),
        tableStart: i,
        map: o,
        table: r
    };
}
function Wp(n, { map: e, tableStart: t, table: r }, i) {
    let o = i > 0 ? -1 : 0;
    xA(e, r, i + o) && (o = i == 0 || i == e.width ? null : 0);
    for(let s = 0; s < e.height; s++){
        const l = s * e.width + i;
        if (i > 0 && i < e.width && e.map[l - 1] == e.map[l]) {
            const a = e.map[l], c = r.nodeAt(a);
            n.setNodeMarkup(n.mapping.map(t + a), null, Lp(c.attrs, i - e.colCount(a))), s += c.attrs.rowspan - 1;
        } else {
            const a = o == null ? ue(r.type.schema).cell : r.nodeAt(e.map[l + o]).type, c = e.positionAt(s, i, r);
            n.insert(n.mapping.map(t + c), a.createAndFill());
        }
    }
    return n;
}
function JE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n);
        e(Wp(n.tr, t, t.left));
    }
    return !0;
}
function qE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n);
        e(Wp(n.tr, t, t.right));
    }
    return !0;
}
function YA(n, { map: e, table: t, tableStart: r }, i) {
    const o = n.mapping.maps.length;
    for(let s = 0; s < e.height;){
        const l = s * e.width + i, a = e.map[l], c = t.nodeAt(a), f = c.attrs;
        if (i > 0 && e.map[l - 1] == a || i < e.width - 1 && e.map[l + 1] == a) n.setNodeMarkup(n.mapping.slice(o).map(r + a), null, qt(f, i - e.colCount(a)));
        else {
            const u = n.mapping.slice(o).map(r + a);
            n.delete(u, u + c.nodeSize);
        }
        s += f.rowspan;
    }
}
function GE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n), r = n.tr;
        if (t.left == 0 && t.right == t.map.width) return !1;
        for(let i = t.right - 1; YA(r, t, i), i != t.left; i--){
            const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
            if (!o) throw RangeError("No table found");
            t.table = o, t.map = G.get(o);
        }
        e(r);
    }
    return !0;
}
function XA(n, e, t) {
    var r;
    const i = ue(e.type.schema).header_cell;
    for(let o = 0; o < n.width; o++)if (((r = e.nodeAt(n.map[o + t * n.width])) == null ? void 0 : r.type) != i) return !1;
    return !0;
}
function Hp(n, { map: e, tableStart: t, table: r }, i) {
    var o;
    let s = t;
    for(let c = 0; c < i; c++)s += r.child(c).nodeSize;
    const l = [];
    let a = i > 0 ? -1 : 0;
    XA(e, r, i + a) && (a = i == 0 || i == e.height ? null : 0);
    for(let c = 0, f = e.width * i; c < e.width; c++, f++)if (i > 0 && i < e.height && e.map[f] == e.map[f - e.width]) {
        const u = e.map[f], h = r.nodeAt(u).attrs;
        n.setNodeMarkup(t + u, null, {
            ...h,
            rowspan: h.rowspan + 1
        }), c += h.colspan - 1;
    } else {
        const u = a == null ? ue(r.type.schema).cell : (o = r.nodeAt(e.map[f + a * e.width])) == null ? void 0 : o.type, h = u == null ? void 0 : u.createAndFill();
        h && l.push(h);
    }
    return n.insert(s, ue(r.type.schema).row.create(null, l)), n;
}
function YE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n);
        e(Hp(n.tr, t, t.top));
    }
    return !0;
}
function XE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n);
        e(Hp(n.tr, t, t.bottom));
    }
    return !0;
}
function QA(n, { map: e, table: t, tableStart: r }, i) {
    let o = 0;
    for(let c = 0; c < i; c++)o += t.child(c).nodeSize;
    const s = o + t.child(i).nodeSize, l = n.mapping.maps.length;
    n.delete(o + r, s + r);
    const a = /* @__PURE__ */ new Set();
    for(let c = 0, f = i * e.width; c < e.width; c++, f++){
        const u = e.map[f];
        if (!a.has(u)) {
            if (a.add(u), i > 0 && u == e.map[f - e.width]) {
                const h = t.nodeAt(u).attrs;
                n.setNodeMarkup(n.mapping.slice(l).map(u + r), null, {
                    ...h,
                    rowspan: h.rowspan - 1
                }), c += h.colspan - 1;
            } else if (i < e.height && u == e.map[f + e.width]) {
                const h = t.nodeAt(u), p = h.attrs, d = h.type.create({
                    ...p,
                    rowspan: h.attrs.rowspan - 1
                }, h.content), m = e.positionAt(i + 1, c, t);
                n.insert(n.mapping.slice(l).map(r + m), d), c += p.colspan - 1;
            }
        }
    }
}
function QE(n, e) {
    if (!Ie(n)) return !1;
    if (e) {
        const t = qe(n), r = n.tr;
        if (t.top == 0 && t.bottom == t.map.height) return !1;
        for(let i = t.bottom - 1; QA(r, t, i), i != t.top; i--){
            const o = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
            if (!o) throw RangeError("No table found");
            t.table = o, t.map = G.get(t.table);
        }
        e(r);
    }
    return !0;
}
function Su(n) {
    const e = n.content;
    return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function ZA({ width: n, height: e, map: t }, r) {
    let i = r.top * n + r.left, o = i, s = (r.bottom - 1) * n + r.left, l = i + (r.right - r.left - 1);
    for(let a = r.top; a < r.bottom; a++){
        if (r.left > 0 && t[o] == t[o - 1] || r.right < n && t[l] == t[l + 1]) return !0;
        o += n, l += n;
    }
    for(let a = r.left; a < r.right; a++){
        if (r.top > 0 && t[i] == t[i - n] || r.bottom < e && t[s] == t[s + n]) return !0;
        i++, s++;
    }
    return !1;
}
function ZE(n, e) {
    const t = n.selection;
    if (!(t instanceof H) || t.$anchorCell.pos == t.$headCell.pos) return !1;
    const r = qe(n), { map: i } = r;
    if (ZA(i, r)) return !1;
    if (e) {
        const o = n.tr, s = {};
        let l = b.empty, a, c;
        for(let f = r.top; f < r.bottom; f++)for(let u = r.left; u < r.right; u++){
            const h = i.map[f * i.width + u], p = r.table.nodeAt(h);
            if (!(s[h] || !p)) if (s[h] = !0, a == null) a = h, c = p;
            else {
                Su(p) || (l = l.append(p.content));
                const d = o.mapping.map(h + r.tableStart);
                o.delete(d, d + p.nodeSize);
            }
        }
        if (a == null || c == null) return !0;
        if (o.setNodeMarkup(a + r.tableStart, null, {
            ...Lp(c.attrs, c.attrs.colspan, r.right - r.left - c.attrs.colspan),
            rowspan: r.bottom - r.top
        }), l.size) {
            const f = a + 1 + c.content.size, u = Su(c) ? a + 1 : f;
            o.replaceWith(u + r.tableStart, f + r.tableStart, l);
        }
        o.setSelection(new H(o.doc.resolve(a + r.tableStart))), e(o);
    }
    return !0;
}
function eT(n, e) {
    const t = ue(n.schema);
    return eE(({ node: r })=>t[r.type.spec.tableRole])(n, e);
}
function eE(n) {
    return (e, t)=>{
        var r;
        const i = e.selection;
        let o, s;
        if (i instanceof H) {
            if (i.$anchorCell.pos != i.$headCell.pos) return !1;
            o = i.$anchorCell.nodeAfter, s = i.$anchorCell.pos;
        } else {
            if (o = vA(i.$from), !o) return !1;
            s = (r = Mn(i.$from)) == null ? void 0 : r.pos;
        }
        if (o == null || s == null || o.attrs.colspan == 1 && o.attrs.rowspan == 1) return !1;
        if (t) {
            let l = o.attrs;
            const a = [], c = l.colwidth;
            l.rowspan > 1 && (l = {
                ...l,
                rowspan: 1
            }), l.colspan > 1 && (l = {
                ...l,
                colspan: 1
            });
            const f = qe(e), u = e.tr;
            for(let p = 0; p < f.right - f.left; p++)a.push(c ? {
                ...l,
                colwidth: c && c[p] ? [
                    c[p]
                ] : null
            } : l);
            let h;
            for(let p = f.top; p < f.bottom; p++){
                let d = f.map.positionAt(p, f.left, f.table);
                p == f.top && (d += o.nodeSize);
                for(let m = f.left, g = 0; m < f.right; m++, g++)m == f.left && p == f.top || u.insert(h = u.mapping.map(d + f.tableStart, 1), n({
                    node: o,
                    row: p,
                    col: m
                }).createAndFill(a[g]));
            }
            u.setNodeMarkup(s, n({
                node: o,
                row: f.top,
                col: f.left
            }), a[0]), i instanceof H && u.setSelection(new H(u.doc.resolve(i.$anchorCell.pos), h ? u.doc.resolve(h) : void 0)), t(u);
        }
        return !0;
    };
}
function tT(n, e) {
    return function(t, r) {
        if (!Ie(t)) return !1;
        const i = mo(t);
        if (i.nodeAfter.attrs[n] === e) return !1;
        if (r) {
            const o = t.tr;
            t.selection instanceof H ? t.selection.forEachCell((s, l)=>{
                s.attrs[n] !== e && o.setNodeMarkup(l, null, {
                    ...s.attrs,
                    [n]: e
                });
            }) : o.setNodeMarkup(i.pos, null, {
                ...i.nodeAfter.attrs,
                [n]: e
            }), r(o);
        }
        return !0;
    };
}
function tE(n) {
    return function(e, t) {
        if (!Ie(e)) return !1;
        if (t) {
            const r = ue(e.schema), i = qe(e), o = e.tr, s = i.map.cellsInRect(n == "column" ? {
                left: i.left,
                top: 0,
                right: i.right,
                bottom: i.map.height
            } : n == "row" ? {
                left: 0,
                top: i.top,
                right: i.map.width,
                bottom: i.bottom
            } : i), l = s.map((a)=>i.table.nodeAt(a));
            for(let a = 0; a < s.length; a++)l[a].type == r.header_cell && o.setNodeMarkup(i.tableStart + s[a], r.cell, l[a].attrs);
            if (o.steps.length == 0) for(let a = 0; a < s.length; a++)o.setNodeMarkup(i.tableStart + s[a], r.header_cell, l[a].attrs);
            t(o);
        }
        return !0;
    };
}
function wu(n, e, t) {
    const r = e.map.cellsInRect({
        left: 0,
        top: 0,
        right: n == "row" ? e.map.width : 1,
        bottom: n == "column" ? e.map.height : 1
    });
    for(let i = 0; i < r.length; i++){
        const o = e.table.nodeAt(r[i]);
        if (o && o.type !== t.header_cell) return !1;
    }
    return !0;
}
function la(n, e) {
    return e = e || {
        useDeprecatedLogic: !1
    }, e.useDeprecatedLogic ? tE(n) : function(t, r) {
        if (!Ie(t)) return !1;
        if (r) {
            const i = ue(t.schema), o = qe(t), s = t.tr, l = wu("row", o, i), a = wu("column", o, i), f = (n === "column" ? l : n === "row" ? a : !1) ? 1 : 0, u = n == "column" ? {
                left: 0,
                top: f,
                right: 1,
                bottom: o.map.height
            } : n == "row" ? {
                left: f,
                top: 0,
                right: o.map.width,
                bottom: 1
            } : o, h = n == "column" ? a ? i.cell : i.header_cell : n == "row" ? l ? i.cell : i.header_cell : i.cell;
            o.map.cellsInRect(u).forEach((p)=>{
                const d = p + o.tableStart, m = s.doc.nodeAt(d);
                m && s.setNodeMarkup(d, h, m.attrs);
            }), r(s);
        }
        return !0;
    };
}
la("row", {
    useDeprecatedLogic: !0
});
la("column", {
    useDeprecatedLogic: !0
});
var nT = la("cell", {
    useDeprecatedLogic: !0
});
function nE(n, e) {
    if (e < 0) {
        const t = n.nodeBefore;
        if (t) return n.pos - t.nodeSize;
        for(let r = n.index(-1) - 1, i = n.before(); r >= 0; r--){
            const o = n.node(-1).child(r), s = o.lastChild;
            if (s) return i - 1 - s.nodeSize;
            i -= o.nodeSize;
        }
    } else {
        if (n.index() < n.parent.childCount - 1) return n.pos + n.nodeAfter.nodeSize;
        const t = n.node(-1);
        for(let r = n.indexAfter(-1), i = n.after(); r < t.childCount; r++){
            const o = t.child(r);
            if (o.childCount) return i + 1;
            i += o.nodeSize;
        }
    }
    return null;
}
function rT(n) {
    return function(e, t) {
        if (!Ie(e)) return !1;
        const r = nE(mo(e), n);
        if (r == null) return !1;
        if (t) {
            const i = e.doc.resolve(r);
            t(e.tr.setSelection(z.between(i, wA(i))).scrollIntoView());
        }
        return !0;
    };
}
function iT(n, e) {
    const t = n.selection.$anchor;
    for(let r = t.depth; r > 0; r--)if (t.node(r).type.spec.tableRole == "table") return e && e(n.tr.delete(t.before(r), t.after(r)).scrollIntoView()), !0;
    return !1;
}
function oT({ allowTableNodeSelection: n = !1 } = {}) {
    return new kn({
        key: vt,
        // This piece of state is used to remember when a mouse-drag
        // cell-selection is happening, so that it can continue even as
        // transactions (which might move its anchor cell) come in.
        state: {
            init () {
                return null;
            },
            apply (e, t) {
                const r = e.getMeta(vt);
                if (r != null) return r == -1 ? null : r;
                if (t == null || !e.docChanged) return t;
                const { deleted: i, pos: o } = e.mapping.mapResult(t);
                return i ? null : o;
            }
        },
        props: {
            decorations: OA,
            handleDOMEvents: {
                mousedown: LA
            },
            createSelectionBetween (e) {
                return vt.getState(e.state) != null ? e.state.selection : null;
            },
            handleTripleClick: BA,
            handleKeyDown: $A,
            handlePaste: zA
        },
        appendTransaction (e, t, r) {
            return EA(r, MA(r, t), n);
        }
    });
}
;
}),
]);

//# sourceMappingURL=f6976_reactjs-tiptap-editor_lib_vendor-DqXtrdHd_289e93d8.js.map