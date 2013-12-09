define(['backbone', 'underscore', 'jquery',
       'sockets',
       'text!templates/app.html'],
       function (Backbone, _, $, sockets, appTemplate) {
  var AppView = Backbone.View.extend({
    tagName: 'div',
    id: 'app',
    template: _.template(appTemplate),

    events: {
      'click #logout-button': 'logout',
    },

    initialize: function () {
      $('body').html(this.el);
      var socket = sockets.getSocket();
      var self = this;

      socket.on('error', function (data) {
        alert('err ' + window.localStorage.getItem('connect.sid'));
        if (data === 'handshake error') {
          self.logout();
        }
      });

      socket.on('system:error', function (data) {
        alert('syserr ' + window.localStorage.getItem('connect.sid'));
        console.log(data);
        this.logout();
      });

      this.render();
    },
    render: function () {
      this.$el.html(this.template);
      return this;
    },
    close: function () {
      this.remove();
    },
    logout: function () {
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('connect.sid');
      window.location.hash = 'logout';
    }
  });
  return AppView;
});
