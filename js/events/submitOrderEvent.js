import { NavigateToOrderProcessed } from "../modules/navigation/navigateToOrderProcessed.js";

const form = document.getElementById('pedidoForm');

export function SubmitOrderEvent() {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        if (!formData.get('carne') || !formData.get('caldo')) return

        const data = {
            brothId: formData.get('caldo'),
            proteinId: formData.get('carne')
        };

        NavigateToOrderProcessed();
    });
}
