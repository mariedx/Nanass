class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  has_one :customer, dependent: :destroy
  has_one :admin, dependent: :destroy

  attribute :customer_id, :integer, default: :customer_id
  attribute :admin_id, :integer, default: :admin_id

  def customer?
    customer != nil
  end

  def customer_id
    return customer.id if customer?
  end

  def admin?
    admin != nil
  end

  def admin_id
    return admin.id if admin?
  end
end
