let animadoText = document.querySelectorAll('.animation-text-1');

let animadoText2 = document.querySelectorAll('.animation-text-2');

let animadoText3 = document.querySelectorAll('.animation-text-3');

function sectionThreeScroll() {
    console.log("entra scroll 3");
    let scrollTopTwo = document.documentElement.scrollTop;

    for (var i=0; i < animadoText.length; i++) {

        let alturaAnimadoText = animadoText[i].offsetTop;

        if((alturaAnimadoText - 1500) < scrollTopTwo) {
            animadoText[i].style.opacity = 1;
            animadoText.classList.add('mostrarIzquierda');
        }
    }

    for (var j=0; j < animadoText2.length; j++) {

        let alturaAnimadoText2 = animadoText2[j].offsetTop;

        if((alturaAnimadoText2 - 1510) < scrollTopTwo) {
            animadoText2[j].style.opacity = 1;
            animadoText2.classList.add('mostrarIzquierda');
        }
    }
}

window.addEventListener('scroll', sectionThreeScroll);