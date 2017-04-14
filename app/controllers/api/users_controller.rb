class Api::UsersController < ApplicationController
  def create
    flash
    user = User.new(users_param)
    if user.save
      login(user)
      redirect_to api_user_path(user)
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
    params.permit(:user_name, :password, :email)
  end

end
