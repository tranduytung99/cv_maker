class Admin::SessionsController < Admin::BaseController
  layout false
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
  end

  def create
    @user = User.find_by email: params[:user][:email]
    if @user && @user.valid_password?(params[:user][:password]) 
      if @user.admin?
        sign_in @user
        render :js => "window.location = '/admin'"
      else
        render json: {message: "Need admin account"}
      end
    else
      render json: {message: "Incorrect email or password"}
    end
  end

  def destroy
    sign_out
    render :js => "window.location = '/admin/login'"
  end
end
