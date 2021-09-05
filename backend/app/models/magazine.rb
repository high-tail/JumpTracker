class Magazine < ApplicationRecord
  has_many :favorite_magazines, dependent: :destroy
  has_many :users, through: :favorite_magazines
end
