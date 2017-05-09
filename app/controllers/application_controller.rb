class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :login, :logout, :logged_in?, :get_current_user, :google_login

  def login(user)
    user.reset_session_token
    session[:session] = user.session_token
  end

  def google_login(user)
    # google's session token already renews
    session[:session] = user.session_token
    p "googleeeeeeeeeeee loginnnnnnnnnnnn"
  end

  def logged_in?
    return true if get_current_user
    false
  end

  def logout
    get_current_user.reset_session_token
    @current_user = nil
    reset_session
  end

  def get_current_user
    @current_user ||= User.find_by_session_token(session[:session])
  end
end
