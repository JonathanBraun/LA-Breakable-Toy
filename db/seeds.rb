# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6XIs7oxG4KjWixZsI2F3t8", time: DateTime.parse("09:00:00"), name: "Taking Care of Business")
 Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:4Ix9B0kL1u8Rkt1asAYnV5", time: DateTime.parse("07:00:00"),
  name: "Get Up & Go")
 Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:5VsZIW8lAIofDYunsn2lgz", time: DateTime.parse("16:00:00"),
  name: "Americana")
 Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:6E3Xx24JNyyGNQgqLRXwxF", time: DateTime.parse("18:00:00"),
  name: "Love Songs")
 Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:70Z5q9kylvrI2PdlVuHFIa", time: DateTime.parse("20:00:00"),
  name: "Evening Wind Down")
 Playlist.create!(url:
   "https://embed.spotify.com/?uri=spotify:user:jonathanbraun:playlist:02fNngUe73Gf95yUc6Kw00", time: DateTime.parse("22:00:00"),
  name: "Relaxation")
