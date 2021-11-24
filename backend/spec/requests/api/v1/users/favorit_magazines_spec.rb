require 'rails_helper'

RSpec.describe 'Api::V1::Users::FavoriteMagazines', type: :request do
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
    let(:magazine) { create(:magazine) }

    it '200' do
      params = {
        favorite_magazine: { id: magazine.id }
      }

      post api_v1_users_favorite_magazine_path, params: params, headers: auth_headers
      expect(response).to have_http_status :ok
    end

    it '雑誌をお気に入り登録する' do
      params = {
        favorite_comic: { id: comic.id }
      }

      expect do
        post api_v1_users_favorite_magazine_path, params: params, headers: auth_headers
      end.to change(FavoriteMagazine, :count).by 1
    end

    it '(未ログイン)雑誌をお気に入り登録できない' do
      params = {
        favorite_comic: { id: comic.id }
      }

      expect do
        post api_v1_users_favorite_magazine_path, params: params, headers: nil
      end.not_to change(FavoriteMagazine, :count)
    end
  end
end
