
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @methods object {
  #   SetDeep, GetDeep
  # }
  
  Comp::initObject = !->
    _this = @; @action type: 'INIT_OBJECT'
  
  # @params  o:{  }
  Comp::objectSetDeep = (o) !-> 
    _this = @; @action type: 'OBJECT_SET_DEEP'
  
  # @params  o:{  }
  Comp::objectGetDeep = (o) -> 
    _this = @; @action type: 'OBJECT_GET_DEEP'

module.exports = _Component
