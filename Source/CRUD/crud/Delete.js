/**
 * Created by rAj on 11/1/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://roo:kart@ds031995.mlab.com:31995/asedb';

var deleteUserwithName = function(db,callback) {
    db.collection('roo').remove( {

            "fname":"kalyan"

        },

        function(err, result) {
            assert.equal(err, null);
            console.log("deleted a document into the roo collection.");
            callback();
        });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    deleteUserwithName(db, function() {
        db.close();
    });
});
/**
 * Created by rAj on 11/1/2016.
 */
