
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, icheck|ich
  # @methods lint {
  #   Make, SetValue, GetValue, Enable, Disable
  # }
  
  Comp::initLint = !->
    _this = @; @action type: 'INIT_LINT'
    
    @lintMake @props.main.lint.inputs.html
    @lintMake @props.main.lint.inputs.css
    @lintMake @props.main.lint.inputs.js
    @lintMake @props.main.lint.outputs.index
    
  # @vendors jqy, ich
  # @params  o:{ id:S, context:S, entity:S, ?onChange:S }
  Comp::lintMake = (o) !-> # 
    _this = @; @action type: 'LINT_MAKE'
    $ '#' + o.id .iCheck checkboxClass: 'icheckbox_minimal'
    $ '#' + o.id .on 'ifChanged', !->
      checked = $ '#' + o.id .prop 'checked'
      if o.onChange
        _this[o.onChange] context: o.context, entity: o.entity, value: checked
    
  # @vendors jqy, ich
  # @params  o:{ context:S, entity:S, value:S }
  Comp::lintSetValue = (o) !-> # 
    _this = @; @action type: 'LINT_SET_VALUE'
    ids = 'outputs': 'output', 'inputs': 'input'
    value = if o.value == true then 'check' else 'uncheck'
    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck value
    
  # @vendors jqy, ich
  # @params  o:{ context:S, entity:S }
  # @return  S
  Comp::lintGetValue = (o) -> # 
    _this = @; @action type: 'LINT_GET_VALUE'
    ids = 'outputs': 'output', 'inputs': 'input'
    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').prop 'checked'
    
  # @vendors jqy, ich
  # @params  o:{ context:S, entity:S }
  Comp::lintEnable = (o) !-> # 
    _this = @; @action type: 'LINT_ENABLE'
    ids = 'outputs': 'output', 'inputs': 'input'
    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck 'enable'
    
  # @vendors jqy, ich
  # @params  o:{ context:S, entity:S }
  Comp::lintDisable = (o) !-> # 
    _this = @; @action type: 'LINT_DISABLE'
    ids = 'outputs': 'output', 'inputs': 'input'
    $('#content__' + ids[o.context] + '__' + o.entity + '__lint').iCheck 'disable'

module.exports = _Component
