class CreateUserInvites < ActiveRecord::Migration[6.1]
  def change
    create_table :user_invites do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :invite, null: false, foreign_key: true

      t.timestamps
    end
  end
end
