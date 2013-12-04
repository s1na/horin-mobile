define(['backbone', 'underscore', 'jquery', 'text!templates/signup.html'],
       function (Backbone, _, $, signupTemplate) {
  var SignupView = Backbone.View.extend({
    tagName: 'div',
    id: 'signup',
    template: _.template(signupTemplate),

    events: {
    },

    initialize: function () {
      $('body').html(this.el);
      this.render();
    },
    render: function () {
      this.$el.html(this.template);
    },
    close: function () {
      this.remove();
    }
  });
  return SignupView;
});
