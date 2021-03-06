class Api::OrdersController < Api::BaseController
  before_action :authenticate_user!
  before_action :set_order, only: [:show, :update, :destroy]
  before_action :render_if_not_admin, only: [:index, :update, :destroy]
  before_action :render_if_not_author_or_admin, only: [:show]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  # def destroy
  #   @order.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order).permit(:date, :status, :tracking_number, :shipping_address, :billing_address, :customer_id)    
    end

    def render_if_not_author_or_admin
      unless current_user == @order.customer.user || current_user.admin?
        render json: not_author_data, status: 403
      end
    end
  
    def not_author_data
      {
        status: "403",
        error: "You are not the author of this profile!"
      }
    end
end
