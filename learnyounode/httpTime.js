var net = require('net');

function pad(n)
{
	return n < 10 ? '0' + n : n; 
}

var server = net.createServer(function(socket) {
	date = new Date();
	a = date.getFullYear() + "-"
	  + pad(date.getMonth() + 1) + "-"
	  + pad(date.getDate()) + " "
	  + pad(date.getHours()) + ":"
	  + pad(date.getMinutes()) + "\n";
	socket.end(a);
});
server.listen(process.argv[2]);