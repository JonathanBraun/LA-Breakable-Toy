class UserPlaylist < ApplicationRecord
  validates_presence_of :user_id, :playlist_id

  belongs_to :user
  belongs_to :playlist
  has_many :custom_playlist_timeslots
  has_many :timeslots, through: :custom_playlist_timeslots

  scope :current, -> { joins(:timeslots).merge(Timeslot.current) }

  # def self.current
  #   CustomPlaylistTimeslot.current
  # end
  #
  # def self.playlists
  #   map(&:playlist)
  # end
end
