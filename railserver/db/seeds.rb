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


# Random ARRAYS
job_title = [FrontEndDeveloper = "Front End Developer", BackEndDeveloper = "Back End Developer", FullStackDeveloper = "Full Stack Developer", SoftwareArchitect = "Software Architect", SoftwareDeveloper = "Software Developer", SoftwareEngineer = "Software Engineer"]
job_level = [dog="Junior", cat="Senior", turtle="Manager"]
skill = [label1="C#",label2="Elixir",label3="Go",label4="Java",label5="JavaScript",label6="PHP",label7="Python",label8="Ruby",label9="Rust",label10="Swift",label11="TypeScript",label13="Angular",label14="Django",label15="Express",label16="Node",label17="Rails",label18="React",label19="Vue"]
postal_code = [dog="M3H 6A7", cat="M4C 1X5", turtle="M4E 0A7", A1="M4C 1R3", A2="M4C 3J6", A3="M4C 3X1", A4="M4C 4L4"]
job_desc = [
  one = "We are looking for an awesome back-end software developer who will be a key part of the Honeybee development team. You will be working closely with our VP of Technology Innovation, who leads the software development team, and will have tremendous influence over the direction, architecture, and development of the product.",
  two = "As a senior resource on the team, you will be relied upon to produce excellent quality code and design scalable / sustainable architect for our back-end stack.",
  three = "We’re looking for a Front End Developer to join our growing production team. You’re a proactive problem solver who enjoys contributing your code on a variety of challenging projects.",
  four = "We're hiring to work with our team on the front-end of our stack. The main languages we use are Clojure, ClojureScript, and Go. While experience with those languages are great, we're also looking for candidates who have an interest in learning them.",
  five = "We are looking for someone who has 3-5 years of experiences in a broad range of technologies, including back-end, cloud infrastructure, and web front-end",
  six = "Software Engineers document this process through the use of diagrams and flowcharts, developing computer instructions through the use of algorithms. Given the breadth of the role, a Software Engineer must have a thorough understanding of computer systems."
]
# Let's do this ...

puts "Destroy Tables ..."

AboutMe.destroy_all
Education.destroy_all
Carrer.destroy_all
Profile.destroy_all
Skill.destroy_all
Company.destroy_all
JobEducation.destroy_all
Applicant.destroy_all
Job.destroy_all
User.destroy_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

## USER

puts "Creating new Users ..."

usr1 = User.create(
  :email => 'weihan.sw@gmail.com',
  :password => '123456',
  :user_type => 'recruiter',
  :password_confirmation => '123456'
)
usr2 = User.create(
  :email => 'jay@gmail.com',
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)
usr3 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)
usr4 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)
usr5 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)
usr6 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)
usr7 = User.create(
  :email => Faker::Internet.email,
  :password => '123456',
  :user_type => 'applicant',
  :password_confirmation => '123456'
)

## PROFILE

puts "Re-creating Profiles ..."

pro1 = Profile.create(
  :first_name => 'Weihan',
  :last_name => 'Su',
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr1
)

pro2 = Profile.create(
  :first_name => 'Jay',
  :last_name => 'Kim',
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr2
)

pro3 = Profile.create(
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr3
)

pro4 = Profile.create(
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr4
)

pro5 = Profile.create(
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr5
)

pro6 = Profile.create(
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr6
)

pro7 = Profile.create(
  :first_name => Faker::Name.first_name,
  :last_name => Faker::Name.last_name,
  :phone_number =>  Faker::PhoneNumber.cell_phone,
  :postal_code => postal_code.sample,
  :street_address => Faker::Address.street_address,
  :city => 'Toronto',
  :country => 'Canada',
  :user => usr7
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
  user: usr2
})

edu3 = pro1.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr3
})

edu4 = pro2.educations.create!({
  school_name: Faker::Educator.university,
  degree: Faker::Educator.degree,
  start_date: Faker::Date.backward(14),
  end_date: Faker::Date.backward(14),
  notes: Faker::GreekPhilosophers.quote,
  user: usr4
})

edu5 = pro2.educations.create!({
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
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr1
})

