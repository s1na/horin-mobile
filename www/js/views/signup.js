define(['backbone', 'underscore', 'jquery', 'text!templates/signup.html'],
       function (Backbone, _, $, signupTemplate) {
  var SignupView = Backbone.View.extend({
    el: '#signup',
    template: _.template(signupTemplate),

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
  return SignupView;
});
