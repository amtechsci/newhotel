const passport = require('passport');
const localstrategy = require('passport-local').Strategy;
const express = require('express');
const config = require('./config');
var bodyParser = require('body-parser');
var multer = require('multer');
// var upload = multer;
const app = express();
const path = require('path');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
const crypto = require('crypto');
const session = require('express-session');
const cookieParser = require("cookie-parser");
app.use(cookieParser())
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "Atul",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, 'public/uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});
var upload = multer({storage:storage,fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
      cb(null, true);
    } else {
      cb(null, true);
      // cb(null, false);
      // return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }});
var authRoute = require('./app/route/web.js')(app,upload);
app.use(express.static('public'));
config.con.connect();

app.set('views', './app/view');
app.set('view engine', 'ejs');
app.listen(config.port, () => console.info(`App listening on port ${config.port}`))