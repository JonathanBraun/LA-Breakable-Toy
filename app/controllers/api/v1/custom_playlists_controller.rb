class Api::V1::CustomPlaylistsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    if UserPlaylist.where(user_id: current_user).empty?
      playlists = Playlist.all
      playlists.each do |playlist|
        UserPlaylist.create!(user_id: current_user.id, playlist_id: playlist.id)
      end
    end

    user_playlists = UserPlaylist.all
    timeslots = Timeslot.all

    render json: {user_playlists: user_playlists, timeslots: timeslots }
  end

  def new
    playlists = Playlist.all
    timeslots = Timeslot.all

    render json: {playlists: playlists, timeslots: timeslots}
  end

  def create
    data = JSON.parse(request.body.read)

    user_playlist = UserPlaylist.create!(user: current_user, playlist: data["playlist"])
    timeslot = data["timeslot"]

    CustomPlaylistTimeslot.create!(user_playlist: user_playlist, timeslot: timeslot )

    render status: 201
  end
end
