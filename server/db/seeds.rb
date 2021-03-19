# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do |i|
  User.create(
    email: "tst#{i + 1}@tst.tst",
    password: 'azerty',
    password_confirmation: 'azerty',
  )
end

puts "$" * 50
puts "5 users created"

5.times do |i|
  current_id = i + 1
  Customer.create(
    user_id: current_id,
    first_name: "Prénom#{current_id}",
    last_name: "NOM#{current_id}",
  )
end

puts "$" * 50
puts "5 customers created"
