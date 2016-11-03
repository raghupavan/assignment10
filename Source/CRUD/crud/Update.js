/**
 * Created by rAj on 11/1/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://roo:kart@ds031995.mlab.com:31995/asedb';

var updateUserwithName = function(db,callback) {
    db.collection('roo').update( {

        "fname":"raghu"
        // "_id": {"58194c35c9b561280453cc9c"}
}, {
            $set: { "fname": "kalyan", type: 0,  },
            $currentDate: { lastModified: true }
        },

        function(err, result) {
        assert.equal(err, null);
        console.log("updated a document into the roo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    updateUserwithName(db, function() {
        db.close();
    });
});
