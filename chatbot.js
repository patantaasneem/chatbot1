document.addEventListener('DOMContentLoaded', (event) => {
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');

    // Function to add messages to the chat box
    function addMessage(user, message) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message ' + user;
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    // Basic response logic for the chatbot
    function getBotResponse(input) {
        const responses = {
            "hello": "Hi there!",
            "hi": "Hello!",
            "how are you": "I'm a bot, so I'm always good.",
            "what is your name": "I'm a simple chatbot.",
            "bye": "Goodbye!"
        };

        const lowerInput = input.toLowerCase();
        return responses[lowerInput] || "Sorry, I don't understand that.";
    }

    // Event listener for user input
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && chatInput.value.trim() !== "") {
            const userInput = chatInput.value.trim();
            addMessage('user', userInput);
            chatInput.value = '';

            const botResponse = getBotResponse(userInput);
            setTimeout(() => {
                addMessage('bot', botResponse);
            }, 500);
        }
    });
});