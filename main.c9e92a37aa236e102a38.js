(()=>{var __webpack_modules__={107:(module,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(756);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(484);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(615);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(519), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, \`@font-face{font-family:Urbanist;src:url(\${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype")}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}:root{--accent-color: #faf9f6;--toggle-primary: #64748b;--toggle-secondary: #e2e8f0;--toggle-checked-primary: #f59e0b;--toggle-checked-secondary: #fde68a;--font-size-xl: 2.8rem;--font-size-l: 2.4rem;--font-size-m: 1.6rem;--font-size-s: 1.2rem;--main-padding-block: 30px;--main-padding-inline: max(20px, 5%);--scrollbar-thickness: 7.5px;--toggle-height: 50px}.scrollbar::-webkit-scrollbar{width:var(--scrollbar-thickness);height:var(--scrollbar-thickness)}.scrollbar::-webkit-scrollbar-track{border-radius:calc(var(--scrollbar-thickness) / 2);background-color:#f5f5f5}*::-webkit-scrollbar-track:hover{background-color:#e5e5e5}.scrollbar::-webkit-scrollbar-thumb{border-radius:calc(var(--scrollbar-thickness) / 2);background-color:#d4d4d4}.scrollbar::-webkit-scrollbar-thumb:hover{background-color:#a3a3a3}.scrollbar::-webkit-scrollbar-thumb:active{background-color:#737373}#body{background:#00000080;background-size:cover;background-position:center}#body *:not(footer *){font-family:Urbanist,sans-serif;color:var(--accent-color)}header{display:flex;justify-content:space-between;align-items:center;gap:25px;padding:var(--main-padding-block) var(--main-padding-inline);position:sticky;top:0;left:0;background:transparent;transition:background .2s ease-in-out}header.shadow{background:#000000bf}form{display:flex;align-items:center;width:100%;height:45px}.search-input{width:clamp(140px,50%,300px);height:100%;background:transparent;border:none;border-bottom:2px solid var(--accent-color);outline:none;font-size:var(--font-size-m);letter-spacing:.1ch}.search-input::placeholder{color:var(--accent-color)}.search-btn{background:transparent;border:none;border-bottom:2px solid var(--accent-color);outline-color:#fff;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:7.5px;height:100%;aspect-ratio:1/1}.search-icon{width:25px;aspect-ratio:1/1}.toggle{width:min-content}#units{opacity:0;position:absolute}label[for=units]{position:relative;display:flex;align-items:center;cursor:pointer}#units+label:before{content:"";width:var(--toggle-height);height:calc(var(--toggle-height) / 2);border-radius:calc(var(--toggle-height) / 2);background-color:var(--toggle-secondary);transition:background-color .2s ease-in-out}#units+label:after{display:flex;justify-content:center;align-items:center;position:absolute;content:"\\\\b0 C";font-size:calc(var(--toggle-height) / 4);font-weight:700;left:calc(var(--toggle-height) * .05);height:calc(var(--toggle-height) * .45);aspect-ratio:1/1;border-radius:calc(var(--toggle-height) / 2);background-color:var(--toggle-primary);color:#fff;transition:background-color,transform,scale;transition-duration:.2s;transition-timing-function:ease-in-out}#units:focus-visible+label:after,#units:checked:focus-visible+label:after{scale:1.25}#units:checked+label:before{background-color:var(--toggle-checked-secondary)}#units:checked+label:after{content:"\\\\b0 F";transform:translate(100%);background-color:var(--toggle-checked-primary)}main{padding-inline:var(--main-padding-inline);display:grid;grid-template-columns:repeat(3,auto);grid-template-rows:1fr auto 1fr;row-gap:10px;flex-grow:1}.error-msg{--error-msg-font-size: var(--font-size-s);grid-area:1 / 1 / 2 / 2;font-size:var(--error-msg-font-size);min-height:calc(var(--error-msg-font-size) * 3.5);max-width:375px}section.info{grid-area:2 / 1 / 3 / 2;display:flex;flex-direction:column;justify-content:center}.current-location,.current-temp{font-size:var(--font-size-xl)}.current-day,.current-time{font-size:var(--font-size-m)}.current-temp{font-weight:700;margin-top:20px}.current-icon{width:80px;aspect-ratio:1/1}.current-condition{font-size:var(--font-size-xl);font-weight:700}ul.detail{grid-area:2 / 3 / 3 / 4;width:fit-content;justify-self:flex-end;display:flex;flex-direction:column;justify-content:center;gap:15px}.detail-item{display:grid;grid-template:auto auto / auto 1fr;gap:0 10px;align-items:center}.detail-icon{width:30px;grid-row:1 / -1}.detail-title{font-weight:400;font-size:var(--font-size-m)}.detail-text{grid-area:2 / 2 / 3 / 3;font-size:var(--font-size-l);width:125px}section.forecast{padding:calc(var(--main-padding-block) / 2) var(--main-padding-inline) var(--main-padding-block)}.btn-container{width:fit-content;display:flex;gap:25px}.forecast-btn{font-size:var(--font-size-l);background:transparent;border:2px solid transparent;border-bottom-color:transparent;padding-bottom:5px;transition:border-bottom-color .2s ease-in-out;cursor:pointer}.forecast-btn:disabled{border-bottom-color:var(--accent-color);cursor:default}.forecast-list{list-style:none;display:flex;justify-content:flex-start;gap:max(calc(100% / 12),30px);padding-block:20px;overflow-x:scroll;scroll-snap-type:x mandatory}.forecast-item{min-width:50px;min-height:100px;scroll-snap-align:start}.forecast-title{font-size:var(--font-size-m);font-weight:400;white-space:nowrap}.forecast-icon{width:40px;aspect-ratio:1/1}.forecast-temp{font-size:var(--font-size-m);font-weight:700;white-space:nowrap}.forecast-temp-min{font-size:var(--font-size-s)}.overlay{position:fixed;inset:0;height:100%;width:100%;background:#00000080;display:none;align-items:center;justify-content:center;gap:15px;p{font-size:var(--font-size-xl)}}.loading-icon{width:var(--font-size-xl);animation:spin 1s linear infinite}@media (max-width: 768px){main{grid-template-columns:auto;grid-template-rows:repeat(3,auto)}ul.detail{grid-area:3 / 1 / 4 / 2;width:100%;padding-block:30px}.detail-item{display:flex}.detail-text{margin-left:auto;text-align:end;font-size:var(--font-size-m)}}
\`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,WACE,oBAAa,CACb,8DACF,CAEA,gBACE,GACE,mBACF,CAEA,GACE,wBACF,CACF,CAEA,MACE,uBAAgB,CAChB,yBAAkB,CAClB,2BAAoB,CACpB,iCAA0B,CAC1B,mCAA4B,CAC5B,sBAAgB,CAChB,qBAAe,CACf,qBAAe,CACf,qBAAe,CACf,0BAAsB,CACtB,oCAAiC,CACjC,4BAAuB,CACvB,qBACF,CAIA,8BACE,gCAAW,CACX,iCACF,CAEA,oCACE,kDAAiD,CACjD,wBACF,CAEA,iCACE,wBACF,CAEA,oCACE,kDAAiD,CACjD,wBACF,CAEA,0CACE,wBACF,CAEA,2CACE,wBACF,CAEA,MACE,oBAAY,CACZ,qBAAiB,CACjB,0BACF,CAEA,sBACE,+BAAyB,CACzB,yBACF,CAIA,OACE,YAAS,CACT,6BAAiB,CACjB,kBAAa,CACb,QAAK,CACL,4DAAuC,CACvC,eAAU,CACV,KAAK,CACL,MAAM,CACN,sBAAY,CACZ,qCACF,CAEA,cACE,oBACF,CAEA,KACE,YAAS,CACT,kBAAa,CACb,UAAO,CACP,WACF,CAEA,cACE,4BAAyB,CACzB,WAAQ,CACR,sBAAY,CACZ,WAAQ,CACR,2CAA6B,CAC7B,YAAS,CACT,4BAAe,CACf,mBACF,CAEA,2BACE,yBACF,CAEA,YACE,sBAAY,CACZ,WAAQ,CACR,2CAA6B,CAC7B,kBAAe,CACf,cAAQ,CACR,YAAS,CACT,sBAAiB,CACjB,kBAAa,CAxHf,aAyHW,CACT,WAAQ,CACR,gBACF,CAEA,aACE,UAAO,CACP,gBACF,CAIA,QACE,iBACF,CAEA,OACE,SAAS,CACT,iBACF,CAEA,iBACE,iBAAU,CACV,YAAS,CACT,kBAAa,CACb,cACF,CAEA,oBACE,UAAS,CACT,0BAAW,CACX,qCAAoC,CACpC,4CAA2C,CAC3C,wCAAsB,CACtB,2CACF,CAEA,mBACE,YAAS,CACT,sBAAiB,CACjB,kBAAa,CACb,iBAAU,CACV,eAAS,CACT,wCAAuC,CACvC,eAAa,CACb,qCAAkC,CAClC,uCAAoC,CACpC,gBAAgB,CAChB,4CAA2C,CAC3C,sCAAsB,CACtB,UAAO,CACP,2CAAyC,CACzC,uBAAqB,CACrB,sCACF,CAEA,0EAEE,UACF,CAEA,4BACE,gDACF,CAEA,2BACE,eAAS,CACT,yBAAsB,CACtB,8CACF,CAIA,KACE,yCAAoB,CACpB,YAAS,CACT,oCAAiC,CACjC,+BAA6B,CAC7B,YAAS,CACT,WACF,CAEA,WACE,yCAA2B,CAC3B,uBAAuB,CACvB,oCAAe,CACf,iDAA8C,CAC9C,eACF,CAIA,aACE,uBAAuB,CACvB,YAAS,CACT,qBAAgB,CAChB,sBACF,CAEA,gCAEE,6BACF,CAEA,2BAEE,4BACF,CAEA,cACE,eAAa,CACb,eACF,CAEA,cACE,UAAO,CACP,gBACF,CAEA,mBACE,6BAAe,CACf,eACF,CAIA,UACE,uBAAuB,CACvB,iBAAO,CACP,qBAAc,CACd,YAAS,CACT,qBAAgB,CAChB,sBAAiB,CACjB,QACF,CAEA,aACE,YAAS,CACT,kCAAgC,CAChC,UAAO,CACP,kBACF,CAEA,aACE,UAAO,CACP,eACF,CAEA,cACE,eAAa,CACb,4BACF,CAEA,aACE,uBAAuB,CACvB,4BAAe,CACf,WACF,CAIA,iBACE,gGAEF,CAEA,eACE,iBAAO,CACP,YAAS,CACT,QACF,CAEA,cACE,4BAAe,CACf,sBAAY,CACZ,4BAAkB,CAClB,+BAAqB,CACrB,kBAAgB,CAChB,8CAAqC,CACrC,cACF,CAEA,uBACE,uCAAyB,CACzB,cACF,CAEA,eACE,eAAY,CACZ,YAAS,CACT,0BAAiB,CACjB,6BAA0B,CAC1B,kBAAe,CACf,iBAAY,CACZ,4BACF,CAEA,eACE,cAAW,CACX,gBAAY,CACZ,uBACF,CAEA,gBACE,4BAAe,CACf,eAAa,CACb,kBACF,CAEA,eACE,UAAO,CACP,gBACF,CAEA,eACE,4BAAe,CACf,eAAa,CACb,kBACF,CAEA,mBACE,4BACF,CAIA,SACE,cAAU,CACV,OAAK,CAIL,WAAQ,CACR,UAAO,CACP,oBAAY,CACZ,YAAS,CACT,kBAAa,CACb,sBAAiB,CACjB,QAAK,CAEL,EACE,6BACF,CACF,CAEA,cACE,yBAAW,CACX,iCACF,CAEA,0BACE,KACE,0BAAuB,CACvB,iCACF,CAEA,UACE,uBAAuB,CACvB,UAAO,CACP,kBACF,CAEA,aACE,YACF,CAEA,aACE,gBAAa,CACb,cAAY,CACZ,4BACF,CACF","sourcesContent":["@font-face {\\n  font-family: Urbanist;\\n  src: url(fonts/Urbanist/Urbanist-VariableFont_wght.ttf) format(\\"truetype\\");\\n}\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n:root {\\n  --accent-color: #faf9f6;\\n  --toggle-primary: #64748b;\\n  --toggle-secondary: #e2e8f0;\\n  --toggle-checked-primary: #f59e0b;\\n  --toggle-checked-secondary: #fde68a;\\n  --font-size-xl: 2.8rem;\\n  --font-size-l: 2.4rem;\\n  --font-size-m: 1.6rem;\\n  --font-size-s: 1.2rem;\\n  --main-padding-block: 30px;\\n  --main-padding-inline: max(20px, 5%);\\n  --scrollbar-thickness: 7.5px;\\n  --toggle-height: 50px;\\n}\\n\\n/* Scrollbar */\\n\\n.scrollbar::-webkit-scrollbar {\\n  width: var(--scrollbar-thickness);\\n  height: var(--scrollbar-thickness);\\n}\\n\\n.scrollbar::-webkit-scrollbar-track {\\n  border-radius: calc(var(--scrollbar-thickness) / 2);\\n  background-color: #f5f5f5;\\n}\\n\\n*::-webkit-scrollbar-track:hover {\\n  background-color: #e5e5e5;\\n}\\n\\n.scrollbar::-webkit-scrollbar-thumb {\\n  border-radius: calc(var(--scrollbar-thickness) / 2);\\n  background-color: #d4d4d4;\\n}\\n\\n.scrollbar::-webkit-scrollbar-thumb:hover {\\n  background-color: #a3a3a3;\\n}\\n\\n.scrollbar::-webkit-scrollbar-thumb:active {\\n  background-color: #737373;\\n}\\n\\n#body {\\n  background: rgba(0, 0, 0, 0.5);\\n  background-size: cover;\\n  background-position: center;\\n}\\n\\n#body *:not(footer *) {\\n  font-family: \\"Urbanist\\", sans-serif;\\n  color: var(--accent-color);\\n}\\n\\n/* Header */\\n\\nheader {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  gap: 25px;\\n  padding: var(--main-padding-block) var(--main-padding-inline);\\n  position: sticky;\\n  top: 0;\\n  left: 0;\\n  background: transparent;\\n  transition: background 0.2s ease-in-out;\\n}\\n\\nheader.shadow {\\n  background: rgba(0, 0, 0, 0.75);\\n}\\n\\nform {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 45px;\\n}\\n\\n.search-input {\\n  width: clamp(140px, 50%, 300px);\\n  height: 100%;\\n  background: transparent;\\n  border: none;\\n  border-bottom: 2px solid var(--accent-color);\\n  outline: none;\\n  font-size: var(--font-size-m);\\n  letter-spacing: 0.1ch;\\n}\\n\\n.search-input::placeholder {\\n  color: var(--accent-color);\\n}\\n\\n.search-btn {\\n  background: transparent;\\n  border: none;\\n  border-bottom: 2px solid var(--accent-color);\\n  outline-color: white;\\n  cursor: pointer;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 7.5px;\\n  height: 100%;\\n  aspect-ratio: 1/1;\\n}\\n\\n.search-icon {\\n  width: 25px;\\n  aspect-ratio: 1/1;\\n}\\n\\n/* Toggle */\\n\\n.toggle {\\n  width: min-content;\\n}\\n\\n#units {\\n  opacity: 0;\\n  position: absolute;\\n}\\n\\nlabel[for=\\"units\\"] {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n\\n#units + label:before {\\n  content: \\"\\";\\n  width: var(--toggle-height);\\n  height: calc(var(--toggle-height) / 2);\\n  border-radius: calc(var(--toggle-height) / 2);\\n  background-color: var(--toggle-secondary);\\n  transition: background-color 0.2s ease-in-out;\\n}\\n\\n#units + label::after {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  content: \\"\\\\00B0 C\\";\\n  font-size: calc(var(--toggle-height) / 4);\\n  font-weight: bold;\\n  left: calc(var(--toggle-height) * 0.05);\\n  height: calc(var(--toggle-height) * 0.45);\\n  aspect-ratio: 1/1;\\n  border-radius: calc(var(--toggle-height) / 2);\\n  background-color: var(--toggle-primary);\\n  color: white;\\n  transition: background-color, transform, scale;\\n  transition-duration: 0.2s;\\n  transition-timing-function: ease-in-out;\\n}\\n\\n#units:focus-visible + label::after,\\n#units:checked:focus-visible + label::after {\\n  scale: 1.25;\\n}\\n\\n#units:checked + label::before {\\n  background-color: var(--toggle-checked-secondary);\\n}\\n\\n#units:checked + label::after {\\n  content: \\"\\\\00B0 F\\";\\n  transform: translateX(100%);\\n  background-color: var(--toggle-checked-primary);\\n}\\n\\n/* Main */\\n\\nmain {\\n  padding-inline: var(--main-padding-inline);\\n  display: grid;\\n  grid-template-columns: repeat(3, auto);\\n  grid-template-rows: 1fr auto 1fr;\\n  row-gap: 10px;\\n  flex-grow: 1;\\n}\\n\\n.error-msg {\\n  --error-msg-font-size: var(--font-size-s);\\n  grid-area: 1 / 1 / 2 / 2;\\n  font-size: var(--error-msg-font-size);\\n  min-height: calc(var(--error-msg-font-size) * 3.5);\\n  max-width: 375px;\\n}\\n\\n/* Info */\\n\\nsection.info {\\n  grid-area: 2 / 1 / 3 / 2;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n}\\n\\n.current-location,\\n.current-temp {\\n  font-size: var(--font-size-xl);\\n}\\n\\n.current-day,\\n.current-time {\\n  font-size: var(--font-size-m);\\n}\\n\\n.current-temp {\\n  font-weight: bold;\\n  margin-top: 20px;\\n}\\n\\n.current-icon {\\n  width: 80px;\\n  aspect-ratio: 1/1;\\n}\\n\\n.current-condition {\\n  font-size: var(--font-size-xl);\\n  font-weight: bold;\\n}\\n\\n/* Detail */\\n\\nul.detail {\\n  grid-area: 2 / 3 / 3 / 4;\\n  width: fit-content;\\n  justify-self: flex-end;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  gap: 15px;\\n}\\n\\n.detail-item {\\n  display: grid;\\n  grid-template: auto auto / auto 1fr;\\n  gap: 0 10px;\\n  align-items: center;\\n}\\n\\n.detail-icon {\\n  width: 30px;\\n  grid-row: 1 / -1;\\n}\\n\\n.detail-title {\\n  font-weight: normal;\\n  font-size: var(--font-size-m);\\n}\\n\\n.detail-text {\\n  grid-area: 2 / 2 / 3 / 3;\\n  font-size: var(--font-size-l);\\n  width: 125px;\\n}\\n\\n/* Forecast */\\n\\nsection.forecast {\\n  padding: calc(var(--main-padding-block) / 2) var(--main-padding-inline)\\n    var(--main-padding-block);\\n}\\n\\n.btn-container {\\n  width: fit-content;\\n  display: flex;\\n  gap: 25px;\\n}\\n\\n.forecast-btn {\\n  font-size: var(--font-size-l);\\n  background: transparent;\\n  border: 2px solid transparent;\\n  border-bottom-color: transparent;\\n  padding-bottom: 5px;\\n  transition: border-bottom-color 0.2s ease-in-out;\\n  cursor: pointer;\\n}\\n\\n.forecast-btn:disabled {\\n  border-bottom-color: var(--accent-color);\\n  cursor: default;\\n}\\n\\n.forecast-list {\\n  list-style: none;\\n  display: flex;\\n  justify-content: flex-start;\\n  gap: max(calc(100% / 12), 30px);\\n  padding-block: 20px;\\n  overflow-x: scroll;\\n  scroll-snap-type: x mandatory;\\n}\\n\\n.forecast-item {\\n  min-width: 50px;\\n  min-height: 100px;\\n  scroll-snap-align: start;\\n}\\n\\n.forecast-title {\\n  font-size: var(--font-size-m);\\n  font-weight: normal;\\n  white-space: nowrap;\\n}\\n\\n.forecast-icon {\\n  width: 40px;\\n  aspect-ratio: 1/1;\\n}\\n\\n.forecast-temp {\\n  font-size: var(--font-size-m);\\n  font-weight: bold;\\n  white-space: nowrap;\\n}\\n\\n.forecast-temp-min {\\n  font-size: var(--font-size-s);\\n}\\n\\n/* Overlay */\\n\\n.overlay {\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 0;\\n  right: 0;\\n  height: 100%;\\n  width: 100%;\\n  background: rgba(0, 0, 0, 0.5);\\n  display: none;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 15px;\\n\\n  p {\\n    font-size: var(--font-size-xl);\\n  }\\n}\\n\\n.loading-icon {\\n  width: var(--font-size-xl);\\n  animation: spin 1s linear infinite;\\n}\\n\\n@media (max-width: 768px) {\\n  main {\\n    grid-template-columns: auto;\\n    grid-template-rows: repeat(3, auto);\\n  }\\n\\n  ul.detail {\\n    grid-area: 3 / 1 / 4 / 2;\\n    width: 100%;\\n    padding-block: 30px;\\n  }\\n\\n  .detail-item {\\n    display: flex;\\n  }\\n\\n  .detail-text {\\n    margin-left: auto;\\n    text-align: end;\\n    font-size: var(--font-size-m);\\n  }\\n}\\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RywrQkFBK0Isb0JBQW9CLFdBQVcsY0FBYyxZQUFZLGFBQWEsaUJBQWlCLGdCQUFnQixtQ0FBbUMsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxTQUFTLHFDQUFxQyxLQUFLLEdBQUcsbUJBQW1CLCtCQUErQix1Q0FBdUMsR0FBRywrQkFBK0IsVUFBVSxrQ0FBa0MsMENBQTBDLEtBQUssaUJBQWlCLCtCQUErQixrQkFBa0IsMEJBQTBCLEtBQUssb0JBQW9CLG9CQUFvQixLQUFLLG9CQUFvQix3QkFBd0Isc0JBQXNCLG9DQUFvQyxLQUFLLEdBQUcscUJBQXFCO0FBQzM0VDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz81YzZkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmb250cy9VcmJhbmlzdC9VcmJhbmlzdC1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2V7Zm9udC1mYW1pbHk6VXJiYW5pc3Q7c3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKX1Aa2V5ZnJhbWVzIHNwaW57MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3t0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fTpyb290ey0tYWNjZW50LWNvbG9yOiAjZmFmOWY2Oy0tdG9nZ2xlLXByaW1hcnk6ICM2NDc0OGI7LS10b2dnbGUtc2Vjb25kYXJ5OiAjZTJlOGYwOy0tdG9nZ2xlLWNoZWNrZWQtcHJpbWFyeTogI2Y1OWUwYjstLXRvZ2dsZS1jaGVja2VkLXNlY29uZGFyeTogI2ZkZTY4YTstLWZvbnQtc2l6ZS14bDogMi44cmVtOy0tZm9udC1zaXplLWw6IDIuNHJlbTstLWZvbnQtc2l6ZS1tOiAxLjZyZW07LS1mb250LXNpemUtczogMS4ycmVtOy0tbWFpbi1wYWRkaW5nLWJsb2NrOiAzMHB4Oy0tbWFpbi1wYWRkaW5nLWlubGluZTogbWF4KDIwcHgsIDUlKTstLXNjcm9sbGJhci10aGlja25lc3M6IDcuNXB4Oy0tdG9nZ2xlLWhlaWdodDogNTBweH0uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDp2YXIoLS1zY3JvbGxiYXItdGhpY2tuZXNzKTtoZWlnaHQ6dmFyKC0tc2Nyb2xsYmFyLXRoaWNrbmVzcyl9LnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7Ym9yZGVyLXJhZGl1czpjYWxjKHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpIC8gMik7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fSo6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U1ZTVlNX0uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOmNhbGModmFyKC0tc2Nyb2xsYmFyLXRoaWNrbmVzcykgLyAyKTtiYWNrZ3JvdW5kLWNvbG9yOiNkNGQ0ZDR9LnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYTNhM2EzfS5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiM3MzczNzN9I2JvZHl7YmFja2dyb3VuZDojMDAwMDAwODA7YmFja2dyb3VuZC1zaXplOmNvdmVyO2JhY2tncm91bmQtcG9zaXRpb246Y2VudGVyfSNib2R5ICo6bm90KGZvb3RlciAqKXtmb250LWZhbWlseTpVcmJhbmlzdCxzYW5zLXNlcmlmO2NvbG9yOnZhcigtLWFjY2VudC1jb2xvcil9aGVhZGVye2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjI1cHg7cGFkZGluZzp2YXIoLS1tYWluLXBhZGRpbmctYmxvY2spIHZhcigtLW1haW4tcGFkZGluZy1pbmxpbmUpO3Bvc2l0aW9uOnN0aWNreTt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmJhY2tncm91bmQgLjJzIGVhc2UtaW4tb3V0fWhlYWRlci5zaGFkb3d7YmFja2dyb3VuZDojMDAwMDAwYmZ9Zm9ybXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3dpZHRoOjEwMCU7aGVpZ2h0OjQ1cHh9LnNlYXJjaC1pbnB1dHt3aWR0aDpjbGFtcCgxNDBweCw1MCUsMzAwcHgpO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtvdXRsaW5lOm5vbmU7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS1tKTtsZXR0ZXItc3BhY2luZzouMWNofS5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVye2NvbG9yOnZhcigtLWFjY2VudC1jb2xvcil9LnNlYXJjaC1idG57YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO291dGxpbmUtY29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzo3LjVweDtoZWlnaHQ6MTAwJTthc3BlY3QtcmF0aW86MS8xfS5zZWFyY2gtaWNvbnt3aWR0aDoyNXB4O2FzcGVjdC1yYXRpbzoxLzF9LnRvZ2dsZXt3aWR0aDptaW4tY29udGVudH0jdW5pdHN7b3BhY2l0eTowO3Bvc2l0aW9uOmFic29sdXRlfWxhYmVsW2Zvcj11bml0c117cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcn0jdW5pdHMrbGFiZWw6YmVmb3Jle2NvbnRlbnQ6XCJcIjt3aWR0aDp2YXIoLS10b2dnbGUtaGVpZ2h0KTtoZWlnaHQ6Y2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAvIDIpO2JvcmRlci1yYWRpdXM6Y2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAvIDIpO2JhY2tncm91bmQtY29sb3I6dmFyKC0tdG9nZ2xlLXNlY29uZGFyeSk7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlLWluLW91dH0jdW5pdHMrbGFiZWw6YWZ0ZXJ7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XCJcXFxcYjAgQ1wiO2ZvbnQtc2l6ZTpjYWxjKHZhcigtLXRvZ2dsZS1oZWlnaHQpIC8gNCk7Zm9udC13ZWlnaHQ6NzAwO2xlZnQ6Y2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAqIC4wNSk7aGVpZ2h0OmNhbGModmFyKC0tdG9nZ2xlLWhlaWdodCkgKiAuNDUpO2FzcGVjdC1yYXRpbzoxLzE7Ym9yZGVyLXJhZGl1czpjYWxjKHZhcigtLXRvZ2dsZS1oZWlnaHQpIC8gMik7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10b2dnbGUtcHJpbWFyeSk7Y29sb3I6I2ZmZjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IsdHJhbnNmb3JtLHNjYWxlO3RyYW5zaXRpb24tZHVyYXRpb246LjJzO3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0fSN1bml0czpmb2N1cy12aXNpYmxlK2xhYmVsOmFmdGVyLCN1bml0czpjaGVja2VkOmZvY3VzLXZpc2libGUrbGFiZWw6YWZ0ZXJ7c2NhbGU6MS4yNX0jdW5pdHM6Y2hlY2tlZCtsYWJlbDpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10b2dnbGUtY2hlY2tlZC1zZWNvbmRhcnkpfSN1bml0czpjaGVja2VkK2xhYmVsOmFmdGVye2NvbnRlbnQ6XCJcXFxcYjAgRlwiO3RyYW5zZm9ybTp0cmFuc2xhdGUoMTAwJSk7YmFja2dyb3VuZC1jb2xvcjp2YXIoLS10b2dnbGUtY2hlY2tlZC1wcmltYXJ5KX1tYWlue3BhZGRpbmctaW5saW5lOnZhcigtLW1haW4tcGFkZGluZy1pbmxpbmUpO2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDMsYXV0byk7Z3JpZC10ZW1wbGF0ZS1yb3dzOjFmciBhdXRvIDFmcjtyb3ctZ2FwOjEwcHg7ZmxleC1ncm93OjF9LmVycm9yLW1zZ3stLWVycm9yLW1zZy1mb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zKTtncmlkLWFyZWE6MSAvIDEgLyAyIC8gMjtmb250LXNpemU6dmFyKC0tZXJyb3ItbXNnLWZvbnQtc2l6ZSk7bWluLWhlaWdodDpjYWxjKHZhcigtLWVycm9yLW1zZy1mb250LXNpemUpICogMy41KTttYXgtd2lkdGg6Mzc1cHh9c2VjdGlvbi5pbmZve2dyaWQtYXJlYToyIC8gMSAvIDMgLyAyO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47anVzdGlmeS1jb250ZW50OmNlbnRlcn0uY3VycmVudC1sb2NhdGlvbiwuY3VycmVudC10ZW1we2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUteGwpfS5jdXJyZW50LWRheSwuY3VycmVudC10aW1le2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtbSl9LmN1cnJlbnQtdGVtcHtmb250LXdlaWdodDo3MDA7bWFyZ2luLXRvcDoyMHB4fS5jdXJyZW50LWljb257d2lkdGg6ODBweDthc3BlY3QtcmF0aW86MS8xfS5jdXJyZW50LWNvbmRpdGlvbntmb250LXNpemU6dmFyKC0tZm9udC1zaXplLXhsKTtmb250LXdlaWdodDo3MDB9dWwuZGV0YWlse2dyaWQtYXJlYToyIC8gMyAvIDMgLyA0O3dpZHRoOmZpdC1jb250ZW50O2p1c3RpZnktc2VsZjpmbGV4LWVuZDtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7Z2FwOjE1cHh9LmRldGFpbC1pdGVte2Rpc3BsYXk6Z3JpZDtncmlkLXRlbXBsYXRlOmF1dG8gYXV0byAvIGF1dG8gMWZyO2dhcDowIDEwcHg7YWxpZ24taXRlbXM6Y2VudGVyfS5kZXRhaWwtaWNvbnt3aWR0aDozMHB4O2dyaWQtcm93OjEgLyAtMX0uZGV0YWlsLXRpdGxle2ZvbnQtd2VpZ2h0OjQwMDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLW0pfS5kZXRhaWwtdGV4dHtncmlkLWFyZWE6MiAvIDIgLyAzIC8gMztmb250LXNpemU6dmFyKC0tZm9udC1zaXplLWwpO3dpZHRoOjEyNXB4fXNlY3Rpb24uZm9yZWNhc3R7cGFkZGluZzpjYWxjKHZhcigtLW1haW4tcGFkZGluZy1ibG9jaykgLyAyKSB2YXIoLS1tYWluLXBhZGRpbmctaW5saW5lKSB2YXIoLS1tYWluLXBhZGRpbmctYmxvY2spfS5idG4tY29udGFpbmVye3dpZHRoOmZpdC1jb250ZW50O2Rpc3BsYXk6ZmxleDtnYXA6MjVweH0uZm9yZWNhc3QtYnRue2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtbCk7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MnB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQ7cGFkZGluZy1ib3R0b206NXB4O3RyYW5zaXRpb246Ym9yZGVyLWJvdHRvbS1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7Y3Vyc29yOnBvaW50ZXJ9LmZvcmVjYXN0LWJ0bjpkaXNhYmxlZHtib3JkZXItYm90dG9tLWNvbG9yOnZhcigtLWFjY2VudC1jb2xvcik7Y3Vyc29yOmRlZmF1bHR9LmZvcmVjYXN0LWxpc3R7bGlzdC1zdHlsZTpub25lO2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtnYXA6bWF4KGNhbGMoMTAwJSAvIDEyKSwzMHB4KTtwYWRkaW5nLWJsb2NrOjIwcHg7b3ZlcmZsb3cteDpzY3JvbGw7c2Nyb2xsLXNuYXAtdHlwZTp4IG1hbmRhdG9yeX0uZm9yZWNhc3QtaXRlbXttaW4td2lkdGg6NTBweDttaW4taGVpZ2h0OjEwMHB4O3Njcm9sbC1zbmFwLWFsaWduOnN0YXJ0fS5mb3JlY2FzdC10aXRsZXtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLW0pO2ZvbnQtd2VpZ2h0OjQwMDt3aGl0ZS1zcGFjZTpub3dyYXB9LmZvcmVjYXN0LWljb257d2lkdGg6NDBweDthc3BlY3QtcmF0aW86MS8xfS5mb3JlY2FzdC10ZW1we2ZvbnQtc2l6ZTp2YXIoLS1mb250LXNpemUtbSk7Zm9udC13ZWlnaHQ6NzAwO3doaXRlLXNwYWNlOm5vd3JhcH0uZm9yZWNhc3QtdGVtcC1taW57Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS1zKX0ub3ZlcmxheXtwb3NpdGlvbjpmaXhlZDtpbnNldDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7YmFja2dyb3VuZDojMDAwMDAwODA7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxNXB4O3B7Zm9udC1zaXplOnZhcigtLWZvbnQtc2l6ZS14bCl9fS5sb2FkaW5nLWljb257d2lkdGg6dmFyKC0tZm9udC1zaXplLXhsKTthbmltYXRpb246c3BpbiAxcyBsaW5lYXIgaW5maW5pdGV9QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXttYWlue2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvO2dyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMyxhdXRvKX11bC5kZXRhaWx7Z3JpZC1hcmVhOjMgLyAxIC8gNCAvIDI7d2lkdGg6MTAwJTtwYWRkaW5nLWJsb2NrOjMwcHh9LmRldGFpbC1pdGVte2Rpc3BsYXk6ZmxleH0uZGV0YWlsLXRleHR7bWFyZ2luLWxlZnQ6YXV0bzt0ZXh0LWFsaWduOmVuZDtmb250LXNpemU6dmFyKC0tZm9udC1zaXplLW0pfX1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FDRSxvQkFBYSxDQUNiLDhEQUNGLENBRUEsZ0JBQ0UsR0FDRSxtQkFDRixDQUVBLEdBQ0Usd0JBQ0YsQ0FDRixDQUVBLE1BQ0UsdUJBQWdCLENBQ2hCLHlCQUFrQixDQUNsQiwyQkFBb0IsQ0FDcEIsaUNBQTBCLENBQzFCLG1DQUE0QixDQUM1QixzQkFBZ0IsQ0FDaEIscUJBQWUsQ0FDZixxQkFBZSxDQUNmLHFCQUFlLENBQ2YsMEJBQXNCLENBQ3RCLG9DQUFpQyxDQUNqQyw0QkFBdUIsQ0FDdkIscUJBQ0YsQ0FJQSw4QkFDRSxnQ0FBVyxDQUNYLGlDQUNGLENBRUEsb0NBQ0Usa0RBQWlELENBQ2pELHdCQUNGLENBRUEsaUNBQ0Usd0JBQ0YsQ0FFQSxvQ0FDRSxrREFBaUQsQ0FDakQsd0JB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Q0YsQ0FFQSxnQkFDRSw0QkFBZSxDQUNmLGVBQWEsQ0FDYixrQkFDRixDQUVBLGVBQ0UsVUFBTyxDQUNQLGdCQUNGLENBRUEsZUFDRSw0QkFBZSxDQUNmLGVBQWEsQ0FDYixrQkFDRixDQUVBLG1CQUNFLDRCQUNGLENBSUEsU0FDRSxjQUFVLENBQ1YsT0FBSyxDQUlMLFdBQVEsQ0FDUixVQUFPLENBQ1Asb0JBQVksQ0FDWixZQUFTLENBQ1Qsa0JBQWEsQ0FDYixzQkFBaUIsQ0FDakIsUUFBSyxDQUVMLEVBQ0UsNkJBQ0YsQ0FDRixDQUVBLGNBQ0UseUJBQVcsQ0FDWCxpQ0FDRixDQUVBLDBCQUNFLEtBQ0UsMEJBQXVCLENBQ3ZCLGlDQUNGLENBRUEsVUFDRSx1QkFBdUIsQ0FDdkIsVUFBTyxDQUNQLGtCQUNGLENBRUEsYUFDRSxZQUNGLENBRUEsYUFDRSxnQkFBYSxDQUNiLGNBQVksQ0FDWiw0QkFDRixDQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFVyYmFuaXN0O1xcbiAgc3JjOiB1cmwoZm9udHMvVXJiYW5pc3QvVXJiYW5pc3QtVmFyaWFibGVGb250X3dnaHQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbjpyb290IHtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZmFmOWY2O1xcbiAgLS10b2dnbGUtcHJpbWFyeTogIzY0NzQ4YjtcXG4gIC0tdG9nZ2xlLXNlY29uZGFyeTogI2UyZThmMDtcXG4gIC0tdG9nZ2xlLWNoZWNrZWQtcHJpbWFyeTogI2Y1OWUwYjtcXG4gIC0tdG9nZ2xlLWNoZWNrZWQtc2Vjb25kYXJ5OiAjZmRlNjhhO1xcbiAgLS1mb250LXNpemUteGw6IDIuOHJlbTtcXG4gIC0tZm9udC1zaXplLWw6IDIuNHJlbTtcXG4gIC0tZm9udC1zaXplLW06IDEuNnJlbTtcXG4gIC0tZm9udC1zaXplLXM6IDEuMnJlbTtcXG4gIC0tbWFpbi1wYWRkaW5nLWJsb2NrOiAzMHB4O1xcbiAgLS1tYWluLXBhZGRpbmctaW5saW5lOiBtYXgoMjBweCwgNSUpO1xcbiAgLS1zY3JvbGxiYXItdGhpY2tuZXNzOiA3LjVweDtcXG4gIC0tdG9nZ2xlLWhlaWdodDogNTBweDtcXG59XFxuXFxuLyogU2Nyb2xsYmFyICovXFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IHZhcigtLXNjcm9sbGJhci10aGlja25lc3MpO1xcbiAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxiYXItdGhpY2tuZXNzKTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1zY3JvbGxiYXItdGhpY2tuZXNzKSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1zY3JvbGxiYXItdGhpY2tuZXNzKSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZDRkNDtcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EzYTNhMztcXG59XFxuXFxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzczNzM7XFxufVxcblxcbiNib2R5IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbiNib2R5ICo6bm90KGZvb3RlciAqKSB7XFxuICBmb250LWZhbWlseTogXFxcIlVyYmFuaXN0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDI1cHg7XFxuICBwYWRkaW5nOiB2YXIoLS1tYWluLXBhZGRpbmctYmxvY2spIHZhcigtLW1haW4tcGFkZGluZy1pbmxpbmUpO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuaGVhZGVyLnNoYWRvdyB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQ1cHg7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IGNsYW1wKDE0MHB4LCA1MCUsIDMwMHB4KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xY2g7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgb3V0bGluZS1jb2xvcjogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNy41cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLnNlYXJjaC1pY29uIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi8qIFRvZ2dsZSAqL1xcblxcbi50b2dnbGUge1xcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4jdW5pdHMge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJ1bml0c1xcXCJdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdW5pdHMgKyBsYWJlbDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogdmFyKC0tdG9nZ2xlLWhlaWdodCk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdG9nZ2xlLWhlaWdodCkgLyAyKTtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tdG9nZ2xlLWhlaWdodCkgLyAyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zZWNvbmRhcnkpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jdW5pdHMgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBCMCBDXFxcIjtcXG4gIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAvIDQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZWZ0OiBjYWxjKHZhcigtLXRvZ2dsZS1oZWlnaHQpICogMC4wNSk7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tdG9nZ2xlLWhlaWdodCkgKiAwLjQ1KTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS10b2dnbGUtaGVpZ2h0KSAvIDIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXByaW1hcnkpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgdHJhbnNmb3JtLCBzY2FsZTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxufVxcblxcbiN1bml0czpmb2N1cy12aXNpYmxlICsgbGFiZWw6OmFmdGVyLFxcbiN1bml0czpjaGVja2VkOmZvY3VzLXZpc2libGUgKyBsYWJlbDo6YWZ0ZXIge1xcbiAgc2NhbGU6IDEuMjU7XFxufVxcblxcbiN1bml0czpjaGVja2VkICsgbGFiZWw6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUtY2hlY2tlZC1zZWNvbmRhcnkpO1xcbn1cXG5cXG4jdW5pdHM6Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcXDAwQjAgRlxcXCI7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUtY2hlY2tlZC1wcmltYXJ5KTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbm1haW4ge1xcbiAgcGFkZGluZy1pbmxpbmU6IHZhcigtLW1haW4tcGFkZGluZy1pbmxpbmUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byAxZnI7XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIC0tZXJyb3ItbXNnLWZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXMpO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgZm9udC1zaXplOiB2YXIoLS1lcnJvci1tc2ctZm9udC1zaXplKTtcXG4gIG1pbi1oZWlnaHQ6IGNhbGModmFyKC0tZXJyb3ItbXNnLWZvbnQtc2l6ZSkgKiAzLjUpO1xcbiAgbWF4LXdpZHRoOiAzNzVweDtcXG59XFxuXFxuLyogSW5mbyAqL1xcblxcbnNlY3Rpb24uaW5mbyB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY3VycmVudC1sb2NhdGlvbixcXG4uY3VycmVudC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcXG59XFxuXFxuLmN1cnJlbnQtZGF5LFxcbi5jdXJyZW50LXRpbWUge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XFxufVxcblxcbi5jdXJyZW50LXRlbXAge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uY3VycmVudC1pY29uIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5jdXJyZW50LWNvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLyogRGV0YWlsICovXFxuXFxudWwuZGV0YWlsIHtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGV0YWlsLWl0ZW0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gYXV0byAvIGF1dG8gMWZyO1xcbiAgZ2FwOiAwIDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGV0YWlsLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbn1cXG5cXG4uZGV0YWlsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1tKTtcXG59XFxuXFxuLmRldGFpbC10ZXh0IHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWwpO1xcbiAgd2lkdGg6IDEyNXB4O1xcbn1cXG5cXG4vKiBGb3JlY2FzdCAqL1xcblxcbnNlY3Rpb24uZm9yZWNhc3Qge1xcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1tYWluLXBhZGRpbmctYmxvY2spIC8gMikgdmFyKC0tbWFpbi1wYWRkaW5nLWlubGluZSlcXG4gICAgdmFyKC0tbWFpbi1wYWRkaW5nLWJsb2NrKTtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjVweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJ0biB7XFxuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1idG46ZGlzYWJsZWQge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmZvcmVjYXN0LWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IG1heChjYWxjKDEwMCUgLyAxMiksIDMwcHgpO1xcbiAgcGFkZGluZy1ibG9jazogMjBweDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xcbn1cXG5cXG4uZm9yZWNhc3QtaXRlbSB7XFxuICBtaW4td2lkdGg6IDUwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcXG59XFxuXFxuLmZvcmVjYXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi5mb3JlY2FzdC10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW0pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZm9yZWNhc3QtdGVtcC1taW4ge1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtcyk7XFxufVxcblxcbi8qIE92ZXJsYXkgKi9cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDE1cHg7XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgfVxcbn1cXG5cXG4ubG9hZGluZy1pY29uIHtcXG4gIHdpZHRoOiB2YXIoLS1mb250LXNpemUteGwpO1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBtYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIH1cXG5cXG4gIHVsLmRldGFpbCB7XFxuICAgIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmctYmxvY2s6IDMwcHg7XFxuICB9XFxuXFxuICAuZGV0YWlsLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLmRldGFpbC10ZXh0IHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbSk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///107
`)},484:module=>{"use strict";eval(`
module.exports = function(cssWithMappingToString) {
  var list = [];
  list.toString = function toString() {
    return this.map(function(item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, void 0]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE1BQ0Y7QUFDQSxXQUFLLEtBQUssSUFBSTtBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcz8yNGZiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///484
`)},615:module=>{"use strict";eval(`
module.exports = function(url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }
  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return '"'.concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), '"');
  }
  return url;
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjE1LmpzIiwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLFVBQVUsU0FBVSxLQUFLLFNBQVM7QUFDdkMsTUFBSSxDQUFDLFNBQVM7QUFDWixjQUFVLENBQUM7QUFBQSxFQUNiO0FBQ0EsTUFBSSxDQUFDLEtBQUs7QUFDUixXQUFPO0FBQUEsRUFDVDtBQUNBLFFBQU0sT0FBTyxJQUFJLGFBQWEsSUFBSSxVQUFVLEdBQUc7QUFHL0MsTUFBSSxlQUFlLEtBQUssR0FBRyxHQUFHO0FBQzVCLFVBQU0sSUFBSSxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ3ZCO0FBQ0EsTUFBSSxRQUFRLE1BQU07QUFDaEIsV0FBTyxRQUFRO0FBQUEsRUFDakI7QUFJQSxNQUFJLG9CQUFvQixLQUFLLEdBQUcsS0FBSyxRQUFRLFlBQVk7QUFDdkQsV0FBTyxJQUFLLE9BQU8sSUFBSSxRQUFRLE1BQU0sS0FBSyxFQUFFLFFBQVEsT0FBTyxLQUFLLEdBQUcsR0FBSTtBQUFBLEVBQ3pFO0FBQ0EsU0FBTztBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzPzFkZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///615
`)},756:module=>{"use strict";eval(`
module.exports = function(item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\\n");
  }
  return [content].join("\\n");
};
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzU2LmpzIiwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLFVBQVUsU0FBVSxNQUFNO0FBQy9CLE1BQUksVUFBVSxLQUFLLENBQUM7QUFDcEIsTUFBSSxhQUFhLEtBQUssQ0FBQztBQUN2QixNQUFJLENBQUMsWUFBWTtBQUNmLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSSxPQUFPLFNBQVMsWUFBWTtBQUM5QixRQUFJLFNBQVMsS0FBSyxTQUFTLG1CQUFtQixLQUFLLFVBQVUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMxRSxRQUFJLE9BQU8sK0RBQStELE9BQU8sTUFBTTtBQUN2RixRQUFJLGdCQUFnQixPQUFPLE9BQU8sTUFBTSxLQUFLO0FBQzdDLFdBQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssSUFBSTtBQUFBLEVBQ3BEO0FBQ0EsU0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUk7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzP2FmMTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///756
`)},384:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval(`/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_esbuild_loader_dist_index_cjs_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(107);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_esbuild_loader_dist_index_cjs_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_esbuild_loader_dist_index_cjs_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_node_modules_esbuild_loader_dist_index_cjs_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_esbuild_loader_dist_index_cjs_ruleSet_1_rules_0_use_2_styles_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBOEs7QUFDOUs7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxtS0FBTzs7OztBQUl3SDtBQUNoSixPQUFPLHNFQUFlLG1LQUFPLElBQUksbUtBQU8sVUFBVSxtS0FBTyxtQkFBbUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/MzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9lc2J1aWxkLWxvYWRlci9kaXN0L2luZGV4LmNqcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2VzYnVpbGQtbG9hZGVyL2Rpc3QvaW5kZXguY2pzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///384
`)},72:module=>{"use strict";eval(`

var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcz8yZGJhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///72
`)},659:module=>{"use strict";eval(`

var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU5LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcz9iMjE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///659
`)},540:module=>{"use strict";eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQwLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcz9kZTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///540
`)},56:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcz9kZGNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///56
`)},825:module=>{"use strict";eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODI1LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcz9lNDc5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///825
`)},113:module=>{"use strict";eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcz8xZGRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///113
`)},654:(I,B,g)=>{var n={"./cloudy.jpg":398,"./foggy.jpg":32,"./night.jpg":214,"./rain.jpg":108,"./snowy.jpg":246,"./sunny.jpg":749,"./thunder.jpg":934};function b(F){var U=C(F);return g(U)}function C(F){if(!g.o(n,F)){var U=new Error("Cannot find module '"+F+"'");throw U.code="MODULE_NOT_FOUND",U}return n[F]}b.keys=function(){return Object.keys(n)},b.resolve=C,I.exports=b,b.id=654},519:(I,B,g)=>{"use strict";I.exports=g.p+"src/fonts/Urbanist//Urbanist-VariableFont_wght.7209716a3a23e09247b8..ttf"},398:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//cloudy.d975cac2da2748059bbd..jpg"},32:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//foggy.6e7194b39fb6884fcd8e..jpg"},214:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//night.52e7724801aa5f6def00..jpg"},108:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//rain.0eae1fc676f150a9b3a1..jpg"},246:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//snowy.9a1985b223a8a3c5490f..jpg"},749:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//sunny.a08e64ef5adb6a6c707d..jpg"},934:(I,B,g)=>{"use strict";I.exports=g.p+"src/images//thunder.2d16ceb9d62e947dae24..jpg"},850:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GP: () => (/* binding */ format)
});

