
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @methods date {
  #   Make, Create, Update, Find, FindAll, Destroy, ImportTable
  # }
  
  Comp::initData = !->
    _this = @; @action type: 'INIT_DATA'
  
  # @params  o:{ ?adapter:S, ?params:{} }
  Comp::dataMake = (o) !-> 
    _this = @; @action type: 'DATA_MAKE'
    adapter = o.adapter || 'static'
    params  = 
      db_url: o.params.db_url
      table:  o.params.table
      others: o.params.others
    try
      others = JSON.parse params.others
      params.others = others
    catch e
      console.log 'Can\'t JSON parse others'
    @data   = new @Stores[adapter] params
  
  # @params  o:{ ?attrs:{}, ?cb:F }
  Comp::dataCreate = (o) !-> 
    _this = @; @action type: 'DATA_CREATE'
    attrs      = o.attrs || {}
    attrs.date = @dateGet format: 'DD/MM/YYYY'
    @data.create attrs, o.cb || !->
  
  # @params  o:{ id:N|S, attrs:{}, ?cb:F }
  Comp::dataUpdate = (o) !-> 
    _this = @; @action type: 'DATA_UPDATE'
    @data.update o.id, o.attrs, o.cb || !->
  
  # @params  o:{ id:N|S, ?cb:F }
  Comp::dataFind = (o) !-> 
    _this = @; @action type: 'DATA_FIND'
    @data.find o.id, o.cb || !->
  
  # @params  o:{ ?cb:F }
  Comp::dataFindAll = (o) !-> 
    _this = @; @action type: 'DATA_FIND_ALL'
    @data.findAll o.cb || !->
  
  # @params  o:{ id:N|S, ?cb:F }
  Comp::dataDestroy = (o) !-> 
    _this = @; @action type: 'DATA_DESTROY'
    @data.destroy o.id, o.cb || !->
  
  # @params  o:{ list:[{}], ?cb:F }
  Comp::dataImportTable = (o) !-> 
    _this = @; @action type: 'DATA_IMPORT_TABLE'
    @data.importTable 'main', o.list, o.cb || !->

module.exports = _Component
