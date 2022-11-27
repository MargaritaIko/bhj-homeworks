const holes = document.getElementsByClassName('hole');
const killedMoles = document.getElementById('dead');
const missedShots = document.getElementById('lost');

for (let i = 0; i < holes.length; i++) {
    holes[i].onclick = function () {
        if (holes[i].className.includes('hole_has-mole')) {
            killedMoles.textContent++;

            if (killedMoles.textContent == 10) {
                alert('Победа!');

                killedMoles.textContent = 0;
                missedShots.textContent = 0;
            }
        } else {
            missedShots.textContent++;
            if (missedShots.textContent == 5) {
                alert('Вы проиграли!');
                killedMoles.textContent = 0;
                missedShots.textContent = 0;
            }
        }
    };
}