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
    var sliderButton = document.querySelector('.slider-button');
    var currentIndex = 1; // Индекс активного слайда
    function updateSliderPosition(index) {
        // Убираем класс 'active' у всех слайдов
        sliderBlocks.forEach(function (block) { return block.classList.remove('active'); });
        // Добавляем класс 'active' к нужному слайду
        sliderBlocks[index].classList.add('active');
        // После обновления активности слайдов, генерируем кнопки
        generateButtons();
    }
    function moveSlider(direction) {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
        console.log(currentIndex);
    }
    // Функция для обработки свайпа
    function handleSwipe(event) {
        // Проверяем, что объект touch существует
        if (!event.touches || event.touches.length === 0) {
            return; // Если нет, то ничего не делаем
        }
        var touch = event.touches[0];
        var startX = touch.clientX;
        var endX = touch.clientX - event.changedTouches[0].clientX;
        console.log(touch);
        if (Math.abs(endX) > 100) { // Условие для определения свайпа
            if (endX < 0) {
                moveSlider(-1); // Переход к предыдущему слайду
            }
            else {
                moveSlider(1); // Переход к следующему слайду
            }
        }
    }
    sliderWrapper.addEventListener('touchstart', handleSwipe);
    sliderWrapper.addEventListener('touchmove', handleSwipe);
    sliderWrapper.addEventListener('touchend', handleSwipe);
    // Функция для генерации кнопок
    function generateButtons() {
        sliderButton.innerHTML = ''; // Очищаем предыдущие кнопки
        sliderBlocks.forEach(function (block, index) {
            var button = document.createElement('button');
            if (block.classList.contains('active')) {
                button.classList.add('active');
                button.style.width = '30px';
                button.style.height = '30px';
            }
            button.addEventListener('click', function () {
                updateSliderPosition(index);
            });
            sliderButton.appendChild(button);
        });
    }
    prevButton.addEventListener('click', function () {
        moveSlider(-1); // Переход к предыдущему слайду
    });
    nextButton.addEventListener('click', function () {
        moveSlider(1); // Переход к следующему слайду
    });
    // Инициализация слайдера
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCx5QkFBeUI7SUFDekIsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFNSCxTQUFTLFdBQVc7SUFDWixJQUFNLGFBQWEsR0FBaUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlGLElBQU0sTUFBTSxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pFLElBQU0sS0FBSyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRS9ELGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQyxVQUE0QjtRQUMvQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxXQUFXLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QvLi9zcmMvc3R5bGVzLnNjc3M/MDI5YSIsIndlYnBhY2s6Ly9mb29kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zvb2Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb29kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItd3JhcHBlcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3Qgc2xpZGVyQmxvY2tzID0gQXJyYXkuZnJvbShzbGlkZXJXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItYmxvY2snKSkgYXMgSFRNTEVsZW1lbnRbXTtcclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldkJ1dHRvbicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXh0QnV0dG9uJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzbGlkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWJ1dHRvbicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIGxldCBjdXJyZW50SW5kZXg6IG51bWJlciA9IDE7IC8vINCY0L3QtNC10LrRgSDQsNC60YLQuNCy0L3QvtCz0L4g0YHQu9Cw0LnQtNCwXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyUG9zaXRpb24oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vINCj0LHQuNGA0LDQtdC8INC60LvQsNGB0YEgJ2FjdGl2ZScg0YMg0LLRgdC10YUg0YHQu9Cw0LnQtNC+0LJcclxuICAgICAgICBzbGlkZXJCbG9ja3MuZm9yRWFjaChibG9jayA9PiBibG9jay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgJ2FjdGl2ZScg0Log0L3Rg9C20L3QvtC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICAgICAgc2xpZGVyQmxvY2tzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgLy8g0J/QvtGB0LvQtSDQvtCx0L3QvtCy0LvQtdC90LjRjyDQsNC60YLQuNCy0L3QvtGB0YLQuCDRgdC70LDQudC00L7Qsiwg0LPQtdC90LXRgNC40YDRg9C10Lwg0LrQvdC+0L/QutC4XHJcbiAgICAgICAgZ2VuZXJhdGVCdXR0b25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbW92ZVNsaWRlcihkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBkaXJlY3Rpb24gKyBzbGlkZXJCbG9ja3MubGVuZ3RoKSAlIHNsaWRlckJsb2Nrcy5sZW5ndGg7XHJcbiAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb24oY3VycmVudEluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7QsdGA0LDQsdC+0YLQutC4INGB0LLQsNC50L/QsFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3dpcGUoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINGH0YLQviDQvtCx0YrQtdC60YIgdG91Y2gg0YHRg9GJ0LXRgdGC0LLRg9C10YJcclxuICAgICAgICBpZiAoIWV2ZW50LnRvdWNoZXMgfHwgZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyDQldGB0LvQuCDQvdC10YIsINGC0L4g0L3QuNGH0LXQs9C+INC90LUg0LTQtdC70LDQtdC8XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gdG91Y2guY2xpZW50WDtcclxuICAgICAgICBjb25zdCBlbmRYID0gdG91Y2guY2xpZW50WCAtIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgY29uc29sZS5sb2codG91Y2gpXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGVuZFgpID4gMTAwKSB7IC8vINCj0YHQu9C+0LLQuNC1INC00LvRjyDQvtC/0YDQtdC00LXQu9C10L3QuNGPINGB0LLQsNC50L/QsFxyXG4gICAgICAgICAgICBpZiAoZW5kWCA8IDApIHtcclxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZXIoLTEpOyAvLyDQn9C10YDQtdGF0L7QtCDQuiDQv9GA0LXQtNGL0LTRg9GJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW92ZVNsaWRlcigxKTsgLy8g0J/QtdGA0LXRhdC+0LQg0Log0YHQu9C10LTRg9GO0YnQtdC80YMg0YHQu9Cw0LnQtNGDXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlU3dpcGUpO1xyXG4gICAgc2xpZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVTd2lwZSk7XHJcbiAgICBzbGlkZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlU3dpcGUpO1xyXG5cclxuXHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0LPQtdC90LXRgNCw0YbQuNC4INC60L3QvtC/0L7QulxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVCdXR0b25zKCk6IHZvaWQge1xyXG4gICAgICAgIHNsaWRlckJ1dHRvbi5pbm5lckhUTUwgPSAnJzsgLy8g0J7Rh9C40YnQsNC10Lwg0L/RgNC10LTRi9C00YPRidC40LUg0LrQvdC+0L/QutC4XHJcbiAgICAgICAgc2xpZGVyQmxvY2tzLmZvckVhY2goKGJsb2NrLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgaWYgKGJsb2NrLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS53aWR0aCA9ICczMHB4JztcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSAnMzBweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb24oaW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2xpZGVyQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vdmVTbGlkZXIoLTEpOyAvLyDQn9C10YDQtdGF0L7QtCDQuiDQv9GA0LXQtNGL0LTRg9GJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vdmVTbGlkZXIoMSk7IC8vINCf0LXRgNC10YXQvtC0INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINGB0LvQsNC50LTRg1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQu9Cw0LnQtNC10YDQsFxyXG4gICAgdXBkYXRlU2xpZGVyUG9zaXRpb24oY3VycmVudEluZGV4KTtcclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5jcmVhc2VJbWcoKSB7XHJcbiAgICAgICAgY29uc3QgbGljZW5zZUltYWdlczogTm9kZUxpc3RPZjxIVE1MSW1hZ2VFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWNlbnNlLWltZycpO1xyXG4gICAgICAgIGNvbnN0IHN3aXBlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpcGVyJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2U6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcblxyXG4gICAgICAgIGxpY2Vuc2VJbWFnZXMuZm9yRWFjaCgobGljZW5zZUltZzogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBsaWNlbnNlSW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHN3aXBlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuaW5jcmVhc2VJbWcoKTtcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9