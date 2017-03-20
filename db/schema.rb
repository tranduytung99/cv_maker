ActiveRecord::Schema.define version: 20170313024445 do

  create_table "certifications", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "certification_name"
    t.string "institution"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_certifications_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_certifications_on_user_id"
  end

  create_table "educations", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "course_name"
    t.string "institution"
    t.date "start_date"
    t.date "end_date"
    t.text "detail"
    t.float "gpa", limit: 24
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_educations_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_educations_on_user_id"
  end

  create_table "interests", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "description"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_interests_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_interests_on_user_id"
  end

  create_table "optionals", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "detail"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_optionals_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_optionals_on_user_id"
  end

  create_table "portfolios", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "project_name"
    t.date "start_date"
    t.date "end_date"
    t.text "description"
    t.string "responsibility"
    t.string "develop_enviroment"
    t.integer "team_size"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_portfolios_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_portfolios_on_user_id"
  end

  create_table "skills", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "skill"
    t.float "level", limit: 24
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_skills_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_skills_on_user_id"
  end

  create_table "social_activities", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.text "detail"
    t.date "start_date"
    t.date "end_date"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_social_activities_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_social_activities_on_user_id"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "date_of_birth"
    t.string "phone_number"
    t.string "address"
    t.text "objective"
    t.string "major"
    t.boolean "admin"
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
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "work_experiences", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "job_title"
    t.string "company_name"
    t.date "start_date"
    t.date "end_date"
    t.text "work_detail"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "created_at"], name: "index_work_experiences_on_user_id_and_created_at"
    t.index ["user_id"], name: "index_work_experiences_on_user_id"
  end

  add_foreign_key "certifications", "users"
  add_foreign_key "educations", "users"
  add_foreign_key "interests", "users"
  add_foreign_key "optionals", "users"
  add_foreign_key "portfolios", "users"
  add_foreign_key "skills", "users"
  add_foreign_key "social_activities", "users"
  add_foreign_key "work_experiences", "users"
end
