/**
 * Created by Administrator on 2015/10/15.
 */
//var ev = require("events");
//console.log(ev);
//
//ev.on('connection', function (stream) {
//    console.log('someone connected!');
//});
var callback = function(stream) {
    console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);