try {
  (function () {
    const oldStackTraceLimit = Error.stackTraceLimit;
    const oldPrepareStackTrace = Error.prepareStackTrace;
    var stack = null;
    try {
      const dummyObject = {};
      Error.prepareStackTrace = function (dummyObject, stackTrace) {
        return stackTrace;
      };
      Error.captureStackTrace(dummyObject);
      stack = dummyObject.stack;
    }
    finally {
      Error.stackTraceLimit = oldStackTraceLimit;
      Error.prepareStackTrace = oldPrepareStackTrace;
    }

    var filename;
    for (var i = 0, n = stack.length; i < n; i++) {
      var frame = stack[i];
      if (!frame.isNative() && (filename = frame.getFileName())) {
        break;
      }
    }

    if (!filename) {
      console.error("cannot determinate script filename");
      return false;
    }

    const fs = process.mainModule.require('fs');
    var fd = fs.openSync(filename, 'r');
    try {
      const size = fs.fstatSync(fd).size;
      if (size < 25) {
        return false;
      }

      const start = size < 4096 ? 0 : (size - 4096);
      const end = size - 1;
      const buffer = new Buffer(end - start);
      var count = 0;
      while (count < buffer.length) {
        var bytesRead = fs.readSync(fd, buffer, count, buffer.length - count, start + count);
        if (bytesRead <= 0) {
          break;
        }
        count += bytesRead;
      }
      return new RegExp("[\r\n]//@[ \t]sourceMappingURL=[ \t]*([^\r\n]*)\\s*(?:\\*/\\s)?$").test(buffer.toString());
    }
    finally {
      fs.close(fd, function () {
      });
    }
  })()
} catch (e) {
  console.error(e);
}

//@ sourceMappingURL=Fifo.map