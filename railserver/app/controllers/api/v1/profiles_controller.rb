module Api::V1
  class Api::V1::ProfilesController < ApplicationController
    before_action :authorize_request, except: [:create]

    def index
      render json: @user, status: :ok
    end

  end

end