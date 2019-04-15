# AwesomeCV

AwesomeCV is an app that enables job seekers to search jobs in specific location and potential employers search applicants in specific location. This app uses React for front-end and Rails for back-end as well as Google maps and geocode API to render locaiton informations.

## Getting started

To get started, please follow below:
1. Fork this repository, then clone your fork of this repository.
2. In /railserver folder, install dependencies using the 'bundle install' command.
3. Start the rails server using the 'bin/rails s -b 0.0.0.0' command (PORT:3000)
4. In your browser connect to <http://localhost:3000/>
5. In /reactapp folder, install dependencies using the `npm install` command.
6. Start the react server using the `npm start` command (PORT:3006).
7. In your browser connect to <http://localhost:3006/>

Some basic commands are:
```
[railserver] bundle install
[railserver] bin/rails s -b 0.0.0.0
[reactapp] npm install
[reactapp] npm start
```

## Applicant: How to find job

1. Register using email and password; indicate that you are applicant by clicking applicant radio button
2. Login using email and password
3. Input information on resume and click save button to save resume on database
4. Click find a job button to go to the app and find a job that is close by
5. Click the pin to view more information
6. click Apply Now button to apply

## Employer/Recruiter: How to find candidate
1. Register using email and password; indicate that you are applicant by clicking applicant radio button
2. Login using email and password
3. Click post a job and input job details
4. Click Job Board to find the list of jobs that are created
5. Click SHOW ME THE GEEKS to find all the applicants that are applied

## Functions

- [x] Registration of users
- [x] Login/authentication of users (send token) redirect to correct part of the app
- [x] Load and save resume information
- [x] Render job location to the map
- [x] Show the list of jobs
- [x] Show resume of the applicant
- [ ] Render candidate location to the map (Find Candidates)
- [ ] Send confirmation when resume is received
- [ ] Direct applicants to specific job page
- [ ] Send resume to employer

## Screenshots

### Register/Login

!["Register"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/register.png?raw=true)

!["login"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/login.png?raw=true)

### Applicant

!["Resume"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/resume.png?raw=true)

!["Job Location Map"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/applicant_map.png?raw=true)

### Employer/Recruiter

!["Post Job"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/post_job.png?raw=true)

!["Job Board"](https://github.com/kimjaehu/awesomecv/blob/master/reactapp/public/pics/job_board.png?raw=true)

### Dependencies

* node
* babel-core
* babel-loader
* babel-preset-es2015
* babel-preset-react
* material-ui
* react
* react-dom
* react-redux
* rails
* axios
* react-geocode
* PostgreSQL
* bcrypt
* jwt
* faker

## Created by
- Jay
- Weihan