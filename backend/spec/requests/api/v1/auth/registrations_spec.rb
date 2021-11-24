require 'rails_helper'

RSpec.describe "Api::V1::Auth::Registrations", type: :request do
  describe 'POST #create' do
    let(:new_user_params) do
      {
        email: "test@example.com",
        password: "password",
        password_confirmation: "password"
      }
    end

    let(:new_user_params_invalid) do
      {
        email: "",
        password: "password",
        password_confirmation: "password"
      }
    end

    context '正常系' do
      it '200 ok' do
        post api_v1_user_registration_path, params: new_user_params
        expect(response.status).to eq 200
      end

      it 'ユーザが作成されること' do
        expect do
          post api_v1_user_registration_path, params: new_user_params
        end.to change(User, :count).by 1
      end
    end

    context '異常系' do
      it 'エラーが返ってくること' do
        post api_v1_user_registration_path, params: new_user_params_invalid
        expect(JSON.parse(response.body)['status']).to eq("error")
      end

      it 'ユーザが作成されないこと' do
        expect do
          post api_v1_user_registration_path, params: new_user_params_invalid
        end.to_not change(User, :count)
      end
    end
  end
end
