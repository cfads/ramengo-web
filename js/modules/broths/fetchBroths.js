import { ChangeImageBrothEvent } from "../../events/changeImageBrothEvent.js";
import { ChangeRadioBrothEvent } from "../../events/changeRadioBrothEvent.js";
import { CreateOptionBroth } from "../carousel/createOptionBroth.js";

const listBroths = document.getElementById('listaCaldos')
const radiosSelectCarousel = document.getElementById('radioCarouselBroth')

export async function FetchBroths() {
    listBroths.innerHTML = '';
    radiosSelectCarousel.innerHTML = '';

    const data = await fetch('http://localhost:3000/broths')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error('Error:', error));

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