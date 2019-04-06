module Api::V1
  class UsersController < ApplicationController
    # before_action :find_user, except: %i[update destroy show]
    # before_action :authorize_request, except: [:create]

    # GET    /api/v1/users
    def index
      @users = User.all
      render json: @users, status: :ok
    end

    # GET    /api/v1/users/:id(.:format)
    def show
      render json: @user, status: :ok
    end

    # POST /api/v1/users(.:format)
    def create
      @user = User.new(user_params)

      if @user.save
        token = JsonWebToken.encode(user_id: @user.id)
        time = Time.now + 24.hours.to_i
        # render json: @user, status: :created
        render json: { token: token, exp: time.strftime("%m-%d-%Y %H:%M"),
                       user: @user }, status: :ok
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
