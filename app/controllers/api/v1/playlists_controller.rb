class Api::V1::PlaylistsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    # playlists = Playlist.all
    # render json: playlists
    if Time.now.strftime( "%H" ).to_i >= 22 || Time.now.strftime( "%H" ).to_i < 7
      playlists = [Playlist.find(6), Playlist.find(2)]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 7 && Time.now.strftime( "%H" ).to_i < 9
      playlists = [Playlist.find(2), Playlist.find(1)]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 9 && Time.now.strftime( "%H" ).to_i < 16
      playlists = [Playlist.find(1), Playlist.find(3)]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 16 && Time.now.strftime( "%H" ).to_i < 18
      playlists = [Playlist.find(3), Playlist.find(4)]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 18 && Time.now.strftime( "%H" ).to_i < 20
      playlists = [Playlist.find(4), Playlist.find(5)]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 20 && Time.now.strftime( "%H" ).to_i < 22
      playlists = [Playlist.find(5), Playlist.find(6)]
      render json: playlists
    end
  end

  def create
    data = JSON.parse(request.body.read)
    playlist = Playlist.find_by_name(data["name"])
    render json: playlist
  end
end
