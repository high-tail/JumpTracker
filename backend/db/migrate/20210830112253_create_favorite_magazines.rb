class CreateFavoriteMagazines < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_magazines do |t|
      t.references :user
      t.references :magazine

      t.timestamps
    end
  end
end
