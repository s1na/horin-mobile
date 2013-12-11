define(['backbone', 'underscore', 'sockets'],
       function (Backbone, _, sockets) {
  var SelfModel = Backbone.Model.extend({
    initialize: function () {
      this.name = '';
      this.gravatarUrl = '';
    },
    sync: function (method, model, options) {
      var email = window.localStorage.getItem('horin:app:selfEmail');
      if (_.isNull(email) || _.isUndefined(email)) {
        options.error('No email available.');
      }
      if (method === 'read') {
        lastUpstreamSync = window.localStorage.getItem(
          'horin:' + email + ':upstreamSync'
        );
        if (_.isNull(lastUpstreamSync) || _.isUndefined(lastUpstreamSync)) {
          var socket = sockets.getSocket();
          socket.on('mobile:self:data:res', function (data) {
            console.log(data);
            options.success(data, 'success', null);
          });
          socket.emit('mobile:self:data:req');
        } else {
          return JSON.parse(window.localStorage.getItem(
            'horin:' + email + ':data'
          ));
        }
      }
    },
  });
  return SelfModel;
});
