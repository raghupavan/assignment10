/**
 * Created by rAj on 11/1/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://roo:kart@ds031995.mlab.com:31995/asedb';
var insertDocument = function(db, callback) {
    db.collection('roo').insert( {
        "fname" : "raghu",
        "lname" : "vallamkonda",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"rvvgd@mail.umkc.edu"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the roo collection.");
        callback();
    });
};

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});