class User < ApplicationRecord
  enum role: {
    admin: 0,
    member: 1
  }
  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable,
    :omniauthable, :omniauth_providers => [:facebook]

  has_many :curriculum_vitaes, dependent: :destroy

  PARAMS_ATTRIBUTES = [:first_name, :last_name, :date_of_birth, :phone_number,
    :address, :avatar, :website, :sex].freeze

  class << self
    def from_omniauth auth
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.provider = auth.provider
        user.uid = auth.uid
        user.email = auth.info.email
        user.first_name = auth.info.name
        user.password = Devise.friendly_token[0, 20]
      end
    end
  end
end
