const radiosSelectCarousel = document.getElementById('radioCarouselProtein')

export function CreateOptionProtein(index) {
    const inputRadioCarousel = document.createElement('input');
    inputRadioCarousel.type = 'radio';
    inputRadioCarousel.id = `proteinaSelect${index}`;
    inputRadioCarousel.name = 'proteinaSelect';
    inputRadioCarousel.value = index;

    const labelRadioCarousel = document.createElement('label');
    labelRadioCarousel.setAttribute('for', `proteinaSelect${index}`);

    radiosSelectCarousel.appendChild(inputRadioCarousel);
    radiosSelectCarousel.appendChild(labelRadioCarousel);
}