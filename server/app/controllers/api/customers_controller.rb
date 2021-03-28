class Api::CustomersController < Api::BaseController
  before_action :authenticate_user!
  before_action :render_if_not_admin, only: [:index]
  before_action :set_customer, only: [:show, :update]
  before_action :render_if_not_author, only: [:show, :update]

  # GET /customers
  def index
    @customers = Customer.all

    render json: @customers
  end

  # GET /customers/1
  def show
    render json: @customer
  end

  # POST /customers
  def create
    @customer = Customer.new(customer_params)

    if @customer.save
      render json: @customer, status: :created
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /customers/1
  def update
    if @customer.update(customer_params)
      render json: @customer
    else
      render json: @customer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /customers/1
  # def destroy
  #   @customer.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def customer_params
      params.require(:customer).permit(:first_name, :last_name, :user_id)
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
