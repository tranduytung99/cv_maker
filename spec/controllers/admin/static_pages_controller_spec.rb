require "rails_helper"

RSpec.describe Admin::StaticPagesController, type: :controller do
  let!(:admin) {FactoryGirl.create :user, role: :admin}
  before :each do
    allow(controller).to receive(:current_user).and_return admin
    sign_in admin
  end

  describe "GET index" do
    it "renders the index view" do
      get :index
      expect(response).to render_template :index
    end

    it "assign @count" do
      total = User.count
      get :index
      expect(assigns :count).to eq({user: total})
    end
  end
end
