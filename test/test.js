'use strict';

var expect = require('chai').expect;
var server = require(__dirname + '/../tcp_server');
var UUID = require('simple-uuid');


describe('UUID', function() {
    it('should create a UUID', function() {
        expect(server.uuid).to.not.eql(null);
    });
});
