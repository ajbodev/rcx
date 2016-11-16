
# @params  Comp:{src/component}
_Component = (Comp) !->
  # @methods exportOutput {
  #   Frame, Editor
  # }
  
  # @params  o:{ src:S }
  Comp::exportOutputFrame = (o) !-> 
    _this = @; @action type: 'EXPORT_OUTPUT_FRAME'
    cb = (o) !->
      _this.export blob: o.src, name: 'output', ext: 'html'
    @runFront entity: 'notes', export: cb
  
  Comp::exportOutputEditor = (o) !-> 
    _this = @; @action type: 'EXPORT_OUTPUT_EDITOR'
    file = @editorGetValue context: 'outputs', entity: 'index'
    ext  = @extGetValue context: 'outputs', entity: 'index'
    @export blob: file, name: 'output', ext: ext

module.exports = _Component
