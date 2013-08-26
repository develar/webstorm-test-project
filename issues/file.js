(function (exports, require, module, __filename, __dirname) { (function() {
  var cnt = 1;

  setInterval(function () {
    console.log("#" + cnt + " Hello! from " + process.pid);
    cnt++;
  }, 2000);
})();
});