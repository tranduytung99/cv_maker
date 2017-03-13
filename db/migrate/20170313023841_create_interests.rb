class CreateInterests < ActiveRecord::Migration[5.1]
  def change
    create_table :interests do |t|
      t.text :description
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :interests, [:user_id, :created_at]
  end
end
