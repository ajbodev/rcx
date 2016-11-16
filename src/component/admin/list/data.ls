
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors <vendor>|<ven>
  # @methods <context> {
  #   Action
  # }
  
  Comp::listDataMakeContainer =    (o) !-> @listDataMakeContainerDt o
  Comp::listDataMakeHolder =       (o) !-> @listDataMakeHolderJq o
  Comp::listDataGetSelected =      (o)  -> @listDataGetSelectedJq o
  Comp::listDataFormatRows =       (o)  -> @listDataFormatRowsJs o
  Comp::listDataFormatRow  =       (o)  -> @listDataFormatRowJs o
  Comp::listDataGetColumns =       (o)  -> @listDataGetColumnsJs o
  Comp::listDataClearInputs =      (o) !-> @listDataClearInputsJq o
  Comp::listDataRefresh =          (o) !-> @listDataRefreshJs o
  
  Comp::listDataMakeSearchable =   (o) !-> @listDataMakeSearchableJq o
  Comp::listDataMakeRefreshable =  (o) !-> @listDataMakeRefreshableJq o
  Comp::listDataMakeEditable =     (o) !-> @listDataMakeEditableJq o
  Comp::listDataMakeCheckallable = (o) !-> @listDataMakeCheckallableJq o
  
  Comp::listDataMakeContainer = (o) !-> 
    # id, creatable, destroyable, searchable, refreshable, editable, checkallable
    _this = @; @action type: 'LIST_DATA_MAKE_CONTAINER'
    cb = (list) !->
      table = 
        data:           _this.listDataFormatRows  list: list
        columns:        _this.listDataGetColumns!
        order:          [[ 1, 'desc' ]]
      _this.list = $ '#' + o.id .DataTable table
      #_this.elementRefresh!
    if o.searchable   then _this[o.searchable] o
    if o.editable     then _this[o.editable] o
    if o.checkallable then _this[o.checkallable] o
    @elementFindAll cb: cb
  
  Comp::listDataMakeHolder = (o) !-> # id
    $ '#content__list_wrapper' .html '
      <table id="content__list" class="table table-bordered table-hover"></table>
    '
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataGetSelected = (o) ->
    _this = @; @action type: 'LIST_DATA_GET_SELECTED'
    ids = []
    $ '#content__list tbody tr input_checked' .each (key, val) !->
      id = $ @ .attr 'data-id'
      ids.push id
    ids
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataFormatRows = (o) -> # list
    _this = @; @action type: 'LIST_DATA_FORMAT_ROWS' # [] OF {} -> [] OF []
    rows = [] 
    for let item, i in o.list
      row = [
        '<input type="checkbox" data-id="' + item.id + '">'
        '<a onclick="app.component.elementSelectById({id: \'' + item.id + '\'})">' + item.id + '</a>'
        @listDataFormatRow id: item.id, val: (item.name       || ''), attr: 'name'
        @listDataFormatRow id: item.id, val: (item.date       || ''), attr: 'date'
      ]
      rows.push row
    rows
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataFormatRow = (o) -> # id, val, attr
    _this = @; @action type: 'LIST_DATA_FORMAT_ROW'
    '<span data-id="' + o.id + 
    '" data-attr="' + o.attr + 
    '">' + o.val + 
    '</span>'
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataGetColumns = (o) -> # 
    _this = @; @action type: 'LIST_DATA_GET_COLUMNS'
    columns = 
      * title: '<input type="checkbox">', width: '5%', 'orderable': false
      * title: '#', width: '5%'
      * title: 'Name', width: '20%'
      * title: 'Date', width: '5%'
      ...
    columns
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataClearInputs = (o) !-> # 
    _this = @; @action type: 'LIST_DATA_CLEAR_INPUTS'
    $ '#content__list input[type="text"]' .each !-> $ @ .val ''
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataRefresh = (o) !-> # 
    _this = @; @action type: 'LIST_REFRESH'
    @listDataClearInputs o
    @listDataMakeHolder  o
    @listDataMakeContainer do
      id: 'content__list', name: 'index'
      editable: 'listDataMakeEditable' checkallable: 'listDataMakeCheckallable'
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataMakeEditable = (o) !-> # 
    _this = @; @action type: 'LIST_DATA_MAKE_EDITABLE'
    $ '#content__list' .on 'click', 'tbody tr :not(:first-child):not(:nth-child(2))', (e) !->
      td   = $ @
      val  = td .find 'span' .html!
      id   = td .find 'span' .attr 'data-id'
      attr = td .find 'span' .attr 'data-attr'
      $ td .find 'span' .editable do
        type: 'textarea'
        success: (response, val) !->
          attrs = {}
          attrs[attr] = val
          cb   = !-> 
            _this.elementRefresh!
          _this.dataUpdate id: id, attrs: attrs, cb: cb
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataMakeCheckallable = (o) !-> # 
    _this = @; @action type: 'LIST_DATA_MAKE_CHECKALLABLE'
    $ '#content__list' .on 'change', 'thead tr th input[type="checkbox"]:first-child', !->
      if $ @ .is ':checked'
        $ '#content__list tbody tr input_first-child' .each !->
          $ @ .prop 'checked', true
      else
        $ '#content__list tbody tr input_first-child' .each !->
          $ @ .prop 'checked', false
  
  # @vendors  
  # @params  o:{  }
  Comp::listDataMakeSearchable = (o) !-> # 
    _this = @; @action type: 'LIST_DATA_MAKE_SEARCHABLE'
    $ '#content__list__id'   .on 'keyup', !->
      _this.list .column 1 .search @value, regex: true .draw!
    $ '#content__list__name' .on 'keyup', !->
      _this.list .column 2 .search @value, regex: true .draw!
    $ '#content__list__date' .on 'keyup', !->
      _this.list .column 3 .search @value, regex: true .draw!

module.exports = _Component
