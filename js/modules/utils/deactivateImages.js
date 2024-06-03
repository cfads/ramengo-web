export function DeactivateImages(listRadios) {
    listRadios.forEach((radio) => {
        const img = document.querySelector("#" + radio.id + " + label div:nth-child(1) img");
        const src = img.src;

        if (!img) return

        if (!radio.checked)
            if (src.indexOf("inactive") === -1) {
                img.src = src.replace("active", "inactive")
                return
            };
    });
}