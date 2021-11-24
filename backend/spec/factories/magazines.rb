FactoryBot.define do
  factory :magazine  do
    title { Faker::Book.title }
  end
end
