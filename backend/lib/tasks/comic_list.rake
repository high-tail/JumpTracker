namespace :comic_list do
  desc '各単行本をDBに登録'
  task insert_comic: :environment do
    require "#{Rails.root}/lib/comics/jump"
    require "#{Rails.root}/lib/comics/jump_sq"
    require "#{Rails.root}/lib/comics/young_jump"

    Comic.destroy_all
    Comics::Jump.batch
    Comics::JumpSq.batch
    Comics::YoungJump.batch
  end
end
