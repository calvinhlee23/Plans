const Events_API = ({
  fetchCUComingEvents: (success, error) => {
    $.ajax({
      method: "GET",
      url: "/api/cuEvents",
      dataType: "json",
      success,
      error
    });
  },
});

export default Events_API;
