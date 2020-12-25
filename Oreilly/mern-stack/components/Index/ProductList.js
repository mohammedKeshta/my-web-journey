import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

function ProductList({ products }) {
  const mappedProducts = products.map((product) => ({
    color: 'teal',
    key: product._id,
    header: product.name,
    meta: `${product.sku}`,
    description: product.description.substring(0, 50),
    image: product.mediaUrl,
    extra: (
      <>
        <Icon name='money' />
        {product.price}
      </>
    ),
    href: `/product?_id=${product._id}`,
  }))
  return (
    <Card.Group stackable itemsPerRow='3' centered items={mappedProducts} />
  )
}

export default ProductList
