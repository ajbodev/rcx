
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @methods action
  
  Comp::initAction = !->
    _this = @; console.log 'INIT_ACTION' if @debug
  
  # @params  o:{ type:S, ?text:S } 
  Comp::action = (o) !-> 
    _this = @; console.log o.type if @debug

module.exports = _Component
