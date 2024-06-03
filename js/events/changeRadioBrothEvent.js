import { HandleRadioCarousel } from "../modules/carousel/handleRadioCarousel.js";

const listBroth = document.getElementById("listaCaldos");

export function ChangeRadioBrothEvent() {
    const radiosSelectCaldo = document.querySelectorAll('.radioCarousel input[type="radio"][name="caldoSelect"]');
    radiosSelectCaldo.forEach((radio) => {
        radio.addEventListener("change", function () {
            HandleRadioCarousel(radio.value, listBroth)
        })
    })
}