class AddExpiresAtToUser < ActiveRecord::Migration
  def change
    add_column :users, :expires, :integer 
  end
end
