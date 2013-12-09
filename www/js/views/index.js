define(['backbone', 'underscore', 'jquery', 'text!templates/index.html'],
       function (Backbone, _, $, indexTemplate) {
  var IndexView = Backbone.View.extend({
    tagName: 'div',
    id: 'index',
    template: _.template(indexTemplate),

    events: {
      'click #login-button': 'login',
      'click #signup-button': 'signup'
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
	  $(slf).css({'left':((($(prnt).width()-$(prnt).height())*100/(2*$(prnt).width())).toString()+'%')});
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
    login: function () {
      window.location.hash = 'login';
    },
    signup: function () {
      window.location.hash = 'signup';
    },
  });
  return IndexView;
});
