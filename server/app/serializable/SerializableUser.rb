class SerializableUser < JSONAPI::Serializable::Resource
  type 'users'

  attributes :email, :admin_id, :customer_id

  link :self do
    @url_helpers.api_user_url(@object.id)
  end
end
