const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config');

const app = express();

// Routers
const indexRouter = require('./routes/index');
const profilesRouter = require('./routes/profiles');
const postsRouter = require('./routes/posts');
const likesRouter = require('./routes/likes');
const commentsRouter = require('./routes/comments');
const sharesRouter = require('./routes/shares');
const mediaRouter = require('./routes/media');

/* Middlewares */
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: '*'})); // allowing all the origin

/* Routes */
app.use('/api/v1', indexRouter);
app.use('/api/v1/profiles', profilesRouter);
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/shares', sharesRouter);
app.use('/api/v1/likes', likesRouter);
app.use('/api/v1/comments', commentsRouter);
app.use('/api/v1/media', mediaRouter);

/* Error handler */
app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    res.status(404).json({success: false, message: 'Bad request'});
  } else {
    next();
  }
});

module.exports.app = app;

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(config.PORT);
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);
module.exports.server = server;

module.exports.startServer = function () {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
};

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  console.debug('Listening on ' + bind);
}
