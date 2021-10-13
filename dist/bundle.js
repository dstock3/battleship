(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 900px;\n    width: 925px;\n    border: 1px solid black;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 750px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 750px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.player-board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 750px;\n    width: 750px;\n    margin: auto;\n    border: 1px solid black;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid black;\n    width: 100%;\n    height: 10%;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],d=o[s]||0,p="".concat(s," ").concat(d);o[s]=d+1;var u=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=a(h,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var l=r(e,a),s=0;s<o.length;s++){var d=n(o[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),l=n.n(c),s=n(216),d=n.n(s),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.getElementsByTagName("body")[0],v=document.createElement("header"),y=document.createElement("h1");y.textContent="battleship",v.appendChild(y),m.appendChild(v);let g=(()=>{const e=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,a=new Object;a.coord=`${r+n}`,a.isOccupied=!1,a.isHit=!1,t.push(a)}}})();return{letterArray:e,createGrid:n,placeShip:(e,t)=>{var n,r,a;return{base:(n=e[1],r=e[2],a=e[3],{length:n,hitCount:r,status:a,hit:e=>{r[e]=!0},isSunk:()=>r.every((e=>!0===e))}),type:e[0],coords:t}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)}}})();let t=document.createElement("div");m.appendChild(t),t.classList.add("outer-board");let n=document.createElement("div");n.classList.add("num-container"),t.appendChild(n);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),n.appendChild(t)}let r=document.createElement("div");r.classList.add("board-container"),t.appendChild(r);let a=document.createElement("div");a.classList.add("letter-container"),r.appendChild(a);for(let t=0;t<e.letterArray.length;t++){let n=document.createElement("div");n.textContent=e.letterArray[t],n.classList.add("letter"),a.appendChild(n)}let o=document.createElement("div");o.classList.add("player-board"),r.appendChild(o);for(let t=0;t<e.letterArray.length;t++){let n=document.createElement("div");n.classList.add("col"),n.id=e.letterArray[t],o.appendChild(n)}let i=[];for(let t=0;t<e.spaceArray.length;t++){let n=e.spaceArray[t],r=document.createElement("div");r.classList.add("space"),r.id=n.coord,i.push(r)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<i.length;e++){let t=i[e];for(let e=0;e<c.length;e++)t.id.charAt(0)===c[e].id&&c[e].appendChild(t)}return{newBoard:e}})(),b=["carrier",5,[!1,!1,!1,!1,!1],"active"],x=["battleship",4,[!1,!1,!1,!1],"active"],C=["cruiser",3,[!1,!1,!1],"active"],A=["submarine",3,[!1,!1,!1],"active"],w=["destroyer",2,[!1,!1],"active"];const E=e=>{const t=Array.from(document.getElementsByClassName("space"));for(let n=0;n<e.coords.length;n++)for(let r=0;r<t.length;r++)e.coords[n]===t[r].id&&(t[r].style.backgroundColor="#93989c")},S=[g.newBoard.placeShip(x,["A1","A2","A3","A4"]),g.newBoard.placeShip(C,["C5","C6","C7"]),g.newBoard.placeShip(b,["D2","E2","F2","G2","H2"]),g.newBoard.placeShip(A,["F10","F9","F8"]),g.newBoard.placeShip(w,["H7","H6"])];for(let e=0;e<S.length;e++)E(S[e])})()})();