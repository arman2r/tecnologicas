var slider = tns({
    container: '.equipo',
    slideBy: 1,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    items: 3,
    nested: "inner",
    nav: false,
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