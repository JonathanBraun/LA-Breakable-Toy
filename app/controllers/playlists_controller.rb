class PlaylistsController < ApplicationController
    def index

    end

    def show
      @playlist = Playlist.find(params[:id])
      @review = Review.new
      @reviews = @playlist.reviews
    end

end
