# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'
puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Let's do this ...

puts "Destroy Tables ..."

AboutMe.destroy_all
Education.destroy_all
Carrer.destroy_all
Profile.destroy_all
Skill.destroy_all
Company.destroy_all
JobEducation.destroy_all
Job.destroy_all
User.destroy_all

## USER

puts "Creating new Users ..."

usr1 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :password_confirmation => '123456'
)
usr2 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :password_confirmation => '123456'
)
usr3 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :password_confirmation => '123456'
)
usr4 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :password_confirmation => '123456'
)
usr5 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :password_confirmation => '123456'
)

## PROFILE

puts "Re-creating Profiles ..."

pro1 = Profile.create(
  :first_name => Faker::Games::Pokemon.name,
  :last_name => Faker::Games::Pokemon.move,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => Faker::Address.postcode,
  :street_address => Faker::Address.street_address,
  :city => Faker::Address.city,
  :country => Faker::Address.country,
  :user => usr1
)

pro2 = Profile.create(
  :first_name => Faker::Games::Pokemon.name,
  :last_name => Faker::Games::Pokemon.move,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => Faker::Address.postcode,
  :street_address => Faker::Address.street_address,
  :city => Faker::Address.city,
  :country => Faker::Address.country,
  :user => usr2
)

pro3 = Profile.create(
  :first_name => Faker::Games::Pokemon.name,
  :last_name => Faker::Games::Pokemon.move,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => Faker::Address.postcode,
  :street_address => Faker::Address.street_address,
  :city => Faker::Address.city,
  :country => Faker::Address.country,
  :user => usr3
)

pro4 = Profile.create(
  :first_name => Faker::Games::Pokemon.name,
  :last_name => Faker::Games::Pokemon.move,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => Faker::Address.postcode,
  :street_address => Faker::Address.street_address,
  :city => Faker::Address.city,
  :country => Faker::Address.country,
  :user => usr4
)

pro5 = Profile.create(
  :first_name => Faker::Games::Pokemon.name,
  :last_name => Faker::Games::Pokemon.move,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => Faker::Address.postcode,
  :street_address => Faker::Address.street_address,
  :city => Faker::Address.city,
  :country => Faker::Address.country,
  :user => usr5
)



## EDUCATION

puts "Re-creating Educations ..."



edu1 = pro1.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr1
})

edu2 = pro1.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr1
})

edu3 = pro1.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr1
})

edu4 = pro2.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr2
})

edu5 = pro2.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr2
})

edu6 = pro2.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr2
})

edu7 = pro2.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr2
})

edu8 = pro3.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr3
})

edu9 = pro3.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr3
})

edu10 = pro3.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr3
})

edu11 = pro4.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr4
})

edu12 = pro4.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr4
})

edu13 = pro4.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr4
})

edu14 = pro4.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr4
})

edu15 = pro5.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr5
})

edu16 = pro5.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr5
})

edu17 = pro5.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr5
})


## CARRER

puts "Re-creating Carrer ..."


carr1 = pro1.carrers.create!({
  job_category:  Faker::Job.field,
  job_title: Faker::Job.title,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr1
})

carr2 = pro2.carrers.create!({
  job_category:  Faker::Job.field,
  job_title: Faker::Job.title,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr2
})

carr3 = pro3.carrers.create!({
  job_category:  Faker::Job.field,
  job_title: Faker::Job.title,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr3
})

carr4 = pro4.carrers.create!({
  job_category:  Faker::Job.field,
  job_title: Faker::Job.title,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr4
})

carr5 = pro5.carrers.create!({
  job_category:  Faker::Job.field,
  job_title: Faker::Job.title,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr5
})



## ABOUTME

puts "Re-creating About_me ..."


AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro1,
  :user => usr1
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro2,
  :user => usr2
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro3,
  :user => usr3
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro4,
  :user => usr4
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro5,
  :user => usr5
)

## JOB

