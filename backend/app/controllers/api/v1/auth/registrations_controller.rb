module Api
  module V1
    module Auth
      # deviseauth_registrations
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        private

        def sign_up_params
          params.permit(:email, :password, :password_confirmation)
        end
      end
    end
  end
end
