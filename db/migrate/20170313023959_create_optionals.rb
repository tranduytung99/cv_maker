class CreateOptionals < ActiveRecord::Migration[5.1]
  def change
    create_table :optionals do |t|
      t.text :detail
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :optionals, [:user_id, :created_at]
  end
end
