class UserPlaylist < ApplicationRecord
  validates_presence_of :user_id, :playlist_id

  belongs_to :user
  belongs_to :playlist
  belongs_to :custom_playlist_timeslot
end
