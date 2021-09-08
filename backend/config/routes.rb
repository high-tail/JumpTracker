Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :comics, only: [:index, :show]
      resources :magazines, only: [:index, :show]
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations',
        sessions: 'overrides/sessions',
      }

      namespace :users do
        resources :favorite_comics, only: [:index, :create, :destroy]
        resources :favorite_magazines, only: [:index, :create, :destroy]
      end

      namespace :auth do
        resources :sessions, only: [:index]
      end
    end
  end
end
