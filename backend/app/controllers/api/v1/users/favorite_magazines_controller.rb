module Api
  module V1
    module Users
      # about favorite magazines
      class FavoriteMagazinesController < ApplicationController
        before_action :authenticate_api_v1_user!

        def index
          favorite_magazines = current_api_v1_user.magazines
          magazine_data = favorite_magazines.map do |magazine|
            [
              id: magazine.id,
              title: magazine.title,
              url: magazine.url,
              next_release_date: magazine.next_release_date,
              favorite_id: magazine.favorited_by(current_api_v1_user)&.id
            ]
          end

          render json: { status: 200, magazines: magazine_data.flatten }
        end

        def create
          favorite = current_api_v1_user.favorite_magazines.create!(favorite_params)
          render json: favorite
        end

        def destroy
          favorite = FavoriteMagazine.find(params[:id])
          favorite.destroy
          render json: favorite
        end

        private

        def favorite_params
          params.require(:favorite_magazine).permit(:magazine_id)
        end
      end
    end
  end
end
