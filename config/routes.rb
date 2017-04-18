Rails.application.routes.draw do
  root "static_pages#home"
  devise_for :users, controllers: { omniauth_callbacks: "callbacks" }
  get "/help", to: "static_pages#help"
  get "/contact", to: "static_pages#contact"
  get "/about", to: "static_pages#about"

  resources :curriculum_vitaes, only: :show do
    resource :downloads, only: :show
  end

  resource :profiles, only: [:edit, :update]

  namespace :admin do
    root "static_pages#index"
    get "/login", to: "sessions#new"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    resources :users
    resources :templates
  end

  namespace :api do
    resources :templates, only: :index
    resources :users, only: :show do
      resources :curriculum_vitaes, only: :create
    end
    resources :catalogue_forms, only: :index
  end
end
