
# middleware = (req, res, next) !-> next!

mung = require 'express-mung'

middleware = mung.json (body, req, res) ->
  if req.query['cb']
    body = req.query['cb'] + '(' + (JSON.stringify body) + ')'
  if req.query['iframe']
    body = '<!DOCTYPE html><html><head>' + 
      '</head></body>' + 
      '<script>try{' + 
      'parent.postMessage(' + (JSON.stringify body) + ', "*")' +
      '}catch(e){console.log(e)}</script>' + 
      '</body></html>'
  body

module.exports = middleware
