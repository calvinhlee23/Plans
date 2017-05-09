class User < ActiveRecord::Base
  validates :email, :user_name, presence: true, uniqueness: true
  validates :isgoog_acc, :session_token, presence: true
  validates :user_name, length: {minimum: 2}

  after_initialize :ensure_session_token
  validate :ensure_password_digest

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_password_digest
    raise "need a password if not a google acc" if !self.is_goog_acc && self.password_digest.nil?
  end
  
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
  end

  def validate_password(pw)
    pass = BCrypt::Password.new(self.password_digest)
    pass.is_password?(pw)
  end

  has_many(
    :tickets,
    class_name: "Attendance",
    foreign_key: :user_id
  )

  has_many(
    :events,
    through: :tickets,
    foreign_key: :user_id
  )

end
