const imageElems = document.querySelectorAll(".slider__item");
const sliderCount = imageElems.length;
const dotElems = document.querySelectorAll(".slider__dot_active");
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


leftButton.addEventListener('click', slideOnClick); 
rightButton.addEventListener('click', slideOnClick);
function slideOnClick() {
    let step = 1;
    if (this === leftButton) {
        step = -1;
    }
    for (let i = 0; i < sliderCount; i++) {
        if (imageElems.item(i).classList.contains('slider__item_active') && dotElems.item(i).classList.contains('slider__dot_active')) {
            imageElems.item(i).classList.toggle('slider__item_active');
            dotElems.item(i).classList.toggle('slider__dot_active');
            let newIdx = i + step;
            if (newIdx < 0) {
                newIdx = sliderCount - 1;
            } 
            else if (newIdx === sliderCount) {
                newIdx = 0;
            }
            imageElems.item(newIdx).classList.toggle('slider__item_active');
            dotElems.item(newIdx).classList.toggle('slider__dot_active');
            return;
        }
    }
}
const countOfDots = dotElems.length;
for (let k = 0; k < countOfDots; k++) {
    dotElems.item(k).addEventListener('click', function() {
        let activeDot = document.querySelector(".slider__dot_active");
        let currentImage = document.querySelector(".slider__item_active");
        activeDot.classList.toggle("slider__dot_active");
        currentImage.classList.toggle("slider__item_active");
        dotElems.item(k).classList.toggle("slider__dot_active");
        imageElems.item(k).classList.toggle("slider__item_active");
        return;
    })
}