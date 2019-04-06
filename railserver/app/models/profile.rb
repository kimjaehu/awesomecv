class Profile < ApplicationRecord
  belongs_to :user

  has_many :educations
  has_many :carrers
  has_one :about_me

end
