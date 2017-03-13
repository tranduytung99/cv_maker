class User < ApplicationRecord
  has_many :certifications, dependent: :destroy
  has_many :educations, dependent: :destroy
  has_many :portfolios, dependent: :destroy
  has_many :interests, dependent: :destroy
  has_many :optionals, dependent: :destroy
  has_many :skills, dependent: :destroy
  has_many :social_activities, dependent: :destroy
  has_many :work_experiences, dependent: :destroy
end
