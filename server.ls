
require './server/app.ls'

app    = require 'server/app'
routes = require 'server/routes' 
routes app

app.listen '7000', !-> # lsc server.ls
  console.log 'App on port 7000'
