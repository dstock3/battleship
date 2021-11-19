(()=>{"use strict";var e={802:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(933),o=n.n(r),s=n(476),l=n.n(s)()(o());l.push([e.id,"body {\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    color: #0377fc;\n    background-color: #e4e4e4;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.message-box {\n    padding-inline: 1%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    font-size: 1.5em;\n    width: 15%;\n    height: 75px;\n    position: fixed;\n    bottom: 7%;\n    border: 5px solid #0377fc;\n    background-color: #e4e4e4;\n}\n\n/* position prompt */\n.prompt-container {\n    position: absolute;\n    z-index: 2;\n    background-color: #e4e4e4;\n    border-radius: 15px;\n}\n\n.prompt-message {\n    margin: -2% 0 0 0;\n    font-size: 1.5em;\n    text-align: center;\n    padding: .5%;\n    z-index: 2;\n    width: 10%;\n    background-color: #e4e4e4;\n    border: 5px solid #0377fc;\n}\n\n#prompt-container {\n    padding-right: 5%;\n}\n\n.controls {\n    position: relative;\n    right: 2%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 15%;\n}\n\n.rotate {\n    text-align: center;\n    padding: 10%;\n    border: 2px solid #0377fc;\n    margin: 0 0 25% 0;\n    cursor: pointer;\n}\n\n.rotate:hover {\n    background-color: #0377fc21;\n}\n\n.position-display {\n    text-align: center;\n    border: 2px solid #0377fc;\n    font-size: 1.5em;\n    padding: 10%;\n}\n\n.position-display:hover {\n    background-color: #0377fc21;\n}\n\n/* gameboards */\n\n.master-container {\n    display: flex;\n    z-index: 1;\n    width: 95%;\n    justify-content: space-around;\n}\n\n.outer-board {\n    display: flex;\n    margin: auto;\n    height: 800px;\n    width: 825px;\n    border: 5px solid #0377fc;\n    border-radius: 15px;\n    background-color: #0377fc18;\n}\n\n.letter-container {\n    display: flex;\n    width: 650px;\n    margin: auto;\n    position: relative;\n    top: 4%;\n}\n\n.letter {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.num-container {\n    padding-top: 13%;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    height: 650px;\n    width: 10%;\n}\n\n.num {\n    width: 100%;\n    height: 10%;\n    text-align: center;\n    font-size: 1.5em;\n}\n\n.board {\n    position: relative;\n    top: 8%;\n    display: flex;\n    height: 650px;\n    width: 650px;\n    margin: auto;\n    border: 1px solid #0377fc;\n}\n\nh1 {\n    text-align: center;\n}\n\n.col {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 10%;\n}\n\n.space {\n    border: 1px solid #0377fc;\n    width: 100%;\n    height: 10%;\n}\n\n#miss {\n    \n    font-size: 2em;\n}\n\n.space:hover {\n    background-color: #0377fc36;\n}\n\n.miss {\n    transition: 500ms;\n}\n\n.hit {\n    transition: 750ms;\n}\n\n@media only screen and (max-width: 600px) {\n    body {\n        width: max-content;\n        height: 110%\n    }\n\n    .master-container {\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n    }\n\n    h1 {\n        font-size: 3.25em;\n    }\n\n    .prompt-container {\n        top: 25%;\n    }\n\n    .prompt-message {\n        margin: -95% 0 0 0;\n        width: 20%;\n    }\n\n    .outer-board, #player {\n        order: 0;\n    }\n\n    .message-box {\n        border: none;\n        width: 66%;\n        position: relative;\n        order: 1;\n        align-self: center;\n\n    }\n    .outer-board, #enemy {\n        order: 2;\n    }\n}",""]);const a=l},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(l[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&l[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},l=[],a=0;a<e.length;a++){var i=e[a],c=r.base?i[0]+r.base:i[0],d=s[c]||0,p="".concat(c," ").concat(d);s[c]=d+1;var u=n(p),h={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=o(h,r);r.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}l.push(p)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<s.length;l++){var a=n(s[l]);t[a].references--}for(var i=r(e,o),c=0;c<s.length;c++){var d=n(s[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}s=i}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(892),t=n.n(e),r=n(760),o=n.n(r),s=n(311),l=n.n(s),a=n(192),i=n.n(a),c=n(60),d=n.n(c),p=n(865),u=n.n(p),h=n(802),f={};f.styleTagTransform=u(),f.setAttributes=i(),f.insert=l().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const m=e=>({move:t=>{e.receiveAttack(t);let n=((e,t)=>{for(let n=0;n<e.spaceArray.length;n++){let r=e.spaceArray[n];if(t===r.coord){if(r.isOccupied&&r.isHit)return[!0,n,t];if(r.isHit&&!r.isOccupied)return[!1,n,t]}}})(e,t);return n},enemyBoard:e}),g=(e,t,n,r)=>{for(let e=0;e<t.length;e++){let r=t[e];for(let e=0;e<r.coords.length;e++)if(r.coords[e]===n){for(let e=0;e<r.base.hitCount.length;e++)r.base.hitCount[e]||(r.base.hitCount[e]=!0);break}}},y=(e,t,n,r,o,s,l,a,i,c,d=0,p=0,u=0)=>{let h=e.enemyBoard,f=document.querySelector(".message-box");for(let e=0;e<h.spaceElements.length;e++)h.spaceElements[e].style.cursor="crosshair";function m(e){let t=document.querySelector(".master-container"),n=document.getElementById("enemy"),r=n.cloneNode(!0);n.remove(),t.appendChild(r);let o=document.getElementsByClassName("space"),s=Array.from(o),l=[];for(let e=0;e<s.length;e++)"e"===s[e].id.charAt(0)&&l.push(s[e]);e.spaceElements=l}for(let t=0;t<h.spaceElements.length;t++){function n(){h.spaceElements[t].style.cursor="default";let n=h.spaceElements[t].id.replace(h.spaceElements[t].id.charAt(0),""),r=o.move(n),a=s(h,r);l+=a;let c=g(0,e.enemyShipList,n);d?v(r[0],c,i,d):p?v(r[0],c,0,p):u?v(r[0],c,0,0,u):v(r[0],c,i),m(h)}"X"===h.spaceElements[t].textContent?h.spaceElements[t].style.cursor="default":h.spaceElements[t].addEventListener("click",n)}function v(e,t,n,r=0,o=0,s=0){e&&!t?f.textContent="It's a Direct Hit!":t&&e||(f.textContent="Shhh! The Enemy is Trying to Think.");let l=2*Math.random()+1;setTimeout((()=>{b(n,c)}),1e3*l)}function b(i,c){let h,m,v;p?(h=r.surgicalStrike(c,p),m=h[0]):d?(h=r.educatedGuess(d),h[0]||(v=!0)):u?h=r.targetedStrike():i?h=r.educatedGuess(c):(h=r.randomMove(),h[0]||(v=!0));let b=h[2],A=h[0],x=s(t,h);a+=x;let C=g(0,n.coords,h[2]);!C&&A?f.textContent="You've Been Hit! Your Move.":C&&A||(f.textContent="Your Move."),17===l?f.textContent="You Won!":17===a&&(f.textContent="You Have Been Defeated."),i&&!A?y(e,t,n,r,o,s,l,a,A,b,c):i&&A||m?y(e,t,n,r,o,s,l,a,A,b,0,c):v?y(e,t,n,r,o,s,l,a,A,b,0,0,v):y(e,t,n,r,o,s,l,a,A,b)}},v=document.createElement("header"),b=document.createElement("h1");b.textContent="battleship",v.appendChild(b);const A=(e,t,n)=>{const r=()=>t.every((e=>!0===e));return{length:e,hitCount:t,status:n,hit:e=>{t[e]=!0},isSunk:r,updateStatus:function(){r()&&(this.status="sunk")}}},x=document.getElementsByTagName("body")[0];x.appendChild(v);const C=document.createElement("div");C.classList.add("master-container"),x.appendChild(C);const M=window.matchMedia("(max-width: 600px)"),E=document.createElement("div");E.classList.add("message-box"),M.matches?(E.classList.add("mobile"),C.appendChild(E)):x.appendChild(E);const w=(e,t)=>{const n=(()=>{const e=["A","B","C","D","E","F","G","H","I","J"],t=[],n=(()=>{for(let n=0;n<e.length;n++){let r=e[n];for(let e=0;e<10;e++){let n=e+1,o=new Object;o.coord=`${r+n}`,o.isOccupied=!1,o.isHit=!1,t.push(o)}}})(),r=()=>{let t=Math.floor(Math.random()*e.length),n=e[t],r=Math.floor(10*Math.random())+1,o=n+r,s=function(){let e;return e=0===Math.floor(2*Math.random())?"vert":"hor",e}(),l=function(t,n,r){let o;if("vert"===t&&(o=r<=5),"hor"===t)for(let t=0;t<e.length;t++)n===e[t]&&(o=t<5);return o}(s,n,r);return{orientation:s,position:l,startingCoord:o}},o=t=>{let n,o=r(),s=[o.startingCoord];if(o.startingCoord.charAt(2)){let e=o.startingCoord.charAt(1)+o.startingCoord.charAt(2);n=parseInt(e)}else n=parseInt(o.startingCoord.charAt(1));if("vert"===o.orientation&&o.position)for(let e=1;e<t;e++){n+=1;let e=o.startingCoord.charAt(0)+`${n}`;s.push(e)}if("vert"===o.orientation&&!o.position)for(let e=1;e<t;e++){n-=1;let e=o.startingCoord.charAt(0)+`${n}`;s.push(e)}if("hor"===o.orientation&&o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o+=1;let t=e[o]+n;s.push(t)}}if("hor"===o.orientation&&!o.position)for(let r=0;r<e.length;r++)if(o.startingCoord.charAt(0)===e[r]){let o=r;for(let r=1;r<t;r++){o-=1;let t=e[o]+n;s.push(t)}}return s};function s(e,t,n){let l=0;for(let n=0;n<t.length;n++)t[n].some((t=>e.indexOf(t)>=0))&&(l+=1);return l>0?(r(),s(o(n),t,n)):e}return{letterArray:e,createGrid:n,placeShip:(e,n)=>{let r=A(e[1],e[2],e[3]),o=e[0],s=n;for(let e=0;e<s.length;e++)for(let n=0;n<t.length;n++)s[e]===t[n].coord&&(t[n].isOccupied=!0);return{base:r,type:o,coords:s}},spaceArray:t,receiveAttack:e=>{for(let n=0;n<t.length;n++)t[n].coord===e&&(t[n].isHit=!0)},determineOrientation:r,determineCoords:o,assignPositions:()=>{let e=[],t=o(5);e.push(t);let n=s(o(4),e,4);e.push(n);let r=s(o(3),e,3);e.push(r);let l=s(o(3),e,3);e.push(l);let a=s(o(2),e,2);return e.push(a),e}}})();let r=document.createElement("div");t.appendChild(r),r.classList.add("outer-board"),r.id=e;let o=document.createElement("div");o.classList.add("num-container"),r.appendChild(o);for(let e=1;e<11;e++){let t=document.createElement("div");t.textContent=e,t.classList.add("num"),o.appendChild(t)}let s=document.createElement("div");s.classList.add("board-container"),r.appendChild(s);let l=document.createElement("div");l.classList.add("letter-container"),s.appendChild(l);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.textContent=n.letterArray[e],t.classList.add("letter"),l.appendChild(t)}let a=document.createElement("div");a.classList.add("board"),a.id=`${e}`,s.appendChild(a);for(let e=0;e<n.letterArray.length;e++){let t=document.createElement("div");t.classList.add("col"),t.id=n.letterArray[e],a.appendChild(t)}let i=[];for(let t=0;t<n.spaceArray.length;t++){let r=n.spaceArray[t],o=document.createElement("div");o.classList.add("space"),o.id=e.charAt(0)+r.coord,i.push(o)}let c=Array.from(document.getElementsByClassName("col"));for(let e=0;e<i.length;e++){let t=i[e];for(let e=0;e<c.length;e++)t.id.charAt(1)===c[e].id&&c[e].appendChild(t)}return{newBoard:n,spaceElements:i,outerBoard:r,boardContainer:s}},B=w("player",C),k=["carrier",5,[!1,!1,!1,!1,!1],"active"],S=["battleship",4,[!1,!1,!1,!1],"active"],L=["cruiser",3,[!1,!1,!1],"active"],I=["submarine",3,[!1,!1,!1],"active"],O=["destroyer",2,[!1,!1],"active"];let P=document.querySelector(".message-box");const T=(e,t)=>{for(let n=0;n<t.coords.length;n++)for(let r=0;r<e.spaceElements.length;r++){let o=e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"");t.coords[n]===o&&(e.spaceElements[r].style.backgroundColor="#0377fc",e.spaceElements[r].classList.add("occupied"))}},q=(e,t)=>{for(let n=0;n<e.spaceElements.length;n++){let r=e.spaceElements[n];r.classList.contains("occupied")&&t.push(r.id)}return t},z=(e,t,n,r,o)=>{let s,l=n[0],a=n[1],i="hor";function c(){s=(e=>"vert"===e?"hor":"hor"===e?"vert":void 0)(i),s&&(i=s)}document.querySelector(".rotate").addEventListener("click",c),document.addEventListener("keydown",(e=>{"r"===e.key&&c()}),!1);let d=((e,t)=>{let n=[],r=[];for(let o=0;o<e.spaceElements.length;o++){let s=e.spaceElements[o];for(let e=0;e<t.length;e++)s.id===t[e]&&s.classList.add("occupied");s.classList.contains("occupied")?(r.push(s),s.style.backgroundColor="#0377fc"):n.push(s)}return[n,r]})(e,r),p=d[0],u=d[1];for(let s=0;s<p.length;s++){let c,d=p[s],h=d.id.replace(d.id.charAt(0),""),f=h.charAt(0);if(h.charAt(2)){let e=h.charAt(1)+h.charAt(2);c=parseInt(e)}else c=parseInt(h.charAt(1));function m(){document.querySelector(".position-display").textContent=h,d.style.cursor="pointer";let s=[];function m(e){d.addEventListener("mouseout",(function(){for(let e=0;e<p.length;e++)for(let t=0;t<s.length;t++)p[e]===s[t]&&(s[t].style.backgroundColor="#0377fc18");d.removeEventListener("click",e)}))}if("vert"===i){let e;if(5==a&&(e=7),4==a&&(e=8),3==a&&(e=9),2==a&&(e=10),c<e){for(let e=0;e<a;e++){let t=c+e,n=document.getElementById("c"+f+t);s.push(n),n.style.backgroundColor="#0377fc"}let e=[];function i(){for(let t=0;t<a;t++){let n=f+(c+t);e.push(n)}t[`${l}`]=e,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let s=H(),i=s.promptBoard.newBoard.placeShip(n,e);T(s.promptBoard,i);let d=q(s.promptBoard,r);N(t,s,d,o)}d.addEventListener("click",i),m(i);for(let e=0;e<s.length;e++)for(let t=0;t<u.length;t++)if(u[t]===s[e])for(let t=0;t<s.length;t++)if(s[t]===s[e])s[t].style.backgroundColor="#0377fc";else{s[t].style.backgroundColor="#0377fc18";for(let e=0;e<u.length;e++)u[e].style.backgroundColor="#0377fc";s[t].style.cursor="default",s[t].removeEventListener("click",i)}}else{for(let e=0;e<a;e++){let t=c+e,n=document.getElementById("c"+f+t);s.push(n)}for(let e=0;e<s.length;e++){let t=s[e];t&&(t.style.cursor="default")}}}if("hor"===i){let i,p=e.newBoard.letterArray;5==a&&(i=6),4==a&&(i=7),3==a&&(i=8),2==a&&(i=9);let h=[];for(let e=0;e<p.length;e++)if(f===p[e])if(e<i){for(let t=0;t<a;t++){let n=p[e+t],r=document.getElementById("c"+n+`${c}`);s.push(r);let o=n+`${c}`;h.push(o),r.style.backgroundColor="#0377fc"}function i(){t[`${l}`]=h,document.querySelector(".prompt-message").remove(),document.querySelector(".prompt-container").remove();let e=H(),s=e.promptBoard.newBoard.placeShip(n,h);T(e.promptBoard,s);let a=q(e.promptBoard,r);N(t,e,a,o)}d.addEventListener("click",i),m(i);for(let e=0;e<s.length;e++)for(let t=0;t<u.length;t++)if(u[t]===s[e])for(let t=0;t<s.length;t++)if(s[t]===s[e])s[t].style.backgroundColor="#0377fc";else{s[t].style.backgroundColor="#0377fc18";for(let e=0;e<u.length;e++)u[e].style.backgroundColor="#0377fc";s[t].style.cursor="default",s[t].removeEventListener("click",i)}}else{for(let t=0;t<a;t++){let n=p[e+t],r=document.getElementById("c"+n+`${c}`);s.push(r)}for(let e=0;e<s.length;e++){let t=s[e];t&&(t.style.cursor="default")}}}}d.addEventListener("mouseover",m)}},H=()=>{const e=document.getElementsByClassName("master-container")[0],t=document.createElement("div");t.classList.add("prompt-container"),e.appendChild(t);const n=w("choose",t);t.style.backgroundColor="#b2d1f5",n.outerBoard.id="prompt-frame",n.boardContainer.id="prompt-container";const r=document.createElement("div");r.classList.add("controls"),n.outerBoard.appendChild(r);const o=document.createElement("div");o.classList.add("rotate"),o.textContent="Rotate Ship",r.appendChild(o);const s=document.createElement("div");s.classList.add("position-display"),s.textContent="A1",r.appendChild(s);const l=document.createElement("div");l.classList.add("prompt-message"),x.appendChild(l),l.textContent="Choose Your Positions!",x.style.backgroundColor="#001f4265";let a=Array.from(e.children);for(let e=0;e<a.length;e++){let t=a[e];"prompt-container"!==t.classList[0]?(t.style.backgroundColor="#001f4265",t.style.opacity="25%"):t.style.opacity="100%";let n=document.querySelector(".message-box");n.style.zIndex="0",n.style.opacity="0%"}return{promptContainer:t,promptBoard:n,rotateShip:o,promptMessage:l,childElements:a,positionDisplay:s}};function N(e,t,n,r){if(e.hasOwnProperty("carrier"))if(e.hasOwnProperty("battleship"))if(e.hasOwnProperty("cruiser"))if(e.hasOwnProperty("submarine"))if(e.hasOwnProperty("destroyer")){if(e.hasOwnProperty("carrier")&&e.hasOwnProperty("battleship")&&e.hasOwnProperty("cruiser")&&e.hasOwnProperty("submarine")&&e.hasOwnProperty("destroyer")){let t=(e=>{const t=[B.newBoard.placeShip(S,e.battleship),B.newBoard.placeShip(L,e.cruiser),B.newBoard.placeShip(k,e.carrier),B.newBoard.placeShip(I,e.submarine),B.newBoard.placeShip(O,e.destroyer)];for(let e=0;e<t.length;e++)T(B,t[e]);return t})(e);document.querySelector(".prompt-container").remove(),document.querySelector(".prompt-message").remove(),x.style.backgroundColor="#e4e4e4";let n=document.getElementsByClassName("master-container")[0],o=Array.from(n.children);for(let e=0;e<o.length;e++){let t=o[e];"prompt-container"!==t.classList[0]&&(t.style.backgroundColor="#e4e4e4",t.style.opacity="100%")}P.style.zIndex="2",P.style.opacity="100%",r.coords=t}}else z(t.promptBoard,e,O,n,r),t.promptMessage.textContent="Place your Destroyer!";else z(t.promptBoard,e,I,n,r),t.promptMessage.textContent="Place your Submarine!";else z(t.promptBoard,e,L,n,r),t.promptMessage.textContent="Place your Cruiser!";else z(t.promptBoard,e,S,n,r),t.promptMessage.textContent="Place your Battleship!";else z(t.promptBoard,e,k,n,r),t.promptMessage.textContent="Place your Carrier!"}const $=(()=>{const e=w("enemy",C),t=e.newBoard.assignPositions(),n=e.newBoard.placeShip(k,t[0]),r=[e.newBoard.placeShip(S,t[1]),e.newBoard.placeShip(L,t[2]),n,e.newBoard.placeShip(I,t[3]),e.newBoard.placeShip(O,t[4])];return{enemyBoard:e,enemyShipList:r,checkShipStatus:function(){for(let e=0;e<r.length;e++){let t=r[e];if(t.base.updateStatus(),"sunk"===t.base.status)return t.type}}}})();let j=(()=>{let e={};return N({},H(),[],e),P.textContent="Your Move.",e})();const Y=$.enemyBoard,D=m(Y.newBoard),G=(e=>{const t=m(e);function n(){let t=[],n=[],r=[];for(let o=0;o<e.spaceArray.length;o++){let s=e.spaceArray[o];s.isHit&&s.isOccupied&&r.push(s.coord),s.isHit?n.push(s.coord):t.push(s.coord)}return{possibleMoves:t,excludedMoves:n,successfulMoves:r}}const r=()=>{let e=n(),r=Math.floor(Math.random()*e.possibleMoves.length),o=e.possibleMoves[r];return t.move(o)},o=r=>{let o,l=r.charAt(0);if(r.charAt(2)){let e=r.charAt(1)+r.charAt(2);o=parseInt(e)}else o=parseInt(r.charAt(1));let a,i,c=n(),d=[];for(let e=0;e<c.possibleMoves.length;e++){let t,n=c.possibleMoves[e].charAt(0);if(c.possibleMoves[e].charAt(2)){let n=c.possibleMoves[e].charAt(1)+c.possibleMoves[e].charAt(2);t=parseInt(n)}else t=parseInt(c.possibleMoves[e].charAt(1));n===l&&(o!==t+1&&o!==t-1||d.push(c.possibleMoves[e]))}for(let t=0;t<e.letterArray.length;t++)l===e.letterArray[t]&&(a=e.letterArray[t-1],i=e.letterArray[t+1]);if(a){let e=a+`${o}`;d.push(e)}if(i){let e=i+`${o}`;d.push(e)}if(d.length>0){for(let e=0;e<c.excludedMoves.length;e++)for(let t=0;t<d.length;t++)c.excludedMoves[e]===d[t]&&d.splice(t,1);let e=d[Math.floor(Math.random()*d.length)];return e?t.move(e):s()}},s=()=>{let s=n(),l=[],a=[],i=[];if(!(s.successfulMoves.length>0))return r();for(let e=0;e<s.possibleMoves.length;e++)for(let t=0;t<s.successfulMoves.length;t++)if(s.successfulMoves[t].charAt(0)===s.possibleMoves[e].charAt(0))if(a.length>0)for(let t=0;t<a.length;t++)a.includes(s.possibleMoves[e])||a.push(s.possibleMoves[e]);else a.push(s.possibleMoves[e]);for(let e=0;e<s.possibleMoves.length;e++){let t;t=s.possibleMoves[e].charAt(2)?s.possibleMoves[e].charAt(1)+s.possibleMoves[e].charAt(2):s.possibleMoves[e].charAt(1);for(let n=0;n<s.successfulMoves.length;n++){let r;if(r=s.successfulMoves[n].charAt(2)?s.successfulMoves[n].charAt(1)+s.successfulMoves[n].charAt(2):s.successfulMoves[n].charAt(1),r===t)if(i.length>0)for(let t=0;t<i.length;t++)i.includes(s.possibleMoves[e])||i.push(s.possibleMoves[e]);else i.push(s.possibleMoves[e])}}for(let t=0;t<s.successfulMoves.length;t++){let n;n=s.successfulMoves[t].charAt(2)?s.successfulMoves[t].charAt(1)+s.successfulMoves[t].charAt(2):s.successfulMoves[t].charAt(1);for(let e=0;e<a.length;e++){let t;t=a[e].charAt(2)?a[e].charAt(1)+a[e].charAt(2):a[e].charAt(1),l.includes(a[e])||(parseInt(t)===parseInt(n)+1||parseInt(t)===parseInt(n)-1)&&l.push(a[e])}for(let n=0;n<e.letterArray.length;n++)if(s.successfulMoves[t].charAt(0)===e.letterArray[n]){let t=e.letterArray[n+1],r=e.letterArray[n-1];if(i.length>0)for(let e=0;e<i.length;e++)l.includes(i[e])||(i[e].charAt(0)===t||i[e].charAt(0)===r)&&l.push(i[e])}}if(!(l.length>0&&l.length<45))return o(s.successfulMoves[0]);{let e=l[Math.floor(Math.random()*l.length)];if(e)return t.move(e)}};return{randomMove:r,computer:t,targetedStrike:s,educatedGuess:o,surgicalStrike:(r,s)=>{let l,a,i=r.charAt(0),c=s.charAt(0);l=r.charAt(2)?r.charAt(1)+r.charAt(2):r.charAt(1),a=s.charAt(2)?s.charAt(1)+s.charAt(2):s.charAt(1);let d=n(),p=[],u=[];if(i===c){for(let e=0;e<d.possibleMoves.length;e++)d.possibleMoves[e].charAt(0)===i&&p.push(d.possibleMoves[e]);for(let e=0;e<p.length;e++){let t;t=p[e].charAt(2)?p[e].charAt(1)+p[e].charAt(2):p[e].charAt(1),(parseInt(t)===parseInt(l)+1||parseInt(t)===parseInt(l)-1||parseInt(t)===parseInt(a)+1||parseInt(t)===parseInt(a)-1)&&u.push(p[e])}}else if(l===a){for(let e=0;e<d.possibleMoves.length;e++){let t;t=d.possibleMoves[e].charAt(2)?d.possibleMoves[e].charAt(1)+d.possibleMoves[e].charAt(2):d.possibleMoves[e].charAt(1),t===l&&p.push(d.possibleMoves[e])}for(let t=0;t<e.letterArray.length;t++)if(i===e.letterArray[t])for(let n=0;n<p.length;n++){let r=p[n].charAt(0);(r===e.letterArray[t+1]||r===e.letterArray[t-1])&&u.push(p[n])}else if(c===e.letterArray[t])for(let n=0;n<p.length;n++){let r=p[n].charAt(0);(r===e.letterArray[t+1]||r===e.letterArray[t-1])&&u.push(p[n])}}if(u.length>0){let e=u[Math.floor(Math.random()*u.length)];return t.move(e)}return o(s)}}})(B.newBoard);y($,B,j,G,D,((e,t)=>{let n=t[0],r=t[1],o=t[2];if(e.spaceElements[r].id.replace(e.spaceElements[r].id.charAt(0),"")===o)return n?(e.spaceElements[r].style.backgroundColor="#a83244",e.spaceElements[r].classList.add("hit"),1):(e.spaceElements[r].classList.add("miss"),e.spaceElements[r].textContent="X",e.spaceElements[r].style.display="flex",e.spaceElements[r].style.justifyContent="center",e.spaceElements[r].style.alignItems="center",e.spaceElements[r].style.fontSize="3em",0)}),0,0,!1,null)})()})();