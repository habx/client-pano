function xN(){import("data:text/javascript,")}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var la=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function E1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ex(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Vl={},Cx={get exports(){return Vl},set exports(e){Vl=e}},Ds={},C={},Mx={get exports(){return C},set exports(e){C=e}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),Px=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),zx=Symbol.for("react.provider"),Ax=Symbol.for("react.context"),Lx=Symbol.for("react.forward_ref"),Rx=Symbol.for("react.suspense"),Ix=Symbol.for("react.memo"),jx=Symbol.for("react.lazy"),Tp=Symbol.iterator;function Fx(e){return e===null||typeof e!="object"?null:(e=Tp&&e[Tp]||e["@@iterator"],typeof e=="function"?e:null)}var C1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M1=Object.assign,O1={};function ho(e,t,n){this.props=e,this.context=t,this.refs=O1,this.updater=n||C1}ho.prototype.isReactComponent={};ho.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ho.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function P1(){}P1.prototype=ho.prototype;function xh(e,t,n){this.props=e,this.context=t,this.refs=O1,this.updater=n||C1}var bh=xh.prototype=new P1;bh.constructor=xh;M1(bh,ho.prototype);bh.isPureReactComponent=!0;var Ep=Array.isArray,$1=Object.prototype.hasOwnProperty,Sh={current:null},k1={key:!0,ref:!0,__self:!0,__source:!0};function z1(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)$1.call(t,r)&&!k1.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:za,type:e,key:o,ref:a,props:i,_owner:Sh.current}}function Nx(e,t){return{$$typeof:za,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Th(e){return typeof e=="object"&&e!==null&&e.$$typeof===za}function Dx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cp=/\/+/g;function Gu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dx(""+e.key):t.toString(36)}function Pl(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case za:case Ox:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Gu(a,0):r,Ep(i)?(n="",e!=null&&(n=e.replace(Cp,"$&/")+"/"),Pl(i,t,n,"",function(u){return u})):i!=null&&(Th(i)&&(i=Nx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Cp,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Ep(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+Gu(o,l);a+=Pl(o,t,n,s,i)}else if(s=Fx(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+Gu(o,l++),a+=Pl(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function al(e,t,n){if(e==null)return e;var r=[],i=0;return Pl(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Hx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _t={current:null},$l={transition:null},Bx={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Sh};ue.Children={map:al,forEach:function(e,t,n){al(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return al(e,function(){t++}),t},toArray:function(e){return al(e,function(t){return t})||[]},only:function(e){if(!Th(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ue.Component=ho;ue.Fragment=Px;ue.Profiler=kx;ue.PureComponent=xh;ue.StrictMode=$x;ue.Suspense=Rx;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bx;ue.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=M1({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Sh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)$1.call(t,s)&&!k1.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:za,type:e.type,key:i,ref:o,props:r,_owner:a}};ue.createContext=function(e){return e={$$typeof:Ax,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zx,_context:e},e.Consumer=e};ue.createElement=z1;ue.createFactory=function(e){var t=z1.bind(null,e);return t.type=e,t};ue.createRef=function(){return{current:null}};ue.forwardRef=function(e){return{$$typeof:Lx,render:e}};ue.isValidElement=Th;ue.lazy=function(e){return{$$typeof:jx,_payload:{_status:-1,_result:e},_init:Hx}};ue.memo=function(e,t){return{$$typeof:Ix,type:e,compare:t===void 0?null:t}};ue.startTransition=function(e){var t=$l.transition;$l.transition={};try{e()}finally{$l.transition=t}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(e,t){return _t.current.useCallback(e,t)};ue.useContext=function(e){return _t.current.useContext(e)};ue.useDebugValue=function(){};ue.useDeferredValue=function(e){return _t.current.useDeferredValue(e)};ue.useEffect=function(e,t){return _t.current.useEffect(e,t)};ue.useId=function(){return _t.current.useId()};ue.useImperativeHandle=function(e,t,n){return _t.current.useImperativeHandle(e,t,n)};ue.useInsertionEffect=function(e,t){return _t.current.useInsertionEffect(e,t)};ue.useLayoutEffect=function(e,t){return _t.current.useLayoutEffect(e,t)};ue.useMemo=function(e,t){return _t.current.useMemo(e,t)};ue.useReducer=function(e,t,n){return _t.current.useReducer(e,t,n)};ue.useRef=function(e){return _t.current.useRef(e)};ue.useState=function(e){return _t.current.useState(e)};ue.useSyncExternalStore=function(e,t,n){return _t.current.useSyncExternalStore(e,t,n)};ue.useTransition=function(){return _t.current.useTransition()};ue.version="18.2.0";(function(e){e.exports=ue})(Mx);const po=E1(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx=C,Ux=Symbol.for("react.element"),Vx=Symbol.for("react.fragment"),Yx=Object.prototype.hasOwnProperty,Xx=Wx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gx={key:!0,ref:!0,__self:!0,__source:!0};function A1(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Yx.call(t,r)&&!Gx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Ux,type:e,key:o,ref:a,props:i,_owner:Xx.current}}Ds.Fragment=Vx;Ds.jsx=A1;Ds.jsxs=A1;(function(e){e.exports=Ds})(Cx);const He=Vl.jsx,Xc=Vl.jsxs;var Zr={},qx={get exports(){return Zr},set exports(e){Zr=e}},Lt={},Gc={},Kx={get exports(){return Gc},set exports(e){Gc=e}},L1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,q){var G=L.length;L.push(q);e:for(;0<G;){var ve=G-1>>>1,j=L[ve];if(0<i(j,q))L[ve]=q,L[G]=j,G=ve;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],G=L.pop();if(G!==q){L[0]=G;e:for(var ve=0,j=L.length,H=j>>>1;ve<H;){var B=2*(ve+1)-1,X=L[B],O=B+1,K=L[O];if(0>i(X,G))O<j&&0>i(K,X)?(L[ve]=K,L[O]=G,ve=O):(L[ve]=X,L[B]=G,ve=B);else if(O<j&&0>i(K,G))L[ve]=K,L[O]=G,ve=O;else break e}}return q}function i(L,q){var G=L.sortIndex-q.sortIndex;return G!==0?G:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,f=null,h=3,d=!1,p=!1,g=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(L){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=L)r(u),q.sortIndex=q.expirationTime,t(s,q);else break;q=n(u)}}function b(L){if(g=!1,w(L),!p)if(n(s)!==null)p=!0,Ve(S);else{var q=n(u);q!==null&&ie(b,q.startTime-L)}}function S(L,q){p=!1,g&&(g=!1,m(P),P=-1),d=!0;var G=h;try{for(w(q),f=n(s);f!==null&&(!(f.expirationTime>q)||L&&!W());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,h=f.priorityLevel;var j=ve(f.expirationTime<=q);q=e.unstable_now(),typeof j=="function"?f.callback=j:f===n(s)&&r(s),w(q)}else r(s);f=n(s)}if(f!==null)var H=!0;else{var B=n(u);B!==null&&ie(b,B.startTime-q),H=!1}return H}finally{f=null,h=G,d=!1}}var E=!1,$=null,P=-1,F=5,R=-1;function W(){return!(e.unstable_now()-R<F)}function Z(){if($!==null){var L=e.unstable_now();R=L;var q=!0;try{q=$(!0,L)}finally{q?ne():(E=!1,$=null)}}else E=!1}var ne;if(typeof v=="function")ne=function(){v(Z)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,M=V.port2;V.port1.onmessage=Z,ne=function(){M.postMessage(null)}}else ne=function(){_(Z,0)};function Ve(L){$=L,E||(E=!0,ne())}function ie(L,q){P=_(function(){L(e.unstable_now())},q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){p||d||(p=!0,Ve(S))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var G=h;h=q;try{return L()}finally{h=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=h;h=L;try{return q()}finally{h=G}},e.unstable_scheduleCallback=function(L,q,G){var ve=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ve+G:ve):G=ve,L){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=G+j,L={id:c++,callback:q,priorityLevel:L,startTime:G,expirationTime:j,sortIndex:-1},G>ve?(L.sortIndex=G,t(u,L),n(s)===null&&L===n(u)&&(g?(m(P),P=-1):g=!0,ie(b,G-ve))):(L.sortIndex=j,t(s,L),p||d||(p=!0,Ve(S))),L},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(L){var q=h;return function(){var G=h;h=q;try{return L.apply(this,arguments)}finally{h=G}}}})(L1);(function(e){e.exports=L1})(Kx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=C,At=Gc;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I1=new Set,sa={};function ci(e,t){no(e,t),no(e+"Capture",t)}function no(e,t){for(sa[e]=t,e=0;e<t.length;e++)I1.add(t[e])}var jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,Qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Op={};function Zx(e){return qc.call(Op,e)?!0:qc.call(Mp,e)?!1:Qx.test(e)?Op[e]=!0:(Mp[e]=!0,!1)}function Jx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eb(e,t,n,r){if(t===null||typeof t>"u"||Jx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function wt(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function Ch(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eh,Ch);st[t]=new wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eh,Ch);st[t]=new wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eh,Ch);st[t]=new wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new wt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mh(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eb(t,n,i,r)&&(n=null),r||i===null?Zx(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vn=R1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),zi=Symbol.for("react.portal"),Ai=Symbol.for("react.fragment"),Oh=Symbol.for("react.strict_mode"),Kc=Symbol.for("react.profiler"),j1=Symbol.for("react.provider"),F1=Symbol.for("react.context"),Ph=Symbol.for("react.forward_ref"),Qc=Symbol.for("react.suspense"),Zc=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),N1=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function zo(e){return e===null||typeof e!="object"?null:(e=Pp&&e[Pp]||e["@@iterator"],typeof e=="function"?e:null)}var Ie=Object.assign,qu;function Ho(e){if(qu===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qu=t&&t[1]||""}return`
`+qu+e}var Ku=!1;function Qu(e,t){if(!e||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ho(e):""}function tb(e){switch(e.tag){case 5:return Ho(e.type);case 16:return Ho("Lazy");case 13:return Ho("Suspense");case 19:return Ho("SuspenseList");case 0:case 2:case 15:return e=Qu(e.type,!1),e;case 11:return e=Qu(e.type.render,!1),e;case 1:return e=Qu(e.type,!0),e;default:return""}}function Jc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ai:return"Fragment";case zi:return"Portal";case Kc:return"Profiler";case Oh:return"StrictMode";case Qc:return"Suspense";case Zc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case F1:return(e.displayName||"Context")+".Consumer";case j1:return(e._context.displayName||"Context")+".Provider";case Ph:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $h:return t=e.displayName||null,t!==null?t:Jc(e.type)||"Memo";case rr:t=e._payload,e=e._init;try{return Jc(e(t))}catch(n){}}return null}function nb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jc(t);case 8:return t===Oh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function br(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function D1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rb(e){var t=D1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function sl(e){e._valueTracker||(e._valueTracker=rb(e))}function H1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=D1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ef(e,t){var n=t.checked;return Ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function $p(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=br(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function B1(e,t){t=t.checked,t!=null&&Mh(e,"checked",t,!1)}function tf(e,t){B1(e,t);var n=br(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nf(e,t.type,n):t.hasOwnProperty("defaultValue")&&nf(e,t.type,br(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nf(e,t,n){(t!=="number"||Yl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bo=Array.isArray;function qi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+br(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(Bo(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:br(n)}}function W1(e,t){var n=br(t.value),r=br(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ap(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function U1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function of(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?U1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ul,V1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ul.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ua(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ib=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(e){ib.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Xo[t]=Xo[e]})});function Y1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Xo.hasOwnProperty(e)&&Xo[e]?(""+t).trim():t+"px"}function X1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Y1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ob=Ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function af(e,t){if(t){if(ob[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function lf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sf=null;function kh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uf=null,Ki=null,Qi=null;function Lp(e){if(e=Ra(e)){if(typeof uf!="function")throw Error(z(280));var t=e.stateNode;t&&(t=Vs(t),uf(e.stateNode,e.type,t))}}function G1(e){Ki?Qi?Qi.push(e):Qi=[e]:Ki=e}function q1(){if(Ki){var e=Ki,t=Qi;if(Qi=Ki=null,Lp(e),t)for(e=0;e<t.length;e++)Lp(t[e])}}function K1(e,t){return e(t)}function Q1(){}var Zu=!1;function Z1(e,t,n){if(Zu)return e(t,n);Zu=!0;try{return K1(e,t,n)}finally{Zu=!1,(Ki!==null||Qi!==null)&&(Q1(),q1())}}function ca(e,t){var n=e.stateNode;if(n===null)return null;var r=Vs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var cf=!1;if(jn)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){cf=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch(e){cf=!1}function ab(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Go=!1,Xl=null,Gl=!1,ff=null,lb={onError:function(e){Go=!0,Xl=e}};function sb(e,t,n,r,i,o,a,l,s){Go=!1,Xl=null,ab.apply(lb,arguments)}function ub(e,t,n,r,i,o,a,l,s){if(sb.apply(this,arguments),Go){if(Go){var u=Xl;Go=!1,Xl=null}else throw Error(z(198));Gl||(Gl=!0,ff=u)}}function fi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function J1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rp(e){if(fi(e)!==e)throw Error(z(188))}function cb(e){var t=e.alternate;if(!t){if(t=fi(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Rp(i),e;if(o===r)return Rp(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function ey(e){return e=cb(e),e!==null?ty(e):null}function ty(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ty(e);if(t!==null)return t;e=e.sibling}return null}var ny=At.unstable_scheduleCallback,Ip=At.unstable_cancelCallback,fb=At.unstable_shouldYield,hb=At.unstable_requestPaint,Be=At.unstable_now,db=At.unstable_getCurrentPriorityLevel,zh=At.unstable_ImmediatePriority,ry=At.unstable_UserBlockingPriority,ql=At.unstable_NormalPriority,pb=At.unstable_LowPriority,iy=At.unstable_IdlePriority,Hs=null,yn=null;function vb(e){if(yn&&typeof yn.onCommitFiberRoot=="function")try{yn.onCommitFiberRoot(Hs,e,void 0,(e.current.flags&128)===128)}catch(t){}}var on=Math.clz32?Math.clz32:gb,mb=Math.log,yb=Math.LN2;function gb(e){return e>>>=0,e===0?32:31-(mb(e)/yb|0)|0}var cl=64,fl=4194304;function Wo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Wo(l):(o&=a,o!==0&&(r=Wo(o)))}else a=n&~i,a!==0?r=Wo(a):o!==0&&(r=Wo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function _b(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-on(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=_b(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function oy(){var e=cl;return cl<<=1,!(cl&4194240)&&(cl=64),e}function Ju(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Aa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function xb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Ah(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function ay(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ly,Lh,sy,uy,cy,df=!1,hl=[],dr=null,pr=null,vr=null,fa=new Map,ha=new Map,ur=[],bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jp(e,t){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function Lo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ra(t),t!==null&&Lh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Sb(e,t,n,r,i){switch(t){case"focusin":return dr=Lo(dr,e,t,n,r,i),!0;case"dragenter":return pr=Lo(pr,e,t,n,r,i),!0;case"mouseover":return vr=Lo(vr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return fa.set(o,Lo(fa.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ha.set(o,Lo(ha.get(o)||null,e,t,n,r,i)),!0}return!1}function fy(e){var t=Yr(e.target);if(t!==null){var n=fi(t);if(n!==null){if(t=n.tag,t===13){if(t=J1(n),t!==null){e.blockedOn=t,cy(e.priority,function(){sy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sf=r,n.target.dispatchEvent(r),sf=null}else return t=Ra(n),t!==null&&Lh(t),e.blockedOn=n,!1;t.shift()}return!0}function Fp(e,t,n){kl(e)&&n.delete(t)}function Tb(){df=!1,dr!==null&&kl(dr)&&(dr=null),pr!==null&&kl(pr)&&(pr=null),vr!==null&&kl(vr)&&(vr=null),fa.forEach(Fp),ha.forEach(Fp)}function Ro(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,Tb)))}function da(e){function t(i){return Ro(i,e)}if(0<hl.length){Ro(hl[0],e);for(var n=1;n<hl.length;n++){var r=hl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(dr!==null&&Ro(dr,e),pr!==null&&Ro(pr,e),vr!==null&&Ro(vr,e),fa.forEach(t),ha.forEach(t),n=0;n<ur.length;n++)r=ur[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)fy(n),n.blockedOn===null&&ur.shift()}var Zi=Vn.ReactCurrentBatchConfig,Ql=!0;function Eb(e,t,n,r){var i=ye,o=Zi.transition;Zi.transition=null;try{ye=1,Rh(e,t,n,r)}finally{ye=i,Zi.transition=o}}function Cb(e,t,n,r){var i=ye,o=Zi.transition;Zi.transition=null;try{ye=4,Rh(e,t,n,r)}finally{ye=i,Zi.transition=o}}function Rh(e,t,n,r){if(Ql){var i=pf(e,t,n,r);if(i===null)uc(e,t,r,Zl,n),jp(e,r);else if(Sb(i,e,t,n,r))r.stopPropagation();else if(jp(e,r),t&4&&-1<bb.indexOf(e)){for(;i!==null;){var o=Ra(i);if(o!==null&&ly(o),o=pf(e,t,n,r),o===null&&uc(e,t,r,Zl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else uc(e,t,r,null,n)}}var Zl=null;function pf(e,t,n,r){if(Zl=null,e=kh(r),e=Yr(e),e!==null)if(t=fi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=J1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zl=e,null}function hy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(db()){case zh:return 1;case ry:return 4;case ql:case pb:return 16;case iy:return 536870912;default:return 16}default:return 16}}var fr=null,Ih=null,zl=null;function dy(){if(zl)return zl;var e,t=Ih,n=t.length,r,i="value"in fr?fr.value:fr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return zl=i.slice(e,1<r?1-r:void 0)}function Al(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Np(){return!1}function Rt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dl:Np,this.isPropagationStopped=Np,this}return Ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jh=Rt(vo),La=Ie({},vo,{view:0,detail:0}),Mb=Rt(La),ec,tc,Io,Bs=Ie({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(ec=e.screenX-Io.screenX,tc=e.screenY-Io.screenY):tc=ec=0,Io=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:tc}}),Dp=Rt(Bs),Ob=Ie({},Bs,{dataTransfer:0}),Pb=Rt(Ob),$b=Ie({},La,{relatedTarget:0}),nc=Rt($b),kb=Ie({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),zb=Rt(kb),Ab=Ie({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lb=Rt(Ab),Rb=Ie({},vo,{data:0}),Hp=Rt(Rb),Ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fb[e])?!!t[e]:!1}function Fh(){return Nb}var Db=Ie({},La,{key:function(e){if(e.key){var t=Ib[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hb=Rt(Db),Bb=Ie({},Bs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Rt(Bb),Wb=Ie({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),Ub=Rt(Wb),Vb=Ie({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yb=Rt(Vb),Xb=Ie({},Bs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gb=Rt(Xb),qb=[9,13,27,32],Nh=jn&&"CompositionEvent"in window,qo=null;jn&&"documentMode"in document&&(qo=document.documentMode);var Kb=jn&&"TextEvent"in window&&!qo,py=jn&&(!Nh||qo&&8<qo&&11>=qo),Wp=String.fromCharCode(32),Up=!1;function vy(e,t){switch(e){case"keyup":return qb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function my(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Li=!1;function Qb(e,t){switch(e){case"compositionend":return my(t);case"keypress":return t.which!==32?null:(Up=!0,Wp);case"textInput":return e=t.data,e===Wp&&Up?null:e;default:return null}}function Zb(e,t){if(Li)return e==="compositionend"||!Nh&&vy(e,t)?(e=dy(),zl=Ih=fr=null,Li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return py&&t.locale!=="ko"?null:t.data;default:return null}}var Jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jb[e.type]:t==="textarea"}function yy(e,t,n,r){G1(r),t=Jl(t,"onChange"),0<t.length&&(n=new jh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ko=null,pa=null;function eS(e){Oy(e,0)}function Ws(e){var t=ji(e);if(H1(t))return e}function tS(e,t){if(e==="change")return t}var gy=!1;if(jn){var rc;if(jn){var ic="oninput"in document;if(!ic){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),ic=typeof Yp.oninput=="function"}rc=ic}else rc=!1;gy=rc&&(!document.documentMode||9<document.documentMode)}function Xp(){Ko&&(Ko.detachEvent("onpropertychange",_y),pa=Ko=null)}function _y(e){if(e.propertyName==="value"&&Ws(pa)){var t=[];yy(t,pa,e,kh(e)),Z1(eS,t)}}function nS(e,t,n){e==="focusin"?(Xp(),Ko=t,pa=n,Ko.attachEvent("onpropertychange",_y)):e==="focusout"&&Xp()}function rS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ws(pa)}function iS(e,t){if(e==="click")return Ws(t)}function oS(e,t){if(e==="input"||e==="change")return Ws(t)}function aS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ln=typeof Object.is=="function"?Object.is:aS;function va(e,t){if(ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qc.call(t,i)||!ln(e[i],t[i]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qp(e,t){var n=Gp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gp(n)}}function wy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xy(){for(var e=window,t=Yl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch(r){n=!1}if(n)e=t.contentWindow;else break;t=Yl(e.document)}return t}function Dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function lS(e){var t=xy(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wy(n.ownerDocument.documentElement,n)){if(r!==null&&Dh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=qp(n,o);var a=qp(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sS=jn&&"documentMode"in document&&11>=document.documentMode,Ri=null,vf=null,Qo=null,mf=!1;function Kp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||Ri==null||Ri!==Yl(r)||(r=Ri,"selectionStart"in r&&Dh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qo&&va(Qo,r)||(Qo=r,r=Jl(vf,"onSelect"),0<r.length&&(t=new jh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ri)))}function pl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ii={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},oc={},by={};jn&&(by=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Us(e){if(oc[e])return oc[e];if(!Ii[e])return e;var t=Ii[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in by)return oc[e]=t[n];return e}var Sy=Us("animationend"),Ty=Us("animationiteration"),Ey=Us("animationstart"),Cy=Us("transitionend"),My=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(e,t){My.set(e,t),ci(t,[e])}for(var ac=0;ac<Qp.length;ac++){var lc=Qp[ac],uS=lc.toLowerCase(),cS=lc[0].toUpperCase()+lc.slice(1);Pr(uS,"on"+cS)}Pr(Sy,"onAnimationEnd");Pr(Ty,"onAnimationIteration");Pr(Ey,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Cy,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Zp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ub(r,t,void 0,e),e.currentTarget=null}function Oy(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Zp(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Zp(i,l,u),o=s}}}if(Gl)throw e=ff,Gl=!1,ff=null,e}function Me(e,t){var n=t[xf];n===void 0&&(n=t[xf]=new Set);var r=e+"__bubble";n.has(r)||(Py(t,e,2,!1),n.add(r))}function sc(e,t,n){var r=0;t&&(r|=4),Py(n,e,r,t)}var vl="_reactListening"+Math.random().toString(36).slice(2);function ma(e){if(!e[vl]){e[vl]=!0,I1.forEach(function(n){n!=="selectionchange"&&(fS.has(n)||sc(n,!1,e),sc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vl]||(t[vl]=!0,sc("selectionchange",!1,t))}}function Py(e,t,n,r){switch(hy(t)){case 1:var i=Eb;break;case 4:i=Cb;break;default:i=Rh}n=i.bind(null,t,n,e),i=void 0,!cf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function uc(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Yr(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Z1(function(){var u=o,c=kh(n),f=[];e:{var h=My.get(e);if(h!==void 0){var d=jh,p=e;switch(e){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":d=Hb;break;case"focusin":p="focus",d=nc;break;case"focusout":p="blur",d=nc;break;case"beforeblur":case"afterblur":d=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":d=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":d=Pb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":d=Ub;break;case Sy:case Ty:case Ey:d=zb;break;case Cy:d=Yb;break;case"scroll":d=Mb;break;case"wheel":d=Gb;break;case"copy":case"cut":case"paste":d=Lb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":d=Bp}var g=(t&4)!==0,_=!g&&e==="scroll",m=g?h!==null?h+"Capture":null:h;g=[];for(var v=u,w;v!==null;){w=v;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,m!==null&&(b=ca(v,m),b!=null&&g.push(ya(v,b,w)))),_)break;v=v.return}0<g.length&&(h=new d(h,p,null,n,c),f.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",d=e==="mouseout"||e==="pointerout",h&&n!==sf&&(p=n.relatedTarget||n.fromElement)&&(Yr(p)||p[Fn]))break e;if((d||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,d?(p=n.relatedTarget||n.toElement,d=u,p=p?Yr(p):null,p!==null&&(_=fi(p),p!==_||p.tag!==5&&p.tag!==6)&&(p=null)):(d=null,p=u),d!==p)){if(g=Dp,b="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(g=Bp,b="onPointerLeave",m="onPointerEnter",v="pointer"),_=d==null?h:ji(d),w=p==null?h:ji(p),h=new g(b,v+"leave",d,n,c),h.target=_,h.relatedTarget=w,b=null,Yr(c)===u&&(g=new g(m,v+"enter",p,n,c),g.target=w,g.relatedTarget=_,b=g),_=b,d&&p)t:{for(g=d,m=p,v=0,w=g;w;w=Oi(w))v++;for(w=0,b=m;b;b=Oi(b))w++;for(;0<v-w;)g=Oi(g),v--;for(;0<w-v;)m=Oi(m),w--;for(;v--;){if(g===m||m!==null&&g===m.alternate)break t;g=Oi(g),m=Oi(m)}g=null}else g=null;d!==null&&Jp(f,h,d,g,!1),p!==null&&_!==null&&Jp(f,_,p,g,!0)}}e:{if(h=u?ji(u):window,d=h.nodeName&&h.nodeName.toLowerCase(),d==="select"||d==="input"&&h.type==="file")var S=tS;else if(Vp(h))if(gy)S=oS;else{S=rS;var E=nS}else(d=h.nodeName)&&d.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=iS);if(S&&(S=S(e,u))){yy(f,S,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&nf(h,"number",h.value)}switch(E=u?ji(u):window,e){case"focusin":(Vp(E)||E.contentEditable==="true")&&(Ri=E,vf=u,Qo=null);break;case"focusout":Qo=vf=Ri=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Kp(f,n,c);break;case"selectionchange":if(sS)break;case"keydown":case"keyup":Kp(f,n,c)}var $;if(Nh)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Li?vy(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(py&&n.locale!=="ko"&&(Li||P!=="onCompositionStart"?P==="onCompositionEnd"&&Li&&($=dy()):(fr=c,Ih="value"in fr?fr.value:fr.textContent,Li=!0)),E=Jl(u,P),0<E.length&&(P=new Hp(P,e,null,n,c),f.push({event:P,listeners:E}),$?P.data=$:($=my(n),$!==null&&(P.data=$)))),($=Kb?Qb(e,n):Zb(e,n))&&(u=Jl(u,"onBeforeInput"),0<u.length&&(c=new Hp("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=$))}Oy(f,t)})}function ya(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ca(e,n),o!=null&&r.unshift(ya(e,o,i)),o=ca(e,t),o!=null&&r.push(ya(e,o,i))),e=e.return}return r}function Oi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jp(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ca(n,o),s!=null&&a.unshift(ya(n,s,l))):i||(s=ca(n,o),s!=null&&a.push(ya(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var hS=/\r\n?/g,dS=/\u0000|\uFFFD/g;function ev(e){return(typeof e=="string"?e:""+e).replace(hS,`
`).replace(dS,"")}function ml(e,t,n){if(t=ev(t),ev(e)!==t&&n)throw Error(z(425))}function es(){}var yf=null,gf=null;function _f(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wf=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,tv=typeof Promise=="function"?Promise:void 0,vS=typeof queueMicrotask=="function"?queueMicrotask:typeof tv<"u"?function(e){return tv.resolve(null).then(e).catch(mS)}:wf;function mS(e){setTimeout(function(){throw e})}function cc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),da(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);da(t)}function mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var mo=Math.random().toString(36).slice(2),mn="__reactFiber$"+mo,ga="__reactProps$"+mo,Fn="__reactContainer$"+mo,xf="__reactEvents$"+mo,yS="__reactListeners$"+mo,gS="__reactHandles$"+mo;function Yr(e){var t=e[mn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Fn]||n[mn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nv(e);e!==null;){if(n=e[mn])return n;e=nv(e)}return t}e=n,n=e.parentNode}return null}function Ra(e){return e=e[mn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ji(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function Vs(e){return e[ga]||null}var bf=[],Fi=-1;function $r(e){return{current:e}}function Pe(e){0>Fi||(e.current=bf[Fi],bf[Fi]=null,Fi--)}function Te(e,t){Fi++,bf[Fi]=e.current,e.current=t}var Sr={},pt=$r(Sr),St=$r(!1),Jr=Sr;function ro(e,t){var n=e.type.contextTypes;if(!n)return Sr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Tt(e){return e=e.childContextTypes,e!=null}function ts(){Pe(St),Pe(pt)}function rv(e,t,n){if(pt.current!==Sr)throw Error(z(168));Te(pt,t),Te(St,n)}function $y(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,nb(e)||"Unknown",i));return Ie({},n,r)}function ns(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sr,Jr=pt.current,Te(pt,e),Te(St,St.current),!0}function iv(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=$y(e,t,Jr),r.__reactInternalMemoizedMergedChildContext=e,Pe(St),Pe(pt),Te(pt,e)):Pe(St),Te(St,n)}var zn=null,Ys=!1,fc=!1;function ky(e){zn===null?zn=[e]:zn.push(e)}function _S(e){Ys=!0,ky(e)}function kr(){if(!fc&&zn!==null){fc=!0;var e=0,t=ye;try{var n=zn;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zn=null,Ys=!1}catch(i){throw zn!==null&&(zn=zn.slice(e+1)),ny(zh,kr),i}finally{ye=t,fc=!1}}return null}var Ni=[],Di=0,rs=null,is=0,Ht=[],Bt=0,ei=null,Ln=1,Rn="";function Nr(e,t){Ni[Di++]=is,Ni[Di++]=rs,rs=e,is=t}function zy(e,t,n){Ht[Bt++]=Ln,Ht[Bt++]=Rn,Ht[Bt++]=ei,ei=e;var r=Ln;e=Rn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ln=1<<32-on(t)+i|n<<i|r,Rn=o+e}else Ln=1<<o|n<<i|r,Rn=e}function Hh(e){e.return!==null&&(Nr(e,1),zy(e,1,0))}function Bh(e){for(;e===rs;)rs=Ni[--Di],Ni[Di]=null,is=Ni[--Di],Ni[Di]=null;for(;e===ei;)ei=Ht[--Bt],Ht[Bt]=null,Rn=Ht[--Bt],Ht[Bt]=null,Ln=Ht[--Bt],Ht[Bt]=null}var zt=null,kt=null,ke=!1,tn=null;function Ay(e,t){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ov(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,zt=e,kt=mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,zt=e,kt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ei!==null?{id:Ln,overflow:Rn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,zt=e,kt=null,!0):!1;default:return!1}}function Sf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tf(e){if(ke){var t=kt;if(t){var n=t;if(!ov(e,t)){if(Sf(e))throw Error(z(418));t=mr(n.nextSibling);var r=zt;t&&ov(e,t)?Ay(r,n):(e.flags=e.flags&-4097|2,ke=!1,zt=e)}}else{if(Sf(e))throw Error(z(418));e.flags=e.flags&-4097|2,ke=!1,zt=e}}}function av(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;zt=e}function yl(e){if(e!==zt)return!1;if(!ke)return av(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_f(e.type,e.memoizedProps)),t&&(t=kt)){if(Sf(e))throw Ly(),Error(z(418));for(;t;)Ay(e,t),t=mr(t.nextSibling)}if(av(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){kt=mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}kt=null}}else kt=zt?mr(e.stateNode.nextSibling):null;return!0}function Ly(){for(var e=kt;e;)e=mr(e.nextSibling)}function io(){kt=zt=null,ke=!1}function Wh(e){tn===null?tn=[e]:tn.push(e)}var wS=Vn.ReactCurrentBatchConfig;function Jt(e,t){if(e&&e.defaultProps){t=Ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var os=$r(null),as=null,Hi=null,Uh=null;function Vh(){Uh=Hi=as=null}function Yh(e){var t=os.current;Pe(os),e._currentValue=t}function Ef(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ji(e,t){as=e,Uh=Hi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Xt(e){var t=e._currentValue;if(Uh!==e)if(e={context:e,memoizedValue:t,next:null},Hi===null){if(as===null)throw Error(z(308));Hi=e,as.dependencies={lanes:0,firstContext:e}}else Hi=Hi.next=e;return t}var Xr=null;function Xh(e){Xr===null?Xr=[e]:Xr.push(e)}function Ry(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xh(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nn(e,r)}function Nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ir=!1;function Gh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nn(e,n)}return i=r.interleaved,i===null?(t.next=t,Xh(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nn(e,n)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ah(e,n)}}function lv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ls(e,t,n,r){var i=e.updateQueue;ir=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(o!==null){var f=i.baseState;a=0,c=u=s=null,l=o;do{var h=l.lane,d=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:d,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,g=l;switch(h=t,d=n,g.tag){case 1:if(p=g.payload,typeof p=="function"){f=p.call(d,f,h);break e}f=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=g.payload,h=typeof p=="function"?p.call(d,f,h):p,h==null)break e;f=Ie({},f,h);break e;case 2:ir=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else d={eventTime:d,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=d,s=f):c=c.next=d,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(s=f),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ni|=a,e.lanes=a,e.memoizedState=f}}function sv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var jy=new R1.Component().refs;function Cf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={isMounted:function(e){return(e=e._reactInternals)?fi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=In(r,i);o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(an(t,e,i,r),Ll(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=gt(),i=_r(e),o=In(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=yr(e,o,i),t!==null&&(an(t,e,i,r),Ll(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gt(),r=_r(e),i=In(n,r);i.tag=2,t!=null&&(i.callback=t),t=yr(e,i,r),t!==null&&(an(t,e,r,n),Ll(t,e,r))}};function uv(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!va(n,r)||!va(i,o):!0}function Fy(e,t,n){var r=!1,i=Sr,o=t.contextType;return typeof o=="object"&&o!==null?o=Xt(o):(i=Tt(t)?Jr:pt.current,r=t.contextTypes,o=(r=r!=null)?ro(e,i):Sr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function cv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function Mf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=jy,Gh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xt(o):(o=Tt(t)?Jr:pt.current,i.context=ro(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cf(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xs.enqueueReplaceState(i,i.state,null),ls(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===jy&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function gl(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fv(e){var t=e._init;return t(e._payload)}function Ny(e){function t(m,v){if(e){var w=m.deletions;w===null?(m.deletions=[v],m.flags|=16):w.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function r(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function i(m,v){return m=wr(m,v),m.index=0,m.sibling=null,m}function o(m,v,w){return m.index=w,e?(w=m.alternate,w!==null?(w=w.index,w<v?(m.flags|=2,v):w):(m.flags|=2,v)):(m.flags|=1048576,v)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,v,w,b){return v===null||v.tag!==6?(v=gc(w,m.mode,b),v.return=m,v):(v=i(v,w),v.return=m,v)}function s(m,v,w,b){var S=w.type;return S===Ai?c(m,v,w.props.children,b,w.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&fv(S)===v.type)?(b=i(v,w.props),b.ref=jo(m,v,w),b.return=m,b):(b=Dl(w.type,w.key,w.props,null,m.mode,b),b.ref=jo(m,v,w),b.return=m,b)}function u(m,v,w,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=_c(w,m.mode,b),v.return=m,v):(v=i(v,w.children||[]),v.return=m,v)}function c(m,v,w,b,S){return v===null||v.tag!==7?(v=Kr(w,m.mode,b,S),v.return=m,v):(v=i(v,w),v.return=m,v)}function f(m,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gc(""+v,m.mode,w),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return w=Dl(v.type,v.key,v.props,null,m.mode,w),w.ref=jo(m,null,v),w.return=m,w;case zi:return v=_c(v,m.mode,w),v.return=m,v;case rr:var b=v._init;return f(m,b(v._payload),w)}if(Bo(v)||zo(v))return v=Kr(v,m.mode,w,null),v.return=m,v;gl(m,v)}return null}function h(m,v,w,b){var S=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return S!==null?null:l(m,v,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ll:return w.key===S?s(m,v,w,b):null;case zi:return w.key===S?u(m,v,w,b):null;case rr:return S=w._init,h(m,v,S(w._payload),b)}if(Bo(w)||zo(w))return S!==null?null:c(m,v,w,b,null);gl(m,w)}return null}function d(m,v,w,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(w)||null,l(v,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ll:return m=m.get(b.key===null?w:b.key)||null,s(v,m,b,S);case zi:return m=m.get(b.key===null?w:b.key)||null,u(v,m,b,S);case rr:var E=b._init;return d(m,v,w,E(b._payload),S)}if(Bo(b)||zo(b))return m=m.get(w)||null,c(v,m,b,S,null);gl(v,b)}return null}function p(m,v,w,b){for(var S=null,E=null,$=v,P=v=0,F=null;$!==null&&P<w.length;P++){$.index>P?(F=$,$=null):F=$.sibling;var R=h(m,$,w[P],b);if(R===null){$===null&&($=F);break}e&&$&&R.alternate===null&&t(m,$),v=o(R,v,P),E===null?S=R:E.sibling=R,E=R,$=F}if(P===w.length)return n(m,$),ke&&Nr(m,P),S;if($===null){for(;P<w.length;P++)$=f(m,w[P],b),$!==null&&(v=o($,v,P),E===null?S=$:E.sibling=$,E=$);return ke&&Nr(m,P),S}for($=r(m,$);P<w.length;P++)F=d($,m,P,w[P],b),F!==null&&(e&&F.alternate!==null&&$.delete(F.key===null?P:F.key),v=o(F,v,P),E===null?S=F:E.sibling=F,E=F);return e&&$.forEach(function(W){return t(m,W)}),ke&&Nr(m,P),S}function g(m,v,w,b){var S=zo(w);if(typeof S!="function")throw Error(z(150));if(w=S.call(w),w==null)throw Error(z(151));for(var E=S=null,$=v,P=v=0,F=null,R=w.next();$!==null&&!R.done;P++,R=w.next()){$.index>P?(F=$,$=null):F=$.sibling;var W=h(m,$,R.value,b);if(W===null){$===null&&($=F);break}e&&$&&W.alternate===null&&t(m,$),v=o(W,v,P),E===null?S=W:E.sibling=W,E=W,$=F}if(R.done)return n(m,$),ke&&Nr(m,P),S;if($===null){for(;!R.done;P++,R=w.next())R=f(m,R.value,b),R!==null&&(v=o(R,v,P),E===null?S=R:E.sibling=R,E=R);return ke&&Nr(m,P),S}for($=r(m,$);!R.done;P++,R=w.next())R=d($,m,P,R.value,b),R!==null&&(e&&R.alternate!==null&&$.delete(R.key===null?P:R.key),v=o(R,v,P),E===null?S=R:E.sibling=R,E=R);return e&&$.forEach(function(Z){return t(m,Z)}),ke&&Nr(m,P),S}function _(m,v,w,b){if(typeof w=="object"&&w!==null&&w.type===Ai&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ll:e:{for(var S=w.key,E=v;E!==null;){if(E.key===S){if(S=w.type,S===Ai){if(E.tag===7){n(m,E.sibling),v=i(E,w.props.children),v.return=m,m=v;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===rr&&fv(S)===E.type){n(m,E.sibling),v=i(E,w.props),v.ref=jo(m,E,w),v.return=m,m=v;break e}n(m,E);break}else t(m,E);E=E.sibling}w.type===Ai?(v=Kr(w.props.children,m.mode,b,w.key),v.return=m,m=v):(b=Dl(w.type,w.key,w.props,null,m.mode,b),b.ref=jo(m,v,w),b.return=m,m=b)}return a(m);case zi:e:{for(E=w.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(m,v.sibling),v=i(v,w.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=_c(w,m.mode,b),v.return=m,m=v}return a(m);case rr:return E=w._init,_(m,v,E(w._payload),b)}if(Bo(w))return p(m,v,w,b);if(zo(w))return g(m,v,w,b);gl(m,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(m,v.sibling),v=i(v,w),v.return=m,m=v):(n(m,v),v=gc(w,m.mode,b),v.return=m,m=v),a(m)):n(m,v)}return _}var oo=Ny(!0),Dy=Ny(!1),Ia={},gn=$r(Ia),_a=$r(Ia),wa=$r(Ia);function Gr(e){if(e===Ia)throw Error(z(174));return e}function qh(e,t){switch(Te(wa,t),Te(_a,e),Te(gn,Ia),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:of(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=of(t,e)}Pe(gn),Te(gn,t)}function ao(){Pe(gn),Pe(_a),Pe(wa)}function Hy(e){Gr(wa.current);var t=Gr(gn.current),n=of(t,e.type);t!==n&&(Te(_a,e),Te(gn,n))}function Kh(e){_a.current===e&&(Pe(gn),Pe(_a))}var Le=$r(0);function ss(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hc=[];function Qh(){for(var e=0;e<hc.length;e++)hc[e]._workInProgressVersionPrimary=null;hc.length=0}var Rl=Vn.ReactCurrentDispatcher,dc=Vn.ReactCurrentBatchConfig,ti=0,Re=null,Ge=null,Ze=null,us=!1,Zo=!1,xa=0,xS=0;function ft(){throw Error(z(321))}function Zh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ln(e[n],t[n]))return!1;return!0}function Jh(e,t,n,r,i,o){if(ti=o,Re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rl.current=e===null||e.memoizedState===null?ES:CS,e=n(r,i),Zo){o=0;do{if(Zo=!1,xa=0,25<=o)throw Error(z(301));o+=1,Ze=Ge=null,t.updateQueue=null,Rl.current=MS,e=n(r,i)}while(Zo)}if(Rl.current=cs,t=Ge!==null&&Ge.next!==null,ti=0,Ze=Ge=Re=null,us=!1,t)throw Error(z(300));return e}function ed(){var e=xa!==0;return xa=0,e}function vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Gt(){if(Ge===null){var e=Re.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var t=Ze===null?Re.memoizedState:Ze.next;if(t!==null)Ze=t,Ge=e;else{if(e===null)throw Error(z(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Ze===null?Re.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function ba(e,t){return typeof t=="function"?t(e):t}function pc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var c=u.lane;if((ti&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=r):s=s.next=f,Re.lanes|=c,ni|=c}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,ln(r,t.memoizedState)||(bt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Re.lanes|=o,ni|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vc(e){var t=Gt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);ln(o,t.memoizedState)||(bt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function By(){}function Wy(e,t){var n=Re,r=Gt(),i=t(),o=!ln(r.memoizedState,i);if(o&&(r.memoizedState=i,bt=!0),r=r.queue,td(Yy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Sa(9,Vy.bind(null,n,r,i,t),void 0,null),et===null)throw Error(z(349));ti&30||Uy(n,t,i)}return i}function Uy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vy(e,t,n,r){t.value=n,t.getSnapshot=r,Xy(t)&&Gy(e)}function Yy(e,t,n){return n(function(){Xy(t)&&Gy(e)})}function Xy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ln(e,n)}catch(r){return!0}}function Gy(e){var t=Nn(e,1);t!==null&&an(t,e,1,-1)}function hv(e){var t=vn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=TS.bind(null,Re,e),[t.memoizedState,e]}function Sa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Re.updateQueue,t===null?(t={lastEffect:null,stores:null},Re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function qy(){return Gt().memoizedState}function Il(e,t,n,r){var i=vn();Re.flags|=e,i.memoizedState=Sa(1|t,n,void 0,r===void 0?null:r)}function Gs(e,t,n,r){var i=Gt();r=r===void 0?null:r;var o=void 0;if(Ge!==null){var a=Ge.memoizedState;if(o=a.destroy,r!==null&&Zh(r,a.deps)){i.memoizedState=Sa(t,n,o,r);return}}Re.flags|=e,i.memoizedState=Sa(1|t,n,o,r)}function dv(e,t){return Il(8390656,8,e,t)}function td(e,t){return Gs(2048,8,e,t)}function Ky(e,t){return Gs(4,2,e,t)}function Qy(e,t){return Gs(4,4,e,t)}function Zy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jy(e,t,n){return n=n!=null?n.concat([e]):null,Gs(4,4,Zy.bind(null,t,e),n)}function nd(){}function eg(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function tg(e,t){var n=Gt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ng(e,t,n){return ti&21?(ln(n,t)||(n=oy(),Re.lanes|=n,ni|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=n)}function bS(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=dc.transition;dc.transition={};try{e(!1),t()}finally{ye=n,dc.transition=r}}function rg(){return Gt().memoizedState}function SS(e,t,n){var r=_r(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ig(e))og(t,n);else if(n=Ry(e,t,n,r),n!==null){var i=gt();an(n,e,r,i),ag(n,t,r)}}function TS(e,t,n){var r=_r(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ig(e))og(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,a)){var s=t.interleaved;s===null?(i.next=i,Xh(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch(u){}finally{}n=Ry(e,t,i,r),n!==null&&(i=gt(),an(n,e,r,i),ag(n,t,r))}}function ig(e){var t=e.alternate;return e===Re||t!==null&&t===Re}function og(e,t){Zo=us=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ag(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ah(e,n)}}var cs={readContext:Xt,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},ES={readContext:Xt,useCallback:function(e,t){return vn().memoizedState=[e,t===void 0?null:t],e},useContext:Xt,useEffect:dv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Il(4194308,4,Zy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Il(4194308,4,e,t)},useInsertionEffect:function(e,t){return Il(4,2,e,t)},useMemo:function(e,t){var n=vn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=SS.bind(null,Re,e),[r.memoizedState,e]},useRef:function(e){var t=vn();return e={current:e},t.memoizedState=e},useState:hv,useDebugValue:nd,useDeferredValue:function(e){return vn().memoizedState=e},useTransition:function(){var e=hv(!1),t=e[0];return e=bS.bind(null,e[1]),vn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Re,i=vn();if(ke){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),et===null)throw Error(z(349));ti&30||Uy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,dv(Yy.bind(null,r,o,e),[e]),r.flags|=2048,Sa(9,Vy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vn(),t=et.identifierPrefix;if(ke){var n=Rn,r=Ln;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=xS++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},CS={readContext:Xt,useCallback:eg,useContext:Xt,useEffect:td,useImperativeHandle:Jy,useInsertionEffect:Ky,useLayoutEffect:Qy,useMemo:tg,useReducer:pc,useRef:qy,useState:function(){return pc(ba)},useDebugValue:nd,useDeferredValue:function(e){var t=Gt();return ng(t,Ge.memoizedState,e)},useTransition:function(){var e=pc(ba)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:By,useSyncExternalStore:Wy,useId:rg,unstable_isNewReconciler:!1},MS={readContext:Xt,useCallback:eg,useContext:Xt,useEffect:td,useImperativeHandle:Jy,useInsertionEffect:Ky,useLayoutEffect:Qy,useMemo:tg,useReducer:vc,useRef:qy,useState:function(){return vc(ba)},useDebugValue:nd,useDeferredValue:function(e){var t=Gt();return Ge===null?t.memoizedState=e:ng(t,Ge.memoizedState,e)},useTransition:function(){var e=vc(ba)[0],t=Gt().memoizedState;return[e,t]},useMutableSource:By,useSyncExternalStore:Wy,useId:rg,unstable_isNewReconciler:!1};function lo(e,t){try{var n="",r=t;do n+=tb(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function mc(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Of(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var OS=typeof WeakMap=="function"?WeakMap:Map;function lg(e,t,n){n=In(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hs||(hs=!0,Ff=r),Of(e,t)},n}function sg(e,t,n){n=In(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Of(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Of(e,t),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function pv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new OS;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=BS.bind(null,e,t,n),t.then(e,e))}function vv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mv(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=In(-1,1),t.tag=2,yr(n,t,1))),n.lanes|=1),e)}var PS=Vn.ReactCurrentOwner,bt=!1;function mt(e,t,n,r){t.child=e===null?Dy(t,null,n,r):oo(t,e.child,n,r)}function yv(e,t,n,r,i){n=n.render;var o=t.ref;return Ji(t,i),r=Jh(e,t,n,r,o,i),n=ed(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(ke&&n&&Hh(t),t.flags|=1,mt(e,t,r,i),t.child)}function gv(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!cd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ug(e,t,o,r,i)):(e=Dl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(a,r)&&e.ref===t.ref)return Dn(e,t,i)}return t.flags|=1,e=wr(o,r),e.ref=t.ref,e.return=t,t.child=e}function ug(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(va(o,r)&&e.ref===t.ref)if(bt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Dn(e,t,i)}return Pf(e,t,n,r,i)}function cg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Wi,$t),$t|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(Wi,$t),$t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Te(Wi,$t),$t|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Te(Wi,$t),$t|=r;return mt(e,t,i,n),t.child}function fg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pf(e,t,n,r,i){var o=Tt(n)?Jr:pt.current;return o=ro(t,o),Ji(t,i),n=Jh(e,t,n,r,o,i),r=ed(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Dn(e,t,i)):(ke&&r&&Hh(t),t.flags|=1,mt(e,t,n,i),t.child)}function _v(e,t,n,r,i){if(Tt(n)){var o=!0;ns(t)}else o=!1;if(Ji(t,i),t.stateNode===null)jl(e,t),Fy(t,n,r),Mf(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xt(u):(u=Tt(n)?Jr:pt.current,u=ro(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&cv(t,a,r,u),ir=!1;var h=t.memoizedState;a.state=h,ls(t,r,a,i),s=t.memoizedState,l!==r||h!==s||St.current||ir?(typeof c=="function"&&(Cf(t,n,c,r),s=t.memoizedState),(l=ir||uv(t,n,l,r,h,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Iy(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Jt(t.type,l),a.props=u,f=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=Xt(s):(s=Tt(n)?Jr:pt.current,s=ro(t,s));var d=n.getDerivedStateFromProps;(c=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||h!==s)&&cv(t,a,r,s),ir=!1,h=t.memoizedState,a.state=h,ls(t,r,a,i);var p=t.memoizedState;l!==f||h!==p||St.current||ir?(typeof d=="function"&&(Cf(t,n,d,r),p=t.memoizedState),(u=ir||uv(t,n,u,r,h,p,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,p,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,p,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return $f(e,t,n,r,o,i)}function $f(e,t,n,r,i,o){fg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&iv(t,n,!1),Dn(e,t,o);r=t.stateNode,PS.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=oo(t,e.child,null,o),t.child=oo(t,null,l,o)):mt(e,t,l,o),t.memoizedState=r.state,i&&iv(t,n,!0),t.child}function hg(e){var t=e.stateNode;t.pendingContext?rv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rv(e,t.context,!1),qh(e,t.containerInfo)}function wv(e,t,n,r,i){return io(),Wh(i),t.flags|=256,mt(e,t,n,r),t.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function zf(e){return{baseLanes:e,cachePool:null,transitions:null}}function dg(e,t,n){var r=t.pendingProps,i=Le.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Te(Le,i&1),e===null)return Tf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Qs(a,r,0,null),e=Kr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=zf(n),t.memoizedState=kf,e):rd(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $S(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=wr(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=wr(l,o):(o=Kr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?zf(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=kf,r}return o=e.child,e=o.sibling,r=wr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function rd(e,t){return t=Qs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _l(e,t,n,r){return r!==null&&Wh(r),oo(t,e.child,null,n),e=rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $S(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=mc(Error(z(422))),_l(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qs({mode:"visible",children:r.children},i,0,null),o=Kr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&oo(t,e.child,null,a),t.child.memoizedState=zf(a),t.memoizedState=kf,o);if(!(t.mode&1))return _l(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(z(419)),r=mc(o,r,void 0),_l(e,t,a,r)}if(l=(a&e.childLanes)!==0,bt||l){if(r=et,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nn(e,i),an(r,e,i,-1))}return ud(),r=mc(Error(z(421))),_l(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=WS.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,kt=mr(i.nextSibling),zt=t,ke=!0,tn=null,e!==null&&(Ht[Bt++]=Ln,Ht[Bt++]=Rn,Ht[Bt++]=ei,Ln=e.id,Rn=e.overflow,ei=t),t=rd(t,r.children),t.flags|=4096,t)}function xv(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ef(e.return,t,n)}function yc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(mt(e,t,r.children,n),r=Le.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xv(e,n,t);else if(e.tag===19)xv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Te(Le,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ss(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ss(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yc(t,!0,n,null,o);break;case"together":yc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ni|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=wr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kS(e,t,n){switch(t.tag){case 3:hg(t),io();break;case 5:Hy(t);break;case 1:Tt(t.type)&&ns(t);break;case 4:qh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Te(os,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Te(Le,Le.current&1),t.flags|=128,null):n&t.child.childLanes?dg(e,t,n):(Te(Le,Le.current&1),e=Dn(e,t,n),e!==null?e.sibling:null);Te(Le,Le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(Le,Le.current),r)break;return null;case 22:case 23:return t.lanes=0,cg(e,t,n)}return Dn(e,t,n)}var vg,Af,mg,yg;vg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Af=function(){};mg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gr(gn.current);var o=null;switch(n){case"input":i=ef(e,i),r=ef(e,r),o=[];break;case"select":i=Ie({},i,{value:void 0}),r=Ie({},r,{value:void 0}),o=[];break;case"textarea":i=rf(e,i),r=rf(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=es)}af(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(sa.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(sa.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&Me("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};yg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fo(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function zS(e,t,n){var r=t.pendingProps;switch(Bh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Tt(t.type)&&ts(),ht(t),null;case 3:return r=t.stateNode,ao(),Pe(St),Pe(pt),Qh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,tn!==null&&(Hf(tn),tn=null))),Af(e,t),ht(t),null;case 5:Kh(t);var i=Gr(wa.current);if(n=t.type,e!==null&&t.stateNode!=null)mg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return ht(t),null}if(e=Gr(gn.current),yl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[mn]=t,r[ga]=o,e=(t.mode&1)!==0,n){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(i=0;i<Uo.length;i++)Me(Uo[i],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":$p(r,o),Me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Me("invalid",r);break;case"textarea":zp(r,o),Me("invalid",r)}af(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ml(r.textContent,l,e),i=["children",""+l]):sa.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Me("scroll",r)}switch(n){case"input":sl(r),kp(r,o,!0);break;case"textarea":sl(r),Ap(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=es)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=U1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[mn]=t,e[ga]=r,vg(e,t,!1,!1),t.stateNode=e;e:{switch(a=lf(n,r),n){case"dialog":Me("cancel",e),Me("close",e),i=r;break;case"iframe":case"object":case"embed":Me("load",e),i=r;break;case"video":case"audio":for(i=0;i<Uo.length;i++)Me(Uo[i],e);i=r;break;case"source":Me("error",e),i=r;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=r;break;case"details":Me("toggle",e),i=r;break;case"input":$p(e,r),i=ef(e,r),Me("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ie({},r,{value:void 0}),Me("invalid",e);break;case"textarea":zp(e,r),i=rf(e,r),Me("invalid",e);break;default:i=r}af(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?X1(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&V1(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ua(e,s):typeof s=="number"&&ua(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(sa.hasOwnProperty(o)?s!=null&&o==="onScroll"&&Me("scroll",e):s!=null&&Mh(e,o,s,a))}switch(n){case"input":sl(e),kp(e,r,!1);break;case"textarea":sl(e),Ap(e);break;case"option":r.value!=null&&e.setAttribute("value",""+br(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?qi(e,!!r.multiple,o,!1):r.defaultValue!=null&&qi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=es)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)yg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=Gr(wa.current),Gr(gn.current),yl(t)){if(r=t.stateNode,n=t.memoizedProps,r[mn]=t,(o=r.nodeValue!==n)&&(e=zt,e!==null))switch(e.tag){case 3:ml(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ml(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mn]=t,t.stateNode=r}return ht(t),null;case 13:if(Pe(Le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&kt!==null&&t.mode&1&&!(t.flags&128))Ly(),io(),t.flags|=98560,o=!1;else if(o=yl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[mn]=t}else io(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),o=!1}else tn!==null&&(Hf(tn),tn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Le.current&1?qe===0&&(qe=3):ud())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return ao(),Af(e,t),e===null&&ma(t.stateNode.containerInfo),ht(t),null;case 10:return Yh(t.type._context),ht(t),null;case 17:return Tt(t.type)&&ts(),ht(t),null;case 19:if(Pe(Le),o=t.memoizedState,o===null)return ht(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Fo(o,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ss(e),a!==null){for(t.flags|=128,Fo(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Te(Le,Le.current&1|2),t.child}e=e.sibling}o.tail!==null&&Be()>so&&(t.flags|=128,r=!0,Fo(o,!1),t.lanes=4194304)}else{if(!r)if(e=ss(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ke)return ht(t),null}else 2*Be()-o.renderingStartTime>so&&n!==1073741824&&(t.flags|=128,r=!0,Fo(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Be(),t.sibling=null,n=Le.current,Te(Le,r?n&1|2:n&1),t):(ht(t),null);case 22:case 23:return sd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$t&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function AS(e,t){switch(Bh(t),t.tag){case 1:return Tt(t.type)&&ts(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ao(),Pe(St),Pe(pt),Qh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kh(t),null;case 13:if(Pe(Le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Le),null;case 4:return ao(),null;case 10:return Yh(t.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var wl=!1,dt=!1,LS=typeof WeakSet=="function"?WeakSet:Set,U=null;function Bi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(e,t,r)}else n.current=null}function Lf(e,t,n){try{n()}catch(r){Ne(e,t,r)}}var bv=!1;function RS(e,t){if(yf=Ql,e=xy(),Dh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(b){n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var d;f!==n||i!==0&&f.nodeType!==3||(l=a+i),f!==o||r!==0&&f.nodeType!==3||(s=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(d=f.firstChild)!==null;)h=f,f=d;for(;;){if(f===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++c===r&&(s=a),(d=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=d}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(gf={focusedElem:e,selectionRange:n},Ql=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var g=p.memoizedProps,_=p.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?g:Jt(t.type,g),_);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){Ne(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return p=bv,bv=!1,p}function Jo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Lf(t,n,o)}i=i.next}while(i!==r)}}function qs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Rf(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gg(e){var t=e.alternate;t!==null&&(e.alternate=null,gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[ga],delete t[xf],delete t[yS],delete t[gS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _g(e){return e.tag===5||e.tag===3||e.tag===4}function Sv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_g(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function If(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=es));else if(r!==4&&(e=e.child,e!==null))for(If(e,t,n),e=e.sibling;e!==null;)If(e,t,n),e=e.sibling}function jf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(jf(e,t,n),e=e.sibling;e!==null;)jf(e,t,n),e=e.sibling}var ot=null,en=!1;function er(e,t,n){for(n=n.child;n!==null;)wg(e,t,n),n=n.sibling}function wg(e,t,n){if(yn&&typeof yn.onCommitFiberUnmount=="function")try{yn.onCommitFiberUnmount(Hs,n)}catch(l){}switch(n.tag){case 5:dt||Bi(n,t);case 6:var r=ot,i=en;ot=null,er(e,t,n),ot=r,en=i,ot!==null&&(en?(e=ot,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(en?(e=ot,n=n.stateNode,e.nodeType===8?cc(e.parentNode,n):e.nodeType===1&&cc(e,n),da(e)):cc(ot,n.stateNode));break;case 4:r=ot,i=en,ot=n.stateNode.containerInfo,en=!0,er(e,t,n),ot=r,en=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lf(n,t,a),i=i.next}while(i!==r)}er(e,t,n);break;case 1:if(!dt&&(Bi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,t,l)}er(e,t,n);break;case 21:er(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,er(e,t,n),dt=r):er(e,t,n);break;default:er(e,t,n)}}function Tv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new LS),t.forEach(function(r){var i=US.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Zt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,en=!1;break e;case 3:ot=l.stateNode.containerInfo,en=!0;break e;case 4:ot=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(ot===null)throw Error(z(160));wg(o,a,i),ot=null,en=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){Ne(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xg(t,e),t=t.sibling}function xg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zt(t,e),dn(e),r&4){try{Jo(3,e,e.return),qs(3,e)}catch(g){Ne(e,e.return,g)}try{Jo(5,e,e.return)}catch(g){Ne(e,e.return,g)}}break;case 1:Zt(t,e),dn(e),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(Zt(t,e),dn(e),r&512&&n!==null&&Bi(n,n.return),e.flags&32){var i=e.stateNode;try{ua(i,"")}catch(g){Ne(e,e.return,g)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&B1(i,o),lf(l,a);var u=lf(l,o);for(a=0;a<s.length;a+=2){var c=s[a],f=s[a+1];c==="style"?X1(i,f):c==="dangerouslySetInnerHTML"?V1(i,f):c==="children"?ua(i,f):Mh(i,c,f,u)}switch(l){case"input":tf(i,o);break;case"textarea":W1(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var d=o.value;d!=null?qi(i,!!o.multiple,d,!1):h!==!!o.multiple&&(o.defaultValue!=null?qi(i,!!o.multiple,o.defaultValue,!0):qi(i,!!o.multiple,o.multiple?[]:"",!1))}i[ga]=o}catch(g){Ne(e,e.return,g)}}break;case 6:if(Zt(t,e),dn(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(g){Ne(e,e.return,g)}}break;case 3:if(Zt(t,e),dn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{da(t.containerInfo)}catch(g){Ne(e,e.return,g)}break;case 4:Zt(t,e),dn(e);break;case 13:Zt(t,e),dn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(ad=Be())),r&4&&Tv(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||c,Zt(t,e),dt=u):Zt(t,e),dn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(U=e,c=e.child;c!==null;){for(f=U=c;U!==null;){switch(h=U,d=h.child,h.tag){case 0:case 11:case 14:case 15:Jo(4,h,h.return);break;case 1:Bi(h,h.return);var p=h.stateNode;if(typeof p.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(g){Ne(r,n,g)}}break;case 5:Bi(h,h.return);break;case 22:if(h.memoizedState!==null){Cv(f);continue}}d!==null?(d.return=h,U=d):Cv(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Y1("display",a))}catch(g){Ne(e,e.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ne(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zt(t,e),dn(e),r&4&&Tv(e);break;case 21:break;default:Zt(t,e),dn(e)}}function dn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_g(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ua(i,""),r.flags&=-33);var o=Sv(e);jf(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Sv(e);If(e,l,a);break;default:throw Error(z(161))}}catch(s){Ne(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function IS(e,t,n){U=e,bg(e)}function bg(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||wl;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||dt;l=wl;var u=dt;if(wl=a,(dt=s)&&!u)for(U=i;U!==null;)a=U,s=a.child,a.tag===22&&a.memoizedState!==null?Mv(i):s!==null?(s.return=a,U=s):Mv(i);for(;o!==null;)U=o,bg(o),o=o.sibling;U=i,wl=l,dt=u}Ev(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,U=o):Ev(e)}}function Ev(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||qs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&sv(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}sv(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&da(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}dt||t.flags&512&&Rf(t)}catch(h){Ne(t,t.return,h)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Cv(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Mv(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qs(4,t)}catch(s){Ne(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){Ne(t,i,s)}}var o=t.return;try{Rf(t)}catch(s){Ne(t,o,s)}break;case 5:var a=t.return;try{Rf(t)}catch(s){Ne(t,a,s)}}}catch(s){Ne(t,t.return,s)}if(t===e){U=null;break}var l=t.sibling;if(l!==null){l.return=t.return,U=l;break}U=t.return}}var jS=Math.ceil,fs=Vn.ReactCurrentDispatcher,id=Vn.ReactCurrentOwner,Vt=Vn.ReactCurrentBatchConfig,he=0,et=null,We=null,lt=0,$t=0,Wi=$r(0),qe=0,Ta=null,ni=0,Ks=0,od=0,ea=null,xt=null,ad=0,so=1/0,$n=null,hs=!1,Ff=null,gr=null,xl=!1,hr=null,ds=0,ta=0,Nf=null,Fl=-1,Nl=0;function gt(){return he&6?Be():Fl!==-1?Fl:Fl=Be()}function _r(e){return e.mode&1?he&2&&lt!==0?lt&-lt:wS.transition!==null?(Nl===0&&(Nl=oy()),Nl):(e=ye,e!==0||(e=window.event,e=e===void 0?16:hy(e.type)),e):1}function an(e,t,n,r){if(50<ta)throw ta=0,Nf=null,Error(z(185));Aa(e,n,r),(!(he&2)||e!==et)&&(e===et&&(!(he&2)&&(Ks|=n),qe===4&&cr(e,lt)),Et(e,r),n===1&&he===0&&!(t.mode&1)&&(so=Be()+500,Ys&&kr()))}function Et(e,t){var n=e.callbackNode;wb(e,t);var r=Kl(e,e===et?lt:0);if(r===0)n!==null&&Ip(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ip(n),t===1)e.tag===0?_S(Ov.bind(null,e)):ky(Ov.bind(null,e)),vS(function(){!(he&6)&&kr()}),n=null;else{switch(ay(r)){case 1:n=zh;break;case 4:n=ry;break;case 16:n=ql;break;case 536870912:n=iy;break;default:n=ql}n=$g(n,Sg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sg(e,t){if(Fl=-1,Nl=0,he&6)throw Error(z(327));var n=e.callbackNode;if(eo()&&e.callbackNode!==n)return null;var r=Kl(e,e===et?lt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ps(e,r);else{t=r;var i=he;he|=2;var o=Eg();(et!==e||lt!==t)&&($n=null,so=Be()+500,qr(e,t));do try{DS();break}catch(l){Tg(e,l)}while(1);Vh(),fs.current=o,he=i,We!==null?t=0:(et=null,lt=0,t=qe)}if(t!==0){if(t===2&&(i=hf(e),i!==0&&(r=i,t=Df(e,i))),t===1)throw n=Ta,qr(e,0),cr(e,r),Et(e,Be()),n;if(t===6)cr(e,r);else{if(i=e.current.alternate,!(r&30)&&!FS(i)&&(t=ps(e,r),t===2&&(o=hf(e),o!==0&&(r=o,t=Df(e,o))),t===1))throw n=Ta,qr(e,0),cr(e,r),Et(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Dr(e,xt,$n);break;case 3:if(cr(e,r),(r&130023424)===r&&(t=ad+500-Be(),10<t)){if(Kl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){gt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=wf(Dr.bind(null,e,xt,$n),t);break}Dr(e,xt,$n);break;case 4:if(cr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-on(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jS(r/1960))-r,10<r){e.timeoutHandle=wf(Dr.bind(null,e,xt,$n),r);break}Dr(e,xt,$n);break;case 5:Dr(e,xt,$n);break;default:throw Error(z(329))}}}return Et(e,Be()),e.callbackNode===n?Sg.bind(null,e):null}function Df(e,t){var n=ea;return e.current.memoizedState.isDehydrated&&(qr(e,t).flags|=256),e=ps(e,t),e!==2&&(t=xt,xt=n,t!==null&&Hf(t)),e}function Hf(e){xt===null?xt=e:xt.push.apply(xt,e)}function FS(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch(a){return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cr(e,t){for(t&=~od,t&=~Ks,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Ov(e){if(he&6)throw Error(z(327));eo();var t=Kl(e,0);if(!(t&1))return Et(e,Be()),null;var n=ps(e,t);if(e.tag!==0&&n===2){var r=hf(e);r!==0&&(t=r,n=Df(e,r))}if(n===1)throw n=Ta,qr(e,0),cr(e,t),Et(e,Be()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dr(e,xt,$n),Et(e,Be()),null}function ld(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(so=Be()+500,Ys&&kr())}}function ri(e){hr!==null&&hr.tag===0&&!(he&6)&&eo();var t=he;he|=1;var n=Vt.transition,r=ye;try{if(Vt.transition=null,ye=1,e)return e()}finally{ye=r,Vt.transition=n,he=t,!(he&6)&&kr()}}function sd(){$t=Wi.current,Pe(Wi)}function qr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pS(n)),We!==null)for(n=We.return;n!==null;){var r=n;switch(Bh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ts();break;case 3:ao(),Pe(St),Pe(pt),Qh();break;case 5:Kh(r);break;case 4:ao();break;case 13:Pe(Le);break;case 19:Pe(Le);break;case 10:Yh(r.type._context);break;case 22:case 23:sd()}n=n.return}if(et=e,We=e=wr(e.current,null),lt=$t=t,qe=0,Ta=null,od=Ks=ni=0,xt=ea=null,Xr!==null){for(t=0;t<Xr.length;t++)if(n=Xr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Xr=null}return e}function Tg(e,t){do{var n=We;try{if(Vh(),Rl.current=cs,us){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}us=!1}if(ti=0,Ze=Ge=Re=null,Zo=!1,xa=0,id.current=null,n===null||n.return===null){qe=1,Ta=t,We=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=lt,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var d=vv(a);if(d!==null){d.flags&=-257,mv(d,a,l,o,t),d.mode&1&&pv(o,u,t),t=d,s=u;var p=t.updateQueue;if(p===null){var g=new Set;g.add(s),t.updateQueue=g}else p.add(s);break e}else{if(!(t&1)){pv(o,u,t),ud();break e}s=Error(z(426))}}else if(ke&&l.mode&1){var _=vv(a);if(_!==null){!(_.flags&65536)&&(_.flags|=256),mv(_,a,l,o,t),Wh(lo(s,l));break e}}o=s=lo(s,l),qe!==4&&(qe=2),ea===null?ea=[o]:ea.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=lg(o,s,t);lv(o,m);break e;case 1:l=s;var v=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(gr===null||!gr.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=sg(o,l,t);lv(o,b);break e}}o=o.return}while(o!==null)}Mg(n)}catch(S){t=S,We===n&&n!==null&&(We=n=n.return);continue}break}while(1)}function Eg(){var e=fs.current;return fs.current=cs,e===null?cs:e}function ud(){(qe===0||qe===3||qe===2)&&(qe=4),et===null||!(ni&268435455)&&!(Ks&268435455)||cr(et,lt)}function ps(e,t){var n=he;he|=2;var r=Eg();(et!==e||lt!==t)&&($n=null,qr(e,t));do try{NS();break}catch(i){Tg(e,i)}while(1);if(Vh(),he=n,fs.current=r,We!==null)throw Error(z(261));return et=null,lt=0,qe}function NS(){for(;We!==null;)Cg(We)}function DS(){for(;We!==null&&!fb();)Cg(We)}function Cg(e){var t=Pg(e.alternate,e,$t);e.memoizedProps=e.pendingProps,t===null?Mg(e):We=t,id.current=null}function Mg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=AS(n,t),n!==null){n.flags&=32767,We=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,We=null;return}}else if(n=zS(n,t,$t),n!==null){We=n;return}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);qe===0&&(qe=5)}function Dr(e,t,n){var r=ye,i=Vt.transition;try{Vt.transition=null,ye=1,HS(e,t,n,r)}finally{Vt.transition=i,ye=r}return null}function HS(e,t,n,r){do eo();while(hr!==null);if(he&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(xb(e,o),e===et&&(We=et=null,lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,$g(ql,function(){return eo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Vt.transition,Vt.transition=null;var a=ye;ye=1;var l=he;he|=4,id.current=null,RS(e,n),xg(n,e),lS(gf),Ql=!!yf,gf=yf=null,e.current=n,IS(n),hb(),he=l,ye=a,Vt.transition=o}else e.current=n;if(xl&&(xl=!1,hr=e,ds=i),o=e.pendingLanes,o===0&&(gr=null),vb(n.stateNode),Et(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hs)throw hs=!1,e=Ff,Ff=null,e;return ds&1&&e.tag!==0&&eo(),o=e.pendingLanes,o&1?e===Nf?ta++:(ta=0,Nf=e):ta=0,kr(),null}function eo(){if(hr!==null){var e=ay(ds),t=Vt.transition,n=ye;try{if(Vt.transition=null,ye=16>e?16:e,hr===null)var r=!1;else{if(e=hr,hr=null,ds=0,he&6)throw Error(z(331));var i=he;for(he|=4,U=e.current;U!==null;){var o=U,a=o.child;if(U.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(U=u;U!==null;){var c=U;switch(c.tag){case 0:case 11:case 15:Jo(8,c,o)}var f=c.child;if(f!==null)f.return=c,U=f;else for(;U!==null;){c=U;var h=c.sibling,d=c.return;if(gg(c),c===u){U=null;break}if(h!==null){h.return=d,U=h;break}U=d}}}var p=o.alternate;if(p!==null){var g=p.child;if(g!==null){p.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}U=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,U=a;else e:for(;U!==null;){if(o=U,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jo(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,U=m;break e}U=o.return}}var v=e.current;for(U=v;U!==null;){a=U;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,U=w;else e:for(a=v;U!==null;){if(l=U,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qs(9,l)}}catch(S){Ne(l,l.return,S)}if(l===a){U=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,U=b;break e}U=l.return}}if(he=i,kr(),yn&&typeof yn.onPostCommitFiberRoot=="function")try{yn.onPostCommitFiberRoot(Hs,e)}catch(S){}r=!0}return r}finally{ye=n,Vt.transition=t}}return!1}function Pv(e,t,n){t=lo(n,t),t=lg(e,t,1),e=yr(e,t,1),t=gt(),e!==null&&(Aa(e,1,t),Et(e,t))}function Ne(e,t,n){if(e.tag===3)Pv(e,e,n);else for(;t!==null;){if(t.tag===3){Pv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){e=lo(n,e),e=sg(t,e,1),t=yr(t,e,1),e=gt(),t!==null&&(Aa(t,1,e),Et(t,e));break}}t=t.return}}function BS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=gt(),e.pingedLanes|=e.suspendedLanes&n,et===e&&(lt&n)===n&&(qe===4||qe===3&&(lt&130023424)===lt&&500>Be()-ad?qr(e,0):od|=n),Et(e,t)}function Og(e,t){t===0&&(e.mode&1?(t=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):t=1);var n=gt();e=Nn(e,t),e!==null&&(Aa(e,t,n),Et(e,n))}function WS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Og(e,n)}function US(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Og(e,n)}var Pg;Pg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)bt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return bt=!1,kS(e,t,n);bt=!!(e.flags&131072)}else bt=!1,ke&&t.flags&1048576&&zy(t,is,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jl(e,t),e=t.pendingProps;var i=ro(t,pt.current);Ji(t,n),i=Jh(null,t,r,e,i,n);var o=ed();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Tt(r)?(o=!0,ns(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gh(t),i.updater=Xs,t.stateNode=i,i._reactInternals=t,Mf(t,r,e,n),t=$f(null,t,r,!0,o,n)):(t.tag=0,ke&&o&&Hh(t),mt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=YS(r),e=Jt(r,e),i){case 0:t=Pf(null,t,r,e,n);break e;case 1:t=_v(null,t,r,e,n);break e;case 11:t=yv(null,t,r,e,n);break e;case 14:t=gv(null,t,r,Jt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),Pf(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),_v(e,t,r,i,n);case 3:e:{if(hg(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Iy(e,t),ls(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=lo(Error(z(423)),t),t=wv(e,t,r,n,i);break e}else if(r!==i){i=lo(Error(z(424)),t),t=wv(e,t,r,n,i);break e}else for(kt=mr(t.stateNode.containerInfo.firstChild),zt=t,ke=!0,tn=null,n=Dy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){t=Dn(e,t,n);break e}mt(e,t,r,n)}t=t.child}return t;case 5:return Hy(t),e===null&&Tf(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,_f(r,i)?a=null:o!==null&&_f(r,o)&&(t.flags|=32),fg(e,t),mt(e,t,a,n),t.child;case 6:return e===null&&Tf(t),null;case 13:return dg(e,t,n);case 4:return qh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oo(t,null,r,n):mt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),yv(e,t,r,i,n);case 7:return mt(e,t,t.pendingProps,n),t.child;case 8:return mt(e,t,t.pendingProps.children,n),t.child;case 12:return mt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,Te(os,r._currentValue),r._currentValue=a,o!==null)if(ln(o.value,a)){if(o.children===i.children&&!St.current){t=Dn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=In(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ef(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(z(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ef(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}mt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ji(t,n),i=Xt(i),r=r(i),t.flags|=1,mt(e,t,r,n),t.child;case 14:return r=t.type,i=Jt(r,t.pendingProps),i=Jt(r.type,i),gv(e,t,r,i,n);case 15:return ug(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Jt(r,i),jl(e,t),t.tag=1,Tt(r)?(e=!0,ns(t)):e=!1,Ji(t,n),Fy(t,r,i),Mf(t,r,i,n),$f(null,t,r,!0,e,n);case 19:return pg(e,t,n);case 22:return cg(e,t,n)}throw Error(z(156,t.tag))};function $g(e,t){return ny(e,t)}function VS(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(e,t,n,r){return new VS(e,t,n,r)}function cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function YS(e){if(typeof e=="function")return cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ph)return 11;if(e===$h)return 14}return 2}function wr(e,t){var n=e.alternate;return n===null?(n=Ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dl(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")cd(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Ai:return Kr(n.children,i,o,t);case Oh:a=8,i|=8;break;case Kc:return e=Ut(12,n,t,i|2),e.elementType=Kc,e.lanes=o,e;case Qc:return e=Ut(13,n,t,i),e.elementType=Qc,e.lanes=o,e;case Zc:return e=Ut(19,n,t,i),e.elementType=Zc,e.lanes=o,e;case N1:return Qs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j1:a=10;break e;case F1:a=9;break e;case Ph:a=11;break e;case $h:a=14;break e;case rr:a=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=Ut(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Kr(e,t,n,r){return e=Ut(7,e,r,t),e.lanes=n,e}function Qs(e,t,n,r){return e=Ut(22,e,r,t),e.elementType=N1,e.lanes=n,e.stateNode={isHidden:!1},e}function gc(e,t,n){return e=Ut(6,e,null,t),e.lanes=n,e}function _c(e,t,n){return t=Ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function XS(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(e,t,n,r,i,o,a,l,s){return e=new XS(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ut(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gh(o),e}function GS(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function kg(e){if(!e)return Sr;e=e._reactInternals;e:{if(fi(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Tt(n))return $y(e,n,t)}return t}function zg(e,t,n,r,i,o,a,l,s){return e=fd(n,r,!0,e,i,o,a,l,s),e.context=kg(null),n=e.current,r=gt(),i=_r(n),o=In(r,i),o.callback=t!=null?t:null,yr(n,o,i),e.current.lanes=i,Aa(e,i,r),Et(e,r),e}function Zs(e,t,n,r){var i=t.current,o=gt(),a=_r(i);return n=kg(n),t.context===null?t.context=n:t.pendingContext=n,t=In(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yr(i,t,a),e!==null&&(an(e,i,a,o),Ll(e,i,a)),a}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function $v(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hd(e,t){$v(e,t),(e=e.alternate)&&$v(e,t)}function qS(){return null}var Ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function dd(e){this._internalRoot=e}Js.prototype.render=dd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Zs(e,t,null,null)};Js.prototype.unmount=dd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ri(function(){Zs(null,e,null,null)}),t[Fn]=null}};function Js(e){this._internalRoot=e}Js.prototype.unstable_scheduleHydration=function(e){if(e){var t=uy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ur.length&&t!==0&&t<ur[n].priority;n++);ur.splice(n,0,e),n===0&&fy(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kv(){}function KS(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=vs(a);o.call(u)}}var a=zg(t,r,e,0,null,!1,!1,"",kv);return e._reactRootContainer=a,e[Fn]=a.current,ma(e.nodeType===8?e.parentNode:e),ri(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=vs(s);l.call(u)}}var s=fd(e,0,!1,null,null,!1,!1,"",kv);return e._reactRootContainer=s,e[Fn]=s.current,ma(e.nodeType===8?e.parentNode:e),ri(function(){Zs(t,s,n,r)}),s}function tu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=vs(a);l.call(s)}}Zs(t,a,e,i)}else a=KS(n,t,e,i,r);return vs(a)}ly=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Wo(t.pendingLanes);n!==0&&(Ah(t,n|1),Et(t,Be()),!(he&6)&&(so=Be()+500,kr()))}break;case 13:ri(function(){var r=Nn(e,1);if(r!==null){var i=gt();an(r,e,1,i)}}),hd(e,1)}};Lh=function(e){if(e.tag===13){var t=Nn(e,134217728);if(t!==null){var n=gt();an(t,e,134217728,n)}hd(e,134217728)}};sy=function(e){if(e.tag===13){var t=_r(e),n=Nn(e,t);if(n!==null){var r=gt();an(n,e,t,r)}hd(e,t)}};uy=function(){return ye};cy=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};uf=function(e,t,n){switch(t){case"input":if(tf(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vs(r);if(!i)throw Error(z(90));H1(r),tf(r,i)}}}break;case"textarea":W1(e,n);break;case"select":t=n.value,t!=null&&qi(e,!!n.multiple,t,!1)}};K1=ld;Q1=ri;var QS={usingClientEntryPoint:!1,Events:[Ra,ji,Vs,G1,q1,ld]},No={findFiberByHostInstance:Yr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ZS={bundleType:No.bundleType,version:No.version,rendererPackageName:No.rendererPackageName,rendererConfig:No.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ey(e),e===null?null:e.stateNode},findFiberByHostInstance:No.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Hs=bl.inject(ZS),yn=bl}catch(e){}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS;Lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(z(200));return GS(e,t,null,n)};Lt.createRoot=function(e,t){if(!pd(e))throw Error(z(299));var n=!1,r="",i=Ag;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=fd(e,1,!1,null,null,n,!1,r,i),e[Fn]=t.current,ma(e.nodeType===8?e.parentNode:e),new dd(t)};Lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=ey(t),e=e===null?null:e.stateNode,e};Lt.flushSync=function(e){return ri(e)};Lt.hydrate=function(e,t,n){if(!eu(t))throw Error(z(200));return tu(null,e,t,!0,n)};Lt.hydrateRoot=function(e,t,n){if(!pd(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Ag;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=zg(t,null,e,1,n!=null?n:null,i,!1,o,a),e[Fn]=t.current,ma(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Js(t)};Lt.render=function(e,t,n){if(!eu(t))throw Error(z(200));return tu(null,e,t,!1,n)};Lt.unmountComponentAtNode=function(e){if(!eu(e))throw Error(z(40));return e._reactRootContainer?(ri(function(){tu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Lt.unstable_batchedUpdates=ld;Lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!eu(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return tu(e,t,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Lt})(qx);var Lg,zv=Zr;Lg=zv.createRoot,zv.hydrateRoot;var Rg=function(){var e=C.useRef([]),t=C.useRef(function(n){return e.current.push(n)});return C.useEffect(function(){return function(){e.current.forEach(function(n){clearTimeout(n)})}},[]),t.current},vd=function(){var e=C.useRef(!0);return C.useEffect(function(){return function(){e.current=!1}},[]),e},ms={},JS={get exports(){return ms},set exports(e){ms=e}},ge={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var md=Symbol.for("react.element"),yd=Symbol.for("react.portal"),nu=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),iu=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),au=Symbol.for("react.context"),eT=Symbol.for("react.server_context"),lu=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),uu=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),fu=Symbol.for("react.lazy"),tT=Symbol.for("react.offscreen"),Ig;Ig=Symbol.for("react.module.reference");function qt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case md:switch(e=e.type,e){case nu:case iu:case ru:case su:case uu:return e;default:switch(e=e&&e.$$typeof,e){case eT:case au:case lu:case fu:case cu:case ou:return e;default:return t}}case yd:return t}}}ge.ContextConsumer=au;ge.ContextProvider=ou;ge.Element=md;ge.ForwardRef=lu;ge.Fragment=nu;ge.Lazy=fu;ge.Memo=cu;ge.Portal=yd;ge.Profiler=iu;ge.StrictMode=ru;ge.Suspense=su;ge.SuspenseList=uu;ge.isAsyncMode=function(){return!1};ge.isConcurrentMode=function(){return!1};ge.isContextConsumer=function(e){return qt(e)===au};ge.isContextProvider=function(e){return qt(e)===ou};ge.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===md};ge.isForwardRef=function(e){return qt(e)===lu};ge.isFragment=function(e){return qt(e)===nu};ge.isLazy=function(e){return qt(e)===fu};ge.isMemo=function(e){return qt(e)===cu};ge.isPortal=function(e){return qt(e)===yd};ge.isProfiler=function(e){return qt(e)===iu};ge.isStrictMode=function(e){return qt(e)===ru};ge.isSuspense=function(e){return qt(e)===su};ge.isSuspenseList=function(e){return qt(e)===uu};ge.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nu||e===iu||e===ru||e===su||e===uu||e===tT||typeof e=="object"&&e!==null&&(e.$$typeof===fu||e.$$typeof===cu||e.$$typeof===ou||e.$$typeof===au||e.$$typeof===lu||e.$$typeof===Ig||e.getModuleId!==void 0)};ge.typeOf=qt;(function(e){e.exports=ge})(JS);function nT(e){function t(j,H,B,X,O){for(var K=0,A=0,Se=0,se=0,ce,ee,Ae=0,Ce=0,oe,Ye=oe=ce=0,fe=0,Fe=0,Qe=0,Xe=0,Ti=B.length,jr=Ti-1,Pt,re="",$e="",Ei="",Mo="",Kt;fe<Ti;){if(ee=B.charCodeAt(fe),fe===jr&&A+se+Se+K!==0&&(A!==0&&(ee=A===47?10:47),se=Se=K=0,Ti++,jr++),A+se+Se+K===0){if(fe===jr&&(0<Fe&&(re=re.replace(h,"")),0<re.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:re+=B.charAt(fe)}ee=59}switch(ee){case 123:for(re=re.trim(),ce=re.charCodeAt(0),oe=1,Xe=++fe;fe<Ti;){switch(ee=B.charCodeAt(fe)){case 123:oe++;break;case 125:oe--;break;case 47:switch(ee=B.charCodeAt(fe+1)){case 42:case 47:e:{for(Ye=fe+1;Ye<jr;++Ye)switch(B.charCodeAt(Ye)){case 47:if(ee===42&&B.charCodeAt(Ye-1)===42&&fe+2!==Ye){fe=Ye+1;break e}break;case 10:if(ee===47){fe=Ye+1;break e}}fe=Ye}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;fe++<jr&&B.charCodeAt(fe)!==ee;);}if(oe===0)break;fe++}switch(oe=B.substring(Xe,fe),ce===0&&(ce=(re=re.replace(f,"").trim()).charCodeAt(0)),ce){case 64:switch(0<Fe&&(re=re.replace(h,"")),ee=re.charCodeAt(1),ee){case 100:case 109:case 115:case 45:Fe=H;break;default:Fe=Ve}if(oe=t(H,Fe,oe,ee,O+1),Xe=oe.length,0<L&&(Fe=n(Ve,re,Qe),Kt=l(3,oe,Fe,H,ne,Z,Xe,ee,O,X),re=Fe.join(""),Kt!==void 0&&(Xe=(oe=Kt.trim()).length)===0&&(ee=0,oe="")),0<Xe)switch(ee){case 115:re=re.replace(E,a);case 100:case 109:case 45:oe=re+"{"+oe+"}";break;case 107:re=re.replace(v,"$1 $2"),oe=re+"{"+oe+"}",oe=M===1||M===2&&o("@"+oe,3)?"@-webkit-"+oe+"@"+oe:"@"+oe;break;default:oe=re+oe,X===112&&(oe=($e+=oe,""))}else oe="";break;default:oe=t(H,n(H,re,Qe),oe,X,O+1)}Ei+=oe,oe=Qe=Fe=Ye=ce=0,re="",ee=B.charCodeAt(++fe);break;case 125:case 59:if(re=(0<Fe?re.replace(h,""):re).trim(),1<(Xe=re.length))switch(Ye===0&&(ce=re.charCodeAt(0),ce===45||96<ce&&123>ce)&&(Xe=(re=re.replace(" ",":")).length),0<L&&(Kt=l(1,re,H,j,ne,Z,$e.length,X,O,X))!==void 0&&(Xe=(re=Kt.trim()).length)===0&&(re="\0\0"),ce=re.charCodeAt(0),ee=re.charCodeAt(1),ce){case 0:break;case 64:if(ee===105||ee===99){Mo+=re+B.charAt(fe);break}default:re.charCodeAt(Xe-1)!==58&&($e+=i(re,ce,ee,re.charCodeAt(2)))}Qe=Fe=Ye=ce=0,re="",ee=B.charCodeAt(++fe)}}switch(ee){case 13:case 10:A===47?A=0:1+ce===0&&X!==107&&0<re.length&&(Fe=1,re+="\0"),0<L*G&&l(0,re,H,j,ne,Z,$e.length,X,O,X),Z=1,ne++;break;case 59:case 125:if(A+se+Se+K===0){Z++;break}default:switch(Z++,Pt=B.charAt(fe),ee){case 9:case 32:if(se+K+A===0)switch(Ae){case 44:case 58:case 9:case 32:Pt="";break;default:ee!==32&&(Pt=" ")}break;case 0:Pt="\\0";break;case 12:Pt="\\f";break;case 11:Pt="\\v";break;case 38:se+A+K===0&&(Fe=Qe=1,Pt="\f"+Pt);break;case 108:if(se+A+K+V===0&&0<Ye)switch(fe-Ye){case 2:Ae===112&&B.charCodeAt(fe-3)===58&&(V=Ae);case 8:Ce===111&&(V=Ce)}break;case 58:se+A+K===0&&(Ye=fe);break;case 44:A+Se+se+K===0&&(Fe=1,Pt+="\r");break;case 34:case 39:A===0&&(se=se===ee?0:se===0?ee:se);break;case 91:se+A+Se===0&&K++;break;case 93:se+A+Se===0&&K--;break;case 41:se+A+K===0&&Se--;break;case 40:if(se+A+K===0){if(ce===0)switch(2*Ae+3*Ce){case 533:break;default:ce=1}Se++}break;case 64:A+Se+se+K+Ye+oe===0&&(oe=1);break;case 42:case 47:if(!(0<se+K+Se))switch(A){case 0:switch(2*ee+3*B.charCodeAt(fe+1)){case 235:A=47;break;case 220:Xe=fe,A=42}break;case 42:ee===47&&Ae===42&&Xe+2!==fe&&(B.charCodeAt(Xe+2)===33&&($e+=B.substring(Xe,fe+1)),Pt="",A=0)}}A===0&&(re+=Pt)}Ce=Ae,Ae=ee,fe++}if(Xe=$e.length,0<Xe){if(Fe=H,0<L&&(Kt=l(2,$e,Fe,j,ne,Z,Xe,X,O,X),Kt!==void 0&&($e=Kt).length===0))return Mo+$e+Ei;if($e=Fe.join(",")+"{"+$e+"}",M*V!==0){switch(M!==2||o($e,2)||(V=0),V){case 111:$e=$e.replace(b,":-moz-$1")+$e;break;case 112:$e=$e.replace(w,"::-webkit-input-$1")+$e.replace(w,"::-moz-$1")+$e.replace(w,":-ms-input-$1")+$e}V=0}}return Mo+$e+Ei}function n(j,H,B){var X=H.trim().split(_);H=X;var O=X.length,K=j.length;switch(K){case 0:case 1:var A=0;for(j=K===0?"":j[0]+" ";A<O;++A)H[A]=r(j,H[A],B).trim();break;default:var Se=A=0;for(H=[];A<O;++A)for(var se=0;se<K;++se)H[Se++]=r(j[se]+" ",X[A],B).trim()}return H}function r(j,H,B){var X=H.charCodeAt(0);switch(33>X&&(X=(H=H.trim()).charCodeAt(0)),X){case 38:return H.replace(m,"$1"+j.trim());case 58:return j.trim()+H.replace(m,"$1"+j.trim());default:if(0<1*B&&0<H.indexOf("\f"))return H.replace(m,(j.charCodeAt(0)===58?"":"$1")+j.trim())}return j+H}function i(j,H,B,X){var O=j+";",K=2*H+3*B+4*X;if(K===944){j=O.indexOf(":",9)+1;var A=O.substring(j,O.length-1).trim();return A=O.substring(0,j).trim()+A+";",M===1||M===2&&o(A,1)?"-webkit-"+A+A:A}if(M===0||M===2&&!o(O,1))return O;switch(K){case 1015:return O.charCodeAt(10)===97?"-webkit-"+O+O:O;case 951:return O.charCodeAt(3)===116?"-webkit-"+O+O:O;case 963:return O.charCodeAt(5)===110?"-webkit-"+O+O:O;case 1009:if(O.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+O+O;case 978:return"-webkit-"+O+"-moz-"+O+O;case 1019:case 983:return"-webkit-"+O+"-moz-"+O+"-ms-"+O+O;case 883:if(O.charCodeAt(8)===45)return"-webkit-"+O+O;if(0<O.indexOf("image-set(",11))return O.replace(W,"$1-webkit-$2")+O;break;case 932:if(O.charCodeAt(4)===45)switch(O.charCodeAt(5)){case 103:return"-webkit-box-"+O.replace("-grow","")+"-webkit-"+O+"-ms-"+O.replace("grow","positive")+O;case 115:return"-webkit-"+O+"-ms-"+O.replace("shrink","negative")+O;case 98:return"-webkit-"+O+"-ms-"+O.replace("basis","preferred-size")+O}return"-webkit-"+O+"-ms-"+O+O;case 964:return"-webkit-"+O+"-ms-flex-"+O+O;case 1023:if(O.charCodeAt(8)!==99)break;return A=O.substring(O.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+A+"-webkit-"+O+"-ms-flex-pack"+A+O;case 1005:return p.test(O)?O.replace(d,":-webkit-")+O.replace(d,":-moz-")+O:O;case 1e3:switch(A=O.substring(13).trim(),H=A.indexOf("-")+1,A.charCodeAt(0)+A.charCodeAt(H)){case 226:A=O.replace(S,"tb");break;case 232:A=O.replace(S,"tb-rl");break;case 220:A=O.replace(S,"lr");break;default:return O}return"-webkit-"+O+"-ms-"+A+O;case 1017:if(O.indexOf("sticky",9)===-1)break;case 975:switch(H=(O=j).length-10,A=(O.charCodeAt(H)===33?O.substring(0,H):O).substring(j.indexOf(":",7)+1).trim(),K=A.charCodeAt(0)+(A.charCodeAt(7)|0)){case 203:if(111>A.charCodeAt(8))break;case 115:O=O.replace(A,"-webkit-"+A)+";"+O;break;case 207:case 102:O=O.replace(A,"-webkit-"+(102<K?"inline-":"")+"box")+";"+O.replace(A,"-webkit-"+A)+";"+O.replace(A,"-ms-"+A+"box")+";"+O}return O+";";case 938:if(O.charCodeAt(5)===45)switch(O.charCodeAt(6)){case 105:return A=O.replace("-items",""),"-webkit-"+O+"-webkit-box-"+A+"-ms-flex-"+A+O;case 115:return"-webkit-"+O+"-ms-flex-item-"+O.replace(P,"")+O;default:return"-webkit-"+O+"-ms-flex-line-pack"+O.replace("align-content","").replace(P,"")+O}break;case 973:case 989:if(O.charCodeAt(3)!==45||O.charCodeAt(4)===122)break;case 931:case 953:if(R.test(j)===!0)return(A=j.substring(j.indexOf(":")+1)).charCodeAt(0)===115?i(j.replace("stretch","fill-available"),H,B,X).replace(":fill-available",":stretch"):O.replace(A,"-webkit-"+A)+O.replace(A,"-moz-"+A.replace("fill-",""))+O;break;case 962:if(O="-webkit-"+O+(O.charCodeAt(5)===102?"-ms-"+O:"")+O,B+X===211&&O.charCodeAt(13)===105&&0<O.indexOf("transform",10))return O.substring(0,O.indexOf(";",27)+1).replace(g,"$1-webkit-$2")+O}return O}function o(j,H){var B=j.indexOf(H===1?":":"{"),X=j.substring(0,H!==3?B:10);return B=j.substring(B+1,j.length-1),q(H!==2?X:X.replace(F,"$1"),B,H)}function a(j,H){var B=i(H,H.charCodeAt(0),H.charCodeAt(1),H.charCodeAt(2));return B!==H+";"?B.replace($," or ($1)").substring(4):"("+H+")"}function l(j,H,B,X,O,K,A,Se,se,ce){for(var ee=0,Ae=H,Ce;ee<L;++ee)switch(Ce=ie[ee].call(c,j,Ae,B,X,O,K,A,Se,se,ce)){case void 0:case!1:case!0:case null:break;default:Ae=Ce}if(Ae!==H)return Ae}function s(j){switch(j){case void 0:case null:L=ie.length=0;break;default:if(typeof j=="function")ie[L++]=j;else if(typeof j=="object")for(var H=0,B=j.length;H<B;++H)s(j[H]);else G=!!j|0}return s}function u(j){return j=j.prefix,j!==void 0&&(q=null,j?typeof j!="function"?M=1:(M=2,q=j):M=0),u}function c(j,H){var B=j;if(33>B.charCodeAt(0)&&(B=B.trim()),ve=B,B=[ve],0<L){var X=l(-1,H,B,B,ne,Z,0,0,0,0);X!==void 0&&typeof X=="string"&&(H=X)}var O=t(Ve,B,H,0,0);return 0<L&&(X=l(-2,O,B,B,ne,Z,O.length,0,0,0),X!==void 0&&(O=X)),ve="",V=0,Z=ne=1,O}var f=/^\0+/g,h=/[\0\r\f]/g,d=/: */g,p=/zoo|gra/,g=/([,: ])(transform)/g,_=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,b=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,P=/-self|flex-/g,F=/[^]*?(:[rp][el]a[\w-]+)[^]*/,R=/stretch|:\s*\w+\-(?:conte|avail)/,W=/([^-])(image-set\()/,Z=1,ne=1,V=0,M=1,Ve=[],ie=[],L=0,q=null,G=0,ve="";return c.use=s,c.set=u,e!==void 0&&u(e),c}var rT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function iT(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var oT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Av=iT(function(e){return oT.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Bf={},aT={get exports(){return Bf},set exports(e){Bf=e}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nt=typeof Symbol=="function"&&Symbol.for,gd=nt?Symbol.for("react.element"):60103,_d=nt?Symbol.for("react.portal"):60106,hu=nt?Symbol.for("react.fragment"):60107,du=nt?Symbol.for("react.strict_mode"):60108,pu=nt?Symbol.for("react.profiler"):60114,vu=nt?Symbol.for("react.provider"):60109,mu=nt?Symbol.for("react.context"):60110,wd=nt?Symbol.for("react.async_mode"):60111,yu=nt?Symbol.for("react.concurrent_mode"):60111,gu=nt?Symbol.for("react.forward_ref"):60112,_u=nt?Symbol.for("react.suspense"):60113,lT=nt?Symbol.for("react.suspense_list"):60120,wu=nt?Symbol.for("react.memo"):60115,xu=nt?Symbol.for("react.lazy"):60116,sT=nt?Symbol.for("react.block"):60121,uT=nt?Symbol.for("react.fundamental"):60117,cT=nt?Symbol.for("react.responder"):60118,fT=nt?Symbol.for("react.scope"):60119;function It(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gd:switch(e=e.type,e){case wd:case yu:case hu:case pu:case du:case _u:return e;default:switch(e=e&&e.$$typeof,e){case mu:case gu:case xu:case wu:case vu:return e;default:return t}}case _d:return t}}}function jg(e){return It(e)===yu}_e.AsyncMode=wd;_e.ConcurrentMode=yu;_e.ContextConsumer=mu;_e.ContextProvider=vu;_e.Element=gd;_e.ForwardRef=gu;_e.Fragment=hu;_e.Lazy=xu;_e.Memo=wu;_e.Portal=_d;_e.Profiler=pu;_e.StrictMode=du;_e.Suspense=_u;_e.isAsyncMode=function(e){return jg(e)||It(e)===wd};_e.isConcurrentMode=jg;_e.isContextConsumer=function(e){return It(e)===mu};_e.isContextProvider=function(e){return It(e)===vu};_e.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gd};_e.isForwardRef=function(e){return It(e)===gu};_e.isFragment=function(e){return It(e)===hu};_e.isLazy=function(e){return It(e)===xu};_e.isMemo=function(e){return It(e)===wu};_e.isPortal=function(e){return It(e)===_d};_e.isProfiler=function(e){return It(e)===pu};_e.isStrictMode=function(e){return It(e)===du};_e.isSuspense=function(e){return It(e)===_u};_e.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===hu||e===yu||e===pu||e===du||e===_u||e===lT||typeof e=="object"&&e!==null&&(e.$$typeof===xu||e.$$typeof===wu||e.$$typeof===vu||e.$$typeof===mu||e.$$typeof===gu||e.$$typeof===uT||e.$$typeof===cT||e.$$typeof===fT||e.$$typeof===sT)};_e.typeOf=It;(function(e){e.exports=_e})(aT);var xd=Bf,hT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},dT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bd={};bd[xd.ForwardRef]=pT;bd[xd.Memo]=Fg;function Lv(e){return xd.isMemo(e)?Fg:bd[e.$$typeof]||hT}var vT=Object.defineProperty,mT=Object.getOwnPropertyNames,Rv=Object.getOwnPropertySymbols,yT=Object.getOwnPropertyDescriptor,gT=Object.getPrototypeOf,Iv=Object.prototype;function Ng(e,t,n){if(typeof t!="string"){if(Iv){var r=gT(t);r&&r!==Iv&&Ng(e,r,n)}var i=mT(t);Rv&&(i=i.concat(Rv(t)));for(var o=Lv(e),a=Lv(t),l=0;l<i.length;++l){var s=i[l];if(!dT[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=yT(t,s);try{vT(e,s,u)}catch(c){}}}}return e}var _T=Ng;function nn(){return(nn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var jv=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Wf=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ms.typeOf(e)},ys=Object.freeze([]),xr=Object.freeze({});function uo(e){return typeof e=="function"}function Fv(e){return e.displayName||e.name||"Component"}function Sd(e){return e&&typeof e.styledComponentId=="string"}var co=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Td=typeof window<"u"&&"HTMLElement"in window,wT=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),xT={};function ii(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var bT=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&ii(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Hl=new Map,gs=new Map,na=1,Sl=function(e){if(Hl.has(e))return Hl.get(e);for(;gs.has(na);)na++;var t=na++;return Hl.set(e,t),gs.set(t,e),t},ST=function(e){return gs.get(e)},TT=function(e,t){t>=na&&(na=t+1),Hl.set(e,t),gs.set(t,e)},ET="style["+co+'][data-styled-version="5.3.6"]',CT=new RegExp("^"+co+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),MT=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},OT=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(CT);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(TT(u,s),MT(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},PT=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Dg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var c=s[u];if(c&&c.nodeType===1&&c.hasAttribute(co))return c}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(co,"active"),r.setAttribute("data-styled-version","5.3.6");var a=PT();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},$T=function(){function e(n){var r=this.element=Dg(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}ii(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch(i){return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),kT=function(){function e(n){var r=this.element=Dg(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),zT=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Nv=Td,AT={isServer:!Td,useCSSOMInjection:!wT},_s=function(){function e(n,r,i){n===void 0&&(n=xr),r===void 0&&(r={}),this.options=nn({},AT,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Td&&Nv&&(Nv=!1,function(o){for(var a=document.querySelectorAll(ET),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(co)!=="active"&&(OT(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Sl(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(nn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new zT(a):o?new $T(a):new kT(a),new bT(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Sl(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Sl(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Sl(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=ST(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var c=co+".g"+a+'[id="'+l+'"]',f="";s!==void 0&&s.forEach(function(h){h.length>0&&(f+=h+",")}),o+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return o}(this)},e}(),LT=/(a)(d)/gi,Dv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Uf(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dv(t%52)+n;return(Dv(t%52)+n).replace(LT,"$1-$2")}var Ui=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hg=function(e){return Ui(5381,e)};function Bg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(uo(n)&&!Sd(n))return!1}return!0}var RT=Hg("5.3.6"),IT=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Bg(t),this.componentId=n,this.baseHash=Ui(RT,n),this.baseStyle=r,_s.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=oi(this.rules,t,n,r).join(""),l=Uf(Ui(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=Ui(this.baseHash,r.hash),f="",h=0;h<u;h++){var d=this.rules[h];if(typeof d=="string")f+=d;else if(d){var p=oi(d,t,n,r),g=Array.isArray(p)?p.join(""):p;c=Ui(c,g+h),f+=g}}if(f){var _=Uf(c>>>0);if(!n.hasNameForId(i,_)){var m=r(f,"."+_,void 0,i);n.insertRules(i,_,m)}o.push(_)}}return o.join(" ")},e}(),jT=/^\s*\/\/.*$/gm,FT=[":","[",".","#"];function NT(e){var t,n,r,i,o=e===void 0?xr:e,a=o.options,l=a===void 0?xr:a,s=o.plugins,u=s===void 0?ys:s,c=new nT(l),f=[],h=function(g){function _(m){if(m)try{g(m+"}")}catch(v){}}return function(m,v,w,b,S,E,$,P,F,R){switch(m){case 1:if(F===0&&v.charCodeAt(0)===64)return g(v+";"),"";break;case 2:if(P===0)return v+"/*|*/";break;case 3:switch(P){case 102:case 112:return g(w[0]+v),"";default:return v+(R===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(_)}}}(function(g){f.push(g)}),d=function(g,_,m){return _===0&&FT.indexOf(m[n.length])!==-1||m.match(i)?g:"."+t};function p(g,_,m,v){v===void 0&&(v="&");var w=g.replace(jT,""),b=_&&m?m+" "+_+" { "+w+" }":w;return t=v,n=_,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!_?"":_,b)}return c.use([].concat(u,[function(g,_,m){g===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,d))},h,function(g){if(g===-2){var _=f;return f=[],_}}])),p.hash=u.length?u.reduce(function(g,_){return _.name||ii(15),Ui(g,_.name)},5381).toString():"",p}var Wg=po.createContext();Wg.Consumer;var Ug=po.createContext(),DT=(Ug.Consumer,new _s),Vf=NT();function Vg(){return C.useContext(Wg)||DT}function Yg(){return C.useContext(Ug)||Vf}var Xg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Vf);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return ii(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Vf),this.name+t.hash},e}(),HT=/([A-Z])/,BT=/([A-Z])/g,WT=/^ms-/,UT=function(e){return"-"+e.toLowerCase()};function Hv(e){return HT.test(e)?e.replace(BT,UT).replace(WT,"-ms-"):e}var Bv=function(e){return e==null||e===!1||e===""};function oi(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=oi(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Bv(e))return"";if(Sd(e))return"."+e.styledComponentId;if(uo(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return oi(s,t,n,r)}var u;return e instanceof Xg?n?(e.inject(n,r),e.getName(r)):e:Wf(e)?function c(f,h){var d,p,g=[];for(var _ in f)f.hasOwnProperty(_)&&!Bv(f[_])&&(Array.isArray(f[_])&&f[_].isCss||uo(f[_])?g.push(Hv(_)+":",f[_],";"):Wf(f[_])?g.push.apply(g,c(f[_],_)):g.push(Hv(_)+": "+(d=_,(p=f[_])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||d in rT?String(p).trim():p+"px")+";"));return h?[h+" {"].concat(g,["}"]):g}(e):e.toString()}var Wv=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function je(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return uo(e)||Wf(e)?Wv(oi(jv(ys,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Wv(oi(jv(e,n)))}var Gg=function(e,t,n){return n===void 0&&(n=xr),e.theme!==n.theme&&e.theme||t||n.theme},VT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,YT=/(^-|-$)/g;function wc(e){return e.replace(VT,"-").replace(YT,"")}var Ed=function(e){return Uf(Hg(e)>>>0)};function Tl(e){return typeof e=="string"&&!0}var Yf=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},XT=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function GT(e,t,n){var r=e[n];Yf(t)&&Yf(r)?qg(r,t):e[n]=t}function qg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(Yf(a))for(var l in a)XT(l)&&GT(e,a[l],l)}return e}var Tr=po.createContext();Tr.Consumer;function qT(e){var t=C.useContext(Tr),n=C.useMemo(function(){return function(r,i){if(!r)return ii(14);if(uo(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?ii(8):i?nn({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?po.createElement(Tr.Provider,{value:n},e.children):null}var xc={};function Kg(e,t,n){var r=Sd(e),i=!Tl(e),o=t.attrs,a=o===void 0?ys:o,l=t.componentId,s=l===void 0?function(v,w){var b=typeof v!="string"?"sc":wc(v);xc[b]=(xc[b]||0)+1;var S=b+"-"+Ed("5.3.6"+b+xc[b]);return w?w+"-"+S:S}(t.displayName,t.parentComponentId):l,u=t.displayName,c=u===void 0?function(v){return Tl(v)?"styled."+v:"Styled("+Fv(v)+")"}(e):u,f=t.displayName&&t.componentId?wc(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,d=t.shouldForwardProp;r&&e.shouldForwardProp&&(d=t.shouldForwardProp?function(v,w,b){return e.shouldForwardProp(v,w,b)&&t.shouldForwardProp(v,w,b)}:e.shouldForwardProp);var p,g=new IT(n,f,r?e.componentStyle:void 0),_=g.isStatic&&a.length===0,m=function(v,w){return function(b,S,E,$){var P=b.attrs,F=b.componentStyle,R=b.defaultProps,W=b.foldedComponentIds,Z=b.shouldForwardProp,ne=b.styledComponentId,V=b.target,M=function(X,O,K){X===void 0&&(X=xr);var A=nn({},O,{theme:X}),Se={};return K.forEach(function(se){var ce,ee,Ae,Ce=se;for(ce in uo(Ce)&&(Ce=Ce(A)),Ce)A[ce]=Se[ce]=ce==="className"?(ee=Se[ce],Ae=Ce[ce],ee&&Ae?ee+" "+Ae:ee||Ae):Ce[ce]}),[A,Se]}(Gg(S,C.useContext(Tr),R)||xr,S,P),Ve=M[0],ie=M[1],L=function(X,O,K,A){var Se=Vg(),se=Yg(),ce=O?X.generateAndInjectStyles(xr,Se,se):X.generateAndInjectStyles(K,Se,se);return ce}(F,$,Ve),q=E,G=ie.$as||S.$as||ie.as||S.as||V,ve=Tl(G),j=ie!==S?nn({},S,{},ie):S,H={};for(var B in j)B[0]!=="$"&&B!=="as"&&(B==="forwardedAs"?H.as=j[B]:(Z?Z(B,Av,G):!ve||Av(B))&&(H[B]=j[B]));return S.style&&ie.style!==S.style&&(H.style=nn({},S.style,{},ie.style)),H.className=Array.prototype.concat(W,ne,L!==ne?L:null,S.className,ie.className).filter(Boolean).join(" "),H.ref=q,C.createElement(G,H)}(p,v,w,_)};return m.displayName=c,(p=po.forwardRef(m)).attrs=h,p.componentStyle=g,p.displayName=c,p.shouldForwardProp=d,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ys,p.styledComponentId=f,p.target=r?e.target:e,p.withComponent=function(v){var w=t.componentId,b=function(E,$){if(E==null)return{};var P,F,R={},W=Object.keys(E);for(F=0;F<W.length;F++)P=W[F],$.indexOf(P)>=0||(R[P]=E[P]);return R}(t,["componentId"]),S=w&&w+"-"+(Tl(v)?v:wc(Fv(v)));return Kg(v,nn({},b,{attrs:h,componentId:S}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?qg({},e.defaultProps,v):v}}),p.toString=function(){return"."+p.styledComponentId},i&&_T(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var Xf=function(e){return function t(n,r,i){if(i===void 0&&(i=xr),!ms.isValidElementType(r))return ii(1,String(r));var o=function(){return n(r,i,je.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,nn({},i,{},a))},o.attrs=function(a){return t(n,r,nn({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(Kg,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Xf[e]=Xf(e)});var KT=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Bg(n),_s.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var a=o(oi(this.rules,r,i,o).join(""),""),l=this.componentId+n;i.insertRules(l,l,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&_s.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function Qg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=je.apply(void 0,[e].concat(n)),o="sc-global-"+Ed(JSON.stringify(i)),a=new KT(i,o);function l(u){var c=Vg(),f=Yg(),h=C.useContext(Tr),d=C.useRef(c.allocateGSInstance(o)).current;return c.server&&s(d,u,c,h,f),C.useLayoutEffect(function(){if(!c.server)return s(d,u,c,h,f),function(){return a.removeStyles(d,c)}},[d,u,c,h,f]),null}function s(u,c,f,h,d){if(a.isStatic)a.renderStyles(u,xT,f,d);else{var p=nn({},c,{theme:Gg(c,h,l.defaultProps)});a.renderStyles(u,p,f,d)}}return po.memo(l)}function Wr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=je.apply(void 0,[e].concat(n)).join(""),o=Ed(i);return new Xg(o,i)}const Q=Xf;var ki=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},ws=globalThis&&globalThis.__assign||function(){return ws=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ws.apply(this,arguments)},wn={xs:30,s:75,m:150,l:250},ja="cubic-bezier(.04,.8,.61,1)",Fa=function(e,t){var n;return"".concat(e," ").concat(wn[(n=t==null?void 0:t.duration)!==null&&n!==void 0?n:"m"],"ms ").concat(ja)},QT={emerge:{duration:"l",keyframes:Wr(Uv||(Uv=ki([`
        from {
          transform: scale(0.95);
          opacity: 0
        }
        
        to {
          transform: scale(1);
          opacity: 1;
        }
      `],[`
        from {
          transform: scale(0.95);
          opacity: 0
        }
        
        to {
          transform: scale(1);
          opacity: 1;
        }
      `])))},emergeSlantFromTop:{duration:"m",keyframes:Wr(Vv||(Vv=ki([`
        from {
          transform: perspective(600px) rotateX(30deg) translateY(40px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotate3d(0) translateY(0) scale(1);
          opacity: 1;
        }
      `],[`
        from {
          transform: perspective(600px) rotateX(30deg) translateY(40px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotate3d(0) translateY(0) scale(1);
          opacity: 1;
        }
      `])))},emergeSlantFromBottom:{duration:"m",keyframes:Wr(Yv||(Yv=ki([`
        from {
          transform: perspective(600px) rotateX(-30deg) translateY(400px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotateX(0) translateY(0) scale(1);
          opacity: 1;
        }
      `],[`
        from {
          transform: perspective(600px) rotateX(-30deg) translateY(400px) scale(0.95);
          opacity: 0;
        }
        
        to {
          transform: perspective(600px) rotateX(0) translateY(0) scale(1);
          opacity: 1;
        }
      `])))},dive:{duration:"s",keyframes:Wr(Xv||(Xv=ki([`
        from {
          transform: scale(1);
          opacity: 1;
        }
        
        to {
          transform: scale(0.95);
          opacity: 0;
        }
      `],[`
        from {
          transform: scale(1);
          opacity: 1;
        }
        
        to {
          transform: scale(0.95);
          opacity: 0;
        }
      `])))},diveSlant:{duration:"s",keyframes:Wr(Gv||(Gv=ki([`
        from {
          transform: perspective(600px) rotateX(0) scale(1);
          opacity: 1
        }
        
        to {
          transform: perspective(600px) rotateX(10deg) scale(0.95);
          opacity: 0;
        }
      `],[`
        from {
          transform: perspective(600px) rotateX(0) scale(1);
          opacity: 1
        }
        
        to {
          transform: perspective(600px) rotateX(10deg) scale(0.95);
          opacity: 0;
        }
      `])))}},Vi=function(e,t){return t===void 0&&(t={}),function(n){var r=QT[e],i=ws(ws({},r),t),o=i.keyframes,a=i.duration,l=i.timingFunction,s=l===void 0?ja:l;return je(qv||(qv=ki([`
      `," ",`ms
      `,` 0ms 1 normal forwards;
    `],[`
      `," ",`ms
      `,` 0ms 1 normal forwards;
    `])),o,wn[a],s)}},Uv,Vv,Yv,Xv,Gv,qv,Cd=function(e){var t=C.useRef(null);return e||t},Kv={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},Qv={red:0,orange:60,yellow:120,green:180,blue:240,purple:300};function ZT(e){var t,n=[],r=1,i;if(typeof e=="string")if(Kv[e])n=Kv[e].slice(),i="rgb";else if(e==="transparent")r=0,i="rgb",n=[0,0,0];else if(/^#[A-Fa-f0-9]+$/.test(e)){var o=e.slice(1),a=o.length,l=a<=4;r=1,l?(n=[parseInt(o[0]+o[0],16),parseInt(o[1]+o[1],16),parseInt(o[2]+o[2],16)],a===4&&(r=parseInt(o[3]+o[3],16)/255)):(n=[parseInt(o[0]+o[1],16),parseInt(o[2]+o[3],16),parseInt(o[4]+o[5],16)],a===8&&(r=parseInt(o[6]+o[7],16)/255)),n[0]||(n[0]=0),n[1]||(n[1]=0),n[2]||(n[2]=0),i="rgb"}else if(t=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(e)){var s=t[1],u=s==="rgb",o=s.replace(/a$/,"");i=o;var a=o==="cmyk"?4:o==="gray"?1:3;n=t[2].trim().split(/\s*[,\/]\s*|\s+/).map(function(h,d){if(/%$/.test(h))return d===a?parseFloat(h)/100:o==="rgb"?parseFloat(h)*255/100:parseFloat(h);if(o[d]==="h"){if(/deg$/.test(h))return parseFloat(h);if(Qv[h]!==void 0)return Qv[h]}return parseFloat(h)}),s===o&&n.push(1),r=u||n[a]===void 0?1:n[a],n=n.slice(0,a)}else e.length>10&&/[0-9](?:\s|\/)/.test(e)&&(n=e.match(/([0-9]+)/g).map(function(c){return parseFloat(c)}),i=e.match(/([a-z])/ig).join("").toLowerCase());else isNaN(e)?Array.isArray(e)||e.length?(n=[e[0],e[1],e[2]],i="rgb",r=e.length===4?e[3]:1):e instanceof Object&&(e.r!=null||e.red!=null||e.R!=null?(i="rgb",n=[e.r||e.red||e.R||0,e.g||e.green||e.G||0,e.b||e.blue||e.B||0]):(i="hsl",n=[e.h||e.hue||e.H||0,e.s||e.saturation||e.S||0,e.l||e.lightness||e.L||e.b||e.brightness]),r=e.a||e.alpha||e.opacity||1,e.opacity!=null&&(r/=100)):(i="rgb",n=[e>>>16,(e&65280)>>>8,e&255]);return{space:i,values:n,alpha:r}}var xs=globalThis&&globalThis.__assign||function(){return xs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},xs.apply(this,arguments)},Zv=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},Zg=function(e){if(e==null)throw Error("Undefined / null color given to parseColor");return e.space?e:ZT(e)},Na=function(e){if(e==null)throw Error("Undefined / null color given to parseColor");if(e.space){var t=e;if(t.space==="rgb")return"rgba(".concat(Zv(Zv([],t.values,!0),[t.alpha],!1).join(","),")");throw Error("stringifyColor only handle colors with an rgb space (hex, rgb, rgba)")}return e},Jg=function(e,t){var n=Zg(e);return xs(xs({},n),{alpha:n.alpha*t})},JT=function(e){var t=Zg(e),n=t.values,r=t.alpha,i=(n[0]+n[1]+n[2])/r;return i<255*3/2},bs=globalThis&&globalThis.__assign||function(){return bs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},bs.apply(this,arguments)},Gf=function(e,t){return Object.entries(e).reduce(function(n,r){var i,o=r[0],a=r[1];return bs(bs({},n),(i={},i[o]=t(a,o,e),i))},{})},ai=function(e){return e&&["[object Function]","[object AsyncFunction]"].includes({}.toString.call(e))},eE=function(e){return(e||e==="")&&Object.prototype.toString.call(e)==="[object String]"},tE=function(e){return e==null},nE={0:"#FFFFFF",100:"#FBEEFB",200:"#E9ADE6",300:"#D289CF",400:"#C469C1",500:"#9A4797",600:"#813C7F",700:"#5E2B5C",800:"#3B1B3A",900:"#2D132C",1e3:"#000000"},rE={0:"#FFFFFF",100:"#FFF8E8",200:"#FFEBB9",300:"#FFDA7A",400:"#FFCB47",500:"#FFBD15",600:"#F0AC00",700:"#E0A100",800:"#7A5800",900:"#342809",1e3:"#000000"},iE={0:"#FFFFFF",100:"#FFEDEC",200:"#FFC9C5",300:"#FFAAA3",400:"#FF7A70",500:"#FF4A3C",600:"#FF1C0A",700:"#D60F00",800:"#A30C00",900:"#39100C",1e3:"#000000"},oE={0:"#FFFFFF",100:"#EBFCF4",200:"#AFF2D2",300:"#91EDC1",400:"#65E6A9",500:"#38DF8F",600:"#20C577",700:"#199A5C",800:"#0B4228",900:"#1B2A29",1e3:"#000000"},aE={0:"#FFFFFF",100:"#E1E5EA",200:"#C3CBD5",300:"#A5B1C0",400:"#8291A6",500:"#6A7C95",600:"#4D6280",700:"#354F73",800:"#203655",900:"#0F1E33",1e3:"#000000"},lE={0:"#FFFFFF",100:"#FBE7EE",200:"#EE9FBB",300:"#F45E94",400:"#EB407E",500:"#D50F56",600:"#A70C43",700:"#770830",800:"#4B0A21",900:"#2D0614",1e3:"#000000"},sE={0:"#FFFFFF",100:"#FEF7E6",200:"#FBE099",300:"#FFD15C",400:"#FFC329",500:"#F6B100",600:"#C28B00",700:"#8F6700",800:"#473300",900:"#241A00",1e3:"#000000"},uE={0:"#FFFFFF",100:"#EAF5F3",200:"#9FD1C8",300:"#82CBBE",400:"#59C0AD",500:"#299985",600:"#1D6D60",700:"#12433B",800:"#0C2C27",900:"#071815",1e3:"#000000"},cE={0:"#FFFFFF",100:"#FAFAFB",200:"rgba(24, 20, 31, 0.05)",300:"rgba(24, 20, 31, 0.15)",400:"rgba(24, 20, 31, 0.35)",500:"rgba(24, 20, 31, 0.5)",600:"rgba(24, 20, 31, 0.6)",700:"rgba(24, 20, 31, 0.79)",800:"rgba(24, 20, 31, 0.85)",900:"rgba(24, 20, 31, 0.9)",1e3:"#18141F"},fE={0:"rgba(255, 255, 255, 0)",100:"rgba(255, 255, 255, 0.07)",200:"rgba(255, 255, 255, 0.2)",300:"rgba(255, 255, 255, 0.3)",400:"rgba(255, 255, 255, 0.4)",500:"rgba(255, 255, 255, 0.5)",600:"rgba(255, 255, 255, 0.65)",700:"rgba(255, 255, 255, 0.75)",800:"rgba(255, 255, 255, 0.85)",900:"rgba(255, 255, 255, 0.95)",1e3:"#FFFFFF"},hE={0:"#FFFFFF",100:"#FAFAFB",200:"#F3F3F4",300:"#DCDCDD",400:"#AEADB1",500:"#8B898F",600:"#747279",700:"#49454E",800:"#3B3741",900:"#2F2C35",1e3:"#18141F"},dE={0:"#000000",100:"#28242F",200:"#46434C",300:"#5D5A62",400:"#747279",500:"#8B898F",600:"#AEADB1",700:"#C5C4C7",800:"#DCDCDD",900:"#F3F3F4",1e3:"#FFFFFF"},N={purpleDawn:nE,yellowSunlight:rE,redSunset:iE,greenNorthernLight:oE,blueMoon:aE,neutralBlackWithOpacityFading:cE,neutralWhiteWithOpacityFading:fE,neutralBlackWithIntensityFading:hE,neutralWhiteWithIntensityFading:dE,redRazzmatazz:lE,greenEmerald:uE,yellowGolden:sE},pE={colors:{primary:{calmer:N.purpleDawn[100],calm:N.purpleDawn[200],base:N.purpleDawn[500],loud:N.purpleDawn[700],louder:N.purpleDawn[800],contrastText:N.neutralWhiteWithOpacityFading[900]},secondary:{calmer:N.neutralBlackWithIntensityFading[200],calm:N.neutralBlackWithIntensityFading[300],base:N.neutralBlackWithIntensityFading[900],loud:N.neutralBlackWithIntensityFading[1e3],louder:N.neutralBlackWithIntensityFading[1e3],contrastText:N.neutralWhiteWithIntensityFading[900]},error:{calmer:N.redRazzmatazz[100],calm:N.redRazzmatazz[200],base:N.redRazzmatazz[500],loud:N.redRazzmatazz[700],louder:N.redRazzmatazz[800],contrastText:N.neutralWhiteWithOpacityFading[900]},warning:{calmer:N.yellowGolden[100],calm:N.yellowGolden[200],base:N.yellowGolden[500],loud:N.yellowGolden[700],louder:N.yellowGolden[800],contrastText:N.neutralWhiteWithOpacityFading[900]},success:{calmer:N.greenEmerald[100],calm:N.greenEmerald[200],base:N.greenEmerald[500],loud:N.greenEmerald[700],louder:N.greenEmerald[800],contrastText:N.neutralWhiteWithOpacityFading[900]}},typography:{colors:{title:N.neutralBlackWithOpacityFading[1e3],button:N.neutralBlackWithOpacityFading[900],text:N.neutralBlackWithOpacityFading[700],lowContrast:N.neutralBlackWithOpacityFading[500]},font:"EuclidCircularB, sans-serif"},neutralColor:{withOpacityFading:N.neutralBlackWithOpacityFading,withIntensityFading:N.neutralBlackWithIntensityFading},shadows:{flat:[],lower:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:1,blur:2,opacity:.1,isImpactedByHover:!0}],low:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:2,blur:8,opacity:.1,isImpactedByHover:!0}],regular:[{x:0,y:0,blur:1,opacity:.06},{x:0,y:4,blur:12,opacity:.1,isImpactedByHover:!0}],high:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:12,blur:24,opacity:.1,isImpactedByHover:!0}],higher:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:16,blur:36,opacity:.15,isImpactedByHover:!0}]},defaultBackground:N.neutralWhiteWithIntensityFading[1e3]},vE={colors:{primary:{calmer:N.purpleDawn[800],calm:N.purpleDawn[700],base:N.purpleDawn[500],loud:N.purpleDawn[400],louder:N.purpleDawn[300],contrastText:N.neutralWhiteWithOpacityFading[900]},secondary:{calmer:N.neutralWhiteWithIntensityFading[100],calm:N.neutralBlackWithIntensityFading[200],base:N.neutralWhiteWithIntensityFading[900],loud:N.neutralWhiteWithIntensityFading[1e3],louder:N.neutralWhiteWithIntensityFading[1e3],contrastText:N.neutralBlackWithIntensityFading[900]},error:{calmer:N.redRazzmatazz[800],calm:N.redRazzmatazz[700],base:N.redRazzmatazz[500],loud:N.redRazzmatazz[400],louder:N.redRazzmatazz[300],contrastText:N.neutralWhiteWithOpacityFading[900]},warning:{calmer:N.yellowGolden[800],calm:N.yellowGolden[700],base:N.yellowGolden[500],loud:N.yellowGolden[200],louder:N.yellowGolden[100],contrastText:N.neutralWhiteWithOpacityFading[900]},success:{calmer:N.greenEmerald[800],calm:N.greenEmerald[700],base:N.greenEmerald[500],loud:N.greenEmerald[200],louder:N.greenEmerald[100],contrastText:N.neutralWhiteWithOpacityFading[900]}},typography:{colors:{title:N.neutralWhiteWithOpacityFading[900],button:N.neutralWhiteWithOpacityFading[800],text:N.neutralWhiteWithOpacityFading[500],lowContrast:N.neutralWhiteWithOpacityFading[300]},font:"EuclidCircularB, sans-serif"},neutralColor:{withOpacityFading:N.neutralWhiteWithOpacityFading,withIntensityFading:N.neutralWhiteWithIntensityFading},shadows:{flat:[],lower:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:1,blur:2,opacity:.2}],low:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:2,blur:8,opacity:.2}],regular:[{x:0,y:0,blur:1,opacity:.06},{x:0,y:4,blur:12,opacity:.2}],high:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:12,blur:24,opacity:.2}],higher:[{x:0,y:0,blur:2,opacity:.06},{x:0,y:16,blur:36,opacity:.25}]},defaultBackground:N.neutralBlackWithIntensityFading[900]},qf={light:pE,dark:vE,isDark:!1,backgroundColor:N.neutralWhiteWithOpacityFading[1e3]},Ss=globalThis&&globalThis.__assign||function(){return Ss=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ss.apply(this,arguments)},e_=function(e,t){var n,r=t===void 0?{}:t,i=r.useRootTheme,o=(n=e.theme)===null||n===void 0?void 0:n.uiCore;if(!o)return N.neutralWhiteWithOpacityFading[1e3];var a=i?o.rootValue:o.value;return a.backgroundColor},hi=function(e,t){var n,r=t===void 0?{}:t,i=r.useRootTheme,o=(n=e.theme)===null||n===void 0?void 0:n.uiCore;if(!o)return qf.light;var a=i?o.rootValue:o.value;return a.isDark?a.dark:a.light},mE=function(){return function(e){return hi(e).typography.font}},yE=function(e,t){return e===void 0&&(e="regular"),t===void 0&&(t={}),function(n){var r=t.hover,i=r===void 0?!1:r,o=t.dynamic,a=o===void 0?!1:o,l=function(){return a&&!tE(n.depth)?n.depth:e},s=hi(n).shadows[l()],u=function(c){var f=c.x,h=c.y,d=c.blur,p=c.opacity;return"".concat(f,"px ").concat(h,"px ").concat(d,"px rgba(24, 20, 31, ").concat(p,")")};return i?"".concat(s.map(function(c){return u(c.isImpactedByHover?Ss(Ss({},c),{opacity:c.opacity+.1}):c)}).join(", ")):"".concat(s.map(u).join(", "))}},gE=function(e){return e===void 0&&(e={}),function(t){var n=hi(t,{useRootTheme:e.useRootTheme}),r;if(e.valuePropName&&t[e.valuePropName]!=null)r=t[e.valuePropName];else{var i=void 0;e.variationPropName&&t[e.variationPropName]!=null?i=t[e.variationPropName]:e.variation?i=e.variation:i="text",r=n.typography.colors[i]}return Na(r)}},_E=function(e,t){return t===void 0&&(t={}),function(n){var r,i,o,a=hi(n,{useRootTheme:t.useRootTheme}),l;if(t.valuePropName&&n[t.valuePropName]!=null)l=n[t.valuePropName];else if(e==="background")l=e_(n,{useRootTheme:t.useRootTheme});else{var s=void 0;t.dynamic?n.error?s="error":n.warning?s="warning":n.success?s="success":n.primary?s="primary":n.secondary?s="secondary":s=e:s=e,l=a.colors[s][(r=t.variation)!==null&&r!==void 0?r:"base"]}var u=(o=(i=n.opacity)!==null&&i!==void 0?i:t.opacity)!==null&&o!==void 0?o:1;return u!==1&&(l=Jg(l,u)),Na(l)}},wE=function(e,t){return t===void 0&&(t={}),function(n){var r,i,o=t.gradient,a=o===void 0?"withOpacityFading":o,l=hi(n).neutralColor[a][e],s=(i=(r=n.opacity)!==null&&r!==void 0?r:t.opacity)!==null&&i!==void 0?i:1;return s!==1&&(l=Jg(l,s)),Na(l)}},D={color:_E,textColor:gE,neutralColor:wE,font:mE,shadow:yE},Yi=globalThis&&globalThis.__assign||function(){return Yi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Yi.apply(this,arguments)},t_=function(e){var t=e.children,n=e.backgroundColor,r=C.useContext(Tr),i=C.useMemo(function(){var a,l,s=r==null?void 0:r.uiCore,u=ai(n)?n(hi({theme:r})):n,c=Yi(Yi({},(a=s==null?void 0:s.value)!==null&&a!==void 0?a:qf),{backgroundColor:u,isDark:JT(u)});return{rootValue:(l=s==null?void 0:s.rootValue)!==null&&l!==void 0?l:qf,value:c}},[n,r]),o=C.useMemo(function(){return Yi(Yi({},r),{uiCore:i})},[i,r]);return C.createElement(qT,{theme:o},t)},xE=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},bE=Q.div(Jv||(Jv=xE([`
  &:not([data-simulated='true']) {
    background-color: `,`;
  }
`],[`
  &:not([data-simulated='true']) {
    background-color: `,`;
  }
`])),D.color("background")),Jv,Kf=globalThis&&globalThis.__assign||function(){return Kf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Kf.apply(this,arguments)},SE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},yo=C.forwardRef(function(e,t){var n=e.backgroundColor,r=e.simulated,i=SE(e,["backgroundColor","simulated"]);return C.createElement(t_,{backgroundColor:n},C.createElement(bE,Kf({ref:t},i,{"data-simulated":r})))}),bc={desktop:1296,tablet:1024,smallTablet:768,phone:600},be={above:Gf(bc,function(e){return"min-width: ".concat((e+1)/16,"em")}),below:Gf(bc,function(e){return"max-width: ".concat(e/16,"em")}),raw:bc},TE=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},EE=Q(yo)(e0||(e0=TE([`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: space-between;
  transition: `,`;
  overflow: hidden;
  position: relative;

  @media (`,`) {
    align-items: flex-start;
  }
`],[`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  justify-content: space-between;
  transition: `,`;
  overflow: hidden;
  position: relative;

  @media (`,`) {
    align-items: flex-start;
  }
`])),Fa("margin-top"),be.below.smallTablet),e0,kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},CE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},or;(function(e){e[e.SetStepOpened=0]="SetStepOpened",e[e.SetStepClosing=1]="SetStepClosing",e[e.SetStepClosed=2]="SetStepClosed"})(or||(or={}));var ME=C.forwardRef(function(e,t){var n=e.children,r=e.open,i=e.backgroundColor,o=i===void 0?"#FFFFFF":i,a=CE(e,["children","open","backgroundColor"]),l=Cd(t),s=function(d,p){var g,_;switch(p.type){case or.SetStepOpened:return kn(kn({},d),{step:"opened"});case or.SetStepClosing:return kn(kn({},d),{step:"closing",marginTop:-((_=(g=l.current)===null||g===void 0?void 0:g.offsetHeight)!==null&&_!==void 0?_:0)});case or.SetStepClosed:return kn(kn({},d),{step:"closed",marginTop:0});default:return d}},u={step:r?"opened":"closed",marginTop:0},c=C.useReducer(s,u),f=c[0],h=c[1];return C.useEffect(function(){if(r)h({type:or.SetStepOpened});else if(f.step!=="closed"){h({type:or.SetStepClosing});var d=setTimeout(function(){h({type:or.SetStepClosed})},wn.m);return function(){clearTimeout(d)}}},[r,f.step]),f.step==="closed"?null:C.createElement(EE,kn({backgroundColor:o,ref:l},a,{style:{marginTop:f.marginTop}}),n)}),OE=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},PE=Q.span(t0||(t0=OE([`
  background-color: currentColor;
  display: block;
  height: 1em;
  width: 1em;
  min-width: 1em;
  min-height: 1em;
  flex: 0 0 1em;
  background-position: center;

  &[data-colored='false'] {
    mask-size: contain;
    mask-position: top left;
    mask-repeat: no-repeat;
    mask-image: url('`,`');
  }

  &[data-colored='true'] {
    background-color: transparent;
    background-size: contain;
    background-image: url('`,`');
  }
`],[`
  background-color: currentColor;
  display: block;
  height: 1em;
  width: 1em;
  min-width: 1em;
  min-height: 1em;
  flex: 0 0 1em;
  background-position: center;

  &[data-colored='false'] {
    mask-size: contain;
    mask-position: top left;
    mask-repeat: no-repeat;
    mask-image: url('`,`');
  }

  &[data-colored='true'] {
    background-color: transparent;
    background-size: contain;
    background-image: url('`,`');
  }
`])),function(e){var t=e.url;return t},function(e){var t=e.url;return t}),t0,Qf=globalThis&&globalThis.__assign||function(){return Qf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Qf.apply(this,arguments)},$E=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Md=C.forwardRef(function(e,t){var n=e.icon,r=e.colored,i=r===void 0?!1:r,o=$E(e,["icon","colored"]),a="https://cdn.habx.com/image/upload/fl_sanitize/icons/".concat(n,".svg");return C.createElement(PE,Qf({ref:t,"data-colored":i},o,{url:a}))}),Da=function(e){var t=C.useContext(Tr);return e_({theme:t},e)},Od=function(){var e=C.useContext(Tr);return hi({theme:e})},Je={milkyWay:{size:96,lineHeight:96},superNova:{size:72,lineHeight:72},nova:{size:52,lineHeight:60},sun:{size:46,lineHeight:60},jupiter:{size:38,lineHeight:48},earth:{size:24,lineHeight:36},mars:{size:18,lineHeight:24},moon:{size:16,lineHeight:24},pluto:{size:14,lineHeight:22},asteroid:{size:12,lineHeight:16},dust:{size:10,lineHeight:12}},n_=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},kE=Q.button(n0||(n0=n_([`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  flex: 0 0 auto;

  color: `,`;
  transition: `,`;

  &[data-has-bounding-background='true'] {
    background-color: `,`;
  }

  &:not([data-has-bounding-background='true']) {
    background-color: unset;
  }

  border-radius: 4px;
  overflow: hidden;
  font-size: var(--icon-button-font-size);
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  box-shadow: inset 0 0 0 var(--icon-button-border-width)
    `,`;

  --icon-button-font-size: `,`px;
  --icon-button-size: `,`px;
  --icon-button-border-width: 0;
  --icon-button-background: var(--icon-button-base-background);

  &:hover {
    --icon-button-background: `,`;
  }

  &:focus {
    --icon-button-border-width: 6px;
    --icon-button-background: unset;
  }

  &:hover:not(:focus)[data-has-bounding-background='true'] {
    --icon-button-border-width: 3px;
  }

  &[data-tiny='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 2px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 1.5px;
    }
  }

  &[data-small='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 4px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 2px;
    }
  }

  &[data-large='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 8px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 4px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: `,`;
  }

  &:active {
    color: `,`;
  }
`],[`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  flex: 0 0 auto;

  color: `,`;
  transition: `,`;

  &[data-has-bounding-background='true'] {
    background-color: `,`;
  }

  &:not([data-has-bounding-background='true']) {
    background-color: unset;
  }

  border-radius: 4px;
  overflow: hidden;
  font-size: var(--icon-button-font-size);
  width: var(--icon-button-size);
  height: var(--icon-button-size);
  box-shadow: inset 0 0 0 var(--icon-button-border-width)
    `,`;

  --icon-button-font-size: `,`px;
  --icon-button-size: `,`px;
  --icon-button-border-width: 0;
  --icon-button-background: var(--icon-button-base-background);

  &:hover {
    --icon-button-background: `,`;
  }

  &:focus {
    --icon-button-border-width: 6px;
    --icon-button-background: unset;
  }

  &:hover:not(:focus)[data-has-bounding-background='true'] {
    --icon-button-border-width: 3px;
  }

  &[data-tiny='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 2px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 1.5px;
    }
  }

  &[data-small='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 4px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 2px;
    }
  }

  &[data-large='true'] {
    --icon-button-font-size: `,`px;
    --icon-button-size: `,`px;

    &:focus {
      --icon-button-border-width: 8px;
    }

    &:hover:not(:focus)[data-has-bounding-background='true'] {
      --icon-button-border-width: 4px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: `,`;
  }

  &:active {
    color: `,`;
  }
`])),D.color("secondary",{dynamic:!0,opacity:.72}),Fa("all"),D.color("background"),D.color("secondary",{dynamic:!0,opacity:.2}),Je.jupiter.size,Je.jupiter.lineHeight,D.color("secondary",{dynamic:!0,opacity:.05}),Je.mars.size,Je.mars.lineHeight,Je.earth.size,Je.earth.lineHeight,Je.sun.size,Je.sun.lineHeight,D.neutralColor(400),D.color("secondary",{dynamic:!0})),zE=Q.div(r0||(r0=n_([`
  background: var(--icon-button-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`],[`
  background: var(--icon-button-background);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`]))),n0,r0,Zf=globalThis&&globalThis.__assign||function(){return Zf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Zf.apply(this,arguments)},AE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},LE=C.forwardRef(function(e,t){var n=e.icon,r=e.colored,i=e.small,o=i===void 0?!1:i,a=e.large,l=a===void 0?!1:a,s=e.tiny,u=s===void 0?!1:s,c=e.background,f=c===void 0?"none":c,h=e.type,d=h===void 0?"button":h,p=AE(e,["icon","colored","small","large","tiny","background","type"]),g=Od(),_=Da(),m=C.useMemo(function(){switch(f){case"inherit":return _;case"white":return"#FFFFFF";case"grey":return g.neutralColor.withIntensityFading[200];case"none":return}},[f,_,g.neutralColor]),v=C.createElement(kE,Zf({},p,{ref:t,"data-small":o,"data-large":l,"data-tiny":u,"data-has-bounding-background":m&&m!==_,type:d,style:{"--icon-button-base-background":m!=null?m:"unset"}}),C.createElement(zE,null,C.createElement(Md,{icon:n,colored:r})));return m?C.createElement(t_,{backgroundColor:m},v):v});const RE="modulepreload",IE=function(e){return"/client-pano/"+e},i0={},jE=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=IE(o),o in i0)return;i0[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const f=i[c];if(f.href===o&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":RE,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var r_=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},i_=je(o0||(o0=r_([`
  color: `,`;
  font-family: `,`;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: `,`;

  &:hover {
    color: `,`;
  }
`],[`
  color: `,`;
  font-family: `,`;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: `,`;

  &:hover {
    color: `,`;
  }
`])),D.color("primary",{dynamic:!0}),D.font(),Fa("color"),D.color("primary",{dynamic:!0,opacity:.72}));Q.a(a0||(a0=r_([`
  `,`;
`],[`
  `,`;
`])),i_);var o0,a0,Mt=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Yt=function(e){return je(l0||(l0=Mt([`
  font-size: `,`px;
  line-height: `,`px;
`],[`
  font-size: `,`px;
  line-height: `,`px;
`])),Je[e].size,Je[e].lineHeight)},go=je(s0||(s0=Mt([`
  color: `,`;
  font-family: `,`;
  font-weight: 300;
  margin: 0;
`],[`
  color: `,`;
  font-family: `,`;
  font-weight: 300;
  margin: 0;
`])),D.textColor({variation:"title"}),D.font()),o_=je(u0||(u0=Mt([`
  `,`;
  letter-spacing: -0.5px;

  `,`;

  @media (`,`) {
    `,`;
  }

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;
  letter-spacing: -0.5px;

  `,`;

  @media (`,`) {
    `,`;
  }

  @media (`,`) {
    `,`;
  }
`])),go,Yt("superNova"),be.below.smallTablet,Yt("nova"),be.below.phone,Yt("sun")),a_=je(c0||(c0=Mt([`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }

  @media (`,`) {
    `,`;
  }
`])),go,Yt("nova"),be.below.smallTablet,Yt("sun"),be.below.phone,Yt("jupiter")),l_=je(f0||(f0=Mt([`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`])),go,Yt("sun"),be.below.smallTablet,Yt("jupiter")),s_=je(h0||(h0=Mt([`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`])),go,Yt("jupiter"),be.below.smallTablet,Yt("earth")),u_=je(d0||(d0=Mt([`
  `,`;

  `,`;
`],[`
  `,`;

  `,`;
`])),go,Yt("earth")),c_=je(p0||(p0=Mt([`
  `,`;
  font-weight: 500;

  `,`;
`],[`
  `,`;
  font-weight: 500;

  `,`;
`])),go,Yt("mars")),Sc={headerMaxi:o_,headerBig:a_,header:l_,headerSmall:s_,section:u_,regular:c_},f_=Q.h1(v0||(v0=Mt([`
  `,`;
`],[`
  `,`;
`])),o_),FE=Q.h1(m0||(m0=Mt([`
  `,`;
`],[`
  `,`;
`])),a_),NE=Q.h1(y0||(y0=Mt([`
  `,`;
`],[`
  `,`;
`])),l_),DE=Q.h2(g0||(g0=Mt([`
  `,`;
`],[`
  `,`;
`])),s_),HE=Q.h3(_0||(_0=Mt([`
  `,`;
`],[`
  `,`;
`])),u_),BE=Q.h4(w0||(w0=Mt([`
  `,`;
`],[`
  `,`;
`])),c_),l0,s0,u0,c0,f0,h0,d0,p0,v0,m0,y0,g0,_0,w0,WE=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Ts=globalThis&&globalThis.__assign||function(){return Ts=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ts.apply(this,arguments)},UE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},VE=C.lazy(function(){return jE(()=>import("./Markdown-603563e1.js"),[])}),h_=function(e){var t=e===void 0?{}:e,n=t.inline,r=n===void 0?!1:n;return function(i){var o=Q(i)(x0||(x0=WE([`
      & p {
        &:not(:first-child) {
          margin-top: 12px;
        }

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }

      & h2 {
        `,`;
      }

      & h3 {
        `,`;

        &:not(:first-child) {
          margin-top: 48px;
        }
      }

      & h4 {
        `,`;

        &:not(:first-child) {
          margin-top: 24px;
        }
      }

      & strong {
        font-weight: 600;
      }

      & a {
        `,`;
      }

      & ul {
        list-style-type: none;
        padding-inline-start: 0;
      }

      & li {
        position: relative;
        display: block;
        padding-left: 0.8em;

        &:first-letter {
          text-transform: capitalize;
        }

        &::after {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    `],[`
      & p {
        &:not(:first-child) {
          margin-top: 12px;
        }

        &:not(:last-child) {
          margin-bottom: 12px;
        }
      }

      & h2 {
        `,`;
      }

      & h3 {
        `,`;

        &:not(:first-child) {
          margin-top: 48px;
        }
      }

      & h4 {
        `,`;

        &:not(:first-child) {
          margin-top: 24px;
        }
      }

      & strong {
        font-weight: 600;
      }

      & a {
        `,`;
      }

      & ul {
        list-style-type: none;
        padding-inline-start: 0;
      }

      & li {
        position: relative;
        display: block;
        padding-left: 0.8em;

        &:first-letter {
          text-transform: capitalize;
        }

        &::after {
          content: '•';
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    `])),Sc.headerSmall,Sc.section,Sc.regular,i_),a=C.forwardRef(function(l,s){var u=l.markdown,c=l.children,f=UE(l,["markdown","children"]);if(!u)return C.createElement(i,Ts({ref:s},f),c);var h=ai(r)?r(l):!!r;return C.createElement(C.Suspense,null,C.createElement(VE,Ts({ref:s,Component:o},f,{"data-markdown":!0,isInline:h}),c))});return a}},x0,xn=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Jf=globalThis&&globalThis.__assign||function(){return Jf=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Jf.apply(this,arguments)},YE=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Hn=function(e){return je(b0||(b0=xn([`
  font-size: `,`px;
  line-height: `,`px;
`],[`
  font-size: `,`px;
  line-height: `,`px;
`])),Je[e].size,Je[e].lineHeight)},di=je(S0||(S0=xn([`
  color: `,`;

  font-family: `,`;
  font-weight: 400;

  &[data-bold='true'] {
    font-weight: 600;
  }

  > p {
    margin: 0;
  }
`],[`
  color: `,`;

  font-family: `,`;
  font-weight: 400;

  &[data-bold='true'] {
    font-weight: 600;
  }

  > p {
    margin: 0;
  }
`])),D.textColor({valuePropName:"color",variationPropName:"variation"}),D.font()),XE=je(T0||(T0=xn([`
  `,`;

  `,`;
  letter-spacing: 0.02px;
  font-weight: 300;

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;

  `,`;
  letter-spacing: 0.02px;
  font-weight: 300;

  @media (`,`) {
    `,`;
  }
`])),di,Hn("nova"),be.below.smallTablet,Hn("sun")),GE=je(E0||(E0=xn([`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`],[`
  `,`;

  `,`;

  @media (`,`) {
    `,`;
  }
`])),di,Hn("earth"),be.below.smallTablet,Hn("mars")),qE=je(C0||(C0=xn([`
  `,`;

  `,`;
  font-weight: 500;

  color: `,`;
`],[`
  `,`;

  `,`;
  font-weight: 500;

  color: `,`;
`])),di,Hn("mars"),D.textColor({valuePropName:"color",variationPropName:"variation",variation:"title"})),KE=je(M0||(M0=xn([`
  `,`;

  `,`;
`],[`
  `,`;

  `,`;
`])),di,Hn("moon")),QE=je(O0||(O0=xn([`
  `,`;

  `,`;
`],[`
  `,`;

  `,`;
`])),di,Hn("pluto")),ZE=je(P0||(P0=xn([`
  `,`;

  `,`;
`],[`
  `,`;

  `,`;
`])),di,Hn("asteroid")),JE=je($0||($0=xn([`
  `,`;

  `,`;
`],[`
  `,`;

  `,`;
`])),di,Hn("dust")),e3={veryLarge:XE,large:GE,emphasis:qE,regular:KE,small:QE,caption:ZE,captionSmall:JE},t3=Gf(e3,function(e){return Q.div(k0||(k0=xn([`
      `,`
    `],[`
      `,`
    `])),e)}),n3=C.forwardRef(function(e,t){var n=e.inline,r=e.type,i=r===void 0?"regular":r,o=e.color,a=YE(e,["inline","type","color"]),l=t3[i];return C.createElement(l,Jf({ref:t,as:n===!0?"span":void 0,color:o?Na(o):void 0},a))}),d_=h_({inline:function(e){return e.inline||["caption","captionSmall"].includes(e.type)}})(n3),b0,S0,T0,E0,C0,M0,O0,P0,$0,k0,p_=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},r3=Q.div(z0||(z0=p_([`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
  padding: 12px 24px;

  background: var(--alert-panel-background);
  color: var(--alert-panel-color);

  --alert-panel-background: `,`;
  --alert-panel-color: `,`;
  --alert-panel-title-color: `,`;
  --alert-panel-icon-color: `,`;

  &[data-warning='true'] {
    --alert-panel-background: `,`;
  }
  &[data-success='true'] {
    --alert-panel-background: `,`;
  }
  &[data-error='true'] {
    --alert-panel-background: `,`;
  }

  &[data-primary='true'] {
    --alert-panel-background: `,`;
  }

  @media (`,`) {
    padding: 12px 20px;
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 100%;
  padding: 12px 24px;

  background: var(--alert-panel-background);
  color: var(--alert-panel-color);

  --alert-panel-background: `,`;
  --alert-panel-color: `,`;
  --alert-panel-title-color: `,`;
  --alert-panel-icon-color: `,`;

  &[data-warning='true'] {
    --alert-panel-background: `,`;
  }
  &[data-success='true'] {
    --alert-panel-background: `,`;
  }
  &[data-error='true'] {
    --alert-panel-background: `,`;
  }

  &[data-primary='true'] {
    --alert-panel-background: `,`;
  }

  @media (`,`) {
    padding: 12px 20px;
  }
`])),D.color("secondary",{variation:"base",opacity:.85}),D.color("primary",{variation:"contrastText"}),D.neutralColor(700),D.neutralColor(500),D.color("warning",{variation:"base"}),D.color("success",{variation:"base"}),D.color("error",{variation:"base"}),D.color("primary",{variation:"base"}),be.below.smallTablet),i3=Q(d_)(A0||(A0=p_([`
  width: 100%;
  text-align: center;
  color: var(--alert-panel-color);
  --alert-panel-color: `,`;
`],[`
  width: 100%;
  text-align: center;
  color: var(--alert-panel-color);
  --alert-panel-color: `,`;
`])),D.color("primary",{variation:"contrastText"})),z0,A0,eh=globalThis&&globalThis.__assign||function(){return eh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},eh.apply(this,arguments)},o3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},a3=C.forwardRef(function(e,t){var n=e.message,r=e.warning,i=e.primary,o=e.success,a=e.error,l=e.onClose,s=o3(e,["message","warning","primary","success","error","onClose"]);return C.createElement(ME,eh({ref:t},s),C.createElement(r3,{"data-warning":r,"data-error":a,"data-success":o,"data-primary":i},C.createElement(i3,{variation:"title"},n),l&&C.createElement(LE,{icon:"close",tiny:!0,onClick:l})))}),Pd=function(){var e=null,t=function(r,i){return e==null?void 0:e(r,i)},n=function(r){return e=r,function(){e=null}};return{subscribe:n,dispatch:t}},th;th=Pd(),th.dispatch;var l3=th.subscribe,s3=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},u3=Q.div(L0||(L0=s3([`
  display: grid;
  grid-template-areas: 'stacked-alerts';

  > * {
    grid-area: stacked-alerts;
  }
`],[`
  display: grid;
  grid-template-areas: 'stacked-alerts';

  > * {
    grid-area: stacked-alerts;
  }
`]))),L0,ra=globalThis&&globalThis.__assign||function(){return ra=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ra.apply(this,arguments)},R0=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},c3=function(){var e=vd(),t=C.useState([]),n=t[0],r=t[1],i=C.useCallback(function(o){e.current&&r(function(a){return a.map(function(l){return l.id===o?ra(ra({},l),{open:!1}):l})})},[e]);return C.useEffect(function(){return l3(function(o){var a=Math.random(),l={message:o,open:!0,id:a};r(function(s){return R0(R0([],s,!0),[l],!1)})})}),n.length===0?null:C.createElement(u3,null,n.map(function(o){var a,l=!((a=o.message)===null||a===void 0)&&a.message?o.message:{message:o.message};return C.createElement(a3,ra({key:o.id,onClose:function(){return i(o.id)}},l,{open:o.open}))}))},v_={},Tc={},Es={},f3={get exports(){return Es},set exports(e){Es=e}},Ec,I0;function h3(){if(I0)return Ec;I0=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ec=e,Ec}var Cc,j0;function d3(){if(j0)return Cc;j0=1;var e=h3();function t(){}function n(){}return n.resetWarningCache=t,Cc=function(){function r(a,l,s,u,c,f){if(f!==e){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}r.isRequired=r;function i(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:i,element:r,elementType:r,instanceOf:i,node:r,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:n,resetWarningCache:t};return o.PropTypes=o,o},Cc}var F0;function p3(){return F0||(F0=1,f3.exports=d3()()),Es}var N0;function v3(){return N0||(N0=1,function(e){(function(t,n){n(e,C,p3())})(la,function(t,n,r){Object.defineProperty(t,"__esModule",{value:!0}),t.setHasSupportToCaptureOption=p;var i=a(n),o=a(r);function a(v){return v&&v.__esModule?v:{default:v}}var l=Object.assign||function(v){for(var w=1;w<arguments.length;w++){var b=arguments[w];for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(v[S]=b[S])}return v};function s(v,w){var b={};for(var S in v)w.indexOf(S)>=0||Object.prototype.hasOwnProperty.call(v,S)&&(b[S]=v[S]);return b}function u(v,w){if(!(v instanceof w))throw new TypeError("Cannot call a class as a function")}var c=function(){function v(w,b){for(var S=0;S<b.length;S++){var E=b[S];E.enumerable=E.enumerable||!1,E.configurable=!0,"value"in E&&(E.writable=!0),Object.defineProperty(w,E.key,E)}}return function(w,b,S){return b&&v(w.prototype,b),S&&v(w,S),w}}();function f(v,w){if(!v)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return w&&(typeof w=="object"||typeof w=="function")?w:v}function h(v,w){if(typeof w!="function"&&w!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof w);v.prototype=Object.create(w&&w.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),w&&(Object.setPrototypeOf?Object.setPrototypeOf(v,w):v.__proto__=w)}var d=!1;function p(v){d=v}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){p(!0)}}))}catch(v){}function g(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{capture:!0};return d?v:!1}function _(v){if("touches"in v){var w=v.touches[0],b=w.pageX,S=w.pageY;return{x:b,y:S}}var E=v.screenX,$=v.screenY;return{x:E,y:$}}var m=function(v){h(w,v);function w(){var b;u(this,w);for(var S=arguments.length,E=Array(S),$=0;$<S;$++)E[$]=arguments[$];var P=f(this,(b=w.__proto__||Object.getPrototypeOf(w)).call.apply(b,[this].concat(E)));return P._handleSwipeStart=P._handleSwipeStart.bind(P),P._handleSwipeMove=P._handleSwipeMove.bind(P),P._handleSwipeEnd=P._handleSwipeEnd.bind(P),P._onMouseDown=P._onMouseDown.bind(P),P._onMouseMove=P._onMouseMove.bind(P),P._onMouseUp=P._onMouseUp.bind(P),P._setSwiperRef=P._setSwiperRef.bind(P),P}return c(w,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,g({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,g({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(S){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(S))}},{key:"_onMouseMove",value:function(S){this.mouseDown&&this._handleSwipeMove(S)}},{key:"_onMouseUp",value:function(S){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(S)}},{key:"_handleSwipeStart",value:function(S){var E=_(S),$=E.x,P=E.y;this.moveStart={x:$,y:P},this.props.onSwipeStart(S)}},{key:"_handleSwipeMove",value:function(S){if(this.moveStart){var E=_(S),$=E.x,P=E.y,F=$-this.moveStart.x,R=P-this.moveStart.y;this.moving=!0;var W=this.props.onSwipeMove({x:F,y:R},S);W&&S.cancelable&&S.preventDefault(),this.movePosition={deltaX:F,deltaY:R}}}},{key:"_handleSwipeEnd",value:function(S){this.props.onSwipeEnd(S);var E=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-E?this.props.onSwipeLeft(1,S):this.movePosition.deltaX>E&&this.props.onSwipeRight(1,S),this.movePosition.deltaY<-E?this.props.onSwipeUp(1,S):this.movePosition.deltaY>E&&this.props.onSwipeDown(1,S)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(S){this.swiper=S,this.props.innerRef(S)}},{key:"render",value:function(){var S=this.props;S.tagName;var E=S.className,$=S.style,P=S.children;S.allowMouseEvents,S.onSwipeUp,S.onSwipeDown,S.onSwipeLeft,S.onSwipeRight,S.onSwipeStart,S.onSwipeMove,S.onSwipeEnd,S.innerRef,S.tolerance;var F=s(S,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]);return i.default.createElement(this.props.tagName,l({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:E,style:$},F),P)}}]),w}(n.Component);m.displayName="ReactSwipe",m.propTypes={tagName:o.default.string,className:o.default.string,style:o.default.object,children:o.default.node,allowMouseEvents:o.default.bool,onSwipeUp:o.default.func,onSwipeDown:o.default.func,onSwipeLeft:o.default.func,onSwipeRight:o.default.func,onSwipeStart:o.default.func,onSwipeMove:o.default.func,onSwipeEnd:o.default.func,innerRef:o.default.func,tolerance:o.default.number.isRequired},m.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},t.default=m})}(Tc)),Tc}(function(e){(function(t,n){n(e,v3())})(la,function(t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=i(n);function i(o){return o&&o.__esModule?o:{default:o}}t.default=r.default})})(v_);const m3=E1(v_);var bu=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},y3=Q(yo)(D0||(D0=bu([`
  border-radius: 4px;
  padding: 12px 12px 12px 24px;
  width: 385px;
  overflow: hidden;
  box-shadow: `,`;
  font-family: `,`;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  @media (`,`) {
    width: calc(100vw - 48px);
  }
`],[`
  border-radius: 4px;
  padding: 12px 12px 12px 24px;
  width: 385px;
  overflow: hidden;
  box-shadow: `,`;
  font-family: `,`;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  @media (`,`) {
    width: calc(100vw - 48px);
  }
`])),D.shadow(),D.font(),be.below.phone),g3=Q(d_)(H0||(H0=bu([`
  flex: 1 1 100%;

  & a {
    color: `,`;
  }
`],[`
  flex: 1 1 100%;

  & a {
    color: `,`;
  }
`])),D.color("secondary",{dynamic:!0})),_3=Q.div(B0||(B0=bu([`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-right: 24px;
  color: `,`;

  & img {
    height: 48px;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-right: 24px;
  color: `,`;

  & img {
    height: 48px;
  }
`])),D.textColor()),w3=Q.div(W0||(W0=bu([`
  font-size: 24px;
  color: `,`;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`],[`
  font-size: 24px;
  color: `,`;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
`])),D.textColor()),D0,H0,B0,W0,nh=globalThis&&globalThis.__assign||function(){return nh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},nh.apply(this,arguments)},x3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},b3=C.forwardRef(function(e,t){var n=e.onClose,r=e.onSeeMore,i=e.message,o=e.illustration,a=e.warning,l=e.markdown,s=x3(e,["onClose","onSeeMore","message","illustration","warning","markdown"]),u=Od(),c=Cd(t),f=function(){if(r)r();else if(c.current){var h=c.current.querySelectorAll("a");h.length&&h[0].click()}};return C.createElement(m3,{onSwipeUp:f,onSwipeDown:n,onSwipeLeft:n,onSwipeRight:n,allowMouseEvents:!0,innerRef:function(){}},C.createElement(y3,nh({backgroundColor:a?u.colors.error.base:u.colors.secondary.base,ref:c,"data-testid":"notification-container"},s),o&&C.createElement(_3,null,o),C.createElement(g3,{"data-testid":"notification-text",variation:"title",markdown:l},ai(i)?i({close:n}):i),C.createElement(w3,{onClick:n},C.createElement(Md,{icon:"close"}))))}),S3=function(){var e=Od();return function(t){switch(t){case"error":return e.colors.error.base;case"info":return e.colors.secondary.base;case"success":return e.colors.success.base;case"warning":return e.colors.warning.base}}},rh;rh=Pd(),rh.dispatch;var T3=rh.subscribe,$d={floatingButtons:50,modals:100,dropDowns:200,tooltips:300,notifications:400},m_=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},E3=Q.div(U0||(U0=m_([`
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 385px / 2);
  right: calc(50vw - 385px / 2);
  z-index: `,`;
  display: flex;
  flex-direction: column-reverse;

  @media (`,`) {
    left: 20px;
    right: 20px;
  }
`],[`
  position: fixed;
  bottom: 24px;
  left: calc(50vw - 385px / 2);
  right: calc(50vw - 385px / 2);
  z-index: `,`;
  display: flex;
  flex-direction: column-reverse;

  @media (`,`) {
    left: 20px;
    right: 20px;
  }
`])),$d.notifications,be.below.phone),C3=Q.div(V0||(V0=m_([`
  &:not([data-has-been-frozen='true']) {
    animation: `,`;
  }
  height: auto;
  max-height: 500px;
  overflow: hidden;
  transition: `,`;
  margin-top: 8px;

  &[data-closing='true'] {
    animation: `,`;
    max-height: 0;
    margin-top: 0px;
  }
`],[`
  &:not([data-has-been-frozen='true']) {
    animation: `,`;
  }
  height: auto;
  max-height: 500px;
  overflow: hidden;
  transition: `,`;
  margin-top: 8px;

  &[data-closing='true'] {
    animation: `,`;
    max-height: 0;
    margin-top: 0px;
  }
`])),Vi("emergeSlantFromTop"),Fa("all",{duration:"m"}),Vi("diveSlant",{duration:"l"})),U0,V0,Ur=globalThis&&globalThis.__assign||function(){return Ur=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ur.apply(this,arguments)},Mc=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},M3=5e3,O3=function(){var e=vd(),t=Rg(),n=C.useState([]),r=n[0],i=n[1],o=C.useCallback(function(f){var h=window.setTimeout(function(){e.current&&i(function(d){return d.filter(function(p){return p.id!==f})})},wn.l);return t(h),h},[e,t]),a=C.useCallback(function(f){if(e.current){var h=o(f);i(function(d){var p=Mc([],d,!0),g=p.findIndex(function(m){return m.id===f});if(p[g]&&(p[g].open=!1,p[g].timeout=h,g===0)){var _=p.findIndex(function(m,v){return v>g&&m.open});p[_]&&(p[_].timeout=l(p[_].id,p[_].options))}return p})}},[e,o]),l=C.useCallback(function(f,h){if(h.duration!==1/0){var d=window.setTimeout(function(){return a(f)},h.duration||M3);return t(d),d}},[a,t]),s=function(){i(function(f){return f.map(function(h){return h.timeout&&clearTimeout(h.timeout),Ur(Ur({},h),{hasBeenFrozen:!0,timeout:null})})})},u=function(){i(function(f){return f.map(function(h){return Ur(Ur({},h),{timeout:h.open?l(h.id,h.options):o(h.id)})})})};C.useEffect(function(){return T3(function(f,h){h===void 0&&(h={});var d=Math.random(),p={message:f,options:h,open:!0,hasBeenFrozen:!1,id:d,timeout:null};i(function(g){return g.length||(p.timeout=l(p.id,p.options)),Mc(Mc([],g,!0),[p],!1)})})},[l]);var c=S3();return r.length===0?null:Zr.createPortal(C.createElement(E3,{onClick:function(f){return f.stopPropagation()}},r.map(function(f){var h,d,p=!((h=f.message)===null||h===void 0)&&h.message?f.message:{message:f.message};return!p.backgroundColor&&(!((d=f.options)===null||d===void 0)&&d.type)&&(p.backgroundColor=Na(c(f.options.type))),C.createElement(C3,{key:f.id,onMouseEnter:s,onMouseLeave:u,"data-has-been-frozen":f.hasBeenFrozen,"data-closing":!f.open},C.createElement(b3,Ur({onClose:function(){var g,_;a(f.id),(_=(g=f.options).onClose)===null||_===void 0||_.call(g)}},p)))})),document.body)};typeof document=="object"&&!("isConnected"in Node.prototype)&&Object.defineProperty(Node.prototype,"isConnected",{get:function(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}});var An;(function(e){e.opening="opening",e.opened="opened",e.closing="closing",e.closed="closed"})(An||(An={}));var Cs=globalThis&&globalThis.__assign||function(){return Cs=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Cs.apply(this,arguments)},P3="Escape",$3={animationDuration:300,animated:!1,persistent:!1,open:!1,onClose:function(){},value:void 0},k3=typeof window=="object"?C.useLayoutEffect:C.useEffect,z3=function(e){var t=C.useRef(null);return e||t},A3=function(e){var t=C.useRef(!1);return!t.current&&e&&(t.current=!0),t.current},L3=function(e,t){var n=C.useRef(!1),r=!n.current&&t&&e,i=C.useState(!r),o=i[0],a=i[1];return C.useEffect(function(){n.current=!0,o||a(!0)},[o]),o&&e},R3=function(e,t){var n=C.useRef(e);return[An.opened,An.opening].includes(t)&&(n.current=e),n.current},I3=function(e){var t=Cs(Cs({},$3),e),n=L3(t.open,t.animated),r=A3(n),i=z3(t.ref),o=C.useRef(t),a=C.useState(!1),l=a[0],s=a[1],u=C.useMemo(function(){return!n&&!l?An.closed:!n&&l?An.closing:n&&!l?An.opening:An.opened},[n,l]),c=R3(t.value,u);C.useEffect(function(){o.current=t}),k3(function(){!o.current.animated&&n!==l&&s(n)},[l,n]);var f=C.useCallback(function(){o.current.onClose()},[]);return C.useEffect(function(){if(o.current.animated){var h=setTimeout(function(){return s(n)},o.current.animationDuration);return function(){return clearTimeout(h)}}},[n]),C.useEffect(function(){var h=function(p){!o.current.persistent&&o.current.open&&p.key===P3&&f()},d=function(p){var g=p.target;!o.current.persistent&&u===An.opened&&i.current&&g&&g.isConnected&&!i.current.contains(g)&&f()};return window.addEventListener("keydown",h),window.addEventListener("click",d),function(){window.removeEventListener("keydown",h),window.removeEventListener("click",d)}},[i,f,l,u]),{state:u,close:f,ref:i,hasAlreadyBeenOpened:r,value:c,animated:t.animated,animationDuration:t.animationDuration,persistent:t.persistent}};const j3=I3;var F3=C.createContext(null),Ms=globalThis&&globalThis.__assign||function(){return Ms=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ms.apply(this,arguments)},N3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},Y0=C.createContext(null),y_=function(e){return e===void 0&&(e={}),function(t){var n=C.forwardRef(function(r,i){var o=r.open,a=r.onClose,l=r.persistent,s=r.value,u=r.animated,c=N3(r,["open","onClose","persistent","value","animated"]),f=j3({ref:i,open:o,onClose:a,value:s,persistent:l!=null?l:e.persistent,animated:u!=null?u:e.animated,animationDuration:e.animationDuration}),h=C.useContext(Y0),d=Ms({modal:f,parentFloatingPanelRef:h},c);return C.createElement(F3.Provider,{value:f},C.createElement(Y0.Provider,{value:f.ref},C.createElement(t,Ms({},d,{ref:f.ref}))))});return n}},ia=globalThis&&globalThis.__assign||function(){return ia=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ia.apply(this,arguments)},D3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},g_=function(e){return e===void 0&&(e={}),function(t){var n=e.forwardRef,r=n===void 0?!1:n,i=C.forwardRef(function(o,a){var l=o,s=l.triggerElement,u=l.triggerRef,c=l.onClose,f=D3(l,["triggerElement","triggerRef","onClose"]),h=C.useState(!1),d=h[0],p=h[1],g=Cd(u),_=C.useCallback(function(v){ai(c)&&c(v),C.startTransition(function(){return p(!1)})},[c]),m=C.useMemo(function(){var v=function(){return C.startTransition(function(){return p(function(w){return!w})})};return s?ai(s)?s(ia({open:d,onClick:v},r?{ref:g}:{})):C.cloneElement(s,{onClick:v,ref:g}):null},[s,g,d]);return m?C.createElement(C.Fragment,null,m,C.createElement(t,ia({triggerRef:g,ref:a},f,{open:d,onClose:_}))):C.createElement(t,ia({},f,{onClose:c,ref:a,triggerRef:u}))});return i.displayName=t.displayName||t.name,i}},H3=C.createContext({isInLayout:!1,registerChild:function(){}}),Os;(function(e){e[e.ActionBar=0]="ActionBar",e[e.HeaderBar=1]="HeaderBar"})(Os||(Os={}));var Xi;(function(e){e[e.solid=0]="solid",e[e.outline=1]="outline",e[e.link=2]="link",e[e.ghost=3]="ghost"})(Xi||(Xi={}));var Su=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},X0=Q.div(G0||(G0=Su([`
  font-size: 24px;
  display: flex;

  &[data-position='left'] {
    margin-right: var(--button-side-element-margin);
  }

  &[data-position='right'] {
    margin-left: var(--button-side-element-margin);
  }
`],[`
  font-size: 24px;
  display: flex;

  &[data-position='left'] {
    margin-right: var(--button-side-element-margin);
  }

  &[data-position='right'] {
    margin-left: var(--button-side-element-margin);
  }
`]))),B3=Q.div(q0||(q0=Su([`
  position: relative;
  white-space: nowrap;
`],[`
  position: relative;
  white-space: nowrap;
`]))),W3=Q.button(K0||(K0=Su([`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  position: relative;

  max-width: 100%;
  font-family: `,`;
  letter-spacing: 0.1px;
  border: none;

  transition-property: box-shadow, background-color;
  transition-duration: `,`ms;
  transition-timing-function: `,`;

  box-shadow: var(--button-shadow),
    inset 0 0 0 var(--button-border-width) var(--button-border-color),
    0 0 0 var(--button-outline-width) var(--button-outline-color);

  height: var(--button-height);

  --button-border-width: 0;
  --button-border-color: `,`;
  --button-outline-width: 0;
  --button-outline-color: `,`;
  --button-shadow: 0 0 0 `,`;
  --button-height: 48px;

  &:not([data-small='true']) {
    font-size: `,`px;
    padding: 0 24px;
    --button-side-element-margin: 10px;
  }

  &[data-small='true'] {
    font-size: `,`px;
    padding: 0 12px;
    --button-height: 36px;
    --button-side-element-margin: 8px;

    & `,` {
      font-size: 20px;
    }
  }

  &[data-tiny='true'] {
    font-size: `,`px;
    padding: 0 12px;
    --button-height: 36px;
    --button-side-element-margin: 8px;

    & `,` {
      font-size: 20px;
    }
  }

  &[data-mode='`,`'] {
    background-color: `,`;
    color: `,`;

    &:hover {
      background-color: `,`;
    }

    &:active {
      background-color: `,`;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:not(:disabled):not(:focus):not(:active) {
      --button-shadow: `,`;
    }

    &[data-loading='true'] {
      background: `,`;
      cursor: initial;
      pointer-events: none;
    }

    &:disabled {
      background-color: `,`;
      color: `,`;
    }
  }

  &[data-mode='`,`'] {
    --button-border-width: 2px;

    background-color: transparent;
    color: `,`;

    &:hover:not(:focus) {
      --button-border-width: 4px;
    }

    &:active {
      --button-border-width: 3px;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: `,`;

      --button-border-color: `,`;
    }
  }

  &[data-mode='`,`'] {
    background-color: transparent;
    color: `,`;
    padding: 0 12px;

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      background-color: `,`;
      color: `,`;
    }

    &:hover,
    &:active {
      background-color: `,`;
    }
  }

  &[data-mode='`,`'] {
    display: inline-flex;
    background-color: transparent;
    padding: 0;
    color: `,`;
    height: unset;

    &:hover {
      color: `,`;
    }

    &:active {
      color: `,`;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: `,`;
    }

    & `,` {
      border-bottom: 2px solid currentColor;
      margin: 2px 0;
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
  }
`],[`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  user-select: none;
  vertical-align: middle;
  text-align: left;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  position: relative;

  max-width: 100%;
  font-family: `,`;
  letter-spacing: 0.1px;
  border: none;

  transition-property: box-shadow, background-color;
  transition-duration: `,`ms;
  transition-timing-function: `,`;

  box-shadow: var(--button-shadow),
    inset 0 0 0 var(--button-border-width) var(--button-border-color),
    0 0 0 var(--button-outline-width) var(--button-outline-color);

  height: var(--button-height);

  --button-border-width: 0;
  --button-border-color: `,`;
  --button-outline-width: 0;
  --button-outline-color: `,`;
  --button-shadow: 0 0 0 `,`;
  --button-height: 48px;

  &:not([data-small='true']) {
    font-size: `,`px;
    padding: 0 24px;
    --button-side-element-margin: 10px;
  }

  &[data-small='true'] {
    font-size: `,`px;
    padding: 0 12px;
    --button-height: 36px;
    --button-side-element-margin: 8px;

    & `,` {
      font-size: 20px;
    }
  }

  &[data-tiny='true'] {
    font-size: `,`px;
    padding: 0 12px;
    --button-height: 36px;
    --button-side-element-margin: 8px;

    & `,` {
      font-size: 20px;
    }
  }

  &[data-mode='`,`'] {
    background-color: `,`;
    color: `,`;

    &:hover {
      background-color: `,`;
    }

    &:active {
      background-color: `,`;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:not(:disabled):not(:focus):not(:active) {
      --button-shadow: `,`;
    }

    &[data-loading='true'] {
      background: `,`;
      cursor: initial;
      pointer-events: none;
    }

    &:disabled {
      background-color: `,`;
      color: `,`;
    }
  }

  &[data-mode='`,`'] {
    --button-border-width: 2px;

    background-color: transparent;
    color: `,`;

    &:hover:not(:focus) {
      --button-border-width: 4px;
    }

    &:active {
      --button-border-width: 3px;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: `,`;

      --button-border-color: `,`;
    }
  }

  &[data-mode='`,`'] {
    background-color: transparent;
    color: `,`;
    padding: 0 12px;

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      background-color: `,`;
      color: `,`;
    }

    &:hover,
    &:active {
      background-color: `,`;
    }
  }

  &[data-mode='`,`'] {
    display: inline-flex;
    background-color: transparent;
    padding: 0;
    color: `,`;
    height: unset;

    &:hover {
      color: `,`;
    }

    &:active {
      color: `,`;
    }

    &:focus:not(:active) {
      --button-outline-width: 4px;
    }

    &:disabled {
      color: `,`;
    }

    & `,` {
      border-bottom: 2px solid currentColor;
      margin: 2px 0;
    }
  }

  &[data-full-width='true'] {
    width: 100%;
  }

  &:disabled {
    pointer-events: none;
  }
`])),D.font(),wn.m,ja,D.color("secondary",{dynamic:!0}),D.color("primary",{opacity:.3}),D.neutralColor(1e3),Je.moon.size,Je.pluto.size,X0,Je.asteroid.size,X0,Xi.solid,D.color("primary",{dynamic:!0}),D.color("primary",{variation:"contrastText",dynamic:!0}),D.color("primary",{dynamic:!0,variation:"loud"}),D.color("primary",{dynamic:!0,variation:"louder"}),D.shadow("lower"),D.color("primary",{dynamic:!0,variation:"loud"}),D.neutralColor(300),D.textColor({variation:"lowContrast"}),Xi.outline,D.color("secondary",{dynamic:!0}),D.neutralColor(300),D.neutralColor(300),Xi.ghost,D.color("primary",{dynamic:!0}),D.neutralColor(300),D.textColor({variation:"lowContrast"}),D.neutralColor(100),Xi.link,D.color("primary",{dynamic:!0}),D.color("primary",{dynamic:!0,variation:"loud"}),D.color("primary",{dynamic:!0,variation:"louder"}),D.color("secondary",{variation:"louder",opacity:.45}),B3);Q.div(Q0||(Q0=Su([`
  position: relative;
`],[`
  position: relative;
`])));var G0,q0,K0,Q0,__=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},U3=Q(yo)(Z0||(Z0=__([""],[""]))),w_=Q.div(J0||(J0=__([`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 72px;
  padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);

  @media (`,`) {
    &[data-count='1'] {
      height: 60px;
      padding: 0;

      & `,` {
        height: 100%;
        width: 100%;
      }
    }

    &:not([data-count='1']) {
      justify-content: space-between;
    }
  }

  @media (`,`) {
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`],[`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  height: 72px;
  padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);

  @media (`,`) {
    &[data-count='1'] {
      height: 60px;
      padding: 0;

      & `,` {
        height: 100%;
        width: 100%;
      }
    }

    &:not([data-count='1']) {
      justify-content: space-between;
    }
  }

  @media (`,`) {
    & > *:not(:last-child) {
      margin-right: 8px;
    }
  }
`])),be.below.phone,W3,be.above.phone),Z0,J0,V3=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},Y3=Q(yo)(em||(em=V3([`
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: solid 1px `,`;
  z-index: 12;

  &[data-sticky='true'] {
    position: sticky !important;
  }
  &[data-sticky='false'] {
    position: relative !important;
  }

  &[data-small='true'] {
    height: 48px;
  }

  &[data-large='true'] {
    height: 72px;
  }

  &[data-is-in-layout='true'] {
    padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);
  }

  &:not([data-is-in-layout='true']) {
    padding: 0 36px;

    @media (`,`) {
      padding: 0 18px;
    }
  }

  &::after {
    content: '';
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    right: calc(100% * (1 - var(--header-bar-progress)));
    background-color: `,`;
    transition: `,`;
  }
`],[`
  height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: solid 1px `,`;
  z-index: 12;

  &[data-sticky='true'] {
    position: sticky !important;
  }
  &[data-sticky='false'] {
    position: relative !important;
  }

  &[data-small='true'] {
    height: 48px;
  }

  &[data-large='true'] {
    height: 72px;
  }

  &[data-is-in-layout='true'] {
    padding: 0 var(--layout-right-padding) 0 var(--layout-left-padding);
  }

  &:not([data-is-in-layout='true']) {
    padding: 0 36px;

    @media (`,`) {
      padding: 0 18px;
    }
  }

  &::after {
    content: '';
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    right: calc(100% * (1 - var(--header-bar-progress)));
    background-color: `,`;
    transition: `,`;
  }
`])),D.neutralColor(300),be.below.smallTablet,D.color("primary"),Fa("right")),em,x_={top:!0,right:!0,bottom:!0,left:!0},X3=function(e){return e===void 0&&(e=x_),`
  `.concat(e.top?"margin-top: calc(0px - var(--layout-top-padding));":"",`
  `).concat(e.right?"margin-right: calc(0px - var(--layout-right-padding));":"",`
  `).concat(e.bottom?"margin-bottom: calc(0px - var(--layout-bottom-padding));":"",`
  `).concat(e.left?"margin-left: calc(0px - var(--layout-left-padding));":"",`
`)},G3=function(e){return e===void 0&&(e=x_),`
  `.concat(e.top?"padding-top: var(--layout-top-padding);":"",`
  `).concat(e.right?"padding-right: var(--layout-right-padding);":"",`
  `).concat(e.bottom?"padding-bottom: var(--layout-bottom-padding);":"",`
  `).concat(e.left?"padding-left: var(--layout-left-padding);":"",`
`)},Qr={removeLayoutPadding:X3,addLayoutPadding:G3},kd=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},b_=je(tm||(tm=kd([`
  `,`;

  &[data-has-action-bar='true'] {
    --layout-bottom-padding: 0 !important;

    & `,` {
      @media (`,`) {
        `,`;

        position: sticky;
        bottom: 0;

        & `,` {
          padding-top: 24px;
          padding-bottom: 24px;
          height: auto;
        }
      }

      @media (`,`) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  &[data-has-header-bar='true'] {
    & `,` {
      `,`;

      margin-bottom: var(--layout-top-padding);
      position: sticky;
      top: calc(0px - var(--layout-top-padding));
    }
  }
`],[`
  `,`;

  &[data-has-action-bar='true'] {
    --layout-bottom-padding: 0 !important;

    & `,` {
      @media (`,`) {
        `,`;

        position: sticky;
        bottom: 0;

        & `,` {
          padding-top: 24px;
          padding-bottom: 24px;
          height: auto;
        }
      }

      @media (`,`) {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
  }

  &[data-has-header-bar='true'] {
    & `,` {
      `,`;

      margin-bottom: var(--layout-top-padding);
      position: sticky;
      top: calc(0px - var(--layout-top-padding));
    }
  }
`])),Qr.addLayoutPadding(),U3,be.above.phone,Qr.removeLayoutPadding({right:!0,left:!0}),w_,be.below.phone,Y3,Qr.removeLayoutPadding({top:!0,right:!0,left:!0})),q3=Q(yo)(nm||(nm=kd([`
  `,`
`],[`
  `,`
`])),b_),K3=Q.div(rm||(rm=kd([`
  `,`
`],[`
  `,`
`])),b_),tm,nm,rm,ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ar.apply(this,arguments)},Q3=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},im=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},zd=C.forwardRef(function(e,t){var n,r,i,o,a=Da(),l=e.children,s=e.backgroundColor,u=s===void 0?a:s,c=Q3(e,["children","backgroundColor"]),f=C.useState({}),h=f[0],d=f[1],p=C.useMemo(function(){return{isInLayout:!0,registerChild:function(m){var v=Math.random();return d(function(w){var b,S;return ar(ar({},w),(b={},b[m]=im(im([],(S=w[m])!==null&&S!==void 0?S:[],!0),[v],!1),b))}),function(){return d(function(w){var b,S;return ar(ar({},w),(b={},b[m]=((S=w[m])!==null&&S!==void 0?S:[]).filter(function(E){return E!==v}),b))})}}}},[]),g=((r=(n=h[Os.ActionBar])===null||n===void 0?void 0:n.length)!==null&&r!==void 0?r:0)>0,_=((o=(i=h[Os.HeaderBar])===null||i===void 0?void 0:i.length)!==null&&o!==void 0?o:0)>0;return C.createElement(H3.Provider,{value:p},u?C.createElement(q3,ar({ref:t},c,{backgroundColor:u,"data-has-action-bar":g,"data-has-header-bar":_}),l):C.createElement(K3,ar({ref:t},c,{"data-has-action-bar":g,"data-has-header-bar":_}),l))}),Z3=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},J3=Q.button(om||(om=Z3([`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0; // needed in safari mobile
  cursor: pointer;
  flex: 0 0 auto;
  border: var(--round-icon-button-border-width) solid
    var(--round-icon-button-border-color);
  box-shadow: `,`;
  color: var(--round-icon-color);
  background-color: var(--round-icon-background-color);

  transition-property: box-shadow, background-color;
  transition-duration: `,`ms;
  transition-timing-function: `,`;

  // Size
  height: var(--round-icon-button-diameter);
  width: var(--round-icon-button-diameter);
  border-radius: 50%;
  font-size: `,`px;

  --round-icon-button-border-width: 1px;
  --round-icon-button-border-color: `,`;
  --round-icon-button-outline-color: `,`;
  --round-icon-button-diameter: 36px;
  --round-icon-background-color: `,`;
  --round-icon-color: `,`;

  &[data-small='true'] {
    --round-icon-button-diameter: 24px;
    font-size: `,`px;
  }

  &[data-large='true'] {
    --round-icon-button-diameter: 48px;
    font-size: `,`px;
  }

  &:hover {
    --round-icon-button-border-width: 3px;
    --round-icon-color: `,`;
  }

  &:active {
    --round-icon-button-border-width: 2px;
    --round-icon-color: `,`;
  }

  &:focus {
    box-shadow: 0 0 0 4px `,`;
  }

  &:disabled {
    pointer-events: none;
    --round-icon-button-border-width: 0;
    --round-icon-background-color: `,`;
    --round-icon-color: `,`;
    box-shadow: none;
  }
`],[`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0; // needed in safari mobile
  cursor: pointer;
  flex: 0 0 auto;
  border: var(--round-icon-button-border-width) solid
    var(--round-icon-button-border-color);
  box-shadow: `,`;
  color: var(--round-icon-color);
  background-color: var(--round-icon-background-color);

  transition-property: box-shadow, background-color;
  transition-duration: `,`ms;
  transition-timing-function: `,`;

  // Size
  height: var(--round-icon-button-diameter);
  width: var(--round-icon-button-diameter);
  border-radius: 50%;
  font-size: `,`px;

  --round-icon-button-border-width: 1px;
  --round-icon-button-border-color: `,`;
  --round-icon-button-outline-color: `,`;
  --round-icon-button-diameter: 36px;
  --round-icon-background-color: `,`;
  --round-icon-color: `,`;

  &[data-small='true'] {
    --round-icon-button-diameter: 24px;
    font-size: `,`px;
  }

  &[data-large='true'] {
    --round-icon-button-diameter: 48px;
    font-size: `,`px;
  }

  &:hover {
    --round-icon-button-border-width: 3px;
    --round-icon-color: `,`;
  }

  &:active {
    --round-icon-button-border-width: 2px;
    --round-icon-color: `,`;
  }

  &:focus {
    box-shadow: 0 0 0 4px `,`;
  }

  &:disabled {
    pointer-events: none;
    --round-icon-button-border-width: 0;
    --round-icon-background-color: `,`;
    --round-icon-color: `,`;
    box-shadow: none;
  }
`])),D.shadow("lower"),wn.m,ja,Je.earth.size,D.neutralColor(200),D.color("primary",{opacity:.3}),D.color("background"),D.color("secondary",{dynamic:!0,opacity:.7}),Je.moon.size,Je.earth.size,D.color("secondary",{dynamic:!0}),D.color("secondary",{dynamic:!0}),D.color("primary",{opacity:.3}),D.neutralColor(200),D.neutralColor(300)),om,ih=globalThis&&globalThis.__assign||function(){return ih=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ih.apply(this,arguments)},eC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},S_=C.forwardRef(function(e,t){var n=e.icon,r=e.large,i=e.small,o=eC(e,["icon","large","small"]);return C.createElement(J3,ih({ref:t,"data-small":i,"data-large":r},o),C.createElement(Md,{icon:n}))}),Ad=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},am=Wr(lm||(lm=Ad([`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`],[`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`]))),tC=Q(zd)(sm||(sm=Ad([`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: `,`;
  display: flex;
  flex-direction: column;
  overflow: auto;

  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }

  &[data-state='opening'] {
    animation: `,` var(--lightbox-animation-duration) linear 0ms;
  }

  &[data-state='closing'] {
    animation: `,` var(--lightbox-animation-duration) linear 0ms reverse;
    opacity: 0;
    pointer-events: none;
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`],[`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: `,`;
  display: flex;
  flex-direction: column;
  overflow: auto;

  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }

  &[data-state='opening'] {
    animation: `,` var(--lightbox-animation-duration) linear 0ms;
  }

  &[data-state='closing'] {
    animation: `,` var(--lightbox-animation-duration) linear 0ms reverse;
    opacity: 0;
    pointer-events: none;
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`])),$d.modals,be.below.smallTablet,be.below.smallTablet,am,am),nC=Q(S_)(um||(um=Ad([`
  position: fixed;
  top: 12px;
  right: 36px;
  z-index: 13;
`],[`
  position: fixed;
  top: 12px;
  right: 36px;
  z-index: 13;
`]))),lm,sm,um,oa=globalThis&&globalThis.__assign||function(){return oa=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oa.apply(this,arguments)},rC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},iC=C.forwardRef(function(e,t){var n,r=e.modal,i=e.parentFloatingPanelRef,o=e.children,a=e.spacing,l=e.hideCloseIcon,s=e.style,u=rC(e,["modal","parentFloatingPanelRef","children","spacing","hideCloseIcon","style"]),c=Da({useRootTheme:!0});return r.hasAlreadyBeenOpened?Zr.createPortal(C.createElement(tC,oa({ref:t,backgroundColor:c,"data-state":r.state,"data-spacing":a,"data-testid":"lightbox-container",style:oa(oa({},s!=null?s:{}),{"--modal-animation-duration":"".concat(r.animationDuration,"ms")})},u),!l&&C.createElement(nC,{"data-testid":"lightbox-close-icon",icon:"close",onClick:r.close}),ai(o)?o(r):o),(n=i==null?void 0:i.current)!==null&&n!==void 0?n:document.body):null}),oC=g_()(y_({animated:!0,animationDuration:wn.l,persistent:!0})(iC)),oh=globalThis&&globalThis.__assign||function(){return oh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},oh.apply(this,arguments)},aC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},lC={headerMaxi:f_,headerBig:FE,header:NE,headerSmall:DE,section:HE,regular:BE},sC=C.forwardRef(function(e,t){var n=e.type,r=aC(e,["type"]),i=lC[n]||f_;return C.createElement(i,oh({ref:t},r))}),uC=h_({inline:!0})(sC),_o=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},cm=Wr(fm||(fm=_o([`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(50, 50, 50, 0.7);
  }
`],[`
  from {
    background-color: transparent;
  }

  to {
    background-color: rgba(50, 50, 50, 0.7);
  }
`]))),Vo=Q(zd)(hm||(hm=_o([`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  --modal-width: 448px;

  &[data-width='small'] {
    --modal-width: 344px;
  }

  &[data-width='large'] {
    --modal-width: 654px;
  }

  @media (`,`) {
    width: var(--modal-width);
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 96px);
    border-radius: 6px;

    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;
  }

  @media (`,`) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    --layout-top-padding: 20px;
    --layout-bottom-padding: 20px;
    --layout-left-padding: 20px;
    --layout-right-padding: 20px;
  }
`],[`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  --modal-width: 448px;

  &[data-width='small'] {
    --modal-width: 344px;
  }

  &[data-width='large'] {
    --modal-width: 654px;
  }

  @media (`,`) {
    width: var(--modal-width);
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 96px);
    border-radius: 6px;

    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;
  }

  @media (`,`) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    --layout-top-padding: 20px;
    --layout-bottom-padding: 20px;
    --layout-left-padding: 20px;
    --layout-right-padding: 20px;
  }
`])),be.above.phone,be.below.phone),cC=Q.div(dm||(dm=_o([`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: `,`;
  background-color: rgba(50, 50, 50, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (`,`) {
    background-color: transparent;

    &[data-state='opening'] {
      & `,` {
        animation: `,`;
      }
    }

    &[data-state='closing'] {
      & `,` {
        animation: `,`;
      }
    }
  }

  @media (`,`) {
    &[data-state='opening'] {
      animation: `,` var(--modal-animation-duration) linear 0ms;

      & `,` {
        animation: `,`;
      }
    }

    &[data-state='closing'] {
      animation: `,` var(--modal-animation-duration) linear 0ms reverse;
      pointer-events: none;
      background-color: transparent;

      & `,` {
        animation: `,`;
      }
    }
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`],[`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: `,`;
  background-color: rgba(50, 50, 50, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (`,`) {
    background-color: transparent;

    &[data-state='opening'] {
      & `,` {
        animation: `,`;
      }
    }

    &[data-state='closing'] {
      & `,` {
        animation: `,`;
      }
    }
  }

  @media (`,`) {
    &[data-state='opening'] {
      animation: `,` var(--modal-animation-duration) linear 0ms;

      & `,` {
        animation: `,`;
      }
    }

    &[data-state='closing'] {
      animation: `,` var(--modal-animation-duration) linear 0ms reverse;
      pointer-events: none;
      background-color: transparent;

      & `,` {
        animation: `,`;
      }
    }
  }

  &[data-state='closed'] {
    opacity: 0;
    pointer-events: none;
  }
`])),$d.modals,be.below.phone,Vo,Vi("emergeSlantFromTop"),Vo,Vi("diveSlant"),be.above.phone,cm,Vo,Vi("emergeSlantFromBottom"),cm,Vo,Vi("diveSlant")),fC=Q.div(pm||(pm=_o([`
  display: flex;
  flex: 0 0 auto;

  `,`;
  `,`;

  padding-bottom: 12px;

  @media (`,`) {
    align-items: baseline;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 12px;
    }
  }

  @media (`,`) {
    flex-direction: column-reverse;

    & > *:not(:first-child) {
      margin-bottom: 12px;
    }
  }
`],[`
  display: flex;
  flex: 0 0 auto;

  `,`;
  `,`;

  padding-bottom: 12px;

  @media (`,`) {
    align-items: baseline;
    justify-content: space-between;

    & > *:not(:last-child) {
      margin-right: 12px;
    }
  }

  @media (`,`) {
    flex-direction: column-reverse;

    & > *:not(:first-child) {
      margin-bottom: 12px;
    }
  }
`])),Qr.removeLayoutPadding({top:!0,right:!0,left:!0}),Qr.addLayoutPadding({top:!0,right:!0,left:!0}),be.above.phone,be.below.phone),hC=Q.div(vm||(vm=_o([`
  flex: 1 1 100%;
  min-height: 0;
  display: flex;

  `,`;
`],[`
  flex: 1 1 100%;
  min-height: 0;
  display: flex;

  `,`;
`])),Qr.removeLayoutPadding({right:!0,bottom:!0,left:!0})),dC=Q.div(mm||(mm=_o([`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  `,`;
  padding-top: 12px;

  @media (`,`) {
    padding-bottom: 72px;

    & `,`:not([data-count='0']):not([data-count='1']) {
      box-shadow: `,`;
    }
  }
`],[`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

  `,`;
  padding-top: 12px;

  @media (`,`) {
    padding-bottom: 72px;

    & `,`:not([data-count='0']):not([data-count='1']) {
      box-shadow: `,`;
    }
  }
`])),Qr.addLayoutPadding({right:!0,bottom:!0,left:!0}),be.below.phone,w_,D.shadow("low")),fm,hm,dm,pm,vm,mm,ah=globalThis&&globalThis.__assign||function(){return ah=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ah.apply(this,arguments)},pC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},vC=C.forwardRef(function(e,t){var n,r=e.modal,i=e.parentFloatingPanelRef,o=e.children,a=e.title,l=e.width,s=l===void 0?"regular":l,u=e.hideCloseIcon,c=pC(e,["modal","parentFloatingPanelRef","children","title","width","hideCloseIcon"]),f=Da({useRootTheme:!0});return r.hasAlreadyBeenOpened?Zr.createPortal(C.createElement(cC,{"data-state":r.state,"data-testid":"modal-overlay",style:{"--modal-animation-duration":"".concat(r.animationDuration,"ms")}},C.createElement(Vo,ah({backgroundColor:f,ref:t,"data-testid":"modal-container","data-width":s},c),(a||!u)&&C.createElement(fC,null,eE(a)?C.createElement(uC,{type:"section"},a):a!=null?a:C.createElement("div",null),!u&&C.createElement(S_,{onClick:r.close,icon:"close"})),C.createElement(hC,null,C.createElement(dC,null,ai(o)?o(r):o)))),(n=i==null?void 0:i.current)!==null&&n!==void 0?n:document.body):null}),mC=g_()(y_({animated:!0,persistent:!1,animationDuration:wn.m})(vC)),lh;lh=Pd(),lh.dispatch;var yC=lh.subscribe,lr=globalThis&&globalThis.__assign||function(){return lr=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},lr.apply(this,arguments)},gC=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},ym=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},_C=function(){var e=vd(),t=Rg(),n=C.useState([]),r=n[0],i=n[1],o=C.useCallback(function(a,l){e.current&&(i(function(s){return s.map(function(u){return u.id===a.id?lr(lr({},u),{open:!1}):u})}),t(window.setTimeout(function(){e.current&&i(function(s){return s.filter(function(u){return u.id!==a.id})})},wn.m))),a.resolve(l)},[e,t]);return C.useEffect(function(){return yC(function(a,l){return new Promise(function(s){return i(function(u){return ym(ym([],u,!0),[{options:l,props:a,resolve:s,id:Math.random(),open:!0}],!1)})})})},[]),C.createElement(C.Fragment,null,r.map(function(a){var l,s=a.props({onResolve:function(d){return o(a,d)}}),u=s.Component,c=s.children,f=gC(s,["Component","children"]);(l=f.open)!==null&&l!==void 0||(f.open=a.open);var h=lr(lr({},f),{children:u?C.createElement(u,{children:c}):c,key:a.id,onClose:function(){return o(a,void 0)}});return h.fullscreen?C.createElement(oC,lr({},h)):C.createElement(mC,lr({},h))}))},wC=typeof global=="object"&&global&&global.Object===Object&&global;const T_=wC;var xC=typeof self=="object"&&self&&self.Object===Object&&self,bC=T_||xC||Function("return this")();const un=bC;var SC=un.Symbol;const Er=SC;var E_=Object.prototype,TC=E_.hasOwnProperty,EC=E_.toString,Do=Er?Er.toStringTag:void 0;function CC(e){var t=TC.call(e,Do),n=e[Do];try{e[Do]=void 0;var r=!0}catch(o){}var i=EC.call(e);return r&&(t?e[Do]=n:delete e[Do]),i}var MC=Object.prototype,OC=MC.toString;function PC(e){return OC.call(e)}var $C="[object Null]",kC="[object Undefined]",gm=Er?Er.toStringTag:void 0;function pi(e){return e==null?e===void 0?kC:$C:gm&&gm in Object(e)?CC(e):PC(e)}function Cr(e){return e!=null&&typeof e=="object"}var zC="[object Symbol]";function fo(e){return typeof e=="symbol"||Cr(e)&&pi(e)==zC}function Bl(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var AC=Array.isArray;const Ct=AC;var LC=1/0,_m=Er?Er.prototype:void 0,wm=_m?_m.toString:void 0;function C_(e){if(typeof e=="string")return e;if(Ct(e))return Bl(e,C_)+"";if(fo(e))return wm?wm.call(e):"";var t=e+"";return t=="0"&&1/e==-LC?"-0":t}var RC=/\s/;function IC(e){for(var t=e.length;t--&&RC.test(e.charAt(t)););return t}var jC=/^\s+/;function FC(e){return e&&e.slice(0,IC(e)+1).replace(jC,"")}function sn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var xm=0/0,NC=/^[-+]0x[0-9a-f]+$/i,DC=/^0b[01]+$/i,HC=/^0o[0-7]+$/i,BC=parseInt;function bm(e){if(typeof e=="number")return e;if(fo(e))return xm;if(sn(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=sn(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=FC(e);var n=DC.test(e);return n||HC.test(e)?BC(e.slice(2),n?2:8):NC.test(e)?xm:+e}function Tu(e){return e}var WC="[object AsyncFunction]",UC="[object Function]",VC="[object GeneratorFunction]",YC="[object Proxy]";function Ld(e){if(!sn(e))return!1;var t=pi(e);return t==UC||t==VC||t==WC||t==YC}var XC=un["__core-js_shared__"];const Oc=XC;var Sm=function(){var e=/[^.]+$/.exec(Oc&&Oc.keys&&Oc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function GC(e){return!!Sm&&Sm in e}var qC=Function.prototype,KC=qC.toString;function vi(e){if(e!=null){try{return KC.call(e)}catch(t){}try{return e+""}catch(t){}}return""}var QC=/[\\^$.*+?()[\]{}|]/g,ZC=/^\[object .+?Constructor\]$/,JC=Function.prototype,eM=Object.prototype,tM=JC.toString,nM=eM.hasOwnProperty,rM=RegExp("^"+tM.call(nM).replace(QC,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function iM(e){if(!sn(e)||GC(e))return!1;var t=Ld(e)?rM:ZC;return t.test(vi(e))}function oM(e,t){return e==null?void 0:e[t]}function mi(e,t){var n=oM(e,t);return iM(n)?n:void 0}var aM=mi(un,"WeakMap");const sh=aM;var Tm=Object.create,lM=function(){function e(){}return function(t){if(!sn(t))return{};if(Tm)return Tm(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const sM=lM;function uM(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function cM(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var fM=800,hM=16,dM=Date.now;function pM(e){var t=0,n=0;return function(){var r=dM(),i=hM-(r-n);if(n=r,i>0){if(++t>=fM)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function vM(e){return function(){return e}}var mM=function(){try{var e=mi(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();const Ps=mM;var yM=Ps?function(e,t){return Ps(e,"toString",{configurable:!0,enumerable:!1,value:vM(t),writable:!0})}:Tu;const gM=yM;var _M=pM(gM);const wM=_M;var xM=9007199254740991,bM=/^(?:0|[1-9]\d*)$/;function Rd(e,t){var n=typeof e;return t=t==null?xM:t,!!t&&(n=="number"||n!="symbol"&&bM.test(e))&&e>-1&&e%1==0&&e<t}function Id(e,t,n){t=="__proto__"&&Ps?Ps(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Ha(e,t){return e===t||e!==e&&t!==t}var SM=Object.prototype,TM=SM.hasOwnProperty;function EM(e,t,n){var r=e[t];(!(TM.call(e,t)&&Ha(r,n))||n===void 0&&!(t in e))&&Id(e,t,n)}function CM(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var l=t[o],s=r?r(n[l],e[l],l,n,e):void 0;s===void 0&&(s=e[l]),i?Id(n,l,s):EM(n,l,s)}return n}var Em=Math.max;function MM(e,t,n){return t=Em(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=Em(r.length-t,0),a=Array(o);++i<o;)a[i]=r[t+i];i=-1;for(var l=Array(t+1);++i<t;)l[i]=r[i];return l[t]=n(a),uM(e,this,l)}}function OM(e,t){return wM(MM(e,t,Tu),e+"")}var PM=9007199254740991;function jd(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=PM}function wo(e){return e!=null&&jd(e.length)&&!Ld(e)}function $M(e,t,n){if(!sn(n))return!1;var r=typeof t;return(r=="number"?wo(n)&&Rd(t,n.length):r=="string"&&t in n)?Ha(n[t],e):!1}function kM(e){return OM(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(o=e.length>3&&typeof o=="function"?(i--,o):void 0,a&&$M(n[0],n[1],a)&&(o=i<3?void 0:o,i=1),t=Object(t);++r<i;){var l=n[r];l&&e(t,l,r,o)}return t})}var zM=Object.prototype;function Fd(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||zM;return e===n}function AM(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var LM="[object Arguments]";function Cm(e){return Cr(e)&&pi(e)==LM}var M_=Object.prototype,RM=M_.hasOwnProperty,IM=M_.propertyIsEnumerable,jM=Cm(function(){return arguments}())?Cm:function(e){return Cr(e)&&RM.call(e,"callee")&&!IM.call(e,"callee")};const $s=jM;function FM(){return!1}var O_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Mm=O_&&typeof module=="object"&&module&&!module.nodeType&&module,NM=Mm&&Mm.exports===O_,Om=NM?un.Buffer:void 0,DM=Om?Om.isBuffer:void 0,HM=DM||FM;const ks=HM;var BM="[object Arguments]",WM="[object Array]",UM="[object Boolean]",VM="[object Date]",YM="[object Error]",XM="[object Function]",GM="[object Map]",qM="[object Number]",KM="[object Object]",QM="[object RegExp]",ZM="[object Set]",JM="[object String]",eO="[object WeakMap]",tO="[object ArrayBuffer]",nO="[object DataView]",rO="[object Float32Array]",iO="[object Float64Array]",oO="[object Int8Array]",aO="[object Int16Array]",lO="[object Int32Array]",sO="[object Uint8Array]",uO="[object Uint8ClampedArray]",cO="[object Uint16Array]",fO="[object Uint32Array]",Oe={};Oe[rO]=Oe[iO]=Oe[oO]=Oe[aO]=Oe[lO]=Oe[sO]=Oe[uO]=Oe[cO]=Oe[fO]=!0;Oe[BM]=Oe[WM]=Oe[tO]=Oe[UM]=Oe[nO]=Oe[VM]=Oe[YM]=Oe[XM]=Oe[GM]=Oe[qM]=Oe[KM]=Oe[QM]=Oe[ZM]=Oe[JM]=Oe[eO]=!1;function hO(e){return Cr(e)&&jd(e.length)&&!!Oe[pi(e)]}function P_(e){return function(t){return e(t)}}var $_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,aa=$_&&typeof module=="object"&&module&&!module.nodeType&&module,dO=aa&&aa.exports===$_,Pc=dO&&T_.process,pO=function(){try{var e=aa&&aa.require&&aa.require("util").types;return e||Pc&&Pc.binding&&Pc.binding("util")}catch(t){}}();const Pm=pO;var $m=Pm&&Pm.isTypedArray,vO=$m?P_($m):hO;const Nd=vO;var mO=Object.prototype,yO=mO.hasOwnProperty;function k_(e,t){var n=Ct(e),r=!n&&$s(e),i=!n&&!r&&ks(e),o=!n&&!r&&!i&&Nd(e),a=n||r||i||o,l=a?AM(e.length,String):[],s=l.length;for(var u in e)(t||yO.call(e,u))&&!(a&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Rd(u,s)))&&l.push(u);return l}function z_(e,t){return function(n){return e(t(n))}}var gO=z_(Object.keys,Object);const _O=gO;var wO=Object.prototype,xO=wO.hasOwnProperty;function bO(e){if(!Fd(e))return _O(e);var t=[];for(var n in Object(e))xO.call(e,n)&&n!="constructor"&&t.push(n);return t}function Dd(e){return wo(e)?k_(e):bO(e)}function SO(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var TO=Object.prototype,EO=TO.hasOwnProperty;function CO(e){if(!sn(e))return SO(e);var t=Fd(e),n=[];for(var r in e)r=="constructor"&&(t||!EO.call(e,r))||n.push(r);return n}function A_(e){return wo(e)?k_(e,!0):CO(e)}var MO=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,OO=/^\w*$/;function Hd(e,t){if(Ct(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||fo(e)?!0:OO.test(e)||!MO.test(e)||t!=null&&e in Object(t)}var PO=mi(Object,"create");const Ea=PO;function $O(){this.__data__=Ea?Ea(null):{},this.size=0}function kO(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var zO="__lodash_hash_undefined__",AO=Object.prototype,LO=AO.hasOwnProperty;function RO(e){var t=this.__data__;if(Ea){var n=t[e];return n===zO?void 0:n}return LO.call(t,e)?t[e]:void 0}var IO=Object.prototype,jO=IO.hasOwnProperty;function FO(e){var t=this.__data__;return Ea?t[e]!==void 0:jO.call(t,e)}var NO="__lodash_hash_undefined__";function DO(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ea&&t===void 0?NO:t,this}function li(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}li.prototype.clear=$O;li.prototype.delete=kO;li.prototype.get=RO;li.prototype.has=FO;li.prototype.set=DO;function HO(){this.__data__=[],this.size=0}function Eu(e,t){for(var n=e.length;n--;)if(Ha(e[n][0],t))return n;return-1}var BO=Array.prototype,WO=BO.splice;function UO(e){var t=this.__data__,n=Eu(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():WO.call(t,n,1),--this.size,!0}function VO(e){var t=this.__data__,n=Eu(t,e);return n<0?void 0:t[n][1]}function YO(e){return Eu(this.__data__,e)>-1}function XO(e,t){var n=this.__data__,r=Eu(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Yn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Yn.prototype.clear=HO;Yn.prototype.delete=UO;Yn.prototype.get=VO;Yn.prototype.has=YO;Yn.prototype.set=XO;var GO=mi(un,"Map");const Ca=GO;function qO(){this.size=0,this.__data__={hash:new li,map:new(Ca||Yn),string:new li}}function KO(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Cu(e,t){var n=e.__data__;return KO(t)?n[typeof t=="string"?"string":"hash"]:n.map}function QO(e){var t=Cu(this,e).delete(e);return this.size-=t?1:0,t}function ZO(e){return Cu(this,e).get(e)}function JO(e){return Cu(this,e).has(e)}function eP(e,t){var n=Cu(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Xn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Xn.prototype.clear=qO;Xn.prototype.delete=QO;Xn.prototype.get=ZO;Xn.prototype.has=JO;Xn.prototype.set=eP;var tP="Expected a function";function Bd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(tP);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Bd.Cache||Xn),n}Bd.Cache=Xn;var nP=500;function rP(e){var t=Bd(e,function(r){return n.size===nP&&n.clear(),r}),n=t.cache;return t}var iP=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,oP=/\\(\\)?/g,aP=rP(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(iP,function(n,r,i,o){t.push(i?o.replace(oP,"$1"):r||n)}),t});const lP=aP;function sP(e){return e==null?"":C_(e)}function L_(e,t){return Ct(e)?e:Hd(e,t)?[e]:lP(sP(e))}var uP=1/0;function Mu(e){if(typeof e=="string"||fo(e))return e;var t=e+"";return t=="0"&&1/e==-uP?"-0":t}function Wd(e,t){t=L_(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[Mu(t[n++])];return n&&n==r?e:void 0}function cP(e,t,n){var r=e==null?void 0:Wd(e,t);return r===void 0?n:r}function fP(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var hP=z_(Object.getPrototypeOf,Object);const R_=hP;var dP="[object Object]",pP=Function.prototype,vP=Object.prototype,I_=pP.toString,mP=vP.hasOwnProperty,yP=I_.call(Object);function gP(e){if(!Cr(e)||pi(e)!=dP)return!1;var t=R_(e);if(t===null)return!0;var n=mP.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&I_.call(n)==yP}function _P(){this.__data__=new Yn,this.size=0}function wP(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function xP(e){return this.__data__.get(e)}function bP(e){return this.__data__.has(e)}var SP=200;function TP(e,t){var n=this.__data__;if(n instanceof Yn){var r=n.__data__;if(!Ca||r.length<SP-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xn(r)}return n.set(e,t),this.size=n.size,this}function _n(e){var t=this.__data__=new Yn(e);this.size=t.size}_n.prototype.clear=_P;_n.prototype.delete=wP;_n.prototype.get=xP;_n.prototype.has=bP;_n.prototype.set=TP;var j_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,km=j_&&typeof module=="object"&&module&&!module.nodeType&&module,EP=km&&km.exports===j_,zm=EP?un.Buffer:void 0,Am=zm?zm.allocUnsafe:void 0;function CP(e,t){if(t)return e.slice();var n=e.length,r=Am?Am(n):new e.constructor(n);return e.copy(r),r}function MP(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function OP(){return[]}var PP=Object.prototype,$P=PP.propertyIsEnumerable,Lm=Object.getOwnPropertySymbols,kP=Lm?function(e){return e==null?[]:(e=Object(e),MP(Lm(e),function(t){return $P.call(e,t)}))}:OP;const zP=kP;function AP(e,t,n){var r=t(e);return Ct(e)?r:fP(r,n(e))}function Rm(e){return AP(e,Dd,zP)}var LP=mi(un,"DataView");const uh=LP;var RP=mi(un,"Promise");const ch=RP;var IP=mi(un,"Set");const fh=IP;var Im="[object Map]",jP="[object Object]",jm="[object Promise]",Fm="[object Set]",Nm="[object WeakMap]",Dm="[object DataView]",FP=vi(uh),NP=vi(Ca),DP=vi(ch),HP=vi(fh),BP=vi(sh),Hr=pi;(uh&&Hr(new uh(new ArrayBuffer(1)))!=Dm||Ca&&Hr(new Ca)!=Im||ch&&Hr(ch.resolve())!=jm||fh&&Hr(new fh)!=Fm||sh&&Hr(new sh)!=Nm)&&(Hr=function(e){var t=pi(e),n=t==jP?e.constructor:void 0,r=n?vi(n):"";if(r)switch(r){case FP:return Dm;case NP:return Im;case DP:return jm;case HP:return Fm;case BP:return Nm}return t});const Hm=Hr;var WP=un.Uint8Array;const zs=WP;function UP(e){var t=new e.constructor(e.byteLength);return new zs(t).set(new zs(e)),t}function VP(e,t){var n=t?UP(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function YP(e){return typeof e.constructor=="function"&&!Fd(e)?sM(R_(e)):{}}var XP="__lodash_hash_undefined__";function GP(e){return this.__data__.set(e,XP),this}function qP(e){return this.__data__.has(e)}function As(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new Xn;++t<n;)this.add(e[t])}As.prototype.add=As.prototype.push=GP;As.prototype.has=qP;function KP(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function QP(e,t){return e.has(t)}var ZP=1,JP=2;function F_(e,t,n,r,i,o){var a=n&ZP,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var u=o.get(e),c=o.get(t);if(u&&c)return u==t&&c==e;var f=-1,h=!0,d=n&JP?new As:void 0;for(o.set(e,t),o.set(t,e);++f<l;){var p=e[f],g=t[f];if(r)var _=a?r(g,p,f,t,e,o):r(p,g,f,e,t,o);if(_!==void 0){if(_)continue;h=!1;break}if(d){if(!KP(t,function(m,v){if(!QP(d,v)&&(p===m||i(p,m,n,r,o)))return d.push(v)})){h=!1;break}}else if(!(p===g||i(p,g,n,r,o))){h=!1;break}}return o.delete(e),o.delete(t),h}function e5(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function t5(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var n5=1,r5=2,i5="[object Boolean]",o5="[object Date]",a5="[object Error]",l5="[object Map]",s5="[object Number]",u5="[object RegExp]",c5="[object Set]",f5="[object String]",h5="[object Symbol]",d5="[object ArrayBuffer]",p5="[object DataView]",Bm=Er?Er.prototype:void 0,$c=Bm?Bm.valueOf:void 0;function v5(e,t,n,r,i,o,a){switch(n){case p5:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case d5:return!(e.byteLength!=t.byteLength||!o(new zs(e),new zs(t)));case i5:case o5:case s5:return Ha(+e,+t);case a5:return e.name==t.name&&e.message==t.message;case u5:case f5:return e==t+"";case l5:var l=e5;case c5:var s=r&n5;if(l||(l=t5),e.size!=t.size&&!s)return!1;var u=a.get(e);if(u)return u==t;r|=r5,a.set(e,t);var c=F_(l(e),l(t),r,i,o,a);return a.delete(e),c;case h5:if($c)return $c.call(e)==$c.call(t)}return!1}var m5=1,y5=Object.prototype,g5=y5.hasOwnProperty;function _5(e,t,n,r,i,o){var a=n&m5,l=Rm(e),s=l.length,u=Rm(t),c=u.length;if(s!=c&&!a)return!1;for(var f=s;f--;){var h=l[f];if(!(a?h in t:g5.call(t,h)))return!1}var d=o.get(e),p=o.get(t);if(d&&p)return d==t&&p==e;var g=!0;o.set(e,t),o.set(t,e);for(var _=a;++f<s;){h=l[f];var m=e[h],v=t[h];if(r)var w=a?r(v,m,h,t,e,o):r(m,v,h,e,t,o);if(!(w===void 0?m===v||i(m,v,n,r,o):w)){g=!1;break}_||(_=h=="constructor")}if(g&&!_){var b=e.constructor,S=t.constructor;b!=S&&"constructor"in e&&"constructor"in t&&!(typeof b=="function"&&b instanceof b&&typeof S=="function"&&S instanceof S)&&(g=!1)}return o.delete(e),o.delete(t),g}var w5=1,Wm="[object Arguments]",Um="[object Array]",El="[object Object]",x5=Object.prototype,Vm=x5.hasOwnProperty;function b5(e,t,n,r,i,o){var a=Ct(e),l=Ct(t),s=a?Um:Hm(e),u=l?Um:Hm(t);s=s==Wm?El:s,u=u==Wm?El:u;var c=s==El,f=u==El,h=s==u;if(h&&ks(e)){if(!ks(t))return!1;a=!0,c=!1}if(h&&!c)return o||(o=new _n),a||Nd(e)?F_(e,t,n,r,i,o):v5(e,t,s,n,r,i,o);if(!(n&w5)){var d=c&&Vm.call(e,"__wrapped__"),p=f&&Vm.call(t,"__wrapped__");if(d||p){var g=d?e.value():e,_=p?t.value():t;return o||(o=new _n),i(g,_,n,r,o)}}return h?(o||(o=new _n),_5(e,t,n,r,i,o)):!1}function Ud(e,t,n,r,i){return e===t?!0:e==null||t==null||!Cr(e)&&!Cr(t)?e!==e&&t!==t:b5(e,t,n,r,Ud,i)}var S5=1,T5=2;function E5(e,t,n,r){var i=n.length,o=i,a=!r;if(e==null)return!o;for(e=Object(e);i--;){var l=n[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=n[i];var s=l[0],u=e[s],c=l[1];if(a&&l[2]){if(u===void 0&&!(s in e))return!1}else{var f=new _n;if(r)var h=r(u,c,s,e,t,f);if(!(h===void 0?Ud(c,u,S5|T5,r,f):h))return!1}}return!0}function N_(e){return e===e&&!sn(e)}function C5(e){for(var t=Dd(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,N_(i)]}return t}function D_(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function M5(e){var t=C5(e);return t.length==1&&t[0][2]?D_(t[0][0],t[0][1]):function(n){return n===e||E5(n,e,t)}}function O5(e,t){return e!=null&&t in Object(e)}function P5(e,t,n){t=L_(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=Mu(t[r]);if(!(o=e!=null&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&jd(i)&&Rd(a,i)&&(Ct(e)||$s(e)))}function $5(e,t){return e!=null&&P5(e,t,O5)}var k5=1,z5=2;function A5(e,t){return Hd(e)&&N_(t)?D_(Mu(e),t):function(n){var r=cP(n,e);return r===void 0&&r===t?$5(n,e):Ud(t,r,k5|z5)}}function L5(e){return function(t){return t==null?void 0:t[e]}}function R5(e){return function(t){return Wd(t,e)}}function I5(e){return Hd(e)?L5(Mu(e)):R5(e)}function j5(e){return typeof e=="function"?e:e==null?Tu:typeof e=="object"?Ct(e)?A5(e[0],e[1]):M5(e):I5(e)}function F5(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),l=a.length;l--;){var s=a[e?l:++i];if(n(o[s],s,o)===!1)break}return t}}var N5=F5();const H_=N5;function D5(e,t){return e&&H_(e,t,Dd)}function H5(e,t){return function(n,r){if(n==null)return n;if(!wo(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&r(a[o],o,a)!==!1;);return n}}var B5=H5(D5);const W5=B5;var U5=function(){return un.Date.now()};const kc=U5;var V5="Expected a function",Y5=Math.max,X5=Math.min;function G5(e,t,n){var r,i,o,a,l,s,u=0,c=!1,f=!1,h=!0;if(typeof e!="function")throw new TypeError(V5);t=bm(t)||0,sn(n)&&(c=!!n.leading,f="maxWait"in n,o=f?Y5(bm(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function d(E){var $=r,P=i;return r=i=void 0,u=E,a=e.apply(P,$),a}function p(E){return u=E,l=setTimeout(m,t),c?d(E):a}function g(E){var $=E-s,P=E-u,F=t-$;return f?X5(F,o-P):F}function _(E){var $=E-s,P=E-u;return s===void 0||$>=t||$<0||f&&P>=o}function m(){var E=kc();if(_(E))return v(E);l=setTimeout(m,g(E))}function v(E){return l=void 0,h&&r?d(E):(r=i=void 0,a)}function w(){l!==void 0&&clearTimeout(l),u=0,r=s=i=l=void 0}function b(){return l===void 0?a:v(kc())}function S(){var E=kc(),$=_(E);if(r=arguments,i=this,s=E,$){if(l===void 0)return p(s);if(f)return clearTimeout(l),l=setTimeout(m,t),d(s)}return l===void 0&&(l=setTimeout(m,t)),a}return S.cancel=w,S.flush=b,S}function hh(e,t,n){(n!==void 0&&!Ha(e[t],n)||n===void 0&&!(t in e))&&Id(e,t,n)}function q5(e){return Cr(e)&&wo(e)}function dh(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function K5(e){return CM(e,A_(e))}function Q5(e,t,n,r,i,o,a){var l=dh(e,n),s=dh(t,n),u=a.get(s);if(u){hh(e,n,u);return}var c=o?o(l,s,n+"",e,t,a):void 0,f=c===void 0;if(f){var h=Ct(s),d=!h&&ks(s),p=!h&&!d&&Nd(s);c=s,h||d||p?Ct(l)?c=l:q5(l)?c=cM(l):d?(f=!1,c=CP(s,!0)):p?(f=!1,c=VP(s,!0)):c=[]:gP(s)||$s(s)?(c=l,$s(l)?c=K5(l):(!sn(l)||Ld(l))&&(c=YP(s))):f=!1}f&&(a.set(s,c),i(c,s,r,o,a),a.delete(s)),hh(e,n,c)}function B_(e,t,n,r,i){e!==t&&H_(t,function(o,a){if(i||(i=new _n),sn(o))Q5(e,t,a,n,B_,r,i);else{var l=r?r(dh(e,a),o,a+"",e,t,i):void 0;l===void 0&&(l=o),hh(e,a,l)}},A_)}function Z5(e,t){var n=-1,r=wo(e)?Array(e.length):[];return W5(e,function(i,o,a){r[++n]=t(i,o,a)}),r}var J5=kM(function(e,t,n){B_(e,t,n)});const e4=J5;function t4(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function n4(e,t){if(e!==t){var n=e!==void 0,r=e===null,i=e===e,o=fo(e),a=t!==void 0,l=t===null,s=t===t,u=fo(t);if(!l&&!u&&!o&&e>t||o&&a&&s&&!l&&!u||r&&a&&s||!n&&s||!i)return 1;if(!r&&!o&&!u&&e<t||u&&n&&i&&!r&&!o||l&&n&&i||!a&&i||!s)return-1}return 0}function r4(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,l=n.length;++r<a;){var s=n4(i[r],o[r]);if(s){if(r>=l)return s;var u=n[r];return s*(u=="desc"?-1:1)}}return e.index-t.index}function i4(e,t,n){t.length?t=Bl(t,function(o){return Ct(o)?function(a){return Wd(a,o.length===1?o[0]:o)}:o}):t=[Tu];var r=-1;t=Bl(t,P_(j5));var i=Z5(e,function(o,a,l){var s=Bl(t,function(u){return u(o)});return{criteria:s,index:++r,value:o}});return t4(i,function(o,a){return r4(o,a,n)})}function o4(e,t,n,r){return e==null?[]:(Ct(t)||(t=t==null?[]:[t]),n=r?void 0:n,Ct(n)||(n=n==null?[]:[n]),i4(e,t,n))}var Ym=typeof document=="object",ph=globalThis&&globalThis.__assign||function(){return ph=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ph.apply(this,arguments)},a4=C.createContext(0),l4=C.createContext(0),s4=C.createContext(null),u4=function(e){var t=C.useState(0),n=t[0],r=t[1],i=C.useState(Ym?[window.innerWidth,window.innerHeight]:[0,0]),o=i[0],a=i[1],l=C.useRef(o);l.current=o;var s=C.useMemo(function(){return G5(function(){(window.innerWidth!==l.current[0]||window.innerHeight!==l.current[1])&&a([window.innerWidth,window.innerHeight])},200)},[]),u=Boolean(n);C.useEffect(function(){if(Ym){if(u)return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)};window.removeEventListener("resize",s)}},[s,u]);var c=C.useCallback(function(){return function(){return r(function(f){return f+1}),function(){return r(function(f){return f-1})}}},[]);return C.createElement(s4.Provider,{value:c},C.createElement(l4.Provider,{value:o[0]},C.createElement(a4.Provider,ph({},e,{value:o[1]}))))},c4=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},f4=Qg(Xm||(Xm=c4([`
  html {
    --layout-right-padding: 24px;
    --layout-left-padding: 24px;
    --expansion-panel-horizontal-padding: 24px;
  }
`],[`
  html {
    --layout-right-padding: 24px;
    --layout-left-padding: 24px;
    --expansion-panel-horizontal-padding: 24px;
  }
`]))),Xm,h4=function(e){var t=e.children;return C.createElement(u4,null,C.createElement(c3,null),t,C.createElement(O3,null),C.createElement(_C,null),C.createElement(f4,null))},W_=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},d4=Q.div(Gm||(Gm=W_([`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`],[`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`]))),p4=Q.img(qm||(qm=W_([`
  --loader-size: 48px;
  &[data-size='large'] {
    --loader-size: 72px;
  }
  &[data-size='small'] {
    --loader-size: 32px;
  }
  height: var(--loader-size);
  width: var(--loader-size);
`],[`
  --loader-size: 48px;
  &[data-size='large'] {
    --loader-size: 72px;
  }
  &[data-size='small'] {
    --loader-size: 32px;
  }
  height: var(--loader-size);
  width: var(--loader-size);
`]))),Gm,qm,vh=globalThis&&globalThis.__assign||function(){return vh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},vh.apply(this,arguments)},v4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},m4=C.forwardRef(function(e,t){var n=e.size,r=v4(e,["size"]);return C.createElement(d4,vh({},r,{ref:t}),C.createElement(p4,{"data-size":n,src:"https://cdn.habx.com/image/upload/illustrations/gif/loader-geometric-high.gif",alt:"loading"}))}),y4=globalThis&&globalThis.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},g4=Q(zd)(Km||(Km=y4([`
  border-radius: 6px;
  position: relative;
  transition-property: box-shadow, transform;
  transition-duration: `,`ms;
  transition-timing-function: `,`;
  overflow: hidden;
  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &:not([data-flat='true']):not([data-outline='true']) {
    box-shadow: `,`;
  }

  &[data-outline='true'] {
    border: 1px solid `,`;
  }

  &[data-animated='true'] {
    &:hover {
      cursor: pointer;

      &:not([data-flat='true']):not([data-outline='true']) {
        box-shadow: `,`;
      }
    }
  }

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }
`],[`
  border-radius: 6px;
  position: relative;
  transition-property: box-shadow, transform;
  transition-duration: `,`ms;
  transition-timing-function: `,`;
  overflow: hidden;
  --layout-left-padding: 0;
  --layout-right-padding: 0;
  --layout-top-padding: 0;
  --layout-bottom-padding: 0;

  &:not([data-flat='true']):not([data-outline='true']) {
    box-shadow: `,`;
  }

  &[data-outline='true'] {
    border: 1px solid `,`;
  }

  &[data-animated='true'] {
    &:hover {
      cursor: pointer;

      &:not([data-flat='true']):not([data-outline='true']) {
        box-shadow: `,`;
      }
    }
  }

  &[data-spacing='regular'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;
    --layout-top-padding: 24px;
    --layout-bottom-padding: 24px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='regular-horizontal-only'] {
    --layout-left-padding: 36px;
    --layout-right-padding: 36px;

    @media (`,`) {
      --layout-left-padding: 18px;
      --layout-right-padding: 18px;
    }
  }

  &[data-spacing='narrow'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
    --layout-top-padding: 12px;
    --layout-bottom-padding: 12px;
  }

  &[data-spacing='narrow-horizontal-only'] {
    --layout-left-padding: 18px;
    --layout-right-padding: 18px;
  }
`])),wn.m,ja,D.shadow("regular"),D.neutralColor(300),D.shadow("regular",{hover:!0}),be.below.smallTablet,be.below.smallTablet),Km,mh=globalThis&&globalThis.__assign||function(){return mh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},mh.apply(this,arguments)},_4=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},w4=C.forwardRef(function(e,t){var n=Da(),r=e.animated,i=e.flat,o=e.outline,a=e.children,l=e.spacing,s=e.backgroundColor,u=s===void 0?n:s,c=_4(e,["animated","flat","outline","children","spacing","backgroundColor"]);return C.createElement(g4,mh({ref:t},c,{backgroundColor:u,"data-animated":r,"data-flat":i,"data-outline":o,"data-spacing":l}),a)});Q(yo)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;Q.div`
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;const x4=Q.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: stretch;
  overflow: hidden;
`,b4=({children:e})=>He(h4,{children:He(x4,{children:He(C.Suspense,{fallback:null,children:e})})});function to(){}to.prototype.addEventListener=function(e,t){var n=this.__events=this.__events||{},r=n[e]=n[e]||[];r.indexOf(t)<0&&r.push(t)};to.prototype.removeEventListener=function(e,t){var n=this.__events=this.__events||{},r=n[e];if(r){var i=r.indexOf(t);i>=0&&r.splice(i,1)}};to.prototype.emit=function(e,t){var n=this.__events=this.__events||{},r=n[e],i=Array.prototype.slice.call(arguments,1);if(r)for(var o=0;o<r.length;o++){var a=r[o];a.apply(this,i)}};function S4(e){for(var t in to.prototype)to.prototype.hasOwnProperty(t)&&(e.prototype[t]=to.prototype[t])}var ze=S4;function T4(){return typeof performance<"u"&&performance.now?function(){return performance.now()}:function(){return Date.now()}}var yi=T4(),U_=yi;function E4(e,t){this.fn=e,this.cb=t,this.cfn=null}function Gn(e){this._queue=[],this._delay=e&&e.delay||0,this._paused=e&&!!e.paused||!1,this._currentTask=null,this._lastFinished=null}Gn.prototype.length=function(){return this._queue.length};Gn.prototype.push=function(e,t){var n=new E4(e,t),r=this._cancel.bind(this,n);return this._queue.push(n),this._next(),r};Gn.prototype.pause=function(){this._paused||(this._paused=!0)};Gn.prototype.resume=function(){this._paused&&(this._paused=!1,this._next())};Gn.prototype._start=function(e){if(this._currentTask)throw new Error("WorkQueue: called start while running task");this._currentTask=e;var t=this._finish.bind(this,e);if(e.cfn=e.fn(t),typeof e.cfn!="function")throw new Error("WorkQueue: function is not cancellable")};Gn.prototype._finish=function(e){var t=Array.prototype.slice.call(arguments,1);if(this._currentTask!==e)throw new Error("WorkQueue: called finish on wrong task");e.cb.apply(null,t),this._currentTask=null,this._lastFinished=U_(),this._next()};Gn.prototype._cancel=function(e){var t=Array.prototype.slice.call(arguments,1);if(this._currentTask===e)e.cfn.apply(null,t);else{var n=this._queue.indexOf(e);n>=0&&(this._queue.splice(n,1),e.cb.apply(null,t))}};Gn.prototype._next=function(){if(!this._paused&&this._queue.length&&!this._currentTask){if(this._lastFinished!=null){var e=U_()-this._lastFinished,t=this._delay-e;if(t>0){setTimeout(this._next.bind(this),t);return}}var n=this._queue.shift();this._start(n)}};var V_=Gn;function C4(e,t,n,r){r=r||{};var i;n!=null&&n.absoluteWidth!=null?i=n.absoluteWidth/e:n!=null&&n.relativeWidth!=null?i=n.relativeWidth:i=1;var o;n&&n.absoluteHeight!=null?o=n.absoluteHeight/t:n!=null&&n.relativeHeight!=null?o=n.relativeHeight:o=1;var a;n!=null&&n.absoluteX!=null?a=n.absoluteX/e:n!=null&&n.relativeX!=null?a=n.relativeX:a=0;var l;return n!=null&&n.absoluteY!=null?l=n.absoluteY/t:n!=null&&n.relativeY!=null?l=n.relativeY:l=0,r.x=a,r.y=l,r.width=i,r.height=o,r}var Y_=C4;function M4(e){return function(n){var r,i;try{i=e()}catch(o){r=o}finally{r?n(r):n(null,i)}}}var X_=M4;function O4(e){var t=!1,n;return function(){return t||(t=!0,n=e.apply(null,arguments)),n}}var Vd=O4,P4=Vd;function $4(e){return function(){if(!arguments.length)throw new Error("cancelized: expected at least one argument");var n=Array.prototype.slice.call(arguments,0),r=n[n.length-1]=P4(n[n.length-1]);function i(){r.apply(null,arguments)}return e.apply(null,n),i}}var G_=$4;function k4(e){for(var t in e)e.hasOwnProperty(t)&&(e[t]=void 0)}var Ee=k4;function Yd(){this._renderers={}}Yd.prototype.set=function(e,t,n){this._renderers[e]||(this._renderers[e]={}),this._renderers[e][t]=n};Yd.prototype.get=function(e,t){var n=this._renderers[e]&&this._renderers[e][t];return n||null};var z4=Yd,A4=ze,L4=V_,R4=Y_,I4=X_,j4=G_,F4=Ee,N4=z4;function D4(e,t){return e.cmp(t)}function H4(e,t){return-e.cmp(t)}function we(e){this._progressive=!!(e&&e.progressive),this._layers=[],this._renderers=[],this._tilesToLoad=[],this._tilesToRender=[],this._tmpVisible=[],this._tmpChildren=[],this._width=0,this._height=0,this._tmpRect={},this._tmpSize={},this._createTextureWorkQueue=new L4,this._emitRenderInvalid=this._emitRenderInvalid.bind(this),this._rendererRegistry=new N4}A4(we);we.prototype.destroy=function(){this.removeAllLayers(),F4(this)};we.prototype.registerRenderer=function(e,t,n){return this._rendererRegistry.set(e,t,n)};we.prototype.domElement=function(){throw new Error("Stage implementation must override domElement")};we.prototype.width=function(){return this._width};we.prototype.height=function(){return this._height};we.prototype.size=function(e){return e=e||{},e.width=this._width,e.height=this._height,e};we.prototype.setSize=function(e){this._width=e.width,this._height=e.height,this.setSizeForType(),this.emit("resize"),this._emitRenderInvalid()};we.prototype.setSizeForType=function(e){throw new Error("Stage implementation must override setSizeForType")};we.prototype.loadImage=function(){throw new Error("Stage implementation must override loadImage")};we.prototype._emitRenderInvalid=function(){this.emit("renderInvalid")};we.prototype.validateLayer=function(e){throw new Error("Stage implementation must override validateLayer")};we.prototype.listLayers=function(){return[].concat(this._layers)};we.prototype.hasLayer=function(e){return this._layers.indexOf(e)>=0};we.prototype.addLayer=function(e,t){if(this._layers.indexOf(e)>=0)throw new Error("Layer already in stage");if(t==null&&(t=this._layers.length),t<0||t>this._layers.length)throw new Error("Invalid layer position");this.validateLayer(e);var n=e.geometry().type,r=e.view().type,i=this._rendererRegistry.get(n,r);if(!i)throw new Error("No "+this.type+" renderer avaiable for "+n+" geometry and "+r+" view");var o=this.createRenderer(i);this._layers.splice(t,0,e),this._renderers.splice(t,0,o),e.addEventListener("viewChange",this._emitRenderInvalid),e.addEventListener("effectsChange",this._emitRenderInvalid),e.addEventListener("fixedLevelChange",this._emitRenderInvalid),e.addEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()};we.prototype.moveLayer=function(e,t){var n=this._layers.indexOf(e);if(n<0)throw new Error("No such layer in stage");if(t<0||t>=this._layers.length)throw new Error("Invalid layer position");e=this._layers.splice(n,1)[0];var r=this._renderers.splice(n,1)[0];this._layers.splice(t,0,e),this._renderers.splice(t,0,r),this._emitRenderInvalid()};we.prototype.removeLayer=function(e){var t=this._layers.indexOf(e);if(t<0)throw new Error("No such layer in stage");var n=this._layers.splice(t,1)[0],r=this._renderers.splice(t,1)[0];this.destroyRenderer(r),n.removeEventListener("viewChange",this._emitRenderInvalid),n.removeEventListener("effectsChange",this._emitRenderInvalid),n.removeEventListener("fixedLevelChange",this._emitRenderInvalid),n.removeEventListener("textureStoreChange",this._emitRenderInvalid),this._emitRenderInvalid()};we.prototype.removeAllLayers=function(){for(;this._layers.length>0;)this.removeLayer(this._layers[0])};we.prototype.startFrame=function(){throw new Error("Stage implementation must override startFrame")};we.prototype.endFrame=function(){throw new Error("Stage implementation must override endFrame")};we.prototype.render=function(){var e,t,n=this._tilesToLoad,r=this._tilesToRender,i=!0,o,a=this._width,l=this._height,s=this._tmpRect,u=this._tmpSize;if(!(a<=0||l<=0)){for(this.startFrame(),e=0;e<this._layers.length;e++)this._layers[e].textureStore().startFrame();for(e=0;e<this._layers.length;e++){var c=this._layers[e],f=c.effects(),h=c.view(),d=c.textureStore(),p=this._renderers[e],g=this._layers.length-e,_,m;if(R4(a,l,f&&f.rect,s),!(s.width<=0||s.height<=0)){for(u.width=s.width*this._width,u.height=s.height*this._height,h.setSize(u),p.startLayer(c,s),o=this._collectTiles(c,d),t=0;t<n.length;t++)_=n[t],d.markTile(_);for(t=0;t<r.length;t++)_=r[t],m=d.texture(_),p.renderTile(_,m,c,g);c.emit("renderComplete",o),o||(i=!1),p.endLayer(c,s)}}for(e=0;e<this._layers.length;e++)this._layers[e].textureStore().endFrame();this.endFrame(),this.emit("renderComplete",i)}};we.prototype._collectTiles=function(e,t){var n=this._tilesToLoad,r=this._tilesToRender,i=this._tmpVisible;n.length=0,r.length=0,i.length=0,e.visibleTiles(i);for(var o=!0,a=0;a<i.length;a++){var l=i[a],s;this._collectTileToLoad(l),t.texture(l)?(s=!1,this._collectTileToRender(l)):(s=this._collectChildren(l,t),o=!1),this._collectParents(l,t,s)}return n.sort(D4),r.sort(H4),o};we.prototype._collectChildren=function(e,t){var n=this._tmpChildren,r=!0;do{if(n.length=0,!e.children(n))break;r=!1;for(var i=0;i<n.length;i++)e=n[i],t.texture(e)?(this._collectTileToLoad(e),this._collectTileToRender(e)):r=!0}while(r&&n.length===1);return r};we.prototype._collectParents=function(e,t,n){for(var r=this._progressive;(r||n)&&(e=e.parent())!=null;){if(n){if(t.texture(e))this._collectTileToRender(e),n=!1;else if(!this._progressive)continue}this._collectTileToLoad(e)||(r=!1)}return n};we.prototype._collectTileToLoad=function(e){return this._collectTileIntoList(e,this._tilesToLoad)};we.prototype._collectTileToRender=function(e){return this._collectTileIntoList(e,this._tilesToRender)};we.prototype._collectTileIntoList=function(e,t){for(var n=!1,r=0;r<t.length;r++)if(e.equals(t[r])){n=!0;break}return n||t.push(e),!n};we.prototype.createTexture=function(e,t,n){var r=this;function i(){return new r.TextureClass(r,e,t)}var o=j4(I4(i));return this._createTextureWorkQueue.push(o,function(a,l){n(a,e,t,l)})};var B4=we,W4=function(){return typeof window<"u"?window:typeof self<"u"?self:typeof la<"u"?la:null}(),q_=W4,Qm=q_,U4=ze,V4=Ee,zc={HTMLImageElement:["naturalWidth","naturalHeight"],HTMLCanvasElement:["width","height"],ImageBitmap:["width","height"]};function zr(e){var t=!1;for(var n in zc)if(Qm[n]&&e instanceof Qm[n]){t=!0,this._widthProp=zc[n][0],this._heightProp=zc[n][1];break}if(!t)throw new Error("Unsupported pixel source");this._element=e}U4(zr);zr.prototype.destroy=function(){V4(this)};zr.prototype.element=function(){return this._element};zr.prototype.width=function(){return this._element[this._widthProp]};zr.prototype.height=function(){return this._element[this._heightProp]};zr.prototype.timestamp=function(){return 0};zr.prototype.isDynamic=function(){return!1};var Xd=zr;function Y4(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}var bn=Y4,X4=bn;function K_(e){this.constructor.super_.apply(this,arguments),this.message=e}X4(K_,Error);var Q_=K_,Ma={},G4={get exports(){return Ma},set exports(e){Ma=e}};/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */(function(e){(function(t,n,r){e.exports?e.exports=r():t[n]=r()})(la,"bowser",function(){var t=!0;function n(u){function c(q){var G=u.match(q);return G&&G.length>1&&G[1]||""}function f(q){var G=u.match(q);return G&&G.length>1&&G[2]||""}var h=c(/(ipod|iphone|ipad)/i).toLowerCase(),d=/like android/i.test(u),p=!d&&/android/i.test(u),g=/nexus\s*[0-6]\s*/i.test(u),_=!g&&/nexus\s*[0-9]+/i.test(u),m=/CrOS/.test(u),v=/silk/i.test(u),w=/sailfish/i.test(u),b=/tizen/i.test(u),S=/(web|hpw)(o|0)s/i.test(u),E=/windows phone/i.test(u),$=!E&&/windows/i.test(u),P=!h&&!v&&/macintosh/i.test(u),F=!p&&!w&&!b&&!S&&/linux/i.test(u),R=f(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),W=c(/version\/(\d+(\.\d+)?)/i),Z=/tablet/i.test(u)&&!/tablet pc/i.test(u),ne=!Z&&/[^-]mobi/i.test(u),V=/xbox/i.test(u),M;/opera/i.test(u)?M={name:"Opera",opera:t,version:W||c(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(u)?M={name:"Opera",opera:t,version:c(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||W}:/SamsungBrowser/i.test(u)?M={name:"Samsung Internet for Android",samsungBrowser:t,version:W||c(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/Whale/i.test(u)?M={name:"NAVER Whale browser",whale:t,version:c(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)}:/MZBrowser/i.test(u)?M={name:"MZ Browser",mzbrowser:t,version:c(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/coast/i.test(u)?M={name:"Opera Coast",coast:t,version:W||c(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/focus/i.test(u)?M={name:"Focus",focus:t,version:c(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)}:/yabrowser/i.test(u)?M={name:"Yandex Browser",yandexbrowser:t,version:W||c(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(u)?M={name:"UC Browser",ucbrowser:t,version:c(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(u)?M={name:"Maxthon",maxthon:t,version:c(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(u)?M={name:"Epiphany",epiphany:t,version:c(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(u)?M={name:"Puffin",puffin:t,version:c(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(u)?M={name:"Sleipnir",sleipnir:t,version:c(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(u)?M={name:"K-Meleon",kMeleon:t,version:c(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:E?(M={name:"Windows Phone",osname:"Windows Phone",windowsphone:t},R?(M.msedge=t,M.version=R):(M.msie=t,M.version=c(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(u)?M={name:"Internet Explorer",msie:t,version:c(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:m?M={name:"Chrome",osname:"Chrome OS",chromeos:t,chromeBook:t,chrome:t,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(u)?M={name:"Microsoft Edge",msedge:t,version:R}:/vivaldi/i.test(u)?M={name:"Vivaldi",vivaldi:t,version:c(/vivaldi\/(\d+(\.\d+)?)/i)||W}:w?M={name:"Sailfish",osname:"Sailfish OS",sailfish:t,version:c(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(u)?M={name:"SeaMonkey",seamonkey:t,version:c(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(u)?(M={name:"Firefox",firefox:t,version:c(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(u)&&(M.firefoxos=t,M.osname="Firefox OS")):v?M={name:"Amazon Silk",silk:t,version:c(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(u)?M={name:"PhantomJS",phantom:t,version:c(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(u)?M={name:"SlimerJS",slimer:t,version:c(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(u)||/rim\stablet/i.test(u)?M={name:"BlackBerry",osname:"BlackBerry OS",blackberry:t,version:W||c(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:S?(M={name:"WebOS",osname:"WebOS",webos:t,version:W||c(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(u)&&(M.touchpad=t)):/bada/i.test(u)?M={name:"Bada",osname:"Bada",bada:t,version:c(/dolfin\/(\d+(\.\d+)?)/i)}:b?M={name:"Tizen",osname:"Tizen",tizen:t,version:c(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||W}:/qupzilla/i.test(u)?M={name:"QupZilla",qupzilla:t,version:c(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||W}:/chromium/i.test(u)?M={name:"Chromium",chromium:t,version:c(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||W}:/chrome|crios|crmo/i.test(u)?M={name:"Chrome",chrome:t,version:c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:p?M={name:"Android",version:W}:/safari|applewebkit/i.test(u)?(M={name:"Safari",safari:t},W&&(M.version=W)):h?(M={name:h=="iphone"?"iPhone":h=="ipad"?"iPad":"iPod"},W&&(M.version=W)):/googlebot/i.test(u)?M={name:"Googlebot",googlebot:t,version:c(/googlebot\/(\d+(\.\d+))/i)||W}:M={name:c(/^(.*)\/(.*) /),version:f(/^(.*)\/(.*) /)},!M.msedge&&/(apple)?webkit/i.test(u)?(/(apple)?webkit\/537\.36/i.test(u)?(M.name=M.name||"Blink",M.blink=t):(M.name=M.name||"Webkit",M.webkit=t),!M.version&&W&&(M.version=W)):!M.opera&&/gecko\//i.test(u)&&(M.name=M.name||"Gecko",M.gecko=t,M.version=M.version||c(/gecko\/(\d+(\.\d+)?)/i)),!M.windowsphone&&(p||M.silk)?(M.android=t,M.osname="Android"):!M.windowsphone&&h?(M[h]=t,M.ios=t,M.osname="iOS"):P?(M.mac=t,M.osname="macOS"):V?(M.xbox=t,M.osname="Xbox"):$?(M.windows=t,M.osname="Windows"):F&&(M.linux=t,M.osname="Linux");function Ve(q){switch(q){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}var ie="";M.windows?ie=Ve(c(/Windows ((NT|XP)( \d\d?.\d)?)/i)):M.windowsphone?ie=c(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):M.mac?(ie=c(/Mac OS X (\d+([_\.\s]\d+)*)/i),ie=ie.replace(/[_\s]/g,".")):h?(ie=c(/os (\d+([_\s]\d+)*) like mac os x/i),ie=ie.replace(/[_\s]/g,".")):p?ie=c(/android[ \/-](\d+(\.\d+)*)/i):M.webos?ie=c(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):M.blackberry?ie=c(/rim\stablet\sos\s(\d+(\.\d+)*)/i):M.bada?ie=c(/bada\/(\d+(\.\d+)*)/i):M.tizen&&(ie=c(/tizen[\/\s](\d+(\.\d+)*)/i)),ie&&(M.osversion=ie);var L=!M.windows&&ie.split(".")[0];return Z||_||h=="ipad"||p&&(L==3||L>=4&&!ne)||M.silk?M.tablet=t:(ne||h=="iphone"||h=="ipod"||p||g||M.blackberry||M.webos||M.bada)&&(M.mobile=t),M.msedge||M.msie&&M.version>=10||M.yandexbrowser&&M.version>=15||M.vivaldi&&M.version>=1||M.chrome&&M.version>=20||M.samsungBrowser&&M.version>=4||M.whale&&a([M.version,"1.0"])===1||M.mzbrowser&&a([M.version,"6.0"])===1||M.focus&&a([M.version,"1.0"])===1||M.firefox&&M.version>=20||M.safari&&M.version>=6||M.opera&&M.version>=10||M.ios&&M.osversion&&M.osversion.split(".")[0]>=6||M.blackberry&&M.version>=10.1||M.chromium&&M.version>=20?M.a=t:M.msie&&M.version<10||M.chrome&&M.version<20||M.firefox&&M.version<20||M.safari&&M.version<6||M.opera&&M.version<10||M.ios&&M.osversion&&M.osversion.split(".")[0]<6||M.chromium&&M.version<20?M.c=t:M.x=t,M}var r=n(typeof navigator<"u"&&navigator.userAgent||"");r.test=function(u){for(var c=0;c<u.length;++c){var f=u[c];if(typeof f=="string"&&f in r)return!0}return!1};function i(u){return u.split(".").length}function o(u,c){var f=[],h;if(Array.prototype.map)return Array.prototype.map.call(u,c);for(h=0;h<u.length;h++)f.push(c(u[h]));return f}function a(u){for(var c=Math.max(i(u[0]),i(u[1])),f=o(u,function(h){var d=c-i(h);return h=h+new Array(d+1).join(".0"),o(h.split("."),function(p){return new Array(20-p.length).join("0")+p}).reverse()});--c>=0;){if(f[0][c]>f[1][c])return 1;if(f[0][c]===f[1][c]){if(c===0)return 0}else return-1}}function l(u,c,f){var h=r;typeof c=="string"&&(f=c,c=void 0),c===void 0&&(c=!1),f&&(h=n(f));var d=""+h.version;for(var p in u)if(u.hasOwnProperty(p)&&h[p]){if(typeof u[p]!="string")throw new Error("Browser version in the minVersion map should be a string: "+p+": "+String(u));return a([d,u[p]])<0}return c}function s(u,c,f){return!l(u,c,f)}return r.isUnsupportedBrowser=l,r.compareVersions=a,r.check=s,r._detect=n,r.detect=n,r})})(G4);var Ac=Xd,q4=Q_,K4=Ma,Z_=q_,Q4=Vd,Z4=!!Z_.createImageBitmap&&!K4.firefox,J4={imageOrientation:"flipY",premultiplyAlpha:"premultiply"};function Ou(e){this._stage=e}Ou.prototype.loadImage=function(e,t,n){var r=this,i=new Image;i.crossOrigin="anonymous";var o=t&&t.x||0,a=t&&t.y||0,l=t&&t.width||1,s=t&&t.height||1;n=Q4(n),i.onload=function(){r._handleLoad(i,o,a,l,s,n)},i.onerror=function(){r._handleError(e,n)},i.src=e;function u(){i.onload=i.onerror=null,i.src="",n.apply(null,arguments)}return u};Ou.prototype._handleLoad=function(e,t,n,r,i,o){if(t===0&&n===0&&r===1&&i===1){o(null,new Ac(e));return}if(t*=e.naturalWidth,n*=e.naturalHeight,r*=e.naturalWidth,i*=e.naturalHeight,Z4)Z_.createImageBitmap(e,t,n,r,i,J4).then(function(s){o(null,new Ac(s))});else{var a=document.createElement("canvas");a.width=r,a.height=i;var l=a.getContext("2d");l.drawImage(e,t,n,r,i,0,0,r,i),o(null,new Ac(a))}};Ou.prototype._handleError=function(e,t){t(new q4("Network error: "+e))};var e$=Ou,t$=1;function n$(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e&&e.deviceXDPI&&e.logicalXDPI)return e.deviceXDPI/e.logicalXDPI;if(e&&e.systemXDPI&&e.logicalXDPI)return e.systemXDPI/e.logicalXDPI}return t$}var Pu=n$;function r$(e){return(e&e-1)==0}var i$=r$;function Gd(e){for(var t=document.documentElement.style,n=["Moz","Webkit","Khtml","O","ms"],r=0;r<n.length;r++){var i=n[r],o=e[0].toUpperCase()+e.slice(1),a=i+o;if(a in t)return a}return e}function o$(e){var t=Gd(e);return function(r){return r.style[t]}}function qd(e){var t=Gd(e);return function(r,i){return r.style[t]=i}}var J_=qd("transform"),ew=qd("transformOrigin");function a$(e){J_(e,"translateZ(0)")}function l$(e){ew(e,"0 0 0")}function s$(e){e.style.position="absolute"}function u$(e,t,n){e.style.left=t+"px",e.style.top=n+"px"}function c$(e,t,n){e.style.width=t+"px",e.style.height=n+"px"}function f$(e){e.style.width=e.style.height=0}function h$(e){e.style.width=e.style.height="100%"}function d$(e){e.style.overflow="hidden"}function p$(e){e.style.overflow="visible"}function v$(e){e.style.pointerEvents="none"}var Ot={prefixProperty:Gd,getWithVendorPrefix:o$,setWithVendorPrefix:qd,setTransform:J_,setTransformOrigin:ew,setNullTransform:a$,setNullTransformOrigin:l$,setAbsolute:s$,setPixelPosition:u$,setPixelSize:c$,setNullSize:f$,setFullSize:h$,setOverflowHidden:d$,setOverflowVisible:p$,setNoPointerEvents:v$},m$=B4,y$=e$,g$=Ma,_$=bn,w$=Pu,Zm=i$,x$=Ot.setAbsolute,b$=Ot.setFullSize,S$=Ee,T$={videoUseTexImage2D:g$.chrome};function E$(e,t){var n={alpha:!0,premultipliedAlpha:!0,antialias:!!(t&&t.antialias),preserveDrawingBuffer:!!(t&&t.preserveDrawingBuffer)},r=e.getContext&&(e.getContext("webgl",n)||e.getContext("experimental-webgl",n));if(!r)throw new Error("Could not get WebGL context");return t.wrapContext&&(r=t.wrapContext(r)),r}function tt(e){e=e||{};var t=this;this.constructor.super_.call(this,e),this._generateMipmaps=e.generateMipmaps!=null?e.generateMipmaps:!1,this._loader=new y$(this),this._domElement=document.createElement("canvas"),x$(this._domElement),b$(this._domElement),this._gl=E$(this._domElement,e),this._handleContextLoss=function(){t.emit("webglcontextlost"),t._gl=null},this._domElement.addEventListener("webglcontextlost",this._handleContextLoss),this._rendererInstances=[]}_$(tt,m$);tt.prototype.destroy=function(){this._domElement.removeEventListener("webglcontextlost",this._handleContextLoss),this.constructor.super_.prototype.destroy.call(this)};tt.prototype.domElement=function(){return this._domElement};tt.prototype.webGlContext=function(){return this._gl};tt.prototype.setSizeForType=function(){var e=w$();this._domElement.width=e*this._width,this._domElement.height=e*this._height};tt.prototype.loadImage=function(e,t,n){return this._loader.loadImage(e,t,n)};tt.prototype.maxTextureSize=function(){return this._gl.getParameter(this._gl.MAX_TEXTURE_SIZE)};tt.prototype.validateLayer=function(e){var t=e.geometry().maxTileSize(),n=this.maxTextureSize();if(t>n)throw new Error("Layer has level with tile size larger than maximum texture size ("+t+" vs. "+n+")")};tt.prototype.createRenderer=function(e){for(var t=this._rendererInstances,n=0;n<t.length;n++)if(t[n]instanceof e)return t[n];var r=new e(this._gl);return t.push(r),r};tt.prototype.destroyRenderer=function(e){var t=this._rendererInstances;if(this._renderers.indexOf(e)<0){e.destroy();var n=t.indexOf(e);n>=0&&t.splice(n,1)}};tt.prototype.startFrame=function(){var e=this._gl;if(!e)throw new Error("Bad WebGL context - maybe context was lost?");e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.enable(e.DEPTH_TEST),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA)};tt.prototype.endFrame=function(){};tt.prototype.takeSnapshot=function(e){(typeof e!="object"||e==null)&&(e={});var t=e.quality;if(typeof t>"u"&&(t=75),typeof t!="number"||t<0||t>100)throw new Error("WebGLStage: Snapshot quality needs to be a number between 0 and 100");return this.render(),this._domElement.toDataURL("image/jpeg",t/100)};tt.type=tt.prototype.type="webgl";function Kd(e,t,n){this._stage=e,this._gl=e._gl,this._texture=null,this._timestamp=null,this._width=this._height=null,this.refresh(t,n)}Kd.prototype.refresh=function(e,t){var n=this._gl,r=this._stage,i,o=t.timestamp();if(o!==this._timestamp){var a=t.element(),l=t.width(),s=t.height();if(l!==this._width||s!==this._height){var u=r.maxTextureSize();if(l>u)throw new Error("Texture width larger than max size ("+l+" vs. "+u+")");if(s>u)throw new Error("Texture height larger than max size ("+s+" vs. "+u+")");this._texture&&n.deleteTexture(i),i=this._texture=n.createTexture(),n.bindTexture(n.TEXTURE_2D,i),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,a)}else i=this._texture,n.bindTexture(n.TEXTURE_2D,i),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),a instanceof HTMLVideoElement&&T$.videoUseTexImage2D?n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,a):n.texSubImage2D(n.TEXTURE_2D,0,0,0,n.RGBA,n.UNSIGNED_BYTE,a);r._generateMipmaps&&Zm(l)&&Zm(s)?(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.generateMipmap(n.TEXTURE_2D)):(n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR)),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.bindTexture(n.TEXTURE_2D,null),this._timestamp=o,this._width=l,this._height=s}};Kd.prototype.destroy=function(){this._texture&&this._gl.deleteTexture(this._texture),S$(this)};tt.TextureClass=tt.prototype.TextureClass=Kd;var tw=tt,Y=1e-6,ae=typeof Float32Array<"u"?Float32Array:Array,rn=Math.random;function C$(e){ae=e}var M$=Math.PI/180;function O$(e){return e*M$}function P$(e,t){return Math.abs(e-t)<=Y*Math.max(1,Math.abs(e),Math.abs(t))}Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});const $$=Object.freeze(Object.defineProperty({__proto__:null,EPSILON:Y,get ARRAY_TYPE(){return ae},RANDOM:rn,setMatrixArrayType:C$,toRadian:O$,equals:P$},Symbol.toStringTag,{value:"Module"}));function k$(){var e=new ae(4);return ae!=Float32Array&&(e[1]=0,e[2]=0),e[0]=1,e[3]=1,e}function z$(e){var t=new ae(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function A$(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function L$(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e}function R$(e,t,n,r){var i=new ae(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function I$(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function j$(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e}function F$(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n*o-i*r;return a?(a=1/a,e[0]=o*a,e[1]=-r*a,e[2]=-i*a,e[3]=n*a,e):null}function N$(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e}function D$(e){return e[0]*e[3]-e[2]*e[1]}function nw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[0],s=n[1],u=n[2],c=n[3];return e[0]=r*l+o*s,e[1]=i*l+a*s,e[2]=r*u+o*c,e[3]=i*u+a*c,e}function H$(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=Math.sin(n),s=Math.cos(n);return e[0]=r*s+o*l,e[1]=i*s+a*l,e[2]=r*-l+o*s,e[3]=i*-l+a*s,e}function B$(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[0],s=n[1];return e[0]=r*l,e[1]=i*l,e[2]=o*s,e[3]=a*s,e}function W$(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e}function U$(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e}function V$(e){return"mat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function Y$(e){return Math.hypot(e[0],e[1],e[2],e[3])}function X$(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]}function G$(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function rw(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function q$(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function K$(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=t[0],l=t[1],s=t[2],u=t[3];return Math.abs(n-a)<=Y*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-l)<=Y*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(i-s)<=Y*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(o-u)<=Y*Math.max(1,Math.abs(o),Math.abs(u))}function Q$(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function Z$(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}var J$=nw,ek=rw;const tk=Object.freeze(Object.defineProperty({__proto__:null,create:k$,clone:z$,copy:A$,identity:L$,fromValues:R$,set:I$,transpose:j$,invert:F$,adjoint:N$,determinant:D$,multiply:nw,rotate:H$,scale:B$,fromRotation:W$,fromScaling:U$,str:V$,frob:Y$,LDU:X$,add:G$,subtract:rw,exactEquals:q$,equals:K$,multiplyScalar:Q$,multiplyScalarAndAdd:Z$,mul:J$,sub:ek},Symbol.toStringTag,{value:"Module"}));function nk(){var e=new ae(6);return ae!=Float32Array&&(e[1]=0,e[2]=0,e[4]=0,e[5]=0),e[0]=1,e[3]=1,e}function rk(e){var t=new ae(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ik(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function ok(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e}function ak(e,t,n,r,i,o){var a=new ae(6);return a[0]=e,a[1]=t,a[2]=n,a[3]=r,a[4]=i,a[5]=o,a}function lk(e,t,n,r,i,o,a){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=o,e[5]=a,e}function sk(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=n*o-r*i;return s?(s=1/s,e[0]=o*s,e[1]=-r*s,e[2]=-i*s,e[3]=n*s,e[4]=(i*l-o*a)*s,e[5]=(r*a-n*l)*s,e):null}function uk(e){return e[0]*e[3]-e[1]*e[2]}function iw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=n[0],c=n[1],f=n[2],h=n[3],d=n[4],p=n[5];return e[0]=r*u+o*c,e[1]=i*u+a*c,e[2]=r*f+o*h,e[3]=i*f+a*h,e[4]=r*d+o*p+l,e[5]=i*d+a*p+s,e}function ck(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=Math.sin(n),c=Math.cos(n);return e[0]=r*c+o*u,e[1]=i*c+a*u,e[2]=r*-u+o*c,e[3]=i*-u+a*c,e[4]=l,e[5]=s,e}function fk(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=n[0],c=n[1];return e[0]=r*u,e[1]=i*u,e[2]=o*c,e[3]=a*c,e[4]=l,e[5]=s,e}function hk(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=n[0],c=n[1];return e[0]=r,e[1]=i,e[2]=o,e[3]=a,e[4]=r*u+o*c+l,e[5]=i*u+a*c+s,e}function dk(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=-n,e[3]=r,e[4]=0,e[5]=0,e}function pk(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=t[1],e[4]=0,e[5]=0,e}function vk(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0],e[5]=t[1],e}function mk(e){return"mat2d("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+")"}function yk(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],1)}function gk(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e}function ow(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e}function _k(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e}function wk(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e}function xk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]}function bk(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],l=e[5],s=t[0],u=t[1],c=t[2],f=t[3],h=t[4],d=t[5];return Math.abs(n-s)<=Y*Math.max(1,Math.abs(n),Math.abs(s))&&Math.abs(r-u)<=Y*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(i-c)<=Y*Math.max(1,Math.abs(i),Math.abs(c))&&Math.abs(o-f)<=Y*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(a-h)<=Y*Math.max(1,Math.abs(a),Math.abs(h))&&Math.abs(l-d)<=Y*Math.max(1,Math.abs(l),Math.abs(d))}var Sk=iw,Tk=ow;const Ek=Object.freeze(Object.defineProperty({__proto__:null,create:nk,clone:rk,copy:ik,identity:ok,fromValues:ak,set:lk,invert:sk,determinant:uk,multiply:iw,rotate:ck,scale:fk,translate:hk,fromRotation:dk,fromScaling:pk,fromTranslation:vk,str:mk,frob:yk,add:gk,subtract:ow,multiplyScalar:_k,multiplyScalarAndAdd:wk,exactEquals:xk,equals:bk,mul:Sk,sub:Tk},Symbol.toStringTag,{value:"Module"}));function aw(){var e=new ae(9);return ae!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[5]=0,e[6]=0,e[7]=0),e[0]=1,e[4]=1,e[8]=1,e}function Ck(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e}function Mk(e){var t=new ae(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Ok(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Pk(e,t,n,r,i,o,a,l,s){var u=new ae(9);return u[0]=e,u[1]=t,u[2]=n,u[3]=r,u[4]=i,u[5]=o,u[6]=a,u[7]=l,u[8]=s,u}function $k(e,t,n,r,i,o,a,l,s,u){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=o,e[5]=a,e[6]=l,e[7]=s,e[8]=u,e}function kk(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function zk(e,t){if(e===t){var n=t[1],r=t[2],i=t[5];e[1]=t[3],e[2]=t[6],e[3]=n,e[5]=t[7],e[6]=r,e[7]=i}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e}function Ak(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=t[6],u=t[7],c=t[8],f=c*a-l*u,h=-c*o+l*s,d=u*o-a*s,p=n*f+r*h+i*d;return p?(p=1/p,e[0]=f*p,e[1]=(-c*r+i*u)*p,e[2]=(l*r-i*a)*p,e[3]=h*p,e[4]=(c*n-i*s)*p,e[5]=(-l*n+i*o)*p,e[6]=d*p,e[7]=(-u*n+r*s)*p,e[8]=(a*n-r*o)*p,e):null}function Lk(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=t[6],u=t[7],c=t[8];return e[0]=a*c-l*u,e[1]=i*u-r*c,e[2]=r*l-i*a,e[3]=l*s-o*c,e[4]=n*c-i*s,e[5]=i*o-n*l,e[6]=o*u-a*s,e[7]=r*s-n*u,e[8]=n*a-r*o,e}function Rk(e){var t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],l=e[6],s=e[7],u=e[8];return t*(u*o-a*s)+n*(-u*i+a*l)+r*(s*i-o*l)}function lw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=t[8],h=n[0],d=n[1],p=n[2],g=n[3],_=n[4],m=n[5],v=n[6],w=n[7],b=n[8];return e[0]=h*r+d*a+p*u,e[1]=h*i+d*l+p*c,e[2]=h*o+d*s+p*f,e[3]=g*r+_*a+m*u,e[4]=g*i+_*l+m*c,e[5]=g*o+_*s+m*f,e[6]=v*r+w*a+b*u,e[7]=v*i+w*l+b*c,e[8]=v*o+w*s+b*f,e}function Ik(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=t[8],h=n[0],d=n[1];return e[0]=r,e[1]=i,e[2]=o,e[3]=a,e[4]=l,e[5]=s,e[6]=h*r+d*a+u,e[7]=h*i+d*l+c,e[8]=h*o+d*s+f,e}function jk(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=t[8],h=Math.sin(n),d=Math.cos(n);return e[0]=d*r+h*a,e[1]=d*i+h*l,e[2]=d*o+h*s,e[3]=d*a-h*r,e[4]=d*l-h*i,e[5]=d*s-h*o,e[6]=u,e[7]=c,e[8]=f,e}function Fk(e,t,n){var r=n[0],i=n[1];return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=i*t[3],e[4]=i*t[4],e[5]=i*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e}function Nk(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=t[0],e[7]=t[1],e[8]=1,e}function Dk(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=-n,e[4]=r,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Hk(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=t[1],e[5]=0,e[6]=0,e[7]=0,e[8]=1,e}function Bk(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e}function Wk(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n+n,l=r+r,s=i+i,u=n*a,c=r*a,f=r*l,h=i*a,d=i*l,p=i*s,g=o*a,_=o*l,m=o*s;return e[0]=1-f-p,e[3]=c-m,e[6]=h+_,e[1]=c+m,e[4]=1-u-p,e[7]=d-g,e[2]=h-_,e[5]=d+g,e[8]=1-u-f,e}function Uk(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],p=t[12],g=t[13],_=t[14],m=t[15],v=n*l-r*a,w=n*s-i*a,b=n*u-o*a,S=r*s-i*l,E=r*u-o*l,$=i*u-o*s,P=c*g-f*p,F=c*_-h*p,R=c*m-d*p,W=f*_-h*g,Z=f*m-d*g,ne=h*m-d*_,V=v*ne-w*Z+b*W+S*R-E*F+$*P;return V?(V=1/V,e[0]=(l*ne-s*Z+u*W)*V,e[1]=(s*R-a*ne-u*F)*V,e[2]=(a*Z-l*R+u*P)*V,e[3]=(i*Z-r*ne-o*W)*V,e[4]=(n*ne-i*R+o*F)*V,e[5]=(r*R-n*Z-o*P)*V,e[6]=(g*$-_*E+m*S)*V,e[7]=(_*b-p*$-m*w)*V,e[8]=(p*E-g*b+m*v)*V,e):null}function Vk(e,t,n){return e[0]=2/t,e[1]=0,e[2]=0,e[3]=0,e[4]=-2/n,e[5]=0,e[6]=-1,e[7]=1,e[8]=1,e}function Yk(e){return"mat3("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+")"}function Xk(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8])}function Gk(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e}function sw(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e}function qk(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e}function Kk(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e}function Qk(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]}function Zk(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],l=e[5],s=e[6],u=e[7],c=e[8],f=t[0],h=t[1],d=t[2],p=t[3],g=t[4],_=t[5],m=t[6],v=t[7],w=t[8];return Math.abs(n-f)<=Y*Math.max(1,Math.abs(n),Math.abs(f))&&Math.abs(r-h)<=Y*Math.max(1,Math.abs(r),Math.abs(h))&&Math.abs(i-d)<=Y*Math.max(1,Math.abs(i),Math.abs(d))&&Math.abs(o-p)<=Y*Math.max(1,Math.abs(o),Math.abs(p))&&Math.abs(a-g)<=Y*Math.max(1,Math.abs(a),Math.abs(g))&&Math.abs(l-_)<=Y*Math.max(1,Math.abs(l),Math.abs(_))&&Math.abs(s-m)<=Y*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(u-v)<=Y*Math.max(1,Math.abs(u),Math.abs(v))&&Math.abs(c-w)<=Y*Math.max(1,Math.abs(c),Math.abs(w))}var Jk=lw,ez=sw;const tz=Object.freeze(Object.defineProperty({__proto__:null,create:aw,fromMat4:Ck,clone:Mk,copy:Ok,fromValues:Pk,set:$k,identity:kk,transpose:zk,invert:Ak,adjoint:Lk,determinant:Rk,multiply:lw,translate:Ik,rotate:jk,scale:Fk,fromTranslation:Nk,fromRotation:Dk,fromScaling:Hk,fromMat2d:Bk,fromQuat:Wk,normalFromMat4:Uk,projection:Vk,str:Yk,frob:Xk,add:Gk,subtract:sw,multiplyScalar:qk,multiplyScalarAndAdd:Kk,exactEquals:Qk,equals:Zk,mul:Jk,sub:ez},Symbol.toStringTag,{value:"Module"}));function nz(){var e=new ae(16);return ae!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function rz(e){var t=new ae(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function iz(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function oz(e,t,n,r,i,o,a,l,s,u,c,f,h,d,p,g){var _=new ae(16);return _[0]=e,_[1]=t,_[2]=n,_[3]=r,_[4]=i,_[5]=o,_[6]=a,_[7]=l,_[8]=s,_[9]=u,_[10]=c,_[11]=f,_[12]=h,_[13]=d,_[14]=p,_[15]=g,_}function az(e,t,n,r,i,o,a,l,s,u,c,f,h,d,p,g,_){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=o,e[5]=a,e[6]=l,e[7]=s,e[8]=u,e[9]=c,e[10]=f,e[11]=h,e[12]=d,e[13]=p,e[14]=g,e[15]=_,e}function uw(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function lz(e,t){if(e===t){var n=t[1],r=t[2],i=t[3],o=t[6],a=t[7],l=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[6]=t[9],e[7]=t[13],e[8]=r,e[9]=o,e[11]=t[14],e[12]=i,e[13]=a,e[14]=l}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e}function sz(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],p=t[12],g=t[13],_=t[14],m=t[15],v=n*l-r*a,w=n*s-i*a,b=n*u-o*a,S=r*s-i*l,E=r*u-o*l,$=i*u-o*s,P=c*g-f*p,F=c*_-h*p,R=c*m-d*p,W=f*_-h*g,Z=f*m-d*g,ne=h*m-d*_,V=v*ne-w*Z+b*W+S*R-E*F+$*P;return V?(V=1/V,e[0]=(l*ne-s*Z+u*W)*V,e[1]=(i*Z-r*ne-o*W)*V,e[2]=(g*$-_*E+m*S)*V,e[3]=(h*E-f*$-d*S)*V,e[4]=(s*R-a*ne-u*F)*V,e[5]=(n*ne-i*R+o*F)*V,e[6]=(_*b-p*$-m*w)*V,e[7]=(c*$-h*b+d*w)*V,e[8]=(a*Z-l*R+u*P)*V,e[9]=(r*R-n*Z-o*P)*V,e[10]=(p*E-g*b+m*v)*V,e[11]=(f*b-c*E-d*v)*V,e[12]=(l*F-a*W-s*P)*V,e[13]=(n*W-r*F+i*P)*V,e[14]=(g*w-p*S-_*v)*V,e[15]=(c*S-f*w+h*v)*V,e):null}function uz(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=t[4],l=t[5],s=t[6],u=t[7],c=t[8],f=t[9],h=t[10],d=t[11],p=t[12],g=t[13],_=t[14],m=t[15];return e[0]=l*(h*m-d*_)-f*(s*m-u*_)+g*(s*d-u*h),e[1]=-(r*(h*m-d*_)-f*(i*m-o*_)+g*(i*d-o*h)),e[2]=r*(s*m-u*_)-l*(i*m-o*_)+g*(i*u-o*s),e[3]=-(r*(s*d-u*h)-l*(i*d-o*h)+f*(i*u-o*s)),e[4]=-(a*(h*m-d*_)-c*(s*m-u*_)+p*(s*d-u*h)),e[5]=n*(h*m-d*_)-c*(i*m-o*_)+p*(i*d-o*h),e[6]=-(n*(s*m-u*_)-a*(i*m-o*_)+p*(i*u-o*s)),e[7]=n*(s*d-u*h)-a*(i*d-o*h)+c*(i*u-o*s),e[8]=a*(f*m-d*g)-c*(l*m-u*g)+p*(l*d-u*f),e[9]=-(n*(f*m-d*g)-c*(r*m-o*g)+p*(r*d-o*f)),e[10]=n*(l*m-u*g)-a*(r*m-o*g)+p*(r*u-o*l),e[11]=-(n*(l*d-u*f)-a*(r*d-o*f)+c*(r*u-o*l)),e[12]=-(a*(f*_-h*g)-c*(l*_-s*g)+p*(l*h-s*f)),e[13]=n*(f*_-h*g)-c*(r*_-i*g)+p*(r*h-i*f),e[14]=-(n*(l*_-s*g)-a*(r*_-i*g)+p*(r*s-i*l)),e[15]=n*(l*h-s*f)-a*(r*h-i*f)+c*(r*s-i*l),e}function cz(e){var t=e[0],n=e[1],r=e[2],i=e[3],o=e[4],a=e[5],l=e[6],s=e[7],u=e[8],c=e[9],f=e[10],h=e[11],d=e[12],p=e[13],g=e[14],_=e[15],m=t*a-n*o,v=t*l-r*o,w=t*s-i*o,b=n*l-r*a,S=n*s-i*a,E=r*s-i*l,$=u*p-c*d,P=u*g-f*d,F=u*_-h*d,R=c*g-f*p,W=c*_-h*p,Z=f*_-h*g;return m*Z-v*W+w*R+b*F-S*P+E*$}function cw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],v=t[15],w=n[0],b=n[1],S=n[2],E=n[3];return e[0]=w*r+b*l+S*f+E*g,e[1]=w*i+b*s+S*h+E*_,e[2]=w*o+b*u+S*d+E*m,e[3]=w*a+b*c+S*p+E*v,w=n[4],b=n[5],S=n[6],E=n[7],e[4]=w*r+b*l+S*f+E*g,e[5]=w*i+b*s+S*h+E*_,e[6]=w*o+b*u+S*d+E*m,e[7]=w*a+b*c+S*p+E*v,w=n[8],b=n[9],S=n[10],E=n[11],e[8]=w*r+b*l+S*f+E*g,e[9]=w*i+b*s+S*h+E*_,e[10]=w*o+b*u+S*d+E*m,e[11]=w*a+b*c+S*p+E*v,w=n[12],b=n[13],S=n[14],E=n[15],e[12]=w*r+b*l+S*f+E*g,e[13]=w*i+b*s+S*h+E*_,e[14]=w*o+b*u+S*d+E*m,e[15]=w*a+b*c+S*p+E*v,e}function fz(e,t,n){var r=n[0],i=n[1],o=n[2],a,l,s,u,c,f,h,d,p,g,_,m;return t===e?(e[12]=t[0]*r+t[4]*i+t[8]*o+t[12],e[13]=t[1]*r+t[5]*i+t[9]*o+t[13],e[14]=t[2]*r+t[6]*i+t[10]*o+t[14],e[15]=t[3]*r+t[7]*i+t[11]*o+t[15]):(a=t[0],l=t[1],s=t[2],u=t[3],c=t[4],f=t[5],h=t[6],d=t[7],p=t[8],g=t[9],_=t[10],m=t[11],e[0]=a,e[1]=l,e[2]=s,e[3]=u,e[4]=c,e[5]=f,e[6]=h,e[7]=d,e[8]=p,e[9]=g,e[10]=_,e[11]=m,e[12]=a*r+c*i+p*o+t[12],e[13]=l*r+f*i+g*o+t[13],e[14]=s*r+h*i+_*o+t[14],e[15]=u*r+d*i+m*o+t[15]),e}function hz(e,t,n){var r=n[0],i=n[1],o=n[2];return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e[4]=t[4]*i,e[5]=t[5]*i,e[6]=t[6]*i,e[7]=t[7]*i,e[8]=t[8]*o,e[9]=t[9]*o,e[10]=t[10]*o,e[11]=t[11]*o,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e}function dz(e,t,n,r){var i=r[0],o=r[1],a=r[2],l=Math.hypot(i,o,a),s,u,c,f,h,d,p,g,_,m,v,w,b,S,E,$,P,F,R,W,Z,ne,V,M;return l<Y?null:(l=1/l,i*=l,o*=l,a*=l,s=Math.sin(n),u=Math.cos(n),c=1-u,f=t[0],h=t[1],d=t[2],p=t[3],g=t[4],_=t[5],m=t[6],v=t[7],w=t[8],b=t[9],S=t[10],E=t[11],$=i*i*c+u,P=o*i*c+a*s,F=a*i*c-o*s,R=i*o*c-a*s,W=o*o*c+u,Z=a*o*c+i*s,ne=i*a*c+o*s,V=o*a*c-i*s,M=a*a*c+u,e[0]=f*$+g*P+w*F,e[1]=h*$+_*P+b*F,e[2]=d*$+m*P+S*F,e[3]=p*$+v*P+E*F,e[4]=f*R+g*W+w*Z,e[5]=h*R+_*W+b*Z,e[6]=d*R+m*W+S*Z,e[7]=p*R+v*W+E*Z,e[8]=f*ne+g*V+w*M,e[9]=h*ne+_*V+b*M,e[10]=d*ne+m*V+S*M,e[11]=p*ne+v*V+E*M,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)}function pz(e,t,n){var r=Math.sin(n),i=Math.cos(n),o=t[4],a=t[5],l=t[6],s=t[7],u=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=o*i+u*r,e[5]=a*i+c*r,e[6]=l*i+f*r,e[7]=s*i+h*r,e[8]=u*i-o*r,e[9]=c*i-a*r,e[10]=f*i-l*r,e[11]=h*i-s*r,e}function vz(e,t,n){var r=Math.sin(n),i=Math.cos(n),o=t[0],a=t[1],l=t[2],s=t[3],u=t[8],c=t[9],f=t[10],h=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=o*i-u*r,e[1]=a*i-c*r,e[2]=l*i-f*r,e[3]=s*i-h*r,e[8]=o*r+u*i,e[9]=a*r+c*i,e[10]=l*r+f*i,e[11]=s*r+h*i,e}function mz(e,t,n){var r=Math.sin(n),i=Math.cos(n),o=t[0],a=t[1],l=t[2],s=t[3],u=t[4],c=t[5],f=t[6],h=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=o*i+u*r,e[1]=a*i+c*r,e[2]=l*i+f*r,e[3]=s*i+h*r,e[4]=u*i-o*r,e[5]=c*i-a*r,e[6]=f*i-l*r,e[7]=h*i-s*r,e}function yz(e,t){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=t[0],e[13]=t[1],e[14]=t[2],e[15]=1,e}function gz(e,t){return e[0]=t[0],e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t[1],e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t[2],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function _z(e,t,n){var r=n[0],i=n[1],o=n[2],a=Math.hypot(r,i,o),l,s,u;return a<Y?null:(a=1/a,r*=a,i*=a,o*=a,l=Math.sin(t),s=Math.cos(t),u=1-s,e[0]=r*r*u+s,e[1]=i*r*u+o*l,e[2]=o*r*u-i*l,e[3]=0,e[4]=r*i*u-o*l,e[5]=i*i*u+s,e[6]=o*i*u+r*l,e[7]=0,e[8]=r*o*u+i*l,e[9]=i*o*u-r*l,e[10]=o*o*u+s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e)}function wz(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=r,e[6]=n,e[7]=0,e[8]=0,e[9]=-n,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function xz(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=0,e[2]=-n,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=n,e[9]=0,e[10]=r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function bz(e,t){var n=Math.sin(t),r=Math.cos(t);return e[0]=r,e[1]=n,e[2]=0,e[3]=0,e[4]=-n,e[5]=r,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function fw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=r+r,s=i+i,u=o+o,c=r*l,f=r*s,h=r*u,d=i*s,p=i*u,g=o*u,_=a*l,m=a*s,v=a*u;return e[0]=1-(d+g),e[1]=f+v,e[2]=h-m,e[3]=0,e[4]=f-v,e[5]=1-(c+g),e[6]=p+_,e[7]=0,e[8]=h+m,e[9]=p-_,e[10]=1-(c+d),e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function Sz(e,t){var n=new ae(3),r=-t[0],i=-t[1],o=-t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=r*r+i*i+o*o+a*a;return f>0?(n[0]=(l*a+c*r+s*o-u*i)*2/f,n[1]=(s*a+c*i+u*r-l*o)*2/f,n[2]=(u*a+c*o+l*i-s*r)*2/f):(n[0]=(l*a+c*r+s*o-u*i)*2,n[1]=(s*a+c*i+u*r-l*o)*2,n[2]=(u*a+c*o+l*i-s*r)*2),fw(e,t,n),e}function hw(e,t){return e[0]=t[12],e[1]=t[13],e[2]=t[14],e}function dw(e,t){var n=t[0],r=t[1],i=t[2],o=t[4],a=t[5],l=t[6],s=t[8],u=t[9],c=t[10];return e[0]=Math.hypot(n,r,i),e[1]=Math.hypot(o,a,l),e[2]=Math.hypot(s,u,c),e}function pw(e,t){var n=new ae(3);dw(n,t);var r=1/n[0],i=1/n[1],o=1/n[2],a=t[0]*r,l=t[1]*i,s=t[2]*o,u=t[4]*r,c=t[5]*i,f=t[6]*o,h=t[8]*r,d=t[9]*i,p=t[10]*o,g=a+c+p,_=0;return g>0?(_=Math.sqrt(g+1)*2,e[3]=.25*_,e[0]=(f-d)/_,e[1]=(h-s)/_,e[2]=(l-u)/_):a>c&&a>p?(_=Math.sqrt(1+a-c-p)*2,e[3]=(f-d)/_,e[0]=.25*_,e[1]=(l+u)/_,e[2]=(h+s)/_):c>p?(_=Math.sqrt(1+c-a-p)*2,e[3]=(h-s)/_,e[0]=(l+u)/_,e[1]=.25*_,e[2]=(f+d)/_):(_=Math.sqrt(1+p-a-c)*2,e[3]=(l-u)/_,e[0]=(h+s)/_,e[1]=(f+d)/_,e[2]=.25*_),e}function Tz(e,t,n,r){var i=t[0],o=t[1],a=t[2],l=t[3],s=i+i,u=o+o,c=a+a,f=i*s,h=i*u,d=i*c,p=o*u,g=o*c,_=a*c,m=l*s,v=l*u,w=l*c,b=r[0],S=r[1],E=r[2];return e[0]=(1-(p+_))*b,e[1]=(h+w)*b,e[2]=(d-v)*b,e[3]=0,e[4]=(h-w)*S,e[5]=(1-(f+_))*S,e[6]=(g+m)*S,e[7]=0,e[8]=(d+v)*E,e[9]=(g-m)*E,e[10]=(1-(f+p))*E,e[11]=0,e[12]=n[0],e[13]=n[1],e[14]=n[2],e[15]=1,e}function Ez(e,t,n,r,i){var o=t[0],a=t[1],l=t[2],s=t[3],u=o+o,c=a+a,f=l+l,h=o*u,d=o*c,p=o*f,g=a*c,_=a*f,m=l*f,v=s*u,w=s*c,b=s*f,S=r[0],E=r[1],$=r[2],P=i[0],F=i[1],R=i[2],W=(1-(g+m))*S,Z=(d+b)*S,ne=(p-w)*S,V=(d-b)*E,M=(1-(h+m))*E,Ve=(_+v)*E,ie=(p+w)*$,L=(_-v)*$,q=(1-(h+g))*$;return e[0]=W,e[1]=Z,e[2]=ne,e[3]=0,e[4]=V,e[5]=M,e[6]=Ve,e[7]=0,e[8]=ie,e[9]=L,e[10]=q,e[11]=0,e[12]=n[0]+P-(W*P+V*F+ie*R),e[13]=n[1]+F-(Z*P+M*F+L*R),e[14]=n[2]+R-(ne*P+Ve*F+q*R),e[15]=1,e}function Cz(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n+n,l=r+r,s=i+i,u=n*a,c=r*a,f=r*l,h=i*a,d=i*l,p=i*s,g=o*a,_=o*l,m=o*s;return e[0]=1-f-p,e[1]=c+m,e[2]=h-_,e[3]=0,e[4]=c-m,e[5]=1-u-p,e[6]=d+g,e[7]=0,e[8]=h+_,e[9]=d-g,e[10]=1-u-f,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function Mz(e,t,n,r,i,o,a){var l=1/(n-t),s=1/(i-r),u=1/(o-a);return e[0]=o*2*l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o*2*s,e[6]=0,e[7]=0,e[8]=(n+t)*l,e[9]=(i+r)*s,e[10]=(a+o)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=a*o*2*u,e[15]=0,e}function Oz(e,t,n,r,i){var o=1/Math.tan(t/2),a;return e[0]=o/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=o,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,i!=null&&i!==1/0?(a=1/(r-i),e[10]=(i+r)*a,e[14]=2*i*r*a):(e[10]=-1,e[14]=-2*r),e}function Pz(e,t,n,r){var i=Math.tan(t.upDegrees*Math.PI/180),o=Math.tan(t.downDegrees*Math.PI/180),a=Math.tan(t.leftDegrees*Math.PI/180),l=Math.tan(t.rightDegrees*Math.PI/180),s=2/(a+l),u=2/(i+o);return e[0]=s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=u,e[6]=0,e[7]=0,e[8]=-((a-l)*s*.5),e[9]=(i-o)*u*.5,e[10]=r/(n-r),e[11]=-1,e[12]=0,e[13]=0,e[14]=r*n/(n-r),e[15]=0,e}function $z(e,t,n,r,i,o,a){var l=1/(t-n),s=1/(r-i),u=1/(o-a);return e[0]=-2*l,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*s,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+n)*l,e[13]=(i+r)*s,e[14]=(a+o)*u,e[15]=1,e}function kz(e,t,n,r){var i,o,a,l,s,u,c,f,h,d,p=t[0],g=t[1],_=t[2],m=r[0],v=r[1],w=r[2],b=n[0],S=n[1],E=n[2];return Math.abs(p-b)<Y&&Math.abs(g-S)<Y&&Math.abs(_-E)<Y?uw(e):(c=p-b,f=g-S,h=_-E,d=1/Math.hypot(c,f,h),c*=d,f*=d,h*=d,i=v*h-w*f,o=w*c-m*h,a=m*f-v*c,d=Math.hypot(i,o,a),d?(d=1/d,i*=d,o*=d,a*=d):(i=0,o=0,a=0),l=f*a-h*o,s=h*i-c*a,u=c*o-f*i,d=Math.hypot(l,s,u),d?(d=1/d,l*=d,s*=d,u*=d):(l=0,s=0,u=0),e[0]=i,e[1]=l,e[2]=c,e[3]=0,e[4]=o,e[5]=s,e[6]=f,e[7]=0,e[8]=a,e[9]=u,e[10]=h,e[11]=0,e[12]=-(i*p+o*g+a*_),e[13]=-(l*p+s*g+u*_),e[14]=-(c*p+f*g+h*_),e[15]=1,e)}function zz(e,t,n,r){var i=t[0],o=t[1],a=t[2],l=r[0],s=r[1],u=r[2],c=i-n[0],f=o-n[1],h=a-n[2],d=c*c+f*f+h*h;d>0&&(d=1/Math.sqrt(d),c*=d,f*=d,h*=d);var p=s*h-u*f,g=u*c-l*h,_=l*f-s*c;return d=p*p+g*g+_*_,d>0&&(d=1/Math.sqrt(d),p*=d,g*=d,_*=d),e[0]=p,e[1]=g,e[2]=_,e[3]=0,e[4]=f*_-h*g,e[5]=h*p-c*_,e[6]=c*g-f*p,e[7]=0,e[8]=c,e[9]=f,e[10]=h,e[11]=0,e[12]=i,e[13]=o,e[14]=a,e[15]=1,e}function Az(e){return"mat4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+", "+e[8]+", "+e[9]+", "+e[10]+", "+e[11]+", "+e[12]+", "+e[13]+", "+e[14]+", "+e[15]+")"}function Lz(e){return Math.hypot(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}function Rz(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e[8]=t[8]+n[8],e[9]=t[9]+n[9],e[10]=t[10]+n[10],e[11]=t[11]+n[11],e[12]=t[12]+n[12],e[13]=t[13]+n[13],e[14]=t[14]+n[14],e[15]=t[15]+n[15],e}function vw(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e[4]=t[4]-n[4],e[5]=t[5]-n[5],e[6]=t[6]-n[6],e[7]=t[7]-n[7],e[8]=t[8]-n[8],e[9]=t[9]-n[9],e[10]=t[10]-n[10],e[11]=t[11]-n[11],e[12]=t[12]-n[12],e[13]=t[13]-n[13],e[14]=t[14]-n[14],e[15]=t[15]-n[15],e}function Iz(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*n,e[9]=t[9]*n,e[10]=t[10]*n,e[11]=t[11]*n,e[12]=t[12]*n,e[13]=t[13]*n,e[14]=t[14]*n,e[15]=t[15]*n,e}function jz(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e[4]=t[4]+n[4]*r,e[5]=t[5]+n[5]*r,e[6]=t[6]+n[6]*r,e[7]=t[7]+n[7]*r,e[8]=t[8]+n[8]*r,e[9]=t[9]+n[9]*r,e[10]=t[10]+n[10]*r,e[11]=t[11]+n[11]*r,e[12]=t[12]+n[12]*r,e[13]=t[13]+n[13]*r,e[14]=t[14]+n[14]*r,e[15]=t[15]+n[15]*r,e}function Fz(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]&&e[8]===t[8]&&e[9]===t[9]&&e[10]===t[10]&&e[11]===t[11]&&e[12]===t[12]&&e[13]===t[13]&&e[14]===t[14]&&e[15]===t[15]}function Nz(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],l=e[5],s=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],p=e[12],g=e[13],_=e[14],m=e[15],v=t[0],w=t[1],b=t[2],S=t[3],E=t[4],$=t[5],P=t[6],F=t[7],R=t[8],W=t[9],Z=t[10],ne=t[11],V=t[12],M=t[13],Ve=t[14],ie=t[15];return Math.abs(n-v)<=Y*Math.max(1,Math.abs(n),Math.abs(v))&&Math.abs(r-w)<=Y*Math.max(1,Math.abs(r),Math.abs(w))&&Math.abs(i-b)<=Y*Math.max(1,Math.abs(i),Math.abs(b))&&Math.abs(o-S)<=Y*Math.max(1,Math.abs(o),Math.abs(S))&&Math.abs(a-E)<=Y*Math.max(1,Math.abs(a),Math.abs(E))&&Math.abs(l-$)<=Y*Math.max(1,Math.abs(l),Math.abs($))&&Math.abs(s-P)<=Y*Math.max(1,Math.abs(s),Math.abs(P))&&Math.abs(u-F)<=Y*Math.max(1,Math.abs(u),Math.abs(F))&&Math.abs(c-R)<=Y*Math.max(1,Math.abs(c),Math.abs(R))&&Math.abs(f-W)<=Y*Math.max(1,Math.abs(f),Math.abs(W))&&Math.abs(h-Z)<=Y*Math.max(1,Math.abs(h),Math.abs(Z))&&Math.abs(d-ne)<=Y*Math.max(1,Math.abs(d),Math.abs(ne))&&Math.abs(p-V)<=Y*Math.max(1,Math.abs(p),Math.abs(V))&&Math.abs(g-M)<=Y*Math.max(1,Math.abs(g),Math.abs(M))&&Math.abs(_-Ve)<=Y*Math.max(1,Math.abs(_),Math.abs(Ve))&&Math.abs(m-ie)<=Y*Math.max(1,Math.abs(m),Math.abs(ie))}var Dz=cw,Hz=vw;const Bz=Object.freeze(Object.defineProperty({__proto__:null,create:nz,clone:rz,copy:iz,fromValues:oz,set:az,identity:uw,transpose:lz,invert:sz,adjoint:uz,determinant:cz,multiply:cw,translate:fz,scale:hz,rotate:dz,rotateX:pz,rotateY:vz,rotateZ:mz,fromTranslation:yz,fromScaling:gz,fromRotation:_z,fromXRotation:wz,fromYRotation:xz,fromZRotation:bz,fromRotationTranslation:fw,fromQuat2:Sz,getTranslation:hw,getScaling:dw,getRotation:pw,fromRotationTranslationScale:Tz,fromRotationTranslationScaleOrigin:Ez,fromQuat:Cz,frustum:Mz,perspective:Oz,perspectiveFromFieldOfView:Pz,ortho:$z,lookAt:kz,targetTo:zz,str:Az,frob:Lz,add:Rz,subtract:vw,multiplyScalar:Iz,multiplyScalarAndAdd:jz,exactEquals:Fz,equals:Nz,mul:Dz,sub:Hz},Symbol.toStringTag,{value:"Module"}));function Qd(){var e=new ae(3);return ae!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function Wz(e){var t=new ae(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function mw(e){var t=e[0],n=e[1],r=e[2];return Math.hypot(t,n,r)}function yh(e,t,n){var r=new ae(3);return r[0]=e,r[1]=t,r[2]=n,r}function Uz(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function Vz(e,t,n,r){return e[0]=t,e[1]=n,e[2]=r,e}function Yz(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e}function yw(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e}function gw(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e}function _w(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e}function Xz(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e}function Gz(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e}function qz(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e}function Kz(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e}function Qz(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e}function Zz(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e}function Jz(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e}function ww(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return Math.hypot(n,r,i)}function xw(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2];return n*n+r*r+i*i}function bw(e){var t=e[0],n=e[1],r=e[2];return t*t+n*n+r*r}function eA(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e}function tA(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e}function Sw(e,t){var n=t[0],r=t[1],i=t[2],o=n*n+r*r+i*i;return o>0&&(o=1/Math.sqrt(o)),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e}function Zd(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]}function Wl(e,t,n){var r=t[0],i=t[1],o=t[2],a=n[0],l=n[1],s=n[2];return e[0]=i*s-o*l,e[1]=o*a-r*s,e[2]=r*l-i*a,e}function nA(e,t,n,r){var i=t[0],o=t[1],a=t[2];return e[0]=i+r*(n[0]-i),e[1]=o+r*(n[1]-o),e[2]=a+r*(n[2]-a),e}function rA(e,t,n,r,i,o){var a=o*o,l=a*(2*o-3)+1,s=a*(o-2)+o,u=a*(o-1),c=a*(3-2*o);return e[0]=t[0]*l+n[0]*s+r[0]*u+i[0]*c,e[1]=t[1]*l+n[1]*s+r[1]*u+i[1]*c,e[2]=t[2]*l+n[2]*s+r[2]*u+i[2]*c,e}function iA(e,t,n,r,i,o){var a=1-o,l=a*a,s=o*o,u=l*a,c=3*o*l,f=3*s*a,h=s*o;return e[0]=t[0]*u+n[0]*c+r[0]*f+i[0]*h,e[1]=t[1]*u+n[1]*c+r[1]*f+i[1]*h,e[2]=t[2]*u+n[2]*c+r[2]*f+i[2]*h,e}function oA(e,t){t=t||1;var n=rn()*2*Math.PI,r=rn()*2-1,i=Math.sqrt(1-r*r)*t;return e[0]=Math.cos(n)*i,e[1]=Math.sin(n)*i,e[2]=r*t,e}function aA(e,t,n){var r=t[0],i=t[1],o=t[2],a=n[3]*r+n[7]*i+n[11]*o+n[15];return a=a||1,e[0]=(n[0]*r+n[4]*i+n[8]*o+n[12])/a,e[1]=(n[1]*r+n[5]*i+n[9]*o+n[13])/a,e[2]=(n[2]*r+n[6]*i+n[10]*o+n[14])/a,e}function lA(e,t,n){var r=t[0],i=t[1],o=t[2];return e[0]=r*n[0]+i*n[3]+o*n[6],e[1]=r*n[1]+i*n[4]+o*n[7],e[2]=r*n[2]+i*n[5]+o*n[8],e}function sA(e,t,n){var r=n[0],i=n[1],o=n[2],a=n[3],l=t[0],s=t[1],u=t[2],c=i*u-o*s,f=o*l-r*u,h=r*s-i*l,d=i*h-o*f,p=o*c-r*h,g=r*f-i*c,_=a*2;return c*=_,f*=_,h*=_,d*=2,p*=2,g*=2,e[0]=l+c+d,e[1]=s+f+p,e[2]=u+h+g,e}function uA(e,t,n,r){var i=[],o=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[0],o[1]=i[1]*Math.cos(r)-i[2]*Math.sin(r),o[2]=i[1]*Math.sin(r)+i[2]*Math.cos(r),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}function cA(e,t,n,r){var i=[],o=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[2]*Math.sin(r)+i[0]*Math.cos(r),o[1]=i[1],o[2]=i[2]*Math.cos(r)-i[0]*Math.sin(r),e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}function fA(e,t,n,r){var i=[],o=[];return i[0]=t[0]-n[0],i[1]=t[1]-n[1],i[2]=t[2]-n[2],o[0]=i[0]*Math.cos(r)-i[1]*Math.sin(r),o[1]=i[0]*Math.sin(r)+i[1]*Math.cos(r),o[2]=i[2],e[0]=o[0]+n[0],e[1]=o[1]+n[1],e[2]=o[2]+n[2],e}function hA(e,t){var n=e[0],r=e[1],i=e[2],o=t[0],a=t[1],l=t[2],s=Math.sqrt(n*n+r*r+i*i),u=Math.sqrt(o*o+a*a+l*l),c=s*u,f=c&&Zd(e,t)/c;return Math.acos(Math.min(Math.max(f,-1),1))}function dA(e){return e[0]=0,e[1]=0,e[2]=0,e}function pA(e){return"vec3("+e[0]+", "+e[1]+", "+e[2]+")"}function vA(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]}function mA(e,t){var n=e[0],r=e[1],i=e[2],o=t[0],a=t[1],l=t[2];return Math.abs(n-o)<=Y*Math.max(1,Math.abs(n),Math.abs(o))&&Math.abs(r-a)<=Y*Math.max(1,Math.abs(r),Math.abs(a))&&Math.abs(i-l)<=Y*Math.max(1,Math.abs(i),Math.abs(l))}var yA=yw,gA=gw,_A=_w,wA=ww,xA=xw,Tw=mw,bA=bw,SA=function(){var e=Qd();return function(t,n,r,i,o,a){var l,s;for(n||(n=3),r||(r=0),i?s=Math.min(i*n+r,t.length):s=t.length,l=r;l<s;l+=n)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],o(e,e,a),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2];return t}}();const TA=Object.freeze(Object.defineProperty({__proto__:null,create:Qd,clone:Wz,length:mw,fromValues:yh,copy:Uz,set:Vz,add:Yz,subtract:yw,multiply:gw,divide:_w,ceil:Xz,floor:Gz,min:qz,max:Kz,round:Qz,scale:Zz,scaleAndAdd:Jz,distance:ww,squaredDistance:xw,squaredLength:bw,negate:eA,inverse:tA,normalize:Sw,dot:Zd,cross:Wl,lerp:nA,hermite:rA,bezier:iA,random:oA,transformMat4:aA,transformMat3:lA,transformQuat:sA,rotateX:uA,rotateY:cA,rotateZ:fA,angle:hA,zero:dA,str:pA,exactEquals:vA,equals:mA,sub:yA,mul:gA,div:_A,dist:wA,sqrDist:xA,len:Tw,sqrLen:bA,forEach:SA},Symbol.toStringTag,{value:"Module"}));function Ew(){var e=new ae(4);return ae!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[3]=0),e}function Cw(e){var t=new ae(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function Mw(e,t,n,r){var i=new ae(4);return i[0]=e,i[1]=t,i[2]=n,i[3]=r,i}function Ow(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function Pw(e,t,n,r,i){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e}function $w(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e}function kw(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e[2]=t[2]-n[2],e[3]=t[3]-n[3],e}function zw(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e[2]=t[2]*n[2],e[3]=t[3]*n[3],e}function Aw(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e[2]=t[2]/n[2],e[3]=t[3]/n[3],e}function EA(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e[2]=Math.ceil(t[2]),e[3]=Math.ceil(t[3]),e}function CA(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e[2]=Math.floor(t[2]),e[3]=Math.floor(t[3]),e}function MA(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e[2]=Math.min(t[2],n[2]),e[3]=Math.min(t[3],n[3]),e}function OA(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e[2]=Math.max(t[2],n[2]),e[3]=Math.max(t[3],n[3]),e}function PA(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e[2]=Math.round(t[2]),e[3]=Math.round(t[3]),e}function Lw(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e}function $A(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e[2]=t[2]+n[2]*r,e[3]=t[3]+n[3]*r,e}function Rw(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],o=t[3]-e[3];return Math.hypot(n,r,i,o)}function Iw(e,t){var n=t[0]-e[0],r=t[1]-e[1],i=t[2]-e[2],o=t[3]-e[3];return n*n+r*r+i*i+o*o}function Jd(e){var t=e[0],n=e[1],r=e[2],i=e[3];return Math.hypot(t,n,r,i)}function ep(e){var t=e[0],n=e[1],r=e[2],i=e[3];return t*t+n*n+r*r+i*i}function kA(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function zA(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e}function jw(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n*n+r*r+i*i+o*o;return a>0&&(a=1/Math.sqrt(a)),e[0]=n*a,e[1]=r*a,e[2]=i*a,e[3]=o*a,e}function Fw(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]}function AA(e,t,n,r){var i=n[0]*r[1]-n[1]*r[0],o=n[0]*r[2]-n[2]*r[0],a=n[0]*r[3]-n[3]*r[0],l=n[1]*r[2]-n[2]*r[1],s=n[1]*r[3]-n[3]*r[1],u=n[2]*r[3]-n[3]*r[2],c=t[0],f=t[1],h=t[2],d=t[3];return e[0]=f*u-h*s+d*l,e[1]=-(c*u)+h*a-d*o,e[2]=c*s-f*a+d*i,e[3]=-(c*l)+f*o-h*i,e}function Nw(e,t,n,r){var i=t[0],o=t[1],a=t[2],l=t[3];return e[0]=i+r*(n[0]-i),e[1]=o+r*(n[1]-o),e[2]=a+r*(n[2]-a),e[3]=l+r*(n[3]-l),e}function LA(e,t){t=t||1;var n,r,i,o,a,l;do n=rn()*2-1,r=rn()*2-1,a=n*n+r*r;while(a>=1);do i=rn()*2-1,o=rn()*2-1,l=i*i+o*o;while(l>=1);var s=Math.sqrt((1-a)/l);return e[0]=t*n,e[1]=t*r,e[2]=t*i*s,e[3]=t*o*s,e}function RA(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3];return e[0]=n[0]*r+n[4]*i+n[8]*o+n[12]*a,e[1]=n[1]*r+n[5]*i+n[9]*o+n[13]*a,e[2]=n[2]*r+n[6]*i+n[10]*o+n[14]*a,e[3]=n[3]*r+n[7]*i+n[11]*o+n[15]*a,e}function IA(e,t,n){var r=t[0],i=t[1],o=t[2],a=n[0],l=n[1],s=n[2],u=n[3],c=u*r+l*o-s*i,f=u*i+s*r-a*o,h=u*o+a*i-l*r,d=-a*r-l*i-s*o;return e[0]=c*u+d*-a+f*-s-h*-l,e[1]=f*u+d*-l+h*-a-c*-s,e[2]=h*u+d*-s+c*-l-f*-a,e[3]=t[3],e}function jA(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e}function FA(e){return"vec4("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}function Dw(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]}function Hw(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=t[0],l=t[1],s=t[2],u=t[3];return Math.abs(n-a)<=Y*Math.max(1,Math.abs(n),Math.abs(a))&&Math.abs(r-l)<=Y*Math.max(1,Math.abs(r),Math.abs(l))&&Math.abs(i-s)<=Y*Math.max(1,Math.abs(i),Math.abs(s))&&Math.abs(o-u)<=Y*Math.max(1,Math.abs(o),Math.abs(u))}var NA=kw,DA=zw,HA=Aw,BA=Rw,WA=Iw,UA=Jd,VA=ep,YA=function(){var e=Ew();return function(t,n,r,i,o,a){var l,s;for(n||(n=4),r||(r=0),i?s=Math.min(i*n+r,t.length):s=t.length,l=r;l<s;l+=n)e[0]=t[l],e[1]=t[l+1],e[2]=t[l+2],e[3]=t[l+3],o(e,e,a),t[l]=e[0],t[l+1]=e[1],t[l+2]=e[2],t[l+3]=e[3];return t}}();const XA=Object.freeze(Object.defineProperty({__proto__:null,create:Ew,clone:Cw,fromValues:Mw,copy:Ow,set:Pw,add:$w,subtract:kw,multiply:zw,divide:Aw,ceil:EA,floor:CA,min:MA,max:OA,round:PA,scale:Lw,scaleAndAdd:$A,distance:Rw,squaredDistance:Iw,length:Jd,squaredLength:ep,negate:kA,inverse:zA,normalize:jw,dot:Fw,cross:AA,lerp:Nw,random:LA,transformMat4:RA,transformQuat:IA,zero:jA,str:FA,exactEquals:Dw,equals:Hw,sub:NA,mul:DA,div:HA,dist:BA,sqrDist:WA,len:UA,sqrLen:VA,forEach:YA},Symbol.toStringTag,{value:"Module"}));function Ls(){var e=new ae(4);return ae!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e[3]=1,e}function GA(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function Bw(e,t,n){n=n*.5;var r=Math.sin(n);return e[0]=r*t[0],e[1]=r*t[1],e[2]=r*t[2],e[3]=Math.cos(n),e}function qA(e,t){var n=Math.acos(t[3])*2,r=Math.sin(n/2);return r>Y?(e[0]=t[0]/r,e[1]=t[1]/r,e[2]=t[2]/r):(e[0]=1,e[1]=0,e[2]=0),n}function KA(e,t){var n=np(e,t);return Math.acos(2*n*n-1)}function Ww(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[0],s=n[1],u=n[2],c=n[3];return e[0]=r*c+a*l+i*u-o*s,e[1]=i*c+a*s+o*l-r*u,e[2]=o*c+a*u+r*s-i*l,e[3]=a*c-r*l-i*s-o*u,e}function Uw(e,t,n){n*=.5;var r=t[0],i=t[1],o=t[2],a=t[3],l=Math.sin(n),s=Math.cos(n);return e[0]=r*s+a*l,e[1]=i*s+o*l,e[2]=o*s-i*l,e[3]=a*s-r*l,e}function Vw(e,t,n){n*=.5;var r=t[0],i=t[1],o=t[2],a=t[3],l=Math.sin(n),s=Math.cos(n);return e[0]=r*s-o*l,e[1]=i*s+a*l,e[2]=o*s+r*l,e[3]=a*s-i*l,e}function Yw(e,t,n){n*=.5;var r=t[0],i=t[1],o=t[2],a=t[3],l=Math.sin(n),s=Math.cos(n);return e[0]=r*s+i*l,e[1]=i*s-r*l,e[2]=o*s+a*l,e[3]=a*s-o*l,e}function QA(e,t){var n=t[0],r=t[1],i=t[2];return e[0]=n,e[1]=r,e[2]=i,e[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),e}function Xw(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=Math.sqrt(n*n+r*r+i*i),l=Math.exp(o),s=a>0?l*Math.sin(a)/a:0;return e[0]=n*s,e[1]=r*s,e[2]=i*s,e[3]=l*Math.cos(a),e}function Gw(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=Math.sqrt(n*n+r*r+i*i),l=a>0?Math.atan2(a,o)/a:0;return e[0]=n*l,e[1]=r*l,e[2]=i*l,e[3]=.5*Math.log(n*n+r*r+i*i+o*o),e}function ZA(e,t,n){return Gw(e,t),Kw(e,e,n),Xw(e,e),e}function Ul(e,t,n,r){var i=t[0],o=t[1],a=t[2],l=t[3],s=n[0],u=n[1],c=n[2],f=n[3],h,d,p,g,_;return d=i*s+o*u+a*c+l*f,d<0&&(d=-d,s=-s,u=-u,c=-c,f=-f),1-d>Y?(h=Math.acos(d),p=Math.sin(h),g=Math.sin((1-r)*h)/p,_=Math.sin(r*h)/p):(g=1-r,_=r),e[0]=g*i+_*s,e[1]=g*o+_*u,e[2]=g*a+_*c,e[3]=g*l+_*f,e}function JA(e){var t=rn(),n=rn(),r=rn(),i=Math.sqrt(1-t),o=Math.sqrt(t);return e[0]=i*Math.sin(2*Math.PI*n),e[1]=i*Math.cos(2*Math.PI*n),e[2]=o*Math.sin(2*Math.PI*r),e[3]=o*Math.cos(2*Math.PI*r),e}function eL(e,t){var n=t[0],r=t[1],i=t[2],o=t[3],a=n*n+r*r+i*i+o*o,l=a?1/a:0;return e[0]=-n*l,e[1]=-r*l,e[2]=-i*l,e[3]=o*l,e}function tL(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function qw(e,t){var n=t[0]+t[4]+t[8],r;if(n>0)r=Math.sqrt(n+1),e[3]=.5*r,r=.5/r,e[0]=(t[5]-t[7])*r,e[1]=(t[6]-t[2])*r,e[2]=(t[1]-t[3])*r;else{var i=0;t[4]>t[0]&&(i=1),t[8]>t[i*3+i]&&(i=2);var o=(i+1)%3,a=(i+2)%3;r=Math.sqrt(t[i*3+i]-t[o*3+o]-t[a*3+a]+1),e[i]=.5*r,r=.5/r,e[3]=(t[o*3+a]-t[a*3+o])*r,e[o]=(t[o*3+i]+t[i*3+o])*r,e[a]=(t[a*3+i]+t[i*3+a])*r}return e}function nL(e,t,n,r){var i=.5*Math.PI/180;t*=i,n*=i,r*=i;var o=Math.sin(t),a=Math.cos(t),l=Math.sin(n),s=Math.cos(n),u=Math.sin(r),c=Math.cos(r);return e[0]=o*s*c-a*l*u,e[1]=a*l*c+o*s*u,e[2]=a*s*u-o*l*c,e[3]=a*s*c+o*l*u,e}function rL(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}var iL=Cw,oL=Mw,tp=Ow,aL=Pw,lL=$w,sL=Ww,Kw=Lw,np=Fw,uL=Nw,rp=Jd,cL=rp,ip=ep,fL=ip,op=jw,hL=Dw,dL=Hw,pL=function(){var e=Qd(),t=yh(1,0,0),n=yh(0,1,0);return function(r,i,o){var a=Zd(i,o);return a<-.999999?(Wl(e,t,i),Tw(e)<1e-6&&Wl(e,n,i),Sw(e,e),Bw(r,e,Math.PI),r):a>.999999?(r[0]=0,r[1]=0,r[2]=0,r[3]=1,r):(Wl(e,i,o),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=1+a,op(r,r))}}(),vL=function(){var e=Ls(),t=Ls();return function(n,r,i,o,a,l){return Ul(e,r,a,l),Ul(t,i,o,l),Ul(n,e,t,2*l*(1-l)),n}}(),mL=function(){var e=aw();return function(t,n,r,i){return e[0]=r[0],e[3]=r[1],e[6]=r[2],e[1]=i[0],e[4]=i[1],e[7]=i[2],e[2]=-n[0],e[5]=-n[1],e[8]=-n[2],op(t,qw(t,e))}}();const yL=Object.freeze(Object.defineProperty({__proto__:null,create:Ls,identity:GA,setAxisAngle:Bw,getAxisAngle:qA,getAngle:KA,multiply:Ww,rotateX:Uw,rotateY:Vw,rotateZ:Yw,calculateW:QA,exp:Xw,ln:Gw,pow:ZA,slerp:Ul,random:JA,invert:eL,conjugate:tL,fromMat3:qw,fromEuler:nL,str:rL,clone:iL,fromValues:oL,copy:tp,set:aL,add:lL,mul:sL,scale:Kw,dot:np,lerp:uL,length:rp,len:cL,squaredLength:ip,sqrLen:fL,normalize:op,exactEquals:hL,equals:dL,rotationTo:pL,sqlerp:vL,setAxes:mL},Symbol.toStringTag,{value:"Module"}));function gL(){var e=new ae(8);return ae!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0),e[3]=1,e}function _L(e){var t=new ae(8);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t}function wL(e,t,n,r,i,o,a,l){var s=new ae(8);return s[0]=e,s[1]=t,s[2]=n,s[3]=r,s[4]=i,s[5]=o,s[6]=a,s[7]=l,s}function xL(e,t,n,r,i,o,a){var l=new ae(8);l[0]=e,l[1]=t,l[2]=n,l[3]=r;var s=i*.5,u=o*.5,c=a*.5;return l[4]=s*r+u*n-c*t,l[5]=u*r+c*e-s*n,l[6]=c*r+s*t-u*e,l[7]=-s*e-u*t-c*n,l}function Qw(e,t,n){var r=n[0]*.5,i=n[1]*.5,o=n[2]*.5,a=t[0],l=t[1],s=t[2],u=t[3];return e[0]=a,e[1]=l,e[2]=s,e[3]=u,e[4]=r*u+i*s-o*l,e[5]=i*u+o*a-r*s,e[6]=o*u+r*l-i*a,e[7]=-r*a-i*l-o*s,e}function bL(e,t){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=t[0]*.5,e[5]=t[1]*.5,e[6]=t[2]*.5,e[7]=0,e}function SL(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function TL(e,t){var n=Ls();pw(n,t);var r=new ae(3);return hw(r,t),Qw(e,n,r),e}function Zw(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e}function EL(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e}function CL(e,t,n,r,i,o,a,l,s){return e[0]=t,e[1]=n,e[2]=r,e[3]=i,e[4]=o,e[5]=a,e[6]=l,e[7]=s,e}var ML=tp;function OL(e,t){return e[0]=t[4],e[1]=t[5],e[2]=t[6],e[3]=t[7],e}var PL=tp;function $L(e,t){return e[4]=t[0],e[5]=t[1],e[6]=t[2],e[7]=t[3],e}function kL(e,t){var n=t[4],r=t[5],i=t[6],o=t[7],a=-t[0],l=-t[1],s=-t[2],u=t[3];return e[0]=(n*u+o*a+r*s-i*l)*2,e[1]=(r*u+o*l+i*a-n*s)*2,e[2]=(i*u+o*s+n*l-r*a)*2,e}function zL(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[0]*.5,s=n[1]*.5,u=n[2]*.5,c=t[4],f=t[5],h=t[6],d=t[7];return e[0]=r,e[1]=i,e[2]=o,e[3]=a,e[4]=a*l+i*u-o*s+c,e[5]=a*s+o*l-r*u+f,e[6]=a*u+r*s-i*l+h,e[7]=-r*l-i*s-o*u+d,e}function AL(e,t,n){var r=-t[0],i=-t[1],o=-t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=l*a+c*r+s*o-u*i,h=s*a+c*i+u*r-l*o,d=u*a+c*o+l*i-s*r,p=c*a-l*r-s*i-u*o;return Uw(e,t,n),r=e[0],i=e[1],o=e[2],a=e[3],e[4]=f*a+p*r+h*o-d*i,e[5]=h*a+p*i+d*r-f*o,e[6]=d*a+p*o+f*i-h*r,e[7]=p*a-f*r-h*i-d*o,e}function LL(e,t,n){var r=-t[0],i=-t[1],o=-t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=l*a+c*r+s*o-u*i,h=s*a+c*i+u*r-l*o,d=u*a+c*o+l*i-s*r,p=c*a-l*r-s*i-u*o;return Vw(e,t,n),r=e[0],i=e[1],o=e[2],a=e[3],e[4]=f*a+p*r+h*o-d*i,e[5]=h*a+p*i+d*r-f*o,e[6]=d*a+p*o+f*i-h*r,e[7]=p*a-f*r-h*i-d*o,e}function RL(e,t,n){var r=-t[0],i=-t[1],o=-t[2],a=t[3],l=t[4],s=t[5],u=t[6],c=t[7],f=l*a+c*r+s*o-u*i,h=s*a+c*i+u*r-l*o,d=u*a+c*o+l*i-s*r,p=c*a-l*r-s*i-u*o;return Yw(e,t,n),r=e[0],i=e[1],o=e[2],a=e[3],e[4]=f*a+p*r+h*o-d*i,e[5]=h*a+p*i+d*r-f*o,e[6]=d*a+p*o+f*i-h*r,e[7]=p*a-f*r-h*i-d*o,e}function IL(e,t,n){var r=n[0],i=n[1],o=n[2],a=n[3],l=t[0],s=t[1],u=t[2],c=t[3];return e[0]=l*a+c*r+s*o-u*i,e[1]=s*a+c*i+u*r-l*o,e[2]=u*a+c*o+l*i-s*r,e[3]=c*a-l*r-s*i-u*o,l=t[4],s=t[5],u=t[6],c=t[7],e[4]=l*a+c*r+s*o-u*i,e[5]=s*a+c*i+u*r-l*o,e[6]=u*a+c*o+l*i-s*r,e[7]=c*a-l*r-s*i-u*o,e}function jL(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[0],s=n[1],u=n[2],c=n[3];return e[0]=r*c+a*l+i*u-o*s,e[1]=i*c+a*s+o*l-r*u,e[2]=o*c+a*u+r*s-i*l,e[3]=a*c-r*l-i*s-o*u,l=n[4],s=n[5],u=n[6],c=n[7],e[4]=r*c+a*l+i*u-o*s,e[5]=i*c+a*s+o*l-r*u,e[6]=o*c+a*u+r*s-i*l,e[7]=a*c-r*l-i*s-o*u,e}function FL(e,t,n,r){if(Math.abs(r)<Y)return Zw(e,t);var i=Math.hypot(n[0],n[1],n[2]);r=r*.5;var o=Math.sin(r),a=o*n[0]/i,l=o*n[1]/i,s=o*n[2]/i,u=Math.cos(r),c=t[0],f=t[1],h=t[2],d=t[3];e[0]=c*u+d*a+f*s-h*l,e[1]=f*u+d*l+h*a-c*s,e[2]=h*u+d*s+c*l-f*a,e[3]=d*u-c*a-f*l-h*s;var p=t[4],g=t[5],_=t[6],m=t[7];return e[4]=p*u+m*a+g*s-_*l,e[5]=g*u+m*l+_*a-p*s,e[6]=_*u+m*s+p*l-g*a,e[7]=m*u-p*a-g*l-_*s,e}function NL(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e[2]=t[2]+n[2],e[3]=t[3]+n[3],e[4]=t[4]+n[4],e[5]=t[5]+n[5],e[6]=t[6]+n[6],e[7]=t[7]+n[7],e}function Jw(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3],l=n[4],s=n[5],u=n[6],c=n[7],f=t[4],h=t[5],d=t[6],p=t[7],g=n[0],_=n[1],m=n[2],v=n[3];return e[0]=r*v+a*g+i*m-o*_,e[1]=i*v+a*_+o*g-r*m,e[2]=o*v+a*m+r*_-i*g,e[3]=a*v-r*g-i*_-o*m,e[4]=r*c+a*l+i*u-o*s+f*v+p*g+h*m-d*_,e[5]=i*c+a*s+o*l-r*u+h*v+p*_+d*g-f*m,e[6]=o*c+a*u+r*s-i*l+d*v+p*m+f*_-h*g,e[7]=a*c-r*l-i*s-o*u+p*v-f*g-h*_-d*m,e}var DL=Jw;function HL(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e[2]=t[2]*n,e[3]=t[3]*n,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e}var e2=np;function BL(e,t,n,r){var i=1-r;return e2(t,n)<0&&(r=-r),e[0]=t[0]*i+n[0]*r,e[1]=t[1]*i+n[1]*r,e[2]=t[2]*i+n[2]*r,e[3]=t[3]*i+n[3]*r,e[4]=t[4]*i+n[4]*r,e[5]=t[5]*i+n[5]*r,e[6]=t[6]*i+n[6]*r,e[7]=t[7]*i+n[7]*r,e}function WL(e,t){var n=$u(t);return e[0]=-t[0]/n,e[1]=-t[1]/n,e[2]=-t[2]/n,e[3]=t[3]/n,e[4]=-t[4]/n,e[5]=-t[5]/n,e[6]=-t[6]/n,e[7]=t[7]/n,e}function UL(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=t[7],e}var t2=rp,VL=t2,$u=ip,YL=$u;function XL(e,t){var n=$u(t);if(n>0){n=Math.sqrt(n);var r=t[0]/n,i=t[1]/n,o=t[2]/n,a=t[3]/n,l=t[4],s=t[5],u=t[6],c=t[7],f=r*l+i*s+o*u+a*c;e[0]=r,e[1]=i,e[2]=o,e[3]=a,e[4]=(l-r*f)/n,e[5]=(s-i*f)/n,e[6]=(u-o*f)/n,e[7]=(c-a*f)/n}return e}function GL(e){return"quat2("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+", "+e[4]+", "+e[5]+", "+e[6]+", "+e[7]+")"}function qL(e,t){return e[0]===t[0]&&e[1]===t[1]&&e[2]===t[2]&&e[3]===t[3]&&e[4]===t[4]&&e[5]===t[5]&&e[6]===t[6]&&e[7]===t[7]}function KL(e,t){var n=e[0],r=e[1],i=e[2],o=e[3],a=e[4],l=e[5],s=e[6],u=e[7],c=t[0],f=t[1],h=t[2],d=t[3],p=t[4],g=t[5],_=t[6],m=t[7];return Math.abs(n-c)<=Y*Math.max(1,Math.abs(n),Math.abs(c))&&Math.abs(r-f)<=Y*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(i-h)<=Y*Math.max(1,Math.abs(i),Math.abs(h))&&Math.abs(o-d)<=Y*Math.max(1,Math.abs(o),Math.abs(d))&&Math.abs(a-p)<=Y*Math.max(1,Math.abs(a),Math.abs(p))&&Math.abs(l-g)<=Y*Math.max(1,Math.abs(l),Math.abs(g))&&Math.abs(s-_)<=Y*Math.max(1,Math.abs(s),Math.abs(_))&&Math.abs(u-m)<=Y*Math.max(1,Math.abs(u),Math.abs(m))}const QL=Object.freeze(Object.defineProperty({__proto__:null,create:gL,clone:_L,fromValues:wL,fromRotationTranslationValues:xL,fromRotationTranslation:Qw,fromTranslation:bL,fromRotation:SL,fromMat4:TL,copy:Zw,identity:EL,set:CL,getReal:ML,getDual:OL,setReal:PL,setDual:$L,getTranslation:kL,translate:zL,rotateX:AL,rotateY:LL,rotateZ:RL,rotateByQuatAppend:IL,rotateByQuatPrepend:jL,rotateAroundAxis:FL,add:NL,multiply:Jw,mul:DL,scale:HL,dot:e2,lerp:BL,invert:WL,conjugate:UL,length:t2,len:VL,squaredLength:$u,sqrLen:YL,normalize:XL,str:GL,exactEquals:qL,equals:KL},Symbol.toStringTag,{value:"Module"}));function n2(){var e=new ae(2);return ae!=Float32Array&&(e[0]=0,e[1]=0),e}function ZL(e){var t=new ae(2);return t[0]=e[0],t[1]=e[1],t}function JL(e,t){var n=new ae(2);return n[0]=e,n[1]=t,n}function eR(e,t){return e[0]=t[0],e[1]=t[1],e}function tR(e,t,n){return e[0]=t,e[1]=n,e}function nR(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e}function r2(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e}function i2(e,t,n){return e[0]=t[0]*n[0],e[1]=t[1]*n[1],e}function o2(e,t,n){return e[0]=t[0]/n[0],e[1]=t[1]/n[1],e}function rR(e,t){return e[0]=Math.ceil(t[0]),e[1]=Math.ceil(t[1]),e}function iR(e,t){return e[0]=Math.floor(t[0]),e[1]=Math.floor(t[1]),e}function oR(e,t,n){return e[0]=Math.min(t[0],n[0]),e[1]=Math.min(t[1],n[1]),e}function aR(e,t,n){return e[0]=Math.max(t[0],n[0]),e[1]=Math.max(t[1],n[1]),e}function lR(e,t){return e[0]=Math.round(t[0]),e[1]=Math.round(t[1]),e}function sR(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e}function uR(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e}function a2(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.hypot(n,r)}function l2(e,t){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function s2(e){var t=e[0],n=e[1];return Math.hypot(t,n)}function u2(e){var t=e[0],n=e[1];return t*t+n*n}function cR(e,t){return e[0]=-t[0],e[1]=-t[1],e}function fR(e,t){return e[0]=1/t[0],e[1]=1/t[1],e}function hR(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i)),e[0]=t[0]*i,e[1]=t[1]*i,e}function dR(e,t){return e[0]*t[0]+e[1]*t[1]}function pR(e,t,n){var r=t[0]*n[1]-t[1]*n[0];return e[0]=e[1]=0,e[2]=r,e}function vR(e,t,n,r){var i=t[0],o=t[1];return e[0]=i+r*(n[0]-i),e[1]=o+r*(n[1]-o),e}function mR(e,t){t=t||1;var n=rn()*2*Math.PI;return e[0]=Math.cos(n)*t,e[1]=Math.sin(n)*t,e}function yR(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i,e[1]=n[1]*r+n[3]*i,e}function gR(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[2]*i+n[4],e[1]=n[1]*r+n[3]*i+n[5],e}function _R(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[3]*i+n[6],e[1]=n[1]*r+n[4]*i+n[7],e}function wR(e,t,n){var r=t[0],i=t[1];return e[0]=n[0]*r+n[4]*i+n[12],e[1]=n[1]*r+n[5]*i+n[13],e}function xR(e,t,n,r){var i=t[0]-n[0],o=t[1]-n[1],a=Math.sin(r),l=Math.cos(r);return e[0]=i*l-o*a+n[0],e[1]=i*a+o*l+n[1],e}function bR(e,t){var n=e[0],r=e[1],i=t[0],o=t[1],a=Math.sqrt(n*n+r*r)*Math.sqrt(i*i+o*o),l=a&&(n*i+r*o)/a;return Math.acos(Math.min(Math.max(l,-1),1))}function SR(e){return e[0]=0,e[1]=0,e}function TR(e){return"vec2("+e[0]+", "+e[1]+")"}function ER(e,t){return e[0]===t[0]&&e[1]===t[1]}function CR(e,t){var n=e[0],r=e[1],i=t[0],o=t[1];return Math.abs(n-i)<=Y*Math.max(1,Math.abs(n),Math.abs(i))&&Math.abs(r-o)<=Y*Math.max(1,Math.abs(r),Math.abs(o))}var MR=s2,OR=r2,PR=i2,$R=o2,kR=a2,zR=l2,AR=u2,LR=function(){var e=n2();return function(t,n,r,i,o,a){var l,s;for(n||(n=2),r||(r=0),i?s=Math.min(i*n+r,t.length):s=t.length,l=r;l<s;l+=n)e[0]=t[l],e[1]=t[l+1],o(e,e,a),t[l]=e[0],t[l+1]=e[1];return t}}();const RR=Object.freeze(Object.defineProperty({__proto__:null,create:n2,clone:ZL,fromValues:JL,copy:eR,set:tR,add:nR,subtract:r2,multiply:i2,divide:o2,ceil:rR,floor:iR,min:oR,max:aR,round:lR,scale:sR,scaleAndAdd:uR,distance:a2,squaredDistance:l2,length:s2,squaredLength:u2,negate:cR,inverse:fR,normalize:hR,dot:dR,cross:pR,lerp:vR,random:mR,transformMat2:yR,transformMat2d:gR,transformMat3:_R,transformMat4:wR,rotate:xR,angle:bR,zero:SR,str:TR,exactEquals:ER,equals:CR,len:MR,sub:OR,mul:PR,div:$R,dist:kR,sqrDist:zR,sqrLen:AR,forEach:LR},Symbol.toStringTag,{value:"Module"})),IR=Object.freeze(Object.defineProperty({__proto__:null,glMatrix:$$,mat2:tk,mat2d:Ek,mat3:tz,mat4:Bz,quat:yL,quat2:QL,vec2:RR,vec3:TA,vec4:XA},Symbol.toStringTag,{value:"Module"})),ut=Ex(IR);function jR(e,t,n){return Math.min(Math.max(e,t),n)}var xo=jR,FR=256,Jm=256,Cl=xo,NR=ut.vec4,Rs=ut.vec3,Gi=ut.mat4;function e1(e,t,n){var r=e.createShader(t);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r}function DR(e,t,n,r,i){var o=e1(e,e.VERTEX_SHADER,t),a=e1(e,e.FRAGMENT_SHADER,n),l=e.createProgram();if(e.attachShader(l,o),e.attachShader(l,a),e.linkProgram(l),!e.getProgramParameter(l,e.LINK_STATUS))throw e.getProgramInfoLog(l);for(var s=0;s<r.length;s++){var u=r[s];if(l[u]=e.getAttribLocation(l,u),l[u]===-1)throw new Error("Shader program has no "+u+" attribute")}for(var c=0;c<i.length;c++){var f=i[c];if(l[f]=e.getUniformLocation(l,f),l[f]===-1)throw new Error("Shader program has no "+f+" uniform")}return l}function HR(e,t){for(var n=e.getAttachedShaders(t),r=0;r<n.length;r++){var i=n[r];e.detachShader(t,i),e.deleteShader(i)}e.deleteProgram(t)}function Lc(e,t,n,r){var i=e.createBuffer();return e.bindBuffer(t,i),e.bufferData(t,r,n),i}function BR(e,t,n,r){return{vertexIndices:Lc(e,e.ELEMENT_ARRAY_BUFFER,e.STATIC_DRAW,new Uint16Array(t)),vertexPositions:Lc(e,e.ARRAY_BUFFER,e.STATIC_DRAW,new Float32Array(n)),textureCoords:Lc(e,e.ARRAY_BUFFER,e.STATIC_DRAW,new Float32Array(r))}}function WR(e,t){e.deleteBuffer(t.vertexIndices),e.deleteBuffer(t.vertexPositions),e.deleteBuffer(t.textureCoords)}function UR(e,t){for(var n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),r=0;r<n;r++)e.enableVertexAttribArray(r)}function VR(e,t){for(var n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES),r=0;r<n;r++)e.disableVertexAttribArray(r)}function YR(e,t,n){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n._texture),e.uniform1i(t.uSampler,0)}function XR(e,t,n,r){var i=((n+1)*Jm-r)/(Jm*FR);e.uniform1f(t.uDepth,i)}var GR=1,qR=NR.create(),c2=Gi.create();Gi.identity(c2);function KR(e,t,n){var r=GR;t&&t.opacity!=null&&(r=t.opacity),e.uniform1f(n.opacity,r);var i=qR;t&&t.colorOffset&&(i=t.colorOffset),e.uniform4fv(n.colorOffset,i);var o=c2;t&&t.colorMatrix&&(o=t.colorMatrix),e.uniformMatrix4fv(n.colorMatrix,!1,o)}var t1=Rs.create(),n1=Rs.create();function QR(e,t,n,r){if(n.x===0&&n.width===1&&n.y===0&&n.height===1){e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),Gi.identity(r);return}var i=n.x,o=Cl(i,0,1),a=o-i,l=1-o,s=Cl(n.width-a,0,l),u=n.width-s,c=1-n.height-n.y,f=Cl(c,0,1),h=f-c,d=1-f,p=Cl(n.height-h,0,d),g=n.height-p;Rs.set(n1,n.width/s,n.height/p,1),Rs.set(t1,(u-a)/s,(g-h)/p,0),Gi.identity(r),Gi.translate(r,r,t1),Gi.scale(r,r,n1),e.viewport(e.drawingBufferWidth*o,e.drawingBufferHeight*f,e.drawingBufferWidth*s,e.drawingBufferHeight*p)}var f2={createShaderProgram:DR,destroyShaderProgram:HR,createConstantBuffers:BR,destroyConstantBuffers:WR,enableAttributes:UR,disableAttributes:VR,setTexture:YR,setDepth:XR,setViewport:QR,setupPixelEffectUniforms:KR},ZR=["attribute vec3 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uProjMatrix;","varying vec2 vTextureCoord;","void main(void) {","  gl_Position = uViewportMatrix * uProjMatrix * vec4(aVertexPosition.xy, 0.0, 1.0);","  gl_Position.z = uDepth * gl_Position.w;","  vTextureCoord = aTextureCoord;","}"].join(`
`),JR=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float;","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec2 vTextureCoord;","void main(void) {","  vec4 color = texture2D(uSampler, vTextureCoord) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join(`
`),Vr=ut.mat4,r1=ut.vec3,eI=Ee,Sn=f2,tI=Sn.createConstantBuffers,nI=Sn.destroyConstantBuffers,rI=Sn.createShaderProgram,iI=Sn.destroyShaderProgram,oI=Sn.enableAttributes,aI=Sn.disableAttributes,lI=Sn.setViewport,sI=Sn.setupPixelEffectUniforms,uI=Sn.setDepth,cI=Sn.setTexture,fI=ZR,hI=JR,h2=[0,1,2,0,2,3],dI=[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],pI=[0,0,1,0,1,1,0,1],vI=["aVertexPosition","aTextureCoord"],mI=["uDepth","uOpacity","uSampler","uProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix"];function Ba(e){this.gl=e,this.projMatrix=Vr.create(),this.viewportMatrix=Vr.create(),this.translateVector=r1.create(),this.scaleVector=r1.create(),this.constantBuffers=tI(e,h2,dI,pI),this.shaderProgram=rI(e,fI,hI,vI,mI)}Ba.prototype.destroy=function(){nI(this.gl,this.constantBuffers),iI(this.gl,this.shaderProgram),eI(this)};Ba.prototype.startLayer=function(e,t){var n=this.gl,r=this.shaderProgram,i=this.constantBuffers,o=this.viewportMatrix;n.useProgram(r),oI(n,r),lI(n,e,t,o),n.uniformMatrix4fv(r.uViewportMatrix,!1,o),n.bindBuffer(n.ARRAY_BUFFER,i.vertexPositions),n.vertexAttribPointer(r.aVertexPosition,3,n.FLOAT,n.FALSE,0,0),n.bindBuffer(n.ARRAY_BUFFER,i.textureCoords),n.vertexAttribPointer(r.aTextureCoord,2,n.FLOAT,n.FALSE,0,0),sI(n,e.effects(),{opacity:r.uOpacity,colorOffset:r.uColorOffset,colorMatrix:r.uColorMatrix})};Ba.prototype.endLayer=function(e,t){var n=this.gl,r=this.shaderProgram;aI(n,r)};Ba.prototype.renderTile=function(e,t,n,r){var i=this.gl,o=this.shaderProgram,a=this.constantBuffers,l=this.projMatrix,s=this.translateVector,u=this.scaleVector;s[0]=e.centerX(),s[1]=e.centerY(),s[2]=-.5,u[0]=e.scaleX(),u[1]=e.scaleY(),u[2]=1,Vr.copy(l,n.view().projection()),Vr.rotateX(l,l,e.rotX()),Vr.rotateY(l,l,e.rotY()),Vr.translate(l,l,s),Vr.scale(l,l,u),i.uniformMatrix4fv(o.uProjMatrix,!1,l),uI(i,o,r,e.z),cI(i,o,t),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,a.vertexIndices),i.drawElements(i.TRIANGLES,h2.length,i.UNSIGNED_SHORT,0)};var d2=Ba,yI=d2,gI=bn;function p2(){this.constructor.super_.apply(this,arguments)}gI(p2,yI);var v2=p2,_I=d2,wI=bn;function m2(){this.constructor.super_.apply(this,arguments)}wI(m2,_I);var y2=m2,xI=["attribute vec3 aVertexPosition;","uniform float uDepth;","uniform mat4 uViewportMatrix;","uniform mat4 uInvProjMatrix;","varying vec4 vRay;","void main(void) {","  vRay = uInvProjMatrix * vec4(aVertexPosition.xy, 1.0, 1.0);","  gl_Position = uViewportMatrix * vec4(aVertexPosition.xy, uDepth, 1.0);","}"].join(`
`),bI=["#ifdef GL_FRAGMENT_PRECISION_HIGH","precision highp float;","#else","precision mediump float","#endif","uniform sampler2D uSampler;","uniform float uOpacity;","uniform float uTextureX;","uniform float uTextureY;","uniform float uTextureWidth;","uniform float uTextureHeight;","uniform vec4 uColorOffset;","uniform mat4 uColorMatrix;","varying vec4 vRay;","const float PI = 3.14159265358979323846264;","void main(void) {","  float r = inversesqrt(vRay.x * vRay.x + vRay.y * vRay.y + vRay.z * vRay.z);","  float phi  = acos(vRay.y * r);","  float theta = atan(vRay.x, -1.0*vRay.z);","  float s = 0.5 + 0.5 * theta / PI;","  float t = 1.0 - phi / PI;","  s = s * uTextureWidth + uTextureX;","  t = t * uTextureHeight + uTextureY;","  vec4 color = texture2D(uSampler, vec2(s, t)) * uColorMatrix + uColorOffset;","  gl_FragColor = vec4(color.rgba * uOpacity);","}"].join(`
`),Is=ut.mat4,SI=Ee,Tn=f2,TI=Tn.createConstantBuffers,EI=Tn.destroyConstantBuffers,CI=Tn.createShaderProgram,MI=Tn.destroyShaderProgram,OI=Tn.enableAttributes,PI=Tn.disableAttributes,$I=Tn.setViewport,kI=Tn.setupPixelEffectUniforms,zI=Tn.setDepth,AI=Tn.setTexture,LI=xI,RI=bI,g2=[0,1,2,0,2,3],II=[-1,-1,0,1,-1,0,1,1,0,-1,1,0],jI=[0,0,1,0,1,1,0,1],FI=["aVertexPosition"],NI=["uDepth","uOpacity","uSampler","uInvProjMatrix","uViewportMatrix","uColorOffset","uColorMatrix","uTextureX","uTextureY","uTextureWidth","uTextureHeight"];function Wa(e){this.gl=e,this.invProjMatrix=Is.create(),this.viewportMatrix=Is.create(),this.constantBuffers=TI(e,g2,II,jI),this.shaderProgram=CI(e,LI,RI,FI,NI)}Wa.prototype.destroy=function(){EI(this.gl,this.constantBuffers),MI(this.gl,this.shaderProgram),SI(this)};Wa.prototype.startLayer=function(e,t){var n=this.gl,r=this.shaderProgram,i=this.constantBuffers,o=this.invProjMatrix,a=this.viewportMatrix;n.useProgram(r),OI(n,r),$I(n,e,t,a),n.uniformMatrix4fv(r.uViewportMatrix,!1,a),n.bindBuffer(n.ARRAY_BUFFER,i.vertexPositions),n.vertexAttribPointer(r.aVertexPosition,3,n.FLOAT,n.FALSE,0,0),n.bindBuffer(n.ARRAY_BUFFER,i.textureCoords),Is.copy(o,e.view().projection()),Is.invert(o,o),n.uniformMatrix4fv(r.uInvProjMatrix,!1,o);var l=e.effects().textureCrop||{},s=l.x!=null?l.x:0,u=l.y!=null?l.y:0,c=l.width!=null?l.width:1,f=l.height!=null?l.height:1;n.uniform1f(r.uTextureX,s),n.uniform1f(r.uTextureY,u),n.uniform1f(r.uTextureWidth,c),n.uniform1f(r.uTextureHeight,f),kI(n,e.effects(),{opacity:r.uOpacity,colorOffset:r.uColorOffset,colorMatrix:r.uColorMatrix})};Wa.prototype.endLayer=function(e,t){var n=this.gl,r=this.shaderProgram;PI(n,r)};Wa.prototype.renderTile=function(e,t,n,r){var i=this.gl,o=this.shaderProgram,a=this.constantBuffers;zI(i,o,r,e.z),AI(i,o,t),i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,a.vertexIndices),i.drawElements(i.TRIANGLES,g2.length,i.UNSIGNED_SHORT,0)};var _2=Wa,DI=v2,HI=y2,BI=_2;function WI(e){switch(e.type){case"webgl":e.registerRenderer("flat","flat",HI),e.registerRenderer("cube","rectilinear",DI),e.registerRenderer("equirect","rectilinear",BI);break;default:throw new Error("Unknown stage type: "+e.type)}}var w2=WI;function UI(){for(var e=0,t=0;t<arguments.length;t++){var n=arguments[t];e+=n,e+=n<<10,e^=n>>6}return e+=e<<3,e^=e>>11,e+=e<<15,e>=0?e:-e}var ku=UI;function VI(e,t){return(+e%(t=+t)+t)%t}var Ar=VI,ap=Ar,YI=64;function gi(e){if(e!=null&&(!isFinite(e)||Math.floor(e)!==e||e<1))throw new Error("Set: invalid capacity");this._capacity=this._capacity||YI,this._buckets=[];for(var t=0;t<this._capacity;t++)this._buckets.push([]);this._size=0}gi.prototype.add=function(e){for(var t=ap(e.hash(),this._capacity),n=this._buckets[t],r=0;r<n.length;r++){var i=n[r];if(e.equals(i))return n[r]=e,i}return n.push(e),this._size++,null};gi.prototype.remove=function(e){for(var t=ap(e.hash(),this._capacity),n=this._buckets[t],r=0;r<n.length;r++){var i=n[r];if(e.equals(i)){for(var o=r;o<n.length-1;o++)n[o]=n[o+1];return n.length=n.length-1,this._size--,i}}return null};gi.prototype.has=function(e){for(var t=ap(e.hash(),this._capacity),n=this._buckets[t],r=0;r<n.length;r++){var i=n[r];if(e.equals(i))return!0}return!1};gi.prototype.size=function(){return this._size};gi.prototype.clear=function(){for(var e=0;e<this._capacity;e++)this._buckets[e].length=0;this._size=0};gi.prototype.forEach=function(e){for(var t=0,n=0;n<this._capacity;n++)for(var r=this._buckets[n],i=0;i<r.length;i++)e(r[i]),t+=1;return t};var x2=gi,XI=x2;function lp(){this._stack=[],this._visited=new XI,this._vertices=null}lp.prototype.search=function(e,t,n){var r=this._stack,i=this._visited,o=this._vertices,a=0;for(this._clear(),r.push(t);r.length>0;){var l=r.pop();if(!i.has(l)&&e.intersects(l.vertices(o))){i.add(l);for(var s=l.neighbors(),u=0;u<s.length;u++)r.push(s[u]);n.push(l),a++}}return this._vertices=o,this._clear(),a};lp.prototype._clear=function(){this._stack.length=0,this._visited.clear()};var b2=lp,GI=Ar;function qn(e){if(!isFinite(e)||Math.floor(e)!==e||e<0)throw new Error("LruMap: invalid capacity");this._capacity=e,this._keys=new Array(this._capacity),this._values=new Array(this._capacity),this._start=0,this._size=0}qn.prototype._index=function(e){return GI(this._start+e,this._capacity)};qn.prototype.get=function(e){for(var t=0;t<this._size;t++){var n=this._keys[this._index(t)];if(e.equals(n))return this._values[this._index(t)]}return null};qn.prototype.set=function(e,t){if(this._capacity===0)return e;this.del(e);var n=this._size===this._capacity?this._keys[this._index(0)]:null;return this._keys[this._index(this._size)]=e,this._values[this._index(this._size)]=t,this._size<this._capacity?this._size++:this._start=this._index(1),n};qn.prototype.del=function(e){for(var t=0;t<this._size;t++)if(e.equals(this._keys[this._index(t)])){for(var n=this._values[this._index(t)],r=t;r<this._size-1;r++)this._keys[this._index(r)]=this._keys[this._index(r+1)],this._values[this._index(r)]=this._values[this._index(r+1)];return this._size--,n}return null};qn.prototype.has=function(e){for(var t=0;t<this._size;t++)if(e.equals(this._keys[this._index(t)]))return!0;return!1};qn.prototype.size=function(){return this._size};qn.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._start=0,this._size=0};qn.prototype.forEach=function(e){for(var t=0,n=0;n<this._size;n++)e(this._keys[this._index(n)],this._values[this._index(n)]),t+=1;return t};var S2=qn;function zu(e){this._fallbackOnly=!!e.fallbackOnly}zu.prototype.numHorizontalTiles=function(){return Math.ceil(this.width()/this.tileWidth())};zu.prototype.numVerticalTiles=function(){return Math.ceil(this.height()/this.tileHeight())};zu.prototype.fallbackOnly=function(){return this._fallbackOnly};var sp=zu;function qI(e,t){return e<t?-1:e>t?1:0}var Ua=qI,KI=Ua;function QI(e,t){for(var n=[],r=0;r<e.length;r++)n.push(new t(e[r]));return n.sort(function(i,o){return KI(i.width(),o.width())}),n}function ZI(e){for(var t=[],n=0;n<e.length;n++)e[n]._fallbackOnly||t.push(e[n]);if(!t.length)throw new Error("No selectable levels in list");return t}var Va={makeLevelList:QI,makeSelectableLevelList:ZI};function JI(e){var t=typeof e;if(t==="object"){if(e===null)return"null";if(Object.prototype.toString.call(e)==="[object Array]")return"array";if(Object.prototype.toString.call(e)==="[object RegExp]")return"regexp"}return t}var Ya=JI,e6=bn,t6=ku,n6=b2,r6=S2,i6=sp,o6=Va.makeLevelList,a6=Va.makeSelectableLevelList,js=xo,Ml=Ua,l6=Ya,yt=ut.vec3,gh=ut.vec4,s6=64,si="fudlrb",ui={f:{x:0,y:0},b:{x:0,y:Math.PI},l:{x:0,y:Math.PI/2},r:{x:0,y:-Math.PI/2},u:{x:Math.PI/2,y:0},d:{x:-Math.PI/2,y:0}},Rc=yt.create();function Oa(e,t,n,r){t&&yt.rotateZ(e,e,Rc,t),n&&yt.rotateX(e,e,Rc,n),r&&yt.rotateY(e,e,Rc,r)}var _h={};for(var Ic=0;Ic<si.length;Ic++){var i1=si[Ic],o1=ui[i1],a1=yt.fromValues(0,0,-1);Oa(a1,0,o1.x,o1.y),_h[i1]=a1}var Ol={f:["l","r","u","d"],b:["r","l","u","d"],l:["b","f","u","d"],r:["f","b","u","d"],u:["l","r","b","f"],d:["l","r","f","b"]},jc=[[0,1],[1,0],[0,-1],[-1,0]];function De(e,t,n,r,i){this.face=e,this.x=t,this.y=n,this.z=r,this._geometry=i,this._level=i.levelList[r]}De.prototype.rotX=function(){return ui[this.face].x};De.prototype.rotY=function(){return ui[this.face].y};De.prototype.centerX=function(){return(this.x+.5)/this._level.numHorizontalTiles()-.5};De.prototype.centerY=function(){return .5-(this.y+.5)/this._level.numVerticalTiles()};De.prototype.scaleX=function(){return 1/this._level.numHorizontalTiles()};De.prototype.scaleY=function(){return 1/this._level.numVerticalTiles()};De.prototype.vertices=function(e){e||(e=[yt.create(),yt.create(),yt.create(),yt.create()]);var t=ui[this.face];function n(l,s,u){yt.set(l,s,u,-.5),Oa(l,0,t.x,t.y)}var r=this.centerX()-this.scaleX()/2,i=this.centerX()+this.scaleX()/2,o=this.centerY()-this.scaleY()/2,a=this.centerY()+this.scaleY()/2;return n(e[0],r,a),n(e[1],i,a),n(e[2],i,o),n(e[3],r,o),e};De.prototype.parent=function(){if(this.z===0)return null;var e=this.face,t=this.z,n=this.x,r=this.y,i=this._geometry,o=i.levelList[t],a=i.levelList[t-1],l=Math.floor(n/o.numHorizontalTiles()*a.numHorizontalTiles()),s=Math.floor(r/o.numVerticalTiles()*a.numVerticalTiles()),u=t-1;return new De(e,l,s,u,i)};De.prototype.children=function(e){if(this.z===this._geometry.levelList.length-1)return null;var t=this.face,n=this.z,r=this.x,i=this.y,o=this._geometry,a=o.levelList[n],l=o.levelList[n+1],s=l.numHorizontalTiles()/a.numHorizontalTiles(),u=l.numVerticalTiles()/a.numVerticalTiles();e=e||[];for(var c=0;c<s;c++)for(var f=0;f<u;f++){var h=s*r+c,d=u*i+f,p=n+1;e.push(new De(t,h,d,p,o))}return e};De.prototype.neighbors=function(){var e=this._geometry,t=e._neighborsCache,n=t.get(this);if(n)return n;for(var r=e._vec,i=this.face,o=this.x,a=this.y,l=this.z,s=this._level,u=s.numHorizontalTiles(),c=s.numVerticalTiles(),f=[],h=0;h<jc.length;h++){var d=jc[h][0],p=jc[h][1],g=o+d,_=a+p,m=l,v=i;if(g<0||g>=u||_<0||_>=c){var w=this.centerX(),b=this.centerY();g<0?(yt.set(r,-.5,b,-.5),v=Ol[i][0]):g>=u?(yt.set(r,.5,b,-.5),v=Ol[i][1]):_<0?(yt.set(r,w,.5,-.5),v=Ol[i][2]):_>=c&&(yt.set(r,w,-.5,-.5),v=Ol[i][3]);var S;S=ui[i],Oa(r,0,S.x,S.y),S=ui[v],Oa(r,0,-S.x,-S.y),g=js(Math.floor((.5+r[0])*u),0,u-1),_=js(Math.floor((.5-r[1])*c),0,c-1)}f.push(new De(v,g,_,m,e))}return t.set(this,f),f};De.prototype.hash=function(){return t6(si.indexOf(this.face),this.z,this.y,this.x)};De.prototype.equals=function(e){return this._geometry===e._geometry&&this.face===e.face&&this.z===e.z&&this.y===e.y&&this.x===e.x};De.prototype.cmp=function(e){return Ml(this.z,e.z)||Ml(si.indexOf(this.face),si.indexOf(e.face))||Ml(this.y,e.y)||Ml(this.x,e.x)};De.prototype.str=function(){return"CubeTile("+tile.face+", "+tile.x+", "+tile.y+", "+tile.z+")"};function _i(e){if(this.constructor.super_.call(this,e),this._size=e.size,this._tileSize=e.tileSize,this._size%this._tileSize!==0)throw new Error("Level size is not multiple of tile size: "+this._size+" "+this._tileSize)}e6(_i,i6);_i.prototype.width=function(){return this._size};_i.prototype.height=function(){return this._size};_i.prototype.tileWidth=function(){return this._tileSize};_i.prototype.tileHeight=function(){return this._tileSize};_i.prototype._validateWithParentLevel=function(e){var t=this.width(),n=this.height(),r=this.tileWidth(),i=this.tileHeight(),o=this.numHorizontalTiles(),a=this.numVerticalTiles(),l=e.width(),s=e.height(),u=e.tileWidth(),c=e.tileHeight(),f=e.numHorizontalTiles(),h=e.numVerticalTiles();if(t%l!==0)throw new Error("Level width must be multiple of parent level: "+t+" vs. "+l);if(n%s!==0)throw new Error("Level height must be multiple of parent level: "+n+" vs. "+s);if(o%f!==0)throw new Error("Number of horizontal tiles must be multiple of parent level: "+o+" ("+t+"/"+r+") vs. "+f+" ("+l+"/"+u+")");if(a%h!==0)throw new Error("Number of vertical tiles must be multiple of parent level: "+a+" ("+n+"/"+i+") vs. "+h+" ("+s+"/"+c+")")};function Bn(e){if(l6(e)!=="array")throw new Error("Level list must be an array");this.levelList=o6(e,_i),this.selectableLevelList=a6(this.levelList);for(var t=1;t<this.levelList.length;t++)this.levelList[t]._validateWithParentLevel(this.levelList[t-1]);this._tileSearcher=new n6,this._neighborsCache=new r6(s6),this._vec=gh.create(),this._viewSize={}}Bn.prototype.maxTileSize=function(){for(var e=0,t=0;t<this.levelList.length;t++){var n=this.levelList[t];e=Math.max(e,n.tileWidth,n.tileHeight)}return e};Bn.prototype.levelTiles=function(e,t){var n=this.levelList.indexOf(e),r=e.numHorizontalTiles()-1,i=e.numVerticalTiles()-1;t=t||[];for(var o=0;o<si.length;o++)for(var a=si[o],l=0;l<=r;l++)for(var s=0;s<=i;s++)t.push(new De(a,l,s,n,this));return t};Bn.prototype._closestTile=function(e,t){var n=this._vec;gh.set(n,0,0,1,1),gh.transformMat4(n,n,e.inverseProjection());var r=1/0,i=null;for(var o in _h){var a=_h[o],l=1-yt.dot(a,n);l<r&&(r=l,i=o)}for(var s=Math.max(Math.abs(n[0]),Math.abs(n[1]),Math.abs(n[2]))/.5,u=0;u<3;u++)n[u]=n[u]/s;var c=ui[i];Oa(n,0,-c.x,-c.y);var f=this.levelList.indexOf(t),h=t.numHorizontalTiles(),d=t.numVerticalTiles(),p=js(Math.floor((.5+n[0])*h),0,h-1),g=js(Math.floor((.5-n[1])*d),0,d-1);return new De(i,p,g,f,this)};Bn.prototype.visibleTiles=function(e,t,n){var r=this._viewSize,i=this._tileSearcher;if(n=n||[],e.size(r),r.width===0||r.height===0)return n;var o=this._closestTile(e,t),a=i.search(e,o,n);if(!a)throw new Error("Starting tile is not visible");return n};Bn.Tile=Bn.prototype.Tile=De;Bn.type=Bn.prototype.type="cube";De.type=De.prototype.type="cube";var u6=Bn,c6=bn,f6=ku,h6=b2,d6=S2,p6=sp,v6=Va.makeLevelList,m6=Va.makeSelectableLevelList,l1=xo,T2=Ar,Fc=Ua,y6=Ya,tr=ut.vec2,wh=ut.vec4,g6=64,Nc=[[0,1],[1,0],[0,-1],[-1,0]];function me(e,t,n,r){this.x=e,this.y=t,this.z=n,this._geometry=r,this._level=r.levelList[n]}me.prototype.rotX=function(){return 0};me.prototype.rotY=function(){return 0};me.prototype.centerX=function(){var e=this._level.width(),t=this._level.tileWidth();return(this.x*t+.5*this.width())/e-.5};me.prototype.centerY=function(){var e=this._level.height(),t=this._level.tileHeight();return .5-(this.y*t+.5*this.height())/e};me.prototype.scaleX=function(){var e=this._level.width();return this.width()/e};me.prototype.scaleY=function(){var e=this._level.height();return this.height()/e};me.prototype.width=function(){var e=this._level.width(),t=this._level.tileWidth();if(this.x===this._level.numHorizontalTiles()-1){var n=T2(e,t);return n||t}else return t};me.prototype.height=function(){var e=this._level.height(),t=this._level.tileHeight();if(this.y===this._level.numVerticalTiles()-1){var n=T2(e,t);return n||t}else return t};me.prototype.levelWidth=function(){return this._level.width()};me.prototype.levelHeight=function(){return this._level.height()};me.prototype.vertices=function(e){e||(e=[tr.create(),tr.create(),tr.create(),tr.create()]);var t=this.centerX()-this.scaleX()/2,n=this.centerX()+this.scaleX()/2,r=this.centerY()-this.scaleY()/2,i=this.centerY()+this.scaleY()/2;return tr.set(e[0],t,i),tr.set(e[1],n,i),tr.set(e[2],n,r),tr.set(e[3],t,r),e};me.prototype.parent=function(){if(this.z===0)return null;var e=this._geometry,t=this.z-1,n=Math.floor(this.x/2),r=Math.floor(this.y/2);return new me(n,r,t,e)};me.prototype.children=function(e){if(this.z===this._geometry.levelList.length-1)return null;var t=this._geometry,n=this.z+1;return e=e||[],e.push(new me(2*this.x,2*this.y,n,t)),e.push(new me(2*this.x,2*this.y+1,n,t)),e.push(new me(2*this.x+1,2*this.y,n,t)),e.push(new me(2*this.x+1,2*this.y+1,n,t)),e};me.prototype.neighbors=function(){var e=this._geometry,t=e._neighborsCache,n=t.get(this);if(n)return n;for(var r=this.x,i=this.y,o=this.z,a=this._level,l=a.numHorizontalTiles()-1,s=a.numVerticalTiles()-1,u=[],c=0;c<Nc.length;c++){var f=Nc[c][0],h=Nc[c][1],d=r+f,p=i+h,g=o;0<=d&&d<=l&&0<=p&&p<=s&&u.push(new me(d,p,g,e))}return t.set(this,u),u};me.prototype.hash=function(){return f6(this.z,this.y,this.x)};me.prototype.equals=function(e){return this._geometry===e._geometry&&this.z===e.z&&this.y===e.y&&this.x===e.x};me.prototype.cmp=function(e){return Fc(this.z,e.z)||Fc(this.y,e.y)||Fc(this.x,e.x)};me.prototype.str=function(){return"FlatTile("+tile.x+", "+tile.y+", "+tile.z+")"};function wi(e){this.constructor.super_.call(this,e),this._width=e.width,this._height=e.height,this._tileWidth=e.tileWidth,this._tileHeight=e.tileHeight}c6(wi,p6);wi.prototype.width=function(){return this._width};wi.prototype.height=function(){return this._height};wi.prototype.tileWidth=function(){return this._tileWidth};wi.prototype.tileHeight=function(){return this._tileHeight};wi.prototype._validateWithParentLevel=function(e){var t=this.width(),n=this.height(),r=this.tileWidth(),i=this.tileHeight(),o=e.width(),a=e.height(),l=e.tileWidth(),s=e.tileHeight();if(t%o!==0)return new Error("Level width must be multiple of parent level: "+t+" vs. "+o);if(n%a!==0)return new Error("Level height must be multiple of parent level: "+n+" vs. "+a);if(r%l!==0)return new Error("Level tile width must be multiple of parent level: "+r+" vs. "+l);if(i%s!==0)return new Error("Level tile height must be multiple of parent level: "+i+" vs. "+s)};function Wn(e){if(y6(e)!=="array")throw new Error("Level list must be an array");this.levelList=v6(e,wi),this.selectableLevelList=m6(this.levelList);for(var t=1;t<this.levelList.length;t++)this.levelList[t]._validateWithParentLevel(this.levelList[t-1]);this._tileSearcher=new h6,this._neighborsCache=new d6(g6),this._vec=wh.create(),this._viewSize={}}Wn.prototype.maxTileSize=function(){for(var e=0,t=0;t<this.levelList.length;t++){var n=this.levelList[t];e=Math.max(e,n.tileWidth,n.tileHeight)}return e};Wn.prototype.levelTiles=function(e,t){var n=this.levelList.indexOf(e),r=e.numHorizontalTiles()-1,i=e.numVerticalTiles()-1;t||(t=[]);for(var o=0;o<=r;o++)for(var a=0;a<=i;a++)t.push(new me(o,a,n,this));return t};Wn.prototype._closestTile=function(e,t){var n=this._vec;wh.set(n,0,0,1,1),wh.transformMat4(n,n,e.inverseProjection());var r=.5+n[0],i=.5-n[1],o=this.levelList.indexOf(t),a=t.width(),l=t.height(),s=t.tileWidth(),u=t.tileHeight(),c=t.numHorizontalTiles(),f=t.numVerticalTiles(),h=l1(Math.floor(r*a/s),0,c-1),d=l1(Math.floor(i*l/u),0,f-1);return new me(h,d,o,this)};Wn.prototype.visibleTiles=function(e,t,n){var r=this._viewSize,i=this._tileSearcher;if(n=n||[],e.size(r),r.width===0||r.height===0)return n;var o=this._closestTile(e,t),a=i.search(e,o,n);if(!a)throw new Error("Starting tile is not visible");return n};Wn.Tile=Wn.prototype.Tile=me;Wn.type=Wn.prototype.type="flat";me.type=me.prototype.type="flat";var _6=Wn,w6=bn,x6=ku,b6=Ua,s1=Va,S6=sp,T6=Ya;function Ue(e,t){this.z=e,this._geometry=t,this._level=t.levelList[e]}Ue.prototype.rotX=function(){return 0};Ue.prototype.rotY=function(){return 0};Ue.prototype.centerX=function(){return .5};Ue.prototype.centerY=function(){return .5};Ue.prototype.scaleX=function(){return 1};Ue.prototype.scaleY=function(){return 1};Ue.prototype.parent=function(){return this.z===0?null:new Ue(this.z-1,this._geometry)};Ue.prototype.children=function(e){return this.z===this._geometry.levelList.length-1?null:(e=e||[],e.push(new Ue(this.z+1,this._geometry)),e)};Ue.prototype.neighbors=function(){return[]};Ue.prototype.hash=function(){return x6(this.z)};Ue.prototype.equals=function(e){return this._geometry===e._geometry&&this.z===e.z};Ue.prototype.cmp=function(e){return b6(this.z,e.z)};Ue.prototype.str=function(){return"EquirectTile("+tile.z+")"};function bo(e){this.constructor.super_.call(this,e),this._width=e.width}w6(bo,S6);bo.prototype.width=function(){return this._width};bo.prototype.height=function(){return this._width/2};bo.prototype.tileWidth=function(){return this._width};bo.prototype.tileHeight=function(){return this._width/2};function Mr(e){if(T6(e)!=="array")throw new Error("Level list must be an array");this.levelList=s1.makeLevelList(e,bo),this.selectableLevelList=s1.makeSelectableLevelList(this.levelList)}Mr.prototype.maxTileSize=function(){for(var e=0,t=0;t<this.levelList.length;t++){var n=this.levelList[t];e=Math.max(e,n.tileWidth,n.tileHeight)}return e};Mr.prototype.levelTiles=function(e,t){var n=this.levelList.indexOf(e);return t=t||[],t.push(new Ue(n,this)),t};Mr.prototype.visibleTiles=function(e,t,n){var r=new Ue(this.levelList.indexOf(t),this);n=n||[],n.length=0,n.push(r)};Mr.Tile=Mr.prototype.Tile=Ue;Mr.type=Mr.prototype.type="equirect";Ue.type=Ue.prototype.type="equirect";var E6=Mr;function xi(e,t,n){return 2*Math.atan(n*Math.tan(e/2)/t)}function C6(e,t,n){return xi(e,t,n)}function M6(e,t,n){return xi(e,t,Math.sqrt(t*t+n*n))}function O6(e,t,n){return xi(e,n,t)}function P6(e,t,n){return xi(e,n,Math.sqrt(t*t+n*n))}function $6(e,t,n){return xi(e,Math.sqrt(t*t+n*n),t)}function k6(e,t,n){return xi(e,Math.sqrt(t*t+n*n),n)}var E2={convert:xi,htov:C6,htod:M6,vtoh:O6,vtod:P6,dtoh:$6,dtov:k6};function z6(e){return typeof e=="number"&&isFinite(e)}var up=z6;function A6(e){return e.toPrecision(15)}var cp=A6;function L6(){var e=arguments;return function(n){for(var r=n,i=0;i<e.length;i++){var o=e[i];r=o.call(null,r)}return r}}var C2=L6,R6=ze,sr=ut.mat4,at=ut.vec4,M2=Pu,Pa=E2,Dc=Ar,nr=up,Br=xo,pn=cp,I6=C2,j6=Ee,F6=0,N6=0,D6=0,H6=0,B6=0,W6=Math.PI/4,U6=0,V6=0,u1=1e-6;function J(e,t){this._yaw=e&&e.yaw!=null?e.yaw:D6,this._pitch=e&&e.pitch!=null?e.pitch:H6,this._roll=e&&e.roll!=null?e.roll:B6,this._fov=e&&e.fov!=null?e.fov:W6,this._width=e&&e.width!=null?e.width:F6,this._height=e&&e.height!=null?e.height:N6,this._projectionCenterX=e&&e.projectionCenterX!=null?e.projectionCenterX:U6,this._projectionCenterY=e&&e.projectionCenterY!=null?e.projectionCenterY:V6,this._limiter=t||null,this._projMatrix=sr.create(),this._invProjMatrix=sr.create(),this._frustum=[at.create(),at.create(),at.create(),at.create(),at.create()],this._projectionChanged=!0,this._params={},this._fovs={},this._tmpVec=at.create(),this._update()}R6(J);J.prototype.destroy=function(){j6(this)};J.prototype.yaw=function(){return this._yaw};J.prototype.pitch=function(){return this._pitch};J.prototype.roll=function(){return this._roll};J.prototype.projectionCenterX=function(){return this._projectionCenterX};J.prototype.projectionCenterY=function(){return this._projectionCenterY};J.prototype.fov=function(){return this._fov};J.prototype.width=function(){return this._width};J.prototype.height=function(){return this._height};J.prototype.size=function(e){return e=e||{},e.width=this._width,e.height=this._height,e};J.prototype.parameters=function(e){return e=e||{},e.yaw=this._yaw,e.pitch=this._pitch,e.roll=this._roll,e.fov=this._fov,e};J.prototype.limiter=function(){return this._limiter};J.prototype.setYaw=function(e){this._resetParams(),this._params.yaw=e,this._update(this._params)};J.prototype.setPitch=function(e){this._resetParams(),this._params.pitch=e,this._update(this._params)};J.prototype.setRoll=function(e){this._resetParams(),this._params.roll=e,this._update(this._params)};J.prototype.setFov=function(e){this._resetParams(),this._params.fov=e,this._update(this._params)};J.prototype.setProjectionCenterX=function(e){this._resetParams(),this._params.projectionCenterX=e,this._update(this._params)};J.prototype.setProjectionCenterY=function(e){this._resetParams(),this._params.projectionCenterY=e,this._update(this._params)};J.prototype.offsetYaw=function(e){this.setYaw(this._yaw+e)};J.prototype.offsetPitch=function(e){this.setPitch(this._pitch+e)};J.prototype.offsetRoll=function(e){this.setRoll(this._roll+e)};J.prototype.offsetFov=function(e){this.setFov(this._fov+e)};J.prototype.setSize=function(e){this._resetParams(),this._params.width=e.width,this._params.height=e.height,this._update(this._params)};J.prototype.setParameters=function(e){this._resetParams(),this._params.yaw=e.yaw,this._params.pitch=e.pitch,this._params.roll=e.roll,this._params.fov=e.fov,this._params.projectionCenterX=e.projectionCenterX,this._params.projectionCenterY=e.projectionCenterY,this._update(this._params)};J.prototype.setLimiter=function(e){this._limiter=e||null,this._update()};J.prototype._resetParams=function(){var e=this._params;e.yaw=null,e.pitch=null,e.roll=null,e.fov=null,e.width=null,e.height=null};J.prototype._update=function(e){e==null&&(this._resetParams(),e=this._params);var t=this._yaw,n=this._pitch,r=this._roll,i=this._fov,o=this._projectionCenterX,a=this._projectionCenterY,l=this._width,s=this._height;if(e.yaw=e.yaw!=null?e.yaw:t,e.pitch=e.pitch!=null?e.pitch:n,e.roll=e.roll!=null?e.roll:r,e.fov=e.fov!=null?e.fov:i,e.width=e.width!=null?e.width:l,e.height=e.height!=null?e.height:s,e.projectionCenterX=e.projectionCenterX!=null?e.projectionCenterX:o,e.projectionCenterY=e.projectionCenterY!=null?e.projectionCenterY:a,this._limiter&&(e=this._limiter(e),!e))throw new Error("Bad view limiter");e=this._normalize(e);var u=e.yaw,c=e.pitch,f=e.roll,h=e.fov,d=e.width,p=e.height,g=e.projectionCenterX,_=e.projectionCenterY;if(!nr(u)||!nr(c)||!nr(f)||!nr(h)||!nr(d)||!nr(p)||!nr(g)||!nr(_))throw new Error("Bad view - suspect a broken limiter");this._yaw=u,this._pitch=c,this._roll=f,this._fov=h,this._width=d,this._height=p,this._projectionCenterX=g,this._projectionCenterY=_,(u!==t||c!==n||f!==r||h!==i||d!==l||p!==s||g!==o||_!==a)&&(this._projectionChanged=!0,this.emit("change")),(d!==l||p!==s)&&this.emit("resize")};J.prototype._normalize=function(e){this._normalizeCoordinates(e);var t=Pa.htov(Math.PI,e.width,e.height),n=isNaN(t)?Math.PI:Math.min(Math.PI,t);return e.fov=Br(e.fov,u1,n-u1),e};J.prototype._normalizeCoordinates=function(e){return"yaw"in e&&(e.yaw=Dc(e.yaw-Math.PI,-2*Math.PI)+Math.PI),"pitch"in e&&(e.pitch=Dc(e.pitch-Math.PI,-2*Math.PI)+Math.PI),"roll"in e&&(e.roll=Dc(e.roll-Math.PI,-2*Math.PI)+Math.PI),e};J.prototype.normalizeToClosest=function(e,t){var n=this._yaw,r=this._pitch,i=e.yaw,o=e.pitch,a=i-2*Math.PI,l=i+2*Math.PI;Math.abs(a-n)<Math.abs(i-n)?i=a:Math.abs(l-n)<Math.abs(i-n)&&(i=l);var s=o-2*Math.PI,u=o+2*Math.PI;return Math.abs(s-r)<Math.abs(o-r)?o=s:Math.abs(s-r)<Math.abs(o-r)&&(o=u),t=t||{},t.yaw=i,t.pitch=o,t};J.prototype.updateWithControlParameters=function(e){var t=this._fov,n=Pa.vtoh(t,this._width,this._height);isNaN(n)&&(n=t),this.offsetYaw(e.axisScaledX*n+e.x*2*n+e.yaw),this.offsetPitch(e.axisScaledY*t+e.y*2*n+e.pitch),this.offsetRoll(-e.roll),this.offsetFov(e.zoom*t)};J.prototype._updateProjection=function(){var e=this._projMatrix,t=this._invProjMatrix,n=this._frustum;if(this._projectionChanged){var r=this._width,i=this._height,o=this._fov,a=Pa.vtoh(o,r,i),l=r/i,s=this._projectionCenterX,u=this._projectionCenterY;if(s!==0||u!==0){var c=Math.atan(s*2*Math.tan(a/2)),f=Math.atan(u*2*Math.tan(o/2)),h=this._fovs;h.leftDegrees=(a/2+c)*180/Math.PI,h.rightDegrees=(a/2-c)*180/Math.PI,h.upDegrees=(o/2+f)*180/Math.PI,h.downDegrees=(o/2-f)*180/Math.PI,sr.perspectiveFromFieldOfView(e,h,-1,1)}else sr.perspective(e,o,l,-1,1);sr.rotateZ(e,e,this._roll),sr.rotateX(e,e,this._pitch),sr.rotateY(e,e,this._yaw),sr.invert(t,e),this._matrixToFrustum(e,n),this._projectionChanged=!1}};J.prototype._matrixToFrustum=function(e,t){at.set(t[0],e[3]+e[0],e[7]+e[4],e[11]+e[8],0),at.set(t[1],e[3]-e[0],e[7]-e[4],e[11]-e[8],0),at.set(t[2],e[3]+e[1],e[7]+e[5],e[11]+e[9],0),at.set(t[3],e[3]-e[1],e[7]-e[5],e[11]-e[9],0),at.set(t[4],e[3]+e[2],e[7]+e[6],e[11]+e[10],0)};J.prototype.projection=function(){return this._updateProjection(),this._projMatrix};J.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix};J.prototype.intersects=function(e){this._updateProjection();for(var t=this._frustum,n=this._tmpVec,r=0;r<t.length;r++){for(var i=t[r],o=!1,a=0;a<e.length;a++){var l=e[a];at.set(n,l[0],l[1],l[2],0),at.dot(i,n)>=0&&(o=!0)}if(!o)return!1}return!0};J.prototype.selectLevel=function(e){for(var t=M2()*this._height,n=Math.tan(.5*this._fov),r=0;r<e.length;r++){var i=e[r];if(n*i.height()>=t)return i}return e[e.length-1]};J.prototype.coordinatesToScreen=function(e,t){var n=this._tmpVec;t||(t={});var r=this._width,i=this._height;if(r<=0||i<=0)return t.x=null,t.y=null,null;var o=e.yaw,a=e.pitch,l=Math.sin(o)*Math.cos(a),s=-Math.sin(a),u=-Math.cos(o)*Math.cos(a);if(at.set(n,l,s,u,1),at.transformMat4(n,n,this.projection()),n[3]>=0)t.x=r*(n[0]/n[3]+1)/2,t.y=i*(1-n[1]/n[3])/2;else return t.x=null,t.y=null,null;return t};J.prototype.screenToCoordinates=function(e,t){var n=this._tmpVec;t||(t={});var r=this._width,i=this._height,o=2*e.x/r-1,a=1-2*e.y/i;at.set(n,o,a,1,1),at.transformMat4(n,n,this.inverseProjection());var l=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);return t.yaw=Math.atan2(n[0],-n[2]),t.pitch=Math.acos(n[1]/l)-Math.PI/2,this._normalizeCoordinates(t),t};J.prototype.coordinatesToPerspectiveTransform=function(e,t,n){n=n||"";var r=this._height,i=this._width,o=this._fov,a=.5*r/Math.tan(o/2),l="";return l+="translateX("+pn(i/2)+"px) ",l+="translateY("+pn(r/2)+"px) ",l+="translateX(-50%) translateY(-50%) ",l+="perspective("+pn(a)+"px) ",l+="translateZ("+pn(a)+"px) ",l+="rotateZ("+pn(-this._roll)+"rad) ",l+="rotateX("+pn(-this._pitch)+"rad) ",l+="rotateY("+pn(this._yaw)+"rad) ",l+="rotateY("+pn(-e.yaw)+"rad) ",l+="rotateX("+pn(e.pitch)+"rad) ",l+="translateZ("+pn(-t)+"px) ",l+=n+" ",l};J.limit={yaw:function(e,t){return function(r){return r.yaw=Br(r.yaw,e,t),r}},pitch:function(e,t){return function(r){return r.pitch=Br(r.pitch,e,t),r}},roll:function(e,t){return function(r){return r.roll=Br(r.roll,e,t),r}},hfov:function(e,t){return function(r){var i=r.width,o=r.height;if(i>0&&o>0){var a=Pa.htov(e,i,o),l=Pa.htov(t,i,o);r.fov=Br(r.fov,a,l)}return r}},vfov:function(e,t){return function(r){return r.fov=Br(r.fov,e,t),r}},resolution:function(e){return function(n){var r=n.height;if(r){var i=M2()*r,o=2*Math.atan(i/e);n.fov=Br(n.fov,o,1/0)}return n}},traditional:function(e,t,n){return n=n!=null?n:t,I6(J.limit.resolution(e),J.limit.vfov(0,t),J.limit.hfov(0,n),J.limit.pitch(-Math.PI/2,Math.PI/2))}};J.type=J.prototype.type="rectilinear";var Y6=J,X6=ze,Fs=ut.mat4,$a=ut.vec4,O2=Pu,Pi=up,Pn=xo,G6=Ee,q6=0,K6=0,P2=.5,$2=.5,Q6=1,Z6=[1,0,1,0],J6=[-1,-1,1,1],ej=1e-6;function le(e,t){if(!(e&&e.mediaAspectRatio!=null))throw new Error("mediaAspectRatio must be defined");this._x=e&&e.x!=null?e.x:P2,this._y=e&&e.y!=null?e.y:$2,this._zoom=e&&e.zoom!=null?e.zoom:Q6,this._mediaAspectRatio=e.mediaAspectRatio,this._width=e&&e.width!=null?e.width:q6,this._height=e&&e.height!=null?e.height:K6,this._limiter=t||null,this._projMatrix=Fs.create(),this._invProjMatrix=Fs.create(),this._frustum=[0,0,0,0],this._projectionChanged=!0,this._params={},this._vec=$a.create(),this._update()}X6(le);le.prototype.destroy=function(){G6(this)};le.prototype.x=function(){return this._x};le.prototype.y=function(){return this._y};le.prototype.zoom=function(){return this._zoom};le.prototype.mediaAspectRatio=function(){return this._mediaAspectRatio};le.prototype.width=function(){return this._width};le.prototype.height=function(){return this._height};le.prototype.size=function(e){return e=e||{},e.width=this._width,e.height=this._height,e};le.prototype.parameters=function(e){return e=e||{},e.x=this._x,e.y=this._y,e.zoom=this._zoom,e.mediaAspectRatio=this._mediaAspectRatio,e};le.prototype.limiter=function(){return this._limiter};le.prototype.setX=function(e){this._resetParams(),this._params.x=e,this._update(this._params)};le.prototype.setY=function(e){this._resetParams(),this._params.y=e,this._update(this._params)};le.prototype.setZoom=function(e){this._resetParams(),this._params.zoom=e,this._update(this._params)};le.prototype.offsetX=function(e){this.setX(this._x+e)};le.prototype.offsetY=function(e){this.setY(this._y+e)};le.prototype.offsetZoom=function(e){this.setZoom(this._zoom+e)};le.prototype.setMediaAspectRatio=function(e){this._resetParams(),this._params.mediaAspectRatio=e,this._update(this._params)};le.prototype.setSize=function(e){this._resetParams(),this._params.width=e.width,this._params.height=e.height,this._update(this._params)};le.prototype.setParameters=function(e){this._resetParams(),this._params.x=e.x,this._params.y=e.y,this._params.zoom=e.zoom,this._params.mediaAspectRatio=e.mediaAspectRatio,this._update(this._params)};le.prototype.setLimiter=function(e){this._limiter=e||null,this._update()};le.prototype._resetParams=function(){var e=this._params;e.x=null,e.y=null,e.zoom=null,e.mediaAspectRatio=null,e.width=null,e.height=null};le.prototype._update=function(e){e==null&&(this._resetParams(),e=this._params);var t=this._x,n=this._y,r=this._zoom,i=this._mediaAspectRatio,o=this._width,a=this._height;if(e.x=e.x!=null?e.x:t,e.y=e.y!=null?e.y:n,e.zoom=e.zoom!=null?e.zoom:r,e.mediaAspectRatio=e.mediaAspectRatio!=null?e.mediaAspectRatio:i,e.width=e.width!=null?e.width:o,e.height=e.height!=null?e.height:a,this._limiter&&(e=this._limiter(e),!e))throw new Error("Bad view limiter");var l=e.x,s=e.y,u=e.zoom,c=e.mediaAspectRatio,f=e.width,h=e.height;if(!Pi(l)||!Pi(s)||!Pi(u)||!Pi(c)||!Pi(f)||!Pi(h))throw new Error("Bad view - suspect a broken limiter");u=Pn(u,ej,1/0),this._x=l,this._y=s,this._zoom=u,this._mediaAspectRatio=c,this._width=f,this._height=h,(l!==t||s!==n||u!==r||c!==i||f!==o||h!==a)&&(this._projectionChanged=!0,this.emit("change")),(f!==o||h!==a)&&this.emit("resize")};le.prototype._zoomX=function(){return this._zoom};le.prototype._zoomY=function(){var e=this._mediaAspectRatio,t=this._width/this._height,n=this._zoom,r=n*e/t;return isNaN(r)&&(r=n),r};le.prototype.updateWithControlParameters=function(e){var t=this.zoom(),n=this._zoomX(),r=this._zoomY();this.offsetX(e.axisScaledX*n+e.x*t),this.offsetY(e.axisScaledY*r+e.y*t),this.offsetZoom(e.zoom*t)};le.prototype._updateProjection=function(){var e=this._projMatrix,t=this._invProjMatrix,n=this._frustum;if(this._projectionChanged){var r=this._x,i=this._y,o=this._zoomX(),a=this._zoomY(),l=n[0]=.5-i+.5*a,s=n[1]=r-.5+.5*o,u=n[2]=.5-i-.5*a,c=n[3]=r-.5-.5*o;Fs.ortho(e,c,s,u,l,-1,1),Fs.invert(t,e),this._projectionChanged=!1}};le.prototype.projection=function(){return this._updateProjection(),this._projMatrix};le.prototype.inverseProjection=function(){return this._updateProjection(),this._invProjMatrix};le.prototype.intersects=function(e){this._updateProjection();for(var t=this._frustum,n=0;n<t.length;n++){for(var r=t[n],i=Z6[n],o=J6[n],a=!1,l=0;l<e.length;l++){var s=e[l];if(o<0&&s[i]<r||o>0&&s[i]>r){a=!0;break}}if(!a)return!1}return!0};le.prototype.selectLevel=function(e){for(var t=O2()*this.width(),n=this._zoom,r=0;r<e.length;r++){var i=e[r];if(n*i.width()>=t)return i}return e[e.length-1]};le.prototype.coordinatesToScreen=function(e,t){var n=this._vec;t||(t={});var r=this._width,i=this._height;if(r<=0||i<=0)return t.x=null,t.y=null,null;var o=e&&e.x!=null?e.x:P2,a=e&&e.y!=null?e.y:$2;$a.set(n,o-.5,.5-a,-1,1),$a.transformMat4(n,n,this.projection());for(var l=0;l<3;l++)n[l]/=n[3];return t.x=r*(n[0]+1)/2,t.y=i*(1-n[1])/2,t};le.prototype.screenToCoordinates=function(e,t){var n=this._vec;t||(t={});var r=this._width,i=this._height,o=2*e.x/r-1,a=1-2*e.y/i;return $a.set(n,o,a,1,1),$a.transformMat4(n,n,this.inverseProjection()),t.x=.5+n[0],t.y=.5-n[1],t};le.limit={x:function(e,t){return function(r){return r.x=Pn(r.x,e,t),r}},y:function(e,t){return function(r){return r.y=Pn(r.y,e,t),r}},zoom:function(e,t){return function(r){return r.zoom=Pn(r.zoom,e,t),r}},resolution:function(e){return function(n){if(n.width<=0||n.height<=0)return n;var r=n.width,i=O2()*r/e;return n.zoom=Pn(n.zoom,i,1/0),n}},visibleX:function(e,t){return function(r){var i=t-e;r.zoom>i&&(r.zoom=i);var o=e+.5*r.zoom,a=t-.5*r.zoom;return r.x=Pn(r.x,o,a),r}},visibleY:function(e,t){return function(r){if(r.width<=0||r.height<=0)return r;var i=r.width/r.height,o=i/r.mediaAspectRatio,a=(t-e)*o;r.zoom>a&&(r.zoom=a);var l=e+.5*r.zoom/o,s=t-.5*r.zoom/o;return r.y=Pn(r.y,l,s),r}},letterbox:function(){return function(t){if(t.width<=0||t.height<=0)return t;var n=t.width/t.height,r=1,i=n/t.mediaAspectRatio;t.mediaAspectRatio>=n&&(t.zoom=Math.min(t.zoom,r)),t.mediaAspectRatio<=n&&(t.zoom=Math.min(t.zoom,i));var o,a;t.zoom>r?o=a=.5:(o=0+.5*t.zoom/r,a=1-.5*t.zoom/r);var l,s;return t.zoom>i?l=s=.5:(l=0+.5*t.zoom/i,s=1-.5*t.zoom/i),t.x=Pn(t.x,o,a),t.y=Pn(t.y,l,s),t}}};le.type=le.prototype.type="flat";var tj=le,nj=V_,rj=Ar;function Xa(e){this._concurrency=e&&e.concurrency||1,this._paused=e&&!!e.paused||!1,this._pool=[];for(var t=0;t<this._concurrency;t++)this._pool.push(new nj(e));this._next=0}Xa.prototype.length=function(){for(var e=0,t=0;t<this._pool.length;t++)e+=this._pool[t].length();return e};Xa.prototype.push=function(e,t){var n=this._next,r=this._pool[n].push(e,t);return this._next=rj(this._next+1,this._concurrency),r};Xa.prototype.pause=function(){if(!this._paused){this._paused=!0;for(var e=0;e<this._concurrency;e++)this._pool[e].pause()}};Xa.prototype.resume=function(){if(this._paused){this._paused=!1;for(var e=0;e<this._concurrency;e++)this._pool[e].resume()}};var ij=Xa;function oj(){}var Ga=oj,aj=Ga;function lj(){var e=Array.prototype.slice.call(arguments,0);return function(){var n=e.slice(0),r=null,i=null,o=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],a=arguments.length?arguments[arguments.length-1]:aj;function l(){var u=arguments[0];if(u){r=i=null,a.apply(null,arguments);return}if(!n.length){r=i=null,a.apply(null,arguments);return}r=n.shift();var c=r,f=Array.prototype.slice.call(arguments,1);f.push(l);var h=r.apply(null,f);if(c===r){if(typeof h!="function")throw new Error("chain: chaining on non-cancellable function");i=h}}function s(){i&&i.apply(null,arguments)}return o.unshift(null),l.apply(null,o),s}}var fp=lj;function sj(e,t){var n=null;function r(){n!=null&&(n=null,t(null))}function i(){n!=null&&(clearTimeout(n),n=null,t.apply(null,arguments))}return n=setTimeout(r,e),i}var k2=sj,uj=ze,cj=Q_,fj=ij,hj=fp,dj=k2,c1=yi,f1={x:"x",y:"y",z:"z",f:"face"},pj="bdflru",vj=4,mj=1e4;function ka(e,t){t=t||{},this._loadPool=new fj({concurrency:t.concurrency||vj}),this._retryDelay=t.retryDelay||mj,this._retryMap={},this._sourceFromTile=e}uj(ka);ka.prototype.loadAsset=function(e,t,n){var r=this,i=this._retryDelay,o=this._retryMap,a=this._sourceFromTile(t),l=a.url,s=a.rect,u=e.loadImage.bind(e,l,s),c=function(_){return r._loadPool.push(u,function(m,v){m?(m instanceof cj&&(o[l]=c1(),r.emit("networkError",m,t)),_(m,t)):(delete o[l],_(null,t,v))})},f,h=o[l];if(h!=null){var d=c1(),p=d-h;p<i?f=i-p:(f=0,delete o[l])}var g=dj.bind(null,f);return hj(g,c)(n)};ka.fromString=function(e,t){t=t||{};var n=t&&t.cubeMapPreviewFaceOrder||pj,r=t.cubeMapPreviewUrl?o:i;return new ka(r,t);function i(l){var s=e;for(var u in f1){var c=f1[u],f=yj(u),h=l.hasOwnProperty(c)?l[c]:"";s=s.replace(f,h)}return{url:s}}function o(l){return l.z===0?a(l):i(l)}function a(l){var s=n.indexOf(l.face)/6;return{url:t.cubeMapPreviewUrl,rect:{x:0,y:s,width:1,height:1/6}}}};function yj(e){var t="\\{("+e+")\\}";return new RegExp(t,"g")}var gj=ka;function hp(e){this._asset=e}hp.prototype.asset=function(){return this._asset};hp.prototype.loadAsset=function(e,t,n){var r=this,i=setTimeout(function(){n(null,t,r._asset)},0);function o(){clearTimeout(i),n.apply(null,arguments)}return o};var _j=hp,wj=Xd,xj=bn,bj=ze,Sj=Ee;function bi(e){this.constructor.super_.call(this,e),this._timestamp=0}xj(bi,wj);bj(bi);bi.prototype.destroy=function(){Sj(this)};bi.prototype.timestamp=function(){return this._timestamp};bi.prototype.isDynamic=function(){return!0};bi.prototype.markDirty=function(){this._timestamp++,this.emit("change")};var Tj=bi,Au=Ar,Ej=64;function Lr(e){if(e!=null&&(!isFinite(e)||Math.floor(e)!==e||e<1))throw new Error("Map: invalid capacity");this._capacity=e||Ej,this._keyBuckets=[],this._valBuckets=[];for(var t=0;t<this._capacity;t++)this._keyBuckets.push([]),this._valBuckets.push([]);this._size=0}Lr.prototype.get=function(e){for(var t=Au(e.hash(),this._capacity),n=this._keyBuckets[t],r=0;r<n.length;r++){var i=n[r];if(e.equals(i)){var o=this._valBuckets[t],a=o[r];return a}}return null};Lr.prototype.set=function(e,t){for(var n=Au(e.hash(),this._capacity),r=this._keyBuckets[n],i=this._valBuckets[n],o=0;o<r.length;o++){var a=r[o];if(e.equals(a)){var l=i[o];return r[o]=e,i[o]=t,l}}return r.push(e),i.push(t),this._size++,null};Lr.prototype.del=function(e){for(var t=Au(e.hash(),this._capacity),n=this._keyBuckets[t],r=this._valBuckets[t],i=0;i<n.length;i++){var o=n[i];if(e.equals(o)){for(var a=r[i],l=i;l<n.length-1;l++)n[l]=n[l+1],r[l]=r[l+1];return n.length=n.length-1,r.length=r.length-1,this._size--,a}}return null};Lr.prototype.has=function(e){for(var t=Au(e.hash(),this._capacity),n=this._keyBuckets[t],r=0;r<n.length;r++){var i=n[r];if(e.equals(i))return!0}return!1};Lr.prototype.size=function(){return this._size};Lr.prototype.clear=function(){for(var e=0;e<this._capacity;e++)this._keyBuckets[e].length=0,this._valBuckets[e].length=0;this._size=0};Lr.prototype.forEach=function(e){for(var t=0,n=0;n<this._capacity;n++)for(var r=this._keyBuckets[n],i=this._valBuckets[n],o=0;o<r.length;o++)e(r[o],i[o]),t+=1;return t};var Cj=Lr,Mj=Ar;function Rr(e){if(!isFinite(e)||Math.floor(e)!==e||e<0)throw new Error("LruSet: invalid capacity");this._capacity=e,this._elements=new Array(this._capacity),this._start=0,this._size=0}Rr.prototype._index=function(e){return Mj(this._start+e,this._capacity)};Rr.prototype.add=function(e){if(this._capacity===0)return e;this.remove(e);var t=this._size===this._capacity?this._elements[this._index(0)]:null;return this._elements[this._index(this._size)]=e,this._size<this._capacity?this._size++:this._start=this._index(1),t};Rr.prototype.remove=function(e){for(var t=0;t<this._size;t++){var n=this._elements[this._index(t)];if(e.equals(n)){for(var r=t;r<this._size-1;r++)this._elements[this._index(r)]=this._elements[this._index(r+1)];return this._size--,n}}return null};Rr.prototype.has=function(e){for(var t=0;t<this._size;t++)if(e.equals(this._elements[this._index(t)]))return!0;return!1};Rr.prototype.size=function(){return this._size};Rr.prototype.clear=function(){this._elements.length=0,this._start=0,this._size=0};Rr.prototype.forEach=function(e){for(var t=0,n=0;n<this._size;n++)e(this._elements[this._index(n)]),t+=1;return t};var Oj=Rr;function Pj(e,t){for(var n in t)n in e||(e[n]=t[n]);return e}var En=Pj,$j=Ga;function kj(e){return function(){var n=arguments.length?Array.prototype.slice.call(arguments,0,arguments.length-1):[],r=arguments.length?arguments[arguments.length-1]:$j,i=null,o=!1;function a(){var l=arguments[0];!l||o?r.apply(null,arguments):i=e.apply(null,n)}return n.push(a),a(!0),function(){o=!0,i.apply(null,arguments)}}}var z2=kj,h1=Cj,d1=x2,zj=Oj,A2=ze,Aj=En,Lj=z2,Rj=fp,Ij=bn,L2=Ee,Yo=typeof MARZIPANODEBUG<"u"&&MARZIPANODEBUG.textureStore,Wt={IDLE:0,START:1,MARK:2,END:3},jj={previouslyVisibleCacheSize:512},Fj=0;function dp(){}Ij(dp,Error);function qa(e,t){var n=this,r=Fj++;n._id=r,n._store=e,n._tile=t,n._asset=null,n._texture=null,n._changeHandler=function(){e.emit("textureInvalid",t)};var i=e.source(),o=e.stage(),a=i.loadAsset.bind(i),l=o.createTexture.bind(o),s=Rj(Lj(a),l);e.emit("textureStartLoad",t),Yo&&console.log("loading",r,t),n._cancel=s(o,t,function(u,c,f,h){if(n._cancel=null,u){f&&f.destroy(),h&&h.destroy(),u instanceof dp?(e.emit("textureCancel",t),Yo&&console.log("cancel",r,t)):(e.emit("textureError",t,u),Yo&&console.log("error",r,t));return}n._texture=h,f.isDynamic()?(n._asset=f,f.addEventListener("change",n._changeHandler)):f.destroy(),e.emit("textureLoad",t),Yo&&console.log("load",r,t)})}qa.prototype.asset=function(){return this._asset};qa.prototype.texture=function(){return this._texture};qa.prototype.destroy=function(){var e=this._id,t=this._store,n=this._tile,r=this._asset,i=this._texture,o=this._cancel;if(o){o(new dp);return}r&&(r.removeEventListener("change",this._changeHandler),r.destroy()),i&&i.destroy(),t.emit("textureUnload",n),Yo&&console.log("unload",e,n),L2(this)};A2(qa);function rt(e,t,n){n=Aj(n||{},jj),this._source=e,this._stage=t,this._state=Wt.IDLE,this._delimCount=0,this._itemMap=new h1,this._visible=new d1,this._previouslyVisible=new zj(n.previouslyVisibleCacheSize),this._pinMap=new h1,this._newVisible=new d1,this._noLongerVisible=[],this._visibleAgain=[],this._evicted=[]}A2(rt);rt.prototype.destroy=function(){this.clear(),L2(this)};rt.prototype.stage=function(){return this._stage};rt.prototype.source=function(){return this._source};rt.prototype.clear=function(){var e=this;e._evicted.length=0,e._itemMap.forEach(function(t){e._evicted.push(t)}),e._evicted.forEach(function(t){e._unloadTile(t)}),e._itemMap.clear(),e._visible.clear(),e._previouslyVisible.clear(),e._pinMap.clear(),e._newVisible.clear(),e._noLongerVisible.length=0,e._visibleAgain.length=0,e._evicted.length=0};rt.prototype.clearNotPinned=function(){var e=this;e._evicted.length=0,e._itemMap.forEach(function(t){e._pinMap.has(t)||e._evicted.push(t)}),e._evicted.forEach(function(t){e._unloadTile(t)}),e._visible.clear(),e._previouslyVisible.clear(),e._evicted.length=0};rt.prototype.startFrame=function(){if(this._state!==Wt.IDLE&&this._state!==Wt.START)throw new Error("TextureStore: startFrame called out of sequence");this._state=Wt.START,this._delimCount++};rt.prototype.markTile=function(e){if(this._state!==Wt.START&&this._state!==Wt.MARK)throw new Error("TextureStore: markTile called out of sequence");this._state=Wt.MARK;var t=this._itemMap.get(e),n=t&&t.texture(),r=t&&t.asset();n&&r&&n.refresh(e,r),this._newVisible.add(e)};rt.prototype.endFrame=function(){if(this._state!==Wt.START&&this._state!==Wt.MARK&&this._state!==Wt.END)throw new Error("TextureStore: endFrame called out of sequence");this._state=Wt.END,this._delimCount--,this._delimCount||(this._update(),this._state=Wt.IDLE)};rt.prototype._update=function(){var e=this;e._noLongerVisible.length=0,e._visible.forEach(function(n){e._newVisible.has(n)||e._noLongerVisible.push(n)}),e._visibleAgain.length=0,e._newVisible.forEach(function(n){e._previouslyVisible.has(n)&&e._visibleAgain.push(n)}),e._visibleAgain.forEach(function(n){e._previouslyVisible.remove(n)}),e._evicted.length=0,e._noLongerVisible.forEach(function(n){var r=e._itemMap.get(n),i=r&&r.texture();if(i){var o=e._previouslyVisible.add(n);o!=null&&e._evicted.push(o)}else r&&e._unloadTile(n)}),e._evicted.forEach(function(n){e._pinMap.has(n)||e._unloadTile(n)}),e._newVisible.forEach(function(n){var r=e._itemMap.get(n);r||e._loadTile(n)});var t=e._visible;e._visible=e._newVisible,e._newVisible=t,e._newVisible.clear(),e._noLongerVisible.length=0,e._visibleAgain.length=0,e._evicted.length=0};rt.prototype._loadTile=function(e){if(this._itemMap.has(e))throw new Error("TextureStore: loading texture already in cache");var t=new qa(this,e);this._itemMap.set(e,t)};rt.prototype._unloadTile=function(e){var t=this._itemMap.del(e);if(!t)throw new Error("TextureStore: unloading texture not in cache");t.destroy()};rt.prototype.asset=function(e){var t=this._itemMap.get(e);return t?t.asset():null};rt.prototype.texture=function(e){var t=this._itemMap.get(e);return t?t.texture():null};rt.prototype.pin=function(e){var t=(this._pinMap.get(e)||0)+1;return this._pinMap.set(e,t),this._itemMap.has(e)||this._loadTile(e),t};rt.prototype.unpin=function(e){var t=this._pinMap.get(e);if(t)t--,t>0?this._pinMap.set(e,t):(this._pinMap.del(e),!this._visible.has(e)&&!this._previouslyVisible.has(e)&&this._unloadTile(e));else throw new Error("TextureStore: unpin when not pinned");return t};rt.prototype.query=function(e){var t=this._itemMap.get(e),n=this._pinMap.get(e)||0;return{visible:this._visible.has(e),previouslyVisible:this._previouslyVisible.has(e),hasAsset:t!=null&&t.asset()!=null,hasTexture:t!=null&&t.texture()!=null,pinned:n!==0,pinCount:n}};var R2=rt;function Nj(e,t){for(var n in t)e[n]=t[n];return e}var I2=Nj,Dj=ze,Hj=I2,Bj=Ee;function it(e,t,n,r,i){i=i||{};var o=this;this._source=e,this._geometry=t,this._view=n,this._textureStore=r,this._effects=i.effects||{},this._fixedLevelIndex=null,this._viewChangeHandler=function(){o.emit("viewChange",o.view())},this._view.addEventListener("change",this._viewChangeHandler),this._textureStoreChangeHandler=function(){o.emit("textureStoreChange",o.textureStore())},this._textureStore.addEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.addEventListener("textureInvalid",this._textureStoreChangeHandler)}Dj(it);it.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._textureStore.removeEventListener("textureLoad",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureError",this._textureStoreChangeHandler),this._textureStore.removeEventListener("textureInvalid",this._textureStoreChangeHandler),Bj(this)};it.prototype.source=function(){return this._source};it.prototype.geometry=function(){return this._geometry};it.prototype.view=function(){return this._view};it.prototype.textureStore=function(){return this._textureStore};it.prototype.effects=function(){return this._effects};it.prototype.setEffects=function(e){this._effects=e,this.emit("effectsChange",this._effects)};it.prototype.mergeEffects=function(e){Hj(this._effects,e),this.emit("effectsChange",this._effects)};it.prototype.fixedLevel=function(){return this._fixedLevelIndex};it.prototype.setFixedLevel=function(e){if(e!==this._fixedLevelIndex){if(e!=null&&(e>=this._geometry.levelList.length||e<0))throw new Error("Level index out of range: "+e);this._fixedLevelIndex=e,this.emit("fixedLevelChange",this._fixedLevelIndex)}};it.prototype._selectLevel=function(){var e;return this._fixedLevelIndex!=null?e=this._geometry.levelList[this._fixedLevelIndex]:e=this._view.selectLevel(this._geometry.selectableLevelList),e};it.prototype.visibleTiles=function(e){var t=this._selectLevel();return this._geometry.visibleTiles(this._view,t,e)};it.prototype.pinLevel=function(e){for(var t=this._geometry.levelList[e],n=this._geometry.levelTiles(t),r=0;r<n.length;r++)this._textureStore.pin(n[r])};it.prototype.unpinLevel=function(e){for(var t=this._geometry.levelList[e],n=this._geometry.levelTiles(t),r=0;r<n.length;r++)this._textureStore.unpin(n[r])};it.prototype.pinFirstLevel=function(){return this.pinLevel(0)};it.prototype.unpinFirstLevel=function(){return this.unpinLevel(0)};var j2=it,Wj=ze,Uj=Ee;function Ir(e){var t=this;this._stage=e,this._running=!1,this._rendering=!1,this._requestHandle=null,this._boundLoop=this._loop.bind(this),this._renderInvalidHandler=function(){t._rendering||t.renderOnNextFrame()},this._stage.addEventListener("renderInvalid",this._renderInvalidHandler)}Wj(Ir);Ir.prototype.destroy=function(){this.stop(),this._stage.removeEventListener("renderInvalid",this._renderInvalidHandler),Uj(this)};Ir.prototype.stage=function(){return this._stage};Ir.prototype.start=function(){this._running=!0,this.renderOnNextFrame()};Ir.prototype.stop=function(){this._requestHandle&&(window.cancelAnimationFrame(this._requestHandle),this._requestHandle=null),this._running=!1};Ir.prototype.renderOnNextFrame=function(){this._running&&!this._requestHandle&&(this._requestHandle=window.requestAnimationFrame(this._boundLoop))};Ir.prototype._loop=function(){if(!this._running)throw new Error("Render loop running while in stopped state");this._requestHandle=null,this._rendering=!0,this.emit("beforeRender"),this._rendering=!1,this._stage.render(),this.emit("afterRender")};var F2=Ir;function Un(){this.velocity=null,this.friction=null,this.offset=null}Un.equals=function(e,t){return e.velocity===t.velocity&&e.friction===t.friction&&e.offset===t.offset};Un.prototype.equals=function(e){return Un.equals(this,e)};Un.prototype.update=function(e,t){e.offset&&(this.offset=this.offset||0,this.offset+=e.offset);var n=this.offsetFromVelocity(t);n&&(this.offset=this.offset||0,this.offset+=n),this.velocity=e.velocity,this.friction=e.friction};Un.prototype.reset=function(){this.velocity=null,this.friction=null,this.offset=null};Un.prototype.velocityAfter=function(e){return this.velocity?this.friction?Vj(this.velocity,this.friction*e):this.velocity:null};Un.prototype.offsetFromVelocity=function(e){e=Math.min(e,this.nullVelocityTime());var t=this.velocityAfter(e),n=(this.velocity+t)/2;return n*e};Un.prototype.nullVelocityTime=function(){return this.velocity==null?0:this.velocity&&!this.friction?1/0:Math.abs(this.velocity/this.friction)};function Vj(e,t){return e<0?Math.min(0,e+t):e>0?Math.max(0,e-t):0}var Kn=Un,Yj=ze,Xj=Kn,Gj=Ee;function So(e,t,n,r,i){if(!e)throw new Error("KeyControlMethod: keyCode must be defined");if(!t)throw new Error("KeyControlMethod: parameter must be defined");if(!n)throw new Error("KeyControlMethod: velocity must be defined");if(!r)throw new Error("KeyControlMethod: friction must be defined");i=i||document,this._keyCode=e,this._parameter=t,this._velocity=n,this._friction=r,this._element=i,this._keydownHandler=this._handlePress.bind(this),this._keyupHandler=this._handleRelease.bind(this),this._blurHandler=this._handleBlur.bind(this),this._element.addEventListener("keydown",this._keydownHandler),this._element.addEventListener("keyup",this._keyupHandler),window.addEventListener("blur",this._blurHandler),this._dynamics=new Xj,this._pressing=!1}Yj(So);So.prototype.destroy=function(){this._element.removeEventListener("keydown",this._keydownHandler),this._element.removeEventListener("keyup",this._keyupHandler),window.removeEventListener("blur",this._blurHandler),Gj(this)};So.prototype._handlePress=function(e){e.keyCode===this._keyCode&&(this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active"))};So.prototype._handleRelease=function(e){e.keyCode===this._keyCode&&(this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1)};So.prototype._handleBlur=function(){this._dynamics.velocity=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive"),this._pressing=!1};var N2=So,Ns={},qj={get exports(){return Ns},set exports(e){Ns=e}};/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */(function(e){(function(t,n,r,i){var o=["","webkit","moz","MS","ms","o"],a=n.createElement("div"),l="function",s=Math.round,u=Math.abs,c=Date.now;function f(y,x,T){return setTimeout(m(y,T),x)}function h(y,x,T){return Array.isArray(y)?(d(y,T[x],T),!0):!1}function d(y,x,T){var k;if(y)if(y.forEach)y.forEach(x,T);else if(y.length!==i)for(k=0;k<y.length;)x.call(T,y[k],k,y),k++;else for(k in y)y.hasOwnProperty(k)&&x.call(T,y[k],k,y)}function p(y,x,T){for(var k=Object.keys(x),I=0;I<k.length;)(!T||T&&y[k[I]]===i)&&(y[k[I]]=x[k[I]]),I++;return y}function g(y,x){return p(y,x,!0)}function _(y,x,T){var k=x.prototype,I;I=y.prototype=Object.create(k),I.constructor=y,I._super=k,T&&p(I,T)}function m(y,x){return function(){return y.apply(x,arguments)}}function v(y,x){return typeof y==l?y.apply(x&&x[0]||i,x):y}function w(y,x){return y===i?x:y}function b(y,x,T){d(P(x),function(k){y.addEventListener(k,T,!1)})}function S(y,x,T){d(P(x),function(k){y.removeEventListener(k,T,!1)})}function E(y,x){for(;y;){if(y==x)return!0;y=y.parentNode}return!1}function $(y,x){return y.indexOf(x)>-1}function P(y){return y.trim().split(/\s+/g)}function F(y,x,T){if(y.indexOf&&!T)return y.indexOf(x);for(var k=0;k<y.length;){if(T&&y[k][T]==x||!T&&y[k]===x)return k;k++}return-1}function R(y){return Array.prototype.slice.call(y,0)}function W(y,x,T){for(var k=[],I=[],te=0;te<y.length;){var de=x?y[te][x]:y[te];F(I,de)<0&&k.push(y[te]),I[te]=de,te++}return T&&(x?k=k.sort(function(vt,hn){return vt[x]>hn[x]}):k=k.sort()),k}function Z(y,x){for(var T,k,I=x[0].toUpperCase()+x.slice(1),te=0;te<o.length;){if(T=o[te],k=T?T+I:x,k in y)return k;te++}return i}var ne=1;function V(){return ne++}function M(y){var x=y.ownerDocument;return x.defaultView||x.parentWindow}var Ve=/mobile|tablet|ip(ad|hone|od)|android/i,ie="ontouchstart"in t,L=Z(t,"PointerEvent")!==i,q=ie&&Ve.test(navigator.userAgent),G="touch",ve="pen",j="mouse",H="kinect",B=25,X=1,O=2,K=4,A=8,Se=1,se=2,ce=4,ee=8,Ae=16,Ce=se|ce,oe=ee|Ae,Ye=Ce|oe,fe=["x","y"],Fe=["clientX","clientY"];function Qe(y,x){var T=this;this.manager=y,this.callback=x,this.element=y.element,this.target=y.options.inputTarget,this.domHandler=function(k){v(y.options.enable,[y])&&T.handler(k)},this.init()}Qe.prototype={handler:function(){},init:function(){this.evEl&&b(this.element,this.evEl,this.domHandler),this.evTarget&&b(this.target,this.evTarget,this.domHandler),this.evWin&&b(M(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&S(this.element,this.evEl,this.domHandler),this.evTarget&&S(this.target,this.evTarget,this.domHandler),this.evWin&&S(M(this.element),this.evWin,this.domHandler)}};function Xe(y){var x,T=y.options.inputClass;return T?x=T:L?x=Nu:q?x=tl:ie?x=Du:x=el,new x(y,Ti)}function Ti(y,x,T){var k=T.pointers.length,I=T.changedPointers.length,te=x&X&&k-I===0,de=x&(K|A)&&k-I===0;T.isFirst=!!te,T.isFinal=!!de,te&&(y.session={}),T.eventType=x,jr(y,T),y.emit("hammer.input",T),y.recognize(T),y.session.prevInput=T}function jr(y,x){var T=y.session,k=x.pointers,I=k.length;T.firstInput||(T.firstInput=$e(x)),I>1&&!T.firstMultiple?T.firstMultiple=$e(x):I===1&&(T.firstMultiple=!1);var te=T.firstInput,de=T.firstMultiple,ct=de?de.center:te.center,vt=x.center=Ei(k);x.timeStamp=c(),x.deltaTime=x.timeStamp-te.timeStamp,x.angle=Fu(ct,vt),x.distance=Ja(ct,vt),Pt(T,x),x.offsetDirection=Kt(x.deltaX,x.deltaY),x.scale=de?sx(de.pointers,k):1,x.rotation=de?lx(de.pointers,k):0,re(T,x);var hn=y.element;E(x.srcEvent.target,hn)&&(hn=x.srcEvent.target),x.target=hn}function Pt(y,x){var T=x.center,k=y.offsetDelta||{},I=y.prevDelta||{},te=y.prevInput||{};(x.eventType===X||te.eventType===K)&&(I=y.prevDelta={x:te.deltaX||0,y:te.deltaY||0},k=y.offsetDelta={x:T.x,y:T.y}),x.deltaX=I.x+(T.x-k.x),x.deltaY=I.y+(T.y-k.y)}function re(y,x){var T=y.lastInterval||x,k=x.timeStamp-T.timeStamp,I,te,de,ct;if(x.eventType!=A&&(k>B||T.velocity===i)){var vt=T.deltaX-x.deltaX,hn=T.deltaY-x.deltaY,Mi=Mo(k,vt,hn);te=Mi.x,de=Mi.y,I=u(Mi.x)>u(Mi.y)?Mi.x:Mi.y,ct=Kt(vt,hn),y.lastInterval=x}else I=T.velocity,te=T.velocityX,de=T.velocityY,ct=T.direction;x.velocity=I,x.velocityX=te,x.velocityY=de,x.direction=ct}function $e(y){for(var x=[],T=0;T<y.pointers.length;)x[T]={clientX:s(y.pointers[T].clientX),clientY:s(y.pointers[T].clientY)},T++;return{timeStamp:c(),pointers:x,center:Ei(x),deltaX:y.deltaX,deltaY:y.deltaY}}function Ei(y){var x=y.length;if(x===1)return{x:s(y[0].clientX),y:s(y[0].clientY)};for(var T=0,k=0,I=0;I<x;)T+=y[I].clientX,k+=y[I].clientY,I++;return{x:s(T/x),y:s(k/x)}}function Mo(y,x,T){return{x:x/y||0,y:T/y||0}}function Kt(y,x){return y===x?Se:u(y)>=u(x)?y>0?se:ce:x>0?ee:Ae}function Ja(y,x,T){T||(T=fe);var k=x[T[0]]-y[T[0]],I=x[T[1]]-y[T[1]];return Math.sqrt(k*k+I*I)}function Fu(y,x,T){T||(T=fe);var k=x[T[0]]-y[T[0]],I=x[T[1]]-y[T[1]];return Math.atan2(I,k)*180/Math.PI}function lx(y,x){return Fu(x[1],x[0],Fe)-Fu(y[1],y[0],Fe)}function sx(y,x){return Ja(x[0],x[1],Fe)/Ja(y[0],y[1],Fe)}var ux={mousedown:X,mousemove:O,mouseup:K},cx="mousedown",fx="mousemove mouseup";function el(){this.evEl=cx,this.evWin=fx,this.allow=!0,this.pressed=!1,Qe.apply(this,arguments)}_(el,Qe,{handler:function(x){var T=ux[x.type];T&X&&x.button===0&&(this.pressed=!0),T&O&&x.which!==1&&(T=K),!(!this.pressed||!this.allow)&&(T&K&&(this.pressed=!1),this.callback(this.manager,T,{pointers:[x],changedPointers:[x],pointerType:j,srcEvent:x}))}});var hx={pointerdown:X,pointermove:O,pointerup:K,pointercancel:A,pointerout:A},dx={2:G,3:ve,4:j,5:H},pp="pointerdown",vp="pointermove pointerup pointercancel";t.MSPointerEvent&&(pp="MSPointerDown",vp="MSPointerMove MSPointerUp MSPointerCancel");function Nu(){this.evEl=pp,this.evWin=vp,Qe.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}_(Nu,Qe,{handler:function(x){var T=this.store,k=!1,I=x.type.toLowerCase().replace("ms",""),te=hx[I],de=dx[x.pointerType]||x.pointerType,ct=de==G,vt=F(T,x.pointerId,"pointerId");te&X&&(x.button===0||ct)?vt<0&&(T.push(x),vt=T.length-1):te&(K|A)&&(k=!0),!(vt<0)&&(T[vt]=x,this.callback(this.manager,te,{pointers:T,changedPointers:[x],pointerType:de,srcEvent:x}),k&&T.splice(vt,1))}});var px={touchstart:X,touchmove:O,touchend:K,touchcancel:A},vx="touchstart",mx="touchstart touchmove touchend touchcancel";function mp(){this.evTarget=vx,this.evWin=mx,this.started=!1,Qe.apply(this,arguments)}_(mp,Qe,{handler:function(x){var T=px[x.type];if(T===X&&(this.started=!0),!!this.started){var k=yx.call(this,x,T);T&(K|A)&&k[0].length-k[1].length===0&&(this.started=!1),this.callback(this.manager,T,{pointers:k[0],changedPointers:k[1],pointerType:G,srcEvent:x})}}});function yx(y,x){var T=R(y.touches),k=R(y.changedTouches);return x&(K|A)&&(T=W(T.concat(k),"identifier",!0)),[T,k]}var gx={touchstart:X,touchmove:O,touchend:K,touchcancel:A},_x="touchstart touchmove touchend touchcancel";function tl(){this.evTarget=_x,this.targetIds={},Qe.apply(this,arguments)}_(tl,Qe,{handler:function(x){var T=gx[x.type],k=wx.call(this,x,T);k&&this.callback(this.manager,T,{pointers:k[0],changedPointers:k[1],pointerType:G,srcEvent:x})}});function wx(y,x){var T=R(y.touches),k=this.targetIds;if(x&(X|O)&&T.length===1)return k[T[0].identifier]=!0,[T,T];var I,te,de=R(y.changedTouches),ct=[],vt=this.target;if(te=T.filter(function(hn){return E(hn.target,vt)}),x===X)for(I=0;I<te.length;)k[te[I].identifier]=!0,I++;for(I=0;I<de.length;)k[de[I].identifier]&&ct.push(de[I]),x&(K|A)&&delete k[de[I].identifier],I++;if(ct.length)return[W(te.concat(ct),"identifier",!0),ct]}function Du(){Qe.apply(this,arguments);var y=m(this.handler,this);this.touch=new tl(this.manager,y),this.mouse=new el(this.manager,y)}_(Du,Qe,{handler:function(x,T,k){var I=k.pointerType==G,te=k.pointerType==j;if(I)this.mouse.allow=!1;else if(te&&!this.mouse.allow)return;T&(K|A)&&(this.mouse.allow=!0),this.callback(x,T,k)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var yp=Z(a.style,"touchAction"),gp=yp!==i,_p="compute",wp="auto",Hu="manipulation",Oo="none",Po="pan-x",$o="pan-y";function Bu(y,x){this.manager=y,this.set(x)}Bu.prototype={set:function(y){y==_p&&(y=this.compute()),gp&&(this.manager.element.style[yp]=y),this.actions=y.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var y=[];return d(this.manager.recognizers,function(x){v(x.options.enable,[x])&&(y=y.concat(x.getTouchAction()))}),xx(y.join(" "))},preventDefaults:function(y){if(!gp){var x=y.srcEvent,T=y.offsetDirection;if(this.manager.session.prevented){x.preventDefault();return}var k=this.actions,I=$(k,Oo),te=$(k,$o),de=$(k,Po);if(I||te&&T&Ce||de&&T&oe)return this.preventSrc(x)}},preventSrc:function(y){this.manager.session.prevented=!0,y.preventDefault()}};function xx(y){if($(y,Oo))return Oo;var x=$(y,Po),T=$(y,$o);return x&&T?Po+" "+$o:x||T?x?Po:$o:$(y,Hu)?Hu:wp}var nl=1,Nt=2,Ci=4,Zn=8,Mn=Zn,ko=16,fn=32;function On(y){this.id=V(),this.manager=null,this.options=g(y||{},this.defaults),this.options.enable=w(this.options.enable,!0),this.state=nl,this.simultaneous={},this.requireFail=[]}On.prototype={defaults:{},set:function(y){return p(this.options,y),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(y){if(h(y,"recognizeWith",this))return this;var x=this.simultaneous;return y=rl(y,this),x[y.id]||(x[y.id]=y,y.recognizeWith(this)),this},dropRecognizeWith:function(y){return h(y,"dropRecognizeWith",this)?this:(y=rl(y,this),delete this.simultaneous[y.id],this)},requireFailure:function(y){if(h(y,"requireFailure",this))return this;var x=this.requireFail;return y=rl(y,this),F(x,y)===-1&&(x.push(y),y.requireFailure(this)),this},dropRequireFailure:function(y){if(h(y,"dropRequireFailure",this))return this;y=rl(y,this);var x=F(this.requireFail,y);return x>-1&&this.requireFail.splice(x,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(y){return!!this.simultaneous[y.id]},emit:function(y){var x=this,T=this.state;function k(I){x.manager.emit(x.options.event+(I?bx(T):""),y)}T<Zn&&k(!0),k(),T>=Zn&&k(!0)},tryEmit:function(y){if(this.canEmit())return this.emit(y);this.state=fn},canEmit:function(){for(var y=0;y<this.requireFail.length;){if(!(this.requireFail[y].state&(fn|nl)))return!1;y++}return!0},recognize:function(y){var x=p({},y);if(!v(this.options.enable,[this,x])){this.reset(),this.state=fn;return}this.state&(Mn|ko|fn)&&(this.state=nl),this.state=this.process(x),this.state&(Nt|Ci|Zn|ko)&&this.tryEmit(x)},process:function(y){},getTouchAction:function(){},reset:function(){}};function bx(y){return y&ko?"cancel":y&Zn?"end":y&Ci?"move":y&Nt?"start":""}function xp(y){return y==Ae?"down":y==ee?"up":y==se?"left":y==ce?"right":""}function rl(y,x){var T=x.manager;return T?T.get(y):y}function Qt(){On.apply(this,arguments)}_(Qt,On,{defaults:{pointers:1},attrTest:function(y){var x=this.options.pointers;return x===0||y.pointers.length===x},process:function(y){var x=this.state,T=y.eventType,k=x&(Nt|Ci),I=this.attrTest(y);return k&&(T&A||!I)?x|ko:k||I?T&K?x|Zn:x&Nt?x|Ci:Nt:fn}});function il(){Qt.apply(this,arguments),this.pX=null,this.pY=null}_(il,Qt,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ye},getTouchAction:function(){var y=this.options.direction,x=[];return y&Ce&&x.push($o),y&oe&&x.push(Po),x},directionTest:function(y){var x=this.options,T=!0,k=y.distance,I=y.direction,te=y.deltaX,de=y.deltaY;return I&x.direction||(x.direction&Ce?(I=te===0?Se:te<0?se:ce,T=te!=this.pX,k=Math.abs(y.deltaX)):(I=de===0?Se:de<0?ee:Ae,T=de!=this.pY,k=Math.abs(y.deltaY))),y.direction=I,T&&k>x.threshold&&I&x.direction},attrTest:function(y){return Qt.prototype.attrTest.call(this,y)&&(this.state&Nt||!(this.state&Nt)&&this.directionTest(y))},emit:function(y){this.pX=y.deltaX,this.pY=y.deltaY;var x=xp(y.direction);x&&this.manager.emit(this.options.event+x,y),this._super.emit.call(this,y)}});function Wu(){Qt.apply(this,arguments)}_(Wu,Qt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Oo]},attrTest:function(y){return this._super.attrTest.call(this,y)&&(Math.abs(y.scale-1)>this.options.threshold||this.state&Nt)},emit:function(y){if(this._super.emit.call(this,y),y.scale!==1){var x=y.scale<1?"in":"out";this.manager.emit(this.options.event+x,y)}}});function Uu(){On.apply(this,arguments),this._timer=null,this._input=null}_(Uu,On,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[wp]},process:function(y){var x=this.options,T=y.pointers.length===x.pointers,k=y.distance<x.threshold,I=y.deltaTime>x.time;if(this._input=y,!k||!T||y.eventType&(K|A)&&!I)this.reset();else if(y.eventType&X)this.reset(),this._timer=f(function(){this.state=Mn,this.tryEmit()},x.time,this);else if(y.eventType&K)return Mn;return fn},reset:function(){clearTimeout(this._timer)},emit:function(y){this.state===Mn&&(y&&y.eventType&K?this.manager.emit(this.options.event+"up",y):(this._input.timeStamp=c(),this.manager.emit(this.options.event,this._input)))}});function Vu(){Qt.apply(this,arguments)}_(Vu,Qt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Oo]},attrTest:function(y){return this._super.attrTest.call(this,y)&&(Math.abs(y.rotation)>this.options.threshold||this.state&Nt)}});function Yu(){Qt.apply(this,arguments)}_(Yu,Qt,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ce|oe,pointers:1},getTouchAction:function(){return il.prototype.getTouchAction.call(this)},attrTest:function(y){var x=this.options.direction,T;return x&(Ce|oe)?T=y.velocity:x&Ce?T=y.velocityX:x&oe&&(T=y.velocityY),this._super.attrTest.call(this,y)&&x&y.direction&&y.distance>this.options.threshold&&u(T)>this.options.velocity&&y.eventType&K},emit:function(y){var x=xp(y.direction);x&&this.manager.emit(this.options.event+x,y),this.manager.emit(this.options.event,y)}});function ol(){On.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}_(ol,On,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[Hu]},process:function(y){var x=this.options,T=y.pointers.length===x.pointers,k=y.distance<x.threshold,I=y.deltaTime<x.time;if(this.reset(),y.eventType&X&&this.count===0)return this.failTimeout();if(k&&I&&T){if(y.eventType!=K)return this.failTimeout();var te=this.pTime?y.timeStamp-this.pTime<x.interval:!0,de=!this.pCenter||Ja(this.pCenter,y.center)<x.posThreshold;this.pTime=y.timeStamp,this.pCenter=y.center,!de||!te?this.count=1:this.count+=1,this._input=y;var ct=this.count%x.taps;if(ct===0)return this.hasRequireFailures()?(this._timer=f(function(){this.state=Mn,this.tryEmit()},x.interval,this),Nt):Mn}return fn},failTimeout:function(){return this._timer=f(function(){this.state=fn},this.options.interval,this),fn},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Mn&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}});function Jn(y,x){return x=x||{},x.recognizers=w(x.recognizers,Jn.defaults.preset),new Xu(y,x)}Jn.VERSION="2.0.4",Jn.defaults={domEvents:!1,touchAction:_p,enable:!0,inputTarget:null,inputClass:null,preset:[[Vu,{enable:!1}],[Wu,{enable:!1},["rotate"]],[Yu,{direction:Ce}],[il,{direction:Ce},["swipe"]],[ol],[ol,{event:"doubletap",taps:2},["tap"]],[Uu]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Sx=1,bp=2;function Xu(y,x){x=x||{},this.options=g(x,Jn.defaults),this.options.inputTarget=this.options.inputTarget||y,this.handlers={},this.session={},this.recognizers=[],this.element=y,this.input=Xe(this),this.touchAction=new Bu(this,this.options.touchAction),Sp(this,!0),d(x.recognizers,function(T){var k=this.add(new T[0](T[1]));T[2]&&k.recognizeWith(T[2]),T[3]&&k.requireFailure(T[3])},this)}Xu.prototype={set:function(y){return p(this.options,y),y.touchAction&&this.touchAction.update(),y.inputTarget&&(this.input.destroy(),this.input.target=y.inputTarget,this.input.init()),this},stop:function(y){this.session.stopped=y?bp:Sx},recognize:function(y){var x=this.session;if(!x.stopped){this.touchAction.preventDefaults(y);var T,k=this.recognizers,I=x.curRecognizer;(!I||I&&I.state&Mn)&&(I=x.curRecognizer=null);for(var te=0;te<k.length;)T=k[te],x.stopped!==bp&&(!I||T==I||T.canRecognizeWith(I))?T.recognize(y):T.reset(),!I&&T.state&(Nt|Ci|Zn)&&(I=x.curRecognizer=T),te++}},get:function(y){if(y instanceof On)return y;for(var x=this.recognizers,T=0;T<x.length;T++)if(x[T].options.event==y)return x[T];return null},add:function(y){if(h(y,"add",this))return this;var x=this.get(y.options.event);return x&&this.remove(x),this.recognizers.push(y),y.manager=this,this.touchAction.update(),y},remove:function(y){if(h(y,"remove",this))return this;var x=this.recognizers;return y=this.get(y),x.splice(F(x,y),1),this.touchAction.update(),this},on:function(y,x){var T=this.handlers;return d(P(y),function(k){T[k]=T[k]||[],T[k].push(x)}),this},off:function(y,x){var T=this.handlers;return d(P(y),function(k){x?T[k].splice(F(T[k],x),1):delete T[k]}),this},emit:function(y,x){this.options.domEvents&&Tx(y,x);var T=this.handlers[y]&&this.handlers[y].slice();if(!(!T||!T.length)){x.type=y,x.preventDefault=function(){x.srcEvent.preventDefault()};for(var k=0;k<T.length;)T[k](x),k++}},destroy:function(){this.element&&Sp(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}};function Sp(y,x){var T=y.element;d(y.options.cssProps,function(k,I){T.style[Z(T.style,I)]=x?k:""})}function Tx(y,x){var T=n.createEvent("Event");T.initEvent(y,!0,!0),T.gesture=x,x.target.dispatchEvent(T)}p(Jn,{INPUT_START:X,INPUT_MOVE:O,INPUT_END:K,INPUT_CANCEL:A,STATE_POSSIBLE:nl,STATE_BEGAN:Nt,STATE_CHANGED:Ci,STATE_ENDED:Zn,STATE_RECOGNIZED:Mn,STATE_CANCELLED:ko,STATE_FAILED:fn,DIRECTION_NONE:Se,DIRECTION_LEFT:se,DIRECTION_RIGHT:ce,DIRECTION_UP:ee,DIRECTION_DOWN:Ae,DIRECTION_HORIZONTAL:Ce,DIRECTION_VERTICAL:oe,DIRECTION_ALL:Ye,Manager:Xu,Input:Qe,TouchAction:Bu,TouchInput:tl,MouseInput:el,PointerEventInput:Nu,TouchMouseInput:Du,SingleTouchInput:mp,Recognizer:On,AttrRecognizer:Qt,Tap:ol,Pan:il,Swipe:Yu,Pinch:Wu,Rotate:Vu,Press:Uu,on:b,off:S,each:d,merge:g,extend:p,inherit:_,bindFn:m,prefixed:Z}),typeof i==l&&i.amd?i(function(){return Jn}):e.exports?e.exports=Jn:t[r]=Jn})(window,document,"Hammer")})(qj);var $i=Ns,Kj=1,Hc="MarzipanoHammerElementId";function D2(e,t){return e[Hc]||(e[Hc]=Kj++),t+e[Hc]}function Lu(){this._managers={},this._refCount={}}Lu.prototype.get=function(e,t){var n=D2(e,t);return this._managers[n]||(this._managers[n]=this._createManager(e,t),this._refCount[n]=0),this._refCount[n]++,new Ru(this,this._managers[n],e,t)};Lu.prototype._createManager=function(e,t){var n=new $i.Manager(e);return t==="mouse"?n.add(new $i.Pan({direction:$i.DIRECTION_ALL,threshold:0})):(t==="touch"||t==="pen"||t==="kinect")&&(n.add(new $i.Pan({direction:$i.DIRECTION_ALL,threshold:20,pointers:1})),n.add(new $i.Pinch)),n};Lu.prototype._releaseHandle=function(e,t){var n=D2(e,t);this._refCount[n]&&(this._refCount[n]--,this._refCount[n]||(this._managers[n].destroy(),delete this._managers[n],delete this._refCount[n]))};function Ru(e,t,n,r){this._manager=t,this._element=n,this._type=r,this._hammerGestures=e,this._eventHandlers=[]}Ru.prototype.on=function(e,t){var n=this._type,r=function(i){n===i.pointerType&&t(i)};this._eventHandlers.push({events:e,handler:r}),this._manager.on(e,r)};Ru.prototype.release=function(){for(var e=0;e<this._eventHandlers.length;e++){var t=this._eventHandlers[e];this._manager.off(t.events,t.handler)}this._hammerGestures._releaseHandle(this._element,this._type),this._manager=null,this._element=null,this._type=null,this._hammerGestures=null};Ru.prototype.manager=function(){return this._manager};var Iu=new Lu;function Qj(e,t,n,r,i){var o=Math.sqrt(Math.pow(t,2)+Math.pow(n,2));e=Math.max(e,o/r),H2(t,n,e,i),i[0]=Math.abs(i[0]),i[1]=Math.abs(i[1])}function H2(e,t,n,r){var i=Math.atan(t/e);r[0]=n*Math.cos(i),r[1]=n*Math.sin(i)}var B2={maxFriction:Qj,changeVectorNorm:H2},Zj=ze,p1=Kn,Jj=Iu,eF=En,tF=B2.maxFriction,nF=Ee,rF={friction:6,maxFrictionTime:.3,hammerEvent:"pan"},v1=typeof MARZIPANODEBUG<"u"&&MARZIPANODEBUG.controls;function Qn(e,t,n){if(this._element=e,this._opts=eF(n||{},rF),this._startEvent=null,this._lastEvent=null,this._active=!1,this._dynamics={x:new p1,y:new p1},this._hammer=Jj.get(e,t),this._hammer.on("hammer.input",this._handleHammerEvent.bind(this)),this._opts.hammerEvent!="pan"&&this._opts.hammerEvent!="pinch")throw new Error(this._opts.hammerEvent+" is not a hammerEvent managed in DragControlMethod");this._hammer.on(this._opts.hammerEvent+"start",this._handleStart.bind(this)),this._hammer.on(this._opts.hammerEvent+"move",this._handleMove.bind(this)),this._hammer.on(this._opts.hammerEvent+"end",this._handleEnd.bind(this)),this._hammer.on(this._opts.hammerEvent+"cancel",this._handleEnd.bind(this))}Zj(Qn);Qn.prototype.destroy=function(){this._hammer.release(),nF(this)};Qn.prototype._handleHammerEvent=function(e){if(e.isFirst){if(v1&&this._active)throw new Error("DragControlMethod active detected when already active");this._active=!0,this.emit("active")}if(e.isFinal){if(v1&&!this._active)throw new Error("DragControlMethod inactive detected when already inactive");this._active=!1,this.emit("inactive")}};Qn.prototype._handleStart=function(e){e.preventDefault(),this._startEvent=e};Qn.prototype._handleMove=function(e){e.preventDefault(),this._startEvent&&(this._updateDynamicsMove(e),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y))};Qn.prototype._handleEnd=function(e){e.preventDefault(),this._startEvent&&(this._updateDynamicsRelease(e),this.emit("parameterDynamics","axisScaledX",this._dynamics.x),this.emit("parameterDynamics","axisScaledY",this._dynamics.y)),this._startEvent=!1,this._lastEvent=!1};Qn.prototype._updateDynamicsMove=function(e){var t=e.deltaX,n=e.deltaY,r=this._lastEvent||this._startEvent;r&&(t-=r.deltaX,n-=r.deltaY);var i=this._element.getBoundingClientRect(),o=i.right-i.left,a=i.bottom-i.top;t/=o,n/=a,this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.offset=-t,this._dynamics.y.offset=-n,this._lastEvent=e};var Bc=[null,null];Qn.prototype._updateDynamicsRelease=function(e){var t=this._element.getBoundingClientRect(),n=t.right-t.left,r=t.bottom-t.top,i=1e3*e.velocityX/n,o=1e3*e.velocityY/r;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=i,this._dynamics.y.velocity=o,tF(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,Bc),this._dynamics.x.friction=Bc[0],this._dynamics.y.friction=Bc[1]};var W2=Qn,iF=ze,m1=Kn,oF=Iu,aF=En,lF=B2.maxFriction,sF=Ee,uF={speed:8,friction:6,maxFrictionTime:.3};function Si(e,t,n){this._element=e,this._opts=aF(n||{},uF),this._active=!1,this._hammer=oF.get(e,t),this._dynamics={x:new m1,y:new m1},this._hammer.on("panstart",this._handleStart.bind(this)),this._hammer.on("panmove",this._handleMove.bind(this)),this._hammer.on("panend",this._handleRelease.bind(this)),this._hammer.on("pancancel",this._handleRelease.bind(this))}iF(Si);Si.prototype.destroy=function(){this._hammer.release(),sF(this)};Si.prototype._handleStart=function(e){e.preventDefault(),this._active||(this._active=!0,this.emit("active"))};Si.prototype._handleMove=function(e){e.preventDefault(),this._updateDynamics(e,!1)};Si.prototype._handleRelease=function(e){e.preventDefault(),this._updateDynamics(e,!0),this._active&&(this._active=!1,this.emit("inactive"))};var Wc=[null,null];Si.prototype._updateDynamics=function(e,t){var n=this._element.getBoundingClientRect(),r=n.right-n.left,i=n.bottom-n.top,o=Math.max(r,i),a=e.deltaX/o*this._opts.speed,l=e.deltaY/o*this._opts.speed;this._dynamics.x.reset(),this._dynamics.y.reset(),this._dynamics.x.velocity=a,this._dynamics.y.velocity=l,t&&(lF(this._opts.friction,this._dynamics.x.velocity,this._dynamics.y.velocity,this._opts.maxFrictionTime,Wc),this._dynamics.x.friction=Wc[0],this._dynamics.y.friction=Wc[1]),this.emit("parameterDynamics","x",this._dynamics.x),this.emit("parameterDynamics","y",this._dynamics.y)};var U2=Si,cF=ze,fF=Kn,hF=En,dF=Ee,pF={frictionTime:.2,zoomDelta:.001};function Ka(e,t){this._element=e,this._opts=hF(t||{},pF),this._dynamics=new fF,this._eventList=[];var n=this._opts.frictionTime?this.withSmoothing:this.withoutSmoothing;this._wheelListener=n.bind(this),e.addEventListener("wheel",this._wheelListener)}cF(Ka);Ka.prototype.destroy=function(){this._element.removeEventListener("wheel",this._wheelListener),dF(this)};Ka.prototype.withoutSmoothing=function(e){this._dynamics.offset=V2(e)*this._opts.zoomDelta,this.emit("parameterDynamics","zoom",this._dynamics),e.preventDefault(),this.emit("active"),this.emit("inactive")};Ka.prototype.withSmoothing=function(e){var t=e.timeStamp;for(this._eventList.push(e);this._eventList[0].timeStamp<t-this._opts.frictionTime*1e3;)this._eventList.shift(0);for(var n=0,r=0;r<this._eventList.length;r++){var i=V2(this._eventList[r])*this._opts.zoomDelta;n+=i/this._opts.frictionTime}this._dynamics.velocity=n,this._dynamics.friction=Math.abs(n)/this._opts.frictionTime,this.emit("parameterDynamics","zoom",this._dynamics),e.preventDefault(),this.emit("active"),this.emit("inactive")};function V2(e){var t=e.deltaMode==1?20:1;return e.deltaY*t}var Y2=Ka,vF=ze,mF=Kn,yF=Iu,gF=Ee;function To(e,t,n){this._hammer=yF.get(e,t),this._lastEvent=null,this._active=!1,this._dynamics=new mF,this._hammer.on("pinchstart",this._handleStart.bind(this)),this._hammer.on("pinch",this._handleEvent.bind(this)),this._hammer.on("pinchend",this._handleEnd.bind(this)),this._hammer.on("pinchcancel",this._handleEnd.bind(this))}vF(To);To.prototype.destroy=function(){this._hammer.release(),gF(this)};To.prototype._handleStart=function(){this._active||(this._active=!0,this.emit("active"))};To.prototype._handleEnd=function(){this._lastEvent=null,this._active&&(this._active=!1,this.emit("inactive"))};To.prototype._handleEvent=function(e){var t=e.scale;this._lastEvent&&(t/=this._lastEvent.scale),this._dynamics.offset=(t-1)*-1,this.emit("parameterDynamics","zoom",this._dynamics),this._lastEvent=e};var X2=To,_F=ze,wF=Kn,xF=Ee;function Qa(e){if(!e)throw new Error("VelocityControlMethod: parameter must be defined");this._parameter=e,this._dynamics=new wF}_F(Qa);Qa.prototype.destroy=function(){xF(this)};Qa.prototype.setVelocity=function(e){this._dynamics.velocity=e,this.emit("parameterDynamics",this._parameter,this._dynamics)};Qa.prototype.setFriction=function(e){this._dynamics.friction=e,this.emit("parameterDynamics",this._parameter,this._dynamics)};var bF=Qa,SF=ze,TF=Kn,EF=Ee;function Za(e,t,n,r){if(!e)throw new Error("ElementPressControlMethod: element must be defined");if(!t)throw new Error("ElementPressControlMethod: parameter must be defined");if(!n)throw new Error("ElementPressControlMethod: velocity must be defined");if(!r)throw new Error("ElementPressControlMethod: friction must be defined");this._element=e,this._pressHandler=this._handlePress.bind(this),this._releaseHandler=this._handleRelease.bind(this),e.addEventListener("mousedown",this._pressHandler),e.addEventListener("mouseup",this._releaseHandler),e.addEventListener("mouseleave",this._releaseHandler),e.addEventListener("touchstart",this._pressHandler),e.addEventListener("touchmove",this._releaseHandler),e.addEventListener("touchend",this._releaseHandler),this._parameter=t,this._velocity=n,this._friction=r,this._dynamics=new TF,this._pressing=!1}SF(Za);Za.prototype.destroy=function(){this._element.removeEventListener("mousedown",this._pressHandler),this._element.removeEventListener("mouseup",this._releaseHandler),this._element.removeEventListener("mouseleave",this._releaseHandler),this._element.removeEventListener("touchstart",this._pressHandler),this._element.removeEventListener("touchmove",this._releaseHandler),this._element.removeEventListener("touchend",this._releaseHandler),EF(this)};Za.prototype._handlePress=function(){this._pressing=!0,this._dynamics.velocity=this._velocity,this._dynamics.friction=0,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("active")};Za.prototype._handleRelease=function(){this._pressing&&(this._dynamics.friction=this._friction,this.emit("parameterDynamics",this._parameter,this._dynamics),this.emit("inactive")),this._pressing=!1};var CF=Za,MF=ze,OF=Kn,PF=yi,$F=Ee;function cn(e){e=e||{},this._methods=[],this._parameters=["x","y","axisScaledX","axisScaledY","zoom","yaw","pitch","roll"],this._now=e.nowForTesting||PF,this._composedOffsets={},this._composeReturn={offsets:this._composedOffsets,changing:null}}MF(cn);cn.prototype.add=function(e){if(!this.has(e)){var t={};this._parameters.forEach(function(i){t[i]={dynamics:new OF,time:null}});var n=this._updateDynamics.bind(this,t),r={instance:e,dynamics:t,parameterDynamicsHandler:n};e.addEventListener("parameterDynamics",n),this._methods.push(r)}};cn.prototype.remove=function(e){var t=this._indexOfInstance(e);if(t>=0){var n=this._methods.splice(t,1)[0];n.instance.removeEventListener("parameterDynamics",n.parameterDynamicsHandler)}};cn.prototype.has=function(e){return this._indexOfInstance(e)>=0};cn.prototype._indexOfInstance=function(e){for(var t=0;t<this._methods.length;t++)if(this._methods[t].instance===e)return t;return-1};cn.prototype.list=function(){for(var e=[],t=0;t<this._methods.length;t++)e.push(this._methods[t].instance);return e};cn.prototype._updateDynamics=function(e,t,n){var r=e[t];if(!r)throw new Error("Unknown control parameter "+t);var i=this._now();r.dynamics.update(n,(i-r.time)/1e3),r.time=i,this.emit("change")};cn.prototype._resetComposedOffsets=function(){for(var e=0;e<this._parameters.length;e++)this._composedOffsets[this._parameters[e]]=0};cn.prototype.offsets=function(){var e,t=!1,n=this._now();this._resetComposedOffsets();for(var r=0;r<this._methods.length;r++)for(var i=this._methods[r].dynamics,o=0;o<this._parameters.length;o++){e=this._parameters[o];var a=i[e],l=a.dynamics;l.offset!=null&&(this._composedOffsets[e]+=l.offset,l.offset=null);var s=(n-a.time)/1e3,u=l.offsetFromVelocity(s);u&&(this._composedOffsets[e]+=u);var c=l.velocityAfter(s);l.velocity=c,c&&(t=!0),a.time=n}return this._composeReturn.changing=t,this._composeReturn};cn.prototype.destroy=function(){for(var e=this.list(),t=0;t<e.length;t++)this.remove(e[t]);$F(this)};var kF=cn,zF=ze,AF=kF,LF=Ee,G2=typeof MARZIPANODEBUG<"u"&&MARZIPANODEBUG.controls;function xe(e){e=e||{},this._methods={},this._methodGroups={},this._composer=new AF,this._enabled=e&&e.enabled?!!e.enabled:!0,this._activeCount=0,this.updatedViews_=[],this._attachedRenderLoop=null}zF(xe);xe.prototype.destroy=function(){this.detach(),this._composer.destroy(),LF(this)};xe.prototype.methods=function(){var e={};for(var t in this._methods)e[t]=this._methods[t];return e};xe.prototype.method=function(e){return this._methods[e]};xe.prototype.registerMethod=function(e,t,n){if(this._methods[e])throw new Error("Control method already registered with id "+e);this._methods[e]={instance:t,enabled:!1,active:!1,activeHandler:this._handleActive.bind(this,e),inactiveHandler:this._handleInactive.bind(this,e)},n&&this.enableMethod(e,t)};xe.prototype.unregisterMethod=function(e){var t=this._methods[e];if(!t)throw new Error("No control method registered with id "+e);t.enabled&&this.disableMethod(e),delete this._methods[e]};xe.prototype.enableMethod=function(e){var t=this._methods[e];if(!t)throw new Error("No control method registered with id "+e);t.enabled||(t.enabled=!0,t.active&&this._incrementActiveCount(),this._listen(e),this._updateComposer(),this.emit("methodEnabled",e))};xe.prototype.disableMethod=function(e){var t=this._methods[e];if(!t)throw new Error("No control method registered with id "+e);t.enabled&&(t.enabled=!1,t.active&&this._decrementActiveCount(),this._unlisten(e),this._updateComposer(),this.emit("methodDisabled",e))};xe.prototype.addMethodGroup=function(e,t){this._methodGroups[e]=t};xe.prototype.removeMethodGroup=function(e){delete this._methodGroups[e]};xe.prototype.methodGroups=function(){var e={};for(var t in this._methodGroups)e[t]=this._methodGroups[t];return e};xe.prototype.enableMethodGroup=function(e){var t=this;t._methodGroups[e].forEach(function(n){t.enableMethod(n)})};xe.prototype.disableMethodGroup=function(e){var t=this;t._methodGroups[e].forEach(function(n){t.disableMethod(n)})};xe.prototype.enabled=function(){return this._enabled};xe.prototype.enable=function(){this._enabled||(this._enabled=!0,this._activeCount>0&&this.emit("active"),this.emit("enabled"),this._updateComposer())};xe.prototype.disable=function(){this._enabled&&(this._enabled=!1,this._activeCount>0&&this.emit("inactive"),this.emit("disabled"),this._updateComposer())};xe.prototype.attach=function(e){this._attachedRenderLoop&&this.detach(),this._attachedRenderLoop=e,this._beforeRenderHandler=this._updateViewsWithControls.bind(this),this._changeHandler=e.renderOnNextFrame.bind(e),this._attachedRenderLoop.addEventListener("beforeRender",this._beforeRenderHandler),this._composer.addEventListener("change",this._changeHandler)};xe.prototype.detach=function(){this._attachedRenderLoop&&(this._attachedRenderLoop.removeEventListener("beforeRender",this._beforeRenderHandler),this._composer.removeEventListener("change",this._changeHandler),this._beforeRenderHandler=null,this._changeHandler=null,this._attachedRenderLoop=null)};xe.prototype.attached=function(){return this._attachedRenderLoop!=null};xe.prototype._listen=function(e){var t=this._methods[e];if(!t)throw new Error("Bad method id");t.instance.addEventListener("active",t.activeHandler),t.instance.addEventListener("inactive",t.inactiveHandler)};xe.prototype._unlisten=function(e){var t=this._methods[e];if(!t)throw new Error("Bad method id");t.instance.removeEventListener("active",t.activeHandler),t.instance.removeEventListener("inactive",t.inactiveHandler)};xe.prototype._handleActive=function(e){var t=this._methods[e];if(!t)throw new Error("Bad method id");if(!t.enabled)throw new Error("Should not receive event from disabled control method");t.active||(t.active=!0,this._incrementActiveCount())};xe.prototype._handleInactive=function(e){var t=this._methods[e];if(!t)throw new Error("Bad method id");if(!t.enabled)throw new Error("Should not receive event from disabled control method");t.active&&(t.active=!1,this._decrementActiveCount())};xe.prototype._incrementActiveCount=function(){this._activeCount++,G2&&this._checkActiveCount(),this._enabled&&this._activeCount===1&&this.emit("active")};xe.prototype._decrementActiveCount=function(){this._activeCount--,G2&&this._checkActiveCount(),this._enabled&&this._activeCount===0&&this.emit("inactive")};xe.prototype._checkActiveCount=function(){var e=0;for(var t in this._methods){var n=this._methods[t];n.enabled&&n.active&&e++}if(e!=this._activeCount)throw new Error("Bad control state")};xe.prototype._updateComposer=function(){var e=this._composer;for(var t in this._methods){var n=this._methods[t],r=this._enabled&&n.enabled;r&&!e.has(n.instance)&&e.add(n.instance),!r&&e.has(n.instance)&&e.remove(n.instance)}};xe.prototype._updateViewsWithControls=function(){var e=this._composer.offsets();e.changing&&this._attachedRenderLoop.renderOnNextFrame(),this.updatedViews_.length=0;for(var t=this._attachedRenderLoop.stage().listLayers(),n=0;n<t.length;n++){var r=t[n].view();this.updatedViews_.indexOf(r)<0&&(t[n].view().updateWithControlParameters(e.offsets),this.updatedViews_.push(r))}};var q2=xe,RF=Ot.setTransform,y1=cp;function IF(e,t,n,r){r=r||"";var i="translateX("+y1(t)+"px) translateY("+y1(n)+"px) translateZ(0) "+r;RF(e,i)}var K2=IF,jF=ze,FF=K2,NF=Ot.setTransform,DF=Ee;function jt(e,t,n,r,i){i=i||{},i.perspective=i.perspective||{},i.perspective.extraTransforms=i.perspective.extraTransforms!=null?i.perspective.extraTransforms:"",this._domElement=e,this._parentDomElement=t,this._view=n,this._coords={},this._perspective={},this.setPosition(r),this._parentDomElement.appendChild(this._domElement),this.setPerspective(i.perspective),this._visible=!0,this._position={x:0,y:0}}jF(jt);jt.prototype.destroy=function(){this._parentDomElement.removeChild(this._domElement),DF(this)};jt.prototype.domElement=function(){return this._domElement};jt.prototype.position=function(){return this._coords};jt.prototype.setPosition=function(e){for(var t in e)this._coords[t]=e[t];this._update()};jt.prototype.perspective=function(){return this._perspective};jt.prototype.setPerspective=function(e){for(var t in e)this._perspective[t]=e[t];this._update()};jt.prototype.show=function(){this._visible||(this._visible=!0,this._update())};jt.prototype.hide=function(){this._visible&&(this._visible=!1,this._update())};jt.prototype._update=function(){var e=this._domElement,t=this._coords,n=this._position,r,i,o=!1;if(this._visible){var a=this._view;this._perspective.radius?(o=!0,this._setEmbeddedPosition(a,t)):(a.coordinatesToScreen(t,n),r=n.x,i=n.y,r!=null&&i!=null&&(o=!0,this._setPosition(r,i)))}o?(e.style.display="block",e.style.position="absolute"):(e.style.display="none",e.style.position="")};jt.prototype._setEmbeddedPosition=function(e,t){var n=e.coordinatesToPerspectiveTransform(t,this._perspective.radius,this._perspective.extraTransforms);NF(this._domElement,n)};jt.prototype._setPosition=function(e,t){FF(this._domElement,e,t,this._perspective.extraTransforms)};var Q2=jt,HF=ze,BF=Q2,WF=Y_,g1=K2,_1=Ot.setAbsolute,UF=Ot.setOverflowHidden,VF=Ot.setOverflowVisible,YF=Ot.setNullSize,XF=Ot.setPixelSize,w1=Ot.setWithVendorPrefix("pointer-events"),GF=Ee;function Ft(e,t,n,r,i){i=i||{},this._parentDomElement=e,this._stage=t,this._view=n,this._renderLoop=r,this._hotspots=[],this._visible=!0,this._rect=i.rect,this._visibilityOrRectChanged=!0,this._stageWidth=null,this._stageHeight=null,this._tmpRect={},this._hotspotContainerWrapper=document.createElement("div"),_1(this._hotspotContainerWrapper),w1(this._hotspotContainerWrapper,"none"),this._parentDomElement.appendChild(this._hotspotContainerWrapper),this._hotspotContainer=document.createElement("div"),_1(this._hotspotContainer),w1(this._hotspotContainer,"all"),this._hotspotContainerWrapper.appendChild(this._hotspotContainer),this._updateHandler=this._update.bind(this),this._renderLoop.addEventListener("afterRender",this._updateHandler)}HF(Ft);Ft.prototype.destroy=function(){for(;this._hotspots.length;)this.destroyHotspot(this._hotspots[0]);this._parentDomElement.removeChild(this._hotspotContainerWrapper),this._renderLoop.removeEventListener("afterRender",this._updateHandler),GF(this)};Ft.prototype.domElement=function(){return this._hotspotContainer};Ft.prototype.setRect=function(e){this._rect=e,this._visibilityOrRectChanged=!0};Ft.prototype.rect=function(){return this._rect};Ft.prototype.createHotspot=function(e,t,n){t=t||{};var r=new BF(e,this._hotspotContainer,this._view,t,n);return this._hotspots.push(r),r._update(),this.emit("hotspotsChange"),r};Ft.prototype.hasHotspot=function(e){return this._hotspots.indexOf(e)>=0};Ft.prototype.listHotspots=function(){return[].concat(this._hotspots)};Ft.prototype.destroyHotspot=function(e){var t=this._hotspots.indexOf(e);if(t<0)throw new Error("No such hotspot");this._hotspots.splice(t,1),e.destroy(),this.emit("hotspotsChange")};Ft.prototype.hide=function(){this._visible&&(this._visible=!1,this._visibilityOrRectChanged=!0,this._update())};Ft.prototype.show=function(){this._visible||(this._visible=!0,this._visibilityOrRectChanged=!0,this._update())};Ft.prototype._update=function(){var e=this._hotspotContainerWrapper,t=this._stage.width(),n=this._stage.height(),r=this._tmpRect;if(this._visibilityOrRectChanged||this._rect&&(t!==this._stageWidth||n!==this._stageHeight)){var i=this._visible;e.style.display=i?"block":"none",i&&(this._rect?(WF(t,n,this._rect,r),g1(e,t*r.x,n*r.y),XF(e,t*r.width,n*r.height),UF(e)):(g1(e,0,0),YF(e),VF(e))),this._stageWidth=t,this._stageHeight=n,this._visibilityOrRectChanged=!1}for(var o=0;o<this._hotspots.length;o++)this._hotspots[o]._update()};var Z2=Ft,qF=j2,KF=R2,QF=Z2,ZF=ze,J2=yi,JF=Ga,e8=Ya,x1=En,t8=Ee;function Ke(e,t){this._viewer=e,this._view=t,this._layers=[],this._hotspotContainer=new QF(e._controlContainer,e.stage(),this._view,e.renderLoop()),this._movement=null,this._movementStartTime=null,this._movementStep=null,this._movementParams=null,this._movementCallback=null,this._updateMovementHandler=this._updateMovement.bind(this),this._updateHotspotContainerHandler=this._updateHotspotContainer.bind(this),this._viewer.addEventListener("sceneChange",this._updateHotspotContainerHandler),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._view.addEventListener("change",this._viewChangeHandler),this._updateHotspotContainer()}ZF(Ke);Ke.prototype.destroy=function(){this._view.removeEventListener("change",this._viewChangeHandler),this._viewer.removeEventListener("sceneChange",this._updateHotspotContainerHandler),this._movement&&this.stopMovement(),this._hotspotContainer.destroy(),this.destroyAllLayers(),t8(this)};Ke.prototype.hotspotContainer=function(){return this._hotspotContainer};Ke.prototype.layer=function(){return this._layers[0]};Ke.prototype.listLayers=function(){return[].concat(this._layers)};Ke.prototype.view=function(){return this._view};Ke.prototype.viewer=function(){return this._viewer};Ke.prototype.visible=function(){return this._viewer.scene()===this};Ke.prototype.createLayer=function(e){e=e||{};var t=e.textureStoreOpts||{},n=e.layerOpts||{},r=e.source,i=e.geometry,o=this._view,a=this._viewer.stage(),l=new KF(r,a,t),s=new qF(r,i,o,l,n);return this._layers.push(s),e.pinFirstLevel&&s.pinFirstLevel(),this.emit("layerChange"),s};Ke.prototype.destroyLayer=function(e){var t=this._layers.indexOf(e);if(t<0)throw new Error("No such layer in scene");this._layers.splice(t,1),this.emit("layerChange"),e.textureStore().destroy(),e.destroy()};Ke.prototype.destroyAllLayers=function(){for(;this._layers.length>0;)this.destroyLayer(this._layers[0])};Ke.prototype.switchTo=function(e,t){return this._viewer.switchScene(this,e,t)};Ke.prototype.lookTo=function(e,t,n){var r=this;if(t=t||{},n=n||JF,e8(e)!=="object")throw new Error("Target view parameters must be an object");var i=function(p){return(p*=2)<1?.5*p*p:-.5*(--p*(p-2)-1)},o=t.ease!=null?t.ease:i,a=t.controlsInterrupt!=null?t.controlsInterrupt:!1,l=t.transitionDuration!=null?t.transitionDuration:1e3,s=t.shortest!=null?t.shortest:!0,u=this._view,c=u.parameters(),f={};x1(f,e),x1(f,c),s&&u.normalizeToClosest&&u.normalizeToClosest(f,f);var h=function(){var p=!1;return function(g,_){if(_>=l&&p)return null;var m=Math.min(_/l,1);for(var v in g){var w=c[v],b=f[v];g[v]=w+o(m)*(b-w)}return p=_>=l,g}},d=this._viewer.controls().enabled();a||this._viewer.controls().disable(),this.startMovement(h,function(){d&&r._viewer.controls().enable(),n()})};Ke.prototype.startMovement=function(e,t){var n=this._viewer.renderLoop();this._movement&&this.stopMovement();var r=e();if(typeof r!="function")throw new Error("Bad movement");this._movement=e,this._movementStep=r,this._movementStartTime=J2(),this._movementParams={},this._movementCallback=t,n.addEventListener("beforeRender",this._updateMovementHandler),n.renderOnNextFrame()};Ke.prototype.stopMovement=function(){var e=this._movementCallback,t=this._viewer.renderLoop();this._movement&&(this._movement=null,this._movementStep=null,this._movementStartTime=null,this._movementParams=null,this._movementCallback=null,t.removeEventListener("beforeRender",this._updateMovementHandler),e&&e())};Ke.prototype.movement=function(){return this._movement};Ke.prototype._updateMovement=function(){if(!this._movement)throw new Error("Should not call update");var e=this._viewer.renderLoop(),t=this._view,n=J2()-this._movementStartTime,r=this._movementStep,i=this._movementParams;i=t.parameters(i),i=r(i,n),i==null?this.stopMovement():(t.setParameters(i),e.renderOnNextFrame())};Ke.prototype._updateHotspotContainer=function(){this.visible()?this._hotspotContainer.show():this._hotspotContainer.hide()};var ex=Ke,n8=ze,r8=En,tx=yi,i8={duration:1/0};function Cn(e){e=r8(e||{},i8),this._duration=e.duration,this._startTime=null,this._handle=null,this._check=this._check.bind(this)}n8(Cn);Cn.prototype.start=function(){this._startTime=tx(),this._handle==null&&this._duration<1/0&&this._setup(this._duration)};Cn.prototype.started=function(){return this._startTime!=null};Cn.prototype.stop=function(){this._startTime=null,this._handle!=null&&(clearTimeout(this._handle),this._handle=null)};Cn.prototype._setup=function(e){this._handle=setTimeout(this._check,e)};Cn.prototype._teardown=function(){clearTimeout(this._handle),this._handle=null};Cn.prototype._check=function(){var e=tx(),t=e-this._startTime,n=this._duration-t;this._teardown(),n<=0?(this.emit("timeout"),this._startTime=null):n<1/0&&this._setup(n)};Cn.prototype.duration=function(){return this._duration};Cn.prototype.setDuration=function(e){this._duration=e,this._startTime!=null&&this._check()};var o8=Cn,a8=En,l8=Ee,s8={active:"move",inactive:"default",disabled:"default"};function Eo(e,t,n,r){r=a8(r||{},s8),this._element=n,this._controls=e,this._id=t,this._attached=!1,this._setActiveCursor=this._setCursor.bind(this,r.active),this._setInactiveCursor=this._setCursor.bind(this,r.inactive),this._setDisabledCursor=this._setCursor.bind(this,r.disabled),this._setOriginalCursor=this._setCursor.bind(this,this._element.style.cursor),this._updateAttachmentHandler=this._updateAttachment.bind(this),e.addEventListener("methodEnabled",this._updateAttachmentHandler),e.addEventListener("methodDisabled",this._updateAttachmentHandler),e.addEventListener("enabled",this._updateAttachmentHandler),e.addEventListener("disabled",this._updateAttachmentHandler),this._updateAttachment()}Eo.prototype.destroy=function(){this._detachFromControlMethod(this._controls.method(this._id)),this._setOriginalCursor(),this._controls.removeEventListener("methodEnabled",this._updateAttachmentHandler),this._controls.removeEventListener("methodDisabled",this._updateAttachmentHandler),this._controls.removeEventListener("enabled",this._updateAttachmentHandler),this._controls.removeEventListener("disabled",this._updateAttachmentHandler),l8(this)};Eo.prototype._updateAttachment=function(){var e=this._controls,t=this._id;e.enabled()&&e.method(t).enabled?this._attachToControlMethod(e.method(t)):this._detachFromControlMethod(e.method(t))};Eo.prototype._attachToControlMethod=function(e){this._attached||(e.instance.addEventListener("active",this._setActiveCursor),e.instance.addEventListener("inactive",this._setInactiveCursor),e.active?this._setActiveCursor():this._setInactiveCursor(),this._attached=!0)};Eo.prototype._detachFromControlMethod=function(e){this._attached&&(e.instance.removeEventListener("active",this._setActiveCursor),e.instance.removeEventListener("inactive",this._setInactiveCursor),this._setDisabledCursor(),this._attached=!1)};Eo.prototype._setCursor=function(e){this._element.style.cursor=e};var u8=Eo,c8=En,Uc=W2,f8=U2,h8=Y2,d8=X2,Dt=N2,p8={mouseViewMode:"drag",dragMode:"pan"};function v8(e,t,n){n=c8(n||{},p8);var r={mouseViewDrag:new Uc(t,"mouse"),mouseViewQtvr:new f8(t,"mouse"),leftArrowKey:new Dt(37,"x",-.7,3),rightArrowKey:new Dt(39,"x",.7,3),upArrowKey:new Dt(38,"y",-.7,3),downArrowKey:new Dt(40,"y",.7,3),plusKey:new Dt(107,"zoom",-.7,3),minusKey:new Dt(109,"zoom",.7,3),wKey:new Dt(87,"y",-.7,3),aKey:new Dt(65,"x",-.7,3),sKey:new Dt(83,"y",.7,3),dKey:new Dt(68,"x",.7,3),qKey:new Dt(81,"roll",.7,3),eKey:new Dt(69,"roll",-.7,3)},i=["scrollZoom","touchView","pinch"];n.scrollZoom!==!1&&(r.scrollZoom=new h8(t));var o={arrowKeys:["leftArrowKey","rightArrowKey","upArrowKey","downArrowKey"],plusMinusKeys:["plusKey","minusKey"],wasdKeys:["wKey","aKey","sKey","dKey"],qeKeys:["qKey","eKey"]};switch(n.dragMode){case"pinch":r.pinch=new Uc(t,"touch",{hammerEvent:"pinch"});break;case"pan":r.touchView=new Uc(t,"touch"),r.pinch=new d8(t,"touch");break;default:throw new Error("Unknown drag mode: "+n.dragMode)}switch(n.mouseViewMode){case"drag":i.push("mouseViewDrag");break;case"qtvr":i.push("mouseViewQtvr");break;default:throw new Error("Unknown mouse view mode: "+n.mouseViewMode)}for(var a in r){var l=r[a];e.registerMethod(a,l),i.indexOf(a)>=0&&e.enableMethod(a)}for(var s in o){var u=o[s];e.addMethodGroup(s,u)}return r}var nx=v8,b1=yi;function m8(e,t,n){var r=!1,i=b1();function o(){if(!r){var a=(b1()-i)/e;a<1?(t(a),requestAnimationFrame(o)):(t(1),n())}}return t(0),requestAnimationFrame(o),function(){r=!0,n.apply(null,arguments)}}var rx=m8,y8=ze,g8=F2,_8=q2,w8=ex,x8=o8,b8=tw,S8=u8,S1=Iu,T8=nx,E8=w2,C8=Ot.setOverflowHidden,M8=Ot.setAbsolute,O8=Ot.setFullSize,P8=rx,$8=Ga,k8=Ee;function pe(e,t){t=t||{},this._domElement=e,C8(e),this._stage=new b8(t.stage),E8(this._stage),this._domElement.appendChild(this._stage.domElement()),this._controlContainer=document.createElement("div"),M8(this._controlContainer),O8(this._controlContainer),e.appendChild(this._controlContainer),this._size={},this.updateSize(),this._updateSizeListener=this.updateSize.bind(this),window.addEventListener("resize",this._updateSizeListener),this._renderLoop=new g8(this._stage),this._controls=new _8,this._controlMethods=T8(this._controls,this._controlContainer,t.controls),this._controls.attach(this._renderLoop),this._hammerManagerTouch=S1.get(this._controlContainer,"touch"),this._hammerManagerMouse=S1.get(this._controlContainer,"mouse"),this._dragCursor=new S8(this._controls,"mouseViewDrag",e,t.cursors&&t.cursors.drag||{}),this._renderLoop.start(),this._scenes=[],this._currentScene=null,this._replacedScene=null,this._cancelCurrentTween=null,this._layerChangeHandler=this._updateSceneLayers.bind(this),this._viewChangeHandler=this.emit.bind(this,"viewChange"),this._idleTimer=new x8,this._idleTimer.start(),this._resetIdleTimerHandler=this._resetIdleTimer.bind(this),this.addEventListener("viewChange",this._resetIdleTimerHandler),this._triggerIdleTimerHandler=this._triggerIdleTimer.bind(this),this._idleTimer.addEventListener("timeout",this._triggerIdleTimerHandler),this._stopMovementHandler=this.stopMovement.bind(this),this._controls.addEventListener("active",this._stopMovementHandler),this.addEventListener("sceneChange",this._stopMovementHandler),this._idleMovement=null}y8(pe);pe.prototype.destroy=function(){window.removeEventListener("resize",this._updateSizeListener),this._currentScene&&this._removeSceneEventListeners(this._currentScene),this._replacedScene&&this._removeSceneEventListeners(this._replacedScene),this._dragCursor.destroy();for(var e in this._controlMethods)this._controlMethods[e].destroy();for(;this._scenes.length;)this.destroyScene(this._scenes[0]);this._domElement.removeChild(this._stage.domElement()),this._stage.destroy(),this._renderLoop.destroy(),this._controls.destroy(),this._controls=null,this._cancelCurrentTween&&this._cancelCurrentTween(),k8(this)};pe.prototype.updateSize=function(){var e=this._size;e.width=this._domElement.clientWidth,e.height=this._domElement.clientHeight,this._stage.setSize(e)};pe.prototype.stage=function(){return this._stage};pe.prototype.renderLoop=function(){return this._renderLoop};pe.prototype.controls=function(){return this._controls};pe.prototype.domElement=function(){return this._domElement};pe.prototype.createScene=function(e){e=e||{};var t=this.createEmptyScene({view:e.view});return t.createLayer({source:e.source,geometry:e.geometry,pinFirstLevel:e.pinFirstLevel,textureStoreOpts:e.textureStoreOpts,layerOpts:e.layerOpts}),t};pe.prototype.createEmptyScene=function(e){e=e||{};var t=new w8(this,e.view);return this._scenes.push(t),t};pe.prototype._updateSceneLayers=function(){var e,t,n=this._stage,r=this._currentScene,i=this._replacedScene,o=n.listLayers(),a=[];if(i&&(a=a.concat(i.listLayers())),r&&(a=a.concat(r.listLayers())),Math.abs(o.length-a.length)!==1)throw new Error("Stage and scene out of sync");if(a.length<o.length){for(e=0;e<o.length;e++)if(t=o[e],a.indexOf(t)<0){this._removeLayerFromStage(t);break}}if(a.length>o.length)for(e=0;e<a.length;e++)t=a[e],o.indexOf(t)<0&&this._addLayerToStage(t,e)};pe.prototype._addLayerToStage=function(e,t){e.pinFirstLevel(),this._stage.addLayer(e,t)};pe.prototype._removeLayerFromStage=function(e){this._stage.removeLayer(e),e.unpinFirstLevel(),e.textureStore().clearNotPinned()};pe.prototype._addSceneEventListeners=function(e){e.addEventListener("layerChange",this._layerChangeHandler),e.addEventListener("viewChange",this._viewChangeHandler)};pe.prototype._removeSceneEventListeners=function(e){e.removeEventListener("layerChange",this._layerChangeHandler),e.removeEventListener("viewChange",this._viewChangeHandler)};pe.prototype.destroyScene=function(e){var t=this._scenes.indexOf(e);if(t<0)throw new Error("No such scene in viewer");var n,r;if(this._currentScene===e){for(this._removeSceneEventListeners(e),r=e.listLayers(),n=0;n<r.length;n++)this._removeLayerFromStage(r[n]);this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null),this._currentScene=null,this.emit("sceneChange")}if(this._replacedScene===e){for(this._removeSceneEventListeners(e),r=e.listLayers(),n=0;n<r.length;n++)this._removeLayerFromStage(r[n]);this._replacedScene=null}this._scenes.splice(t,1),e.destroy()};pe.prototype.destroyAllScenes=function(){for(;this._scenes.length>0;)this.destroyScene(this._scenes[0])};pe.prototype.hasScene=function(e){return this._scenes.indexOf(e)>=0};pe.prototype.listScenes=function(){return[].concat(this._scenes)};pe.prototype.scene=function(){return this._currentScene};pe.prototype.view=function(){var e=this._currentScene;return e?e.view():null};pe.prototype.lookTo=function(e,t,n){var r=this._currentScene;r&&r.lookTo(e,t,n)};pe.prototype.startMovement=function(e,t){var n=this._currentScene;n&&n.startMovement(e,t)};pe.prototype.stopMovement=function(){var e=this._currentScene;e&&e.stopMovement()};pe.prototype.movement=function(){var e=this._currentScene;if(e)return e.movement()};pe.prototype.setIdleMovement=function(e,t){this._idleTimer.setDuration(e),this._idleMovement=t};pe.prototype.breakIdleMovement=function(){this.stopMovement(),this._resetIdleTimer()};pe.prototype._resetIdleTimer=function(){this._idleTimer.start()};pe.prototype._triggerIdleTimer=function(){var e=this._idleMovement;e&&this.startMovement(e)};var z8=1e3;function A8(e,t,n){var r=t.listLayers();r.forEach(function(i){i.mergeEffects({opacity:e})}),t._hotspotContainer.domElement().style.opacity=e}pe.prototype.switchScene=function(e,t,n){var r=this;t=t||{},n=n||$8;var i=this._stage,o=this._currentScene;if(o===e){n();return}if(this._scenes.indexOf(e)<0)throw new Error("No such scene in viewer");this._cancelCurrentTween&&(this._cancelCurrentTween(),this._cancelCurrentTween=null);var a=o?o.listLayers():[],l=e.listLayers(),s=i.listLayers();if(o&&(s.length!==a.length||s.length>1&&s[0]!=a[0]))throw new Error("Stage not in sync with viewer");for(var u=t.transitionDuration!=null?t.transitionDuration:z8,c=t.transitionUpdate!=null?t.transitionUpdate:A8,f=0;f<l.length;f++)this._addLayerToStage(l[f]);function h(p){c(p,e,o)}function d(){if(r._replacedScene){r._removeSceneEventListeners(r._replacedScene),a=r._replacedScene.listLayers();for(var p=0;p<a.length;p++)r._removeLayerFromStage(a[p]);r._replacedScene=null}r._cancelCurrentTween=null,n()}this._cancelCurrentTween=P8(u,h,d),this._currentScene=e,this._replacedScene=o,this.emit("sceneChange"),this.emit("viewChange"),this._addSceneEventListeners(e)};var L8=pe,ju=ut.vec4,R8=ut.mat4;function I8(e){var t=e||{};return t.colorOffset=t.colorOffset||ju.create(),t.colorMatrix=t.colorMatrix||R8.create(),t}function ix(e,t,n){j8(n,e,t.colorMatrix),ju.add(n,n,t.colorOffset)}function j8(e,t,n){var r=t[0],i=t[1],o=t[2],a=t[3];return e[0]=n[0]*r+n[1]*i+n[2]*o+n[3]*a,e[1]=n[4]*r+n[5]*i+n[6]*o+n[7]*a,e[2]=n[8]*r+n[9]*i+n[10]*o+n[11]*a,e[3]=n[12]*r+n[13]*i+n[14]*o+n[15]*a,e}var Fr=ju.create();function F8(e,t){for(var n=e.width,r=e.height,i=e.data,o=0;o<n*r;o++)ju.set(Fr,i[o*4+0]/255,i[o*4+1]/255,i[o*4+2]/255,i[o*4+3]/255),ix(Fr,t,Fr),i[o*4+0]=Fr[0]*255,i[o*4+1]=Fr[1]*255,i[o*4+2]=Fr[2]*255,i[o*4+3]=Fr[3]*255}var N8={identity:I8,applyToPixel:ix,applyToImageData:F8},D8=En,Vc=.1,Yc=.01,H8={yawSpeed:Vc,pitchSpeed:Vc,fovSpeed:Vc,yawAccel:Yc,pitchAccel:Yc,fovAccel:Yc,targetPitch:0,targetFov:null};function B8(e){e=D8(e||{},H8);var t=e.yawSpeed,n=e.pitchSpeed,r=e.fovSpeed,i=e.yawAccel,o=e.pitchAccel,a=e.fovAccel,l=e.targetPitch,s=e.targetFov;return function(){var c=0,f=0,h=0,d=0,p=0,g=0,_=0,m,v,w,b;return function(E,$){if(m=($-c)/1e3,p=Math.min(f+m*i,t),v=p*m,E.yaw=E.yaw+v,l!=null&&E.pitch!==l){var P=.5*h*h/o;Math.abs(l-E.pitch)>P?g=Math.min(h+m*o,n):g=Math.max(h-m*o,0),w=g*m,l<E.pitch&&(E.pitch=Math.max(l,E.pitch-w)),l>E.pitch&&(E.pitch=Math.min(l,E.pitch+w))}if(s!=null&&E.fov!==l){var F=.5*d*d/a;Math.abs(s-E.fov)>F?_=Math.min(d+m*a,r):_=Math.max(d-m*a,0),b=_*m,s<E.fov&&(E.fov=Math.max(s,E.fov-b)),s>E.fov&&(E.fov=Math.min(s,E.fov+b))}return c=$,f=p,h=g,d=_,E}}}var W8=B8;function U8(e,t){function n(){t&&t.length>0?e.apply(null,t):e()}setTimeout(n,0)}var V8=U8;function Y8(e){return e*Math.PI/180}var X8=Y8;function G8(e){return e*180/Math.PI}var q8=G8,Or={WebGlStage:tw,WebGlCubeRenderer:v2,WebGlFlatRenderer:y2,WebGlEquirectRenderer:_2,registerDefaultRenderers:w2,CubeGeometry:u6,FlatGeometry:_6,EquirectGeometry:E6,RectilinearView:Y6,FlatView:tj,ImageUrlSource:gj,SingleAssetSource:_j,StaticAsset:Xd,DynamicAsset:Tj,TextureStore:R2,Layer:j2,RenderLoop:F2,KeyControlMethod:N2,DragControlMethod:W2,QtvrControlMethod:U2,ScrollZoomControlMethod:Y2,PinchZoomControlMethod:X2,VelocityControlMethod:bF,ElementPressControlMethod:CF,Controls:q2,Dynamics:Kn,Viewer:L8,Scene:ex,Hotspot:Q2,HotspotContainer:Z2,colorEffects:N8,registerDefaultControls:nx,autorotate:W8,util:{async:X_,cancelize:G_,chain:fp,clamp:xo,clearOwnProperties:Ee,cmp:Ua,compose:C2,convertFov:E2,decimal:cp,defaults:En,defer:V8,degToRad:X8,delay:k2,dom:Ot,extend:I2,hash:ku,inherits:bn,mod:Ar,noop:Ga,now:yi,once:Vd,pixelRatio:Pu,radToDeg:q8,real:up,retry:z2,tween:rx,type:Ya},dependencies:{bowser:Ma,glMatrix:ut,eventEmitter:ze,hammerjs:Ns}};function Co(){}Or.dependencies.eventEmitter(Co);Co.prototype.move=function(e,t){const n=new Or.Dynamics;n.offset=0,n.velocity=t,n.friction=Math.abs(t*3),this.emit("parameterDynamics",e,n)};Co.prototype.zoom=function(e){this.move("zoom",-e)};Co.prototype.zoomIn=function(e=1){this.zoom(e)};Co.prototype.zoomOut=function(e=1){this.zoom(-e)};const K8=e=>C.useMemo(()=>new Or.CubeGeometry(e),[e]),Q8=(e={})=>{const{baseUrl:t="",urlFunction:n="{baseUrl}/{z}/{f}/{y}/{x}.jpg",cubeMapPreviewUrl:r="{baseUrl}/preview.jpg"}=e,i=n.replace("{baseUrl}",t);return Or.ImageUrlSource.fromString(i,r?{cubeMapPreviewUrl:r.replace("{baseUrl}",t),retryDelay:60*1e3}:void 0)},Z8=(e={})=>{const{baseUrl:t,urlFunction:n,cubeMapPreviewUrl:r}=e;return C.useMemo(()=>Q8({baseUrl:t,urlFunction:n,cubeMapPreviewUrl:r}),[t,n,r])},J8=e=>C.useMemo(()=>{if(!e)return;const t=new Co,n=e.controls();return n.registerMethod("directControl",t),n.enableMethod("directControl"),t},[e]),eN=e=>{const{yaw:t=0,pitch:n=0,fov:r=90/180*Math.PI,faceSize:i}=e,o=r,a=2*Math.atan(Math.tan(o/2)*9/16),l=Or.RectilinearView.limit.traditional(i,a,o),s=new Or.RectilinearView({yaw:t,pitch:n,fov:r},l);return s.setParameters({yaw:t,pitch:n,fov:r}),s},tN=e=>C.useMemo(()=>eN(e),[e]),nN=()=>C.useMemo(()=>Or.autorotate({yawSpeed:.03,targetPitch:0,targetFov:Math.PI/2}),[]),rN={controls:{mouseViewMode:"drag"},cursors:{drag:{active:"grabbing",inactive:"grab"}}},iN=(e,t)=>C.useMemo(()=>e&&new Or.Viewer(e,e4({},rN,t)),[e,t]),oN=e=>{const{sceneData:t,initialViewParameters:n,autorotate:r=!0,viewerOptions:i}=e,o=C.useRef(null),[a,l]=C.useState(!1),s=iN(o.current,i),u=Z8(t),c=K8(t.levels),f=J8(s),h=tN(n),d=nN(),p=C.useMemo(()=>{if(!a||!s)return null;const g=s.scene(),_=s.createScene({source:u,geometry:c,view:h,pinFirstLevel:!0});return s.switchScene(_,{transitionDuration:500},()=>{g&&s.destroyScene(g)}),_},[s,u,c,h,a]);return C.useEffect(()=>{s&&(r?(s.startMovement(d),s.setIdleMovement(1e4,d)):(s.stopMovement(),s.setIdleMovement(1/0)))},[s,r,d]),a||setTimeout(()=>l(!!o.current),10),{scene:p,control:f,ref:o,ready:a}},ox=C.createContext(null),aN=C.createContext(null),lN=C.forwardRef((e,t)=>{const{sceneData:n,onViewChange:r,onLoading:i,loadTimeout:o=5e3,fov:a=80,onZoomHandlerChange:l,onLookToHandlerChange:s,autorotate:u=!0,viewerOptions:c,initialView:f}=e,h=C.useMemo(()=>({pitch:0,yaw:0,...f,fov:a*Math.PI/180,faceSize:n.faceSize}),[a,n.faceSize,e.viewId]),{ref:d,scene:p,control:g}=oN({sceneData:n,initialViewParameters:h,autorotate:u,viewerOptions:c});C.useEffect(()=>{if(!g||!l)return;l({onZoomIn:()=>g.zoomIn(),onZoomOut:()=>g.zoomOut()})},[l,g]),C.useEffect(()=>{if(!p)return;const m=(v,w,b)=>{p.lookTo({pitch:v,yaw:w},b)};s==null||s(m)},[p,s]);const _=C.useRef(r);return _.current=r,C.useEffect(()=>{if(!p)return;const m=p.viewer().stage(),v=()=>{var P;const S=p.view(),E=S.pitch(),$=S.yaw();(P=_.current)==null||P.call(_,{pitch:E,yaw:$})};p.addEventListener("viewChange",v),v();const w=Date.now(),b=S=>{const E=Date.now()-w;!S&&E<o||(m.removeEventListener("renderComplete",b),i&&i(!1))};return i&&i(!0),m.addEventListener("renderComplete",b),()=>{m.removeEventListener("renderComplete",b),p.removeEventListener("viewChange",v)}},[p]),C.useImperativeHandle(t,()=>({zoomHandler:{onZoomIn:()=>g.zoomIn(),onZoomOut:()=>g.zoomOut()},lookToHandler:(m,v,w)=>{p==null||p.lookTo({pitch:m,yaw:v},w)},scene:p})),He(aN.Provider,{value:n,children:He(ox.Provider,{value:p,children:He("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column"},ref:d,children:p&&e.children})})})}),sN=e=>{const{children:t,pitch:n,yaw:r,className:i,...o}=e,a=C.useContext(ox),l=a&&a.hotspotContainer(),s=C.useMemo(()=>{if(!l)return null;const u=document.createElement("div");return i&&(u.className=i),l.createHotspot(u)},[i,l]);return s&&s.setPosition({pitch:n,yaw:r}),C.useLayoutEffect(()=>{Object.entries(o).map(([u,c])=>s==null?void 0:s.domElement().setAttribute(u,c))},[s,o]),C.useEffect(()=>{if(s)return()=>{try{l==null||l.destroyHotspot(s)}catch(u){}}},[l,s]),!a||!s?null:Zr.createPortal(t,s.domElement())},ax=Q(w4)`
  position: absolute;
  top: 0;
  padding: 12px 24px;
  white-space: nowrap;
  transform: translateX(-50%) translateY(-25%);
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  transition: all ease-in-out 200ms, color 0ms;
  font-size: 16px;
`,uN=Q.div`
  height: 12px;
  width: 12px;
  background: #fff;
  border-radius: 100%;
  transform: translateX(-50%);
  transition: all ease-in-out 200ms;
`,cN=Q.div`
  position: absolute;
  height: 48px;
  width: 48px;
  transform: translateX(-50%) translateY(-50%);
  cursor: pointer;
`,fN=Q.div`
  height: 12px;
  width: 12px;
  top: -2px;
  left: -8px;
  position: absolute;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: solid 2px #fff;
    opacity: 0.7;
    transform-origin: center;
    animation: active 3s ease-in-out infinite;
  }
  @keyframes active {
    0% {
      transform: scale(1);
      opacity: 0.2;
    }
    10% {
      opacity: 0.7;
    }
    50% {
      transform: scale(2);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 0.2;
    }
  }
`,hN=Q.div`
  height: 100px;
  width: 2px;
  background: #fff;
  transform: translateX(-50%);
  pointer-events: none;
  &:after {
    content: '';
    background: #fff;
    border-radius: 100%;
    height: 8px;
    width: 8px;
    position: absolute;
    left: -3px;
    top: 100%;
  }
`,dN=Q.div`
  position: relative;
  width: 80px;
  height: 80px;
  background-color: ${({color:e})=>e!=null?e:D.color("primary")};
  box-shadow: ${D.shadow("regular")};
  border-radius: 50% 50% 0;
  transform: translateY(-100%) rotate(45deg);
  overflow: hidden;
  z-index: -1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotate(-45deg);
  }
`,pN=Q.div`
  transform: translateY(-100%);
  pointer-events: painted;
`,vN=Q(sN)`
  &[data-open='true'] {
    z-index: 10;
  }
  &[data-open='false'] {
    ${ax} {
      color: #fff;
      font-size: 0;
      height: 0;
      width: 0;
      padding: 0;
    }
  }
`,mN=({style:e="default",title:t,meta:n,projectSlug:r,...i})=>{const[o,a]=C.useState(!1),l=C.useRef();return C.useLayoutEffect(()=>{const s=u=>{l.current!==u&&a(!1)};if(o)return document.addEventListener("click",s),()=>document.removeEventListener("click",s)},[o]),Xc(vN,{...i,"data-open":o,children:[e==="default"&&He(C.Fragment,{children:Xc(pN,{children:[!o&&He(fN,{}),He(uN,{}),!o&&He(cN,{onClick:s=>{l.current=s.nativeEvent,a(!0)}}),He(ax,{onClick:()=>a(!1),children:t}),He(hN,{})]})}),e==="project"&&He(dN,{color:n==null?void 0:n.color,children:He("img",{src:`/client-pano//${r}/logo.png`,alt:"logo"})})]})},yN=C.forwardRef(({manifest:e,onReady:t,projectSlug:n,...r},i)=>{const{infoHotspots:o,sceneData:a}=e;C.useEffect(()=>{t&&t(!0)},[t]);const l=C.useMemo(()=>o==null?void 0:o.find(s=>{var u;return!!((u=s.meta)!=null&&u.projectLogo)}),[o]);return He(lN,{autorotate:!1,...r,initialView:l,sceneData:a,ref:i,children:o4(o,"pitch").map(s=>He(mN,{projectSlug:n,...s},`${s.pitch}-${s.yaw}`))})}),T1="caen-detolle",gN=()=>{const[e,t]=C.useState();return C.useEffect(()=>{(async()=>{const r=await fetch(`/client-pano//${T1}/manifest.json`);t(await r.json())})()},[]),e?He(yN,{manifest:e,projectSlug:T1}):He(m4,{})},_N=Qg`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: ${D.font()};
    color: ${D.textColor()};
  }

  * {
    box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    color: inherit;

    &:visited {
      color: inherit;
    }
  }
  /* clears the 'X' from Internet Explorer */
  input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }

  /* clears the 'X' from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`,wN=()=>Xc(b4,{children:[He(gN,{}),He(_N,{})]});Lg(document.getElementById("root")).render(He(wN,{}));export{xN as __vite_legacy_guard,E1 as a,Ex as g,tE as i,C as r};
//# sourceMappingURL=index-c13f668f.js.map
