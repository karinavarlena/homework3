!function(n){var r={};function t(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return n[e].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var i in n)t.d(e,i,function(r){return n[r]}.bind(null,i));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=6)}([function(n,r,t){var e=t(1),i=t(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};e(i,a);n.exports=i.locals||{}},function(n,r,t){"use strict";var e,i=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),o=[];function d(n){for(var r=-1,t=0;t<o.length;t++)if(o[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],i=0;i<n.length;i++){var a=n[i],s=r.base?a[0]+r.base:a[0],p=t[s]||0,c="".concat(s," ").concat(p);t[s]=p+1;var l=d(c),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(u)):o.push({identifier:c,updater:x(u,r),references:1}),e.push(c)}return e}function p(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var i=t.nc;i&&(e.nonce=i)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var o=a(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}return r}var c,l=(c=[],function(n,r){return c[n]=r,c.filter(Boolean).join("\n")});function u(n,r,t,e){var i=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(r,i);else{var a=document.createTextNode(i),o=n.childNodes;o[r]&&n.removeChild(o[r]),o.length?n.insertBefore(a,o[r]):n.appendChild(a)}}function m(n,r,t){var e=t.css,i=t.media,a=t.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),a&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,f=0;function x(n,r){var t,e,i;if(r.singleton){var a=f++;t=h||(h=p(r)),e=u.bind(null,t,a,!1),i=u.bind(null,t,a,!0)}else t=p(r),e=m.bind(null,t,r),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else i()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=i());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var i=d(t[e]);o[i].references--}for(var a=s(n,r),p=0;p<t.length;p++){var c=d(t[p]);0===o[c].references&&(o[c].updater(),o.splice(c,1))}t=a}}}},function(n,r,t){var e=t(3),i=t(4),a=t(5);(r=e(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Dosis:400,600,700,800);"]);var o=i(a);r.push([n.i,'@font-face {\r\n  font-family: \'Uni Sans\';\r\n  src: url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168547/unisans-font/UniSansHeavyCAPS.woff2") format("woff2"), url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168547/unisans-font/UniSansHeavyCAPS.woff") format("woff"), url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168548/unisans-font/UniSansHeavyCAPS.ttf") format("truetype");\r\n  font-weight: 900;\r\n  font-style: normal;\r\n}\r\n@font-face {\r\n  font-family: \'Uni Sans\';\r\n  src: url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168545/unisans-font/UniSansThinCAPS.woff2") format("woff2"), url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168545/unisans-font/UniSansThinCAPS.woff") format("woff"), url("https://res.cloudinary.com/muhammederdem/raw/upload/v1536168548/unisans-font/UniSansThinCAPS.ttf") format("truetype");\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\nbody {\r\n  font-family: \'Uni Sans\', sans-serif;\r\n  font-weight: 500;\r\n  margin: 0;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.icon {\r\n  display: inline-block;\r\n  width: 1em;\r\n  height: 1em;\r\n  stroke-width: 0;\r\n  stroke: currentColor;\r\n  fill: currentColor;\r\n}\r\n\r\n.wrapper {\r\n  width: 100%;\r\n  height: 100vh;\r\n  min-height: 750px;\r\n  background: url('+o+") center no-repeat;\r\n  background-size: cover;\r\n  position: relative;\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .wrapper {\r\n    height: auto;\r\n    min-height: 100vh;\r\n  }\r\n}\r\n\r\n.content {\r\n  height: 600px;\r\n  margin: auto;\r\n  width: 100%;\r\n  max-width: 1050px;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .content {\r\n    max-width: 920px;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .content {\r\n    max-width: 920px;\r\n    margin-top: 100px;\r\n    height: auto;\r\n    min-height: 100vh;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .content {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .content {\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n.bg-shape {\r\n  height: 100%;\r\n  background-image: linear-gradient(-45deg, #cc3843 0%, #cb193f 100%);\r\n  box-shadow: 0px 30px 139px 0px rgba(10, 22, 31, 0.26);\r\n  border-radius: 30px;\r\n  padding: 45px 40px;\r\n  width: 50%;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .bg-shape {\r\n    width: 45%;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .bg-shape {\r\n    width: 90%;\r\n    height: 290px;\r\n    align-items: flex-start;\r\n    padding: 50px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .bg-shape {\r\n    padding: 30px;\r\n    width: 95%;\r\n    border-radius: 20px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .bg-shape {\r\n    height: 200px;\r\n    padding: 30px;\r\n  }\r\n}\r\n.bg-shape img {\r\n  object-fit: contain;\r\n  width: 510px;\r\n  display: block;\r\n  object-position: left center;\r\n  opacity: .2;\r\n  transform: rotate(-90deg) translateY(-50%);\r\n  max-width: inherit;\r\n  left: 10px;\r\n  position: absolute;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .bg-shape img {\r\n    width: 430px;\r\n    left: 10px;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .bg-shape img {\r\n    transform: none;\r\n    width: 100%;\r\n    position: relative;\r\n    left: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    object-fit: contain;\r\n    height: 100%;\r\n    object-position: top center;\r\n  }\r\n}\r\n\r\n.next, .prev {\r\n  z-index: 22;\r\n  display: inline-flex;\r\n  border: none;\r\n  width: 61px;\r\n  height: 61px;\r\n  border-radius: 50%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 25px;\r\n  position: absolute;\r\n  top: 50%;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n.next.disabled, .prev.disabled {\r\n  cursor: not-allowed;\r\n}\r\n.next:focus, .prev:focus {\r\n  outline: none;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .next, .prev {\r\n    top: 170px;\r\n  }\r\n}\r\n\r\n.prev {\r\n  left: -30%;\r\n  transform: translate(-100%, -50%);\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .prev {\r\n    left: -21%;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .prev {\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .prev {\r\n    transform: translate(20%, -50%);\r\n  }\r\n}\r\n\r\n.next {\r\n  right: 0;\r\n  transform: translate(50%, -50%);\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .next {\r\n    transform: translate(-20%, -50%);\r\n  }\r\n}\r\n\r\n.product-slider {\r\n  width: 75%;\r\n  height: 85%;\r\n  border-radius: 30px;\r\n  box-shadow: 0 28px 79px 0 rgba(10, 22, 31, 0.35);\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%);\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .product-slider {\r\n    width: 80%;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-slider {\r\n    width: 80%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    height: auto;\r\n    position: relative;\r\n    top: 0;\r\n    margin-top: 170px;\r\n    margin-bottom: 100px;\r\n  }\r\n  .product-slider br {\r\n    display: none;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-slider {\r\n    border-radius: 20px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-slider {\r\n    width: 85%;\r\n    margin-top: 130px;\r\n  }\r\n}\r\n.product-slider__wrp {\r\n  height: 100%;\r\n  max-height: 100vh;\r\n}\r\n.product-slider__item {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-slider__item {\r\n    height: auto;\r\n  }\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > * {\r\n  opacity: 1;\r\n  transform: none;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(1) {\r\n  transition-delay: 0s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(2) {\r\n  transition-delay: 0.2s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(3) {\r\n  transition-delay: 0.4s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(4) {\r\n  transition-delay: 0.6s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(5) {\r\n  transition-delay: 0.8s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(6) {\r\n  transition-delay: 1s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(7) {\r\n  transition-delay: 1.2s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(8) {\r\n  transition-delay: 1.4s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(9) {\r\n  transition-delay: 1.6s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(10) {\r\n  transition-delay: 1.8s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(11) {\r\n  transition-delay: 2s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(12) {\r\n  transition-delay: 2.2s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(13) {\r\n  transition-delay: 2.4s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(14) {\r\n  transition-delay: 2.6s;\r\n}\r\n.product-slider__item.swiper-slide-active .product-slider__content > *:nth-child(15) {\r\n  transition-delay: 2.8s;\r\n}\r\n.product-slider__item.swiper-slide-active circle {\r\n  animation: progress 1s ease-out forwards;\r\n  animation-delay: .5s;\r\n  opacity: 0.75;\r\n}\r\n.product-slider__card {\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  transition: all .5s;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-radius: 30px;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-slider__card {\r\n    align-items: flex-start;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-slider__card {\r\n    border-radius: 20px;\r\n  }\r\n}\r\n.product-slider__cover {\r\n  border-radius: 30px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  object-fit: cover;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-slider__cover {\r\n    border-radius: 20px;\r\n  }\r\n}\r\n.product-slider__content {\r\n  color: #fff;\r\n  padding-top: 1px;\r\n  position: relative;\r\n  z-index: 2;\r\n  width: 100%;\r\n  padding-left: 250px;\r\n  padding-right: 80px;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .product-slider__content {\r\n    padding-left: 220px;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-slider__content {\r\n    padding: 20px 60px 100px;\r\n    padding-top: 280px;\r\n    text-align: center;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-slider__content {\r\n    padding: 20px 30px 50px;\r\n    padding-top: 300px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-slider__content {\r\n    padding-top: 220px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n  }\r\n}\r\n.product-slider__title {\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  font-weight: 900;\r\n  font-size: 41px;\r\n  line-height: 1.2em;\r\n  letter-spacing: 2px;\r\n  opacity: 0;\r\n  transform: translateY(55px);\r\n  transition: all .5s;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .product-slider__title {\r\n    font-size: 34px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-slider__title {\r\n    font-size: 24px;\r\n  }\r\n}\r\n.product-slider__price {\r\n  display: block;\r\n  font-size: 42px;\r\n  opacity: 0;\r\n  transform: translateY(55px);\r\n  transition: all .5s;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .product-slider__price {\r\n    font-size: 36px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-slider__price {\r\n    font-size: 30px;\r\n  }\r\n}\r\n.product-slider__price sup {\r\n  top: -20px;\r\n  font-size: 65%;\r\n}\r\n.product-slider__cart {\r\n  box-shadow: 0 7px 99px 0 rgba(204, 51, 66, 0.6);\r\n  background-image: linear-gradient(-45deg, #cc3843 0%, #cb193f 100%);\r\n  border: none;\r\n  color: #fff;\r\n  padding: 10px 30px;\r\n  border-radius: 50px;\r\n  min-height: 50px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  letter-spacing: 2px;\r\n  margin-right: 40px;\r\n  cursor: pointer;\r\n}\r\n@media screen and (max-width: 768px) {\r\n  .product-slider__cart {\r\n    margin-right: 30px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-slider__cart {\r\n    width: 100%;\r\n    max-width: 300px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 50px;\r\n  }\r\n}\r\n.product-slider__fav {\r\n  color: #888e94;\r\n  background: none;\r\n  border: none;\r\n  position: relative;\r\n  padding-left: 25px;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n.product-slider__fav:focus {\r\n  outline: none;\r\n}\r\n.product-slider__fav .heart {\r\n  display: block;\r\n  position: absolute;\r\n  left: 0;\r\n  transform: translate(-50%, -50%) scale(0.7);\r\n  top: 50%;\r\n  pointer-events: none;\r\n  width: 100px;\r\n  height: 100px;\r\n  background: url(\"https://res.cloudinary.com/muhammederdem/image/upload/v1536405215/starwars/heart.png\") no-repeat;\r\n  background-position: 0 0;\r\n  cursor: pointer;\r\n  transition: background-position 1s steps(28);\r\n  transition-duration: 0s;\r\n}\r\n.product-slider__fav .heart.is-active {\r\n  transition-duration: 1s;\r\n  background-position: -2800px 0;\r\n}\r\n.product-slider__bottom {\r\n  margin-top: 20px;\r\n  opacity: 0;\r\n  transform: translateY(55px);\r\n  transition: all .5s;\r\n}\r\n.product-ctr {\r\n  display: flex;\r\n  align-items: center;\r\n  min-height: 150px;\r\n  margin-top: 40px;\r\n  opacity: 0;\r\n  transform: translateY(55px);\r\n  transition: all .5s;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-ctr {\r\n    justify-content: center;\r\n  }\r\n}\r\n.product-ctr .hr-vertical {\r\n  width: 1px;\r\n  background: #9fa3a7;\r\n  align-self: stretch;\r\n  margin: 0 35px;\r\n  flex-shrink: 0;\r\n  opacity: .5;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-ctr {\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 40px;\r\n  }\r\n  .product-ctr .hr-vertical {\r\n    width: 100%;\r\n    margin: 35px 0;\r\n    height: 1px;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-labels {\r\n    width: 100%;\r\n  }\r\n}\r\n.product-labels__checkbox {\r\n  display: none;\r\n}\r\n.product-labels__checkbox:checked + .product-labels__txt {\r\n  border-color: #cc3743;\r\n  padding: 10px 13px;\r\n}\r\n.product-labels__title {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 3px;\r\n  font-size: 16px;\r\n  margin-bottom: 10px;\r\n}\r\n.product-labels__group {\r\n  display: flex;\r\n  margin-bottom: 15px;\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-labels__group {\r\n    justify-content: center;\r\n  }\r\n}\r\n.product-labels__group:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.product-labels__item {\r\n  margin: 5px;\r\n  cursor: pointer;\r\n}\r\n.product-labels__item:first-child {\r\n  margin-left: 0;\r\n}\r\n.product-labels__txt {\r\n  display: block;\r\n  border: 2px solid transparent;\r\n  font-size: 14px;\r\n  padding: 10px 20px;\r\n  padding-left: 0;\r\n  border-radius: 50px;\r\n  transition: all .3s;\r\n  letter-spacing: 2px;\r\n}\r\n@keyframes progress {\r\n  0% {\r\n    stroke-dasharray: 0 100;\r\n  }\r\n}\r\n.product-inf {\r\n  text-align: center;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-inf {\r\n    width: 100%;\r\n  }\r\n}\r\n.product-inf__percent {\r\n  font-weight: 700;\r\n  font-size: 22px;\r\n  letter-spacing: 1px;\r\n  margin-bottom: 12px;\r\n  font-family: 'Dosis', sans-serif;\r\n  position: relative;\r\n}\r\n.product-inf__percent circle {\r\n  transform: rotate(180deg) scaleY(-1);\r\n  transform-origin: 50%;\r\n}\r\n.product-inf__percent-txt {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.product-inf__title {\r\n  font-family: 'Dosis', sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  font-size: 18px;\r\n}\r\n.product-img {\r\n  position: absolute;\r\n  z-index: 2;\r\n  width: 500px;\r\n  left: 25%;\r\n  transform: translateX(-45%);\r\n  max-height: 500px;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .product-img {\r\n    width: 430px;\r\n    left: 20%;\r\n  }\r\n}\r\n@media screen and (max-width: 992px) {\r\n  .product-img {\r\n    width: 430px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    top: 0;\r\n    height: 350px;\r\n  }\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .product-img {\r\n    width: 100%;\r\n    max-width: 400px;\r\n    top: 30px;\r\n    height: 390px;\r\n  }\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .product-img {\r\n    max-width: 300px;\r\n    height: 300px;\r\n  }\r\n}\r\n.product-img__item {\r\n  display: flex;\r\n  align-items: center;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  user-select: none;\r\n  top: 50%;\r\n  right: 0;\r\n  transform: translateY(-50%) translateX(-130px);\r\n  opacity: 0;\r\n  transition: all .3s;\r\n}\r\n.product-img__item.active {\r\n  opacity: 1;\r\n  transform: translateY(-50%) translateX(0);\r\n  transition-delay: .3s;\r\n}\r\n.product-img__item img {\r\n  object-fit: contain;\r\n  object-position: center right;\r\n}\r\n\r\n.social {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 0;\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 20px 55px;\r\n  justify-content: space-between;\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .social {\r\n    flex-direction: column;\r\n    bottom: 0;\r\n  }\r\n}\r\n.social__item {\r\n  color: rgba(255, 255, 255, 0.75);\r\n  font-family: 'Dosis', sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  line-height: 1em;\r\n  display: flex;\r\n  align-items: center;\r\n  transition: all .3s;\r\n}\r\n.social__item:hover {\r\n  color: #fff;\r\n}\r\n@media screen and (max-width: 576px) {\r\n  .social__item {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n.social__img {\r\n  width: 24px;\r\n  margin-right: 15px;\r\n}\r\n\r\n\r\n.hidden {\r\n  display: none;\r\n}",""]),n.exports=r},function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var i=(o=e,d=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(s," */")),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([i]).join("\n")}var o,d,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(e)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);e&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n,r,t){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,t){"use strict";t.r(r),r.default=t.p+"dbce4275646f840031385c17cb9bcfbd.jpg"},function(n,r,t){"use strict";t.r(r);t(0);var e=t.p+"d523dbff4e617e7027bf89e887288191.png";const i=new Image;i.src=e,document.getElementsByClassName("bg-shape")[0].appendChild(i);let a=new Swiper(".product-slider",{spaceBetween:30,effect:"fade",loop:!1,navigation:{nextEl:".next",prevEl:".prev"},on:{init:function(){let n=this.activeIndex,r=$(".product-slider__item").eq(n).data("target");console.log(r),$(".product-img__item").removeClass("active"),$(".product-img__item#"+r).addClass("active")}}});a.on("slideChange",(function(){let n=this.activeIndex,r=$(".product-slider__item").eq(n).data("target");console.log(r),$(".product-img__item").removeClass("active"),$(".product-img__item#"+r).addClass("active"),a.isEnd?($(".prev").removeClass("disabled"),$(".next").addClass("disabled")):$(".next").removeClass("disabled"),a.isBeginning?$(".prev").addClass("disabled"):$(".prev").removeClass("disabled")})),$(".js-fav").on("click",(function(){$(this).find(".heart").toggleClass("is-active")}))}]);