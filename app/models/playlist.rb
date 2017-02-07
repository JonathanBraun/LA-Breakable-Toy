class Playlist < ApplicationRecord
  validates_presence_of :url, :name, :time

  has_many :reviews, dependent: :destroy
end
