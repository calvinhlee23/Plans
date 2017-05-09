class MakeChangesToUser < ActiveRecord::Migration
  def change
    change_column :users, :password_digest, :string, null: true
    add_column :users, :is_goog_acc, :boolean, null: false
  end
end
