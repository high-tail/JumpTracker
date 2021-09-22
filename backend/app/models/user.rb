# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  include DeviseTokenAuth::Concerns::User

  has_many :favorite_comics, dependent: :destroy
  has_many :comics, through: :favorite_comics
  has_many :favorite_magazines, dependent: :destroy
  has_many :magazines, through: :favorite_magazines
end
