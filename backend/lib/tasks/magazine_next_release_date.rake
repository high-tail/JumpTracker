namespace :magazine_next_release_date do
  desc '各雑誌の発売日の更新'
  task update_magazine_next_release_date: :environment do
    require "#{Rails.root}/lib/magazines/jump"
    require "#{Rails.root}/lib/magazines/young_jump"
    require "#{Rails.root}/lib/magazines/jump_sq"
    Magazines::Jump.batch
    Magazines::YoungJump.batch
    Magazines::JumpSq.batch
  end
end
