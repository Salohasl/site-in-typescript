import './styles.scss';

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement;
    const sliderBlocks = Array.from(sliderWrapper.querySelectorAll('.slider-block')) as HTMLElement[];
    const prevButton = document.querySelector('.prevButton') as HTMLElement;
    const nextButton = document.querySelector('.nextButton') as HTMLElement;
    let currentIndex: number = 1; // Индекс активного слайда
    
    function updateSliderPosition(index: number): void {
        // Убираем класс 'active' у всех слайдов
        sliderBlocks.forEach(block => block.classList.remove('active'));
        
        // Добавляем класс 'active' к нужному слайду
        sliderBlocks[index].classList.add('active');
        

        // Здесь можно добавить логику для перемещения слайдов, если это необходимо
        // Например, изменение CSS свойства 'transform' для каждого слайда
        console.log( sliderBlocks[index])
    }

    function moveSlider(direction: number): void {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
        console.log(currentIndex)
    }

    prevButton.addEventListener('click', function() {
        moveSlider(-1); // Переход к предыдущему слайду
    });

    nextButton.addEventListener('click', function() {
        moveSlider(-1); // Переход к следующему слайду
    });

    updateSliderPosition(currentIndex);
});





function increaseImg() {
        const licenseImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.license-img');
        const swiper: HTMLDivElement = document.querySelector('.swiper');
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



