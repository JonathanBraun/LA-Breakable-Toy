class Timeslot < ApplicationRecord
  validates_presence_of :begin_time, :end_time

  has_many :custom_playlist_timeslots
  has_many :user_playlists, through: :custom_playlist_timeslots
end
