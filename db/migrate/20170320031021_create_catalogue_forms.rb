class CreateCatalogueForms < ActiveRecord::Migration[5.1]
  def change
    create_table :catalogue_forms do |t|
      t.string :name
      t.string :icon
      t.string :hint_title
      t.string :hint_content

      t.timestamps
    end
  end
end
