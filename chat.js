// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');

// Listen for new messages
db.ref('messages').on('child_added', function(snapshot) {
    const message = snapshot.val();
    displayMessage(message);
});

// Send message to Firebase
sendButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message !== '') {
        db.ref('messages').push({
            sender: 'User',
            text: message,
            timestamp: Date.now()
        });
        chatInput.value = '';
    }
});

// Display message in chat window
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message.sender}: ${message.text}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
}
