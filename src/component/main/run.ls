
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, dom|dom, domparser|dpa
  # @methods run {
  #   @, Front, Display, GetConfig, 
  #   ConcatFiles, IsAuto, GetTagList
  # }
  
  Comp::initRun = !->
    _this = @; @action type: 'INIT_RUN'
    
    # Default
    (require 'src/component/main/run/default/html')            Comp
    (require 'src/component/main/run/default/css')             Comp
    (require 'src/component/main/run/default/js')              Comp
    # Markdown
    (require 'src/component/main/run/markdown/marked')         Comp
    # Template
    (require 'src/component/main/run/template/jade')           Comp
    # Preprocessor
    (require 'src/component/main/run/preprocessor/less')       Comp
    (require 'src/component/main/run/preprocessor/sass')       Comp
    (require 'src/component/main/run/preprocessor/stylus')     Comp
    # Transpiler
    (require 'src/component/main/run/transpiler/livescript')   Comp
    (require 'src/component/main/run/transpiler/typescript')   Comp
    (require 'src/component/main/run/transpiler/babel')        Comp
    (require 'src/component/main/run/transpiler/coffeescript') Comp
    
    @runs = 
      # Default
      'html':      (o)  -> _this.runDefaultHtml o
      'css':       (o)  -> _this.runDefaultCss o
      'js':        (o)  -> _this.runDefaultJs o
      # Markdown
      'md':        (o)  -> _this.runMarkdownMarked o
      # Template
      'jade':      (o)  -> _this.runTemplateJade o
      # Preprocessor
      'less':      (o)  -> _this.runPreprocessorLess o
      'sass':      (o)  -> _this.runPreprocessorSass o
      'styl':      (o)  -> _this.runPreprocessorStylus o
      # Transpiler
      'babel.js':  (o)  -> _this.runTranspilerBabel o
      'ts':        (o)  -> _this.runTranspilerTypescript o
      'cs':        (o)  -> _this.runTranspilerCoffeescript o
      'ls':        (o)  -> _this.runTranspilerLivescript o
    # ? Make
    $ '#content__run' .click !-> _this.runFront {}
    $ '#content__run__auto' .iCheck checkboxClass: 'icheckbox_minimal-blue'
    # ?
  
  # @params  o:{ type:S, entity:S, file:S, ?src:S, ?ext:S, ?export:F }
  Comp::run = (o) -> # 
    _this = @; @action type: 'RUN'
    input  = @inputFind do
      entity: o.entity
      file:   o.file
    params =
      type:   o.type
      entity: o.entity
      name:   input.name
      src:    o.src    || input.src
      run:    o.ext    || input.ext
      export: o.export || false
    @runs[params.run] params
  
  # @params  o:{ ?export:F }
  Comp::runFront = (o) !-> # 
    _this = @; @action type: 'RUN_FRONT'
    input          = @inputGet entity: 'html'
    output         = @outputGetProps!
    exts_input     = @runGetTagList content: input.src, tag: '[data-ext]', attr: 'data-ext'
    # .. get [data-id] from dom, then ..
    exts           = @inputGetExts exts: exts_input
    isExtsLoaded   = @scriptIsExtsLoaded exts: exts
    
    cb  = !->
      exts         = _this.inputGetExts exts: exts_input
      isExtsLoaded = _this.scriptIsExtsLoaded exts: exts
      name         = if (_this.optionRunGetMode! == 'index') then 'index' else input.name
      if isExtsLoaded
        _this.run do
          type:   output.result
          entity: 'html'
          file:   name
          export: o.export || false
    
    if isExtsLoaded
      cb!
    else
      @scriptLoadExts exts: exts, cb: cb
  
  # @params  o:{ type:S }
  Comp::runDisplay = (o) !-> 
    _this = @; @action type: 'RUN_DISPLAY'
    o.result = o.type
    @outputRun o
  
  # @params  o:{ files:[], entity:S }
  Comp::runConcatFiles = (o) -> 
    _this = @; @action type: 'RUN_CONCAT_FILES'
    str = ''
    for let fileOutput in o.files
      fileInput = @inputFind entity: o.entity, file: fileOutput
      str += fileInput.src + '\r\n'
    str
  
  Comp::runIsAuto = (o) -> 
    _this = @; @action type: 'RUN_IS_AUTO'
    $ '#content__run__auto'  .prop 'checked'

  # @vendors dom, dpa
  # @params  o:{ content:S, tag:S, attr:S }
  Comp::runGetTagList = (o) -> 
    _this = @; @action type: 'RUN_GET_TAG_LIST'
    dom  = (new DOMParser!).parseFromString o.content, 'text/html'
    tags = dom.querySelectorAll (o.tag)
    list = []
    for let el, i in tags
      list.push el.attributes[o.attr].nodeValue
    list

module.exports = _Component
