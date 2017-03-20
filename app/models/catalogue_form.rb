class CatalogueForm < ApplicationRecord
  has_many :forms, dependent: :destroy
end
