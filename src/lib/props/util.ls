
props = 
  formats:
    inputs:
      html:
        context: 'inputs', entity: 'html'
        id: 'content__input__html__format'
        options: [{value: 'editor'}, {value: 'json'}, {value: 'zip'}]
      css:
        context: 'inputs', entity: 'css'
        id: 'content__input__css__format'
        options: [{value: 'editor'}, {value: 'json'}, {value: 'zip'}]
      js:
        context: 'inputs', entity: 'js'
        id: 'content__input__js__format'
        options: [{value: 'editor'}, {value: 'json'}, {value: 'zip'}]
    admin:
      index:
        context: 'admin', entity: 'index'
        id: 'content__admin__format'
        options: [{value: 'json'}, {value: 'zip'}]
        onChange: 'formatOnImportDataChange'

module.exports = props
