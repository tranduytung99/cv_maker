class Admin::StaticPagesController < Admin::BaseController
  def index
    @count = {user: User.count}
  end
end
