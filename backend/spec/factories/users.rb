FactoryBot.define do
  factory :user  do
    sequence(:email) { |n| "test#{n}@example.com" }
    password { 'password' }
    confirmed_at { Time.zone.now }
  end
end
