import { HandleResetHome } from "./handleResetHome.js";

const containerHome = document.getElementById("homeOrder");
const containerProcessed = document.getElementById("orderProcessed");


export function NavigateToHome() {
    containerHome.style.display = "block";
    containerProcessed.style.display = "none";
    HandleResetHome();
}