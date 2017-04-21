class AddCreatorToEvents < ActiveRecord::Migration
  def change
    add_index :events, :creator_id
    add_column :events, :creator_id, :integer, null: false
  end
end
