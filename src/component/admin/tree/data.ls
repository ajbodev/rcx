
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors <vendor>|<ven>
  # @methods <context> {
  #   Action
  # }
  
  Comp::treeDataMakeContainer =   (o) !-> @treeDataMakeContainerJt o
  Comp::treeDataMakeEventable =   (o) !-> @treeDataMakeEventableJqJt o
  Comp::treeDataMakeSearchable =  (o) !-> @treeDataMakeSearchableJq o
  Comp::treeDataMakeRefreshable = (o) !-> @treeDataMakeRefreshableJq o
  
  Comp::treeDataRefresh =         (o) !-> @treeDataRefreshJq o
  Comp::treeDataGetMenuFunc =     (o)  -> @treeDataGetMenuFuncJqJt o
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataMakeContainer = (o) -> # 
    _this = @; @action type: 'TREE_DATA_MAKE_CONTAINER'
    config = 
      core: 
        check_callback: true
        strings: 'New node': 'new_node'
      plugins : ['search' 'contextmenu' 'sort']
      contextmenu: items: @treeDataGetMenuFunc!
    $ '#content__tree' .jstree config
    if o.eventable   then _this[o.eventable] o
    if o.searchable  then _this[o.searchable] o
    @elementRefresh!
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataMakeEventable = (o) ->
    _this = @; @action type: 'TREE_DATA_MAKE_EVENTABLE'
    # Select
    $ '#content__tree' .on 'select_node.jstree', (e, elem) ->
      _this.elementSelectById id: elem.node.li_attr.data_id
    # Add / Update
    $ '#content__tree' .on 'rename_node.jstree', (e, elem) ->
      tree = $ '#content__tree' .jstree true
      parent_id = elem.node.parent
      new_id    = elem.text
      if (new_id.substr 0, 3) == '../' # tree backtracking
        parent_id_new = parent_id.substr 0, (parent_id.lastIndexOf '/') # ?
        new_id_new    = new_id.substr 3
        parent_id     = if parent_id_new == '' then '#' else parent_id_new
        new_id        = new_id_new
      id        = parent_id + '/' + new_id
      data_id   = elem.node.li_attr.data_id
      data      = if parent_id == '#' then new_id 
        else (parent_id.substr 14, parent_id.length) + '/' + new_id
      if elem.node.data == null   # Add
        tree.set_id elem.node, id # Set node id
        elem.node.data = data     # Set node data
        attrs = name: data
        cb   = (id) !->
          elem.node.li_attr.data_id = id # Set node id (data)
          _this.elementRefresh!
        _this.elementCreate attrs: attrs, cb: cb
      else # Update
        attrs = name: data
        cb   = !-> # ? same name as parent problem !
          children_parent_old = elem.node.data
          for let el, i in elem.node.children_d
            child      = tree.get_node '#' + el
            child_id   = child.li_attr.data_id
            child_data = child.data
            attrs      = name: child_data.replace children_parent_old, data
            _this.dataUpdate id: child_id, attrs: attrs, cb: !-> 
          _this.elementRefresh!
        _this.dataUpdate id: data_id, attrs: attrs, cb: cb
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataMakeSearchable = (o) ->
    _this = @; @action type: 'TREE_DATA_MAKE_SEARCHABLE'
    searchTimeout = false
    $ '#content__tree__name' .keyup !->
      clearTimeout searchTimeout if searchTimeout
      searchTimeout := setTimeout !->
        $ '#content__tree' .jstree true .search ($ '#content__tree__name' .val!)
      , 250
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataMakeRefreshable = (o) ->
    _this = @; @action type: 'TREE_DATA_MAKE_REFRESHABLE'
    $ '#content__tree__refresh' .click !-> _this.treeDataRefresh!
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataRefresh = (o) !->
    _this = @; @action type: 'TREE_DATA_REFRESH'
    $ '#content__tree' .jstree 'deselect_all'
    cb = (data) !->
      _data = []
      for let item, i in data
        _item = {}
        if item.name
          _text_index     = item.name.lastIndexOf '/'
          _item.id         = 'content__tree_' + item.name
          _item.data       = item.name
          _item.text       = if _text_index > 0 then (item.name.substr _text_index + 1, item.name.length) else item.name
          _item.li_attr    = data_id: item.id
          _item.parent     = if _text_index > 0 then ('content__tree_' + item.name.substr 0, _text_index) else '#'
          _data.push _item
      #$ '#content__tree' .html '<div id="content__tree"></div>'
      $ '#content__tree' .jstree true .settings .core .data = _data
      $ '#content__tree' .jstree true .refresh!
    @dataFindAll cb: cb
  
  # @vendors  
  # @params  o:{  }
  Comp::treeDataGetMenuFunc = (o) ->
    _this = @; @action type: 'TREE_DATA_GET_MENU_FUNC'
    menu = (node) -> # node is original / parent
      tree = $ '#content__tree' .jstree true
      items = 
        create:
          separator_before: false, separator_after: false, label: 'Create Child'
          action: (obj) -> # can't be done here because of input elem
            _node = tree.create_node node
            tree.edit _node
        sibling:
          separator_before: false, separator_after: false, label: 'Create Sibling'
          action: (obj) ->
            _node = tree.create_node node.parent, {}
            tree.edit _node
        rename:
          separator_before: false, separator_after: false, label: 'Rename'
          action: (obj) -> # can't be done here because of input elem
            tree.edit node
        remove:
          separator_before: false, separator_after: false, label: 'Remove'
          action: (obj) ->
            children = []
            children.push node.li_attr.data_id
            for let el, i in node.children_d
              child    = tree.get_node '#' + el
              child_id = child.li_attr.data_id
              children.push child_id
            for let el, i in children
              if i == children.length - 1
                cb = !-> 
                  _this.treeDataRefresh!
              else
                cb = !->
              _this.dataDestroy id: el, cb: cb
            tree.delete_node node
        clone:
          separator_before: false, separator_after: false, label: 'Clone'
          action: (obj) ->
            _this.elementClone {}
        replace:
          separator_before: false, separator_after: false, label: 'Replace'
          action: (obj) ->
            _this.elementReplace {}
    menu

module.exports = _Component
