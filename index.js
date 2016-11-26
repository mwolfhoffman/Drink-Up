let express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  routes = require('./server-assets/routes/index'),
  handlers = require('./utils/handlers'),
  server = express(),
  port = process.env.PORT || 8080;

  

// var app = require('express')();
var http = require('http').Server(server);


//Registers Middleware for server
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use('/', express.static(`${__dirname}/app`));
server.use('/api', cors(handlers.corsOptions), routes.router)
server.use('/', handlers.defaultErrorHandler)


server.get('/', function(req, res){
  res.sendfile('index.html');
});




http.listen(port, function () {
  console.log(`Beer app is rockin on port: ${port}`);
}) 