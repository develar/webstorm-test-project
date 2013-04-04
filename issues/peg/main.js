var PEG = require("pegjs");
var parser = PEG.buildParser("start = ('a' / 'b')+");