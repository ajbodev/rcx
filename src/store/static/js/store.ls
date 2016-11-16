
Store     = (o) !-> 
  @id     = 0
  @list   = []

Store::   =
  constructor: Store
  # @vendors dom|dom, jquery|dom
  # @methods {
  #   create, find, findByAttr, findAll, update, destroy
  #   importTable
  #   ?createMany, ?findMany, ?findManyByAttr, 
  #   ?updateMany, ?destroyMany
  # }
  
  # @params  attrs:{}, ?cb:F
  create: (attrs, cb) !-> 
    if   !attrs.id then attrs.id = ++@id
    else  attrs.id = parseInt attrs.id
    @list.push attrs
    item = attrs
    if cb then cb item
  
  # @params  id:N|S, ?cb:F
  find: (id, cb) !-> 
    item = {}
    idInt = parseInt id
    for let el in @list
      if el.id == idInt then item := el
    if cb then cb item
  
  # @params  ?cb:F
  findAll: (cb) !-> 
    if cb then cb @list  
  
  # @params  attr:N|S, value:N|S, ?cb:F
  findByAttr: (attr, value, cb) !-> 
    item = {}
    for let el in @list
      if el[attr] == value then item := el
    if cb then cb item
  
  # @params  id:N|S, value:N|S, ?cb:F
  update: (id, attrs, cb) !-> 
    item = {}
    idInt = parseInt id
    for let el, i in @list
      if el.id == idInt
        for key of attrs
          if key == 'id' then @list[i][key] = parseInt attrs[key]
          else @list[i][key] = attrs[key]
        item := @list[i]
    if cb then cb item
  
  # @params  id:N|S, ?cb:F
  destroy: (id, cb) !-> 
    item = {}
    index = -1
    idInt = parseInt id
    for let el, i in @list
      if el.id == idInt
        index := i
        item  := el
    if index > -1 then @list.splice index, 1
    id = idInt
    if cb then cb id
  
  # @params  ?table:S, list:[{}], ?cb:F
  importTable: (table, list, cb) !-> 
    @id = 0; @list = []
    for el, i in list
      el.id = ++@id
      @list.push el
    if cb then cb!

  # @vendors dom, jqy
  # @params  others:{}
  _load: (others) !->
    cb = !-> app.component.elementRefresh!
    try
      if (@db_url) && (@others.script) # script
        script     = document.createElement 'script'
        script.src = @db_url
        script.onload = cb
        document.body.appendChild script
      else if (@db_url) # ajax
        $.get @db_url, (list) !->
          if list['data'] then list = list['data']
          app.component.dataImportTable list: list, cb: cb
    catch e
      console.log e
  
module.exports = Store
