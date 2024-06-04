import { ShowOrderPlaced } from "../order/showOrderPlaced.js";

const logo = document.getElementById("logo");
const containerHome = document.getElementById("homeOrder");
const containerProcessed = document.getElementById("orderProcessed");

export function NavigateToOrderProcessed(responseOrder) {
    window.scrollTo(0, 0);
    if (logo) logo.src = logo.src.replace("logo", "logo_2")
    containerHome.style.display = "none";
    containerProcessed.style.display = "block";

    ShowOrderPlaced(responseOrder);
}