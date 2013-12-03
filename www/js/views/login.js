define(['backbone', 'underscore', 'jquery', 'text!templates/login.html'],
       function (Backbone, _, $, loginTemplate) {
  var LoginView = Backbone.View.extend({
    el: '#login',
    template: _.template(loginTemplate),

    events: {
    },

    initialize: function () {
      this.render();
    },
    render: function () {
      $('#app').hide();
      this.$el.html(this.template);
    },
  });
  return LoginView;
});
