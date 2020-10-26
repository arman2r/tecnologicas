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
        300: {
            items: 1,
            autoWidth: false,
        },
        600: {
            items: 2.2,
        },
        900: {
            items: 3.3,
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var toltips = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(toltips);

    document.querySelectorAll('a.link[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});