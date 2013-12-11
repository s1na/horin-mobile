define(['backbone', 'underscore', 'jquery',
       'sockets',
       'text!templates/app.html'],
       function (Backbone, _, $, sockets, appTemplate) {
  var AppView = Backbone.View.extend({
    tagName: 'div',
    id: 'app',
    template: _.template(appTemplate),

    events: {
      'click #logout-button': 'logout',
      'click #dashboard-nav-box': 'show_nav',
    },

    initialize: function () {
      $('body').html(this.el);
      var socket = sockets.getSocket();
      var self = this;
      navSwitch=0;
      socket.on('error', function (data) {
        alert('err ' + window.localStorage.getItem('connect.sid'));
        if (data === 'handshake error') {
          self.logout();
        }
      });

      socket.on('system:error', function (data) {
        alert('syserr ' + window.localStorage.getItem('connect.sid'));
        console.log(data);
        this.logout();
      });

      this.render();
    },
    render: function () {
      this.$el.html(this.template);
      var friend_user=['No1','No2','No3','No4','Np5'];
      var friend_name=['شماره ۱','شماره ۲','شماره ۳','شماره ۴','شماره ۵'];
      var friend_avatar=['/home/amir/horin-mobile/www/img/noUser.png',
			'/home/amir/horin-mobile/www/img/noUser.png',
			'/home/amir/horin-mobile/www/img/noUser.png',
			'/home/amir/horin-mobile/www/img/noUser.png',
			'/home/amir/horin-mobile/www/img/noUser.png'];
      var temp='';
       for(var i=0;i<friend_user.length;i++)
      {
	      temp+='<div id="'+friend_user[i]+'" class="friend-box">';
	      temp+='<div  id="'+friend_user[i]+'ImageBox"class="friend-avatar-box">';
	      temp+='<img id="'+friend_user[i]+'Pic" class="responsive_Image" src="'+friend_avatar[i]+'" style="position:absolute;right:0%;left:auto;"></img>';
              temp+='</div>';
	      temp+='<span id="'+friend_user[i]+'Text" class="friend-username">'+friend_name[i]+'</span>';
	      temp+='</div>';
      }
     document.getElementById('friend-list').innerHTML=temp;
     for(var i=0;i<friend_user.length;i++)
     {
	     $('#'+friend_user[i]+'Text').css({'line-height':($('#'+friend_user[i]).height().toString()+'px')  });
     }
      for(var i=0;i<friend_user.length;i++)
      {
	      $('#'+friend_user[i]).css({'top':((i*12).toString()+'%')});
      }
      for(var i=0;i<document.getElementsByClassName('responsive_Image').length;i++)
      {
  	var slf='#'+document.getElementsByClassName('responsive_Image')[i].getAttribute('id');
	var prnt='#'+$(slf).parent().attr('id');
	if($(prnt).height()<$(prnt).width())
	{
	  $(slf).css({'height':'100%','width':'auto','top':'0%'});
	  $(slf).css({'right':'0%'});
	}
	else
	{
	  $(slf).css({'width':'100%','height':'auto','left':'0%'});
//	  $(slf).css({'top':((($(prnt).height()-$(prnt).width())*100/(2*$(prnt).height())).toString()+'%')});
	  $(slf).css({'top':'auto','bottom':'0%'});	  
	}
      }
      $('#random-text').css({'line-height':($('#get-random').height().toString()+'px')});
      $('#logout-text').css({'line-height':($('#logout-button').height().toString()+'px')});
      $('#app-username').css({'line-height':($('#pageHeader').height().toString()+'px')});
      $('#choose-nav').css({'top':((($('#choose-nav-box').height()-$('#choose-nav').height())*100/(2*$('#choose-nav-box').height())).toString()+'%')});


      return this;
    },
    close: function () {
      this.remove();
    },
    show_nav: function(){
	if(navSwitch==0)
	{
	  $('#mainPlate').animate({'left':'50%'},150);
	  navSwitch=1;
	}
	else
	{
	  $('#mainPlate').animate({'left':'0%'},150);
	  navSwitch=0;
	}

    },
    logout: function () {
      window.localStorage.removeItem('loggedIn');
      window.localStorage.removeItem('connect.sid');
      window.location.hash = 'logout';
    }
  });
  return AppView;
});
