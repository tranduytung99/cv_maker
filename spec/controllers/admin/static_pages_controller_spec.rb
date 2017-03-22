require "rails_helper"

RSpec.describe Admin::StaticPagesController, type: :controller do
  describe "GET index" do
    it "renders the index view" do
      get :index
      expect(response).to render_template :index
    end

    it "assign @count" do
      get :index
      expect(assigns :count).to eq({user: 0})
    end
  end
end
