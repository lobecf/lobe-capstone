class InvitesController < ApplicationController
    def index
      render json: Invite.all, each_serializer: InviteIndexSerializer
    end
  
    def show
      invite = Invite.find(params[:id])
      render json: invite
    end
  
    def create
      invite = current_user.created_invites.build(invite_params)
      if invite.save
        render json: invite, status: :created
      else
        render json: invite.errors, status: :unprocessable_entity
      end
    end
  
    def update
      invite = Invite.find(params[:id])
      if invite.update(invite_params)
        render json: invite, status: :ok
      else
        render json: invite.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      invite = Invite.find(params[:id])
      invite.destroy
    end
  
    private
  
    def invite_params
      params.permit(:title, :description, :address, :start_time, :end_time, :invite_id)
    end
  end
