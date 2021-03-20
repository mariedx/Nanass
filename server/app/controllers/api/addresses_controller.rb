class Api::AddressesController < Api::BaseController
  before_action :authenticate_user!
  before_action :set_address, only: [:show, :update, :destroy]
  before_action :render_if_not_author, only: [:show, :update]

  # GET /addresses
  def index
    @addresses = Address.all

    render json: @addresses
  end

  # GET /addresses/1
  def show
    render json: @address
  end

  # POST /addresses
  def create
    @address = Address.new(address_params)

    if @address.save
      render json: @address, status: :created
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /addresses/1
  def update
    if @address.update(address_params)
      render json: @address
    else
      render json: @address.errors, status: :unprocessable_entity
    end
  end

  # DELETE /addresses/1
  def destroy
    @address.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_address
      @address = Address.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def address_params
      params.require(:address).permit(:name, :first_name, :last_name, :is_billing_address, :is_shipping_address, :number, :streetname, :complement, :zipcode, :city, :department, :region, :country, :phone, :customer_id)
    end

    def render_if_not_author
      unless current_user.id == @customer.user.id
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
