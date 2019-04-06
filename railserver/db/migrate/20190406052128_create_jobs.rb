class CreateJobs < ActiveRecord::Migration[5.2]
  def change
    create_table :jobs do |t|
      t.string :job_category
      t.string :job_title
      t.string :job_level
      t.string :job_description
      t.string :postal_code
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
