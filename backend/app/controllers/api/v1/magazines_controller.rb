module Api
  module V1
    # about magazine
    class MagazinesController < ApplicationController
      def index
        magazines = Magazine.eager_load(:favorite_magazines)
        is_current_api_v1_user = current_api_v1_user.present?
        magazine_data = magazines.map do |magazine|
          [
            id: magazine.id,
            title: magazine.title,
            url: magazine.url,
            next_release_date: magazine.next_release_date,
            favorite_id: is_current_api_v1_user ? magazine.favorited_by(current_api_v1_user)&.id : nil
          ]
        end

        render json: {
          status: 200,
          magazines: magazine_data.flatten
        }
      end

      def show
        magazines = magazine.eager_load(:favorite_magazines).where(magazine_id: id_params[:id])
        is_current_api_v1_user = current_api_v1_user.present?
        magazine_data = magazines.map do |magazine|
          [
            id: magazine.id,
            title: magazine.title,
            url: magazine.url,
            next_release_date: magazine.next_release_date,
            favorite_id: is_current_api_v1_user ? magazine.favorited_by(current_api_v1_user)&.id : nil
          ]
        end

        render json: {
          status: 200,
          magazines: magazine_data.flatten
        }
      end

      private

      def id_params
        params.permit(:id)
      end
    end
  end
end
