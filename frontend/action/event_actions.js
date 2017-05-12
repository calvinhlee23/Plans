export const EventConstants = {
  CREATE_EVENT: "CREATE_EVENT",
  FETCH_CU_COMING_EVENTS: "FETCH_CU_COMING_EVENTS",
  RECEIVE_CU_EVENTS: "RECEIVE_CU_EVENTS"
};

export const createEvent = (event) => {
  type: Event_Constants.CREATE_EVENT,
  event
};

export const fetchCUComingEvents = () => {
  type: Event_Constants.FETCH_CU_COMING_EVENTS
}

export const receiveCUEvents = (events) => {
  type: Event_Constants.RECEIVE_CU_EVENTS,
  events
};
