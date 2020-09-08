const express = require('express')
const app = express()
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
  setInterval(() => {
    let data = {
      demand: 120000 + Math.floor(Math.random() * (10000 + 1)),
      supply: 100000 + Math.floor(Math.random() * (10000 + 1))
    }
    socket.broadcast.emit('newData', JSON.stringify(data))
  }, 5000)
})

http.listen("3000", function() {
  console.log("listen to 3000")
})