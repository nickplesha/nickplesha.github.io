var gulp = require('gulp');

function startExpress() {

  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(4000);
}

gulp.task('serve', function () {

  startExpress();
});
