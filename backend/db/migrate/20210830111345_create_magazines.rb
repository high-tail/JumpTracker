class CreateMagazines < ActiveRecord::Migration[6.1]
  def change
    create_table :magazines do |t|
      t.string :title
      t.string :url
      t.date :next_release_date

      t.timestamps
    end
  end
end
