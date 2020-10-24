document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);

    var select = document.querySelectorAll('select');
    var instances = M.FormSelect.init(select);
});