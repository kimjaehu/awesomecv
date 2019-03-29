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

ActiveRecord::Schema.define(version: 2019_03_29_212836) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "about_mes", force: :cascade do |t|
    t.string "description"
    t.bigint "user_id"
    t.bigint "profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_about_mes_on_profile_id"
    t.index ["user_id"], name: "index_about_mes_on_user_id"
  end

  create_table "carrers", force: :cascade do |t|
    t.string "job_category"
    t.string "job_title"
    t.string "seniority"
    t.string "month_experience"
    t.string "description"
    t.bigint "user_id"
    t.bigint "profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_carrers_on_profile_id"
    t.index ["user_id"], name: "index_carrers_on_user_id"
  end

  create_table "educations", force: :cascade do |t|
    t.string "school_name"
    t.string "degree"
    t.string "start_date"
    t.string "end_date"
    t.string "notes"
    t.bigint "user_id"
    t.bigint "profile_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_id"], name: "index_educations_on_profile_id"
    t.index ["user_id"], name: "index_educations_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "postal_code"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "user_type"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "about_mes", "profiles"
  add_foreign_key "about_mes", "users"
  add_foreign_key "carrers", "profiles"
  add_foreign_key "carrers", "users"
  add_foreign_key "educations", "profiles"
  add_foreign_key "educations", "users"
  add_foreign_key "profiles", "users"
end
