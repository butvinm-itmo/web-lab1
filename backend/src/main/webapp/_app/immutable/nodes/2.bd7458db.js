var at=Object.defineProperty;var st=(t,e,i)=>e in t?at(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var W=(t,e,i)=>(st(t,typeof e!="symbol"?e+"":e,i),i);import{s as j,n as D,r as tt,b as L,f as rt,h as V,o as lt}from"../chunks/scheduler.682ccc96.js";import{S as q,i as N,g as b,s as S,m as et,h as y,j as k,x as U,c as E,n as it,f as w,k as d,a as Y,y as c,z as X,A as z,o as nt,B as A,C as B,r as G,u as H,D as ot,v as F,d as J,t as K,w as Q,E as ut}from"../chunks/index.e591ce70.js";const dt=!0,Yt=Object.freeze(Object.defineProperty({__proto__:null,prerender:dt},Symbol.toStringTag,{value:"Module"}));function ft(t){let e,i,n="Radius:",a,l,s,f,u,m,r;return{c(){e=b("div"),i=b("p"),i.textContent=n,a=S(),l=b("label"),s=et(t[0]),f=S(),u=b("input"),this.h()},l(_){e=y(_,"DIV",{});var o=k(e);i=y(o,"P",{"data-svelte-h":!0}),U(i)!=="svelte-9yl71g"&&(i.textContent=n),a=E(o),l=y(o,"LABEL",{for:!0});var T=k(l);s=it(T,t[0]),T.forEach(w),f=E(o),u=y(o,"INPUT",{id:!0,type:!0,min:!0,max:!0}),o.forEach(w),this.h()},h(){d(l,"for","radius"),d(u,"id","radius"),d(u,"type","range"),d(u,"min","1"),d(u,"max","10")},m(_,o){Y(_,e,o),c(e,i),c(e,a),c(e,l),c(l,s),c(e,f),c(e,u),X(u,t[0]),m||(r=[z(u,"change",t[1]),z(u,"input",t[1])],m=!0)},p(_,[o]){o&1&&nt(s,_[0]),o&1&&X(u,_[0])},i:D,o:D,d(_){_&&w(e),m=!1,tt(r)}}}function ht(t,e,i){let{radius:n}=e;function a(){n=A(this.value),i(0,n)}return t.$$set=l=>{"radius"in l&&i(0,n=l.radius)},[n,a]}class ct extends q{constructor(e){super(),N(this,e,ht,ft,j,{radius:0})}}function pt(t){let e,i,n,a="X:",l,s,f,u,m,r="Y:",_,o,T,M;return{c(){e=b("div"),i=b("div"),n=b("label"),n.textContent=a,l=S(),s=b("input"),f=S(),u=b("div"),m=b("label"),m.textContent=r,_=S(),o=b("input"),this.h()},l(v){e=y(v,"DIV",{class:!0});var P=k(e);i=y(P,"DIV",{});var h=k(i);n=y(h,"LABEL",{for:!0,"data-svelte-h":!0}),U(n)!=="svelte-1i4ahf4"&&(n.textContent=a),l=E(h),s=y(h,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),h.forEach(w),f=E(P),u=y(P,"DIV",{});var g=k(u);m=y(g,"LABEL",{for:!0,"data-svelte-h":!0}),U(m)!=="svelte-j23swm"&&(m.textContent=r),_=E(g),o=y(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,class:!0}),g.forEach(w),P.forEach(w),this.h()},h(){d(n,"for","x"),d(s,"id","x"),d(s,"type","number"),d(s,"min",t[1]),d(s,"max",t[2]),d(s,"class","svelte-cazf2q"),d(m,"for","y"),d(o,"id","y"),d(o,"type","number"),d(o,"min",t[3]),d(o,"max",t[4]),d(o,"class","svelte-cazf2q"),d(e,"class","wrapper svelte-cazf2q")},m(v,P){Y(v,e,P),c(e,i),c(i,n),c(i,l),c(i,s),X(s,t[0].x),c(e,f),c(e,u),c(u,m),c(u,_),c(u,o),X(o,t[0].y),T||(M=[z(s,"input",t[5]),z(o,"input",t[6])],T=!0)},p(v,[P]){P&2&&d(s,"min",v[1]),P&4&&d(s,"max",v[2]),P&1&&A(s.value)!==v[0].x&&X(s,v[0].x),P&8&&d(o,"min",v[3]),P&16&&d(o,"max",v[4]),P&1&&A(o.value)!==v[0].y&&X(o,v[0].y)},i:D,o:D,d(v){v&&w(e),T=!1,tt(M)}}}function _t(t,e,i){let{point:n}=e,{minX:a}=e,{maxX:l}=e,{minY:s}=e,{maxY:f}=e;function u(){n.x=A(this.value),i(0,n)}function m(){n.y=A(this.value),i(0,n)}return t.$$set=r=>{"point"in r&&i(0,n=r.point),"minX"in r&&i(1,a=r.minX),"maxX"in r&&i(2,l=r.maxX),"minY"in r&&i(3,s=r.minY),"maxY"in r&&i(4,f=r.maxY)},[n,a,l,s,f,u,m]}class mt extends q{constructor(e){super(),N(this,e,_t,pt,j,{point:0,minX:1,maxX:2,minY:3,maxY:4})}}function gt(t){let e,i,n,a,l,s,f,u,m,r,_,o;function T(h){t[5](h)}let M={};t[1]!==void 0&&(M.radius=t[1]),f=new ct({props:M}),L.push(()=>B(f,"radius",T));function v(h){t[6](h)}let P={minX:-10,maxX:10,minY:-10,maxY:10};return t[0]!==void 0&&(P.point=t[0]),r=new mt({props:P}),L.push(()=>B(r,"point",v)),{c(){e=b("div"),i=b("div"),n=b("canvas"),l=S(),s=b("div"),G(f.$$.fragment),m=S(),G(r.$$.fragment),this.h()},l(h){e=y(h,"DIV",{class:!0});var g=k(e);i=y(g,"DIV",{class:!0});var p=k(i);n=y(p,"CANVAS",{id:!0,width:!0,height:!0}),k(n).forEach(w),p.forEach(w),l=E(g),s=y(g,"DIV",{class:!0});var C=k(s);H(f.$$.fragment,C),m=E(C),H(r.$$.fragment,C),C.forEach(w),g.forEach(w),this.h()},h(){d(n,"id","canvas"),d(n,"width",t[2]),d(n,"height",t[3]),d(i,"class","canvas svelte-frc1uw"),rt(()=>t[4].call(i)),d(s,"class","inputs svelte-frc1uw"),d(e,"class","wrapper svelte-frc1uw")},m(h,g){Y(h,e,g),c(e,i),c(i,n),a=ot(i,t[4].bind(i)),c(e,l),c(e,s),F(f,s,null),c(s,m),F(r,s,null),o=!0},p(h,[g]){(!o||g&4)&&d(n,"width",h[2]),(!o||g&8)&&d(n,"height",h[3]);const p={};!u&&g&2&&(u=!0,p.radius=h[1],V(()=>u=!1)),f.$set(p);const C={};!_&&g&1&&(_=!0,C.point=h[0],V(()=>_=!1)),r.$set(C)},i(h){o||(J(f.$$.fragment,h),J(r.$$.fragment,h),o=!0)},o(h){K(f.$$.fragment,h),K(r.$$.fragment,h),o=!1},d(h){h&&w(e),a(),Q(f),Q(r)}}}const R=20;function O(t){return{x:t.width/2,y:t.height/2}}function x(t,e){try{const i=document.getElementById("canvas"),n=i.getContext("2d");if(!n)return;vt(n,i),bt(n,i),yt(n,i,t),Pt(n,i,e)}catch{}}function vt(t,e){t.clearRect(0,0,e.width,e.height)}function bt(t,e){t.beginPath(),t.moveTo(5,e.height/2),t.lineTo(e.width-5,e.height/2),t.strokeStyle="black",t.stroke(),t.beginPath(),t.moveTo(e.width/2,5),t.lineTo(e.width/2,e.height-5),t.strokeStyle="black",t.stroke();const n=Math.floor((e.width-5)/R);for(let l=-n;l<n;l++){const s=e.width/2+l*R;t.beginPath(),t.moveTo(s,e.height/2-5),t.lineTo(s,e.height/2+5),t.strokeStyle="black",t.stroke()}const a=Math.floor((e.height-5)/R);for(let l=-a;l<a;l++){const s=e.height/2+l*R;t.beginPath(),t.moveTo(e.width/2-5,s),t.lineTo(e.width/2+5,s),t.strokeStyle="black",t.stroke()}$(t,e.width-5,e.height/2,Math.PI),$(t,e.width/2,5,Math.PI/2)}function $(t,e,i,n){t.beginPath(),t.moveTo(e,i);const a=10;t.lineTo(e+a*Math.cos(n-Math.PI/6),i+a*Math.sin(n-Math.PI/6)),t.lineTo(e+a*Math.cos(n+Math.PI/6),i+a*Math.sin(n+Math.PI/6)),t.lineTo(e,i),t.fillStyle="black",t.fill()}function yt(t,e,i){const n=i*R,a=O(e),l="rgba(128, 128, 128, 0.5)";t.fillStyle=l,t.beginPath(),t.arc(a.x,a.y,n,0,Math.PI*2),t.fill(),t.fillStyle=l,t.fillRect(a.x,a.y-2*n,2*n,2*n),t.fillStyle=l,t.beginPath(),t.moveTo(a.x,a.y),t.lineTo(a.x,a.y+2*n),t.lineTo(a.x-2*n,a.y),t.closePath(),t.fill()}function Pt(t,e,i){const n="red";t.fillStyle=n;const l=wt(i,e);t.fillRect(l.x-10/2,l.y-10/2,10,10)}function wt(t,e){const i=O(e);return{x:t.x*R+i.x,y:-t.y*R+i.y}}function Ct(t,e){const i=O(e);return{x:(t.x-i.x)/R,y:-(t.y-i.y)/R}}function Tt(t,e,i){let{point:n={x:0,y:0}}=e,{radius:a=1}=e,l,s;lt(()=>{const r=document.getElementById("canvas");i(0,n=Ct(O(r),r)),x(a,n)});function f(){s=this.clientHeight,l=this.clientWidth,i(3,s),i(2,l)}function u(r){a=r,i(1,a)}function m(r){n=r,i(0,n)}return t.$$set=r=>{"point"in r&&i(0,n=r.point),"radius"in r&&i(1,a=r.radius)},t.$$.update=()=>{t.$$.dirty&3&&x(a,n)},[n,a,l,s,f,u,m]}class kt extends q{constructor(e){super(),N(this,e,Tt,gt,j,{point:0,radius:1})}}class It{constructor(e){W(this,"endpoint","/api/points");W(this,"apiUrl");this.apiUrl=e}async addPoint(e,i){const n=new URLSearchParams({x:e.x.toString(),y:e.y.toString(),radius:i.toString()});try{return await(await fetch(`${this.apiUrl}${this.endpoint}?${n}`)).json()}catch{return null}}}function St(t){let e,i,n,a,l,s,f,u,m="Click Me",r,_,o,T,M,v;function P(p){t[4](p)}function h(p){t[5](p)}let g={};return t[0]!==void 0&&(g.point=t[0]),t[1]!==void 0&&(g.radius=t[1]),a=new kt({props:g}),L.push(()=>B(a,"point",P)),L.push(()=>B(a,"radius",h)),{c(){e=b("meta"),i=S(),n=b("div"),G(a.$$.fragment),f=S(),u=b("button"),u.textContent=m,r=S(),_=b("p"),o=et(t[2]),this.h()},l(p){const C=ut("svelte-1lnb9z",document.head);e=y(C,"META",{name:!0,content:!0}),C.forEach(w),i=E(p),n=y(p,"DIV",{class:!0});var I=k(n);H(a.$$.fragment,I),f=E(I),u=y(I,"BUTTON",{"data-svelte-h":!0}),U(u)!=="svelte-hl0tpa"&&(u.textContent=m),r=E(I),_=y(I,"P",{});var Z=k(_);o=it(Z,t[2]),Z.forEach(w),I.forEach(w),this.h()},h(){document.title="Web Lab 1",d(e,"name","description"),d(e,"content","Web Lab 1"),d(n,"class","wrapper svelte-138mt5c")},m(p,C){c(document.head,e),Y(p,i,C),Y(p,n,C),F(a,n,null),c(n,f),c(n,u),c(n,r),c(n,_),c(_,o),T=!0,M||(v=z(u,"click",t[6]),M=!0)},p(p,[C]){const I={};!l&&C&1&&(l=!0,I.point=p[0],V(()=>l=!1)),!s&&C&2&&(s=!0,I.radius=p[1],V(()=>s=!1)),a.$set(I),(!T||C&4)&&nt(o,p[2])},i(p){T||(J(a.$$.fragment,p),T=!0)},o(p){K(a.$$.fragment,p),T=!1},d(p){p&&(w(i),w(n)),w(e),Q(a),M=!1,v()}}}function Et(t,e,i){let n,a,l;async function s(r,_){return await new It("/").addPoint(r,_)}function f(r){n=r,i(0,n)}function u(r){a=r,i(1,a)}return[n,a,l,s,f,u,async()=>i(2,l=await s(n,a))]}class zt extends q{constructor(e){super(),N(this,e,Et,St,j,{})}}export{zt as component,Yt as universal};
