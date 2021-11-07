(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #0377fc;\n    background-color: #e4e4e4;\n}\n\n/* position prompt */\n.prompt-container {\n    position: absolute;\n    top: 7%;\n    left: 27%;\n    z-index: 2;\n    background-color: #e4e4e4;\n    border-radius: 15px;\n    \n}\n\n.prompt-message {\n    font-size: 1.5em;\n    text-align: center;\n    position: fixed;\n    padding: .5%;\n    top: 85%;\n    left: 44%;\n    z-index: 2;\n    width: 10%;\n    background-color: #e4e4e4;\n    border: 5px solid #0377fc;\n}\n\n#prompt-container {\n    padding-right: 5%;\n}\n\n.controls {\n    position: relative;\n    right: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 15%;\n    \n}\n\n.rotate {\n    text-align: center;\n    padding: 10%;\n    border: 2px solid #0377fc;\n    margin: 0 0 25% 0;\n    cursor: pointer;\n}\n\n.rotate:hover {\n    background-color: #0377fc21;\n}\n\n.position-display {\n    text-align: center;\n    border: 2px solid #0377fc;\n    font-size: 1.5em;\n    padding: 10%;\n}\n\n.position-display:hover {\n    background-color: #0377fc21;\n}\n\n/* gameboards */\n\n.master-container {\n    display: flex;\n    z-index: 1;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 800px;\n    width: 825px;\n    border: 5px solid #0377fc;\n    border-radius: 15px;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 650px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 650px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 650px;\n    width: 650px;\n    margin: auto;\n    border: 1px solid #0377fc;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid #0377fc;\n    width: 100%;\n    height: 10%;\n}\n\n#miss {\n    \n    font-size: 2em;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}\n\n@media only screen and (max-width: 600px) {\n    .master-container {\n        flex-direction: column;\n        width: 100%;\n    }\n\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),l=n(565),s=n.n(l),c=n(216),d=n.n(c),p=n(589),u=n.n(p),h=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=document.createElement("header"),g=document.createElement("h1");g.textContent="battleship",m.appendChild(g);const y=document.getElementsByTagName("body")[0];y.appendChild(m);const v=document.createElement("div");v.classList.add("master-container"),y.appendChild(v);const C=(e,t)=>{const n=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,o=new Object;o.coord=`${r+n}`,o.isOccupied=!1,o.isHit=!1,t.push(o)}}})(),r=()=>{let t=Math.floor(Math.random()*e.length),n=e[t],r=Math.floor(10*Math.random())+1,o=n+r,a=function(){let e;return e=0===Math.floor(2*Math.random())?"vert":"hor",e}(),i=function(t,n,r){let o;if("vert"===t&&(o=r<=5),"hor"===t)for(let t=0;t<e.length;t++)n===e[t]&&(o=t<5);return o}(a,n,r);return{orientation:a,position:i,startingCoord:o}},o=t=>{let n,o=r(),a=[o.startingCoord];if(o.startingCoord.charAt(2)){let e=o.startingCoord.charAt(1)+o.startingCoord.charAt(2);n=parseInt(e)}else n=parseInt(o.startingCoord.charAt(1));if("vert"===o.orientation&&o.position)for(let e=1;e<t;e++){n+=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("vert"===o.orientation&&!o.position)for(let e=1;e<t;e++){n-=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("hor"===o.orientation&&o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o+=1;let t=e[o]+n;a.push(t)}}if("hor"===o.orientation&&!o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o-=1;let t=e[o]+n;a.push(t)}}return a};function a(e,t,n){let i=0;for(let n=0;n<t.length;n++)t[n].some((t=>e.indexOf(t)>=0))&&(i+=1);return i>0?(r(),a(o(n),t,n)):e}return{letterArray:e,createGrid:n,placeShip:(e,n)=>{let r=(i=e[1],l=e[2],s=e[3],{length:i,hitCount:l,status:s,hit:e=>{l[e]=!0},isSunk:()=>l.every((e=>!0===e))}),o=e[0],a=n;var i,l,s;for(let e=0;e<a.length;e++)for(let n=0;n<t.length;n++)a[e]===t[n].coord&&(t[n].isOccupied=!0);return{base:r,type:o,coords:a}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)},determineOrientation:r,determineCoords:o,assignPositions:()=>{let e=[],t=o(5);e.push(t);let n=a(o(4),e,4);e.push(n);let r=a(o(3),e,3);e.push(r);let i=a(o(3),e,3);e.push(i);let l=a(o(2),e,2);return e.push(l),e}}})();let r=document.createElement("div");t.appendChild(r),r.classList.add("outer-board"),r.id=e;let o=document.createElement("div");o.classList.add("num-container"),r.appendChild(o);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),o.appendChild(t)}let a=document.createElement("div");a.classList.add("board-container"),r.appendChild(a);let i=document.createElement("div");i.classList.add("letter-container"),a.appendChild(i);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.textContent=n.letterArray[e],t.classList.add("letter"),i.appendChild(t)}let l=document.createElement("div");l.classList.add("board"),l.id=`${e}`,a.appendChild(l);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.classList.add("col"),t.id=n.letterArray[e],l.appendChild(t)}let s=[];for(let t=0;t<n.spaceArray.length;t++){let r=n.spaceArray[t],o=document.createElement("div");o.classList.add("space"),o.id=e.charAt(0)+r.coord,s.push(o)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<s.length;e++){let t=s[e];for(let e=0;e<c.length;e++)t.id.charAt(1)===c[e].id&&c[e].appendChild(t)}return{newBoard:n,spaceElements:s,outerBoard:r,boardContainer:a}},b=C("player",v),x=["carrier",5,[!1,!1,!1,!1,!1],"active"],w=["battleship",4,[!1,!1,!1,!1],"active"],E=["cruiser",3,[!1,!1,!1],"active"],A=["submarine",3,[!1,!1,!1],"active"],B=["destroyer",2,[!1,!1],"active"],k=(e,t)=>{for(let n=0;n<t.coords.length;n++)for(let r=0;r<e.spaceElements.length;r++){let o=e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"");t.coords[n]===o&&(e.spaceElements[r].style.backgroundColor="#0377fc",e.spaceElements[r].classList.add("occupied"))}},L=(e,t,n)=>{let r,o=n[0],a=n[1],i="hor";document.querySelector(".rotate").addEventListener("click",(function(){r=(e=>"vert"===e?"hor":"hor"===e?"vert":void 0)(i),r&&(i=r)}));let l=(e=>{let t=[],n=[];for(let r=0;r<e.spaceElements.length;r++){let o=e.spaceElements[r];o.classList.contains("occupied")?(n.push(o),o.style.backgroundColor="#0377fc"):t.push(o)}return[t,n]})(e),s=l[0],c=l[1];for(let n=0;n<s.length;n++){let r,l=s[n],d=l.id.replace(l.id.charAt(0),""),p=d.charAt(0);if(d.charAt(2)){let e=d.charAt(1)+d.charAt(2);r=parseInt(e)}else r=parseInt(d.charAt(1));function u(){document.querySelector(".position-display").textContent=d,l.style.cursor="pointer";let n=[];if("vert"===i){let e;if(5==a&&(e=7),4==a&&(e=8),3==a&&(e=9),2==a&&(e=10),r<e){for(let e=0;e<a;e++){let t=r+e,o=document.getElementById("c"+p+t);n.push(o),o.style.backgroundColor="#0377fc"}for(let e=0;e<n.length;e++)for(let t=0;t<c.length;t++)if(c[t]===n[e])for(let t=0;t<n.length;t++)if(n[t]===n[e])n[t].style.backgroundColor="#0377fc";else{n[t].style.backgroundColor="#0377fc18";for(let e=0;e<c.length;e++)c[e].style.backgroundColor="#0377fc"}let e=[];function i(){for(let t=0;t<a;t++){let n=p+(r+t);e.push(n)}return e}l.addEventListener("click",(function(){let e=i();t[`${o}`]=e,document.querySelector(".prompt-container").remove();let n=S();P(t,n)}))}}if("hor"===i){let i,s=e.newBoard.letterArray;5==a&&(i=6),4==a&&(i=7),3==a&&(i=8),2==a&&(i=9);let d=[];for(let e=0;e<s.length;e++)if(p===s[e]){if(e<i)for(let t=0;t<a;t++){let o=s[e+t],a=document.getElementById("c"+o+`${r}`);n.push(a);let i=o+`${r}`;d.push(i),a.style.backgroundColor="#0377fc"}for(let e=0;e<n.length;e++)for(let t=0;t<c.length;t++)if(c[t]===n[e])for(let t=0;t<n.length;t++)if(n[t]===n[e])n[t].style.backgroundColor="#0377fc";else{n[t].style.backgroundColor="#0377fc18";for(let e=0;e<c.length;e++)c[e].style.backgroundColor="#0377fc"}}function u(){return d}l.addEventListener("click",(function(){let e=u();t[`${o}`]=e,document.querySelector(".prompt-container").remove();let n=S();P(t,n)}))}l.addEventListener("mouseout",(function(){for(let e=0;e<s.length;e++)for(let t=0;t<n.length;t++)s[e]===n[t]&&(n[t].style.backgroundColor="#0377fc18")}))}l.addEventListener("mouseover",u)}},S=()=>{const e=document.createElement("div");e.classList.add("prompt-container"),y.appendChild(e);const t=C("choose",e);e.style.backgroundColor="#b2d1f5",t.outerBoard.id="prompt-frame",t.boardContainer.id="prompt-container";const n=document.createElement("div");n.classList.add("controls"),t.outerBoard.appendChild(n);const r=document.createElement("div");r.classList.add("rotate"),r.textContent="Rotate Ship",n.appendChild(r);const o=document.createElement("div");o.classList.add("position-display"),o.textContent="A1",n.appendChild(o);const a=document.createElement("div");a.classList.add("prompt-message"),y.appendChild(a),a.textContent="Choose Your Positions!",y.style.backgroundColor="#001f4265";let i=Array.from(y.children);for(let e=0;e<i.length;e++){let t=i[e];"prompt-container"!==t.classList[0]&&(t.style.opacity="100%"),"master-container"===t.classList[0]&&(t.style.opacity="25%")}return{promptContainer:e,promptBoard:t,rotateShip:r,promptMessage:a,childElements:i,positionDisplay:o}};function P(e,t){e.hasOwnProperty("carrier")?e.hasOwnProperty("battleship")?e.hasOwnProperty("cruiser")?e.hasOwnProperty("submarine")?e.hasOwnProperty("destroyer")?e.hasOwnProperty("carrier")&&e.hasOwnProperty("battleship")&&e.hasOwnProperty("cruiser")&&e.hasOwnProperty("submarine")&&e.hasOwnProperty("destroyer")&&((e=>{const t=[b.newBoard.placeShip(w,e.battleship),b.newBoard.placeShip(E,e.cruiser),b.newBoard.placeShip(x,e.carrier),b.newBoard.placeShip(A,e.submarine),b.newBoard.placeShip(B,e.destroyer)];for(let e=0;e<t.length;e++)k(b,t[e])})(e),document.querySelector(".prompt-container").remove(),document.getElementsByClassName("master-container")[0].style.opacity="100%"):(L(t.promptBoard,e,B),t.promptMessage.textContent="Place your Destroyer!"):(L(t.promptBoard,e,A),t.promptMessage.textContent="Place your Submarine!"):(L(t.promptBoard,e,E),t.promptMessage.textContent="Place your Cruiser!"):(L(t.promptBoard,e,w),t.promptMessage.textContent="Place your Battleship!"):(L(t.promptBoard,e,x),t.promptMessage.textContent="Place your Carrier!")}(()=>{const e=C("enemy",v),t=e.newBoard.assignPositions(),n=e.newBoard.placeShip(x,t[0]);e.newBoard.placeShip(w,t[1]),e.newBoard.placeShip(E,t[2]),e.newBoard.placeShip(A,t[3]),e.newBoard.placeShip(B,t[4])})(),P({},S())})()})();