
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy
  # @methods header {
  #   Set, SetIdName, SetSaveLoad, SetEditModal
  # }
  
  Comp::initHeader = !->
    _this = @; @action type: 'INIT_HEADER'
  
  # @params  o:{ ?id:S, ?name:S }
  Comp::headerSet = (o) !-> # 
    _this = @; @action type: 'HEADER_SET:'
    @headerSetIdName   id:   (o.id || @id), name: (o.name || @name)
    @headerSetSaveLoad save: (o.id || @id), load: (o.id || @id)
  
  # @vendors jqy
  # @params  o:{ ?id:S, ?name:S }
  Comp::headerSetIdName = (o) !-> 
    _this = @; @action type: 'HEADER_SET_ID_NAME'
    id   = if (o.id || @id) then (o.id || @id) + ' : ' else ''
    name = if (o.name || @name) then (o.name || @name) else ''
    $ '#header__id' .html (id + name)
    # ?
    $ '#content__admin__select__edit__text' .val name
    # ?
  
  # @vendors jqy
  # @params  o:{ ?save:B, ?load:B }
  Comp::headerSetSaveLoad = (o) !-> 
    _this = @; @action type: 'HEADER_SET_SAVE_LOAD'
    save = if (o.save || @id) then false else true
    load = if (o.load || @id) then false else true
    $ '#content__save' .prop 'disabled', save
    $ '#content__load' .prop 'disabled', load
    if save then @saveAutoDisable! else @saveAutoEnable!
    if load then @loadAutoDisable! else @loadAutoEnable!
  
  # @vendors jqy
  # @params  o:{ id:S, ?value:S }
  Comp::headerSetEditModal = (o) !-> 
    _this = @; @action type: 'HEADER_SET_MODAL_CLONE'
    value = o.value || (@id + ' : ' + @name)
    $ '#content__admin__select__' + o.id + '__text' .val value

module.exports = _Component
