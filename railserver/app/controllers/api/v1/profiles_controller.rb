module Api::V1
  class Api::V1::ProfilesController < ApplicationController
    # before_action :authorize_request, except: [:create]

    # GET /users/{userid}/profiles
    def index
      @profile = Profile.find_by(:user_id => params[:user_id])
      @resume = @profile.to_json({:include => [:educations, :carrers, :about_me]})

      render json: @resume, status: :created
    end


    # POST /users/{userid}/profile
    def create
      puts "PARAMS: #{profile_params}"
      @profile = Profile.new(profile_params.merge(:user_id => params[:user_id]))

      if @profile.save
        create_educ(@profile)
        create_carrer(@profile)
        AboutMe.create(about_params.merge(:profile => @profile, :user_id => params[:user_id]))
        render json: @profile, status: :created
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    private

    def create_educ(profile)
      if params.has_key?("educations")
        params["educations"].each do |key, educ|
          Education.create(educ_params(educ).merge(:profile => profile, :user_id => params[:user_id]))
        end
      end
    end

    def create_carrer(profile)
      if params.has_key?("carrers")
        params["carrers"].each do |key, carrer|
          Carrer.create(carrer_params(carrer).merge(:profile => profile, :user_id => params[:user_id]))
        end
      end
    end

    def profile_params
      params.require(:profile).permit( :first_name, :last_name, :phone_number, :postal_code, :street_address, :city, :state, :country)
    end

    def educ_params(my_params)
      my_params.permit( :school_name, :degree, :start_date, :end_date, :notes)
    end

    def carrer_params(my_params)
      my_params.permit( :job_category, :job_title, :month_experience, :description)
    end

    def about_params
      params.require(:about_mes).permit( :description)
    end



  end

end



