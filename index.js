const net = require('net');

const client = new net.Socket();

client.connect({port: 12345, host: '127.0.0.1'}, () => {
    console.log('Connected to server\n');
    client.write('Hello, server!\n');
});

client.on('data', (data) => {
    console.log(`Received data from server: ${data}`);
});

client.on('error', (err) => {
    console.error('Error: ', err);
});

client.on('close', () => {
    console.log('Connection closed');
    client.destroy()
});