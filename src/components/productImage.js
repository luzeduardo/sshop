import React from 'react'
import img01 from 'public/images/img01.png'
import ButtonWish from 'src/components/buttonWish'

class ProductImage extends React.PureComponent {
  render () {
    return (
      <figure className="product__image-wrapper">
        <img className="product__image" src={img01} alt="Product" itemProp="image"/>
        <ButtonWish {...this.props}/>
      </figure>
    )
  }
}

export default ProductImage
