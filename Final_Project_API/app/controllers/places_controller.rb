class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :update, :destroy]

  # GET /places
  def index
    @places = Place.all

    render json: @places
  end

  # GET /places/1
  def show
    render json: @place
  end

  # POST /places
  # http://edgeguides.rubyonrails.org/action_controller_overview.html#strong-parameters
  def create
    # puts place_params

    # @place = Place.new(place_params)
    # puts params[:place]

    # @place = Place.create(params[:place])
    @place = Place.new(place_params)
    # @place.username = :place

    if @place.save
      render json: @place, status: :created, location: @place
      # render json: @place, status: :created, place: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  private
    # Using a private method to encapsulate the permissible parameters
    # is just a good pattern since you'll be able to reuse the same
    # permit list between create and update. Also, you can specialize
    # this method with per-user checking of permissible attributes.
    def place_params
      params.require(:place).permit(:img_url, :lat, :lng, :created_by, :note)
    end

  # PATCH/PUT /places/1
  def update
    if @place.update(place_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # DELETE /places/1
  def destroy
    @place.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def place_params
      params.require(:place).permit(:img_url, :lat, :lng, :created_by, :note)
    end
end
