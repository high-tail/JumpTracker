class Magazine < ApplicationRecord
  has_many :favorite_magazines, dependent: :destroy
  has_many :users, through: :favorite_magazines

  def favorited_by(user)
    favorite_magazines.find { |f| f.user_id == user.id }
  end
end
