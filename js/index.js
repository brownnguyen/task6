let header = document.querySelector('.header');
window.onscroll = function () {
    let height = window.pageYOffset;
    console.log(height);
    if (height > 100) {
        header.classList.add('stick');
    }
    else{
        header.classList.remove('stick')
    }
}
