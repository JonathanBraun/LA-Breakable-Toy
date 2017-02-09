class Api::V1::PlaylistsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    # Playlist = Relaxation
    if Time.now.strftime( "%H" ).to_i >= 22 || Time.now.strftime( "%H" ).to_i < 7
      playlists = [Playlist.find(6), Playlist.find(2), Playlist.find(2).time.strftime('%H:%M')]
      render json: playlists
    # Playlist = Get Up & Go
    elsif Time.now.strftime( "%H" ).to_i >= 7 && Time.now.strftime( "%H" ).to_i < 9
      playlists = [Playlist.find(2), Playlist.find(1), Playlist.find(1).time.strftime('%H:%M')]
      render json: playlists
    # Playlist = Taking Care of Business
    elsif Time.now.strftime( "%H" ).to_i >= 9 && Time.now.strftime( "%H" ).to_i < 16
      playlists = [Playlist.find(1), Playlist.find(3), Playlist.find(3).time.strftime('%H:%M')]
      render json: playlists
    # Playlist = Americana
    elsif Time.now.strftime( "%H" ).to_i >= 16 && Time.now.strftime( "%H" ).to_i < 18
      playlists = [Playlist.find(3), Playlist.find(4), Playlist.find(4).time.strftime('%H:%M')]
      render json: playlists
    # Playlist = Love Songs
    elsif Time.now.strftime( "%H" ).to_i >= 18 && Time.now.strftime( "%H" ).to_i < 20
      playlists = [Playlist.find(4), Playlist.find(5), Playlist.find(5).time.strftime('%H:%M')]
      render json: playlists
    # Playlist = Evening Wind Down
    elsif Time.now.strftime( "%H" ).to_i >= 20 && Time.now.strftime( "%H" ).to_i < 22
      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    end
  end

  def create
    data = JSON.parse(request.body.read)
    playlist = Playlist.find_by_name(data["name"])
    render json: playlist
  end
end
