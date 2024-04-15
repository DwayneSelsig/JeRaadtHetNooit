document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.querySelector('input[name="raden"]');
    var specialeWoorden = ['geheim', 'verrassing', 'raadsel'].map(woord => woord.toLowerCase());
    var messageElement = document.getElementById('message');

    inputField.focus();

    inputField.addEventListener('click', function() {
        this.select();
    });

    document.getElementById('guessForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Voorkom het posten van het formulier
        var input = inputField.value.trim(); // Verwijder spaties aan begin en eind van de tekst
        if (input === "") {
            return;
        }
        
        var message;
        if (specialeWoorden.includes(input.toLowerCase())) {
            message = 'Oei, bijna... ' + input + ' is niet juist. Probeer het opnieuw!';
        } else {
            message = 'Helaas! ' + input + ' was niet juist. Probeer het opnieuw!';
        }

        fadeOutInMessage(message);
    });

    function fadeOutInMessage(newMessage) {
        messageElement.style.opacity = 0; // Begin met een fade-out
        messageElement.addEventListener('transitionend', function handler() {
            messageElement.removeEventListener('transitionend', handler); // Zorg ervoor dat dit event maar één keer afgehandeld wordt
            messageElement.textContent = newMessage;
            messageElement.style.opacity = 1; // Start de fade-in
        });
    }

    var currentYear = new Date().getFullYear(); // Haal het huidige jaar op
    document.getElementById('current-year').textContent = currentYear; // Zet het huidige jaar in de span
});
