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

10.times do |i|
  User.create(
    email: "prenomnom#{i + 1}@yopmail.com",
    password: 'azerty',
    password_confirmation: 'azerty',
  )
end

puts "$" * 50
puts "10 users created"

10.times do |i|
  first_customer_user_id = 2
  current_index = i + 1
  Customer.create(
    user_id: first_customer_user_id + i,
    first_name: "Prénom#{current_index}",
    last_name: "NOM#{current_index}",
  )
end

puts "$" * 50
puts "10 customers created"

Customer.all.count.times do |i|
  Address.create(
		name: ["Adresse 1", "maison", "bureau"].sample,
		first_name: ["Marie", "Clémentine", "Maxime", "Coline", "Benjamin"].sample,
		last_name: ["WONG", "FOUQUE", "SERVAL", "BRAULT", "DECHAUX"].sample,
		is_billing_address: [true, false].sample,
		is_shipping_address: [true, false].sample,
		number: i + 1,
		streetname: ["place Jeanne d'Arc", "Rue de Belleville", "Avenue des Champs", "Avenue Fosh"].sample,
		complement: "",
		zipcode: ["75013", "75019", "78170", "33000"].sample,
		city: ["Paris", "Cachan", "La Celle Saint Cloud", "Toulouse"].sample,
		department: ["Paris", "Yvelines" "Lot et Garonne"].sample,
		region: ["Ile-de-France", "Occitanie"].sample,
		country: "France",
		phone: "6543210#{i + 1}",
		customer_id: i + 1,
  )
end

puts "$" * 50
puts "10 addresses created"

10.times do |i|
  Macbook.create(
    model: ["Macbook Pro", "Macbook Air"].sample,
    year: ["Mi 2013", "Mi 2014", "Début 2015", "Fin 2016", "Fin 2017", "Début 2018"].sample,
    processor: ["i3", "i5", "i7"].sample,
    size: [11, 12, 13, 15, 16].sample,
    ghz: ["1.1", "1.2", "2.7", "3.1", "1.6"].sample,
    ram: [8, 16, 32, 64].sample,
    memory: [256, 128, 512].sample,
    battery: [154, 232, 238, 480].sample,
    color: ["gris", "noir", "or", "gris sidéral", "rose"].sample,
    keyboard: ["AZERTY", "QWERTY"].sample,
    serial_number: "CO45TEY#{i + 1}",
    is_camera_working: [true, false].sample,
    image_url: ["https://images.pexels.com/photos/4929241/pexels-photo-4929241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260","https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/3975680/pexels-photo-3975680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4050430/pexels-photo-4050430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4050334/pexels-photo-4050334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4297820/pexels-photo-4297820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"].sample,
    price: [470, 510, 575, 680, 435].sample,
    aspect: ["Correct", "Bon", "Très bon", "Comme neuf"].sample,
  )
end

puts "$" * 50
puts "10 macbooks created"

10.times do |i|
  Order.create(
    status: ["sent", "payed", "pending"].sample,
		customer_id: i + 1,
    shipping_address: ["29 rue de charonne 75011 Paris", "30 avenue de verdun 64200 Biarritz", "3 Place Jeanne d'Arc 33000 Toulouse", "4 Avenue des champs 78170 La Celle Saint Cloud"].sample,
    billing_address: ["78 rue de charonne 75011 Paris", "54 avenue de verdun 64200 Biarritz", "10 Place Jeanne d'Arc 33000 Toulouse", "98 Avenue des champs 78170 La Celle Saint Cloud"].sample,
    date: "2021-12-0#{i + 1}",
    tracking_number: "",
  )
end

puts "$" * 50
puts "10 orders created"
