window.onscroll = function() {

    var position = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById('fauna');
    var elemento2 = document.getElementById('centro');

    elemento1.style.top = position * 0.13 + 'px';

    elemento2.style.top = position * 0.13 + 'px';
}