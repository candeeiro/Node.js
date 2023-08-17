const http = require('http');
var mydate = require('./myDateTimeModule');
var name = 'Manoel';
const utf8 = require('utf8');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    var html = [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>Sample Response</title>',
            '</head>',
            '<body>',
                '<p>Hello world</p>',
            '</body>',
        '</html>'
    ].join('');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.write('Bem-vindo a data de hoje no seu sistema \u00e9 \n'+mydate.myDateTime()+"\n\n");
    res.write(html, 'utf8');
    
    
    
    res.end('Hello World in Node.js');

});
server.listen(port, hostname, () => {
    console.log(`Servidor executando em http://${hostname}:${port}/`);
});