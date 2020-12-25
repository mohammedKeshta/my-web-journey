import React from 'react'
import { Header, Button } from 'semantic-ui-react'

function ProductAttributes({ description, _id }) {
  return (
    <>
      <Header as='h3'>About this product</Header>
      <p>{description}</p>
      <Button
        icon='trash alternate outline'
        color='red'
        content='Delete Product'
      />
    </>
  )
}

export default ProductAttributes
