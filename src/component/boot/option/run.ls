
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors dom, jquery|jqy, icheck|ich
  # @methods optionRun {
  #   Make, MakeLoadable, LoadScript, GetMode
  # }
  
  Comp::initOptionRun = !->
    _this = @; @action type: 'INIT_OPTION_RUN'

    @optionRunMake!
  
  # @vendors jqy, ich
  Comp::optionRunMake = (o) !-> 
    _this = @; @action type: 'OPTION_RUN_MAKE'
    # html
    @optionRunMakeLoadable @props.boot.options.run_preprocessor_md
    @optionRunMakeLoadable @props.boot.options.run_preprocessor_jade
    # css
    @optionRunMakeLoadable @props.boot.options.run_preprocessor_less
    @optionRunMakeLoadable @props.boot.options.run_preprocessor_sass
    @optionRunMakeLoadable @props.boot.options.run_preprocessor_styl
    # js
    @optionRunMakeLoadable @props.boot.options.run_transpiler_babeljs
    @optionRunMakeLoadable @props.boot.options.run_transpiler_ts
    @optionRunMakeLoadable @props.boot.options.run_transpiler_cs
    @optionRunMakeLoadable @props.boot.options.run_transpiler_ls
    # ?
    $ '#content__option__run__mode__front' .iCheck radioClass: 'iradio_minimal'
    $ '#content__option__run__mode__index' .iCheck radioClass: 'iradio_minimal'
    # ?
  
  # @vendors jqy, ich
  # @params  o:{ id:S }
  Comp::optionRunMakeLoadable = (o) !-> 
    _this = @; @action type: 'OPTION_RUN_MAKE_LOADABLE'
    $ '#' + o.id .iCheck checkboxClass: 'icheckbox_minimal-red'
    $ '#' + o.id .on 'ifChecked', !->
      ext = $ '#' + o.id + '__ext' .html!
      if !_this.scripts[ext]
        _this.optionRunLoadScript o
  
  # @vendors dom, jqy, ich
  # @params  o:{ id:S }
  Comp::optionRunLoadScript = (o) !-> 
    _this = @; @action type: 'OPTION_RUN_LOAD_SCRIPT'
    script = document.createElement 'script'
    ext        = $ '#' + o.id + '__ext' .html!
    src        = $ '#' + o.id + '__src' .val!
    script.src = src
    script.onload = !-> 
      console.log 'Script loaded', o.title
      if _this.onloads[ext] then _this.onloads[ext]!
      _this.scripts[ext] = true
      $ '#' + o.id .iCheck 'check'
      $ '#' + o.id .iCheck 'disable'
      if o.cb then o.cb!
    try
      document.body.appendChild script
    catch e
      console.log 'Script error', e
      $ '#' + o.id .iCheck 'uncheck'
  
  # @vendors jqy
  # @return  S
  Comp::optionRunGetMode = (o) -> 
    _this = @; @action type: 'OPTION_RUN_GET_MODE'
    val = $ '.checked input[name="run__mode"]' .val!
    val

module.exports = _Component
