const blocks = document.querySelectorAll('.reveal');
const viewPort = window.innerHeight;

window.addEventListener('scroll', function() {
    for (let item of blocks) {
        const ads = {tob, bottom} = item.getBoundingClientRect();
        if ((viewPort - ads.top >= 0) && (ads.bottom >= 0)) { 
            
            item.classList.add('reveal_active');
        }
        else {
            item.classList.remove('reveal_active');
        }
    }
});