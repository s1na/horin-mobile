define(['socketio'], function (io) {
  var socketS = io.connect('http://localhost:8080');
  //var socketS = io.connect('http://10.0.2.2:8080');
    /*{
    initialize: function () {
      var socket = io.connect('http://localhost:8080');

      socket.on('ping', function (data) {
        $('#test').html(data.message);
        socket.emit('pong', { message: 'Hello from client!' });
      });

      socket.on('connect', function () {
      });

      socket.on('reconnect', function () {
      });

      socket.on('disconnect', function () {
      });

      socket.on('reconnecting', function () {
      });

      socket.on('error', function () {
      });

      return socket;
    }
  };*/

  return {
    getSocket: function () { return socketS; }
  }
});
