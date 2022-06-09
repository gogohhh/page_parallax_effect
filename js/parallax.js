const parallax = document.getElementById('backImg');

function Scroll() {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY(-50%)';
}