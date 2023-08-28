var http = require('http');
var url = require('url');
var mydate = require('./myDateTimeModule');
var author = 'Manoel';

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  var title = 'Node.js  Web Server HTTP'
  var body = '<h1>Bem-vindo, '+author+'.</h1><p>A data de hoje no seu sistema é '+mydate.myDateTime()+'</p></p>\n \
  <p>Este é o seu webserver criado usando node.js.</p>\n \
  Executando em http://'+hostname+':'+port+' \n \
  </br><p><b>printf Bonjour Le Monde est pour les faibles!</b></p>';

  var code =  [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>' + title + '</title>',
            '</head>',
            '<body>',
                body,
            '</body>',
        '</html>'
    ].join('\n');
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(code, "utf8");
  res.write(txt);
  res.end(); 
});

server.listen(port, hostname, () => {
    console.log(`Servidor executando em http://${hostname}:${port}/`);
});
