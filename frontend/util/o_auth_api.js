import Plans_Session_API from './plans_session_api.js';

const OAuth_API = {
  login: (success, error) => {
    var GoogleAuth = gapi.auth2.getAuthInstance();
    if (GoogleAuth.isSignedIn.get()) {
      // should be handled differently for production
      error();
      window.alert('already signed in.. now signing out')
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
    var GoogleAuth = gapi.auth2.getAuthInstance();
    if (GoogleAuth.isSignedIn.get()) {
      GoogleAuth.signOut();
      // sign out from Plans session
    } else {
      error();
      window.alert('you are not signed in')
    }
  }
};

export default OAuth_API;
