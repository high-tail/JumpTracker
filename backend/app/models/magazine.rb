class Magazine < ApplicationRecord
  has_many :favorite_magazines
  has_many :users, through: :favorite_magazines
end