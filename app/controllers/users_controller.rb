class UsersController < ApplicationController
  before_action :load_user, except: [:index, :new, :create]

  def index
    @users = User.all.page(params[:page]).per Settings.users.index.limit_page
  end

  def show
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @user = User.new user_params
    if @user.save
      redirect_to @user, notice: t(".notice_create_success")
    else
      render :new
    end
  end

  def update
    if @user.save
      redirect_to @user, notice: t(".notice_update_success")
    else
      render :edit
    end
  end

  def destroy
    @user.destroy
    redirect_to users_url, notice: t(".notice_destroy_success")
  end

  private

  def load_user
    @user = User.find_by id: params[:id]
  end

  def user_params
    params.require(:user).permit :user_name, :password_digest, :first_name,
      :last_name
  end
end
