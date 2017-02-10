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
    playlist = Playlist.find_by(name: data["playlist"])

    user_playlist = UserPlaylist.find_by(user: current_user, playlist: playlist)
    timeslot = data["timeslot_id"]

    custom_playlist_timeslot = CustomPlaylistTimeslot.find_by(user_playlist: user_playlist, timeslot_id: timeslot)

    if custom_playlist_timeslot
      custom_playlist_timeslot.update_attributes(user_playlist: user_playlist)
      render json: {message: "updated"}
    else
      CustomPlaylistTimeslot.create!(user_playlist_id: user_playlist.id, timeslot_id: timeslot )
      render json: {message: "created"}
    end

  end

  def show
    if Time.now.strftime( "%H" ).to_i >= 0 || Time.now.strftime( "%H" ).to_i < 2
      timeslot = Timeslot.find_by(begin_time: 0, end_time: 2)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(6), Playlist.find(2), Playlist.find(2).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 2 && Time.now.strftime( "%H" ).to_i < 4
      timeslot = Timeslot.find_by(begin_time: 2, end_time: 4)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(2), Playlist.find(1), Playlist.find(1).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 4 && Time.now.strftime( "%H" ).to_i < 6
      timeslot = Timeslot.find_by(begin_time: 4, end_time: 6)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(1), Playlist.find(3), Playlist.find(3).time.strftime('%H:%M')]
      render json: playlists
      timeslot = Timeslot.find_by(begin_time: 6, end_time: 8)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(3), Playlist.find(4), Playlist.find(4).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 8 && Time.now.strftime( "%H" ).to_i < 10
      timeslot = Timeslot.find_by(begin_time: 8, end_time: 10)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(4), Playlist.find(5), Playlist.find(5).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 10 && Time.now.strftime( "%H" ).to_i < 12
      timeslot = Timeslot.find_by(begin_time: 10, end_time: 12)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 12 && Time.now.strftime( "%H" ).to_i < 14
      timeslot = Timeslot.find_by(begin_time: 12, end_time: 14)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 14 && Time.now.strftime( "%H" ).to_i < 16
      timeslot = Timeslot.find_by(begin_time: 14, end_time: 16)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 16 && Time.now.strftime( "%H" ).to_i < 18
      timeslot = Timeslot.find_by(begin_time: 16, end_time: 18)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 18 && Time.now.strftime( "%H" ).to_i < 20
      timeslot = Timeslot.find_by(begin_time: 18, end_time: 20)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 20 && Time.now.strftime( "%H" ).to_i < 22
      timeslot = Timeslot.find_by(begin_time: 20, end_time: 22)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    elsif Time.now.strftime( "%H" ).to_i >= 22 && Time.now.strftime( "%H" ).to_i < 24
      timeslot = Timeslot.find_by(begin_time: 22, end_time: 24)
      custom_playlist_timeslot = CustomPlaylistTimeslot.where(timeslot: timeslot)
      user_playlist = custom_playlist_timeslot.find_by(user: current_user)
      user = custom_playlist_timeslot.user_playlist.user

      playlists = [Playlist.find(5), Playlist.find(6), Playlist.find(6).time.strftime('%H:%M')]
      render json: playlists
    end
  end
end
