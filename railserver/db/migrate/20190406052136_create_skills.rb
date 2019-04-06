class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :type
      t.string :value
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
