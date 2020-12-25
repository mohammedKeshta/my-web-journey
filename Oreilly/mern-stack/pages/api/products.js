import { connectDB } from '../../utils'
import { Product } from '../../models'

connectDB().catch((error) => console.error(error))

export default async function (req, res) {
  if (req.method === 'GET') {
    try {
      const products = await Product.find()
      res.status(200).json({
        status: 'success',
        data: products,
        message: 'Products Retrieved Successfully',
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
