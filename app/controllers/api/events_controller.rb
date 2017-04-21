class Api::EventsController < ApplicationController
  def create
    raise "You need to be logged in to create events" unless get_current_user
    event = Event.new(events_param)
    if event.save
      render json: event
    else
      render event.errors.full_messages
    end
  end
  private
  def events_param
    param.require(:event).
          permit(:host, :title, :location, :attnd_limit,
                  :event_date_time, :public, :description)
  end
end
