class OrderMacbook < ApplicationRecord
  belongs_to :order

  validates_presence_of :model, :year, :processor, :size, :ghz, :ram, :memory, :battery, :color, :keyboard, :serial_number, :image_url, :price, :aspect

  validates :is_camera_working, inclusion: { in: [ true, false ] }
end
