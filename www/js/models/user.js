define(['backbone'],
       function (Backbone) {
  var UserModel = Backbone.Model.extend({
    initialize: function () {
      this.name = '';
      this.gravatarUrl = '';
    },
  });
  return UserModel;
});
