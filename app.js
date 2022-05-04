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

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

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
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
