class Job < ApplicationRecord
  belongs_to :user

  has_many :job_educations
  has_many :skills
  has_one :company
  has_many :applicants
end
