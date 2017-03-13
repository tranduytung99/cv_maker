class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :user_name
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.date :date_of_birth
      t.string :email
      t.string :phone_number
      t.string :address
      t.text :objective
      t.string :major
      t.boolean :admin

      t.timestamps
    end
  end
end
