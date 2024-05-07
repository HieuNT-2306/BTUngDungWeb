const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const { faker } = require("@faker-js/faker");

const port = 3000;
const rooms = {}; // Object to store room data (room ID -> { users: [], capacity: 2 })

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    const username = faker.internet.userName();

    socket.emit('name', username);

    socket.on("join room", (roomId, message) => {
    if (!rooms[roomId]) {
      rooms[roomId] = { users: [], capacity: 2 };
    }

    const currentRoom = rooms[roomId];

    if (currentRoom.users.length < currentRoom.capacity) {
      currentRoom.users.push(socket.id);
      socket.join(roomId);
      socket.emit("joined room", roomId);
      if (message) {
        socket.to(roomId).emit("receive message", username, message);
      }
    } else {
      socket.emit("room full", "Room is already full!");
    }
    });

  socket.on('disconnect', () => {
    for (const roomId in rooms) {
      const room = rooms[roomId];
      const userIndex = room.users.indexOf(socket.id);
      if (userIndex !== -1) {
        room.users.splice(userIndex, 1);
        if (room.users.length === 0) {
          delete rooms[roomId];
        } else {
          io.to(roomId).emit("user left", username);
        }
      }
    }
  });
});

http.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}/`);
});
