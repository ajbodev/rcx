
meta  = global._meta || require 'meta'

tasks =
  'app': 
    jade:
      src:    'src/index.jade'
      dest:   'dist/app'
      rename: 'app-' + meta['app']['version']
    webpack: 
      bundle: 'bundles/bundle.ls'
      watch:  'src/index.ls'
    server:
      app:    'server/app'
      routes: 'server/routes'
      port:   7000
  'app-lib': 
    jade_standalone:
      src:    'src/lib/standalone.jade'
      dest:   'dist/app'
      rename: 'app-standalone-' + meta['app']['version']
    jade_css:
      src:    'src/lib/css.jade'
      dest:   'dist/app/lib'
      rename: 'bundle-' + meta['app']['version']
      ext:    'css'
    jade_vendors_css:
      src:    'src/lib/vendors-css.jade'
      dest:   'dist/app/lib'
      rename: 'vendors-' + meta['app']['version_vendor']
      ext:    'css'
    jade_vendors_js:
      src:    'src/lib/vendors-js.jade'
      dest:   'dist/app/lib'
      rename: 'vendors-' + meta['app']['version_vendor']
      ext:    'js'
  'app-spec': 
    jasmine:
      config: 'spec/support/jasmine.ls.json'
    jade:
      src:    'spec/index-spec.jade'
      dest:   'dist/app'
      rename: 'app-' + meta['app']['version']
    webpack:
      bundle: 'bundles/bundle-spec.ls'
      watch:  'spec/index-spec.ls'

module.exports = tasks
