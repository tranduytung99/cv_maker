class DownloadsController < ApplicationController
  before_action :load_user, :load_data, only: :show

  def show
    respond_to do |format|
      format.pdf {send_cv_pdf}

      if Rails.env.development?
        format.html {render_sample_html}
      end
    end
  end

  private

  def load_data
    @cv = CurriculumVitae.find_by id: params[:cv_id]
    @template = @cv.template
    @forms = @cv.forms
  end

  def load_user
    @user = current_user
    return_404 unless @user
  end

  def create_cv_pdf
    CVPdf.new load_user
  end

  def send_cv_pdf
    send_file create_cv_pdf.to_pdf, filename: create_cv_pdf.filename,
      type: "application/pdf", disposition: "inline"
  end

  def render_sample_html
    render template: "downloads/show", layout: "cv_pdf",
      locals: {user: @user}
  end

end
