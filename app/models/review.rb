class Review < ApplicationRecord
  validates_presence_of :rating, :user_id, :playlist_id
  validates :rating, numericality: true, inclusion: { in: 1..5 }

  belongs_to :user
  belongs_to :playlist
end
