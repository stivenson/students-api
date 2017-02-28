var config = require('./config')
var hapi = require('hapi')

// process.env.NODE_ENV = 'pro'; optional use or npm startproduction

var server = new hapi.Server()
server.connection({ 
  host: config.server.host,
  port: config.server.port,
  routes: config.routes
})

var routes = require('./students_routes')
routes.init(server, config)

server.start(function () {
  console.log('Server now run for: ', server.info.uri);
});

if (module.parent) {
  console.log("Call module")
  module.exports = server
}