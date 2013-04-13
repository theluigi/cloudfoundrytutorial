var http = require("http");

var server = http.createServer(function (req, res) {
	res.writeHeader({
		"Content-Type":"text/html"
	    });
	res.end("Hello from CloudFoundry!");
    }).listen(3000);