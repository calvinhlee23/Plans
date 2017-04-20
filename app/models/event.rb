class Event < ActiveRecord::Base
  validates :host, :title, :location, :event_date_time, :public, :attnd_limit, presence: true
  validate :ensure_attnd_limit

  has_many(
    participants:
    class_name: "Attendance",
    foreign_key: :event_id
  )
  
  private
  def ensure_attnd_limit
    self.attnd_limit = -1 ? self.attnd_limit < -1 : (self.attnd_limit).ceil
  end
end
