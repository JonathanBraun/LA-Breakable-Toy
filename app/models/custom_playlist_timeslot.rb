class CustomPlaylistTimeSlot < ApplicationRecord
  validates_presence_of :user_id, :playlist_id

  has_many :user_playlists
  has_many :timeslots
end
