export const Calendar_API = {
  fetchMyUpComingEvents: (success, error) => {

  },

  fetchCUCalendar: (success, error) => {
    gapi.client.calendar.events.list({
         'calendarId': 'primary',
         'timeMin': (new Date()).toISOString(),
         'showDeleted': false,
         'singleEvents': true,
         'maxResults': 10,
         'orderBy': 'startTime'
       }).then((response) => {
         var events = response.result.items;
         success(events);
         console.log("hihi");
       });
  }
}
