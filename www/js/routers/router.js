define(['backbone', 'views/login', 'views/signup'],
       function (Backbone, LoginView, SignupView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      'login': 'login',
      'signup': 'signup'
    },

    login: function () {
      new LoginView();
    },

    signup: function () {
      new SignupView();
    },
  });
  return AppRouter;
});
