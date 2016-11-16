
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors localstorage|lst
  # @methods setting {
  #   Set, Get
  # }
  
  Comp::initSetting = !->
    _this = @; @action type: 'INIT_SETTING'
    
  # @vendors lst
  # @params  o:{ setting:S, props:{} }
  Comp::settingSet = (o) !-> 
    _this = @; @action type: 'SETTING_SET'
    settings = @settingGet!
    settings[o.setting] = o.props
    localStorage.setItem @setting, JSON.stringify settings
  
  # @vendors lst
  Comp::settingGet = (o) -> 
    _this = @; @action type: 'SETTING_GET'
    settings = localStorage.getItem @setting
    if settings 
      settings = JSON.parse settings
    else
      {}
  
  /*
  # @vendors lst
  # @params  o:{ setting:S, props:{} }
  Comp::settingSet = (o) !-> 
    _this = @; @action type: 'SETTING_SET'
    cb = (settings) !->
      settings[o.setting] = o.props
      localStorage.setItem _this.setting, JSON.stringify settings
    @settingGet cb: cb
  
  # @vendors lst
  # @params  o:{ cb:F }
  Comp::settingGet = (o) !-> 
    _this = @; @action type: 'SETTING_GET'
    settings = localStorage.getItem @setting
    settings = JSON.parse settings if settings else {}
    o.cb settings
  */

module.exports = _Component
