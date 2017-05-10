class Api::SessionsController < ApplicationController
  def create
    info = sessions_param
    p '#####################################3'
    p info
    if info[:is_goog_acc]
      user = User.find_by_email(info[:email]);
      if user
        p '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
        p user
        user.expires = info[:expires]
        user.save
        google_login(user)
      else
        info[:session_token] = info.delete(:google_access_token)
        new_user = User.new(info)
        if new_user.save
            google_login(new_user);
        end
      end
    else
      user = User.validate_email_pw(info.email, info.password)
      login(user) if user
    end
    render json: get_current_user
  end

  def destroy
    logout
    render json: {}
  end
  private
  def sessions_param
    params.require(:user).permit(:email, :password, :user_name, :is_goog_acc, :google_access_token, :expires)
  end


end
