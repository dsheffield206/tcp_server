### Code Fellows D49 Week 2 Assignment - Write A TCP Server

#### Write A TCP Server - Summary
+ This is project creates a simple TCP logging server.
+ This server receives TCP requests and saves the request into a file.
+ Each request is saved into it's own file and named by its UUID.
+ We are using [Simply UUID](https://www.npmjs.com/package/simply-uuid) by Tyler Garlick, which is based off code by Jeff Ward [from Stack Overflow](http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136)
+ test/test.js includes a Mocha / Chai tests of UUID.
+ tcp_server.js represents the server file.
