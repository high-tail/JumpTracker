class Api::V1::MagazinesController < ApplicationController
  def index
    @magazines = Magazine.all
    render json: { status: 200, magazines: @magazines.select(:id, :title, :url, :next_release_date) }
  end
end
