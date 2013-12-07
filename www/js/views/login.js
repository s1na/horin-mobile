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
      alert('in auth');
      $.ajax({
        type: 'POST',
        url: config.siteUrl + '/login',
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
            alert(data.sessionID);
            window.localStorage.setItem('loggedIn', true);
            window.localStorage.setItem('connect.sid', data.sessionID);
            window.location.hash = '';
          } else {
            this.$('#login').before(data.message);
          }
        },
        error: function (xhr, type, err) {
          alert(xhr.status);
          console.log(xhr);
        }
      });
    },
  });
  return LoginView;
});
