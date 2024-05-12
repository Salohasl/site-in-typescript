import './styles.scss';

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    const sliderBlocks = Array.from(sliderWrapper.querySelectorAll('.slider-block')) as HTMLElement[];
    const prevButton = document.querySelector('.prevButton') as HTMLElement;
    const nextButton = document.querySelector('.nextButton') as HTMLElement;
    const sliderButton = document.querySelector('.slider-button') as HTMLDivElement;

    let currentIndex: number = 1; // Индекс активного слайда

    function updateSliderPosition(index: number): void {
        // Убираем класс 'active' у всех слайдов
        sliderBlocks.forEach(block => block.classList.remove('active'));
        
        // Добавляем класс 'active' к нужному слайду
        sliderBlocks[index].classList.add('active');

        // После обновления активности слайдов, генерируем кнопки
        generateButtons();
    }

    function moveSlider(direction: number): void {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
        console.log(currentIndex);
    }


    // Функция для обработки свайпа
    function handleSwipe(event: TouchEvent): void {
        // Проверяем, что объект touch существует
        if (!event.touches || event.touches.length === 0) {
            return; // Если нет, то ничего не делаем
        }

        const touch = event.touches[0];
        const startX = touch.clientX;
        const endX = touch.clientX - event.changedTouches[0].clientX;
        console.log(touch)
        if (Math.abs(endX) > 100) { // Условие для определения свайпа
            if (endX < 0) {
                moveSlider(-1); // Переход к предыдущему слайду
            } else {
                moveSlider(1); // Переход к следующему слайду
            }
        }
    }

    sliderWrapper.addEventListener('touchstart', handleSwipe);
    sliderWrapper.addEventListener('touchmove', handleSwipe);
    sliderWrapper.addEventListener('touchend', handleSwipe);


    // Функция для генерации кнопок
    function generateButtons(): void {
        sliderButton.innerHTML = ''; // Очищаем предыдущие кнопки
        sliderBlocks.forEach((block, index) => {
            const button = document.createElement('button');
            if (block.classList.contains('active')) {
                button.classList.add('active');
                button.style.width = '30px';
                button.style.height = '30px';
            }
            button.addEventListener('click', () => {
                updateSliderPosition(index);
            });
            sliderButton.appendChild(button);
        });
    }

    prevButton.addEventListener('click', function() {
        moveSlider(-1); // Переход к предыдущему слайду
    });

    nextButton.addEventListener('click', function() {
        moveSlider(1); // Переход к следующему слайду
    });

    // Инициализация слайдера
    updateSliderPosition(currentIndex);
});





function increaseImg() {
        const licenseImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.license-img');
        const swiper: HTMLDivElement = document.querySelector('.swiperTwo');
        const close: HTMLDivElement = document.querySelector('.close');

        licenseImages.forEach((licenseImg: HTMLImageElement) => {
            licenseImg.addEventListener('click', () => {
                    swiper.classList.add('show');
            });
        });

        close.addEventListener('click', ()=>{
            swiper.classList.remove('show');
        })
}

increaseImg();



