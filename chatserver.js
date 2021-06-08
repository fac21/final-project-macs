const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const port = 4001;
const index = require("./routes");
//const index = express.Router();
const moment = require("moment");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
app.use(index);
app.use(cors({ origin: true, credentials: true }));

const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

let users = [];
io.on("connection", (socket) => {
  socket.on("joinRoom", (roomID) => {
    console.log("room joined");
    socket.join(roomID);
    users.push({
      id: socket.id,
      // userName: userName,
      connectionTime: new moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    socket.on("sendMsg", (msgTo) => {
      console.log("recieve message", msgTo);
      const minutes = new Date().getMinutes();
      io.to(roomID).emit(
        "message",
        JSON.stringify({
          id: socket.id,
          //userName: users.find((e) => e.id == msgTo.id).userName,
          msg: msgTo.msg,
          time:
            new Date().getHours() +
            ":" +
            (minutes < 10 ? "0" + minutes : minutes),
        })
      );
    });
    socket.on("leaveRoom", () => {
      socket.offAny("sendMsg");
      socket.leave(roomID);
    });
  });

  socket.once("disconnect", () => {
    let index = -1;
    if (users.length >= 0) {
      index = users.findIndex((e) => e.id == socket.id);
    }
    if (index >= 0) users.splice(index, 1);
    io.emit("users", JSON.stringify(users));
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
