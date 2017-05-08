const G_CLIENT_CRED = {"web":
  {"client_id":"272338750202-71dqtma6rd79lvk6l09k4o5c3pg9aaju.apps.googleusercontent.com",
    "project_id":"clear-storm-166723",
    "auth_uri":"https://accounts.google.com/o/oauth2/auth",
    "token_uri":"https://accounts.google.com/o/oauth2/token",
    "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
    "client_secret":"Qks00N3NDxbCjx56r6sq5MVs",
    "javascript_origins":["http://localhost:3000"]}}

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
console.log(G_CLIENT_CRED);
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}
function initClient() {
 gapi.client.init({
   discoveryDocs: DISCOVERY_DOCS,
   clientId: G_CLIENT_CRED.web.client_id,
   scope: SCOPES
 })
};
