class LinkedinController < ApplicationController

  # POST /users/linkedin
  def storeCode
    
    render json: {params:params[:code]}
  end

  def getToken

  end
  
end
