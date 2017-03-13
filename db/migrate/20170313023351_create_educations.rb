class CreateEducations < ActiveRecord::Migration[5.1]
  def change
    create_table :educations do |t|
      t.string :course_name
      t.string :institution
      t.date :start_date
      t.date :end_date
      t.text :detail
      t.float :gpa
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :educations, [:user_id, :created_at]
  end
end
