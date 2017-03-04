class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


  has_many :reviews
  has_many :user_playlists
  has_many :playlists, through: :user_playlists
  has_many :custom_playlist_timeslots, through: :user_playlists

  def current_playlist
    Playlist.current.to_a.select do |playlist|
      playlist.users.includes(self)
    end
  end
end
