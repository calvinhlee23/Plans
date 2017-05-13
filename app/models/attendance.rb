class Attendance < ActiveRecord::Base
  validates :user_id, :event_id, presence: true;
  validates :user_id, uniqueness: { scope: :event_id, message: "already rsvp-ed" }
  validate :check_event_not_full

  belongs_to(
    :event,
    class_name: "Event",
    foreign_key: "event_id"
  )

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: "user_id"
  )

  private

  def check_event_not_full
    count = Attendance.where(event_id: self.event_id).count()
    if self.event.attnd_limit != -1 && count >= Event.find_by_id(self.event_id).attnd_limit
      raise "Event is full"
    end
  end
end
