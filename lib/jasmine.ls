
require 'app-module-path' .addPath __dirname + '/..'
jasmine = new (require 'jasmine')

jasmine.loadConfigFile 'spec/support/jasmine.ls.json'
jasmine.execute! # lsc lib/try-test.ls
