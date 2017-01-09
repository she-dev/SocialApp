import Home from './screens/Home';
import LogoutButton from './views/LogoutButton';
import PostButton from './views/PostButton';

class Routes {
  get(route, args) {
    if ("undefined" == typeof this [route]){
      console.warn('No route found with name: ' + route);
      return false;
    } else {
      return this[route].call(this, args);
    }
  }

  home() {
    return {
      name: "home",
      title: "SocialApp",
      component: Home,
      leftButton: LogoutButton,
      rightButton: PostButton,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
}

export default new Routes()
