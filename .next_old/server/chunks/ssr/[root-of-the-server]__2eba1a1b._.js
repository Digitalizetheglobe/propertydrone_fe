module.exports=[24361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},14747,(a,b,c)=>{b.exports=a.x("path",()=>require("path"))},2177,a=>{"use strict";let b,c;var d,e=a.i(37051);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u="default",v=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return v(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},w=[],x={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},y={},z=(a,b=u)=>{y[b]=v(y[b]||x,a),w.forEach(([a,c])=>{a===b&&c(y[b])})},A=a=>Object.keys(y).forEach(b=>z(a,b)),B=(a=u)=>b=>{z(b,a)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return B(e.toasterId||(d=e.id,Object.keys(y).find(a=>y[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},E=(a,b)=>D("blank")(a,b);E.error=D("error"),E.success=D("success"),E.loading=D("loading"),E.custom=D("custom"),E.dismiss=(a,b)=>{let c={type:3,toastId:a};b?B(b)(c):A(c)},E.dismissAll=a=>E.dismiss(void 0,a),E.remove=(a,b)=>{let c={type:4,toastId:a};b?B(b)(c):A(c)},E.removeAll=a=>E.remove(void 0,a),E.promise=(a,b,c)=>{let d=E.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?E.success(e,{id:d,...c,...null==c?void 0:c.success}):E.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?E.error(e,{id:d,...c,...null==c?void 0:c.error}):E.dismiss(d)}),a};var F=1e3,G=q`
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
`,Z=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=u)=>{let[c,d]=(0,e.useState)(y[b]||x),f=(0,e.useRef)(y[b]);(0,e.useEffect)(()=>(f.current!==y[b]&&d(y[b]),w.push([b,d]),()=>{let a=w.findIndex(([a])=>a===b);a>-1&&w.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||C[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=F)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&E.dismiss(c.id);return}return setTimeout(()=>E.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(B(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(X,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Y:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(W,{toast:d,position:j}))}))};a.s(["Toaster",()=>Z,"default",()=>E,"toast",()=>E],2177)},86170,a=>{a.v("/_next/static/media/luxe1.83336ec4.png")},41307,a=>{"use strict";let b=(0,a.i(23415).default)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);a.s(["Lock",()=>b],41307)},67215,a=>{"use strict";let b=(0,a.i(23415).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);a.s(["Mail",()=>b],67215)},51910,a=>{"use strict";let b=(0,a.i(23415).default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);a.s(["Eye",()=>b],51910)},51791,a=>{"use strict";let b=(0,a.i(23415).default)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);a.s(["CheckCircle",()=>b],51791)},70219,a=>{"use strict";let b=(0,a.i(23415).default)("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);a.s(["Building",()=>b],70219)},97642,a=>{"use strict";var b=a.i(52975),c=a.i(37051),d=a.i(57751),e=a.i(32681),f=a.i(31895),g=a.i(51910),h=a.i(69723),i=a.i(40454),j=a.i(67215),k=a.i(41307),l=a.i(70219),m=a.i(51791);let n=(0,a.i(23415).default)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);var o=a.i(79686),p=a.i(2177),q=a.i(89917),r=a.i(17093);a.s(["default",0,()=>{let a=(0,q.useRouter)(),[s,t]=(0,c.useState)(!1),[u,v]=(0,c.useState)(!1),[w,x]=(0,c.useState)(!1),{register:y,handleSubmit:z,watch:A,formState:{errors:B}}=(0,f.useForm)();A("password");let C=async b=>{x(!0);try{let c=await o.default.post("api.propertydronerealty.com/api/webusers/register",{name:b.name,email:b.email,number:b.number,password:b.password});201===c.status&&(p.toast.success("Registration successful! Redirecting to login..."),setTimeout(()=>{a.push("/signin")},2e3))}catch(a){p.toast.error(a.response?.data?.message||"Something went wrong. Please try again.")}finally{x(!1)}};return(0,b.jsxs)("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans",children:[(0,b.jsx)(p.Toaster,{position:"top-right"}),(0,b.jsxs)("div",{className:"bg-white rounded-[2rem] shadow-2xl overflow-hidden w-full max-w-[1200px] flex flex-col md:flex-row min-h-[700px]",children:[(0,b.jsxs)("div",{className:"relative w-full md:w-[45%] bg-[#172747] text-white p-12 hidden md:flex flex-col justify-between overflow-hidden",children:[(0,b.jsx)("div",{className:"absolute inset-0 z-0 opacity-40",children:(0,b.jsx)(e.default,{src:r.default,alt:"Background",fill:!0,className:"object-cover",priority:!0})}),(0,b.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-[#172747]/80 to-[#172747]/90 z-10"}),(0,b.jsxs)("div",{className:"relative z-20 h-full flex flex-col justify-between",children:[(0,b.jsx)("div",{className:"flex items-center gap-3"}),(0,b.jsxs)("div",{className:"mt-12",children:[(0,b.jsx)("h1",{className:"text-4xl lg:text-5xl font-bold leading-tight mb-6",children:"Take control of your property journey"}),(0,b.jsxs)("div",{className:"space-y-6 mt-8",children:[(0,b.jsxs)("div",{className:"flex items-start gap-4",children:[(0,b.jsx)("div",{className:"p-2 bg-white/10 rounded-lg backdrop-blur-sm",children:(0,b.jsx)(l.Building,{className:"w-5 h-5 text-white"})}),(0,b.jsx)("div",{children:(0,b.jsx)("h3",{className:"font-semibold text-lg text-white",children:"Premium property listings"})})]}),(0,b.jsxs)("div",{className:"flex items-start gap-4",children:[(0,b.jsx)("div",{className:"p-2 bg-white/10 rounded-lg backdrop-blur-sm",children:(0,b.jsx)(m.CheckCircle,{className:"w-5 h-5 text-white"})}),(0,b.jsx)("div",{children:(0,b.jsx)("h3",{className:"font-semibold text-lg text-white",children:"Personalized recommendations"})})]}),(0,b.jsxs)("div",{className:"flex items-start gap-4",children:[(0,b.jsx)("div",{className:"p-2 bg-white/10 rounded-lg backdrop-blur-sm",children:(0,b.jsx)(n,{className:"w-5 h-5 text-white"})}),(0,b.jsx)("div",{children:(0,b.jsx)("h3",{className:"font-semibold text-lg text-white",children:"Exclusive market insights"})})]})]})]}),(0,b.jsxs)("div",{className:"text-sm text-gray-300 mt-12",children:["© ",new Date().getFullYear()," Property Drone Realty. All rights reserved."]})]})]}),(0,b.jsx)("div",{className:"w-full md:w-[55%] p-8 md:p-12 lg:p-16 overflow-y-auto",children:(0,b.jsxs)("div",{className:"max-w-md mx-auto h-full flex flex-col justify-center",children:[(0,b.jsxs)("div",{className:"text-center md:text-left mb-10",children:[(0,b.jsx)("h2",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Create Account"}),(0,b.jsx)("p",{className:"text-gray-500",children:"Join PropertyDrone Realty to find your perfect property"})]}),(0,b.jsxs)("form",{className:"space-y-5",onSubmit:z(C),children:[(0,b.jsxs)("div",{className:"space-y-1.5",children:[(0,b.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Full Name ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(i.User,{className:"absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"}),(0,b.jsx)("input",{...y("name",{required:"Name is required"}),type:"text",placeholder:"Enter your full name",className:`w-full pl-10 pr-4 py-3 bg-gray-50 border ${B.name?"border-red-500":"border-gray-200"} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`})]}),B.name&&(0,b.jsx)("p",{className:"text-red-500 text-xs",children:B.name.message})]}),(0,b.jsxs)("div",{className:"space-y-1.5",children:[(0,b.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Email Address ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(j.Mail,{className:"absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"}),(0,b.jsx)("input",{...y("email",{required:"Email is required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),type:"email",placeholder:"Enter your email",className:`w-full pl-10 pr-4 py-3 bg-gray-50 border ${B.email?"border-red-500":"border-gray-200"} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`})]}),B.email&&(0,b.jsx)("p",{className:"text-red-500 text-xs",children:B.email.message})]}),(0,b.jsxs)("div",{className:"space-y-1.5",children:[(0,b.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Mobile Number ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsxs)("div",{className:"relative flex",children:[(0,b.jsx)("div",{className:"flex items-center justify-center px-4 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl text-gray-500 font-medium text-sm",children:"+91"}),(0,b.jsx)("input",{...y("number",{required:"Phone number is required",pattern:{value:/^[0-9]{10}$/,message:"Valid 10-digit number required"}}),type:"tel",placeholder:"message",className:`w-full px-4 py-3 bg-gray-50 border ${B.number?"border-red-500":"border-gray-200"} rounded-r-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`})]}),B.number&&(0,b.jsx)("p",{className:"text-red-500 text-xs",children:B.number.message})]}),(0,b.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[(0,b.jsxs)("div",{className:"space-y-1.5",children:[(0,b.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Password ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(k.Lock,{className:"absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"}),(0,b.jsx)("input",{...y("password",{required:"Required",minLength:{value:6,message:"Min 6 chars"}}),type:s?"text":"password",placeholder:"Password",className:`w-full pl-10 pr-10 py-3 bg-gray-50 border ${B.password?"border-red-500":"border-gray-200"} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}),(0,b.jsx)("button",{type:"button",onClick:()=>t(!s),className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:s?(0,b.jsx)(h.EyeOff,{className:"h-4 w-4"}):(0,b.jsx)(g.Eye,{className:"h-4 w-4"})})]}),B.password&&(0,b.jsx)("p",{className:"text-red-500 text-xs",children:B.password.message})]}),(0,b.jsxs)("div",{className:"space-y-1.5",children:[(0,b.jsxs)("label",{className:"text-sm font-medium text-gray-700",children:["Confirm Password ",(0,b.jsx)("span",{className:"text-red-500",children:"*"})]}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(k.Lock,{className:"absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"}),(0,b.jsx)("input",{...y("confirmPassword",{required:"Required",validate:a=>A("password")===a||"Match failed"}),type:u?"text":"password",placeholder:"Confirm",className:`w-full pl-10 pr-10 py-3 bg-gray-50 border ${B.confirmPassword?"border-red-500":"border-gray-200"} rounded-xl focus:outline-none focus:border-[#172747] focus:ring-1 focus:ring-[#172747] transition-all text-sm`}),(0,b.jsx)("button",{type:"button",onClick:()=>v(!u),className:"absolute right-3 top-3 text-gray-400 hover:text-gray-600",children:u?(0,b.jsx)(h.EyeOff,{className:"h-4 w-4"}):(0,b.jsx)(g.Eye,{className:"h-4 w-4"})})]}),B.confirmPassword&&(0,b.jsx)("p",{className:"text-red-500 text-xs",children:B.confirmPassword.message})]})]}),(0,b.jsxs)("div",{className:"flex items-start pt-2",children:[(0,b.jsx)("div",{className:"flex items-center h-5",children:(0,b.jsx)("input",{id:"terms",type:"checkbox",...y("terms",{required:"Required"}),className:"w-4 h-4 text-[#172747] border-gray-300 rounded focus:ring-[#172747]"})}),(0,b.jsx)("div",{className:"ml-3 text-sm",children:(0,b.jsxs)("label",{htmlFor:"terms",className:"text-gray-500",children:["I agree to the ",(0,b.jsx)(d.default,{href:"/terms",className:"text-[#172747] font-semibold hover:underline",children:"Terms of Service"})," and ",(0,b.jsx)(d.default,{href:"/privacy",className:"text-[#172747] font-semibold hover:underline",children:"Privacy Policy"}),"."]})})]}),B.terms&&(0,b.jsx)("p",{className:"text-red-500 text-xs mt-0",children:"You must accept the terms."}),(0,b.jsx)("button",{type:"submit",disabled:w,className:`w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-[#0066FF] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all ${w?"opacity-70 cursor-not-allowed":""}`,children:w?"Creating Account...":"Create Account"}),(0,b.jsx)("div",{className:"text-center mt-6",children:(0,b.jsxs)("p",{className:"text-sm text-gray-600",children:["Already have an account?"," ",(0,b.jsx)(d.default,{href:"/signin",className:"font-semibold text-[#0066FF] hover:text-blue-700",children:"Sign In Here"})]})})]})]})})]})]})}],97642)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2eba1a1b._.js.map