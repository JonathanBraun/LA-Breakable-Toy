class Api::V1::PlaylistsController < ApplicationController
  def index
    # playlists = Playlist.all
    # render json: playlists
    if Time.now.strftime( "%H" ).to_i >= 22 || Time.now.strftime( "%H" ).to_i < 7
      playlists = Playlist.find(6)
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 7 && Time.now.strftime( "%H" ).to_i < 9
      playlists = Playlist.find(2)
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 9 && Time.now.strftime( "%H" ).to_i < 16
      playlists = Playlist.find(1)
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 16 && Time.now.strftime( "%H" ).to_i < 18
      playlists = Playlist.find(3)
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 18 && Time.now.strftime( "%H" ).to_i < 20
      playlists = Playlist.find(4)
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 20 && Time.now.strftime( "%H" ).to_i < 22
      playlists = Playlist.find(5)
      render json: playlists
    end
  end

  def create
    data = JSON.parse(request.body.read)
    playlist = Playlist.find(data["id"])
    render json: playlist
  end
end


# check box or switch
# switch sets state on react app
# post request for the name of the playlist
