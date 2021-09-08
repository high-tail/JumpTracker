module Api
  module V1
    # About Comics
    class ComicsController < ApplicationController
      def index
        comics = Comic.eager_load(:favorite_comics)
        is_current_api_v1_user = current_api_v1_user.present?
        comic_data = comics.map do |comic|
          [
            id: comic.id,
            title: comic.title,
            url: comic.url,
            magazine_id: comic.magazine_id,
            next_release_date: comic.next_release_date,
            favorite_id: is_current_api_v1_user ? comic.favorited_by(current_api_v1_user)&.id : nil
          ]
        end

        render json: {
          status: 200,
          comics: comic_data.flatten
        }
      end

      def show
        comics = Comic.eager_load(:favorite_comics).where(magazine_id: id_params[:id])
        is_current_api_v1_user = current_api_v1_user.present?
        comic_data = comics.map do |comic|
          [
            id: comic.id,
            title: comic.title,
            url: comic.url,
            magazine_id: comic.magazine_id,
            next_release_date: comic.next_release_date,
            favorite_id: is_current_api_v1_user ? comic.favorited_by(current_api_v1_user)&.id : nil
          ]
        end

        render json: {
          status: 200,
          comics: comic_data.flatten
        }
      end

      private

      def id_params
        params.permit(:id)
      end
    end
  end
end
