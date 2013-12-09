define(['backbone', 'underscore', 'jquery', 'config', 'text!templates/login.html'],
       function (Backbone, _, $, config, loginTemplate) {
  var LoginView = Backbone.View.extend({
    tagName: 'div',
    id: 'login',
    template: _.template(loginTemplate),

    events: {
      'submit #login-form': 'auth',
      'click #loginPageBack':'index',
    },

    initialize: function () {
      $('body').html(this.el);
      this.render();
    },
    render: function () {
      this.$el.html(this.template);
      for(var i=0;i<document.getElementsByClassName('responsive_Image').length;i++)
      {
  	var slf='#'+document.getElementsByClassName('responsive_Image')[i].getAttribute('id');
	var prnt='#'+$(slf).parent().attr('id');
	if($(prnt).height()<$(prnt).width())
	{
	  $(slf).css({'height':'100%','width':'auto','top':'0%'});
	  $(slf).css({'left':'0%'});
	}
	else
	{
	  $(slf).css({'width':'100%','height':'auto','left':'0%'});
//	  $(slf).css({'top':((($(prnt).height()-$(prnt).width())*100/(2*$(prnt).height())).toString()+'%')});
	  $(slf).css({'top':'auto','bottom':'0%'});	  
	}
      }

      return this;
    },
    close: function () {
      this.remove();
    },
    auth: function () {
      var email = this.$('#login-email').val();
      var password = this.$('#login-password').val();
      $.ajax({
        type: 'POST',
        url: config + '/login',
        data: {
          email: email,
          password: password,
        },
        headers: {
          'X-Phonegap': true,
        },
        contentType: 'application/x-www-form-urlencoded',
        dataType: 'json',
        success: function (data) {
          if (data.okay) {
            window.localStorage.setItem('loggedIn', true);
            window.location.hash = '';
          } else {
            this.$('#login').before(data.message);
          }
        },
        error: function (xhr, type, err) {
          console.log(xhr);
        }
      });
    },
    index: function() {
	window.location.hash='';    
    },
  });
  return LoginView;
});
