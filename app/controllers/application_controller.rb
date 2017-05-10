class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :login, :logout, :logged_in?, :get_current_user, :google_login

  def login(user)
    user.reset_session_token
    cookies.signed[:session] = user.session_token
  end

  def google_login(user)
    # google's session token already renews
    if user.is_goog_acc
      # 1 year expiration is arbitrary since google_id_token is meant to not expire.
      cookies.signed[:session] = { value: user.session_token, expires: 1.year.from_now }
    else
      raise 'you have tried to login as a google user when youre not'
    end
  end

  def logged_in?
    return true if get_current_user
    false
  end

  def logout
    get_current_user.reset_session_token
    cookies.delete :session
    @current_user = nil
  end

  def get_current_user
    @current_user ||= User.find_by_session_token(cookies.signed[:session])
  end
end