puts "Re-creating Jobs ..."


job1 = Job.create(
  :job_category => Faker::Games::Pokemon.name,
  :job_title => Faker::Games::Pokemon.move,
  :job_level =>  Faker::PhoneNumber.cell_phone,
  :job_description => Faker::Address.postcode,
  :postal_code => Faker::Address.postcode,
  :user => usr1
)

job2 = Job.create(
  :job_category => Faker::Games::Pokemon.name,
  :job_title => Faker::Games::Pokemon.move,
  :job_level =>  Faker::PhoneNumber.cell_phone,
  :job_description => Faker::Address.postcode,
  :postal_code => Faker::Address.postcode,
  :user => usr2
)

job3 = Job.create(
  :job_category => Faker::Games::Pokemon.name,
  :job_title => Faker::Games::Pokemon.move,
  :job_level =>  Faker::PhoneNumber.cell_phone,
  :job_description => Faker::Address.postcode,
  :postal_code => Faker::Address.postcode,
  :user => usr3
)

job4 = Job.create(
  :job_category => Faker::Games::Pokemon.name,
  :job_title => Faker::Games::Pokemon.move,
  :job_level =>  Faker::PhoneNumber.cell_phone,
  :job_description => Faker::Address.postcode,
  :postal_code => Faker::Address.postcode,
  :user => usr4
)

job5 = Job.create(
  :job_category => Faker::Games::Pokemon.name,
  :job_title => Faker::Games::Pokemon.move,
  :job_level =>  Faker::PhoneNumber.cell_phone,
  :job_description => Faker::Address.postcode,
  :postal_code => Faker::Address.postcode,
  :user => usr5
)

## SKILL

puts "Re-creating Skills ..."

job1.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job1.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job1.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job2.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job3.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job4.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

job5.skills.create!({
  area:  Faker::Job.field,
  skill: Faker::Job.title
})

## COMPANY

puts "Re-creating Companies ..."

Company.create(
  :company_name => Faker::Job.field,
  :company_description => Faker::Job.field,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job1,
  :user => usr1
)

Company.create(
  :company_name => Faker::Job.field,
  :company_description => Faker::Job.field,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job2,
  :user => usr2
)

Company.create(
  :company_name => Faker::Job.field,
  :company_description => Faker::Job.field,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job3,
  :user => usr3
)

Company.create(
  :company_name => Faker::Job.field,
  :company_description => Faker::Job.field,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job4,
  :user => usr4
)

Company.create(
  :company_name => Faker::Job.field,
  :company_description => Faker::Job.field,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job5,
  :user => usr5
)


## COMPANY

puts "Re-creating Job_Educations ..."

JobEducation.create(
  :education_level => Faker::Educator.university,
  :education_area => Faker::Educator.degree,
  :job => job1
)

JobEducation.create(
  :education_level => Faker::Educator.university,
  :education_area => Faker::Educator.degree,
  :job => job2
)

JobEducation.create(
  :education_level => Faker::Educator.university,
  :education_area => Faker::Educator.degree,
  :job => job3
)

JobEducation.create(
  :education_level => Faker::Educator.university,
  :education_area => Faker::Educator.degree,
  :job => job4
)

JobEducation.create(
  :education_level => Faker::Educator.university,
  :education_area => Faker::Educator.degree,
  :job => job5
)

# job1.job_education.create!({
#   education_level: Faker::Educator.university,
#   education_area: Faker::Educator.degree
# })

# job2.job_education.create!({
#   education_level: Faker::Educator.university,
#   education_area: Faker::Educator.degree
# })

# job3.job_education.create!({
#   education_level: Faker::Educator.university,
#   education_area: Faker::Educator.degree
# })

# job4.job_education.create!({
#   education_level: Faker::Educator.university,
#   education_area: Faker::Educator.degree
# })

# job5.job_education.create!({
#   education_level: Faker::Educator.university,
#   education_area: Faker::Educator.degree
# })
