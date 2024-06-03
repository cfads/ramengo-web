import { NavigateToHome } from "../modules/navigation/navigateToHome.js";

const btnNewOrder = document.getElementById("btnNewOrder");

export function NewOrderClickEvent() {
    btnNewOrder.addEventListener("click", NavigateToHome);
}