define(['jquery', 'backbone', 'underscore',
         'routers/router'],
         function ($, Backbone, _, sockets, AppRouter) {
  var app = {
      // Application Constructor
      initialize: function() {
          this.bindEvents();
      },
      // Bind Event Listeners
      //
      // Bind any events that are required on startup. Common events are:
      // 'load', 'deviceready', 'offline', and 'online'.
      bindEvents: function() {
          document.addEventListener('deviceready', this.onDeviceReady, false);
      },
      // deviceready Event Handler
      //
      // The scope of 'this' is the event. In order to call the 'receivedEvent'
      // function, we must explicity call 'app.receivedEvent(...);'
      onDeviceReady: function() {
          app.receivedEvent('deviceready');
      },
      // Update DOM on a Received Event
      receivedEvent: function(id) {
        if (id === 'deviceready') {
          new AppRouter();
          Backbone.history.start();
        }
      }
  };
  return app;
});
