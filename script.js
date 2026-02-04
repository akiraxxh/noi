document.addEventListener('DOMContentLoaded', () => {
    const mainVisual = document.querySelector('.main-visual');
    const bgContainer = document.querySelector('.bg-container');
    const mainTitle = document.querySelector('.main-title');

    const STRENGTH = 12;

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const percentX = (clientX - centerX) / centerX;
        const percentY = (clientY - centerY) / centerY;

        if (mainVisual) {
            mainVisual.style.transform = `translate(${percentX * STRENGTH}px, ${percentY * STRENGTH}px)`;
        }
        
        if (mainTitle) {
            mainTitle.style.transform = `translate(${percentX * (STRENGTH * 0.4)}px, ${percentY * (STRENGTH * 0.4)}px)`;
        }

        if (bgContainer) {
            bgContainer.style.transform = `translate(${percentX * -5}px, ${percentY * -5}px) scale(1.02)`;
        }
    });
});