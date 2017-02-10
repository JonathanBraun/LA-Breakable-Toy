class CustomPlaylistTimeSlot < ApplicationRecord
  validates_presence_of :user_id, :playlist_id

  belongs_to :timeslots
  belongs_to :user_playlists, through: :custom_playlist_timeslots
end
