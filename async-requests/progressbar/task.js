const formElem = document.getElementById('form');
const progressElem = document.getElementById('progress');

formElem.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const request = new XMLHttpRequest();
    request.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    const file = document.getElementById('file').files;
    const fileName = document.querySelector('.input__wrapper-desc');
    const formData = new FormData();
    formData.append(`${fileName.innerText}`, file[0]);
    request.upload.addEventListener('progress', function (ev){
        progressElem.value = (ev.loaded / ev.total).toFixed(2);
    }, false);
    request.send(formData);
});