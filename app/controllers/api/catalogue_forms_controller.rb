module Api
  class CatalogueFormsController < ApplicationController
    def index
      list = CatalogueForm.all
      render json: list
    end
  end
end
