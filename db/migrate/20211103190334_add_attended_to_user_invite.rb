class AddAttendedToUserInvite < ActiveRecord::Migration[6.1]
  def change
    add_column :user_invites, :attended, :boolean
  end
end
