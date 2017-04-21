class Api::AttendancesController < ApplicationController
  def create
    user = get_current_user
    raise "you need to be logged in to rsvp!" unless user
    attnd = Attendance.new(attnd_param)
    attnd.user_id = user.id
    if attnd.save
      p "yay you are going to this event!"
      redirect_to api_attendance_path(attnd.id)
    else
      render attnd.errors.full_messages
    end
  end

  def destroy
    user = get_current_user
    raise "you need to be logged in to do this" unless user
    target = Attendace.find_by_user_id(get_current_user.id).
             find_by_event_id(attnd_param)
    if target
      target.destroy
    else
      render json: "something went wrong while canceling your rsvp"
    end
  end

  private
  def attnd_param
    param.require(:attnd).permit(:event_id)
  end
end
