module Api
  module V1
    # favorites list
    class UsersController < ApplicationController
      before_action :authenticate_api_v1_user!
    end
  end
end
