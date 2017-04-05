class ProfilesController < ApplicationController
  def edit
    @user = current_user
  end

  def update
    @user = current_user
    if @user.update_attributes update_params
      redirect_to root_url
    else
      render :edit
    end
  end

  private

  def update_params
    params.require(:user).permit User::PARAMS_ATTRIBUTES
  end
end
