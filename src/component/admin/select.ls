
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods sample {
  #   MakeContainer, MakeRefreshable, MakeDestroyable,
  #   MakeCreatable, MakeUpdatable, MakeClonable,
  #   MakeReplaceable,
  #   SetValue, GetValue, Clear,
  #   Create, Destroy,
  #   RenderValue, RenderOption, Reset
  # }
  
  Comp::initSelect = !->
    _this = @; @action type: 'INIT_SELECT'
  
  # @vendors jqy, slz
  # @params  o:{ id:S, options_clone:[], ?onChange:S, ?onCreate:S, ?destroyable:S, ?clonable:S, ?creatable:S }
  # @return  {}
  Comp::selectMakeContainer = (o) -> 
    _this = @; @action type: 'SELECT_MAKE_CONTAINER'
    config = ->
      valueField: 'id', labelField:   'name', 
      sortField:  'id', searchField:   ['id' 'name'], 
      options:    [],   sortDirection: 'desc' 
      maxItems:   1, 
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] value: value
      create: (value) ->
        if o.onCreate
          value = _this[o.onCreate] value: value
      render: 
        item: (item, escape) ->
          _this.selectRenderValue item: item 
        option: (item, escape) ->
          _this.selectRenderOption item: item 
    if o.refreshable
      @selectMakeRefreshable do
        id: o.id + '__refresh', refreshable: o.refreshable
    if o.creatable
      @selectMakeCreatable do
        id: o.id + '__create', creatable: o.creatable
    if o.updatable
      @selectMakeUpdatable do
        id: o.id + '__edit', id_edit: o.id, updatable: o.updatable
    if o.clonable
      @selectMakeClonable do
        id: o.id + '__clone', id_edit: o.id, clonable: o.clonable, options: o.options_clone
    if o.replaceable
      @selectMakeReplaceable do
        id: o.id + '__replace', id_edit: o.id, replaceable: o.replaceable
    if o.destroyable
      @selectMakeDestroyable do
        id: o.id + '__destroy', destroyable: o.destroyable
    $ '#' + o.id .selectize (config!) .0 .selectize
  
  # @vendors slz
  # @params  o:{ id:S, refreshable:S }
  Comp::selectMakeRefreshable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_REFRESHABLE'
    $ '#' + o.id .click !-> 
      cb = !-> 
      _this[o.refreshable] cb: cb
  
  # @vendors slz
  # @params  o:{ id:S, destroyable:S }
  Comp::selectMakeDestroyable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_DESTROYABLE'
    $ '#' + o.id .click !-> 
      value = _this.selectGetValue!
      _this[o.destroyable] id: value
  
  # @vendors slz
  # @params  o:{ id:S, creatable:S }
  Comp::selectMakeCreatable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_CREATABLE'
    $ '#' + o.id + '__button' .click !-> 
      $ '#' + o.id + '__modal' .modal 'hide'
      data = $ '#' + o.id + '__text' .val!
      _this[o.creatable] value: data
      $ '#' + o.id + '__text' .val ''
  
  # @vendors slz
  # @params  o:{ id:S, updatable:S }
  Comp::selectMakeUpdatable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_UPDATABLE'
    $ '#' + o.id + '__button' .click !-> 
      $ '#' + o.id + '__modal' .modal 'hide'
      data = $ '#' + o.id + '__text' .val!
      _this[o.updatable] attrs: {name: data}
      $ '#' + o.id + '__text' .val ''
  
  # @vendors slz
  # @params  o:{ id:S, id_edit:S, clonable:S, ?options:[] }
  Comp::selectMakeClonable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_CLONABLE'
    $ '#' + o.id + '__button' .click !-> 
      $ '#' + o.id_edit + '__edit__modal' .modal 'hide'
      _this[o.clonable] options: o.options
  
  # @vendors slz
  # @params  o:{ id:S, id_edit:S, replaceable:S }
  Comp::selectMakeReplaceable = (o) !-> 
    _this = @; @action type: 'SELECT_MAKE_REPLACEABLE'
    $ '#' + o.id + '__button' .click !-> 
      $ '#' + o.id_edit + '__edit__modal' .modal 'hide'
      _this[o.replaceable] {}
  
  # @vendors slz
  # @params  o:{ value:S }
  Comp::selectSetValue = (o) !-> 
    _this = @; @action type: 'SELECT_SET_VALUE'
    @select.setValue o.value, ->
  
  # @vendors slz
  # @return  S
  Comp::selectGetValue = (o) -> 
    _this = @; @action type: 'SELECT_GET_VALUE'
    @select.getValue!
  
  # @vendors slz
  Comp::selectClear = (o) !-> 
    _this = @; @action type: 'SELECT_CLEAR'
    if @select.clearOptions then @select.clearOptions!
  
  # @vendors slz
  Comp::selectCreate = (o) !-> 
    _this = @; @action type: 'SELECT_CREATE'
    @select.addOption o.option

  # @vendors slz
  # @params  o:{ value:S }
  Comp::selectDestroy = (o) !-> 
    _this = @; @action type: 'SELECT_DESTROY'
    @select.removeOption o.value
    
  # @params  o:{ item:{S} }
  # @return  S
  Comp::selectRenderValue = (o) -> 
    _this = @; @action type: 'SELECT_RENDER_VALUE'
    '<div>' + 
    '<span>' + (o.item.id + '').substring(0, 8)   + ' :</span> ' + 
    '<span>' + (o.item.name || '') + '</span> ' + 
    '</div>'
    
  # @params  o:{ item:{S} }
  # @return  S
  Comp::selectRenderOption = (o) -> 
    _this = @; @action type: 'SELECT_RENDER_OPTION'
    '<div>' + 
    '<span>' + (o.item.id + '').substring(0, 8)   + ' :</span> ' + 
    '<span>' + (o.item.name || '') + '</span> ' + 
    '</div>'

  # @vendors slz
  Comp::selectReset = (o) !-> 
    _this = @; @action type: 'SELECT_RESET'
    @select.destroy!
    @select = null
    
module.exports = _Component
