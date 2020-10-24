var toltips = document.querySelectorAll('.tooltipped');
var instances = M.Tooltip.init(toltips);

var slider = tns({
    container: '.proyectos',
    slideBy: 1,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    autoWidth: true,
    items: 3.3,
    nav: false,
    controlsText: ['<span class="material-icons">keyboard_arrow_left</span>', '<span class="material-icons">keyboard_arrow_right</span>'],
    responsive: {
        640: {
            items: 2.2,
        },
        900: {
            items: 3.3,
        }
    }
});