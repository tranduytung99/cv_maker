class Admin::UsersController < Admin::BaseController
  before_action :load_user, except: [:index, :new, :create]
  before_action :load_roles, only: [:new, :edit]
  before_action :load_all_users, only: :index

  def index
    respond_to do |format|
      format.html{render :index}
      format.json{render json: @users}
    end
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    @user = User.new user_params
    if @user.save
      render js: "window.location = '/admin/users/#{@user.id}'"
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    user = params[:user]
    if user[:password].blank?
      user.delete :password
      user.delete :password_confirmation
    end
    if @user.update_attributes user_params
      render js: "window.location = '/admin/users/#{@user.id}'"
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @user.destroy
      load_all_users
      render json: @users
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def load_all_users
    @users = User.select :id, :email, :phone_number, :role
  end

  def load_user
    @user = User.find_by! id: params[:id]
  end

  def load_roles
    @roles = User.roles
  end

  def user_params
    params.require(:user).permit :first_name, :last_name, :email, :password,
      :password_confirmation, :phone_number, :role
  end
end
