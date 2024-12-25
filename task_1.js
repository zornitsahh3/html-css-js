let isPlaying = true;
const carousel = document.querySelector('.carousel');
const toggleText = document.getElementById('toggleText');

toggleText.addEventListener('click', () => {
    if (isPlaying) {
        carousel.style.animationPlayState = 'paused';
    } else {
        carousel.style.animationPlayState = 'running'; 
    }
    isPlaying = !isPlaying; 
});

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        square.style.opacity = square.style.opacity === "0" ? "1" : "0";
    });
});
