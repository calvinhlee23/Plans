class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :login, :logout, :logged_in?, :get_current_user

  def login(user)
    user.reset_session_token
    session[:session] = user.session_token
    redirect_to api_user_path(get_current_user)
  end

  def logged_in?
    return true if get_current_user
    false
  end

  def logout
    get_current_user.reset_session_token
    reset_session
  end

  def get_current_user
    @current_user ||= User.find_by_session_token(session[:session])
  end
end
