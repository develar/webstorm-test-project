var vm = require('vm');
var fs = require('fs');
var data = fs.readFileSync("file.js", {encoding: "utf8"});
var compiledWrapper = vm.runInThisContext(data, "file.js", 0, true);

function listener(event, exec_state, event_data, data) {
  console.log(JSON.stringify(event), JSON.stringify(exec_state), JSON.stringify(event_data), JSON.stringify(data));
//  if (event == Debug.DebugEvent.Break)
//  {
//    call_graph += exec_state.frame().func().name();
//    exec_state.prepareStep();
//  }
}

var v8Debugger = global.v8debug.Debug;
v8Debugger.setListener(listener);
var breakPoint = v8Debugger.setBreakPoint(compiledWrapper, 0, 0);
var breakPoint2 = v8Debugger.setBreakPoint(compiledWrapper, 4);

var result = compiledWrapper.apply({}, []);

