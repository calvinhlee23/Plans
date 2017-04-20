class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :host, null: false
      t.string :title, null: false
      t.string :location, null: false
      t.integer :attnd_limit, null: false, default: -1
      t.datetime :event_date_time, null: false
      t.boolean :public, null: false, default: true

      t.text :description
      t.timestamps null: false
    end
  end
end
