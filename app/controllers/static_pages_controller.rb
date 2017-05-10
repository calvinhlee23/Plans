class StaticPagesController < ApplicationController
  def index
    p '$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4'
    @user = get_current_user
    p @user
    p cookies.signed[:session]
    render :index
  end
end
