export const startHorizontalScroll = (container, scrollLeftButton, scrollRightButton) => {
    scrollLeftButton.style.visibility = 'hidden';
    container.addEventListener('scroll', () => updateButtonState(container, scrollLeftButton, scrollRightButton));
    scrollLeftButton.addEventListener('click', () => scrollContainer(container, -1));
    scrollRightButton.addEventListener('click', () => scrollContainer(container, 1));
}

export const updateButtonState = (container, scrollLeftButton, scrollRightButton) => {
    scrollLeftButton.style.visibility = container.scrollLeft === 0 ? 'hidden' : 'visible';
    scrollRightButton.style.visibility = container.scrollLeft >= (container.scrollWidth - container.clientWidth) ? 'hidden' : 'visible';
};

export const scrollContainer = (container, direction) => {
    container.scrollBy({ left: direction * (container.clientWidth / 2), behavior: 'smooth' });
};