var connect = require('connect');
var util = require('util');
var form = require('fs').readFileSync('form.html');

connect(connect.limit('64kb'), connect.bodyParser(),
  function (request, response) {
    if (request.method === "POST") {
      console.log('Usuario ha escrito:\n', request.body);
      response.end('Usted ha escrito:\n' + util.inspect(request.body));
    }
    if (request.method === "GET") {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(form);
    }
  }).listen(8080);
