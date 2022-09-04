var mysql = require('mysql');
var Razorpay = require('razorpay');
var con = mysql.createConnection({host: "hoteldb.c3teariwy0ra.us-west-2.rds.amazonaws.com",port:"3306",user: "admin",password: "Atul8800",database:"hoteldb"});
var instance = new Razorpay({  key_id: 'rzp_live_1HYbglgcDS6vZg',  key_secret: 'ztg4xjtRb2ZmQ2tkdUjbv3R1',});
const config = {}
config.mysql = mysql,
config.instance = instance,
config.port = 5003,
// config.APP_URL = 'http://localhost:'+config.port+'/',
// config.APP_URL = '54.201.12.52:'+config.port+'/',
// config.APP_URL = 'http://54.185.68.164/',
config.APP_URL = 'http://skydoorhotels.com/',
config.con = con;
module.exports = config;
// mysql -u admin -p -h hoteldb.c3teariwy0ra.us-west-2.rds.amazonaws.com