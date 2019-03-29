class CreateAboutMes < ActiveRecord::Migration[5.2]
  def change
    create_table :about_mes do |t|
      t.string :description
      t.references :user, foreign_key: true
      t.references :profile, foreign_key: true

      t.timestamps
    end
  end
end
