Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_page#index'
  namespace :api, default: {format: :json} do
    resources :user
    resources :session
    resources :event
  end
end
