// JS/chat.js
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');

chatIcon.addEventListener('click', () => {
  chatWindow.style.display = 'block';
});

closeChat.addEventListener('click', () => {
  chatWindow.style.display = 'none';
});
