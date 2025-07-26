"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{1774:(t,e,i)=>{i.r(e),i.d(e,{default:()=>c});var n=i(2115),s=i(9595);class l extends s.lB{static shadowRootOptions={...s.lB.shadowRootOptions};static getTemplateHTML=t=>{let{src:e,...i}=t;return s.lB.getTemplateHTML(i)};#t;attributeChangedCallback(t,e,i){"src"!==t&&super.attributeChangedCallback(t,e,i),"src"===t&&e!=i&&this.load()}async load(){if(this.#t)this.api.attachSource(this.src);else{this.#t=!0;let t=await Promise.all([i.e(465),i.e(641)]).then(i.bind(i,7095));this.api=t.MediaPlayer().create(),this.api.initialize(this.nativeEl,this.src,this.autoplay)}}}globalThis.customElements&&!globalThis.customElements.get("dash-video")&&globalThis.customElements.define("dash-video",l);var r=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),a={className:"class",htmlFor:"for"};function o(t){return t.toLowerCase()}function d(t){return"boolean"==typeof t?t?"":void 0:"function"==typeof t?void 0:"object"!=typeof t||null===t?t:void 0}function u(t,e,i){var n,s;t[e]=i,null==i&&e in(null!=(s=null==(n=globalThis.HTMLElement)?void 0:n.prototype)?s:{})&&t.removeAttribute(e)}var c=function(t){let{react:e,tagName:i,elementClass:n,events:s,displayName:l,defaultProps:c,toAttributeName:h=o,toAttributeValue:p=d}=t,f=Number.parseInt(e.version)>=19,b=e.forwardRef((t,l)=>{var o,b,m,v,g;let y=e.useRef(null),w=e.useRef(new Map),E={},M={},k={},T={};for(let[e,i]of Object.entries(t)){if(r.has(e)){k[e]=i;continue}let t=h(null!=(m=a[e])?m:e);if(e in n.prototype&&!(e in(null!=(v=null==(o=globalThis.HTMLElement)?void 0:o.prototype)?v:{}))&&!(null==(b=n.observedAttributes)?void 0:b.some(e=>e===t))){T[e]=i;continue}if(e.startsWith("on")){E[e]=i;continue}let s=p(i);t&&null!=s&&(M[t]=String(s),f||(k[t]=s)),t&&f&&(s!==d(i)?k[t]=s:k[t]=i)}if("undefined"!=typeof window){for(let t in E){let i=E[t],n=t.endsWith("Capture"),l=(null!=(g=null==s?void 0:s[t])?g:t.slice(2).toLowerCase()).slice(0,n?-7:void 0);e.useLayoutEffect(()=>{let t=null==y?void 0:y.current;if(t&&"function"==typeof i)return t.addEventListener(l,i,n),()=>{t.removeEventListener(l,i,n)}},[null==y?void 0:y.current,i])}e.useLayoutEffect(()=>{if(null===y.current)return;let t=new Map;for(let e in T)u(y.current,e,T[e]),w.current.delete(e),t.set(e,T[e]);for(let[t,e]of w.current)u(y.current,t,void 0);w.current=t})}if("undefined"==typeof window&&(null==n?void 0:n.getTemplateHTML)&&(null==n?void 0:n.shadowRootOptions)){let{mode:i,delegatesFocus:s}=n.shadowRootOptions;k.children=[e.createElement("template",{shadowrootmode:i,shadowrootdelegatesfocus:s,dangerouslySetInnerHTML:{__html:n.getTemplateHTML(M,t)}}),k.children]}return e.createElement(i,{...c,...k,ref:e.useCallback(t=>{y.current=t,"function"==typeof l?l(t):null!==l&&(l.current=t)},[l])})});return b.displayName=null!=l?l:n.name,b}({react:n,tagName:"dash-video",elementClass:l,toAttributeName:t=>"muted"===t?"":"defaultMuted"===t?"muted":o(t)})},9595:(t,e,i)=>{i.d(e,{lB:()=>d});let n=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],s=["autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"];function l(t){return`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${o(t)}></audio>
    </slot>
    <slot></slot>
  `}function r(t){return`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${o(t)}></video>
    </slot>
    <slot></slot>
  `}function a(t,{tag:e,is:i}){let a=globalThis.document?.createElement?.(e,{is:i}),o=a?function(t){let e=[];for(let i=Object.getPrototypeOf(t);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i)){let t=Object.getOwnPropertyNames(i);e.push(...t)}return e}(a):[];return class d extends t{static getTemplateHTML=e.endsWith("audio")?l:r;static shadowRootOptions={mode:"open"};static Events=n;static #e=!1;static get observedAttributes(){return d.#i(),[...a?.constructor?.observedAttributes??[],...s]}static #i(){if(this.#e)return;this.#e=!0;let t=new Set(this.observedAttributes);for(let e of(t.delete("muted"),o))if(!(e in this.prototype))if("function"==typeof a[e])this.prototype[e]=function(...t){return this.#n(),(()=>{if(this.call)return this.call(e,...t);let i=this.nativeEl?.[e];return i?.apply(this.nativeEl,t)})()};else{let i={get(){this.#n();let i=e.toLowerCase();if(t.has(i)){let t=this.getAttribute(i);return null!==t&&(""===t||t)}return this.get?.(e)??this.nativeEl?.[e]}};e!==e.toUpperCase()&&(i.set=function(i){this.#n();let n=e.toLowerCase();return t.has(n)?void(!0===i||!1===i||null==i?this.toggleAttribute(n,!!i):this.setAttribute(n,i)):this.set?void this.set(e,i):void(this.nativeEl&&(this.nativeEl[e]=i))}),Object.defineProperty(this.prototype,e,i)}}#s=!1;#l=null;#r=new Map;#a;get;set;call;get nativeEl(){return this.#n(),this.#l??this.querySelector(":scope > [slot=media]")??this.querySelector(e)??this.shadowRoot?.querySelector(e)??null}set nativeEl(t){this.#l=t}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(t){this.toggleAttribute("muted",t)}get src(){return this.getAttribute("src")}set src(t){this.setAttribute("src",`${t}`)}get preload(){return this.getAttribute("preload")??this.nativeEl?.preload}set preload(t){this.setAttribute("preload",`${t}`)}#n(){this.#s||(this.#s=!0,this.init())}init(){if(!this.shadowRoot){this.attachShadow({mode:"open"});let t=function(t){let e={};for(let i of t)e[i.name]=i.value;return e}(this.attributes);i&&(t.is=i),e&&(t.part=e),this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t)}for(let t of(this.nativeEl.muted=this.hasAttribute("muted"),o))this.#o(t);for(let t of(this.#a=new MutationObserver(this.#d.bind(this)),this.shadowRoot.addEventListener("slotchange",()=>this.#u()),this.#u(),this.constructor.Events))this.shadowRoot.addEventListener(t,this,!0)}handleEvent(t){t.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(t.type,{detail:t.detail}))}#u(){let t=new Map(this.#r),e=this.shadowRoot?.querySelector("slot:not([name])");(e?.assignedElements({flatten:!0}).filter(t=>["track","source"].includes(t.localName))).forEach(e=>{t.delete(e);let i=this.#r.get(e);i||(i=e.cloneNode(),this.#r.set(e,i),this.#a?.observe(e,{attributes:!0})),this.nativeEl?.append(i),this.#c(i)}),t.forEach((t,e)=>{t.remove(),this.#r.delete(e)})}#d(t){for(let e of t)if("attributes"===e.type){let{target:t,attributeName:i}=e,n=this.#r.get(t);n&&i&&(n.setAttribute(i,t.getAttribute(i)??""),this.#c(n))}}#c(t){t&&"track"===t.localName&&t.default&&("chapters"===t.kind||"metadata"===t.kind)&&"disabled"===t.track.mode&&(t.track.mode="hidden")}#o(t){if(Object.prototype.hasOwnProperty.call(this,t)){let e=this[t];delete this[t],this[t]=e}}attributeChangedCallback(t,e,i){this.#n(),this.#h(t,e,i)}#h(t,e,i){!["id","class"].includes(t)&&(!d.observedAttributes.includes(t)&&this.constructor.observedAttributes.includes(t)||(null===i?this.nativeEl?.removeAttribute(t):this.nativeEl?.getAttribute(t)!==i&&this.nativeEl?.setAttribute(t,i)))}connectedCallback(){this.#n()}}}function o(t){let e="";for(let i in t){if(!s.includes(i))continue;let n=t[i];""===n?e+=` ${i}`:e+=` ${i}="${n}"`}return e}let d=a(globalThis.HTMLElement??class{},{tag:"video"});a(globalThis.HTMLElement??class{},{tag:"audio"})}}]);