{
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            radios.forEach((radio) => {
                if (!radio.checked) {
                    const imgElement = document.querySelector("#" + radio.id + " + label div:nth-child(1) img");

                    if (imgElement) {
                        const src = imgElement.src;
                        if (src.indexOf("inactive") === -1) {
                            imgElement.src = src.replace("active", "inactive");
                        }
                    }
                }
            });



            const element = document.querySelector("#" + radio.id + " + label div:nth-child(1) img");
            if (!element) return
            if (element.src.indexOf("inactive")) element.src = element.src.replace("inactive", "active")



        })
    })
}

{
    const radiosProteina = document.querySelectorAll('input[type="radio"][name="carne"]');
    const listProteinas = document.getElementById("listaProteinas");

    function carouselProteinas(i) {
        if (i == radiosProteina.length - 1) {
            listProteinas.style.transform = `translateX(${-i * 300}px)`
        } else {
            listProteinas.style.transform = `translateX(${-i * 300}px)`
        }
    }

    const radiosSelectProteina = document.querySelectorAll('.radioCarousel input[type="radio"][name="proteinaSelect"]');
    radiosSelectProteina.forEach((radio) => {
        radio.addEventListener("change", function () {
            carouselProteinas(radio.value)
        })
    })
}

{
    const radiosCaldo = document.querySelectorAll('input[type="radio"][name="caldo"]');
    const listCaldos = document.getElementById("listaCaldos");

    function carouselCaldos(i) {
        if (i == radiosCaldo.length - 1) {
            listCaldos.style.transform = `translateX(${-i * 300}px)`
        } else {
            listCaldos.style.transform = `translateX(${-i * 300}px)`
        }
    }

    const radiosSelectCaldo = document.querySelectorAll('.radioCarousel input[type="radio"][name="caldoSelect"]');
    radiosSelectCaldo.forEach((radio) => {
        radio.addEventListener("change", function () {
            carouselCaldos(radio.value)
        })
    })
}

{
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById('pedidoForm');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const carne = document.querySelector('input[name="carne"]:checked');
            const caldo = document.querySelector('input[name="caldo"]:checked');

            if (!carne || !caldo) {
                alert('Selecione tudo');
                return
            }

            const formData = new FormData(form);
            const data = {};

            formData.forEach((value, key) => {
                data[key] = value;
            });

            navigateToOrderProcessed();
            // alert(`Caldo: ${data.caldo}\n Proteína: ${data.carne}`)
        });
    });
}

{
    const orderBtn = document.getElementById("orderNow");
    const secaoAlvo = document.getElementById('pedido');
    orderBtn.addEventListener("click", function () {
        const duracao = 50;
        const distanciaTotal = pedido.offsetTop - window.pageYOffset;
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

{
    btnNewOrder = document.getElementById("btnNewOrder");
    btnNewOrder.addEventListener("click", navigateToHome);
}

const logo = document.getElementById("logo");
const containerHome = document.getElementById("homeOrder");
const containerProcessed = document.getElementById("orderProcessed");

logo.addEventListener("click", navigateToHome)

function navigateToHome() {
    containerHome.style.display = "block";
    containerProcessed.style.display = "none";
    resetHome();
}

function navigateToOrderProcessed() {
    window.scrollTo(0, 0);
    if (logo) logo.src = logo.src.replace("logo", "logo_2")
    containerHome.style.display = "none";
    containerProcessed.style.display = "block";
}


function resetHome() {
    window.scrollTo(0, 0);
    if (logo) logo.src = logo.src.replace("_2", "")

    const form = document.getElementById("pedidoForm");
    if (form) form.reset();

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        if (!radio.checked) {
            const imgElement = document.querySelector("#" + radio.id + " + label div:nth-child(1) img");

            if (imgElement) {
                const src = imgElement.src;
                if (src.indexOf("inactive") === -1) {
                    imgElement.src = src.replace("active", "inactive");
                }
            }
        }
    });

    const radiosSelectCaldo = document.querySelectorAll('.radioCarousel input[type="radio"][name="caldoSelect"]');
    radiosSelectCaldo[0].checked = true;
    const radiosSelectProteina = document.querySelectorAll('.radioCarousel input[type="radio"][name="proteinaSelect"]');
    radiosSelectProteina[0].checked = true;

    const listCaldos = document.getElementById("listaCaldos");
    listCaldos.style.transform = 'translateX(0px)'
    const listProteinas = document.getElementById("listaProteinas");
    listProteinas.style.transform = 'translateX(0px)'

}

resetHome();
