module Api
  module V1
    module Auth
      # login_user
      class SessionsController < ApplicationController
        def index
          if current_api_v1_user
            render json: { status: 200, current_user: current_api_v1_user }
          else
            render json: { status: 500, message: "ユーザーが存在しません" }
          end
        end
      end
    end
  end
end
