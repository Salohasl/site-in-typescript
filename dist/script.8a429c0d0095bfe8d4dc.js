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

document.addEventListener('DOMContentLoaded', function () {
    var sliderWrapper = document.querySelector('.slider-wrapper');
    var sliderBlocks = Array.from(sliderWrapper.querySelectorAll('.slider-block'));
    var prevButton = document.querySelector('.prevButton');
    var nextButton = document.querySelector('.nextButton');
    var currentIndex = 1; // Индекс активного слайда
    function updateSliderPosition(index) {
        // Убираем класс 'active' у всех слайдов
        sliderBlocks.forEach(function (block) { return block.classList.remove('active'); });
        // Добавляем класс 'active' к нужному слайду
        sliderBlocks[index].classList.add('active');
        // Здесь можно добавить логику для перемещения слайдов, если это необходимо
        // Например, изменение CSS свойства 'transform' для каждого слайда
        console.log(sliderBlocks[index]);
    }
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
        console.log(currentIndex);
    }
    prevButton.addEventListener('click', function () {
        moveSlider(-1); // Переход к предыдущему слайду
    });
    nextButton.addEventListener('click', function () {
        moveSlider(-1); // Переход к следующему слайду
    });
    updateSliderPosition(currentIndex);
});
function increaseImg() {
    var licenseImages = document.querySelectorAll('.license-img');
    var swiper = document.querySelector('.swiper');
    var close = document.querySelector('.close');
    licenseImages.forEach(function (licenseImg) {
        licenseImg.addEventListener('click', function () {
            swiper.classList.add('show');
        });
    });
    close.addEventListener('click', function () {
        swiper.classList.remove('show');
    });
}
increaseImg();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsV0FBVyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLy4vc3JjL3N0eWxlcy5zY3NzPzAyOWEiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLXdyYXBwZXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHNsaWRlckJsb2NrcyA9IEFycmF5LmZyb20oc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWJsb2NrJykpIGFzIEhUTUxFbGVtZW50W107XHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZCdXR0b24nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV4dEJ1dHRvbicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleDogbnVtYmVyID0gMTsgLy8g0JjQvdC00LXQutGBINCw0LrRgtC40LLQvdC+0LPQviDRgdC70LDQudC00LBcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyUG9zaXRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vINCj0LHQuNGA0LDQtdC8INC60LvQsNGB0YEgJ2FjdGl2ZScg0YMg0LLRgdC10YUg0YHQu9Cw0LnQtNC+0LJcclxuICAgICAgICBzbGlkZXJCbG9ja3MuZm9yRWFjaChibG9jayA9PiBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgJ2FjdGl2ZScg0Log0L3Rg9C20L3QvtC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICAgICAgc2xpZGVyQmxvY2tzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8g0JfQtNC10YHRjCDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0LvQvtCz0LjQutGDINC00LvRjyDQv9C10YDQtdC80LXRidC10L3QuNGPINGB0LvQsNC50LTQvtCyLCDQtdGB0LvQuCDRjdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L5cclxuICAgICAgICAvLyDQndCw0L/RgNC40LzQtdGALCDQuNC30LzQtdC90LXQvdC40LUgQ1NTINGB0LLQvtC50YHRgtCy0LAgJ3RyYW5zZm9ybScg0LTQu9GPINC60LDQttC00L7Qs9C+INGB0LvQsNC50LTQsFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCBzbGlkZXJCbG9ja3NbaW5kZXhdKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1vdmVTbGlkZXIoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgZGlyZWN0aW9uICsgc2xpZGVyQmxvY2tzLmxlbmd0aCkgJSBzbGlkZXJCbG9ja3MubGVuZ3RoO1xyXG4gICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uKGN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEluZGV4KVxyXG4gICAgfVxyXG5cclxuICAgIHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb3ZlU2xpZGVyKC0xKTsgLy8g0J/QtdGA0LXRhdC+0LQg0Log0L/RgNC10LTRi9C00YPRidC10LzRgyDRgdC70LDQudC00YNcclxuICAgIH0pO1xyXG5cclxuICAgIG5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb3ZlU2xpZGVyKC0xKTsgLy8g0J/QtdGA0LXRhdC+0LQg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICB9KTtcclxuXHJcbiAgICB1cGRhdGVTbGlkZXJQb3NpdGlvbihjdXJyZW50SW5kZXgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbmNyZWFzZUltZygpIHtcclxuICAgICAgICBjb25zdCBsaWNlbnNlSW1hZ2VzOiBOb2RlTGlzdE9mPEhUTUxJbWFnZUVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpY2Vuc2UtaW1nJyk7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXInKTtcclxuICAgICAgICBjb25zdCBjbG9zZTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcclxuXHJcbiAgICAgICAgbGljZW5zZUltYWdlcy5mb3JFYWNoKChsaWNlbnNlSW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxpY2Vuc2VJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgc3dpcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAgICAgICB9KVxyXG59XHJcblxyXG5pbmNyZWFzZUltZygpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=