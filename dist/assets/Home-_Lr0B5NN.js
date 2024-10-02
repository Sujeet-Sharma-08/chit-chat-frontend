import{r as Fr,j as B}from"./index-DKqoYbWn.js";var pr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},G={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Vr=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],W={CSS:{},springs:{}};function D(r,e,n){return Math.min(Math.max(r,e),n)}function N(r,e){return r.indexOf(e)>-1}function _(r,e){return r.apply(null,e)}var c={arr:function(r){return Array.isArray(r)},obj:function(r){return N(Object.prototype.toString.call(r),"Object")},pth:function(r){return c.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||c.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return c.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return c.hex(r)||c.rgb(r)||c.hsl(r)},key:function(r){return!pr.hasOwnProperty(r)&&!G.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function yr(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function xr(r,e){var n=yr(r),a=D(c.und(n[0])?1:n[0],.1,100),t=D(c.und(n[1])?100:n[1],.1,100),u=D(c.und(n[2])?10:n[2],.1,100),o=D(c.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=u/(2*Math.sqrt(t*a)),m=i<1?s*Math.sqrt(1-i*i):0,f=1,l=i<1?(i*s+-o)/m:-o+s;function h(p){var v=e?e*p/1e3:p;return i<1?v=Math.exp(-v*i*s)*(f*Math.cos(m*v)+l*Math.sin(m*v)):v=(f+l*v)*Math.exp(-v*s),p===0||p===1?p:1-v}function T(){var p=W.springs[r];if(p)return p;for(var v=1/6,x=0,M=0;;)if(x+=v,h(x)===1){if(M++,M>=16)break}else M=0;var g=x*v*1e3;return W.springs[r]=g,g}return e?h:T}function zr(r){return r===void 0&&(r=10),function(e){return Math.ceil(D(e,1e-6,1)*r)*(1/r)}}var Hr=function(){var r=11,e=1/(r-1);function n(f,l){return 1-3*l+3*f}function a(f,l){return 3*l-6*f}function t(f){return 3*f}function u(f,l,h){return((n(l,h)*f+a(l,h))*f+t(l))*f}function o(f,l,h){return 3*n(l,h)*f*f+2*a(l,h)*f+t(l)}function s(f,l,h,T,p){var v,x,M=0;do x=l+(h-l)/2,v=u(x,T,p)-f,v>0?h=x:l=x;while(Math.abs(v)>1e-7&&++M<10);return x}function i(f,l,h,T){for(var p=0;p<4;++p){var v=o(l,h,T);if(v===0)return l;var x=u(l,h,T)-f;l-=x/v}return l}function m(f,l,h,T){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var p=new Float32Array(r);if(f!==l||h!==T)for(var v=0;v<r;++v)p[v]=u(v*e,f,h);function x(M){for(var g=0,d=1,P=r-1;d!==P&&p[d]<=M;++d)g+=e;--d;var k=(M-p[d])/(p[d+1]-p[d]),b=g+k*e,S=o(b,f,h);return S>=.001?i(M,b,f,h):S===0?b:s(M,g,g+e,f,h)}return function(M){return f===l&&h===T||M===0||M===1?M:u(x(M),l,T)}}return m}(),br=function(){var r={linear:function(){return function(a){return a}}},e={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Expo:function(){return function(a){return a?Math.pow(2,10*a-10):0}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,u=4;a<((t=Math.pow(2,--u))-1)/11;);return 1/Math.pow(4,3-u)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var u=D(a,1,10),o=D(t,.1,2);return function(s){return s===0||s===1?s:-u*Math.pow(2,10*(s-1))*Math.sin((s-1-o/(Math.PI*2)*Math.asin(1/u))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint"];return n.forEach(function(a,t){e[a]=function(){return function(u){return Math.pow(u,t+2)}}}),Object.keys(e).forEach(function(a){var t=e[a];r["easeIn"+a]=t,r["easeOut"+a]=function(u,o){return function(s){return 1-t(u,o)(1-s)}},r["easeInOut"+a]=function(u,o){return function(s){return s<.5?t(u,o)(s*2)/2:1-t(u,o)(s*-2+2)/2}},r["easeOutIn"+a]=function(u,o){return function(s){return s<.5?(1-t(u,o)(1-s*2))/2:(t(u,o)(s*2-1)+1)/2}}}),r}();function X(r,e){if(c.fnc(r))return r;var n=r.split("(")[0],a=br[n],t=yr(r);switch(n){case"spring":return xr(r,e);case"cubicBezier":return _(Hr,t);case"steps":return _(zr,t);default:return _(a,t)}}function Mr(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function U(r,e){for(var n=r.length,a=arguments.length>=2?arguments[1]:void 0,t=[],u=0;u<n;u++)if(u in r){var o=r[u];e.call(a,o,u,r)&&t.push(o)}return t}function q(r){return r.reduce(function(e,n){return e.concat(c.arr(n)?q(n):n)},[])}function vr(r){return c.arr(r)?r:(c.str(r)&&(r=Mr(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function rr(r,e){return r.some(function(n){return n===e})}function er(r){var e={};for(var n in r)e[n]=r[n];return e}function J(r,e){var n=er(r);for(var a in r)n[a]=e.hasOwnProperty(a)?e[a]:r[a];return n}function Z(r,e){var n=er(r);for(var a in e)n[a]=c.und(r[a])?e[a]:r[a];return n}function Nr(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function Rr(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=r.replace(e,function(s,i,m,f){return i+i+m+m+f+f}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),u=parseInt(a[2],16),o=parseInt(a[3],16);return"rgba("+t+","+u+","+o+",1)"}function Wr(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),n=parseInt(e[1],10)/360,a=parseInt(e[2],10)/100,t=parseInt(e[3],10)/100,u=e[4]||1;function o(h,T,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(T-h)*6*p:p<1/2?T:p<2/3?h+(T-h)*(2/3-p)*6:h}var s,i,m;if(a==0)s=i=m=t;else{var f=t<.5?t*(1+a):t+a-t*a,l=2*t-f;s=o(l,f,n+1/3),i=o(l,f,n),m=o(l,f,n-1/3)}return"rgba("+s*255+","+i*255+","+m*255+","+u+")"}function Ur(r){if(c.rgb(r))return Nr(r);if(c.hex(r))return Rr(r);if(c.hsl(r))return Wr(r)}function O(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function qr(r){if(N(r,"translate")||r==="perspective")return"px";if(N(r,"rotate")||N(r,"skew"))return"deg"}function Y(r,e){return c.fnc(r)?r(e.target,e.id,e.total):r}function E(r,e){return r.getAttribute(e)}function nr(r,e,n){var a=O(e);if(rr([n,"deg","rad","turn"],a))return e;var t=W.CSS[e+n];if(!c.und(t))return t;var u=100,o=document.createElement(r.tagName),s=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;s.appendChild(o),o.style.position="absolute",o.style.width=u+n;var i=u/o.offsetWidth;s.removeChild(o);var m=i*parseFloat(e);return W.CSS[e+n]=m,m}function wr(r,e,n){if(e in r.style){var a=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=r.style[e]||getComputedStyle(r).getPropertyValue(a)||"0";return n?nr(r,t,n):t}}function tr(r,e){if(c.dom(r)&&!c.inp(r)&&(!c.nil(E(r,e))||c.svg(r)&&r[e]))return"attribute";if(c.dom(r)&&rr(Vr,e))return"transform";if(c.dom(r)&&e!=="transform"&&wr(r,e))return"css";if(r[e]!=null)return"object"}function Tr(r){if(c.dom(r)){for(var e=r.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(e);)a.set(t[1],t[2]);return a}}function Zr(r,e,n,a){var t=N(e,"scale")?1:0+qr(e),u=Tr(r).get(e)||t;return n&&(n.transforms.list.set(e,u),n.transforms.last=e),a?nr(r,u,a):u}function ar(r,e,n,a){switch(tr(r,e)){case"transform":return Zr(r,e,a,n);case"css":return wr(r,e,n);case"attribute":return E(r,e);default:return r[e]||0}}function ir(r,e){var n=/^(\*=|\+=|-=)/.exec(r);if(!n)return r;var a=O(r)||0,t=parseFloat(e),u=parseFloat(r.replace(n[0],""));switch(n[0][0]){case"+":return t+u+a;case"-":return t-u+a;case"*":return t*u+a}}function Pr(r,e){if(c.col(r))return Ur(r);if(/\s/g.test(r))return r;var n=O(r),a=n?r.substr(0,r.length-n.length):r;return e?a+e:a}function ur(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function $r(r){return Math.PI*2*E(r,"r")}function Qr(r){return E(r,"width")*2+E(r,"height")*2}function Kr(r){return ur({x:E(r,"x1"),y:E(r,"y1")},{x:E(r,"x2"),y:E(r,"y2")})}function Ir(r){for(var e=r.points,n=0,a,t=0;t<e.numberOfItems;t++){var u=e.getItem(t);t>0&&(n+=ur(a,u)),a=u}return n}function _r(r){var e=r.points;return Ir(r)+ur(e.getItem(e.numberOfItems-1),e.getItem(0))}function Cr(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return $r(r);case"rect":return Qr(r);case"line":return Kr(r);case"polyline":return Ir(r);case"polygon":return _r(r)}}function Jr(r){var e=Cr(r);return r.setAttribute("stroke-dasharray",e),e}function Yr(r){for(var e=r.parentNode;c.svg(e)&&c.svg(e.parentNode);)e=e.parentNode;return e}function Dr(r,e){var n=e||{},a=n.el||Yr(r),t=a.getBoundingClientRect(),u=E(a,"viewBox"),o=t.width,s=t.height,i=n.viewBox||(u?u.split(" "):[0,0,o,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:o,h:s,vW:i[2],vH:i[3]}}function Gr(r,e){var n=c.str(r)?Mr(r)[0]:r,a=e||100;return function(t){return{property:t,el:n,svg:Dr(n),totalLength:Cr(n)*(a/100)}}}function Xr(r,e,n){function a(f){f===void 0&&(f=0);var l=e+f>=1?e+f:0;return r.el.getPointAtLength(l)}var t=Dr(r.el,r.svg),u=a(),o=a(-1),s=a(1),i=n?1:t.w/t.vW,m=n?1:t.h/t.vH;switch(r.property){case"x":return(u.x-t.x)*i;case"y":return(u.y-t.y)*m;case"angle":return Math.atan2(s.y-o.y,s.x-o.x)*180/Math.PI}}function dr(r,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Pr(c.pth(r)?r.totalLength:r,e)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:c.str(r)||e?a.split(n):[]}}function or(r){var e=r?q(c.arr(r)?r.map(vr):vr(r)):[];return U(e,function(n,a,t){return t.indexOf(n)===a})}function Er(r){var e=or(r);return e.map(function(n,a){return{target:n,id:a,total:e.length,transforms:{list:Tr(n)}}})}function re(r,e){var n=er(e);if(/^spring/.test(n.easing)&&(n.duration=xr(n.easing)),c.arr(r)){var a=r.length,t=a===2&&!c.obj(r[0]);t?r={value:r}:c.fnc(e.duration)||(n.duration=e.duration/a)}var u=c.arr(r)?r:[r];return u.map(function(o,s){var i=c.obj(o)&&!c.pth(o)?o:{value:o};return c.und(i.delay)&&(i.delay=s?0:e.delay),c.und(i.endDelay)&&(i.endDelay=s===u.length-1?e.endDelay:0),i}).map(function(o){return Z(o,n)})}function ee(r){for(var e=U(q(r.map(function(u){return Object.keys(u)})),function(u){return c.key(u)}).reduce(function(u,o){return u.indexOf(o)<0&&u.push(o),u},[]),n={},a=function(u){var o=e[u];n[o]=r.map(function(s){var i={};for(var m in s)c.key(m)?m==o&&(i.value=s[m]):i[m]=s[m];return i})},t=0;t<e.length;t++)a(t);return n}function ne(r,e){var n=[],a=e.keyframes;a&&(e=Z(ee(a),e));for(var t in e)c.key(t)&&n.push({name:t,tweens:re(e[t],r)});return n}function te(r,e){var n={};for(var a in r){var t=Y(r[a],e);c.arr(t)&&(t=t.map(function(u){return Y(u,e)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ae(r,e){var n;return r.tweens.map(function(a){var t=te(a,e),u=t.value,o=c.arr(u)?u[1]:u,s=O(o),i=ar(e.target,r.name,s,e),m=n?n.to.original:i,f=c.arr(u)?u[0]:m,l=O(f)||O(i),h=s||l;return c.und(o)&&(o=m),t.from=dr(f,h),t.to=dr(ir(o,f),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=X(t.easing,t.duration),t.isPath=c.pth(u),t.isPathTargetInsideSVG=t.isPath&&c.svg(e.target),t.isColor=c.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var Or={css:function(r,e,n){return r.style[e]=n},attribute:function(r,e,n){return r.setAttribute(e,n)},object:function(r,e,n){return r[e]=n},transform:function(r,e,n,a,t){if(a.list.set(e,n),e===a.last||t){var u="";a.list.forEach(function(o,s){u+=s+"("+o+") "}),r.style.transform=u}}};function kr(r,e){var n=Er(r);n.forEach(function(a){for(var t in e){var u=Y(e[t],a),o=a.target,s=O(u),i=ar(o,t,s,a),m=s||O(i),f=ir(Pr(u,m),i),l=tr(o,t);Or[l](o,t,f,a.transforms,!0)}})}function ie(r,e){var n=tr(r.target,e.name);if(n){var a=ae(e,r),t=a[a.length-1];return{type:n,property:e.name,animatable:r,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function ue(r,e){return U(q(r.map(function(n){return e.map(function(a){return ie(n,a)})})),function(n){return!c.und(n)})}function Sr(r,e){var n=r.length,a=function(u){return u.timelineOffset?u.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,r.map(function(u){return a(u)+u.duration})):e.duration,t.delay=n?Math.min.apply(Math,r.map(function(u){return a(u)+u.delay})):e.delay,t.endDelay=n?t.duration-Math.max.apply(Math,r.map(function(u){return a(u)+u.duration-u.endDelay})):e.endDelay,t}var gr=0;function oe(r){var e=J(pr,r),n=J(G,r),a=ne(n,r),t=Er(r.targets),u=ue(t,a),o=Sr(u,n),s=gr;return gr++,Z(e,{id:s,children:[],animatables:t,animations:u,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var C=[],Lr=function(){var r;function e(){!r&&(!hr()||!y.suspendWhenDocumentHidden)&&C.length>0&&(r=requestAnimationFrame(n))}function n(t){for(var u=C.length,o=0;o<u;){var s=C[o];s.paused?(C.splice(o,1),u--):(s.tick(t),o++)}r=o>0?requestAnimationFrame(n):void 0}function a(){y.suspendWhenDocumentHidden&&(hr()?r=cancelAnimationFrame(r):(C.forEach(function(t){return t._onDocumentVisibility()}),Lr()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),e}();function hr(){return!!document&&document.hidden}function y(r){r===void 0&&(r={});var e=0,n=0,a=0,t,u=0,o=null;function s(g){var d=window.Promise&&new Promise(function(P){return o=P});return g.finished=d,d}var i=oe(r);s(i);function m(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(d){return d.reversed=i.reversed})}function f(g){return i.reversed?i.duration-g:g}function l(){e=0,n=f(i.currentTime)*(1/y.speed)}function h(g,d){d&&d.seek(g-d.timelineOffset)}function T(g){if(i.reversePlayback)for(var P=u;P--;)h(g,t[P]);else for(var d=0;d<u;d++)h(g,t[d])}function p(g){for(var d=0,P=i.animations,k=P.length;d<k;){var b=P[d],S=b.animatable,F=b.tweens,L=F.length-1,w=F[L];L&&(w=U(F,function(Br){return g<Br.end})[0]||w);for(var j=D(g-w.start-w.delay,0,w.duration)/w.duration,R=isNaN(j)?1:w.easing(j),I=w.to.strings,$=w.round,Q=[],Ar=w.to.numbers.length,A=void 0,V=0;V<Ar;V++){var z=void 0,sr=w.to.numbers[V],fr=w.from.numbers[V]||0;w.isPath?z=Xr(w.value,R*sr,w.isPathTargetInsideSVG):z=fr+R*(sr-fr),$&&(w.isColor&&V>2||(z=Math.round(z*$)/$)),Q.push(z)}var cr=I.length;if(!cr)A=Q[0];else{A=I[0];for(var H=0;H<cr;H++){I[H];var lr=I[H+1],K=Q[H];isNaN(K)||(lr?A+=K+lr:A+=K+" ")}}Or[b.type](S.target,b.property,A,S.transforms),b.currentValue=A,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function x(){i.remaining&&i.remaining!==!0&&i.remaining--}function M(g){var d=i.duration,P=i.delay,k=d-i.endDelay,b=f(g);i.progress=D(b/d*100,0,100),i.reversePlayback=b<i.currentTime,t&&T(b),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),b<=P&&i.currentTime!==0&&p(0),(b>=k&&i.currentTime!==d||!d)&&p(d),b>P&&b<k?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),p(b)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=D(b,0,d),i.began&&v("update"),g>=d&&(n=0,x(),i.remaining?(e=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&m()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(o(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,t=i.children,u=t.length;for(var d=u;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,d){return kr(g,d),i},i.tick=function(g){a=g,e||(e=a),M((a+(n-e))*y.speed)},i.seek=function(g){M(f(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,C.push(i),l(),Lr())},i.reverse=function(){m(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=or(g);jr(d,i)},i.reset(),i.autoplay&&i.play(),i}function mr(r,e){for(var n=e.length;n--;)rr(r,e[n].animatable.target)&&e.splice(n,1)}function jr(r,e){var n=e.animations,a=e.children;mr(r,n);for(var t=a.length;t--;){var u=a[t],o=u.animations;mr(r,o),!o.length&&!u.children.length&&a.splice(t,1)}!n.length&&!a.length&&e.pause()}function se(r){for(var e=or(r),n=C.length;n--;){var a=C[n];jr(e,a)}}function fe(r,e){e===void 0&&(e={});var n=e.direction||"normal",a=e.easing?X(e.easing):null,t=e.grid,u=e.axis,o=e.from||0,s=o==="first",i=o==="center",m=o==="last",f=c.arr(r),l=parseFloat(f?r[0]:r),h=f?parseFloat(r[1]):0,T=O(f?r[1]:r)||0,p=e.start||0+(f?l:0),v=[],x=0;return function(M,g,d){if(s&&(o=0),i&&(o=(d-1)/2),m&&(o=d-1),!v.length){for(var P=0;P<d;P++){if(!t)v.push(Math.abs(o-P));else{var k=i?(t[0]-1)/2:o%t[0],b=i?(t[1]-1)/2:Math.floor(o/t[0]),S=P%t[0],F=Math.floor(P/t[0]),L=k-S,w=b-F,j=Math.sqrt(L*L+w*w);u==="x"&&(j=-L),u==="y"&&(j=-w),v.push(j)}x=Math.max.apply(Math,v)}a&&(v=v.map(function(I){return a(I/x)*x})),n==="reverse"&&(v=v.map(function(I){return u?I<0?I*-1:-I:Math.abs(x-I)}))}var R=f?(h-l)/x:l;return p+R*(Math.round(v[g]*100)/100)+T}}function ce(r){r===void 0&&(r={});var e=y(r);return e.duration=0,e.add=function(n,a){var t=C.indexOf(e),u=e.children;t>-1&&C.splice(t,1);function o(h){h.passThrough=!0}for(var s=0;s<u.length;s++)o(u[s]);var i=Z(n,J(G,r));i.targets=i.targets||r.targets;var m=e.duration;i.autoplay=!1,i.direction=e.direction,i.timelineOffset=c.und(a)?m:ir(a,m),o(e),e.seek(i.timelineOffset);var f=y(i);o(f),u.push(f);var l=Sr(u,r);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=C;y.remove=se;y.get=ar;y.set=kr;y.convertPx=nr;y.path=Gr;y.setDashoffset=Jr;y.stagger=fe;y.timeline=ce;y.easing=X;y.penner=br;y.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};const ve=()=>(Fr.useEffect(()=>{const r=document.querySelector(".ml6 .letters");r&&(r.innerHTML=r.textContent.replace(/\S/g,"<span class='letter'>$&</span>")),y.timeline({loop:!0}).add({targets:".ml6 .letter",translateY:["1.1em",0],translateZ:0,duration:750,delay:(e,n)=>50*n}).add({targets:".ml6",opacity:0,duration:1e3,easing:"easeOutExpo",delay:1e3})},[]),B.jsx("div",{className:"flex w-full h-full justify-center items-center p-10",children:B.jsxs("div",{className:"flex flex-col items-center mt-[7rem] lg:mt-[12rem] gap-3",children:[B.jsx("h1",{className:"ml6 text-xl text-center font-normal italic text-white",children:B.jsx("span",{className:"text-wrapper letters",children:"Welcome to Our chit chat app"})}),B.jsxs("h2",{className:"text-xl  text-center lg:text-3xl font-semibold text-blue-100",children:["Create your account and let's start the ",B.jsx("span",{className:"text-blue-400",children:"conversation"})]})]})}));export{ve as default};
