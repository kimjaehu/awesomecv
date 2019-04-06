class CreateJobEducations < ActiveRecord::Migration[5.2]
  def change
    create_table :job_educations do |t|
      t.string :education_level
      t.string :education_area
      t.references :job, foreign_key: true

      t.timestamps
    end
  end
end
