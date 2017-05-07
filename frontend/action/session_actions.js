export const SessionConstants = {
  LOG_OUT: "LOG_OUT",
  GOOGLE_LOGIN: "GOOGLE_LOGIN",
  PLANS_LOGIN: "PLANS_LOGIN"
};

export const login = (type, user = null) => ({
  type,
  user
});

export const logout = () => ({
  type: SessionConstants.LOG_OUT
});
