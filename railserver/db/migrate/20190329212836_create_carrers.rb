class CreateCarrers < ActiveRecord::Migration[5.2]
  def change
    create_table :carrers do |t|
      t.string :job_category
      t.string :job_title
      t.string :seniority
      t.string :month_experience
      t.string :description
      t.references :user, foreign_key: true
      t.references :profile, foreign_key: true

      t.timestamps
    end
  end
end
