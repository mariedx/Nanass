class Address < ApplicationRecord
  belongs_to :customer

  validates_presence_of :first_name, :last_name, :streetname, :zipcode, :city, :country, :phone

  validates :is_billing_address, inclusion: { in: [ true, false ] }
  validates :is_shipping_address, inclusion: { in: [ true, false ] }
end

