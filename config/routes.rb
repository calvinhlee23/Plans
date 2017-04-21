Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#index'
  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :show]
    resources :sessions, only: [:create, :destroy]

    resources :events, only: [:create, :update, :destroy, :show, :index]
    resources :attendances, only: [:create, :destroy]
  end
end
