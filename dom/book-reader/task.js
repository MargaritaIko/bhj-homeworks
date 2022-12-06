const textSize = document.querySelectorAll('div.book__control_font-size > .font-size');
textSize[1].dataset.size = 'original';
const controlButtons = document.querySelectorAll('div.book__controls > div');
const contentBox = document.querySelector('div.book__content');

for (let styleButton of controlButtons) {
    styleButton.addEventListener('click', function(event){
        event.preventDefault();
        let keyStyles = event.target.dataset;
        for (let value in keyStyles) {
            if (value ==='textColor') {
                let currentTextcolor = document.querySelector('div.book__control_color > .color_active');
                currentTextcolor.classList.remove('color_active');
                event.target.classList.add('color_active');
                contentBox.style.color = keyStyles[value];
            }
            if (value === 'bgColor') {
                let currentBackGroundColor = document.querySelector('div.book__control_background > .color_active');
                currentBackGroundColor.classList.remove('color_active');
                event.target.classList.add('color_active');
                contentBox.style.backgroundColor = keyStyles[value];
            }
            if (value === 'size') {   
                let currentTextSize = document.querySelector('.font-size_active');
                currentTextSize.classList.remove('font-size_active');
                event.target.classList.add('font-size_active'); 
                switch (keyStyles[value]) {
                    case "big":
                        if (contentBox.classList.contains(`font-size_small`)) {
                            contentBox.classList.remove('font-size_small');
                        }
                        contentBox.classList.add('font-size_big');
                    break;
                    case "small":
                        if (contentBox.classList.contains(`font-size_big`)) {
                            contentBox.classList.remove('font-size_big');
                        }
                        contentBox.classList.add('font-size_small');
                    break;
                    case "original":
                        if (contentBox.classList.contains(`font-size_small`)) {
                            contentBox.classList.remove('font-size_small');
                        }
                        if (contentBox.classList.contains(`font-size_big`)) {
                            contentBox.classList.remove('font-size_big');
                        }
                    break;
                }
            }   
        }
    });
}