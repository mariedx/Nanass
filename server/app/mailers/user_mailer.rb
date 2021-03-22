class UserMailer < ApplicationMailer
  default from: 'pronanass@outlook.fr'

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Bienvenue chez Nanass !')
  end
end