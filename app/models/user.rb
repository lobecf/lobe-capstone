class User < ApplicationRecord
    has_many :user_groups
    has_many :groups, through: :user_groups
    has_many :user_invites
    has_many :invites, through: :user_invites
    has_many :created_invites, class_name: 'Invite'
  
    validates :username, uniqueness: true
    
    has_secure_password
  end
