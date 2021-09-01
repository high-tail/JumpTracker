class CreateComics < ActiveRecord::Migration[6.1]
  def change
    create_table :comics do |t|
      t.string :title
      t.string :url
      t.date :next_release_date
      t.references :magazine
      t.integer :volume

      t.timestamps
    end
  end
end
