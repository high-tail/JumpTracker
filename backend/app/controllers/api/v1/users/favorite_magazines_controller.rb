module Api
  module V1
    module Users
      # about favorite magazines
      class FavoriteMagazinesController < ApplicationController
        before_action :authenticate_api_v1_user!

        def index
          favorite_magazines = current_api_v1_user.magazines
          render json: { status: 200, magazines: favorite_magazines }
        end

        def create
          favorite = current_api_v1_user.favorite_magazines.create!(favorite_params)
          render json: favorite
        end

        def destroy
          favorite = FavoriteMagazines.find(params[:id])
          favorite.destroy
          render json: favorite
        end

        private

        def favorite_params
          params.require(:favorite_magazines).permit(:magazine_id)
        end
      end
    end
  end
end
