class AccessDenied < StandardError
end



class ApplicationController < ActionController::API

  def not_found
    render json: { error: 'not_found' }
  end

  def authorize_request
    header = params[:auth][:token]
    # header = request.headers['Authorization']
    # header = header.split(' ').last if header
    begin
      @user = User.find(params[:id])
      @decoded = JsonWebToken.decode(header)
      raise AccessDenied if @user.id != @decoded[:user_id]
      # @current_user = User.find(@decoded[:user_id])

    rescue AccessDenied => e
      render json: { errors: e.message }, status: :unauthorized
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :not_found
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end