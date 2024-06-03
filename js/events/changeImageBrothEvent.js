import { DeactivateImages } from "../modules/utils/deactivateImages.js";

export function ChangeImageBrothEvent() {
    const radios = document.querySelectorAll('input[type="radio"][name="caldo"]');
    radios.forEach((radioEvent) => {
        radioEvent.addEventListener("change", function () {
            const imgElement = document.querySelector("#" + radioEvent.id + " + label div:nth-child(1) img");
            if (!imgElement) return

            DeactivateImages(radios);

            if (imgElement.src.indexOf("inactive"))
                imgElement.src = imgElement.src.replace("inactive", "active")

        })
    })
}