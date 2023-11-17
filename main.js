/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _italian_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./italian.jpg */ "./src/italian.jpg");

function buildHome() {
    const container = document.createElement('div');
    container.style.cssText = 'width: 100%; height: 100%; overflow: hidden; position: relative; display: inline-block;'
    const myImage = new Image();
    myImage.src = _italian_jpg__WEBPACK_IMPORTED_MODULE_0__;
    myImage.style.cssText = 'width: 100%; overflow: hidden; object-fit: scale; position: absolute; top: 0; bottom: 0; z-index: -1; ';

    container.appendChild(myImage);

    const headline = document.createElement('p');
    headline.style.cssText = 'font-size: 5rem; text-align: center; background-color: white; padding: 2vh 2vw';
    
    const spanTop = document.createElement('h1');
    const spanBot = document.createElement('span');
    spanTop.innerText = "The Grand Taormina\n";
    spanBot.innerText = 'Welcome to our wonderful resteraunt homepage!\nOur business has been runngin for over 100 years, and we have been making beloved food for as long as we can remember';
    headline.append(spanTop, spanBot);
    // headline.appendChild(spanTop);
    // headline.appendChild(spanBot);
    container.appendChild(headline);

    return container;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildHome);

/***/ }),

/***/ "./src/italian.jpg":
/*!*************************!*\
  !*** ./src/italian.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1560f076342da2fd814d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const body = document.querySelector('#content');
document.querySelector('html').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0; overflow: hidden';
document.querySelector('body').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0';
body.style.cssText = 'height: 100%; width: 100%;'
const header = document.createElement('header');
header.style.cssText = 'font-size: 10rem; text-align: center; padding: 0; margin: 0;'
header.innerHTML = '<h1 style="padding: 0; margin: 0;">The Grand Taormina</h1><ul style="padding: 0; margin: 0; list-style: none; display: flex; gap: 10vw; justify-content: center;"><li>Home</li><li>Menu</li><li>Contact</li></ul>';
body.appendChild(header);
body.append((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDQTtBQUNBLDRDQUE0QyxjQUFjLGtCQUFrQixvQkFBb0Isc0JBQXNCO0FBQ3RIO0FBQ0Esa0JBQWtCLHlDQUFRO0FBQzFCLDBDQUEwQyxrQkFBa0IsbUJBQW1CLG9CQUFvQixRQUFRLFdBQVcsYUFBYTs7QUFFbkk7O0FBRUE7QUFDQSwrQ0FBK0Msb0JBQW9CLHlCQUF5QjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCK0I7O0FBRS9CO0FBQ0EsOERBQThELGFBQWEsWUFBWSxXQUFXO0FBQ2xHLDhEQUE4RCxhQUFhLFlBQVk7QUFDdkYsb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQSwwQ0FBMEMsb0JBQW9CLFlBQVksVUFBVTtBQUNwRiwyQ0FBMkMsVUFBVSxnREFBZ0QsV0FBVyxrQkFBa0IsZUFBZSxXQUFXLHdCQUF3QjtBQUNwTDtBQUNBLFlBQVksaURBQVMsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGl0YWxpYW5LIGZyb20gJy4vaXRhbGlhbi5qcGcnO1xuZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gJ3dpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOydcbiAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbXlJbWFnZS5zcmMgPSBpdGFsaWFuSztcbiAgICBteUltYWdlLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47IG9iamVjdC1maXQ6IHNjYWxlOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgYm90dG9tOiAwOyB6LWluZGV4OiAtMTsgJztcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChteUltYWdlKTtcblxuICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhlYWRsaW5lLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiA1cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAydmggMnZ3JztcbiAgICBcbiAgICBjb25zdCBzcGFuVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzcGFuQm90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5Ub3AuaW5uZXJUZXh0ID0gXCJUaGUgR3JhbmQgVGFvcm1pbmFcXG5cIjtcbiAgICBzcGFuQm90LmlubmVyVGV4dCA9ICdXZWxjb21lIHRvIG91ciB3b25kZXJmdWwgcmVzdGVyYXVudCBob21lcGFnZSFcXG5PdXIgYnVzaW5lc3MgaGFzIGJlZW4gcnVubmdpbiBmb3Igb3ZlciAxMDAgeWVhcnMsIGFuZCB3ZSBoYXZlIGJlZW4gbWFraW5nIGJlbG92ZWQgZm9vZCBmb3IgYXMgbG9uZyBhcyB3ZSBjYW4gcmVtZW1iZXInO1xuICAgIGhlYWRsaW5lLmFwcGVuZChzcGFuVG9wLCBzcGFuQm90KTtcbiAgICAvLyBoZWFkbGluZS5hcHBlbmRDaGlsZChzcGFuVG9wKTtcbiAgICAvLyBoZWFkbGluZS5hcHBlbmRDaGlsZChzcGFuQm90KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBidWlsZEhvbWU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjb250YWluZXIgZnJvbSAnLi9ob21lJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG92ZXJmbG93OiBoaWRkZW4nO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgcGFkZGluZzogMDsgbWFyZ2luOiAwJztcbmJvZHkuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOydcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiAxMHJlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7J1xuaGVhZGVyLmlubmVySFRNTCA9ICc8aDEgc3R5bGU9XCJwYWRkaW5nOiAwOyBtYXJnaW46IDA7XCI+VGhlIEdyYW5kIFRhb3JtaW5hPC9oMT48dWwgc3R5bGU9XCJwYWRkaW5nOiAwOyBtYXJnaW46IDA7IGxpc3Qtc3R5bGU6IG5vbmU7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTB2dzsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+PGxpPkhvbWU8L2xpPjxsaT5NZW51PC9saT48bGk+Q29udGFjdDwvbGk+PC91bD4nO1xuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuYm9keS5hcHBlbmQoY29udGFpbmVyKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==