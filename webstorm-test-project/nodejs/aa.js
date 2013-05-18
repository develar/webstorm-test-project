'use strict';

var ws = require('socket.io-client').connect('ws://socketio.mtgox.com/mtgox');
var count = 0;

if (true) {
    count = 44;
}app.js
//ws.on('connect', function () {
//  console.log("Socket connected");
//  count++;
//});
//
//var price;
//ws.on('message', function (d) {
//  console.log(d.channel);
//  count++;
//});
//
//setTimeout(function () {
//  console.log('======== Event handlers have been called ' + count + ' times ========');
//}, 10000);