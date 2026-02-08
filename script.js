let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.classList.remove('hidden');
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.classList.add('hidden');
        header.classList.remove('visible');
    } else if (currentScroll < lastScroll) {
        // Scrolling up
        header.classList.remove('hidden');
        header.classList.add('visible');
    }

    lastScroll = currentScroll;
});