
# @params  o:{
#   Stores:{}, templates:{}, samples:{}, 
#   vendors:{}, props:{} , _require:S, debug:B
# }
Component = (o) !->
  @Stores    = o.Stores
  @templates = o.templates
  @samples   = o.samples
  @props     = o.props
  @_require  = o._require
  @debug     = o.debug
  
Component::  = 
  constructor: Component
  
  init: (o) !->
    _this = @; if @debug then console.log 'INIT'
    
    (require 'src/component/lib')   Component
    (require 'src/component/store') Component
    (require 'src/component/boot')  Component
    (require 'src/component/main')  Component
    (require 'src/component/admin') Component
    (require 'src/component/util')  Component
    #(require 'src/component/user')  Component
    
    @initLib!
    @initStore!
    @initBoot!
    @initMain!
    @initAdmin!
    @initUtil!
    #@initUser!

module.exports = Component
