Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, param: :_email
  post '/auth/login', to: 'authentication#login'

  get '', to: 'linkedin#getToken'


  namespace :api do
    namespace :v1 do
      resources :users
      resources :profiles
    end
  end

  # get '/*a', to: 'application#not_found'

end
