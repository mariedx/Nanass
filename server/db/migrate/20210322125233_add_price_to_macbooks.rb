class AddPriceToMacbooks < ActiveRecord::Migration[6.1]
  def change
    add_column :macbooks, :price, :decimal, precision: 5, scale: 2
  end
end
