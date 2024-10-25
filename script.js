const thoughts = [
    "What if you could only keep the things you use every day?",
    "How would you live your life differently if you had no fear?",
    "What if you could talk to one person from the past?",
    "Imagine if money didn't exist—what would you do?",
    "What if every time you helped someone, you gained a new skill?",
    "If you could change one thing about the world, what would it be?",
    "What if time travel was possible, and you could visit any moment?",
    "What if you could master any skill overnight?",
    "Imagine your life five years from now; where do you see yourself?",
    "What if you could live in any book or movie universe?"
];

document.getElementById('submitButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
    if (message) {
        const randomIndex = Math.floor(Math.random() * thoughts.length);
        const randomThought = thoughts[randomIndex];

        const thoughtDisplay = document.getElementById('randomThought');
        thoughtDisplay.textContent = `Random Thought: ${randomThought}`;
        thoughtDisplay.style.display = 'block'; // Show the thought
        document.getElementById('messageInput').value = ''; // Clear input
    } else {
        alert('Please type a message before submitting.');
    }
});
