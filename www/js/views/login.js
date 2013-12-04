define(['backbone', 'underscore', 'jquery', 'sockets', 'text!templates/login.html'],
       function (Backbone, _, $, sockets, loginTemplate) {
  var LoginView = Backbone.View.extend({
    tagName: 'div',
    id: 'login',
    template: _.template(loginTemplate),

    events: {
      'submit #login-form': 'auth',
    },

    initialize: function () {
      $('body').html(this.el);
      this.render();
    },
    render: function () {
      this.$el.html(this.template);
      return this;
    },
    close: function () {
      this.remove();
    },
    auth: function () {
      var socket = sockets.getSocket();

      socket.on('mobile:auth:res', function (data) {
        if (data.status) {
          $('body').html('LOGGED IN');
        } else {
          $('body').html('FAILED');
        }
      });

      socket.emit('mobile:auth:req', {
        username: $('#login-email').val(),
        password: $('#login-password').val(),
      });
    },
  });
  return LoginView;
});
