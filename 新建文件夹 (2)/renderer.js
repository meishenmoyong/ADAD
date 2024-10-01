const ipcRenderer = require('electron').ipcRenderer;

document.getElementById('sendButton').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    ipcRenderer.send('sendMessage', message);
    messageInput.value = '';
});