function testMe() {
  var funca = function () {
    var farray = [];
    var i;
    for (i = 0; i <= 4; i++) {
      farray[i] = i;
    }
    return farray;
  }
  var fay = funca();
  var x = fay[2];
}

testMe();