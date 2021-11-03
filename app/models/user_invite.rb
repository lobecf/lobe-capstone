class UserInvite < ApplicationRecord
  belongs_to :user
  belongs_to :invite

  validates :invite_id, uniqueness: { scope: :user_id, message: 'can only rsvp to this event once'}
end
