
props = 
  src:
    id: 'content__admin__src'
    options: [
      {value: 'Static'},{value: 'Browser (LocalStorage)'},{value: 'Browser (IndexedDB)'},
      {value: 'Server (AJAX)'},{value: 'Server (DOM)'},{value: 'Cloud (Firebase 3)'},
    ]
    onChange: 'elementOnSrcChange'
    option_store_id:     'content__option__store__data'
    option_store_inputs: ['db_url', 'table', 'others']
  select:
    id: 'content__admin__select'
    onChange: 'elementOnSelectChange', onCreate: 'elementOnSelectCreate'
    destroyable: 'elementDestroy', refreshable: 'elementRefresh'
    creatable: 'elementOnSelectCreate', updatable: 'elementUpdate', 
    clonable: 'elementClone', replaceable: 'elementReplace'
    options_clone: [
      {value: 'Template - HTML, CSS, JS'}, 
      {value: 'Template - Jade, CSS, JS'},
      {value: 'Clone'},
    ]
  route:
    routes:
      '/id/:id':                 'elementOnRouteById'
      #'/name/?((\w|.)*)':        'elementOnRouteByName'
      '/create':                 'elementOnRouteCreate'
      '/update/:id/?((\w|.)*)':  'elementOnRouteUpdate'
      '/destroy/:id':            'elementOnRouteDestroy'
      '/data/:adapter':          'elementOnRouteData'
      '/meta/?((\w|.)*)':        'elementOnRouteMeta'
      '/meta-script/?((\w|.)*)': 'elementOnRouteMetaScript'
  sample:
    id: 'content__admin__sample'
    options: [
      {value: 'Template - HTML, CSS, JS'}, 
      {value: 'Template - Jade, CSS, JS'},
      {value: 'Clone'},
    ]
    onChange: 'elementOnSampleChange'
  view:
    id: 'content__admin__view'
    options: [{value: 'Tree'}, {value: 'List'}]
    #options: [{value: 'Tree - Data'}, {value: 'List - Data'}, {value: 'List - Input'},]
    onChange: 'elementOnViewChange',
  tree:
    data:
      id:  'content__admin__tree'
      eventable: 'treeDataMakeEventable', searchable: 'treeDataMakeSearchable'
  list:
    data:
      id:  'content__admin__list'
      searchable: 'listDataMakeSearchable'
      editable: 'listDataMakeEditable', checkallable: 'listDataMakeCheckallable'

module.exports = props
