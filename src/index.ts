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
    }

    function moveSlider(direction: number): void {
        currentIndex = (currentIndex + direction + sliderBlocks.length) % sliderBlocks.length;
        updateSliderPosition(currentIndex);
    }

    prevButton.addEventListener('click', function() {
        moveSlider(-1); // Переход к предыдущему слайду
    });

    nextButton.addEventListener('click', function() {
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
        const licenseImages: NodeListOf<HTMLImageElement> = document.querySelectorAll('.license-img');
        const enlargedImages: NodeListOf<HTMLDivElement> = document.querySelectorAll('.enlarged-image');
        
        if (enlargedImages.length === 0) throw new Error("Enlarged image not found");
        
        const enlargedImagesArray = Array.from(enlargedImages);

        licenseImages.forEach((licenseImg: HTMLImageElement, index: number) => {
            const enlargedImage = enlargedImagesArray[index];
           
            licenseImg.addEventListener('click', () => {
                if (!enlargedImage.classList.contains('active')) {
                    enlargedImage.classList.add('active');
                } else {
                    enlargedImage.classList.remove('active');
                }
            });
        });

    } catch (error) {
        console.error("Error in increaseImg function:", error);
    }
}

increaseImg();



