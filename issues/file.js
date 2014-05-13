(function() {
  var cnt = 1;

  setInterval(function () {
    console.log("#" + cnt + " Hello! from " + process.pid);
    cnt++;
  }, 2000);
})();