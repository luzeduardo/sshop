import React from 'react'
import PropTypes from 'prop-types'
import ProductImage from 'src/components/productImage'
import ProductDetails from 'src/components/productDetails'

class Product extends React.PureComponent {
  render () {
    return (
      <li className="product-list__item">
        <article className="product" itemScope itemType="http://schema.org/Product">
          <ProductImage {...this.props.product} />
          <ProductDetails {...this.props.product}/>
        </article>
      </li>
    )
  }
}

export default Product
