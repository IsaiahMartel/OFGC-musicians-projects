const io = require("socket.io");
const socket = {};


function connect(server) {
    socket.io = io(server, {
        cors: {
            origin: "http://localhost:8100",
            methods: ["GET", "POST"]
        },
        
    });

    socket.io.on("connection",(conexionUsuario) =>{
      console.log("cliente-connection");
      conexionUsuario.on("send",(mensajeEnviado)=>{
        this.socket.io.emit("mensaje",mensajeEnviado)})
      })
     
    
}

module.exports = {
    connect,
    socket,
}