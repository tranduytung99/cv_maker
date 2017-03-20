class CreateSubForms < ActiveRecord::Migration[5.1]
  def change
    create_table :sub_forms do |t|
      t.string :title
      t.string :content
      t.string :time
      t.references :form, foreign_key: true

      t.timestamps
    end
    add_index :sub_forms, [:form_id, :created_at]
  end
end
