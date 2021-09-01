require "test_helper"

class Api::V1::MagazinesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_magazines_index_url
    assert_response :success
  end
end
