class CreatePortfolios < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolios do |t|
      t.string :project_name
      t.date :start_date
      t.date :end_date
      t.text :description
      t.string :responsibility
      t.string :develop_enviroment
      t.integer :team_size
      t.references :user, foreign_key: true

      t.timestamps
    end
    add_index :portfolios, [:user_id, :created_at]
  end
end
