import {mount} from 'react-mounter';

publicRoutes = FlowRouter.group({
  name: 'publicroutes'
});

privateRoutes = FlowRouter.group({
  name: 'privateroutes'
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
  action:function(){
    mount(Layout,{
      sidebar: <div>Sidebar</div>,
      content: <div>Content</div>
    })
  }
});
