const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");
const audioMap = new Map();

kits.forEach((kit) => {
    // Create button
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(images/${kit}.png)`;
    containerEl.appendChild(btnEl);

    // Create and map audio
    const audioEl = new Audio(`sounds/${kit}.mp3`);
    audioMap.set(kit, { button: btnEl, audio: audioEl });

    // Play sound on click
    btnEl.addEventListener("click", () => {
        playSound(kit);
    });
});

// Global keydown listener (once)
window.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    kits.forEach((kit) => {
        if (key === kit[0]) {
            playSound(kit);
        }
    });
});

// Function to play audio and animate button
function playSound(kit) {
    const { button, audio } = audioMap.get(kit);
    audio.currentTime = 0; // Reset if already playing
    audio.play();

    // Animate button
    button.style.transform = "scale(0.9)";
    button.style.boxShadow = "0 6px 15px rgba(0,0,0,0.4)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";
    }, 150);
}
