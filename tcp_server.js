'use strict';

var net = require('net');
var fs = require('fs');
var UUID = require('simple-uuid');

var server = net.createServer(function(socket) {
    socket.on('data', function(data) {
        var uuid = UUID.generate();
        fs.writeFile(uuid, data, function(err) {
            if (err) return console.log(err);
        });
        console.log(data.toString());
    });

    socket.on('end', function() {
        console.log('discounnected');
    });
});

server.listen(3000);


exports.server = server;
