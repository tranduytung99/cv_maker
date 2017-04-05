module Api
  class CurriculumVitaesController < ApplicationController
    def create
      cv_template = params[:cv_template]
      form_infos = JSON.parse params[:form_infos]
      curriculum_vitae = CvManagerService.new.create_new_cv current_user,
        cv_template, form_infos
      if curriculum_vitae
        render json: {id: curriculum_vitae.id}
      else
        render json: curriculum_vitae.errors, status: :unprocessable_entity
      end
    end
  end
end
