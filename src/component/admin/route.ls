
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors director|dir
  # @methods route {
  #   Make, Set, Clear
  # }
  
  Comp::initRoute = !->
    _this = @; @action type: 'INIT_ROUTE'
      
  # @vendors dir
  # @params  o:{ routes:{F} }
  Comp::routeMake = (o) !-> 
    _this = @; @action type: 'ROUTE_MAKE'
    @router = Router o.routes
    @router.init!
    
  # @vendors dir
  # @params  o:{ route:S }
  Comp::routeSet = (o) !-> 
    _this = @; @action type: 'ROUTE_SET'
    if @router.setRoute then @router.setRoute (o.route + '')
    
  # @vendors dir
  # @params  o:{  }
  Comp::routeClear = (o) !-> 
    _this = @; @action type: 'ROUTE_CLEAR'
    if @router.setRoute then @router.setRoute ''

module.exports = _Component
