class Api::V1::CompaniesController < ApplicationController

  def index
    @companies = Company.order("created_at ASC")
    render json: @companies
  end
end
