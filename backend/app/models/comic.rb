class Comic < ApplicationRecord
  has_many :favorite_comics
  has_many :users, through: :favorite_comics
end
