class FavoriteMagazine < ApplicationRecord
  belongs_to :user
  belongs_to :magazine

  validates_uniqueness_of :magazine_id, scope: :user_id
end
