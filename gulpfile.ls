
#global.use  = require './lib/use.ls'
require 'app-module-path' .addPath __dirname

global._meta = require 'meta'

jade         = require 'tasks/lib/jade'
webpack      = require 'tasks/lib/webpack'
server       = require 'tasks/lib/server'
jasmine      = require 'tasks/lib/jasmine'

tasks        = require 'tasks/tasks'

jade.task    'jade:app',            tasks['app'].jade
webpack.task 'webpack:app',         tasks['app'].webpack
server.task  'server:app',          tasks['app'].server
jasmine.task 'jasmine:app',         tasks['app-spec'].jasmine

jade.task    'jade:app-css',        tasks['app-lib'].jade_css
jade.task    'jade:vendors-js',     tasks['app-lib'].jade_vendors_js
jade.task    'jade:vendors-css',    tasks['app-lib'].jade_vendors_css
jade.task    'jade:app-standalone', tasks['app-lib'].jade_standalone

#jade.task    'jade:app-spec',       tasks['app-spec'].jade
#webpack.task 'webpack:app-spec',    tasks['app-spec'].webpack
