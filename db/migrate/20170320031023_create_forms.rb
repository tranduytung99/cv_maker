class CreateForms < ActiveRecord::Migration[5.1]
  def change
    create_table :forms do |t|
      t.integer :position
      t.references :curriculum_vitae, foreign_key: true
      t.references :catalogue_form, foreign_key: true

      t.timestamps
    end
    add_index :forms, [:curriculum_vitae_id, :created_at]
    add_index :forms, [:catalogue_form_id, :created_at]
  end
end
