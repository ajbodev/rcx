
model      = require 'server/model'

controller = 

  # GET
  'index': (req, res) !->
    res.render 'src/index'
    
  'find-all': (req, res, next) !->
    cb = (list) !-> 
      res.json list
    model.findAll cb
    
  'find/:id': (req, res, next) !->
    id = req.params.id
    cb = (item) !-> 
      res.json item
    model.find id, cb
  
  # POST
  'create': (req, res, next) !->
    attrs = req.body
    cb    = (item) !-> 
      res.json item
    model.create attrs, cb
    
  'update': (req, res, next) !->
    id    = req.params.id || req.body.id
    attrs = req.body
    cb    = (item) !-> 
      res.json item
    model.update id, attrs, cb
      
  'destroy': (req, res, next) !->
    id    = req.params.id || req.body.id
    cb    = (id) !-> 
      res.json id: id
    model.destroy id, cb

module.exports = controller
