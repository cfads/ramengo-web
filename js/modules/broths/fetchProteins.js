import { ChangeImageProteinEvent } from "../../events/changeImageProteinEvent.js";
import { ChangeRadioProteinEvent } from "../../events/changeRadioProteinEvent.js";
import { CreateOptionProtein } from "../carousel/createOptionProtein.js";
import { ErrorLoading } from "../utils/errorLoading.js";
import { Loader } from "../utils/loader.js";

const listProteins = document.getElementById('listaProteinas')
const radiosSelectCarousel = document.getElementById('radioCarouselProtein')

export async function FetchProteins() {
    listProteins.innerHTML = '';
    radiosSelectCarousel.innerHTML = '';

    listProteins.appendChild(Loader())
    const loader = document.querySelector("#listaProteinas .loader");

    const data = await fetch('http://localhost:3000/proteins')
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';

            return data
        })
        .catch(error => {
            loader.style.display = 'none';

            listProteins.appendChild(ErrorLoading("Unable to load available proteins."))
        });

    if (!data) return

    data.forEach((protein, index) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'carne';
        input.value = protein.id;
        input.id = protein.name.replace(" ", "");

        const label = document.createElement('label');
        label.setAttribute('for', protein.name.replace(" ", ""));

        const div1 = document.createElement('div');

        const img = document.createElement('img');
        img.src = protein.imageInactive;
        img.alt = `Imagem de ${protein.name}`;

        const h6 = document.createElement('h6');
        h6.classList.add('m-plus-rounded-1c-black', 'text-primaria');
        h6.textContent = protein.name;

        const p = document.createElement('p');
        p.classList.add('m-plus-rounded-1c-regular', 'text-preta');
        p.textContent = protein.description;

        div1.appendChild(img);
        div1.appendChild(h6);
        div1.appendChild(p);

        const div2 = document.createElement('div');

        const span = document.createElement('span');
        span.classList.add('m-plus-rounded-1c-black', 'text-secundaria');
        span.textContent = `US$ ${protein.price}`;

        div2.appendChild(span);

        label.appendChild(div1);
        label.appendChild(div2);

        li.appendChild(input);
        li.appendChild(label);

        listProteins.appendChild(li);

        CreateOptionProtein(index);
        const radioListSelectProtein = document.querySelectorAll('.radioCarousel input[type="radio"][name="proteinaSelect"]');
        if (radioListSelectProtein) radioListSelectProtein[0].checked = true;
    });

    ChangeImageProteinEvent();
    ChangeRadioProteinEvent();
}