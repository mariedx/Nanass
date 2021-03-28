class Admin < ApplicationRecord
  belongs_to :user
  before_create :abort_if_already_admin

  attribute :email, :string, default: :email

  def email
    user.email
  end

  private

  def abort_if_already_admin
    if user.customer?
      errors.add(:user, 'the user is already an admin')
      throw(:abort)
    end
  end
end
