var foo = 4;

function get_random_color() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '0x000000';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function updateStyleColor() {
  document.getElementById("p2").style.color = get_random_color();
}

var inputTypes = ["datetime", "checkbox", "date", "color", "file"];

function addAttribute() {
  var newType;
  var input = document.getElementById("input");
  //noinspection CommaExpressionJS
  do {
    newType = inputTypes[Math.floor(Math.random() * inputTypes.length)];
  }
  while ((input.type === newType ? true : (input.type = newType, false)));
}

function removeTypeAttribute() {
  var input = document.getElementById("input");
  input.removeAttribute("type");
}

function updateTextContent() {
  document.getElementById("p2").innerHTML = Math.random() + "" + Math.random() + Math.random() + Math.random() + "<b>HAHA</b>";
}

function writeInInteration() {
  var a = [];
  for (var i = 0; i <= 5; i++) {
    a.push('Number: ' + i);
    document.write(a[i] + "<br>"); //breakpoint
  }
}

function updateTextContent2() {
//      var fieldNameElement = document.getElementById("p2");
//      while (fieldNameElement.childNodes.length >= 1) {
//        fieldNameElement.removeChild(fieldNameElement.firstChild);
//      }
//      fieldNameElement.appendChild(fieldNameElement.ownerDocument.createTextNode(Math.random() + "d"));

  var newdiv = document.createElement("div");
  var newtext = document.createTextNode("Label div :");
  newdiv.appendChild(newtext); //append text to new div


  var div = document.getElementById("container");
  div.appendChild(newdiv);
}

function updateTextContent3() {
  document.getElementById("p2").childNodes[2].nodeValue = "YEP!!!"
}
