
use = (namespace) ->
  path = require 'path'
  #require ((path.join __dirname, '.').replace //\\//g, '/') + '/' + namespace + '.ls'
  require ((path.join __dirname, '.').replace //\\//g, '/') + '/../' + namespace + '.ls'

module.exports = use
