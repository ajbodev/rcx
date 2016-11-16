
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods importData {
  #   Json
  # }
  
  Comp::importDataJson = (o) !-> @importDataJsonJs o
  
  # @params  o:{ entity:S, file:S }
  Comp::importDataJson = (o) !-> 
    _this = @; @action type: 'IMPORT_DATA_JSON'
    list  = JSON.parse o.file
    cb    = !->
      _this.elementRefresh!
    @dataImportTable list: list, cb: cb

module.exports = _Component
