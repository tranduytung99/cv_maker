class CreateWorkExperiences < ActiveRecord::Migration[5.1]
  def change
    create_table :work_experiences do |t|
      t.string :job_title
      t.string :company_name
      t.date :start_date
      t.date :end_date
      t.text :work_detail
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :work_experiences, [:user_id, :created_at]
  end
end
