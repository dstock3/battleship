(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),c=n.n(o)()(a());c.push([e.id,".player-board {\n    display: flex;\n    height: 750px;\n    width: 750px;\n    margin: auto;\n    border: 1px solid black;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid black;\n    width: 100%;\n    height: 10%;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),c=n.n(o),i=n(565),s=n.n(i),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=document.getElementsByTagName("body")[0],m=document.createElement("header"),y=document.createElement("h1");y.textContent="battleship",m.appendChild(y),v.appendChild(m),(()=>{const e=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,a=new Object;a.coord=`${r+n}`,a.isOccupied=!1,a.isHit=!1,t.push(a)}}})();return{letterArray:e,createGrid:n,placeShip:(e,t)=>{var n,r,a;return{base:(n=e[1],r=e[2],a=e[3],{length:n,hitCount:r,status:a,hit:e=>{r[e]=!0},isSunk:()=>r.every((e=>!0===e))}),type:e[0],coords:t}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)}}})();let t=document.createElement("div");t.classList.add("player-board"),v.appendChild(t);for(let n=0;n<e.letterArray.length;n++){let r=document.createElement("div");r.classList.add("col"),r.id=e.letterArray[n],t.appendChild(r)}let n=[];for(let t=0;t<e.spaceArray.length;t++){let r=e.spaceArray[t],a=document.createElement("div");a.classList.add("space"),a.id=r.coord,n.push(a)}let r=Array.from(document.getElementsByClassName("col"));for(let e=0;e<n.length;e++){let t=n[e];for(let e=0;e<r.length;e++)t.id.charAt(0)===r[e].id&&r[e].appendChild(t)}})()})()})();