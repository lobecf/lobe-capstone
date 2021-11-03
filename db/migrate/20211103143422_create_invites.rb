class CreateInvites < ActiveRecord::Migration[6.1]
  def change
    create_table :invites do |t|
      t.string :title
      t.string :description
      t.string :address
      t.datetime :start_time
      t.datetime :end_time
      t.belongs_to :group, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