carr2 = pro2.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr2
})

carr3 = pro3.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr3
})

carr4 = pro4.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr4
})

carr5 = pro5.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr5
})

carr6 = pro6.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr6
})

carr7 = pro7.carrers.create!({
  job_category:  'IT',
  job_title: job_title.sample,
  month_experience: Faker::Number.between(1, 100),
  description: Faker::Hipster.paragraph(3),
  user: usr7
})



## ABOUTME

puts "Re-creating About_me ..."


AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro1,
  :user => usr1
)

AboutMe.create(
  :description => "Detail oriented professional with experience in SERVER MANUFACTURING, COMPUTER HARDWARE TROUBLESHOOTING and MANAGEMENT. Seeking to take the next career step with respected organization dedicated to world class quality.",
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
  :profile => pro6,
  :user => usr6
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro5,
  :user => usr5
)

AboutMe.create(
  :description => Faker::Hipster.paragraph(3),
  :profile => pro7,
  :user => usr7
)

## JOB

puts "Re-creating Jobs ..."



job1 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr1
)

job11 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr1
)

job12 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr1
)

job13 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr1
)

job2 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr2
)

job3 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr3
)

job4 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr4
)

job5 = Job.create(
  :job_category => "IT",
  :job_title => job_title.sample,
  :job_level =>  job_level.sample,
  :job_description => job_desc.sample,
  :postal_code => postal_code.sample,
  :user => usr5
)

## SKILL

puts "Re-creating Skills ..."

job1.skills.create!({
  area:  'language',
  skill: skill.sample
})

job1.skills.create!({
  area:  'language',
  skill: skill.sample
})

job1.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job11.skills.create!({
  area:  'language',
  skill: skill.sample
})

job12.skills.create!({
  area:  'language',
  skill: skill.sample
})

job12.skills.create!({
  area:  'language',
  skill: skill.sample
})

job12.skills.create!({
  area:  'language',
  skill: skill.sample
})

job13.skills.create!({
  area:  'language',
  skill: skill.sample
})

job13.skills.create!({
  area:  'language',
  skill: skill.sample
})

job13.skills.create!({
  area:  'language',
  skill: skill.sample
})

job13.skills.create!({
  area:  'language',
  skill: skill.sample
})

job13.skills.create!({
  area:  'language',
  skill: skill.sample
})

job12.skills.create!({
  area:  'language',
  skill: skill.sample
})

job12.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job2.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job3.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job4.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

job5.skills.create!({
  area:  'language',
  skill: skill.sample
})

## COMPANY

puts "Re-creating Companies ..."

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job1,
  :user => usr1
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job11,
  :user => usr1
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job12,
  :user => usr1
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job13,
  :user => usr1
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job2,
  :user => usr2
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job3,
  :user => usr3
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job4,
  :user => usr4
)

Company.create(
  :company_name => Faker::Company.name,
  :company_description => Faker::GreekPhilosophers.quote,
  :number_of_workers => Faker::Number.between(1, 100),
  :job => job5,
  :user => usr5
)


## JOB EDUCATION

puts "Re-creating Job_Educations ..."

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job1
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job2
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job3
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job11
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job12
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job13
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job4
)

JobEducation.create(
  :education_level => Faker::Job.education_level,
  :education_area => "Computer Science",
  :job => job5
)

## JOB APPLICANTS

puts "Re-creating Applicant ..."

Applicant.create(
  :status => "applied",
  :job => job1,
  :user => usr2
)

Applicant.create(
  :status => "applied",
  :job => job1,
  :user => usr3
)

Applicant.create(
  :status => "applied",
  :job => job1,
  :user => usr4
)

Applicant.create(
  :status => "applied",
  :job => job1,
  :user => usr6
)

Applicant.create(
  :status => "applied",
  :job => job11,
  :user => usr7
)

Applicant.create(
  :status => "applied",
  :job => job11,
  :user => usr3
)

Applicant.create(
  :status => "applied",
  :job => job11,
  :user => usr5
)

Applicant.create(
  :status => "applied",
  :job => job11,
  :user => usr6
)




