// triggersEnter - for authenticating a user if a user enters a private route
// if user is not signed in, user is redirected to root path
import {mount} from 'react-mounter';

publicRoutes = FlowRouter.group({
  name: 'publicroutes'
});

privateRoutes = FlowRouter.group({
  name: 'privateroutes',
  triggersEnter: [function(context,redirect){
    if(!Meteor.userId()){
      return FlowRouter.go('/');
    }
  }]
});

// root path
publicRoutes.route('/',{
  name: 'Home',
  action:function(){
    mount(Homelayout,{})
  }
});

// private route to users dashboard
privateRoutes.route('/dashboard',{
  name: 'Dashboard',
  action: function(){
    mount(Layout,{
      sidebar:<Sidebar/>,
      content:<Main/>
    })
  }
});

// signout route
publicRoutes.route('/signout',{
  name: 'Signout',
  action: function(){
    Meteor.logout(function(){
      FlowRouter.go('/');
    })
  }
});
