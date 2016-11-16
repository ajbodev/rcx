
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jszip|jsz
  # @methods importInput {
  #   Editor, Json, Zip
  # }
  
  # @params  o:{ entity:S, file:S }
  Comp::importInputEditor = (o) !-> 
    _this = @; @action type: 'IMPORT_INPUT_EDITOR'
    @editorSetValue context: 'inputs', entity: o.entity, value: o.file
  
  # @params  o:{ entity:S, file:S }
  Comp::importInputJson = (o) !-> 
    _this = @; @action type: 'IMPORT_INPUT_JSON'
    inputs = JSON.parse o.file
    @inputLoad inputs: inputs
  
  # @vendors jsz
  # @params  o:{ entity:S, file:S }
  Comp::importInputZip = (o) !-> 
    _this = @; @action type: 'IMPORT_INPUT_ZIP'
    /*
    zip = new JSZip o.file
    inputs = 
      notes: {}
    $.each zip.files, (index, zipEntry) !->
      dot  = index.indexOf '.'
      name = index.substring 0, dot
      src  = zipEntry.asText!
      ext  = index.substring dot + 1, index.length
      if !_this.extIsValid ext: ext then ext = '++.md'
      if name != ''
        inputs.notes[name] = 
          name: name
          src:  src
          ext:  ext
          mode: (_this.modeGetFromExt ext: ext) || 'text/x-markdown'
    if !inputs.notes.index 
      inputs.notes.index = name: 'index', src: '\n\n', ext: '++.md', mode: 'text/x-markdown'
    @inputLoad inputs: inputs
    */

module.exports = _Component
