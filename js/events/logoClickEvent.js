import { NavigateToHome } from "../modules/navigation/navigateToHome.js";

const logo = document.getElementById("logo");

export function LogoClickEvent() {
    logo.addEventListener("click", NavigateToHome)
}