import Reflux from 'reflux';
import AccessToken from './AccessToken';

let Actions = Reflux.createActions([
  "auth",
  "unauth",
  { login: { asyncResult: true } },
  "logout",
  { signup: { asyncResult: true } },
  { loadUser: { asyncResult: true } }
]);

Actions.auth.listen(function() {
  AccessToken.get()
    .then((token) => Actions.login(token))
    .catch((err) => Actions.logout());
});

Actions.auth.listen(() => {
  AccessToken.clear();
});

export default Actions;
