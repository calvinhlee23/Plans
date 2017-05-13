export const EventConstants = {
  CREATE_EVENT: "CREATE_EVENT",
  FETCH_CU_COMING_EVENTS: "FETCH_CU_COMING_EVENTS",
  RECEIVE_CU_EVENTS: "RECEIVE_CU_EVENTS"
};

export const createEvent = (event) => ({
  type: EventConstants.CREATE_EVENT,
  event
});

export const fetchCUComingEvents = () => ({
  type: EventConstants.FETCH_CU_COMING_EVENTS
});

export const receiveCUEvents = (events) => ({
  type: EventConstants.RECEIVE_CU_EVENTS,
  events
});
