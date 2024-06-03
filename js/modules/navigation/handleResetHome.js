import { HandleRadioCarousel } from "../carousel/handleRadioCarousel.js";
import { DeactivateImages } from "../utils/deactivateImages.js";

const logo = document.getElementById("logo");
const form = document.getElementById("pedidoForm");
const radioListDeactivate = document.querySelectorAll('.listOrder > li > input[type="radio"]');
const radioListSelectBroth = document.querySelectorAll('.radioCarousel input[type="radio"][name="caldoSelect"]');
const radioListSelectProtein = document.querySelectorAll('.radioCarousel input[type="radio"][name="proteinaSelect"]');
const carouselListBroth = document.getElementById("listaCaldos");
const carouselListProtein = document.getElementById("listaProteinas");

export function HandleResetHome() {
    window.scrollTo(0, 0);
    if (logo) logo.src = logo.src.replace("_2", "")
    if (form) form.reset();
    if (radioListSelectBroth) radioListSelectBroth[0].checked = true;
    if (radioListSelectProtein) radioListSelectProtein[0].checked = true;
    if (radioListDeactivate) DeactivateImages(radioListDeactivate);
    if (carouselListBroth) HandleRadioCarousel(0, carouselListBroth);
    if (carouselListProtein) HandleRadioCarousel(0, carouselListProtein);
}