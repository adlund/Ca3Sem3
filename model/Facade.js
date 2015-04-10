var db = require('../model/db.js');

var topics = [
    "Best",
    "Cool",
    "Funny"
]

function _getAllUsers(){
    db.User.find(function (err, users){
        if(err) {
            return console.log(err);
        }
        else {
            console.log(users.toString());
            return users;
        }
    });
}

function _getUser(id){
   return db.User.findById(id, function(err, user){
       if(err) {
           return console.log(err);
       }
        else {
           console.log(user);
           return user;
       }
    });
}

function _createUser(UserJson){
var User = new db.User({firstName: UserJson.firstName, lastName: UserJson.lastName, userName: UserJson.userName, email: UserJson.email, phone: UserJson.phone, password: UserJson.password});
    User.save(function(err){
       if(err) {
           return console.log(err);
       }
       else{
               console.log(User);
           }
    });
}

function _getAllQuotesByTopic(Topic){
    db.Quote.find({topic: Topic}, Quotes);
    if(err){
        console.log(err);
    }
    else{
        return Quotes;
    }
}

function _getRandomQuote(Topic){
    db.Quote.find({topic: Topic}, function(err, Quotes){
        console.log(Quotes);
        if(err){
            console.log(err);
        }
        else{
            var ranNum = Math.floor(Math.random() * Quotes.length);
            quote = Quotes[ranNum];
            return quote;
        }
    });
    }



function _createQuote(topic, author, reference, quote){
    var Quote = new db.Quote({topic: topic, author: author, reference: reference, quote: quote});
    Quote.save(function(err){
        if(err) {
            return console.log(err);
        }
        else{
            console.log(Quote);
        }
});
}

function _deleteQuote(id){
    db.Quote.findByIdAndRemove(id, callback);
}

function _editQuote(id, topic, author, reference, quote){
    db.Quote.findByIdAndUpdate(id,{topic: topic, author: author, reference: reference, quote: quote}, callback);
}

module.exports = {
    getAllUsers : _getAllUsers,
    getUser : _getUser,
    createUser : _createUser,
    getAllQuotesByTopic : _getAllQuotesByTopic,
    getRandomQuote : _getRandomQuote,
    createQuote : _createQuote,
    deleteQuote : _deleteQuote,
    editQuote : _editQuote
}