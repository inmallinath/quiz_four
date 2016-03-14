class CompaniesController < ApplicationController
  def new
    @compnay = Company.new
  end

  def index
    respond_to do |format|
      @company = Company.order("created_at ASC")
      format.json{render json: @company.select(:id, :name)}
    end
  end
end
