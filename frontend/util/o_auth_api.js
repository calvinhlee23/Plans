import Plans_Session_API from './plans_session_api.js';

const OAuth_API = {
  login: (success, error) => {
    var GoogleAuth = gapi.auth2.getAuthInstance();
    if (GoogleAuth.isSignedIn.get()) {
      error();
      console.log('already signed');
      GoogleAuth.signOut()
    } else {
      GoogleAuth.signIn().then(() => {
        if(GoogleAuth.isSignedIn.get()) {
          success(GoogleAuth.currentUser);
        }
      });
    }
    // do whatever is necessary to authenticate with google
    // then authenticate with plans
  },

  logout: (error) => {

  }
};

export default OAuth_API;
