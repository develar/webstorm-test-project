var fs = require('fs');

var a = {longValue: fs.readFileSync(__dirname + '/Manifest.xml', 'ucs-2')};

console.log(a);