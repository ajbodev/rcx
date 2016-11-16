
Store     = (o) !-> # db_url, table
  @db_url = o.db_url
  @table  = o.table  || null
Store::   =
  constructor: Store
  
  create: (attrs, cb) !-> # cb item{}
    _this = @
    $.post @db_url + '/create', attrs, (item, status, xhr, dataType) !->
      _this._response item, type, cb

  find: (id, cb) !-> # cb item{}
    _this = @
    $.get @db_url + '/find/' + id, (item, status, xhr, dataType) !->
      _this._response item, type, cb

  findAll: (cb) !-> # cb items[]
    _this = @
    $.get @db_url + '/find-all/', (data, status, xhr, dataType) !->
      _this._response data, type, cb

  update: (id, attrs, cb) !-> # cb item{}
    _this = @
    attrs.id = id
    $.post @db_url + '/update', attrs, (item, status, xhr, dataType) !->
      _this._response item, type, cb

  destroy: (id, cb) -> # cb id
    _this = @
    $.post @db_url + '/destroy', id: id, (item, status, xhr, dataType) !->
      _this._response item, type, cb
  
  groupByKey: (key, cb) !-> # cb group{}
    _this = @
    @findAll (data) !->
      group = {}
      for let el, i in data
        group[el[key]] = count: 0
      for let index, obj of group
        for let el, i in data
          if el[key] == index
            group[index].count++
      if cb then cb group
    
  importTable: (table, cb) !-> # cb!
    _this = @
    table = JSON.stringify table
    $.post @db_url + '/import-table', table: table, !->
      cb! if cb
    
  importDb: (db, cb) !-> # cb!
    _this = @
    db = JSON.stringify db
    $.post @db_url + '/import-db', db: db, !->
      cb! if cb
    
  autoload: (component, checked) !->
    _this = @
    load = !->
      console.log 'Autoload', component.id.main
      clearTimeout component.delays.load
      component.loadByIdAuto!
      component.delays.load = setTimeout (!-> load!), 1000
    if component.id && checked
      load!
    else 
      clearTimeout component.delays.load

  _response: (data, type, cb) ->
    _this = @
    if type == 'json'
      cb data if cb
    else
      cb (JSON.parse data) if cb
      

module.exports = Store
