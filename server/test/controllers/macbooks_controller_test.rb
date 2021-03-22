require "test_helper"

class MacbooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @macbook = macbooks(:one)
  end

  test "should get index" do
    get macbooks_url, as: :json
    assert_response :success
  end

  test "should create macbook" do
    assert_difference('Macbook.count') do
      post macbooks_url, params: { macbook: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show macbook" do
    get macbook_url(@macbook), as: :json
    assert_response :success
  end

  test "should update macbook" do
    patch macbook_url(@macbook), params: { macbook: {  } }, as: :json
    assert_response 200
  end

  test "should destroy macbook" do
    assert_difference('Macbook.count', -1) do
      delete macbook_url(@macbook), as: :json
    end

    assert_response 204
  end
end
