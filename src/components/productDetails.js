import React from 'react'
import PropTypes from 'prop-types'
import ButtonCart from 'src/components/buttonCart'

class ProductDetails extends React.PureComponent {
  render () {
    const discountClass = this.props.priceDiscounted ? 'product__price--strike' : 'product__price'
    return (
      <div className="product__details">
        <h1 className="product__title" itemProp="brand">{this.props.title}</h1>
        <p className="product__subtitle" itemProp="description">{this.props.subtitle}</p>
        <div className="product__price" itemScope itemType="http://schema.org/Offer">
          <span className={discountClass} itemProp="price">£{this.props.price}</span>
          { this.props.priceDiscounted && <span className="product__price--discounted" itemProp="price">£{this.props.priceDiscounted}</span> }
        </div>
        <ButtonCart {...this.props} />
      </div>
    )
  }
}

export default ProductDetails
