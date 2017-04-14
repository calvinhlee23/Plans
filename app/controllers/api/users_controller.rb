class Api::UsersController < ApplicationController

  def create
    p '##################################################'
    p "hiiiiiiiiiiiiiiiiiiii"
    user = User.new(users_param)
    if user.save
      p "yoyoyoyoyoyo"
      # login(user)
      render json: user
    else
      render user.errors.full_messages
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
