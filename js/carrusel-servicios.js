var slider = tns({
    container: '.carrusel-servicios',
    slideBy: 1,
    mouseDrag: true,
    swipeAngle: false,
    edgePadding: 20,
    nav: false,
    loop: true,
    controlsText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
    responsive: {
        300: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1024: {
            items: 3,
        }
    }
});