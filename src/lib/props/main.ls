
props = 
  editors:
    inputs:
      html:
        context: 'inputs', entity: 'html'
        id: 'content__input__html__editor'
        type: 'text/html', ext: 'html'
        onChange: 'inputOnEditorChange'
      css:
        context: 'inputs', entity: 'css'
        id: 'content__input__css__editor'
        type: 'text/css', ext: 'css'
        onChange: 'inputOnEditorChange'
      js:
        context: 'inputs', entity: 'js'
        id: 'content__input__js__editor'
        type: 'text/javascript', ext: 'js'
        onChange: 'inputOnEditorChange'
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id: 'content__output__index__editor'
        type: 'text/html', ext: 'html'
  files:
    inputs:
      html: 
        context: 'inputs', entity: 'html'
        id: 'content__input__html__file'
        options: [{value: 'index'}]
        onChange: 'inputOnFileChange', onCreate: 'inputOnFileCreate'
        destroyable: 'inputDestroy', creatable: 'inputOnFileCreateModal'
      css: 
        context: 'inputs', entity: 'css'
        id: 'content__input__css__file'
        options: [{value: 'index'}]
        onChange: 'inputOnFileChange', onCreate: 'inputOnFileCreate'
        destroyable: 'inputDestroy', creatable: 'inputOnFileCreateModal'
      js: 
        context: 'inputs', entity: 'js'
        id: 'content__input__js__file'
        options: [{value: 'index'}]
        onChange: 'inputOnFileChange', onCreate: 'inputOnFileCreate'
        destroyable: 'inputDestroy', creatable: 'inputOnFileCreateModal'
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id: 'content__output__index__file'
        options: [{value: 'index'}]
  exts:
    inputs:
      html: 
        context: 'inputs', entity: 'html'
        id: 'content__input__html__ext'
        options: [
          {value: 'html'}, {value: 'md'}, {value: 'jade'}
        ]
        onChange: 'inputOnExtChange'
      css: 
        context: 'inputs', entity: 'css'
        id: 'content__input__css__ext'
        options: [
          {value: 'css'}, {value: 'less'}, {value: 'sass'}, {value: 'styl'}
        ]
        onChange: 'inputOnExtChange'
      js: 
        context: 'inputs', entity: 'js'
        id: 'content__input__js__ext'
        options: [
          {value: 'js'}, {value: 'cs'}, {value: 'ls'}, {value: 'ts'}, {value: 'babel.js'}
        ]
        onChange: 'inputOnExtChange'
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id: 'content__output__index__ext'
        options: [{value: 'html'}, {value: 'css'}, {value: 'js'}]
        onChange: 'outputOnExtChange'
  modes:
    inputs:
      html: 
        context: 'inputs', entity: 'html'
        id:      'content__input__html__mode'
        options: [
          {value: 'text/html'}, 
          {value: 'text/x-markdown'}, {value: 'text/x-jade'},
        ]
        onChange: 'inputOnModeChange'
      css: 
        context: 'inputs', entity: 'css'
        id:      'content__input__css__mode'
        options: [
          {value: 'text/css'}, 
          {value: 'text/x-less'}, {value: 'text/x-sass'}, {value: 'text/x-styl'},
        ]
        onChange: 'inputOnModeChange'
      js: 
        context: 'inputs', entity: 'js'
        id:      'content__input__js__mode'
        options: [
          {value: 'text/javascript'}, {value: 'text/x-livescript'}, {value: 'text/x-coffeescript'}, 
          {value: 'text/typescript'}
        ]
        onChange: 'inputOnModeChange'
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id:      'content__output__index__mode'
        options: [{value: 'text/html'}, {value: 'text/javascript'}, {value: 'text/css'}]
        onChange: 'outputOnModeChange'
  lint:
    inputs:
      html:
        context:  'inputs', entity: 'html'
        id:       'content__input__html__lint'
        onChange: 'inputOnLintChange'
      css:
        context:  'inputs', entity: 'css'
        id:       'content__input__css__lint'
        onChange: 'inputOnLintChange'
      js:
        context:  'inputs', entity: 'js'
        id:       'content__input__js__lint'
        onChange: 'inputOnLintChange'
    outputs:
      index: 
        context:  'outputs', entity: 'index'
        id:       'content__output__index__lint'
        onChange: 'outputOnLintChange'
  result:
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id:      'content__output__index__result'
        options: [{value: 'frame'}, {value: 'editor'}]
        onChange: 'outputOnResultChange'
  urlhash:
    outputs:
      index: 
        context: 'outputs', entity: 'index'
        id:      'content__output__index__urlhash'
        options: [{value: '#/'}]
        onChange: 'outputOnUrlhashChange', onCreate: 'outputOnUrlhashCreate'

module.exports = props
