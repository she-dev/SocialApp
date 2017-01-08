import Home from './screens/Home';

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
      leftButton: null,
      rightButton: null,
      hideNavigationBar: false,
      statusBarStyle: "light-content"
    }
  }
}

export default new Routes()
