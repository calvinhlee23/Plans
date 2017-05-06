export default const Plans_Session_API = {
  login: (user, success, error) => {
    $.ajax({
      method: "POST",
      url: "/api/sessions",
      data: user,
      dataType: "json",
      success,
      error
    });
  },

  logout: (error) => {
    $.ajax({
      method: "DELETE",
      url: "/api/sessions",
      error
    })
  }
}
