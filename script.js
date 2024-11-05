function goToSurprise() {
    document.getElementById("welcome-page").classList.add("hidden");
    document.getElementById("surprise-page").classList.remove("hidden");

    // Display message and start falling elements
    showSurprise();
}

function showSurprise() {
    const message = document.getElementById("message");
    message.classList.add("show");
    createFallingElements();
}

function createFallingElements() {
    const container = document.getElementById("falling-container");

    for (let i = 0; i < 30; i++) {
        const element = document.createElement("div");
        element.className = "falling";
        element.innerText = Math.random() > 0.5 ? "⭐" : "💖";
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = (Math.random() * 2 + 3) + "s";
        container.appendChild(element);

        element.addEventListener("animationend", () => {
            element.remove();
        });
    }
}
