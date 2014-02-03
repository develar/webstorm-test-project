#!/usr/local/bin/node


/***********************************************
 Node

 NODE.JS Sample server !!!!

 npm view jquery
 npm install jquery
 npm info express version
 node -v
 npm -v

 ************************************************/

var async = require('async');

// var $ = require('jquery').create();
//var ms = require("mslibmod");

//var enc = ms.doEncrypt('Hello world');
//ms.log('decypted ' + ms.doDecrypt(enc));

//var commBroker = ms.comBroker('yo...');
//commBroker.listen('SomeEvent', function (e) {
//    console.log('got the event');
//});
//
//commBroker.fire('SomeEvent');
//commBroker.setValue('abc', '123', true);

function log(i_value) {
    console.log(i_value);
}


/* process.on('exit', function() {
 console.log('Exiting!!!');
 });


 var http = require('http');


 var sys=require('sys');
 var request = require('request');
 var cheerio = require('cheerio');
 var fs = require('fs');

 // sys.debug("Starting ...");

 */

var pg = require("pg");
var fs = require('fs');
var sys = require('sys');


function b() {
    log('b');
    function c() {
        log('c');
    }

    c();
}
function a() {
    log('a');
    b()
}

a();

async.series([
        function (callback) {
            // do some stuff ...
            log('123');
            ;debugger;
            callback(null, 'one');
        },
        function (callback) {
            // do some more stuff ...
            // log('2');
            callback(null, 'two');
        }
    ],
// optional callback
    function (err, results) {
        // log('3');
        // results is now equal to ['one', 'two']
    });


// an example using an object instead of an array

var runAsyncDBCommand = function () {
    var connection = "pg://postgres:postgres@localhost:5432/hobbycom";

    async.series({
            one: function (callback) {
                log('abcd');
                setTimeout(function () {
                    log('11111');
//                    ;debugger;
                    callback(null, 1);
                }, 3000);
                /*
                 var dbfdGalaxy = new pg.Client(connection);
                 dbfdGalaxy.connect();
                 var query = dbfdGalaxy.query("SELECT * FROM globals");
                 query.on("row", function (row, result) {
                 result.addRow(row);
                 });

                 query.on('end', function(result) {
                 log(result.rows[1]['class'].blue)
                 var members =  result.rows[1];
                 for (var i in members) {
                 //
                 console.log(result.rows[1][i]);
                 }
                 dbfdGalaxy.end();

                 });
                 */


            },
            two: function (callback) {
                //
                log('--> b   ' + connection);
                //
                setTimeout(function () {
                    callback(null, 2);
                }, 1500);
                //
                setTimeout(function () {

                    log('22222');
                }, 1000);

            }
        },

        function (err, results) {
            log('--> c  ' + connection);
            //
            // results is now equal to: {one: 1, two: 2}
        });

}();


setTimeout(function(){
    console.log('Sean Levy');
}, 2000);

console.log('2');


/*
 function getDataFromTwoSources(callback){
 step(

 function readSelf() {
 //
 var dbfd_galaxy = "pg://postgres:postgres@localhost:5432/hobbycom";
 var dbfdGalaxy = new pg.Client(dbfd_galaxy);
 dbfdGalaxy.connect();
 var query = dbfdGalaxy.query("SELECT * FROM globals");
 query.on("row", function (row, result) {
 result.addRow(row);
 //
 });
 query.on('end', function(result) {
 console.log(result.rows[1]['class'])
 //
 var members =  result.rows[1];
 for (var i in members) {
 //
 console.log(result.rows[1][i]);
 }
 dbfdGalaxy.end();
 });



 console.log('1111111111111');
 return('sean levy');
 },

 function capitalize(err, text) {
 console.log('22222222222222');
 if (err) throw err;
 return text.toUpperCase();
 },
 function showIt(err, newText) {
 console.log('3333333333333');
 if (err) throw err;
 console.log(newText);
 }
 );
 };



 getDataFromTwoSources(function myCallBacl(){
 console.log('end......');
 });


 /*



 var dbfd_galaxy = "pg://postgres:postgres@localhost:5432/hobbycom";
 var dbfdGalaxy = new pg.Client(dbfd_galaxy);



 dbfdGalaxy.connect();


 var str = "  hello world ";
 log(str);
 log($.trim(str));

 /// body == standard out
 $("<h1>test passes</h1>").appendTo("body");
 console.log($("body").html());


 function query1(){

 var query = dbfdGalaxy.query("SELECT * FROM globals");
 query.on("row", function (row, result) {
 result.addRow(row);
 });

 query.on('end', function(result) {
 log(result.rows[0]['class'])
 var members =  result.rows[0];
 for (var i in members) {
 log(result.rows[0][i]);
 }
 query2();
 });
 }


 function query2(){
 var query = dbfdGalaxy.query("SELECT * FROM globals");
 query.on("row", function (row, result) {
 result.addRow(row);
 });
 query.on('end', function(result) {
 log(result.rows[1]['class'])
 var members =  result.rows[1];
 for (var i in members) {
 log(result.rows[1][i]);
 }
 dbfdGalaxy.end();
 });
 }

 query1();




 function runMe(i_data){
 var jsDatalog = eval(i_data);
 }




 request('http://www.cnn.com', function googleData (error, response, body) {

 log('CNN...................')

 // Hand the HTML response off to Cheerio and assign that to
 //  a local $ variable to provide familiar jQuery syntax.
 var $ = cheerio.load(body);
 var res = response;

 $('h1').each(function() {
 var a = res;
 console.log('CNN: '+$(this).text());
 });
 });



 function ScreenOrientation (i_Element, i_insertOffset){

 this.self               = this;
 this.data               = "object!!";
 this._init();
 };

 ScreenOrientation.prototype = {
 constructor: ScreenOrientation,

 _init: function(){

 var self = this;

 },

 // public
 doSomething: function(){
 var self = this;
 console.log('hello I am an ' + self.data);
 }
 }
 */