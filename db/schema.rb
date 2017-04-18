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

ActiveRecord::Schema.define(version: 20170418012900) do

  create_table "catalogue_forms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "icon"
    t.string "hint_title"
    t.string "hint_content"
    t.string "hint_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "curriculum_vitaes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "language"
    t.string "color"
    t.string "font"
    t.integer "size"
    t.float "line_spacing", limit: 24
    t.bigint "user_id"
    t.bigint "template_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["template_id", "created_at"], name: "index_curriculum_vitaes_on_template_id_and_created_at"
    t.index ["template_id"], name: "index_curriculum_vitaes_on_template_id"
    t.index ["user_id", "created_at"], name: "index_curriculum_vitaes_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_curriculum_vitaes_on_user_id"
  end

  create_table "forms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "position"
    t.bigint "curriculum_vitae_id"
    t.bigint "catalogue_form_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["catalogue_form_id", "created_at"], name: "index_forms_on_catalogue_form_id_and_created_at"
    t.index ["catalogue_form_id"], name: "index_forms_on_catalogue_form_id"
    t.index ["curriculum_vitae_id", "created_at"], name: "index_forms_on_curriculum_vitae_id_and_created_at"
    t.index ["curriculum_vitae_id"], name: "index_forms_on_curriculum_vitae_id"
  end

  create_table "sub_forms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "title"
    t.string "content"
    t.string "time"
    t.bigint "form_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["form_id", "created_at"], name: "index_sub_forms_on_form_id_and_created_at"
    t.index ["form_id"], name: "index_sub_forms_on_form_id"
  end

  create_table "tem_forms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "catalogue_form_id"
    t.bigint "template_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["catalogue_form_id"], name: "index_tem_forms_on_catalogue_form_id"
    t.index ["template_id"], name: "index_tem_forms_on_template_id"
  end

  create_table "templates", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name"
    t.string "content"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tpclass", limit: 10
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "phone_number"
    t.string "address"
    t.string "major"
    t.integer "role", default: 1, null: false
    t.string "avatar"
    t.string "website"
    t.string "sex"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "oauth_token"
    t.datetime "oauth_expires_at"
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "curriculum_vitaes", "templates"
  add_foreign_key "curriculum_vitaes", "users"
  add_foreign_key "forms", "catalogue_forms"
  add_foreign_key "forms", "curriculum_vitaes"
  add_foreign_key "sub_forms", "forms"
  add_foreign_key "tem_forms", "catalogue_forms"
  add_foreign_key "tem_forms", "templates"
end
