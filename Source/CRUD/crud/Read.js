/**
 * Created by rAj on 11/1/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://roo:kart@ds031995.mlab.com:31995/asedb';

var findUserwithName = function(db,callback) {
    var cursor = db.collection('roo').find({"fname":"raghu"});
    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });}
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        findUserwithName(db, function() {
            db.close();
        });
    });
