/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

function slider() {
    var prevButton = document.querySelector('.prevButton');
    var nextButton = document.querySelector('.nextButton');
    prevButton.addEventListener('click', function () {
        console.log('1');
    });
}
slider();
function increaseImg() {
    try {
        var licenseImages = document.querySelectorAll('.license-img');
        var enlargedImages = document.querySelectorAll('.enlarged-image');
        // Проверяем, что коллекция enlargedImages не пуста
        if (enlargedImages.length === 0)
            throw new Error("Enlarged image not found");
        // Преобразуем NodeList в массив для удобства работы
        var enlargedImagesArray_1 = Array.from(enlargedImages);
        licenseImages.forEach(function (licenseImg, index) {
            var enlargedImage = enlargedImagesArray_1[index];
            licenseImg.addEventListener('click', function () {
                enlargedImage.classList.add('active');
            });
        });
        enlargedImagesArray_1.forEach(function (enlargedImage) {
            enlargedImage.addEventListener('click', function () {
                enlargedImage.classList.remove('active');
                console.log('123');
            });
        });
    }
    catch (error) {
        console.error("Error in increaseImg function:", error);
    }
}
increaseImg();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmEzOWZhZThhNjdjZjY2YTcyOGYxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ051QjtBQUV2QixTQUFTLE1BQU07SUFDWCxJQUFNLFVBQVUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RSxJQUFNLFVBQVUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU5RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELE1BQU0sRUFBRSxDQUFDO0FBU1QsU0FBUyxXQUFXO0lBQ2hCLElBQUksQ0FBQztRQUNELElBQU0sYUFBYSxHQUFxRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEgsSUFBTSxjQUFjLEdBQW1ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXBILG1EQUFtRDtRQUNuRCxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQztZQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUU3RSxvREFBb0Q7UUFDcEQsSUFBTSxxQkFBbUIsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXZELGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUFVLEVBQUUsS0FBSztZQUNwQyxJQUFNLGFBQWEsR0FBRyxxQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVqRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUNqQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgscUJBQW1CLENBQUMsT0FBTyxDQUFDLHVCQUFhO1lBQ3JDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztJQUNOLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0FBQ0wsQ0FBQztBQUVELFdBQVcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9zdHlsZXMuc2Nzcz8wMjlhIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5mdW5jdGlvbiBzbGlkZXIoKXtcclxuICAgIGNvbnN0IHByZXZCdXR0b24gOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldkJ1dHRvbicpO1xyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJyk7XHJcblxyXG4gICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuICAgIH0pXHJcbn1cclxuc2xpZGVyKCk7XHJcblxyXG4vLyDQntC/0YDQtdC00LXQu9C10L3QuNC1INGC0LjQv9CwINC00LvRjyBOb2RlTGlzdCwg0LrQvtGC0L7RgNGL0Lkg0LLQvtC30LLRgNCw0YnQsNC10YIgcXVlcnlTZWxlY3RvckFsbFxyXG5pbnRlcmZhY2UgTm9kZUxpc3Q8VD4gZXh0ZW5kcyBOb2RlTGlzdE9mPGFueT4ge31cclxuXHJcbi8vINCe0L/RgNC10LTQtdC70LXQvdC40LUg0YLQuNC/0LAg0LTQu9GPINGN0LvQtdC80LXQvdGC0LAsINC60L7RgtC+0YDRi9C5INC80L7QttC10YIg0LHRi9GC0Ywg0L/QvtC70YPRh9C10L0g0YfQtdGA0LXQtyBxdWVyeVNlbGVjdG9yXHJcbmludGVyZmFjZSBIVE1MRWxlbWVudFdpdGhDbGFzczxUPiBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIGNsYXNzTGlzdDogRE9NVG9rZW5MaXN0ICYgeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbn1cclxuZnVuY3Rpb24gaW5jcmVhc2VJbWcoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxpY2Vuc2VJbWFnZXM6IE5vZGVMaXN0PEhUTUxFbGVtZW50V2l0aENsYXNzPEhUTUxJbWFnZUVsZW1lbnQ+PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWNlbnNlLWltZycpO1xyXG4gICAgICAgIGNvbnN0IGVubGFyZ2VkSW1hZ2VzOiBOb2RlTGlzdDxIVE1MRWxlbWVudFdpdGhDbGFzczxIVE1MRGl2RWxlbWVudD4+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVubGFyZ2VkLWltYWdlJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0LrQvtC70LvQtdC60YbQuNGPIGVubGFyZ2VkSW1hZ2VzINC90LUg0L/Rg9GB0YLQsFxyXG4gICAgICAgIGlmIChlbmxhcmdlZEltYWdlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkVubGFyZ2VkIGltYWdlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyDQn9GA0LXQvtCx0YDQsNC30YPQtdC8IE5vZGVMaXN0INCyINC80LDRgdGB0LjQsiDQtNC70Y8g0YPQtNC+0LHRgdGC0LLQsCDRgNCw0LHQvtGC0YtcclxuICAgICAgICBjb25zdCBlbmxhcmdlZEltYWdlc0FycmF5ID0gQXJyYXkuZnJvbShlbmxhcmdlZEltYWdlcyk7XHJcblxyXG4gICAgICAgIGxpY2Vuc2VJbWFnZXMuZm9yRWFjaCgobGljZW5zZUltZywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZW5sYXJnZWRJbWFnZSA9IGVubGFyZ2VkSW1hZ2VzQXJyYXlbaW5kZXhdO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBsaWNlbnNlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5sYXJnZWRJbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVubGFyZ2VkSW1hZ2VzQXJyYXkuZm9yRWFjaChlbmxhcmdlZEltYWdlID0+IHtcclxuICAgICAgICAgICAgZW5sYXJnZWRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgICAgICBlbmxhcmdlZEltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEyMycpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBpbiBpbmNyZWFzZUltZyBmdW5jdGlvbjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbmNyZWFzZUltZygpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=