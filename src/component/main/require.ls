
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors dom|dom, domparser|dpa, xmlserializer|xsz, entities|ett
  # @methods require {
  #   @, Head
  # }
  
  Comp::initRequire = !->
    _this = @; @action type: 'INIT_REQUIRE'
  
  # @vendors dom, dpa, xsz, ett
  # @params  o:{ content }
  Comp::requireHead = (o) -> # 
    _this = @; @action type: 'REQUIRE_HEAD'
    dom      = (new DOMParser!).parseFromString o.content, 'text/html'
    require  = dom.querySelector ('[data-require]')
    if require
      script = dom.createElement 'script'
      script.textContent = @_require
      dom.head.appendChild script
    content  = entities.decodeHTML ((new XMLSerializer!).serializeToString dom)
    content

  # @vendors dom, dpa, xsz, ett
  # @params  o:{ content:S, tag:S, entity:S }
  Comp::require = (o) -> # 
    _this = @; @action type: 'REQUIRE'
    dom      = (new DOMParser!).parseFromString o.content, 'text/html'
    includes = dom.querySelectorAll (o.tag + '[data-require]:not([data-id])')
    for let el, i in includes
      attrs        = el.attributes
      name         = attrs['data-require'].nodeValue
      ext          = if attrs['data-ext'] then attrs['data-ext'].nodeValue else null
      content      = ''
      root         = if attrs['data-root'] then attrs['data-root'].nodeValue else ''
      _export      = if attrs['data-export'] then attrs['data-export'].nodeValue else ''
      if (name != '') && (_export == '')
        content    = @incrementGet do
          entity: o.entity, name: name, ext: ext
        content    = '_require({"' + root + name + '": [function(require, module, exports) {\n\n' + content + '\n\n},{}]})'
      else if (name != '') && (_export != '')
        content    = 'module.exports = "' + _export + '";'
        content    = '_require({"' + root + name + '": [function(require, module, exports) {\n\n' + content + '\n\n},{}]})'
      else
        content    = @_require
      el.innerHTML = content
    content = entities.decodeHTML ((new XMLSerializer!).serializeToString dom)
    content

module.exports = _Component
