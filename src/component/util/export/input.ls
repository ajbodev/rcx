
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jszip|jsz
  # @methods exportInput {
  #   Editor, Json, Zip
  # }
  
  Comp::exportInputEditor = (o) !-> @exportInputEditorJs o
  Comp::exportInputJson =   (o) !-> @exportInputJsonJs o
  Comp::exportInputZip =    (o) !-> @exportInputZipJz o
  
  # @vendors  
  # @params  o:{ entity:S }
  Comp::exportInputEditor = (o) !-> 
    _this = @; @action type: 'EXPORT_INPUT_EDITOR'
    file = @inputGet entity: o.entity
    @export blob: file.src, name: file.ext, ext: file.ext
  
  # @vendors  
  # @params  o:{ entity:S }
  Comp::exportInputJson = (o) !-> 
    _this = @; @action type: 'EXPORT_INPUT_JSON'
    blob = JSON.stringify (@inputs), null, 2
    @export blob: blob, name: 'inputs', ext: 'json'
  
  # @vendors  
  # @params  o:{ entity:S }
  Comp::exportInputZip = (o) !-> 
    _this = @; @action type: 'EXPORT_INPUT_ZIP'
    zip = new JSZip!
    for let input, props of @inputs
      for let j, file of @inputFindAll entity: input
        zip.file file.name + '.' + file.ext, file.src
    blob = zip.generate type: 'blob'
    @export blob: blob, name: 'inputs', ext: 'zip'

module.exports = _Component
