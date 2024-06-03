export function HandleRadioCarousel(i, list) {
    if (!list) return

    if (i == list.childElementCount - 1) {
        list.style.transform = `translateX(${-i * 300}px)`
    } else {
        list.style.transform = `translateX(${-i * 300}px)`
    }
}