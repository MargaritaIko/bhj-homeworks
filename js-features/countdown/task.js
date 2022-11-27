const addText = function(){
    const timer = document.getElementById("timer");
    if (timer.textContent != 0) {
        timer.textContent -= 1;
    } else {
        clearInterval(intervalID)
        alert ('Вы победили в конкурсе!')
    }
}

let intervalID = setInterval(addText,1000)