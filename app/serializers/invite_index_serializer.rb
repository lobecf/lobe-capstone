class InviteIndexSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :address, :start_time, :end_time, :time, :user_invite
  
    def time
      "From #{object.start_time.strftime('%A, %m/%d/%y at %I:%M %p')} to #{object.end_time.strftime('%A, %m/%d/%y at %I:%M %p')}"
    end
  
    def user_invite
      current_user.user_invite.find_by(event_id: object.id)
    end
  end