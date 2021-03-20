class Customer < ApplicationRecord
  belongs_to :user
  has_many :addresses

  validates_presence_of :first_name, :last_name
end
