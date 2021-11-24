FactoryBot.define do
  factory :comic  do
    title { Faker::Book.title }
  end
end
