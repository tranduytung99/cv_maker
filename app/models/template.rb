class Template < ApplicationRecord
  has_many :curriculum_vitaes, dependent: :destroy
  validates :name, presence: true
  validates :content, presence: true
end
