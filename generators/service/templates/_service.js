'use strict';

var seneca = require('seneca')();

seneca.add({role: '<%= name %>', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.add({role: '<%= name %>', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.listen({host: process.env.SERVICE_HOST, port: process.env.SERVICE_PORT});

module.exports.seneca = seneca;
