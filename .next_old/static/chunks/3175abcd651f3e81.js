(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,87748,e=>{"use strict";let t=(0,e.i(17479).default)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>t],87748)},17730,e=>{"use strict";let t,s;var r,a=e.i(38258);let i={data:""},o=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,l=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,d=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?d(o,i):i+"{"+d(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=d(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=d.p?d.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},c={},m=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+m(e[s]);return t}return e};function p(e){let t,s,r=this||{},a=e.call?e(r.p):e;return((e,t,s,r,a)=>{var i;let p=m(e),u=c[p]||(c[p]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(p));if(!c[u]){let t=p!==e?e:(e=>{let t,s,r=[{}];for(;t=o.exec(e.replace(l,""));)t[4]?r.shift():t[3]?(s=t[3].replace(n," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(n," ").trim();return r[0]})(e);c[u]=d(a?{["@keyframes "+u]:t}:t,s?"":"."+u)}let f=s&&c.g?c.g:null;return s&&(c.g=c[u]),i=c[u],f?t.data=t.data.replace(f,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),u})(a.unshift?a.raw?(t=[].slice.call(arguments,1),s=r.p,a.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":d(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||i})(r.target),r.g,r.o,r.k)}p.bind({g:1});let u,f,h,x=p.bind({k:1});function y(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let l=Object.assign({},i),n=l.className||a.className;s.p=Object.assign({theme:f&&f()},l),s.o=/ *go\d+/.test(n),l.className=p.apply(s,r)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),h&&d[0]&&h(l),u(d,l)}return t?t(a):a}}var g=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),v=()=>{if(void 0===s&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");s=!e||e.matches}return s},j="default",w=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},N=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},E={},C=(e,t=j)=>{E[t]=w(E[t]||k,e),N.forEach(([e,s])=>{e===t&&s(E[t])})},$=e=>Object.keys(E).forEach(t=>C(e,t)),P=(e=j)=>t=>{C(t,e)},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=e=>(t,s)=>{let r,a=((e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||b()}))(t,e,s);return P(a.toasterId||(r=a.id,Object.keys(E).find(e=>E[e].toasts.some(e=>e.id===r))))({type:2,toast:a}),a.id},S=(e,t)=>I("blank")(e,t);S.error=I("error"),S.success=I("success"),S.loading=I("loading"),S.custom=I("custom"),S.dismiss=(e,t)=>{let s={type:3,toastId:e};t?P(t)(s):$(s)},S.dismissAll=e=>S.dismiss(void 0,e),S.remove=(e,t)=>{let s={type:4,toastId:e};t?P(t)(s):$(s)},S.removeAll=e=>S.remove(void 0,e),S.promise=(e,t,s)=>{let r=S.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?g(t.success,e):void 0;return a?S.success(a,{id:r,...s,...null==s?void 0:s.success}):S.dismiss(r),e}).catch(e=>{let a=t.error?g(t.error,e):void 0;a?S.error(a,{id:r,...s,...null==s?void 0:s.error}):S.dismiss(r)}),e};var M=1e3,O=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,D=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,L=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${O} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${D} 0.15s ease-out forwards;
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
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,T=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${T} 1s linear infinite;
`,F=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,H=x`
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
}`,_=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${F} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${H} 0.2s ease-out forwards;
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
`,R=y("div")`
  position: absolute;
`,V=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,B=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${B} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?a.createElement(q,null,t):t:"blank"===s?null:a.createElement(V,null,a.createElement(U,{...r}),"loading"!==s&&a.createElement(R,null,"error"===s?a.createElement(L,{...r}):a.createElement(_,{...r})))},Z=y("div")`
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
`,G=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,J=a.memo(({toast:e,position:t,style:s,children:r})=>{let i=e.height?((e,t)=>{let s=e.includes("top")?1:-1,[r,a]=v()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*s}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*s}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${x(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},o=a.createElement(K,{toast:e}),l=a.createElement(G,{...e.ariaProps},g(e.message,e));return a.createElement(Z,{className:e.className,style:{...i,...s,...e.style}},"function"==typeof r?r({icon:o,message:l}):a.createElement(a.Fragment,null,o,l))});r=a.createElement,d.p=void 0,u=r,f=void 0,h=void 0;var Y=({id:e,className:t,style:s,onHeightUpdate:r,children:i})=>{let o=a.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return a.createElement("div",{ref:o,className:t,style:s},i)},Q=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,W=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:i,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=((e,t="default")=>{let{toasts:s,pausedAt:r}=((e={},t=j)=>{let[s,r]=(0,a.useState)(E[t]||k),i=(0,a.useRef)(E[t]);(0,a.useEffect)(()=>(i.current!==E[t]&&r(E[t]),N.push([t,r]),()=>{let e=N.findIndex(([e])=>e===t);e>-1&&N.splice(e,1)}),[t]);let o=s.toasts.map(t=>{var s,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...s,toasts:o}})(e,t),i=(0,a.useRef)(new Map).current,o=(0,a.useCallback)((e,t=M)=>{if(i.has(e))return;let s=setTimeout(()=>{i.delete(e),l({type:4,toastId:e})},t);i.set(e,s)},[]);(0,a.useEffect)(()=>{if(r)return;let e=Date.now(),a=s.map(s=>{if(s.duration===1/0)return;let r=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(r<0){s.visible&&S.dismiss(s.id);return}return setTimeout(()=>S.dismiss(s.id,t),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[s,r,t]);let l=(0,a.useCallback)(P(t),[t]),n=(0,a.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,a.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,a.useCallback)(()=>{r&&l({type:6,time:Date.now()})},[r,l]),m=(0,a.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=t||{},o=s.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+a,0)},[s]);return(0,a.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=i.get(e.id);t&&(clearTimeout(t),i.delete(e.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:m}}})(s,o);return a.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let o,l,n=s.position||t,d=c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}),m=(o=n.includes("top"),l=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:v()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${d*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...l});return a.createElement(Y,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?Q:"",style:m},"custom"===s.type?g(s.message,s):i?i(s):a.createElement(J,{toast:s,position:n}))}))};e.s(["Toaster",()=>W,"default",()=>S,"toast",()=>S],17730)},96336,e=>{"use strict";let t=(0,e.i(17479).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["default",()=>t])},66850,e=>{"use strict";var t=e.i(96336);e.s(["Search",()=>t.default])},52614,e=>{"use strict";let t=(0,e.i(17479).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],52614)},11237,e=>{"use strict";let t=(0,e.i(17479).default)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);e.s(["CheckCircle",()=>t],11237)},26649,e=>{"use strict";var t=e.i(3463),s=e.i(38258),r=e.i(21899),a=e.i(33412),i=e.i(17479);let o=(0,i.default)("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);var l=e.i(66850),n=e.i(50414);let d=(0,i.default)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),c=(0,i.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);var m=e.i(87748),p=e.i(11237),u=e.i(52614),f=e.i(17730);function h(){let e=(0,r.useRouter)(),[i,h]=(0,s.useState)(null),[x,y]=(0,s.useState)(0),[g,b]=(0,s.useState)(0),[v,j]=(0,s.useState)(!0),w="api.propertydronerealty.com";(0,s.useEffect)(()=>{let t=localStorage.getItem("webuser");if(t)try{let e=JSON.parse(t);h(e),N(e.id)}catch(t){console.error("Error parsing user data",t),e.push("/signin")}else e.push("/signin");j(!1)},[e]);let N=async e=>{try{let t=await fetch(`${w}/api/saved-properties?webUserId=${e}`);if(t.ok){let s=(await t.json()).filter(t=>Number(t.webUserId)===Number(e));y(s.length)}let s=await fetch(`${w}/api/property-comparisons?webUserId=${e}`);if(s.ok){let t=(await s.json()).filter(t=>Number(t.webUserId)===Number(e));b(t.length)}}catch(e){console.error("Error fetching stats:",e)}},k=async()=>{if(!i||!confirm("Are you sure you want to clear all saved and compared properties?"))return;let e=f.toast.loading("Clearing data...");try{let[t,s]=await Promise.all([fetch(`${w}/api/saved-properties?webUserId=${i.id}`),fetch(`${w}/api/property-comparisons?webUserId=${i.id}`)]),r=await t.json(),a=await s.json(),o=r.filter(e=>Number(e.webUserId)===Number(i.id)),l=a.filter(e=>Number(e.webUserId)===Number(i.id)),n=[...o.map(e=>fetch(`${w}/api/saved-properties/${e.id}`,{method:"DELETE"})),...l.map(e=>fetch(`${w}/api/property-comparisons/${e.id}`,{method:"DELETE"}))];await Promise.all(n),y(0),b(0),f.toast.success("All cleared successfully",{id:e})}catch(t){console.error("Error clearing data:",t),f.toast.error("Failed to clear data",{id:e})}};return v?(0,t.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,t.jsx)(u.Loader2,{className:"w-8 h-8 animate-spin text-[#172747]"})}):i?(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50 flex font-lato",children:[(0,t.jsx)(f.Toaster,{position:"top-right"}),(0,t.jsx)("aside",{className:"w-64 bg-white border-r border-gray-200 hidden md:block sticky top-0 h-screen overflow-y-auto",children:(0,t.jsx)("div",{className:"p-6",children:(0,t.jsxs)("nav",{className:"space-y-6 mt-10",children:[(0,t.jsxs)(a.default,{href:"/dashboard/propertycomparison",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,t.jsx)(o,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Compare Properties"})]}),(0,t.jsxs)(a.default,{href:"/our-properties-in-pune",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,t.jsx)(l.Search,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Explore More"})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-3 text-[#172747] font-bold border-r-4 border-[#172747] -mr-6 py-2",children:[(0,t.jsx)(n.User,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Profile"})]}),(0,t.jsxs)(a.default,{href:"/dashboard/savedproperty",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,t.jsx)(d,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Saved Properties"})]}),(0,t.jsx)("div",{className:"pt-10",children:(0,t.jsxs)("button",{onClick:()=>{localStorage.removeItem("webuser"),f.toast.success("Logged out successfully"),setTimeout(()=>{e.push("/signin")},1e3)},className:"flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors font-medium w-full text-left",children:[(0,t.jsx)(c,{className:"w-5 h-5"}),(0,t.jsx)("span",{children:"Logout"})]})})]})})}),(0,t.jsxs)("main",{className:"flex-1 p-6 md:p-10",children:[(0,t.jsx)("h1",{className:"text-3xl font-bold text-[#172747] mb-8",children:"My Profile"}),(0,t.jsx)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8",children:(0,t.jsxs)("div",{className:"flex flex-col md:flex-row gap-10",children:[(0,t.jsxs)("div",{className:"md:w-1/4 flex flex-col items-center  md:border-r md:border-gray-100 md:pr-10",children:[(0,t.jsx)("div",{className:"w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:(0,t.jsx)(n.User,{className:"w-16 h-16 text-gray-400"})}),(0,t.jsx)("h2",{className:"text-xl font-bold text-[#172747]",children:i.name}),(0,t.jsx)("p",{className:"text-gray-500 mb-6",children:i.role||"User"}),(0,t.jsxs)("div",{className:"flex items-center text-gray-500 gap-2 w-full justify-center md:justify-start pl-4",children:[(0,t.jsx)(m.MapPin,{className:"w-4 h-4"}),(0,t.jsx)("span",{children:i.city||"Pune"})]})]}),(0,t.jsxs)("div",{className:"md:w-3/4 flex flex-col gap-8",children:[(0,t.jsxs)("div",{className:"bg-gray-100 rounded-lg p-6",children:[(0,t.jsx)("h3",{className:"font-bold text-[#172747] mb-4",children:"Account Information"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Full Name"}),(0,t.jsx)("p",{className:"text-gray-800 font-medium",children:i.name})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Mobile Number"}),(0,t.jsx)("p",{className:"text-gray-800 font-medium",children:i.number})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Account Status"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[(0,t.jsx)("div",{className:"w-2 h-2 rounded-full bg-green-500"}),(0,t.jsx)("span",{className:"text-gray-800 font-medium",children:"Active"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Verification"}),(0,t.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[(0,t.jsx)(p.CheckCircle,{className:"w-4 h-4 text-blue-500"}),(0,t.jsx)("span",{className:"text-gray-800 font-medium",children:"Verified"})]})]})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,t.jsxs)("div",{className:"border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center",children:[(0,t.jsx)("h3",{className:"font-bold text-[#172747] mb-2",children:"Saved Properties"}),(0,t.jsx)("div",{className:"text-3xl font-bold text-[#172747] mb-2",children:x}),(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-4",children:"Properties saved to your list"}),(0,t.jsx)(a.default,{href:"/dashboard/savedproperty",className:"text-blue-600 text-sm font-medium hover:underline",children:"View all saved properties"})]}),(0,t.jsxs)("div",{className:"border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center",children:[(0,t.jsx)("h3",{className:"font-bold text-[#172747] mb-2",children:"Compare Properties"}),(0,t.jsx)("div",{className:"text-3xl font-bold text-[#172747] mb-2",children:g}),(0,t.jsx)("p",{className:"text-sm text-gray-500 mb-4",children:"Properties in your comparison list"}),(0,t.jsx)(a.default,{href:"/dashboard/propertycomparison",className:"text-blue-600 text-sm font-medium hover:underline",children:"View comparison"})]})]}),(0,t.jsx)("div",{className:"mt-auto",children:(0,t.jsx)("button",{onClick:k,className:"bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-[4px] shadow-sm font-medium transition-colors",children:"Clear All Saved & Compared"})})]})]})})]})]}):null}e.s(["default",()=>h],26649)}]);