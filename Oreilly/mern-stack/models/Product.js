import mongoose from 'mongoose'
import shortid from 'shortid'

const { Schema, model } = mongoose

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    unique: true,
    default: shortid.generate(),
  },
  mediaUrl: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Product || model('Product', productSchema)
