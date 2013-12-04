define(['backbone', 'sockets'],
       function (Backbone, sockets) {
  var UserModel = Backbone.Model.extend({
    defaults: {
      name: '',
      gravatarUrl: '',
    },
  });
  return UserModel;
});
