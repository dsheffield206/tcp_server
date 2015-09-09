'use strict';

var expect = require('chai').expect;
var server = require(__dirname + '/../tcp_server');


describe('server', function() {
    it('should create server data to string', function() {
        expect(server.data.toString()).to.not.eql(null);
    });
});
