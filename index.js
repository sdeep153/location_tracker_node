const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('A user is connected', socket.id);

    socket.on('send-location', (data) => {
        io.emit('receive-location', {
            id : socket.id,
            ...data
        })
    })

    socket.on('disconnect', () => {
        io.emit('user-disconnected', socket.id);
    })
})

app.get('/', (req, res) => {
    res.render('index');
})

server.listen(PORT, () => {
    console.log('Listening on port' , PORT);
})