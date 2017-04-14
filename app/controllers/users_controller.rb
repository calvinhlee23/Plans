class UsersController < ApplicationController
  def create
    user = User.new(users_param)
    if user.save
      login(user)
      redirect_to api_user_url(user)
    end
  end

  def show
    id = params[:id]
    @user = User.find_by_id(id)
    render :show
  end
  
  def update

  end

  private

  def users_param
    params.permit(:email, :password, :email)
  end

end
