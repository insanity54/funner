var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var nconf = require('nconf');
var io = require('socket.io')(server);

// run the node/socketio instance
// var spawn = require('child_process').spawn;
// var nodesocket = spawn('node', ['socket-io-server.js']);


io.on('connection', function(socket) {
    console.log('a user connected');
});

// nodesocket.stdout.on('data', function(data) {
//     console.log('stdout: ' + data);
// });

// nodesocket.stderr.on('data', function(data) {
//     console.log('stderr: ' + data);
// });

// nodesocket.on('close', function(code) {
//     console.log('node socket server exited with code: ' + code);
// });





nconf.env(['PORT'])
     .file({ file: 'config.json' });

nconf.defaults({
    'PORT': '29834'
});

app.set('port', nconf.get('PORT'));

app.use(express.static(__dirname + '/client')); // serve the cocoonjs project files

server.listen(app.get('port'));
console.log('server listening on port ' + app.get('port'));

