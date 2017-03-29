class Form < ApplicationRecord
  has_many :sub_forms, dependent: :destroy
  belongs_to :curriculum_vitae
  belongs_to :catalogue_form
end
