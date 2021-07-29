class Api::PokemonController < ApplicationController
  def index 
    sleep 0.5
    @pokemon = Pokemon.all 
    render :index 
  end


  def show 
    sleep 0.5
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def create

    @pokemon = Pokemon.new(poke_params)


    if @pokemon.save
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages, status: 422
    end

  end


  protected
  def poke_params
      self.params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, :move_names => [])
  end

end
