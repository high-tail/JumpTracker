class CreateFavoriteComics < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_comics do |t|
      t.references :user
      t.references :comic

      t.timestamps
    end
  end
end
