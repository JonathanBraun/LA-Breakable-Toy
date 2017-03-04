class CustomPlaylistTimeslot < ApplicationRecord
  validates_presence_of :user_playlist, :timeslot

  belongs_to :timeslot
  belongs_to :user_playlist

  scope :current, -> { joins(:timeslots).merge(Timeslot.current) }
  # def self.current
  #   where(timeslot: Timeslot.current)
  # end
  #
  # def self.playlists
  #   map(&:user_playlist).playlists
  # end
end
