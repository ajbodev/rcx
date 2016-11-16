
express     = require 'express'
bodyParser  = require 'body-parser'
session     = require 'express-session'

#global.use  = require './lib/use.ls'
require 'app-module-path' .addPath __dirname + '/..'

global._meta = require 'meta'
global._meta['app'].root = '../app/'

app         = express!
app.use     bodyParser.urlencoded extended: false # limit: '50mb'
app.use     bodyParser.json! # limit: '50mb'
app.use     session secret: '123abc', resave: false, saveUninitialized: true
app.use     '/', express.static 'dist'
app.set     'views',       ''
app.set     'view engine', 'jade'

module.exports = app
