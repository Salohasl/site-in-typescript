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
    }
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
    }
    prevButton.addEventListener('click', function () {
        moveSlider(-1); // Переход к предыдущему слайду
    });
    nextButton.addEventListener('click', function () {
        moveSlider(1); // Переход к следующему слайду
    });
    // Автоматическое обновление позиции слайдов каждые 5 секунд
    /*setInterval(() => {
         moveSlider(1); // Пример автоматического перехода к следующему слайду
     }, 5000); */
    // Инициализация слайдера
    updateSliderPosition(currentIndex);
});
function increaseImg() {
    try {
        var licenseImages = document.querySelectorAll('.license-img');
        var enlargedImages = document.querySelectorAll('.enlarged-image');
        if (enlargedImages.length === 0)
            throw new Error("Enlarged image not found");
        var enlargedImagesArray_1 = Array.from(enlargedImages);
        licenseImages.forEach(function (licenseImg, index) {
            var enlargedImage = enlargedImagesArray_1[index];
            licenseImg.addEventListener('click', function () {
                if (!enlargedImage.classList.contains('active')) {
                    enlargedImage.classList.add('active');
                }
                else {
                    enlargedImage.classList.remove('active');
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO29CQUM5QyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztxQkFBTSxDQUFDO29CQUNKLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0FBQ0wsQ0FBQztBQUVELFdBQVcsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC8uL3NyYy9zdHlsZXMuc2Nzcz8wMjlhIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9vZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvb2QvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlci13cmFwcGVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzbGlkZXJCbG9ja3MgPSBBcnJheS5mcm9tKHNsaWRlcldyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1ibG9jaycpKSBhcyBIVE1MRWxlbWVudFtdO1xyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmV2QnV0dG9uJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRCdXR0b24nKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBsZXQgY3VycmVudEluZGV4OiBudW1iZXIgPSAxOyAvLyDQmNC90LTQtdC60YEg0LDQutGC0LjQstC90L7Qs9C+INGB0LvQsNC50LTQsFxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlclBvc2l0aW9uKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyDQo9Cx0LjRgNCw0LXQvCDQutC70LDRgdGBICdhY3RpdmUnINGDINCy0YHQtdGFINGB0LvQsNC50LTQvtCyXHJcbiAgICAgICAgc2xpZGVyQmxvY2tzLmZvckVhY2goYmxvY2sgPT4gYmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSAnYWN0aXZlJyDQuiDQvdGD0LbQvdC+0LzRgyDRgdC70LDQudC00YNcclxuICAgICAgICBzbGlkZXJCbG9ja3NbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICAvLyDQl9C00LXRgdGMINC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNC60YMg0LTQu9GPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y8g0YHQu9Cw0LnQtNC+0LIsINC10YHQu9C4INGN0YLQviDQvdC10L7QsdGF0L7QtNC40LzQvlxyXG4gICAgICAgIC8vINCd0LDQv9GA0LjQvNC10YAsINC40LfQvNC10L3QtdC90LjQtSBDU1Mg0YHQstC+0LnRgdGC0LLQsCAndHJhbnNmb3JtJyDQtNC70Y8g0LrQsNC20LTQvtCz0L4g0YHQu9Cw0LnQtNCwXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBkaXJlY3Rpb24gKyBzbGlkZXJCbG9ja3MubGVuZ3RoKSAlIHNsaWRlckJsb2Nrcy5sZW5ndGg7XHJcbiAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb24oY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW92ZVNsaWRlcigtMSk7IC8vINCf0LXRgNC10YXQvtC0INC6INC/0YDQtdC00YvQtNGD0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbW92ZVNsaWRlcigxKTsgLy8g0J/QtdGA0LXRhdC+0LQg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyDQkNCy0YLQvtC80LDRgtC40YfQtdGB0LrQvtC1INC+0LHQvdC+0LLQu9C10L3QuNC1INC/0L7Qt9C40YbQuNC4INGB0LvQsNC50LTQvtCyINC60LDQttC00YvQtSA1INGB0LXQutGD0L3QtFxyXG4gICAvKnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICBtb3ZlU2xpZGVyKDEpOyAvLyDQn9GA0LjQvNC10YAg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60L7Qs9C+INC/0LXRgNC10YXQvtC00LAg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICB9LCA1MDAwKTsgKi9cclxuXHJcbiAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNCwXHJcbiAgICB1cGRhdGVTbGlkZXJQb3NpdGlvbihjdXJyZW50SW5kZXgpO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBpbmNyZWFzZUltZygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbGljZW5zZUltYWdlczogTm9kZUxpc3RPZjxIVE1MSW1hZ2VFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWNlbnNlLWltZycpO1xyXG4gICAgICAgIGNvbnN0IGVubGFyZ2VkSW1hZ2VzOiBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lbmxhcmdlZC1pbWFnZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlbmxhcmdlZEltYWdlcy5sZW5ndGggPT09IDApIHRocm93IG5ldyBFcnJvcihcIkVubGFyZ2VkIGltYWdlIG5vdCBmb3VuZFwiKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlbmxhcmdlZEltYWdlc0FycmF5ID0gQXJyYXkuZnJvbShlbmxhcmdlZEltYWdlcyk7XHJcblxyXG4gICAgICAgIGxpY2Vuc2VJbWFnZXMuZm9yRWFjaCgobGljZW5zZUltZzogSFRNTEltYWdlRWxlbWVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbmxhcmdlZEltYWdlID0gZW5sYXJnZWRJbWFnZXNBcnJheVtpbmRleF07XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpY2Vuc2VJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVubGFyZ2VkSW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVubGFyZ2VkSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVubGFyZ2VkSW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGluIGluY3JlYXNlSW1nIGZ1bmN0aW9uOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmluY3JlYXNlSW1nKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==