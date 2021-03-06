let createError = require('http-errors');
let express = require('express');
const cors = require("cors");
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api.router');

const errorHandler = require('./helpers/errorhandler');

let app = express();

app.use(bodyParser.json());
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(errorHandler);

const port =
    process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 8080;
app.listen(port, function () {
  console.log("Server listening on port " + port);
});
