class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :image_url, :address
end
