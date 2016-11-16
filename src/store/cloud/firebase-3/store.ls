
# @vendors firebase|frb
# @params  { table:S|N, db_url:S|N, others:{} }
Store     = (o) !-> 
  try
    @make     o.others
    @store  = firebase.database!
    @table  = o.table
    @db_url = o.db_url
    @id     = 0
    @list   = []
  catch e
    console.log e
    throw (new Error 'Firebase error!')

Store::   =
  constructor: Store
  # @vendors 
  # @methods {
  #   create, find, findByAttr, findAll, update, destroy
  #   importTable
  #   ?createMany, ?findMany, ?findManyByAttr, 
  #   ?updateMany, ?destroyMany
  # }

  # @vendors frb
  # @params  others:{}
  make: (others) !->
    firebase.initializeApp do
      apiKey:            others.apiKey
      authDomain:        others.authDomain
      databaseURL:       others.databaseURL
      storageBucket:     others.storageBucket
      messagingSenderId: others.messagingSenderId
  
  # @vendors frb
  # @params  attrs:{}, ?cb:F
  create: (attrs, cb) !-> 
    _this = @
    firebase.database!.ref @table .push attrs
    .then (snap) !->
      attrs.id = snap.key
      if cb then cb attrs
    .catch (e) !->
      console.log e
  
  # @vendors frb
  # @params  id:N|S, ?cb:F
  find: (id, cb) !-> 
    _this = @
    firebase.database!.ref @table + '/' + id .once 'value'
    .then (snap) !-> 
      item    = snap.val!
      item.id = id
      if cb then cb item
    .catch (e) !->
      console.log e
  
  # @vendors frb
  # @params  ?cb:F
  findAll: (cb) !-> 
    _this = @
    firebase.database!.ref @table .once 'value'
    .then (snap) !->  
      items = $.map snap.val!, (value, index) -> 
        value.id = index
        [value]
      if cb then cb items
    .catch (e) !->
      console.log e
  
  # @vendors frb
  # @params  attr:N|S, value:N|S, ?cb:F
  findByAttr: (attr, value, cb) !-> 
    _this = @
    # ?
    # ?
  
  # @vendors frb
  # @params  id:N|S, value:N|S, ?cb:F
  update: (id, attrs, cb) !-> 
    _this = @
    _attrs = {}
    for let i, el of attrs
      if i != 'id' then _attrs[i] = el
    firebase.database!.ref @table + '/' + id .update _attrs
    .then (snap) !-> 
      attrs.id = id
      if cb then cb attrs
    .catch (e) !->
      console.log e
  
  # @vendors frb
  # @params  id:N|S, ?cb:F
  destroy: (id, cb) !-> 
    _this = @
    firebase.database!.ref @table + '/' + id .remove!
    .then (snap) !-> 
      if cb then cb id
    .catch (e) !->
      console.log e
  
  # @vendors frb
  # @params  ?table:S, list:[{}], ?cb:F
  importTable: (table, list, cb) !-> 
    _this = @
    o = {}
    for let el, i in list
      o[el.id] = {}
      for let j, el_j of el
        if j != 'id'
          o[el.id][j] = el_j
    firebase.database!.ref @table .update o
    .then !->
      if cb then cb!
    .catch (e) !->
      console.log e
  
module.exports = Store
