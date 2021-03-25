class CreateOrderMacbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :order_macbooks do |t|
      t.string :model
      t.string :year
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
      t.decimal :price, precision: 5, scale: 2
      t.string :aspect
      t.belongs_to :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
