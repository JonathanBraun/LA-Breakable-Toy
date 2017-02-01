Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "playlists#index"

  resources :playlists

  namespace :api do
    namespace :v1 do
      resources :playlists
    end
  end
end
