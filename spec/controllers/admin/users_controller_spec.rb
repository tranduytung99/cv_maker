require "rails_helper"

RSpec.describe Admin::UsersController, type: :controller do
  let!(:admin){FactoryGirl.create :user, role: :admin}
  before :each do
    allow(controller).to receive(:current_user).and_return admin
    sign_in admin
  end

  describe "GET index" do
    it "renders the index view" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe "GET new" do
    it "renders the new view" do
      get :new
      expect(response).to render_template :new
    end
  end
end
