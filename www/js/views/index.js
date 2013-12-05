define(['backbone', 'underscore', 'jquery', 'text!templates/index.html'],
       function (Backbone, _, $, indexTemplate) {
  var IndexView = Backbone.View.extend({
    tagName: 'div',
    id: 'index',
    template: _.template(indexTemplate),

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
  return IndexView;
});
