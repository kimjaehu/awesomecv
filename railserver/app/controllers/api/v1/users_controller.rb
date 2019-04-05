# class Api::V1::UsersController < ApplicationController
# end

module Api::V1
  class UsersController < ApplicationController
    # before_action :find_user, except: %i[update destroy show]
    before_action :authorize_request, except: [:create]

    # GET /users
    def index
      @users = User.all
      render json: @users, status: :ok
    end

    # GET /users/{username}
    def show
      render json: @user, status: :ok
    end

    # POST /users
    def create
      @user = User.new(user_params)

      if @user.save
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    # PUT /users/{username}
    def update
      unless @user.update(user_params)
        render json: { errors: @user.errors.full_messages },
               status: :unprocessable_entity
      end
    end

    # DELETE /users/{username}
    def destroy
      @user.destroy
    end

    private

    # def find_user
    #   # puts "params email: #{user_params[:email]}"
    #   @user = User.find(params[:id])
    #   # puts "FIND_USER: #{@user}"
    #   rescue ActiveRecord::RecordNotFound
    #     render json: { errors: 'User not found' }, status: :not_found
    # end

    # def user_params
    #   params.permit(
    #     :email, :password, :password_confirmation
    #   )
    # end
    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

  end
end
