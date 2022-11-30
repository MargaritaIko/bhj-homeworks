const modalElem = document.getElementById('modal_main');
modalElem.classList.add('modal_active');

const modalButtons = document.getElementsByClassName('modal__close')
const closerButtonElem = modalButtons.item(0);
const successButtonElem = modalButtons.item(1);
const successModalCloser = modalButtons.item(2);
const successElem = document.getElementById('modal_success');

const modalCloser = () => modalElem.classList.remove('modal_active');
const modalAccept = () => {
    modalCloser();
    successElem.classList.add('modal_active');
    return false;
}

successButtonElem.onclick = modalAccept;
closerButtonElem.onclick = modalCloser;

const successModalClose = () => { 
    successElem.classList.remove('modal_active');
    return false;
}
const successButtonGreen = document.getElementsByClassName('btn_success').item(0);

successModalCloser.onclick = successModalClose;
successButtonGreen.onclick = successModalClose;