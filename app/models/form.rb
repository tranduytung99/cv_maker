class Form < ApplicationRecord
  has_many :sub_forms, dependent: :destroy
  belongs_to :curriculum_vitae, :catalogue_form
end
