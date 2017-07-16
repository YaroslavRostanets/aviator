/**
 * Created by Yaroslav on 16.07.2017.
 */
var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);
