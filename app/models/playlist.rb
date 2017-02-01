class Playlist < ApplicationRecord
  valdates_presence_of :url, :name, :time
end
