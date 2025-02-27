    const flickerTexts = document.querySelectorAll('.flickerText');
    const newTexts = document.querySelectorAll('.newText');

    document.body.addEventListener('click', function() {
        // Show the original text and start flickering
        flickerTexts.forEach(text => {
            text.classList.add('showText'); // Reveal text on click
            text.classList.add('flickering'); // Start flickering
        });

        setTimeout(() => {
            // Fade out the original text
            flickerTexts.forEach(text => {
                text.classList.remove('showText'); // Hide original text
            });

            // Show the new Korean text smoothly
            newTexts.forEach(text => {
                text.classList.add('showText'); // Reveal the new text
            });
        }, 3000); // After 3 seconds, switch to the Korean text
    });
