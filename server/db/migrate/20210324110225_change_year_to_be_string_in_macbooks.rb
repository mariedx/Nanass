class ChangeYearToBeStringInMacbooks < ActiveRecord::Migration[6.1]
  def change
    change_column :macbooks, :year, :string
  end
end
