
# @params  Comp:{src/component}
_Component = (Comp) !-> 
  # @vendors jquery|jqy, selectize|slz, director|dir
  # @methods layout {
  #   Make, MakeContainer, GetValue, SetValue
  #   MatchAliasToTitle, MatchTitleToAlias
  # }
  
  Comp::initLayout = !->
    _this = @; @action type: 'INIT_LAYOUT'
    
    @layoutMake!
  
  # @vendors jqy
  Comp::layoutMake = (o) !-> 
    _this = @; @action type: 'LAYOUT_MAKE'
    layout   = @config.layout
    template = @templates.layout[layout]
    $ '#app' .html ''
    $ '#app' .html template
    @layout = @layoutMakeContainer @props.boot.layout
    @layoutSetValue value: (@layoutMatchAliasToTitle alias: @config.layout)
  
  # @vendors jqy, slz, *dir
  # @params  o:{ id:S, options:[] }
  # @return  {}
  Comp::layoutMakeContainer = (o) -> 
    _this = @; @action type: 'LAYOUT_MAKE_CONTAINER'
    config = ->
      maxItems: 1, valueField: 'value', labelField: 'value', sortField: 'value', searchField: 'value'
      options:  o.options
      onChange: (value) !->
        layout = _this.layoutMatchTitleToAlias title: value
        _this.configSet config: 'layout', props: layout
        if _this.router.destroy then _this.router.destroy!
        _this.init!
      create: false
    $ '#' + o.id .selectize (config!) .0 .selectize
  
  # @vendors slz
  # @return  S
  Comp::layoutGetValue = (o) -> 
    _this = @; @action type: 'LAYOUT_GET_VALUE'
    @layout.getValue!
  
  # @vendors slz
  # @params  o:{ value:S }
  Comp::layoutSetValue = (o) !-> 
    _this = @; @action type: 'LAYOUT_SET_VALUE'
    @layout.setValue o.value, ->
  
  # @params  o:{ alias:S }
  # @return  S
  Comp::layoutMatchAliasToTitle = (o) -> 
    _this = @; @action type: 'LAYOUT_MATCH_ALIAS_TO_TITLE'
    aliases = 
      'split':      'Layout - Split'
      'split_vtab': 'Layout - Split VTab'
      'combined':   'Layout - Combined'
    aliases[o.alias]
  
  # @params  o:{ title:S }
  # @return  S
  Comp::layoutMatchTitleToAlias = (o) -> 
    _this = @; @action type: 'LAYOUT_MATCH_TITLE_TO_ALIAS'
    titles = 
      'Layout - Split':      'split'
      'Layout - Split VTab': 'split_vtab'
      'Layout - Combined':   'combined'
    titles[o.title]

module.exports = _Component
