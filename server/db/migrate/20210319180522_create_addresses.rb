class CreateAddresses < ActiveRecord::Migration[6.1]
  def change
    create_table :addresses do |t|
      t.string :name
      t.string :first_name
      t.string :last_name
      t.boolean :is_billing_address,  null: false, default: false
      t.boolean :is_shipping_address, null: false, default: false
      t.integer :number
      t.string :streetname
      t.string :complement
      t.string :zipcode
      t.string :city
      t.string :department
      t.string :region
      t.string :country
      t.string :phone
      t.references :customer, index: true, foreign_key: true

      t.timestamps
    end
  end
end
