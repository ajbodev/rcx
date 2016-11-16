
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jszip|jsz
  # @methods exportData {
  #   Json, Zip, FilterList
  # }
  
  Comp::exportDataJson = (o) !-> 
    _this = @; @action type: 'EXPORT_DATA_JSON'
    cb = (list) !->
      list = _this.exportDataFilterList list: list
      blob = JSON.stringify list, null, 2
      _this.export blob: blob, name: 'data', ext: 'json'
    @dataFindAll cb: cb
  
  # @vendors jsz
  Comp::exportDataZip = (o) !-> 
    _this = @; @action type: 'EXPORT_DATA_ZIP'
    zip = new JSZip!
    cb = (list) !->
      list = _this.exportDataFilterList list: list
      for let el, i in list
        for let entity in ['html' 'css' 'js']
          for let j, file of (JSON.parse el['input_' + entity])
            zip.file el.id + '/' + file.name + '.' + file.ext, file.src
      blob = zip.generate type: 'blob'
      _this.export blob: blob, name: 'data', ext: 'zip'
    @dataFindAll cb: cb
  
  # @params  o:{ list:[] }
  Comp::exportDataFilterList = (o) -> 
    _this = @; @action type: 'EXPORT_DATA_FILTER_LIST'
    list     = []
    selected = @selected!
    if selected.length == 0
      list = o.list
    else
      for el, i in o.list
        id = el.id
        if (selected.indexOf (el.id + '')) != -1
          list.push el
    list
      

module.exports = _Component
