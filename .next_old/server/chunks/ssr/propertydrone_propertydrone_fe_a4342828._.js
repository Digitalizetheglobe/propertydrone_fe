module.exports=[79680,a=>{"use strict";let b=(0,a.i(23415).default)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);a.s(["MapPin",()=>b],79680)},2177,a=>{"use strict";let b,c;var d,e=a.i(37051);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u="default",v=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return v(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},w=[],x={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},y={},z=(a,b=u)=>{y[b]=v(y[b]||x,a),w.forEach(([a,c])=>{a===b&&c(y[b])})},A=a=>Object.keys(y).forEach(b=>z(a,b)),B=(a=u)=>b=>{z(b,a)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return B(e.toasterId||(d=e.id,Object.keys(y).find(a=>y[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},E=(a,b)=>D("blank")(a,b);E.error=D("error"),E.success=D("success"),E.loading=D("loading"),E.custom=D("custom"),E.dismiss=(a,b)=>{let c={type:3,toastId:a};b?B(b)(c):A(c)},E.dismissAll=a=>E.dismiss(void 0,a),E.remove=(a,b)=>{let c={type:4,toastId:a};b?B(b)(c):A(c)},E.removeAll=a=>E.remove(void 0,a),E.promise=(a,b,c)=>{let d=E.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?E.success(e,{id:d,...c,...null==c?void 0:c.success}):E.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?E.error(e,{id:d,...c,...null==c?void 0:c.error}):E.dismiss(d)}),a};var F=1e3,G=q`
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
`,Z=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=u)=>{let[c,d]=(0,e.useState)(y[b]||x),f=(0,e.useRef)(y[b]);(0,e.useEffect)(()=>(f.current!==y[b]&&d(y[b]),w.push([b,d]),()=>{let a=w.findIndex(([a])=>a===b);a>-1&&w.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||C[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=F)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&E.dismiss(c.id);return}return setTimeout(()=>E.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(B(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(X,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Y:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(W,{toast:d,position:j}))}))};a.s(["Toaster",()=>Z,"default",()=>E,"toast",()=>E],2177)},37231,a=>{"use strict";let b=(0,a.i(23415).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);a.s(["default",()=>b])},72235,a=>{"use strict";var b=a.i(37231);a.s(["Search",()=>b.default])},65286,a=>{"use strict";let b=(0,a.i(23415).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);a.s(["Loader2",()=>b],65286)},51791,a=>{"use strict";let b=(0,a.i(23415).default)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);a.s(["CheckCircle",()=>b],51791)},30822,a=>{"use strict";var b=a.i(52975),c=a.i(37051),d=a.i(89917),e=a.i(57751),f=a.i(23415);let g=(0,f.default)("GitCompare",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);var h=a.i(72235),i=a.i(40454);let j=(0,f.default)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),k=(0,f.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);var l=a.i(79680),m=a.i(51791),n=a.i(65286),o=a.i(2177);function p(){let a=(0,d.useRouter)(),[f,p]=(0,c.useState)(null),[q,r]=(0,c.useState)(0),[s,t]=(0,c.useState)(0),[u,v]=(0,c.useState)(!0),w="api.propertydronerealty.com";(0,c.useEffect)(()=>{let b=localStorage.getItem("webuser");if(b)try{let a=JSON.parse(b);p(a),x(a.id)}catch(b){console.error("Error parsing user data",b),a.push("/signin")}else a.push("/signin");v(!1)},[a]);let x=async a=>{try{let b=await fetch(`${w}/api/saved-properties?webUserId=${a}`);if(b.ok){let c=(await b.json()).filter(b=>Number(b.webUserId)===Number(a));r(c.length)}let c=await fetch(`${w}/api/property-comparisons?webUserId=${a}`);if(c.ok){let b=(await c.json()).filter(b=>Number(b.webUserId)===Number(a));t(b.length)}}catch(a){console.error("Error fetching stats:",a)}},y=async()=>{if(!f||!confirm("Are you sure you want to clear all saved and compared properties?"))return;let a=o.toast.loading("Clearing data...");try{let[b,c]=await Promise.all([fetch(`${w}/api/saved-properties?webUserId=${f.id}`),fetch(`${w}/api/property-comparisons?webUserId=${f.id}`)]),d=await b.json(),e=await c.json(),g=d.filter(a=>Number(a.webUserId)===Number(f.id)),h=e.filter(a=>Number(a.webUserId)===Number(f.id)),i=[...g.map(a=>fetch(`${w}/api/saved-properties/${a.id}`,{method:"DELETE"})),...h.map(a=>fetch(`${w}/api/property-comparisons/${a.id}`,{method:"DELETE"}))];await Promise.all(i),r(0),t(0),o.toast.success("All cleared successfully",{id:a})}catch(b){console.error("Error clearing data:",b),o.toast.error("Failed to clear data",{id:a})}};return u?(0,b.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:(0,b.jsx)(n.Loader2,{className:"w-8 h-8 animate-spin text-[#172747]"})}):f?(0,b.jsxs)("div",{className:"min-h-screen bg-gray-50 flex font-lato",children:[(0,b.jsx)(o.Toaster,{position:"top-right"}),(0,b.jsx)("aside",{className:"w-64 bg-white border-r border-gray-200 hidden md:block sticky top-0 h-screen overflow-y-auto",children:(0,b.jsx)("div",{className:"p-6",children:(0,b.jsxs)("nav",{className:"space-y-6 mt-10",children:[(0,b.jsxs)(e.default,{href:"/dashboard/propertycomparison",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,b.jsx)(g,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"Compare Properties"})]}),(0,b.jsxs)(e.default,{href:"/our-properties-in-pune",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,b.jsx)(h.Search,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"Explore More"})]}),(0,b.jsxs)("div",{className:"flex items-center space-x-3 text-[#172747] font-bold border-r-4 border-[#172747] -mr-6 py-2",children:[(0,b.jsx)(i.User,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"Profile"})]}),(0,b.jsxs)(e.default,{href:"/dashboard/savedproperty",className:"flex items-center space-x-3 text-gray-600 hover:text-[#172747] transition-colors font-medium",children:[(0,b.jsx)(j,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"Saved Properties"})]}),(0,b.jsx)("div",{className:"pt-10",children:(0,b.jsxs)("button",{onClick:()=>{localStorage.removeItem("webuser"),o.toast.success("Logged out successfully"),setTimeout(()=>{a.push("/signin")},1e3)},className:"flex items-center space-x-3 text-red-500 hover:text-red-600 transition-colors font-medium w-full text-left",children:[(0,b.jsx)(k,{className:"w-5 h-5"}),(0,b.jsx)("span",{children:"Logout"})]})})]})})}),(0,b.jsxs)("main",{className:"flex-1 p-6 md:p-10",children:[(0,b.jsx)("h1",{className:"text-3xl font-bold text-[#172747] mb-8",children:"My Profile"}),(0,b.jsx)("div",{className:"bg-white rounded-xl shadow-sm border border-gray-100 p-8",children:(0,b.jsxs)("div",{className:"flex flex-col md:flex-row gap-10",children:[(0,b.jsxs)("div",{className:"md:w-1/4 flex flex-col items-center  md:border-r md:border-gray-100 md:pr-10",children:[(0,b.jsx)("div",{className:"w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4",children:(0,b.jsx)(i.User,{className:"w-16 h-16 text-gray-400"})}),(0,b.jsx)("h2",{className:"text-xl font-bold text-[#172747]",children:f.name}),(0,b.jsx)("p",{className:"text-gray-500 mb-6",children:f.role||"User"}),(0,b.jsxs)("div",{className:"flex items-center text-gray-500 gap-2 w-full justify-center md:justify-start pl-4",children:[(0,b.jsx)(l.MapPin,{className:"w-4 h-4"}),(0,b.jsx)("span",{children:f.city||"Pune"})]})]}),(0,b.jsxs)("div",{className:"md:w-3/4 flex flex-col gap-8",children:[(0,b.jsxs)("div",{className:"bg-gray-100 rounded-lg p-6",children:[(0,b.jsx)("h3",{className:"font-bold text-[#172747] mb-4",children:"Account Information"}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Full Name"}),(0,b.jsx)("p",{className:"text-gray-800 font-medium",children:f.name})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Mobile Number"}),(0,b.jsx)("p",{className:"text-gray-800 font-medium",children:f.number})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Account Status"}),(0,b.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[(0,b.jsx)("div",{className:"w-2 h-2 rounded-full bg-green-500"}),(0,b.jsx)("span",{className:"text-gray-800 font-medium",children:"Active"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"text-xs text-gray-500 uppercase font-semibold",children:"Verification"}),(0,b.jsxs)("div",{className:"flex items-center gap-2 mt-1",children:[(0,b.jsx)(m.CheckCircle,{className:"w-4 h-4 text-blue-500"}),(0,b.jsx)("span",{className:"text-gray-800 font-medium",children:"Verified"})]})]})]})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[(0,b.jsxs)("div",{className:"border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center",children:[(0,b.jsx)("h3",{className:"font-bold text-[#172747] mb-2",children:"Saved Properties"}),(0,b.jsx)("div",{className:"text-3xl font-bold text-[#172747] mb-2",children:q}),(0,b.jsx)("p",{className:"text-sm text-gray-500 mb-4",children:"Properties saved to your list"}),(0,b.jsx)(e.default,{href:"/dashboard/savedproperty",className:"text-blue-600 text-sm font-medium hover:underline",children:"View all saved properties"})]}),(0,b.jsxs)("div",{className:"border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center",children:[(0,b.jsx)("h3",{className:"font-bold text-[#172747] mb-2",children:"Compare Properties"}),(0,b.jsx)("div",{className:"text-3xl font-bold text-[#172747] mb-2",children:s}),(0,b.jsx)("p",{className:"text-sm text-gray-500 mb-4",children:"Properties in your comparison list"}),(0,b.jsx)(e.default,{href:"/dashboard/propertycomparison",className:"text-blue-600 text-sm font-medium hover:underline",children:"View comparison"})]})]}),(0,b.jsx)("div",{className:"mt-auto",children:(0,b.jsx)("button",{onClick:y,className:"bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-6 py-3 rounded-[4px] shadow-sm font-medium transition-colors",children:"Clear All Saved & Compared"})})]})]})})]})]}):null}a.s(["default",()=>p],30822)}];

//# sourceMappingURL=propertydrone_propertydrone_fe_a4342828._.js.map