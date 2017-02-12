class CustomPlaylistTimeslot < ApplicationRecord
  validates_presence_of :user_playlist, :timeslot

  belongs_to :timeslot
  belongs_to :user_playlist
end
