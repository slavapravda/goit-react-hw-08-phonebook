/*! For license information please see 929.7e4d4af0.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[929],{1694:function(e,a){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=n.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},888:function(e,a,r){"use strict";var t=r(9047);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,r,n,i,s){if(s!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6157:function(e,a,r){"use strict";r.d(a,{Z:function(){return b}});var t=r(1413),n=r(885),i=r(4925),s=r(1694),o=r.n(s),l=r(2791),c=r(184),d=["as","disabled"];function f(e){var a=e.tagName,r=e.disabled,t=e.href,n=e.target,i=e.rel,s=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=n||null!=i?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?n:void 0,"aria-disabled":r||void 0,rel:"a"===a?i:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var u=l.forwardRef((function(e,a){var r=e.as,t=e.disabled,i=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,d),s=f(Object.assign({tagName:r,disabled:t},i)),o=(0,n.Z)(s,2),l=o[0],u=o[1].tagName;return(0,c.jsx)(u,Object.assign({},i,l,{ref:a}))}));u.displayName="Button";var v=r(162),p=["as","bsPrefix","variant","size","active","className"],m=l.forwardRef((function(e,a){var r=e.as,s=e.bsPrefix,l=e.variant,d=e.size,u=e.active,m=e.className,b=(0,i.Z)(e,p),x=(0,v.vE)(s,"btn"),y=f((0,t.Z)({tagName:r},b)),h=(0,n.Z)(y,2),N=h[0],Z=h[1].tagName;return(0,c.jsx)(Z,(0,t.Z)((0,t.Z)((0,t.Z)({},N),b),{},{ref:a,className:o()(m,x,u&&"active",l&&"".concat(x,"-").concat(l),d&&"".concat(x,"-").concat(d),b.href&&b.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1};var b=m},2936:function(e,a,r){"use strict";r.d(a,{Z:function(){return le}});var t=r(1413),n=r(4925),i=r(1694),s=r.n(i),o=r(2007),l=r.n(o),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,p=(0,n.Z)(e,f);return(0,d.jsx)(i,(0,t.Z)((0,t.Z)({},p),{},{ref:a,className:s()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var p=v,m=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,p=e.isInvalid,y=void 0!==p&&p,h=e.as,N=void 0===h?"input":h,Z=(0,n.Z)(e,x),g=(0,c.useContext)(m).controlId;return i=(0,b.vE)(i,"form-check-input"),(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},Z),{},{ref:a,type:f,id:r||g,className:s()(o,i,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var h=y,N=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.htmlFor,l=(0,n.Z)(e,N),f=(0,c.useContext)(m).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:s()(i,r)}))}));Z.displayName="FormCheckLabel";var g=Z;var P=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,i=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,x=e.disabled,y=void 0!==x&&x,N=e.isValid,Z=void 0!==N&&N,j=e.isInvalid,k=void 0!==j&&j,w=e.feedbackTooltip,I=void 0!==w&&w,C=e.feedback,O=e.feedbackType,F=e.className,R=e.style,E=e.title,S=void 0===E?"":E,T=e.type,_=void 0===T?"checkbox":T,z=e.label,V=e.children,L=e.as,B=void 0===L?"input":L,D=(0,n.Z)(e,P);i=(0,b.vE)(i,"form-check"),o=(0,b.vE)(o,"form-switch");var A=(0,c.useContext)(m).controlId,G=(0,c.useMemo)((function(){return{controlId:r||A}}),[A,r]),H=!V&&null!=z&&!1!==z||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,g),U=(0,d.jsx)(h,(0,t.Z)((0,t.Z)({},D),{},{type:"switch"===_?"checkbox":_,ref:a,isValid:Z,isInvalid:k,disabled:y,as:B}));return(0,d.jsx)(m.Provider,{value:G,children:(0,d.jsx)("div",{style:R,className:s()(F,H&&i,f&&"".concat(i,"-inline"),v&&"".concat(i,"-reverse"),"switch"===_&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[U,H&&(0,d.jsx)(g,{title:S,children:z}),C&&(0,d.jsx)(p,{type:O,tooltip:I,children:C})]})})})}));j.displayName="FormCheck";var k=Object.assign(j,{Input:h,Label:g}),w=r(4942),I=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),C=c.forwardRef((function(e,a){var r,i,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,p=e.className,x=e.isValid,y=void 0!==x&&x,h=e.isInvalid,N=void 0!==h&&h,Z=e.plaintext,g=e.readOnly,P=e.as,j=void 0===P?"input":P,k=(0,n.Z)(e,I),C=(0,c.useContext)(m).controlId;(o=(0,b.vE)(o,"form-control"),Z)?r=(0,w.Z)({},"".concat(o,"-plaintext"),!0):(i={},(0,w.Z)(i,o,!0),(0,w.Z)(i,"".concat(o,"-").concat(f),f),r=i);return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},k),{},{type:l,size:u,ref:a,readOnly:g,id:v||C,className:s()(p,r,y&&"is-valid",N&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));C.displayName="FormControl";var O=Object.assign(C,{Feedback:p}),F=/-(.)/g;var R=["className","bsPrefix","as"],E=function(e){return e[0].toUpperCase()+(a=e,a.replace(F,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var S=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,i=void 0===r?E(e):r,o=a.Component,l=a.defaultProps,f=c.forwardRef((function(a,r){var i=a.className,l=a.bsPrefix,c=a.as,f=void 0===c?o||"div":c,u=(0,n.Z)(a,R),v=(0,b.vE)(l,e);return(0,d.jsx)(f,(0,t.Z)({ref:r,className:s()(i,v)},u))}));return f.defaultProps=l,f.displayName=i,f}("form-floating"),T=["controlId","as"],_=c.forwardRef((function(e,a){var r=e.controlId,i=e.as,s=void 0===i?"div":i,o=(0,n.Z)(e,T),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(m.Provider,{value:l,children:(0,d.jsx)(s,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));_.displayName="FormGroup";var z=_,V=r(885),L=["as","bsPrefix","className"],B=["className"];var D=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,i=e.className,o=(0,n.Z)(e,L);r=(0,b.vE)(r,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,t,n,i=o[e];delete o[e],"object"===typeof i&&null!=i?(a=i.span,t=i.offset,n=i.order):a=i;var s=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(s):"".concat(r).concat(s,"-").concat(a)),null!=n&&f.push("order".concat(s,"-").concat(n)),null!=t&&f.push("offset".concat(s,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},o),{},{className:s().apply(void 0,[i].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),i=(0,V.Z)(r,2),o=i[0],l=o.className,c=(0,n.Z)(o,B),f=i[1],u=f.as,v=void 0===u?"div":u,p=f.bsPrefix,m=f.spans;return(0,d.jsx)(v,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(l,!m.length&&p)}))}));D.displayName="Col";var A=D,G=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=c.forwardRef((function(e,a){var r=e.as,i=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=e.visuallyHidden,u=e.className,v=e.htmlFor,p=(0,n.Z)(e,G),x=(0,c.useContext)(m).controlId;o=(0,b.vE)(o,"form-label");var y="col-form-label";"string"===typeof l&&(y="".concat(y," ").concat(y,"-").concat(l));var h=s()(u,o,f&&"visually-hidden",l&&y);return v=v||x,l?(0,d.jsx)(A,(0,t.Z)({ref:a,as:"label",className:h,htmlFor:v},p)):(0,d.jsx)(i,(0,t.Z)({ref:a,className:h,htmlFor:v},p))}));H.displayName="FormLabel",H.defaultProps={column:!1,visuallyHidden:!1};var U=H,W=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.id,l=(0,n.Z)(e,W),f=(0,c.useContext)(m).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:s()(i,r),id:o||f}))}));M.displayName="FormRange";var q=M,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Y=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,p=void 0!==v&&v,x=e.id,y=(0,n.Z)(e,K),h=(0,c.useContext)(m).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},y),{},{size:o,ref:a,className:s()(l,r,i&&"".concat(r,"-").concat(i),u&&"is-valid",p&&"is-invalid"),id:x||h}))}));Y.displayName="FormSelect";var J=Y,Q=["bsPrefix","className","as","muted"],X=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,n.Z)(e,Q);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:s()(i,r,c&&"text-muted")}))}));X.displayName="FormText";var $=X,ee=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));ee.displayName="Switch";var ae=Object.assign(ee,{Input:k.Input,Label:k.Label}),re=["bsPrefix","className","children","controlId","label"],te=c.forwardRef((function(e,a){var r=e.bsPrefix,i=e.className,o=e.children,l=e.controlId,c=e.label,f=(0,n.Z)(e,re);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(z,(0,t.Z)((0,t.Z)({ref:a,className:s()(i,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));te.displayName="FloatingLabel";var ne=te,ie=["className","validated","as"],se={_ref:l().any,validated:l().bool,as:l().elementType},oe=c.forwardRef((function(e,a){var r=e.className,i=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,n.Z)(e,ie);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:s()(r,i&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=se;var le=Object.assign(oe,{Group:z,Control:O,Floating:S,Check:k,Switch:ae,Label:U,Text:$,Range:q,Select:J,FloatingLabel:ne})},162:function(e,a,r){"use strict";r.d(a,{pi:function(){return o},vE:function(){return s},zG:function(){return l}});var t=r(2791),n=(r(184),["xxl","xl","lg","md","sm","xs"]),i=t.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"});i.Consumer,i.Provider;function s(e,a){var r=(0,t.useContext)(i).prefixes;return e||r[a]||a}function o(){return(0,t.useContext)(i).breakpoints}function l(){return(0,t.useContext)(i).minBreakpoint}},2391:function(e){"use strict";var a=function(){};e.exports=a},7632:function(){},4925:function(e,a,r){"use strict";function t(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=929.7e4d4af0.chunk.js.map