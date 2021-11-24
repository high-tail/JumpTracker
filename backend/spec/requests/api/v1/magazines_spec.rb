require 'rails_helper'

RSpec.describe 'Api::V1::Magazines', type: :request do
  describe 'GET api_v1_users_favorite_magazines' do
    before do
      @magazine = create(:magazine)
    end

    it '200' do
      get api_v1_magazines_path
      expect(response).to have_http_status :ok
    end

    it '雑誌一覧を取得する' do
      get api_v1_magazines_path
      expect(response.body).to include @magazine.title
    end
  end
end
