let currentIndex = 0;
const images = document.querySelectorAll('#carousel img');
const thumbnails = document.querySelectorAll('#thumbnails img');
let interval;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
    currentIndex = index;
}

function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000);
}

function stopCarousel() {
    clearInterval(interval);
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', () => {
        stopCarousel();
        const index = parseInt(thumbnail.getAttribute('data-index'));
        showImage(index);
    });
    thumbnail.addEventListener('mouseout', startCarousel);
});

startCarousel();
