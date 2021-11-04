class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :location, :start_time, :end_time
  has_one :user
end
