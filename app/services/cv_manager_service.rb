class CvManagerService
  def create_new_cv current_user, cv_template, form_infos
    curriculum_vitae = current_user.curriculum_vitaes.new
    CurriculumVitae.transaction do
      curriculum_vitae.template_id = cv_template
      curriculum_vitae.save

      Form.transaction do
        form_infos.each do |form|
          form_db = curriculum_vitae.forms.create position: form["position"],
            catalogue_form_id: form["catalogue_form_id"]

          SubForm.transaction do
            form["subforms"].each do |subform|
              form_db.sub_forms.create title: subform["title"],
                time: subform["time"], content: subform["content"]
            end
          end
        end
      end
    end

    curriculum_vitae if curriculum_vitae.save
  end
end
