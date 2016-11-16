
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors <vendor>|<ven>
  # @methods <context> {
  #   Action
  # }
  
  Comp::init<Context> = !->
    _this = @; @action type: 'INIT_<CONTEXT>'
  
  # @vendors 
  # @params  o:{  }
  Comp::<context>Action = (o) -> 
    _this = @; @action type: '<CONTEXT>_ACTION'

module.exports = _Component
