require "test_helper"

class OrderMacbooksControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order_macbook = order_macbooks(:one)
  end

  test "should get index" do
    get order_macbooks_url, as: :json
    assert_response :success
  end

  test "should create order_macbook" do
    assert_difference('OrderMacbook.count') do
      post order_macbooks_url, params: { order_macbook: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show order_macbook" do
    get order_macbook_url(@order_macbook), as: :json
    assert_response :success
  end

  test "should update order_macbook" do
    patch order_macbook_url(@order_macbook), params: { order_macbook: {  } }, as: :json
    assert_response 200
  end

  test "should destroy order_macbook" do
    assert_difference('OrderMacbook.count', -1) do
      delete order_macbook_url(@order_macbook), as: :json
    end

    assert_response 204
  end
end
