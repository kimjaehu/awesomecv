class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :user_type
      t.string :password_digest

      t.timestamps
    end
  end
end
