(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #0377fc;\n    background-color: #e4e4e4;\n}\n\n/* position prompt */\n.prompt-container {\n    position: absolute;\n    top: 7%;\n    left: 27%;\n    z-index: 2;\n    background-color: #e4e4e4;\n}\n\n.prompt-message {\n    font-size: 1.5em;\n    text-align: center;\n    position: fixed;\n    padding: .5%;\n    top: 85%;\n    left: 44%;\n    z-index: 2;\n    width: 10%;\n    background-color: #e4e4e4;\n    border: 5px solid #0377fc;\n}\n\n/* gameboards */\n\n.master-container {\n    display: flex;\n    z-index: 1;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 800px;\n    width: 825px;\n    border: 5px solid #0377fc;\n    border-radius: 15px;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 650px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 650px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 650px;\n    width: 650px;\n    margin: auto;\n    border: 1px solid #0377fc;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid #0377fc;\n    width: 100%;\n    height: 10%;\n}\n\n#miss {\n    \n    font-size: 2em;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}\n\n@media only screen and (max-width: 600px) {\n    .master-container {\n        flex-direction: column;\n        width: 100%;\n    }\n\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),d=n.n(c),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.createElement("header"),v=document.createElement("h1");v.textContent="battleship",m.appendChild(v);const g=document.getElementsByTagName("body")[0];g.appendChild(m);const y=document.createElement("div");y.classList.add("master-container"),g.appendChild(y);const x=(e,t)=>{const n=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,o=new Object;o.coord=`${r+n}`,o.isOccupied=!1,o.isHit=!1,t.push(o)}}})(),r=()=>{let t=Math.floor(Math.random()*e.length),n=e[t],r=Math.floor(10*Math.random())+1,o=n+r,a=function(){let e;return e=0===Math.floor(2*Math.random())?"vert":"hor",e}(),i=function(t,n,r){let o;if("vert"===t&&(o=r<=5),"hor"===t)for(let t=0;t<e.length;t++)n===e[t]&&(o=t<5);return o}(a,n,r);return{orientation:a,position:i,startingCoord:o}},o=t=>{let n,o=r(),a=[o.startingCoord];if(o.startingCoord.charAt(2)){let e=o.startingCoord.charAt(1)+o.startingCoord.charAt(2);n=parseInt(e)}else n=parseInt(o.startingCoord.charAt(1));if("vert"===o.orientation&&o.position)for(let e=1;e<t;e++){n+=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("vert"===o.orientation&&!o.position)for(let e=1;e<t;e++){n-=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("hor"===o.orientation&&o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o+=1;let t=e[o]+n;a.push(t)}}if("hor"===o.orientation&&!o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o-=1;let t=e[o]+n;a.push(t)}}return a};function a(e,t,n){let i=0;for(let n=0;n<t.length;n++)t[n].some((t=>e.indexOf(t)>=0))&&(i+=1);return i>0?(r(),a(o(n),t,n)):e}return{letterArray:e,createGrid:n,placeShip:(e,n)=>{let r=(i=e[1],s=e[2],l=e[3],{length:i,hitCount:s,status:l,hit:e=>{s[e]=!0},isSunk:()=>s.every((e=>!0===e))}),o=e[0],a=n;var i,s,l;for(let e=0;e<a.length;e++)for(let n=0;n<t.length;n++)a[e]===t[n].coord&&(t[n].isOccupied=!0);return{base:r,type:o,coords:a}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)},determineOrientation:r,determineCoords:o,assignPositions:()=>{let e=[],t=o(5);e.push(t);let n=a(o(4),e,4);e.push(n);let r=a(o(3),e,3);e.push(r);let i=a(o(3),e,3);e.push(i);let s=a(o(2),e,2);return e.push(s),e}}})();let r=document.createElement("div");t.appendChild(r),r.classList.add("outer-board"),r.id=e;let o=document.createElement("div");o.classList.add("num-container"),r.appendChild(o);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),o.appendChild(t)}let a=document.createElement("div");a.classList.add("board-container"),r.appendChild(a);let i=document.createElement("div");i.classList.add("letter-container"),a.appendChild(i);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.textContent=n.letterArray[e],t.classList.add("letter"),i.appendChild(t)}let s=document.createElement("div");s.classList.add("board"),s.id=`${e}`,a.appendChild(s);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.classList.add("col"),t.id=n.letterArray[e],s.appendChild(t)}let l=[];for(let t=0;t<n.spaceArray.length;t++){let r=n.spaceArray[t],o=document.createElement("div");o.classList.add("space"),o.id=e.charAt(0)+r.coord,l.push(o)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<l.length;e++){let t=l[e];for(let e=0;e<c.length;e++)t.id.charAt(1)===c[e].id&&c[e].appendChild(t)}return{newBoard:n,spaceElements:l}},b=(x("player",y),{carrier:["carrier",5,[!1,!1,!1,!1,!1],"active"],battleship:["battleship",4,[!1,!1,!1,!1],"active"],cruiser:["cruiser",3,[!1,!1,!1],"active"],submarine:["submarine",3,[!1,!1,!1],"active"],destroyer:["destroyer",2,[!1,!1],"active"]});(()=>{const e=x("enemy",y),t=e.newBoard.assignPositions(),n=e.newBoard.placeShip(b.carrier,t[0]);e.newBoard.placeShip(b.battleship,t[1]),e.newBoard.placeShip(b.cruiser,t[2]),e.newBoard.placeShip(b.submarine,t[3]),e.newBoard.placeShip(b.destroyer,t[4])})(),(()=>{const e=document.createElement("div");e.classList.add("prompt-container"),g.appendChild(e),x("choose",e),e.style.backgroundColor="#b2d1f5";const t=document.createElement("div");t.classList.add("prompt-message"),g.appendChild(t),t.textContent="Choose Your Positions!",g.style.backgroundColor="#001f4265";let n=Array.from(g.children);for(let e=0;e<n.length;e++){let t=n[e];"prompt-container"!==t.classList[0]&&(t.style.opacity="100%"),"master-container"===t.classList[0]&&(t.style.opacity="25%")}})()})()})();