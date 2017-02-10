# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170210205121) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "custom_playlist_timeslots", force: :cascade do |t|
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "user_playlist_id"
    t.integer  "timeslot_id"
    t.index ["timeslot_id"], name: "index_custom_playlist_timeslots_on_timeslot_id", using: :btree
    t.index ["user_playlist_id"], name: "index_custom_playlist_timeslots_on_user_playlist_id", using: :btree
  end

  create_table "playlists", force: :cascade do |t|
    t.string   "url",        null: false
    t.time     "time",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name",       null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "rating",      null: false
    t.text     "body"
    t.integer  "user_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_reviews_on_playlist_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "timeslots", force: :cascade do |t|
    t.integer  "begin_time", null: false
    t.integer  "end_time",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_playlists", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["playlist_id"], name: "index_user_playlists_on_playlist_id", using: :btree
    t.index ["user_id"], name: "index_user_playlists_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "username",                               null: false
    t.boolean  "admin",                  default: false
    t.string   "avatar"
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "custom_playlist_timeslots", "timeslots"
  add_foreign_key "custom_playlist_timeslots", "user_playlists"
end
