'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
require(__dirname + '/../tcp_server');


describe('server', function() {
    it('should respond to a request', function(done) {
        chai.request('localhost:3000')
            .get('/anything')
            .end(function(err, socket) {
                expect(err).to.eql.(null);
                expect(socket.text).to.eql('hello world');
                done();
    });
});
