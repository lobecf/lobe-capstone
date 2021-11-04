class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :location
      t.string :start_time
      t.string :end_time
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
