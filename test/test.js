var assert = require("assert");
var db = require('../model/db.js');

describe('User', function(){
    describe('#save()', function(){
        it('should save without error', function(done){
            var user = new db.User({firstName: 'Alex', lastName: 'Lund', userName: 'adlund', email: 'adlund@hotmail.com', phone: 22585912, password: 'ja'});
            user.save(done);
        })
    })
});

describe('Quote', function(){
    describe('#save()', function(){
        it('should save without error', function(done){
            var user = new db.Quote({topic: 'funny', author: 'Alexander', reference: 'Alexander', quote: 'Bedste Quote!'});
            user.save(done);
        })
    })
});