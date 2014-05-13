var doOnClick = function () {
  console.log("button " + "clicked!");
  var elementById = document.getElementById("b");
  console.log("el dir = " + elementById.dir + " now");
  elementById.setAttribute("dir", "rtl");
  console.log("done");
  console.log(elementById.dir)
  console.log("el dir = " + elementById.dir + " now");
};