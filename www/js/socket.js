define(['socketio'], function (io) {
  return {
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
  };
});
