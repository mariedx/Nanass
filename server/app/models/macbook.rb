class Macbook < ApplicationRecord
  validates_presence_of :model, :year, :processor, :size, :ghz, :ram, :memory, :battery, :color, :keyboard, :serial_number, :image_url, :is_camera_working
end
