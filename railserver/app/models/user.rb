class User < ApplicationRecord
  has_secure_password
  # mount_uploader :avatar, AvatarUploader
  # validates :email, presence: true, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # # validates :username, presence: true, uniqueness: true
  # validates :password,
  #           length: { minimum: 6 },
  #           if: -> { new_record? || !password.nil? }

  has_many :educations
  has_many :carrers
  has_many :applicants
  has_one :profile
  has_one :about_me

end