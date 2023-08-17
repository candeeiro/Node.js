var http = require('http');
var mydate = require('./myDateTimeModule');
var author = 'Manoel';

const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

  var title = 'Node.js  Web Server HTTP'
  var body = '<h1>Bem-vindo, '+author+'.</h1><p>A data de hoje no seu sistema é '+mydate.myDateTime()+'</p></p>\n \
  <p>Este é um web server criado usando node.js.</p>\n \
  <p>ผมหมาป่า(Hello World é para os fracos!)</p>';

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

  res.write(code, "utf8");
  res.end(); 
});

server.listen(port, hostname, () => {
    console.log(`Servidor executando em http://${hostname}:${port}/`);
});
