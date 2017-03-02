class Playlist < ApplicationRecord
  validates_presence_of :url, :name, :time

  has_many :reviews, dependent: :destroy

  has_many :user_playlists
  has_many :users, through: :user_playlists
  scope :current, -> { joins(:user_playlists).merge(UserPlaylist.current) }

  # def self.current
  #   UserPlaylist.current.playlists
  # end
end
