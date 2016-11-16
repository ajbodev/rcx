
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods input {
  #   Get, GetExts,
  #   Select, Create, Update, Destroy, Find, FindAll, Reset,
  #   MakeContainer,
  #   OnFileChange, OnFileCreate, OnFileCreateModal,
  #   OnExtChange, OnModeChange, OnEditorChange, OnLintChange,
  #   Run, Save, Load, LoadFiles, LoadAuto, LoadFilesAuto, LoadOthersAuto
  # }
  
  Comp::initInput = !->
    _this = @; @action type: 'INIT_INPUT'
    for let el, i in ['html' 'css' 'js']
      @inputMakeContainer do
        entity: el
        editor: @props.main.editors.inputs[el]
        file:   @props.main.files.inputs[el]
        ext:    @props.main.exts.inputs[el]
        mode:   @props.main.modes.inputs[el]
      @inputReset entity: el
    # ?
    @typing = 0;
    # ?
   
  # @params  o:{ entity:S }
  Comp::inputGet = (o) -> 
    _this = @; @action type: 'INPUT_GET'
    input = @inputs[o.entity][@input[o.entity]]
    name: input.name
    src:  input.src
    ext:  input.ext
    mode: input.mode
   
  # @params  o:{ ?exts:[S] }
  Comp::inputGetExts = (o) -> 
    _this = @; @action type: 'INPUT_GET_EXTS'
    _exts = {}; exts = []
    for let i, el of @inputs
      for let j, el_j of @inputs[i]
        _exts[el_j.ext] = ''
    if o.exts
      for let i, ext of o.exts
        _exts[ext] = ''
    for let i, el of _exts
      exts.push i
    exts
   
  # @params  o:{ entity:S, file:S }
  Comp::inputSelect = (o) !-> 
    _this = @; @action type: 'INPUT_SELECT'
    @input[o.entity] = o.file
    file = @inputs[o.entity][o.file]
    @fileSetValue   context: 'inputs', entity: o.entity, value: file.name
    @extSetValue    context: 'inputs', entity: o.entity, value: file.ext
    @modeSetValue   context: 'inputs', entity: o.entity, value: file.mode
    @editorSetMode  context: 'inputs', entity: o.entity, value: file.mode
    @editorSetValue context: 'inputs', entity: o.entity, value: file.src
    @lintSetValue   context: 'inputs', entity: o.entity, value: false
   
  # @params  o:{ entity:S, file:S, ?src:S, ?ext:S, ?mode:S }
  Comp::inputCreate = (o) !-> 
    _this = @; @action type: 'INPUT_CREATE'
    _sample = 'Template - HTML, CSS, JS'
    sample  = @samples[_sample]['input_' + o.entity]['index']
    @inputs[o.entity][o.file] = do
      name: o.file
      src:  o.src  || '\r\n\r\n' # sample.src
      ext:  o.ext  || sample.ext
      mode: o.mode || sample.mode
    @fileCreate context: 'inputs', entity: o.entity, value: o.file
   
  # @params  o:{ entity:S, file:S, ?name:S, ?src:S, ?ext:S, ?mode:S }
  Comp::inputUpdate = (o) !-> 
    _this = @; @action type: 'INPUT_UPDATE'
    file = o.file || @fileGetValue entity: o.entity
    inputFile = @inputs[o.entity][file]
    if inputFile
      if o.name
        inputFile.name = o.name || o.file
      if o.src
        inputFile.src  = o.src
      if o.ext
        inputFile.ext  = o.ext
        @editorSetMode context: 'inputs', entity: o.entity, ext: o.ext
        mode = @editorGetMode context: 'inputs', entity: o.entity
        inputFile.mode = mode
        @modeSetValue context: 'inputs', entity: o.entity,  value: mode
      if o.mode
        inputFile.mode = o.mode
        @editorSetMode context: 'inputs', entity: o.entity, value: o.mode
      # ? lint
      @inputSave!
   
  # @params  o:{ entity:S, file:S }
  Comp::inputDestroy = (o) !-> 
    _this = @; @action type: 'INPUT_DESTROY'
    if o.file != 'index'
      delete @inputs[o.entity][o.file]
      @fileDestroy context: 'inputs', entity: o.entity, value: o.file
      @inputSelect entity: o.entity, file: 'index'
    else
      _this = @; @action type: 'INIT_INDEX CANNOT BE DELETED'
   
  # @params  o:{ entity:S, file:S }
  Comp::inputFind = (o) -> 
    _this = @; @action type: 'INPUT_FIND'
    @inputs[o.entity][o.file]
   
  # @params  o:{ entity:S }
  Comp::inputFindAll = (o) -> 
    _this = @; @action type: 'INPUT_FIND_ALL'
    inputs = @inputs[o.entity]
    inputs
   
  # @params  o:{ entity:S }
  Comp::inputReset = (o) !-> 
    _this = @; @action type: 'INPUT_RESET'
    @fileClear  context: 'inputs', entity: o.entity
    @fileCreate context: 'inputs', entity: o.entity, value: 'index'
    _sample = 'Template - HTML, CSS, JS'
    sample = @samples[_sample]['input_' + o.entity]['index']
    @input[o.entity]  = 'index'
    @inputs[o.entity] = index: 
      name: sample.name
      src:  '\r\n\r\n' #sample.src
      ext:  sample.ext
      mode: sample.mode
    @inputSelect entity: o.entity, file: 'index'
   
  # @params  o:{ entity:S, editor:{}, file:{}, ext:{}, mode:{} }
  Comp::inputMakeContainer = (o) !-> 
    _this = @; @action type: 'INPUT_MAKE_CONTAINER'
    context = 'inputs'
    @editors[context][o.entity] = @editorMakeContainer o.editor
    @files[context][o.entity]   = @fileMakeContainer   o.file
    @exts[context][o.entity]    = @extMakeContainer    o.ext
    @modes[context][o.entity]   = @modeMakeContainer   o.mode
     
  # @params  o:{ entity:S, value:S }
  Comp::inputOnFileChange = (o) -> 
    _this = @; @action type: 'INPUT_ON_FILE_CHANGE'
    if o.value != ''
      @inputSelect entity: o.entity, file: o.value
    else 
      o.value = 'index'
    o.value
     
  # @params  o:{ entity:S, value:S }
  Comp::inputOnFileCreate = (o) -> 
    _this = @; @action type: 'INPUT_ON_FILE_CREATE'
    @inputCreate entity: o.entity, file: o.value
    value: o.value, label: o.value
     
  # @params  o:{ entity:S, file:S }
  Comp::inputOnFileCreateModal = (o) !-> 
    _this = @; @action type: 'INPUT_ON_FILE_CREATE_MODAL'
    if !@inputs[o.entity][o.file]
      @inputCreate entity: o.entity, file: o.file
      @inputSelect entity: o.entity, file: o.file
     
  # @params  o:{ entity:S, value:S }
  Comp::inputOnExtChange = (o) -> 
    _this = @; @action type: 'INPUT_ON_EXT_CHANGE'
    file = @fileGetValue context: 'inputs', entity: o.entity
    _sample = 'Template - HTML, CSS, JS'
    sample = @samples[_sample]['input_' + o.entity]['index']
    if o.value != ''
      @inputUpdate entity: o.entity, file: file, ext: o.value
    else 
      o.value = sample.ext
    o.value
     
  # @params  o:{ entity:S, value:S }
  Comp::inputOnModeChange = (o) -> 
    _this = @; @action type: 'INPUT_ON_MODE_CHANGE'
    file = @fileGetValue context: 'inputs', entity: o.entity
    _sample = 'Template - HTML, CSS, JS'
    sample = @samples[_sample]['input_' + o.entity]['index']
    if o.value != ''
      @inputUpdate entity: o.entity, file: file, mode: o.value
    else 
      o.value = sample.mode
    o.value
     
  # @params  o:{ entity:S, value:S }
  Comp::inputOnEditorChange = (o) !-> 
    _this = @; @action type: 'INPUT_ON_EDITOR_CHANGE'
    file  = @fileGetValue   context: 'inputs', entity: o.entity
    value = @editorGetValue context: 'inputs', entity: o.entity
    @inputUpdate entity: o.entity, file: file, src: value
    @inputSave   entity: o.entity
    @inputRun    entity: o.entity
    # ? debounce
    #@typing = true
    #if @typing then setTimeout (!-> _this.typing = false), 3000
    @debounces.inputs[o.entity] = true
    setTimeout (!-> _this.debounces.inputs[o.entity] = false), 3000
    @inputTyping!
    # ? debounce
   
  # @params  o:{ entity:S, value:S }
  Comp::inputTyping = (o) !-> 
    _this = @; @action type: 'INPUT_TYPING'
    # ?
    @typing++
    setTimeout (!-> 
      if _this.typing > 0
        _this.typing--
    ), 1000
    # ?
 
  # @params  o:{ entity:S, value:S }
  Comp::inputOnLintChange = (o) !-> 
    _this = @; @action type: 'INPUT_ON_LINT_CHANGE'
    @editorToggleLint context: 'inputs', entity: o.entity, state: o.value
   
  Comp::inputSave = (o) !-> 
    _this = @; @action type: 'INPUT_SAVE'
    if @saveIsAuto && @saveIsAuto! 
      setTimeout (!-> _this.saveById!), 300
   
  # @params  o:{ entity:S }
  Comp::inputRun = (o) !-> 
    _this = @; @action type: 'INPUT_RUN'
    if @runIsAuto && @runIsAuto! 
      setTimeout (!-> _this.runFront entity: o.entity), 300
   
  # @params  o:{ inputs:{} }
  Comp::inputLoad = (o) !-> 
    _this = @; @action type: 'INPUT_LOAD'
    for let entity, files of o.inputs
      @inputs[entity] = files
      @inputLoadFiles entity: entity, files: files
      #@inputLoadExts entity: entity
      #@inputLoadModes entity: entity
      #@inputLoadEditors entity: entity
      @inputSelect    entity: entity, file:  'index'
     
  # @params  o:{ entity:S, files:{} }
  Comp::inputLoadFiles = (o) !-> 
    _this = @; @action type: 'INPUT_LOAD_FILES'
    @fileClear context: 'inputs', entity: o.entity
    for let file, props of o.files
      @fileCreate context: 'inputs', entity: o.entity, value: file
   
  # @params  o:{ inputs:{} }
  Comp::inputLoadAuto = (o) !-> 
    _this = @; @action type: 'INPUT_LOAD_AUTO'
    for let entity, files of o.inputs
      # ?
      #@inputs[entity] = files # ?
      @inputs[entity] = {}
      for let file, props of files
        @inputs[entity][file] = props
      # ?
      @inputLoadFilesAuto entity: entity, files: files
      @inputLoadOthersAuto entity: entity
      #@inputSelect    entity: entity, file:  'index'
     
  # @params  o:{ entity:S, files:{} }
  Comp::inputLoadFilesAuto = (o) !-> 
    _this = @; @action type: 'INPUT_LOAD_FILES_AUTO'
    filesGlobal = o.files
    filesLocal  = @fileList context: 'inputs', entity: o.entity
    for let file, props of filesGlobal
      @fileCreate context: 'inputs', entity: o.entity, value: file
    for let file, props of filesLocal
      if !(filesGlobal.hasOwnProperty file)
        @fileDestroy context: 'inputs', entity: o.entity, value: file
        @inputSelect entity: o.entity, file:  'index'
     
  # @params  o:{ entity:S }
  Comp::inputLoadOthersAuto = (o) !-> 
    _this = @; @action type: 'INPUT_LOAD_EDITORS_AUTO'
    for let entity, props of @inputs # html, css, js
      input      = @input[entity]
      input_src  = @inputs[entity][input].src
      input_ext  = @inputs[entity][input].ext
      input_mode = @inputs[entity][input].mode
      editor_val = @editorGetValue context: 'inputs', entity: entity
      ext_val    = @extGetValue    context: 'inputs', entity: entity
      mode_val   = @modeGetValue   context: 'inputs', entity: entity
      if input_src != editor_val
        # ? debounce
        if !@debounces.inputs[o.entity] && (@typing == 0) # AND IS NOT TYPING!
          @editorSetValue context: 'inputs', entity: entity, value: input_src
        # ? debounce
      if input_ext != ext_val
        @extSetValue    context: 'inputs', entity: entity, value: input_ext
        @editorSetMode  context: 'inputs', entity: entity, ext: input_ext
      if input_mode != mode_val
        @modeSetValue   context: 'inputs', entity: entity, value: input_mode

module.exports = _Component
