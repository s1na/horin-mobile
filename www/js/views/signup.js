define(['backbone', 'underscore', 'jquery', 'text!templates/signup.html'],
       function (Backbone, _, $, signupTemplate) {
  var SignupView = Backbone.View.extend({
    tagName: 'div',
    id: 'signup',
    template: _.template(signupTemplate),

    events: {
      'click #pageBack':'index',
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
      $('#signupPlate').css({'left':((($('body').width()-$('#signupPlate').width())/2).toString()+'px')});
      return this;
    },
    index: function() {
	window.location.hash='';    
    },
    close: function () {
      this.remove();
    }
  });
  return SignupView;
});
