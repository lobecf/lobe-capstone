class Invite < ApplicationRecord
  belongs_to :group
  belongs_to :user
  has_many :user_invites, dependent: :destroy
  has_many :attendees, through: :user_invites, source: :user

  validates :title, :description, :address, :start_time, :end_time, presence: true
  validates :title, uniqueness: { scope: [:address, :start_time], message: "has already been taken. Did you already create this event?" }
end
