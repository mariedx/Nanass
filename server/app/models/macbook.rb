class Macbook < ApplicationRecord
  validates_presence_of :model, :year, :processor, :size, :ghz, :ram, :memory, :battery, :color, :keyboard, :serial_number, :price

  validates :is_camera_working, inclusion: { in: [ true, false ] }

  has_one_attached :image

  def image_url
    if image.attached?
      image.blob.service_url
    end
  end
end
