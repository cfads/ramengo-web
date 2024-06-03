const orderBtn = document.getElementById("orderNow");
const secaoAlvo = document.getElementById('pedido');

export function OrderNowClickEvent() {
    orderBtn.addEventListener("click", function () {
        const duracao = 50;
        const distanciaTotal = secaoAlvo.offsetTop - window.pageYOffset;
        const incremento = distanciaTotal / duracao;

        let scrollAtual = window.pageYOffset;

        function animacaoScroll() {
            if (scrollAtual < secaoAlvo.offsetTop) {
                scrollAtual += incremento;
                window.scrollTo(0, scrollAtual);
                requestAnimationFrame(animacaoScroll);
            }
        }

        requestAnimationFrame(animacaoScroll);
    })
}