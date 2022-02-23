const express = require("express");
const ChatController = require("../controller/chat-controller")

function chatRoutes(app) {
    const router = express.Router();
    app.use("/", router)
    const chatController = new ChatController();

    router.post("/",
       chatController.addPost
    )
}

module.exports = chatRoutes;
