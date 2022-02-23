const socket = require("./../socket");

class chatController{
    addPost = (req, res) => {
        console.log(req.body)
        socket.socket.io.emit("mensaje", req.body);
        res.status(201).json({"message":"comentario enviado"})
    }
}

module.exports = chatController;