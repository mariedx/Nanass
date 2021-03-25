class Customer < ApplicationRecord
  belongs_to :user
  has_many :addresses

  attribute :email, :string, default: :email

  def email
    user.email
  end

  validates_presence_of :first_name, :last_name
end
