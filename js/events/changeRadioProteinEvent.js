import { HandleRadioCarousel } from "../modules/carousel/handleRadioCarousel.js";

const listProtein = document.getElementById("listaProteinas");

export function ChangeRadioProteinEvent() {
    const radiosSelectProteina = document.querySelectorAll('.radioCarousel input[type="radio"][name="proteinaSelect"]');
    radiosSelectProteina.forEach((radio) => {
        radio.addEventListener("change", function () {
            HandleRadioCarousel(radio.value, listProtein)
        })
    })
}