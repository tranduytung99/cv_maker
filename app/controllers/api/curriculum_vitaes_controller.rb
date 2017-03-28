module Api
  class CurriculumVitaesController < ApplicationController
    def create
      cv_template = params[:cv_template]
      form_infos = JSON.parse params[:form_infos]

      is_created = CvManagerService.new().create_new_cv current_user,
        cv_template, form_infos
      if is_created
        render json: {data: "success"}
      else
        render json: curriculum_vitae.errors, status: :unprocessable_entity
      end
    end
  end
end
