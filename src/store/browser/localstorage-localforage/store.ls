
Store     = (o) !-> # db_url, table
  @db_url = localforage.createInstance do
    name:   o.db_url
    driver: localforage.LOCALSTORAGE
  @table  = o.table || null
  @id     = 0
  @init!
Store::   =
  constructor: Store
    
  init: !->
    _this = @
    @db_url.keys! .then (keys) !->
      _this.id = _this._id keys
  
  create: (attrs, cb) !-> # cb item{}
    id       = @id+1
    attrs.id = id
    @db_url.setItem id + '', attrs .then !->
      if cb then cb attrs
  
  find: (id, cb) !-> # cb item{}
    @db_url.getItem id + '' .then (item) !->
      if cb then cb item
  
  findAll: (cb) !-> # cb items[]
    items = []
    @db_url.iterate (value, key, iterationNumber) !->
      items.push value
    .then !->
      if cb then cb items
  
  update: (id, attrs, cb) !-> # cb item{}
    _this = @
    @find id, (item) !->
      for let i, el of attrs
        item[i] = attrs[i]
      _this.db_url.setItem id + '', item .then !->
        if cb then cb attrs
  
  destroy: (id, cb) !-> # cb id
    @db_url.removeItem id + '' .then !->
      if cb then cb id
  
  importTable: (table, list, cb) !-> # cb!
    @id = 0
    for let el, i in list
      @create el
  
  groupByKey: (key, cb) !-> # cb group{}
  
  autoload: (component, checked) !-> 
  
  _id: (keys) ->
    id = Math.max.apply null, keys
    if !(isFinite id) then id = 0
    id

module.exports = Store
