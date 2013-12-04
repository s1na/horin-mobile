define(['backbone', 'underscore', 'jquery', 'text!templates/app.html'],
       function (Backbone, _, $, appTemplate) {
  var AppView = Backbone.View.extend({
    tagName: 'div',
    id: 'app',
    template: _.template(appTemplate),

    events: {
      'click #login-button': 'login',
      'click #signup-button': 'signup'
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
    login: function () {
      window.location.hash = 'login';
    },
    signup: function () {
      window.locatio.hash = 'signup';
    },
  });
  return AppView;
});
