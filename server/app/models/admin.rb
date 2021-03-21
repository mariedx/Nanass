class Admin < ApplicationRecord
  belongs_to :user

  attribute :email, :string, default: :email

  def email
    user.email
  end
end
