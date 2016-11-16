
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors dom|dom, domparser|dpa, xmlserializer|xsz, entities|ett
  # @methods include
  
  Comp::initInclude = !->
    _this = @; @action type: 'INIT_INCLUDE'
  
  # @vendors dom, dpa, xsz, ett
  # @params  o:{ content:S, entity:S, ?tag:S, ?tag_end:S }
  Comp::include = (o) -> # 
    _this = @; @action type: 'INCLUDE'
    dom      = (new DOMParser!).parseFromString o.content, 'text/html'
    tag      = o.tag     || ''
    tag_end  = o.tag_end || ''
    includes = dom.querySelectorAll (tag + '[data-include]:not([data-id])' + tag_end)
    for let el, i in includes
      attrs        = el.attributes
      name         = attrs['data-include'].nodeValue
      name         = if attrs['data-name'] then attrs['data-name'].nodeValue else name
      names        = attrs['data-include'].nodeValue.split '|'
      ext          = if attrs['data-ext'] then attrs['data-ext'].nodeValue else null
      entity       = if attrs['data-entity'] then attrs['data-entity'].nodeValue else o.entity
      # data-stringify='window.data_name-of-file'
      stringify    = if attrs['data-stringify'] then attrs['data-stringify'].nodeValue else false
      append       = if attrs['data-append'] then attrs['data-append'].nodeValue else ''
      prepend      = if attrs['data-prepend'] then attrs['data-prepend'].nodeValue else ''
      last         = names[names.length-1]
      content      = @runConcatFiles entity: entity, files: names
      content      = @incrementGet do
        content: content, entity: entity, name: name, file: last, ext: ext
      if stringify then content = stringify + '["' + name + '"] = ' + (JSON.stringify content) + ';'
      el.innerHTML = prepend + content + append
    content = entities.decodeHTML ((new XMLSerializer!).serializeToString dom)
    content

module.exports = _Component
