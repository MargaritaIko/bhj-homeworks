const pollTitle = document.getElementById('poll__title');
const pollOptions = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        let pollObject = JSON.parse(xhr.responseText).data;
        pollTitle.innerText = pollObject.title;
        for (let option of pollObject.answers) {
            pollOptions.innerHTML +=  
                `<button class="poll__answer" style="margin: 3px">
                    ${option}
                </button>`;
        }
    }
})
pollOptions.addEventListener('click', () => {
    const popUpMsg = document.querySelector('body');
    popUpMsg.insertAdjacentHTML("beforeEnd",
    `<div class="modal_mask">
       <div class="modal">
            <div class="modal_msg">Спасибо, ваш голос засчитан!</div>
            <button class="close_btn">Закрыть</button>
        </div>
    </div>`
    );
    const clsModalButton = document.querySelector('.close_btn');
    clsModalButton.addEventListener('click', (ev) => ev.target.closest('div.modal_mask').remove());
});