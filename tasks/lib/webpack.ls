
gulp  = require 'gulp'
shell = require 'gulp-shell'
  
lib = 

  # @params  task:S, o:{ bundle:S, watch:S }
  task: (task, o) !->
    _this = @; console.log 'WEBPACK_TASK'
    gulp.task task, -> 
      _this.bundle o
    gulp.task task + ':devserver', -> 
      _this.bundleDevServer o
    gulp.task task + ':watch', [task], -> 
      gulp.watch [o.watch], [task]
    gulp.task task + ':watch+devserver', [task + ':devserver', task + ':watch'], -> 
  
  # @params  o:{ bundle:S }
  bundle: (o) -> 
    _this = @; console.log 'WEBPACK_BUNDLE'
    gulp.src '', read: false
    .pipe (shell 'webpack --config ' + o.bundle)
  
  # @params  o:{ bundle:S }
  bundleDevServer:   (o) -> 
    _this = @; console.log 'WEBPACK_BUNDLE_DEV_SERVER'
    gulp.src '', read: false
    .pipe (shell 'webpack-dev-server --config ' + o.bundle)

module.exports = lib
