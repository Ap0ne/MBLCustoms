// JS/chat.js
const chatIcon = document.getElementById('chat-icon');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');

chatIcon.addEventListener('click', () => {
  chatWindow.classList.toggle('hidden');
});

closeChat.addEventListener('click', () => {
  chatWindow.classList.add('hidden');
});
