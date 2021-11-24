# spec/support/request_spec_helper.rb
# Don't work
module RequestSpecHelper
  def sign_in(user)
    post api_v1_user_confirmation_path, params: { confirmation_token: user.confirmation_token }
    get_auth_params_from_login_response_headers(response)
  end

  def get_auth_params_from_login_response_headers(response)
    client = response.headers['client']
    token = response.headers['access-token']
    uid = response.headers['uid']
    {
      'access-token' => token,
      'client' => client,
      'uid' => uid
    }
  end
end
