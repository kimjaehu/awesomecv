Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, param: :_email
  post '/auth/login', to: 'authentication#login'
  # post '/users/linkedin', to 'linkedin#storeCode'
  # get '', to: 'linkedin#getToken'


  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :users, param: :user_id
      post '/auth/login', to: 'authentication#login'
      resources :users do
        resources :profiles
        resources :jobs
      end
    end
  end

  # get '/*a', to: 'application#not_found'

end
