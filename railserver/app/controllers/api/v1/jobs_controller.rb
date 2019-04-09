module Api::V1
  class Api::V1::JobsController < ApplicationController

    # GET /api/v1/users/:user_id/jobs
    def index
      # @job = Job.find_by(:user_id => params[:user_id])
      @job = Job.all
      @resume = @job.to_json({:include => [:job_educations, :skills, :company]})

      render json: @resume, status: :created
    end

    # POST /api/v1/users/:user_id/jobs
    def create
      @job = Job.new(job_params.merge(:user_id => params[:user_id]))

      if @job.save
        create_skill(@job)
        Company.create(company_params.merge(:job => @job, :user_id => params[:user_id]))
        JobEducation.create(job_educ_params.merge(:job => @job))

        render json: @job, status: :created
      else
        render json: { errors: @job.errors.full_messages },
               status: :unprocessable_entity
      end

    end

    private

    def create_skill(job)
      if params.has_key?("job_skills")
        params["job_skills"].each do |key, skill|
          Skill.create(skill_params(skill).merge(:job => job))
        end
      end
    end

    def job_params
      params.require(:job).permit( :job_category, :job_title, :job_level, :job_description, :postal_code)
    end

    def job_educ_params
      params.require(:job_educations).permit( :education_level, :education_area)
    end

    def skill_params(my_params)
      my_params.permit( :area, :skill)
    end

    def company_params
      params.require(:company).permit( :company_name, :company_description, :number_of_workers)
    end

  end
end
