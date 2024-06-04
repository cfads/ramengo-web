import { OrderService } from "../../api/orderService.js";
import { ChangeImageBrothEvent } from "../../events/changeImageBrothEvent.js";
import { ChangeRadioBrothEvent } from "../../events/changeRadioBrothEvent.js";
import { CreateOptionBroth } from "../carousel/createOptionBroth.js";
import { ErrorLoading } from "../utils/errorLoading.js";
import { Loader } from "../utils/loader.js";

const listBroths = document.getElementById('listaCaldos')
const radiosSelectCarousel = document.getElementById('radioCarouselBroth')

export async function FetchBroths() {
    listBroths.innerHTML = "";
    radiosSelectCarousel.innerHTML = '';

    listBroths.appendChild(Loader())
    const loader = document.querySelector("#listaCaldos .loader");

    const data = await OrderService().getBroths()
        .then(data => {
            loader.style.display = 'none';

            return data
        })
        .catch(error => {
            loader.style.display = 'none';

            listBroths.appendChild(ErrorLoading("Unable to load available broths."))
        });

    if (!data) return

    data.forEach((broth, index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'caldo';
        input.value = broth.id;
        input.id = broth.name.replace(" ", "");

        const label = document.createElement('label');
        label.setAttribute('for', broth.name.replace(" ", ""));

        const div1 = document.createElement('div');

        const img = document.createElement('img');
        img.src = broth.imageInactive;
        img.alt = `Imagem de ${broth.name}`;

        const h6 = document.createElement('h6');
        h6.classList.add('m-plus-rounded-1c-black', 'text-primaria');
        h6.textContent = broth.name;

        const p = document.createElement('p');
        p.classList.add('m-plus-rounded-1c-regular', 'text-preta');
        p.textContent = broth.description;

        div1.appendChild(img);
        div1.appendChild(h6);
        div1.appendChild(p);

        const div2 = document.createElement('div');

        const span = document.createElement('span');
        span.classList.add('m-plus-rounded-1c-black', 'text-secundaria');
        span.textContent = `US$ ${broth.price}`;

        div2.appendChild(span);

        label.appendChild(div1);
        label.appendChild(div2);

        li.appendChild(input);
        li.appendChild(label);

        listBroths.appendChild(li);

        CreateOptionBroth(index);
        const radioListSelectBroth = document.querySelectorAll('.radioCarousel input[type="radio"][name="caldoSelect"]');
        radioListSelectBroth[0].checked = true;
    });

    ChangeImageBrothEvent();
    ChangeRadioBrothEvent();
}