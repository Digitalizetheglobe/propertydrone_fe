(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,17730,e=>{"use strict";let t,r;var a,s=e.i(38258);let o={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,c=(e,t)=>{let r="",a="",s="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?c(i,o):o+"{"+c(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=c(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=c.p?c.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+a},d={},p=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+p(e[r]);return t}return e};function m(e){let t,r,a=this||{},s=e.call?e(a.p):e;return((e,t,r,a,s)=>{var o;let m=p(e),u=d[m]||(d[m]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(m));if(!d[u]){let t=m!==e?e:(e=>{let t,r,a=[{}];for(;t=i.exec(e.replace(l,""));)t[4]?a.shift():t[3]?(r=t[3].replace(n," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(n," ").trim();return a[0]})(e);d[u]=c(s?{["@keyframes "+u]:t}:t,r?"":"."+u)}let f=r&&d.g?d.g:null;return r&&(d.g=d[u]),o=d[u],f?t.data=t.data.replace(f,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),u})(s.unshift?s.raw?(t=[].slice.call(arguments,1),r=a.p,s.reduce((e,a,s)=>{let o=t[s];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"")):s.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):s,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||o})(a.target),a.g,a.o,a.k)}m.bind({g:1});let u,f,h,x=m.bind({k:1});function y(e,t){let r=this||{};return function(){let a=arguments;function s(o,i){let l=Object.assign({},o),n=l.className||s.className;r.p=Object.assign({theme:f&&f()},l),r.o=/ *go\d+/.test(n),l.className=m.apply(r,a)+(n?" "+n:""),t&&(l.ref=i);let c=e;return e[0]&&(c=l.as||e,delete l.as),h&&c[0]&&h(l),u(c,l)}return t?t(s):s}}var b=(e,t)=>"function"==typeof e?e(t):e,g=(t=0,()=>(++t).toString()),v=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w="default",j=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return j(e,{type:+!!e.toasts.find(e=>e.id===a.id),toast:a});case 3:let{toastId:s}=t;return{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},N=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},C=(e,t=w)=>{E[t]=j(E[t]||k,e),N.forEach(([e,r])=>{e===t&&r(E[t])})},$=e=>Object.keys(E).forEach(t=>C(e,t)),A=(e=w)=>t=>{C(t,e)},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=e=>(t,r)=>{let a,s=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||g()}))(t,e,r);return A(s.toasterId||(a=s.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===a))))({type:2,toast:s}),s.id},I=(e,t)=>F("blank")(e,t);I.error=F("error"),I.success=F("success"),I.loading=F("loading"),I.custom=F("custom"),I.dismiss=(e,t)=>{let r={type:3,toastId:e};t?A(t)(r):$(r)},I.dismissAll=e=>I.dismiss(void 0,e),I.remove=(e,t)=>{let r={type:4,toastId:e};t?A(t)(r):$(r)},I.removeAll=e=>I.remove(void 0,e),I.promise=(e,t,r)=>{let a=I.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let s=t.success?b(t.success,e):void 0;return s?I.success(s,{id:a,...r,...null==r?void 0:r.success}):I.dismiss(a),e}).catch(e=>{let s=t.error?b(t.error,e):void 0;s?I.error(s,{id:a,...r,...null==r?void 0:r.error}):I.dismiss(a)}),e};var D=1e3,S=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,O=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,z=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${S} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,R=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=x`
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
}`,U=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,_=y("div")`
  position: absolute;
`,H=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?s.createElement(W,null,t):t:"blank"===r?null:s.createElement(H,null,s.createElement(M,{...a}),"loading"!==r&&s.createElement(_,null,"error"===r?s.createElement(z,{...a}):s.createElement(U,{...a})))},K=y("div")`
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
`,Q=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=s.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,s]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${x(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(J,{toast:e}),l=s.createElement(Q,{...e.ariaProps},b(e.message,e));return s.createElement(K,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:l}):s.createElement(s.Fragment,null,i,l))});a=s.createElement,c.p=void 0,u=a,f=void 0,h=void 0;var Z=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=s.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return s.createElement("div",{ref:i,className:t,style:r},o)},G=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,V=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,toasterId:i,containerStyle:l,containerClassName:n})=>{let{toasts:c,handlers:d}=((e,t="default")=>{let{toasts:r,pausedAt:a}=((e={},t=w)=>{let[r,a]=(0,s.useState)(E[t]||k),o=(0,s.useRef)(E[t]);(0,s.useEffect)(()=>(o.current!==E[t]&&a(E[t]),N.push([t,a]),()=>{let e=N.findIndex(([e])=>e===t);e>-1&&N.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,a,s;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...r,toasts:i}})(e,t),o=(0,s.useRef)(new Map).current,i=(0,s.useCallback)((e,t=D)=>{if(o.has(e))return;let r=setTimeout(()=>{o.delete(e),l({type:4,toastId:e})},t);o.set(e,r)},[]);(0,s.useEffect)(()=>{if(a)return;let e=Date.now(),s=r.map(r=>{if(r.duration===1/0)return;let a=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(a<0){r.visible&&I.dismiss(r.id);return}return setTimeout(()=>I.dismiss(r.id,t),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[r,a,t]);let l=(0,s.useCallback)(A(t),[t]),n=(0,s.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),c=(0,s.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),d=(0,s.useCallback)(()=>{a&&l({type:6,time:Date.now()})},[a,l]),p=(0,s.useCallback)((e,t)=>{let{reverseOrder:a=!1,gutter:s=8,defaultPosition:o}=t||{},i=r.filter(t=>(t.position||o)===(e.position||o)&&t.height),l=i.findIndex(t=>t.id===e.id),n=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+s,0)},[r]);return(0,s.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=o.get(e.id);t&&(clearTimeout(t),o.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:n,endPause:d,calculateOffset:p}}})(r,i);return s.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let i,l,n=r.position||t,c=d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}),p=(i=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...l});return s.createElement(Z,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?G:"",style:p},"custom"===r.type?b(r.message,r):o?o(r):s.createElement(Y,{toast:r,position:n}))}))};e.s(["Toaster",()=>V,"default",()=>I,"toast",()=>I],17730)},54446,e=>{"use strict";let t=(0,e.i(17479).default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);e.s(["Share2",()=>t],54446)},34627,e=>{"use strict";let t=(0,e.i(17479).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],34627)},50281,e=>{"use strict";var t=e.i(3463),r=e.i(38258),a=e.i(48258),s=e.i(33412),o=e.i(21899),i=e.i(34627),l=e.i(54446),n=e.i(83148),c=e.i(68588),d=e.i(17730);e.s(["default",0,()=>{let[e,p]=(0,r.useState)([]),[m,u]=(0,r.useState)(!0);(0,o.useRouter)();let f=[{label:"Carpet Area",key:"carpetArea",format:e=>e?`${e} Sq. Feet`:"--"},{label:"Floor",key:"floor",format:e=>e||"--"},{label:"Furn/Unfurnished",key:"furnishingStatus",format:e=>e||"--"},{label:"Seat in Office",key:"seatInOffice",format:e=>e||"--"},{label:"No. of Cabin",key:"noOfCabin",format:e=>e||"--"},{label:"Building Structure",key:"buildingStructure",format:e=>e||"--"},{label:"Floor Plan",key:"floorPlan",format:e=>e||"--"},{label:"Car Park",key:"parking",format:e=>e||"--"},{label:"Availability Time",key:"possession",format:e=>e||"--"},{label:"Chargeable Area",key:"chargeableArea",format:e=>e||"--"},{label:"Efficiency",key:"efficiency",format:e=>e||"--"},{label:"Quoted Renting / Towards",key:"price",format:e=>e?`₹ ${Number(e).toLocaleString("en-IN")}`:"--"},{label:"Maintenance",key:"maintenance",format:e=>e?`₹ ${e}`:"--"},{label:"Taxes",key:"taxes",format:e=>e||"--"}],[h,x]=(0,r.useState)(f.map(e=>e.key)),y=async()=>{u(!0);try{let e="api.propertydronerealty.com/api/property-comparisons",t=localStorage.getItem("webuser"),r=null;if(t)try{r=JSON.parse(t).id}catch(e){console.error("Error parsing user for comparison fetch")}if(r)e+=`?webUserId=${r}`;else{p([]),u(!1);return}let a=await fetch(e);if(!a.ok)throw Error("Failed to fetch property comparisons");let s=(await a.json()).map(e=>{let t=e.propertyData;if("string"==typeof t)try{t=JSON.parse(t)}catch(e){console.error("Error parsing propertyData",e),t={}}return t.multipleImages&&Array.isArray(t.multipleImages)?t.images=t.multipleImages.map(e=>e.path||e):t.images||(t.images=[]),{...e,propertyData:t}});p(s)}catch(e){console.error("Error fetching compared properties:",e),d.default.error("Failed to load compared properties")}finally{u(!1)}};(0,r.useEffect)(()=>{y()},[]);let b=async e=>{try{if(!(await fetch(`api.propertydronerealty.com/api/property-comparisons/${e}`,{method:"DELETE"})).ok)throw Error("Failed to remove property");d.default.success("Property removed from comparison"),p(t=>t.filter(t=>t.id!==e))}catch(e){console.error(e),d.default.error("Failed to remove property")}},g=async()=>{let t=e.map(e=>fetch(`api.propertydronerealty.com/api/property-comparisons/${e.id}`,{method:"DELETE"}));await Promise.all(t),p([]),d.default.success("All properties cleared")};return m?(0,t.jsx)("div",{className:"flex justify-center items-center h-screen bg-gray-50",children:(0,t.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-black"})}):(0,t.jsxs)("div",{className:"min-h-screen bg-[#F8F9FB] p-4 md:p-8 font-sans",style:{fontFamily:"Lato, sans-serif"},children:[(0,t.jsx)(d.Toaster,{}),(0,t.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-center mb-8 gap-4 max-w-[1400px] mx-auto bg-[#F8F9FB]",children:[(0,t.jsx)("button",{onClick:g,className:"px-6 py-2 bg-white border border-[#172747] text-[#172747] font-semibold rounded hover:bg-gray-50 transition-colors uppercase text-sm tracking-wider shadow-sm",children:"Clear All"}),(0,t.jsxs)("div",{className:"flex items-center gap-4 text-sm font-medium",children:[(0,t.jsx)("span",{className:"text-gray-700 text-base",children:"Want Help Choosing Property ??"}),(0,t.jsx)("button",{onClick:()=>{window.open(`https://wa.me/918384848485?text=${encodeURIComponent("I need help choosing a property from the comparison list.")}`,"_blank")},className:"px-8 py-2.5 bg-[#172747] text-white rounded hover:bg-[#111e36] transition-colors text-sm font-medium tracking-wide shadow-md",children:"Contact Us"})]})]}),(0,t.jsx)("div",{className:"max-w-[1400px] mx-auto overflow-x-auto pb-8",children:(0,t.jsx)("div",{className:"min-w-max",children:(0,t.jsxs)("div",{className:"flex gap-6",children:[(0,t.jsxs)("div",{className:"w-[280px] flex-shrink-0 flex flex-col gap-6",children:[(0,t.jsx)(s.default,{href:"/luxe-properties",className:"block",children:(0,t.jsxs)("div",{className:"h-[420px] bg-[#EAEEF6] border-[3px] border-[#172747] rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shadow-sm",children:[(0,t.jsx)("div",{className:"w-14 h-14 bg-[#172747] rounded-full flex items-center justify-center text-white mb-4",children:(0,t.jsx)(i.Plus,{size:28})}),(0,t.jsx)("span",{className:"text-[#172747] font-medium text-lg",children:"Add New Property"})]})}),(0,t.jsx)("div",{className:"space-y-0 bg-[#EAEEF6] rounded-xl py-4 overflow-hidden border border-gray-100 shadow-sm",children:f.map((e,r)=>{let a=h.includes(e.key);return(0,t.jsxs)("div",{onClick:()=>{var t;return t=e.key,void x(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t])},className:"h-14 px-6 flex items-center gap-3 text-gray-600 font-medium text-[15px] cursor-pointer hover:bg-gray-200 transition-colors select-none",children:[(0,t.jsx)("div",{className:`w-5 h-5 rounded border-[2px] flex items-center justify-center transition-colors ${a?"bg-[#172747] border-[#172747]":"border-gray-400 bg-transparent"}`,children:a&&(0,t.jsx)(c.Check,{size:14,className:"text-white"})}),(0,t.jsx)("span",{className:a?"text-[#172747] font-semibold":"",children:e.label})]},r)})})]}),e.map(e=>{let r=e.propertyData||{};return(0,t.jsx)("div",{className:"w-[340px] flex-shrink-0 flex flex-col",children:(0,t.jsxs)("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full",children:[(0,t.jsxs)("div",{className:"p-5 pb-0 relative bg-white",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start mb-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"font-bold text-lg text-[#172747] truncate w-48",title:r.propertyName,children:r.propertyName||"Property Name"}),(0,t.jsxs)("div",{className:"text-gray-500 text-xs flex items-center gap-1 mt-1",children:[(0,t.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-gray-400",children:[(0,t.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,t.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),r.location||"Location"]})]}),(0,t.jsx)("button",{onClick:()=>b(e.id),className:"text-red-500 text-xs font-semibold hover:underline",children:"Remove"})]}),(0,t.jsx)("div",{className:"relative h-44 w-full mb-4 rounded-lg overflow-hidden bg-gray-100",children:(0,t.jsx)(a.default,{src:(()=>{let e=r.images?.[0];if(!e)return"/images/placeholder.jpg";if(e.startsWith("http"))return e;let t=e.replace(/\\/g,"/"),a=t.startsWith("/")?t:`/${t}`;return`api.propertydronerealty.com${a}`})(),alt:r.propertyName,fill:!0,className:"object-cover",onError:e=>{e.currentTarget.currentTarget.src="https://via.placeholder.com/300x200?text=No+Image"}})}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsxs)("div",{className:"flex justify-between items-end mb-3",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-xl font-bold text-[#172747]",children:r.price?`₹ ${Number(r.price).toLocaleString("en-IN")}`:"Price TBD"}),(0,t.jsx)("div",{className:"text-[10px] text-[#172747] font-medium opacity-80",children:"rent/month"})]}),(0,t.jsxs)("div",{className:"flex gap-2",children:[(0,t.jsx)("button",{onClick:()=>{let e;return e=`Check out this property: ${r.propertyName} at ${r.location}. Price: ${r.price}`,void window.open(`https://wa.me/?text=${encodeURIComponent(e)}`,"_blank")},className:"w-8 h-8 rounded bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm",children:(0,t.jsx)(n.MessageCircle,{size:18,fill:"white",className:"stroke-none"})}),(0,t.jsx)("button",{className:"w-8 h-8 rounded border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shadow-sm",children:(0,t.jsx)(l.Share2,{size:16})})]})]}),(0,t.jsx)("p",{className:"text-gray-500 text-[11px] leading-relaxed line-clamp-3 mb-2 h-[48px]",children:r.description||`Beautiful property at ${r.location}. Contact for more details.`}),(0,t.jsx)("button",{className:"text-[#172747] text-[11px] font-bold hover:underline",children:"Read More"})]})]}),(0,t.jsx)("div",{className:"space-y-0 bg-white border-t border-gray-100",children:f.map((e,a)=>h.includes(e.key)?(0,t.jsxs)("div",{className:"h-11 px-4 flex items-center justify-between text-[13px] border-b border-gray-100 last:border-0",children:[(0,t.jsx)("span",{className:"text-gray-500 font-medium",children:e.label}),(0,t.jsx)("span",{className:"text-[#172747] font-semibold",children:e.format(r[e.key])})]},a):null)})]})},e.id)}),(0,t.jsx)("div",{className:"w-[340px] flex-shrink-0",children:(0,t.jsx)(s.default,{href:"/luxe-properties",className:"block h-[420px]",children:(0,t.jsxs)("div",{className:"h-full bg-[#EAEEF6] border-[2px] border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center hover:bg-gray-200 transition-colors",children:[(0,t.jsx)("div",{className:"w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-400 mb-3 shadow-sm",children:(0,t.jsx)(i.Plus,{size:24})}),(0,t.jsxs)("span",{className:"text-gray-500 text-sm text-center px-4 font-medium",children:["Choose from saved",(0,t.jsx)("br",{}),"properties"]})]})})})]})})})]})}])}]);