define(['backbone', 'views/index',
       'views/login', 'views/signup',
       'views/app'],
       function (Backbone, IndexView, LoginView, SignupView, AppView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'login': 'login',
      'signup': 'signup',
      'logout': 'logout',
    },

    index: function () {
      this.curView && this.curView.close();
      if (window.localStorage.getItem('horin:app:loggedIn')) {
        this.curView = new AppView();
      } else {
        this.curView = new IndexView();
      }
    },
    login: function () {
      this.curView && this.curView.close();
      this.curView = new LoginView();
    },
    signup: function () {
      this.curView && this.curView.close();
      this.curView = new SignupView();
    },
    logout: function () {
      window.location.hash = '';
    },
  });
  return AppRouter;
});
