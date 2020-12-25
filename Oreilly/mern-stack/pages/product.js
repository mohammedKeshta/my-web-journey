import React from 'react'
import axios from 'axios'

import { CONSTANTS } from '../utils'
import ProductSummary from '../components/Product/ProductSummary'
import ProductAttributes from '../components/Product/ProductAttributes'

function Product({ product }) {
  return (
    <>
      <ProductSummary {...product} />
      <ProductAttributes {...product} />
    </>
  )
}

export async function getServerSideProps({ query: { _id } }) {
  const URL = `${CONSTANTS.BASE_URL}/api/product`
  const payload = { params: { _id } }
  const {
    data: { data: product },
  } = await axios.get(URL, payload)
  return {
    props: { product },
  }
}

export default Product
