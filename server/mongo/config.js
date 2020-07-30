const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mdev1005admin:Abcd1234$@mdev1005shopping.zzjfx.mongodb.net/vue-shop?retryWrites=true&w=majority', {
  useNewUrlParser: true
}) // connect to our database

// db.on('error', console.error.bind(console, 'connection error:'));
const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

module.exports = mongoose
