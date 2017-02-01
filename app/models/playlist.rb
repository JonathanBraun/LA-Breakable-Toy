class Playlist < ApplicationRecord
  validates_presence_of :url, :name, :time
end
