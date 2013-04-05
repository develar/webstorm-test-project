var PEG = require("pegjs");
var parser = PEG.buildParser("start = ('a' / 'b')+");
var result = parser.parse("abba");
console.log(result)