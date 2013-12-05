define(['backbone', 'underscore', 'jquery', 'config', 'text!templates/login.html'],
       function (Backbone, _, $, config, loginTemplate) {
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
      var email = this.$('#login-email').val();
      var password = this.$('#login-password').val();
      $.ajax({
        type: 'POST',
        url: config + '/login',
        data: {
          email: email,
          password: password,
        },
        headers: {
          'X-Phonegap': true,
        },
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        success: function (data) {
          if (data.okay) {
            window.localStorage.setItem('loggedIn', true);
            window.location.hash = '';
          } else {
            this.$('#login').before(data.message);
          }
        },
        error: function (xhr, type, err) {
          console.log(xhr);
        }
      });
    },
  });
  return LoginView;
});
