document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById('background');
    const numberOfMarks = 50; // Aanpasbaar naar wens voor minder/meer drukte
    const maxWidth = window.innerWidth - 40;
    const maxHeight = window.innerHeight - 50;

    for (let i = 0; i < numberOfMarks; i++) {
        const mark = document.createElement('div');
        mark.classList.add('question-mark');
        const size = Math.random() * 20 + 10; // Willekeurige grootte tussen 10px en 30px
        mark.style.fontSize = `${size}px`;
        mark.style.left = `${Math.random() * maxWidth}px`;
        mark.style.top = `${Math.random() * maxHeight}px`;
        mark.style.transform = `rotate(${Math.random() * 360}deg)`;
        mark.style.zIndex = -1000;
        mark.textContent = '?';
        background.appendChild(mark);
    }
});
