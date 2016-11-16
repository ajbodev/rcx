
# @params  app:{}
routes = (app) !->

  controller = require 'server/controller'
  middleware = require 'server/middleware'

  app.use  '/server',          middleware

  app.get  '/server',          controller['index']
  app.get  '/server/find/:id', controller['find/:id']
  app.get  '/server/find-all', controller['find-all']
  app.post '/server/create',   controller['create']
  app.post '/server/update',   controller['update']
  app.post '/server/destroy',  controller['destroy']

module.exports = routes
