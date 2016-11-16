
#global.use  = require '../lib/use.ls'
require 'app-module-path' .addPath __dirname + '/..'

global._meta = require 'meta'

lib = 
  meta:      require 'meta'
  path_dist: (require 'path' .resolve __dirname + '/..', 'dist')
  path_src:  (require 'path' .resolve __dirname + '/..', 'src')

module.exports = lib
