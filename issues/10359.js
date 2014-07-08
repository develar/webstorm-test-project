var url = "http://simple.url";
var m = String(url).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
console.log("after");

chainedCall(3).foo(bar() == 2345 ? Math.pow(2) : Math.min(33));
console.log("after");

function chainedCall(bar) {
  return { foo: chainedCall };
}

function bar() {
  return 4;
}