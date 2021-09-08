module Api
  module V1
    module Users
      # favorite_comics
      class FavoriteComicsController < ApplicationController
        before_action :authenticate_api_v1_user!

        def index
          favorite_comics = current_api_v1_user.comics
          comic_data = favorite_comics.map do |comic|
            [
              id: comic.id,
              title: comic.title,
              url: comic.url,
              magazine_id: comic.magazine_id,
              next_release_date: comic.next_release_date,
              favorite_id: comic.favorited_by(current_api_v1_user)&.id
            ]
          end

          render json: { status: 200, comics: comic_data.flatten }
        end

        def create
          favorite = current_api_v1_user.favorite_comics.create!(favorite_params)
          render json: favorite
        end

        def destroy
          favorite = FavoriteComic.find(params[:id])
          favorite.destroy
          render json: favorite
        end

        private

        def favorite_params
          params.require(:favorite_comic).permit(:comic_id)
        end
      end
    end
  end
end
