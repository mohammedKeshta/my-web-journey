import React from 'react'
import axios from 'axios'

import ProductList from '../components/Index/ProductList'
import { CONSTANTS } from '../utils'

function Home({ products }) {
  return <ProductList products={products} />
}

export async function getServerSideProps() {
  const URL = `${CONSTANTS.BASE_URL}/api/products`
  const {
    data: { data: products },
  } = await axios.get(URL)
  return {
    props: { products },
  }
}

export default Home
