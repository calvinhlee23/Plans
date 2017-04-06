class User < ActiveRecord::Base
  validates :email, :user_name, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :user_name, length: {minimum: 10}
  after_initialize :ensure_session_token

  def self.generate_session_token
    SecureRandom.urlsafe_base64
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

end
