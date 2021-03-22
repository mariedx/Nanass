class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.date :date
      t.string :status, null: false, default: 'pending'
      t.string :tracking_number
      t.string :shipping_address
      t.string :billing_address
      t.references :customer, index: true, foreign_key: true

      t.timestamps
    end
  end
end
