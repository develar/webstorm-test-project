var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log("Thank you for your valuable feedback:", answer);

  rl.close();
});

//(function() {
//  var cnt = 1;
//
//  setInterval(function () {
//    console.log("#" + cnt + " Hello! from " + process.pid);
//    cnt++;
//  }, 2000);
//})();