(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #0377fc;\n    background-color: #e4e4e4;\n}\n\n/* position prompt */\n.prompt-container {\n    position: absolute;\n    top: 8%;\n    left: 28%;\n    z-index: 2;\n    background-color: #e4e4e4;\n    border-radius: 15px;\n}\n\n.prompt-message {\n    font-size: 1.5em;\n    text-align: center;\n    position: absolute;\n    padding: .5%;\n    top: 85%;\n    left: 43%;\n    z-index: 2;\n    width: 10%;\n    background-color: #e4e4e4;\n    border: 5px solid #0377fc;\n}\n\n#prompt-container {\n    padding-right: 5%;\n}\n\n.controls {\n    position: relative;\n    right: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 15%;\n}\n\n.rotate {\n    text-align: center;\n    padding: 10%;\n    border: 2px solid #0377fc;\n    margin: 0 0 25% 0;\n    cursor: pointer;\n}\n\n.rotate:hover {\n    background-color: #0377fc21;\n}\n\n.position-display {\n    text-align: center;\n    border: 2px solid #0377fc;\n    font-size: 1.5em;\n    padding: 10%;\n}\n\n.position-display:hover {\n    background-color: #0377fc21;\n}\n\n/* gameboards */\n\n.master-container {\n    display: flex;\n    z-index: 1;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 800px;\n    width: 825px;\n    border: 5px solid #0377fc;\n    border-radius: 15px;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 650px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 650px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 650px;\n    width: 650px;\n    margin: auto;\n    border: 1px solid #0377fc;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid #0377fc;\n    width: 100%;\n    height: 10%;\n}\n\n#miss {\n    \n    font-size: 2em;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}\n\n@media only screen and (max-width: 600px) {\n    .master-container {\n        flex-direction: column;\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 3.25em;\n    }\n\n    .prompt-container {\n        left: 0;\n        top: 25%;\n        align-self: center;\n    }\n}",""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=o(h,r);r.byIndex=l,t.splice(l,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=n(a[i]);t[l].references--}for(var s=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),l=n(565),s=n.n(l),c=n(216),d=n.n(c),p=n(589),u=n.n(p),h=n(426),m={};m.styleTagTransform=u(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),t()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const f=document.createElement("header"),g=document.createElement("h1");g.textContent="battleship",f.appendChild(g);const y=document.getElementsByTagName("body")[0];y.appendChild(f);const v=document.createElement("div");v.classList.add("master-container"),y.appendChild(v);const C=(e,t)=>{const n=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,o=new Object;o.coord=`${r+n}`,o.isOccupied=!1,o.isHit=!1,t.push(o)}}})(),r=()=>{let t=Math.floor(Math.random()*e.length),n=e[t],r=Math.floor(10*Math.random())+1,o=n+r,a=function(){let e;return e=0===Math.floor(2*Math.random())?"vert":"hor",e}(),i=function(t,n,r){let o;if("vert"===t&&(o=r<=5),"hor"===t)for(let t=0;t<e.length;t++)n===e[t]&&(o=t<5);return o}(a,n,r);return{orientation:a,position:i,startingCoord:o}},o=t=>{let n,o=r(),a=[o.startingCoord];if(o.startingCoord.charAt(2)){let e=o.startingCoord.charAt(1)+o.startingCoord.charAt(2);n=parseInt(e)}else n=parseInt(o.startingCoord.charAt(1));if("vert"===o.orientation&&o.position)for(let e=1;e<t;e++){n+=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("vert"===o.orientation&&!o.position)for(let e=1;e<t;e++){n-=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("hor"===o.orientation&&o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o+=1;let t=e[o]+n;a.push(t)}}if("hor"===o.orientation&&!o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o-=1;let t=e[o]+n;a.push(t)}}return a};function a(e,t,n){let i=0;for(let n=0;n<t.length;n++)t[n].some((t=>e.indexOf(t)>=0))&&(i+=1);return i>0?(r(),a(o(n),t,n)):e}return{letterArray:e,createGrid:n,placeShip:(e,n)=>{let r=(i=e[1],l=e[2],s=e[3],{length:i,hitCount:l,status:s,hit:e=>{l[e]=!0},isSunk:()=>l.every((e=>!0===e))}),o=e[0],a=n;var i,l,s;for(let e=0;e<a.length;e++)for(let n=0;n<t.length;n++)a[e]===t[n].coord&&(t[n].isOccupied=!0);return{base:r,type:o,coords:a}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)},determineOrientation:r,determineCoords:o,assignPositions:()=>{let e=[],t=o(5);e.push(t);let n=a(o(4),e,4);e.push(n);let r=a(o(3),e,3);e.push(r);let i=a(o(3),e,3);e.push(i);let l=a(o(2),e,2);return e.push(l),e}}})();let r=document.createElement("div");t.appendChild(r),r.classList.add("outer-board"),r.id=e;let o=document.createElement("div");o.classList.add("num-container"),r.appendChild(o);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),o.appendChild(t)}let a=document.createElement("div");a.classList.add("board-container"),r.appendChild(a);let i=document.createElement("div");i.classList.add("letter-container"),a.appendChild(i);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.textContent=n.letterArray[e],t.classList.add("letter"),i.appendChild(t)}let l=document.createElement("div");l.classList.add("board"),l.id=`${e}`,a.appendChild(l);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.classList.add("col"),t.id=n.letterArray[e],l.appendChild(t)}let s=[];for(let t=0;t<n.spaceArray.length;t++){let r=n.spaceArray[t],o=document.createElement("div");o.classList.add("space"),o.id=e.charAt(0)+r.coord,s.push(o)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<s.length;e++){let t=s[e];for(let e=0;e<c.length;e++)t.id.charAt(1)===c[e].id&&c[e].appendChild(t)}return{newBoard:n,spaceElements:s,outerBoard:r,boardContainer:a}},b=C("player",v),x=["carrier",5,[!1,!1,!1,!1,!1],"active"],E=["battleship",4,[!1,!1,!1,!1],"active"],w=["cruiser",3,[!1,!1,!1],"active"],A=["submarine",3,[!1,!1,!1],"active"],B=["destroyer",2,[!1,!1],"active"],S=(e,t)=>{console.log(t);for(let n=0;n<t.coords.length;n++)for(let r=0;r<e.spaceElements.length;r++){let o=e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"");t.coords[n]===o&&(e.spaceElements[r].style.backgroundColor="#0377fc",e.spaceElements[r].classList.add("occupied"))}},k=(e,t)=>{for(let n=0;n<e.spaceElements.length;n++){let r=e.spaceElements[n];r.classList.contains("occupied")&&t.push(r.id)}return t},L=(e,t,n,r)=>{let o,a=n[0],i=n[1],l="hor";document.querySelector(".rotate").addEventListener("click",(function(){o=(e=>"vert"===e?"hor":"hor"===e?"vert":void 0)(l),o&&(l=o)}));let s=((e,t)=>{let n=[],r=[];for(let o=0;o<e.spaceElements.length;o++){let a=e.spaceElements[o];for(let e=0;e<t.length;e++)a.id===t[e]&&a.classList.add("occupied");a.classList.contains("occupied")?(r.push(a),a.style.backgroundColor="#0377fc"):n.push(a)}return[n,r]})(e,r),c=s[0],d=s[1];for(let o=0;o<c.length;o++){let s,p=c[o],u=p.id.replace(p.id.charAt(0),""),h=u.charAt(0);if(u.charAt(2)){let e=u.charAt(1)+u.charAt(2);s=parseInt(e)}else s=parseInt(u.charAt(1));function m(){document.querySelector(".position-display").textContent=u,p.style.cursor="pointer";let o=[];function m(e){p.addEventListener("mouseout",(function(){for(let e=0;e<c.length;e++)for(let t=0;t<o.length;t++)c[e]===o[t]&&(o[t].style.backgroundColor="#0377fc18");p.removeEventListener("click",e)}))}if("vert"===l){let e;if(5==i&&(e=7),4==i&&(e=8),3==i&&(e=9),2==i&&(e=10),s<e){for(let e=0;e<i;e++){let t=s+e,n=document.getElementById("c"+h+t);o.push(n),n.style.backgroundColor="#0377fc"}for(let e=0;e<o.length;e++)for(let t=0;t<d.length;t++)if(d[t]===o[e])for(let t=0;t<o.length;t++)if(o[t]===o[e])o[t].style.backgroundColor="#0377fc";else{o[t].style.backgroundColor="#0377fc18";for(let e=0;e<d.length;e++)d[e].style.backgroundColor="#0377fc"}let e=[];function l(){for(let t=0;t<i;t++){let n=h+(s+t);e.push(n)}t[`${a}`]=e,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let o=P(),l=o.promptBoard.newBoard.placeShip(n,e);S(o.promptBoard,l);let c=k(o.promptBoard,r);M(t,o,c)}p.addEventListener("click",l),m(l)}}if("hor"===l){let l,c=e.newBoard.letterArray;5==i&&(l=6),4==i&&(l=7),3==i&&(l=8),2==i&&(l=9);let u=[];for(let e=0;e<c.length;e++)if(h===c[e]){if(e<l)for(let t=0;t<i;t++){let n=c[e+t],r=document.getElementById("c"+n+`${s}`);o.push(r);let a=n+`${s}`;u.push(a),r.style.backgroundColor="#0377fc"}for(let e=0;e<o.length;e++)for(let t=0;t<d.length;t++)if(d[t]===o[e])for(let t=0;t<o.length;t++)if(o[t]===o[e])o[t].style.backgroundColor="#0377fc";else{o[t].style.backgroundColor="#0377fc18";for(let e=0;e<d.length;e++)d[e].style.backgroundColor="#0377fc"}}function f(){t[`${a}`]=u,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let e=P(),o=e.promptBoard.newBoard.placeShip(n,u);S(e.promptBoard,o);let i=k(e.promptBoard,r);M(t,e,i)}p.addEventListener("click",f),m(f)}}p.addEventListener("mouseover",m)}},P=()=>{const e=document.getElementsByClassName("master-container")[0],t=document.createElement("div");t.classList.add("prompt-container"),e.appendChild(t);const n=C("choose",t);t.style.backgroundColor="#b2d1f5",n.outerBoard.id="prompt-frame",n.boardContainer.id="prompt-container";const r=document.createElement("div");r.classList.add("controls"),n.outerBoard.appendChild(r);const o=document.createElement("div");o.classList.add("rotate"),o.textContent="Rotate Ship",r.appendChild(o);const a=document.createElement("div");a.classList.add("position-display"),a.textContent="A1",r.appendChild(a);const i=document.createElement("div");i.classList.add("prompt-message"),y.appendChild(i),i.textContent="Choose Your Positions!",y.style.backgroundColor="#001f4265";let l=Array.from(e.children);for(let e=0;e<l.length;e++){let t=l[e];"prompt-container"!==t.classList[0]?(t.style.backgroundColor="#001f4265",t.style.opacity="25%"):t.style.opacity="100%"}return{promptContainer:t,promptBoard:n,rotateShip:o,promptMessage:i,childElements:l,positionDisplay:a}};function M(e,t,n){if(e.hasOwnProperty("carrier"))if(e.hasOwnProperty("battleship"))if(e.hasOwnProperty("cruiser"))if(e.hasOwnProperty("submarine"))if(e.hasOwnProperty("destroyer")){if(e.hasOwnProperty("carrier")&&e.hasOwnProperty("battleship")&&e.hasOwnProperty("cruiser")&&e.hasOwnProperty("submarine")&&e.hasOwnProperty("destroyer")){(e=>{const t=[b.newBoard.placeShip(E,e.battleship),b.newBoard.placeShip(w,e.cruiser),b.newBoard.placeShip(x,e.carrier),b.newBoard.placeShip(A,e.submarine),b.newBoard.placeShip(B,e.destroyer)];for(let e=0;e<t.length;e++)S(b,t[e])})(e),document.querySelector(".prompt-container").remove(),document.querySelector(".prompt-message").remove(),y.style.backgroundColor="#e4e4e4";let t=document.getElementsByClassName("master-container")[0],n=Array.from(t.children);for(let e=0;e<n.length;e++){let t=n[e];"prompt-container"!==t.classList[0]&&(t.style.backgroundColor="#e4e4e4",t.style.opacity="100%")}}}else L(t.promptBoard,e,B,n),t.promptMessage.textContent="Place your Destroyer!";else L(t.promptBoard,e,A,n),t.promptMessage.textContent="Place your Submarine!";else L(t.promptBoard,e,w,n),t.promptMessage.textContent="Place your Cruiser!";else L(t.promptBoard,e,E,n),t.promptMessage.textContent="Place your Battleship!";else L(t.promptBoard,e,x,n),t.promptMessage.textContent="Place your Carrier!"}(()=>{const e=C("enemy",v),t=e.newBoard.assignPositions(),n=e.newBoard.placeShip(x,t[0]);e.newBoard.placeShip(E,t[1]),e.newBoard.placeShip(w,t[2]),e.newBoard.placeShip(A,t[3]),e.newBoard.placeShip(B,t[4])})(),M({},P(),[])})()})();