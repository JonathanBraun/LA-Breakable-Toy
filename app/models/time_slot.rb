class TimeSlot < ApplicationRecord
  validates_presence_of :user_id, :playlist_id

  belongs_to :custom_playlist_timeslot
end
