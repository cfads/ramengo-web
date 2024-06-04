export function ShowOrderPlaced(responseOrder) {
    const containerOrder = document.getElementById('wrapperOrderPlaced')
    containerOrder.innerHTML = '';

    const imgOrder = document.createElement('img');
    imgOrder.src = responseOrder.image;
    imgOrder.alt = responseOrder.description;

    const title = document.createElement('h3');
    title.classList.add('m-plus-rounded-1c-black', 'text-white');
    title.style.marginTop = '-4.5rem';
    title.textContent = 'Your Order:';

    const orderDescription = document.createElement('h2');
    orderDescription.classList.add('m-plus-rounded-1c-black', 'text-terciaria');
    orderDescription.textContent = responseOrder.description;

    containerOrder.appendChild(imgOrder);
    containerOrder.appendChild(title);
    containerOrder.appendChild(orderDescription);
}