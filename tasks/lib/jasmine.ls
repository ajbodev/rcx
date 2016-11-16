
gulp    = require 'gulp'
jasmine = new (require 'jasmine')

lib = 
  
  # @params  task:S, o:{ config:S }
  task: (task, o) !-> 
    _this = @; console.log 'JASMINE_TASK'
    gulp.task task, -> 
      _this.test o
  
  # @params  o:{ config:S }
  test: (o) -> 
    _this = @; console.log 'JASMINE_TEST'
    jasmine.loadConfigFile o.config
    jasmine.execute!
    
module.exports = lib
