class InsertInitialMagazines < ActiveRecord::Migration[6.1]
  def insert_data
    [
      { title: '週刊少年ジャンプ', url: 'https://www.shonenjump.com/j/', next_release_date: Time.zone.today },
      { title: 'ジャンプSQ', url: 'https://jumpsq.shueisha.co.jp/', next_release_date: Time.zone.today },
      { title: '週刊ヤングジャンプ', url: 'https://youngjump.jp/magazine/', next_release_date: Time.zone.today }
    ]
  end

  def up
    insert_data.each do |d|
      Magazine.create(d)
    end
  end

  def down
    insert_data.each do |d|
      Magazine.find_by(title: d[:title]).delete
    end
  end
end
