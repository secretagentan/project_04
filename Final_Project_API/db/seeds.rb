# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Place.destroy_all

Place.create(img_url: 'http://i.imgur.com/aB5kI5J.jpg', lat: '34.045719', lng: '-118.2363552', created_by: 'secretagentan').save
Place.create(img_url: 'http://i.imgur.com/p7ocU8O.jpg', lat: '34.046202', lng: '-118.2379302', created_by: 'agentxhippo').save
Place.create(img_url: 'http://i.imgur.com/K2Wboi8.jpg', lat: '34.045626', lng: '-118.2371662', created_by: 'antheman').save

# rails server -p 8080
