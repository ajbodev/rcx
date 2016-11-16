
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, icheck|ich
  # @methods load {
  #   ById, ByIdAuto, Reset, IsAuto,
  #   AutoSetValue, AutoGetValue,
  #   AutoEnable, AutoDisable
  # }
  
  Comp::initLoad = !->
    _this = @; @action type: 'INIT_LOAD'
    # ? Make
    $ '#content__load' .click !-> _this.loadById!
    $ '#content__load__auto' .iCheck checkboxClass: 'icheckbox_minimal'
    $ '#content__load__auto' .on 'ifChanged', !->
      checked = $ '#content__load__auto' .prop 'checked'
      _this.data.autoload _this, checked if _this.data.autoload
    # ? 
  
  Comp::loadById = (o) -> 
    _this = @; @action type: 'LOAD_BY_ID'
    if @id
      props = 
        id: @id
        cb: (attrs) !->
          inputs =
            html: JSON.parse attrs.input_html
            css:  JSON.parse attrs.input_css
            js:   JSON.parse attrs.input_js
          _this.inputLoad inputs: inputs
          _this.progressEnd!
      @progressStart!
      @dataFind props
  
  Comp::loadByIdAuto = (o) !-> 
    _this = @; @action type: 'LOAD_BY_ID_AUTO'
    if @id
      props = 
        id: @id
        cb: (attrs) !->
          inputs =
            html: JSON.parse attrs.input_html
            css:  JSON.parse attrs.input_css
            js:   JSON.parse attrs.input_js
          _this.inputLoadAuto inputs: inputs
      @dataFind props
    
  Comp::loadReset = (o) !-> # 
    _this = @; @action type: 'LOAD_RESET'
    @inputReset entity: 'html'
    @inputReset entity: 'css'
    @inputReset entity: 'js'
    @incrementReset! # ? may not be needed .. prove math ..
  
  # @vendors jqy
  Comp::loadIsAuto = (o) -> # 
    _this = @; @action type: 'LOAD_IS_AUTO'
    $ '#content__load__auto'  .prop 'checked'
    
  # @vendors jqy, ich
  # @params  o:{ value:S }
  Comp::loadAutoSetValue = (o) !-> # 
    _this = @; @action type: 'LOAD_AUTO_SET_VALUE'
    value = if o.value == true then 'check' else 'uncheck'
    $ '#content__load__auto' .iCheck value
    
  # @vendors jqy
  Comp::loadAutoGetValue = (o) -> # 
    _this = @; @action type: 'LOAD_AUTO_GET_VALUE'
    $ '#content__load__auto' .prop 'checked'
    
  # @vendors jqy, ich
  Comp::loadAutoEnable = (o) !-> # 
    _this = @; @action type: 'LOAD_AUTO_ENABLE'
    $ '#content__load__auto' .iCheck 'enable'
    
  # @vendors jqy, ich
  Comp::loadAutoDisable = (o) !-> # 
    _this = @; @action type: 'LOAD_AUTO_DISABLE'
    $ '#content__load__auto' .iCheck 'disable'

module.exports = _Component
