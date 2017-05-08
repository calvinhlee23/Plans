export const SessionConstants = {
  LOG_OUT: "LOG_OUT",
  GOOGLE_LOGIN: "GOOGLE_LOGIN",
  PLANS_LOGIN: "PLANS_LOGIN",
  RECEIVE_SESSION: "RECEIVE_SESSION"
};

export const login = (type, user = null) => ({
  type,
  user
});

export const logout = () => ({
  type: SessionConstants.LOG_OUT
});

export const receiveSession = (user) => ({
  type: SessionConstants.RECEIVE_SESSION,
  user
})
