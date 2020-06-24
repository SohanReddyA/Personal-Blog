import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const express = require('express');
const app = express();
const http = require('http');

const port = process.env.PORT || 8000;
const server = http.createServer(app);

server.listen(port);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

ReactDOM.render(<App />, document.getElementById('root'));
