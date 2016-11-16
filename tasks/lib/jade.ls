
gulp    = require 'gulp'
jade    = require 'gulp-jade'
plumber = require 'gulp-plumber'
rename  = require 'gulp-rename'

lib = 
  
  # @params  task:S, o:{ src:S, ?watch:S, .. }
  task: (task, o) !-> 
    _this = @; console.log 'JADE_TASK'
    gulp.task task, -> 
      _this.compile o
    gulp.task task + ':watch', [task], -> 
      gulp.watch [(o.watch || o.src)], [task]
  
  # @params  o:{ src:S, dest:S, ?ext:S, ?rename:S }
  compile: (o) -> 
    _this = @; console.log 'JADE_COMPILE'
    gulp.src o.src
    .pipe plumber!
    .pipe jade pretty: true
    .pipe rename (path) !->
      if o.ext    then path.extname  = '.' + o.ext
      if o.rename then path.basename = o.rename
    .pipe gulp.dest (o.dest || '')
    
module.exports = lib
