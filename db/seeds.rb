# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.create({user_name: "calvin", email: "hello@hello.com", password: "password"})
a = Event.create({host: "user", title: "yolo club", location: "location",
               attnd_limit: 1, event_date_time: "04-01-2017"})
b = Attendance.create({user_id: 1, event_id: 1})
