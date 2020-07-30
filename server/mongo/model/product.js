var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema({
  productName: String,
  productDescription: String,
  LongDescription: String,
  productCategory: String,
  productImage: String,
  productPrice: String,
  Inventory: Number
})

module.exports = mongoose.model('Product', ProductSchema)
