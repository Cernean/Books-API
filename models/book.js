const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: Number,
  quantity: Number,
  imageURL: String
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
