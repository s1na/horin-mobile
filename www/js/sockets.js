define(['socketio', 'config'], function (io, config) {
  var socketS;
  var connect = function () {
    socketS = io.connect(config.siteUrl, {
      query: 'connect.sid=' + window.localStorage.getItem('connect.sid')
    });
  };
  //var socketS = io.connect(config.siteUrl);
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
    getSocket: function () {
      if (!socketS) {
        connect();
      }
      return socketS;
    }
  }
});
