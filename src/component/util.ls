
# @params  Comp:{src/component}
_Component = (Comp) !->
  
  Comp::initUtil = !->
    _this = @; @action type: 'INIT_UTIL'
    
    @util = @props.util
    
    (require 'src/component/util/format') Comp
    (require 'src/component/util/export') Comp
    (require 'src/component/util/import') Comp
    # backup, sync, services
    
    @initFormat!
    @initExport!
    @initImport!

module.exports = _Component
