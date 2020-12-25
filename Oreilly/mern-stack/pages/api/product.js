import { Product } from '../../models'
import { connectDB } from '../../utils'

connectDB().catch((error) => console.error(error))

export default async function (req, res) {
  if (req.method === 'GET') {
    try {
      const { _id } = req.query
      const product = await Product.findOne({ _id })
      res.status(200).json({
        status: 'success',
        data: product,
        message: 'Product Retrieved Successfully',
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Server error. Please try again.',
        error: err.message,
      })
    }
  }
}
