const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    
    const response = processMessage(message);
    ws.send(response);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function processMessage(message) {
  
  const apiKey = 'API Key(To be entered)';
  const response = fetch(`https://api.chatgpt.com/v1/converse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ message }),
  })
 .then(response => response.json())
 .then(data => data.response);

  return response;
}
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});