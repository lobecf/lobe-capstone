class GroupSerializer < ActiveModel::Serializer
  has_many :members
  has_many :invites
end
