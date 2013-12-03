require.config({
  baseUrl: 'js',
  paths: {
    socketio: '../lib/socket.io-client/dist/socket.io',
    underscore: '../lib/underscore-amd/underscore',
    backbone: '../lib/backbone-amd/backbone',
    jquery: '../lib/zepto/zepto',
    text: '../lib/requirejs-text/text',
    templates: '../templates',
  },
  shim: {
    'socketio': {
      exports: 'io'
    },
    'jquery': {
      exports: '$',
    },
  }
});

require(['socket', 'jquery', 'backbone', 'underscore',
         'app', 'routers/router', 'views/app'],
        function (socket, $, Backbone, _, app, AppRouter, AppView) {
  app.initialize();
  var socket = socket.initialize();

  new AppRouter();
  Backbone.history.start();

  new AppView();
});
