
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors moment|mom
  # @methods date {
  #   Get
  # }
  
  Comp::initDate = !->
    _this = @; @action type: 'INIT_DATE'
  
  # @vendors mom
  # @params  o:{ format:S }
  Comp::dateGet = (o) -> 
    _this = @; @action type: 'DATE_GET'
    moment!.format o.format

module.exports = _Component
