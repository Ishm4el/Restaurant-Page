/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactInfo() {
    const containerContact = document.createElement('div');
    containerContact.style.cssText = 'display: flex; flex-direction: column; height: 100%; align-items: center; font-size: 3rem; margin: 0 0 0 0; justify-content: center; position: relative; max-height: 75%; background-image: linear-gradient(45deg, lightblue, white); gap: 1vh';
    containerContact.innerHTML = `
        <div class="contact-card">
            <div class="contact-header">Contact Us</div>
            <div class="contact-card-left">
                <h4 style="margin: 0; padding: 0;">The Store</h4>
                <ul style="list-style: none; padding: 0; margin: 0 0 0 20px;">
                    <li>
                        Everyone Present
                    </li>
                    <li>
                        555-555-5556
                    </li>
                    <li>
                        TheGreatTaormina@@notFake.com
                    </li>
                </ul>
            </div>
            <div class="contact-card-right"></div>
        </div>

        <div class="contact-card">
            <div class="contact-header">Staff</div>
            <div class="contact-card-left">
                <h4 style="margin: 0; padding: 0;">Ezio Auditore</h4>
                <ul style="list-style: none; padding: 0; margin: 0 0 0 20px;">
                    <li>
                        Owner and Manager
                    </li>
                    <li>
                        555-555-5555
                    </li>
                    <li>
                        EzioAuditoreEmail@@notFake.com
                    </li>
                </ul>
            </div>
            <div class="contact-card-right"></div>
        </div>`;
    return containerContact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactInfo);

/***/ }),

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
    headline.style.cssText = 'font-size: 3rem; text-align: center; background-color: white; padding: 2vh 2vw';
    
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuOptions() {
    const containerMenu = document.createElement('div');
    containerMenu.style.cssText = 'display: flex; flex-wrap: wrap; background-image: linear-gradient(60deg, pink, white); height: 100%; width: 100%; align-content: flex-start; justify-content: space-around; padding: 40px 0 0 0;';
    containerMenu.innerHTML = 
    `
    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>

    <div class="menu-card">
        <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div class="menu-dish">
            Spaghetti
        </div>
    </div>
    `;
    return containerMenu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuOptions);

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const headStyler = document.createElement('style');
headStyler.innerHTML = `
    a {
        text-decoration: none;
        color: darkred;
        pointer-events: auto;
    }
    
    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .menu-card > img {
        width: 16vw;
        height: 16vw;
        object-fit: cover;  
    }

    .menu-dish {
        text-align: center;
        font-size: 3rem;
    }

    .menu-card {
        border: 1px solid black;
        margin: 10px;
    }
`;
document.getElementsByTagName('head')[0].appendChild(headStyler);

const body = document.querySelector('#content');
document.querySelector('html').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0; overflow: hidden';
document.querySelector('body').style.cssText = 'height: 100%; width: 100%; padding: 0; margin: 0';
body.style.cssText = 'height: 100%; width: 100%;'
const header = document.createElement('header');
header.style.cssText = 'font-size: 4rem; text-align: center; padding: 0; margin: 0;'
header.innerHTML = '<h1 style="padding: 0; margin: 0;">The Grand Taormina</h1><ul style="padding: 0; margin: 0; list-style: none; display: flex; gap: 10vw; justify-content: center;"><li><a>Home</a></li><li><a>Menu</a></li><li><a>Contact</a></li></ul>';
body.appendChild(header);
const adjustA = document.querySelectorAll('a');
adjustA.forEach((element, num) => {
    switch(num) {
        case 0:
            element.addEventListener('click', () => {
                body.removeChild(body.lastChild);
                body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
            });
            break;
        case 1:
            element.onclick = () => {
                console.log("2nd");
                body.removeChild(body.lastChild);
                body.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
            };
            break;
        case 2:
            element.addEventListener('click', () => {
                console.log("3rd");
                body.removeChild(body.lastChild);
                body.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])());
            })
    }
});


