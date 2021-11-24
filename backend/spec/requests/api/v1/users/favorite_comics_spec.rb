require 'rails_helper'

RSpec.describe 'Api::V1::Users::FavoriteComics', type: :request do
  let!(:user) { FactoryBot.create(:user) }

  let!(:auth_token) { user.create_new_auth_token }
  let!(:auth_headers) do
    {
      'uid' => auth_token['uid'],
      'client' => auth_token['client'],
      'access-token' => auth_token['access-token']
    }
  end

  describe 'POST api_v1_users_favorite_comics' do
    let(:comic) { create(:comic) }

    it '200' do
      params = {
        favorite_comic: { id: comic.id }
      }

      post api_v1_users_favorite_comics_path, params: params, headers: auth_headers
      expect(response).to have_http_status :ok
    end

    it 'マンガをお気に入り登録する' do
      params = {
        favorite_comic: { id: comic.id }
      }

      expect do
        post api_v1_users_favorite_comics_path, params: params, headers: auth_headers
      end.to change(FavoriteComic, :count).by 1
    end

    it '(未ログイン)マンガをお気に入り登録できない' do
      params = {
        favorite_comic: { id: comic.id }
      }

      expect do
        post api_v1_users_favorite_comics_path, params: params, headers: nil
      end.not_to change(FavoriteComic, :count)
    end
  end
end
