
props = 
  layout:
    id:      'content__layout__select'
    options: [{value: 'Layout - Split'}, {value: 'Layout - Split VTab'}, {value: 'Layout - Combined'}]
  options:
    store_data:
      id:      'content__option__store__data', config: 'store_data',
      options: [
        {value: 'Static'}, {value: 'Browser (LocalStorage)'}, {value: 'Browser (IndexedDB)'},
        {value: 'Server (AJAX)'}, {value: 'Server (DOM)'}, {value: 'Cloud (Firebase 3)'},
      ]
      inputs: ['db_url', 'table', 'others']
    # Run:Default
    # Run:Markdown
    run_preprocessor_md:    id: 'content__option__run__md'    title: 'Marked'
    # Run:Template
    run_preprocessor_jade:  id: 'content__option__run__jade'  title: 'Jade'
    # Run:Preprocessor
    run_preprocessor_less:  id: 'content__option__run__less'  title: 'Less'
    run_preprocessor_sass:  id: 'content__option__run__sass'  title: 'Sass'
    run_preprocessor_styl:  id: 'content__option__run__styl'  title: 'Stylus'
    # Run:Transpiler
    run_transpiler_babeljs: id: 'content__option__run__babel' title: 'Babel'
    run_transpiler_ts:      id: 'content__option__run__ts'    title: 'TypeScript'
    run_transpiler_cs:      id: 'content__option__run__cs'    title: 'CoffeeScript'
    run_transpiler_ls:      id: 'content__option__run__ls'    title: 'LiveScript'

module.exports = props
