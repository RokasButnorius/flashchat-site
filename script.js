const chatForm = document.getElementById('chatForm');
const chatOutput = document.getElementById('chatOutput');
const userInput = document.getElementById('userInput');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const messageText = userInput.value.trim();
    if (messageText !== "") {
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.innerHTML = `<b>You:</b> ${messageText}`;
        chatOutput.appendChild(newMessage);
        userInput.value = '';
        chatOutput.scrollTop = chatOutput.scrollHeight; // Auto-scrolls
    }
});

