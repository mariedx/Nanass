class ApplicationController < ActionController::API
  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end

  def render_if_not_admin
    unless current_user.admin?
      render json: not_admin_data, status: 403
    end
  end

  def not_admin_data
    {
      status: "403",
      error: "You are not an admin!"
    }
  end
end
