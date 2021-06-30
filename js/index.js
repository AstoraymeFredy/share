let animado = document.querySelectorAll('.animated')

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop
    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop
        if (alturaAnimado - 500 < scrollTop) {
            animado[i].classList.add('show-above')
        }
    }
}

window.addEventListener('scroll',mostrarScroll)