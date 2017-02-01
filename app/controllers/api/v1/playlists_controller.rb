class Api::V1::PlaylistsController < Application Controller

  def index
    playlists = Playlist.all
    render json: playlists
  end
end
