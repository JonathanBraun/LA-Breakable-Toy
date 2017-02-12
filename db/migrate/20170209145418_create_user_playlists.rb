class CreateUserPlaylists < ActiveRecord::Migration[5.0]
  def change
    create_table :user_playlists do |t|
      t.belongs_to :user, null: false
      t.belongs_to :playlist, null: false

      t.timestamps
    end
  end
end
