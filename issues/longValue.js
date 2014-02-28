var fs = require('fs');

var a = {longValue: fs.readFileSync(__dirname + '/Manifest.xml', 'ucs-2')};

var s = a.longValue;

console.log(a);