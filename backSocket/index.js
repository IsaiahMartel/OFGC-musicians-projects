let app = require('express')();
let server = require('http').Server(app);
const socket = require("./socket");

const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const chatController = require('./controller/chat-controller');
const chatRoutes = require('./routes/chat-routes');

app.use(cors());

socket.connect(server);

app.use(morgan('dev'));

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

chatRoutes(app);

var port = process.env.PORT || 3001;

server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});