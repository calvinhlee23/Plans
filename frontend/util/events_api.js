const EventAPI = ({
  fetchCUComingEvents: (success, error) => {
    $.ajax({
      method: "GET",
      urls: "/api/cuEvents",
      success,
      error
    });
  },
});

export default EventAPI;
