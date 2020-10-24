// When the user scrolls the page, execute myFunction
window.onscroll = function() { myFunction() };

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

(function() {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('header');

    var checkScroll = function() {

        /*
         ** Find the direction of scroll
         ** 0 - initial, 1 - up, 2 - down
         */

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        } else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function(direction, curScroll) {
        if (direction === 2 && curScroll > 52) {

            //replace 52 with the height of your header in px

            header.classList.add('hide-nav');
            header.classList.remove('show-menu')
            prevDirection = direction;
        } else if (direction === 1) {
            header.classList.remove('hide-nav');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();

var btn = document.getElementById('menu-toggle');


btn.addEventListener('click', function(e) {
    e.preventDefault();
    header.classList.toggle('show-menu')
})