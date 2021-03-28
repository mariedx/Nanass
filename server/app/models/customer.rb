class Customer < ApplicationRecord
  belongs_to :user
  has_many :addresses

  validates_presence_of :first_name, :last_name
  before_create :abort_if_already_customer

  attribute :email, :string, default: :email

  def email
    user.email
  end

  private

  def abort_if_already_customer
    is_user_customer = Customer.all.select{ |customer| customer[:user_id] == user.id }.any?
    if is_user_customer
      errors.add(:user, 'the user is already a customer')
      throw(:abort)
    end
  end
end
