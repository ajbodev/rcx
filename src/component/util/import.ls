
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, filereader|frd
  # @methods import {
  #   @, MakeInput, MakeOutput, MakeData
  # }
  
  Comp::initImport = !->
    _this = @; @action type: 'INIT_IMPORT'
    
    (require 'src/component/util/import/input')  Comp
    (require 'src/component/util/import/output') Comp
    (require 'src/component/util/import/data')   Comp
    
    @importMakeInput  entity: 'html'
    @importMakeInput  entity: 'css'
    @importMakeInput  entity: 'js'
    @importMakeOutput entity: 'index'
    @importMakeData!
  
  # @vendors jqy, frd
  # @params  o:{ entity:S }
  Comp::importMakeInput = (o) !-> 
    _this = @; @action type: 'IMPORT_MAKE_INPUT'
    read_as = 
      editor: 'readAsText', json: 'readAsText', zip: 'readAsArrayBuffer'
    $ '#content__input__' + o.entity + '__import' .change !-> 
      format   = _this.formatGetValue context: 'inputs', entity: o.entity
      importer = 
        editor: (o) !-> _this.importInputEditor o
        json:   (o) !-> _this.importInputJson   o
        zip:    (o) !-> _this.importInputZip    o
      reader = new FileReader!
      reader[read_as[format]] @files[0]
      reader.onload = (e) !->
        file   = e.target.result
        importer[format] file: file, entity: o.entity
  
  # @vendors jqy, frd
  # @params  o:{ entity:S }
  Comp::importMakeOutput = (o) !-> 
    _this = @; @action type: 'IMPORT_MAKE_OUTPUT'
    read_as = 
      frame: 'readAsText', editor: 'readAsText', json: 'readAsText', zip: 'readAsArrayBuffer'
    $ '#content__output__index__import' .change !-> 
      format   = _this.resultGetValue context: 'outputs', entity: 'index'
      importer = 
        frame:  (o) !-> _this.importOutputFrame  o
        editor: (o) !-> _this.importOutputEditor o
      reader = new FileReader!
      reader[read_as[format]] @files[0]
      reader.onload = (e) !->
        file   = e.target.result
        importer[format] file: file, entity: 'index'
  
  # @vendors jqy, frd
  # @params  o:{  }
  Comp::importMakeData = (o) !-> 
    _this = @; @action type: 'IMPORT_MAKE_DATA'
    $ '#content__admin__import' .change !-> 
      format   = 'json'
      importer =
        json:   (o) !-> _this.importDataJson o
      reader   = new FileReader!
      reader.readAsText @files[0]
      reader.onload = (e) !->
        file   = e.target.result
        importer[format] file: file

module.exports = _Component
