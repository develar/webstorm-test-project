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
      foo = 33;
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

  var bigArray = new Array(10 * 1000 + 342);
  for (var i = 0; i < bigArray.length; i++) {
    bigArray[i] = "v";
  }

  var map = Object.create(null);
  for (var i = 0; i < bigArray.length; i++) {
    map["k" + i] = "v";
  }

  map["dasd\ndfewf"] = 33;

  var longString = "This affects any Node.js project;\n it's not particular to Jade.  It makes debugging a real pain.  Only workaround I've found is to bring up the eval window and do a console.log" +
    " of the truncated value. If you right click and copy the value, you get the bit of the text and ellipses too :-) \nHere's a copy-paste of the truncated string:";

  var dd = {name: longString}
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

testFunctionScopes();

function paint() {
  function Animal(name) {
    this.name = name
    this.canWalk = true
  }

  var animal = new Animal("beastie")

  function Rabbit(name) {
    this.name = name
  }

  try {
    throw new Error();
  }
  catch (e) {
  }

  Rabbit.prototype = animal

  var big = new Rabbit('Big')
  var small = new Rabbit('Small')

  var outer = 234;
  var re = /ab+c/;
  var re2 = new RegExp("\\w+\\s", "g");
  var reqwe2 = new RegExp("\\w+\\s", "g");
  var array = [1, 2, 4, 6543, 23];
  array[33] = "asds";
  array[12] = "asds";
  for (var j = 40; j < 2000; j++) {
    array[j] = Math.random();
  }

  var f = "This affects any Node.js project; it's not particular to Jade.  It makes debugging a real pain.  Only workaround I've found is to bring up the eval window and do a console.log" +
    " of the truncated value. If you right click and copy the value, you get the bit of the text and ellipses too :-) \nHere's a copy-paste of the truncated string:";


  var simpleObject = {f: 12, s: new Date()};
  (function () {
    var so = 32;
    (function () {
      var a, x, y;
      var r = 10;
      with (Math) {
        try {
          throw new Error();
        }
        catch (e) {
          a = PI * r * r;
          x = r * cos(PI);
          y = r * sin(PI / 2);
          var inner = 33;
          var g = inner + outer + so;
        }
      }
    })();
  })();
  console.log("effffffff");
  console.log("ew");
  console.log(simpleObject);
}

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