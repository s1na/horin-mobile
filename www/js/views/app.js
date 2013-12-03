define(['backbone', 'underscore', 'jquery', 'text!templates/app.html'],
       function (Backbone, _, $, appTemplate) {
  var AppView = Backbone.View.extend({
    el: '#app',
    template: _.template(appTemplate),

    events: {
      'click #login-button': 'login',
      'click #signup-button': 'signup'
    },

    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template);
    },
    login: function () {
      window.location.hash = 'login';
    },
    signup: function () {
      window.locatio.hash = 'signup';
    },
  });
  return AppView;
});
