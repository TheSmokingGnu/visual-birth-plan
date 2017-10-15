// Require the framework and instantiate it
const fastify = require('fastify')()
var serveStatic = require('serve-static');

// Serve the vue files.
fastify.use(serveStatic(__dirname + "/dist"));

var port = +process.env.PORT || 3000;

// Run the server!
fastify.listen(port, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
