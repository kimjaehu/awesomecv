module Api::V1
  class Api::V1::ApplicantsController < ApplicationController

    # POST /api/v1/users/:user_id/jobs/:job_id/applicants
    def create
      @apply = Applicant.new(:user_id => params[:user_id], :job_id => params[:job_id])

      if @apply.save
        render json: @apply, status: :created
      else
        render json: { errors: @apply.errors.full_messages },
               status: :unprocessable_entity
      end
    end

  end
end
