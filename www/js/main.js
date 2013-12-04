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

// If running on mobile
require(['app', 'sockets'],
        function (app, sockets) {
  app.initialize();
});

// If running on desktop browser
/*require(['backbone', 'app', 'sockets', 'routers/app', 'views/app'],
        function (Backbone, app, sockets, AppRouter, AppView) {
  app.initialize();
  var socket = sockets.getSocket();

  new AppRouter();
  Backbone.history.start();

  new AppView();
});*/
