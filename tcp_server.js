'use strict';

var net = require('net');
var fs = require('fs');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        fs.writeFile(__dirname + '/../D49/tcp_server/test/' + date.now().date.toString(), data.toString(), function(err) {
            if (err) return console.log(err);
        });
        console.log(data.toString());
    });

    socket.on('error', function() {
        console.log('oh no! server error!');
        socket.end();
    });

    socket.on('end', function() {
        console.log('server disconnected');
        socket.end();
    });
});

server.listen(3000);



