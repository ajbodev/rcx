
Store     = (o) !-> # db_url, table, ?others
  window.db_dexie = new Dexie o.db_url
  window.db_dexie.version 1 .stores do
    data: '++id, name'
  @db_url = window.db_dexie
  @table  = 'data' #o.table
Store::   =
  constructor: Store
  
  create: (attrs, cb) !-> # attrs{}, cb(item{})
    console.log 'A', @db_url
    @db_url[@table].add attrs
    .then (id) !-> 
      attrs.id = id
      item = attrs
      if cb then cb item

  find: (id, cb) !-> # id, cb(item{})
    idInt = parseInt id
    @db_url[@table].get idInt, (item) !-> 
      if cb then cb item

  findByAttr: (attr, value, cb) !-> # attr, value, cb(item{})

  findAll: (cb) !-> # cb(items[{}])
    items = []
    @db_url[@table].each (item) !->
      items.push item
    .then !-> 
      if cb then cb items

  update: (id, attrs, cb) !-> # id, attrs{}, cb(item{})
    idInt    = parseInt id
    attrs.id = idInt
    @db_url[@table].update idInt, attrs
    .then !->
      attrs.id = idInt
      item = attrs
      if cb then cb item

  destroy: (id, cb) !-> # cb(id)
    idInt = parseInt id
    @db_url[@table].delete idInt
    .then !-> 
      id = idInt
      if cb then cb id
    
  importTable: (table, list, cb) !-> # cb()
    _this = @
    @db_url.transaction 'rw', @table, ->
      _this.db_url[_this.table].clear!
    .then !-> 
      for el, i in list
        _this.db_url[_this.table].put el
    .then !-> 
      cb!
  
  groupByKey: (key, cb) !-> # cb(group{})
    _this = @
    group = {}
    @db_url[@table].orderBy key .uniqueKeys!
    .then (keys) ->
      group[''] = count: 0
      for let key, index in keys
        group[key] = 
          count: 0
    .then ->
      _this.db_url[_this.table].each (item) !-> 
        group[item[key] || ''].count++
    .then !-> 
      cb group
  
  autoload: (component, checked) !->
    load = !->
      console.log 'Autoload', component.id
      clearTimeout component.delays.load
      component.loadByIdAuto!
      component.delays.load = setTimeout (!-> load!), 1000
    if component.id && checked
      load!
    else 
      clearTimeout component.delays.load

module.exports = Store
