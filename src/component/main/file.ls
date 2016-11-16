
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors jquery|jqy, selectize|slz
  # @methods file {
  #   MakeContainer, MakeDestroyable, MakeCreatable,
  #   SetValue, GetValue, Clear, List,
  #   Create, Destroy, IsValid, Disable, Enable
  # }

  Comp::initFile = !->
    _this = @; @action type: 'INIT_FILE'
  
  # @params  o:{  }
  Comp::fileIsValid = (o) ->
    _this = @; @action type: 'FILE_IS_VALID'
    # ?
    # ?
    true
  
  # @vendors jqy, slz
  # @params  o:{ 
  #   context:S, entity:S, id:S, options:[], 
  #   ?onChange:S, ?onCreate:S, ?destroyable:S, ?creatable:S
  # }
  # @return  {}
  Comp::fileMakeContainer = (o) -> 
    _this = @; @action type: 'FILE_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        if o.onChange
          value = _this[o.onChange] context: o.context, entity: o.entity, value: value
      create: (value) ->
        if o.onCreate
          _this[o.onCreate] context: o.context, entity: o.entity, value: value
    if o.destroyable
      @fileMakeDestroyable do
        context: o.context, entity: o.entity
        id: o.id + '__destroy', destroyable: o.destroyable
    if o.creatable
      @fileMakeCreatable do
        context: o.context, entity: o.entity
        id: o.id + '__create', creatable: o.creatable
    $ '#' + o.id .selectize (config!) .0 .selectize
  
  # @vendors jqy
  # @params  o:{ context:S, entity:S, id:S, destroyable:S }
  Comp::fileMakeDestroyable = (o) !-> 
    _this = @; @action type: 'FILE_MAKE_DESTROYABLE'
    $ '#' + o.id .click !-> 
      file = _this.fileGetValue context: o.context, entity: o.entity
      _this[o.destroyable] context: o.context, entity: o.entity, file: file
  
  # @vendors jqy
  # @params  o:{ context:S, entity:S, id:S, destroyable:S }
  Comp::fileMakeCreatable = (o) !-> 
    _this = @; @action type: 'FILE_MAKE_CREATABLE'
    $ '#' + o.id + '__button' .click !-> 
      $ '#' + o.id + '__modal' .modal 'hide'
      file = $ '#' + o.id + '__text' .val!
      _this[o.creatable] context: o.context, entity: o.entity, file: file
      $ '#' + o.id + '__text' .val ''
  
  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::fileSetValue = (o) !-> 
    _this = @; @action type: 'FILE_SET_VALUE'
    @files[o.context][o.entity].setValue o.value, ->
  
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  # @return  S
  Comp::fileGetValue = (o) -> 
    _this = @; @action type: 'FILE_GET_VALUE'
    @files[o.context][o.entity].getValue!
  
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::fileClear = (o) !-> 
    _this = @; @action type: 'FILE_CLEAR'
    @files[o.context][o.entity].clearOptions!
  
  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  # @return  [{}]
  Comp::fileList = (o) -> 
    _this = @; @action type: 'FILE_LIST'
    @files[o.context][o.entity].options
  
  # @vendors slz
  # @params  o:{ context:S, entity:S, value:S }
  Comp::fileCreate = (o) !-> 
    _this = @; @action type: 'FILE_CREATE'
    @files[o.context][o.entity].addOption value: o.value, label: o.value
  
  # @vendors slz
  # @params  o:{ context:S, entity:S, ?value:S }
  Comp::fileDestroy = (o) !-> 
    _this = @; @action type: 'FILE_DESTROY'
    value = o.value || @fileGetValue context: o.context, entity: o.entity
    if value != 'index'
      @files[o.context][o.entity].removeOption value
    else
      _this = @; @action type: 'INDEX CANNOT BE DELETED!'
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::fileEnable = (o) !-> 
    _this = @; @action type: 'FILE_ENABLE'
    @files[o.context][o.entity].enable!
    
  # @vendors slz
  # @params  o:{ context:S, entity:S }
  Comp::fileDisable = (o) !-> 
    _this = @; @action type: 'FILE_DISABLE'
    @files[o.context][o.entity].disable!

module.exports = _Component
