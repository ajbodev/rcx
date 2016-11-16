
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors dom|dom, domparser|dpa
  # @methods output {
  #   Run RunFrame, !ContentInner, RunEditor, GetProps, Reset,
  #   MakeContainerFrame, MakeContainerEditor,
  #   OnResultChange, OnUrlhashChange, OnUrlhashCreate,
  #   OnExtChange, OnModeChange, OnLintChange
  # }
  
  Comp::initOutput = !->
    _this = @; @action type: 'INIT_OUTPUT'
    
    @results.outputs.index = @resultMakeContainer @props.main.result.outputs.index
    @resultSetValue context: 'outputs', entity: 'index', value: 'frame'
    
    @exts.outputs.index = @extMakeContainer @props.main.exts.outputs.index
    @extSetValue context: 'outputs', entity: 'index', value: 'html'
    
    @modes.outputs.index = @modeMakeContainer @props.main.modes.outputs.index
    @modeSetValue context: 'outputs', entity: 'index', value: 'text/html'
    
    @outputMakeContainerFrame!
  
  # @params  o:{ src:S, ext:S, result:S, files:[], ?script, ?style, ?content }
  Comp::outputRun = (o) !-> 
    _this = @; @action type: 'OUTPUT_RUN'
    results = 
      frame:   !-> _this.outputRunFrame  o
      editor:  !-> _this.outputRunEditor o
    results[o.result]!
    
  # @params  o:{ src:S, ?export:F, ?editor:B }
  Comp::outputRunFrame = (o) !-> 
    _this = @; @action type: 'OUTPUT_RUN_FRAME'
    content  = o.src
    # ? cb for import / include (id)
    # ?
    if o.src
      #content = @include content: content, entity: 'html', tag: 'div'
      content = @include content: content, entity: 'html', tag_end: ':not(script):not(style)'
      content = @requireHead content: content
      
      content = @include content: content, entity: 'css',  tag: 'style'
      content = @include content: content, entity: 'js',   tag: 'script'
      content = @require content: content, entity: 'js',   tag: 'script'
    if o.export
      o.export src: content
    else if o.editor
      # ?
      ext  = @extGetValue context: 'outputs', entity: 'index'
      actions = 
        'html': (content) -> content
        'css':  (content) -> _this.outputContentInner content: content, tag: 'style'
        'js':   (content) -> _this.outputContentInner content: content, tag: 'script'
      content = actions[ext](content)
      @editorSetValue context: 'outputs', entity: 'index', value: content
      # ?
    else
      @frameWrite write: content
      @frameMakeUrlhashListenable onHashChange: !->
        hashurl = @window.location.hash
        _this.urlhashCreate context: 'outputs', entity: 'index', value: hashurl
    
  # @params  o:{ content:S, tag:S }
  Comp::outputContentInner = (o) -> 
    _this = @; @action type: 'RUN_GET_TAG_LIST'
    dom     = (new DOMParser!).parseFromString o.content, 'text/html'
    tags    = dom.querySelectorAll (o.tag)
    content = []
    for let el, i in tags
      content.push el.innerHTML
    content.join ''
    
  # @params  o:{ editor:B }
  Comp::outputRunEditor = (o) !-> 
    _this = @; @action type: 'OUTPUT_RUN_EDITOR'
    #@extSetValue    context: 'outputs', entity: 'index', value: 'html'
    #@editorSetMode  context: 'outputs', entity: 'index', ext:   'html'
    #@modeSetValue   context: 'outputs', entity: 'index', ext:   'text/html'
    o.editor = true
    @outputRunFrame o
    
  Comp::outputGetProps = (o) -> 
    _this = @; @action type: 'OUTPUT_GET_PROPS'
    props = 
      result: @resultGetValue context: 'outputs', entity: 'index'
      ext:    @extGetValue    context: 'outputs', entity: 'index'
    props
    
  Comp::outputReset = (o) !-> 
    _this = @; @action type: 'OUTPUT_RESET'
    delete @editors.outputs.index
    delete @frames.outputs.index
    delete @urlhashes.outputs.index
    
  Comp::outputMakeContainerFrame = (o) !-> 
    _this = @; @action type: 'OUTPUT_MAKE_CONTAINER_FRAME'
    
    @extSetValue   context: 'outputs', entity: 'index', value: 'html'
    @extDisable    context: 'outputs', entity: 'index'
    @modeSetValue  context: 'outputs', entity: 'index', ext:   'html'
    @modeDisable   context: 'outputs', entity: 'index'
    @lintSetValue  context: 'outputs', entity: 'index', value: false
    @lintDisable   context: 'outputs', entity: 'index'
    
    @frameWriteCustom do
      id:      'content__output__index__holder'
      content: '<iframe id="content__output__index__frame"></iframe>'
    
    @outputReset!
    
    @urlhashes.outputs.index = @urlhashMakeContainer do
      context: 'outputs', entity: 'index'
      id: 'content__output__index__urlhash'
      options: [{value: '#/'}]
      onChange: 'outputOnUrlhashChange', onCreate: 'outputOnUrlhashCreate'
    @urlhashEnable context: 'outputs', entity: 'index'
    @urlhashEnableButton id: 'content__output__index__urlhash__button'
    
  Comp::outputMakeContainerEditor = (o) !-> 
    _this = @; @action type: 'OUTPUT_MAKE_CONTAINER_EDITOR'
    
    @extEnable      context: 'outputs', entity: 'index'
    @modeEnable     context: 'outputs', entity: 'index'
    @lintEnable     context: 'outputs', entity: 'index'
    @urlhashDisable context: 'outputs', entity: 'index'
    @urlhashClear   context: 'outputs', entity: 'index'
    @urlhashDisableButton id: 'content__output__index__urlhash__button'
    
    @frameWriteCustom do
      id:      'content__output__index__holder'
      content: '<textarea id="content__output__index__editor"></textarea>'
    
    @outputReset!
    
    @editors.outputs.index = @editorMakeContainer do
      context: 'outputs', entity: 'index'
      id: 'content__output__index__editor'
      type: 'text/html', ext: 'html'
    
  Comp::outputOnResultChange = (o) !-> 
    _this = @; @action type: 'OUTPUT_ON_RUN_CHANGE'
    run = 
      frame:  !-> _this.outputMakeContainerFrame!
      editor: !-> _this.outputMakeContainerEditor!
    run[o.value]!
    
  # @params  o:{ value:S }
  Comp::outputOnUrlhashChange = (o) !-> 
    _this = @; @action type: 'OUTPUT_ON_URLHASH_CHANGE'
    @frameSetUrlhash value: o.value
    
  # @params  o:{ value:S }
  Comp::outputOnUrlhashCreate = (o) -> 
    _this = @; @action type: 'OUTPUT_ON_URLHASH_CREATE'
    woHashUrl = o.value.lastIndexOf '#/', 0 == 0
    if woHashUrl then o.value = '#/'
    value: o.value, label: o.value
    
  # @params  o:{ entity:S, value:S }
  Comp::outputOnExtChange = (o) -> 
    _this = @; @action type: 'OUTPUT_ON_EXT_CHANGE'
    @modeSetValue  context: 'outputs', entity: 'index', ext: o.value
    @editorSetMode context: 'outputs', entity: 'index', ext: o.value
    o.value
    
  # @params  o:{ entity:S, value:S }
  Comp::outputOnModeChange = (o) -> 
    _this = @; @action type: 'OUTPUT_ON_MODE_CHANGE'
    @editorSetMode context: 'outputs', entity: 'index', value: o.value
    o.value
  
  # @params  o:{ entity:S, value:S }
  Comp::outputOnLintChange = (o) !-> 
    _this = @; @action type: 'OUTPUT_ON_LINT_CHANGE'
    @editorToggleLint context: 'outputs', entity: o.entity, state: o.value

module.exports = _Component
