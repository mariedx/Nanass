# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_24_135814) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "name"
    t.string "first_name"
    t.string "last_name"
    t.boolean "is_billing_address", default: false, null: false
    t.boolean "is_shipping_address", default: false, null: false
    t.integer "number"
    t.string "streetname"
    t.string "complement"
    t.string "zipcode"
    t.string "city"
    t.string "department"
    t.string "region"
    t.string "country"
    t.string "phone"
    t.bigint "customer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_addresses_on_customer_id"
  end

  create_table "admins", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_admins_on_user_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_customers_on_user_id"
  end

  create_table "jwt_denylist", force: :cascade do |t|
    t.string "jti", null: false
    t.datetime "exp", null: false
    t.index ["jti"], name: "index_jwt_denylist_on_jti"
  end

  create_table "macbooks", force: :cascade do |t|
    t.string "model"
    t.string "year"
    t.string "processor"
    t.integer "size"
    t.string "ghz"
    t.integer "ram"
    t.integer "memory"
    t.integer "battery"
    t.string "color"
    t.string "keyboard"
    t.string "serial_number"
    t.boolean "is_camera_working"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.decimal "price", precision: 5, scale: 2
    t.string "aspect"
  end

  create_table "order_macbooks", force: :cascade do |t|
    t.string "model"
    t.string "year"
    t.string "processor"
    t.integer "size"
    t.string "ghz"
    t.integer "ram"
    t.integer "memory"
    t.integer "battery"
    t.string "color"
    t.string "keyboard"
    t.string "serial_number"
    t.boolean "is_camera_working"
    t.string "image_url"
    t.decimal "price", precision: 5, scale: 2
    t.string "aspect"
    t.bigint "order_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["order_id"], name: "index_order_macbooks_on_order_id"
  end

  create_table "orders", force: :cascade do |t|
    t.date "date"
    t.string "status", default: "pending", null: false
    t.string "tracking_number"
    t.string "shipping_address"
    t.string "billing_address"
    t.bigint "customer_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_orders_on_customer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "addresses", "customers"
  add_foreign_key "admins", "users"
  add_foreign_key "customers", "users"
  add_foreign_key "order_macbooks", "orders"
  add_foreign_key "orders", "customers"
end
