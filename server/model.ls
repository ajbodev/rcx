
store = new (require 'src/store/static/js/store')

model = 

  findAll: (cb) !->
    store.findAll cb
    
  find: (id, cb) !->
    store.find id, cb
    
  create: (attrs, cb) !->
    # Validation
    store.create attrs, cb
    
  update: (id, attrs, cb) !->
    # Validation
    store.update id, attrs, cb
    
  destroy: (id, cb) !->
    # Validation
    store.destroy id, cb

module.exports = model
