const thoughts = [
    "YOU ARE USELESS.....!",
    "You are a WASTE.....!",
    "WHO THE HELL ARE YOU....!"
];

document.getElementById('submitButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    if (message) {
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        const randomThought = thoughts[randomIndex];

        const thoughtDisplay = document.getElementById('randomThought');
        thoughtDisplay.textContent = `Reply: ${randomThought}`;
        thoughtDisplay.style.display = 'block'; // Show the thought
        document.getElementById('messageInput').value = ''; // Clear input
    } else {
        alert('Please type a message before submitting.');
    }
});
