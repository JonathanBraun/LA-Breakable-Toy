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


    if CustomPlaylistTimeslot.all.empty?
      timeslots.each do |timeslot|
        CustomPlaylistTimeslot.create!(timeslot_id: timeslot.id, user_playlist_id: user_playlists.first.id)
      end
    end


    if CustomPlaylistTimeslot.last.user_playlist.user_id != UserPlaylist.where(user_id: current_user).last.user_id
      timeslots.each do |timeslot|
        CustomPlaylistTimeslot.last.user_playlist.update_attributes(user_id: current_user.id)
      end
    end

    first_timeslots = Timeslot.first(6)
    second_timeslots = Timeslot.last(6)

    first_custom_playlist_timeslots = CustomPlaylistTimeslot.first(6)
    second_custom_playlist_timeslots = CustomPlaylistTimeslot.last(6)

    timeslots_array =
      [
        first_timeslots[0],
        first_timeslots[1],
        first_timeslots[2],
        first_timeslots[3],
        first_timeslots[4],
        first_timeslots[5],
      ]
    second_timeslots_array =
    [
      second_timeslots[0],
      second_timeslots[1],
      second_timeslots[2],
      second_timeslots[3],
      second_timeslots[4],
      second_timeslots[5],
    ]

    render json: {user_playlists: user_playlists, first_timeslots: first_timeslots, second_timeslots: second_timeslots, first_custom_playlist_timeslots: first_custom_playlist_timeslots, second_custom_playlist_timeslots: second_custom_playlist_timeslots, timeslots_array: timeslots_array, second_timeslots_array: second_timeslots_array }
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

    custom_playlist_timeslot = CustomPlaylistTimeslot.find_by(timeslot_id: timeslot)

    if custom_playlist_timeslot
      custom_playlist_timeslot.update_attributes(user_playlist: user_playlist)
      render json: { message: "Timeslot updated!" }
    else
      CustomPlaylistTimeslot.create!(user_playlist_id: user_playlist.id, timeslot_id: timeslot )
      render json: { message: "Timeslot created!" }
    end

  end

  def show
    render json: current_user.current_playlist
  end
end
