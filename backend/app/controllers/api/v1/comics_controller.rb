class Api::V1::ComicsController < ApplicationController
  def index
    @comics = Comic.all
    render json: { status: 200, comics: @comics.select(:id, :title, :url, :magazine_id, :next_release_date) }
  end

  def show
    @comics = Comic.where(magazine_id: id_params[:id])
    render json: { status: 200, comics: @comics.select(:id, :title, :url, :next_release_date) }
  end

  private

  def id_params
    params.permit(:id)
  end
end
