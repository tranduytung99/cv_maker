require "rails_helper"

RSpec.describe Admin::TemplatesController, type: :controller do
  let!(:admin) {FactoryGirl.create :user, role: :admin}
  before :each do
    allow(controller).to receive(:current_user).and_return admin
    sign_in admin
  end

  describe "GET new" do
    it "renders the new view" do
      get :new
      expect(response).to render_template :new
    end
  end

  describe "POST create template" do
    it "create successfully" do
      template_params = FactoryGirl.attributes_for :template
      expect do
        post :create, params: {template: template_params}
      end.to change(Template, :count).by 1
      expect(response.status).to eq 200
    end

    it "create fail with name nil" do
      template_params = FactoryGirl.attributes_for :template, name: nil
      post :create, params: {template: template_params}
      expect(response.status).to eq 422
      expect(response.body).to include "name"
    end

    it "create fail with content nil" do
      template_params = FactoryGirl.attributes_for :template, content: nil
      post :create, params: {template: template_params}
      expect(response.status).to eq 422
      expect(response.body).to include "content"
    end
  end
end
