var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('hello world');
	res.end();
}).listen(8081,function() {
	console.log('listening on port 8081');
});