class Order < ApplicationRecord
  belongs_to :customer

  validates_presence_of :status, :customer_id
end
