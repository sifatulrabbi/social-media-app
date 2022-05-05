const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');
const {
    localStrategy,
    serializer,
    deserializer,
} = require('./lib/services/authService');

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();

/* Middlewares */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors({origin: '*'})); // allowing all the origin

/* Initialize passport */
passport.initialize();
passport.use(localStrategy);
passport.serializeUser(serializer);
passport.deserializeUser(deserializer);

/* Routes */
app.use('/api/v1', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);

module.exports = app;
