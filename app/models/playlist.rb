class Playlist < ApplicationRecord
  validates_presence_of :url, :name, :time

  has_many :reviews, dependent: :destroy

  has_many :user_playlists
  has_many :users, through: :user_playlists
end
