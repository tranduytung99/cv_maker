Rails.application.routes.draw do
  root "static_pages#home"
  devise_for :users
  get "/help", to: "static_pages#help"
  get "/contact", to: "static_pages#contact"
  get "/about", to: "static_pages#about"
  resources :users
  namespace :admin do
    root "static_pages#index"
    get "/login", to: "sessions#new"
    resources :users
  end
end
