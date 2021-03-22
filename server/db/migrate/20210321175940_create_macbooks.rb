class CreateMacbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :macbooks do |t|
      t.string :model
      t.integer :year
      t.string :processor
      t.integer :size
      t.string :ghz
      t.integer :ram
      t.integer :memory
      t.integer :battery
      t.string :color
      t.string :keyboard
      t.string :serial_number
      t.boolean :is_camera_working
      t.string :image_url
      t.timestamps
    end
  end
end
