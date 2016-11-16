
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, icheck|ich
  # @methods save {
  #   ById, IsAuto, AutoSetValue, AutoGetValue,
  #   AutoEnable, AutoDisable
  # }
  
  Comp::initSave  = !->
    _this = @; @action type: 'INIT_SAVE'
    # ? Make
    $ '#content__save' .click !-> _this.saveById!
    $ '#content__save__auto' .iCheck checkboxClass: 'icheckbox_minimal'
    $ '#content__save__auto' .iCheck 'check'
    # ? 
  
  Comp::saveById = (o) !-> # 
    _this = @; @action type: 'SAVE_BY_ID'
    if @id
      props = 
        id: @id
        attrs:
          input_html: JSON.stringify @inputFindAll entity: 'html'
          input_css:  JSON.stringify @inputFindAll entity: 'css'
          input_js:   JSON.stringify @inputFindAll entity: 'js'
      @dataUpdate props
  
  # @vendors jqy
  Comp::saveIsAuto = (o) -> # 
    _this = @; @action type: 'SAVE_IS_AUTO'
    $ '#content__save__auto'  .prop 'checked'
    
  # @vendors jqy, ich
  # @params  o:{ value:S }
  Comp::saveAutoSetValue = (o) !-> 
    _this = @; @action type: 'SAVE_AUTO_SET_VALUE'
    value = if o.value == true then 'check' else 'uncheck'
    $ '#content__save__auto' .iCheck value
    
  # @vendors jqy
  Comp::saveAutoGetValue = (o) -> 
    _this = @; @action type: 'SAVE_AUTO_GET_VALUE'
    $ '#content__save__auto' .prop 'checked'
    
  # @vendors jqy, ich
  Comp::saveAutoEnable = (o) !-> 
    _this = @; @action type: 'SAVE_AUTO_ENABLE'
    $ '#content__save__auto' .iCheck 'enable'
    
  # @vendors jqy, ich
  Comp::saveAutoDisable = (o) !-> 
    _this = @; @action type: 'SAVE_AUTO_DISABLE'
    $ '#content__save__auto' .iCheck 'disable'

module.exports = _Component
