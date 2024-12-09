const express = require("express");
const bodyParser = require("body-parser");
const { server } = require("socket.io");

const io = new server();
const app = express();

app.use(bodyParser.json());

io.on("connection", (socket) => {});

app.listen(8000, () => console.log("Http server running at PORRT 8000"));
io.listen(8001);
