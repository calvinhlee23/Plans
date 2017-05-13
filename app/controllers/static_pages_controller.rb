class StaticPagesController < ApplicationController
  def index
    @user = get_current_user
    render :index
  end
end
