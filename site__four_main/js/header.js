$(document).scroll(function () {
    const header = pageYOffset;
    const header__menu = document.querySelector('.header__menu');
    if (pageYOffset >= document.querySelector('.block__one').offsetHeight && header__menu.classList.contains('_active') == false) {
        header__menu.classList.toggle('_active');
    } else if (pageYOffset < document.querySelector('.block__one').offsetHeight && header__menu.classList.contains('_active') == true) {
        header__menu.classList.remove('_active');
    }
});


const Links = document.querySelectorAll('.link[data-goto]');
if (Links.length > 0) {
    Links.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header__menu').offsetHeight;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
        }
    }
}

const read__less = document.querySelectorAll('.read__less');
const read__more = document.querySelectorAll('.read__more');
const content = document.querySelectorAll('.slide__content');
$(read__less).click(function () {
    for (count = 0; content.length > count; count++) {
        content[count].classList.toggle('_false');
        read__more[count].classList.remove('_false');
        read__more[count].classList.toggle('_true');
    };
});

$(read__more).click(function () {
    for (count = 0; content.length > count; count++) {
        content[count].classList.remove('_false');
        read__more[count].classList.toggle('_false');
        read__more[count].classList.remove('_true');
    };
});

if ($(window).width() <= 865) {
    for (count = 0; content.length > count; count++) {
        content[count].classList.toggle('_false');
        read__more[count].classList.toggle('_true');
    };
}

const show__less = document.querySelectorAll('.show__less');
const show__more = document.querySelectorAll('.show__more');
const content__two = document.querySelectorAll('.show__text a');
$(show__less).click(function () {
    for (count = 0; content__two.length > count; count++) {
        content__two[count].classList.remove('_show');
        show__more[count].classList.remove('_false');
        show__less[count].classList.remove('_true');
    };
});

$(show__more).click(function () {
    for (count = 0; content__two.length > count; count++) {
        content__two[count].classList.toggle('_show');
        show__more[count].classList.toggle('_false');
        show__less[count].classList.toggle('_true');
    };
});


