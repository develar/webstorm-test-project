function stepping() {
  var x = [1, 2, 3, 4, 5];
  x.forEach(function (v) {
    console.log(v)
  });
  console.log('done')
}

function test() {
  var foo = {
    get test() {
      return 'Works';
    }
  };

  var bar = Object.create(null, {test: {get: function () {
    return 3;
  }}});
  console.log(foo);

  var _loggers = [];
  _loggers["_buckets@0x23c35ea0"] = "wfwes";
}

function testSetValue() {
  var foo = "test";
  var bar = {v: foo};
  var foo2 = {
    get test() {
      return foo;
    },
    set test(v) {
      foo = v;
    }
  };

  var d = foo2;
  console.log(foo);
}

function testVariablesPresentation() {
  var smallArray = [0, 1, 2];
  var bigSparceArray = [1, 2, 4, 6543, 23];
  bigSparceArray[33] = "asds";
  bigSparceArray[12] = "asds";
  for (var j = 40; j < 2000; j++) {
    bigSparceArray[j] = Math.random();
  }

  var arrayWithProperties = bigSparceArray.concat();
  arrayWithProperties.foo = 34324;
  arrayWithProperties.bar = 34324;

  var bigArray = new Array(10 * 1000 + 342);
  for (var i = 0; i < bigArray.length; i++) {
    bigArray[i] = "v";
  }

  var map = Object.create(null);
  for (var i = 0; i < bigArray.length; i++) {
    map["k" + i] = "v";
  }

  map["dasd\ndfewf"] = 33;

  var date = new Date();
  var regExp = new RegExp();

  var longString = "This affects any Node.js project;\n it's not particular to Jade.  It makes debugging a real pain.  Only workaround I've found is to bring up the eval window and do a console.log" +
    " of the truncated value. If you right click and copy the value, you get the bit of the text and ellipses too :-) \nHere's a copy-paste of the truncated string:";

  var longStringHost = {name: longString};
  console.log(longString);
  console.warn(longString);
  console.error(longString);

  (function () {
    "use strict";
    var i, array = [];
    for (i = 0; i < 100000; i += 1) {
      array.push({ID: i});
    }

    console.log(array[0]);
  }());

  var tmp = {};
  tmp.__defineGetter__('a', function() {return 24});

  var o = {};
  o.a;
  Object.defineProperty(o, "a", {value: 37,
    writable: true,
    enumerable: true,
    configurable: true});

  var bValue = 38;
  Object.defineProperty(o, "b", {
    get: function () {
      return bValue;
    },
    set: function (newValue) {
      bValue = newValue;
    },
    enumerable: true,
    configurable: true
  });
}

function testFunctionScopes() {
  var Circle = function(radius) {
    var _radius = radius;

    this.getRadiusSquared = function() {
      return _radius * _radius; // <=== BREAKPOINT 1
    }
  }
  var c = new Circle(10);
  var bar = 55;
  console.log(c.getRadiusSquared());
 }

try {
  exports.test = test;
  exports.testVariablesPresentation = testVariablesPresentation;
  exports.testSetValue = testSetValue;
  exports.testFunctionScopes = testFunctionScopes;
}
catch (e) {
}

testVariablesPresentation();

function testConsole() {
  console.log("a", "b");
  console.log("da", "b");
  console.log("da", "b");
  console.log("q", "bd");
  console.log("q", "bd");
  for (var i = 0; i < 300; i++) {
    console.log(5);
  }
}