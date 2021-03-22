# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  email: "admin1@yopmail.com",
  password: 'azerty',
  password_confirmation: 'azerty',
)

Admin.create(
  user_id: 1,
)

puts "$" * 50
puts "An admin was created"

5.times do |i|
  User.create(
    email: "prenomnom#{i + 1}@yopmail.com",
    password: 'azerty',
    password_confirmation: 'azerty',
  )
end

puts "$" * 50
puts "5 users created"

5.times do |i|
  first_customer_user_id = 2
  current_index = i + 1
  Customer.create(
    user_id: first_customer_user_id + i,
    first_name: "Prénom#{current_index}",
    last_name: "NOM#{current_index}",
  )
end

puts "$" * 50
puts "5 customers created"
