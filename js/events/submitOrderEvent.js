import { OrderService } from "../api/orderService.js";
import { NavigateToOrderProcessed } from "../modules/navigation/navigateToOrderProcessed.js";
import { Snackbar } from "../modules/utils/snackbar.js";

const form = document.getElementById('pedidoForm');

export function SubmitOrderEvent() {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        if (!formData.get('carne') || !formData.get('caldo')) {
            Snackbar()
            return
        }

        const data = {
            brothId: formData.get('caldo'),
            proteinId: formData.get('carne')
        };

        const responseOrder = await OrderService().postOrder(data)

        NavigateToOrderProcessed(responseOrder);
    });
}
