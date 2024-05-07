import './styles.scss';

function slider(){
    const prevButton : HTMLElement | null = document.querySelector('.prevButton');
    const nextButton : HTMLElement | null = document.querySelector('.nextButton');

    prevButton.addEventListener('click', ()=>{
        console.log('1');
    })
}
slider();

// Определение типа для NodeList, который возвращает querySelectorAll
interface NodeList<T> extends NodeListOf<any> {}

// Определение типа для элемента, который может быть получен через querySelector
interface HTMLElementWithClass<T> extends HTMLElement {
    classList: DOMTokenList & { [key: string]: boolean };
}
function increaseImg() {
    try {
        const licenseImages: NodeList<HTMLElementWithClass<HTMLImageElement>> = document.querySelectorAll('.license-img');
        const enlargedImages: NodeList<HTMLElementWithClass<HTMLDivElement>> = document.querySelectorAll('.enlarged-image');
        
        // Проверяем, что коллекция enlargedImages не пуста
        if (enlargedImages.length === 0) throw new Error("Enlarged image not found");
        
        // Преобразуем NodeList в массив для удобства работы
        const enlargedImagesArray = Array.from(enlargedImages);

        licenseImages.forEach((licenseImg, index) => {
            const enlargedImage = enlargedImagesArray[index];
           
            licenseImg.addEventListener('click', () => {
                enlargedImage.classList.add('active');
            });
        });

        enlargedImagesArray.forEach(enlargedImage => {
            enlargedImage.addEventListener('click', ()=>{
                enlargedImage.classList.remove('active');
                console.log('123');
            })
        })
    } catch (error) {
        console.error("Error in increaseImg function:", error);
    }
}

increaseImg();
