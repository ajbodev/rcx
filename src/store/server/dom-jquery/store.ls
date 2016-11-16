
Store     = (o) !-> # db_url, table
  @db_url = o.db_url
  @table  = o.table  || null
Store::   =
  constructor: Store
  
  create: (attrs, cb) !-> # cb item{}
    @_post attrs, (@db_url + '/create'), cb

  find: (id, cb) !-> # cb item{}
    if id then @_get (@db_url + '/find/' + id), cb

  findAll: (cb) !-> # cb items[]
    @_get (@db_url + '/find-all'), cb

  update: (id, attrs, cb) !-> # cb item{}
    if id 
      attrs.id = id
      @_post attrs, (@db_url + '/update'), cb

  destroy: (id, cb) -> # cb id
    if id then @_post id: id, (@db_url + '/destroy'), cb
  
  groupByKey: (key, cb) !-> # cb group{}
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
    table = JSON.stringify table
    $.post @db_url + '/import-table', table: table, !->
      if cb then cb!
    @_post table: table, (@db_url + '/destroy'), cb
    
  importDb: (db, cb) !-> # cb!
    db = JSON.stringify db
    $.post @db_url + '/import-db', db: db, !->
      if cb then cb!
    @_post db: db, (@db_url + '/import-db'), cb
    
  autoload: (component, checked) !->
    load = !->
      console.log 'Autoload', component.id.main
      clearTimeout component.delays.load
      component.loadByIdAuto!
      component.delays.load = setTimeout (!-> load!), 1000
    if component.id && checked
      load!
    else 
      clearTimeout component.delays.load
      
  _get: (url, cb) !->
    #app.component.response.script_cb = (resp) !-> cb resp
    $.getScript (url + '?cb=script'), !->
      cb app.component.response.script # ~ onload
      
  _post: (attrs, url, cb) !->
    app.component.response.form_cb = (resp) !-> cb resp
    form = $ '
      <form id="_form" style="visibility: hidden;" 
      action="' + url + '?iframe=true" method="POST" target="_form-target">
      </form>
    '
    for let i, el of attrs
      form.append '<input id="_form-' + i + '" name="' + i + '">'
    $ 'body' .append form
    for let i, el of attrs
      $ ('#_form-' + i) .val (el + '')
    form.submit!
    $ '#_form' .remove!

module.exports = Store
