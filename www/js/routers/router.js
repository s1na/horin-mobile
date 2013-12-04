define(['backbone', 'views/app', 'views/login', 'views/signup'],
       function (Backbone, AppView, LoginView, SignupView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'app',
      'login': 'login',
      'signup': 'signup'
    },

    app: function () {
      this.curView && this.curView.close();
      this.curView = new AppView();
    },
    login: function () {
      this.curView && this.curView.close();
      this.curView = new LoginView();
    },

    signup: function () {
      this.curView && this.curView.close();
      this.curView = new SignupView();
    },
  });
  return AppRouter;
});
