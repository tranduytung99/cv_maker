class Admin::BaseController < ApplicationController
  layout "./admin/layouts/admin"
  before_action :last_page

  protected

  def authenticate_user!
    if user_signed_in? && current_user.admin?
      super
    else 
      redirect_to admin_login_path
    end
  end 

  private

  def last_page
    session[:last_page] = request.env["HTTP_REFERER"]
  end
end
