/**
 * Created by Administrator on 2015/10/19.
 */
var http = require('http');
console.log(http.Headers);
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');