var mongoose = require( 'mongoose' );

//Uncomment if you are going to use a local instance or add connection details for your account on MongoLab
var dbURI = 'mongodb://localhost:27017/quotes';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    email: String,
    number: Number,
    password: String
});

var QuoteSchema = new mongoose.Schema({
    topic: String,
    author: String,
    reference: String,
    quote: String
});

var RemoteServerSchema = new mongoose.Schema({
    url: String,
    topics: Array,
    authors: Array
});

var User = mongoose.model('User', UserSchema);
var Quote = mongoose.model('Quote', QuoteSchema);
var RemoteServer = mongoose.model('RemoteServer', RemoteServerSchema);


exports.Quote = Quote;
exports.User = User;
exports.RemoteServer = RemoteServer;