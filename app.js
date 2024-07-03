let convert_btn = document.querySelector("#convert-to-text-btn");
let stop_btn = document.querySelector("#stop-btn");
let clear_btn = document.querySelector("#clear-btn");

convert_btn.onclick = () => {
    let entered_text = document.querySelector(".text").value;
    let repeat_count = document.querySelector("#repeat").value;
    let speech_rate = document.querySelector("#rate").value; 
    let speech = new SpeechSynthesisUtterance();

    if (entered_text === "") {
        alert("Please enter a text to continue");
    } else {
        speech.lang = "en-US";
        speech.text = entered_text;
        speech.voice = window.speechSynthesis.getVoices()[1];
        speech.rate = parseFloat(speech_rate);
        speech.volume = 1;
        speech.pitch = 5;

        // Repeat the speech synthesis the specified number of times
        for (let i = 0; i < repeat_count; i++) {
            speechSynthesis.speak(speech);
        }
    }
};

stop_btn.onclick = () => {
    window.speechSynthesis.cancel();
};

clear_btn.onclick = () => {
    document.querySelector(".text").value = "";
};

// Communication Buttons
const communicationButtons = document.querySelectorAll('.communication-btn');
communicationButtons.forEach(button => {
    button.onclick = () => {
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = button.innerText;
        speech.voice = window.speechSynthesis.getVoices()[1];
        speech.rate = 1;
        speech.volume = 1;
        speech.pitch = 5;
        speechSynthesis.speak(speech);
    };
});
