class AddAspectToMacbooks < ActiveRecord::Migration[6.1]
  def change
    add_column :macbooks, :aspect, :string
  end
end
