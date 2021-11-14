(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),l=n.n(a)()(o());l.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #0377fc;\n    background-color: #e4e4e4;\n}\n\n/* position prompt */\n.prompt-container {\n    position: absolute;\n    top: 8%;\n    left: 28%;\n    z-index: 2;\n    background-color: #e4e4e4;\n    border-radius: 15px;\n}\n\n.prompt-message {\n    font-size: 1.5em;\n    text-align: center;\n    position: absolute;\n    padding: .5%;\n    top: 85%;\n    left: 43%;\n    z-index: 2;\n    width: 10%;\n    background-color: #e4e4e4;\n    border: 5px solid #0377fc;\n}\n\n#prompt-container {\n    padding-right: 5%;\n}\n\n.controls {\n    position: relative;\n    right: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 15%;\n}\n\n.rotate {\n    text-align: center;\n    padding: 10%;\n    border: 2px solid #0377fc;\n    margin: 0 0 25% 0;\n    cursor: pointer;\n}\n\n.rotate:hover {\n    background-color: #0377fc21;\n}\n\n.position-display {\n    text-align: center;\n    border: 2px solid #0377fc;\n    font-size: 1.5em;\n    padding: 10%;\n}\n\n.position-display:hover {\n    background-color: #0377fc21;\n}\n\n/* gameboards */\n\n.master-container {\n    display: flex;\n    z-index: 1;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 800px;\n    width: 825px;\n    border: 5px solid #0377fc;\n    border-radius: 15px;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 650px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 650px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 650px;\n    width: 650px;\n    margin: auto;\n    border: 1px solid #0377fc;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid #0377fc;\n    width: 100%;\n    height: 10%;\n}\n\n#miss {\n    \n    font-size: 2em;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}\n\n@media only screen and (max-width: 600px) {\n    .master-container {\n        flex-direction: column;\n        width: 100%;\n    }\n\n    h1 {\n        font-size: 3.25em;\n    }\n\n    .prompt-container {\n        left: 0;\n        top: 25%;\n        align-self: center;\n    }\n}",""]);const s=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(l[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&l[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},l=[],s=0;s<e.length;s++){var i=e[s],c=r.base?i[0]+r.base:i[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=n(p),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var m=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}l.push(p)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var s=n(a[l]);t[s].references--}for(var i=r(e,o),c=0;c<a.length;c++){var d=n(a[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={};n.r(e),n.d(e,{dk:()=>H,k$:()=>z,mO:()=>w});var t=n(379),r=n.n(t),o=n(795),a=n.n(o),l=n(569),s=n.n(l),i=n(565),c=n.n(i),d=n(216),p=n.n(d),u=n(589),h=n.n(u),m=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),r()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=e=>({move:t=>{e.receiveAttack(t);let n=((e,t)=>{for(let n=0;n<e.spaceArray.length;n++){let r=e.spaceArray[n];if(t===r.coord){if(r.isOccupied&&r.isHit)return[!0,n,t];if(r.isHit&&!r.isOccupied)return[!1,n,t]}}})(e,t);return n},enemyBoard:e}),y=(e,t,n)=>{for(let r=0;r<e.length;r++){let o=e[r];for(let e=0;e<o.coords.length;e++)if(o.coords[e]===t)for(let e=0;e<o.base.hitCount.length;e++)if(!o.base.hitCount[e]){o.base.hitCount[e]=!0,o.base.isSunk()&&("player"===n?console.log(`You have sunk the enemy's ${o.type}!`):console.log(`The enemy has sunk your ${o.type}!`));break}}},v=document.createElement("header"),b=document.createElement("h1");b.textContent="battleship",v.appendChild(b);const C=document.getElementsByTagName("body")[0];C.appendChild(v);const x=document.createElement("div");x.classList.add("message-box"),C.appendChild(x);const E=document.createElement("div");E.classList.add("master-container"),C.appendChild(E);const A=(e,t)=>{const n=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,o=new Object;o.coord=`${r+n}`,o.isOccupied=!1,o.isHit=!1,t.push(o)}}})(),r=()=>{let t=Math.floor(Math.random()*e.length),n=e[t],r=Math.floor(10*Math.random())+1,o=n+r,a=function(){let e;return e=0===Math.floor(2*Math.random())?"vert":"hor",e}(),l=function(t,n,r){let o;if("vert"===t&&(o=r<=5),"hor"===t)for(let t=0;t<e.length;t++)n===e[t]&&(o=t<5);return o}(a,n,r);return{orientation:a,position:l,startingCoord:o}},o=t=>{let n,o=r(),a=[o.startingCoord];if(o.startingCoord.charAt(2)){let e=o.startingCoord.charAt(1)+o.startingCoord.charAt(2);n=parseInt(e)}else n=parseInt(o.startingCoord.charAt(1));if("vert"===o.orientation&&o.position)for(let e=1;e<t;e++){n+=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("vert"===o.orientation&&!o.position)for(let e=1;e<t;e++){n-=1;let e=o.startingCoord.charAt(0)+`${n}`;a.push(e)}if("hor"===o.orientation&&o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o+=1;let t=e[o]+n;a.push(t)}}if("hor"===o.orientation&&!o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o-=1;let t=e[o]+n;a.push(t)}}return a};function a(e,t,n){let l=0;for(let n=0;n<t.length;n++)t[n].some((t=>e.indexOf(t)>=0))&&(l+=1);return l>0?(r(),a(o(n),t,n)):e}return{letterArray:e,createGrid:n,placeShip:(e,n)=>{let r=(l=e[1],s=e[2],i=e[3],{length:l,hitCount:s,status:i,hit:e=>{s[e]=!0},isSunk:()=>s.every((e=>!0===e))}),o=e[0],a=n;var l,s,i;for(let e=0;e<a.length;e++)for(let n=0;n<t.length;n++)a[e]===t[n].coord&&(t[n].isOccupied=!0);return{base:r,type:o,coords:a}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)},determineOrientation:r,determineCoords:o,assignPositions:()=>{let e=[],t=o(5);e.push(t);let n=a(o(4),e,4);e.push(n);let r=a(o(3),e,3);e.push(r);let l=a(o(3),e,3);e.push(l);let s=a(o(2),e,2);return e.push(s),e}}})();let r=document.createElement("div");t.appendChild(r),r.classList.add("outer-board"),r.id=e;let o=document.createElement("div");o.classList.add("num-container"),r.appendChild(o);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),o.appendChild(t)}let a=document.createElement("div");a.classList.add("board-container"),r.appendChild(a);let l=document.createElement("div");l.classList.add("letter-container"),a.appendChild(l);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.textContent=n.letterArray[e],t.classList.add("letter"),l.appendChild(t)}let s=document.createElement("div");s.classList.add("board"),s.id=`${e}`,a.appendChild(s);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.classList.add("col"),t.id=n.letterArray[e],s.appendChild(t)}let i=[];for(let t=0;t<n.spaceArray.length;t++){let r=n.spaceArray[t],o=document.createElement("div");o.classList.add("space"),o.id=e.charAt(0)+r.coord,i.push(o)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<i.length;e++){let t=i[e];for(let e=0;e<c.length;e++)t.id.charAt(1)===c[e].id&&c[e].appendChild(t)}return{newBoard:n,spaceElements:i,outerBoard:r,boardContainer:a}},w=A("player",E),k=["carrier",5,[!1,!1,!1,!1,!1],"active"],B=["battleship",4,[!1,!1,!1,!1],"active"],S=["cruiser",3,[!1,!1,!1],"active"],L=["submarine",3,[!1,!1,!1],"active"],M=["destroyer",2,[!1,!1],"active"],P=(e,t)=>{for(let n=0;n<t.coords.length;n++)for(let r=0;r<e.spaceElements.length;r++){let o=e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"");t.coords[n]===o&&(e.spaceElements[r].style.backgroundColor="#0377fc",e.spaceElements[r].classList.add("occupied"))}},O=(e,t)=>{for(let n=0;n<e.spaceElements.length;n++){let r=e.spaceElements[n];r.classList.contains("occupied")&&t.push(r.id)}return t},I=(e,t,n,r)=>{let o,a=n[0],l=n[1],s="hor";function i(){o=(e=>"vert"===e?"hor":"hor"===e?"vert":void 0)(s),o&&(s=o)}document.querySelector(".rotate").addEventListener("click",i),document.addEventListener("keydown",(e=>{"r"===e.key&&i()}),!1);let c=((e,t)=>{let n=[],r=[];for(let o=0;o<e.spaceElements.length;o++){let a=e.spaceElements[o];for(let e=0;e<t.length;e++)a.id===t[e]&&a.classList.add("occupied");a.classList.contains("occupied")?(r.push(a),a.style.backgroundColor="#0377fc"):n.push(a)}return[n,r]})(e,r),d=c[0],p=c[1];for(let o=0;o<d.length;o++){let i,c=d[o],u=c.id.replace(c.id.charAt(0),""),h=u.charAt(0);if(u.charAt(2)){let e=u.charAt(1)+u.charAt(2);i=parseInt(e)}else i=parseInt(u.charAt(1));function m(){document.querySelector(".position-display").textContent=u,c.style.cursor="pointer";let o=[];function m(e){c.addEventListener("mouseout",(function(){for(let e=0;e<d.length;e++)for(let t=0;t<o.length;t++)d[e]===o[t]&&(o[t].style.backgroundColor="#0377fc18");c.removeEventListener("click",e)}))}if("vert"===s){let e;if(5==l&&(e=7),4==l&&(e=8),3==l&&(e=9),2==l&&(e=10),i<e){for(let e=0;e<l;e++){let t=i+e,n=document.getElementById("c"+h+t);o.push(n),n.style.backgroundColor="#0377fc"}let e=[];function s(){for(let t=0;t<l;t++){let n=h+(i+t);e.push(n)}t[`${a}`]=e,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let o=T(),s=o.promptBoard.newBoard.placeShip(n,e);P(o.promptBoard,s);let c=O(o.promptBoard,r);$(t,o,c)}c.addEventListener("click",s),m(s);for(let e=0;e<o.length;e++)for(let t=0;t<p.length;t++)if(p[t]===o[e])for(let t=0;t<o.length;t++)if(o[t]===o[e])o[t].style.backgroundColor="#0377fc";else{o[t].style.backgroundColor="#0377fc18";for(let e=0;e<p.length;e++)p[e].style.backgroundColor="#0377fc";o[t].style.cursor="default",o[t].removeEventListener("click",s)}}else{for(let e=0;e<l;e++){let t=i+e,n=document.getElementById("c"+h+t);o.push(n)}for(let e=0;e<o.length;e++){let t=o[e];t&&(t.style.cursor="default")}}}if("hor"===s){let s,d=e.newBoard.letterArray;5==l&&(s=6),4==l&&(s=7),3==l&&(s=8),2==l&&(s=9);let u=[];for(let e=0;e<d.length;e++)if(h===d[e])if(e<s){for(let t=0;t<l;t++){let n=d[e+t],r=document.getElementById("c"+n+`${i}`);o.push(r);let a=n+`${i}`;u.push(a),r.style.backgroundColor="#0377fc"}function s(){t[`${a}`]=u,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let e=T(),o=e.promptBoard.newBoard.placeShip(n,u);P(e.promptBoard,o);let l=O(e.promptBoard,r);$(t,e,l)}c.addEventListener("click",s),m(s);for(let e=0;e<o.length;e++)for(let t=0;t<p.length;t++)if(p[t]===o[e])for(let t=0;t<o.length;t++)if(o[t]===o[e])o[t].style.backgroundColor="#0377fc";else{o[t].style.backgroundColor="#0377fc18";for(let e=0;e<p.length;e++)p[e].style.backgroundColor="#0377fc";o[t].style.cursor="default",o[t].removeEventListener("click",s)}}else{for(let t=0;t<l;t++){let n=d[e+t],r=document.getElementById("c"+n+`${i}`);o.push(r)}for(let e=0;e<o.length;e++){let t=o[e];t&&(t.style.cursor="default")}}}}c.addEventListener("mouseover",m)}},T=()=>{const e=document.getElementsByClassName("master-container")[0],t=document.createElement("div");t.classList.add("prompt-container"),e.appendChild(t);const n=A("choose",t);t.style.backgroundColor="#b2d1f5",n.outerBoard.id="prompt-frame",n.boardContainer.id="prompt-container";const r=document.createElement("div");r.classList.add("controls"),n.outerBoard.appendChild(r);const o=document.createElement("div");o.classList.add("rotate"),o.textContent="Rotate Ship",r.appendChild(o);const a=document.createElement("div");a.classList.add("position-display"),a.textContent="A1",r.appendChild(a);const l=document.createElement("div");l.classList.add("prompt-message"),C.appendChild(l),l.textContent="Choose Your Positions!",C.style.backgroundColor="#001f4265";let s=Array.from(e.children);for(let e=0;e<s.length;e++){let t=s[e];"prompt-container"!==t.classList[0]?(t.style.backgroundColor="#001f4265",t.style.opacity="25%"):t.style.opacity="100%"}return{promptContainer:t,promptBoard:n,rotateShip:o,promptMessage:l,childElements:s,positionDisplay:a}};function $(e,t,n){if(e.hasOwnProperty("carrier"))if(e.hasOwnProperty("battleship"))if(e.hasOwnProperty("cruiser"))if(e.hasOwnProperty("submarine"))if(e.hasOwnProperty("destroyer")){if(e.hasOwnProperty("carrier")&&e.hasOwnProperty("battleship")&&e.hasOwnProperty("cruiser")&&e.hasOwnProperty("submarine")&&e.hasOwnProperty("destroyer")){(e=>{const t=[w.newBoard.placeShip(B,e.battleship),w.newBoard.placeShip(S,e.cruiser),w.newBoard.placeShip(k,e.carrier),w.newBoard.placeShip(L,e.submarine),w.newBoard.placeShip(M,e.destroyer)];for(let e=0;e<t.length;e++)P(w,t[e])})(e),document.querySelector(".prompt-container").remove(),document.querySelector(".prompt-message").remove(),C.style.backgroundColor="#e4e4e4";let t=document.getElementsByClassName("master-container")[0],n=Array.from(t.children);for(let e=0;e<n.length;e++){let t=n[e];"prompt-container"!==t.classList[0]&&(t.style.backgroundColor="#e4e4e4",t.style.opacity="100%")}}}else I(t.promptBoard,e,M,n),t.promptMessage.textContent="Place your Destroyer!";else I(t.promptBoard,e,L,n),t.promptMessage.textContent="Place your Submarine!";else I(t.promptBoard,e,S,n),t.promptMessage.textContent="Place your Cruiser!";else I(t.promptBoard,e,B,n),t.promptMessage.textContent="Place your Battleship!";else I(t.promptBoard,e,k,n),t.promptMessage.textContent="Place your Carrier!"}const z=()=>{$({},T(),[])},H=(()=>{const e=A("enemy",E),t=e.newBoard.assignPositions(),n=e.newBoard.placeShip(k,t[0]),r=[e.newBoard.placeShip(B,t[1]),e.newBoard.placeShip(S,t[2]),n,e.newBoard.placeShip(L,t[3]),e.newBoard.placeShip(M,t[4])];return{enemyBoard:e,enemyShipList:r,checkShipStatus:function(){for(let e=0;e<r.length;e++){let t=r[e];if(t.base.updateStatus(),"sunk"===t.base.status)return t.type}}}})();z();const q=H.enemyBoard,N=g(q.newBoard),j=(e=>{const t=g(e);function n(){let t=[];for(let n=0;n<e.spaceArray.length;n++){let r=e.spaceArray[n];r.isHit||t.push(r.coord)}return t}const r=()=>{let e=n(),r=e[Math.floor(Math.random()*e.length)];return t.move(r)};return{randomMove:r,computer:t,educatedGuess:o=>{let a,l=o.charAt(0);if(o.charAt(2)){let e=o.charAt(1)+o.charAt(2);a=parseInt(e)}else a=parseInt(o.charAt(1));let s,i,c=n(),d=[];for(let e=0;e<c.length;e++){let t,n=c[e].charAt(0);if(c[e].charAt(2)){let n=c[e].charAt(1)+c[e].charAt(2);t=parseInt(n)}else t=parseInt(c[e].charAt(1));n===l&&(a!==t+1&&a!==t-1||d.push(c[e]))}for(let t=0;t<e.letterArray.length;t++)l===e.letterArray[t]&&(s=e.letterArray[t-1],i=e.letterArray[t+1]);if(s){let e=s+`${a}`;d.push(e)}if(i){let e=i+`${a}`;d.push(e)}if(d.length>0){let e=d[Math.floor(Math.random()*d.length)];return t.move(e)}return r()}}})(w.newBoard);((e,t,n,r,o,a,l,s)=>{let i=e.enemyBoard;for(let t=0;t<i.spaceElements.length;t++){function n(){let n=i.spaceElements[t].id.replace(i.spaceElements[t].id.charAt(0),""),r=o.move(n),s=a(i,r);l+=s,y(e.enemyShipList,n,"player");let d=2*Math.random()+1;setTimeout(c,1e3*d)}i.spaceElements[t].addEventListener("click",n)}function c(){let e=r.randomMove(),o=a(t,e);s+=o,y(n,e[2],"enemy"),console.log("Player Hits: "+l),console.log("Enemy Hits: "+s),17!==l&&17!==s||console.log("game over"),e[0]}})(H,w,e.playerShipList,j,N,((e,t)=>{let n=t[0],r=t[1],o=t[2];if(e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"")===o)return n?(e.spaceElements[r].style.backgroundColor="#a83244",1):(e.spaceElements[r].textContent="X",e.spaceElements[r].style.textAlign="center",e.spaceElements[r].style.fontSize="3em",0)}),0,0)})()})();