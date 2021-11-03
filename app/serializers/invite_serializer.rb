class InviteSerializer < ActiveModel::Serializer
  attributes :creator
  has_many :attendees
  belongs_to :group, serializer: InviteGroupSerializer

  def creator
    object.user.username
  end
end
