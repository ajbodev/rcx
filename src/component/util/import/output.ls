
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods importOutput {
  #   Editor, Frame
  # }
  
  # @params  o:{ entity, file }
  Comp::importOutputFrame = (o) !-> 
    _this = @; @action type: 'IMPORT_OUTPUT_FRAME'
    @frameWrite write: o.file
  
  # @params  o:{ entity, file }
  Comp::importOutputEditor = (o) !-> 
    _this = @; @action type: 'IMPORT_OUTPUT_EDITOR'
    @editorSetValue context: 'outputs', entity: 'index', value: o.file

module.exports = _Component
