class CreatePlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :playlists do |t|
      t.string :url, null: false
      t.time :time, null: false

      t.timestamps
    end
  end
end
