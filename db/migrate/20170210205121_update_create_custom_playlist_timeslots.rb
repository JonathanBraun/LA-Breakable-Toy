class UpdateCreateCustomPlaylistTimeslots < ActiveRecord::Migration[5.0]
  def change
    remove_column :custom_playlist_timeslots, :user_playlists_id
    remove_column :custom_playlist_timeslots, :timeslots_id

    add_reference :custom_playlist_timeslots, :user_playlist, foreign_key: true
    add_reference :custom_playlist_timeslots, :timeslot, foreign_key: true

  end
end
