namespace :comic_next_release_date do
  desc '各単行本の発売日の更新'
  task update_comic_next_release_date: :environment do
    require "#{Rails.root}/lib/comics/update_release_date"
    Comics::UpdateReleaseDate.batch
  end
end
