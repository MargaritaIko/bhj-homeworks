const textblur = document.querySelectorAll('span.rotator > .rotator__case');
let textColor = textblur[0].getAttribute('data-color'); 
textblur[0].setAttribute('style', "color: " + textColor);
let flag = true;

function textblurToggle() {
    if (flag) {
        flag = false;
        let element;
        const currentTextBlock = document.querySelector('.rotator__case_active');
        let nextTextBlock = currentTextBlock.nextElementSibling;
        nextTextBlock ? element = nextTextBlock : element = textblur[0];
        timeOut = element.getAttribute('data-speed');    
        currentTextBlock.classList.remove('rotator__case_active');
        textColor = element.getAttribute('data-color');
        element.classList.add('rotator__case_active');
        element.setAttribute('style', "color: " + textColor);
        const delayResponse = setTimeout(() => {
           flag = true;
        }, timeOut);
    }
}

const timer = setInterval(() => textblurToggle(), 1);