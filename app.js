const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const {localStrategy, serializer, deserializer} = require('./auth');
const bodyParser = require('body-parser');

const app = express();

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
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

/* Initialize passport */
passport.initialize();
passport.use(localStrategy);
passport.serializeUser(serializer);
passport.deserializeUser(deserializer);

/* Routes */
app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
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

module.exports = app;
