Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  default_url_options :host => "http://localhost:3000/"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :destroy]
    resources :customers, except: [:destroy]
    resources :addresses
    resources :admins, except: [:destroy]
    resources :macbooks
    resources :orders, except: [:destroy]
    resources :order_macbooks
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }
end
