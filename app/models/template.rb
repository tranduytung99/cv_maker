class Template < ApplicationRecord
  has_many :curriculum_vitaes, dependent: :destroy
end
