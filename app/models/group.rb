class Group < ApplicationRecord
    has_many :invites
    has_many :user_invites
    has_many :members, through: :user_groups, source: :user
  
    validates :name, presence: true, uniqueness: true
end
