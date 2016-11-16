
# @params  Comp:{src/component}
_Component = (Comp) !->
  
  Comp::initAdmin = !->
    _this = @; @action type: 'INIT_ADMIN'
    
    @admin = @props.admin

    (require 'src/component/admin/src')       Comp
    (require 'src/component/admin/route')     Comp
    (require 'src/component/admin/select')    Comp
    (require 'src/component/admin/sample')    Comp
    (require 'src/component/admin/view')      Comp
    (require 'src/component/admin/header')    Comp
    
    (require 'src/component/admin/tree/data') Comp
    (require 'src/component/admin/list/data') Comp
    
    (require 'src/component/admin/element')   Comp

    @initSrc!
    @initRoute!
    @initSelect!
    @initSample!
    @initView!
    @initHeader!
    
    #@initTreeData!
    #@initListData!

    @initElement!

module.exports = _Component
