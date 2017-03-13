class CreateCertifications < ActiveRecord::Migration[5.1]
  def change
    create_table :certifications do |t|
      t.string :certification_name
      t.string :institution
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :certifications, [:user_id, :created_at]
  end
end
