class Api::UsersController < ApplicationController

  def create
    user = User.new(users_param)
    if user.save
      login(user)
    else
      render user.errors.full_messages
    end
  end

  def show
    id = params[:id]
    @user = User.find_by_id(id)
    p '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$'
    p @user
    render json: @user
  end

  def update

  end

  private

  def users_param
    params.require(:user).permit(:user_name, :password, :email)
  end

end
