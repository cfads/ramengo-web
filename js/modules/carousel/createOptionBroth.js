const radiosSelectCarousel = document.getElementById('radioCarouselBroth')

export function CreateOptionBroth(index) {
    const inputRadioCarousel = document.createElement('input');
    inputRadioCarousel.type = 'radio';
    inputRadioCarousel.id = `caldoSelect${index}`;
    inputRadioCarousel.name = 'caldoSelect';
    inputRadioCarousel.value = index;

    const labelRadioCarousel = document.createElement('label');
    labelRadioCarousel.setAttribute('for', `caldoSelect${index}`);

    radiosSelectCarousel.appendChild(inputRadioCarousel);
    radiosSelectCarousel.appendChild(labelRadioCarousel);
}