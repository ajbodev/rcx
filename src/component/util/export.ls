
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, moment|mom, blob|blb, filesaver|fsv
  # @methods export {
  #   @, MakeInput, MakeOutput, MakeData
  # }
  
  Comp::initExport = !->
    _this = @; @action type: 'INIT_EXPORT'
    
    (require 'src/component/util/export/input')  Comp
    (require 'src/component/util/export/output') Comp
    (require 'src/component/util/export/data')   Comp
    
    @exportMakeInput  entity: 'html'
    @exportMakeInput  entity: 'css'
    @exportMakeInput  entity: 'js'
    @exportMakeOutput entity: 'index'
    @exportMakeData!
  
  # @vendors mom, blb, fsv
  # @params  o:{ blob:S, name:S, ext:S }
  Comp::export = (o) !-> # 
    _this = @; @action type: 'EXPORT'
    blob = new Blob [o.blob]
    date = (moment! .format 'MMM[]Do-h[]mm[]a')
    name = o.name + '-' + date + '.' + o.ext
    saveAs blob, 'rcx-' + name
  
  # @vendors jqy
  # @params  o:{ entity:S }
  Comp::exportMakeInput = (o) !-> 
    _this = @; @action type: 'EXPORT_MAKE_INPUT'
    $ '#content__input__' + o.entity + '__export' .click !-> 
      format   = _this.formatGetValue context: 'inputs', entity: o.entity
      exporter =
        editor: !-> _this.exportInputEditor o
        json:   !-> _this.exportInputJson   o
        zip:    !-> _this.exportInputZip    o
      exporter[format]!
  
  # @vendors jqy
  Comp::exportMakeOutput = (o) !-> 
    _this = @; @action type: 'EXPORT_MAKE_OUTPUT'
    $ '#content__output__index__export' .click !-> 
      format   = _this.resultGetValue context: 'outputs', entity: 'index'
      exporter =
        frame:  !-> _this.exportOutputFrame  o
        editor: !-> _this.exportOutputEditor o
      exporter[format]!
  
  # @vendors jqy
  Comp::exportMakeData = (o) !-> 
    _this = @; @action type: 'EXPORT_MAKE_DATA'
    $ '#content__admin__export' .click !-> 
      format   = _this.formatGetValue context: 'admin', entity: 'index' # 'json'
      exporter =
        json:   !-> _this.exportDataJson o
        zip:    !-> _this.exportDataZip  o
      exporter[format]!

module.exports = _Component
