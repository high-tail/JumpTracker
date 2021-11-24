require 'rails_helper'

RSpec.describe 'Api::V1::Comics', type: :request do
  describe 'GET api_v1_users_favorite_comics' do
    before do
      @comic = create(:comic)
    end

    it '200' do
      get api_v1_comics_path
      expect(response).to have_http_status :ok
    end

    it 'マンガ一覧を取得する' do
      get api_v1_comics_path
      expect(response.body).to include @comic.title
    end
  end
end
