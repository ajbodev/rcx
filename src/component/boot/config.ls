
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @methods config {
  #   Set, Get, 
  #   Save, Load,
  #   ?SetDeep, ?GetDeep
  # }
  
  Comp::initConfig = !->
    _this = @; @action type: 'INIT_CONFIG'

    @configLoad!
    @configSave!
  
  # @params  o:{ config:S, props:A }
  Comp::configSet = (o) !-> 
    _this = @; @action type: 'CONFIG_SET'
    @config[o.config] = o.props
    @configSave!
  
  # @params  o:{ config:S }
  Comp::configGet = (o) -> 
    _this = @; @action type: 'CONFIG_GET'
    @config[o.config]
  
  Comp::configSave = (o) !-> 
    _this = @; @action type: 'CONFIG_SAVE'
    @settingSet setting: 'config', props: @config
  
  Comp::configLoad = (o) !-> 
    _this = @; @action type: 'CONFIG_LOAD'
    settings = @settingGet!
    @config = settings.config if settings.config

module.exports = _Component
