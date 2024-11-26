// Select all buttons with the class voice
var voices = document.querySelectorAll(".voice");

// Variable to store the current audio
var currentAudio = null;

// Function to handle button clicks
function handleClick() {
    // Stop and reset any playing audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    // Always remove party mode initially to ensure no residual effects
    document.body.classList.remove("party-mode");

    // Get the button's text or identifier
    var buttonInnerText = this.innerHTML;
    var audio;

    switch (buttonInnerText) {
        case "Self Intro":
            audio = new Audio("sounds/intro.mp3");
            break;
        case "Greetings poem":
            audio = new Audio("sounds/Chapri_poem.mp3");
            break;
        case "Chapri Song":
            audio = new Audio("sounds/chapri-song.mp3");
            break;
        case "Very good bad boy":
            audio = new Audio("sounds/i-am-a-very-good-bad-boy.mp3");
            break;
        case "Best Song":
            audio = new Audio("sounds/Best_song.mp3");
            break;
        case "Bye":
            audio = new Audio("sounds/bye-bye.mp3");
            break;
    }

    // Play the audio if defined
    if (audio) {
        currentAudio = audio;
        audio.play();

        // Special case for the woofer button
        if (buttonInnerText === "Chapri Song") {
            document.body.classList.add("party-mode");
        }

        // When the audio ends
        audio.onended = function () {
            document.body.classList.remove("party-mode"); // Stop party lights
        };
    }
}

// Add click event listeners to all buttons
for (var i = 0; i < voices.length; i++) {
    voices[i].addEventListener("click", handleClick);
}



