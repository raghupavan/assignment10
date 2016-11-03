/**
 * Created by rAj on 11/1/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var app = express();
var url = 'mongodb://roo:kart@ds031995.mlab.com:31995/asedb';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home',function (db, data, callback) {
    var resultArray={'body': []};
    MongoClient.connect(url, function(err, db) {
        var cursor = db.collection('roo').find(data);
        cursor.each(function(err,doc) {
            if(doc != null)
            {
                resultArray.body.push(doc);
                console.log("First Name:" + doc.fname);
                console.log("Last Name:" + doc.lname);
                //console.log("city:" + doc.address.city);
            }//last edited
        },function () {
            db.close();
            res.send(data);
            res.render('index',{item:resultArray});
            
        });
       // res.send(doc);
        // assert.equal(null, err);
        // findUserwithName(db, function() {
        //     db.close();
        // });
    });

});


app.post('/register', function (req, res) {
    MongoClient.connect(url, function(err, db) {
        if(err)
        {
            res.write("Failed, Error while connecting to Database");
            res.end();
        }
        insertDocument(db, req.body, function() {
            res.write("Successfully inserted");
            res.end();
        });
    });
})


// var findUserwithName = function(db, callback) {
//     var cursor = db.collection('roo').find({"fname":"raghu"});
//     cursor.each(function(err,doc) {
//         assert.equal(err,null);
//         if(doc != null)
//         {
//             console.log("First Name:" + doc.fname);
//             console.log("Last Name:" + doc.lname);
//             console.log("city:" + doc.address.city);
//         }
//     });
// }

var insertDocument = function(db, data, callback) {
    db.collection('roo').insertOne( data, function(err, result) {
        if(err)
        {
            res.write("Registration Failed, Error While Registering");
            res.end();
        }
        console.log("Inserted a document into the roo collection.");
        callback();
    });
};


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})