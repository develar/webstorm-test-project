function getError(cb) {
  cb(new Error('Errors happen.'));
}

function call() {
  getError(function (err, result) {
    console.log(err.message);
  });
}

call();