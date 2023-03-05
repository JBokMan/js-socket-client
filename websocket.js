const WebSocket = require('ws');

const socket = new WebSocket('ws://127.0.0.1:12345');

socket.addEventListener('open', event => {
    console.log('Socket connection established');
});

socket.addEventListener('message', event => {
    console.log(`Received message: ${event.data}`);
});

socket.addEventListener('error', event => {
    console.error('Socket error:', event.error);
});

socket.addEventListener('close', event => {
    console.log('Socket connection closed');
});