module Overrides
  class SessionsController < DeviseTokenAuth::SessionsController
    def render_create_error_bad_credentials
       render_error(200, 'ユーザが存在しません', {status: 401})
    end

    def render_create_success
        render json: {
            status: 200,
            data: resource_data(resource_json: @resource.token_validation_response)
        }
    end
  end
end
