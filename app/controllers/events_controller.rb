class EventsController < ApplicationController

    def index
    render json: Event.all
    end

    def create
    event = @current_user.events.create!(event_params)
    render json: event, status: :created
    end

    private

    def event_params
    params.permit(:title, :description, :location, :start_time, :end_time)
    end

end
