module Api::V1
  class Api::V1::JobsController < ApplicationController

    # GET /users/{userid}/profiles
    def index
      # @job = Job.find_by(:user_id => params[:user_id])
      @job = Job.all
      puts @job
      @resume = @job.to_json({:include => [:job_educations, :skills, :company]})

      render json: @resume, status: :created
    end

  end
end