var async = require('async');

function log(i_value) {
  console.log(i_value);
}

var pg = require("pg");

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
        callback(null, 'one');
      },
      function (callback) {
        // do some more stuff ...
        log('2');
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

console.log('2');