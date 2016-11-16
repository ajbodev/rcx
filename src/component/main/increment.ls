
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods increment {
  #   Get, Reset, ?Set, ?Auto
  # }
  
  Comp::initIncrement = !-> # 
    _this = @; @action type: 'INIT_INCREMENT'
  
  # @params  o:{ entity:S, name:S, ?content:S, ?file:S, ?ext:S }
  Comp::incrementGet = (o) -> # 
    _this = @; @action type: 'INCREMENT_GET'
    entity  = o.entity
    name    = o.name
    file    = o.file || o.name
    input   = @inputFind entity: entity, file: file
    ext     = o.ext     || input.ext
    content = o.content || input.src
    # cached AND no changed
    if (@increments[entity][name] && 
      (@increments[entity][name].src == content) &&
      (@increments[entity][name].ext == ext)
    )
      content    = @increments[entity][name].compiled
    # not cached OR (cached AND changed)
    else
      # bottleneck
      @increments[entity][name] = 
        src:      content
        ext:      ext
        compiled: (@run entity: entity, src: content, type: 'compile', file: file, ext: ext)
      content = @increments[entity][name].compiled
    content

  Comp::incrementReset = (o) !-> # 
    _this = @; @action type: 'INCREMENT_RESET'
    @increments = html: {}, css: {}, js: {}

module.exports = _Component
