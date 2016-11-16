
lib = require './lib.ls'

meta    = 'app'

bundle  = 
  entry:        
    app:        './src/index.ls'
  output:
    filename:   'app/lib/bundle-' + lib.meta[meta].version + '.js'
    path:       lib.path_dist
    publicPath: '/dist/'
  resolve:
    alias:
      'src':    lib.path_src
    extensions: ['' '.js' '.ls' '.jade']
  module:       
    loaders:
      * test: /\.jade$/, loader: 'jade-html'
      * test: /\.ls$/,   loader: 'livescript'

module.exports = bundle
