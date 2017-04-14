class Api::SessionsController < ApplicationController
  def create
    info = sessions_param
    user = validate_email_pw(info.email, info.password)
    loggedInUser = login(user)
    redirect_to api_user_path(loggedInUser)
  end

  private
  def sessions_param
    param.require(:user).permit(:email, :password)
  end

  def validate_email_pw(email, pw)
    user = User.find_by_email(email)
    if user
      return user if user.validate_password(pw)
      raise "wrong password"
    else
      render user.errors.full_messesages
    end
  end
end
