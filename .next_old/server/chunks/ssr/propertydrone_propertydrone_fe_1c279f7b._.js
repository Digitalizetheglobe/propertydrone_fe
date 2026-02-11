module.exports=[2177,a=>{"use strict";let b,c;var d,e=a.i(37051);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u="default",v=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return v(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},w=[],x={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},y={},z=(a,b=u)=>{y[b]=v(y[b]||x,a),w.forEach(([a,c])=>{a===b&&c(y[b])})},A=a=>Object.keys(y).forEach(b=>z(a,b)),B=(a=u)=>b=>{z(b,a)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return B(e.toasterId||(d=e.id,Object.keys(y).find(a=>y[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},E=(a,b)=>D("blank")(a,b);E.error=D("error"),E.success=D("success"),E.loading=D("loading"),E.custom=D("custom"),E.dismiss=(a,b)=>{let c={type:3,toastId:a};b?B(b)(c):A(c)},E.dismissAll=a=>E.dismiss(void 0,a),E.remove=(a,b)=>{let c={type:4,toastId:a};b?B(b)(c):A(c)},E.removeAll=a=>E.remove(void 0,a),E.promise=(a,b,c)=>{let d=E.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?E.success(e,{id:d,...c,...null==c?void 0:c.success}):E.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?E.error(e,{id:d,...c,...null==c?void 0:c.error}):E.dismiss(d)}),a};var F=1e3,G=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,M=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,N=q`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,O=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${N} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,P=r("div")`
  position: absolute;
`,Q=r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,S=r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,T=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(S,null,b):b:"blank"===c?null:e.createElement(Q,null,e.createElement(L,{...d}),"loading"!==c&&e.createElement(P,null,"error"===c?e.createElement(J,{...d}):e.createElement(O,{...d})))},U=r("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${q(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement(T,{toast:a}),i=e.createElement(V,{...a.ariaProps},s(a.message,a));return e.createElement(U,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,j.p=void 0,n=d,o=void 0,p=void 0;var X=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},Y=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=u)=>{let[c,d]=(0,e.useState)(y[b]||x),f=(0,e.useRef)(y[b]);(0,e.useEffect)(()=>(f.current!==y[b]&&d(y[b]),w.push([b,d]),()=>{let a=w.findIndex(([a])=>a===b);a>-1&&w.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||C[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=F)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&E.dismiss(c.id);return}return setTimeout(()=>E.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(B(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(X,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Y:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(W,{toast:d,position:j}))}))};a.s(["Toaster",()=>Z,"default",()=>E,"toast",()=>E],2177)},5729,a=>{"use strict";let b=(0,a.i(23415).default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);a.s(["Share2",()=>b],5729)},42891,a=>{"use strict";let b=(0,a.i(23415).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);a.s(["Plus",()=>b],42891)},47825,a=>{"use strict";var b=a.i(52975),c=a.i(37051),d=a.i(32681),e=a.i(57751),f=a.i(89917),g=a.i(42891),h=a.i(5729),i=a.i(32301),j=a.i(92293),k=a.i(2177);a.s(["default",0,()=>{let[a,l]=(0,c.useState)([]),[m,n]=(0,c.useState)(!0);(0,f.useRouter)();let o=[{label:"Carpet Area",key:"carpetArea",format:a=>a?`${a} Sq. Feet`:"--"},{label:"Floor",key:"floor",format:a=>a||"--"},{label:"Furn/Unfurnished",key:"furnishingStatus",format:a=>a||"--"},{label:"Seat in Office",key:"seatInOffice",format:a=>a||"--"},{label:"No. of Cabin",key:"noOfCabin",format:a=>a||"--"},{label:"Building Structure",key:"buildingStructure",format:a=>a||"--"},{label:"Floor Plan",key:"floorPlan",format:a=>a||"--"},{label:"Car Park",key:"parking",format:a=>a||"--"},{label:"Availability Time",key:"possession",format:a=>a||"--"},{label:"Chargeable Area",key:"chargeableArea",format:a=>a||"--"},{label:"Efficiency",key:"efficiency",format:a=>a||"--"},{label:"Quoted Renting / Towards",key:"price",format:a=>a?`₹ ${Number(a).toLocaleString("en-IN")}`:"--"},{label:"Maintenance",key:"maintenance",format:a=>a?`₹ ${a}`:"--"},{label:"Taxes",key:"taxes",format:a=>a||"--"}],[p,q]=(0,c.useState)(o.map(a=>a.key)),r=async()=>{n(!0);try{let a="api.propertydronerealty.com/api/property-comparisons",b=localStorage.getItem("webuser"),c=null;if(b)try{c=JSON.parse(b).id}catch(a){console.error("Error parsing user for comparison fetch")}if(c)a+=`?webUserId=${c}`;else{l([]),n(!1);return}let d=await fetch(a);if(!d.ok)throw Error("Failed to fetch property comparisons");let e=(await d.json()).map(a=>{let b=a.propertyData;if("string"==typeof b)try{b=JSON.parse(b)}catch(a){console.error("Error parsing propertyData",a),b={}}return b.multipleImages&&Array.isArray(b.multipleImages)?b.images=b.multipleImages.map(a=>a.path||a):b.images||(b.images=[]),{...a,propertyData:b}});l(e)}catch(a){console.error("Error fetching compared properties:",a),k.default.error("Failed to load compared properties")}finally{n(!1)}};(0,c.useEffect)(()=>{r()},[]);let s=async a=>{try{if(!(await fetch(`api.propertydronerealty.com/api/property-comparisons/${a}`,{method:"DELETE"})).ok)throw Error("Failed to remove property");k.default.success("Property removed from comparison"),l(b=>b.filter(b=>b.id!==a))}catch(a){console.error(a),k.default.error("Failed to remove property")}},t=async()=>{let b=a.map(a=>fetch(`api.propertydronerealty.com/api/property-comparisons/${a.id}`,{method:"DELETE"}));await Promise.all(b),l([]),k.default.success("All properties cleared")};return m?(0,b.jsx)("div",{className:"flex justify-center items-center h-screen bg-gray-50",children:(0,b.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-black"})}):(0,b.jsxs)("div",{className:"min-h-screen bg-[#F8F9FB] p-4 md:p-8 font-sans",style:{fontFamily:"Lato, sans-serif"},children:[(0,b.jsx)(k.Toaster,{}),(0,b.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 gap-4 max-w-[1400px] mx-auto bg-[#F8F9FB]",children:[(0,b.jsx)("button",{onClick:t,className:"px-6 py-2 bg-white border border-[#172747] text-[#172747] font-semibold rounded hover:bg-gray-50 transition-colors uppercase text-sm tracking-wider shadow-sm",children:"Clear All"}),(0,b.jsxs)("div",{className:"flex items-center gap-4 text-sm font-medium",children:[(0,b.jsx)("span",{className:"text-gray-700 text-base",children:"Want Help Choosing Property ??"}),(0,b.jsx)("button",{onClick:()=>{window.open(`https://wa.me/918384848485?text=${encodeURIComponent("I need help choosing a property from the comparison list.")}`,"_blank")},className:"px-8 py-2.5 bg-[#172747] text-white rounded hover:bg-[#111e36] transition-colors text-sm font-medium tracking-wide shadow-md",children:"Contact Us"})]})]}),(0,b.jsx)("div",{className:"max-w-[1400px] mx-auto overflow-x-auto pb-8",children:(0,b.jsx)("div",{className:"min-w-max",children:(0,b.jsxs)("div",{className:"flex gap-6",children:[(0,b.jsxs)("div",{className:"w-[280px] flex-shrink-0 flex flex-col gap-6",children:[(0,b.jsx)(e.default,{href:"/luxe-properties",className:"block",children:(0,b.jsxs)("div",{className:"h-[420px] bg-[#EAEEF6] border-[3px] border-[#172747] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shadow-sm",children:[(0,b.jsx)("div",{className:"w-14 h-14 bg-[#172747] rounded-full flex items-center justify-center text-white mb-4",children:(0,b.jsx)(g.Plus,{size:28})}),(0,b.jsx)("span",{className:"text-[#172747] font-medium text-lg",children:"Add New Property"})]})}),(0,b.jsx)("div",{className:"space-y-0 bg-[#EAEEF6] rounded-xl py-4 overflow-hidden border border-gray-100 shadow-sm",children:o.map((a,c)=>{let d=p.includes(a.key);return(0,b.jsxs)("div",{onClick:()=>{var b;return b=a.key,void q(a=>a.includes(b)?a.filter(a=>a!==b):[...a,b])},className:"h-14 px-6 flex items-center gap-3 text-gray-600 font-medium text-[15px] cursor-pointer hover:bg-gray-200 transition-colors select-none",children:[(0,b.jsx)("div",{className:`w-5 h-5 rounded border-[2px] flex items-center justify-center transition-colors ${d?"bg-[#172747] border-[#172747]":"border-gray-400 bg-transparent"}`,children:d&&(0,b.jsx)(j.Check,{size:14,className:"text-white"})}),(0,b.jsx)("span",{className:d?"text-[#172747] font-semibold":"",children:a.label})]},c)})})]}),a.map(a=>{let c=a.propertyData||{};return(0,b.jsx)("div",{className:"w-[340px] flex-shrink-0 flex flex-col",children:(0,b.jsxs)("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full",children:[(0,b.jsxs)("div",{className:"p-5 pb-0 relative bg-white",children:[(0,b.jsxs)("div",{className:"flex justify-between items-start mb-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h3",{className:"font-bold text-lg text-[#172747] truncate w-48",title:c.propertyName,children:c.propertyName||"Property Name"}),(0,b.jsxs)("div",{className:"text-gray-500 text-xs flex items-center gap-1 mt-1",children:[(0,b.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-400",children:[(0,b.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,b.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),c.location||"Location"]})]}),(0,b.jsx)("button",{onClick:()=>s(a.id),className:"text-red-500 text-xs font-semibold hover:underline",children:"Remove"})]}),(0,b.jsx)("div",{className:"relative h-44 w-full mb-4 rounded-lg overflow-hidden bg-gray-100",children:(0,b.jsx)(d.default,{src:(()=>{let a=c.images?.[0];if(!a)return"/images/placeholder.jpg";if(a.startsWith("http"))return a;let b=a.replace(/\\/g,"/"),d=b.startsWith("/")?b:`/${b}`;return`api.propertydronerealty.com${d}`})(),alt:c.propertyName,fill:!0,className:"object-cover",onError:a=>{a.currentTarget.currentTarget.src="https://via.placeholder.com/300x200?text=No+Image"}})}),(0,b.jsxs)("div",{className:"mb-4",children:[(0,b.jsxs)("div",{className:"flex justify-between items-end mb-3",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"text-xl font-bold text-[#172747]",children:c.price?`₹ ${Number(c.price).toLocaleString("en-IN")}`:"Price TBD"}),(0,b.jsx)("div",{className:"text-[10px] text-[#172747] font-medium opacity-80",children:"rent/month"})]}),(0,b.jsxs)("div",{className:"flex gap-2",children:[(0,b.jsx)("button",{onClick:()=>{let a;return a=`Check out this property: ${c.propertyName} at ${c.location}. Price: ${c.price}`,void window.open(`https://wa.me/?text=${encodeURIComponent(a)}`,"_blank")},className:"w-8 h-8 rounded bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm",children:(0,b.jsx)(i.MessageCircle,{size:18,fill:"white",className:"stroke-none"})}),(0,b.jsx)("button",{className:"w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shadow-sm",children:(0,b.jsx)(h.Share2,{size:16})})]})]}),(0,b.jsx)("p",{className:"text-gray-500 text-[11px] leading-relaxed line-clamp-3 mb-2 h-[48px]",children:c.description||`Beautiful property at ${c.location}. Contact for more details.`}),(0,b.jsx)("button",{className:"text-[#172747] text-[11px] font-bold hover:underline",children:"Read More"})]})]}),(0,b.jsx)("div",{className:"space-y-0 bg-white border-t border-gray-100",children:o.map((a,d)=>p.includes(a.key)?(0,b.jsxs)("div",{className:"h-11 px-4 flex items-center justify-between text-[13px] border-b border-gray-100 last:border-0",children:[(0,b.jsx)("span",{className:"text-gray-500 font-medium",children:a.label}),(0,b.jsx)("span",{className:"text-[#172747] font-semibold",children:a.format(c[a.key])})]},d):null)})]})},a.id)}),(0,b.jsx)("div",{className:"w-[340px] flex-shrink-0",children:(0,b.jsx)(e.default,{href:"/luxe-properties",className:"block h-[420px]",children:(0,b.jsxs)("div",{className:"h-full bg-[#EAEEF6] border-[2px] border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:bg-gray-200 transition-colors",children:[(0,b.jsx)("div",{className:"w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 mb-3 shadow-sm",children:(0,b.jsx)(g.Plus,{size:24})}),(0,b.jsxs)("span",{className:"text-gray-500 text-sm text-center px-4 font-medium",children:["Choose from saved",(0,b.jsx)("br",{}),"properties"]})]})})})]})})})]})}])}];

//# sourceMappingURL=propertydrone_propertydrone_fe_1c279f7b._.js.map