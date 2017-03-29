module Api
  class UsersController < ApplicationController
    def show
      user = User.select(:id, :first_name, :last_name, :email, :phone_number,
        :date_of_birth, :avatar, :sex, :website).find_by id: params[:id]
      render json: user
    end
  end
end