body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFTO0FBQzFDLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvREFBZ0I7QUFDakQsYUFBYTtBQUNiO0FBQ0EsQ0FBQzs7O0FBR0QsaUJBQWlCLGlEQUFTLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNvbnRhY3RJbmZvKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lckNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXJDb250YWN0LnN0eWxlLmNzc1RleHQgPSAnZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgaGVpZ2h0OiAxMDAlOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXNpemU6IDNyZW07IG1hcmdpbjogMCAwIDAgMDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWF4LWhlaWdodDogNzUlOyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIGxpZ2h0Ymx1ZSwgd2hpdGUpOyBnYXA6IDF2aCc7XG4gICAgY29udGFpbmVyQ29udGFjdC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWhlYWRlclwiPkNvbnRhY3QgVXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmQtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxoNCBzdHlsZT1cIm1hcmdpbjogMDsgcGFkZGluZzogMDtcIj5UaGUgU3RvcmU8L2g0PlxuICAgICAgICAgICAgICAgIDx1bCBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMCAwIDAgMjBweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlcnlvbmUgUHJlc2VudFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA1NTUtNTU1LTU1NTZcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlR3JlYXRUYW9ybWluYUBAbm90RmFrZS5jb21cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0LWhlYWRlclwiPlN0YWZmPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFjdC1jYXJkLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9XCJtYXJnaW46IDA7IHBhZGRpbmc6IDA7XCI+RXppbyBBdWRpdG9yZTwvaDQ+XG4gICAgICAgICAgICAgICAgPHVsIHN0eWxlPVwibGlzdC1zdHlsZTogbm9uZTsgcGFkZGluZzogMDsgbWFyZ2luOiAwIDAgMCAyMHB4O1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBPd25lciBhbmQgTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA1NTUtNTU1LTU1NTVcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXppb0F1ZGl0b3JlRW1haWxAQG5vdEZha2UuY29tXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtY2FyZC1yaWdodFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiBjb250YWluZXJDb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0SW5mbzsiLCJpbXBvcnQgaXRhbGlhbksgZnJvbSAnLi9pdGFsaWFuLmpwZyc7XG5mdW5jdGlvbiBidWlsZEhvbWUoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSAnd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7J1xuICAgIGNvbnN0IG15SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBteUltYWdlLnNyYyA9IGl0YWxpYW5LO1xuICAgIG15SW1hZ2Uuc3R5bGUuY3NzVGV4dCA9ICd3aWR0aDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjsgb2JqZWN0LWZpdDogc2NhbGU7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBib3R0b206IDA7IHotaW5kZXg6IC0xOyAnO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG15SW1hZ2UpO1xuXG4gICAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGVhZGxpbmUuc3R5bGUuY3NzVGV4dCA9ICdmb250LXNpemU6IDNyZW07IHRleHQtYWxpZ246IGNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IHBhZGRpbmc6IDJ2aCAydncnO1xuICAgIFxuICAgIGNvbnN0IHNwYW5Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNwYW5Cb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3BhblRvcC5pbm5lclRleHQgPSBcIlRoZSBHcmFuZCBUYW9ybWluYVxcblwiO1xuICAgIHNwYW5Cb3QuaW5uZXJUZXh0ID0gJ1dlbGNvbWUgdG8gb3VyIHdvbmRlcmZ1bCByZXN0ZXJhdW50IGhvbWVwYWdlIVxcbk91ciBidXNpbmVzcyBoYXMgYmVlbiBydW5uZ2luIGZvciBvdmVyIDEwMCB5ZWFycywgYW5kIHdlIGhhdmUgYmVlbiBtYWtpbmcgYmVsb3ZlZCBmb29kIGZvciBhcyBsb25nIGFzIHdlIGNhbiByZW1lbWJlcic7XG4gICAgaGVhZGxpbmUuYXBwZW5kKHNwYW5Ub3AsIHNwYW5Cb3QpO1xuICAgIC8vIGhlYWRsaW5lLmFwcGVuZENoaWxkKHNwYW5Ub3ApO1xuICAgIC8vIGhlYWRsaW5lLmFwcGVuZENoaWxkKHNwYW5Cb3QpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkSG9tZTsiLCJmdW5jdGlvbiBtZW51T3B0aW9ucygpIHtcbiAgICBjb25zdCBjb250YWluZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyTWVudS5zdHlsZS5jc3NUZXh0ID0gJ2Rpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDYwZGVnLCBwaW5rLCB3aGl0ZSk7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyBwYWRkaW5nOiA0MHB4IDAgMCAwOyc7XG4gICAgY29udGFpbmVyTWVudS5pbm5lckhUTUwgPSBcbiAgICBgXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTc5Njg0OTQ3NTUwLTIyZTk0NTIyNWQ5YT9xPTgwJnc9MTk3NCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lbnUtZGlzaFwiPlxuICAgICAgICAgICAgU3BhZ2hldHRpXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgcmV0dXJuIGNvbnRhaW5lck1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVPcHRpb25zOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY29udGFpbmVyIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY29udGFjdENvbnRhaW5lciBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IG1lbnVDb250YWluZXIgZnJvbSAnLi9tZW51JztcblxuY29uc3QgaGVhZFN0eWxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5oZWFkU3R5bGVyLmlubmVySFRNTCA9IGBcbiAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogZGFya3JlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5tZW51LWNhcmQgPiBpbWcge1xuICAgICAgICB3aWR0aDogMTZ2dztcbiAgICAgICAgaGVpZ2h0OiAxNnZ3O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjsgIFxuICAgIH1cblxuICAgIC5tZW51LWRpc2gge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICAubWVudS1jYXJkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICB9XG5gO1xuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChoZWFkU3R5bGVyKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG92ZXJmbG93OiBoaWRkZW4nO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgcGFkZGluZzogMDsgbWFyZ2luOiAwJztcbmJvZHkuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOydcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuaGVhZGVyLnN0eWxlLmNzc1RleHQgPSAnZm9udC1zaXplOiA0cmVtOyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsnXG5oZWFkZXIuaW5uZXJIVE1MID0gJzxoMSBzdHlsZT1cInBhZGRpbmc6IDA7IG1hcmdpbjogMDtcIj5UaGUgR3JhbmQgVGFvcm1pbmE8L2gxPjx1bCBzdHlsZT1cInBhZGRpbmc6IDA7IG1hcmdpbjogMDsgbGlzdC1zdHlsZTogbm9uZTsgZGlzcGxheTogZmxleDsgZ2FwOiAxMHZ3OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj48bGk+PGE+SG9tZTwvYT48L2xpPjxsaT48YT5NZW51PC9hPjwvbGk+PGxpPjxhPkNvbnRhY3Q8L2E+PC9saT48L3VsPic7XG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5jb25zdCBhZGp1c3RBID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuYWRqdXN0QS5mb3JFYWNoKChlbGVtZW50LCBudW0pID0+IHtcbiAgICBzd2l0Y2gobnVtKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIybmRcIik7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5Lmxhc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiM3JkXCIpO1xuICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcigpKTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSk7XG5cblxuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9