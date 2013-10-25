console.log("Start");
console.log("Middle");
var f = 5;
console.log("End");      //breakpoint


map = {
  '123prop': {
    '456': 'string'
  }
};

var map2 = {
  '123prop': {
    '456': 'string'
  }
};

function test(data) {
  var local = 12;
  console.log(data, local);
}

test({
  '123prop': {
    '456': 'string'
  }
});

map["123prop"]["456"] = "23423";

test();
console.log(32);