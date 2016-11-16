
gulp    = require 'gulp'

lib = 
  
  # @params  task:S, o:{ app:{}, routes:{}, port:N|S }
  task: (task, o) !-> 
    _this = @; console.log 'SERVER_TASK'
    gulp.task task, -> 
      app    = require o.app
      routes = require o.routes
      routes app
      app.listen o.port, !->
        console.log 'App on port ' + o.port
    
module.exports = lib
