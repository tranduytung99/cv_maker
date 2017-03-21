class CurriculumVitae < ApplicationRecord
  has_many :forms, dependent: :destroy
  belongs_to :user
  belongs_to :template
end
