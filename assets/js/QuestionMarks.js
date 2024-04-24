document.addEventListener("DOMContentLoaded", function() {
    const background = document.getElementById('background');
    const baseWidth = 1920;  // Basis breedte voor 1080p scherm
    const baseHeight = 1080; // Basis hoogte voor 1080p scherm
    const baseNumberOfMarks = 50;  // Standaard aantal vraagtekens voor 1080p
    let debounceTimer;

    function createQuestionMarks() {
        // Verwijder bestaande vraagtekens
        background.innerHTML = '';

        // Bereken de schalingsfactor en het aantal vraagtekens opnieuw
        const scaleFactor = Math.sqrt((window.innerWidth * window.innerHeight) / (baseWidth * baseHeight));

        // Pas het aantal vraagtekens aan op basis van de schalingsfactor
        const numberOfMarks = Math.round(baseNumberOfMarks * scaleFactor);

        // Hou rekening met de grootte van de viewport
        const maxWidth = window.innerWidth - 10;
        const maxHeight = window.innerHeight - 10;

        for (let i = 0; i < numberOfMarks; i++) {
            const mark = document.createElement('div');
            mark.classList.add('question-mark');
            const size = 20 + Math.pow(Math.random(), 10) * 100;
            // Genereert een willekeurig getal tussen 20 en 120
            // Math.random() genereert een getal tussen 0 en 1
            // Math.pow(Math.random(), 10) verheft dit getal tot de tiende macht
            // Dit zorgt ervoor dat lagere getallen waarschijnlijker zijn omdat het kwadraat van getallen tussen 0 en 1 kleiner is dan het originele getal
            // Vermenigvuldig het resultaat met 100 om het bereik van 0-100 te krijgen
            // Voeg 20 toe om het bereik naar 20-120 te verschuiven
            mark.style.fontSize = `${size}px`;
            mark.style.left = `${Math.random() * maxWidth}px`;
            mark.style.top = `${Math.random() * maxHeight}px`;
            mark.style.transform = `rotate(${Math.random() * 360}deg)`;
            mark.style.zIndex = -1000;
            mark.textContent = '?';
            background.appendChild(mark);
        }
    }
    
    // Roep de functie eenmalig aan bij het laden van de pagina
    createQuestionMarks();

    // Voeg een event listener toe aan het window object met debouncing
    window.addEventListener('resize', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(createQuestionMarks, 100);
    });
});
