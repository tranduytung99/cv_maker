class User < ApplicationRecord
  enum role: {
    admin: 0,
    member: 1
  }
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  has_many :curriculum_vitaes, dependent: :destroy

  PARAMS_ATTRIBUTES = [:first_name, :last_name, :date_of_birth, :phone_number,
    :address, :avatar, :website, :sex].freeze
end
