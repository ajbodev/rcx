
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @vendors dom|dom, jquery|jqy
  # @methods frame {
  #   MakeContainer, MakeUrlhashListenable, 
  #   Write, WriteCustom, SetUrlhash, BuildMarkup
  # }
  
  Comp::initFrame  = !->
    _this = @; @action type: 'INIT_FRAME'
    
  # @vendors dom, jqy
  # @params  o:{  }
  Comp::frameMakeContainer = (o) -> 
    _this = @; @action type: 'FRAME_MAKE_CONTAINER'
    $ '#content__output__index__frame' .remove!
    $ '<iframe id="content__output__index__frame"></iframe>' 
      .appendTo '#content__output__index__holder'
    iframeInit = document.getElementById 'content__output__index__frame'
    iframe     = iframeInit.contentDocument || iframeInit.contentWindow.document
    iframe
    
  # @vendors dom
  # @params  o:{ onHashChange:F }
  Comp::frameMakeUrlhashListenable = (o) !-> 
    _this = @; @action type: 'FRAME_MAKE_URLHASH_LISTENABLE'
    document.getElementById 'content__output__index__frame' 
    .contentWindow .onhashchange = o.onHashChange
  
  # @vendors dom
  # @params  o:{ write:S }
  Comp::frameWrite = (o) !-> 
    _this = @; @action type: 'FRAME_WRITE'
    frame   = @frameMakeContainer!
    frame.open!
    frame.write o.write
    frame.close!
  
  # @vendors jqy
  # @params  o:{ id, content }
  Comp::frameWriteCustom = (o) !-> 
    _this = @; @action type: 'FRAME_WRITE_CUSTOM'
    $ '#' + o.id .html o.content
  
  # @vendors dom
  # @params  o:{ value }
  Comp::frameSetUrlhash = (o) !-> 
    _this = @; @action type: 'FRAME_SET_URLHASH'
    document.getElementById 'content__output__index__frame' 
    .contentWindow.window.location.hash = o.value
  
  # @params  o:{ style, content, script }
  Comp::frameBuildMarkup = (o) -> 
    _this = @; @action type: 'FRAME_BUILD_MARKUP'
    '<!DOCTYPE html><html><head><style>' + (o.style || '') + 
    '</style></head><body>' + (o.content || '') + 
    '<script>' + (o.script || '') + '<' + '/script>' + 
    '</body></html>'

module.exports = _Component
