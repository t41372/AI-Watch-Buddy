"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{7714:(e,t,i)=>{let a,r,n;i.r(t),i.d(t,{MaxResolution:()=>tG,MediaError:()=>tB,MinResolution:()=>tj,RenditionOrder:()=>tQ,default:()=>pB,generatePlayerInitTime:()=>iW,playerSoftwareName:()=>pU,playerSoftwareVersion:()=>pP});var s=i(2115),o=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,m=function(e,t){return function(){return e&&(t=e(e=0)),t}},p=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},E=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=u(t),s=0,o=n.length;s<o;s++)r=n[s],h.call(e,r)||r===i||l(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=d(t,r))||a.enumerable});return e},b=function(e,t,i){return i=null!=e?o(c(e)):{},E(!t&&e&&e.__esModule?i:l(i,"default",{value:e,enumerable:!0}),e)},f=p(function(e,t){t.exports="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}});function g(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):g(e,t)}var _=m(function(){_()});function y(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=m(function(){}),A=p(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),k=p(function(e,t){function i(e,t){if(!g(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),w=p(function(e,t){function i(e,t){if(!g(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}_(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),S=p(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),I=p(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),R=p(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),D=p(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"\x3c!--"+t.data+"--\x3e";default:var n,s,o;return s=[],o=(n=t).tagName,"http://www.w3.org/1999/xhtml"===n.namespaceURI&&(o=o.toLowerCase()),s.push("<"+o+function(e){var t=[];for(var i in e)(function(e,t){var i=y(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(n)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(n)),i.indexOf(o)>-1?s.push(" />"):(s.push(">"),n.childNodes.length?s.push.apply(s,n.childNodes.map(e)):n.textContent||n.innerText?s.push(r(n.textContent||n.innerText)):n.innerHTML&&s.push(n.innerHTML),s.push("</"+o+">")),s.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),C=p(function(e,t){_();var i=A(),a=S(),r=I(),n=R(),s=D(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!g(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),L=p(function(e,t){_();var i=C();function a(e){if(!g(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),M=p(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),O=p(function(e,t){_();var i=A(),a=k(),r=w(),n=C(),s=L(),o=M(),l=S(),d=I(),u=R();function c(){if(!g(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),x=p(function(e,t){t.exports=new(O())}),N=p(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=x();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function U(e,t){if(e){if("string"==typeof e)return P(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return P(e,t)}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||U(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var H=b(f()),W=b(f()),V=b(f()),F={now:function(){var e=V.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}},$=function(){if("function"==typeof(null==(e=W.default.crypto)?void 0:e.getRandomValues)){i=new Uint8Array(32),W.default.crypto.getRandomValues(i);for(var e,t,i,a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=16*Math.random()|0}var n=0;t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t="x"===e?i[n]:3&i[n]|8;return n++,t.toString(16)});var s=F.now(),o=null==s?void 0:s.toString(16).substring(3);return o?t.substring(0,28)+o:t},K=function(){return("000000"+(0x81bf1000*Math.random()|0).toString(36)).slice(-6)},q=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=K()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Y=function(e){e&&void 0!==e.nodeName?e=q(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]};function G(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||U(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},Q=function(e){var t,i,a,r,n,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,o=e?[console,e]:[console],l=(t=console.trace).bind.apply(t,G(o)),d=(i=console.info).bind.apply(i,G(o)),u=(a=console.debug).bind.apply(a,G(o)),c=(r=console.warn).bind.apply(r,G(o)),h=(n=console.error).bind.apply(n,G(o)),m=s;return{trace:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.TRACE))return l.apply(void 0,G(t))},debug:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.DEBUG))return u.apply(void 0,G(t))},info:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.INFO))return d.apply(void 0,G(t))},warn:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.WARN))return c.apply(void 0,G(t))},error:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];if(!(m>j.ERROR))return h.apply(void 0,G(t))},get level(){return m},set level(v){v!==this.level&&(m=null!=v?v:s)}}}("[mux]"),Z=b(f());function z(){return"1"===(Z.default.doNotTrack||Z.default.navigator&&Z.default.navigator.doNotTrack)}function X(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){if(!g(e,t))throw TypeError("Cannot call a class as a function")}function ee(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function et(e,t,i){return t&&ee(e.prototype,t),i&&ee(e,i),e}function ei(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function ea(e){return(ea=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function er(e,t,i){return(er="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var a=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=ea(e)););return e}(e,t);if(a){var r=Object.getOwnPropertyDescriptor(a,t);return r.get?r.get.call(i||e):r.value}})(e,t,i||e)}function en(e,t){return(en=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}_(),T();var es=function(e){return eo(e)[0]},eo=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},el=b(f()),ed={exists:function(){var e=el.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=el.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function eu(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ec(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){ei(e,t,i[t])})}return e}function eh(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],ep=["x-cdn","content-type"].concat(em);function ev(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(ep.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function eE(e){if(e){var t=em.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var eb=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},ef=function(e){if(!e)return{};var t=ed.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},eg=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return ev(e.getAllResponseHeaders())},e_=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!ed.exists())return void r.warn("performance timing not supported. Not tracking HLS.js.");var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=ef(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,E=c.responseEnd;o("requestcompleted",eh(ec({},eb(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:E,request_type:"manifest",request_hostname:es(r),request_response_headers:eg(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=ef(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:es(i.url),request_response_headers:eg(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=ef(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:es(i.url),request_response_headers:eg(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=ef(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?eg(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?es(r.responseURL):void 0,request_id:h?eE(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?eg(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:es(c),request_id:h?eE(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null==(i=t.err)?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:es(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var E=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,E),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,E),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ey=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eT=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=es(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=ev(u[u.length-1]._responseHeaders||""));var c=i?eE(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eA=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},ek=function(e){var t;return null==(t=e.match(/.*codecs\*?="(.*)"/))?void 0:t[1]},ew=function(e){try{var t,i;return null==(i=e.getVersion)||null==(t=i.call(e))?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eS=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on)return void a.warn("Invalid dash.js player reference. Monitoring blocked.");var r=ew(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:es(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eT(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,E=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,g=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:E,request_hostname:f,request_id:c.requestId,request_url:g,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eT(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,E=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,g=u.requestUrl,_=u.requestId,y=eA(d,i),T=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:E,request_hostname:f,request_id:_,request_url:g,request_media_start_time:l,request_media_duration:b,request_current_level:T,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height))return void a.warn("have bitrate info for video but missing width/height");var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:ek(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality)return void a.warn("missing evt.newQuality in qualityChangeRendered event",e);var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate))return void a.warn("missing bitrate info for ".concat(s));c[s]=eh(ec({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:es(t.url)})};i.on("fragmentLoadingAbandoned",p);var E=function(e){var t,i,a=e.error,r=(null==a||null==(t=a.data)?void 0:t.request)||{},s=(null==a||null==(i=a.data)?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:es(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",E),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",E),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eI=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eR=0,eD=function(){function e(){J(this,e),ei(this,"_listeners",void 0)}return et(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++eR,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++eR;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eC=b(f()),eL=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackHeartbeatInterval",void 0),ei(this,"_playheadShouldBeProgressing",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eC.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return et(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eC.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eC.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eM=function e(t){var i=this;J(this,e),ei(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null==(e=t.data)||delete e.player_error_code,null==(i=t.data)||delete i.player_error_message,null==(a=t.data)||delete a.player_error_context,null==(r=t.data)||delete r.player_error_severity,null==(n=t.data)||delete n.player_error_business_exception})},eO=function(){function e(t){J(this,e),ei(this,"_watchTimeTrackerLastCheckedTime",void 0),ei(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return et(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),eu(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),ex=function(){function e(t){var i=this;J(this,e),ei(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),ei(this,"_lastTime",void 0),ei(this,"_isAdPlaying",void 0),ei(this,"_callbackUpdatePlaybackTime",void 0),ei(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=F.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=F.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return et(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=F.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&eu(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eN=function(){function e(t){J(this,e),ei(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return et(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eP=function e(t){if(J(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;eu(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(eu(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eU=function(){function e(t){var i=this;J(this,e),ei(this,"_lastCheckedTime",void 0),ei(this,"_lastPlayheadTime",void 0),ei(this,"_lastPlayheadTimeUpdatedTime",void 0),ei(this,"_rebuffering",void 0),ei(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:F.now()})}))}return et(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing)return void this._cleanupRebufferTracker(e,t);if(null===this._lastCheckedTime)return void this._prepareRebufferTrackerState(t.viewer_time);if(this._lastPlayheadTime!==this.pm.data.player_playhead_time)return void this._cleanupRebufferTracker(e,t,!0);var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eB=function(){function e(t){var i=this;J(this,e),ei(this,"NAVIGATION_START",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||F.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||F.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return et(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eH=function e(t){var i=this;J(this,e),ei(this,"_lastPlayerHeight",void 0),ei(this,"_lastPlayerWidth",void 0),ei(this,"_lastPlayheadPosition",void 0),ei(this,"_lastSourceHeight",void 0),ei(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),eu(t.data,"view_total_content_playback_time",e),eu(t.data,"view_total_upscaling",r*e),eu(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb","renditionchange","orientationchange"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},eW=function e(t){var i=this;J(this,e),ei(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=F.now(),r=(t.data.viewer_time||e)-(a||e);eu(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,eu(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},eV=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eF=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],e$=function(){function e(t){var i=this;J(this,e),ei(this,"_adHasPlayed",void 0),ei(this,"_adRequests",void 0),ei(this,"_adResponses",void 0),ei(this,"_currentAdRequestNumber",void 0),ei(this,"_currentAdResponseNumber",void 0),ei(this,"_prerollPlayTime",void 0),ei(this,"_wouldBeNewAdPlay",void 0),ei(this,"isAdBreak",void 0),ei(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eF.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),eV(i._adRequests,a),eu(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||eu(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),eV(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&eu(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,eu(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||eu(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return et(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=B(eo(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=B(eo(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eK=b(f()),eq=function e(t){J(this,e);var i,a,r=function(){t.disableRebufferTracking||(eu(t.data,"view_waiting_rebuffer_count",1),i=F.now(),a=eK.default.setInterval(function(){if(i){var e=F.now();eu(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(eu(t.data,"view_waiting_rebuffer_duration",F.now()-i),i=!1,eK.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eY=function e(t){var i=this;J(this,e),ei(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=F.now(),t.on("before*",r)},r=function(e){var a=F.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},eG=b(f()),ej=function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})}(),eQ="muxData",eZ=function(){var e;try{e=(ej.get(eQ)||"").split("&").reduce(function(e,t){var i=B(t.split("="),2),a=i[0],r=i[1],n=+r;return e[a]=r&&n==r?n:r,e},{})}catch(t){e={}}return e},ez=function(e){try{ej.set(eQ,Object.entries(e).map(function(e){var t=B(e,2),i=t[0],a=t[1];return"".concat(i,"=").concat(a)}).join("&"),{expires:365})}catch(e){}},eX=function(){var e=eZ();return e.mux_viewer_id=e.mux_viewer_id||$(),e.msn=e.msn||Math.random(),ez(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},eJ=function(){var e=eZ(),t=F.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=$(),e.sst=t),e.sex=t+15e5,ez(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e0=b(f()),e1=function(){var e;switch(e2()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e2=function(){var e=e0.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e1.getConnectionFromAPI=e2;var e3=e5({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e4=e5({ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function e5(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function e9(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e3[s];o||(Q.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e4[e]?o+=e4[e]:Number.isInteger(Number(e))?o+=e:(Q.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var e8=b(f()),e6=b(N()),e7={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},te=["hb","requestcompleted","requestfailed","requestcanceled"],tt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},e7,t)};tt.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tt.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length)return void this._eventQueue.pop();this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},tt.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),e8.default.clearTimeout(this._sendTimeout)},tt.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],e9({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);tr(this._beaconUrl,i,!0,function(){})},tt.prototype._sendBeaconQueue=function(){var e=this;if(this._postInFlight){this._resendAfterPost=!0;return}var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=F.now();tr(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,Q.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=F.now()-a,e._postInFlight=!1,e._resendAfterPost&&(e._resendAfterPost=!1,e._eventQueue.length>0&&e._sendBeaconQueue())})},tt.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tt.prototype._startBeaconSending=function(){var e=this;e8.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=e8.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tt.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(F.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(Q.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===te.indexOf(e.e)}),s()),o()||(Q.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ti,ta="function"==typeof e6.default.exitPictureInPicture?function(e){return e.length<=57344}:function(e){return!1},tr=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t))return void a();if(e8.default.fetch)return void e8.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:ta(t)}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});if(e8.default.XMLHttpRequest){var r=new e8.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},tn=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],ts=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],to=["ad_id","ad_creative_id","ad_universal_id"],tl=["viewstart","error","ended","viewend"],td=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,E,b,f,g,_,y,T,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};J(this,e),ei(this,"mux",void 0),ei(this,"envKey",void 0),ei(this,"options",void 0),ei(this,"eventQueue",void 0),ei(this,"sampleRate",void 0),ei(this,"disableCookies",void 0),ei(this,"respectDoNotTrack",void 0),ei(this,"previousBeaconData",void 0),ei(this,"lastEventTime",void 0),ei(this,"rateLimited",void 0),ei(this,"pageLevelData",void 0),ei(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tt((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!=(_=this.options.sampleRate)?_:1,this.disableCookies=null!=(y=this.options.disableCookies)&&y,this.respectDoNotTrack=null!=(T=this.options.respectDoNotTrack)&&T,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null==(o=this.options.platform)?void 0:o.name,viewer_application_version:null==(l=this.options.platform)?void 0:l.version,viewer_application_engine:null==(d=this.options.platform)?void 0:d.layout,viewer_device_name:null==(u=this.options.platform)?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null==(c=this.options.platform)?void 0:c.manufacturer,viewer_os_family:null==(m=this.options.platform)||null==(h=m.os)?void 0:h.family,viewer_os_architecture:null==(E=this.options.platform)||null==(p=E.os)?void 0:p.architecture,viewer_os_version:null==(f=this.options.platform)||null==(b=f.os)?void 0:b.version,viewer_connection_type:e1(),page_url:null===eG.default||void 0===eG.default||null==(g=eG.default.location)?void 0:g.href},this.viewerData=this.disableCookies?{}:eX()}return et(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&z())return Q.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return Q.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:eJ(),a=eh(ec({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!=(r=a.mux_sample_number)?r:0)>=this.sampleRate,s=e9(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return Q.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||Q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(Q.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tl.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=e9(a),this.eventQueue.queueEvent(a.event,s),Q.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ec({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=B(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||tn.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||to.includes(t)&&ts.includes(e))}}]),e}(),tu=function e(t){J(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tc=function e(t){var i=this;J(this,e),ei(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=F.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,ei({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view");var l=t.playbackHeartbeat._playheadShouldBeProgressing;t._resetView(Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing=l,t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},th=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tm=new Set(["requestcompleted","requestfailed","requestcanceled"]),tp=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&en(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ea(a);return e=t?Reflect.construct(i,arguments,ea(this).constructor):i.apply(this,arguments),e&&("object"===y(e)||"function"==typeof e)?e:X(this)});function a(e,t,r){J(this,a),ei(X(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),ei(X(n),"NAVIGATION_START",void 0),ei(X(n),"_destroyed",void 0),ei(X(n),"_heartBeatTimeout",void 0),ei(X(n),"adTracker",void 0),ei(X(n),"dashjs",void 0),ei(X(n),"data",void 0),ei(X(n),"disablePlayheadRebufferTracking",void 0),ei(X(n),"disableRebufferTracking",void 0),ei(X(n),"errorTracker",void 0),ei(X(n),"errorTranslator",void 0),ei(X(n),"emitTranslator",void 0),ei(X(n),"getAdData",void 0),ei(X(n),"getPlayheadTime",void 0),ei(X(n),"getStateData",void 0),ei(X(n),"stateDataTranslator",void 0),ei(X(n),"hlsjs",void 0),ei(X(n),"id",void 0),ei(X(n),"longResumeTracker",void 0),ei(X(n),"minimumRebufferDuration",void 0),ei(X(n),"mux",void 0),ei(X(n),"playbackEventDispatcher",void 0),ei(X(n),"playbackHeartbeat",void 0),ei(X(n),"playbackHeartbeatTime",void 0),ei(X(n),"playheadTime",void 0),ei(X(n),"seekingTracker",void 0),ei(X(n),"sustainedRebufferThreshold",void 0),ei(X(n),"watchTimeTracker",void 0),ei(X(n),"currentFragmentPDT",void 0),ei(X(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=ed.domContentLoadedEventEnd(),n.NAVIGATION_START=ed.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e},emitTranslator:function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t},stateDataTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),Q.level=r.debug?j.DEBUG:j.WARN,n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.emitTranslator=r.emitTranslator,n.stateDataTranslator=r.stateDataTranslator,n.playbackEventDispatcher=new td(e,r.data.env_key,r),n.data={player_instance_id:$(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1;var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(X(n));if(n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)}),n.on("videochange",function(e,t){this._resetView(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var o=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",o,!1);var l=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",l,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",o),window.removeEventListener("pagehide",l)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),th.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tc(X(n)),n.errorTracker=new eM(X(n)),new eY(X(n)),n.seekingTracker=new eW(X(n)),n.playheadTime=new eN(X(n)),n.playbackHeartbeat=new eL(X(n)),new eH(X(n)),n.watchTimeTracker=new eO(X(n)),new ex(X(n)),n.adTracker=new e$(X(n)),new eU(X(n)),new eP(X(n)),new eB(X(n)),new eq(X(n)),new tu(X(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return et(a,[{key:"emit",value:function(e,t){var i,r=Object.assign({viewer_time:this.mux.utils.now()},t),n=[e,r];if(this.emitTranslator)try{n=this.emitTranslator(e,r)}catch(e){this.mux.log.warn("Exception in emit translator callback.",e)}null!=n&&n.length&&(i=er(ea(a.prototype),"emit",this)).call.apply(i,[this].concat(G(n)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=B(eo(t.video_source_url),2),a=i[0];t.video_source_domain=i[1],t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,tm.has(e)||this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_resetView",value:function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}},{key:"_updateStateData",value:function(){var e=this.getStateData();if("function"==typeof this.stateDataTranslator)try{e=this.stateDataTranslator(e)}catch(e){this.mux.log.warn("Exception in stateDataTranslator translator callback.",e)}Object.assign(this.data,e),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=$(),i=function(){t===e.data.view_id&&eu(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){return e.hlsjs?this.hlsjs?void this.mux.log.warn("An instance of HLS.js is already being monitored for this player."):void(this.hlsjs=e.hlsjs,e_(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)):void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ey(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){return e.dashjs?this.dashjs?void this.mux.log.warn("An instance of Dash.js is already being monitored for this player."):void(this.dashjs=e.dashjs,eS(this.mux,this.id,e.dashjs)):void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")}},{key:"removeDashJS",value:function(){this.dashjs&&(eI(this.dashjs),this.dashjs=void 0)}}]),a}(eD),tv=b(N()),tE=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tb={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},tf=b(f());tf.default&&tf.default.WeakMap&&(ti=new WeakMap);var tg={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},t_=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};t_.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},t_.prototype.processLine=function(e){var t=e.indexOf(":"),i=tI(e,t),a=i[0],r=2===i.length?tA(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case tg.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case tg.PART_INF:ty(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case tg.SERVER_CONTROL:ty(this.manifest,i),this.setHoldBack();break;case tg.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case tg.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case tg.VERSION:ty(this.manifest,i);break;case tg.SESSION_DATA:var s=eb(tR(i[1]));Object.assign(this.manifest.sessionData,s)}},t_.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var ty=function(e,t){var i,a=tT(t[0].replace("#EXT-X-",""));tS(t[1])?(i={},i=Object.assign(tw(t[1]),i)):i=tA(t[1]),e[a]=i},tT=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tA=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tk=function(e){var t={},i=e.split("=");return i.length>1&&(t[tT(i[0])]=tA(i[1])),t},tw=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tk(t[a]),i);return i},tS=function(e){return e.indexOf("=")>-1},tI=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tR=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tD={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){Q.info("safeCall error",e)}return r},safeIncrement:eu,getComputedStyle:function(e,t){var i;return e&&t&&tf.default&&"function"==typeof tf.default.getComputedStyle?(ti&&ti.has(e)&&(i=ti.get(e)),i||(i=tf.default.getComputedStyle(e,null),ti&&ti.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:ev,cdnHeadersToRequestId:eE,extractHostnameAndDomain:eo,extractHostname:es,manifestParser:t_,generateShortID:K,generateUUID:$,now:F.now,findMediaElement:Y},tC={},tL=function(e){var t=arguments;"string"==typeof e?tL.hasOwnProperty(e)?H.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tL[e].apply(null,t)},0):Q.warn("`"+e+"` is an unknown task"):"function"==typeof e?H.default.setTimeout(function(){e(tL)},0):Q.warn("`"+e+"` is invalid.")},tM={loaded:F.now(),NAME:"mux-embed",VERSION:"5.9.0",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=B(Y(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i,{getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var e,t,i=(null==(e=this.getPlayheadTime)?void 0:e.call(this))||d(r.currentTime),a=this.hlsjs&&this.hlsjs.url,n=this.dashjs&&"function"==typeof this.dashjs.getSource&&this.dashjs.getSource(),s={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tv.default&&!!(tv.default.fullscreenElement||tv.default.webkitFullscreenElement||tv.default.mozFullScreenElement||tv.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:a||n||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null==(t=r.getVideoPlaybackQuality)?void 0:t.call(r).droppedVideoFrames};if(r.getStartDate&&i>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();s.player_program_time=u+i,r.seekable.length>0&&(s.player_live_edge_program_time=u+r.seekable.end(r.seekable.length-1))}}return s}})).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)},r.mux.updateData=function(e){r.mux.emit("hb",e)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.updateData=u,r.mux.setEmitTranslator=u,r.mux.setStateDataTranslator=u,r.mux.setGetPlayheadTime=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=B(Y(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},r.mux.setEmitTranslator=function(t){e.setEmitTranslator(n,t)},r.mux.setStateDataTranslator=function(t){e.setStateDataTranslator(n,t)},r.mux.setGetPlayheadTime=function(t){t||(t=i.getPlayheadTime),e.setGetPlayheadTime(n,t)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tE.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tb[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tL,e,t)},destroyMonitor:function(e){var t=B(Y(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():Q.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=q(e);tC[i]?tC[i].addHLSJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=q(e);tC[i]?tC[i].addDashJS(t):Q.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=q(e);tC[t]?tC[t].removeHLSJS():Q.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=q(e);tC[t]?tC[t].removeDashJS():Q.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){z()&&t&&t.respectDoNotTrack&&Q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=q(e);tC[i]=new tp(tL,i,t)},emit:function(e,t,i){var a=q(e);tC[a]?(tC[a].emit(t,i),"destroy"===t&&delete tC[a]):Q.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(e,t){var i=q(e);tC[i]?tC[i].emit("hb",t):Q.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(e,t){var i=q(e);tC[i]?tC[i].emitTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(e,t){var i=q(e);tC[i]?tC[i].stateDataTranslator=t:Q.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(e,t){var i=q(e);tC[i]?tC[i].getPlayheadTime=t:Q.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:z,log:Q,utils:tD,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tL,tM),void 0!==H.default&&"function"==typeof H.default.addEventListener&&H.default.addEventListener("pagehide",function(e){e.persisted||(tL.WINDOW_UNLOADING=!0)},!1);var tO=i(9588).Ay,tx={VIDEO:"video",DRM:"drm"},tN={NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},tP=e=>e===tx.VIDEO?"playback":e,tU=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tU.MEDIA_ERR_ABORTED=1,tU.MEDIA_ERR_NETWORK=2,tU.MEDIA_ERR_DECODE=3,tU.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tU.MEDIA_ERR_ENCRYPTED=5,tU.MEDIA_ERR_CUSTOM=100,tU.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tB=tU,tH=(e,t)=>null!=t&&e in t,tW={ANY:"any",MUTED:"muted"},tV={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tF={MSE:"mse",NATIVE:"native"},t$={HEADER:"header",QUERY:"query",NONE:"none"},tK=Object.values(t$),tq={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tY={HLS:tq.M3U8},tG=(Object.keys(tY),[...Object.values(tq)],{upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"}),tj={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},tQ={DESCENDING:"desc"},tZ={code:"en"},tz=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tX=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tJ=e=>{let{type:t}=e;if(t){let e=t.toUpperCase();return tH(e,tY)?tY[e]:t}return t2(e)},t0=e=>"VOD"===e?tV.ON_DEMAND:tV.LIVE,t1=e=>"EVENT"===e?1/0:"VOD"===e?NaN:0,t2=e=>{let{src:t}=e;if(!t)return"";let i="";try{i=new URL(t).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return t4(e)?tq.M3U8:"";let r=i.slice(a+1).toUpperCase();return tH(r,tq)?tq[r]:""},t3="mux.com",t4=({src:e,customDomain:t=t3})=>{let i;try{i=new URL(`${e}`)}catch{return!1}let a="https:"===i.protocol,r=i.hostname===`stream.${t}`.toLowerCase(),n=i.pathname.split("/"),s=2===n.length,o=!(null!=n&&n[1].includes("."));return a&&r&&s&&o},t5=e=>{let t=(null!=e?e:"").split(".")[1];if(t)try{let e=t.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(atob(e).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(i)}catch{return}};function t9(e,t=!0){var i;return new t8(t&&null!=(i=null==tZ?void 0:tZ[e])?i:e,t?tZ.code:"en")}var t8=class{constructor(e,t=(e=>null!=(e=tZ)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}},t6=Object.values(tW),t7=e=>"boolean"==typeof e||"string"==typeof e&&t6.includes(e),ie=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tW.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tW.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},it=e=>"time"in e?e.time:e.startTime;function ii(e,t,i,a,r,n){let s=document.createElement("track");return s.kind=t,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),e.append(s),s.track}function ia(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function ir(e,t,i,a){let r=ia(e,i,a);return r||((r=ii(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>it(t)-it(e)).forEach(t=>{var i,n;let s=t.value,o=it(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var is="cuepoints",io=Object.freeze({label:is});async function il(e,t,i=io){return ir(e,t,i.label,"metadata")}var id=e=>({time:e.startTime,value:JSON.parse(e.text)});function iu(e,t={label:is}){var i,a;let r=ia(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return id(r.activeCues[0]);let{currentTime:n}=e;return id(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ic(e,t=io){return new Promise(i=>{tz(e,"loadstart",async()=>{let a=await il(e,[],t);tz(e,"cuechange",()=>{let t=iu(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ih="chapters",im=Object.freeze({label:ih}),ip=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function iv(e,t,i=im){return ir(e,t,i.label,"chapters")}function iE(e,t={label:ih}){var i,a;let r=ia(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ip(r.activeCues[0]);let{currentTime:n}=e;return ip(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ib(e,t=im){return new Promise(i=>{tz(e,"loadstart",async()=>{let a=await iv(e,[],t);tz(e,"cuechange",()=>{let t=iE(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ig={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},i_=(e,t,i,a,r=!1,n=!(e=>null==(e=globalThis.navigator)?void 0:e.onLine)())=>{var s,o;if(n){let i=t9("Your device appears to be offline",r),a=tB.MEDIA_ERR_NETWORK,n=new tB(i,a,!1,void 0);return n.errorCategory=t,n.muxCode=tN.NETWORK_OFFLINE,n.data=e,n}let l="status"in e?e.status:e.code,d=Date.now(),u=tB.MEDIA_ERR_NETWORK;if(200===l)return;let c=tP(t),h=((e,t)=>{var i,a;let r=tP(e),n=`${r}Token`;return null!=(i=t.tokens)&&i[r]?null==(a=t.tokens)?void 0:a[r]:tH(n,t)?t[n]:void 0})(t,i),m=(e=>e===tx.VIDEO?ig.VIDEO:e===tx.DRM?ig.DRM:void 0)(t),[p]=tX(null!=(s=i.playbackId)?s:"");if(!l||!p)return;let E=t5(h);if(h&&!E){let i=new tB(t9("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:c}),u,!0,t9("Compact JWT string: {token}",r).format({token:h}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_MALFORMED,i.data=e,i}if(l>=500){let e=new tB("",u,null==a||a);return e.errorCategory=t,e.muxCode=tN.NETWORK_UNKNOWN_ERROR,e}if(403===l)if(E){if((({exp:e},t=Date.now())=>!e||1e3*e<t)(E,d)){let i={timeStyle:"medium",dateStyle:"medium"},a=new tB(t9("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:c}),u,!0,t9("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",i).format(null!=(o=E.exp)?o:0),currentDate:new Intl.DateTimeFormat("en",i).format(d)}));return a.errorCategory=t,a.muxCode=tN.NETWORK_TOKEN_EXPIRED,a.data=e,a}if((({sub:e},t)=>e!==t)(E,p)){let i=new tB(t9("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c}),u,!0,t9("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:c,playbackId:p,tokenPlaybackId:E.sub}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_SUB_MISMATCH,i.data=e,i}if((({aud:e},t)=>!e)(E,0)){let i=new tB(t9("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,t9("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_AUD_MISSING,i.data=e,i}if((({aud:e},t)=>e!==t)(E,m)){let i=new tB(t9("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:c}),u,!0,t9("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:c,expectedAud:m,aud:E.aud}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_AUD_MISMATCH,i.data=e,i}}else{let i=new tB(t9("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:c,category:t}),u,null==a||a,t9("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_TOKEN_MISSING,i.data=e,i}if(412===l){let n=new tB(t9("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),u,null==a||a,t9("Specified playback ID: {playbackId}",r).format({playbackId:p}));return n.errorCategory=t,n.muxCode=tN.NETWORK_NOT_READY,n.streamType=i.streamType===tV.LIVE?"live":i.streamType===tV.ON_DEMAND?"on-demand":"unknown",n.data=e,n}if(404===l){let i=new tB(t9("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),u,null==a||a,t9("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_NOT_FOUND,i.data=e,i}if(400===l){let i=new tB(t9("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),u,null==a||a,t9("Specified playback ID: {playbackId}",r).format({playbackId:p}));return i.errorCategory=t,i.muxCode=tN.NETWORK_INVALID_URL,i.data=e,i}let b=new tB("",u,null==a||a);return b.errorCategory=t,b.muxCode=tN.NETWORK_UNKNOWN_ERROR,b.data=e,b},iy=tO.DefaultConfig.capLevelController,iT=class e extends iy{constructor(e){super(e)}get levels(){var e;return null!=(e=this.hls.levels)?e:[]}getValidLevels(e){return this.levels.filter((t,i)=>this.isLevelAllowed(t)&&i<=e)}getMaxLevel(t){let i=super.getMaxLevel(t),a=this.getValidLevels(t);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=e.minMaxResolution;return r>=n?i:iy.getMaxLevelByMediaSize(a,16/9*n,n)}};iT.minMaxResolution=720;var iA,ik,iw,iS,iI,iR,iD={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},iC=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g,iL=async(e,t)=>{if(t===tq.MP4)return{streamType:tV.ON_DEMAND,targetLiveWindow:NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(t===tq.M3U8){let t=await fetch(e);if(!t.ok)return Promise.reject(t);let i=await t.text(),a=await fetch(i.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>200!==e.status?Promise.reject(e):e.text());return{...(e=>{let t=e.split(`
`).filter(e=>e.startsWith("#EXT-X-SESSION-DATA"));if(!t.length)return{};let i={};for(let e of t){let t=Object.fromEntries([...e.matchAll(iC)].map(([,e,t])=>[e,t])),a=t["DATA-ID"];a&&(i[a]={...t})}return{sessionData:i}})(i),...(e=>{var t,i,a;let r=e.split(`
`),n=null==(i=(null!=(t=r.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),s=t0(n),o=t1(n),l;if(s===tV.LIVE){let e=r.find(e=>e.startsWith("#EXT-X-PART-INF"));if(e)l=2*e.split(":")[1].split("=")[1];else{let e=r.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),t=null==(a=null==e?void 0:e.split(":"))?void 0:a[1];l=(null!=t?t:6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}})(a)}}return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},iM=async(e,t,i=tJ({src:e}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:u}=await iL(e,i),c=null==u?void 0:u["com.apple.hls.chapters"];(null!=c&&c.URI||null!=c&&c.VALUE.toLocaleLowerCase().startsWith("http"))&&iO(null!=(a=c.URI)?a:c.VALUE,t),(null!=(r=iU.get(t))?r:{}).liveEdgeStartOffset=d,(null!=(n=iU.get(t))?n:{}).targetLiveWindow=l,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(s=iU.get(t))?s:{}).streamType=o,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iO=async(e,t)=>{var i,a;try{let r=await fetch(e);if(!r.ok)throw Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!(null!=(i=null==n?void 0:n[0])&&i.metadata))return;for(let e of n[0].metadata)e.key&&e.value&&(s[e.key]=e.value);(null!=(a=iU.get(t))?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");t.dispatchEvent(o)}catch(e){console.error(e)}},ix=null!=(ik=null==(iA=null==globalThis?void 0:globalThis.navigator)?void 0:iA.userAgent)?ik:"",iN=null!=(iI=null==(iS=null==(iw=null==globalThis?void 0:globalThis.navigator)?void 0:iw.userAgentData)?void 0:iS.platform)?iI:"",iP=ix.toLowerCase().includes("android")||["x11","android"].some(e=>iN.toLowerCase().includes(e)),iU=new WeakMap,iB="mux.com",iH=null==(iR=tO.isSupported)?void 0:iR.call(tO),iW=()=>tL.utils.now(),iV=tL.utils.generateUUID,iF=({playbackId:e,customDomain:t=iB,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:u=d}={},extraSourceParams:c={}}={})=>{if(!e)return;let[h,m=""]=tX(e),p=new URL(`https://stream.${t}/${h}.m3u8${m}`);return u||p.searchParams.has("token")?(p.searchParams.forEach((e,t)=>{"token"!=t&&p.searchParams.delete(t)}),u&&p.searchParams.set("token",u)):(i&&p.searchParams.set("max_resolution",i),a&&(p.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&p.searchParams.set("rendition_order",r),n&&p.searchParams.set("program_start_time",`${n}`),s&&p.searchParams.set("program_end_time",`${s}`),o&&p.searchParams.set("asset_start_time",`${o}`),l&&p.searchParams.set("asset_end_time",`${l}`),Object.entries(c).forEach(([e,t])=>{null!=t&&p.searchParams.set(e,t)})),p.toString()},i$=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iK=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(/\.m3u8|\//);return t||void 0},iq=e=>{var t;return null==(t=iU.get(e))?void 0:t.error},iY=e=>{var t,i;return null!=(i=null==(t=iU.get(e))?void 0:t.streamType)?i:tV.UNKNOWN},iG=e=>{var t,i;return null!=(i=null==(t=iU.get(e))?void 0:t.seekable)?i:e.seekable},ij=.034,iQ=(e,t,i=ij)=>e>t||((e,t,i=ij)=>Math.abs(e-t)<=i)(e,t,i),iZ=(e,t)=>{var i,a,r;if(!t||!e.buffered.length)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iz=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iZ(e,t))||((e,t=ij)=>e.paused&&iQ(e.currentTime,e.duration,t))(e),iX=(e,t,i)=>{let a=null==t?void 0:t.engine;null!=e&&e.mux&&!e.mux.deleted&&(null!=i&&i.muxDataKeepSession?a&&e.mux.removeHLSJS():(e.mux.destroy(),delete e.mux)),a&&(a.detachMedia(),a.destroy()),e&&(e.hasAttribute("src")&&(e.removeAttribute("src"),e.load()),e.removeEventListener("error",i6),e.removeEventListener("error",ae),e.removeEventListener("durationchange",i8),iU.delete(e),e.dispatchEvent(new Event("teardown")))};function iJ(e,t){var i;let a=tJ(e);if(a!==tq.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tF.MSE,o=n===tF.NATIVE;return r&&(o||!(iH&&(s||iP)))}var i0=e=>e===tV.LIVE?{backBufferLength:8}:{},i1=e=>{let{tokens:{drm:t}={},playbackId:i,drmTypeCb:a}=e,r=i$(i);return t&&r?{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:i4(e,"fairplay"),serverCertificateUrl:i5(e,"fairplay")},"com.widevine.alpha":{licenseUrl:i4(e,"widevine")},"com.microsoft.playready":{licenseUrl:i4(e,"playready")}},requestMediaKeySystemAccessFunc:(e,t)=>("com.widevine.alpha"===e&&(t=[...t.map(e=>{var t;let i=null==(t=e.videoCapabilities)?void 0:t.map(e=>({...e,robustness:"HW_SECURE_ALL"}));return{...e,videoCapabilities:i}}),...t]),navigator.requestMediaKeySystemAccess(e,t).then(t=>{let i=(e=>e.includes("fps")?iD.FAIRPLAY:e.includes("playready")?iD.PLAYREADY:e.includes("widevine")?iD.WIDEVINE:void 0)(e);return null==a||a(i),t}))}:{}},i2=async e=>{let t=await fetch(e);return 200!==t.status?Promise.reject(t):await t.arrayBuffer()},i3=async(e,t)=>{let i=await fetch(t,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:e});return 200!==i.status?Promise.reject(i):new Uint8Array(await i.arrayBuffer())},i4=({playbackId:e,tokens:{drm:t}={},customDomain:i=iB},a)=>{let r=i$(e);return`https://license.${i.toLocaleLowerCase().endsWith(iB)?i:iB}/license/${a}/${r}?token=${t}`},i5=({playbackId:e,tokens:{drm:t}={},customDomain:i=iB},a)=>{let r=i$(e);return`https://license.${i.toLocaleLowerCase().endsWith(iB)?i:iB}/appcert/${a}/${r}?token=${t}`},i9=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iB)||!!i&&a.includes(i.toLocaleLowerCase())};function i8(e){var t;let i=e.target,a=null==(t=iU.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function i6(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tB(i,a);if(t.src&&a===tB.MEDIA_ERR_SRC_NOT_SUPPORTED&&t.readyState===HTMLMediaElement.HAVE_NOTHING)return void setTimeout(()=>{var e;let i=null!=(e=iq(t))?e:t.error;(null==i?void 0:i.code)===tB.MEDIA_ERR_SRC_NOT_SUPPORTED&&i7(t,r)},500);if(t.src&&(a!==tB.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}i7(t,r)}function i7(e,t){var i;t.fatal&&((null!=(i=iU.get(e))?i:{}).error=t,e.dispatchEvent(new CustomEvent("error",{detail:t})))}function ae(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tB))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=iU.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var at,ai,aa,ar,an,as,ao,al,ad,au,ac,ah,am=(e,t)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",e);let n={[tO.ErrorTypes.NETWORK_ERROR]:tB.MEDIA_ERR_NETWORK,[tO.ErrorTypes.MEDIA_ERROR]:tB.MEDIA_ERR_DECODE,[tO.ErrorTypes.KEY_SYSTEM_ERROR]:tB.MEDIA_ERR_ENCRYPTED},s,o=(e=>[tO.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,tO.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(e.details)?tB.MEDIA_ERR_NETWORK:n[e.type])(e);if(o===tB.MEDIA_ERR_NETWORK&&e.response){let r=null!=(i=(e=>e.type===tO.ErrorTypes.KEY_SYSTEM_ERROR?tx.DRM:e.type===tO.ErrorTypes.NETWORK_ERROR?tx.VIDEO:void 0)(e))?i:tx.VIDEO;s=null!=(a=i_(e.response,r,t,e.fatal))?a:new tB("",o,e.fatal)}else o===tB.MEDIA_ERR_ENCRYPTED?e.details===tO.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE?((s=new tB(t9("Attempting to play DRM-protected content without providing a DRM token."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_MISSING_TOKEN):e.details===tO.ErrorDetails.KEY_SYSTEM_NO_ACCESS?((s=new tB(t9("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM):e.details===tO.ErrorDetails.KEY_SYSTEM_NO_SESSION?((s=new tB(t9("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),tB.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_GENERATE_REQUEST_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED?((s=new tB(t9("Failed to update DRM license. This may be an issue with the player or your protected content."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UPDATE_LICENSE_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED?((s=new tB(t9("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED):e.details===tO.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR?((s=new tB(t9("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."),tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_CDM_ERROR):e.details===tO.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED?((s=new tB(t9("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen."),tB.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_OUTPUT_RESTRICTED):((s=new tB(e.error.message,tB.MEDIA_ERR_ENCRYPTED,e.fatal)).errorCategory=tx.DRM,s.muxCode=tN.ENCRYPTED_ERROR):s=new tB("",o,e.fatal);return s.context||(s.context=`${e.url?`url: ${e.url}
`:""}${e.response&&(e.response.code||e.response.text)?`response: ${e.response.code}, ${e.response.text}
`:""}${e.reason?`failure reason: ${e.reason}
`:""}${e.level?`level: ${e.level}
`:""}${e.parent?`parent stream controller: ${e.parent}
`:""}${e.buffer?`buffer length: ${e.buffer}
`:""}${e.error?`error: ${e.error}
`:""}${e.event?`event: ${e.event}
`:""}${e.err?`error message: ${null==(r=e.err)?void 0:r.message}
`:""}`),s.data=e,s},ap=i(9595),av=e=>{throw TypeError(e)},aE=(e,t,i)=>t.has(e)||av("Cannot "+i),ab=(e,t,i)=>(aE(e,t,"read from private field"),i?i.call(e):t.get(e)),af=(e,t,i)=>t.has(e)?av("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),ag=(e,t,i,a)=>(aE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a_=(e,t,i)=>(aE(e,t,"access private method"),i),ay=(()=>{try{return"0.26.1"}catch{}return"UNKNOWN"})(),aT=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,aA={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},ak=Object.values(aA),aw="mux-video",aS=class extends ap.lB{constructor(){super(),af(this,ac),af(this,at),af(this,ai),af(this,aa),af(this,ar,{}),af(this,an,{}),af(this,as),af(this,ao),af(this,al),af(this,ad),af(this,au,""),ag(this,aa,iW()),this.nativeEl.addEventListener("muxmetadata",e=>{var t;let i=(e=>{var t;return null==(t=iU.get(e))?void 0:t.metadata})(this.nativeEl),a=null!=(t=this.metadata)?t:{};this.metadata={...i,...a},(null==i?void 0:i["com.mux.video.branding"])==="mux-free-plan"&&(ag(this,au,"default"),this.updateLogo())})}static get NAME(){return aw}static get VERSION(){return ay}static get observedAttributes(){var e;return[...ak,...null!=(e=ap.lB.observedAttributes)?e:[]]}static getLogoHTML(e){return e&&"false"!==e?"default"===e?aT:`<img part="logo" src="${e}" />`:""}static getTemplateHTML(e={}){var t;return`
      ${ap.lB.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML(null!=(t=e[aA.LOGO])?t:"")}
      </slot>
    `}get preferCmcd(){var e;return null!=(e=this.getAttribute(aA.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tK.includes(e)?this.setAttribute(aA.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tK.join()}`):this.removeAttribute(aA.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(aA.PLAYER_INIT_TIME)?+this.getAttribute(aA.PLAYER_INIT_TIME):ab(this,aa)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aA.PLAYER_INIT_TIME):this.setAttribute(aA.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=ab(this,al))?e:aw}set playerSoftwareName(e){ag(this,al,e)}get playerSoftwareVersion(){var e;return null!=(e=ab(this,ao))?e:ay}set playerSoftwareVersion(e){ag(this,ao,e)}get _hls(){var e;return null==(e=ab(this,at))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iq(this.nativeEl))?e:null}get errorTranslator(){return ab(this,ad)}set errorTranslator(e){ag(this,ad,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(aA.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(aA.TYPE,e):this.removeAttribute(aA.TYPE))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(aA.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(aA.DEBUG,""):this.removeAttribute(aA.DEBUG))}get disableTracking(){return this.hasAttribute(aA.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(aA.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(aA.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(aA.DISABLE_COOKIES,""):this.removeAttribute(aA.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(aA.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(aA.START_TIME):this.setAttribute(aA.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(aA.PLAYBACK_ID)?this.getAttribute(aA.PLAYBACK_ID):null!=(e=iK(this.src))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(aA.PLAYBACK_ID,e):this.removeAttribute(aA.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(aA.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aA.MAX_RESOLUTION,e):this.removeAttribute(aA.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aA.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aA.MIN_RESOLUTION,e):this.removeAttribute(aA.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(aA.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aA.RENDITION_ORDER,e):this.removeAttribute(aA.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(aA.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(aA.PROGRAM_START_TIME):this.setAttribute(aA.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(aA.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(aA.PROGRAM_END_TIME):this.setAttribute(aA.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(aA.ASSET_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetStartTime(e){null==e?this.removeAttribute(aA.ASSET_START_TIME):this.setAttribute(aA.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(aA.ASSET_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set assetEndTime(e){null==e?this.removeAttribute(aA.ASSET_END_TIME):this.setAttribute(aA.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(aA.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aA.CUSTOM_DOMAIN,e):this.removeAttribute(aA.CUSTOM_DOMAIN))}get drmToken(){var e;return null!=(e=this.getAttribute(aA.DRM_TOKEN))?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(aA.DRM_TOKEN,e):this.removeAttribute(aA.DRM_TOKEN))}get playbackToken(){var e,t,i,a;if(this.hasAttribute(aA.PLAYBACK_TOKEN))return null!=(e=this.getAttribute(aA.PLAYBACK_TOKEN))?e:void 0;if(this.hasAttribute(aA.PLAYBACK_ID)){let[,e]=tX(null!=(t=this.playbackId)?t:"");return null!=(i=new URLSearchParams(e).get("token"))?i:void 0}if(this.src)return null!=(a=new URLSearchParams(this.src).get("token"))?a:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(aA.PLAYBACK_TOKEN,e):this.removeAttribute(aA.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(aA.PLAYBACK_TOKEN),t=this.getAttribute(aA.DRM_TOKEN);return{...ab(this,an),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{}}}set tokens(e){ag(this,an,null!=e?e:{})}get ended(){return iz(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(aA.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(aA.ENV_KEY,e):this.removeAttribute(aA.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aA.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aA.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aA.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(aA.STREAM_TYPE))?e:iY(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(aA.STREAM_TYPE,e):this.removeAttribute(aA.STREAM_TYPE))}get targetLiveWindow(){var e,t,i;return this.hasAttribute(aA.TARGET_LIVE_WINDOW)?+this.getAttribute(aA.TARGET_LIVE_WINDOW):(e=this.nativeEl,null!=(i=null==(t=iU.get(e))?void 0:t.targetLiveWindow)?i:NaN)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(aA.TARGET_LIVE_WINDOW):this.setAttribute(aA.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(aA.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return(e=>{var t;let i=null==(t=iU.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return NaN;let a=iG(e);return a.length?a.end(a.length-1)-i:NaN})(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(aA.LIVE_EDGE_OFFSET))return+this.getAttribute(aA.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(null==e?this.removeAttribute(aA.LIVE_EDGE_OFFSET):this.setAttribute(aA.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iG(this.nativeEl)}async addCuePoints(e){return il(this.nativeEl,e)}get activeCuePoint(){return iu(this.nativeEl)}get cuePoints(){return function(e,t={label:is}){let i=ia(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>id(e)):[]}(this.nativeEl)}async addChapters(e){return iv(this.nativeEl,e)}get activeChapter(){return iE(this.nativeEl)}get chapters(){return function(e,t={label:ih}){var i;let a=ia(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>ip(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(aA.PREFER_PLAYBACK);if(e===tF.MSE||e===tF.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tF.MSE||e===tF.NATIVE?this.setAttribute(aA.PREFER_PLAYBACK,e):this.removeAttribute(aA.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![aA.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...ab(this,ar)}}set metadata(e){ag(this,ar,null!=e?e:{}),this.mux&&this.mux.emit("hb",ab(this,ar))}get _hlsConfig(){return ab(this,as)}set _hlsConfig(e){ag(this,as,e)}get logo(){var e;return null!=(e=this.getAttribute(aA.LOGO))?e:ab(this,au)}set logo(e){e?this.setAttribute(aA.LOGO,e):this.removeAttribute(aA.LOGO)}load(){ag(this,at,((e,t,i)=>{var a,r,n,s;iX(t,i,e);let{metadata:o={}}=e,{view_session_id:l=iV()}=o,d=null!=(r=null==(a=e)?void 0:a.metadata)&&r.video_id?a.metadata.video_id:i9(a)&&null!=(s=null!=(n=i$(a.playbackId))?n:iK(a.src))?s:a.src;o.view_session_id=l,o.video_id=d,e.metadata=o,e.drmTypeCb=e=>{var i;null==(i=t.mux)||i.emit("hb",{view_drm_type:e})},iU.set(t,{retryCount:0});let u=((e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tJ(e)===tq.M3U8,d=iJ(e,t);if(l&&!d&&iH){let l=i0(a),d=i1(e),u=new tO({debug:i,startPosition:r,cmcd:[t$.QUERY,t$.HEADER].includes(s)?{useHeaders:s===t$.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==t$.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},capLevelController:iT,...{backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},...l,...d,...o});return u.on(tO.Events.MANIFEST_PARSED,async function(e,i){var a,r;let n=null==(a=i.sessionData)?void 0:a["com.apple.hls.chapters"];(null!=n&&n.URI||null!=n&&n.VALUE.toLocaleLowerCase().startsWith("http"))&&iO(null!=(r=null==n?void 0:n.URI)?r:null==n?void 0:n.VALUE,t)}),u}})(e,t),c=(({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tz(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d})(e,t,u);null!=e&&e.muxDataKeepSession&&null!=t&&t.mux&&!t.mux.deleted?u&&t.mux.addHLSJS({hlsjs:u,Hls:u?tO:void 0}):((e,t,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=tL,muxDataSDKOptions:o={}}=e,l=i9(e);if(!n&&(r||l)){let{playerInitTime:n,playerSoftwareName:l,playerSoftwareVersion:d,beaconCollectionDomain:u,debug:c,disableCookies:h}=e,m={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};s.monitor(t,{debug:c,beaconCollectionDomain:u,hlsjs:i,Hls:i?tO:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:h,...o,data:{...r?{env_key:r}:{},player_software_name:l,player_software:l,player_software_version:d,player_init_time:n,...m}})}})(e,t,u),((e,t,i)=>{var a,r;let n=iJ(e,t),{src:s,customDomain:o=iB}=e,l=()=>{t.ended||!iz(t,i)||(iZ(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},d,u,c=()=>{let e=iG(t),i,a;e.length>0&&(i=e.start(0),a=e.end(0)),(u!==a||d!==i)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=i,u=a};if(tz(t,"durationchange",c),t&&n){let i=tJ(e);if("string"==typeof s){if(s.endsWith(".mp4")&&s.includes(o)){let e=iK(s);iO(new URL(`https://stream.${o}/${e}/metadata.json`).toString(),t)}let n=()=>{if(iY(t)!==tV.LIVE||Number.isFinite(t.duration))return;let e=setInterval(c,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tz(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})},l=async()=>iM(s,t,i).then(n).catch(i=>{if(i instanceof Response){let a=i_(i,tx.VIDEO,e);if(a)return void i7(t,a)}});if("none"===t.preload){let e=()=>{l(),t.removeEventListener("loadedmetadata",i)},i=()=>{l(),t.removeEventListener("play",e)};tz(t,"play",e,{once:!0}),tz(t,"loadedmetadata",i,{once:!0})}else l();null!=(a=e.tokens)&&a.drm?((e,t)=>{tz(t,"encrypted",async i=>{try{let a=i.initDataType;if("skd"!==a)return void console.error(`Received unexpected initialization data type "${a}"`);if(!t.mediaKeys){let i=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(t=>{var i;return null==(i=e.drmTypeCb)||i.call(e,iD.FAIRPLAY),t}).catch(()=>{let e=t9("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),i=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,i7(t,i)});if(!i)return;let r=await i.createMediaKeys();try{let t=await i2(i5(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=i_(t,tx.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in app cert request"))}return Promise.reject(t)});await r.setServerCertificate(t).catch(()=>{let e=t9("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),t=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tx.DRM,t.muxCode=tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(t)})}catch(e){i7(t,e);return}await t.setMediaKeys(r)}let r=i.initData;if(null==r)return void console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);let n=t.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(e=>{let i;if("internal-error"===e){let e=t9("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");(i=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0)).errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_CDM_ERROR}else if("output-restricted"===e||"output-downscaled"===e){let e=t9("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");(i=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!1)).errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_OUTPUT_RESTRICTED}i&&i7(t,i)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let e=t9("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),i=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);i.errorCategory=tx.DRM,i.muxCode=tN.ENCRYPTED_GENERATE_REQUEST_FAILED,i7(t,i)}),new Promise(e=>{n.addEventListener("message",t=>{e(t.message)},{once:!0})})]).then(([,e])=>e),o=await i3(s,i4(e,"fairplay")).catch(t=>{if(t instanceof Response){let i=i_(t,tx.DRM,e);return console.error("mediaError",null==i?void 0:i.message,null==i?void 0:i.context),i?Promise.reject(i):Promise.reject(Error("Unexpected error in license key request"))}return Promise.reject(t)});await n.update(o).catch(()=>{let e=t9("Failed to update DRM license. This may be an issue with the player or your protected content."),t=new tB(e,tB.MEDIA_ERR_ENCRYPTED,!0);return t.errorCategory=tx.DRM,t.muxCode=tN.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(t)})}catch(e){i7(t,e);return}})})(e,t):tz(t,"encrypted",()=>{let e=new tB(t9("Attempting to play DRM-protected content without providing a DRM token."),tB.MEDIA_ERR_ENCRYPTED,!0);e.errorCategory=tx.DRM,e.muxCode=tN.ENCRYPTED_MISSING_TOKEN,i7(t,e)},{once:!0}),t.setAttribute("src",s),e.startTime&&((null!=(r=iU.get(t))?r:{}).startTime=e.startTime,t.addEventListener("durationchange",i8,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",i6),t.addEventListener("error",ae),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tz(t,"pause",l),tz(t,"seeked",l),tz(t,"play",()=>{t.ended||iQ(t.currentTime,t.duration)&&(t.currentTime=t.seekable.length?t.seekable.start(0):0)})}else i&&s?(i.once(tO.Events.LEVEL_LOADED,(e,a)=>{((e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=(e=>{var t;let i=e.type,a=t0(i),r=t1(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tV.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}})(e);if(c===tV.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=iU.get(t))?o:{}).seekable=e}(null!=(l=iU.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=iU.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=iU.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))})(a.details,t,i),c(),iY(t)!==tV.LIVE||Number.isFinite(t.duration)||(i.on(tO.Events.LEVEL_UPDATED,c),tz(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tO.Events.LEVELS_UPDATED,c)}))}),i.on(tO.Events.ERROR,(a,r)=>{var n,s;let o=am(r,e);if(o.muxCode===tN.NETWORK_NOT_READY){let e=null!=(n=iU.get(t))?n:{},a=null!=(s=e.retryCount)?s:0;if(a<6){let n=0===a?5e3:6e4,s=new tB(`Retrying in ${n/1e3} seconds...`,o.code,o.fatal);Object.assign(s,o),i7(t,s),setTimeout(()=>{e.retryCount=a+1,"manifestLoadError"===r.details&&r.url&&i.loadSource(r.url)},n);return}{e.retryCount=0;let i=new tB('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',o.code,o.fatal);Object.assign(i,o),i7(t,i);return}}i7(t,o)}),i.on(tO.Events.MANIFEST_LOADED,()=>{let e=iU.get(t);e&&e.error&&(e.error=null,e.retryCount=0,t.dispatchEvent(new Event("emptied")),t.dispatchEvent(new Event("loadstart")))}),t.addEventListener("error",ae),tz(t,"waiting",l),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tO.Events.MANIFEST_PARSED,function(t,i){n();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tO.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(r(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tO.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)}),null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&(t.nextLevel=i)});let r=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},n=()=>{(()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)})(),r()};t.once(tO.Events.DESTROYING,n)}(e,i),function(e,t){t.on(tO.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a,r;let n=null!=(a=i.subtitleTrack)?a:i.closedCaptions,s=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==n?void 0:n.lang)&&t===i.label&&a.toLowerCase()===i.kind),o=(null!=(r=i._id)?r:i.default)?"default":`${i.kind}${s}`;ii(e,i.kind,i.label,null==n?void 0:n.lang,o,i.default)})});let i=()=>{if(!t.subtitleTracks.length)return;let i=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind));if(!i)return;let a=t.subtitleTracks[t.subtitleTrack],r=a?a.default?"default":`${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`:void 0;if(t.subtitleTrack<0||(null==i?void 0:i.id)!==r){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:a,default:r})=>"default"===i.id&&r||e==i.language&&t===i.label&&a.toLowerCase()===i.kind);t.subtitleTrack=e}(null==i?void 0:i.id)===r&&i.cues&&Array.from(i.cues).forEach(e=>{i.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tO.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tO.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&("thumbnails"===t.label||"chapters"===t.kind)){if(!(null!=(i=t.cues)&&i.length)){let i="track";t.kind&&(i+=`[kind="${t.kind}"]`),t.label&&(i+=`[label="${t.label}"]`);let r=e.querySelector(i),n=null!=(a=null==r?void 0:r.getAttribute("src"))?a:"";null==r||r.removeAttribute("src"),setTimeout(()=>{null==r||r.setAttribute("src",n)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tO.Events.MANIFEST_LOADED,a),t.once(tO.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")})(e,t,u),ic(t),ib(t);let h=((e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=t7(a)?a:!!a,o=()=>{r||tz(t,"playing",()=>{r=!0},{once:!0})};if(o(),tz(t,"loadstart",()=>{r=!1,o(),ie(t,s)},{once:!0}),tz(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tV.UNKNOWN?e.streamType===tV.LIVE:!Number.isFinite(t.duration)),ie(t,s)},{once:!0}),i&&i.once(tO.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tV.UNKNOWN?e.streamType===tV.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tz(t,"play",()=>{"metadata"===t.preload?i.once(tO.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||ie(t,s=t7(e)?e:!!e)}})(e,t,u);return{engine:u,setAutoplay:h,setPreload:c}})(this,this.nativeEl,ab(this,at)))}unload(){iX(this.nativeEl,ab(this,at),this),ag(this,at,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(ap.lB.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case aA.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case aA.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?a_(this,ac,ah).call(this):e&&!a?this.unload():e&&a&&(this.unload(),a_(this,ac,ah).call(this));break}case"autoplay":if(i===t)break;null==(a=ab(this,at))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=ab(this,at))||r.setPreload(i);break;case aA.PLAYBACK_ID:this.src=iF(this);break;case aA.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case aA.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case aA.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case aA.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case aA.LOGO:(null==i||i!==t)&&this.updateLogo()}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');e&&(e.innerHTML=this.constructor.getLogoHTML(ab(this,au)||this.logo))}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!ab(this,at)&&a_(this,ac,ah).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};at=new WeakMap,ai=new WeakMap,aa=new WeakMap,ar=new WeakMap,an=new WeakMap,as=new WeakMap,ao=new WeakMap,al=new WeakMap,ad=new WeakMap,au=new WeakMap,ac=new WeakSet,ah=async function(){ab(this,ai)||(await ag(this,ai,Promise.resolve()),ag(this,ai,null),this.load())};let aI=new WeakMap;class aR extends Error{}class aD extends Error{}let aC=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"];function aL(){return globalThis.cast?.framework?.CastContext.getInstance()}function aM(){return aL()?.getCurrentSession()}function aO(){return aM()?.getSessionObj().media[0]}function ax(e){return aL().setOptions({...aN(),...e})}function aN(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}async function aP(e){try{let t=(await fetch(e,{method:"HEAD"})).headers.get("Content-Type");return aC.some(e=>t===e)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function aU(e){try{let i=await (await fetch(e)).text(),a=i,r=function(e){let t=e.split("\n"),i=[];for(let e=0;e<t.length;e++)if(t[e].trim().startsWith("#EXT-X-STREAM-INF")){let a=t[e+1]?t[e+1].trim():"";a&&!a.startsWith("#")&&i.push(a)}return i}(i);if(r.length>0){let t=new URL(r[0],e).toString();a=await (await fetch(t)).text()}var t=a.split("\n").find(e=>!e.trim().startsWith("#")&&""!==e.trim());if(!t)return;let n=t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);return n?n[1]:null}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}let aB=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),aH=new WeakSet;!function(e){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?e():customElements.whenDefined("google-cast-button").then(e):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(e)}}(()=>{if(!globalThis.chrome?.cast?.isAvailable)return void console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);a||(a=cast.framework,aL().addEventListener(a.CastContextEventType.CAST_STATE_CHANGED,e=>{aB.forEach(t=>aI.get(t).onCastStateChanged?.(e))}),aL().addEventListener(a.CastContextEventType.SESSION_STATE_CHANGED,e=>{aB.forEach(t=>aI.get(t).onSessionStateChanged?.(e))}),aB.forEach(e=>aI.get(e).init?.()))});let aW=0;class aV extends EventTarget{#e;#t;#i;#a;#r="disconnected";#n=!1;#s=new Set;#o=new WeakMap;constructor(e){super(),this.#e=e,aB.add(this),aI.set(this,{init:()=>this.#l(),onCastStateChanged:()=>this.#d(),onSessionStateChanged:()=>this.#u(),getCastPlayer:()=>this.#c}),this.#l()}get #c(){if(aH.has(this.#e))return this.#i}get state(){return this.#r}async watchAvailability(e){if(this.#e.disableRemotePlayback)throw new aR("disableRemotePlayback attribute is present.");return this.#o.set(e,++aW),this.#s.add(e),queueMicrotask(()=>e(this.#h())),aW}async cancelWatchAvailability(e){if(this.#e.disableRemotePlayback)throw new aR("disableRemotePlayback attribute is present.");e?this.#s.delete(e):this.#s.clear()}async prompt(){if(this.#e.disableRemotePlayback)throw new aR("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new aD("The RemotePlayback API is disabled on this platform.");let e=aH.has(this.#e);aH.add(this.#e),ax(this.#e.castOptions),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{await aL().requestSession()}catch(t){if(e||aH.delete(this.#e),"cancel"===t)return;throw Error(t)}aI.get(this.#e)?.loadOnPrompt?.()}#m(){aH.has(this.#e)&&(Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.removeEventListener(e,t)}),aH.delete(this.#e),this.#e.muted=this.#i.isMuted,this.#e.currentTime=this.#i.savedPlayerState.currentTime,!1===this.#i.savedPlayerState.isPaused&&this.#e.play())}#h(){let e=aL()?.getCastState();return e&&"NO_DEVICES_AVAILABLE"!==e}#d(){let e=aL().getCastState();if(aH.has(this.#e)&&"CONNECTING"===e&&(this.#r="connecting",this.dispatchEvent(new Event("connecting"))),!this.#n&&e?.includes("CONNECT"))for(let e of(this.#n=!0,this.#s))e(!0);else if(this.#n&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(this.#n=!1,this.#s))e(!1)}async #u(){let{SESSION_RESUMED:e}=a.SessionState;if(aL().getSessionState()===e&&this.#e.castSrc===aO()?.media.contentId){aH.add(this.#e),Object.entries(this.#a).forEach(([e,t])=>{this.#i.controller.addEventListener(e,t)});try{var t;await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{aO().getStatus(t,e,i)}))}catch(e){console.error(e)}this.#a[a.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#l(){a&&!this.#t&&(this.#t=!0,ax(this.#e.castOptions),this.#e.textTracks.addEventListener("change",()=>this.#p()),this.#d(),this.#i=new a.RemotePlayer,new a.RemotePlayerController(this.#i),this.#a={[a.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(this.#r="connected",this.dispatchEvent(new Event("connect"))):(this.#m(),this.#r="disconnected",this.dispatchEvent(new Event("disconnect")))},[a.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#e.dispatchEvent(new Event("durationchange"))},[a.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#e.dispatchEvent(new Event("volumechange"))},[a.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#c?.isMediaLoaded&&this.#e.dispatchEvent(new Event("timeupdate"))},[a.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#e.dispatchEvent(new Event("resize"))},[a.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#e.dispatchEvent(new Event(this.paused?"pause":"play"))},[a.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#c?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#e.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#c?.playerState]))},[a.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#c?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#p()}async #p(){let e;if(!this.#c)return;let t=(this.#i.mediaInfo?.tracks??[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),i=[...this.#e.textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),a=t.map(({language:e,name:t,trackId:a})=>{let{mode:r}=i.find(i=>i.language===e&&i.label===t)??{};return!!r&&{mode:r,trackId:a}}).filter(Boolean),r=a.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),n=a.find(({mode:e})=>"showing"===e),s=aM()?.getSessionObj().media[0]?.activeTrackIds??[],o=s;if(s.length&&(o=o.filter(e=>!r.includes(e))),n?.trackId&&(o=[...o,n.trackId]),e=o=[...new Set(o)],!(s.length===e.length&&s.every(t=>e.includes(t))))try{let e=new chrome.cast.media.EditTracksInfoRequest(o);await new Promise((t,i)=>{aO().editTracksInfo(e,t,i)})}catch(e){console.error(e)}}}let aF=e=>class extends e{static observedAttributes=[...e.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#E={paused:!1};#b=aN();#f;#g;get remote(){return this.#g?this.#g:globalThis.chrome?(this.disableRemotePlayback||function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),aI.set(this,{loadOnPrompt:()=>this.#_()}),this.#g=new aV(this)):super.remote}get #c(){return aI.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){this.#b.receiverApplicationId=i;return}if(this.#c)switch(e){case"cast-stream-type":case"cast-src":this.load()}}async #_(){this.#E.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(e){console.error(e)}}async load(){if(!this.#c)return super.load();let e=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);e.customData=this.castCustomData;let t=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),i=[],a=0;if(t.length&&(e.tracks=t.map(e=>{let t=++a;0===i.length&&"showing"===e.track.mode&&i.push(t);let r=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return r.trackContentId=e.src,r.trackContentType="text/vtt",r.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,r.name=e.label,r.language=e.srclang,r})),"live"===this.castStreamType?e.streamType=chrome.cast.media.StreamType.LIVE:e.streamType=chrome.cast.media.StreamType.BUFFERED,e.metadata=new chrome.cast.media.GenericMediaMetadata,e.metadata.title=this.title,e.metadata.images=[{url:this.poster}],aP(this.castSrc)){let t=await aU(this.castSrc);(t?.includes("m4s")||t?.includes("mp4"))&&(e.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,e.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4)}let r=new chrome.cast.media.LoadRequest(e);r.currentTime=super.currentTime??0,r.autoplay=!this.#E.paused,r.activeTrackIds=i,await aM()?.loadMedia(r),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#c){this.#c.isPaused&&this.#c.controller?.playOrPause();return}return super.play()}pause(){if(this.#c){this.#c.isPaused||this.#c.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#b}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get castCustomData(){return this.#f}set castCustomData(e){let t=typeof e;if(!["object","undefined"].includes(t))return void console.error(`castCustomData must be nullish or an object but value was of type ${t}`);this.#f=e}get readyState(){if(this.#c)switch(this.#c.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#c?this.#c.isPaused:super.paused}get muted(){return this.#c?this.#c?.isMuted:super.muted}set muted(e){if(this.#c){(e&&!this.#c.isMuted||!e&&this.#c.isMuted)&&this.#c.controller?.muteOrUnmute();return}super.muted=e}get volume(){return this.#c?this.#c?.volumeLevel??1:super.volume}set volume(e){if(this.#c){this.#c.volumeLevel=+e,this.#c.controller?.setVolumeLevel();return}super.volume=e}get duration(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.duration??NaN:super.duration}get currentTime(){return this.#c&&this.#c?.isMediaLoaded?this.#c?.currentTime??0:super.currentTime}set currentTime(e){if(this.#c){this.#c.currentTime=e,this.#c.controller?.seek();return}super.currentTime=e}};var a$=i(6318),aK=e=>{throw TypeError(e)},aq=(e,t,i)=>t.has(e)||aK("Cannot "+i),aY=(e,t,i)=>(aq(e,t,"read from private field"),i?i.call(e):t.get(e)),aG=(e,t,i)=>t.has(e)?aK("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),aj=(e,t,i,a)=>(aq(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),aQ=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends aQ{}globalThis.DocumentFragment=e}var aZ,az=class extends aQ{},aX=class{constructor(e,t={}){aG(this,aZ),aj(this,aZ,null==t?void 0:t.detail)}get detail(){return aY(this,aZ)}initCustomEvent(){}};aZ=new WeakMap;var aJ={document:{createElement:function(e,t){return new az}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(az)},CustomEvent:aX,EventTarget:aQ,HTMLElement:az,HTMLVideoElement:class extends aQ{}},a0="undefined"==typeof window||void 0===globalThis.customElements,a1=a0?aJ:globalThis;a0?aJ.document:globalThis.document;var a2,a3=class extends aF((0,a$.u6)(aS)){constructor(){super(...arguments),aG(this,a2)}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var e;return null!=(e=aY(this,a2))?e:this.muxCastCustomData}set castCustomData(e){aj(this,a2,e)}};a2=new WeakMap,a1.customElements.get("mux-video")||(a1.customElements.define("mux-video",a3),a1.MuxVideoElement=a3);let a4={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},a5={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},a9={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_WIDTH:"mediaWidth"},a8=Object.entries(a9),a6=a8.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{}),a7=a8.reduce((e,[t,i])=>(e[t]=i.toLowerCase(),e),{USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(a7).reduce((e,[t,i])=>{let a=a6[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let re=Object.entries(a6).reduce((e,[t,i])=>{let a=a7[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),rt={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},ri={DISABLED:"disabled",SHOWING:"showing"},ra={MOUSE:"mouse",TOUCH:"touch"},rr={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},rn={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},rs={FULLSCREEN:"fullscreen"};function ro(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function rl(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:+i,height:+a}}}function rd(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function ru(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function rc(e){return"number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)}function rh(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}let rm=e=>new Promise(t=>setTimeout(t,e)),rp=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],rv=e=>{if(!rc(e))return"";let t=Math.abs(e),i=t!==e,a=new Date(0,0,0,0,0,t,0),r=[a.getHours(),a.getMinutes(),a.getSeconds()].map((e,t)=>e&&((e,t)=>{let i=1===e?rp[t].singular:rp[t].plural;return`${e} ${i}`})(e,t)).filter(e=>e).join(", ");return`${r}${i?" remaining":""}`};function rE(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),s=Math.floor(t/60%60),o=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||o>0?n+":":"")||s>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});let rb={en:{"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."}},rf=(null==(dD=globalThis.navigator)?void 0:dD.language)||"en",rg=(e,t={})=>(e=>{var t,i,a;let[r]=rf.split("-");return(null==(t=rb[rf])?void 0:t[e])||(null==(i=rb[r])?void 0:i[e])||(null==(a=rb.en)?void 0:a[e])||e})(e).replace(/\{(\w+)\}/g,(e,i)=>i in t?String(t[i]):`{${i}}`);class r_{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ry extends r_{}class rT extends ry{constructor(){super(...arguments),this.role=null}}class rA{observe(){}unobserve(){}disconnect(){}}let rk={createElement:function(){return new rw.HTMLElement},createElementNS:function(){return new rw.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},rw={ResizeObserver:rA,document:rk,Node:ry,Element:rT,HTMLElement:class extends rT{constructor(){super(...arguments),this.innerHTML=""}get content(){return new rw.DocumentFragment}},DocumentFragment:class extends r_{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e}),DOMParser:class{parseFromString(e,t){return{body:{textContent:e}}}}},rS="undefined"==typeof window||void 0===window.customElements,rI=Object.keys(rw).every(e=>e in globalThis),rR=rS&&!rI?rw:globalThis,rD=rS&&!rI?rk:globalThis.document,rC=new WeakMap,rL=e=>{let t=rC.get(e);return t||rC.set(e,t=new Set),t},rM=new rR.ResizeObserver(e=>{for(let t of e)for(let e of rL(t.target))e(t)});function rO(e,t){rL(e).add(t),rM.observe(e)}function rx(e,t){let i=rL(e);i.delete(t),i.size||rM.unobserve(e)}function rN(e){let t={};for(let i of e)t[i.name]=i.value;return t}function rP(e){var t;return null!=(t=rU(e))?t:rV(e,"media-controller")}function rU(e){var t;let{MEDIA_CONTROLLER:i}=a5,a=e.getAttribute(i);if(a)return null==(t=r$(e))?void 0:t.getElementById(a)}let rB=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},rH=(e,t)=>((e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]})(e,t)[0],rW=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||rW(e,t.getRootNode().host)),rV=(e,t)=>{if(!e)return null;let i=e.closest(t);return i||rV(e.getRootNode().host,t)};function rF(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=rF(i.shadowRoot))?t:i:null}function r$(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function rK(e,{depth:t=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(e.checkVisibility)return e.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=e;for(;r&&t>0;){let e=getComputedStyle(r);if(i&&"0"===e.opacity||a&&"hidden"===e.visibility||"none"===e.display)return!1;r=r.parentElement,t--}return!0}function rq(e,t){let i=function(e,t){var i,a;let r;for(r of null!=(i=e.querySelectorAll("style:not([media])"))?i:[]){let e;try{e=null==(a=r.sheet)?void 0:a.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t);return i||rY(e,t)}function rY(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style:not([media])"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function rG(e,t,i=NaN){let a=e.getAttribute(t);return null!=a?+a:i}function rj(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}rG(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function rQ(e,t){return e.hasAttribute(t)}function rZ(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}rQ(e,t)!=i&&e.toggleAttribute(t,i)}function rz(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function rX(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;rz(e,t,void 0)!==a&&e.setAttribute(t,a)}var rJ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r0=(e,t,i)=>(rJ(e,t,"read from private field"),i?i.call(e):t.get(e)),r1=(e,t,i,a)=>(rJ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class r2 extends rR.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,dC,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a5.MEDIA_CONTROLLER,a6.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=r0(this,dC))?void 0:a.unassociateElement)||r.call(a,this),r1(this,dC,null)),i&&this.isConnected&&(r1(this,dC,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=r0(this,dC))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),r1(this,dC,function(e){var t;let i=e.getAttribute(a5.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):rV(e,"media-controller")}(this)),this.getAttribute(a5.MEDIA_CONTROLLER)&&(null==(t=null==(e=r0(this,dC))?void 0:e.associateElement)||t.call(e,this)),null==(i=r0(this,dC))||i.addEventListener("pointerdown",this),null==(a=r0(this,dC))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(a5.MEDIA_CONTROLLER)&&(null==(t=null==(e=r0(this,dC))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=r0(this,dC))||i.removeEventListener("pointerdown",this),null==(a=r0(this,dC))||a.removeEventListener("click",this),r1(this,dC,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===ra.TOUCH)return void this.handleTap(e);if(d===ra.MOUSE)return void this.handleMouseClick(e)}}}get mediaPaused(){return rQ(this,a6.MEDIA_PAUSED)}set mediaPaused(e){rZ(this,a6.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?a4.MEDIA_PLAY_REQUEST:a4.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new rR.CustomEvent(t,{composed:!0,bubbles:!0}))}}dC=new WeakMap,r2.shadowRootOptions={mode:"open"},r2.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `},rR.customElements.get("media-gesture-receiver")||rR.customElements.define("media-gesture-receiver",r2);var r3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r4=(e,t,i)=>(r3(e,t,"read from private field"),i?i.call(e):t.get(e)),r5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},r9=(e,t,i,a)=>(r3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),r8=(e,t,i)=>(r3(e,t,"access private method"),i);let r6={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"},r7=Object.values(a6);function ne(e,t){var i,a,r;if(!e.isConnected)return;let n=Object.fromEntries((null!=(i=e.getAttribute(r6.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),s=(a=n,r=t,Object.keys(a).filter(e=>r>=parseInt(a[e]))),o=!1;if(Object.keys(n).forEach(t=>{if(s.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),o=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),o=!0)}),o){let t=new CustomEvent(a7.BREAKPOINTS_CHANGE,{detail:s});e.dispatchEvent(t)}e.breakpointsComputed||(e.breakpointsComputed=!0,e.dispatchEvent(new CustomEvent(a7.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}class nt extends rR.HTMLElement{constructor(){if(super(),r5(this,dP),r5(this,dW),r5(this,dF),r5(this,dK),r5(this,dY),r5(this,dj),r5(this,dL,0),r5(this,dM,null),r5(this,dO,null),r5(this,dx,void 0),this.breakpointsComputed=!1,r5(this,dN,new MutationObserver(r8(this,dP,dU).bind(this))),r5(this,dB,!1),r5(this,dH,e=>{r4(this,dB)||(setTimeout(()=>{!function(e){ne(e.target,e.contentRect.width)}(e),r9(this,dB,!1)},0),r9(this,dB,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}let e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){r4(this,dM)&&this.mediaUnsetCallback(r4(this,dM));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[r6.AUTOHIDE,r6.GESTURES_DISABLED].concat(r7).filter(e=>![a6.MEDIA_RENDITION_LIST,a6.MEDIA_AUDIO_TRACK_LIST,a6.MEDIA_CHAPTERS_CUES,a6.MEDIA_WIDTH,a6.MEDIA_HEIGHT,a6.MEDIA_ERROR,a6.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==r6.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(r9(this,dM,e),e.localName.includes("-")&&await rR.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;r4(this,dN).observe(this,{childList:!0,subtree:!0}),rO(this,r4(this,dH));let t=null!=this.getAttribute(r6.AUDIO)?rg("audio player"):rg("video player");this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(r6.USER_INACTIVE,""),ne(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=rR.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;r4(this,dN).disconnect(),rx(this,r4(this,dH)),this.media&&this.mediaUnsetCallback(this.media),null==(e=rR.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){r9(this,dM,null)}handleEvent(e){switch(e.type){case"pointerdown":r9(this,dL,e.timeStamp);break;case"pointermove":r8(this,dW,dV).call(this,e);break;case"pointerup":r8(this,dF,d$).call(this,e);break;case"mouseleave":r8(this,dK,dq).call(this);break;case"mouseup":this.removeAttribute(r6.KEYBOARD_CONTROL);break;case"keyup":r8(this,dj,dQ).call(this),this.setAttribute(r6.KEYBOARD_CONTROL,"")}}set autohide(e){let t=Number(e);r9(this,dx,isNaN(t)?0:t)}get autohide(){return(void 0===r4(this,dx)?2:r4(this,dx)).toString()}get breakpoints(){return rz(this,r6.BREAKPOINTS)}set breakpoints(e){rX(this,r6.BREAKPOINTS,e)}get audio(){return rQ(this,r6.AUDIO)}set audio(e){rZ(this,r6.AUDIO,e)}get gesturesDisabled(){return rQ(this,r6.GESTURES_DISABLED)}set gesturesDisabled(e){rZ(this,r6.GESTURES_DISABLED,e)}get keyboardControl(){return rQ(this,r6.KEYBOARD_CONTROL)}set keyboardControl(e){rZ(this,r6.KEYBOARD_CONTROL,e)}get noAutohide(){return rQ(this,r6.NO_AUTOHIDE)}set noAutohide(e){rZ(this,r6.NO_AUTOHIDE,e)}get autohideOverControls(){return rQ(this,r6.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){rZ(this,r6.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return rQ(this,r6.USER_INACTIVE)}set userInteractive(e){rZ(this,r6.USER_INACTIVE,e)}}dL=new WeakMap,dM=new WeakMap,dO=new WeakMap,dx=new WeakMap,dN=new WeakMap,dP=new WeakSet,dU=function(e){let t=this.media;for(let i of e)if("childList"===i.type){for(let e of i.removedNodes){if("media"!=e.slot||i.target!=this)continue;let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}if(t)for(let e of i.addedNodes)e===t&&this.handleMediaUpdated(t)}},dB=new WeakMap,dH=new WeakMap,dW=new WeakSet,dV=function(e){if("mouse"!==e.pointerType&&e.timeStamp-r4(this,dL)<250)return;r8(this,dY,dG).call(this),clearTimeout(r4(this,dO));let t=this.hasAttribute(r6.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(e.target)||t)&&r8(this,dj,dQ).call(this)},dF=new WeakSet,d$=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(r6.USER_INACTIVE);[this,this.media].includes(e.target)&&t?r8(this,dK,dq).call(this):r8(this,dj,dQ).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&r8(this,dj,dQ).call(this)},dK=new WeakSet,dq=function(){if(0>r4(this,dx)||this.hasAttribute(r6.USER_INACTIVE))return;this.setAttribute(r6.USER_INACTIVE,"");let e=new rR.CustomEvent(a7.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},dY=new WeakSet,dG=function(){if(!this.hasAttribute(r6.USER_INACTIVE))return;this.removeAttribute(r6.USER_INACTIVE);let e=new rR.CustomEvent(a7.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},dj=new WeakSet,dQ=function(){r8(this,dY,dG).call(this),clearTimeout(r4(this,dO));let e=parseInt(this.autohide);e<0||r9(this,dO,setTimeout(()=>{r8(this,dK,dq).call(this)},1e3*e))},nt.shadowRootOptions={mode:"open"},nt.getTemplateHTML=function(e){return`
    <style>
      
      :host([${a6.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
      }

      :host(:not([${r6.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${r6.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${r6.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${r6.AUDIO}])[${r6.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${r6.AUDIO}])[${r6.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${r6.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${r6.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${r6.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${r6.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${r6.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${r6.USER_INACTIVE}]:not([${a6.MEDIA_PAUSED}]):not([${a6.MEDIA_IS_AIRPLAYING}]):not([${a6.MEDIA_IS_CASTING}]):not([${r6.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${r6.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${r6.USER_INACTIVE}]:not([${r6.NO_AUTOHIDE}]):not([${a6.MEDIA_PAUSED}]):not([${a6.MEDIA_IS_CASTING}]):not([${r6.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${r6.USER_INACTIVE}][${r6.AUTOHIDE_OVER_CONTROLS}]:not([${r6.NO_AUTOHIDE}]):not([${a6.MEDIA_PAUSED}]):not([${a6.MEDIA_IS_CASTING}]):not([${r6.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${r6.AUDIO}])[${a6.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${r2.shadowRootOptions.mode}">
          ${r2.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `},rR.customElements.get("media-container")||rR.customElements.define("media-container",nt);var ni=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},na=(e,t,i)=>(ni(e,t,"read from private field"),i?i.call(e):t.get(e)),nr=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nn=(e,t,i,a)=>(ni(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class ns{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){nr(this,d0),nr(this,dZ,void 0),nr(this,dz,void 0),nr(this,dX,void 0),nr(this,dJ,new Set),nn(this,dZ,e),nn(this,dz,t),nn(this,dX,new Set(i))}[Symbol.iterator](){return na(this,d0,d1).values()}get length(){return na(this,d0,d1).size}get value(){var e;return null!=(e=[...na(this,d0,d1)].join(" "))?e:""}set value(e){var t;e!==this.value&&(nn(this,dJ,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...na(this,d0,d1)][e]}values(){return na(this,d0,d1).values()}forEach(e,t){na(this,d0,d1).forEach(e,t)}add(...e){var t,i;e.forEach(e=>na(this,dJ).add(e)),(""!==this.value||(null==(t=na(this,dZ))?void 0:t.hasAttribute(`${na(this,dz)}`)))&&(null==(i=na(this,dZ))||i.setAttribute(`${na(this,dz)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>na(this,dJ).delete(e)),null==(t=na(this,dZ))||t.setAttribute(`${na(this,dz)}`,`${this.value}`)}contains(e){return na(this,d0,d1).has(e)}toggle(e,t){if(void 0!==t)if(t)return this.add(e),!0;else return this.remove(e),!1;return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}dZ=new WeakMap,dz=new WeakMap,dX=new WeakMap,dJ=new WeakMap,d0=new WeakSet,d1=function(){return na(this,dJ).size?na(this,dJ):na(this,dX)};let no=(e="")=>{let[t,i,a]=e.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:"cc"===t?rt.CAPTIONS:rt.SUBTITLES,language:i,label:r}},nl=(e="",t={})=>((e="")=>e.split(/\s+/))(e).map(e=>{let i=no(e);return{...t,...i}}),nd=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?no(e):e):"string"==typeof e?nl(e):[e]:[],nu=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,nc=(e=[])=>Array.prototype.map.call(e,nu).join(" "),nh=e=>{let t=Object.entries(e).map(([e,t])=>i=>i[e]===t);return e=>t.every(t=>t(e))},nm=(e,t=[],i=[])=>{let a=nd(i).map(nh);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},np=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:nh(t);return Array.from(e.textTracks).filter(i)},nv=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(a6.MEDIA_SUBTITLES_SHOWING)},nE="exitFullscreen"in rD?"exitFullscreen":"webkitExitFullscreen"in rD?"webkitExitFullscreen":"webkitCancelFullScreen"in rD?"webkitCancelFullScreen":void 0,nb="fullscreenElement"in rD?"fullscreenElement":"webkitFullscreenElement"in rD?"webkitFullscreenElement":void 0,nf="fullscreenEnabled"in rD?"fullscreenEnabled":"webkitFullscreenEnabled"in rD?"webkitFullscreenEnabled":void 0,ng=()=>{var e;return r||(r=null==(e=null==rD?void 0:rD.createElement)?void 0:e.call(rD,"video"))},n_=async(e=ng())=>{if(!e)return!1;let t=e.volume;e.volume=t/2+.1;let i=new AbortController,a=await Promise.race([ny(e,i.signal),nT(e,t)]);return i.abort(),a},ny=(e,t)=>new Promise(i=>{e.addEventListener("volumechange",()=>i(!0),{signal:t})}),nT=async(e,t)=>{for(let i=0;i<10;i++){if(e.volume===t)return!1;await rm(10)}return e.volume!==t},nA=/.*Version\/.*Safari\/.*/.test(rR.navigator.userAgent),nk=(e=ng())=>(!rR.matchMedia("(display-mode: standalone)").matches||!nA)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),nw=(e=ng())=>(e=>{let{documentElement:t,media:i}=e;return!!(null==t?void 0:t[nf])||i&&"webkitSupportsFullscreen"in i})({documentElement:rD,media:e}),nS=nw(),nI=nk(),nR=!!rR.WebKitPlaybackTargetAvailabilityEvent,nD=!!rR.chrome,nC=e=>np(e.media,e=>[rt.SUBTITLES,rt.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),nL=e=>np(e.media,e=>e.mode===ri.SHOWING&&[rt.SUBTITLES,rt.CAPTIONS].includes(e.kind)),nM=(e,t)=>{let i=nC(e),a=nL(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)nm(ri.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;nm(ri.DISABLED,i,a),nm(ri.SHOWING,i,[{language:n,label:s,kind:o}])}}},nO=(e,t)=>e===t||null!=e&&null!=t&&typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?nx(e,t):Object.entries(e).every(([e,i])=>e in t&&nO(i,t[e])))),nx=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>nO(e,t[i])))},nN=Object.values(rn),nP=n_().then(e=>n=e),nU=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof rR.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=rR.customElements.get(t);i&&e instanceof i||(await rR.customElements.whenDefined(t),rR.customElements.upgrade(e))}))},nB=new rR.DOMParser,nH={mediaError:{get(e,t){let{media:i}=e;if((null==t?void 0:t.type)!=="playing")return null==i?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(e,t){var i;let{media:a}=e;if((null==t?void 0:t.type)!=="playing")return null==(i=null==a?void 0:a.error)?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(e,t){var i,a;let{media:r}=e;if((null==t?void 0:t.type)!=="playing")return null!=(a=null==(i=null==r?void 0:r.error)?void 0:i.message)?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoWidth)?t:0},mediaEvents:["resize"]},mediaHeight:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.videoHeight)?t:0},mediaEvents:["resize"]},mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;if(i){try{rR.localStorage.setItem("media-chrome-pref-muted",e?"true":"false")}catch(e){console.debug("Error setting muted pref",e)}i.muted=e}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noMutedPref:i}}=t,{media:a}=t;if(a&&!a.muted&&!i)try{let i="true"===rR.localStorage.getItem("media-chrome-pref-muted");nH.mediaMuted.set(i,t),e(i)}catch(e){console.debug("Error getting muted pref",e)}}]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?rR.localStorage.removeItem("media-chrome-pref-volume"):rR.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){console.debug("Error setting volume pref",e)}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let{media:i}=t;if(!i)return;let a=rR.localStorage.getItem("media-chrome-pref-volume");if(null==a)return;nH.mediaVolume.set(+a,t),e(+a)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&rc(e)&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[rn.LIVE,rn.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(nN.includes(r))return r===rn.UNKNOWN?a:r;let n=t.duration;return n===1/0?rn.LIVE:Number.isFinite(n)?rn.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return NaN;let{targetLiveWindow:i}=t,a=nH.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===rn.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(nH.mediaStreamType.get(e)!==rn.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>nC(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>nL(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![rt.CAPTIONS,rt.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||nM(t,!0))};return r.addEventListener("loadstart",s),null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),()=>{var e,t;r.removeEventListener("loadstart",s),null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=np(i,{kind:rt.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e&&nB.parseFromString(e,"text/html").body.textContent||e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(!a)return;let r=a.querySelector('track[kind="chapters"][default][src]'),n=null==(i=a.shadowRoot)?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return null==r||r.addEventListener("load",e),null==n||n.addEventListener("load",e),()=>{null==r||r.removeEventListener("load",e),null==n||n.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return!!(null==(t=a.localName)?void 0:t.includes("-"))&&rW(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i)if(e){if(!rD.pictureInPictureEnabled)return void console.warn("MediaChrome: Picture-in-picture is not enabled");if(!i.requestPictureInPicture)return void console.warn("MediaChrome: The current media does not support picture-in-picture");let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src)return void console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else rD.pictureInPictureElement&&rD.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions))return void console.warn("MediaController: Rendition selection not supported by this media.");let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks))return void console.warn("MediaChrome: Audio track selection not supported by this media.");for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get:e=>(e=>{var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;let n=(e=>{let{documentElement:t,media:i}=e,a=null==t?void 0:t[nb];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===rs.FULLSCREEN?i:a})(e);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let e=n.shadowRoot;if(!(nb in e))return rW(n,r);for(;null==e?void 0:e[nb];){if(e[nb]===r)return!0;e=null==(t=e[nb])?void 0:t.shadowRoot}}return!1})(e),set(e,t){e?(e=>{var t;let{media:i,fullscreenElement:a}=e;try{let e=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(e){let i=null==(t=a[e])?void 0:t.call(a);if(i instanceof Promise)return i.catch(()=>{})}else(null==i?void 0:i.webkitEnterFullscreen)?i.webkitEnterFullscreen():(null==i?void 0:i.requestFullscreen)&&i.requestFullscreen()}catch(e){console.error(e)}})(t):(e=>{var t;let{documentElement:i}=e;if(nE){let e=null==(t=null==i?void 0:i[nE])?void 0:t.call(i);if(e instanceof Promise)return e.catch(()=>{})}})(t)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(e){var t;let{media:i}=e;return!!(null==i?void 0:i.remote)&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt)return void console.warn("MediaChrome: Casting is not supported in this environment");r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&rR.WebKitPlaybackTargetAvailabilityEvent))return void console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!nS||!nw(t))return rr.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!nI||!nk(t))return rr.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===n||(null==t?void 0:t.volume)==void 0)return rr.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==n&&nP.then(t=>e(t?void 0:rr.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return nD&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?rr.UNAVAILABLE:void 0:rr.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>nR?(null==t?void 0:t.availability)==="not-available"?rr.UNAVAILABLE:void 0:rr.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:rr.UNAVAILABLE:rr.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?rr.UNAVAILABLE:void 0:rr.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},nW={[a4.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o,{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=np(l,{kind:rt.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)||null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[a4.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[a4.MEDIA_PLAY_REQUEST](e,t){var i,a,r,n;let s=e.mediaStreamType.get(t)===rn.LIVE,o=!(null==(i=t.options)?void 0:i.noAutoSeekToLive),l=e.mediaTargetLiveWindow.get(t)>0;if(s&&o&&!l){let i=null==(a=e.mediaSeekable.get(t))?void 0:a[1];if(i){let a=null!=(n=null==(r=t.options)?void 0:r.seekToLiveOffset)?n:0;e.mediaCurrentTime.set(i-a,t)}}e.mediaPaused.set(!1,t)},[a4.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[a4.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[a4.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[a4.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[a4.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[a4.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i,a,r;let n=null==(i=e.mediaSeekable.get(t))?void 0:i[1];if(Number.isNaN(Number(n)))return;let s=null!=(r=null==(a=t.options)?void 0:a.seekToLiveOffset)?r:0;e.mediaCurrentTime.set(n-s,t)},[a4.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=nC(t),s=nd(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&rR.localStorage.setItem("media-chrome-pref-subtitles-lang",o),nm(ri.SHOWING,n,s)},[a4.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=nC(t);nm(ri.DISABLED,a,null!=i?i:[])},[a4.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){nM(t,i)},[a4.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[a4.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[a4.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[a4.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[a4.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[a4.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[a4.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[a4.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[a4.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var nV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nF=(e,t,i)=>(nV(e,t,"read from private field"),i?i.call(e):t.get(e)),n$=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nK=(e,t,i,a)=>(nV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nq=(e,t,i)=>(nV(e,t,"access private method"),i);let nY=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],nG={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",LANG:"lang"};class nj extends nt{constructor(){super(),n$(this,d6),n$(this,ue),n$(this,ui),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,n$(this,d2,new ns(this,nG.HOTKEYS)),n$(this,d3,void 0),n$(this,d4,void 0),n$(this,d5,void 0),n$(this,d9,void 0),n$(this,d8,e=>{var t;null==(t=nF(this,d4))||t.dispatch(e)}),this.associateElement(this);let e={};nK(this,d5,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new rR.CustomEvent(re[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(nG.NO_HOTKEYS,nG.HOTKEYS,nG.DEFAULT_STREAM_TYPE,nG.DEFAULT_SUBTITLES,nG.DEFAULT_DURATION,nG.LANG)}get mediaStore(){return nF(this,d4)}set mediaStore(e){var t,i;if(nF(this,d4)&&(null==(t=nF(this,d9))||t.call(this),nK(this,d9,void 0)),nK(this,d4,e),!nF(this,d4)&&!this.hasAttribute(nG.NO_DEFAULT_STORE))return void nq(this,d6,d7).call(this);nK(this,d9,null==(i=nF(this,d4))?void 0:i.subscribe(nF(this,d5)))}get fullscreenElement(){var e;return null!=(e=nF(this,d3))?e:this}set fullscreenElement(e){var t;this.hasAttribute(nG.FULLSCREEN_ELEMENT)&&this.removeAttribute(nG.FULLSCREEN_ELEMENT),nK(this,d3,e),null==(t=nF(this,d4))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return rQ(this,nG.DEFAULT_SUBTITLES)}set defaultSubtitles(e){rZ(this,nG.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return rz(this,nG.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){rX(this,nG.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return rG(this,nG.DEFAULT_DURATION)}set defaultDuration(e){rj(this,nG.DEFAULT_DURATION,e)}get noHotkeys(){return rQ(this,nG.NO_HOTKEYS)}set noHotkeys(e){rZ(this,nG.NO_HOTKEYS,e)}get keysUsed(){return rz(this,nG.KEYS_USED)}set keysUsed(e){rX(this,nG.KEYS_USED,e)}get liveEdgeOffset(){return rG(this,nG.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){rj(this,nG.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return rQ(this,nG.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){rZ(this,nG.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return rQ(this,nG.NO_VOLUME_PREF)}set noVolumePref(e){rZ(this,nG.NO_VOLUME_PREF,e)}get noSubtitlesLangPref(){return rQ(this,nG.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){rZ(this,nG.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return rQ(this,nG.NO_DEFAULT_STORE)}set noDefaultStore(e){rZ(this,nG.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,t,i){var a,r,n,s,o,l,d,u;if(super.attributeChangedCallback(e,t,i),e===nG.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(nG.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===nG.HOTKEYS)nF(this,d2).value=i;else if(e===nG.DEFAULT_SUBTITLES&&i!==t)null==(a=nF(this,d4))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(nG.DEFAULT_SUBTITLES)}});else if(e===nG.DEFAULT_STREAM_TYPE)null==(n=nF(this,d4))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(nG.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===nG.LIVE_EDGE_OFFSET)null==(s=nF(this,d4))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(nG.LIVE_EDGE_OFFSET)?+this.getAttribute(nG.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(nG.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(nG.LIVE_EDGE_OFFSET)}});else if(e===nG.SEEK_TO_LIVE_OFFSET)null==(o=nF(this,d4))||o.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(nG.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(nG.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===nG.NO_AUTO_SEEK_TO_LIVE)null==(l=nF(this,d4))||l.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(nG.NO_AUTO_SEEK_TO_LIVE)}});else if(e===nG.FULLSCREEN_ELEMENT){let e=i?null==(d=this.getRootNode())?void 0:d.getElementById(i):void 0;nK(this,d3,e),null==(u=nF(this,d4))||u.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===nG.LANG&&i!==t&&(rf=i)}connectedCallback(){var e,t;nF(this,d4)||this.hasAttribute(nG.NO_DEFAULT_STORE)||nq(this,d6,d7).call(this),null==(e=nF(this,d4))||e.dispatch({type:"documentelementchangerequest",detail:rD}),super.connectedCallback(),nF(this,d4)&&!nF(this,d9)&&nK(this,d9,null==(t=nF(this,d4))?void 0:t.subscribe(nF(this,d5))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),nF(this,d4)&&(null==(t=nF(this,d4))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=nF(this,d4))||i.dispatch({type:a4.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),nF(this,d9)&&(null==(a=nF(this,d9))||a.call(this),nK(this,d9,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=nF(this,d4))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=nF(this,d4))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){n3(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=n4(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(a4).forEach(t=>{e.addEventListener(t,nF(this,d8))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(a4).forEach(t=>{e.removeEventListener(t,nF(this,d8))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),nF(this,d4)&&Object.entries(nF(this,d4).getState()).forEach(([t,i])=>{n3([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",nq(this,ui,ua))}disableHotkeys(){this.removeEventListener("keydown",nq(this,ui,ua)),this.removeEventListener("keyup",nq(this,ue,ut))}get hotkeys(){return rz(this,nG.HOTKEYS)}set hotkeys(e){rX(this,nG.HOTKEYS,e)}keyboardShortcutHandler(e){var t,i,a,r,n;let s,o,l,d=e.target;if(!((null!=(a=null!=(i=null==(t=d.getAttribute(nG.KEYS_USED))?void 0:t.split(" "))?i:null==d?void 0:d.keysUsed)?a:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||nF(this,d2).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&nF(this,d2).contains("nospace")))switch(e.key){case" ":case"k":s=nF(this,d4).getState().mediaPaused?a4.MEDIA_PLAY_REQUEST:a4.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new rR.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"m":s="off"===this.mediaStore.getState().mediaVolumeLevel?a4.MEDIA_UNMUTE_REQUEST:a4.MEDIA_MUTE_REQUEST,this.dispatchEvent(new rR.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"f":s=this.mediaStore.getState().mediaIsFullscreen?a4.MEDIA_EXIT_FULLSCREEN_REQUEST:a4.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new rR.CustomEvent(s,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new rR.CustomEvent(a4.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(nG.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(nG.KEYBOARD_BACKWARD_SEEK_OFFSET):10;o=Math.max((null!=(r=this.mediaStore.getState().mediaCurrentTime)?r:0)-e,0),l=new rR.CustomEvent(a4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l);break}case"ArrowRight":{let e=this.hasAttribute(nG.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(nG.KEYBOARD_FORWARD_SEEK_OFFSET):10;o=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)+e,0),l=new rR.CustomEvent(a4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:o}),this.dispatchEvent(l)}}}}d2=new WeakMap,d3=new WeakMap,d4=new WeakMap,d5=new WeakMap,d9=new WeakMap,d8=new WeakMap,d6=new WeakSet,d7=function(){var e;this.mediaStore=(({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=nH,requestMap:r=nW,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o,l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0!=e&&(nO(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u))))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,E,b,f,g,_,y,T,A,k,w,S;let I=!!o;if(o={...d,...null!=o?o:{},...e},I)return;await nU(...Object.values(e));let R=l.length>0&&0===t&&s,D=d.media!==o.media,C=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),M=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(E=o.media)?void 0:E.audioTracks),O=(null==(b=d.media)?void 0:b.remote)!==(null==(f=o.media)?void 0:f.remote),x=d.documentElement!==o.documentElement,N=!!d.media&&(D||R),P=!!(null==(g=d.media)?void 0:g.textTracks)&&(C||R),U=!!(null==(_=d.media)?void 0:_.videoRenditions)&&(L||R),B=!!(null==(y=d.media)?void 0:y.audioTracks)&&(M||R),H=!!(null==(T=d.media)?void 0:T.remote)&&(O||R),W=!!d.documentElement&&(x||R),V=N||P||U||B||H||W,F=0===l.length&&1===t&&s,$=!!o.media&&(D||F),K=!!(null==(A=o.media)?void 0:A.textTracks)&&(C||F),q=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||F),Y=!!(null==(w=o.media)?void 0:w.audioTracks)&&(M||F),G=!!(null==(S=o.media)?void 0:S.remote)&&(O||F),j=!!o.documentElement&&(x||F),Q=$||K||q||Y||G||j;if(!(V||Q)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&N&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),$&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),K&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),q&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),Y&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&H&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),G&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),j&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let E=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{E&&V&&E(),Q&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]&&null==u.mediaErrorCode)return void c(r[t](a,d,e));"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}})({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(nG.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(nG.DEFAULT_DURATION)?+this.getAttribute(nG.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(nG.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(nG.LIVE_EDGE_OFFSET)?+this.getAttribute(nG.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(nG.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(nG.SEEK_TO_LIVE_OFFSET):this.hasAttribute(nG.LIVE_EDGE_OFFSET)?+this.getAttribute(nG.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(nG.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(nG.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(nG.NO_SUBTITLES_LANG_PREF)}})},ue=new WeakSet,ut=function(e){let{key:t}=e;if(!nY.includes(t))return void this.removeEventListener("keyup",nq(this,ue,ut));this.keyboardShortcutHandler(e)},ui=new WeakSet,ua=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!nY.includes(a))return void this.removeEventListener("keyup",nq(this,ue,ut));[" ","ArrowLeft","ArrowRight"].includes(a)&&!(nF(this,d2).contains(`no${a.toLowerCase()}`)||" "===a&&nF(this,d2).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",nq(this,ue,ut),{once:!0})};let nQ=Object.values(a6),nZ=Object.values(a9),nz=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(rR.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,a5.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>nQ.includes(e)):[]},nX=e=>(e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&rR.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof rR.customElements.get(e.nodeName.toLowerCase()))&&rR.customElements.upgrade(e),nZ.some(t=>t in e)})(e)||!!nz(e).length,nJ=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},n0={[a6.MEDIA_SUBTITLES_LIST]:nc,[a6.MEDIA_SUBTITLES_SHOWING]:nc,[a6.MEDIA_SEEKABLE]:nJ,[a6.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(nJ).join(" "),[a6.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[a6.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ro).join(" ")},[a6.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(rd).join(" ")}},n1=async(e,t,i)=>{var a,r;if(e.isConnected||await rm(0),"boolean"==typeof i||null==i)return rZ(e,t,i);if("number"==typeof i)return rj(e,t,i);if("string"==typeof i)return rX(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=n0[t])?void 0:a.call(n0,i))?r:i;return e.setAttribute(t,n)},n2=(e,t)=>{if((e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))})(e))return;let i=(e,t)=>{var i,a;nX(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>n2(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!nX(e))return void rR.customElements.whenDefined(a).then(()=>{i(e,t)});i(e,t)},n3=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=nz(e),r=t.toLowerCase();a.includes(r)&&n1(e,r,i)})},n4=(e,t,i)=>{n2(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(a4.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(a4.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>n2(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>n2(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>n2(e,t)),Array.prototype.forEach.call(r,e=>n2(e,i))):"attributes"===n&&o===a5.MEDIA_CHROME_ATTRIBUTES&&(nX(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{n2(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(a4.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(a4.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};rR.customElements.get("media-controller")||rR.customElements.define("media-controller",nj);let n5={PLACEMENT:"placement",BOUNDS:"bounds"};class n9 extends rR.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!rK(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;let t=this.placement;if("left"===t||"right"===t)return void this.style.removeProperty("--media-tooltip-offset-x");let i=getComputedStyle(this),a=null!=(e=rV(this,"#"+this.bounds))?e:rP(this);if(!a)return;let{x:r,width:n}=a.getBoundingClientRect(),{x:s,width:o}=this.getBoundingClientRect(),l=i.getPropertyValue("--media-tooltip-offset-x"),d=l?parseFloat(l.replace("px","")):0,u=i.getPropertyValue("--media-tooltip-container-margin"),c=u?parseFloat(u.replace("px","")):0,h=s-r+d-c,m=s+o-(r+n)+d+c;return h<0?void this.style.setProperty("--media-tooltip-offset-x",`${h}px`):m>0?void this.style.setProperty("--media-tooltip-offset-x",`${m}px`):void this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){let e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[n5.PLACEMENT,n5.BOUNDS]}get placement(){return rz(this,n5.PLACEMENT)}set placement(e){rX(this,n5.PLACEMENT,e)}get bounds(){return rz(this,n5.BOUNDS)}set bounds(e){rX(this,n5.BOUNDS,e)}}n9.shadowRootOptions={mode:"open"},n9.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `},rR.customElements.get("media-tooltip")||rR.customElements.define("media-tooltip",n9);var n8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},n6=(e,t,i)=>(n8(e,t,"read from private field"),i?i.call(e):t.get(e)),n7=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},se=(e,t,i,a)=>(n8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let st={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};class si extends rR.HTMLElement{constructor(){if(super(),n7(this,ud),n7(this,ur,void 0),this.preventClick=!1,this.tooltipEl=null,n7(this,un,e=>{this.preventClick||this.handleClick(e),setTimeout(n6(this,us),0)}),n7(this,us,()=>{var e,t;null==(t=null==(e=this.tooltipEl)?void 0:e.updateXOffset)||t.call(e)}),n7(this,uo,e=>{let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",n6(this,uo));this.preventClick||this.handleClick(e)}),n7(this,ul,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",n6(this,uo));this.addEventListener("keyup",n6(this,uo),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",st.TOOLTIP_PLACEMENT,a5.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",n6(this,un)),this.addEventListener("keydown",n6(this,ul)),this.tabIndex=0}disable(){this.removeEventListener("click",n6(this,un)),this.removeEventListener("keydown",n6(this,ul)),this.removeEventListener("keyup",n6(this,uo)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a5.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=n6(this,ur))?void 0:a.unassociateElement)||r.call(a,this),se(this,ur,null)),i&&this.isConnected&&(se(this,ur,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=n6(this,ur))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t?null==i?this.enable():this.disable():e===st.TOOLTIP_PLACEMENT&&this.tooltipEl&&i!==t&&(this.tooltipEl.placement=i),n6(this,us).call(this)}connectedCallback(){var e,t,i;let{style:a}=rq(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");let r=this.getAttribute(a5.MEDIA_CONTROLLER);r&&(se(this,ur,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=n6(this,ur))?void 0:t.associateElement)||i.call(t,this)),rR.customElements.whenDefined("media-tooltip").then(()=>{var e,t;return(e=ud,t=uu,n8(this,e,"access private method"),t).call(this)})}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=n6(this,ur))?void 0:e.unassociateElement)||t.call(e,this),se(this,ur,null),this.removeEventListener("mouseenter",n6(this,us)),this.removeEventListener("focus",n6(this,us)),this.removeEventListener("click",n6(this,un))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return rz(this,st.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){rX(this,st.TOOLTIP_PLACEMENT,e)}get mediaController(){return rz(this,a5.MEDIA_CONTROLLER)}set mediaController(e){rX(this,a5.MEDIA_CONTROLLER,e)}get disabled(){return rQ(this,st.DISABLED)}set disabled(e){rZ(this,st.DISABLED,e)}get noTooltip(){return rQ(this,st.NO_TOOLTIP)}set noTooltip(e){rZ(this,st.NO_TOOLTIP,e)}handleClick(e){}}ur=new WeakMap,un=new WeakMap,us=new WeakMap,uo=new WeakMap,ul=new WeakMap,ud=new WeakSet,uu=function(){this.addEventListener("mouseenter",n6(this,us)),this.addEventListener("focus",n6(this,us)),this.addEventListener("click",n6(this,un));let e=this.tooltipPlacement;e&&this.tooltipEl&&(this.tooltipEl.placement=e)},si.shadowRootOptions={mode:"open"},si.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${n9.shadowRootOptions.mode}">
          ${n9.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(e)}
        </slot>
      </media-tooltip>
    </slot>
  `},si.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},si.getTooltipContentHTML=function(){return""},rR.customElements.get("media-chrome-button")||rR.customElements.define("media-chrome-button",si);let sa=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,sr=e=>{let t=e.mediaIsAirplaying?rg("stop airplay"):rg("start airplay");e.setAttribute("aria-label",t)};class sn extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_IS_AIRPLAYING,a6.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sr(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_IS_AIRPLAYING&&sr(this)}get mediaIsAirplaying(){return rQ(this,a6.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){rZ(this,a6.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return rz(this,a6.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){rX(this,a6.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new rR.CustomEvent(a4.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}sn.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a6.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a6.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a6.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${a6.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sa}</slot>
      <slot name="exit">${sa}</slot>
    </slot>
  `},sn.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rg("start airplay")}</slot>
    <slot name="tooltip-exit">${rg("stop airplay")}</slot>
  `},rR.customElements.get("media-airplay-button")||rR.customElements.define("media-airplay-button",sn);let ss=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,so=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,sl=e=>{e.setAttribute("aria-checked",nv(e).toString())};class sd extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_SUBTITLES_LIST,a6.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",rg("closed captions")),sl(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_SUBTITLES_SHOWING&&sl(this)}get mediaSubtitlesList(){return su(this,a6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){sc(this,a6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return su(this,a6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){sc(this,a6.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new rR.CustomEvent(a4.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}sd.getSlotTemplateHTML=function(e){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ss}</slot>
      <slot name="off">${so}</slot>
    </slot>
  `},sd.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enable">${rg("Enable captions")}</slot>
    <slot name="tooltip-disable">${rg("Disable captions")}</slot>
  `};let su=(e,t)=>{let i=e.getAttribute(t);return i?nl(i):[]},sc=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rR.customElements.get("media-captions-button")||rR.customElements.define("media-captions-button",sd);let sh=e=>{let t=e.mediaIsCasting?rg("stop casting"):rg("start casting");e.setAttribute("aria-label",t)};class sm extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_IS_CASTING,a6.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_IS_CASTING&&sh(this)}get mediaIsCasting(){return rQ(this,a6.MEDIA_IS_CASTING)}set mediaIsCasting(e){rZ(this,a6.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return rz(this,a6.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){rX(this,a6.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?a4.MEDIA_EXIT_CAST_REQUEST:a4.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new rR.CustomEvent(e,{composed:!0,bubbles:!0}))}}sm.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a6.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a6.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a6.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${a6.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
      <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
    </slot>
  `},sm.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rg("Start casting")}</slot>
    <slot name="tooltip-exit">${rg("Stop casting")}</slot>
  `},rR.customElements.get("media-cast-button")||rR.customElements.define("media-cast-button",sm);var sp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sv=(e,t,i)=>(sp(e,t,"read from private field"),i?i.call(e):t.get(e)),sE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sb=(e,t,i,a)=>(sp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sf=(e,t,i)=>(sp(e,t,"access private method"),i);let sg={OPEN:"open",ANCHOR:"anchor"};class s_ extends rR.HTMLElement{constructor(){super(),sE(this,up),sE(this,uE),sE(this,uf),sE(this,u_),sE(this,uT),sE(this,uk),sE(this,uc,!1),sE(this,uh,null),sE(this,um,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[sg.OPEN,sg.ANCHOR]}get open(){return rQ(this,sg.OPEN)}set open(e){rZ(this,sg.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":sf(this,u_,uy).call(this,e);break;case"focusout":sf(this,uT,uA).call(this,e);break;case"keydown":sf(this,uk,uw).call(this,e)}}connectedCallback(){sf(this,up,uv).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){sf(this,up,uv).call(this),e===sg.OPEN&&i!==t&&(this.open?sf(this,uE,ub).call(this):sf(this,uf,ug).call(this))}focus(){sb(this,uh,rF());let e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),t=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||t)return;let i=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==i||i.focus()}get keysUsed(){return["Escape","Tab"]}}uc=new WeakMap,uh=new WeakMap,um=new WeakMap,up=new WeakSet,uv=function(){if(!sv(this,uc)&&(sb(this,uc,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e),queueMicrotask(()=>{let{style:e}=rq(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}},uE=new WeakSet,ub=function(){var e;null==(e=sv(this,um))||e.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},uf=new WeakSet,ug=function(){var e;null==(e=sv(this,um))||e.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))},u_=new WeakSet,uy=function(e){sb(this,um,e.relatedTarget),rW(this,e.relatedTarget)||(this.open=!this.open)},uT=new WeakSet,uA=function(e){var t;!rW(this,e.relatedTarget)&&(null==(t=sv(this,uh))||t.focus(),sv(this,um)&&sv(this,um)!==e.relatedTarget&&this.open&&(this.open=!1))},uk=new WeakSet,uw=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;o||l||d||this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=sv(this,uh))||n.focus(),this.open=!1))},s_.shadowRootOptions={mode:"open"},s_.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `},s_.getSlotTemplateHTML=function(e){return`
    <slot id="content"></slot>
  `},rR.customElements.get("media-chrome-dialog")||rR.customElements.define("media-chrome-dialog",s_);var sy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sT=(e,t,i)=>(sy(e,t,"read from private field"),i?i.call(e):t.get(e)),sA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sk=(e,t,i,a)=>(sy(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sw=(e,t,i)=>(sy(e,t,"access private method"),i);class sS extends rR.HTMLElement{constructor(){if(super(),sA(this,uN),sA(this,uU),sA(this,uH),sA(this,uV),sA(this,u$),sA(this,uq),sA(this,uG),sA(this,uQ),sA(this,uS,void 0),sA(this,uI,void 0),sA(this,uR,void 0),sA(this,uD,void 0),sA(this,uC,{}),sA(this,uL,[]),sA(this,uM,()=>{if(this.range.matches(":focus-visible")){let{style:e}=rq(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),sA(this,uO,()=>{let{style:e}=rq(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),sA(this,ux,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes),t=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(t):this.shadowRoot.innerHTML=t}this.container=this.shadowRoot.querySelector("#container"),sk(this,uR,this.shadowRoot.querySelector("#startpoint")),sk(this,uD,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",a5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a5.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sT(this,uS))?void 0:a.unassociateElement)||r.call(a,this),sk(this,uS,null)),i&&this.isConnected&&(sk(this,uS,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sT(this,uS))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),sw(this,uU,uB).call(this)):(this.range.setAttribute(e,i),sw(this,uH,uW).call(this)))}connectedCallback(){var e,t,i;let{style:a}=rq(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sT(this,uC).pointer=rq(this.shadowRoot,"#pointer"),sT(this,uC).progress=rq(this.shadowRoot,"#progress"),sT(this,uC).thumb=rq(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),sT(this,uC).activeSegment=rq(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let r=this.getAttribute(a5.MEDIA_CONTROLLER);r&&(sk(this,uS,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sT(this,uS))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sT(this,uM)),this.shadowRoot.addEventListener("focusout",sT(this,uO)),sw(this,uU,uB).call(this),rO(this.container,sT(this,ux))}disconnectedCallback(){var e,t;sw(this,uH,uW).call(this),null==(t=null==(e=sT(this,uS))?void 0:e.unassociateElement)||t.call(e,this),sk(this,uS,null),this.shadowRoot.removeEventListener("focusin",sT(this,uM)),this.shadowRoot.removeEventListener("focusout",sT(this,uO)),rx(this.container,sT(this,ux))}updatePointerBar(e){var t;null==(t=sT(this,uC).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sT(this,uC).progress)||e.style.setProperty("width",`${i}%`),null==(t=sT(this,uC).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sk(this,uL,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=rD.createElementNS("http://www.w3.org/2000/svg","rect"),c=rq(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return function(e,t,i,a){let r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;return 0===s?0:Math.max(0,Math.min(1,((e-i.x)*r+(t-i.y)*n)/s))}(e.clientX,e.clientY,sT(this,uR).getBoundingClientRect(),sT(this,uD).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":sw(this,uQ,uZ).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":sw(this,u$,uK).call(this,e);break;case"pointerdown":sw(this,uV,uF).call(this,e);break;case"pointerup":sw(this,uq,uY).call(this);break;case"pointerleave":sw(this,uG,uj).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}uS=new WeakMap,uI=new WeakMap,uR=new WeakMap,uD=new WeakMap,uC=new WeakMap,uL=new WeakMap,uM=new WeakMap,uO=new WeakMap,ux=new WeakMap,uN=new WeakSet,uP=function(e){let t=sT(this,uC).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sT(this,uL).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},uU=new WeakSet,uB=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},uH=new WeakSet,uW=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=rR.window)||e.removeEventListener("pointerup",this),null==(t=rR.window)||t.removeEventListener("pointermove",this)},uV=new WeakSet,uF=function(e){var t;sk(this,uI,e.composedPath().includes(this.range)),null==(t=rR.window)||t.addEventListener("pointerup",this)},u$=new WeakSet,uK=function(e){var t;"mouse"!==e.pointerType&&sw(this,uV,uF).call(this,e),this.addEventListener("pointerleave",this),null==(t=rR.window)||t.addEventListener("pointermove",this)},uq=new WeakSet,uY=function(){var e;null==(e=rR.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},uG=new WeakSet,uj=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=rR.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sT(this,uC).activeSegment)||t.style.removeProperty("transform")},uQ=new WeakSet,uZ=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),sw(this,uN,uP).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sT(this,uI))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},sS.shadowRootOptions={mode:"open"},sS.getTemplateHTML=function(e){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `},rR.customElements.get("media-chrome-range")||rR.customElements.define("media-chrome-range",sS);var sI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sR=(e,t,i)=>(sI(e,t,"read from private field"),i?i.call(e):t.get(e)),sD=(e,t,i,a)=>(sI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sC extends rR.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,uz,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sR(this,uz))?void 0:a.unassociateElement)||r.call(a,this),sD(this,uz,null)),i&&this.isConnected&&(sD(this,uz,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sR(this,uz))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(a5.MEDIA_CONTROLLER);a&&(sD(this,uz,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sR(this,uz))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sR(this,uz))?void 0:e.unassociateElement)||t.call(e,this),sD(this,uz,null)}}uz=new WeakMap,sC.shadowRootOptions={mode:"open"},sC.getTemplateHTML=function(e){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `},rR.customElements.get("media-control-bar")||rR.customElements.define("media-control-bar",sC);var sL=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sM=(e,t,i)=>(sL(e,t,"read from private field"),i?i.call(e):t.get(e)),sO=(e,t,i,a)=>(sL(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sx extends rR.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,uX,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a5.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===a5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sM(this,uX))?void 0:a.unassociateElement)||r.call(a,this),sO(this,uX,null)),i&&this.isConnected&&(sO(this,uX,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sM(this,uX))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=rq(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(a5.MEDIA_CONTROLLER);r&&(sO(this,uX,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sM(this,uX))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sM(this,uX))?void 0:e.unassociateElement)||t.call(e,this),sO(this,uX,null)}}uX=new WeakMap,sx.shadowRootOptions={mode:"open"},sx.getTemplateHTML=function(e,t={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(e,t)}
  `},sx.getSlotTemplateHTML=function(e,t){return`
    <slot></slot>
  `},rR.customElements.get("media-text-display")||rR.customElements.define("media-text-display",sx);var sN=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sP=(e,t,i)=>(sN(e,t,"read from private field"),i?i.call(e):t.get(e));class sU extends sx{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,uJ,void 0),((e,t,i,a)=>(sN(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,uJ,this.shadowRoot.querySelector("slot")),sP(this,uJ).textContent=rE(null!=(e=this.mediaDuration)?e:0)}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===a6.MEDIA_DURATION&&(sP(this,uJ).textContent=rE(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return rG(this,a6.MEDIA_DURATION)}set mediaDuration(e){rj(this,a6.MEDIA_DURATION,e)}}uJ=new WeakMap,sU.getSlotTemplateHTML=function(e,t){return`
    <slot>${rE(t.mediaDuration)}</slot>
  `},rR.customElements.get("media-duration-display")||rR.customElements.define("media-duration-display",sU);let sB={2:rg("Network Error"),3:rg("Decode Error"),4:rg("Source Not Supported"),5:rg("Encryption Error")},sH={2:rg("A network error caused the media download to fail."),3:rg("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:rg("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:rg("The media is encrypted and there are no keys to decrypt it.")},sW=e=>{var t,i;return 1===e.code?null:{title:null!=(t=sB[e.code])?t:`Error ${e.code}`,message:null!=(i=sH[e.code])?i:e.message}};var sV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};function sF(e){var t;let{title:i,message:a}=null!=(t=sW(e))?t:{},r="";return i&&(r+=`<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${e.code}-message"><p>${a}</p></slot>`),r}let s$=[a6.MEDIA_ERROR_CODE,a6.MEDIA_ERROR_MESSAGE];class sK extends s_{constructor(){super(...arguments),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u0,null)}static get observedAttributes(){return[...super.observedAttributes,...s$]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,t,i){var a;if(super.attributeChangedCallback(e,t,i),!s$.includes(e))return;let r=null!=(a=this.mediaError)?a:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=r.code&&null!==sW(r),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(r))}get mediaError(){var e,t;return sV(this,e=u0,"read from private field"),t?t.call(this):e.get(this)}set mediaError(e){var t,i;sV(this,t=u0,"write to private field"),i?i.call(this,e):t.set(this,e)}get mediaErrorCode(){return rG(this,"mediaerrorcode")}set mediaErrorCode(e){rj(this,"mediaerrorcode",e)}get mediaErrorMessage(){return rz(this,"mediaerrormessage")}set mediaErrorMessage(e){rX(this,"mediaerrormessage",e)}}u0=new WeakMap,sK.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${sF({code:+e.mediaerrorcode,message:e.mediaerrormessage})}
    </slot>
  `},sK.formatErrorMessage=sF,rR.customElements.get("media-error-dialog")||rR.customElements.define("media-error-dialog",sK);let sq=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,sY=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sG=e=>{let t=e.mediaIsFullscreen?rg("exit fullscreen mode"):rg("enter fullscreen mode");e.setAttribute("aria-label",t)};class sj extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_IS_FULLSCREEN,a6.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),sG(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_IS_FULLSCREEN&&sG(this)}get mediaFullscreenUnavailable(){return rz(this,a6.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){rX(this,a6.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return rQ(this,a6.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){rZ(this,a6.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?a4.MEDIA_EXIT_FULLSCREEN_REQUEST:a4.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new rR.CustomEvent(e,{composed:!0,bubbles:!0}))}}sj.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a6.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${a6.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a6.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${a6.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${sq}</slot>
      <slot name="exit">${sY}</slot>
    </slot>
  `},sj.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rg("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${rg("Exit fullscreen mode")}</slot>
  `},rR.customElements.get("media-fullscreen-button")||rR.customElements.define("media-fullscreen-button",sj);let{MEDIA_TIME_IS_LIVE:sQ,MEDIA_PAUSED:sZ}=a6,{MEDIA_SEEK_TO_LIVE_REQUEST:sz,MEDIA_PLAY_REQUEST:sX}=a4,sJ=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?rg("seek to live"):rg("playing live");e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class s0 extends si{static get observedAttributes(){return[...super.observedAttributes,sQ,sZ]}connectedCallback(){super.connectedCallback(),sJ(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),sJ(this)}get mediaPaused(){return rQ(this,a6.MEDIA_PAUSED)}set mediaPaused(e){rZ(this,a6.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return rQ(this,a6.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){rZ(this,a6.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new rR.CustomEvent(sz,{composed:!0,bubbles:!0})),this.hasAttribute(sZ)&&this.dispatchEvent(new rR.CustomEvent(sX,{composed:!0,bubbles:!0})))}}s0.getSlotTemplateHTML=function(e){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${sQ}]:not([${sZ}])) slot[name=indicator] > *,
      :host([${sQ}]:not([${sZ}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${sQ}]:not([${sZ}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${rg("live")}</slot>
  `},rR.customElements.get("media-live-button")||rR.customElements.define("media-live-button",s0);var s1=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s2=(e,t,i)=>(s1(e,t,"read from private field"),i?i.call(e):t.get(e)),s3=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s4=(e,t,i,a)=>(s1(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s5={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},s9=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;class s8 extends rR.HTMLElement{constructor(){if(super(),s3(this,u1,void 0),s3(this,u2,500),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a5.MEDIA_CONTROLLER,a6.MEDIA_PAUSED,a6.MEDIA_LOADING,s5.LOADING_DELAY]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===s5.LOADING_DELAY&&t!==i?this.loadingDelay=Number(i):e===a5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s2(this,u1))?void 0:a.unassociateElement)||r.call(a,this),s4(this,u1,null)),i&&this.isConnected&&(s4(this,u1,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s2(this,u1))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(a5.MEDIA_CONTROLLER);a&&(s4(this,u1,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=s2(this,u1))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s2(this,u1))?void 0:e.unassociateElement)||t.call(e,this),s4(this,u1,null)}get loadingDelay(){return s2(this,u2)}set loadingDelay(e){s4(this,u2,e);let{style:t}=rq(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return rQ(this,a6.MEDIA_PAUSED)}set mediaPaused(e){rZ(this,a6.MEDIA_PAUSED,e)}get mediaLoading(){return rQ(this,a6.MEDIA_LOADING)}set mediaLoading(e){rZ(this,a6.MEDIA_LOADING,e)}get mediaController(){return rz(this,a5.MEDIA_CONTROLLER)}set mediaController(e){rX(this,a5.MEDIA_CONTROLLER,e)}get noAutohide(){return rQ(this,s5.NO_AUTOHIDE)}set noAutohide(e){rZ(this,s5.NO_AUTOHIDE,e)}}u1=new WeakMap,u2=new WeakMap,s8.shadowRootOptions={mode:"open"},s8.getTemplateHTML=function(e){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${a6.MEDIA_LOADING}]:not([${a6.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${a6.MEDIA_LOADING}]:not([${a6.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${a6.MEDIA_LOADING}]:not([${a6.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${s9}</slot>
    <div id="status" role="status" aria-live="polite">${rg("media loading")}</div>
  `},rR.customElements.get("media-loading-indicator")||rR.customElements.define("media-loading-indicator",s8);let s6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,s7=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,oe=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,ot=e=>{let t="off"===e.mediaVolumeLevel?rg("unmute"):rg("mute");e.setAttribute("aria-label",t)};class oi extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ot(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_VOLUME_LEVEL&&ot(this)}get mediaVolumeLevel(){return rz(this,a6.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){rX(this,a6.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?a4.MEDIA_UNMUTE_REQUEST:a4.MEDIA_MUTE_REQUEST;this.dispatchEvent(new rR.CustomEvent(e,{composed:!0,bubbles:!0}))}}oi.getSlotTemplateHTML=function(e){return`
    <style>
      :host(:not([${a6.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${a6.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${a6.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${a6.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${a6.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${a6.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${a6.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${s6}</slot>
      <slot name="low">${s7}</slot>
      <slot name="medium">${s7}</slot>
      <slot name="high">${oe}</slot>
    </slot>
  `},oi.getTooltipContentHTML=function(){return`
    <slot name="tooltip-mute">${rg("Mute")}</slot>
    <slot name="tooltip-unmute">${rg("Unmute")}</slot>
  `},rR.customElements.get("media-mute-button")||rR.customElements.define("media-mute-button",oi);let oa=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,or=e=>{let t=e.mediaIsPip?rg("exit picture in picture mode"):rg("enter picture in picture mode");e.setAttribute("aria-label",t)};class on extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_IS_PIP,a6.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),or(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_IS_PIP&&or(this)}get mediaPipUnavailable(){return rz(this,a6.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){rX(this,a6.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return rQ(this,a6.MEDIA_IS_PIP)}set mediaIsPip(e){rZ(this,a6.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?a4.MEDIA_EXIT_PIP_REQUEST:a4.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new rR.CustomEvent(e,{composed:!0,bubbles:!0}))}}on.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a6.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${a6.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${a6.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${a6.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${oa}</slot>
      <slot name="exit">${oa}</slot>
    </slot>
  `},on.getTooltipContentHTML=function(){return`
    <slot name="tooltip-enter">${rg("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${rg("Exit picture in picture mode")}</slot>
  `},rR.customElements.get("media-pip-button")||rR.customElements.define("media-pip-button",on);var os=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot read from private field");return i?i.call(e):t.get(e)};let oo={RATES:"rates"},ol=[1,1.2,1.5,1.7,2];class od extends si{constructor(){var e;super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u3,new ns(this,oo.RATES,{defaultValue:ol})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PLAYBACK_RATE,oo.RATES]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oo.RATES&&(os(this,u3).value=i),e===a6.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rg("Playback rate {playbackRate}",{playbackRate:t}))}}get rates(){return os(this,u3)}set rates(e){e?Array.isArray(e)?os(this,u3).value=e.join(" "):"string"==typeof e&&(os(this,u3).value=e):os(this,u3).value=""}get mediaPlaybackRate(){return rG(this,a6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rj(this,a6.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(os(this,u3).values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new rR.CustomEvent(a4.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}u3=new WeakMap,od.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},od.getTooltipContentHTML=function(){return rg("Playback rate")},rR.customElements.get("media-playback-rate-button")||rR.customElements.define("media-playback-rate-button",od);let ou=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,oc=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oh=e=>{let t=e.mediaPaused?rg("play"):rg("pause");e.setAttribute("aria-label",t)};class om extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PAUSED,a6.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),oh(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_PAUSED&&oh(this)}get mediaPaused(){return rQ(this,a6.MEDIA_PAUSED)}set mediaPaused(e){rZ(this,a6.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?a4.MEDIA_PLAY_REQUEST:a4.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new rR.CustomEvent(e,{composed:!0,bubbles:!0}))}}om.getSlotTemplateHTML=function(e){return`
    <style>
      :host([${a6.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${a6.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${a6.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${a6.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${ou}</slot>
      <slot name="pause">${oc}</slot>
    </slot>
  `},om.getTooltipContentHTML=function(){return`
    <slot name="tooltip-play">${rg("Play")}</slot>
    <slot name="tooltip-pause">${rg("Pause")}</slot>
  `},rR.customElements.get("media-play-button")||rR.customElements.define("media-play-button",om);let op={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};class ov extends rR.HTMLElement{static get observedAttributes(){return[op.PLACEHOLDER_SRC,op.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){if(e===op.SRC&&(null==i?this.image.removeAttribute(op.SRC):this.image.setAttribute(op.SRC,i)),e===op.PLACEHOLDER_SRC)if(null==i)this.image.style.removeProperty("background-image");else{var a;a=this.image,a.style["background-image"]=`url('${i}')`}}get placeholderSrc(){return rz(this,op.PLACEHOLDER_SRC)}set placeholderSrc(e){rX(this,op.SRC,e)}get src(){return rz(this,op.SRC)}set src(e){rX(this,op.SRC,e)}}ov.shadowRootOptions={mode:"open"},ov.getTemplateHTML=function(e){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `},rR.customElements.get("media-poster-image")||rR.customElements.define("media-poster-image",ov);var oE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)};class ob extends sx{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u4,void 0),((e,t,i,a)=>(oE(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,u4,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a6.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i){var a,r;(oE(this,a=u4,"read from private field"),r?r.call(this):a.get(this)).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext")}}get mediaPreviewChapter(){return rz(this,a6.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){rX(this,a6.MEDIA_PREVIEW_CHAPTER,e)}}u4=new WeakMap,rR.customElements.get("media-preview-chapter-display")||rR.customElements.define("media-preview-chapter-display",ob);var of=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},og=(e,t,i)=>(of(e,t,"read from private field"),i?i.call(e):t.get(e)),o_=(e,t,i,a)=>(of(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oy extends rR.HTMLElement{constructor(){if(super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u5,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[a5.MEDIA_CONTROLLER,a6.MEDIA_PREVIEW_IMAGE,a6.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(a5.MEDIA_CONTROLLER);a&&(o_(this,u5,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=og(this,u5))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=og(this,u5))?void 0:e.unassociateElement)||t.call(e,this),o_(this,u5,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[a6.MEDIA_PREVIEW_IMAGE,a6.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===a5.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=og(this,u5))?void 0:a.unassociateElement)||r.call(a,this),o_(this,u5,null)),i&&this.isConnected&&(o_(this,u5,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=og(this,u5))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return rz(this,a6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){rX(this,a6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(a6.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e)return void this.removeAttribute(a6.MEDIA_PREVIEW_COORDS);this.setAttribute(a6.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:E}=rq(this.shadowRoot,":host"),b=rq(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),g=m?"min":"max";E.setProperty(`${g}-width`,"initial","important"),E.setProperty(`${g}-height`,"initial","important"),E.width=`${r*p}px`,E.height=`${n*p}px`;let _=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,_()},f.src=s,_()),_(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}u5=new WeakMap,oy.shadowRootOptions={mode:"open"},oy.getTemplateHTML=function(e){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `},rR.customElements.get("media-preview-thumbnail")||rR.customElements.define("media-preview-thumbnail",oy);var oT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oA=(e,t,i)=>(oT(e,t,"read from private field"),i?i.call(e):t.get(e));class ok extends sx{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u9,void 0),((e,t,i,a)=>(oT(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,u9,this.shadowRoot.querySelector("slot")),oA(this,u9).textContent=rE(0)}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_PREVIEW_TIME&&null!=i&&(oA(this,u9).textContent=rE(parseFloat(i)))}get mediaPreviewTime(){return rG(this,a6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){rj(this,a6.MEDIA_PREVIEW_TIME,e)}}u9=new WeakMap,rR.customElements.get("media-preview-time-display")||rR.customElements.define("media-preview-time-display",ok);let ow={SEEK_OFFSET:"seekoffset"};class oS extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_CURRENT_TIME,ow.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=rG(this,ow.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===ow.SEEK_OFFSET&&(this.seekOffset=rG(this,ow.SEEK_OFFSET,30))}get seekOffset(){return rG(this,ow.SEEK_OFFSET,30)}set seekOffset(e){rj(this,ow.SEEK_OFFSET,e),this.setAttribute("aria-label",rg("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),rB(rH(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return rG(this,a6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){rj(this,a6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new rR.CustomEvent(a4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}oS.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${i}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`}</slot>
  `},oS.getTooltipContentHTML=function(){return rg("Seek backward")},rR.customElements.get("media-seek-backward-button")||rR.customElements.define("media-seek-backward-button",oS);let oI={SEEK_OFFSET:"seekoffset"};class oR extends si{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_CURRENT_TIME,oI.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=rG(this,oI.SEEK_OFFSET,30)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===oI.SEEK_OFFSET&&(this.seekOffset=rG(this,oI.SEEK_OFFSET,30))}get seekOffset(){return rG(this,oI.SEEK_OFFSET,30)}set seekOffset(e){rj(this,oI.SEEK_OFFSET,e),this.setAttribute("aria-label",rg("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),rB(rH(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return rG(this,a6.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){rj(this,a6.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new rR.CustomEvent(a4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}oR.getSlotTemplateHTML=function(e,t){let i;return`
    <slot name="icon">${i=t.seekOffset,`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${i}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`}</slot>
  `},oR.getTooltipContentHTML=function(){return rg("Seek forward")},rR.customElements.get("media-seek-forward-button")||rR.customElements.define("media-seek-forward-button",oR);var oD=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oC=(e,t,i)=>(oD(e,t,"read from private field"),i?i.call(e):t.get(e));let oL={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},oM=[...Object.values(oL),a6.MEDIA_CURRENT_TIME,a6.MEDIA_DURATION,a6.MEDIA_SEEKABLE],oO=["Enter"," "],ox="&nbsp;/&nbsp;",oN=(e,{timesSep:t=ox}={})=>{var i,a;let r=null!=(i=e.mediaCurrentTime)?i:0,[,n]=null!=(a=e.mediaSeekable)?a:[],s=0;Number.isFinite(e.mediaDuration)?s=e.mediaDuration:Number.isFinite(n)&&(s=n);let o=e.remaining?rE(0-(s-r)):rE(r);return e.showDuration?`${o}${t}${rE(s)}`:o};class oP extends sx{constructor(){super(),((e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)})(this,u8,void 0),((e,t,i,a)=>(oD(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,u8,this.shadowRoot.querySelector("slot")),oC(this,u8).innerHTML=`${oN(this)}`}static get observedAttributes(){return[...super.observedAttributes,...oM,"disabled"]}connectedCallback(){let{style:e}=rq(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",rg("playback time"));let t=e=>{let{key:i}=e;if(!oO.includes(i))return void this.removeEventListener("keyup",t);this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!oO.includes(r))return void this.removeEventListener("keyup",t);this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){oM.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return rQ(this,oL.REMAINING)}set remaining(e){rZ(this,oL.REMAINING,e)}get showDuration(){return rQ(this,oL.SHOW_DURATION)}set showDuration(e){rZ(this,oL.SHOW_DURATION,e)}get noToggle(){return rQ(this,oL.NO_TOGGLE)}set noToggle(e){rZ(this,oL.NO_TOGGLE,e)}get mediaDuration(){return rG(this,a6.MEDIA_DURATION)}set mediaDuration(e){rj(this,a6.MEDIA_DURATION,e)}get mediaCurrentTime(){return rG(this,a6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){rj(this,a6.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(a6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(a6.MEDIA_SEEKABLE);this.setAttribute(a6.MEDIA_SEEKABLE,e.join(":"))}update(){let e=oN(this);(e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r)return e.setAttribute("aria-valuetext","video not loaded, unknown time.");let n=e.remaining?rv(0-(r-i)):rv(i);if(!e.showDuration)return e.setAttribute("aria-valuetext",n);let s=rv(r),o=`${n} of ${s}`;e.setAttribute("aria-valuetext",o)})(this),e!==oC(this,u8).innerHTML&&(oC(this,u8).innerHTML=e)}}u8=new WeakMap,oP.getSlotTemplateHTML=function(e,t){return`
    <slot>${oN(t)}</slot>
  `},rR.customElements.get("media-time-display")||rR.customElements.define("media-time-display",oP);var oU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oB=(e,t,i)=>(oU(e,t,"read from private field"),i?i.call(e):t.get(e)),oH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oW=(e,t,i,a)=>(oU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oV{constructor(e,t,i){oH(this,u6,void 0),oH(this,u7,void 0),oH(this,ce,void 0),oH(this,ct,void 0),oH(this,ci,void 0),oH(this,ca,void 0),oH(this,cr,void 0),oH(this,cn,void 0),oH(this,cs,0),oH(this,co,(e=performance.now())=>{oW(this,cs,requestAnimationFrame(oB(this,co))),oW(this,ct,performance.now()-oB(this,ce));let t=1e3/this.fps;if(oB(this,ct)>t){oW(this,ce,e-oB(this,ct)%t);let i=1e3/((e-oB(this,u7))/++((e,t,i,a)=>({set _(value){oW(e,t,value,i)},get _(){return oB(e,t,a)}}))(this,ci)._),a=(e-oB(this,ca))/1e3/this.duration,r=oB(this,cr)+a*this.playbackRate;r-oB(this,u6).valueAsNumber>0?oW(this,cn,this.playbackRate/this.duration/i):(oW(this,cn,.995*oB(this,cn)),r=oB(this,u6).valueAsNumber+oB(this,cn)),this.callback(r)}}),oW(this,u6,e),this.callback=t,this.fps=i}start(){0===oB(this,cs)&&(oW(this,ce,performance.now()),oW(this,u7,oB(this,ce)),oW(this,ci,0),oB(this,co).call(this))}stop(){0!==oB(this,cs)&&(cancelAnimationFrame(oB(this,cs)),oW(this,cs,0))}update({start:e,duration:t,playbackRate:i}){let a=e-oB(this,u6).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),oW(this,cr,e),oW(this,ca,performance.now()),this.duration=t,this.playbackRate=i}}u6=new WeakMap,u7=new WeakMap,ce=new WeakMap,ct=new WeakMap,ci=new WeakMap,ca=new WeakMap,cr=new WeakMap,cn=new WeakMap,cs=new WeakMap,co=new WeakMap;var oF=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o$=(e,t,i)=>(oF(e,t,"read from private field"),i?i.call(e):t.get(e)),oK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oq=(e,t,i,a)=>(oF(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),oY=(e,t,i)=>(oF(e,t,"access private method"),i);let oG=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},oj=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class oQ extends sS{constructor(){super(),oK(this,cb),oK(this,cg),oK(this,cT),oK(this,ck),oK(this,cS),oK(this,cR),oK(this,cC),oK(this,cM),oK(this,cl,void 0),oK(this,cd,void 0),oK(this,cu,void 0),oK(this,cc,void 0),oK(this,ch,void 0),oK(this,cm,void 0),oK(this,cp,void 0),oK(this,cv,void 0),oK(this,cE,void 0),oK(this,cy,e=>{this.dragging||(rc(e)&&(this.range.valueAsNumber=e),this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),oq(this,cu,this.shadowRoot.querySelectorAll('[part~="box"]')),oq(this,ch,this.shadowRoot.querySelector('[part~="preview-box"]')),oq(this,cm,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);oq(this,cp,parseInt(e.getPropertyValue("--media-box-padding-left"))),oq(this,cv,parseInt(e.getPropertyValue("--media-box-padding-right"))),oq(this,cd,new oV(this.range,o$(this,cy),60))}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PAUSED,a6.MEDIA_DURATION,a6.MEDIA_SEEKABLE,a6.MEDIA_CURRENT_TIME,a6.MEDIA_PREVIEW_IMAGE,a6.MEDIA_PREVIEW_TIME,a6.MEDIA_PREVIEW_CHAPTER,a6.MEDIA_BUFFERED,a6.MEDIA_PLAYBACK_RATE,a6.MEDIA_LOADING,a6.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",rg("seek")),oY(this,cb,cf).call(this),oq(this,cl,this.getRootNode()),null==(e=o$(this,cl))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),oY(this,cb,cf).call(this),null==(e=o$(this,cl))||e.removeEventListener("transitionstart",this),oq(this,cl,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===a6.MEDIA_CURRENT_TIME||e===a6.MEDIA_PAUSED||e===a6.MEDIA_ENDED||e===a6.MEDIA_LOADING||e===a6.MEDIA_DURATION||e===a6.MEDIA_SEEKABLE?(o$(this,cd).update({start:oG(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),oY(this,cb,cf).call(this),(e=>{let t=e.range,i=rv(+oj(e)),a=rv(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)})(this)):e===a6.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===a6.MEDIA_DURATION||e===a6.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=o$(this,cE),this.updateBar()))}get mediaChaptersCues(){return o$(this,cE)}set mediaChaptersCues(e){var t;oq(this,cE,e),this.updateSegments(null==(t=o$(this,cE))?void 0:t.map(e=>({start:oG(this,e.startTime),end:oG(this,e.endTime)})))}get mediaPaused(){return rQ(this,a6.MEDIA_PAUSED)}set mediaPaused(e){rZ(this,a6.MEDIA_PAUSED,e)}get mediaLoading(){return rQ(this,a6.MEDIA_LOADING)}set mediaLoading(e){rZ(this,a6.MEDIA_LOADING,e)}get mediaDuration(){return rG(this,a6.MEDIA_DURATION)}set mediaDuration(e){rj(this,a6.MEDIA_DURATION,e)}get mediaCurrentTime(){return rG(this,a6.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){rj(this,a6.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return rG(this,a6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rj(this,a6.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(a6.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e)return void this.removeAttribute(a6.MEDIA_BUFFERED);let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(a6.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(a6.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e)return void this.removeAttribute(a6.MEDIA_SEEKABLE);this.setAttribute(a6.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return rz(this,a6.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){rX(this,a6.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return rG(this,a6.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){rj(this,a6.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return rQ(this,a6.MEDIA_ENDED)}set mediaEnded(e){rZ(this,a6.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t,i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=oG(this,r)}let{style:a}=rq(this.shadowRoot,"#buffered");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=rq(this.shadowRoot,"#current-rail"),t=rq(this.shadowRoot,'[part~="current-box"]'),i=oY(this,cT,cA).call(this,o$(this,cm)),a=oY(this,ck,cw).call(this,i,this.range.valueAsNumber),r=oY(this,cS,cI).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":oY(this,cM,cO).call(this);break;case"pointermove":oY(this,cR,cD).call(this,e);break;case"pointerup":case"pointerleave":oY(this,cC,cL).call(this,null);break;case"transitionstart":rW(e.target,this)&&setTimeout(()=>oY(this,cb,cf).call(this),0)}}}cl=new WeakMap,cd=new WeakMap,cu=new WeakMap,cc=new WeakMap,ch=new WeakMap,cm=new WeakMap,cp=new WeakMap,cv=new WeakMap,cE=new WeakMap,cb=new WeakSet,cf=function(){oY(this,cg,c_).call(this)?o$(this,cd).start():o$(this,cd).stop()},cg=new WeakSet,c_=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&rK(this)},cy=new WeakMap,cT=new WeakSet,cA=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?rV(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},ck=new WeakSet,cw=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},cS=new WeakSet,cI=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+o$(this,cp)){let t=e.range.left-e.bounds.left-o$(this,cp);return`${n-i/2+t}px`}if(n>r-o$(this,cv)){let t=e.bounds.right-e.range.right-o$(this,cv);return`${n+i/2-t-e.range.width}px`}return 0},cR=new WeakSet,cD=function(e){let t=[...o$(this,cu)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this)))return void oY(this,cC,cL).call(this,null);let i=this.mediaSeekableEnd;if(!i)return;let a=rq(this.shadowRoot,"#preview-rail"),r=rq(this.shadowRoot,'[part~="preview-box"]'),n=oY(this,cT,cA).call(this,o$(this,ch)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=oY(this,ck,cw).call(this,n,s),l=oY(this,cS,cI).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(o$(this,cc))-Math.round(s*i))&&s>.01&&s<.99||(oq(this,cc,s*i),oY(this,cC,cL).call(this,o$(this,cc)))},cC=new WeakSet,cL=function(e){this.dispatchEvent(new rR.CustomEvent(a4.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},cM=new WeakSet,cO=function(){o$(this,cd).stop();let e=oj(this);this.dispatchEvent(new rR.CustomEvent(a4.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},oQ.shadowRootOptions={mode:"open"},oQ.getTemplateHTML=function(e){return`
    ${sS.getTemplateHTML(e)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${a6.MEDIA_PREVIEW_IMAGE}], [${a6.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${a6.MEDIA_PREVIEW_IMAGE}], [${a6.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${a6.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${a6.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${a6.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${a6.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${a6.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${a6.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${a6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${a6.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${a6.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${a6.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${a6.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${a6.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${oy.shadowRootOptions.mode}">
            ${oy.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `},rR.customElements.get("media-time-range")||rR.customElements.define("media-time-range",oQ);class oZ extends sS{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_VOLUME,a6.MEDIA_MUTED,a6.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new rR.CustomEvent(a4.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",rg("volume"))}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a6.MEDIA_VOLUME||e===a6.MEDIA_MUTED){let e;this.range.valueAsNumber=this.mediaMuted?0:this.mediaVolume,this.range.setAttribute("aria-valuetext",(e=this.range.valueAsNumber,`${Math.round(100*e)}%`)),this.updateBar()}}get mediaVolume(){return rG(this,a6.MEDIA_VOLUME,1)}set mediaVolume(e){rj(this,a6.MEDIA_VOLUME,e)}get mediaMuted(){return rQ(this,a6.MEDIA_MUTED)}set mediaMuted(e){rZ(this,a6.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return rz(this,a6.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){rX(this,a6.MEDIA_VOLUME_UNAVAILABLE,e)}}rR.customElements.get("media-volume-range")||rR.customElements.define("media-volume-range",oZ);var oz=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oX=(e,t,i)=>(oz(e,t,"read from private field"),i?i.call(e):t.get(e)),oJ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o0=(e,t,i,a)=>(oz(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let o1={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof o7&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof o7?a.element[a.attributeName]=t:a.value=t}}}};class o2 extends rR.DocumentFragment{constructor(e,t,i=o1){var a;super(),oJ(this,cx,void 0),oJ(this,cN,void 0),this.append(e.content.cloneNode(!0)),o0(this,cx,o3(this)),o0(this,cN,i),null==(a=i.createCallback)||a.call(i,this,oX(this,cx),t),i.processCallback(this,oX(this,cx),t)}update(e){oX(this,cN).processCallback(this,oX(this,cx),e)}}cx=new WeakMap,cN=new WeakMap;let o3=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new o6;for([i,a]of o5(r.value))if(i){let i=new o7(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){let n=r.data;if(1===r.nodeType||n.includes("{{")){let s=[];if(n)for([i,a]of o5(n))if(i){let i=new le(e);s.push(i),t.push([a,i])}else s.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new lt(e,r);s.push(i),t.push([i.expression,i])}r.replaceWith(...s.flatMap(e=>e.replacementNodes||[e]))}}else o3(r,t);return t},o4={},o5=e=>{let t="",i=0,a=o4[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),o4[e]=a};class o9{get value(){return""}set value(e){}toString(){return this.value}}let o8=new WeakMap;class o6{constructor(){oJ(this,cP,[])}[Symbol.iterator](){return oX(this,cP).values()}get length(){return oX(this,cP).length}item(e){return oX(this,cP)[e]}append(...e){for(let t of e)t instanceof o7&&o8.set(t,this),oX(this,cP).push(t)}toString(){return oX(this,cP).join("")}}cP=new WeakMap;class o7 extends o9{constructor(e,t,i){super(),oJ(this,cV),oJ(this,cU,""),oJ(this,cB,void 0),oJ(this,cH,void 0),oJ(this,cW,void 0),o0(this,cB,e),o0(this,cH,t),o0(this,cW,i)}get attributeName(){return oX(this,cH)}get attributeNamespace(){return oX(this,cW)}get element(){return oX(this,cB)}get value(){return oX(this,cU)}set value(e){oX(this,cU)!==e&&(o0(this,cU,e),oX(this,cV,cF)&&1!==oX(this,cV,cF).length?oX(this,cB).setAttributeNS(oX(this,cW),oX(this,cH),oX(this,cV,cF).toString()):null==e?oX(this,cB).removeAttributeNS(oX(this,cW),oX(this,cH)):oX(this,cB).setAttributeNS(oX(this,cW),oX(this,cH),e))}get booleanValue(){return oX(this,cB).hasAttributeNS(oX(this,cW),oX(this,cH))}set booleanValue(e){if(oX(this,cV,cF)&&1!==oX(this,cV,cF).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}cU=new WeakMap,cB=new WeakMap,cH=new WeakMap,cW=new WeakMap,cV=new WeakSet,cF=function(){return o8.get(this)};class le extends o9{constructor(e,t){super(),oJ(this,c$,void 0),oJ(this,cK,void 0),o0(this,c$,e),o0(this,cK,t?[...t]:[new Text])}get replacementNodes(){return oX(this,cK)}get parentNode(){return oX(this,c$)}get nextSibling(){return oX(this,cK)[oX(this,cK).length-1].nextSibling}get previousSibling(){return oX(this,cK)[0].previousSibling}get value(){return oX(this,cK).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),o0(this,cK,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(oX(this,cK)[0].parentNode,oX(this,cK),t,this.nextSibling))}}c$=new WeakMap,cK=new WeakMap;class lt extends le{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),this.expression=a,this.template=t,this.directive=i}}let li={string:e=>String(e)};class la{constructor(e){this.template=e,this.state=void 0}}let lr=new WeakMap,ln=new WeakMap,ls={partial:(e,t)=>{t[e.expression]=new la(e.template)},if:(e,t)=>{var i;if(lu(e.expression,t))if(lr.get(e)!==e.template){lr.set(e,e.template);let i=new o2(e.template,t,ll);e.replace(i),ln.set(e,i)}else null==(i=ln.get(e))||i.update(t);else e.replace(""),lr.delete(e),ln.delete(e)}},lo=Object.keys(ls),ll={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof lt){if(!n.directive){let e=lo.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=ls[n.directive])||a.call(ls,n,i);continue}let t=lu(e,i);if(t instanceof la){lr.get(n)!==t.template?(lr.set(n,t.template),n.value=t=new o2(t.template,t.state,ll),ln.set(n,t)):null==(r=ln.get(n))||r.update(t.state);continue}t?(n instanceof o7&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof o7?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,lr.delete(n),ln.delete(n))):n instanceof o7?n.value=void 0:(n.value=void 0,lr.delete(n),ln.delete(n))}}},ld={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=li[t])?void 0:i.call(li,e)}};function lu(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return lc(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return lc(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=lm(d,t))}return i}if(1===d.length)return lh(d[0])?lm(d[0].token,t):lc(e);if(2===d.length){let i=ld[null==(o=d[0])?void 0:o.token];return i&&lh(d[1])?i(lm(d[1].token,t)):lc(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=ld[i];if(!a||!lh(d[0])||!lh(d[2]))return lc(e);let r=lm(d[0].token,t);return a(r,"|"===i?d[2].token:lm(d[2].token,t))}}function lc(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function lh({type:e}){return["number","boolean","string","param"].includes(e)}function lm(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):rh(e)?parseFloat(e):t[e]}var lp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lv=(e,t,i)=>(lp(e,t,"read from private field"),i?i.call(e):t.get(e)),lE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lb=(e,t,i,a)=>(lp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lf=(e,t,i)=>(lp(e,t,"access private method"),i);let lg={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},l_=rD.createElement("template");l_.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class ly extends rR.HTMLElement{constructor(){super(),lE(this,cj),lE(this,cZ),lE(this,cq,void 0),lE(this,cY,void 0),lE(this,cG,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(lg[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(a7.BREAKPOINTS_COMPUTED,this.render),lf(this,cj,cQ).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=lv(this,cq))?e:this.constructor.template}set template(e){lb(this,cG,null),lb(this,cq,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>lg[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=lg[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(rh(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&lf(this,cZ,cz).call(this)}connectedCallback(){lf(this,cZ,cz).call(this)}createRenderer(){this.template&&this.template!==lv(this,cY)&&(lb(this,cY,this.template),this.renderer=new o2(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(l_.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function lT(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}function lA(e){return e.split("-")[0]}cq=new WeakMap,cY=new WeakMap,cG=new WeakMap,cj=new WeakSet,cQ=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},cZ=new WeakSet,cz=function(){var e;let t=this.getAttribute("template");if(!t||t===lv(this,cG))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){lb(this,cG,t),lb(this,cq,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(lb(this,cG,t),lT(t).then(e=>{let t=rD.createElement("template");t.innerHTML=e,lb(this,cq,t),this.createRenderer()}).catch(console.error))},ly.observedAttributes=["template"],ly.processor=ll,rR.customElements.get("media-theme")||rR.customElements.define("media-theme",ly);class lk extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),this.action=e,this.relatedTarget=t}}class lw extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),this.newState=e,this.oldState=t}}var lS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lI=(e,t,i)=>(lS(e,t,"read from private field"),i?i.call(e):t.get(e)),lR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lD=(e,t,i,a)=>(lS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lC=(e,t,i)=>(lS(e,t,"access private method"),i);function lL({type:e,text:t,value:i,checked:a}){let r=rD.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=rD.createElement("span");return n.textContent=t,r.append(n),r}function lM(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let lO={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class lx extends rR.HTMLElement{constructor(){if(super(),lR(this,c5),lR(this,c6),lR(this,he),lR(this,hi),lR(this,hr),lR(this,hl),lR(this,hu),lR(this,hh),lR(this,hp),lR(this,hE),lR(this,hf),lR(this,h_),lR(this,hT),lR(this,hk),lR(this,hS),lR(this,hR),lR(this,hC),lR(this,cX,null),lR(this,cJ,null),lR(this,c0,null),lR(this,c1,new Set),lR(this,c2,void 0),lR(this,c3,!1),lR(this,c4,null),lR(this,c8,()=>{let e=lI(this,c1),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));lD(this,c1,t)}),lR(this,hs,()=>{lC(this,hl,hd).call(this),lC(this,hu,hc).call(this,!1)}),lR(this,ho,()=>{lC(this,hl,hd).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),lD(this,c2,new MutationObserver(lI(this,c8))),lI(this,c2).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[lO.DISABLED,lO.HIDDEN,lO.STYLE,lO.ANCHOR,a5.MEDIA_CONTROLLER]}static formatMenuItemText(e,t){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":lC(this,c5,c9).call(this,e);break;case"invoke":lC(this,he,ht).call(this,e);break;case"click":lC(this,hh,hm).call(this,e);break;case"toggle":lC(this,hE,hb).call(this,e);break;case"focusout":lC(this,h_,hy).call(this,e);break;case"keydown":lC(this,hT,hA).call(this,e)}}connectedCallback(){var e,t;lD(this,c4,rY(this.shadowRoot,":host")),lC(this,c6,c7).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),lD(this,cX,rU(this)),null==(t=null==(e=lI(this,cX))?void 0:e.associateElement)||t.call(e,this),this.hidden||(rO(lP(this),lI(this,hs)),rO(this,lI(this,ho)))}disconnectedCallback(){var e,t;rx(lP(this),lI(this,hs)),rx(this,lI(this,ho)),this.disable(),null==(t=null==(e=lI(this,cX))?void 0:e.unassociateElement)||t.call(e,this),lD(this,cX,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===lO.HIDDEN&&i!==t?(lI(this,c3)||lD(this,c3,!0),this.hidden?lC(this,hr,hn).call(this):lC(this,hi,ha).call(this),this.dispatchEvent(new lw({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===a5.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=lI(this,cX))?void 0:a.unassociateElement)||r.call(a,this),lD(this,cX,null)),i&&this.isConnected&&(lD(this,cX,rU(this)),null==(s=null==(n=lI(this,cX))?void 0:n.associateElement)||s.call(n,this))):e===lO.DISABLED&&i!==t?null==i?this.enable():this.disable():e===lO.STYLE&&i!==t&&lC(this,c6,c7).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=r$(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(lN)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&lC(this,hC,hL).call(this,t)}focus(){if(lD(this,cJ,rF()),this.items.length){lC(this,hR,hD).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=lC(this,hk,hw).call(this,e);i&&(lC(this,hC,hL).call(this,i,"checkbox"===i.type),lI(this,c0)&&!this.hidden&&(null==(t=lI(this,cJ))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=lC(this,hk,hw).call(this,e))?t:lC(this,hS,hI).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),lC(this,hR,hD).call(this,r[s]),r[s].focus()}}function lN(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function lP(e){var t;return null!=(t=e.getAttribute("bounds")?rV(e,`#${e.getAttribute("bounds")}`):rP(e)||e.parentElement)?t:e}cX=new WeakMap,cJ=new WeakMap,c0=new WeakMap,c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,c4=new WeakMap,c5=new WeakSet,c9=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||lI(this,c8).call(this)},c8=new WeakMap,c6=new WeakSet,c7=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},he=new WeakSet,ht=function(e){lD(this,c0,e.relatedTarget),rW(this,e.relatedTarget)||(this.hidden=!this.hidden)},hi=new WeakSet,ha=function(){var e;null==(e=lI(this,c0))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),rO(lP(this),lI(this,hs)),rO(this,lI(this,ho))},hr=new WeakSet,hn=function(){var e;null==(e=lI(this,c0))||e.setAttribute("aria-expanded","false"),rx(lP(this),lI(this,hs)),rx(this,lI(this,ho))},hs=new WeakMap,ho=new WeakMap,hl=new WeakSet,hd=function(e){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:t,y:i}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a,r="x"==(["top","bottom"].includes(lA(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=lA(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){return{anchor:function(e,t){var i;let a=e.getBoundingClientRect(),r=null!=(i=null==t?void 0:t.getBoundingClientRect())?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}(e,t.offsetParent),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=e||(e=this.offsetWidth);let a=lP(this).getBoundingClientRect(),r=a.width-t-e,n=a.height-i-this.offsetHeight,{style:s}=lI(this,c4);s.setProperty("position","absolute"),s.setProperty("right",`${Math.max(0,r)}px`),s.setProperty("--_menu-bottom",`${n}px`);let o=getComputedStyle(this),l=s.getPropertyValue("--_menu-bottom")===o.bottom?n:parseFloat(o.bottom),d=a.height-l-parseFloat(o.marginBottom);this.style.setProperty("--_menu-max-height",`${d}px`)},hu=new WeakSet,hc=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=lI(this,c4);if(e||a.setProperty("--media-menu-transition-in","none"),i){let e=i.offsetHeight,a=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${a}px`),this.style.setProperty("min-height",`${e}px`),lC(this,hl,hd).call(this,a)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),lC(this,hl,hd).call(this);a.removeProperty("--media-menu-transition-in")},hh=new WeakSet,hm=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(lI(this,hp,hv))){null==(t=lI(this,cJ))||t.focus(),this.hidden=!0;return}let i=lC(this,hk,hw).call(this,e);!i||i.hasAttribute("disabled")||(lC(this,hR,hD).call(this,i),this.handleSelect(e))},hp=new WeakSet,hv=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.matches('button[part~="back"]'))},hE=new WeakSet,hb=function(e){if(e.target===this)return;lC(this,hf,hg).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement!=e.target&&("open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new lk({relatedTarget:i})));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);lC(this,hu,hc).call(this,!0)},hf=new WeakSet,hg=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},h_=new WeakSet,hy=function(e){var t;rW(this,e.relatedTarget)||(lI(this,c3)&&(null==(t=lI(this,cJ))||t.focus()),lI(this,c0)&&lI(this,c0)!==e.relatedTarget&&!this.hidden&&(this.hidden=!0))},hT=new WeakSet,hA=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s))if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(lI(this,c3)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=lI(this,cJ))||n.focus(),lI(this,c3)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)},hk=new WeakSet,hw=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},hS=new WeakSet,hI=function(){return this.items.find(e=>0===e.tabIndex)},hR=new WeakSet,hD=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},hC=new WeakSet,hL=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},lx.shadowRootOptions={mode:"open"},lx.getTemplateHTML=function(e){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex);
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `},rR.customElements.get("media-chrome-menu")||rR.customElements.define("media-chrome-menu",lx);var lU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lB=(e,t,i)=>(lU(e,t,"read from private field"),i?i.call(e):t.get(e)),lH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lW=(e,t,i,a)=>(lU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lV=(e,t,i)=>(lU(e,t,"access private method"),i);let lF={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class l$ extends rR.HTMLElement{constructor(){if(super(),lH(this,hx),lH(this,hP),lH(this,hB),lH(this,hV),lH(this,h$),lH(this,hq),lH(this,hM,!1),lH(this,hO,void 0),lH(this,hW,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(e=this.submenuElement.checkedItems)?void 0:e[0],r=null!=(t=null==a?void 0:a.dataset.description)?t:null==a?void 0:a.text,n=rD.createElement("span");n.textContent=null!=r?r:"",i.replaceChildren(n)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);let e=rN(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[lF.TYPE,lF.DISABLED,lF.CHECKED,lF.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),lK(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":lV(this,hx,hN).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":lV(this,h$,hK).call(this,e);break;case"keyup":lV(this,hV,hF).call(this,e)}}attributeChangedCallback(e,t,i){e===lF.CHECKED&&lK(this)&&!lB(this,hM)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===lF.TYPE&&i!==t?this.role="menuitem"+i:e===lF.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(lF.DISABLED)||this.enable(),this.role="menuitem"+this.type,lW(this,hO,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),lV(this,hq,hY).call(this)}disconnectedCallback(){this.disable(),lV(this,hq,hY).call(this),lW(this,hO,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=r$(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(lF.TYPE))?e:""}set type(e){this.setAttribute(lF.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(lF.VALUE))?e:this.text}set value(e){this.setAttribute(lF.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(lK(this))return"true"===this.getAttribute("aria-checked")}set checked(e){lK(this)&&(lW(this,hM,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!lK(this)&&this.invokeTargetElement&&rW(this,e.target)&&this.invokeTargetElement.dispatchEvent(new lk({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function lK(e){return"radio"===e.type||"checkbox"===e.type}hM=new WeakMap,hO=new WeakMap,hx=new WeakSet,hN=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?lV(this,hP,hU).call(this):lV(this,hB,hH).call(this))},hP=new WeakSet,hU=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",lB(this,hW)),this.submenuElement.addEventListener("addmenuitem",lB(this,hW)),this.submenuElement.addEventListener("removemenuitem",lB(this,hW)),lB(this,hW).call(this)},hB=new WeakSet,hH=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",lB(this,hW)),this.submenuElement.removeEventListener("addmenuitem",lB(this,hW)),this.submenuElement.removeEventListener("removemenuitem",lB(this,hW)),lB(this,hW).call(this)},hW=new WeakMap,hV=new WeakSet,hF=function(e){let{key:t}=e;if(!this.keysUsed.includes(t))return void this.removeEventListener("keyup",lV(this,hV,hF));this.handleClick(e)},h$=new WeakSet,hK=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a))return void this.removeEventListener("keyup",lV(this,hV,hF));this.addEventListener("keyup",lV(this,hV,hF),{once:!0})},hq=new WeakSet,hY=function(){var e;let t=null==(e=lB(this,hO))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},l$.shadowRootOptions={mode:"open"},l$.getTemplateHTML=function(e){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(e)}
    </slot>
    <slot name="submenu"></slot>
  `},l$.getSuffixSlotInnerHTML=function(e){return""},rR.customElements.get("media-chrome-menu-item")||rR.customElements.define("media-chrome-menu-item",l$);class lq extends lx{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rP(this).querySelector("media-settings-menu-button")}}lq.getTemplateHTML=function(e){return`
    ${lx.getTemplateHTML(e)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `},rR.customElements.get("media-settings-menu")||rR.customElements.define("media-settings-menu",lq);class lY extends l${}lY.shadowRootOptions={mode:"open"},lY.getTemplateHTML=function(e){return`
    ${l$.getTemplateHTML.call(this,e)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `},lY.getSuffixSlotInnerHTML=function(e){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `},rR.customElements.get("media-settings-menu-item")||rR.customElements.define("media-settings-menu-item",lY);class lG extends si{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=r$(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;null==(e=this.invokeTargetElement)||e.dispatchEvent(new lk({relatedTarget:this}))}}rR.customElements.get("media-chrome-menu-button")||rR.customElements.define("media-chrome-menu-button",lG);class lj extends lG{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rg("settings"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rP(this).querySelector("media-settings-menu")}}lj.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `},lj.getTooltipContentHTML=function(){return rg("Settings")},rR.customElements.get("media-settings-menu-button")||rR.customElements.define("media-settings-menu-button",lj);var lQ=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lZ=(e,t,i)=>(lQ(e,t,"read from private field"),i?i.call(e):t.get(e)),lz=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lX=(e,t,i,a)=>(lQ(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lJ=(e,t,i)=>(lQ(e,t,"access private method"),i);class l0 extends lx{constructor(){super(...arguments),lz(this,hQ),lz(this,hz),lz(this,hG,[]),lz(this,hj,void 0)}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_AUDIO_TRACK_LIST,a6.MEDIA_AUDIO_TRACK_ENABLED,a6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a6.MEDIA_AUDIO_TRACK_ENABLED&&t!==i)this.value=i;else if(e===a6.MEDIA_AUDIO_TRACK_LIST&&t!==i){var a;lX(this,hG,null==(a=null!=i?i:"")?void 0:a.split(/\s+/).map(ru)),lJ(this,hQ,hZ).call(this)}}connectedCallback(){super.connectedCallback(),this.addEventListener("change",lJ(this,hz,hX))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",lJ(this,hz,hX))}get anchorElement(){var e;return"auto"!==this.anchor?super.anchorElement:null==(e=rP(this))?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return lZ(this,hG)}set mediaAudioTrackList(e){lX(this,hG,e),lJ(this,hQ,hZ).call(this)}get mediaAudioTrackEnabled(){var e;return null!=(e=rz(this,a6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){rX(this,a6.MEDIA_AUDIO_TRACK_ENABLED,e)}}hG=new WeakMap,hj=new WeakMap,hQ=new WeakSet,hZ=function(){if(lZ(this,hj)===JSON.stringify(this.mediaAudioTrackList))return;lX(this,hj,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=lL({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(lM(this,"checked-indicator")),this.defaultSlot.append(e)}},hz=new WeakSet,hX=function(){if(null==this.value)return;let e=new rR.CustomEvent(a4.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rR.customElements.get("media-audio-track-menu")||rR.customElements.define("media-audio-track-menu",l0);let l1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;class l2 extends lG{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_AUDIO_TRACK_ENABLED,a6.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rg("Audio"))}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=rP(this))?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return null!=(e=rz(this,a6.MEDIA_AUDIO_TRACK_ENABLED))?e:""}set mediaAudioTrackEnabled(e){rX(this,a6.MEDIA_AUDIO_TRACK_ENABLED,e)}}l2.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${l1}</slot>
  `},l2.getTooltipContentHTML=function(){return rg("Audio")},rR.customElements.get("media-audio-track-menu-button")||rR.customElements.define("media-audio-track-menu-button",l2);var l3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l5=(e,t,i)=>(l3(e,t,"access private method"),i);let l9=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;class l8 extends lx{constructor(){super(...arguments),l4(this,h0),l4(this,h2),l4(this,hJ,void 0)}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_SUBTITLES_LIST,a6.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_SUBTITLES_LIST&&t!==i?l5(this,h0,h1).call(this):e===a6.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",l5(this,h2,h3))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",l5(this,h2,h3))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rP(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return l6(this,a6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){l7(this,a6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return l6(this,a6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){l7(this,a6.MEDIA_SUBTITLES_SHOWING,e)}}hJ=new WeakMap,h0=new WeakSet,h1=function(){var e,t,i,a,r,n;if(l3(this,t=hJ,"read from private field"),(i?i.call(this):t.get(this))===JSON.stringify(this.mediaSubtitlesList))return;a=hJ,r=JSON.stringify(this.mediaSubtitlesList),l3(this,a,"write to private field"),n?n.call(this,r):a.set(this,r),this.defaultSlot.textContent="";let s=!this.value,o=lL({type:"radio",text:this.formatMenuItemText(rg("Off")),value:"off",checked:s});for(let t of(o.prepend(lM(this,"checked-indicator")),this.defaultSlot.append(o),this.mediaSubtitlesList)){let i=lL({type:"radio",text:this.formatMenuItemText(t.label,t),value:nu(t),checked:this.value==nu(t)});i.prepend(lM(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(lM(this,"captions-indicator")),this.defaultSlot.append(i)}},h2=new WeakSet,h3=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(a6.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new rR.CustomEvent(a4.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new rR.CustomEvent(a4.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},l8.getTemplateHTML=function(e){return`
    ${lx.getTemplateHTML(e)}
    <slot name="captions-indicator" hidden>${l9}</slot>
  `};let l6=(e,t)=>{let i=e.getAttribute(t);return i?nl(i):[]},l7=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rR.customElements.get("media-captions-menu")||rR.customElements.define("media-captions-menu",l8);let de=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dt=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,di=e=>{e.setAttribute("aria-checked",nv(e).toString())};class da extends lG{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_SUBTITLES_LIST,a6.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rg("closed captions")),di(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_SUBTITLES_SHOWING&&di(this)}get invokeTargetElement(){var e;return void 0!=this.invokeTarget?super.invokeTargetElement:null==(e=rP(this))?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return dr(this,a6.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dn(this,a6.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return dr(this,a6.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dn(this,a6.MEDIA_SUBTITLES_SHOWING,e)}}da.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${de}</slot>
      <slot name="off">${dt}</slot>
    </slot>
  `},da.getTooltipContentHTML=function(){return rg("Captions")};let dr=(e,t)=>{let i=e.getAttribute(t);return i?nl(i):[]},dn=(e,t,i)=>{if(!(null==i?void 0:i.length))return void e.removeAttribute(t);let a=nc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};rR.customElements.get("media-captions-menu-button")||rR.customElements.define("media-captions-menu-button",da);var ds=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dl=(e,t,i)=>(ds(e,t,"read from private field"),i?i.call(e):t.get(e)),dd=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},du=(e,t,i)=>(ds(e,t,"access private method"),i);let dc={RATES:"rates"};class dh extends lx{constructor(){super(),dd(this,h5),dd(this,h8),dd(this,h4,new ns(this,dc.RATES,{defaultValue:ol})),du(this,h5,h9).call(this)}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PLAYBACK_RATE,dc.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===a6.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dc.RATES&&t!=i&&(dl(this,h4).value=i,du(this,h5,h9).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",du(this,h8,h6))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",du(this,h8,h6))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rP(this).querySelector("media-playback-rate-menu-button")}get rates(){return dl(this,h4)}set rates(e){e?Array.isArray(e)?dl(this,h4).value=e.join(" "):"string"==typeof e&&(dl(this,h4).value=e):dl(this,h4).value="",du(this,h5,h9).call(this)}get mediaPlaybackRate(){return rG(this,a6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rj(this,a6.MEDIA_PLAYBACK_RATE,e)}}h4=new WeakMap,h5=new WeakSet,h9=function(){for(let e of(this.defaultSlot.textContent="",dl(this,h4))){let t=lL({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate===Number(e)});t.prepend(lM(this,"checked-indicator")),this.defaultSlot.append(t)}},h8=new WeakSet,h6=function(){if(!this.value)return;let e=new rR.CustomEvent(a4.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rR.customElements.get("media-playback-rate-menu")||rR.customElements.define("media-playback-rate-menu",dh);class dm extends lG{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${null!=(e=this.mediaPlaybackRate)?e:1}x`}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a6.MEDIA_PLAYBACK_RATE){let e=i?+i:NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",rg("Playback rate {playbackRate}",{playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rP(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return rG(this,a6.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){rj(this,a6.MEDIA_PLAYBACK_RATE,e)}}dm.getSlotTemplateHTML=function(e){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${e.mediaplaybackrate||1}x</slot>
  `},dm.getTooltipContentHTML=function(){return rg("Playback rate")},rR.customElements.get("media-playback-rate-menu-button")||rR.customElements.define("media-playback-rate-menu-button",dm);var dp=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dv=(e,t,i)=>(dp(e,t,"read from private field"),i?i.call(e):t.get(e)),dE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},db=(e,t,i,a)=>(dp(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),df=(e,t,i)=>(dp(e,t,"access private method"),i);class dg extends lx{constructor(){super(...arguments),dE(this,mt),dE(this,ma),dE(this,h7,[]),dE(this,me,{})}static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_RENDITION_LIST,a6.MEDIA_RENDITION_SELECTED,a6.MEDIA_RENDITION_UNAVAILABLE,a6.MEDIA_HEIGHT]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===a6.MEDIA_RENDITION_SELECTED&&t!==i)this.value=null!=i?i:"auto",df(this,mt,mi).call(this);else if(e===a6.MEDIA_RENDITION_LIST&&t!==i)db(this,h7,null==i?void 0:i.split(/\s+/).map(rl)),df(this,mt,mi).call(this);else e===a6.MEDIA_HEIGHT&&t!==i&&df(this,mt,mi).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",df(this,ma,mr))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",df(this,ma,mr))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:rP(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return dv(this,h7)}set mediaRenditionList(e){db(this,h7,e),df(this,mt,mi).call(this)}get mediaRenditionSelected(){return rz(this,a6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){rX(this,a6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return rG(this,a6.MEDIA_HEIGHT)}set mediaHeight(e){rj(this,a6.MEDIA_HEIGHT,e)}}h7=new WeakMap,me=new WeakMap,mt=new WeakSet,mi=function(){if(dv(this,me).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&dv(this,me).mediaHeight===this.mediaHeight)return;dv(this,me).mediaRenditionList=JSON.stringify(this.mediaRenditionList),dv(this,me).mediaHeight=this.mediaHeight;let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);for(let t of e)t.selected=t.id===this.mediaRenditionSelected;this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=lL({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(lM(this,"checked-indicator")),this.defaultSlot.append(e)}let i=lL({type:"radio",text:t?this.formatMenuItemText(`${rg("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(rg("Auto")),value:"auto",checked:t}),a=this.mediaHeight>0?`${rg("Auto")} (${this.mediaHeight}p)`:rg("Auto");i.dataset.description=a,i.prepend(lM(this,"checked-indicator")),this.defaultSlot.append(i)},ma=new WeakSet,mr=function(){if(null==this.value)return;let e=new rR.CustomEvent(a4.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},rR.customElements.get("media-rendition-menu")||rR.customElements.define("media-rendition-menu",dg);let d_=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;class dy extends lG{static get observedAttributes(){return[...super.observedAttributes,a6.MEDIA_RENDITION_SELECTED,a6.MEDIA_RENDITION_UNAVAILABLE,a6.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",rg("quality"))}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:rP(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return rz(this,a6.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){rX(this,a6.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return rG(this,a6.MEDIA_HEIGHT)}set mediaHeight(e){rj(this,a6.MEDIA_HEIGHT,e)}}dy.getSlotTemplateHTML=function(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${d_}</slot>
  `},dy.getTooltipContentHTML=function(){return rg("Quality")},rR.customElements.get("media-rendition-menu-button")||rR.customElements.define("media-rendition-menu-button",dy);var dT=e=>{throw TypeError(e)},dA=(e,t,i)=>t.has(e)||dT("Cannot "+i),dk=(e,t,i)=>(dA(e,t,"read from private field"),i?i.call(e):t.get(e)),dw=(e,t,i)=>t.has(e)?dT("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),dS=(e,t,i,a)=>(dA(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dI=(e,t,i)=>(dA(e,t,"access private method"),i),dR=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends dR{}globalThis.DocumentFragment=e}var dD,dC,dL,dM,dO,dx,dN,dP,dU,dB,dH,dW,dV,dF,d$,dK,dq,dY,dG,dj,dQ,dZ,dz,dX,dJ,d0,d1,d2,d3,d4,d5,d9,d8,d6,d7,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,uE,ub,uf,ug,u_,uy,uT,uA,uk,uw,uS,uI,uR,uD,uC,uL,uM,uO,ux,uN,uP,uU,uB,uH,uW,uV,uF,u$,uK,uq,uY,uG,uj,uQ,uZ,uz,uX,uJ,u0,u1,u2,u3,u4,u5,u9,u8,u6,u7,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cE,cb,cf,cg,c_,cy,cT,cA,ck,cw,cS,cI,cR,cD,cC,cL,cM,cO,cx,cN,cP,cU,cB,cH,cW,cV,cF,c$,cK,cq,cY,cG,cj,cQ,cZ,cz,cX,cJ,c0,c1,c2,c3,c4,c5,c9,c8,c6,c7,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hE,hb,hf,hg,h_,hy,hT,hA,hk,hw,hS,hI,hR,hD,hC,hL,hM,hO,hx,hN,hP,hU,hB,hH,hW,hV,hF,h$,hK,hq,hY,hG,hj,hQ,hZ,hz,hX,hJ,h0,h1,h2,h3,h4,h5,h9,h8,h6,h7,me,mt,mi,ma,mr,mn,ms=class extends dR{},mo=class{constructor(e,t={}){dw(this,mn),dS(this,mn,null==t?void 0:t.detail)}get detail(){return dk(this,mn)}initCustomEvent(){}};mn=new WeakMap;var ml={document:{createElement:function(e,t){return new ms}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(ms)},CustomEvent:mo,EventTarget:dR,HTMLElement:ms,HTMLVideoElement:class extends dR{}},md="undefined"==typeof window||void 0===globalThis.customElements,mu=md?ml:globalThis,mc=md?ml.document:globalThis.document;function mh(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function mm(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function mp(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function mv(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}var mE,mb,mf,mg=(e,t)=>!!e&&!!t&&(!!e.contains(t)||mg(e,t.getRootNode().host)),m_="mux.com",my=(()=>{try{return"3.5.1"}catch{}return"UNKNOWN"})(),mT=e=>{if(e){if([tV.LIVE,tV.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tV.LIVE}},mA={crossorigin:"crossOrigin",playsinline:"playsInline"},mk=class{constructor(e,t){dw(this,mE),dw(this,mb),dw(this,mf,[]),dS(this,mE,e),dS(this,mb,t)}[Symbol.iterator](){return dk(this,mf).values()}get length(){return dk(this,mf).length}get value(){var e;return null!=(e=dk(this,mf).join(" "))?e:""}set value(e){var t;e!==this.value&&(dS(this,mf,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return dk(this,mf)[e]}values(){return dk(this,mf).values()}keys(){return dk(this,mf).keys()}forEach(e){dk(this,mf).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||dk(this,mf).push(e)}),(""!==this.value||null!=(t=dk(this,mE))&&t.hasAttribute(`${dk(this,mb)}`))&&null!=(i=dk(this,mE))&&i.setAttribute(`${dk(this,mb)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{dk(this,mf).splice(dk(this,mf).indexOf(e),1)}),null==(t=dk(this,mE))||t.setAttribute(`${dk(this,mb)}`,`${this.value}`)}contains(e){return dk(this,mf).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};mE=new WeakMap,mb=new WeakMap,mf=new WeakMap;var mw=`[mux-player ${my}]`;function mS(...e){console.warn(mw,...e)}function mI(...e){console.error(mw,...e)}function mR(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${t9("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),mS(i)}var mD={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},mC={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},mL=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),mM=[...Object.values(mD).filter(e=>mD.PLAYSINLINE!==e),...Object.values(mC)];function mO(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var mx=class extends mu.HTMLElement{static get observedAttributes(){return mM}constructor(){super()}attributeChangedCallback(e,t,i){var a,r;switch(e){case mC.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case mC.VOLUME:{let e=null!=(a=mp(i))?a:1;this.media&&(this.media.volume=e);return}case mC.PLAYBACKRATE:{let e=null!=(r=mp(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}load(){var e;null==(e=this.media)||e.load()}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:mL}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:mL}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentSrc(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentSrc)?t:""}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=mp(this.getAttribute(mC.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(mC.PLAYBACKRATE,`${e}`):this.removeAttribute(mC.PLAYBACKRATE)}get crossOrigin(){return mO(this,mD.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(mD.CROSSORIGIN,`${e}`)}get autoplay(){return null!=mO(this,mD.AUTOPLAY)}set autoplay(e){e?this.setAttribute(mD.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(mD.AUTOPLAY)}get loop(){return null!=mO(this,mD.LOOP)}set loop(e){e?this.setAttribute(mD.LOOP,""):this.removeAttribute(mD.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=mO(this,mD.MUTED)}set defaultMuted(e){e?this.setAttribute(mD.MUTED,""):this.removeAttribute(mD.MUTED)}get playsInline(){return null!=mO(this,mD.PLAYSINLINE)}set playsInline(e){mI("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(mD.PRELOAD,e):this.removeAttribute(mD.PRELOAD)}},mN=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,mP=new WeakMap,mU=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=mP.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=mP.get(this.element);e&&e.delete(this.type)}}static for(t){mP.has(t.element)||mP.set(t.element,new Map);let i=t.attributeName.slice(2),a=mP.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},mB=new Map,mH=new WeakMap,mW=new WeakMap,mV=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(mB.has(this.stringsKey))return mB.get(this.stringsKey);{let e=mc.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),mB.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(mH.get(e)!==i){mH.set(e,i);let t=new o2(i,this.values,this.processor);mW.set(e,t),e instanceof le?e.replace(...t.children):e.appendChild(t);return}let a=mW.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},mF={processCallback(e,t,i){var a;if(i)for(let[e,r]of t)e in i&&function(e,t){(function(e,t){if(e instanceof o7&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1})(e,t)||function(e,t){if("boolean"==typeof t&&e instanceof o7){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(e,t)||e instanceof o7&&e.attributeName.startsWith("on")&&(mU.for(e).set(t),e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),1)||!1===t&&e instanceof le&&(e.replace(""),1)||t instanceof mV&&e instanceof le&&(t.renderInto(e),1)||t instanceof DocumentFragment&&e instanceof le&&(t.childNodes.length&&e.replace(...t.childNodes),1)||function(e,t){if(e instanceof o7){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(e,t)}(r,null!=(a=i[e])?a:"")}};function m$(e,...t){return new mV(e,t,mF)}var mK=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),mq=e=>e.charAt(0).toUpperCase()+e.slice(1),mY=(e,t)=>{let i=(e=>{if(e.muxCode){if(e.muxCode===tN.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(e.muxCode===tN.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode))return"403-incorrect-aud-value.md";if(e.muxCode===tN.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(e.muxCode===tN.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(e.muxCode===tN.NETWORK_NOT_FOUND)return"404-not-found.md";if(e.muxCode===tN.NETWORK_NOT_READY)return"412-not-playable.md"}if(e.code){if(e.code===tB.MEDIA_ERR_NETWORK)return"";if(e.code===tB.MEDIA_ERR_DECODE)return"media-decode-error.md";if(e.code===tB.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""})(e);return{message:e.message,context:e.context,file:i}},mG=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,mj=mc.createElement("template");"innerHTML"in mj&&(mj.innerHTML=mG);var mQ,mZ,mz=class extends ly{};mz.template=null==(mZ=null==(mQ=mj.content)?void 0:mQ.children)?void 0:mZ[0],mu.customElements.get("media-theme-gerwig")||mu.customElements.define("media-theme-gerwig",mz);var mX={SRC:"src",POSTER:"poster"},mJ={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge"},m0=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","proudlydisplaymuxbadge"],m1=sK.formatErrorMessage;function m2(e){let t=e.videoTitle?{video_title:e.videoTitle}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}sK.formatErrorMessage=e=>{var t,i;if(e instanceof tB){let a=((e,t=!1)=>({title:((e,t=!1)=>{var i,a;if(e.muxCode){let r=mq(null!=(i=e.errorCategory)?i:"video"),n=tP(null!=(a=e.errorCategory)?a:tx.VIDEO);if(e.muxCode===tN.NETWORK_OFFLINE)return t9("Your device appears to be offline",t);if(e.muxCode===tN.NETWORK_TOKEN_EXPIRED)return t9("{category} URL has expired",t).format({category:r});if([tN.NETWORK_TOKEN_SUB_MISMATCH,tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING,tN.NETWORK_TOKEN_MALFORMED].includes(e.muxCode))return t9("{category} URL is formatted incorrectly",t).format({category:r});if(e.muxCode===tN.NETWORK_TOKEN_MISSING)return t9("Invalid {categoryName} URL",t).format({categoryName:n});if(e.muxCode===tN.NETWORK_NOT_FOUND)return t9("{category} does not exist",t).format({category:r});if(e.muxCode===tN.NETWORK_NOT_READY){let i="live"===e.streamType?"Live stream":"Video";return t9("{mediaType} is not currently available",t).format({mediaType:i})}}if(e.code){if(e.code===tB.MEDIA_ERR_NETWORK)return t9("Network Error",t);if(e.code===tB.MEDIA_ERR_DECODE)return t9("Media Error",t);if(e.code===tB.MEDIA_ERR_SRC_NOT_SUPPORTED)return t9("Source Not Supported",t)}return t9("Error",t)})(e,t).toString(),message:((e,t=!1)=>{var i,a;if(e.muxCode){let r=mq(null!=(i=e.errorCategory)?i:"video"),n=tP(null!=(a=e.errorCategory)?a:tx.VIDEO);return e.muxCode===tN.NETWORK_OFFLINE?t9("Check your internet connection and try reloading this video.",t):e.muxCode===tN.NETWORK_TOKEN_EXPIRED?t9("The video’s secured {tokenNamePrefix}-token has expired.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_TOKEN_SUB_MISMATCH?t9("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_TOKEN_MALFORMED?t9("{category} URL is formatted incorrectly",t).format({category:r}):[tN.NETWORK_TOKEN_AUD_MISMATCH,tN.NETWORK_TOKEN_AUD_MISSING].includes(e.muxCode)?t9("The {tokenNamePrefix}-token is formatted with incorrect information.",t).format({tokenNamePrefix:n}):[tN.NETWORK_TOKEN_MISSING,tN.NETWORK_INVALID_URL].includes(e.muxCode)?t9("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",t).format({tokenNamePrefix:n}):e.muxCode===tN.NETWORK_NOT_FOUND?"":e.message}return e.code&&(e.code===tB.MEDIA_ERR_NETWORK||e.code===tB.MEDIA_ERR_DECODE||e.code===tB.MEDIA_ERR_SRC_NOT_SUPPORTED),e.message})(e,t).toString()}))(e,!1);return`
      ${null!=a&&a.title?`<h3>${a.title}</h3>`:""}
      ${null!=a&&a.message||null!=a&&a.linkUrl?`<p>
        ${null==a?void 0:a.message}
        ${null!=a&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(t=a.linkText)?t:""} ${t9("(opens in a new window)")}"
              >${null!=(i=a.linkText)?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return m1(e)};var m3,m4,m5,m9,m8,m6,m7,pe,pt,pi,pa,pr,pn,ps,po,pl=Object.values(aA),pd=Object.values(mX),pu=Object.values(mJ),pc="mux-player",ph={isDialogOpen:!1},pm={redundant_streams:!0},pp=class extends mx{constructor(){super(),dw(this,m7),dw(this,m3),dw(this,m4,!1),dw(this,m5,{}),dw(this,m9,!0),dw(this,m8,new mk(this,"hotkeys")),dw(this,m6,{...ph,onCloseErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&dI(this,m7,pi).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:e=>{var t;(null==(t=e.composedPath()[0])?void 0:t.localName)==="media-error-dialog"&&(mg(this,mc.activeElement)||e.preventDefault())}}),dS(this,m3,iW()),this.attachShadow({mode:"open"}),dI(this,m7,pt).call(this),this.isConnected&&dI(this,m7,pe).call(this)}static get NAME(){return pc}static get VERSION(){return my}static get observedAttributes(){var e;return[...null!=(e=mx.observedAttributes)?e:[],...pd,...pl,...pu]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){let e=this.media;e&&(e.metadata=m2(this))}attributeChangedCallback(e,t,i){var a;switch(dI(this,m7,pe).call(this),super.attributeChangedCallback(e,t,i),e){case mJ.HOTKEYS:dk(this,m8).value=i;break;case mJ.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&mS(t9("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break;case mJ.THUMBNAIL_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=ig.THUMBNAIL;t!==i&&mS(t9("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"thumbnail"}))}}break;case mJ.STORYBOARD_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=ig.STORYBOARD;t!==i&&mS(t9("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"storyboard"}))}}break;case mJ.DRM_TOKEN:if(i){let e=t5(i);if(e){let{aud:t}=e,i=ig.DRM;t!==i&&mS(t9("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:t,expectedAud:i,tokenNamePrefix:"drm"}))}}break;case aA.PLAYBACK_ID:null!=i&&i.includes("?token")&&mI(t9("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case aA.STREAM_TYPE:i&&![tV.LIVE,tV.ON_DEMAND,tV.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?1/0:0:mR({file:"invalid-stream-type.md",message:t9("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tV.LIVE?null==this.getAttribute(mJ.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=NaN}[aA.PLAYBACK_ID,mX.SRC,mJ.PLAYBACK_TOKEN].includes(e)&&t!==i&&dS(this,m6,{...dk(this,m6),...ph}),dI(this,m7,pa).call(this,{[null!=(a=mA[e])?a:mm(e)]:i})}async requestFullscreen(e){var t;if(!(!this.mediaController||this.mediaController.hasAttribute(a6.MEDIA_IS_FULLSCREEN)))return null==(t=this.mediaController)||t.dispatchEvent(new mu.CustomEvent(a4.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(a7.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}async exitFullscreen(){var e;if(!(!this.mediaController||!this.mediaController.hasAttribute(a6.MEDIA_IS_FULLSCREEN)))return null==(e=this.mediaController)||e.dispatchEvent(new mu.CustomEvent(a4.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,t)=>{var i;null==(i=this.mediaController)||i.addEventListener(a7.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var e;return null!=(e=this.getAttribute(aA.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tK.includes(e)?this.setAttribute(aA.PREFER_CMCD,e):mS(`Invalid value for preferCmcd. Must be one of ${tK.join()}`):this.removeAttribute(aA.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a6.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(a6.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(mJ.THEME))?e:"gerwig"}set theme(e){this.setAttribute(mJ.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(m0.includes(i))continue;let a=e.getAttribute(i);t[mm(i)]=""===a||a}return t}set themeProps(e){var t,i;dI(this,m7,pe).call(this);let a={...this.themeProps,...e};for(let r in a){if(m0.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(mh(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(mh(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(aA.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(aA.PLAYBACK_ID,e):this.removeAttribute(aA.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=pv(this,mX.SRC))?e:void 0:null!=(t=this.getAttribute(mX.SRC))?t:void 0}set src(e){e?this.setAttribute(mX.SRC,e):this.removeAttribute(mX.SRC)}get poster(){var e;let t=this.getAttribute(mX.POSTER);if(null!=t)return t;let{tokens:i}=this;return i.playback&&!i.thumbnail?void mS("Missing expected thumbnail token. No poster image will be shown"):this.playbackId&&!this.audio?((e,{token:t,customDomain:i=m_,thumbnailTime:a,programTime:r}={})=>{var n;let s=null==t?a:void 0,{aud:o}=null!=(n=t5(t))?n:{};if(!(t&&"t"!==o))return`https://image.${i}/${e}/thumbnail.webp${mv({token:t,time:s,program_time:r})}`})(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:i.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(mX.POSTER,e):this.removeAttribute(mX.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(mJ.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(mJ.STORYBOARD_SRC,e):this.removeAttribute(mJ.STORYBOARD_SRC)}get storyboard(){let{tokens:e}=this;return this.storyboardSrc&&!e.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tV.LIVE,tV.UNKNOWN].includes(this.streamType)||e.playback&&!e.storyboard?void 0:((e,{token:t,customDomain:i=m_,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=null!=(n=t5(t))?n:{};if(!(t&&"s"!==s))return`https://image.${i}/${e}/storyboard.vtt${mv({token:t,format:"webp",program_start_time:a,program_end_time:r})}`})(this.playbackId,{customDomain:this.customDomain,token:e.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(mJ.AUDIO)}set audio(e){if(!e)return void this.removeAttribute(mJ.AUDIO);this.setAttribute(mJ.AUDIO,"")}get hotkeys(){return dk(this,m8)}get nohotkeys(){return this.hasAttribute(mJ.NOHOTKEYS)}set nohotkeys(e){if(!e)return void this.removeAttribute(mJ.NOHOTKEYS);this.setAttribute(mJ.NOHOTKEYS,"")}get thumbnailTime(){return mp(this.getAttribute(mJ.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(mJ.THUMBNAIL_TIME,`${e}`)}get videoTitle(){var e,t;return null!=(t=null!=(e=this.getAttribute(mJ.VIDEO_TITLE))?e:this.getAttribute(mJ.TITLE))?t:""}set videoTitle(e){e!==this.videoTitle&&(e?this.setAttribute(mJ.VIDEO_TITLE,e):this.removeAttribute(mJ.VIDEO_TITLE))}get placeholder(){var e;return null!=(e=pv(this,mJ.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(mJ.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(mJ.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(mJ.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(mJ.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(mJ.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(mJ.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=mu.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(mJ.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(mJ.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(mJ.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(mJ.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(mJ.PLAYBACK_RATES))return this.getAttribute(mJ.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e)return void this.removeAttribute(mJ.PLAYBACK_RATES);this.setAttribute(mJ.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=mp(this.getAttribute(mJ.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(mJ.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=mp(this.getAttribute(mJ.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(mJ.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(mJ.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(mJ.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(mJ.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return mp(this.getAttribute(mJ.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(mJ.DEFAULT_DURATION):this.setAttribute(mJ.DEFAULT_DURATION,`${e}`)}get playerInitTime(){return this.hasAttribute(aA.PLAYER_INIT_TIME)?mp(this.getAttribute(aA.PLAYER_INIT_TIME)):dk(this,m3)}set playerInitTime(e){e!=this.playerInitTime&&(null==e?this.removeAttribute(aA.PLAYER_INIT_TIME):this.setAttribute(aA.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(aA.PLAYER_SOFTWARE_NAME))?e:pc}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(aA.PLAYER_SOFTWARE_VERSION))?e:my}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(aA.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(aA.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(aA.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(aA.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(aA.MAX_RESOLUTION,e):this.removeAttribute(aA.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(aA.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(aA.MIN_RESOLUTION,e):this.removeAttribute(aA.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(aA.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(aA.RENDITION_ORDER,e):this.removeAttribute(aA.RENDITION_ORDER))}get programStartTime(){return mp(this.getAttribute(aA.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(aA.PROGRAM_START_TIME):this.setAttribute(aA.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return mp(this.getAttribute(aA.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(aA.PROGRAM_END_TIME):this.setAttribute(aA.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){return mp(this.getAttribute(aA.ASSET_START_TIME))}set assetStartTime(e){null==e?this.removeAttribute(aA.ASSET_START_TIME):this.setAttribute(aA.ASSET_START_TIME,`${e}`)}get assetEndTime(){return mp(this.getAttribute(aA.ASSET_END_TIME))}set assetEndTime(e){null==e?this.removeAttribute(aA.ASSET_END_TIME):this.setAttribute(aA.ASSET_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(mJ.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(mJ.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):pm}set extraSourceParams(e){null==e?this.removeAttribute(mJ.EXTRA_SOURCE_PARAMS):this.setAttribute(mJ.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(aA.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(aA.CUSTOM_DOMAIN,e):this.removeAttribute(aA.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=pv(this,aA.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(aA.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(mJ.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(mJ.NO_VOLUME_PREF,""):this.removeAttribute(mJ.NO_VOLUME_PREF)}get debug(){return null!=pv(this,aA.DEBUG)}set debug(e){e?this.setAttribute(aA.DEBUG,""):this.removeAttribute(aA.DEBUG)}get disableTracking(){return null!=pv(this,aA.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(aA.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=pv(this,aA.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(aA.DISABLE_COOKIES,""):this.removeAttribute(aA.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(aA.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tV.UNKNOWN}set streamType(e){this.setAttribute(aA.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(mJ.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(mJ.DEFAULT_STREAM_TYPE))?i:tV.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(mJ.DEFAULT_STREAM_TYPE,e):this.removeAttribute(mJ.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(mJ.TARGET_LIVE_WINDOW)?+this.getAttribute(mJ.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(mJ.TARGET_LIVE_WINDOW):this.setAttribute(mJ.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return mp(pv(this,aA.START_TIME))}set startTime(e){this.setAttribute(aA.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(aA.PREFER_PLAYBACK);if(e===tF.MSE||e===tF.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tF.MSE||e===tF.NATIVE?this.setAttribute(aA.PREFER_PLAYBACK,e):this.removeAttribute(aA.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(dI(this,m7,pe).call(this),!this.media)return void mI("underlying media element missing when trying to set metadata. metadata will not be set.");this.media.metadata={...m2(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(dI(this,m7,pe).call(this),!this.media)return void mI("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");this.media._hlsConfig=e}async addCuePoints(e){var t;return(dI(this,m7,pe).call(this),this.media)?null==(t=this.media)?void 0:t.addCuePoints(e):void mI("underlying media element missing when trying to addCuePoints. cuePoints will not be added.")}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;return(dI(this,m7,pe).call(this),this.media)?null==(t=this.media)?void 0:t.addChapters(e):void mI("underlying media element missing when trying to addChapters. chapters will not be added.")}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(mJ.PLAYBACK_TOKEN),t=this.getAttribute(mJ.DRM_TOKEN),i=this.getAttribute(mJ.THUMBNAIL_TOKEN),a=this.getAttribute(mJ.STORYBOARD_TOKEN);return{...dk(this,m5),...null!=e?{playback:e}:{},...null!=t?{drm:t}:{},...null!=i?{thumbnail:i}:{},...null!=a?{storyboard:a}:{}}}set tokens(e){dS(this,m5,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(mJ.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(mJ.PLAYBACK_TOKEN,`${e}`)}get drmToken(){var e;return null!=(e=this.getAttribute(mJ.DRM_TOKEN))?e:void 0}set drmToken(e){this.setAttribute(mJ.DRM_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(mJ.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(mJ.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(mJ.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(mJ.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return ii(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}get castReceiver(){var e;return null!=(e=this.getAttribute(mJ.CAST_RECEIVER))?e:void 0}set castReceiver(e){e!==this.castReceiver&&(e?this.setAttribute(mJ.CAST_RECEIVER,e):this.removeAttribute(mJ.CAST_RECEIVER))}get castCustomData(){var e;return null==(e=this.media)?void 0:e.castCustomData}set castCustomData(e){if(!this.media)return void mI("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");this.media.castCustomData=e}get noTooltips(){return this.hasAttribute(mJ.NO_TOOLTIPS)}set noTooltips(e){if(!e)return void this.removeAttribute(mJ.NO_TOOLTIPS);this.setAttribute(mJ.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(mJ.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(e){e?this.setAttribute(mJ.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(mJ.PROUDLY_DISPLAY_MUX_BADGE)}};function pv(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}m3=new WeakMap,m4=new WeakMap,m5=new WeakMap,m9=new WeakMap,m8=new WeakMap,m6=new WeakMap,m7=new WeakSet,pe=function(){var e,t,i,a;if(!dk(this,m4)){dS(this,m4,!0),dI(this,m7,pa).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof mu.HTMLElement))throw""}catch{mI("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{mI("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof nj))throw""}catch{mI("<media-controller> failed to upgrade!")}dI(this,m7,pr).call(this),dI(this,m7,pn).call(this),dI(this,m7,ps).call(this),dS(this,m9,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(r6.USER_INACTIVE))||t),dI(this,m7,po).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>dI(this,m7,pa).call(this)),null==(a=this.media)||a.addEventListener("loadstart",()=>dI(this,m7,pa).call(this))}},pt=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},pi=function(e){Object.assign(dk(this,m6),e),dI(this,m7,pa).call(this)},pa=function(e={}){var t,i,a,r,n,s,o,l,d,u,c,h,m,p,E,b,f,g,_,y,T,A,k,w,S,I,R,D,C,L,M,O,x,N,P,U,B,H,W,V,F,$;let K,q;t={...dk(this,m6),...e},K={src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src||!!this.currentSrc,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(mJ.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=mu.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(mJ.NOHOTKEYS),hotKeys:this.getAttribute(mJ.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,assetStartTime:this.assetStartTime,assetEndTime:this.assetEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerInitTime:this.playerInitTime,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(aA.TARGET_LIVE_WINDOW),streamType:mT(this.getAttribute(aA.STREAM_TYPE)),primaryColor:this.getAttribute(mJ.PRIMARY_COLOR),secondaryColor:this.getAttribute(mJ.SECONDARY_COLOR),accentColor:this.getAttribute(mJ.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(q=null==(r=this.mediaController)?void 0:r.querySelector("media-time-display"))&&"none"===getComputedStyle(q).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(mJ.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(aA.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(mJ.TITLE),videoTitle:null!=(a=this.getAttribute(mJ.VIDEO_TITLE))?a:this.getAttribute(mJ.TITLE),novolumepref:this.hasAttribute(mJ.NO_VOLUME_PREF),proudlyDisplayMuxBadge:this.hasAttribute(mJ.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:this.castReceiver,...t,extraSourceParams:this.extraSourceParams},n=m$`
  <style>
    ${(e=>{let{tokens:t}=e;return t.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""})(K)}
    ${mN}
  </style>
  ${o=K,m$`
  <media-theme
    template="${o.themeTemplate||!1}"
    defaultstreamtype="${null!=(l=o.defaultStreamType)&&l}"
    hotkeys="${(e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===mT(e.streamType)&&(t+=" noarrowleft noarrowright"),t})(o)||!1}"
    nohotkeys="${o.noHotKeys||!o.hasSrc||!1}"
    noautoseektolive="${!!(null!=(d=o.streamType)&&d.includes(tV.LIVE))&&0!==o.targetLiveWindow}"
    novolumepref="${o.novolumepref||!1}"
    disabled="${!o.hasSrc||o.isDialogOpen}"
    audio="${null!=(u=o.audio)&&u}"
    style="${null!=(c=function(e){let t="";return Object.entries(e).forEach(([e,i])=>{null!=i&&(t+=`${mh(e)}: ${i}; `)}),t?t.trim():void 0}({"--media-primary-color":o.primaryColor,"--media-secondary-color":o.secondaryColor,"--media-accent-color":o.accentColor}))&&c}"
    defaultsubtitles="${!o.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(h=o.forwardSeekOffset)&&h}"
    backwardseekoffset="${null!=(m=o.backwardSeekOffset)&&m}"
    playbackrates="${null!=(p=o.playbackRates)&&p}"
    defaultshowremainingtime="${null!=(E=o.defaultShowRemainingTime)&&E}"
    defaultduration="${null!=(b=o.defaultDuration)&&b}"
    hideduration="${null!=(f=o.hideDuration)&&f}"
    title="${null!=(g=o.title)&&g}"
    videotitle="${null!=(_=o.videoTitle)&&_}"
    proudlydisplaymuxbadge="${null!=(y=o.proudlyDisplayMuxBadge)&&y}"
    exportparts="${mK}"
    onclose="${o.onCloseErrorDialog}"
    onfocusin="${o.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(T=o.targetLiveWindow)&&T}"
      stream-type="${null!=(A=mT(o.streamType))&&A}"
      crossorigin="${null!=(k=o.crossOrigin)?k:""}"
      playsinline
      autoplay="${null!=(w=o.autoplay)&&w}"
      muted="${null!=(S=o.muted)&&S}"
      loop="${null!=(I=o.loop)&&I}"
      preload="${null!=(R=o.preload)&&R}"
      debug="${null!=(D=o.debug)&&D}"
      prefer-cmcd="${null!=(C=o.preferCmcd)&&C}"
      disable-tracking="${null!=(L=o.disableTracking)&&L}"
      disable-cookies="${null!=(M=o.disableCookies)&&M}"
      prefer-playback="${null!=(O=o.preferPlayback)&&O}"
      start-time="${null!=o.startTime&&o.startTime}"
      beacon-collection-domain="${null!=(x=o.beaconCollectionDomain)&&x}"
      player-init-time="${null!=(N=o.playerInitTime)&&N}"
      player-software-name="${null!=(P=o.playerSoftwareName)&&P}"
      player-software-version="${null!=(U=o.playerSoftwareVersion)&&U}"
      env-key="${null!=(B=o.envKey)&&B}"
      custom-domain="${null!=(H=o.customDomain)&&H}"
      src="${o.src?o.src:!!o.playbackId&&iF(o)}"
      cast-src="${o.src?o.src:!!o.playbackId&&iF(o)}"
      cast-receiver="${null!=(W=o.castReceiver)&&W}"
      drm-token="${null!=(F=null==(V=o.tokens)?void 0:V.drm)&&F}"
      exportparts="video"
    >
      ${o.storyboard?m$`<track label="thumbnails" default kind="metadata" src="${o.storyboard}" />`:m$``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!o.poster&&o.poster}"
        placeholdersrc="${null!=($=o.placeholder)&&$}"
      ></media-poster-image>
    </slot>
  </media-theme>
`}
`,s=this.shadowRoot,n.renderInto(s)},pr=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(m0.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},pn=function(){this.addEventListener("error",e=>{var t;let i=null==(t=this.media)?void 0:t.error;if(!(i instanceof tB)){let{message:e,code:t}=null!=i?i:{};i=new tB(e,t)}if(!(null!=i&&i.fatal)){mS(i),i.data&&mS(`${i.name} data:`,i.data);return}let a=mY(i,!1);a.message&&mR(a),mI(i),i.data&&mI(`${i.name} data:`,i.data),dI(this,m7,pi).call(this,{isDialogOpen:!0})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tB))return e;let r=mY(null==(i=this.media)?void 0:i.error,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}})},ps=function(){var e,t,i,a;let r=()=>dI(this,m7,pa).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},po=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=(e,t,i=!1)=>{this.streamType===tV.LIVE&&!this.secondaryColor&&this.offsetWidth>=800||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10))if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tV.LIVE&&(r=-2);let n=r-t;if(e.line===n&&!i)return;a.has(e)||a.set(e,e.line),e.line=n}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)})},n=()=>{var e,t;r(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(r6.USER_INACTIVE))&&t)},s=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",n)),null==(i=a)||i.addEventListener("cuechange",n),r(i,dk(this,m9))};s(),null==(e=this.textTracks)||e.addEventListener("change",s),null==(t=this.textTracks)||t.addEventListener("addtrack",s),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(r6.USER_INACTIVE))||t;dk(this,m9)!==a&&(dS(this,m9,a),r(i,dk(this,m9)))})};var pE=e=>{throw TypeError(e)},pb=(e,t,i)=>t.has(e)||pE("Cannot "+i),pf=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends pf{}globalThis.DocumentFragment=e}var pg,p_=class extends pf{},py=class{constructor(e,t={}){((e,t,i)=>t.has(e)?pE("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i))(this,pg),((e,t,i,a)=>(pb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i)))(this,pg,null==t?void 0:t.detail)}get detail(){let e,t;return pb(this,e=pg,"read from private field"),t?t.call(this):e.get(this)}initCustomEvent(){}};pg=new WeakMap;var pT={document:{createElement:function(e,t){return new p_}},DocumentFragment,customElements:{get(e){},define(e,t,i){},getName:e=>null,upgrade(e){},whenDefined:e=>Promise.resolve(p_)},CustomEvent:py,EventTarget:pf,HTMLElement:p_,HTMLVideoElement:class extends pf{}},pA="undefined"==typeof window||void 0===globalThis.customElements,pk=pA?pT:globalThis;pA?pT.document:globalThis.document,pk.customElements.get("mux-player")||(pk.customElements.define("mux-player",pp),pk.MuxPlayerElement=pp);var pw=parseInt(s.version)>=19,pS={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},pI=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{ref:t,...i}=e;return Object.entries(i).reduce((e,t)=>{let[i,a]=t,r=((e,t)=>{if(!(!pw&&"boolean"==typeof t&&!t)){let i,a;if(i=e,null!=(a=pS)&&i in a)return pS[e];if(void 0!==t)return/[A-Z]/.test(e)?e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())):e}})(i,a);if(!r)return e;let n=pw||"boolean"!=typeof a?a:"";return e[r]=n,e},{})};function pR(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var pD=Object.prototype.hasOwnProperty,pC=(e,t,i)=>!((e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!pD.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0})(t,e[i]),pL=(e,t,i)=>{e[i]=t},pM=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:pL,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:pC;return(0,s.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},pO=(()=>{try{return"3.5.1"}catch(e){}return"UNKNOWN"})(),px=(e,t,i)=>(0,s.useEffect)(()=>{let a=null==t?void 0:t.current;if(a&&i)return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i,e]),pN=s.forwardRef((e,t)=>{let{children:i,...a}=e;return s.createElement("mux-player",{suppressHydrationWarning:!0,...pI(a),ref:t},i)}),pP=pO,pU="mux-player-react",pB=s.forwardRef((e,t)=>{var i;let a=(0,s.useRef)(null),r=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return s.useCallback(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return e=>{let i=!1,a=t.map(t=>{let a=pR(t,e);return i||"function"!=typeof a||(i=!0),a});if(i)return()=>{for(let e=0;e<a.length;e++){let i=a[e];"function"==typeof i?i():pR(t[e],null)}}}}(...t),t)}(a,t),[n]=((e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:E,onPlaying:b,onTimeUpdate:f,onPause:g,onSeeking:_,onSeeked:y,onStalled:T,onSuspend:A,onEnded:k,onError:w,onCuePointChange:S,onChapterChange:I,metadata:R,tokens:D,paused:C,playbackId:L,playbackRates:M,currentTime:O,themeProps:x,extraSourceParams:N,castCustomData:P,_hlsConfig:U,...B}=t;return pM("playbackRates",M,e),pM("metadata",R,e),pM("extraSourceParams",N,e),pM("_hlsConfig",U,e),pM("themeProps",x,e),pM("tokens",D,e),pM("playbackId",L,e),pM("castCustomData",P,e),pM("paused",C,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&pC(e,t,i)),pM("currentTime",O,e,(e,t)=>{null!=t&&(e.currentTime=t)}),px("abort",e,i),px("canplay",e,a),px("canplaythrough",e,r),px("emptied",e,n),px("loadstart",e,s),px("loadeddata",e,o),px("loadedmetadata",e,l),px("progress",e,d),px("durationchange",e,u),px("volumechange",e,c),px("ratechange",e,h),px("resize",e,m),px("waiting",e,p),px("play",e,E),px("playing",e,b),px("timeupdate",e,f),px("pause",e,g),px("seeking",e,_),px("seeked",e,y),px("stalled",e,T),px("suspend",e,A),px("ended",e,k),px("error",e,w),px("cuepointchange",e,S),px("chapterchange",e,I),[B]})(a,e),[o]=(0,s.useState)(null!=(i=e.playerInitTime)?i:iW());return s.createElement(pN,{ref:r,defaultHiddenCaptions:e.defaultHiddenCaptions,playerSoftwareName:pU,playerSoftwareVersion:pP,playerInitTime:o,...n})})}}]);