class Api::SessionsController < ApplicationController
  def create
    info = sessions_param
    info[:session_token] = info.delete(:google_id_token)
    info[:expires] = info[:expires].to_i.second.from_now
    # if this is a google_acc
    if info[:is_goog_acc]
      user = User.find_by_email(info[:email]);
      if user
        # update access_token
        user.expires = info[:expires].to_i.second.from_now
        # update session_token
        user.session_token = info[:session_token]
        google_login(user) if user.save
      else
        new_user = User.new(info)
        if new_user.save
            google_login(new_user);
        end
      end
    else
      # if this is not a google_acc
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
    params.require(:user).permit(:email, :password, :user_name, :is_goog_acc, :google_id_token, :expires)
  end


end
