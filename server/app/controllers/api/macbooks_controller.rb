class Api::MacbooksController < Api::BaseController
  before_action :set_macbook, only: [:show, :update, :destroy]
  before_action :render_if_not_admin, only: [:create, :update, :destroy]

  # GET /macbooks
  def index
    @macbooks = Macbook.all

    render json: @macbooks
  end

  # GET /macbooks/1
  def show
    render json: @macbook
  end

  # POST /macbooks
  def create
    @macbook = Macbook.new(macbook_params)

    if @macbook.save
      render json: @macbook, status: :created
    else
      render json: @macbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /macbooks/1
  def update
    if @macbook.update(macbook_params)
      render json: @macbook
    else
      render json: @macbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /macbooks/1
  def destroy
    @macbook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_macbook
      @macbook = Macbook.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def macbook_params
      params.require(:macbook).permit(:model, :year, :processor, :size, :ghz, :ram, :memory, :battery, :color, :keyboard, :serial_number, :is_camera_working, :price, :image)
    end
end
