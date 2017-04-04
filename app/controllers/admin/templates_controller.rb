class Admin::TemplatesController < Admin::BaseController
  before_action :load_all_templates, only: :index

  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    @template = Template.new template_params
    if @template.save
      render json: {template: @template}
    else
      render json: @template.errors, status: :unprocessable_entity
    end
  end

  def update
  end

  def destroy
  end

  private

  def load_all_templates
    @templates = Template.select :name, :image
  end

  def template_params
    params.require("template").permit :name, :image, :content
  end
end
