module Overrides
  class TokenValidationsController < DeviseTokenAuth::TokenValidationsController
    def validate_token
      # @resource will have been set by set_user_by_token concern
      if @resource
        render json: {
          data: @resource.as_json(methods: :calculate_operating_thetan)
        }
      else
        render json: {
          success: true,
          errors: ["TEST"]
        }, status: 401
      end
    end
  end
end
