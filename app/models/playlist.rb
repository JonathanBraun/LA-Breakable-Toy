class Playlist < ApplicationRecord
  def index
    binding.pry
    time = Time.now
    @hour = Time.now.hour
  end
end