// UNUSED EXPORTS: default, formatDate, formatters, longFormatters

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
const formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs

const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
const formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
const formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/localize.mjs

const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
const localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US/_lib/match.mjs


const matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\\d+/i;
const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

;// CONCATENATED MODULE: ./node_modules/date-fns/locale/en-US.mjs





const enUS = {
  code: "en-US",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const en_US = ((/* unused pure expression or super */ null && (enUS)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/defaultOptions.mjs
let defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/constants.mjs
const daysInWeek = 7;
const daysInYear = 365.2425;
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
const minTime = -maxTime;
const millisecondsInWeek = 6048e5;
const millisecondsInDay = 864e5;
const millisecondsInMinute = 6e4;
const millisecondsInHour = 36e5;
const millisecondsInSecond = 1e3;
const minutesInYear = 525600;
const minutesInMonth = 43200;
const minutesInDay = 1440;
const minutesInHour = 60;
const monthsInQuarter = 3;
const monthsInYear = 12;
const quartersInYear = 4;
const secondsInHour = 3600;
const secondsInMinute = 60;
const secondsInDay = secondsInHour * 24;
const secondsInWeek = secondsInDay * 7;
const secondsInYear = secondsInDay * daysInYear;
const secondsInMonth = secondsInYear / 12;
const secondsInQuarter = secondsInMonth * 3;

;// CONCATENATED MODULE: ./node_modules/date-fns/toDate.mjs
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
    return new argument.constructor(+argument);
  } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
    return new Date(argument);
  } else {
    return /* @__PURE__ */ new Date(NaN);
  }
}
/* harmony default export */ const date_fns_toDate = ((/* unused pure expression or super */ null && (toDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfDay.mjs

function startOfDay(date) {
  const _date = toDate(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfDay = ((/* unused pure expression or super */ null && (startOfDay)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs

function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/differenceInCalendarDays.mjs



function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = startOfDay(dateLeft);
  const startOfDayRight = startOfDay(dateRight);
  const timestampLeft = +startOfDayLeft - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  const timestampRight = +startOfDayRight - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / millisecondsInDay);
}
/* harmony default export */ const date_fns_differenceInCalendarDays = ((/* unused pure expression or super */ null && (differenceInCalendarDays)));

;// CONCATENATED MODULE: ./node_modules/date-fns/constructFrom.mjs
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}
/* harmony default export */ const date_fns_constructFrom = ((/* unused pure expression or super */ null && (constructFrom)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfYear.mjs


function startOfYear(date) {
  const cleanDate = toDate(date);
  const _date = constructFrom(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfYear = ((/* unused pure expression or super */ null && (startOfYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getDayOfYear.mjs



function getDayOfYear(date) {
  const _date = toDate(date);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}
/* harmony default export */ const date_fns_getDayOfYear = ((/* unused pure expression or super */ null && (getDayOfYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeek.mjs


function startOfWeek(date, options) {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
/* harmony default export */ const date_fns_startOfWeek = ((/* unused pure expression or super */ null && (startOfWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfISOWeek.mjs

function startOfISOWeek(date) {
  return startOfWeek(date, { weekStartsOn: 1 });
}
/* harmony default export */ const date_fns_startOfISOWeek = ((/* unused pure expression or super */ null && (startOfISOWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getISOWeekYear.mjs



function getISOWeekYear(date) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
/* harmony default export */ const date_fns_getISOWeekYear = ((/* unused pure expression or super */ null && (getISOWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfISOWeekYear.mjs



function startOfISOWeekYear(date) {
  const year = getISOWeekYear(date);
  const fourthOfJanuary = constructFrom(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}
/* harmony default export */ const date_fns_startOfISOWeekYear = ((/* unused pure expression or super */ null && (startOfISOWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getISOWeek.mjs




function getISOWeek(date) {
  const _date = toDate(date);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}
/* harmony default export */ const date_fns_getISOWeek = ((/* unused pure expression or super */ null && (getISOWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getWeekYear.mjs




function getWeekYear(date, options) {
  const _date = toDate(date);
  const year = _date.getFullYear();
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}
/* harmony default export */ const date_fns_getWeekYear = ((/* unused pure expression or super */ null && (getWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/startOfWeekYear.mjs




function startOfWeekYear(date, options) {
  const defaultOptions = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}
/* harmony default export */ const date_fns_startOfWeekYear = ((/* unused pure expression or super */ null && (startOfWeekYear)));

;// CONCATENATED MODULE: ./node_modules/date-fns/getWeek.mjs




function getWeek(date, options) {
  const _date = toDate(date);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}
/* harmony default export */ const date_fns_getWeek = ((/* unused pure expression or super */ null && (getWeek)));

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/addLeadingZeros.mjs
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/lightFormatters.mjs

const lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/formatters.mjs







const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
const formatters = {
  // Era
  G: function(date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between \`y\` and \`u\` localizers are B.C. years:
  // | Year | \`y\` | \`u\` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also \`yy\` always returns the last two digits of a year,
  // while \`uu\` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize) {
    let hours = date.getHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always \`'Z'\`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is \`'+00:00'\` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    const timestamp = date.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/format/longFormatters.mjs
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};
const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};
const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};
const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

;// CONCATENATED MODULE: ./node_modules/date-fns/_lib/protectedTokens.mjs
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token))
    throw new RangeError(_message);
}
function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return \`Use \\\`\${token.toLowerCase()}\\\` instead of \\\`\${token}\\\` (in \\\`\${format}\\\`) for formatting \${subject} to the input \\\`\${input}\\\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md\`;
}

;// CONCATENATED MODULE: ./node_modules/date-fns/isDate.mjs
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
/* harmony default export */ const date_fns_isDate = ((/* unused pure expression or super */ null && (isDate)));

;// CONCATENATED MODULE: ./node_modules/date-fns/isValid.mjs


function isValid(date) {
  if (!isDate(date) && typeof date !== "number") {
    return false;
  }
  const _date = toDate(date);
  return !isNaN(Number(_date));
}
/* harmony default export */ const date_fns_isValid = ((/* unused pure expression or super */ null && (isValid)));

;// CONCATENATED MODULE: ./node_modules/date-fns/format.mjs








const formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\\w)\\1*|''|'(''|[^'])+('|$)|./g;
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

function format(date, formatStr, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions.firstWeekContainsDate ?? defaultOptions.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions.weekStartsOn ?? defaultOptions.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character \`" + firstCharacter + "\`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken)
      return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}
/* harmony default export */ const date_fns_format = ((/* unused pure expression or super */ null && (format)));
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzP2ZkMjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4ubWpzPzNmMjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanM/YmQ4NiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanM/Yjk5NSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzPzVhODgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUubWpzPzI5MDciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuLm1qcz83OGVjIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzP2I5YzYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gubWpzPzdjNjYiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcz9iMThlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzPzFmZTAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcz8yNmQ3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanM/ZDQ2OSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcz9hY2NhIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanM/ODBhNiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzPzc0YzUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RydWN0RnJvbS5tanM/ZTlmNCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanM/YmM4NSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzP2I3MjIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWsubWpzPzVjZjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzPzk4NjUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0SVNPV2Vla1llYXIubWpzPzE2NWQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWtZZWFyLm1qcz83YTdlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzPzljZTAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0V2Vla1llYXIubWpzP2VmMzgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcz84MGM0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldFdlZWsubWpzPzk0YmIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzP2IyZGUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzLm1qcz9kYmE1Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzPzIzZWUiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzPzYxMjEiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzPzkwMDMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNEYXRlLm1qcz8wOWIzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzPzhjMzkiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcz8zOGE1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiBcImxlc3MgdGhhbiBhIHNlY29uZFwiLFxuICAgIG90aGVyOiBcImxlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kc1wiLFxuICB9LFxuXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiBcIjEgc2Vjb25kXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICBoYWxmQU1pbnV0ZTogXCJoYWxmIGEgbWludXRlXCIsXG5cbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXNcIixcbiAgfSxcblxuICB4TWludXRlczoge1xuICAgIG9uZTogXCIxIG1pbnV0ZVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSBob3VyXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IGhvdXJzXCIsXG4gIH0sXG5cbiAgeEhvdXJzOiB7XG4gICAgb25lOiBcIjEgaG91clwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhEYXlzOiB7XG4gICAgb25lOiBcIjEgZGF5XCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IGRheXNcIixcbiAgfSxcblxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogXCJhYm91dCAxIHdlZWtcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gd2Vla3NcIixcbiAgfSxcblxuICB4V2Vla3M6IHtcbiAgICBvbmU6IFwiMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiBcImFib3V0IDEgbW9udGhcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0gbW9udGhzXCIsXG4gIH0sXG5cbiAgeE1vbnRoczoge1xuICAgIG9uZTogXCIxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSB5ZWFyc1wiLFxuICB9LFxuXG4gIHhZZWFyczoge1xuICAgIG9uZTogXCIxIHllYXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiBcIm92ZXIgMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwib3ZlciB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6IFwiYWxtb3N0IDEgeWVhclwiLFxuICAgIG90aGVyOiBcImFsbW9zdCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXREaXN0YW5jZSA9ICh0b2tlbiwgY291bnQsIG9wdGlvbnMpID0+IHtcbiAgbGV0IHJlc3VsdDtcblxuICBjb25zdCB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKFwie3tjb3VudH19XCIsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnM/LmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuIFwiaW4gXCIgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyBcIiBhZ29cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBUaGUgbG9jYWxpemUgZnVuY3Rpb24gYXJndW1lbnQgY2FsbGJhY2sgd2hpY2ggYWxsb3dzIHRvIGNvbnZlcnQgcmF3IHZhbHVlIHRvXG4gKiB0aGUgYWN0dWFsIHR5cGUuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgY29udmVydGVkIHZhbHVlXG4gKi9cblxuLyoqXG4gKiBUaGUgbWFwIG9mIGxvY2FsaXplZCB2YWx1ZXMgZm9yIGVhY2ggd2lkdGguXG4gKi9cblxuLyoqXG4gKiBUaGUgaW5kZXggdHlwZSBvZiB0aGUgbG9jYWxlIHVuaXQgdmFsdWUuIEl0IHR5cGVzIGNvbnZlcnNpb24gb2YgdW5pdHMgb2ZcbiAqIHZhbHVlcyB0aGF0IGRvbid0IHN0YXJ0IGF0IDAgKGkuZS4gcXVhcnRlcnMpLlxuICovXG5cbi8qKlxuICogQ29udmVydHMgdGhlIHVuaXQgdmFsdWUgdG8gdGhlIHR1cGxlIG9mIHZhbHVlcy5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZXJhIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBCQyxcbiAqIHRoZSBzZWNvbmQgZWxlbWVudCByZXByZXNlbnRzIEFELlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBxdWFydGVyIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBRMS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgZGF5IHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBTdW5kYXkuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIG1vbnRoIHZhbHVlcy4gVGhlIGZpcnN0IGVsZW1lbnQgcmVwcmVzZW50cyBKYW51YXJ5LlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gKHZhbHVlLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IG9wdGlvbnM/LmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6IFwic3RhbmRhbG9uZVwiO1xuXG4gICAgbGV0IHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSBcImZvcm1hdHRpbmdcIiAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID1cbiAgICAgICAgYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnM/LndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbd2lkdGhdIHx8IGFyZ3MudmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn1cbiIsImltcG9ydCB7IGJ1aWxkTG9jYWxpemVGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi5tanNcIjtcblxuY29uc3QgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIkJcIiwgXCJBXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiQkNcIiwgXCJBRFwiXSxcbiAgd2lkZTogW1wiQmVmb3JlIENocmlzdFwiLCBcIkFubm8gRG9taW5pXCJdLFxufTtcblxuY29uc3QgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCJdLFxuICBhYmJyZXZpYXRlZDogW1wiUTFcIiwgXCJRMlwiLCBcIlEzXCIsIFwiUTRcIl0sXG4gIHdpZGU6IFtcIjFzdCBxdWFydGVyXCIsIFwiMm5kIHF1YXJ0ZXJcIiwgXCIzcmQgcXVhcnRlclwiLCBcIjR0aCBxdWFydGVyXCJdLFxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuY29uc3QgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdLFxuICBhYmJyZXZpYXRlZDogW1xuICAgIFwiSmFuXCIsXG4gICAgXCJGZWJcIixcbiAgICBcIk1hclwiLFxuICAgIFwiQXByXCIsXG4gICAgXCJNYXlcIixcbiAgICBcIkp1blwiLFxuICAgIFwiSnVsXCIsXG4gICAgXCJBdWdcIixcbiAgICBcIlNlcFwiLFxuICAgIFwiT2N0XCIsXG4gICAgXCJOb3ZcIixcbiAgICBcIkRlY1wiLFxuICBdLFxuXG4gIHdpZGU6IFtcbiAgICBcIkphbnVhcnlcIixcbiAgICBcIkZlYnJ1YXJ5XCIsXG4gICAgXCJNYXJjaFwiLFxuICAgIFwiQXByaWxcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuZVwiLFxuICAgIFwiSnVseVwiLFxuICAgIFwiQXVndXN0XCIsXG4gICAgXCJTZXB0ZW1iZXJcIixcbiAgICBcIk9jdG9iZXJcIixcbiAgICBcIk5vdmVtYmVyXCIsXG4gICAgXCJEZWNlbWJlclwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIlNcIiwgXCJNXCIsIFwiVFwiLCBcIldcIiwgXCJUXCIsIFwiRlwiLCBcIlNcIl0sXG4gIHNob3J0OiBbXCJTdVwiLCBcIk1vXCIsIFwiVHVcIiwgXCJXZVwiLCBcIlRoXCIsIFwiRnJcIiwgXCJTYVwiXSxcbiAgYWJicmV2aWF0ZWQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcbiAgd2lkZTogW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXSxcbn07XG5cbmNvbnN0IGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwibW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgICBldmVuaW5nOiBcImV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3QgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06IFwiYVwiLFxuICAgIHBtOiBcInBcIixcbiAgICBtaWRuaWdodDogXCJtaVwiLFxuICAgIG5vb246IFwiblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiBcIkFNXCIsXG4gICAgcG06IFwiUE1cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxuICB3aWRlOiB7XG4gICAgYW06IFwiYS5tLlwiLFxuICAgIHBtOiBcInAubS5cIixcbiAgICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICAgIG5vb246IFwibm9vblwiLFxuICAgIG1vcm5pbmc6IFwiaW4gdGhlIG1vcm5pbmdcIixcbiAgICBhZnRlcm5vb246IFwiaW4gdGhlIGFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiaW4gdGhlIGV2ZW5pbmdcIixcbiAgICBuaWdodDogXCJhdCBuaWdodFwiLFxuICB9LFxufTtcblxuY29uc3Qgb3JkaW5hbE51bWJlciA9IChkaXJ0eU51bWJlciwgX29wdGlvbnMpID0+IHtcbiAgY29uc3QgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIGNvbnN0IHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJzdFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJuZFwiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCJyZFwiO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgXCJ0aFwiO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyLFxuXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IChxdWFydGVyKSA9PiBxdWFydGVyIC0gMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgfSksXG5cbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiBcIndpZGVcIixcbiAgfSksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgYnVpbGRNYXRjaEZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaEZuLm1qc1wiO1xuaW1wb3J0IHsgYnVpbGRNYXRjaFBhdHRlcm5GbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4ubWpzXCI7XG5cbmNvbnN0IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG5jb25zdCBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcblxuY29uc3QgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pLFxufTtcbmNvbnN0IHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldLFxufTtcblxuY29uc3QgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaSxcbn07XG5jb25zdCBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV0sXG59O1xuXG5jb25zdCBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcbn07XG5jb25zdCBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogW1xuICAgIC9eai9pLFxuICAgIC9eZi9pLFxuICAgIC9ebS9pLFxuICAgIC9eYS9pLFxuICAgIC9ebS9pLFxuICAgIC9eai9pLFxuICAgIC9eai9pLFxuICAgIC9eYS9pLFxuICAgIC9ecy9pLFxuICAgIC9eby9pLFxuICAgIC9ebi9pLFxuICAgIC9eZC9pLFxuICBdLFxuXG4gIGFueTogW1xuICAgIC9eamEvaSxcbiAgICAvXmYvaSxcbiAgICAvXm1hci9pLFxuICAgIC9eYXAvaSxcbiAgICAvXm1heS9pLFxuICAgIC9eanVuL2ksXG4gICAgL15qdWwvaSxcbiAgICAvXmF1L2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG59O1xuXG5jb25zdCBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxufTtcbmNvbnN0IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiAodmFsdWUpID0+IHBhcnNlSW50KHZhbHVlLCAxMCksXG4gIH0pLFxuXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgICB2YWx1ZUNhbGxiYWNrOiAoaW5kZXgpID0+IGluZGV4ICsgMSxcbiAgfSksXG5cbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcIndpZGVcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogXCJhbnlcIixcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBmb3JtYXREaXN0YW5jZSB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UubWpzXCI7XG5pbXBvcnQgeyBmb3JtYXRMb25nIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRMb25nLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0UmVsYXRpdmUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlLm1qc1wiO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2xvY2FsaXplLm1qc1wiO1xuaW1wb3J0IHsgbWF0Y2ggfSBmcm9tIFwiLi9lbi1VUy9fbGliL21hdGNoLm1qc1wiO1xuXG4vKipcbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBdKGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwKVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXShodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzKVxuICovXG5leHBvcnQgY29uc3QgZW5VUyA9IHtcbiAgY29kZTogXCJlbi1VU1wiLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMSxcbiAgfSxcbn07XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZW5VUztcbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsIi8qKlxuICogQG5hbWUgY29uc3RydWN0RnJvbVxuICogQGNhdGVnb3J5IEdlbmVyaWMgSGVscGVyc1xuICogQHN1bW1hcnkgQ29uc3RydWN0cyBhIGRhdGUgdXNpbmcgdGhlIHJlZmVyZW5jZSBkYXRlIGFuZCB0aGUgdmFsdWVcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBmdW5jdGlvbiBjb25zdHJ1Y3RzIGEgbmV3IGRhdGUgdXNpbmcgdGhlIGNvbnN0cnVjdG9yIGZyb20gdGhlIHJlZmVyZW5jZVxuICogZGF0ZSBhbmQgdGhlIGdpdmVuIHZhbHVlLiBJdCBoZWxwcyB0byBidWlsZCBnZW5lcmljIGZ1bmN0aW9ucyB0aGF0IGFjY2VwdFxuICogZGF0ZSBleHRlbnNpb25zLlxuICpcbiAqIEl0IGRlZmF1bHRzIHRvIGBEYXRlYCBpZiB0aGUgcGFzc2VkIHJlZmVyZW5jZSBkYXRlIGlzIGEgbnVtYmVyIG9yIGEgc3RyaW5nLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIHJlZmVyZW5jZSBkYXRlIHRvIHRha2UgY29uc3RydWN0b3IgZnJvbVxuICogQHBhcmFtIHZhbHVlIC0gVGhlIHZhbHVlIHRvIGNyZWF0ZSB0aGUgZGF0ZVxuICpcbiAqIEByZXR1cm5zIERhdGUgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGdpdmVuIGRhdGUgYW5kIHZhbHVlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tICdkYXRlLWZucydcbiAqXG4gKiAvLyBBIGZ1bmN0aW9uIHRoYXQgY2xvbmVzIGEgZGF0ZSBwcmVzZXJ2aW5nIHRoZSBvcmlnaW5hbCB0eXBlXG4gKiBmdW5jdGlvbiBjbG9uZURhdGU8RGF0ZVR5cGUgZXh0ZW5kcyBEYXRlKGRhdGU6IERhdGVUeXBlKTogRGF0ZVR5cGUge1xuICogICByZXR1cm4gY29uc3RydWN0RnJvbShcbiAqICAgICBkYXRlLCAvLyBVc2UgY29udHJ1c3RvciBmcm9tIHRoZSBnaXZlbiBkYXRlXG4gKiAgICAgZGF0ZS5nZXRUaW1lKCkgLy8gVXNlIHRoZSBkYXRlIHZhbHVlIHRvIGNyZWF0ZSBhIG5ldyBkYXRlXG4gKiAgIClcbiAqIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb20oZGF0ZSwgdmFsdWUpIHtcbiAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIG5ldyBkYXRlLmNvbnN0cnVjdG9yKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0RnJvbTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZZZWFyXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mWWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDAwKSlcbiAqIC8vPT4gV2VkIEphbiAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IGNsZWFuRGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGUgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBfZGF0ZS5zZXRGdWxsWWVhcihjbGVhbkRhdGUuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZlllYXI7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBzdGFydE9mV2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG5cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2VlaztcbiIsImltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrKGRhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZXZWVrKGRhdGUsIHsgd2Vla1N0YXJ0c09uOiAxIH0pO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuXG4gIGNvbnN0IGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0SVNPV2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZklTT1dlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mSVNPV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWtZZWFyKGRhdGUpIHtcbiAgY29uc3QgeWVhciA9IGdldElTT1dlZWtZZWFyKGRhdGUpO1xuICBjb25zdCBmb3VydGhPZkphbnVhcnkgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZJU09XZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiA1M1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2VlayhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gK3N0YXJ0T2ZJU09XZWVrKF9kYXRlKSAtICtzdGFydE9mSVNPV2Vla1llYXIoX2RhdGUpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2Ygd2Vla3MgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIG1pbGxpc2Vjb25kc0luV2VlaykgKyAxO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldElTT1dlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrIH0gZnJvbSBcIi4vc3RhcnRPZldlZWsubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBnZXRXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICpcbiAqIEByZXR1cm5zIFRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCB3aXRoIHRoZSBkZWZhdWx0IHNldHRpbmdzP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSlcbiAqIC8vPT4gMjAwNVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgd2VlayBzdGFydHMgb24gU2F0dXJkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IHdlZWtTdGFydHNPbjogNiB9KVxuICogLy89PiAyMDA0XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMjYgRGVjZW1iZXIgMjAwNCBpZiB0aGUgZmlyc3Qgd2VlayBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrWWVhcihuZXcgRGF0ZSgyMDA0LCAxMSwgMjYpLCB7IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNCB9KVxuICogLy89PiAyMDA0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcblxuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mVGhpc1llYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIGNvbnN0IHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChfZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldFdlZWtZZWFyO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBnZXRXZWVrWWVhciB9IGZyb20gXCIuL2dldFdlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0T3B0aW9ucy5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIHN0YXJ0T2ZXZWVrWWVhcn0gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNSB3aXRoIGRlZmF1bHQgc2V0dGluZ3M6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBEZWMgMjYgMjAwNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNVxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2Ygd2Vla1xuICogLy8gYW5kIDQgSmFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXI6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2Vla1llYXIobmV3IERhdGUoMjAwNSwgNiwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZldlZWtZZWFyKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IHllYXIgPSBnZXRXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgY29uc3QgZmlyc3RXZWVrID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrLnNldEZ1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3QgX2RhdGUgPSBzdGFydE9mV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWtZZWFyO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5XZWVrIH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZXZWVrWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrWWVhci5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGdldFdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGxvY2FsIHdlZWsgaW5kZXggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZXhhY3QgY2FsY3VsYXRpb24gZGVwZW5kcyBvbiB0aGUgdmFsdWVzIG9mXG4gKiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gICh3aGljaCBpcyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlaylcbiAqIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgICh3aGljaCBpcyB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzIGFsd2F5cyBpblxuICogdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIpXG4gKlxuICogV2VlayBudW1iZXJpbmc6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1dlZWsjVGhlX0lTT193ZWVrX2RhdGVfc3lzdGVtXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSB3aXRoIGRlZmF1bHQgb3B0aW9ucz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgbG9jYWwgd2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNSxcbiAqIC8vIGlmIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLFxuICogLy8gYW5kIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyIGFsd2F5cyBjb250YWlucyA0IEphbnVhcnk/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRXZWVrKG5ldyBEYXRlKDIwMDUsIDAsIDIpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMSxcbiAqICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiA0XG4gKiB9KVxuICogLy89PiA1M1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZldlZWsoX2RhdGUsIG9wdGlvbnMpIC0gK3N0YXJ0T2ZXZWVrWWVhcihfZGF0ZSwgb3B0aW9ucyk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VlaztcbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgY29uc3Qgc2lnbiA9IG51bWJlciA8IDAgPyBcIi1cIiA6IFwiXCI7XG4gIGNvbnN0IG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKS5wYWRTdGFydCh0YXJnZXRMZW5ndGgsIFwiMFwiKTtcbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59XG4iLCJpbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG5leHBvcnQgY29uc3QgbGlnaHRGb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gXCJ5eVwiID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTW9udGhcbiAgTShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gXCJNXCIgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXREYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gQU0gb3IgUE1cbiAgYShkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0SG91cnMoKSAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgY2FzZSBcImFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgXCJhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgXCJhYWFhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSBcImFhYWFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09IFwiYW1cIiA/IFwiYS5tLlwiIDogXCJwLm0uXCI7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBNaW51dGVcbiAgbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gU2Vjb25kXG4gIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcbiAgICBjb25zdCBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGgudHJ1bmMoXG4gICAgICBtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSxcbiAgICApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG59O1xuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiY29uc3QgZGF0ZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwiUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwiUFBQUFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCB0aW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgXCJwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwic2hvcnRcIiB9KTtcbiAgICBjYXNlIFwicHBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICBjYXNlIFwicHBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgIGNhc2UgXCJwcHBwXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoeyB3aWR0aDogXCJmdWxsXCIgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IChwYXR0ZXJuLCBmb3JtYXRMb25nKSA9PiB7XG4gIGNvbnN0IG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIGNvbnN0IGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIGNvbnN0IHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIGxldCBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFwiOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwibG9uZ1wiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXRcbiAgICAucmVwbGFjZShcInt7ZGF0ZX19XCIsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSlcbiAgICAucmVwbGFjZShcInt7dGltZX19XCIsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIsXG59O1xuIiwiY29uc3QgZGF5T2ZZZWFyVG9rZW5SRSA9IC9eRCskLztcbmNvbnN0IHdlZWtZZWFyVG9rZW5SRSA9IC9eWSskLztcblxuY29uc3QgdGhyb3dUb2tlbnMgPSBbXCJEXCIsIFwiRERcIiwgXCJZWVwiLCBcIllZWVlcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBkYXlPZlllYXJUb2tlblJFLnRlc3QodG9rZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiB3ZWVrWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IF9tZXNzYWdlID0gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCk7XG4gIGNvbnNvbGUud2FybihfbWVzc2FnZSk7XG4gIGlmICh0aHJvd1Rva2Vucy5pbmNsdWRlcyh0b2tlbikpIHRocm93IG5ldyBSYW5nZUVycm9yKF9tZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSh0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBjb25zdCBzdWJqZWN0ID0gdG9rZW5bMF0gPT09IFwiWVwiID8gXCJ5ZWFyc1wiIDogXCJkYXlzIG9mIHRoZSBtb250aFwiO1xuICByZXR1cm4gYFVzZSBcXGAke3Rva2VuLnRvTG93ZXJDYXNlKCl9XFxgIGluc3RlYWQgb2YgXFxgJHt0b2tlbn1cXGAgKGluIFxcYCR7Zm9ybWF0fVxcYCkgZm9yIGZvcm1hdHRpbmcgJHtzdWJqZWN0fSB0byB0aGUgaW5wdXQgXFxgJHtpbnB1dH1cXGA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZGA7XG59XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IGlzRGF0ZSB9IGZyb20gXCIuL2lzRGF0ZS5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZSlcbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyB2YWxpZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChkYXRlKSB7XG4gIGlmICghaXNEYXRlKGRhdGUpICYmIHR5cGVvZiBkYXRlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihfZGF0ZSkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVmFsaWQ7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///850
`)},44:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Current)
});

// EXTERNAL MODULE: ./src/components/Utility.js
var Utility = __webpack_require__(100);
// EXTERNAL MODULE: ./node_modules/date-fns/format.mjs + 34 modules
var format = __webpack_require__(850);
;// CONCATENATED MODULE: ./src/icons/thermometer-lines.svg
const thermometer_lines_namespaceObject = __webpack_require__.p + "src/icons//thermometer-lines.7834d7075e739bb40709..svg";
;// CONCATENATED MODULE: ./src/icons/weather-pouring.svg
const weather_pouring_namespaceObject = __webpack_require__.p + "src/icons//weather-pouring.eaa4fe5ff8f7c9208ef6..svg";
;// CONCATENATED MODULE: ./src/icons/water-percent.svg
const water_percent_namespaceObject = __webpack_require__.p + "src/icons//water-percent.ac0c44a1b8d006bdef66..svg";
;// CONCATENATED MODULE: ./src/icons/weather-windy.svg
const weather_windy_namespaceObject = __webpack_require__.p + "src/icons//weather-windy.3afdfd08d52d14a23352..svg";
;// CONCATENATED MODULE: ./src/components/Current.js






/* harmony default export */ const Current = (/* @__PURE__ */(() => {
  let errorMsg;
  const createCurrent = (data) => {
    const isImperial = Utility/* default */.A.isImperial();
    const main = document.createElement("main");
    errorMsg = Utility/* default */.A.createText("p", ["error-msg"]);
    const info = Utility/* default */.A.createText("section", ["info"]);
    const localTimeSplit = data.location.localtime.split(" ");
    const [year, month, day] = localTimeSplit[0].split("-");
    const currentDay = (0,format/* format */.GP)(new Date(year, month - 1, day), "EEEE, dd MMMM");
    const [hours, minutes] = localTimeSplit[1].split(":");
    const currentTime = (0,format/* format */.GP)((/* @__PURE__ */ new Date()).setHours(hours, minutes), "h:mm a");
    info.append(
      Utility/* default */.A.createText(
        "h1",
        ["current-location"],
        \`\${data.location.name}, \${data.location.country}\`
      ),
      Utility/* default */.A.createText("p", ["current-day"], currentDay),
      Utility/* default */.A.createText("p", ["current-time"], currentTime),
      Utility/* default */.A.createText(
        "p",
        ["current-temp"],
        \`\${isImperial ? \`\${Math.round(data.current.temp_f)} &#176;F\` : \`\${Math.round(data.current.temp_c)} &#176;C\`}\`
      ),
      Utility/* default */.A.createImg(data.current.condition.icon, ["current-icon"]),
      Utility/* default */.A.createText(
        "p",
        ["current-condition"],
        data.current.condition.text
      )
    );
    const detail = Utility/* default */.A.createText("ul", ["detail"]);
    detail.append(
      createStat(
        thermometer_lines_namespaceObject,
        "Feels Like",
        \`\${isImperial ? \`\${Math.round(data.current.feelslike_f)} &#176;F\` : \`\${Math.round(data.current.feelslike_c)} &#176;C\`}\`
      ),
      createStat(
        weather_pouring_namespaceObject,
        "Precipitation",
        \`\${isImperial ? \`\${data.current.precip_in} in\` : \`\${data.current.precip_mm} mm\`}\`
      ),
      createStat(water_percent_namespaceObject, "Humidity", \`\${data.current.humidity} %\`),
      createStat(
        weather_windy_namespaceObject,
        "Wind Speed",
        \`\${isImperial ? \`\${data.current.wind_mph} mph\` : \`\${data.current.wind_kph} km/h\`}\`
      )
    );
    main.append(errorMsg, info, detail);
    return main;
  };
  const showError = (err) => {
    errorMsg.textContent = err.code === 1006 ? 'Location not found. Search must be in the form of "City", "City, State", "City, Country", ZIP and postcode.' : err.message;
    errorMsg.style.visibility = "visible";
  };
  const hideError = () => {
    errorMsg.style.visibility = "hidden";
  };
  const createStat = (icon, title, stat) => {
    const item = Utility/* default */.A.createText("li", ["detail-item"]);
    item.append(
      Utility/* default */.A.createImg(icon, ["detail-icon"]),
      Utility/* default */.A.createText("h2", ["detail-title"], title),
      Utility/* default */.A.createText("h2", ["detail-text"], stat)
    );
    return item;
  };
  return {
    createCurrent,
    showError,
    hideError
  };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxhQUFhO0FBQUEsRUFDOUI7QUFLQSxRQUFNLFlBQVksTUFBTTtBQUN0QixhQUFTLE1BQU0sYUFBYTtBQUFBLEVBQzlCO0FBU0EsUUFBTSxhQUFhLENBQUMsTUFBTSxPQUFPLFNBQVM7QUFDeEMsVUFBTSxPQUFPLHNCQUFPLENBQUMsV0FBVyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBRXJELFNBQUs7QUFBQSxNQUNILHNCQUFPLENBQUMsVUFBVSxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQUEsTUFDdkMsc0JBQU8sQ0FBQyxXQUFXLE1BQU0sQ0FBQyxjQUFjLEdBQUcsS0FBSztBQUFBLE1BQ2hELHNCQUFPLENBQUMsV0FBVyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUk7QUFBQSxJQUNoRDtBQUVBLFdBQU87QUFBQSxFQUNUO0FBRUEsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudC5qcz9mMTMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGZlZWxzTGlrZSBmcm9tIFwiLi4vaWNvbnMvdGhlcm1vbWV0ZXItbGluZXMuc3ZnXCI7XG5pbXBvcnQgcHJlY2lwaXRhdGlvbiBmcm9tIFwiLi4vaWNvbnMvd2VhdGhlci1wb3VyaW5nLnN2Z1wiO1xuaW1wb3J0IGh1bWlkaXR5IGZyb20gXCIuLi9pY29ucy93YXRlci1wZXJjZW50LnN2Z1wiO1xuaW1wb3J0IHdpbmRTcGVlZCBmcm9tIFwiLi4vaWNvbnMvd2VhdGhlci13aW5keS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgbGV0IGVycm9yTXNnO1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIHBhZ2Ugc2VjdGlvbiBvbiB0aGUgY3VycmVudCB3ZWF0aGVyLlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSAtIFRoZSB3ZWF0aGVyIGRhdGEuXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGN1cnJlbnQgd2VhdGhlciBzZWN0aW9uLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlQ3VycmVudCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgaXNJbXBlcmlhbCA9IFV0aWxpdHkuaXNJbXBlcmlhbCgpO1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgZXJyb3JNc2cgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJwXCIsIFtcImVycm9yLW1zZ1wiXSk7XG5cbiAgICBjb25zdCBpbmZvID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwic2VjdGlvblwiLCBbXCJpbmZvXCJdKTtcblxuICAgIGNvbnN0IGxvY2FsVGltZVNwbGl0ID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUuc3BsaXQoXCIgXCIpO1xuXG4gICAgY29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gbG9jYWxUaW1lU3BsaXRbMF0uc3BsaXQoXCItXCIpO1xuICAgIGNvbnN0IGN1cnJlbnREYXkgPSBmb3JtYXQobmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpLCBcIkVFRUUsIGRkIE1NTU1cIik7XG5cbiAgICBjb25zdCBbaG91cnMsIG1pbnV0ZXNdID0gbG9jYWxUaW1lU3BsaXRbMV0uc3BsaXQoXCI6XCIpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZm9ybWF0KG5ldyBEYXRlKCkuc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMpLCBcImg6bW0gYVwiKTtcblxuICAgIGluZm8uYXBwZW5kKFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcImgxXCIsXG4gICAgICAgIFtcImN1cnJlbnQtbG9jYXRpb25cIl0sXG4gICAgICAgIGAke2RhdGEubG9jYXRpb24ubmFtZX0sICR7ZGF0YS5sb2NhdGlvbi5jb3VudHJ5fWAsXG4gICAgICApLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFwicFwiLCBbXCJjdXJyZW50LWRheVwiXSwgY3VycmVudERheSksXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXCJwXCIsIFtcImN1cnJlbnQtdGltZVwiXSwgY3VycmVudFRpbWUpLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1wiY3VycmVudC10ZW1wXCJdLFxuICAgICAgICBgJHtcbiAgICAgICAgICBpc0ltcGVyaWFsXG4gICAgICAgICAgICA/IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfZil9ICYjMTc2O0ZgXG4gICAgICAgICAgICA6IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LnRlbXBfYyl9ICYjMTc2O0NgXG4gICAgICAgIH1gLFxuICAgICAgKSxcbiAgICAgIFV0aWxpdHkuY3JlYXRlSW1nKGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbiwgW1wiY3VycmVudC1pY29uXCJdKSxcbiAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcImN1cnJlbnQtY29uZGl0aW9uXCJdLFxuICAgICAgICBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICApLFxuICAgICk7XG5cbiAgICBjb25zdCBkZXRhaWwgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJ1bFwiLCBbXCJkZXRhaWxcIl0pO1xuXG4gICAgZGV0YWlsLmFwcGVuZChcbiAgICAgIGNyZWF0ZVN0YXQoXG4gICAgICAgIGZlZWxzTGlrZSxcbiAgICAgICAgXCJGZWVscyBMaWtlXCIsXG4gICAgICAgIGAke1xuICAgICAgICAgIGlzSW1wZXJpYWxcbiAgICAgICAgICAgID8gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YpfSAmIzE3NjtGYFxuICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyl9ICYjMTc2O0NgXG4gICAgICAgIH1gLFxuICAgICAgKSxcbiAgICAgIGNyZWF0ZVN0YXQoXG4gICAgICAgIHByZWNpcGl0YXRpb24sXG4gICAgICAgIFwiUHJlY2lwaXRhdGlvblwiLFxuICAgICAgICBgJHtcbiAgICAgICAgICBpc0ltcGVyaWFsXG4gICAgICAgICAgICA/IGAke2RhdGEuY3VycmVudC5wcmVjaXBfaW59IGluYFxuICAgICAgICAgICAgOiBgJHtkYXRhLmN1cnJlbnQucHJlY2lwX21tfSBtbWBcbiAgICAgICAgfWAsXG4gICAgICApLFxuICAgICAgY3JlYXRlU3RhdChodW1pZGl0eSwgXCJIdW1pZGl0eVwiLCBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9ICVgKSxcbiAgICAgIGNyZWF0ZVN0YXQoXG4gICAgICAgIHdpbmRTcGVlZCxcbiAgICAgICAgXCJXaW5kIFNwZWVkXCIsXG4gICAgICAgIGAke1xuICAgICAgICAgIGlzSW1wZXJpYWxcbiAgICAgICAgICAgID8gYCR7ZGF0YS5jdXJyZW50LndpbmRfbXBofSBtcGhgXG4gICAgICAgICAgICA6IGAke2RhdGEuY3VycmVudC53aW5kX2twaH0ga20vaGBcbiAgICAgICAgfWAsXG4gICAgICApLFxuICAgICk7XG5cbiAgICBtYWluLmFwcGVuZChlcnJvck1zZywgaW5mbywgZGV0YWlsKTtcblxuICAgIHJldHVybiBtYWluO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBlcnIgLSBUaGUgZXJyb3Igb2JqZWN0LlxuICAgKi9cbiAgY29uc3Qgc2hvd0Vycm9yID0gKGVycikgPT4ge1xuICAgIGVycm9yTXNnLnRleHRDb250ZW50ID1cbiAgICAgIGVyci5jb2RlID09PSAxMDA2XG4gICAgICAgID8gJ0xvY2F0aW9uIG5vdCBmb3VuZC4gU2VhcmNoIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgXCJDaXR5XCIsIFwiQ2l0eSwgU3RhdGVcIiwgXCJDaXR5LCBDb3VudHJ5XCIsIFpJUCBhbmQgcG9zdGNvZGUuJ1xuICAgICAgICA6IGVyci5tZXNzYWdlO1xuXG4gICAgZXJyb3JNc2cuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgKi9cbiAgY29uc3QgaGlkZUVycm9yID0gKCkgPT4ge1xuICAgIGVycm9yTXNnLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBkZXRhaWwgaXRlbS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBUaGUgaWNvbiBzb3VyY2UuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSB0ZXh0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdCAtIFRoZSBzdGF0IHRleHQuXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGRldGFpbCBpdGVtLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlU3RhdCA9IChpY29uLCB0aXRsZSwgc3RhdCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJsaVwiLCBbXCJkZXRhaWwtaXRlbVwiXSk7XG5cbiAgICBpdGVtLmFwcGVuZChcbiAgICAgIFV0aWxpdHkuY3JlYXRlSW1nKGljb24sIFtcImRldGFpbC1pY29uXCJdKSxcbiAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcImgyXCIsIFtcImRldGFpbC10aXRsZVwiXSwgdGl0bGUpLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFwiaDJcIiwgW1wiZGV0YWlsLXRleHRcIl0sIHN0YXQpLFxuICAgICk7XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUN1cnJlbnQsXG4gICAgc2hvd0Vycm9yLFxuICAgIGhpZGVFcnJvcixcbiAgfTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///44
`)},723:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Footer)
});

// EXTERNAL MODULE: ./src/components/Utility.js
var Utility = __webpack_require__(100);
;// CONCATENATED MODULE: ./src/icons/github.svg
const github_namespaceObject = __webpack_require__.p + "src/icons//github.76c251b9dd291d8c1256..svg";
;// CONCATENATED MODULE: ./src/components/Footer.js


/* harmony default export */ const Footer = (/* @__PURE__ */(() => {
  const createFooter = () => {
    const footer = document.createElement("footer");
    const githubLink = Utility/* default */.A.createText("a", ["github-link"]);
    githubLink.href = "https://github.com/ChiefWoods/weather-app";
    githubLink.target = "_blank";
    githubLink.append(Utility/* default */.A.createImg(github_namespaceObject, ["github-icon"], "GitHub"));
    footer.append(
      Utility/* default */.A.createText(
        "p",
        ["made-by"],
        \`Copyright @ \${(/* @__PURE__ */ new Date()).getFullYear()} ChiefWoods\`
      ),
      githubLink
    );
    return footer;
  };
  return { createFooter };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzIzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ007QUFFekMsNERBQWdCLE9BQU07QUFNcEIsUUFBTSxlQUFlLE1BQU07QUFDekIsVUFBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBRTlDLFVBQU0sYUFBYSxzQkFBTyxDQUFDLFdBQVcsS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUMxRCxlQUFXLE9BQU87QUFDbEIsZUFBVyxTQUFTO0FBRXBCLGVBQVcsT0FBTyxzQkFBTyxDQUFDLFVBQVUsc0JBQU0sRUFBRSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7QUFFdEUsV0FBTztBQUFBLE1BQ0wsc0JBQU8sQ0FBQztBQUFBLFFBQ047QUFBQSxRQUNBLENBQUMsU0FBUztBQUFBLFFBQ1YsZ0JBQWUsb0JBQUksS0FBSyxHQUFFLFlBQVksQ0FBQztBQUFBLE1BQ3pDO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU8sRUFBRSxhQUFhO0FBQ3hCLEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanM/MjcwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi9VdGlsaXR5LmpzXCI7XG5pbXBvcnQgZ2l0aHViIGZyb20gXCIuLi9pY29ucy9naXRodWIuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBmb290ZXIgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgZm9vdGVyIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcblxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJhXCIsIFtcImdpdGh1Yi1saW5rXCJdKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9DaGllZldvb2RzL3dlYXRoZXItYXBwXCI7XG4gICAgZ2l0aHViTGluay50YXJnZXQgPSBcIl9ibGFua1wiO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmQoVXRpbGl0eS5jcmVhdGVJbWcoZ2l0aHViLCBbXCJnaXRodWItaWNvblwiXSwgXCJHaXRIdWJcIikpO1xuXG4gICAgZm9vdGVyLmFwcGVuZChcbiAgICAgIFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFtcIm1hZGUtYnlcIl0sXG4gICAgICAgIGBDb3B5cmlnaHQgQCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQ2hpZWZXb29kc2AsXG4gICAgICApLFxuICAgICAgZ2l0aHViTGluayxcbiAgICApO1xuXG4gICAgcmV0dXJuIGZvb3RlcjtcbiAgfTtcblxuICByZXR1cm4geyBjcmVhdGVGb290ZXIgfTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///723
`)},527:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(850);
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/* @__PURE__ */(() => {
  let isHourly = true;
  let list;
  const createForecast = (data) => {
    const section = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText("section", ["forecast"]);
    const btnContainer = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText("div", ["btn-container"]);
    const hourlyBtn = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText(
      "button",
      ["hourly-btn", "forecast-btn"],
      "Hourly"
    );
    hourlyBtn.disabled = true;
    hourlyBtn.addEventListener("click", () => {
      hourlyBtn.disabled = true;
      dailyBtn.disabled = false;
      isHourly = true;
      updateForecastList(data);
    });
    const dailyBtn = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText(
      "button",
      ["daily-btn", "forecast-btn"],
      "Daily"
    );
    dailyBtn.addEventListener("click", () => {
      dailyBtn.disabled = true;
      hourlyBtn.disabled = false;
      isHourly = false;
      updateForecastList(data);
    });
    btnContainer.append(hourlyBtn, dailyBtn);
    section.append(btnContainer, createForecastList(data, true));
    return section;
  };
  const createForecastList = (data, isHourly2) => {
    const isImperial = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isImperial();
    list = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText("ul", ["forecast-list", "scrollbar"]);
    if (isHourly2) {
      const currentHour = getHour(data.current.last_updated);
      const firstFortyEightHours = [
        data.forecast.forecastday[0],
        data.forecast.forecastday[1]
      ].flatMap((forecastday) => forecastday.hour);
      const index = firstFortyEightHours.findIndex(
        (hour) => getHour(hour.time) === currentHour
      );
      list.append(
        ...firstFortyEightHours.slice(index, index + 24).map((hour) => {
          return createForecastItem(
            getHour(hour.time) === currentHour ? "Now" : formatTime(hour.time.split(" ")[1]),
            hour.condition.icon,
            isImperial,
            isImperial ? hour.temp_f : hour.temp_c
          );
        })
      );
    } else {
      list.append(
        ...data.forecast.forecastday.slice(0, 7).map((day) => {
          return createForecastItem(
            day.date === data.location.localtime.split(" ")[0] ? "Today" : (0,date_fns__WEBPACK_IMPORTED_MODULE_1__/* .format */ .GP)(new Date(day.date), "EEE"),
            day.day.condition.icon,
            isImperial,
            isImperial ? day.day.maxtemp_f : day.day.maxtemp_c,
            isImperial ? day.day.mintemp_f : day.day.mintemp_c
          );
        })
      );
    }
    return list;
  };
  const createForecastItem = (title, icon, isImperial, temp, tempMin = null) => {
    const item = _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText("li", ["forecast-item"]);
    item.append(
      _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText("h2", ["forecast-title"], title),
      _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createImg(icon, ["forecast-icon"]),
      _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText(
        "p",
        ["forecast-temp"],
        isImperial ? \`\${Math.round(temp)} &#176;F\` : \`\${Math.round(temp)} &#176;C\`
      )
    );
    item.append(
      _Utility_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.createText(
        "p",
        ["forecast-temp-min"],
        tempMin ? isImperial ? \`\${Math.round(tempMin)} &#176;F\` : \`\${Math.round(tempMin)} &#176;C\` : ""
      )
    );
    return item;
  };
  const updateForecastList = (data, retainScroll) => {
    const scrollLeft = retainScroll ? list.scrollLeft : 0;
    document.querySelector(".forecast-list").replaceWith(createForecastList(data, isHourly));
    list.scrollLeft = scrollLeft;
  };
  const getHour = (time) => {
    return time.split(" ")[1].split(":")[0];
  };
  const formatTime = (time) => {
    const hour = parseInt(time.split(":")[0]);
    const period = hour >= 12 ? "pm" : "am";
    return \`\${hour > 12 ? hour - 12 : hour === 0 ? 12 : hour} \${period}\`;
  };
  return {
    createForecast,
    updateForecastList
  };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFBQSxFQUNwRTtBQUVBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvRm9yZWNhc3QuanM/ZTRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxpdHkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgbGV0IGlzSG91cmx5ID0gdHJ1ZTtcbiAgbGV0IGxpc3Q7XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcGFnZSBzZWN0aW9uIG9uIHRoZSBmb3JlY2FzdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgd2VhdGhlciBkYXRhLlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSBmb3JlY2FzdCBzZWN0aW9uLlxuICAgKi9cbiAgY29uc3QgY3JlYXRlRm9yZWNhc3QgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJzZWN0aW9uXCIsIFtcImZvcmVjYXN0XCJdKTtcblxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImRpdlwiLCBbXCJidG4tY29udGFpbmVyXCJdKTtcblxuICAgIGNvbnN0IGhvdXJseUJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXCJob3VybHktYnRuXCIsIFwiZm9yZWNhc3QtYnRuXCJdLFxuICAgICAgXCJIb3VybHlcIixcbiAgICApO1xuICAgIGhvdXJseUJ0bi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBob3VybHlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGhvdXJseUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBkYWlseUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgaXNIb3VybHkgPSB0cnVlO1xuXG4gICAgICB1cGRhdGVGb3JlY2FzdExpc3QoZGF0YSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkYWlseUJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXCJkYWlseS1idG5cIiwgXCJmb3JlY2FzdC1idG5cIl0sXG4gICAgICBcIkRhaWx5XCIsXG4gICAgKTtcblxuICAgIGRhaWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkYWlseUJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBob3VybHlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIGlzSG91cmx5ID0gZmFsc2U7XG5cbiAgICAgIHVwZGF0ZUZvcmVjYXN0TGlzdChkYXRhKTtcbiAgICB9KTtcblxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQoaG91cmx5QnRuLCBkYWlseUJ0bik7XG4gICAgc2VjdGlvbi5hcHBlbmQoYnRuQ29udGFpbmVyLCBjcmVhdGVGb3JlY2FzdExpc3QoZGF0YSwgdHJ1ZSkpO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgbGlzdCBvZiBmb3JlY2FzdCBpdGVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUaGUgd2VhdGhlciBkYXRhLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGlzSG91cmx5IC0gSWYgdGhlIGZvcmVjYXN0IGlzIGhvdXJseS5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgbGlzdCBvZiBmb3JlY2FzdCBpdGVtcy5cbiAgICovXG4gIGNvbnN0IGNyZWF0ZUZvcmVjYXN0TGlzdCA9IChkYXRhLCBpc0hvdXJseSkgPT4ge1xuICAgIGNvbnN0IGlzSW1wZXJpYWwgPSBVdGlsaXR5LmlzSW1wZXJpYWwoKTtcbiAgICBsaXN0ID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwidWxcIiwgW1wiZm9yZWNhc3QtbGlzdFwiLCBcInNjcm9sbGJhclwiXSk7XG5cbiAgICBpZiAoaXNIb3VybHkpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gZ2V0SG91cihkYXRhLmN1cnJlbnQubGFzdF91cGRhdGVkKTtcblxuICAgICAgY29uc3QgZmlyc3RGb3J0eUVpZ2h0SG91cnMgPSBbXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0sXG4gICAgICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0sXG4gICAgICBdLmZsYXRNYXAoKGZvcmVjYXN0ZGF5KSA9PiBmb3JlY2FzdGRheS5ob3VyKTtcblxuICAgICAgY29uc3QgaW5kZXggPSBmaXJzdEZvcnR5RWlnaHRIb3Vycy5maW5kSW5kZXgoXG4gICAgICAgIChob3VyKSA9PiBnZXRIb3VyKGhvdXIudGltZSkgPT09IGN1cnJlbnRIb3VyLFxuICAgICAgKTtcblxuICAgICAgbGlzdC5hcHBlbmQoXG4gICAgICAgIC4uLmZpcnN0Rm9ydHlFaWdodEhvdXJzLnNsaWNlKGluZGV4LCBpbmRleCArIDI0KS5tYXAoKGhvdXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gY3JlYXRlRm9yZWNhc3RJdGVtKFxuICAgICAgICAgICAgZ2V0SG91cihob3VyLnRpbWUpID09PSBjdXJyZW50SG91clxuICAgICAgICAgICAgICA/IFwiTm93XCJcbiAgICAgICAgICAgICAgOiBmb3JtYXRUaW1lKGhvdXIudGltZS5zcGxpdChcIiBcIilbMV0pLFxuICAgICAgICAgICAgaG91ci5jb25kaXRpb24uaWNvbixcbiAgICAgICAgICAgIGlzSW1wZXJpYWwsXG4gICAgICAgICAgICBpc0ltcGVyaWFsID8gaG91ci50ZW1wX2YgOiBob3VyLnRlbXBfYyxcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QuYXBwZW5kKFxuICAgICAgICAuLi5kYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5LnNsaWNlKDAsIDcpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUZvcmVjYXN0SXRlbShcbiAgICAgICAgICAgIGRheS5kYXRlID09PSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZS5zcGxpdChcIiBcIilbMF1cbiAgICAgICAgICAgICAgPyBcIlRvZGF5XCJcbiAgICAgICAgICAgICAgOiBmb3JtYXQobmV3IERhdGUoZGF5LmRhdGUpLCBcIkVFRVwiKSxcbiAgICAgICAgICAgIGRheS5kYXkuY29uZGl0aW9uLmljb24sXG4gICAgICAgICAgICBpc0ltcGVyaWFsLFxuICAgICAgICAgICAgaXNJbXBlcmlhbCA/IGRheS5kYXkubWF4dGVtcF9mIDogZGF5LmRheS5tYXh0ZW1wX2MsXG4gICAgICAgICAgICBpc0ltcGVyaWFsID8gZGF5LmRheS5taW50ZW1wX2YgOiBkYXkuZGF5Lm1pbnRlbXBfYyxcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZvcmVjYXN0IGl0ZW0uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgZm9yZWNhc3QgaXRlbS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGljb24gLSBUaGUgaWNvbiBvZiB0aGUgZm9yZWNhc3QgaXRlbS5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc0ltcGVyaWFsIC0gSWYgdGhlIHVuaXRzIGFyZSBpbXBlcmlhbC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRlbXAgLSBUaGUgdGVtcGVyYXR1cmUgb2YgdGhlIGZvcmVjYXN0IGl0ZW0uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0ZW1wTWluIC0gVGhlIG1pbmltdW0gdGVtcGVyYXR1cmUgb2YgdGhlIGZvcmVjYXN0IGl0ZW0uXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH0gVGhlIGZvcmVjYXN0IGl0ZW0uXG4gICAqL1xuICBjb25zdCBjcmVhdGVGb3JlY2FzdEl0ZW0gPSAoXG4gICAgdGl0bGUsXG4gICAgaWNvbixcbiAgICBpc0ltcGVyaWFsLFxuICAgIHRlbXAsXG4gICAgdGVtcE1pbiA9IG51bGwsXG4gICkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJsaVwiLCBbXCJmb3JlY2FzdC1pdGVtXCJdKTtcblxuICAgIGl0ZW0uYXBwZW5kKFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFwiaDJcIiwgW1wiZm9yZWNhc3QtdGl0bGVcIl0sIHRpdGxlKSxcbiAgICAgIFV0aWxpdHkuY3JlYXRlSW1nKGljb24sIFtcImZvcmVjYXN0LWljb25cIl0pLFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW1wiZm9yZWNhc3QtdGVtcFwiXSxcbiAgICAgICAgaXNJbXBlcmlhbFxuICAgICAgICAgID8gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gJiMxNzY7RmBcbiAgICAgICAgICA6IGAke01hdGgucm91bmQodGVtcCl9ICYjMTc2O0NgLFxuICAgICAgKSxcbiAgICApO1xuXG4gICAgaXRlbS5hcHBlbmQoXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXG4gICAgICAgIFwicFwiLFxuICAgICAgICBbXCJmb3JlY2FzdC10ZW1wLW1pblwiXSxcbiAgICAgICAgdGVtcE1pblxuICAgICAgICAgID8gaXNJbXBlcmlhbFxuICAgICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHRlbXBNaW4pfSAmIzE3NjtGYFxuICAgICAgICAgICAgOiBgJHtNYXRoLnJvdW5kKHRlbXBNaW4pfSAmIzE3NjtDYFxuICAgICAgICAgIDogXCJcIixcbiAgICAgICksXG4gICAgKTtcblxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgZm9yZWNhc3QgaXRlbXMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gVGhlIHdlYXRoZXIgZGF0YS5cbiAgICovXG4gIGNvbnN0IHVwZGF0ZUZvcmVjYXN0TGlzdCA9IChkYXRhLCByZXRhaW5TY3JvbGwpID0+IHtcbiAgICBjb25zdCBzY3JvbGxMZWZ0ID0gcmV0YWluU2Nyb2xsID8gbGlzdC5zY3JvbGxMZWZ0IDogMDtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC1saXN0XCIpXG4gICAgICAucmVwbGFjZVdpdGgoY3JlYXRlRm9yZWNhc3RMaXN0KGRhdGEsIGlzSG91cmx5KSk7XG5cbiAgICBsaXN0LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhvdXIgZnJvbSB0aGUgdGltZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpbWUgLSBUaGUgdGltZS5cbiAgICogQHJldHVybnMge3N0cmluZ30gVGhlIGhvdXIuXG4gICAqL1xuICBjb25zdCBnZXRIb3VyID0gKHRpbWUpID0+IHtcbiAgICByZXR1cm4gdGltZS5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCI6XCIpWzBdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGb3JtYXQgdGhlIHRpbWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0aW1lIC0gVGhlIHRpbWUuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdGltZS5cbiAgICovXG4gIGNvbnN0IGZvcm1hdFRpbWUgPSAodGltZSkgPT4ge1xuICAgIGNvbnN0IGhvdXIgPSBwYXJzZUludCh0aW1lLnNwbGl0KFwiOlwiKVswXSk7XG4gICAgY29uc3QgcGVyaW9kID0gaG91ciA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgICByZXR1cm4gYCR7aG91ciA+IDEyID8gaG91ciAtIDEyIDogaG91ciA9PT0gMCA/IDEyIDogaG91cn0gJHtwZXJpb2R9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZUZvcmVjYXN0LFxuICAgIHVwZGF0ZUZvcmVjYXN0TGlzdCxcbiAgfTtcbn0pKCk7XG4iXSwibmFtZXMiOlsiaXNIb3VybHkiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///527
`)},419:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./src/components/Utility.js
var Utility = __webpack_require__(100);
;// CONCATENATED MODULE: ./src/icons/magnify.svg
const magnify_namespaceObject = __webpack_require__.p + "src/icons//magnify.454975c32af11d9b5924..svg";
;// CONCATENATED MODULE: ./src/components/Header.js


/* harmony default export */ const Header = (/* @__PURE__ */(() => {
  const createHeader = () => {
    const header = document.createElement("header");
    const form = document.createElement("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.dispatchEvent(
        new CustomEvent("search", {
          bubbles: true,
          detail: {
            query: searchInput.value
          }
        })
      );
      searchInput.value = "";
    });
    const searchInput = Utility/* default */.A.createText("input", ["search-input"]);
    searchInput.type = "text";
    searchInput.placeholder = window.innerWidth < 768 ? "Search Location" : "Search Location or Zip Code";
    const searchBtn = Utility/* default */.A.createText("button", ["search-btn"]);
    searchBtn.type = "submit";
    searchBtn.append(Utility/* default */.A.createImg(magnify_namespaceObject, ["search-icon"], "Search"));
    form.append(searchInput, searchBtn);
    const toggleContainer = Utility/* default */.A.createText("div", ["toggle"]);
    const toggle = Utility/* default */.A.createText("input", []);
    toggle.type = "checkbox";
    toggle.id = "units";
    toggle.checked = Utility/* default */.A.isImperial();
    toggle.addEventListener("change", (e) => {
      localStorage.setItem("isImperial", JSON.stringify(e.target.checked));
      e.target.dispatchEvent(
        new CustomEvent("toggle", {
          bubbles: true
        })
      );
    });
    const label = Utility/* default */.A.createText("label", []);
    label.htmlFor = "units";
    toggleContainer.append(toggle, label);
    header.append(form, toggleContainer);
    return header;
  };
  return {
    createHeader
  };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDE5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ087QUFFMUMsNERBQWdCLE9BQU07QUFLcEIsUUFBTSxlQUFlLE1BQU07QUFDekIsVUFBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBRTlDLFVBQU0sT0FBTyxTQUFTLGNBQWMsTUFBTTtBQUUxQyxTQUFLLGlCQUFpQixVQUFVLENBQUMsTUFBTTtBQUNyQyxRQUFFLGVBQWU7QUFFakIsV0FBSztBQUFBLFFBQ0gsSUFBSSxZQUFZLFVBQVU7QUFBQSxVQUN4QixTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsWUFDTixPQUFPLFlBQVk7QUFBQSxVQUNyQjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFFQSxrQkFBWSxRQUFRO0FBQUEsSUFDdEIsQ0FBQztBQUVELFVBQU0sY0FBYyxzQkFBTyxDQUFDLFdBQVcsU0FBUyxDQUFDLGNBQWMsQ0FBQztBQUNoRSxnQkFBWSxPQUFPO0FBQ25CLGdCQUFZLGNBQ1YsT0FBTyxhQUFhLE1BQ2hCLG9CQUNBO0FBRU4sVUFBTSxZQUFZLHNCQUFPLENBQUMsV0FBVyxVQUFVLENBQUMsWUFBWSxDQUFDO0FBQzdELGNBQVUsT0FBTztBQUNqQixjQUFVLE9BQU8sc0JBQU8sQ0FBQyxVQUFVLHVCQUFNLEVBQUUsQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO0FBRXJFLFNBQUssT0FBTyxhQUFhLFNBQVM7QUFFbEMsVUFBTSxrQkFBa0Isc0JBQU8sQ0FBQyxXQUFXLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFFNUQsVUFBTSxTQUFTLHNCQUFPLENBQUMsV0FBVyxTQUFTLENBQUMsQ0FBQztBQUM3QyxXQUFPLE9BQU87QUFDZCxXQUFPLEtBQUs7QUFDWixXQUFPLFVBQVUsc0JBQU8sQ0FBQyxXQUFXO0FBRXBDLFdBQU8saUJBQWlCLFVBQVUsQ0FBQyxNQUFNO0FBQ3ZDLG1CQUFhLFFBQVEsY0FBYyxLQUFLLFVBQVUsRUFBRSxPQUFPLE9BQU8sQ0FBQztBQUVuRSxRQUFFLE9BQU87QUFBQSxRQUNQLElBQUksWUFBWSxVQUFVO0FBQUEsVUFDeEIsU0FBUztBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFFRCxVQUFNLFFBQVEsc0JBQU8sQ0FBQyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLFVBQU0sVUFBVTtBQUVoQixvQkFBZ0IsT0FBTyxRQUFRLEtBQUs7QUFFcEMsV0FBTyxPQUFPLE1BQU0sZUFBZTtBQUVuQyxXQUFPO0FBQUEsRUFDVDtBQUVBLFNBQU87QUFBQSxJQUNMO0FBQUEsRUFDRjtBQUNGLEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanM/YWQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi9VdGlsaXR5LmpzXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9pY29ucy9tYWduaWZ5LnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuICAvKipcbiAgICogQ3JlYXRlIHRoZSBoZWFkZXIgZWxlbWVudC5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgaGVhZGVyIGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBmb3JtLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcInNlYXJjaFwiLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHF1ZXJ5OiBzZWFyY2hJbnB1dC52YWx1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICk7XG5cbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiaW5wdXRcIiwgW1wic2VhcmNoLWlucHV0XCJdKTtcbiAgICBzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPVxuICAgICAgd2luZG93LmlubmVyV2lkdGggPCA3NjhcbiAgICAgICAgPyBcIlNlYXJjaCBMb2NhdGlvblwiXG4gICAgICAgIDogXCJTZWFyY2ggTG9jYXRpb24gb3IgWmlwIENvZGVcIjtcblxuICAgIGNvbnN0IHNlYXJjaEJ0biA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImJ1dHRvblwiLCBbXCJzZWFyY2gtYnRuXCJdKTtcbiAgICBzZWFyY2hCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc2VhcmNoQnRuLmFwcGVuZChVdGlsaXR5LmNyZWF0ZUltZyhzZWFyY2gsIFtcInNlYXJjaC1pY29uXCJdLCBcIlNlYXJjaFwiKSk7XG5cbiAgICBmb3JtLmFwcGVuZChzZWFyY2hJbnB1dCwgc2VhcmNoQnRuKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNvbnRhaW5lciA9IFV0aWxpdHkuY3JlYXRlVGV4dChcImRpdlwiLCBbXCJ0b2dnbGVcIl0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiaW5wdXRcIiwgW10pO1xuICAgIHRvZ2dsZS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIHRvZ2dsZS5pZCA9IFwidW5pdHNcIjtcbiAgICB0b2dnbGUuY2hlY2tlZCA9IFV0aWxpdHkuaXNJbXBlcmlhbCgpO1xuXG4gICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXNJbXBlcmlhbFwiLCBKU09OLnN0cmluZ2lmeShlLnRhcmdldC5jaGVja2VkKSk7XG5cbiAgICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudChcInRvZ2dsZVwiLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGFiZWwgPSBVdGlsaXR5LmNyZWF0ZVRleHQoXCJsYWJlbFwiLCBbXSk7XG4gICAgbGFiZWwuaHRtbEZvciA9IFwidW5pdHNcIjtcblxuICAgIHRvZ2dsZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlLCBsYWJlbCk7XG5cbiAgICBoZWFkZXIuYXBwZW5kKGZvcm0sIHRvZ2dsZUNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlSGVhZGVyLFxuICB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///419
`)},350:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Overlay)
});

// EXTERNAL MODULE: ./src/components/Utility.js
var Utility = __webpack_require__(100);
;// CONCATENATED MODULE: ./src/icons/loading.svg
const loading_namespaceObject = __webpack_require__.p + "src/icons//loading.d3ae5c01261886c5d114..svg";
;// CONCATENATED MODULE: ./src/components/Overlay.js


/* harmony default export */ const Overlay = (/* @__PURE__ */(() => {
  let overlay;
  const createOverlay = () => {
    overlay = Utility/* default */.A.createText("div", ["overlay"]);
    return overlay;
  };
  const showSpinner = () => {
    clearOverlay();
    overlay.append(
      Utility/* default */.A.createText("p", [], "Fetching data..."),
      Utility/* default */.A.createImg(loading_namespaceObject, ["loading-icon"])
    );
    overlay.style.display = "flex";
  };
  const showError = () => {
    clearOverlay();
    overlay.append(
      Utility/* default */.A.createText(
        "p",
        [],
        "Unable to fetch data. Please try again later."
      )
    );
  };
  const clearOverlay = () => {
    while (overlay.firstChild) {
      overlay.removeChild(overlay.firstChild);
    }
  };
  const hideOverlay = () => {
    overlay.style.display = "none";
  };
  return {
    createOverlay,
    showSpinner,
    showError,
    hideOverlay
  };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ1E7QUFFM0MsNkRBQWdCLE9BQU07QUFDcEIsTUFBSTtBQU1KLFFBQU0sZ0JBQWdCLE1BQU07QUFDMUIsY0FBVSxzQkFBTyxDQUFDLFdBQVcsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUUvQyxXQUFPO0FBQUEsRUFDVDtBQUtBLFFBQU0sY0FBYyxNQUFNO0FBQ3hCLGlCQUFhO0FBRWIsWUFBUTtBQUFBLE1BQ04sc0JBQU8sQ0FBQyxXQUFXLEtBQUssQ0FBQyxHQUFHLGtCQUFrQjtBQUFBLE1BQzlDLHNCQUFPLENBQUMsVUFBVSx1QkFBTyxFQUFFLENBQUMsY0FBYyxDQUFDO0FBQUEsSUFDN0M7QUFFQSxZQUFRLE1BQU0sVUFBVTtBQUFBLEVBQzFCO0FBS0EsUUFBTSxZQUFZLE1BQU07QUFDdEIsaUJBQWE7QUFFYixZQUFRO0FBQUEsTUFDTixzQkFBTyxDQUFDO0FBQUEsUUFDTjtBQUFBLFFBQ0EsQ0FBQztBQUFBLFFBQ0Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFLQSxRQUFNLGVBQWUsTUFBTTtBQUN6QixXQUFPLFFBQVEsWUFBWTtBQUN6QixjQUFRLFlBQVksUUFBUSxVQUFVO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBS0EsUUFBTSxjQUFjLE1BQU07QUFDeEIsWUFBUSxNQUFNLFVBQVU7QUFBQSxFQUMxQjtBQUVBLFNBQU87QUFBQSxJQUNMO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsRUFDRjtBQUNGLEdBQUcsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9PdmVybGF5LmpzPzIzNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vVXRpbGl0eS5qc1wiO1xuaW1wb3J0IGxvYWRpbmcgZnJvbSBcIi4uL2ljb25zL2xvYWRpbmcuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGxldCBvdmVybGF5O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIG92ZXJsYXkgZWxlbWVudC5cbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fSBUaGUgb3ZlcmxheSBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICBvdmVybGF5ID0gVXRpbGl0eS5jcmVhdGVUZXh0KFwiZGl2XCIsIFtcIm92ZXJsYXlcIl0pO1xuXG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHNwaW5uZXIgb3ZlcmxheS5cbiAgICovXG4gIGNvbnN0IHNob3dTcGlubmVyID0gKCkgPT4ge1xuICAgIGNsZWFyT3ZlcmxheSgpO1xuXG4gICAgb3ZlcmxheS5hcHBlbmQoXG4gICAgICBVdGlsaXR5LmNyZWF0ZVRleHQoXCJwXCIsIFtdLCBcIkZldGNoaW5nIGRhdGEuLi5cIiksXG4gICAgICBVdGlsaXR5LmNyZWF0ZUltZyhsb2FkaW5nLCBbXCJsb2FkaW5nLWljb25cIl0pLFxuICAgICk7XG5cbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgfTtcblxuICAvKipcbiAgICogU2hvdyB0aGUgZXJyb3Igb3ZlcmxheS5cbiAgICovXG4gIGNvbnN0IHNob3dFcnJvciA9ICgpID0+IHtcbiAgICBjbGVhck92ZXJsYXkoKTtcblxuICAgIG92ZXJsYXkuYXBwZW5kKFxuICAgICAgVXRpbGl0eS5jcmVhdGVUZXh0KFxuICAgICAgICBcInBcIixcbiAgICAgICAgW10sXG4gICAgICAgIFwiVW5hYmxlIHRvIGZldGNoIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXCIsXG4gICAgICApLFxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENsZWFyIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgY29uc3QgY2xlYXJPdmVybGF5ID0gKCkgPT4ge1xuICAgIHdoaWxlIChvdmVybGF5LmZpcnN0Q2hpbGQpIHtcbiAgICAgIG92ZXJsYXkucmVtb3ZlQ2hpbGQob3ZlcmxheS5maXJzdENoaWxkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIG92ZXJsYXkuXG4gICAqL1xuICBjb25zdCBoaWRlT3ZlcmxheSA9ICgpID0+IHtcbiAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZU92ZXJsYXksXG4gICAgc2hvd1NwaW5uZXIsXG4gICAgc2hvd0Vycm9yLFxuICAgIGhpZGVPdmVybGF5LFxuICB9O1xufSkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///350
`)},100:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
  const backgrounds = importAll(
    __webpack_require__(654)
  );
  const weatherCodes = {
    cloudy: [1006, 1009],
    foggy: [1030, 1135, 1147],
    rain: [
      1150,
      1153,
      1180,
      1183,
      1186,
      1189,
      1192,
      1195,
      1198,
      1201,
      1240,
      1243,
      1246,
      1249,
      1252
    ],
    snowy: [
      1114,
      1117,
      1168,
      1171,
      1210,
      1213,
      1216,
      1219,
      1222,
      1225,
      1237,
      1255,
      1258,
      1261,
      1264
    ],
    sunny: [1e3, 1003, 1063, 1066, 1069, 1072, 1087],
    thunder: [1273, 1276, 1279, 1282]
  };
  const createText = (ele, className, content = "") => {
    const text = document.createElement(ele);
    text.classList.add(...className.filter((name) => name !== ""));
    text.innerHTML = content;
    return text;
  };
  const createImg = (src, className, alt = "", id = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;
    img.id = id;
    return img;
  };
  const getForecast = (location = null) => {
    const url = new URL("https://api.weatherapi.com/v1/forecast.json");
    url.searchParams.append("key", "786c667505e0471890e125139240904");
    url.searchParams.append("q", location ? location : "auto:ip");
    url.searchParams.append("days", 7);
    return fetch(url).then((res) => res.json()).catch(console.error);
  };
  const changeDocumentTitle = (location = null) => {
    document.title = \`\${location ? \`\${location.name}, \${location.country} | \` : ""}Weather App\`;
  };
  const changeBackground = (code, localtime) => {
    let weather = Object.keys(weatherCodes).find(
      (weather2) => weatherCodes[weather2].includes(code)
    );
    if (weather === "sunny") {
      const hour = new Date(localtime).getHours();
      if (hour >= 19 || hour <= 7) {
        weather = "night";
      }
    }
    document.querySelector("#body").style.backgroundImage = \`url(\${backgrounds[weather]})\`;
  };
  function importAll(r) {
    const images = {};
    r.keys().forEach((item) => {
      const name = item.split("/")[1].split(".")[0];
      images[name] = r(item);
    });
    return images;
  }
  const isImperial = () => {
    return JSON.parse(localStorage.getItem("isImperial"));
  };
  return {
    createText,
    createImg,
    getForecast,
    changeDocumentTitle,
    changeBackground,
    isImperial
  };
})());
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFFNUMsYUFBTyxJQUFJLElBQUksRUFBRSxJQUFJO0FBQUEsSUFDdkIsQ0FBQztBQUVELFdBQU87QUFBQSxFQUNUO0FBTUEsUUFBTSxhQUFhLE1BQU07QUFDdkIsV0FBTyxLQUFLLE1BQU0sYUFBYSxRQUFRLFlBQVksQ0FBQztBQUFBLEVBQ3REO0FBRUEsU0FBTztBQUFBLElBQ0w7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRixHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvVXRpbGl0eS5qcz9iMzkwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGNvbnN0IGJhY2tncm91bmRzID0gaW1wb3J0QWxsKFxuICAgIGltcG9ydC5tZXRhLndlYnBhY2tDb250ZXh0KFwiLi4vaW1hZ2VzXCIsIHtcbiAgICAgIHJlY3Vyc2l2ZTogdHJ1ZSxcbiAgICAgIHJlZ0V4cDogL1xcLmpwZyQvLFxuICAgIH0pLFxuICApO1xuXG4gIC8vIENvZGVzIHRoYXQgY29ycmVzcG9uZCB0byBXZWF0aGVyIEFQSSBjb25kaXRpb25zXG4gIGNvbnN0IHdlYXRoZXJDb2RlcyA9IHtcbiAgICBjbG91ZHk6IFsxMDA2LCAxMDA5XSxcbiAgICBmb2dneTogWzEwMzAsIDExMzUsIDExNDddLFxuICAgIHJhaW46IFtcbiAgICAgIDExNTAsIDExNTMsIDExODAsIDExODMsIDExODYsIDExODksIDExOTIsIDExOTUsIDExOTgsIDEyMDEsIDEyNDAsIDEyNDMsXG4gICAgICAxMjQ2LCAxMjQ5LCAxMjUyLFxuICAgIF0sXG4gICAgc25vd3k6IFtcbiAgICAgIDExMTQsIDExMTcsIDExNjgsIDExNzEsIDEyMTAsIDEyMTMsIDEyMTYsIDEyMTksIDEyMjIsIDEyMjUsIDEyMzcsIDEyNTUsXG4gICAgICAxMjU4LCAxMjYxLCAxMjY0LFxuICAgIF0sXG4gICAgc3Vubnk6IFsxMDAwLCAxMDAzLCAxMDYzLCAxMDY2LCAxMDY5LCAxMDcyLCAxMDg3XSxcbiAgICB0aHVuZGVyOiBbMTI3MywgMTI3NiwgMTI3OSwgMTI4Ml0sXG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHRleHQgZWxlbWVudCB3aXRoIHRoZSBzcGVjaWZpZWQgZWxlbWVudCB0eXBlLCBjbGFzcyBuYW1lcywgYW5kIGNvbnRlbnQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbGUgLSBUaGUgdHlwZSBvZiBlbGVtZW50IHRvIGNyZWF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gY2xhc3NOYW1lIC0gVGhlIGNsYXNzIG5hbWVzIHRvIGFkZCB0byB0aGUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb250ZW50PVwiXCJdIC0gVGhlIGNvbnRlbnQgdG8gYWRkIHRvIHRoZSBlbGVtZW50LlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IFRoZSB0ZXh0IGVsZW1lbnQuXG4gICAqL1xuICBjb25zdCBjcmVhdGVUZXh0ID0gKGVsZSwgY2xhc3NOYW1lLCBjb250ZW50ID0gXCJcIikgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZSk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzTmFtZS5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09IFwiXCIpKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGltYWdlIGVsZW1lbnQgd2l0aCB0aGUgc3BlY2lmaWVkIHNvdXJjZSwgY2xhc3MgbmFtZXMsIGFuZCBhbHQgdGV4dC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHNyYyAtIFRoZSBzb3VyY2Ugb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBjbGFzc05hbWUgLSBUaGUgY2xhc3MgbmFtZXMgdG8gYWRkIHRvIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFthbHQ9XCJcIl0gLSBUaGUgYWx0IHRleHQgb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2lkPVwiXCJdIC0gVGhlIGlkIG9mIHRoZSBpbWFnZS5cbiAgICogQHJldHVybnMge0hUTUxJbWFnZUVsZW1lbnR9IFRoZSBpbWFnZSBlbGVtZW50LlxuICAgKi9cbiAgY29uc3QgY3JlYXRlSW1nID0gKHNyYywgY2xhc3NOYW1lLCBhbHQgPSBcIlwiLCBpZCA9IFwiXCIpID0+IHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBzcmM7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NOYW1lKTtcbiAgICBpbWcuYWx0ID0gYWx0O1xuICAgIGltZy5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIGltZztcbiAgfTtcblxuICAvKipcbiAgICogRmV0Y2ggdGhlIHdlYXRoZXIgZm9yZWNhc3QgZm9yIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbG9jYXRpb249bnVsbF0gLSBUaGUgbG9jYXRpb24gdG8gZmV0Y2ggdGhlIHdlYXRoZXIgZm9yZWNhc3QgZm9yLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIHdlYXRoZXIgZm9yZWNhc3QgZGF0YS5cbiAgICovXG4gIGNvbnN0IGdldEZvcmVjYXN0ID0gKGxvY2F0aW9uID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoXCJodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uXCIpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoXCJrZXlcIiwgcHJvY2Vzcy5lbnYuV0VBVEhFUl9BUElfS0VZKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcInFcIiwgbG9jYXRpb24gPyBsb2NhdGlvbiA6IFwiYXV0bzppcFwiKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChcImRheXNcIiwgNyk7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2hhbmdlIHRoZSBkb2N1bWVudCB0aXRsZSB0byBpbmNsdWRlIHRoZSBsb2NhdGlvbiBuYW1lIGFuZCBjb3VudHJ5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2xvY2F0aW9uPW51bGxdIC0gVGhlIGxvY2F0aW9uIG9iamVjdC5cbiAgICovXG4gIGNvbnN0IGNoYW5nZURvY3VtZW50VGl0bGUgPSAobG9jYXRpb24gPSBudWxsKSA9PiB7XG4gICAgZG9jdW1lbnQudGl0bGUgPSBgJHtsb2NhdGlvbiA/IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLmNvdW50cnl9IHwgYCA6IFwiXCJ9V2VhdGhlciBBcHBgO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGFuZ2UgdGhlIHBhZ2UgYmFja2dyb3VuZCBiYXNlZCBvbiB0aGUgd2VhdGhlciBjb2RlIGFuZCBsb2NhbCB0aW1lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY29kZSAtIFRoZSB3ZWF0aGVyIGNvZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbHRpbWUgLSBUaGUgbG9jYWwgdGltZS5cbiAgICovXG4gIGNvbnN0IGNoYW5nZUJhY2tncm91bmQgPSAoY29kZSwgbG9jYWx0aW1lKSA9PiB7XG4gICAgbGV0IHdlYXRoZXIgPSBPYmplY3Qua2V5cyh3ZWF0aGVyQ29kZXMpLmZpbmQoKHdlYXRoZXIpID0+XG4gICAgICB3ZWF0aGVyQ29kZXNbd2VhdGhlcl0uaW5jbHVkZXMoY29kZSksXG4gICAgKTtcblxuICAgIGlmICh3ZWF0aGVyID09PSBcInN1bm55XCIpIHtcbiAgICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZShsb2NhbHRpbWUpLmdldEhvdXJzKCk7XG5cbiAgICAgIGlmIChob3VyID49IDE5IHx8IGhvdXIgPD0gNykge1xuICAgICAgICB3ZWF0aGVyID0gXCJuaWdodFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgYHVybCgke2JhY2tncm91bmRzW3dlYXRoZXJdfSlgO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbXBvcnQgYWxsIGltYWdlcyBpbiB0aGUgc3BlY2lmaWVkIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gciAtIFRoZSB3ZWJwYWNrIGNvbnRleHQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBpbWFnZXMuXG4gICAqL1xuICBmdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuXG4gICAgci5rZXlzKCkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGl0ZW0uc3BsaXQoXCIvXCIpWzFdLnNwbGl0KFwiLlwiKVswXTtcblxuICAgICAgaW1hZ2VzW25hbWVdID0gcihpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBpbWFnZXM7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgbG9jYWwgc3RvcmFnZSBmb3IgdGhlIHVzZXIncyBzZWxlY3Rpb24gb2YgaW1wZXJpYWwgb3IgbWV0cmljIHVuaXRzLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVGhlIHVzZXIncyBzZWxlY3Rpb24uXG4gICAqL1xuICBjb25zdCBpc0ltcGVyaWFsID0gKCkgPT4ge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNJbXBlcmlhbFwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVUZXh0LFxuICAgIGNyZWF0ZUltZyxcbiAgICBnZXRGb3JlY2FzdCxcbiAgICBjaGFuZ2VEb2N1bWVudFRpdGxlLFxuICAgIGNoYW5nZUJhY2tncm91bmQsXG4gICAgaXNJbXBlcmlhbCxcbiAgfTtcbn0pKCk7XG4iXSwibmFtZXMiOlsid2VhdGhlciJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///100
`)},471:(__webpack_module__,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval(`__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(384);
/* harmony import */ var _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(419);
/* harmony import */ var _components_Current_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _components_Forecast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527);
/* harmony import */ var _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(350);
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(723);







function updateView(retainScroll = false) {
  document.querySelector("main").replaceWith(_components_Current_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.createCurrent(data));
  _components_Forecast_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.updateForecastList(data, retainScroll);
}
const body = document.querySelector("#body");
const header = _components_Header_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.createHeader();
const overlay = _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.createOverlay();
body.append(overlay);
_components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.showSpinner();
let data = await _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getForecast().then((data2) => {
  if (!data2.error) {
    [
      header,
      _components_Current_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.createCurrent(data2),
      _components_Forecast_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.createForecast(data2),
      _components_Footer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.createFooter()
    ].forEach((ele) => {
      body.insertBefore(ele, overlay);
    });
    _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.hideOverlay();
    _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.changeBackground(
      data2.current.condition.code,
      data2.location.localtime
    );
    _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.changeDocumentTitle(data2.location);
    return data2;
  } else {
    _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.showError();
  }
}).catch(_components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.showError);
body.addEventListener("search", async (e) => {
  _components_Current_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.hideError();
  _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.showSpinner();
  const newData = await _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getForecast(e.detail.query);
  if (!newData.error) {
    data = newData;
    updateView();
    _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.changeBackground(
      data.current.condition.code,
      data.location.localtime
    );
    _components_Utility_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.changeDocumentTitle(data.location);
  } else {
    _components_Current_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.showError(newData.error);
  }
  _components_Overlay_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.hideOverlay();
});
body.addEventListener("toggle", () => updateView(true));
window.addEventListener("scroll", () => {
  const breakpoint = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--main-padding-block").replace(/\\D/g, ""),
    10
  );
  window.scrollY > breakpoint / 2 ? header.classList.add("shadow") : header.classList.remove("shadow");
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNCO0FBQ3dCO0FBQ0Y7QUFDRTtBQUNFO0FBQ0Y7QUFDRjtBQUU1QyxTQUFTLFdBQVcsZUFBZSxPQUFPO0FBQ3hDLFdBQVMsY0FBYyxNQUFNLEVBQUUsWUFBWSx1RUFBTyxDQUFDLGNBQWMsSUFBSSxDQUFDO0FBRXRFLDBFQUFRLENBQUMsbUJBQW1CLE1BQU0sWUFBWTtBQUNoRDtBQUVBLE1BQU0sT0FBTyxTQUFTLGNBQWMsT0FBTztBQUMzQyxNQUFNLFNBQVMsc0VBQU0sQ0FBQyxhQUFhO0FBQ25DLE1BQU0sVUFBVSx1RUFBTyxDQUFDLGNBQWM7QUFFdEMsS0FBSyxPQUFPLE9BQU87QUFDbkIsdUVBQU8sQ0FBQyxZQUFZO0FBRXBCLElBQUksT0FBTyxNQUFNLHVFQUFPLENBQUMsWUFBWSxFQUNsQyxLQUFLLENBQUNBLFVBQVM7QUFDZCxNQUFJLENBQUNBLE1BQUssT0FBTztBQUNmO0FBQUEsTUFDRTtBQUFBLE1BQ0EsdUVBQU8sQ0FBQyxjQUFjQSxLQUFJO0FBQUEsTUFDMUIsd0VBQVEsQ0FBQyxlQUFlQSxLQUFJO0FBQUEsTUFDNUIsc0VBQU0sQ0FBQyxhQUFhO0FBQUEsSUFDdEIsRUFBRSxRQUFRLENBQUMsUUFBUTtBQUNqQixXQUFLLGFBQWEsS0FBSyxPQUFPO0FBQUEsSUFDaEMsQ0FBQztBQUVELDJFQUFPLENBQUMsWUFBWTtBQUNwQiwyRUFBTyxDQUFDO0FBQUEsTUFDTkEsTUFBSyxRQUFRLFVBQVU7QUFBQSxNQUN2QkEsTUFBSyxTQUFTO0FBQUEsSUFDaEI7QUFDQSwyRUFBTyxDQUFDLG9CQUFvQkEsTUFBSyxRQUFRO0FBQ3pDLFdBQU9BO0FBQUEsRUFDVCxPQUFPO0FBQ0wsMkVBQU8sQ0FBQyxVQUFVO0FBQUEsRUFDcEI7QUFDRixDQUFDLEVBQ0EsTUFBTSx1RUFBTyxDQUFDLFNBQVM7QUFFMUIsS0FBSyxpQkFBaUIsVUFBVSxPQUFPLE1BQU07QUFDM0MseUVBQU8sQ0FBQyxVQUFVO0FBQ2xCLHlFQUFPLENBQUMsWUFBWTtBQUNwQixRQUFNLFVBQVUsTUFBTSx1RUFBTyxDQUFDLFlBQVksRUFBRSxPQUFPLEtBQUs7QUFFeEQsTUFBSSxDQUFDLFFBQVEsT0FBTztBQUNsQixXQUFPO0FBRVAsZUFBVztBQUNYLDJFQUFPLENBQUM7QUFBQSxNQUNOLEtBQUssUUFBUSxVQUFVO0FBQUEsTUFDdkIsS0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFDQSwyRUFBTyxDQUFDLG9CQUFvQixLQUFLLFFBQVE7QUFBQSxFQUMzQyxPQUFPO0FBQ0wsMkVBQU8sQ0FBQyxVQUFVLFFBQVEsS0FBSztBQUFBLEVBQ2pDO0FBRUEseUVBQU8sQ0FBQyxZQUFZO0FBQ3RCLENBQUM7QUFFRCxLQUFLLGlCQUFpQixVQUFVLE1BQU0sV0FBVyxJQUFJLENBQUM7QUFFdEQsT0FBTyxpQkFBaUIsVUFBVSxNQUFNO0FBQ3RDLFFBQU0sYUFBYTtBQUFBLElBQ2pCLGlCQUFpQixTQUFTLGVBQWUsRUFDdEMsaUJBQWlCLHNCQUFzQixFQUN2QyxRQUFRLE9BQU8sRUFBRTtBQUFBLElBQ3BCO0FBQUEsRUFDRjtBQUVBLFNBQU8sVUFBVSxhQUFhLElBQzFCLE9BQU8sVUFBVSxJQUFJLFFBQVEsSUFDN0IsT0FBTyxVQUFVLE9BQU8sUUFBUTtBQUN0QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL2NvbXBvbmVudHMvVXRpbGl0eS5qc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlci5qc1wiO1xuaW1wb3J0IEN1cnJlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9DdXJyZW50LmpzXCI7XG5pbXBvcnQgRm9yZWNhc3QgZnJvbSBcIi4vY29tcG9uZW50cy9Gb3JlY2FzdC5qc1wiO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vY29tcG9uZW50cy9PdmVybGF5LmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZXcocmV0YWluU2Nyb2xsID0gZmFsc2UpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikucmVwbGFjZVdpdGgoQ3VycmVudC5jcmVhdGVDdXJyZW50KGRhdGEpKTtcblxuICBGb3JlY2FzdC51cGRhdGVGb3JlY2FzdExpc3QoZGF0YSwgcmV0YWluU2Nyb2xsKTtcbn1cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9keVwiKTtcbmNvbnN0IGhlYWRlciA9IEhlYWRlci5jcmVhdGVIZWFkZXIoKTtcbmNvbnN0IG92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZU92ZXJsYXkoKTtcblxuYm9keS5hcHBlbmQob3ZlcmxheSk7XG5PdmVybGF5LnNob3dTcGlubmVyKCk7XG5cbmxldCBkYXRhID0gYXdhaXQgVXRpbGl0eS5nZXRGb3JlY2FzdCgpXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKCFkYXRhLmVycm9yKSB7XG4gICAgICBbXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgQ3VycmVudC5jcmVhdGVDdXJyZW50KGRhdGEpLFxuICAgICAgICBGb3JlY2FzdC5jcmVhdGVGb3JlY2FzdChkYXRhKSxcbiAgICAgICAgRm9vdGVyLmNyZWF0ZUZvb3RlcigpLFxuICAgICAgXS5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoZWxlLCBvdmVybGF5KTtcbiAgICAgIH0pO1xuXG4gICAgICBPdmVybGF5LmhpZGVPdmVybGF5KCk7XG4gICAgICBVdGlsaXR5LmNoYW5nZUJhY2tncm91bmQoXG4gICAgICAgIGRhdGEuY3VycmVudC5jb25kaXRpb24uY29kZSxcbiAgICAgICAgZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgICApO1xuICAgICAgVXRpbGl0eS5jaGFuZ2VEb2N1bWVudFRpdGxlKGRhdGEubG9jYXRpb24pO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIE92ZXJsYXkuc2hvd0Vycm9yKCk7XG4gICAgfVxuICB9KVxuICAuY2F0Y2goT3ZlcmxheS5zaG93RXJyb3IpO1xuXG5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWFyY2hcIiwgYXN5bmMgKGUpID0+IHtcbiAgQ3VycmVudC5oaWRlRXJyb3IoKTtcbiAgT3ZlcmxheS5zaG93U3Bpbm5lcigpO1xuICBjb25zdCBuZXdEYXRhID0gYXdhaXQgVXRpbGl0eS5nZXRGb3JlY2FzdChlLmRldGFpbC5xdWVyeSk7XG5cbiAgaWYgKCFuZXdEYXRhLmVycm9yKSB7XG4gICAgZGF0YSA9IG5ld0RhdGE7XG5cbiAgICB1cGRhdGVWaWV3KCk7XG4gICAgVXRpbGl0eS5jaGFuZ2VCYWNrZ3JvdW5kKFxuICAgICAgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5jb2RlLFxuICAgICAgZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXG4gICAgKTtcbiAgICBVdGlsaXR5LmNoYW5nZURvY3VtZW50VGl0bGUoZGF0YS5sb2NhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgQ3VycmVudC5zaG93RXJyb3IobmV3RGF0YS5lcnJvcik7XG4gIH1cblxuICBPdmVybGF5LmhpZGVPdmVybGF5KCk7XG59KTtcblxuYm9keS5hZGRFdmVudExpc3RlbmVyKFwidG9nZ2xlXCIsICgpID0+IHVwZGF0ZVZpZXcodHJ1ZSkpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gIGNvbnN0IGJyZWFrcG9pbnQgPSBwYXJzZUludChcbiAgICBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudClcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1tYWluLXBhZGRpbmctYmxvY2tcIilcbiAgICAgIC5yZXBsYWNlKC9cXEQvZywgXCJcIiksXG4gICAgMTAsXG4gICk7XG5cbiAgd2luZG93LnNjcm9sbFkgPiBicmVha3BvaW50IC8gMlxuICAgID8gaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzaGFkb3dcIilcbiAgICA6IGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic2hhZG93XCIpO1xufSk7XG4iXSwibmFtZXMiOlsiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceURL=webpack-internal:///471
`)}},__webpack_module_cache__={};function __webpack_require__(I){var B=__webpack_module_cache__[I];if(B!==void 0)return B.exports;var g=__webpack_module_cache__[I]={id:I,exports:{}};return __webpack_modules__[I](g,g.exports,__webpack_require__),g.exports}__webpack_require__.m=__webpack_modules__,(()=>{var I=typeof Symbol=="function"?Symbol("webpack queues"):"__webpack_queues__",B=typeof Symbol=="function"?Symbol("webpack exports"):"__webpack_exports__",g=typeof Symbol=="function"?Symbol("webpack error"):"__webpack_error__",n=C=>{C&&C.d<1&&(C.d=1,C.forEach(F=>F.r--),C.forEach(F=>F.r--?F.r++:F()))},b=C=>C.map(F=>{if(F!==null&&typeof F=="object"){if(F[I])return F;if(F.then){var U=[];U.d=0,F.then(t=>{Q[B]=t,n(U)},t=>{Q[g]=t,n(U)});var Q={};return Q[I]=t=>t(U),Q}}var i={};return i[I]=t=>{},i[B]=F,i});__webpack_require__.a=(C,F,U)=>{var Q;U&&((Q=[]).d=-1);var i=new Set,t=C.exports,d,G,a,s=new Promise((c,A)=>{a=A,G=c});s[B]=t,s[I]=c=>(Q&&c(Q),i.forEach(c),s.catch(A=>{})),C.exports=s,F(c=>{d=b(c);var A,Z=()=>d.map(e=>{if(e[g])throw e[g];return e[B]}),X=new Promise(e=>{A=()=>e(Z),A.r=0;var u=l=>l!==Q&&!i.has(l)&&(i.add(l),l&&!l.d&&(A.r++,l.push(A)));d.map(l=>l[I](u))});return A.r?X:Z()},c=>(c?a(s[g]=c):G(t),n(Q))),Q&&Q.d<0&&(Q.d=0)}})(),__webpack_require__.n=I=>{var B=I&&I.__esModule?()=>I.default:()=>I;return __webpack_require__.d(B,{a:B}),B},__webpack_require__.d=(I,B)=>{for(var g in B)__webpack_require__.o(B,g)&&!__webpack_require__.o(I,g)&&Object.defineProperty(I,g,{enumerable:!0,get:B[g]})},__webpack_require__.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),__webpack_require__.o=(I,B)=>Object.prototype.hasOwnProperty.call(I,B),(()=>{var I;__webpack_require__.g.importScripts&&(I=__webpack_require__.g.location+"");var B=__webpack_require__.g.document;if(!I&&B&&(B.currentScript&&(I=B.currentScript.src),!I)){var g=B.getElementsByTagName("script");if(g.length)for(var n=g.length-1;n>-1&&(!I||!/^http(s?):/.test(I));)I=g[n--].src}if(!I)throw new Error("Automatic publicPath is not supported in this browser");I=I.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=I})(),(()=>{__webpack_require__.b=document.baseURI||self.location.href;var I={792:0}})(),__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__(471)})();
