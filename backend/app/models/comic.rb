class Comic < ApplicationRecord
  has_many :favorite_comics, dependent: :destroy
  has_many :users, through: :favorite_comics

  def favorited_by(user)
    favorite_comics.find { |f| f.user_id == user.id }
  end
end
