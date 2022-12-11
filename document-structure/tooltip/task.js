const elementHint = document.querySelectorAll('.has-tooltip');

const hintRemoval = () => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
    }
}

elementHint.forEach(element => element.addEventListener('click', (ev) => {
    ev.preventDefault();
    hintRemoval();
    const location = {left, bottom} = ev.target.getBoundingClientRect();
    console.log(location);
    ev.target.insertAdjacentHTML("afterEnd", 
    `<div class="tooltip tooltip_active" style="position:absolute; top:${location.bottom + 10}px; left:${location.left + 5}px">
        ${ev.target.title}
    </div>`);
    setTimeout(hintRemoval, 3000);
}));