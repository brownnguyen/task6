let header = document.querySelector('.header');
window.onscroll = function () {
    let height = window.pageYOffset;
    if (height > 100) {
        header.classList.add('stick');
    }
    else {
        header.classList.remove('stick')
    }
    if (window.pageYOffset > window.innerHeight / 2) {
        document.querySelector('#backTop').style.opacity = 0.8;
        document.querySelector('#backTop').style.visibility = "visible"
    }
    else {
        document.querySelector('#backTop').style.opacity = 0;
        document.querySelector('#backTop').style.visibility = "hidden"
    }
}
let menu = document.querySelector('.menu');
let drawer = document.querySelector('.drawer');
let btnSpan = document.querySelector('.btn-span');
let line = document.querySelector('.menu-header .menu-span');
let layerDrawer = document.querySelector('.layer-drawer');
menu.onclick = function () {
    drawer.classList.add('expand');
    layerDrawer.classList.add("expand");
}
btnSpan.onclick = function () {
    drawer.classList.remove('expand')
    layerDrawer.classList.remove("expand");
}
line.onclick = function () {
    drawer.classList.add('expand')
    layerDrawer.classList.add("expand");
}
layerDrawer.onclick = function () {
    drawer.classList.remove("expand");
    layerDrawer.classList.remove("expand");
}


const body = document.body,
    scrollWrap = document.getElementsByClassName("main-body")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    // scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function () {
    var elements = $(".block-white, .block-black").toArray();
    console.log(elements)
    $(window).scroll(function () {
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - 600) {
                $(item).addClass("rev");
            }
        });
    });
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - 600) {
            $(item).addClass("rev");
        }
    });
});

$('#backTop').click(function (event) {
    $('html,body').animate({
        scrollTop: 0
    }, 1000, 'swing');
    return false;
});
