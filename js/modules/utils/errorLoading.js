export function ErrorLoading(message) {
    const p = document.createElement('p');
    p.classList.add('m-plus-rounded-1c-regular', 'text-center');
    p.textContent = message;
    return p;
}
