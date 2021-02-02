const http = require('http');
const app = require('./app');

const startServer = (app) => {
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;

  server.listen(port);
  server.on('listening', ()=> {
    console.log(`server listening on ${port}`);
  })
}

startServer(app);