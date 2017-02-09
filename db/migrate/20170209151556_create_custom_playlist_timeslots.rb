class CreateCustomPlaylistTimeslots < ActiveRecord::Migration[5.0]
  def change
    create_table :custom_playlist_timeslots do |t|
      t.belongs_to :user_playlists, null: false
      t.belongs_to :timeslots, null: false

      t.timestamps
    end
  end
end
