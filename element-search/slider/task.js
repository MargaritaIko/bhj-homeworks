const imageElems = document.querySelectorAll(".slider__item");
const sliderCount = imageElems.length;
const dotElems = document.querySelectorAll(".slider__dot");
const leftButton = document.querySelector(".slider__arrow_prev");
const rightButton = document.querySelector(".slider__arrow_next");

let activeSlideIndex = 0;

function toggleActiveSlide(activeSlideIndex) {
    let activeSlide = document.querySelector(".slider__item_active");
    let activeDot = document.querySelector(".slider__dot_active");
    activeSlide.classList.remove('slider__item_active');
    activeDot.classList.remove('slider__dot_active');
    imageElems.item(activeSlideIndex).classList.add('slider__item_active');
    dotElems.item(activeSlideIndex).classList.add('slider__dot_active');   
}

leftButton.addEventListener('click', function(){
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = sliderCount - 1;
    }
    toggleActiveSlide(activeSlideIndex);
    return activeSlideIndex;
}); 

rightButton.addEventListener('click', function(){
    activeSlideIndex++;
    if (activeSlideIndex === sliderCount) {
        activeSlideIndex = 0;
    }
    toggleActiveSlide(activeSlideIndex);
    return activeSlideIndex;
});
