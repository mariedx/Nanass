class Api::OrderMacbooksController < Api::BaseController
  before_action :set_order_macbook, only: [:show, :update, :destroy]

  # GET /order_macbooks
  def index
    @order_macbooks = OrderMacbook.all

    render json: @order_macbooks
  end

  # GET /order_macbooks/1
  def show
    render json: @order_macbook
  end

  # POST /order_macbooks
  def create
    @order_macbook = OrderMacbook.new(order_macbook_params)

    if @order_macbook.save
      render json: @order_macbook, status: :created
    else
      render json: @order_macbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_macbooks/1
  def update
    if @order_macbook.update(order_macbook_params)
      render json: @order_macbook
    else
      render json: @order_macbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /order_macbooks/1
  def destroy
    @order_macbook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order_macbook
      @order_macbook = OrderMacbook.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_macbook_params
      params.require(:order_macbook).permit(:model, :year, :processor, :size, :ghz, :ram, :memory, :battery, :color, :keyboard, :serial_number, :image_url, :is_camera_working, :price, :aspect, :order_id)
    end
end
