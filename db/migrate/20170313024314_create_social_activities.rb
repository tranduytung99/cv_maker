class CreateSocialActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :social_activities do |t|
      t.text :detail
      t.date :start_date
      t.date :end_date
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :social_activities, [:user_id, :created_at]
  end
end
