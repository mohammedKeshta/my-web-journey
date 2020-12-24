import products from '../../static/products.json'
import { connectDB } from '../../utils'

connectDB().catch((error) => console.error(error))

export default function (req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      status: 'success',
      data: products,
      message: 'Products Retrieved Successfully',
    })
  }
}
