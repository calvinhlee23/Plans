export const Event_Constants = {
  CREATE_EVENT: "CREATE_EVENT"
};

export const createEvent = (event) => {
  type: Event_Constants.CREATE_EVENT,
  event
};
