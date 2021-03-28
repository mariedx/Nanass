class Admin < ApplicationRecord
  belongs_to :user
  before_create :abort_if_already_admin

  attribute :email, :string, default: :email

  def email
    user.email
  end

  private

  def abort_if_already_admin
    is_user_admin = Admin.all.select{ |admin| admin[:user_id] == user.id }.any?
    if is_user_admin
      errors.add(:user, 'the user is already an admin')
      throw(:abort)
    end
  end
end
